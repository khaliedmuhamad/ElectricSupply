import React from "react";
import "./Sponsors.css";
import costco from "../../assets/images/costco.png";
import amazone from "../../assets/images/amazon.png";
import power from "../../assets/images/power.png";
import tesco from "../../assets/images/tesco.png";
import microsoft from "../../assets/images/microsoft.png";

export const Sponsors = () => {
  const sponsorsData = [costco, amazone, power, tesco, microsoft];
  return (
    <section className="sponsors py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          {!sponsorsData
            ? ""
            : sponsorsData.map((el, n) => {
                return (
                  <div className="col" key={n}>
                    <div className="px-2">
                      <img
                        className="sponsor-logo"
                        src={el}
                        width="80%"
                        alt={el}
                      />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};
