import { useState, useEffect } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { ButtonWrapper, ButtonIconWrapper } from "./ScrollUpButton.styled";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonWrapper>
      {isVisible && (
        <ButtonIconWrapper onClick={scrollToTop}>
          <TbArrowBigUpLinesFilled />
        </ButtonIconWrapper>
      )}
    </ButtonWrapper>
  );
};

export default ScrollUpButton;
