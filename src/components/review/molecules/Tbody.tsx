import { useState, useEffect, MouseEvent } from "react";

import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedDateState, isCalendarOpenState } from "@states/reviews";

import { IDate } from "@typings/date";
import Td from "../atoms/Date";

interface IProps {
  today: IDate | undefined;
  reviewDateArr: string[];
}

const Tbody = ({ today, reviewDateArr }: IProps) => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [dateArr, setDateArr] = useState<JSX.Element[][]>();
  const [totalDate, setTotalDate] = useState<number>();
  const [startDay, setStartDay] = useState<number>();
  const setIsCalendarOpen = useSetRecoilState(isCalendarOpenState);

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
    const onSelectDay = ({ target }: MouseEvent) => {
      const date = Number((target as HTMLElement).innerText);

      if (Number.isNaN(date) || !date) return;
      setSelectedDate((prev) => ({
        ...prev,
        date: prev.date === date ? 0 : date,
      }));
      setIsCalendarOpen(false);
    };

    // fillDate
    (() => {
      if (!totalDate || startDay === undefined || !selectedDate || !today)
        return;

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
            isSelected={selectedDate.date === Number(dayText)}
            isReviewExist={reviewDateArr.includes(dayText)}
            onSelectDay={onSelectDay}
          >
            {dayText}
          </Td>
        );
      }

      setDateArr(totalArr);
    })();
  }, [
    totalDate,
    startDay,
    reviewDateArr,
    selectedDate,
    today,
    setSelectedDate,
  ]);

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
