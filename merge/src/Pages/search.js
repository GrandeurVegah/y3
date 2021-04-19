import React from "react";
import { SearchUI } from "../componets";

export default function Search(props) {
  return (
    <div>
      <div>
        <SearchUI props={props} />
      </div>
    </div>
  );
}
