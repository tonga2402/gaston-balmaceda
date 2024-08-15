import FilterSearchSection from "@/app/components/dashboard/actividad/FilterSearchSection";
import FilterSection from "@/app/components/dashboard/actividad/FilterSection";
import ShowActivitySection from "@/app/components/dashboard/actividad/ShowActivitySection";

const page = () => {
  return (
    <div className="container_initialPage">
      <div className="container_filter">
        <FilterSearchSection />
        <FilterSection />
      </div>
      <ShowActivitySection />
    </div>
  );
};

export default page;
