export const subscribeToNewsletter = async (email) => {
    // Basic client-side validation
    if (!email || !email.includes("@")) {
      throw new Error("Invalid email");
    }
  
    // Simulate network delay (feels real)
    await new Promise((resolve) => setTimeout(resolve, 1200));
  
    return {
      status: "pending",
      message: "Newsletter feature is under development",
    };
  };
  