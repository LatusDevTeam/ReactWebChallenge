import React from "react";
import { Card } from "@/ui/card/card";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

export const HomePage: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <h1>Home</h1>
      <Card className={styles.card}>
        <div>Hello</div>
        <Link to="/readings">Go To Readings</Link>
      </Card>
    </div>
  );
};
