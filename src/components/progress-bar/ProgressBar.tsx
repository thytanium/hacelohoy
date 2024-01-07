interface ProgressBarProps {
  height?: number;
  value: number;
}

export default function ProgressBar({ height = 16, value }: ProgressBarProps) {
  return (
    <div className="w-full rounded bg-gray-200" style={{ height }}>
      <div
        className="h-full rounded bg-green-500"
        style={{
          width: `${value}%`,
          transitionProperty: "width",
          transitionDuration: "200ms",
          transitionTimingFunction: "ease-in",
        }}
      />
    </div>
  );
}
