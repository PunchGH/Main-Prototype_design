"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value.toFixed(decimals);
}
