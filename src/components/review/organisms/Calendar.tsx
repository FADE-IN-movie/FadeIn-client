import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";
import { IReviewInfo } from "@typings/info";
import useReviews from "@hooks/useReviews";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  selectedDateState,
  todayDateState,
  isCalendarOpenState,
} from "@states/reviews";

import { getToday } from "@utils/date";
import { clickOutside } from "@utils/display";

import Thead from "../molecules/Thead";
import Tbody from "../molecules/Tbody";
import Control from "../molecules/Control";
import Loading from "../atoms/Loading";

const Calendar = () => {
  const { reviews, isLoading, isValidating } = useReviews();
  const [reviewDateArr, setReviewDateArr] = useState<string[]>();
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
    const { year, month, date } = getToday();

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

    document.addEventListener("mousedown", onClickHandler);
    return () => document.removeEventListener("mousedown", onClickHandler);
  }, [calendarRef, setIsCalendarOpen]);

  useEffect(() => {
    if (!reviews) return;
    const set = new Set<string>();

    reviews.forEach((review: IReviewInfo) => {
      const [rYear, rMonth, rDate] = review.watchedDate.split("-");
      const { year, month } = selectedDate;

      const isSameYear = year.toString() === rYear;
      const isSameMonth = month.toString() === rMonth;

      if (isSameYear && isSameMonth && rDate !== undefined)
        set.add(Number(rDate).toString());
    });

    const filteredArr: string[] = Array.from(set);

    setReviewDateArr(filteredArr);
  }, [selectedDate, reviews]);

  return (
    <StyledCalendar ref={calendarRef}>
      <Control
        currentYM={`${selectedDate?.year}. ${selectedDate?.month}`}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
      <Table>
        {isLoading || isValidating ? (
          <Loading />
        ) : (
          <>
            <Thead />
            <Tbody today={todayDate} reviewDateArr={reviewDateArr} />
          </>
        )}
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
