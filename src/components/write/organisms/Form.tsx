import { useEffect, useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue } from "recoil";
import { nullErrorCntState } from "@states/write";
import { getToday } from "@utils/date";
import { MESSAGE } from "@data/message";

import useForm from "@hooks/useForm";
import useWrite from "@hooks/useWrite";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FormItem from "../molecules/FormItem";
import Text from "../atoms/Text";
import Input from "../molecules/Input";
import StarRating from "@components/common/StarRating";
import TextArea from "../atoms/TextArea";
import CustomBtn from "@components/common/CustomBtn";
import DateInput from "../atoms/DateInput";
import TimeInput from "../atoms/TimeInput";
import ConfirmModal from "@components/common/ConfirmModal";

const Form = () => {
  const { content, review } = useWrite();
  const {
    values,
    setValues,
    initializeForm,
    onChangeForm,
    onSubmitForm,
    onEditForm,
  } = useForm({
    initialValues: {
      watchedDate: "",
      watchedTime: "",
      watchedIn: "",
      watchedWith: "",
      rating: 0,
      memo: "",
      comment: "",
    },
  });
  const { year, month, date } = getToday();
  const formattedToday = `${year.toString().padStart(4, "0")}-${month
    .toString()
    .padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
  const [isCacelModalOpen, setIsCancelModalOpen] = useState(false);
  const nullErrorCnt = useRecoilValue(nullErrorCntState);
  const router = useRouter();
  const { query } = router;
  const type = query.reviewId ? "edit" : "write";

  const onClickSubmitBtn = () => {
    type === "write" ? onSubmitForm() : onEditForm(query.reviewId as string);
  };

  const onClickCancelBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsCancelModalOpen(true);
  };

  const onClickAcceptBtn = () => router.back();

  useEffect(() => {
    let info = { ...review };
    if (info.watchedDate === "") info.watchedDate = formattedToday;
    delete info.reviewId;
    initializeForm(info);
  }, [review, initializeForm, formattedToday]);

  return (
    <>
      <Container>
        <StyledForm>
          <FormItem title="제목">
            <Text>
              {content?.title ? (
                `${content.title} (${content.originalTitle})`
              ) : (
                <Skeleton width="25rem" height="1.6rem" />
              )}
            </Text>
          </FormItem>
          <FormItem required title="본 날짜">
            <DateInput
              name="watchedDate"
              value={values.watchedDate}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem title="본 시간">
            <TimeInput
              name="watchedTime"
              value={values.watchedTime || ""}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem title="본 장소" warn={MESSAGE.TEXT_LIMIT(20)}>
            <Input
              name="watchedIn"
              limit={20}
              value={values.watchedIn || ""}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem title="같이 본 사람" warn={MESSAGE.TEXT_LIMIT(12)}>
            <Input
              name="watchedWith"
              limit={12}
              value={values.watchedWith || ""}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem
            required
            isNullError={nullErrorCnt > 0}
            errorCnt={nullErrorCnt}
            title="평점"
          >
            <StarRating initialScore={values.rating} setValues={setValues} />
          </FormItem>
          <FormItem title="메모" warn={MESSAGE.TEXT_LIMIT(24)}>
            <Input
              name="memo"
              limit={24}
              value={values.memo || ""}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem title="감상평">
            <div className="textAreaWrap">
              <TextArea
                name="comment"
                value={values.comment || ""}
                handleChange={onChangeForm}
              />
            </div>
          </FormItem>
          <BtnBox>
            <CustomBtn color="#3F3F3F" onClickHandler={onClickCancelBtn}>
              취소
            </CustomBtn>
            <CustomBtn
              color={theme.primary_color}
              onClickHandler={onClickSubmitBtn}
            >
              {type === "write" ? "등록" : "수정"}
            </CustomBtn>
          </BtnBox>
        </StyledForm>

        {isCacelModalOpen && (
          <ConfirmModal
            mainText={MESSAGE.CONFIRM_WRITE_CANCEL}
            subText={MESSAGE.CONFIRM_WRITE_CANCEL_SUB}
            setIsOpen={setIsCancelModalOpen}
            onClickAccept={onClickAcceptBtn}
          />
        )}
      </Container>
    </>
  );
};

export default Form;

const Container = styled.div``;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 1rem;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 2rem;
`;
