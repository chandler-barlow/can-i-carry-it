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
    <tr>
      <td>{airline}</td>
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
