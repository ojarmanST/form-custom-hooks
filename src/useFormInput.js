import { useState } from "react";
import { useDebugValue } from "react";

export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [date, setDate] = useState(new Date());

  function handleChange(e) {
    setValue(e.target.value);
  }

  //not recommended to add debug hook to every hook
  //should only be used when inspecting custom hook using React DevTools
  useDebugValue(value);

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
