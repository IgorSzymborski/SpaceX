import React, { useContext } from "react";
import styles from "./FormField.module.scss";
import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";
import LaunchContext from "../../../context/context";

const FormField = ({ onChange }) => {
  const { handleInputValue } = useContext(LaunchContext);

  return (
    <div className={styles.formFieldWrapper}>
      <Label labelContent={"Nazwa lotu"} />
      <Input
        type={"text"}
        placeholder={"Wprowadź nazwę lotu"}
        onChange={handleInputValue}
      />
    </div>
  );
};

export default FormField;
