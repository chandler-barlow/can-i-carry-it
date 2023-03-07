import React from "react";
import { Input } from "../../@Components/atoms/Input";

type BagDimensionsFormProps = {
  handleSubmit: (
    height: number,
    width: number,
    length: number
  ) => void;
};

export const BagDimensionsForm: React.FC<
  BagDimensionsFormProps
> = ({ handleSubmit }) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [length, setLength] = React.useState(0);

  function _handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    handleSubmit(height, width, length);
  }

  function validNumber(n: number): boolean {
    return n >= 0;
  }

  function handleHeight(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const sHeight: string = e.target.value;
    const nHeight: number = Number(sHeight);
    if (validNumber(nHeight)) {
      setHeight(nHeight);
    }
  }

  function handleWidth(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const sWidth: string = e.target.value;
    const nWidth: number = Number(sWidth);
    if (validNumber(nWidth)) {
      setWidth(nWidth);
    }
  }

  function handleLength(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const sLength: string = e.target.value;
    const nLength: number = Number(sLength);
    if (validNumber(nLength)) {
      setLength(nLength);
    }
  }

  return (
    <div className="w-60 sm:basis-4/12 basis-6/12 shadow-lg rounded-lg m-10 p-5 bg-white -mt-20">
      <h1
        title="Form Title"
        className="font-medium text-2xl text-center mb-3"
      >
        Bag Dimensions
      </h1>

      <Input
        label="Height"
        placeholder="20"
        value={height.toString()}
        onChange={handleHeight}
      />

      <Input
        label="Width"
        placeholder="20"
        value={width.toString()}
        onChange={handleWidth}
      />

      <Input
        label="Length"
        placeholder="20"
        value={length.toString()}
        onChange={handleLength}
      />

      <button
        className="btn w-full btn-primary mt-6"
        onClick={_handleSubmit}
      >
        Check
      </button>
    </div>
  );
};
