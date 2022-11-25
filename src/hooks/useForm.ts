import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { IReviewDataInfo } from "@typings/info";

type UseFormProps = {
  initialValues: IReviewDataInfo;
};

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const initializeForm = useCallback((info: IReviewDataInfo) => {
    setValues(info);
  }, []);

  const onChangeForm = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: SubmitEvent) => {
    e.preventDefault();
    //api
  };

  return { values, setValues, initializeForm, onChangeForm, onSubmitForm };
};

export default useForm;
