import styled from "styled-components";

import heroImage from "../../images/hero-image.jpg";

export const HeroContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 640px;
  background-image: url('${heroImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }
`;
