import React from "react";
import styles from "./Button.module.scss";

const Button = ({ buttonContent, style }) => {
  return (
    <button className={styles.button} style={style}>
      {buttonContent}
    </button>
  );
};

export default Button;
