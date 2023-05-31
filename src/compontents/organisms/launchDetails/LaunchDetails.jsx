import React from "react";
import styles from "./LaunchDetails.module.scss";
import Description from "../../molecules/description/Description";
import Slider from "../../molecules/slider/Slider";

const LaunchDetails = ({ title, data }) => {
  return (
    <div className={styles.launchDetailsWrapper}>
      <Slider title={title} data={data} />
      <Description title={title} data={data} />
    </div>
  );
};

export default LaunchDetails;
