import { useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { reviewDetailState } from "@states/reviews";

import useForm from "@hooks/useForm";
import FormItem from "../molecules/FormItem";
import Text from "../atoms/Text";
import Input from "../molecules/Input";
import StarRating from "@components/common/StarRating";
import TextArea from "../atoms/TextArea";
import CustomBtn from "@components/common/CustomBtn";
import DateInput from "../atoms/DateInput";

const Form = () => {
  const { content, review } = useRecoilValue(reviewDetailState);
  const { values, setValues, initializeForm, onChangeForm, onSubmitForm } =
    useForm({
      initialValues: {
        watchedAt: "",
        watchedIn: "",
        watchedWith: "",
        rating: 0,
        memo: "",
        comment: "",
      },
    });

  useEffect(() => {
    let info = { ...review };
    delete info.reviewId;
    initializeForm(info);
  }, [review, initializeForm]);

  return (
    <StyledForm>
      <FormItem title="제목">
        <Text>
          {content.title && `${content.title} (${content.originalTitle})`}
        </Text>
      </FormItem>
      <FormItem title="본 날짜 및 시간">
        <DateInput
          name="watchedAt"
          value={values.watchedAt || ""}
          handleChange={onChangeForm}
        />
      </FormItem>
      <FormItem
        title="장소"
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
        <CustomBtn color="#4762E5" onClickHandler={onSubmitForm}>
          등록
        </CustomBtn>
      </BtnBox>
    </StyledForm>
  );
};

export default Form;

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
