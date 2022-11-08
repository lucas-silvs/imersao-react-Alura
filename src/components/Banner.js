import styled from "styled-components";
import config from "../../config.json";

const StyleBanner = styled.div`
  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
`;

function Banner() {
  return (
    <StyleBanner>
      <img src={config.bannerUrl} alt="foto Banner" />
    </StyleBanner>
  );
}

export default Banner;
