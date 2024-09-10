"use server";

export const registerUser = async (formData: FormData) => {
  console.log(formData);
  const res = await fetch(`${process.env.API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      dni: Number(formData.get("dni")),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
    }),
  });
  const createUser = await res.json();
  console.log(createUser);
  if (res.ok) {

   return createUser
    } else if (res.status === 400) {
      return { message: "Verificar datos ingresados" };
   }else if (res.status === 409){

       return { message: "Email ya registrado" };
   }

   return { message:' Intente mas tarde'}
};
