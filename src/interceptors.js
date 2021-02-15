import axios from 'axios'

axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.request && error.request.status === 401) {
        // Set Failed Request
        let failedRequest = error.config;
        
        //Method to get new token
        return renewUserToken().then(response => {
          // Set axios instance header
          axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.token;
          
          // Set failed request header
          failedRequest.headers['Authorization'] = 'Bearer ' + response.token;
          
          //Retry failed request
          return axios.request(failedRequest);
        });
      }
      throw error;
    },
  );