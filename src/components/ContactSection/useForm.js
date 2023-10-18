import { useState, useCallback } from "react";

function useForm(defaultValues = {}) {
  const [values, setValues] = useState(defaultValues);
  const hasDefaultValues = Object.keys(defaultValues).length !== 0;

  if (!hasDefaultValues) {
    throw new Error("No defaultValues passed to useForm!");
  }

  const handleChange = useCallback((event) => {
    const { name: inputName, value } = event.target;
    setValues((prev) => ({ ...prev, [inputName]: value }));
  }, []);

  const clearForm = useCallback(
    () => setValues(defaultValues),
    [defaultValues]
  );

  return { values, handleChange, clearForm };
}

export default useForm;
