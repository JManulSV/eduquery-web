"use client"
import { useState } from 'react'
import ClassroomInfoForm from './ClassroomInfoForm'
import SheetInfoForm from './SheetInfoForm';


function MultistepsForm() {
    const [step, setStep] = useState<number>(0);
    const [formData, setFormData] = useState({});

    const nextStep = () => {
        setStep(step + 1);
    }
    
    const steps = [
        {title: "Classroom Info", component: <ClassroomInfoForm setData={setFormData}  nextStep={nextStep} formData={formData} />},
        {title: "Sheet Info", component: <SheetInfoForm />}
    ]
  return (
    <>
        {steps[step].component }
    </>
  )
}

export default MultistepsForm