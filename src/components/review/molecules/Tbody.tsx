import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";
import Td from "../atoms/Date";

interface IProps {
  today: IDate | undefined;
  selectedDate: IDate | undefined;
}

function Tbody({ today, selectedDate }: IProps) {
  const [dateArr, setDateArr] = useState<JSX.Element[][]>();
  const [totalDate, setTotalDate] = useState<number>();
  const [startDay, setStartDay] = useState<number>();

  const fillDate = () => {
    if (!totalDate || !startDay) return;

    const totalArr = [];
    let weekArr = [];

    for (let i = 0, j = 1; i <= 42; i++) {
      const dayText =
        i >= startDay && i < startDay + totalDate ? (j++).toString() : " ";
      if (i % 7 === 0) {
        if (weekArr) totalArr.push(weekArr);
        weekArr = [];
      }
      weekArr?.push(<Td key={i}>{dayText}</Td>);
    }

    setDateArr(totalArr);
  };

  useEffect(() => {
    if (!selectedDate) return;

    const totalDate = new Date(
      selectedDate.year,
      selectedDate.month,
      0
    ).getDate();

    const startDay = new Date(
      selectedDate.year,
      selectedDate.month - 1,
      1
    ).getDay();

    setTotalDate(totalDate);
    setStartDay(startDay);
  }, [selectedDate]);

  useEffect(() => {
    fillDate();
  }, [totalDate, startDay]);

  if (!today) return null;
  return (
    <tbody>
      {dateArr?.map((week, i) => (
        <tr key={i}>{week}</tr>
      ))}
    </tbody>
  );
}

export default Tbody;
