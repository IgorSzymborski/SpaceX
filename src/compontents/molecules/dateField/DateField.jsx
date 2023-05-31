import React, { useContext, useState } from "react";
import styles from "./DateField.module.scss";
import Label from "../../atoms/label/Label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LaunchContext from "../../../context/context";

const DateField = (props) => {
  const { startDate, setStartDate } = useContext(LaunchContext);

  return (
    <div className={styles.dateFieldWrapper}>
      <Label labelContent={"Data lotu"} />

      <DatePicker
        className={styles.datePicker}
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Wprowadź datę lotu"
        value={startDate}
      />
    </div>
  );
};

export default DateField;
