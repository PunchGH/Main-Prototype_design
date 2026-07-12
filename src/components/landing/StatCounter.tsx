"use client";

import { useCountUp } from "./useCountUp";

export default function StatCounter({
  target,
  decimals = 0,
  suffix = "",
}: {
  target: number;
  decimals?: number;
  suffix?: string;
}) {
  const value = useCountUp(target, decimals);
  return (
    <>
      {value}
      {suffix}
    </>
  );
}
