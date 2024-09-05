import SelectCardOptions from "@/app/components/dashboard/cargardinero/SelectCardOptions";
import FormService from "@/app/components/dashboard/pagarservicios/FormService";
import { AccountType, CardServiceData } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";

export default async function ServiceContainer({
  params,
}: {
  params: { serviceId: number };
}) {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");

  const serviceRes = await fetch(
    `${process.env.API_URL}/service/${params.serviceId}`,
    { method: "GET" }
  );
  const serviceData: CardServiceData = await serviceRes.json();

  const accountRes = await fetch(`${process.env.API_URL}/api/account`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const accountData: AccountType = await accountRes.json();
  console.log(accountData);
  return (
    <div className="container_initialPage">
      <FormService
        name={serviceData.name}
        invoiceValue={serviceData.invoice_value}
        token={token ? token : ""}
        accountId={accountData.id}
      ><SelectCardOptions/></FormService>
    </div>
  );
}
