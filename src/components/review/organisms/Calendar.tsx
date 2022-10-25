import { useEffect, useState } from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";

import Thead from "../molecules/Thead";
import Tbody from "../molecules/Tbody";
import Control from "../molecules/Control";

const reviewDateArr = ["4", "5", "11", "16", "17", "30"];

function Calendar() {
  const [todayInfo, setTodayInfo] = useState<IDate>();
  const [selectedDateInfo, setSelectedDateInfo] = useState<IDate>();

  const onClickPrev = () => {
    setSelectedDateInfo((prev: IDate | undefined) => {
      if (prev !== undefined) {
        return {
          year: prev.month === 1 ? prev.year - 1 : prev.year,
          month: prev.month === 1 ? 12 : prev.month - 1,
          date: prev.date,
          day: prev.day,
        };
      }
    });
  };

  const onClickNext = () => {
    setSelectedDateInfo((prev: IDate | undefined) => {
      if (prev !== undefined) {
        return {
          year: prev.month === 12 ? prev.year + 1 : prev.year,
          month: prev.month === 12 ? 1 : prev.month + 1,
          date: prev.date,
          day: prev.day,
        };
      }
    });
  };

  useEffect(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();

    setTodayInfo({
      year: year,
      month: month,
      date: date,
      day: day,
    });

    setSelectedDateInfo({
      year: year,
      month: month,
      date: 0,
      day: 0,
    });
  }, []);

  return (
    <StyledCalendar>
      <Control
        currentYM={`${selectedDateInfo?.year}. ${selectedDateInfo?.month}`}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
      <Table>
        <Thead />
        <Tbody
          today={todayInfo}
          selectedDate={selectedDateInfo}
          reviewDateArr={reviewDateArr}
        />
      </Table>
    </StyledCalendar>
  );
}

export default Calendar;

const StyledCalendar = styled.div`
  width: 25.5rem; // 수정 필요
`;

const Table = styled.table`
  text-align: center;
`;
