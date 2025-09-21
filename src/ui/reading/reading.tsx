import { DateTime } from "luxon";
import { useMemo } from "react";

import { Card } from "../card/card";
import styles from "./reading.module.css";

type ReadingItemProps = {
  icon: string;
  caption: string;
};

type ReadingProps = {
  from: DateTime;
  to: DateTime;
  forecast: number;
  actual: number;
  intensity: string;
};

const getClassName = (caption: string) =>
  caption.toLowerCase().split(" ").join("-");

const getTime = (dateTime: DateTime) => dateTime.toFormat("HH:mm");

function ReadingItem({ icon, caption }: ReadingItemProps) {
  const className = useMemo(() => getClassName(icon), []);

  return (
    <div className={styles.item}>
      <span className={`${styles[className]} ${styles.icon}`} />
      <span className={styles.caption}>{caption}</span>
    </div>
  );
}

export function ReadingCard({
  from,
  to,
  forecast,
  actual,
  intensity,
}: ReadingProps) {
  const time = useMemo(() => `${getTime(from)} - ${getTime(to)}`, []);

  return (
    <Card className={styles.reading} data-testid="ReadingContainer">
      <span className={styles.time}>{time}</span>
      <div className={styles.intensity}>
        <ReadingItem caption={forecast.toString()} icon="forecast" />
        <ReadingItem caption={actual.toString()} icon="actual" />
        <ReadingItem caption={intensity} icon={intensity} />
      </div>
    </Card>
  );
}
