import "./App.css";
import React from "react";
import { FaCheck, FaLuggageCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
/** 
  TODO:
  - make the form and the table responsive ( looks like shit on mobile rn )
  - pull the form into a separate component
  - pull the table into a separate component
  - add a filter for specific airlines
  - add google adds
  - add the functionality for the whole thing to actually tell you what airlines work or not lmaoo
*/

function App() {
  function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    console.log(e);
  }
  return (
    <div className="App h-screen bg-slate-200 flex flex-col justify-between">
      <div className="p-5 bg-base-100 flex flex-row justify-left pl-10">
        <FaLuggageCart size={65} className="text-primary" />
        <h1 className="text-5xl mt-2 font-bold text-left ml-5">
          Can I Carry{""}
          <span className="text-primary">.It</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-60 sm:basis-4/12 basis-6/12 shadow-lg rounded-lg m-10 p-5 bg-white -mt-25">
          <h1 className="font-medium text-2xl text-center mb-3">
            Bag Dimensions
          </h1>
          <div className="inline-block w-full">
            <label className="label">Height</label>
            <input
              className="input input-bordered w-full"
              placeholder="14"
            ></input>
          </div>

          <div className="inline-block w-full">
            <label className="label">Width</label>
            <input
              className="input input-bordered w-full"
              placeholder="19"
            ></input>
          </div>

          <div className="inline-block w-full">
            <label className="label">Length</label>
            <input
              className="input input-bordered w-full"
              placeholder="20"
            ></input>
          </div>

          <button
            className="btn w-full btn-primary mt-6 "
            onClick={handleSubmit}
          >
            Check
          </button>
        </div>

        <div className="-mt-20 sm:basis-7/12 p-5 pt-2 basis-6/12 mr-10 rounded-lg shadow-md bg-white md:flex-1 md:w-100vw mt-0 mb-10 md:w-full">
          <table className="table w-full">
            <thead className="[&_th]:bg-white [&_th]:text-l [&_th]:font-medium">
              <tr>
                <th>Airline</th>
                <th>Personal Item</th>
                <th>Carry On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delta</td>
                <td>
                  <FaCheck className="text-primary" />
                </td>
                <td>
                  <FaCheck className="text-primary" />
                </td>
              </tr>
              <tr>
                <td>American Airlines</td>
                <td>
                  <FaCheck className="text-primary" />
                </td>
                <td>
                  <ImCross className="text-error" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary h-32 static bottom-0" />
    </div>
  );
}

export default App;
