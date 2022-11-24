import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@styles/theme";

import Barcode from "../atoms/Barcode";
import Poster from "@components/common/Poster";
import StarRating from "@components/common/StarRating";
import { Scrollbars } from "react-custom-scrollbars-2";

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
        {isFront ? <TicketFront /> : <TicketBack />}
      </ImageWrap>
    </Container>
  );
};

const TicketFront = () => {
  return (
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
        <div className="frontTextBox">
          <span className="title">
            토르: 러브 앤 썬더 (Thor: Love and Thunder)
          </span>
          <span className="date">2022. 10. 20</span>
          <span className="time">16 : 25 - 18 : 30</span>
          <span className="place">롯데시네마 잠실점</span>
        </div>
      </TextBox>
      <div className="barcodeWrap frontBarcode">
        <Barcode side="front">22-10-12T16:25</Barcode>
      </div>
      <div className="ratingWrap">
        <StarRating fixedScore={3.5} />
      </div>
    </>
  );
};

const TicketBack = () => {
  return (
    <>
      <Image
        src="/assets/images/ticket_back_img1.png"
        layout="fill"
        alt="ticketBack"
      />

      <TextBox>
        <div className="backTextBox">
          <span className="with">상준, 건우</span>
          <p className="memo">메모입니다</p>
          <div className="barcodeWrap backBarcode">
            <Barcode side="back">22-10-12T16:25</Barcode>
          </div>
          <p className="review">
            <Scrollbars autoHide>
              리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다
              리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다
              리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다
              리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰
              리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰입니다리뷰
            </Scrollbars>
          </p>
        </div>
      </TextBox>
    </>
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
  top: 2em;
  left: 2em;

  span,
  p {
    display: inline-block;
    position: absolute;
    font-size: 1.1em;
  }

  .frontTextBox {
    .title {
      top: 4.9em;
      left: 15em;
    }

    .date {
      display: inline-block;
      width: 10em;
      top: 7.6em;
      left: 18.5em;
      text-align: right;
    }

    .time {
      top: 7.6em;
      right: 11em;
    }

    .place {
      display: inline-block;
      width: 20.5em;
      top: 10.7em;
      left: 22.8em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .backTextBox {
    .with {
      color: ${theme.dark_text_color};
      top: 2.5em;
      left: 0.3em;
    }

    .memo {
      color: ${theme.dark_text_color};
      width: 11.2em;
      line-height: 2.2;
      top: 6.6em;
      left: 0.3em;
      word-break: break-all;
    }

    .review {
      width: 35em;
      height: 15.4em;
      line-height: 2.25;
      top: -0.3em;
      left: 15.6em;
      word-break: break-all;
    }
  }
`;
