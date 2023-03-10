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
  const [width, setWidth] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [length, setLength] = React.useState("");
  const [error, setError] = React.useState(false);

  function _handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    const isInvalid = (n: string) =>
      /\D/g.test(n) || n === "";
    const error =
      isInvalid(width) ||
      isInvalid(height) ||
      isInvalid(length);

    if (error) {
      setError(true);
      return;
    }

    setError(false);
    handleSubmit(
      Number(height),
      Number(width),
      Number(length)
    );
    return;
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
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <Input
        label="Width"
        placeholder="20"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />

      <Input
        label="Length"
        placeholder="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      {error && (
        <p className="text-error mt-2 mb-0 text-sm">
          All inputs must be filled out and contain only
          digits
        </p>
      )}

      <button
        className="btn w-full btn-primary mt-10"
        onClick={_handleSubmit}
      >
        Check
      </button>
    </div>
  );
};