import axios from "axios";

// const apiKey = "38f4ad5cc0254ac3cc83e49224c2dbd3";
const baseURL = `http://localhost:3000/`;
class ApiService {
  constructor() {
    this.resource = axios.create({ baseURL });
    
  }
  // Retorna los users
  getUsers(email, password) {
    // console.log(password); 
    return this.resource.get(`getusers/${email}/${password}`);
  }

  
}
export default new ApiService();
