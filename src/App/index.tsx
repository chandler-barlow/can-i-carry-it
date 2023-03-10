import "./App.css";
import React from "react";
import { NavBar } from "../@Components/organisms/NavBar";
import { BagDimensionsForm } from "./@Components/BagDimensionForm";
import { AirlineTable } from "./@Components/AirlineTable";
import { Footer } from "../@Components/organisms/Footer";
import { Airline, airlineData } from "../airlineData";
/** 
  TODO:
  - make the form and the table responsive ( looks like shit on mobile rn )
  - pull the form into a separate component
  - pull the table into a separate component
  - add a filter for specific airlines
  - add google adds
  - add the functionality for the whole thing to actually tell you what airlines work or not lmaoo
*/

type AirlineRow = {
  airline: string;
  personalItem: boolean;
  carryOn: boolean;
};

function App() {
  const [airlineRows, setAirlineRows] = React.useState<
    Array<AirlineRow>
  >([]);

  function handleSubmit(
    height: number,
    width: number,
    length: number
  ): void {
    const validateAirline = (airline: Airline) => {
      const personalItem =
        height <= airline.personalItemDimensions.height &&
        width <= airline.personalItemDimensions.width &&
        length <= airline.personalItemDimensions.length;
      const carryOn =
        height <= airline.carryOnDimensions.height &&
        width <= airline.carryOnDimensions.width &&
        length <= airline.carryOnDimensions.length;
      return {
        airline: airline.name,
        personalItem,
        carryOn,
      };
    };
    const newAirlineRows = airlineData.map(validateAirline);
    setAirlineRows(newAirlineRows);
    console.log(newAirlineRows);
    return;
  }

  return (
    <div className="App h-auto bg-slate-200 flex flex-col justify-between">
      <NavBar />

      <div
        title="content"
        className="flex flex-col md:flex-row"
      >
        <BagDimensionsForm handleSubmit={handleSubmit} />
        <AirlineTable airlineRows={airlineRows} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
