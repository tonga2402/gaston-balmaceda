"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const route = useRouter();
  const handleLogout = async () => {
    const logout = await fetch("/api/logout", { method: "POST" });
    route.push("/");
    return logout;
  };
  return (
    <div className="link" onClick={handleLogout}>
      <span>Cerrar sesión</span>
    </div>
  );
};

export default LogoutButton;
