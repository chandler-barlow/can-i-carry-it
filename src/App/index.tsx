import "./App.css";
import React from "react";
import { NavBar } from "../@Components/organisms/NavBar";
import { BagDimensionsForm } from "./@Components/BagDimensionForm";
import { AirlineTable } from "./@Components/AirlineTable";
import { Footer } from "../@Components/organisms/Footer";
import {
  AirlineData,
  airlineData,
} from "../resources/airlineData";

/** 
  TODO:
  - make the form and the table responsive ( looks like shit on mobile rn )
  - pull the form into a separate component
  - pull the table into a separate component
  - add a filter for specific airlines
  - add google adds
  - add the functionality for the whole thing to actually tell you what airlines work or not lmaoo
*/

export type AirlineRowData = {
  airline: string;
  isPersonalItem: boolean;
  isCarryOn: boolean;
};

function App() {
  const [airlineRows, setAirlineRows] = React.useState<
    Array<AirlineRowData>
  >([]);

  function handleSubmit(
    height: number,
    width: number,
    length: number
  ): void {
    const validateAirline = (airline: AirlineData) => {
      const isPersonalItem =
        height <= airline.personalItemDimensions.height &&
        width <= airline.personalItemDimensions.width &&
        length <= airline.personalItemDimensions.length;
      const isCarryOn =
        height <= airline.carryOnDimensions.height &&
        width <= airline.carryOnDimensions.width &&
        length <= airline.carryOnDimensions.length;
      return {
        airline: airline.name,
        isPersonalItem,
        isCarryOn,
      };
    };
    const newAirlineRows = airlineData.map(validateAirline);
    setAirlineRows(newAirlineRows);
    console.log(newAirlineRows);
    return;
  }

  return (
    <>
      <NavBar />
      <div className="App min-h-screen bg-slate-200 flex flex-col justify-between items-center">
        <div
          title="content"
          className="flex flex-col lg:flex-row  lg:w-10/12 justify-center w-screen p-3 gap-5 mt-2"
        >
          <BagDimensionsForm handleSubmit={handleSubmit} />
          <AirlineTable airlineRows={airlineRows} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
