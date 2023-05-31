import React, { useContext } from "react";
import { FormField } from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";
import { FlightsContext } from "providers/FlightsProvider";
import { filterPredicates } from "constans/constants";
import { DateRangePickerField } from "components/molecules/DateRangePickerField/DateRangePickerField";
import { CheckBoxField } from "components/molecules/CheckBoxField/CheckBoxField";

import styles from "./Header.module.scss";

export const Header = () => {
  const context = useContext(FlightsContext);

  const handleChange = (e) => {
    const isDatepicker = e instanceof Array || e === null;
    if (isDatepicker) {
      context.setFilters((prevState) => ({ ...prevState, date: e }));
    } else {
      const { name, value, type, checked } = e.target;

      context.setFilters((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const activeFilters = Object.fromEntries(
      Object.entries(context.filters).filter(([key, value]) => !!value)
    );

    const filteredFlights = context.flights.filter((flight) => {
      return Object.entries(activeFilters).every(([key, value]) =>
        filterPredicates[key](flight, value)
      );
    });
    context.setFilteredFlights(filteredFlights);
  };

  return (
    <section className={styles.container}>
      <header className={styles.container__header}>
        <form onSubmit={onSubmit} className={styles.container__form}>
          <FormField
            textLabel="Nazwa lotu"
            type="text"
            placeholder="Wpisz nazwę"
            name="name"
            onChange={handleChange}
            value={context.filters.name}
          />
          <DateRangePickerField onChange={handleChange} />
          <CheckBoxField
            name="status"
            type="checkbox"
            onChange={handleChange}
            checked={context.filters.status}
          />
          <Button type="submit" text="Szukaj" />
        </form>
      </header>
    </section>
  );
};

export const filterPredicates = {
  name: (flight, filterValue) =>
    flight.name.toLowerCase().includes(filterValue.toLowerCase()),
  status: (flight, filterValue) => flight.success === filterValue,
  date: (flight, filterValue) => {
    const flightDate = new Date(flight.date_local);

    return flightDate >= filterValue[0] && flightDate <= filterValue[1];
  },
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slider.module.scss";
import photo from "../../../assets/Standard.png";
import Button from "../../atoms/button/Button";
import leftArrow from "../../../assets/leftArrow.png";
import rightArrow from "../../../assets/rightArrow.png";
import { dietsDetails } from "../../../data/data";
import { Link } from "react-router-dom";

const Slider = ({ slides }) => {
  const [currentSlideCenter, setCurrentSlideCenter] = useState(0);
  const [currentSlideLeft, setCurrentSlideLeft] = useState(4);
  const [currentSlideRight, setCurrentSlideRight] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlideCenter(
      currentSlideCenter === length - 1 ? 0 : currentSlideCenter + 1
    );
    setCurrentSlideLeft(
      currentSlideLeft === length - 1 ? 0 : currentSlideLeft + 1
    );
    setCurrentSlideRight(
      currentSlideRight === length - 1 ? 0 : currentSlideRight + 1
    );
    console.log(length);
  };

  const prevSlide = () => {
    setCurrentSlideCenter(
      currentSlideCenter === 0 ? length - 1 : currentSlideCenter - 1
    );
    setCurrentSlideLeft(
      currentSlideLeft === 0 ? length - 1 : currentSlideLeft - 1
    );
    setCurrentSlideRight(
      currentSlideRight === 0 ? length - 1 : currentSlideRight - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <p className={styles.sliderContainer__tittle}>
        Every day <br /> tastes <br className={styles.mobileBreak} /> great
      </p>
      <div className={styles.sliderContainer__photoWrapper}>
        {dietsDetails.map((diet, index) => {
          return (
            index === currentSlideLeft && (
              <div className={styles.sliderContainer__photoWrapper__left}>
                {index === currentSlideLeft && (
                  <img
                    className={styles.photo}
                    src={diet.photo}
                    key={index}
                    alt=""
                  />
                )}
              </div>
            )
          );
        })}
        {dietsDetails.map((diet, index) => {
          return (
            index === currentSlideCenter && (
              <div className={styles.sliderContainer__photoWrapper__center}>
                <div
                  className={
                    styles.sliderContainer__photoWrapper__center__wrapper
                  }
                >
                  <button
                    onClick={prevSlide}
                    className={
                      styles.sliderContainer__photoWrapper__center__wrapper__leftArrow
                    }
                  >
                    <img src={leftArrow} alt="" />
                  </button>
                  {index === currentSlideCenter && (
                    <img
                      className={styles.photo}
                      src={diet.photo}
                      key={index}
                      alt=""
                    />
                  )}
                  <button
                    onClick={nextSlide}
                    className={
                      styles.sliderContainer__photoWrapper__center__wrapper__rightArrow
                    }
                  >
                    <img src={rightArrow} alt="" />
                  </button>
                </div>

                <div
                  className={styles.sliderContainer__photoWrapper__center__info}
                >
                  <p
                    className={
                      styles.sliderContainer__photoWrapper__center__info__dietName
                    }
                    key={index}
                  >
                    {diet.name}
                  </p>
                  <div
                    className={
                      styles.sliderContainer__photoWrapper__center__info__buttons
                    }
                  >
                    <Button name="zamów online" color="#FFB526" />
                    <Link to={`/diets/${diet.name}`}>
                      <Button name="więcej o diecie" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          );
        })}

        {dietsDetails.map((diet, index) => {
          return (
            index === currentSlideRight && (
              <div className={styles.sliderContainer__photoWrapper__right}>
                {index === currentSlideRight && (
                  <img
                    className={styles.photo}
                    src={diet.photo}
                    key={index}
                    alt=""
                  />
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
