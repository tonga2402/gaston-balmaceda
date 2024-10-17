"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDebounce } from "use-debounce";

type SearchSectionProps = {
  params: string
}
const SearchSection = ({ params }: SearchSectionProps) => {
  const router = useRouter();
  const [text, setText] = useState<string>(params);
  const [query] = useDebounce(text, 500);
  const pathname = usePathname();

console.log(params)
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
