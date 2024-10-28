"use client";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation";
import ButtonLogin from "./ButtonLogin";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/app/schema/register.schema";
import { registerUser } from "@/actions/registerUser";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

type RegisterSchemaType = z.infer<typeof RegisterSchema>

const FormRegister = () => {

  const router = useRouter();

  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) })


  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      const result = await registerUser(data)
      setError(null)
      toast.success('Cuenta registrada con exito')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (e) {
      setError('email ya registrado')
    }
    return false
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}
      >
        <div className="register_form_container">
          <h2>Crear cuenta</h2>
          <div className="input_container">
            <div className="grid_container">
              <div className="flex_container">
                <div className="InputText">
                  <input
                    {...register('firstname')}
                    type="text"
                    placeholder="Nombre*"
                  />
                  {errors.firstname?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="InputText">
                  <input
                    {...register('lastname')}
                    type="text"
                    placeholder="Apellido*"
                  />
                  {errors.lastname?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex_container">
                <div className="InputText">
                  <input
                    {...register('dni')}
                    type="text"
                    placeholder="DNI*" />
                  {errors.dni?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.dni.message}
                    </p>
                  )}
                </div>
                <div className="InputText">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Correo electrónico*"
                  />
                  {errors.email?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <h3 style={{ marginTop: '10px' }}>
              Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
              carácter especial, una mayúscula y un número)
            </h3>
            <div className="grid_container">
              <div className="flex_container">
                <div className="InputText">
                  <input
                    {...register('password')}
                    type="password"
                    placeholder="Contraseña*"
                  />
                  {errors.password?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="InputText">
                  <input
                    {...register('confirmPassword')}
                    type="password"
                    placeholder="Confirmar contraseña*"
                  />
                  {errors.confirmPassword?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex_container">
                <div className="InputText">
                  <input
                    {...register('phone')}
                    type="text"
                    placeholder="Teléfono*"
                  />
                  {errors.phone?.message && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="InputText">
                  <button disabled={isSubmitting} className="button_responsive">
                    {isSubmitting ? <BeatLoader color="black" size={10} /> : "Continuar"}
                  </button>
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
