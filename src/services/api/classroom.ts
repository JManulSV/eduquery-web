import { apiClient } from "../axiosInstance";

export const getClassroomsLocalStorage = async (token:string) => {
  if (!localStorage.getItem("classroom")) {
    try {
      const response = await apiClient.get("/classrooms", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("classroom", JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    const classrooms = localStorage.getItem("classroom");
    return classrooms ? JSON.parse(classrooms) : [];
  }
};
