import Image from "next/image";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { Scrollbars } from "react-custom-scrollbars-2";
import Barcode from "@components/review/atoms/Barcode";

const TicketBack = () => {
  return (
    <Container>
      <div className="imageWrap">
        <Image
          src="/assets/images/ticket_back_img.png"
          layout="fill"
          alt="ticketBack"
        />
      </div>

      <TextBox>
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
      </TextBox>
    </Container>
  );
};

export default TicketBack;

const Container = styled.div`
  .imageWrap {
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
  }

  .barcodeWrap {
    position: absolute;
    z-index: 1;
    top: 14em;
    left: 0.2em;
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
    cursor: pointer;
  }

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
`;
