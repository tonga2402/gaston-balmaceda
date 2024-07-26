"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const route = useRouter();
  const handleLogout = async () => {
    const logout = await fetch("/api/logout", { method: "POST" });
    route.push("/");
    return logout;
  };
  return (
    <Link className="link" href={""} onClick={handleLogout}>
      <span>Cerrar sesión</span>
    </Link>
  );
};

export default LogoutButton;
