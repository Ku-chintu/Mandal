// Convert file to base64 string
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
  });
};

// Validate email
const isValidateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false; // Indicate validation failure
  }
  return true; // Indicate validation success
};

export default {
  convertFileToBase64,
  isValidateEmail,
};
