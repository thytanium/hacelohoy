interface TodoStatsProps {
  todoCount: number;
  completedCount: number;
  completedRatio: number;
}

export default function TodoStats({
  todoCount,
  completedCount,
  completedRatio,
}: TodoStatsProps) {
  return (
    <>
      <span className="text-sm">
        {completedCount} / {todoCount}
      </span>
      <span className="text-sm text-gray-300 dark:text-gray-700">|</span>
      <span className="text-sm">{Math.round(completedRatio * 100)}%</span>
    </>
  );
}
