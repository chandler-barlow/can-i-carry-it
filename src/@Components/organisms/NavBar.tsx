import React from "react";
import { FaLuggageCart } from "react-icons/fa";

export function NavBar() {
  return (
    <div className="p-5 bg-base-100 flex flex-row gap-2 justify-center items-center">
      <FaLuggageCart className="text-primary text-5xl md:text-5xl lg:text-6xl" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold h-fit">
        Can I Carry <span className="text-primary">It</span>
      </h1>
    </div>
  );
}
