export default function groupByKey<T, K extends keyof T>(array: T[], key: K) {
  return array.reduce(
    (groups, current) => {
      const currentKey = String(current[key]);

      if (!groups[currentKey]) {
        groups[currentKey] = [];
      }

      groups[currentKey].push(current);

      return groups;
    },
    {} as Record<string, T[]>,
  );
}
