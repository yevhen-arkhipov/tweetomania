import { useMediaQuery } from "react-responsive";
import { Puff as Spinner } from "react-loader-spinner";

import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <>
      {isMobile && !isTablet && !isDesktop && (
        <LoaderWrapper>
          <Spinner
            height="100"
            width="100"
            radius={1}
            color="#5CD3A8"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </LoaderWrapper>
      )}
      {!isMobile && isTablet && !isDesktop && (
        <LoaderWrapper>
          <Spinner
            height="150"
            width="150"
            radius={1}
            color="#5CD3A8"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </LoaderWrapper>
      )}
      {!isMobile && !isTablet && isDesktop && (
        <LoaderWrapper>
          <Spinner
            height="200"
            width="200"
            radius={1}
            color="#5CD3A8"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </LoaderWrapper>
      )}
    </>
  );
};

export default Loader;
