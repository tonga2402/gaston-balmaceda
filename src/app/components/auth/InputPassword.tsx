import React, { useState } from "react";
import InputText from "./InputText";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { InputPasswordPropsType } from "@/app/types/auth.types";

const InputPassword = (fieldName: InputPasswordPropsType) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="password_container">
      <InputText
        type={showPassword ? "text" : "password"}
        fieldName={fieldName.fieldName}
        placeholder={"Contraseña"}
      />
      <div className="password_icon" onClick={handleShowPassword}>
        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
      </div>
    </div>
  );
};

export default InputPassword;
