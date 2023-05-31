import React, { useState } from "react";
import styles from "./Slider.module.scss";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Slider = ({ title, data }) => {
  const [currentPhoto, setCurrentPhoto] = useState(1);

  const filteredLaunch = data.filter((launch) => {
    return launch.flight_number === parseInt(title);
  });

  const length = filteredLaunch.map((launch) => {
    return launch.links.flickr.original.length;
  });

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1);
  };

  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1);
  };

  const renderedItems = filteredLaunch.map((launch, index) => {
    return (
      <img
        className={styles.imgWrapper_img}
        src={launch.links.flickr.original[currentPhoto]}
        alt="Brak fotografii w przypadku tego lotu"
        key={index}
      />
    );
  });

  return (
    <div className={styles.imgWrapper}>
      {renderedItems}
      <div className={styles.imgWrapper_buttonWrapper}>
        <button
          className={styles.imgWrapper_buttonWrapper__button}
          onClick={prevPhoto}
        >
          <HiArrowSmLeft />
        </button>
        <button
          className={styles.imgWrapper_buttonWrapper__button}
          onClick={nextPhoto}
        >
          <HiArrowSmRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
