import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, value, style, onChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      style={style}
      onChange={onChange}
    />
  );
};

export default Input;
