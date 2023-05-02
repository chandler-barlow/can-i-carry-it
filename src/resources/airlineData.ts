export type Dimensions = {
  height: number;
  width: number;
  length: number;
};

export type AirlineData = {
  name: string;
  personalItemDimensions: Dimensions;
  carryOnDimensions: Dimensions;
};

const aa = {
  name: "American Airlines",
  personalItemDimensions: {
    height: 17,
    width: 13,
    length: 8,
  },
  carryOnDimensions: { height: 22, width: 14, length: 9 },
};

export const airlineData: Array<AirlineData> = [
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

for (let i = 0; i < 100; i++) {
  airlineData.push(aa);
}
