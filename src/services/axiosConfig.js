let userToken = null;

try {
  const userFromLocalStorage = localStorage.getItem("token");
  if (userFromLocalStorage) {
    userToken = userFromLocalStorage;
  }
} catch (error) {
  console.error("Error retrieving user token from localStorage:", error);
}

export const config = {
  headers: {
    Authorization: userToken ? `Bearer ${userToken}` : "",
    Accept: "application/json",
  },
};