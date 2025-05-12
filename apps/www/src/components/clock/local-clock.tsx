"use client";

import { ClockIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./sliding-number";

interface LocalClockProps {
  timezone: string;
  location: string;
}

export function LocalClock({ timezone, location }: LocalClockProps) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const localTime = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
      setHours(localTime.getHours());
      setMinutes(localTime.getMinutes());
      setSeconds(localTime.getSeconds());
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex gap-1 items-center text-muted-foreground text-xs text-light">
      <ClockIcon className="size-3" />
      <div className="flex ">
        <SlidingNumber value={hours} padStart={true} />
        <span className="">:</span>
        <SlidingNumber value={minutes} padStart={true} />
        <span className="">:</span>
        <SlidingNumber value={seconds} padStart={true} />
      </div>
      <span> - </span>
      <span>{location}</span>
    </div>
  );
}
