import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "./componants/FormContext";
import StepOneFields from "./componants/StepOneFields";
import StepTwoFields from "./componants/StepTwoFields";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const { formData, updateFormData } = useFormContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleNext = (data) => {
    setStep(step + 1);
    updateFormData({ ...data });
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleFinish = (data) => {
    updateFormData({ ...formData, ...data });
    console.log(formData);
    navigate("/results");
  };

  return (
    <form
      onSubmit={handleSubmit(step === 1 ? handleNext : handleFinish)}
      className="space-y-4 w-[90%] md:w-[50%] mx-auto flex justify-center flex-col min-h-screen"
    >
      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold">Step 1: Project Information</h2>

          <StepOneFields register={register} errors={errors} />
          <div className="flex justify-end">
            <button type="submit" className="primary-button">
              Next
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div className="my-10 lg:my-20">
          <h2 className="text-xl font-semibold">
            Step 2: Additional Information
          </h2>

          <StepTwoFields register={register} errors={errors} />

          <div className="flex justify-between">
            <button onClick={handlePrevious} className="secondary-button">
              Previous
            </button>
            <button type="submit" className="primary-button">
              Finish
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
