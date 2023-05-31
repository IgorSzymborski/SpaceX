import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LaunchContext from "../../../context/context";
import Button from "../../atoms/button/Button";
import styles from "./LaunchListItem.module.scss";

const LaunchListItem = (props) => {
  const { filteredData } = useContext(LaunchContext);

  const renderedItems = filteredData.map((launch) => {
    return (
      <li className={styles.listItem} key={launch.name}>
        <div className={styles.listItem_imgWrapper}>
          <img
            className={styles.listItem_imgWrapper__img}
            src={launch.links.flickr.original[0]}
            alt="Brak fotografii w przypadku tego lotu"
          />
        </div>
        <div className={styles.listItem_detailsWrapper}>
          <h2 className={styles.listItem_detailsWrapper__detailTitle}>
            {launch.name}
          </h2>
          <p className={styles.listItem_detailsWrapper__detail}>
            Numer lotu: {launch.flight_number}
          </p>
          <p className={styles.listItem_detailsWrapper__detail}>
            {launch.success === true ? "Lot udany" : "Lot nieudany"}
          </p>
          <Link to={`/details/${launch.flight_number}`}>
            <Button
              buttonContent={"Więcej o locie"}
              style={{ backgroundColor: "#4A36E0" }}
            />
          </Link>
        </div>
      </li>
    );
  });

  return <>{renderedItems}</>;
};

export default LaunchListItem;
