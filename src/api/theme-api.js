import authInstance from "./auth-api";

export const updateTheme = async (theme) => {
  try {
    const response = await authInstance.post('./users/edit/theme', { theme })
    return response.data
  } catch (error) {
    console.error("Failed to update user theme:", error)
    throw error
  }
}

export const getUserTheme = async (userId) => {
  try {
    const response = await authInstance.get(
      `/user/${userId}`
    )
    return response.data.theme
  } catch (error) {
    console.error("Failed to get user theme:", error)
    throw error;
  }
}
