"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "./InputText";
import formRegisterSchema from "@/app/schemes/formRegister.scheme";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import InputPassword from "./InputPassword";
import RegisterOk from "../landingPage/RegisterOk";
import { FormData } from "@/app/types/auth.types";

const FormRegister = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [registerOk, setRegisterOk] = useState<boolean>(false);
  const router = useRouter();

  const methods = useForm<FormData>({
    resolver: yupResolver(formRegisterSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormData) => {
    delete (data as { confirmPassword?: string }).confirmPassword;
    const res = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const user = await res.json();

    if (!user.ok) {
      setServerError("Verificar datos ingresados");
    }
    setServerError(null);
    setRegisterOk(true);
    router.push("/login");
    router.refresh();
    return user;
  };

  return (
    <FormProvider {...methods}>
      {!registerOk ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register_form_container">
            <h2>Crear cuenta</h2>

            <div className="input_container">
              <div className="grid_container">
                <div className="flex_container">
                  <div className="InputText">
                    <InputText
                      type="text"
                      fieldName={"firstname"}
                      placeholder={"Nombre*"}
                    />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.firstname?.message}
                      </p>
                    )}
                  </div>
                  <div className="InputText">
                    <InputText
                      type="text"
                      fieldName={"lastname"}
                      placeholder={"Apellido*"}
                    />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.lastname?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex_container">
                  <div className="InputText">
                    <InputText
                      type="number"
                      fieldName={"dni"}
                      placeholder={"DNI*"}
                    />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.dni?.message}
                      </p>
                    )}
                  </div>
                  <div className="InputText">
                    <InputText
                      type="text"
                      fieldName={"email"}
                      placeholder={"Correo electrónico*"}
                    />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.email?.message}
                      </p>
                    )}
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
                    <InputPassword fieldName={"password"} />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="InputText">
                    <InputText
                      type="password"
                      fieldName={"confirmPassword"}
                      placeholder={"Confirmar contraseña*"}
                    />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex_container">
                  <div className="InputText">
                    <InputText
                      type="text"
                      fieldName={"phone"}
                      placeholder={"Teléfono*"}
                    />
                    {errors && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "10px",
                        }}
                      >
                        {errors.phone?.message}
                      </p>
                    )}
                  </div>
                  <div className="InputText">
                    <button
                      className={"button_responsive"}
                      onClick={handleSubmit(onSubmit)}
                    >
                      {isSubmitting ? (
                        <BeatLoader color="black" size={10} />
                      ) : (
                        "Continuar"
                      )}
                    </button>
                    {serverError && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontSize: "14px",
                        }}
                      >
                        {serverError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <RegisterOk />
      )}
    </FormProvider>
  );
};

export default FormRegister;
