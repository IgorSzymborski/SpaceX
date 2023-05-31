import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Button from "../../atoms/button/Button";
import CheckField from "../../molecules/checkField/CheckField";
import DateField from "../../molecules/dateField/DateField";
import FormField from "../../molecules/formField/FormField";
import LaunchContext from "../../../context/context";

const Header = () => {
  const { onSubmit } = useContext(LaunchContext);

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerContainer_title}>SpaceX Launches</h1>
      <form className={styles.headerContainer_form} onSubmit={onSubmit}>
        <FormField />
        <DateField />
        <CheckField />
        <Button buttonContent={"Szukaj"} />
      </form>
    </header>
  );
};

export default Header;
