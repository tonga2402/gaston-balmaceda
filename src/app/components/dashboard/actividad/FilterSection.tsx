"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoOptionsOutline, IoChevronDown } from "react-icons/io5";
import { useDebounce } from "use-debounce";

const FilterSection = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter] = useDebounce(inputValue, 500);
  const searchParams = useSearchParams();

  const handleShow = () => {
    setShowFilter(!showFilter);
  };

  const handleDeleteFilter = () => {
    router.push(`/dashboard/actividad`)
    setShowFilter(false)
  }

  const handleFilter = () => {
    if (!searchParams) {
      router.push(`/dashboard/actividad?filter=${filter}`);
    } else {
      router.push(`/dashboard/actividad?${searchParams}&filter=${filter}`);
    }
    setShowFilter(false);
  };

  return (
    <div className="container_filter_section">
      <div className="container_filterButton" onClick={handleShow}>
        <h5>Filtrar</h5>
        <IoOptionsOutline />
      </div>
      {showFilter && (
        <div className="container_select">
          <div className="filter_header">
            <div className="filter_header_div">
              <h4>Periodo</h4>
              <IoChevronDown />
            </div>
            <div>
              <button
                onClick={handleDeleteFilter}
                style={{ backgroundColor: "transparent" }}
              >
                Borrar filtros
              </button>
            </div>
          </div>
          <form action={handleFilter} className="form_filter">
            <label htmlFor="1">
              Hoy
              <input
                type="radio"
                id="1"
                name="filter"
                value="hoy"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <label htmlFor="2">
              Ayer
              <input
                type="radio"
                id="2"
                name="filter"
                value="ayer"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <label htmlFor="3">
              Ultima semana
              <input
                type="radio"
                id="3"
                name="filter"
                value="ultima semana"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <label htmlFor="4">
              Ultimos 15 dias
              <input
                type="radio"
                id="4"
                name="filter"
                value="15 dias"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <label htmlFor="5">
              Ultimo mes
              <input
                type="radio"
                id="5"
                name="filter"
                value="mes"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <label htmlFor="6">
              Ultimo ano
              <input
                type="radio"
                id="6"
                name="filter"
                value="ano"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <button>Aplicar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
