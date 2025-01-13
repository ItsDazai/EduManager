import { useState, ChangeEvent } from 'react';

interface UseFormProps<T> {
  initialValues: T;
  validate: (values: T) => Record<string, string>;
}

export const useForm = <T extends Record<string, any>>({ 
  initialValues, 
  validate 
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    const validationErrors = validate({ ...values, [name]: value });
    setErrors(validationErrors);
  };

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
  };
};