import { IoSearchOutline } from "react-icons/io5";

const SearchService = () => {
  return (
    <section>
      <div className="container_search">
        <IoSearchOutline />
        <input type="text" placeholder="Buscá entre más de 5.000 empresas" />
      </div>
    </section>
  );
};

export default SearchService;
