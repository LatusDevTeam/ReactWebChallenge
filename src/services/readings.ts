import readings from "@/data/readings.json";
import Reading from "@/types/Reading";
import Readings from "@/types/Readings";
import { DateTime } from "luxon";

export const getReadings = (): Reading[] => {
  const { data }: Readings = readings ?? {};

  return data.map(
    ({ to, from, intensity: { forecast, actual, index: intensity } }) => ({
      to: DateTime.fromISO(to),
      from: DateTime.fromISO(from),
      forecast,
      actual,
      intensity,
    })
  );
};
