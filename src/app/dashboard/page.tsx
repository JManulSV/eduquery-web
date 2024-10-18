'use client'
import { apiClient } from '@/services/axiosInstance'
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'

function page() {
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  useEffect(() => {
    const getClassrooms = async() => {
      const response = await apiClient.get("/classrooms", {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     });
     console.log(response);
    }
    getClassrooms();
  }, [session])
  
  return (
    <div>Dashboard Page</div>
  )
}

export default page