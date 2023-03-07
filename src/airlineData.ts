export type Dimensions = {
  height: number;
  width: number;
  length: number;
};

export type Airline = {
  name: string;
  personalItemDimensions: Dimensions;
  carryOnDimensions: Dimensions;
};

export const airlineData: Array<Airline> = [
  {
    name: "Delta",
    personalItemDimensions: {
      height: 17,
      width: 13,
      length: 8,
    },
    carryOnDimensions: { height: 22, width: 14, length: 9 },
  },
  {
    name: "American Airlines",
    personalItemDimensions: {
      height: 17,
      width: 13,
      length: 8,
    },
    carryOnDimensions: { height: 22, width: 14, length: 9 },
  },
];
