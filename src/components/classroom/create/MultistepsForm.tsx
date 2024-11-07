"use client"
import { useState } from 'react'
import ClassroomInfoForm from './ClassroomInfoForm'
import SheetInfoForm from './SheetInfoForm';
import Summary from './Summary';
import { ClassroomCreate } from '@/types/create';
import { useModal } from '@/context/ClassroomCreateModalProvider';
import { FaTimes } from 'react-icons/fa';


function MultistepsForm() {
    const {isModalOpen, closeModal} = useModal();
    const [step, setStep] = useState<number>(0);
    const [formData, setFormData] = useState<ClassroomCreate>({name:'', description:'', sheet_id:''});

    const nextStep = () => {
        setStep(step + 1);
        console.log(step);
    }

    const prevStep = () => {
        setStep(step - 1);
    }
    
    const steps = [
        {title: "Classroom Info", component: <ClassroomInfoForm setData={setFormData}  nextStep={nextStep} formData={formData} />},
        {title: "Sheet Info", component: <SheetInfoForm setData={setFormData} nextStep={nextStep} prevStep={prevStep} formData={formData} />},
        {title: "Summary", component: <Summary data={formData} prevStep={prevStep} />}
    ]
  return (
    <div className={`${ isModalOpen ? 'flex': 'hidden'} fixed inset-0 bg-white justify-center items-center z-50`}>
        <div className='relative w-8/12 max-w-[700px]  p-8'>
        <FaTimes className="absolute top-0 left-0 cursor-pointer text-lg" onClick={closeModal}/>
        {steps[step].component }
        </div>
    </div>
  )
}

export default MultistepsForm