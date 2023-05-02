import styled from 'styled-components';

import heroImage from '../../images/hero-image.jpg';

export const HeroContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  height: 224px;
  background-image: url('${heroImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  }

  @media screen and (min-width: 375px) {
    height: 224px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 540px;
  }

  @media screen and (min-width: 1440px) {
    height: 640px;
  }
`;
