import axios from "axios";

// const apiKey = "38f4ad5cc0254ac3cc83e49224c2dbd3";
const baseURL = `http://localhost:3000/`;
class ApiService {
  constructor() {
    this.resource = axios.create({ baseURL });
    
  }
  // Retorna los users
  getUsers(email) {
    console.log(email); 
    return this.resource.get(`getusers/${email}`);
  }
//   getPopular(currentPage) {
//     return this.resource.get(`user?${this.apiKey}&page=${currentPage}`);
//   }
  
}
export default new ApiService();
