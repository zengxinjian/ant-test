/**
 * Created by Administrator on 2018/4/3.
 */
import fetchJsonp from 'fetch-jsonp';
import MD5 from './md5'

const apiUrl='http://api.fanyi.baidu.com/api/trans/vip/translate';
const appid = '20180403000142715';
const key = 'LhCadgdCVkmgiwagY6ol';

export const fanyi =({query})=>{
  const salt = (new Date).getTime();
  const params={
    appid,
    salt,
    from:'zh',
    to:'en',
    q:query,
    sign:MD5(appid+query+salt+key),
  };
  const paramsStr=Reflect.ownKeys(params).reduce((total,item)=>(total+`${item}=${params[item]}&`),'')
  return fetchJsonp(apiUrl+`?${paramsStr}`).then(function(response) {
    return response.json()
  }).then(function(json) {
    return json || {}
  }).catch(()=>{
    return {};
  })
}
