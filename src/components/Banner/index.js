import styled from "styled-components";
import config from "../../../config.json";

const StyleBanner = styled.div`
  width: 100%;
  height: 230px;
  background-image: url(${config.bannerUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Banner() {
  return <StyleBanner />;
}

export default Banner;
