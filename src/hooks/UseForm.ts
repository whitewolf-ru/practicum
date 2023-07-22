
import { useState, FormEvent } from 'react';

type TuseForm = {
  values: any;
  handleChange: any;
  setValues: Function;
}

export function useForm(inputValues = {}): TuseForm {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };

}
