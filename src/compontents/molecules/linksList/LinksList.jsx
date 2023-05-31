import React from "react";
import styles from "./LinksList.module.scss";
import { FaWikipediaW, FaYoutube, FaReddit } from "react-icons/fa";

const LinksList = ({ title, data }) => {
  const filteredList = data.filter((launch) => {
    return launch.flight_number === parseInt(title);
  });

  const renderedItems = filteredList.map((launch) => {
    return (
      <div className={styles.listContainer} key={launch.flight_number}>
        <ul className={styles.listContainer_list}>
          <li className={styles.listContainer_list__item}>
            <a
              href={launch.links.reddit.launch}
              target="_blank"
              without
              rel="noreferrer"
            >
              <FaReddit className={styles.icon} />
            </a>
          </li>
          <li className={styles.listContainer_list__item}>
            <a
              href={launch.links.webcast}
              target="_blank"
              without
              rel="noreferrer"
            >
              <FaYoutube className={styles.icon} />
            </a>
          </li>
          <li className={styles.listContainer_list__item}>
            <a
              href={launch.links.wikipedia}
              target="_blank"
              without
              rel="noreferrer"
            >
              <FaWikipediaW className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    );
  });

  return <>{renderedItems}</>;
};

export default LinksList;
