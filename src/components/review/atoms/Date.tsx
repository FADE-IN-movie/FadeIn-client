import { ReactNode, MouseEvent } from "react";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode;
  isToday?: boolean;
  isSelected?: boolean;
  isReviewExist?: boolean;
  onSelectDay: (e: MouseEvent) => void;
}

type DatePropsType = {
  isToday?: boolean;
  isSelected?: boolean;
  isValid?: boolean;
  isReviewExist?: boolean;
};

const Date = ({
  children,
  isToday,
  isSelected,
  isReviewExist,
  onSelectDay,
}: IProps) => {
  return (
    <Td
      isToday={isToday}
      isSelected={children !== "" && isSelected}
      isValid={children !== ""}
      isReviewExist={isReviewExist}
      onClick={onSelectDay}
    >
      <div className="text">{children}</div>
      {isReviewExist && <div className="sign" />}
    </Td>
  );
};

export default Date;

const Td = styled.td<DatePropsType>`
  position: relative;
  font-size: 1.1rem;
  padding: 0.3rem 0.4rem 0.2rem 0.3rem;
  border-radius: 50%;

  .text {
    padding: 0.5rem;
    margin: 0.3rem;
  }

  .sign {
    position: absolute;
    left: 69%;
    top: 10%;
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
    background: #ff5d5d;
  }

  ${(props) =>
    props.isValid &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}

  .text {
    ${(props) => {
      if (props.isSelected) {
        if (props.isToday) {
          return css`
            background: #ffd255;
            color: white;
            border-radius: 50%;
          `;
        } else {
          return css`
            background: white;
            border-radius: 50%;
            color: black;
          `;
        }
      } else {
        if (props.isToday)
          return css`
            color: #ffd255;
          `;
      }
    }}
  }
`;
