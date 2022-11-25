import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { reviewDetailState } from "@states/reviews";

import FormItem from "../molecules/FormItem";
import Text from "../atoms/Text";
import Input from "../molecules/Input";
import StarRating from "@components/common/StarRating";
import TextArea from "../atoms/TextArea";
import CustomBtn from "@components/common/CustomBtn";
import DateInput from "../atoms/DateInput";

const Form = () => {
  const { content, review } = useRecoilValue(reviewDetailState);

  return (
    <StyledForm>
      <FormItem title="제목">
        <Text>
          {content.title} ({content.originalTitle})
        </Text>
      </FormItem>
      <FormItem title="본 날짜 및 시간">
        <DateInput initialValue={review.watched_at || ""} />
      </FormItem>
      <FormItem
        title="장소"
        warn="최대 20자로 입력할 수 있는 글자 수가 제한됩니다."
      >
        <Input limit={20} initialValue={review.watched_in || ""} />
      </FormItem>
      <FormItem
        title="같이 본 사람"
        warn="최대 12자로 입력할 수 있는 글자 수가 제한됩니다."
      >
        <Input limit={12} initialValue={review.watched_with || ""} />
      </FormItem>
      <FormItem title="평점">
        <StarRating initialScore={review.rating} />
      </FormItem>
      <FormItem
        title="메모"
        warn="최대 24자로 입력할 수 있는 글자 수가 제한됩니다."
      >
        <Input limit={24} initialValue={review.memo || ""} />
      </FormItem>
      <FormItem title="감상평">
        <div className="textAreaWrap">
          <TextArea initialValue={review.comment || ""} />
        </div>
      </FormItem>
      <BtnBox>
        <CustomBtn color="#3F3F3F">취소</CustomBtn>
        <CustomBtn color="#4762E5">등록</CustomBtn>
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

const Column = styled.div`
  display: flex;
  width: 100%;
  gap: 8rem;

  > div {
    width: 100%;
  }

  &:nth-child(2) {
    @media screen and (max-width: 750px) {
      flex-direction: column;
      gap: 4rem;
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 2rem;
`;
