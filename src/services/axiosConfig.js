export const getToken = () => {
  try {
    const userToken = sessionStorage.getItem("token");
    return userToken ? `Bearer ${userToken}` : "";
  } catch (error) {
    console.error("Error retrieving user token from sessionStorage:", error);
    return "";
  }
};

export const setToken = (token) => {
  try {
    sessionStorage.setItem("token", token);
  } catch (error) {
    console.error("Error setting user token to sessionStorage:", error);
  }
};

export const clearToken = () => {
  try {
    sessionStorage.removeItem("token");
  } catch (error) {
    console.error("Error clearing user token from sessionStorage:", error);
  }
};
