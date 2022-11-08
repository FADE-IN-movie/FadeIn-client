import { useState, useEffect } from "react";

import { IDate } from "@typings/date";
import Td from "../atoms/Date";

interface IProps {
  today: IDate | undefined;
  selectedDate: IDate | undefined;
  reviewDateArr: string[];
}

const Tbody = ({ today, selectedDate, reviewDateArr }: IProps) => {
  const [dateArr, setDateArr] = useState<JSX.Element[][]>();
  const [totalDate, setTotalDate] = useState<number>();
  const [startDay, setStartDay] = useState<number>();

  const fillDate = () => {
    if (!totalDate || startDay === undefined || !selectedDate || !today) return;

    const totalArr = [];
    let weekArr = [];

    for (let i = 0, j = 1; i <= 42; i++) {
      const dayText =
        i >= startDay && i < startDay + totalDate ? (j++).toString() : "";

      const isToday =
        selectedDate.year === today.year &&
        selectedDate.month === today.month &&
        dayText === today.date.toString();

      if (i % 7 === 0) {
        if (weekArr) totalArr.push(weekArr);
        if (j > totalDate && dayText === "") break;
        weekArr = [];
      }
      weekArr?.push(
        <Td
          key={i}
          isToday={isToday}
          isReviewExist={reviewDateArr.includes(dayText)}
        >
          {dayText}
        </Td>
      );
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

  useEffect(() => fillDate(), [totalDate, startDay]);

  if (!today) return null;
  return (
    <tbody>
      {dateArr?.map((week, i) => {
        const styles = i !== dateArr.length - 1 ? "1px solid lightgray" : "";
        if (!week.length) return null;
        return (
          <tr key={i} style={{ borderBottom: styles }}>
            {week}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
