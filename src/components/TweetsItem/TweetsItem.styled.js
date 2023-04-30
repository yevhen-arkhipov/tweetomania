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
  margin-bottom: 26px;
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
  margin-bottom: 26px;
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  background-color: ${(props) => (props.isClicked ? "#5CD3A8" : "#EBD8FF")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;
  border: transparent;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${(props) => (props.isClicked ? "#EBD8FF" : "#5CD3A8")};
  }
`;
