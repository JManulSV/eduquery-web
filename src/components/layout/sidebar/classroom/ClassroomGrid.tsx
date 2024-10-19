import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import ClassroomCard from './ClassroomCard'; // Ajusta la ruta según sea necesario
import { getClassroomsLocalStorage } from '@/services/api/classroom';
import { ClassroomCreate } from '@/types/create';

export default function ClassroomGrid() {
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const getClassrooms = async () => {
      if (token) {
        try {
          const fetchedClassrooms = await getClassroomsLocalStorage(token);
          setClassrooms(fetchedClassrooms);
        } catch (error) {
          console.error("Error fetching classrooms:", error);
        }
      }
    };

    getClassrooms();
  }, [session, token]);

  return (
    <div className='pb-6 border-b'>
      {classrooms.length === 0 ? (
        <p>No hay salones disponibles.</p> // Mensaje cuando no hay salones
      ) : (
        classrooms.map((item:ClassroomCreate) => (
          <ClassroomCard classroom={item} key={item.id} /> // Usar un ID único como key
        ))
      )}    
    </div>
  );
}
