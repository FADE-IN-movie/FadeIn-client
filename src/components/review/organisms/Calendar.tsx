import React from "react";
import styled from "styled-components";

import Thead from "../molecules/Thead";
import Tbody from "../molecules/Tbody";

type TablePropsType = {
  border: number;
};

function Calendar() {
  return (
    <Table border={1}>
      <Thead />
      <Tbody />
    </Table>
  );
}

export default Calendar;

const Table = styled.table<TablePropsType>``;
