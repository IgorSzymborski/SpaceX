import React from "react";
import styles from './LaunchList.module.scss'
import LaunchListItem from "../../molecules/launchListItem/LaunchListItem";

const LaunchList = (props) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.listContainer_list} >
        <LaunchListItem />
      </ul>
    </div>
  );
};

export default LaunchList;
