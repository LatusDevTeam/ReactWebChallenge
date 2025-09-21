import { DateTime } from "luxon";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ReadingCard } from "./reading";

describe("Reading", () => {
  const reading = {
    from: DateTime.fromISO("2018-01-20T12:30Z"),
    to: DateTime.fromISO("2018-01-20T13:00Z"),
    forecast: 267,
    actual: 265,
    intensity: "high",
  };

  it("renders children content", () => {
    render(<ReadingCard {...reading} />);

    expect(screen.getByText("12:30 - 13:00")).toBeInTheDocument();
    expect(screen.getByText("267")).toBeInTheDocument();
    expect(screen.getByText("265")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
  });

  it("renders the container with test id", () => {
    render(<ReadingCard {...reading} />);

    const container = screen.getByTestId("ReadingContainer");
    expect(container).toBeInTheDocument();
  });
});
