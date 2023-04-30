import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 92px;
  height: 40px;
  background-color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;
  border: 1px solid #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #5cd3a8;
    border: 1px solid #5cd3a8;
  }
`;

export const BackLinkIcon = styled(TiArrowBack)`
  margin-right: 5px;
  font-size: 20px;
`;

export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 196px;
  height: 50px;
  background-color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;
  border: 1px solid #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #5cd3a8;
    border: 1px solid #5cd3a8;
  }
`;
