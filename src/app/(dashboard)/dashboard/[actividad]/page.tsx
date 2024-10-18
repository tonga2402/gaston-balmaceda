import FilterSection from "@/app/components/dashboard/actividad/FilterSection";
import ShowActivitySection from "@/app/components/dashboard/actividad/ShowActivitySection";
import SearchSection from "@/app/components/dashboard/inicio/SearchSection";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const params = searchParams?.search;
  const filter = searchParams?.filter

  return (
    <div className="container_initialPage">
      <div className="container_filter">
        <SearchSection params={params}/>
        <FilterSection />
      </div>
      <ShowActivitySection params={params} filter={filter}/>
    </div>
  );
};

export default page;
