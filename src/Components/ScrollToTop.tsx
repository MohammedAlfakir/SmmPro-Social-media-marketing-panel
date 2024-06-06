"use client";
import { useState, useEffect } from "react";
import backToTopLogo from "../../public/backToTop.png";
import Image from "next/image";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
          className="back_to_top_btn"
        >
          <Image src={backToTopLogo} alt="Back Top Img" width={50} />
        </button>
      )}
    </div>
  );
};

// Define TypeScript style type
type StyleType = {
  button: React.CSSProperties;
};

const styles: StyleType = {
  button: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    padding: "2px 2px",
    fontSize: "12px",
    backgroundColor: "#040f2e",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default ScrollToTop;
