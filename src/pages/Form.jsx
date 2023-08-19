import React, { useState } from "react";
import StepOneFields from "../componants/StepOneFields";
import StepTwoFields from "../componants/StepTwoFields";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleNext = (data) => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    navigate("/results");
  };

  return (
    <form
      onSubmit={handleSubmit(step === 1 ? handleNext : onSubmit)}
      className="space-y-4 w-[90%] md:w-[50%] mx-auto my-10 lg:my-20"
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
        <>
          <h2 className="text-xl font-semibold">
            Step 2: Additional Information
          </h2>

          <StepTwoFields register={register} errors={errors} />

          <div className="flex justify-between">
            <button onClick={handlePrevious} className="primary-button">
              Previous
            </button>
            <button type="submit" className="primary-button">
              Finish
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
