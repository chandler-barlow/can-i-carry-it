import React from "react";
import { AirlineRow } from "./AirLineRow";

type Airline = {
  airline: string;
  personalItem: boolean;
  carryOn: boolean;
};

type AirlineTableProps = {
  airlineRows: Array<Airline>;
};

export const AirlineTable: React.FC<AirlineTableProps> = ({
  airlineRows,
}) => {
  return (
    <div className="pt-2 rounded-lg shadow-md bg-white m-5 sm:p-5">
      <table className="table w-full">
        <thead className="[&_th]:bg-white [&_th]:text-s [&_th]:font-medium sm:[&_th]:text-xl">
          <tr>
            <th>Airline</th>
            <th>Personal Item</th>
            <th>Carry On</th>
          </tr>
        </thead>
        <tbody>
          {airlineRows.map(
            ({ airline, personalItem, carryOn }, index) => (
              <AirlineRow
                key={index}
                airline={airline}
                personalItem={personalItem}
                carryOn={carryOn}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
