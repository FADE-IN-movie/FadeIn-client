import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { reviewDetailState } from "@states/reviews";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useForm from "@hooks/useForm";
import FormItem from "../molecules/FormItem";
import Text from "../atoms/Text";
import Input from "../molecules/Input";
import StarRating from "@components/common/StarRating";
import TextArea from "../atoms/TextArea";
import CustomBtn from "@components/common/CustomBtn";
import DateInput from "../atoms/DateInput";
import TimeInput from "../atoms/TimeInput";

const Form = () => {
  const { content, review } = useRecoilValue(reviewDetailState);
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
  const { query } = useRouter();
  const type = query.reviewId ? "edit" : "write";

  const onClickSubmitBtn = () => {
    type === "write" ? onSubmitForm() : onEditForm(query.reviewId as string);
  };

  useEffect(() => {
    let info = { ...review };
    delete info.reviewId;
    initializeForm(info);
  }, [review, initializeForm]);

  return (
    <>
      <Container>
        <StyledForm>
          <FormItem title="제목">
            <Text>
              {content.title && `${content.title} (${content.originalTitle})`}
            </Text>
          </FormItem>
          <FormItem required title="본 날짜">
            <DateInput
              name="watchedDate"
              value={values.watchedDate || ""}
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
          <FormItem
            title="본 장소"
            warn="최대 20자로 입력할 수 있는 글자 수가 제한됩니다."
          >
            <Input
              name="watchedIn"
              limit={20}
              value={values.watchedIn || ""}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem
            title="같이 본 사람"
            warn="최대 12자로 입력할 수 있는 글자 수가 제한됩니다."
          >
            <Input
              name="watchedWith"
              limit={12}
              value={values.watchedWith || ""}
              handleChange={onChangeForm}
            />
          </FormItem>
          <FormItem required title="평점">
            <StarRating initialScore={values.rating} setValues={setValues} />
          </FormItem>
          <FormItem
            title="메모"
            warn="최대 24자로 입력할 수 있는 글자 수가 제한됩니다."
          >
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
            <CustomBtn color="#3F3F3F">취소</CustomBtn>
            <CustomBtn color="#4762E5" onClickHandler={onClickSubmitBtn}>
              {type === "write" ? "등록" : "수정"}
            </CustomBtn>
          </BtnBox>
        </StyledForm>

        <ToastContainer className="toast" theme="dark" position="top-right" />
      </Container>
    </>
  );
};

export default Form;

const Container = styled.div`
  .toast {
    font-size: 1.2rem;
    width: max-content;
    margin-top: 5rem;

    .Toastify__toast-theme--dark {
      background: #202020 !important;
    }
  }
`;

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
