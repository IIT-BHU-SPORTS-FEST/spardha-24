import { useState } from "react";
import Masonry from "react-masonry-css";
import "./masonry.css";

const images = Array.from({ length: 100 }, (_, i) => `/about-us-images/img${i + 1}.jpg`); 
// 👆 generate paths, or make a manual list

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

const ImageMasonry = () => {
  const [visibleCount, setVisibleCount] = useState(20);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.slice(0, visibleCount).map((src, index) => (
          <div key={index}>
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
            onClick={() => setVisibleCount(c => c + 20)}
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
