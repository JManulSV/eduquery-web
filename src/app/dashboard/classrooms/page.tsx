"use client";
import { apiClient } from "@/services/axiosInstance";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import NoClassroomMessage from "./components/NoClassroomMessage";

function ClassroomPage() {
  const { data: session, status } = useSession();
  const [empty, setEmpty] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [classrooms, setClassrooms] = useState<[]|null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
      const token = session?.user?.token;
      const getClassrooms = async () => {
        try {
          const response = await apiClient.get("/classrooms", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 204) {
            setEmpty(true);
          } else if (response.status === 200) {
            setClassrooms(response.data);
            setEmpty(false);
          }

          setLoading(false);
        } catch (err) {
          setError('Error al cargar los salones.');
          setLoading(false);
        }
      };

      getClassrooms();
    } else {
      setLoading(false);
    }
  }, [session, status]);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {empty ? (
        <NoClassroomMessage />
      ) : classrooms != null ? (
        <pre>{JSON.stringify(classrooms, null, 2)}</pre>
      ) : ''}
    </div>
  );
}

export default ClassroomPage;
