import { useState, useCallback, ChangeEvent } from "react";

type UserInputProps = [string, ({ target }: ChangeEvent) => void];

const useInput = (initialValue: string): UserInputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(({ target }: ChangeEvent) => {
    setValue((target as HTMLInputElement).value);
  }, []);

  return [value, onChange];
};

export default useInput;
