import React, { useState } from "react";
import { getReadings } from "@/services/readings";
import { ReadingCard } from "@/ui/reading/reading";
import Reading from "@/types/Reading";

export const ReadingsPage: React.FC = () => {
  const [readings] = useState<Reading[]>(getReadings());

  return (
    <div style={{ padding: 16 }}>
      <h1>Readings</h1>
      {readings.map((item: Reading) => (
        <ReadingCard key={item.from.toISOTime()} {...item} />
      ))}
    </div>
  );
};
