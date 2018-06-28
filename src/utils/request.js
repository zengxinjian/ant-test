import fetch from 'dva/fetch';
import { notification } from 'antd';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: response.statusText,
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        });
      }
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message,
        });
      }
      return error;
    });
}


//获取URL地址的参数值。
//name为URL参数名
//例如：?param1=abc&param2=123
//当调用GetURLparam("param2"）时，获取到的值为：123
export const getUrlParam = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r !== null)return r[2];
  return null;
};

const objToUrlParame = (data) => {
  let result = '';
  if (!data) {
    return result;
  }

  for (const item of Object.keys(data)) {
    result += `${item}=${data[item]}&`;
  }
  if (result) {
    result = result.substr(0, result.length - 1);
  }

  return result;
};
const loading=()=>{};
const hide=loading;
const systemError=loading;


const parseJSON = response => response.json();

const checkStatus = response => response;

const request = (url, options, config) => new Promise((resolve, reject) => {
  const { hideFail, hideLoading } = config;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };
  /*const token = getStorage(storageKey.userToken);
  const admintoken = getStorage(storageKey.adminToken);

  if (token) {
    headers.Authorization = `TaiDuReferrer ${encodeURIComponent(token)}`;
  }
  if (admintoken) {
    headers.AdminAuthorization = `TaiDuReferrer ${encodeURIComponent(admintoken)}`;
  }*/

  if (!hideLoading) {
    loading('正在加载');
  }

  fetch(url, {
    ...options,
    headers
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      const { Status } = data;
      if (Status === -100) {
        // 未登录
        return;
      }
      resolve(data.Data);
      /*
      if (data.IsSuccess) {
        return;
      }

      reject(data);
      const error = new Error(data);
      error.message = data.Message;
      throw error;*/
    })
    .catch((e) => {
      hide();
      reject();
      if (!hideFail) {
        systemError(e.message);
      }
      throw e;
    });
});

const httpGet = (url, data, config) => {
  let requestUrl = (url);
  const parame = objToUrlParame(data);

  if (parame) {
    if (requestUrl.indexOf('?') < 0) {
      requestUrl += `?${parame}`;
    } else {
      requestUrl += `&${parame}`;
    }
  }

  return request(requestUrl, {}, config);
};

const httPost = (url, data, config) => {
  const requestUrl = (url);

  const opt = {
    method: 'POST',
    body: JSON.stringify(data)
  };

  return request(requestUrl, opt, config);
};

export const http = (requestApi, option, hideLoading) => {
  const data = {
    ...option
  };

  const { hideFail = false, hideLoading: apiHideLoading = false } = requestApi;
  const hideLoad = hideLoading || apiHideLoading;
  switch (requestApi.method) {
    case 'post':
      return httPost(requestApi.url, data, { hideFail, hideLoading: hideLoad });
    case 'get':
    default:
      return httpGet(requestApi.url, data, { hideFail, hideLoading: hideLoad });
  }
};

