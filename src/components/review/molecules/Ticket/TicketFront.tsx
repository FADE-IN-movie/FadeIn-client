import Image from "next/image";
import styled from "styled-components";

import { IReviewInfo } from "@typings/info";

import Poster from "@components/common/Poster";
import StarRating from "@components/common/StarRating";
import Barcode from "@components/review/atoms/Barcode";

interface IProps {
  review: IReviewInfo;
}

const TicketFront = ({ review }: IProps) => {
  const {
    title,
    originalTitle,
    poster,
    watchedDate,
    watchedTime,
    watchedIn,
    rating,
    runtime,
    reviewId,
  } = review;
  const formattedDate = watchedDate ? watchedDate.replaceAll("-", ". ") : "";
  const formattedTime = (() => {
    const [startH, startM] = watchedTime
      ? watchedTime.split(":").map(Number)
      : [0, 0];
    const startDate = watchedDate && new Date(`${watchedDate} ${watchedTime}`);
    startDate &&
      runtime &&
      startDate.setMinutes(startDate.getMinutes() + runtime);
    const [endH, endM] = startDate
      ? [startDate.getHours(), startDate.getMinutes()]
      : [0, 0];

    return `${startH} : ${startM} - ${endH} : ${endM}`;
  })();

  return (
    <Container>
      <div className="ticketWrap">
        <Image
          src="/assets/images/ticket_front_img.png"
          layout="fill"
          alt="ticketFront"
        />
        <div className="posterWrap">
          <Poster width="12em" height="17.5em" url={poster || ""} />
        </div>

        <TextBox>
          <div className="frontTextBox">
            <span className="title">
              {title} ({originalTitle})
            </span>
            <span className="date">{formattedDate}</span>
            {watchedTime && <span className="time">{formattedTime}</span>}
            <span className="place">{watchedIn}</span>
          </div>
        </TextBox>
        <div className="barcodeWrap">
          <Barcode side="front">{reviewId}</Barcode>
        </div>
        <div className="ratingWrap">
          <StarRating fixedScore={rating} />
        </div>
      </div>
    </Container>
  );
};

export default TicketFront;

const Container = styled.div`
  .ticketWrap {
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

  .ratingWrap {
    position: absolute;
    top: 16.8em;
    right: 9.8em;
  }

  .barcodeWrap {
    position: absolute;
    z-index: 1;
    top: 8.8em;
    right: -4.7em;
  }
`;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 2em;
  left: 2em;

  span {
    display: inline-block;
    position: absolute;
    font-size: 1.1em;
  }

  .title {
    display: block;
    width: 28.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
`;
