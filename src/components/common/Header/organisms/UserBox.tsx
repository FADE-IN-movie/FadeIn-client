import styled from "styled-components";

function UserBox() {
  return (
    <div>
      <UserImg />
    </div>
  );
}

export default UserBox;

const UserImg = styled.div`
  // 임시
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  background: white;
`;
