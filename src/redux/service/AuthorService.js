import api1 from "./api1";

const getAllAuthor = async () => {
  try {
    const response = await api1.get(`/author/all?page=1&size=100`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    // Handle the error here
    console.error("Error in addBook:", error);
    throw error;
  }
};
const getfeatureAuthor = async () => {
  try {
    const response = await api1.get(`/author/feature?page=1&size=10`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    // Handle the error here
    console.error("Error in getAuthor:", error);
    throw error;
  }
};




const AuthorServise = {getAllAuthor,getfeatureAuthor};

export default AuthorServise;
