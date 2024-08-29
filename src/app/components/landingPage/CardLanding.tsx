import { CardLandingProps } from "@/app/types/landingPage.types";

const CardLanding = ({ title, body }: CardLandingProps) => {
  return (
    <div className="card_container">
      <h1>{title} </h1>
      <hr />
      <p>{body}</p>
    </div>
  );
};

export default CardLanding;
