import { useEffect, useRef } from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  selectedDateState,
  todayDateState,
  isCalendarOpenState,
} from "@states/reviews";

import { clickOutside } from "@utils/display";

import Thead from "../molecules/Thead";
import Tbody from "../molecules/Tbody";
import Control from "../molecules/Control";

const reviewDateArr = ["4", "5", "11", "16", "17", "30"];

const Calendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [todayDate, setTodayDate] = useRecoilState(todayDateState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const setIsCalendarOpen = useSetRecoilState(isCalendarOpenState);

  const onClickPrev = () => {
    setSelectedDate((prev: IDate) => ({
      year: prev.month === 1 ? prev.year - 1 : prev.year,
      month: prev.month === 1 ? 12 : prev.month - 1,
      date: 0,
    }));
  };

  const onClickNext = () => {
    setSelectedDate((prev: IDate) => ({
      year: prev.month === 12 ? prev.year + 1 : prev.year,
      month: prev.month === 12 ? 1 : prev.month + 1,
      date: 0,
    }));
  };

  useEffect(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    setTodayDate({
      year: year,
      month: month,
      date: date,
    });

    setSelectedDate({
      year: year,
      month: month,
      date: date,
    });
  }, [setSelectedDate, setTodayDate]);

  useEffect(() => {
    const onClickHandler = ({ target }: Event) => {
      if (!calendarRef.current || !target) return;
      clickOutside(target, calendarRef.current, setIsCalendarOpen);
    };

    document.addEventListener("click", onClickHandler);
    return () => document.removeEventListener("click", onClickHandler);
  }, [calendarRef, setIsCalendarOpen]);

  return (
    <StyledCalendar ref={calendarRef}>
      <Control
        currentYM={`${selectedDate?.year}. ${selectedDate?.month}`}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
      <Table>
        <Thead />
        <Tbody today={todayDate} reviewDateArr={reviewDateArr} />
      </Table>
    </StyledCalendar>
  );
};

export default Calendar;

const StyledCalendar = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.6rem 2rem 2rem 2rem;
  border: 2px solid #4d4d4d;
  border-radius: 5px;
`;

const Table = styled.table`
  text-align: center;
`;
