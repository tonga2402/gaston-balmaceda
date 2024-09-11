import { CardServiceData } from "@/app/types/dashboard.types";
import { IoSearchOutline } from "react-icons/io5";

const SearchSection = async () => {

  const res = await fetch(`${process.env.API_URL}/service`, {
    method: "GET",
  });

  const data: CardServiceData[] = await res.json();
  console.log(data);
  return (
    <section>
      <div className="container_search">
        <IoSearchOutline />
        <input type="text" placeholder="Buscar en tu actividad" />
      </div>
    </section>
  );
};

export default SearchSection;
