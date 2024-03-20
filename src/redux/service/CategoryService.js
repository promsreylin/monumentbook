import api1 from "./api1";
import api2 from "./api2";

const getAllCategory = async () => {
  try {
    const response = await api2.get(`/category/all?page=1&size=500`);
    return response.data;
  } catch (error) {
    // Handle the error here
    console.error("Error in getAllBook:", error);
    throw error; // You can rethrow the error if you want it to propagate to the calling code
  }
};

const CategoryService = {getAllCategory};

export default CategoryService;
