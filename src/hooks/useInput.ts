import { useState, useCallback, ChangeEvent } from "react";

type UseInputProps = [
  string,
  (value: string) => void,
  ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
];

const useInput = (initialValue: string): UseInputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(target.value);
    },
    []
  );

  return [value, setValue, onChange];
};

export default useInput;
