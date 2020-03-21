import Axios from "axios";
import { userDataStorage } from "../stores/user-data.store";
import { push, pop, replace } from "svelte-spa-router";
import NProgress from "nprogress";
import loginService from "./login.service";

export const fetchData = async (url, errorHandler) => {
  const accessToken = await userDataStorage.getToken();
  const headerConfig = { headers: { Authorization: "Bearer " + accessToken } };
  NProgress.start();
  try {
    return await Axios.get(url, headerConfig)
      .catch(function(error) {
        if (error.response) {
          if (error.response.status >= 400) {
            handleError(error.response);
            if (errorHandler) return errorHandler(error.response);
          }
        } else {
          handleError(error);
          if (errorHandler) return errorHandler(error);
        }
      })
      .then(d => (d ? d.data : null));
  } catch (ex) {
    if (errorHandler) return errorHandler(ex);
    handleError(ex, true);
  } finally {
    NProgress.done();
  }
};

export const postData = async (url, data, errorHandler) => {
  const accessToken = await userDataStorage.getToken();
  const headerConfig = { headers: { Authorization: "Bearer " + accessToken } };
  NProgress.start();
  try {
    return await Axios.post(url, data, headerConfig)
      .catch(function(error) {
        if (error.response) {
          if (error.response.status >= 400) {
            handleError(error.response);
            if (errorHandler) return errorHandler(error.response);
          }
        } else {
          handleError(error);
          if (errorHandler) return errorHandler(error);
        }
      })
      .then(d => (d ? d.data : null));
  } catch (ex) {
    if (errorHandler) return errorHandler(ex);
    handleError(ex, true);
  } finally {
    NProgress.done();
  }
};

export const putData = async (url, data, errorHandler) => {
  const accessToken = await userDataStorage.getToken();
  const headerConfig = { headers: { Authorization: "Bearer " + accessToken } };
  NProgress.start();
  try {
    return await Axios.put(url, data, headerConfig)
      .catch(function(error) {
        if (error.response) {
          if (error.response.status >= 400) {
            handleError(error.response);
            if (errorHandler) return errorHandler(error.response);
          } else {
            handleError(error);
            if (errorHandler) return errorHandler(error);
          }
        }
      })
      .then(d => (d ? d.data : null));
  } catch (ex) {
    if (errorHandler) return errorHandler(ex);
    handleError(ex, true);
  } finally {
    NProgress.done();
  }
};

export const deleteData = async (url,errorHandler) => {
    const accessToken = await userDataStorage.getToken();
    const headerConfig = { headers: { Authorization: "Bearer " + accessToken } };
    NProgress.start();
    try {
      return await Axios.delete(url, headerConfig)
        .catch(function(error) {
          if (error.response) {
            if (error.response.status >= 400) {
              handleError(error.response);
              if (errorHandler) return errorHandler(error.response);
            } else {
              handleError(error);
              if (errorHandler) return errorHandler(error);
            }
          }
        })
        .then(d => (d ? d.data : null));
    } catch (ex) {
      if (errorHandler) return errorHandler(ex);
      handleError(ex, true);
    } finally {
      NProgress.done();
    }
  };

const checkForLoginExpired = async response => {
  if (
    response &&
    response.status === 401 &&
    response.data &&
    response.data.error &&
    response.data.error.code === "token_expired"
  ) {
    loginService.logout();
  }
};

export const handleError = (error, catastrofic = false) => {
  checkForLoginExpired(error);

  console.error(error);
};
