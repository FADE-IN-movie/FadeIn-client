import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import Barcode from "../atoms/Barcode";
import Poster from "@components/common/Poster";
import StarRating from "@components/common/StarRating";

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
      <ImageWrap onClick={onToggleTicket}>
        {isFront ? (
          <>
            <Image
              src="/assets/images/ticket_front_img.png"
              layout="fill"
              alt="ticketFront"
            />
            <div className="posterWrap">
              <Poster
                width="12em"
                height="17.5em"
                url="/assets/images/poster_img.jpg"
              />
            </div>

            <TextBox>
              <span className="title">
                토르: 러브 앤 썬더 (Thor: Love and Thunder)
              </span>
              <span className="date">2022. 10. 20</span>
              <span className="time">16 : 25 - 18 : 30</span>
              <span className="place">롯데시네마 잠실점</span>
            </TextBox>
            <div className="barcodeWrap">
              <Barcode>Thor: Love and Thunder</Barcode>
            </div>
            <div className="ratingWrap">
              <StarRating fixedScore={3.5} />
            </div>
          </>
        ) : (
          <Image
            src="/assets/images/ticket_back_img.png"
            layout="fill"
            alt="ticketBack"
          />
        )}
      </ImageWrap>
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
    top: 8.8em;
    z-index: 1;
    right: -4.7em;
  }

  .ratingWrap {
    position: absolute;
    top: 16.8em;
    right: 9.8em;
  }
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
  top: 7.3em;
  left: 18.5em;

  span {
    position: absolute;
    font-size: 1.1em;
  }

  .date {
    display: inline-block;
    width: 10em;
    top: 2.75em;
    left: 4em;
    text-align: right;
  }

  .time {
    top: 2.75em;
    left: 21.5em;
  }

  .place {
    display: inline-block;
    width: 20.5em;
    top: 5.85em;
    left: 8.2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
