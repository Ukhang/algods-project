import React, { useState } from "react";

interface TargetInputProps {
  defaultTarget: number;
  onTargetChange: (value: number) => void;
  array: number[];
}

export const TargetInput: React.FC<TargetInputProps> = ({
  defaultTarget,
  onTargetChange,
  array,
}) => {
  const [target, setTarget] = useState(defaultTarget.toString());

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTarget(e.target.value);
    onTargetChange(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor="target">Target Value:</label>
      <select id="target" value={target} onChange={handleSelectChange}>
        {array?.map((value) => (
          <option key={value} value={value.toString()}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
