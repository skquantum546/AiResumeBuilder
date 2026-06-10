// Helper to resolve image URLs properly
export const getImageUrl = (imageData) => {
  if (!imageData) return null;

  // If it's already a full URL, return as-is
  if (typeof imageData === 'string' && imageData.startsWith('http')) {
    return imageData;
  }

  // If it's a relative path (like /uploads/xxx), prepend the server base URL
  if (typeof imageData === 'string' && imageData.startsWith('/uploads')) {
    const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
    return baseURL + imageData;
  }

  // If it's a string URL, return as-is
  if (typeof imageData === 'string') {
    return imageData;
  }

  // If it's a File object, create object URL
  if (typeof imageData === 'object' && imageData instanceof File) {
    return URL.createObjectURL(imageData);
  }

  return null;
};
