import styled from "styled-components";

import RankItems from "../organisms/RankItems";
import CustomPageTitle from "@components/common/CustomPageTitle";
import SelectBar from "../organisms/SelectBar";

import useRank from "@hooks/useRank";
import RankItemsSkeleton from "../organisms/RankItemsSkeleton";

const RankTemplate = () => {
  const { isLoading } = useRank();
  return (
    <Template>
      <TopContent>
        <CustomPageTitle>랭킹</CustomPageTitle>
        <SelectBar />
      </TopContent>
      <MainContent>
        {isLoading ? <RankItemsSkeleton /> : <RankItems />}
      </MainContent>
    </Template>
  );
};

export default RankTemplate;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const TopContent = styled.div``;

const MainContent = styled.div`
  padding: 3rem 0 3rem 0;
  min-height: 80rem;
`;
