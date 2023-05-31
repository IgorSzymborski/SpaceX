import React from "react";
import styles from './Label.module.scss'

const Label = ({ labelContent }) => {
  return <label className={styles.label}>{labelContent}</label>;
};

export default Label;
