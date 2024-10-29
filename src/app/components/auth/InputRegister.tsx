import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type InputPasswordProps = {
  name: string;
  type: string;
};
const InputRegister = ({ name,type}: InputPasswordProps) => {
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
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$"
        required
      />
      <div className="password_icon" onClick={handleShowPassword}>
        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
      </div>
    </div>
  );
};

export default InputRegister;