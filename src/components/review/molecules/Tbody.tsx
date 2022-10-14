import React from "react";
import styled from "styled-components";

import { IDate } from "@typings/date";
import Td from "../atoms/Date";

interface IProps {
  today: IDate | undefined;
  selectedDate: IDate | undefined;
}

function Tbody({ today, selectedDate }: IProps) {
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
        <Td>{today?.month}</Td>
      </tr>
    </tbody>
  );
}

export default Tbody;
