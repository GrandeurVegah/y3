import React from "react";
import { SearchUI } from "../componets";
//import { FliterCard } from "../componets";

export default function Search(props) {
  return (
    <div className="min-h-screen flex items-center bg-white">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <li className="col-span-3 bg-gray-50 rounded-lg shadow-xl justify-items-center px-100 content-center">
            <div className="h-24">
              <SearchUI props={props} />
            </div>
          </li>
          <li className="row-span-2 bg-gray-50 rounded-lg shadow-xl">
            <div className="h-24 pt-3 pl-3 pr-3 text-left">
              <div>
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Price: {props.data.price}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Revenue: {props.data.revenue}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Cost Of Revenue: {props.data.costOfRevenue}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Revenue Growth: {(props.data.revenueGrowth * 10)}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
