import MultistepsForm from '../components/create/MultistepsForm'

function page() {
  return (
    <div className='bg-white px-4 py-8 w-full h-full flex justify-center'>
        <div className='w-8/12 '>
            <h2 className='text-2xl font-bold'>Crear un nuevo Salon</h2>
            <MultistepsForm />
        </div>
    </div>
  )
}

export default page