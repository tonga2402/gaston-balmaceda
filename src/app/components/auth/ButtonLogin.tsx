import React from "react";
import { useFormStatus } from "react-dom";
import { BeatLoader } from "react-spinners";

const ButtonLogin = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="button_responsive">
      {pending ? <BeatLoader color="black" size={10} /> : "Continuar"}
    </button>
  );
};

export default ButtonLogin;
