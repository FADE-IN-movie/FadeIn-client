import styled from "styled-components";
import { theme } from "@styles/theme";
import Image from "next/image";

interface IProps {
  width: string;
  height: string;
  outline?: boolean;
  url?: string;
}

const Poster = ({ width, height, outline, url }: IProps) => {
  return (
    <ImageWrap outline={outline} width={width} height={height}>
      <Image src={url || ""} alt="posterImg" layout="fill" />
    </ImageWrap>
  );
};

export default Poster;

const ImageWrap = styled.div<IProps>`
  position: relative;
  background: ${theme.bg_color};
  border-radius: 5px;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.outline && "1px solid white"};
`;
