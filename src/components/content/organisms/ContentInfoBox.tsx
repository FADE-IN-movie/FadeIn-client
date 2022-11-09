import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import Title from "../atoms/Title";
import Descript from "../molecules/Descript";

const ContentInfoBox = () => {
  const { data, cast } = useRecoilValue(contentDetailInfoState);
  const formattedCast =
    cast &&
    [...cast]
      .slice(1, 3)
      .map((v) => v.name)
      .join(", ");
  const nullText = "(해당 정보 없음)";

  return (
    <Box>
      <div className="contentInfoBox">
        <Title>{data.title}</Title>
        <div className="contentDetailInfoBox">
          <span className="year">{data.releaseDate?.slice(0, 4)}</span>
          <span className="genre">{data.genre?.join("/") || nullText}</span>
          <span className="starRate">★ 6.7</span>
        </div>
        {cast && (
          <div className="creditsInfoBox">
            <Descript main title="감독" value={cast[0]?.name} />
            <Descript main title="출연" value={`${formattedCast} 등`} />
          </div>
        )}
      </div>
    </Box>
  );
};

export default ContentInfoBox;

const Box = styled.div`
  display: flex;

  .contentInfoBox {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2rem 3rem;

    .contentDetailInfoBox {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;

      span {
        font-size: 1.3rem;
      }
    }
  }

  .creditsInfoBox {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;
