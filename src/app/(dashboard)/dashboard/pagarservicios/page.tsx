import SearchService from "@/app/components/dashboard/pagarservicios/SearchService";
import ServiceSection from "@/app/components/dashboard/pagarservicios/ServiceSection";

const page = () => {
  return (
    <div className="container_initialPage">
      <SearchService />
      <ServiceSection />
    </div>
  );
};

export default page;
