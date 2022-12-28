import styled from "styled-components";

import useContentDetail from "@hooks/useContentDetail";
import { MESSAGE } from "@data/message";

import Title from "../atoms/Title";
import Descript from "../molecules/Descript";

const ContentInfoBox = () => {
  const { data, cast, isLoading } = useContentDetail();
  const formattedCast =
    (cast &&
      [...cast]
        .slice(1, 3)
        .map((v) => v.name)
        .join(", ")) ||
    null;

  if (isLoading) return null;
  return (
    <Box>
      <div className="contentInfoBox">
        <Title>{data.title}</Title>
        <div className="contentDetailInfoBox">
          <span className="year">{data.releaseDate?.slice(0, 4)}</span>
          <span className="genre">
            {data.genre?.join("/") || `(${MESSAGE.NOT_EXIST_INFO})`}
          </span>
          <span className="starRate">
            ★ {Number(data.rating).toFixed(2) || 0}
          </span>
        </div>
        {cast && (
          <div className="creditsInfoBox">
            <Descript
              main
              title="감독"
              value={cast[0]?.name || `(${MESSAGE.NOT_EXIST_INFO})`}
            />
            <Descript
              main
              title="출연"
              value={
                formattedCast
                  ? `${formattedCast} 등`
                  : `(${MESSAGE.NOT_EXIST_INFO})`
              }
            />
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
