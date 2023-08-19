import React, { useState } from "react";
import Papa from "papaparse";

const StepTwoFields = ({ register, errors }) => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvContent = e.target.result;
        Papa.parse(csvContent, {
          complete: handleCsvParsed,
        });
      };
      reader.readAsText(file);
      setFileUploaded(true);
    }
  };

  const handleCsvParsed = (result) => {
    const parsedCsvData = result.data;
    const dataObjects = parsedCsvData.map((row) => ({
      KP: parseInt(row[0]),
      X: parseFloat(row[1]),
      Y: parseFloat(row[2]),
      Z: parseFloat(row[3]),
    }));
    updateMinMaxValues(dataObjects);
  };

  const updateMinMaxValues = (dataObjects) => {
    const xValues = dataObjects
      .map((row) => row.X)
      .filter((value) => !isNaN(value));
    const yValues = dataObjects
      .map((row) => row.Y)
      .filter((value) => !isNaN(value));
    const zValues = dataObjects
      .map((row) => row.Z)
      .filter((value) => !isNaN(value));

    const maxX = Math.max(...xValues);
    const minX = Math.min(...xValues);
    const maxY = Math.max(...yValues);
    const minY = Math.min(...yValues);
    const maxZ = Math.max(...zValues);
    const minZ = Math.min(...zValues);

    setFormData({
      max_X: maxX,
      min_X: minX,
      max_Y: maxY,
      min_Y: minY,
      max_Z: maxZ,
      min_Z: minZ,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Project Name</label>
        <input
          type="text"
          readOnly
          {...register("projectName", { required: "Project Name is required" })}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Project Description</label>
        <textarea
          readOnly
          {...register("projectDescription", {
            required: "Project Description is required",
          })}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Client</label>
        <input
          type="text"
          readOnly
          {...register("client", { required: "Client is required" })}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Contractor</label>
        <input
          type="text"
          readOnly
          {...register("contractor", { required: "Contractor is required" })}
          className="w-full p-2 border rounded"
        />
      </div>

      {fileUploaded ? (
        <>
          {" "}
          <div>
            <label className="block mb-1">max_X</label>
            <input
              type="number"
              readOnly
              defaultValue={formData?.max_X}
              {...register("max_X")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">min_X</label>
            <input
              type="number"
              readOnly
              defaultValue={formData?.min_X}
              {...register("min_X")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">max_Y</label>
            <input
              type="number"
              readOnly
              defaultValue={formData?.max_Y}
              {...register("max_Y")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">min_Y</label>
            <input
              type="number"
              readOnly
              defaultValue={formData?.min_Y}
              {...register("min_Y")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">max_Z</label>
            <input
              type="number"
              readOnly
              defaultValue={formData?.max_Z}
              {...register("max_Z")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">min_Z</label>
            <input
              type="number"
              readOnly
              defaultValue={formData?.min_Z}
              {...register("min_Z")}
              className="w-full p-2 border rounded"
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <label className="block mb-1">max_X</label>
            <input
              type="number"
              {...register("max_X", { required: "max_X is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.max_X && (
              <span className="text-red-500 text-sm">
                {errors.max_X.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1">min_X</label>
            <input
              type="number"
              {...register("min_X", { required: "min_X is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.min_X && (
              <span className="text-red-500 text-sm">
                {errors.min_X.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1">max_Y</label>
            <input
              type="number"
              {...register("max_Y", { required: "max_Y is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.max_Y && (
              <span className="text-red-500 text-sm">
                {errors.max_Y.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1">min_Y</label>
            <input
              type="number"
              {...register("min_Y", { required: "min_Y is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.min_Y && (
              <span className="text-red-500 text-sm">
                {errors.min_Y.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1">max_Z</label>
            <input
              type="number"
              {...register("max_Z", { required: "max_Z is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.max_Z && (
              <span className="text-red-500 text-sm">
                {errors.max_Z.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1">min_Z</label>
            <input
              type="number"
              {...register("min_Z", { required: "min_Z is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.min_Z && (
              <span className="text-red-500 text-sm">
                {errors.min_Z.message}
              </span>
            )}
          </div>
        </>
      )}

      <div>
        <label className="block mb-1">CSV File Upload</label>
        <input onChange={handleFileUpload} type="file" accept=".csv" />
      </div>
    </div>
  );
};

export default StepTwoFields;
