import { useState } from "react";
import Masonry from "react-masonry-css";
import "./masonry.css";

// Map of allowed folders inside src
const folderContexts = {
  "about-us-images": require.context("./about-us-images/Day 3 Closing Ceremony", true, /\.(jpg|jpeg|png|gif)$/i),
  "team": require.context("./about-us-images/Sports", true, /\.(jpg|jpeg|png|gif)$/i),
  "badminton": require.context("./gallery/images/badminton", true, /\.(jpg|jpeg|png|gif)$/i),
  "basketball": require.context("./gallery/images/basketball", true, /\.(jpg|jpeg|png|gif)$/i),
  "boxing": require.context("./gallery/images/boxing", true, /\.(jpg|jpeg|png|gif)$/i),
  "chess": require.context("./gallery/images/chess", true, /\.(jpg|jpeg|png|gif)$/i),
  "football": require.context("./gallery/images/football", true, /\.(jpg|jpeg|png|gif)$/i),
  "hockey": require.context("./gallery/images/hockey", true, /\.(jpg|jpeg|png|gif)$/i),
  "cricket": require.context("./gallery/images/cricket", true, /\.(jpg|jpeg|png|gif)$/i),
  "volleyball": require.context("./gallery/images/volleyball", true, /\.(jpg|jpeg|png|gif)$/i),
  "athletics": require.context("./gallery/images/athletics", true, /\.(jpg|jpeg|png|gif)$/i),
  "handball": require.context("./gallery/images/handball", true, /\.(jpg|jpeg|png|gif)$/i),
  "aquatics": require.context("./gallery/images/aquatics", true, /\.(jpg|jpeg|png|gif)$/i),
  "taekwondo": require.context("./gallery/images/taekwondo", true, /\.(jpg|jpeg|png|gif)$/i),
  "khokho": require.context("./gallery/images/khokho", true, /\.(jpg|jpeg|png|gif)$/i),
  "z-tennis": require.context("./gallery/images/z-tennis", true, /\.(jpg|jpeg|png|gif)$/i),
  "powerlifting": require.context("./gallery/images/powerlifting", true, /\.(jpg|jpeg|png|gif)$/i),
  "closing": require.context("./gallery/images/closing", true, /\.(jpg|jpeg|png|gif)$/i),
  // Add more folders here if needed
};

// Utility to import all images from a context
function importAll(r) {
  return r.keys().map(r);
}

const breakpointColumnsObj = {
  default: 3,
  900: 2,
  500: 1,
};

const ImageMasonry = ({ folderName }) => {
  // Fallback to 'about-us-images' if folderName not found
  const images = importAll(folderContexts[folderName] || folderContexts["about-us-images"]);

  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.slice(0, visibleCount).map((src, index) => (
          <div key={index} className="card">
            <img
              src={src}
              alt={`img-${index}`}
              loading="lazy"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        ))}
      </Masonry>

      {visibleCount < images.length && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button
            onClick={() => setVisibleCount(c => c + 6)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ImageMasonry;