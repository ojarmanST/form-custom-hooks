import { useState } from "react";
import useFormInput from "./useFormInput.js";

export default function Form() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  console.log(firstNameProps);
  /*---------------------------------------------------

*leaving for demo purposes*

the below logic is no longer needed, because the 
custom useFormInput hook handles the value state changes


//   const [firstName, setFirstName] = useState('Mary');
//   const [lastName, setLastName] = useState('Poppins');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }
//--------------------------------------------------*/
  return (
    <>
      {/* using spread syntax here gives each input all props from specified inputs */}
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
        {/* <input value={lastNameProps.value} /> */}
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
