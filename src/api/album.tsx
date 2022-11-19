import axios from "axios";
import URI from "../shared/utils/Constants/Constants";

const getAlbumData = async () => {
  const response = await axios.get(`${URI}`);
  return (response.data);
};

export default getAlbumData;
