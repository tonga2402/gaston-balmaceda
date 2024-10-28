import { AccountType, CardType } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { toast } from "sonner";

const NewCard = async () => {

  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "");

  const resUser = await fetch(`${process.env.API_URL}/api/account`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const dataUser: AccountType = await resUser.json();

  const res = await fetch(
    `${process.env.API_URL}/api/accounts/${dataUser.id}/cards`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: CardType[] = await res.json();
  console.log(data)



  return (
    <section>
      <div className="container_alias">

        {
          data.length === 10 ?
            <h4>Llego al maximo de tarjetas agregadas</h4>
            :
            <>
              <h4>Agrega tu tarjeta de debito o credito</h4>
              <div className="container_newcard">
                <div className="div_newcard">
                  <div className="add_newcard">+</div>
                  <h3>Nueva tarjeta</h3>
                </div>
                <Link
                  href={"tarjetas/nuevatarjeta"}
                  style={{ color: "var(--primary-color)" }}
                >
                  <IoArrowForwardOutline style={{ fontSize: "25px" }} />
                </Link>
              </div>
            </>
        }
      </div>
    </section>
  );
};

export default NewCard;
