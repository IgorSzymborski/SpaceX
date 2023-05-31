import React from "react";
import styles from "./CheckField.module.scss";
import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";
import { useContext } from "react";
import LaunchContext from "../../../context/context";

const CheckField = (props) => {
  const { handleCheckValue } = useContext(LaunchContext);

  return (
    <div className={styles.checkFieldWrapper}>
      <Label labelContent={"Pokaż tylko udane loty"} />
      <Input
        style={{
          transform: "scale(1.8)",
          marginLeft: "20px",
        }}
        type={"checkbox"}
        onChange={handleCheckValue}
      />
    </div>
  );
};

export default CheckField;
