import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import TicketFront from "./TicketFront";
import TicketBack from "./TicketBack";

type TicketPropsType = {
  width: number;
};

const Ticket = () => {
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
      <TicketWrap onClick={onToggleTicket}>
        {isFront ? <TicketFront /> : <TicketBack />}
      </TicketWrap>
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

  .barcodeWrap {
    position: absolute;
    z-index: 1;
  }

  .frontBarcode {
    top: 8.8em;
    right: -4.7em;
  }

  .backBarcode {
    top: 14em;
    left: 0.2em;
  }

  .ratingWrap {
    position: absolute;
    top: 16.8em;
    right: 9.8em;
  }
`;

const TicketWrap = styled.div`
  width: 100%;
  cursor: pointer;

  & > span {
    position: unset !important;

    img {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;
