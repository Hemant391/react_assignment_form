import React, { useState, useEffect } from 'react';
import PI from './Pi';
import Address from './Address';
import Submit from './Submit';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [warning,setWarning]=useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  function handleNext  ()  {
      console.log("Hello")
      if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1){
        setCurrentStep(currentStep - 1);
    }
        
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateStep = () => {
   if(currentStep===1){
    if(!formData.name &&!formData.email &&!formData.phone){
        setWarning('Please fill all the detail!')
        return false
    }
    if(!formData.email.includes('@')){
        setWarning('Please fill email correctly!')
        return false;
    }
}else if(currentStep===2){
    if(!formData.address1 &&!formData.city &&!formData.state &&!formData.zip){
        setWarning('Please fill all the detail!')
        return false
    }
   }
   setWarning('')
    return true;
  };

  return (
    <div className="container mx-auto p-4  max-w-96 bg-white">
      <div className="tabs mb-4 bg-black text-white flex justify-evenly text-xl">
        <button  className={` ${currentStep === 1 && ' text-3xl text-yellow-300'}`}>P.I</button>
        <button  className={` ${currentStep === 2 && 'text-3xl text-yellow-300' }`}>Adress</button>
        <button  className={` ${currentStep === 3 && 'text-3xl text-yellow-300'}`}>Review</button>
      </div>

      <form>
        {currentStep === 1 && <PI formData={formData} handleChange={handleChange} />}
        {currentStep === 2 && <Address formData={formData} handleChange={handleChange} />}
        {currentStep === 3 && <Submit formData={formData} />}
        {warning.length>0 &&(<p className='text-red-500 text-center mt-3'>{warning}</p>)}
        <div className="flex justify-center mt-4">
          <button type="button" disabled={currentStep === 1} onClick={handleBack} 
           className={`btn mx-8 p-1 border rounded px-8 bg-slate-600 text-white ${currentStep !== 1 &&"hover"}`}>Back</button>
          {currentStep < 3 && (
            <button type="button" onClick={handleNext}  className="btn mx-8  border rounded px-8 bg-slate-600 text-white hover">Next</button>
          )}
          {currentStep === 3 && (
            <button type="submit"  className="btn mx-8 p-1 border rounded px-8 bg-cyan-400 text-white hover">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
