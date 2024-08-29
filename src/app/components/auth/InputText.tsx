import { InputTextProps } from "@/app/types/auth.types";
import React from "react";
import { useFormContext } from "react-hook-form";

const InputText = ({ type, placeholder, fieldName }: InputTextProps) => {
  const { register } = useFormContext();

  return (
    <input type={type} placeholder={placeholder} {...register(fieldName)} />
  );
};

export default InputText;
