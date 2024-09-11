"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions/registerUser";
import ButtonLogin from "./ButtonLogin";
import InputRegister from "./InputRegister";

const FormRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div>
      <form
        action={async (formData) => {
          const res = await registerUser(formData);
          if (res.ok) {
            router.push('register/registerOk');
          }
          setError(res?.message);
        }}
      >
        <div className="register_form_container">
          <h2>Crear cuenta</h2>
          <div className="input_container">
            <div className="grid_container">
              <div className="flex_container">
                <div className="InputText">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Nombre*"
                    required
                  />
                </div>
                <div className="InputText">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido*"
                    required
                  />
                </div>
              </div>
              <div className="flex_container">
                <div className="InputText">
                  <input type="number" name="dni" placeholder="DNI*" required />
                </div>
                <div className="InputText">
                  <input
                    type="text"
                    name="email"
                    placeholder="Correo electrónico*"
                    required
                  />
                </div>
              </div>
            </div>
            <h3>
              Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
              carácter especial, una mayúscula y un número)
            </h3>
            <div className="grid_container">
              <div className="flex_container">
                <div className="InputText">
                  <InputRegister name={"password"} type={"password"} />
                </div>
                <div className="InputText">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña*"
                    required
                  />
                </div>
              </div>
              <div className="flex_container">
                <div className="InputText">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono*"
                    required
                  />
                </div>
                <div className="InputText">
                  <ButtonLogin />
                  {error && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {error}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
