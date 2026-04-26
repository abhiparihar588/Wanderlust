export const getOptimizedImageUrl = (url, width = 800) => {
  if (!url) return url;
  
  // Check if it's a Cloudinary URL
  if (url.includes('res.cloudinary.com')) {
    // Add transformations: auto format, auto quality, width
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      return `${parts[0]}/upload/f_auto,q_auto,w_${width}/${parts[1]}`;
    }
  }
  
  return url;
};
