import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="inline-block w-full">
      <label className="label">{label}</label>
      <input
        className="input input-bordered w-full"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};
