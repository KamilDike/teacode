export function paramSort(a: Object, b: Object, param: string) {
  if (a[param] < b[param]) {
    return -1;
  }

  if (a[param] > b[param]) {
    return 1;
  }

  return 0;
}
