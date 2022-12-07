import { MouseEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedDateState, isCalendarOpenState } from "@states/reviews";

import useReviews from "@hooks/useReviews";
import { IReviewInfo } from "@typings/info";

import CalendarIcon from "@images/calendar_icon.svg";
import Ticket from "../molecules/Ticket";

const ReviewSection = () => {
  const { year, month, date } = useRecoilValue(selectedDateState);
  const { reviews, isLoading } = useReviews();
  const [filteredReviews, setFilteredReviews] = useState([]);
  const setIsCalendarOpen = useSetRecoilState(isCalendarOpenState);
  const selectedDateText = `${year}. ${month}${date ? `. ${date}` : ""}`;

  const onToggleCalendar = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsCalendarOpen((prev) => !prev);
  };

  useEffect(() => {
    (() => {
      if (!reviews) return;
      const newArr = reviews.filter((review: IReviewInfo) => {
        const [rYear, rMonth, rDate] = review.watchedDate
          .split("-")
          .map(Number);

        const isSameYear = rYear === year;
        const isSameMonth = rMonth === month;
        const isSameDate = date ? rDate === date : true;

        return isSameYear && isSameMonth && isSameDate;
      });

      setFilteredReviews(newArr);
    })();
  }, [reviews, year, month, date]);

  return (
    <Section>
      <div className="dateBox">
        <button
          title="캘린더 보기"
          className="calendarBtn"
          onClick={onToggleCalendar}
        >
          <CalendarIcon width="2rem" fill="#c1c6df" />
        </button>
        <span className="selectedDate">{selectedDateText}</span>
      </div>
      {!isLoading &&
        (filteredReviews.length ? (
          <Container>
            {filteredReviews?.map((review: IReviewInfo, i: number) => (
              <Ticket review={review} key={i} />
            ))}
          </Container>
        ) : (
          <p className="warnText">
            ( 선택된 날짜에 작성한 감상평이 존재하지 않습니다. )
          </p>
        ))}
    </Section>
  );
};

export default ReviewSection;

const Section = styled.section`
  width: 100%;

  .dateBox {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1100px) {
      position: fixed;
      top: 15rem;
      z-index: 11;
    }

    .calendarBtn {
      @media screen and (min-width: 1100px) {
        display: none;
      }
    }
    .selectedDate {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  .warnText {
    color: ${theme.palette.light_gray};
    font-size: 1.4rem;
    padding-top: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d1c1c;
  border-radius: 5px;
  padding: 3rem;
  gap: 2rem;

  @media screen and (max-width: 1100px) {
    margin-top: 1rem;
  }
`;
