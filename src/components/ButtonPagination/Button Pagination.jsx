import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';
import { ReactComponent as ArrowLeft } from '../../images/arrowLeft.svg';
// import { ReactComponent as Ellipse } from "../../images/ellipse.svg";
import { Btn, Wrapper, Number, ButtonArrow } from './ButtonPagination.styled';

const ButtonPagination = ({
  prevPage,
  totalPages,
  nextPage,
  page,
  setPage,
  pageType,
}) => {
  const [isRightBtn, setIsRightBtn] = useState('#F3F3F3');
  const [isLeftBtn, setIsLeftBtn] = useState('rgba(243, 243, 243, 0.30)');

  useEffect(() => {
    const activeArrow = () => {
      const isPage = Object.values({ page })[0];
      const lastPage = Object.values({ totalPages })[0];
      if (isPage > 1) {
        setIsLeftBtn('#F3F3F3');
      } else {
        setIsLeftBtn('rgba(243, 243, 243, 0.30)');
      }

      if (isPage === lastPage) {
        setIsRightBtn('rgba(243, 243, 243, 0.30)');
      } else {
        setIsRightBtn('#F3F3F3');
      }
    };
    activeArrow();
  }, [page, totalPages]);

  return (
    <Wrapper>
      <ButtonArrow onClick={prevPage}>
        <ArrowLeft
          style={{
            fill: `${isLeftBtn}`,
            width: '8px',
            height: '15px',
          }}
        />
      </ButtonArrow>
      {[...Array(totalPages).keys()].map(el => (
        <li key={el}>
          <Link to={`/${pageType}/${el + 1}`}>
            <Btn
              onClick={() => setPage(el + 1)}
              active={`${page === el + 1 ? 'active' : ''}`}
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
            fill: `${isRightBtn}`,
            width: '8px',
            height: '15px',
          }}
        />
      </ButtonArrow>
    </Wrapper>
  );
};

export default ButtonPagination;

ButtonPagination.propTypes = {
  prevPage: PropTypes.func,
  totalPages: PropTypes.number,
  nextPage: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
  pageType: PropTypes.string
};
