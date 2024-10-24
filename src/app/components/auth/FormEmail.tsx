"use client";

import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { useFormStatus } from "react-dom";

const FormEmail = () => {
  const router = useRouter();
  const { pending } = useFormStatus();

  const goToLink = (href: string) => {
    router.push(href);
  };

  const handleEmail = (formData: FormData) => {
    const emailData = formData.get("email");
    localStorage.setItem("email", JSON.stringify(emailData));
    goToLink("/login/password");
  };

  return (
    <div>
      <form action={handleEmail}>
        <div className="form_container">
          <h2>¡Hola! Ingresá tu e-mail</h2>
          <input type="email" name="email" placeholder="Correo electrónico" required/>
          <button className="button_responsive">
            {pending ? <BeatLoader color="black" size={10} /> : "Continuar"}
          </button>
          <button
            type="button"
            className="button_input_grey"
            onClick={() => goToLink("/register")}
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEmail;
