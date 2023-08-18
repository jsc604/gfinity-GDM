export function sortByTwoKeys(
  array: any[],
  isAscending: boolean,
  key1: string,
  key2: string
) {
  return array.slice().sort((a, b) => {
    const sortOrder = isAscending ? 1 : -1;

    if (a[key1] === b[key1]) {
      return a[key2].localeCompare(b[key2]) * sortOrder;
    }

    return a[key1].localeCompare(b[key1]) * sortOrder;
  });
}
