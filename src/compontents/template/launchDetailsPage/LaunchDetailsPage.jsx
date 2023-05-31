import React, { useContext } from "react";
import styles from "./LaunchDetailsPage.module.scss";
import { Link, useParams } from "react-router-dom";
import LaunchContext from "../../../context/context";
import Button from "../../atoms/button/Button";
import LinksList from "../../molecules/linksList/LinksList";
import LaunchDetails from "../../organisms/launchDetails/LaunchDetails";

const LaunchDetailsPage = (props) => {
  const { spacexData } = useContext(LaunchContext);
  const { title } = useParams();

  return (
    <div className={styles.launchDetailsContainer}>
      <Link to="/">
        <Button buttonContent={"Wróć"}></Button>
      </Link>
      <LinksList title={title} data={spacexData} />
      <LaunchDetails title={title} data={spacexData} />
    </div>
  );
};

export default LaunchDetailsPage;
