import axios from "axios";
export const createProfile = async (data, token) => {
  console.log(data, token);

  return await axios.post("http://localhost:5000/api/profile", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
