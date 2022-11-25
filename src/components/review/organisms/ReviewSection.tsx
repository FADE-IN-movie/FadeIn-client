import styled from "styled-components";
import Ticket from "../molecules/Ticket";

const ReviewSection = () => {
  return (
    <Section>
      <span className="selectedDate">2022. 03</span>
      <Container>
        {[1, 2, 3, 4].map((i) => (
          <Ticket key={i} />
        ))}
      </Container>
    </Section>
  );
};

export default ReviewSection;

const Section = styled.section`
  width: 100%;

  .selectedDate {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d1c1c;
  border-radius: 5px;
  padding: 3rem;
  gap: 2rem;
`;
