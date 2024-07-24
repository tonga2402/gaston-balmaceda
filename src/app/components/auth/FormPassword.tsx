"use client";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import inputPasswordSchema from "@/app/schemes/inputPassword.scheme";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import InputPassword from "./InputPassword";

type InputPasswordProps = {
  email?: string;
  password: string;
};

const FormPassword = () => {
  const router = useRouter();
  const [localEmail, setLocalEmail] = useState<string>("");
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm<InputPasswordProps>({
    resolver: yupResolver(inputPasswordSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  useEffect(() => {
    setLocalEmail(localStorage.getItem("email") ?? "");
  }, []);

  const onSubmit = async (data: InputPasswordProps) => {
    data = { ...data, email: localEmail };
    const { password, email } = data;

    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const auth = await res.json();

    if (!auth.ok) {
      setServerError("Credenciales invalidas");
    }
    setServerError(null);
    localStorage.removeItem("email");
    router.push("/dashboard");
    router.refresh();
    return auth;
  };

  return (
    <FormProvider {...methods}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_container">
            <h2>Ingresá tu contraseña</h2>
            <InputPassword fieldName="password" />
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
          </div>
          {errors && (
            <div style={{ margin: "20px", textAlign: "center" }}>
              <span
                style={{
                  color: "red",
                  fontStyle: "italic",
                  fontSize: "14px",
                }}
              >
                {!serverError ? errors.password?.message : serverError}
              </span>
            </div>
          )}
        </form>
      </div>
    </FormProvider>
  );
};

export default FormPassword;
