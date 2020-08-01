import { useState } from 'react';

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function HandlerChange(Event) {
    // const { getAttribute, value } = Event.target;
    setValue(
      Event.target.getAttribute('name'),
      Event.target.value,
    );
  }

  function ClearForm() {
    setValues(initialValue);
  }

  return {
    values,
    HandlerChange,
    ClearForm,
  };
}

export default useForm;
