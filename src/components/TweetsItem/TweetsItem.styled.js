import styled from "styled-components";

export const StylesTweetsItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 50%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameTextWrapper = styled.div`
  position: absolute;
  bottom: 200px;
  right: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 90px;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
