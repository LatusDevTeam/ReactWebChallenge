import { DateTime } from "luxon";
import type { Meta, StoryObj } from "@storybook/react";
import { ReadingCard } from "./reading";

const meta = {
  title: "Reading",
  component: ReadingCard,
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ReadingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    from: DateTime.fromISO("2018-01-20T12:30Z"),
    to: DateTime.fromISO("2018-01-20T13:00Z"),
    forecast: 267,
    actual: 265,
    intensity: "high",
  },
};

export const VeryLow = {
  args: {
    from: DateTime.fromISO("2018-01-20T13:00Z"),
    to: DateTime.fromISO("2018-01-20T13:30Z"),
    forecast: 214,
    actual: 231,
    intensity: "very low",
  },
};

export const Low = {
  args: {
    from: DateTime.fromISO("2018-01-20T14:30Z"),
    to: DateTime.fromISO("2018-01-20T15:00Z"),
    forecast: 231,
    actual: 238,
    intensity: "low",
  },
};

export const Moderate = {
  args: {
    from: DateTime.fromISO("2018-01-20T12:00Z"),
    to: DateTime.fromISO("2018-01-20T12:30Z"),
    forecast: 266,
    actual: 263,
    intensity: "moderate",
  },
};

export const High = {
  args: {
    from: DateTime.fromISO("2018-01-20T12:30Z"),
    to: DateTime.fromISO("2018-01-20T13:00Z"),
    forecast: 267,
    actual: 265,
    intensity: "high",
  },
};

export const VeryHigh = {
  args: {
    from: DateTime.fromISO("2018-01-20T13:30Z"),
    to: DateTime.fromISO("2018-01-20T14:00Z"),
    forecast: 287,
    actual: 298,
    intensity: "very high",
  },
};
