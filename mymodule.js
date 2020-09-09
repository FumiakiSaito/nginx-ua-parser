/**
 * ISO8601形式の日付を変換する
 * 2020-08-03T08:46:11+09:00 -> 2020-08-03 08:46:11
 * @param ISO8601
 * @returns {string}
 * @constructor
 */
export function ISO8601ToDateTime(ISO8601) {
  const d = new Date(ISO8601);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
}

/**
 * URIから機能名に変換
 * @param uri
 */
export function uriToAction(uri) {
  const patternList = [
    {'pattern': /hoge/g, 'action': 'hoge'},
    {'pattern': /fuga/g, 'action': 'fuga'},
    {'pattern': /piyo/g, 'action': 'piyo'},
  ];
  const findPattern = patternList.find(elem => {
    return uri.match(elem.pattern)
  });
  const action = (findPattern === undefined) ? '不明' : findPattern.action
  return action;
}