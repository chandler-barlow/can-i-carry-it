import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

type AirlineRowProps = {
  airline: string;
  isPersonalItem: boolean;
  isCarryOn: boolean;
};

export const AirlineRow: React.FC<AirlineRowProps> = ({
  airline,
  isPersonalItem,
  isCarryOn,
}) => {
  return (
    <tr>
      <th className="text-sm">{airline}</th>
      <td align="center">
        {isPersonalItem ? (
          <FaCheck className="text-primary" />
        ) : (
          <ImCross className="text-error" />
        )}
      </td>
      <td align="center">
        {isCarryOn ? (
          <FaCheck className="text-primary" />
        ) : (
          <ImCross className="text-error" />
        )}
      </td>
      <td align="center">
        <button className="btn btn-ghost btn-primary">
          More Info
        </button>
      </td>
    </tr>
  );
};
