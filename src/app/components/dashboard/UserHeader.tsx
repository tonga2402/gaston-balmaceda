"use client";
import { useEffect, useState } from "react";

type userType = {
  id: number;
  dni: string;
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
};

const UserHeader = () => {
  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    const userFech = async () => {
      const dataUser = await fetch("api/user");
      const data = await dataUser.json();
      setUser(data);
    };
    userFech();
  }, []);

  console.log(user);
  return (
    <>
      <div className="avatar_logo">
        {user?.firstname.substring(0, 1)?.toUpperCase()}
        {user?.lastname.substring(0, 1)?.toUpperCase()}
      </div>
      <p>
        Hola, {user?.firstname} {user?.lastname}
      </p>
    </>
  );
};

export default UserHeader;
