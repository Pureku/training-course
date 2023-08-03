import React from "react";
import CardChart from "../other/cardChart.component";

const WipCard = () => {
  return (
    <>
      <div className="box-border min-w-[0px] overflow-x-auto w-full">
        <div className="grid grid-cols-4 gap-2">
          <CardChart />
          <CardChart />
          <CardChart />
          <CardChart />
        </div>
      </div>
    </>
  );
};

export default WipCard;
