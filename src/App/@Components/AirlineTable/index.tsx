import React from "react";
import { AirlineRow } from "./AirLineRow";
import { AirlineRowData } from "../../";

type AirlineTableProps = {
  airlineRows: Array<AirlineRowData>;
};

export const AirlineTable: React.FC<AirlineTableProps> = ({
  airlineRows,
}) => {
  return (
    <div className="w-full p-5 pt-2 mr-10 h-96 lg:h-5/6 rounded-lg shadow-md bg-white overflow-auto">
      <table className="table w-full hover">
        <thead className="[&_th]:bg-white [&_th]:text-sm sticky top-0 [&_th]:sticky [&_th]:top-0">
          <th>Airline Name</th>
          <th align="center">Personal Item</th>
          <th align="center">Carry On</th>
          <th align="center">More Info</th>
        </thead>
        <tbody>
          {airlineRows.map(
            (
              { airline, isPersonalItem, isCarryOn },
              index
            ) => (
              <AirlineRow
                key={index}
                airline={airline}
                isPersonalItem={isPersonalItem}
                isCarryOn={isCarryOn}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
