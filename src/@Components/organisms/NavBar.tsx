import React from "react";
import { FaLuggageCart } from "react-icons/fa";

export function NavBar() {
  return (
    <div className="p-5 bg-base-100 flex flex-row justify-left pl-10">
      <FaLuggageCart size={65} className="text-primary" />
      <h1 className="text-5xl mt-2 font-bold text-left ml-5">
        Can I Carry{""}
        <span className="text-primary">.It</span>
      </h1>
    </div>
  );
}
