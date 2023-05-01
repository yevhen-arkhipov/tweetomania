import styled from 'styled-components';

export const StyledFilter = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #ffffff;
  font-family: 'Montserrat';
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
