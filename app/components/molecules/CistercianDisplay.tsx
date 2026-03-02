import { forwardRef } from "react";

type CistercianDisplayProps = {
  value: number;
};

const getDigitPath = (digit: number) => {
  switch (digit) {
    case 1:
      return "M 50 20 L 65 20";
    case 2:
      return "M 50 35 L 65 35";
    case 3:
      return "M 50 20 L 65 35";
    case 4:
      return "M 50 35 L 65 20";
    case 5:
      return "M 50 20 L 65 20 M 50 35 L 65 20";
    case 6:
      return "M 65 20 L 65 35";
    case 7:
      return "M 50 20 L 65 20 M 65 20 L 65 35";
    case 8:
      return "M 50 35 L 65 35 M 65 20 L 65 35";
    case 9:
      return "M 50 20 L 65 20 M 50 35 L 65 35 M 65 20 L 65 35";
    default:
      return "";
  }
};

export const CistercianDisplay = forwardRef<
  SVGSVGElement,
  CistercianDisplayProps
>(({ value }, ref) => {
  const thousands = Math.floor(value / 1000);
  const hundreds = Math.floor((value % 1000) / 100);
  const tens = Math.floor((value % 100) / 10);
  const units = value % 10;

  const svgStyles = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full text-slate-800"
      role="img"
      aria-label={`Cistercian numeral for ${value}`}
    >
      <rect width="100" height="100" fill="white" stroke="none" />

      <line x1="50" y1="20" x2="50" y2="80" {...svgStyles} />

      {units > 0 && <path d={getDigitPath(units)} {...svgStyles} />}

      {tens > 0 && (
        <g transform="translate(50, 50) scale(-1, 1) translate(-50, -50)">
          <path d={getDigitPath(tens)} {...svgStyles} />
        </g>
      )}

      {hundreds > 0 && (
        <g transform="translate(50, 50) scale(1, -1) translate(-50, -50)">
          <path d={getDigitPath(hundreds)} {...svgStyles} />
        </g>
      )}

      {thousands > 0 && (
        <g transform="translate(50, 50) scale(-1, -1) translate(-50, -50)">
          <path d={getDigitPath(thousands)} {...svgStyles} />
        </g>
      )}
    </svg>
  );
});

CistercianDisplay.displayName = "CistercianDisplay";
