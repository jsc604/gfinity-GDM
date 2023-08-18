export function sortByName(array: any[], isAscending: boolean, key: string) {
  return array.slice().sort((a, b) => {
    if (a[key] === undefined) return isAscending ? 1 : -1;
    if (b[key] === undefined) return isAscending ? -1 : 1;

    const sortOrder = isAscending ? 1 : -1;
    return a[key].trim().localeCompare(b[key].trim()) * sortOrder;
  });
}
