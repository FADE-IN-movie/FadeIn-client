import { useEffect, useState } from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";

import { useRecoilState } from "recoil";
import { selectedDateState, todayDateState } from "@states/reviews";

import Thead from "../molecules/Thead";
import Tbody from "../molecules/Tbody";
import Control from "../molecules/Control";

const reviewDateArr = ["4", "5", "11", "16", "17", "30"];

const Calendar = () => {
  const [todayDate, setTodayDate] = useRecoilState(todayDateState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

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

  return (
    <StyledCalendar>
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
`;

const Table = styled.table`
  text-align: center;
`;
