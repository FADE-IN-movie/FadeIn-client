import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { reviewContentState, reviewDataState } from "@states/reviews";

import FormItem from "../molecules/FormItem";
import Text from "../atoms/Text";
import Input from "../molecules/Input";
import StarRating from "@components/StarRating";
import TextArea from "../atoms/TextArea";
import CustomBtn from "@components/common/CustomBtn";
import DateInput from "../atoms/DateInput";

const Form = () => {
  const [reviewData, setReviewData] = useRecoilState(reviewDataState);
  const content = useRecoilValue(reviewContentState);

  return (
    <StyledForm>
      <FormItem title="제목">
        <Text>{content.title}</Text>
      </FormItem>
      <FormItem title="본 날짜 및 시간">
        <DateInput />
      </FormItem>
      <FormItem title="장소">
        <Input limit={20} />
      </FormItem>
      <FormItem
        title="같이 본 사람"
        warn="최대 00자로 입력할 수 있는 글자 수가 제한됩니다."
      >
        <Input limit={20} />
      </FormItem>
      <FormItem title="평점">
        <StarRating />
      </FormItem>
      <FormItem
        title="메모"
        warn="최대 00자로 입력할 수 있는 글자 수가 제한됩니다."
      >
        <Input limit={30} />
      </FormItem>
      <FormItem title="감상평">
        <div className="textAreaWrap">
          <TextArea />
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
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 2rem;
`;
