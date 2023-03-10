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
      <table className="table w-[calc(100%-40px)] m-5 sm:m-10">
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
  );
};
