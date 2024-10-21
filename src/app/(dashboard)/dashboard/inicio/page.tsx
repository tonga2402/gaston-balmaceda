import ActivitySection from "@/app/components/dashboard/inicio/ActivitySection";
import ButtonSection from "@/app/components/dashboard/inicio/ButtonSection";
import InicioSection from "@/app/components/dashboard/inicio/InicioSection";
import SearchSection from "@/app/components/dashboard/inicio/SearchSection";

const inicioPage = () => {
  return (
    <div className="container_initialPage">
      <InicioSection />
      <ButtonSection />
      <SearchSection params=""/>
      <ActivitySection />
    </div>
  );
};

export default inicioPage;
