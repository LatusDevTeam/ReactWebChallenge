import { DateTime } from "luxon";

type Reading = {
  from: DateTime;
  to: DateTime;
  forecast: number;
  actual: number;
  intensity: string;
};

export default Reading;
