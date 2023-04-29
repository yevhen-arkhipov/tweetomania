import styled from "styled-components";

export const ButtonWrapper = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;

export const ButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #373737;
  font-size: 36px;
  color: #fff;
  opacity: 0.8;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
