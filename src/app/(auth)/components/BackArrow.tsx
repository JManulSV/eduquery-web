import Link from 'next/link'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

function BackArrow() {
  return (
    <Link href={'/home'} className='flex items-center gap-1 mb-9 pt-6 md:pt-0'>
      <FaAngleLeft  className='text-lg'/>
      <p className='text-sm hover:underline'>Regresar al inicio</p>
    </Link>
  )
}

export default BackArrow