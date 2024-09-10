"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/loginUser";
import ButtonLogin from "./ButtonLogin";
import InputPassword from "./InputPassword";

const FormPassword = () => {
  const router = useRouter();
  const [localEmail, setLocalEmail] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    setLocalEmail(localStorage.getItem("email") ?? "");
  }, []);

  return (
    <div>
      <form
        action={async (formData) => {
          const res = await login(formData, localEmail);
          if (res.token) {
            router.push("/dashboard/inicio");
          }
          setError(res?.message);
        }}
      >
        <div className="form_container">
          <h2>Ingresá tu contraseña</h2>
          <InputPassword type="password" name="password" />
          <ButtonLogin />
        </div>

        {error && (
          <div style={{ margin: "20px", textAlign: "center" }}>
            <span
              style={{
                color: "red",
                fontStyle: "italic",
                fontSize: "14px",
              }}
            >
              {error}
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormPassword;
