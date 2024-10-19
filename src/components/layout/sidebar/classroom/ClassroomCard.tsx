import { ClassroomCreate } from '@/types/create';
import Avvvatars from 'avvvatars-react'
import Link from 'next/link';
import React from 'react'

interface Props{
    classroom: ClassroomCreate;
}

export default function ClassroomCard({classroom}:Props) {
  return (
    <Link href={`/dashboard/classroom/${classroom.id}`} className='w-full border border-white hover:border-gray-100 hover:bg-gray-100 py-3 cursor-pointer  flex gap-2 items-center'>
        <Avvvatars value={classroom.name} style='shape'/>
        <span>{classroom.name}</span>
    </Link>
    
  )
}
