import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const ActivitySection = () => {
  return (
    <section>
      <div className="container_activity">
        <h5>Tu actividad</h5>
        <div>
          <hr />
          <div className="card_activity">
            <div className="card_container">
              <div className="circle_activity"></div>
              <h5>Trasferiste a Rodrigo</h5>
            </div>
            <div className="div_price">
              <h5>-$ 1265,57</h5>
              <h6>sabado</h6>
            </div>
          </div>
          <hr />
        </div>
        <div className="div_arrow">
          <h5>Ver toda tu activida</h5>
          <Link href={""} style={{ color: "black" }}>
            <IoArrowForwardOutline style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
