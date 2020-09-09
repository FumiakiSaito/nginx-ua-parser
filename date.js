/**
 * ISO8601形式の日付を変換する
 * 2020-08-03T08:46:11+09:00 -> 2020-08-03 08:46:11
 * @param ISO8601
 * @returns {string}
 * @constructor
 */
export function ISO8601toDateTime(ISO8601) {
  const d = new Date(ISO8601);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
}