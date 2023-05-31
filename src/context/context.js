import { createContext, useEffect, useState } from "react";
import axios from "axios";

const LaunchContext = createContext();

function Provider({ children }) {
  const [spacexData, setSpacexData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [startDate, setStartDate] = useState(null);

  const fetchSpacexData = async () => {
    const response = await axios.get("https://api.spacexdata.com/v5/launches");
    setSpacexData(response.data);
    setFilteredData(response.data);
  };

  useEffect(() => {
    fetchSpacexData();
  }, []);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckValue = () => {
    setIsChecked(!isChecked);
  };

  const date = new Date(startDate);
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes()
    )
  );
  const resultDate = JSON.stringify(utcDate);

  const filteredValue = spacexData.filter((launch) => {
    if (
      inputValue.toLocaleLowerCase().substr(0, 3) &&
      launch.name.toLocaleLowerCase().substr(0, 3) !==
        inputValue.toLocaleLowerCase().substr(0, 3)
    ) {
      return false;
    }
    if (isChecked !== false && launch.success !== isChecked) {
      return false;
    }
    if (startDate) {
      const launchDate = launch.date_utc.slice(0, 10);
      const filteredDate = resultDate.slice(1, 11);

      if (launchDate !== filteredDate) {
        return false;
      }
    }

    return true;
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      inputValue === "" &&
      isChecked === false &&
      JSON.stringify(startDate).slice(1, 11) === "ull"
    ) {
      setFilteredData(spacexData);
    } else {
      setFilteredData(filteredValue);
    }
  };

  const valueToShare = {
    spacexData,
    startDate,
    setStartDate,
    handleInputValue,
    handleCheckValue,
    filteredData,
    setFilteredData,
    onSubmit,
  };
  return (
    <LaunchContext.Provider value={valueToShare}>
      {children}
    </LaunchContext.Provider>
  );
}

export { Provider };
export default LaunchContext;
