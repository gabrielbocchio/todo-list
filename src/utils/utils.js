export const generateRandomId = () => {
    const timestamp = Date.now().toString();
    const random = Math.ceil(Math.random() * 1000000).toString();
    return timestamp + random;
  }