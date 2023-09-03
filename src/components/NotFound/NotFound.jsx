import React from "react";
import NotFoundMobile from "../../assets/notfound_mobile.png";
import { WrapperForFour, SpanEnd, SpanStart, Wrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
<Wrapper>
<WrapperForFour><SpanStart>4</SpanStart><img
     src={NotFoundMobile}
   /><SpanEnd>4</SpanEnd></WrapperForFour>
</Wrapper>
  );
};

export default NotFound;