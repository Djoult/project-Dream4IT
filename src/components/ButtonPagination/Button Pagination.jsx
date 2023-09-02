import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
// import { ReactComponent as Ellipse } from "../../images/ellipse.svg";

const Btn = styled.button`
  color: #f3f3f3;
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${(props) =>
    props.active ? "rgba(64, 112, 205, 0.50)" : "transparent"};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;
const Number = styled.p`
  // position: absolute;
  // z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

// const Svg = styled.div`
// position: absolute;
// z-index: 1;
// `;


const ButtonPagination = ({
  prevPage,
  totalPages,
  nextPage,
  page,
  setPage,
  // namePage
}) => {
  
  return (
    <Wrapper>
      
      <ButtonArrow onClick={prevPage}>
        <ArrowLeft
          style={{
            fill: "rgba(243, 243, 243, 0.30)",
            width: "8px",
            height: "15px",
          }}
        />
      </ButtonArrow>
      {[...Array(totalPages).keys()].map((el) => (
        <li  key={el}>
        <Link to={`/favorite/${el+1}` } >
        <Btn
          onClick={() => setPage(el + 1)}          
          active={`${page === el + 1 ? "active" : ""}`}
        >
          {/* <Svg><Ellipse /></Svg> */}
          <Number>{el + 1}</Number>
        </Btn>
        </Link>
        </li>
      ))}
      <ButtonArrow onClick={nextPage}>
        <ArrowRight
          style={{
            fill: "rgba(243, 243, 243, 0.30)",
            width: "8px",
            height: "15px",
          }}
        />
      </ButtonArrow>
    </Wrapper>
  );
};

export default ButtonPagination;
