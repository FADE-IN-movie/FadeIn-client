import { useState, useCallback, ChangeEvent } from "react";

type UserInputProps = [
  string,
  ({ target }: ChangeEvent<HTMLInputElement>) => void
];

const useInput = (initialValue: string): UserInputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  }, []);

  return [value, onChange];
};

export default useInput;
