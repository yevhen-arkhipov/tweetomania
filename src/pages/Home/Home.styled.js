import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TweetsLinkRapper = styled.div`
  position: absolute;
  bottom: -180px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    bottom: -70px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 110px;
  }
`;

export const TweetsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #373737;
  text-transform: uppercase;
  border: 2px solid #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 220px;
    height: 60px;
    font-size: 18px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 65px;
  }

  &:hover {
    background-color: #5cd3a8;
    border: 2px solid #5cd3a8;
  }
`;
