import axios from "axios"


class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl;
        this.token = null;
        this.tokenName = "weDeliver_token";
      }
    
      setToken(token) {
        this.token = token;
        localStorage.setItem(this.tokenName, token);
      }
    
      async request({ endpoint, method = "GET", data = {} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`;
        const headers = {
          "Content-Type": "application/json",
        };
    
        if (this.token) headers["Authorization"] = `Bearer ${this.token}`;
    
        try {
          const res = await axios({ url, method, data, headers });
          console.log();
          return { data: res.data, error: null };
        } catch (error) {
          console.error({ errorResponse: error.response });
          const message = error?.response?.data?.error?.message;
          return { data: null, error: message || String(error) };
        }
      }
    
      async login(credentials) {
        return await this.request({
          endpoint: `auth/login`,
          method: `POST`,
          data: credentials,
        });
      }
      async signup(credentials) {
        return await this.request({
          endpoint: `auth/register`,
          method: `POST`,
          data: credentials,
        });
      }
      async logout() {
        this.setToken(null);
        localStorage.setItem(this.tokenName, "");
      }
    
  // GET Requests

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }

  async fetchUserFromId(userId) {
    return await this.request({ endpoint: `auth/` + userId, method: `GET` });
  }

  // POST requests

  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }

  async signupUser(credentials) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }

  //PUT requests

  async updateUser(userUpdate, userId) {
    return await this.request({
      endpoint: `auth/` + userId,
      method: `PUT`,
      data: userUpdate,
    });
  }

  //DELETE requests

  async deleteUser(userId) {
    return await this.request({ endpoint: `auth/` + userId, method: `DELETE` });
  }
}


export default new ApiClient( "http://localhost:5000");