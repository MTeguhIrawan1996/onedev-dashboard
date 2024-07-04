import { AxiosResponse } from 'axios';

import { instance as axios } from './axios';

function handleResponse(response: any) {
  // if (response.results) {
  //   return Promise.resolve(response.results);
  // }

  // if (response.data) {
  //   return Promise.resolve(response.data);
  // }

  return Promise.resolve(response);
}

function handleError(error: any) {
  // if (error.data) {
  //   return Promise.reject(error.data);
  // }

  // if (error.response.data) {
  //   return Promise.reject(error.response.data);
  // }
  return Promise.reject(error);
}

const get = async <T>(resource: string): Promise<AxiosResponse<T, any>> => {
  try {
    const response = await axios.get(resource);
    return response;
  } catch (error: any) {
    return Promise.reject(error);
  }
  // return axios.get(resource).then(handleResponse).catch(handleError);
};

const post = async <T>(
  resource: string,
  model: object,
  options?: object,
): Promise<T> => {
  try {
    const response = await axios.post(resource, model, options);
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

const put = async <T>(resource: string, model: object): Promise<T> => {
  return axios.put(resource, model).then(handleResponse).catch(handleError);
};

const patch = async <T>(resource: string, model: object): Promise<T> => {
  return axios.patch(resource, model).then(handleResponse).catch(handleError);
};

const remove = async <T>(resource: string): Promise<T[]> => {
  return axios
    .delete(resource, {
      headers: {
        'content-type': 'application/json',
      },
      data: {},
    })
    .then(handleResponse)
    .catch(handleError);
};

const exportedObject = {
  get,
  post,
  put,
  patch,
  remove,
};

export default exportedObject;
