import { useState } from "react";

const useForm = (validateInput) => {
  const [inputForm, setInputForm] = useState("");
  const [inputBlur, setInputBlur] = useState(false);

  const inputIsValid = validateInput(inputForm);
  const inputIsInvalid = !inputIsValid && inputBlur;

  const inputFormHandler = (event) => {
    setInputForm(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputBlur(true);
  };

  const InputReset = () => {
    setInputForm("");
    setInputBlur(false);
  };

  return {
    inputForm,
    inputBlur,
    inputIsValid,
    inputIsInvalid,
    inputFormHandler,
    inputBlurHandler,
    InputReset,
  };
};

export default useForm;
