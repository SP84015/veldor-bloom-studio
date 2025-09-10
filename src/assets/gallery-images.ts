// Gallery image imports for easy management
import galleryIronGate from "./gallery-iron-gate.jpg";
import galleryRailings from "./gallery-railings.jpg";
import galleryPlanters from "./gallery-planters.jpg";
import galleryWallArt from "./gallery-wall-art.jpg";
import galleryFabrication from "./gallery-fabrication.jpg";
import galleryRestoration from "./gallery-restoration.jpg";

export const galleryImages = {
  "/src/assets/gallery-iron-gate.jpg": galleryIronGate,
  "/src/assets/gallery-railings.jpg": galleryRailings,
  "/src/assets/gallery-planters.jpg": galleryPlanters,
  "/src/assets/gallery-wall-art.jpg": galleryWallArt,
  "/src/assets/gallery-fabrication.jpg": galleryFabrication,
  "/src/assets/gallery-restoration.jpg": galleryRestoration,
};

// Function to get the actual image URL from database path
export const getGalleryImageUrl = (dbPath: string): string => {
  return galleryImages[dbPath] || dbPath;
};