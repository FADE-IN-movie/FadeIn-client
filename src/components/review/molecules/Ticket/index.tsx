import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import useReviews from "@hooks/useReviews";
import { IReviewInfo } from "@typings/info";

import TicketFront from "./TicketFront";
import TicketBack from "./TicketBack";
import ButtonBox from "./ButtonBox";
import ConfirmModal from "@components/common/ConfirmModal";

interface IProps {
  review: IReviewInfo;
}

type TicketPropsType = {
  width: number;
};

const Ticket = ({ review }: IProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const [width, setWidth] = useState(0);
  const ticketRef = useRef<HTMLDivElement>(null);
  const { onDeleteReview } = useReviews();

  const onToggleTicket = () => setIsFront((prev) => !prev);

  const calculateTicketWidth = () =>
    setWidth(ticketRef.current ? ticketRef.current.offsetWidth : 0);

  const onDeleteAccept = () => {
    onDeleteReview(review.reviewId || "");
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    calculateTicketWidth();
    window.addEventListener("resize", calculateTicketWidth);
    return () => window.removeEventListener("resize", calculateTicketWidth);
  }, []);

  return (
    <>
      <Container ref={ticketRef} width={width}>
        <div onClick={onToggleTicket}>
          {isFront ? (
            <TicketFront review={review} />
          ) : (
            <TicketBack review={review} />
          )}
        </div>
        <div className="buttonBoxWrap">
          <ButtonBox
            type={review.type}
            contentId={review.tmdbId}
            reviewId={review.reviewId}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </div>
      </Container>

      {isDeleteModalOpen && (
        <ConfirmModal
          mainText="감상평을 삭제하시겠습니까?"
          acceptText="삭제"
          setIsOpen={setIsDeleteModalOpen}
          onClickAccept={onDeleteAccept}
        />
      )}
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
