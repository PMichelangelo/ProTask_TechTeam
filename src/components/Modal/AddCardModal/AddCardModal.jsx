import css from "./addcardModal.module.css";

import sprite from "../../../images/icons.svg"
import FormBtn from "./../FormBtn/FormBtn"

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const INITIAL_STATE = {
  title: '',
  description: '',
  color: 'Low',
};

const AddCardModal = ({ onClose, onSubmit }) => {
  const [addCardModalState, setAddCardModal] = useState({ ...INITIAL_STATE });
  const [selectedDate, setSelectedDate] = useState(new Date());
 
 
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAddCardModal({ ...addCardModalState, [name]: value });
  };

  const handleChangeData= date => {
    setSelectedDate(date);
  }
  const handleSubmit = e => {
    e.preventDefault();
    onClose(false);
    console.log({ ...addCardModalState });
    setAddCardModal({ ...INITIAL_STATE });
  };

  const { title, description, color } = addCardModalState;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        value={title}
        className={css.input}
        type="text"
        name="title"
        required
        placeholder="Title "
        onChange={handleChange}
      ></input>

      <textarea
        className={css.textarea}
        value={description}
        name="description"
        rows="7"
        required
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <div className={css.radio_container}>
        <p className={css.sub_title}>Label color</p>
        <div className={css.radio_container_item}>
          <div>
            <input
              checked={color === 'Low'}
              className={css.radio_input}
              name="color"
              type="radio"
              value="Low"
              id="Low"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="Low">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    color === 'Low' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
            </label>
          </div>

          <div>
            <input
              checked={color === 'Medium'}
              className={css.radio_input}
              name="color"
              type="radio"
              value="Medium"
              id="Medium"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="Medium">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    color === 'Medium' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
            </label>
          </div>

          <div>
            <input
              checked={color === 'High'}
              className={css.radio_input}
              name="color"
              type="radio"
              value="High"
              id="High"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="High">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    color === 'High' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
              <span className={css.span}></span>
            </label>
          </div>
          <div>
            <input
              checked={color === 'Without'}
              className={css.radio_input}
              name="color"
              type="radio"
              value="Without"
              id="Without"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="Without">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    color === 'Without' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

       <div className={css.datapicer_conteinet}>
      <p className={css.sub_title} >Deadline</p>
      <DatePicker
        
        selected={selectedDate}
        onChange={handleChangeData}
        dateFormat="dd/MM/yyyy"
      />    
    </div>
      <FormBtn textBtn={"Add"} />
    </form>
  );
};

export default AddCardModal;
