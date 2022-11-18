import styled from "styled-components";

import FormItem from "../molecules/FormItem";
import Text from "../atoms/Text";
import Input from "../molecules/Input";
import StarRating from "@components/StarRating";
import TextArea from "../atoms/TextArea";
import CustomBtn from "@components/common/CustomBtn";
import DateInput from "../atoms/DateInput";

const Form = () => {
  return (
    <StyledForm>
      <Column>
        <FormItem title="제목">
          <Text>토르: 러브 앤 썬더 (Thor: Love and Thunder)</Text>
        </FormItem>
      </Column>
      <Column>
        <FormItem title="본 날짜 및 시간">
          <DateInput />
        </FormItem>
        <FormItem title="장소">
          <Input limit={20} />
        </FormItem>
      </Column>
      <Column>
        <FormItem
          title="같이 본 사람"
          warn="최대 00자로 입력할 수 있는 글자 수가 제한됩니다."
        >
          <Input limit={20} />
        </FormItem>
      </Column>
      <Column>
        <FormItem title="평점">
          <StarRating />
        </FormItem>
      </Column>
      <Column>
        <FormItem
          title="메모"
          warn="최대 00자로 입력할 수 있는 글자 수가 제한됩니다."
        >
          <Input limit={30} />
        </FormItem>
      </Column>
      <Column>
        <FormItem title="감상평">
          <div className="textAreaWrap">
            <TextArea />
          </div>
        </FormItem>
      </Column>
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
