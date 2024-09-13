"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDebounce } from "use-debounce";

const SearchSection = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const [query] = useDebounce(text, 500);
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  // console.log(searchParams, pathname);

  useEffect(() => {
    if (!query && pathname === "/dashboard/actividad") {
      router.push("/dashboard/actividad");
    } else if (query && pathname === "/dashboard/inicio") {
      router.push(`/dashboard/actividad?search=${query}`);
    } else if (query && pathname === "/dashboard/actividad") {
      router.push(`/dashboard/actividad?search=${query}`);
    }
  }, [query, pathname, router]);

  return (
    <>
      <div className="container_filter_search">
        <IoSearchOutline />
        <input
          type="text"
          value={text}
          placeholder="Buscar en tu actividad"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchSection;
