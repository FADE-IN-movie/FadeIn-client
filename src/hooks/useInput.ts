import { useState, useCallback, ChangeEvent } from "react";

const useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  }, []);

  const reset = useCallback(() => setValue(initialValue), [initialValue]);
  return [value, onChange, reset];
}

export default useInput;
