import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

type AirlineRowProps = {
  airline: string;
  personalItem: boolean;
  carryOn: boolean;
};

export const AirlineRow: React.FC<AirlineRowProps> = ({
  airline,
  personalItem,
  carryOn,
}) => {
  return (
    <tr className="[&_td]:text-xs [&_td]:whitespace-normal">
      <td className=" break-words">{airline}</td>
      <td>
        {personalItem ? (
          <FaCheck className="text-primary" />
        ) : (
          <ImCross className="text-error" />
        )}
      </td>
      <td>
        {carryOn ? (
          <FaCheck className="text-primary" />
        ) : (
          <ImCross className="text-error" />
        )}
      </td>
    </tr>
  );
};
