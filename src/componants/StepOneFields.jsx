import React from "react";

const StepOneFields = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Project Name</label>
        <input
          {...register("projectName", { required: "Project Name is required" })}
          type="text"
          className="w-full p-2 border rounded"
        />
        {errors.projectName && (
          <span className="text-red-500 text-sm">
            {errors.projectName.message}
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1">Project Description</label>
        <textarea
          {...register("projectDescription", {
            required: "Project Description is required",
          })}
          className="w-full p-2 border rounded"
        />
        {errors.projectDescription && (
          <span className="text-red-500 text-sm">
            {errors.projectDescription.message}
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1">Client</label>
        <input
          {...register("client", { required: "Client is required" })}
          type="text"
          className="w-full p-2 border rounded"
        />
        {errors.client && (
          <span className="text-red-500 text-sm">{errors.client.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-1">Contractor</label>
        <input
          {...register("contractor", { required: "Contractor is required" })}
          type="text"
          className="w-full p-2 border rounded"
        />
        {errors.contractor && (
          <span className="text-red-500 text-sm">
            {errors.contractor.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default StepOneFields;
