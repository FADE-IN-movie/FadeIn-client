import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

const Ticket = () => {
  const [isFront, setIsFront] = useState(true);
  const ticketRef = useRef<HTMLDivElement>(null);

  const onToggleTicket = () => setIsFront((prev) => !prev);

  const calculateTicketSize = () => {
    if (!ticketRef.current) return;
    return ticketRef.current.offsetWidth;
  };

  useEffect(() => {
    calculateTicketSize();
    window.addEventListener("resize", calculateTicketSize);
    return window.removeEventListener("resize", calculateTicketSize);
  }, []);

  return (
    <Container ref={ticketRef}>
      <ImageWrap onClick={onToggleTicket}>
        {isFront ? (
          <Image
            src="/assets/images/ticket_front_img.png"
            layout="fill"
            alt=""
          />
        ) : (
          <Image
            src="/assets/images/ticket_back_img.png"
            layout="fill"
            alt=""
          />
        )}
      </ImageWrap>
      <TextBox>
        <span className="title">
          토르: 러브 앤 썬더 (Thor: Love and Thunder)
        </span>
      </TextBox>
    </Container>
  );
};

export default Ticket;

const Container = styled.div`
  position: relative;
`;

const ImageWrap = styled.div`
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

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;

  span {
    position: absolute;
    font-size: 1.4rem;
  }

  .title {
    top: 2rem;
  }
`;
