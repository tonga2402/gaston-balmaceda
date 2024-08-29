import BankTransfer from "@/app/components/dashboard/cargardinero/BankTransfer";
import SelectCard from "@/app/components/dashboard/cargardinero/SelectCard";

const page = () => {
  return (
    <div className="container_initialPage">
      <BankTransfer />
      <SelectCard />
    </div>
  );
};

export default page;
