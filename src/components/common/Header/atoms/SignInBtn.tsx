import styled from "styled-components";

interface IProps {
  onOpenSignInModal: () => void;
}

const SignInBtn = ({ onOpenSignInModal }: IProps) => {
  return <Button onClick={onOpenSignInModal}>로그인</Button>;
};

export default SignInBtn;

const Button = styled.button`
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
