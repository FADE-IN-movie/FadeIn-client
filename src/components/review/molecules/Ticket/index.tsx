import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { IReviewInfo } from "@typings/info";

import TicketFront from "./TicketFront";
import TicketBack from "./TicketBack";
import ButtonBox from "./ButtonBox";

interface IProps {
  review: IReviewInfo;
}

type TicketPropsType = {
  width: number;
};

const Ticket = ({ review }: IProps) => {
  const [isFront, setIsFront] = useState(true);
  const [width, setWidth] = useState(0);
  const ticketRef = useRef<HTMLDivElement>(null);

  const onToggleTicket = () => setIsFront((prev) => !prev);

  const calculateTicketWidth = () =>
    setWidth(ticketRef.current ? ticketRef.current.offsetWidth : 0);

  useEffect(() => {
    calculateTicketWidth();
    window.addEventListener("resize", calculateTicketWidth);
    return () => window.removeEventListener("resize", calculateTicketWidth);
  }, []);

  return (
    <Container ref={ticketRef} width={width}>
      <div onClick={onToggleTicket}>
        {isFront ? (
          <TicketFront review={review} />
        ) : (
          <TicketBack review={review} />
        )}
      </div>
      <div className="buttonBoxWrap">
        <ButtonBox reviewId={review.reviewId} />
      </div>
    </Container>
  );
};

export default Ticket;

const Container = styled.div<TicketPropsType>`
  position: relative;
  font-size: ${(props) => `${props.width / 60}px`};

  .posterWrap {
    position: absolute;
    top: 1.6em;
    left: 2em;
  }

  .buttonBoxWrap {
    opacity: 0;
    position: absolute;
    top: -1.4rem;
    right: 2em;
  }

  &:hover .buttonBoxWrap {
    opacity: 1;
    transition: 0.1s ease-out;
  }
`;
