type Intensity = {
  forecast: number;
  actual: number;
  index: string;
};

type Reading = {
  from: string;
  to: string;
  intensity: Intensity;
};

type Readings = {
  data: Reading[];
};

export default Readings;
