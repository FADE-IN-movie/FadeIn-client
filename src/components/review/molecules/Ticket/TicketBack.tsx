import Image from "next/image";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { IReviewInfo } from "@typings/info";

import { Scrollbars } from "react-custom-scrollbars-2";
import Barcode from "@components/review/atoms/Barcode";

interface IProps {
  review: IReviewInfo;
}

const TicketBack = ({ review }: IProps) => {
  const { watchedDate, watchedTime, watchedWith, memo, comment } = review;
  const formattedBarcode =
    watchedDate &&
    watchedTime &&
    watchedTime.slice(0, 5) + watchedDate.slice(5);

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
        <span className="with">{watchedWith}</span>
        <p className="memo">{memo}</p>
        <div className="barcodeWrap backBarcode">
          <Barcode side="back">{formattedBarcode}</Barcode>
        </div>
        <p className="review">
          <Scrollbars autoHide>{comment}</Scrollbars>
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
    z-index: 3;
  }
`;
