import SearchService from "@/app/components/dashboard/pagarservicios/SearchService";
import ServiceSection from "@/app/components/dashboard/pagarservicios/ServiceSection";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const params = searchParams.search;
  return (
    <div className="container_initialPage">
      <SearchService />
      <ServiceSection params={params}/>
    </div>
  );
};

export default page;
