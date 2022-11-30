import { MouseEvent } from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedDateState, isCalendarOpenState } from "@states/reviews";

import CalendarIcon from "@images/calendar_icon.svg";
import Ticket from "../molecules/Ticket";

const ReviewSection = () => {
  const { year, month, date } = useRecoilValue(selectedDateState);
  const setIsCalendarOpen = useSetRecoilState(isCalendarOpenState);
  const selectedDateText = `${year}. ${month}${date ? `. ${date}` : ""}`;

  const onToggleCalendar = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsCalendarOpen((prev) => !prev);
  };

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
      <Container>
        {[1, 2, 3, 4].map((i) => (
          <Ticket key={i} />
        ))}
      </Container>
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
