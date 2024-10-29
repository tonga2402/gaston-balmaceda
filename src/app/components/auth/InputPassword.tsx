import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type InputPasswordProps = {
  name: string;
  type: string;
};
const InputPassword = ({ name,type}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="password_container">
      <input
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={"Contraseña"}
        required
      />
      <div className="password_icon" onClick={handleShowPassword}>
        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
      </div>
    </div>
  );
};

export default InputPassword;
