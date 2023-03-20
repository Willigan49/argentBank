import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user";

/**
 * Axios setting
 */
export default axios.create({ baseURL: API_URL });
