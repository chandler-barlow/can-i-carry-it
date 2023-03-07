import React from "react";
import { AirlineRow } from "./AirLineRow";

type AirlineRow = {
  airline: string;
  personalItem: boolean;
  carryOn: boolean;
};

type AirlineTableProps = {
  airlineRows: Array<AirlineRow>;
};

export const AirlineTable: React.FC<AirlineTableProps> = ({
  airlineRows,
}) => {
  return (
    <div className="-mt-20 sm:basis-7/12 p-5 pt-2 basis-6/12 mr-10 rounded-lg shadow-md bg-white">
      <table className="table w-full">
        <thead className="[&_th]:bg-white [&_th]:text-xl [&_th]:font-medium">
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
