import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 54px;
  right: 16px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    bottom: 64px;
    right: 120px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 94px;
    right: 450px;
  }
`;

export const ButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #373737;
  font-size: 20px;
  color: #fff;
  opacity: 0.8;
  border-radius: 50%;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }

  &:hover {
    opacity: 1;
  }
`;
