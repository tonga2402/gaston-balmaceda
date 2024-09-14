'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDebounce } from "use-debounce";

const SearchService = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const [query] = useDebounce(text, 500);
  const pathname = usePathname();

  useEffect(() => {
    if (!query ) {
      router.push("/dashboard/pagarservicios");
    } else {
      router.push(`/dashboard/pagarservicios?search=${query}`)
    }
  }, [query, pathname, router]);
  return (
    <section>
      <div className="container_search">
        <IoSearchOutline />
        <input type="text" 
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Buscá entre más de 5.000 empresas" />
      </div>
    </section>
  );
};

export default SearchService;
