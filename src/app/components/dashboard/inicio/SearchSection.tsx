import { IoSearchOutline } from "react-icons/io5";

const SearchSection = () => {
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
