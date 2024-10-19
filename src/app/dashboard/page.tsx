'use client'
import { getClassroomsLocalStorage } from '@/services/api/classroom';
import { apiClient } from '@/services/axiosInstance'
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'

function page() {
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  useEffect(() => {
    getClassroomsLocalStorage(token);
  }, [session]); 
  
  
  return (
    <div>Dashboard Page</div>
  )
}

export default page