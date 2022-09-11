/**
 *
 * @param {string[]} arr
 * @param {string} s1
 * @param {string} s2
 * @returns
 */
export function lstrJoin(arr: string[], s1: string, s2: string) {
  return arr
    .slice(0, -1)
    .join(s1)
    .concat(arr.length > 1 ? s2 : "", ...arr.slice(-1));
}

/**
 *
 * @param {string | string[]} str
 * @returns
 */
export function strJoined(str: string | string[]) {
  return `${str instanceof Array ? lstrJoin(str, ", ", " and/or ") : str}`;
}
