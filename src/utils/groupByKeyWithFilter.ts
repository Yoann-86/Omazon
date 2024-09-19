export default function groupByKeyWithValue<T, K extends keyof T>(
  array: T[],
  key: K,
  filterValue: T[K], // Type de filterValue correspond à celui de la clé
): Record<string, T[]> {
  const grouped = array.reduce(
    (groups, current) => {
      // Vérifie si l'élément a la valeur attendue pour la clé donnée
      if (current[key] !== filterValue) {
        return groups;
      }

      const currentKey = String(current[key]);

      if (!groups[currentKey]) {
        groups[currentKey] = [];
      }

      groups[currentKey].push(current);

      return groups;
    },
    {} as Record<string, T[]>,
  );

  return grouped;
}
