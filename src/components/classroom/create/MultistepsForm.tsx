"use client"
import { useState } from 'react'
import ClassroomInfoForm from './ClassroomInfoForm'
import SheetInfoForm from './SheetInfoForm';
import Summary from './Summary';
import { ClassroomCreate } from '@/types/create';


function MultistepsForm() {
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
    <>
        {steps[step].component }
    </>
  )
}

export default MultistepsForm