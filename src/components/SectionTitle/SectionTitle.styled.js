import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const TitleText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;

  @media screen and (min-width: 768px) {
    font-size: 38px;
    line-height: 30px;
  }
`;
