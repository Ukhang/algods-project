import React, { useState } from "react";

interface ArrayInputProps {
  array: number[];
  onArrayChange: (newArray: number[]) => void;
}

export const ArrayInput: React.FC<ArrayInputProps> = ({
  array,
  onArrayChange,
}) => {
  const [inputArray, setInputArray] = useState(array.join(", "));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputArray(e.target.value);
  };

  const handleBlur = () => {
    const newArray = inputArray
      .split(",")
      .map((item) => parseInt(item.trim(), 10));
    onArrayChange(newArray);
  };

  return (
    <div>
      <label htmlFor="array">Array Values:</label>
      <input
        type="text"
        id="array"
        value={inputArray}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
