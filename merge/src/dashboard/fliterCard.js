import React from "react";
export default function FilterCard() {
  return (
    <div>
      <div className="border: 1px solid #e0e3eb; height: 100%; width: 100%">
        <iframe
          width="100%"
          frameBorder="0"
          height="100%"
          src="https://widget.finnhub.io/widgets/etf-holdings?symbol=ARKK&theme=light"
          title="ARKK Holdings Data"
        ></iframe>
      </div>
      <div className="width: 100%; text-align: center; margin-top:10px;">
        ARKK Holdings Data by
      </div>
    </div>
  );
}
