import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";
import Td from "../atoms/Date";

interface IProps {
  today: IDate | undefined;
  selectedDate: IDate | undefined;
}

function Tbody({ today, selectedDate }: IProps) {
  const [dateCnt, setDateCnt] = useState<number>();
  const [startDay, setStartDay] = useState<number>();

  useEffect(() => {
    if (!selectedDate) return;

    const dateCnt = new Date(
      selectedDate.year,
      selectedDate.month - 1,
      0
    ).getDate();

    const startDay = new Date(
      selectedDate.year,
      selectedDate.month - 1,
      1
    ).getDay();

    setDateCnt(dateCnt);

    setStartDay(startDay);
  }, [selectedDate]);

  if (!today) return null;
  return (
    <tbody>
      <tr>
        <Td>1</Td>
        <Td>1</Td>
        <Td>1</Td>
        <Td>1</Td>
        <Td>1</Td>
        <Td>1</Td>
        <Td>{today.day}</Td>
      </tr>
    </tbody>
  );
}

export default Tbody;
