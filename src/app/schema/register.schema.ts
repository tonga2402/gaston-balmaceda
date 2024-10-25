import { z } from 'zod'

export const RegisterSchema = z.object({
    firstname: z.string().max(20).min(2, 'ingresar nombre 2 caracteres minimo'),
    lastname: z.string().max(20).min(2, 'ingresar nombre 2 caracteres minimo'),
    dni: z.string().min(6, 'ingresar un numero correcto de dni'),
    email: z.string().email({ message: 'email invalido' }),
    password: z.string().regex(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,20}$/, 'contrasena invalida'),
    confirmPassword: z.string(),
    phone: z.string().min(6, 'ingresar un numero de telefono correcto'),
}).refine(data => data.password === data.confirmPassword, {
    message: 'las contrasenas no coinciden',
    path: ['confirmPassword']
})