let userToken = null;

try {
  const userFromLocalStorage = sessionStorage.getItem("token");
  if (userFromLocalStorage) {
    userToken = userFromLocalStorage;
  }
} catch (error) {
  console.error("Error retrieving user token from sessionStorage:", error);
}

export const config = {
  headers: {
    Authorization: userToken ? `Bearer ${userToken}` : "",
    Accept: "application/json",
  },
};