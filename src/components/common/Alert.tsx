import { useEffect } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { successAlertState, errorAlertState } from "@states/alert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  const [successAlert, setSuccessAlert] = useRecoilState(successAlertState);
  const [errorAlert, setErrorAlert] = useRecoilState(errorAlertState);

  useEffect(() => {
    if (successAlert !== "") {
      toast.success(successAlert);
      setSuccessAlert("");
    }
  }, [successAlert, setSuccessAlert]);

  useEffect(() => {
    if (errorAlert !== "") {
      toast.error(errorAlert);
      setSuccessAlert("");
    }
  }, [errorAlert, setSuccessAlert]);

  return (
    <StyledToastContainer className="toast" theme="dark" position="top-right" />
  );
};

export default Alert;

const StyledToastContainer = styled(ToastContainer)`
  font-size: 1.2rem;
  min-width: 30rem;
  width: max-content;
  margin-top: 5rem;

  .Toastify__toast-theme--dark {
    background: #202020 !important;
  }
`;
