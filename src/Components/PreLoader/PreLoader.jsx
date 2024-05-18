import React from "react";
import { Oval } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <>
      <Oval
        height={120}
        width={120}
        color="#757575"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#757575"
        strokeWidth={4}
        strokeWidthSecondary={2}
      />
    </>
  );
};

export default PreLoader;