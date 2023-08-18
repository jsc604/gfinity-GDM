export function sortByNumber(array: any[], isAscending: boolean, key: string) {
  if (key === "rating") {
    return array.slice().sort((a, b) => {
      if (a[key] === undefined) return isAscending ? 1 : -1;
      if (b[key] === undefined) return isAscending ? -1 : 1;

      const sortOrder = isAscending ? 1 : -1;
      return (a[key] - b[key]) * sortOrder;
    });
  } else {
    return array.slice().sort((a, b) => {
      if (a.statistics[key].average === undefined) return isAscending ? 1 : -1;
      if (b.statistics[key].average === undefined) return isAscending ? -1 : 1;

      const sortOrder = isAscending ? 1 : -1;
      return (
        (a.statistics[key].average - b.statistics[key].average) * sortOrder
      );
    });
  }
}
