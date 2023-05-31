import React from "react";
import styles from "./Description.module.scss";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";

const Description = ({ title, data }) => {
  const launchFilter = data.filter((launch) => {
    return launch.flight_number === parseInt(title);
  });

  const renderedItems = launchFilter.map((launch) => {
    return (
      <div className={styles.descriptionWrapper} key={launch.flight_number}>
        <div>
          <h1 className={styles.descriptionWrapper_launchName}>
            {launch.name}
          </h1>
          <p className={styles.descriptionWrapper_text}>
            {launch.details != null
              ? launch.details
              : "Brak opisu w przypadku tego lotu"}
            .
          </p>
        </div>
        <div className={styles.descriptionWrapper_detailsWrapper}>
          <p className={styles.descriptionWrapper_detailsWrapper__detail}>
            Numer lotu: {launch.flight_number}
          </p>
          <p className={styles.descriptionWrapper_detailsWrapper__detail}>
            Data lotu: {launch.date_utc.slice(0, 10)}
          </p>
          <p className={styles.descriptionWrapper_detailsWrapper__detail}>
            Lot udany
            <span
              className={
                launch.success === true ? styles.iconCheck : styles.iconX
              }
            >
              {launch.success === true ? <HiOutlineCheck /> : <HiOutlineX />}
            </span>
          </p>
        </div>
      </div>
    );
  });

  return <>{renderedItems}</>;
};

export default Description;
