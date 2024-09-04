import Link from "next/link";

const LoggedIn = () => {
  return (
    <>
      <Link
        href={"/login"}
        className="button_google"
        style={{ textDecoration: "none" }}
      >
        Ingresar
      </Link>
      <Link
        href={"/register"}
        className="button_responsive"
        style={{ textDecoration: "none" }}
      >
        Crear cuenta
      </Link>
    </>
  );
};

export default LoggedIn;
