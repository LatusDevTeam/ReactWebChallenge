import React from "react";

import styles from "./card.module.css";

type CardProps = React.PropsWithChildren<{
  className?: string;
  "data-testid"?: string;
}>;

export function Card({
  children,
  className = "",
  "data-testid": testId = "CardContainer",
}: CardProps) {
  return (
    <div className={`${styles.container} ${className}`} data-testid={testId}>
      {children}
    </div>
  );
}
