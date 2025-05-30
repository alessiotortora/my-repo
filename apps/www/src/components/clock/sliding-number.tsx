"use client";
import { type MotionValue, motion, motionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useId } from "react";
import useMeasure from "react-use-measure";

const TRANSITION = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

function Digit({ value, place }: { value: number; place: number }) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <AnimatedNumber key={String(number)} mv={animatedValue} number={number} />
      ))}
    </div>
  );
}

function AnimatedNumber({ mv, number }: { mv: MotionValue<number>; number: number }) {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;

    if (offset > 5) {
      memo -= 10 * bounds.height;
    }

    return memo;
  });

  // don't render the animated number until we know the height
  if (!bounds.height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className="absolute inset-0 flex items-center justify-center"
      transition={TRANSITION}
      ref={ref}
    >
      {number}
    </motion.span>
  );
}

type SlidingNumberProps = {
  value: number;
  padStart?: boolean;
  decimalSeparator?: string;
};

export function SlidingNumber({
  value,
  padStart = false,
  decimalSeparator = ".",
}: SlidingNumberProps) {
  const absValue = Math.abs(value);
  const [integerPart = "0", decimalPart] = absValue.toString().split(".");
  const integerValue = Number.parseInt(integerPart, 10);
  const paddedInteger = padStart && integerValue < 10 ? `0${integerPart}` : integerPart;
  const digits = Array.from(paddedInteger, (_, i) => ({
    digit: paddedInteger[i],
    place: 10 ** (paddedInteger.length - i - 1),
  }));

  return (
    <div className="flex items-center">
      {value < 0 && "-"}
      {digits.map(({ place }) => (
        <Digit key={`pos-${place}`} value={integerValue} place={place} />
      ))}
      {decimalPart && (
        <>
          <span>{decimalSeparator}</span>
          {decimalPart.split("").map((digit, index) => (
            <Digit
              key={`decimal-pos-${decimalPart.length - index - 1}-${digit}`}
              value={Number.parseInt(decimalPart, 10)}
              place={10 ** (decimalPart.length - index - 1)}
            />
          ))}
        </>
      )}
    </div>
  );
}
