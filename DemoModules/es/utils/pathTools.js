// /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
// eslint-disable-next-line import/prefer-default-export
import qs from 'qs';
export function urlToList(url) {
  if (!url || url === '/') {
    return ['/'];
  }

  const urlList = url.split('/').filter(i => i);
  return urlList.map((urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}
export const getURLSearch = () => {
  const res = {};
  const search = qs.parse(window.location.search.split('?')[1]);
  if (!search) return res;
  return search;
};
export const saveQuery = (query = {}) => {
  const hash = window.location.hash || '';
  const path = hash.split('?')[0];
  const search = getURLSearch();
  const queryString = qs.stringify({ ...search,
    ...query
  });
  window.history.replaceState(null, '', `${path}?${queryString}`);
};