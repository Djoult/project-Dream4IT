import CardOne from '../CardOne/CardOne';
import styled from "@emotion/styled";
import UsePagination from '../../hooks/usePagination';
import ButtonPagination from "../ButtonPagination/Button Pagination.jsx";
import { ContainerBtnPagination } from '../ListCardsTwo/ListCardsTwo.styled';
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';


const List = styled.ul`
  margin: 0 auto 80px auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px 20px;
  }
`;

const ListCardsOnePagination = ({ items }) => { 
  const viewWidth = 768;
  const [contentPerPage, setContentPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= viewWidth) {
        setContentPerPage(8);
      } else {
        setContentPerPage(9);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Пагінація
   const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = UsePagination({
    contentPerPage,
    count: items.length,
  });
  // 

  const elements = items.slice(firstContentIndex, lastContentIndex).map((item) => (
    <CardOne key={item._id.$oid} {...item} />
  ));
  return (
    <>
    <List>{elements}</List>
    {/* Пагінація кнопки */}
<ContainerBtnPagination>
      <ButtonPagination 
      prevPage={prevPage} 
      totalPages={totalPages} 
      nextPage={nextPage} 
      page={page} 
      setPage={setPage} 
      pageType="drinks"
      />
      </ContainerBtnPagination>
  </>
  )
};
ListCardsOnePagination.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id:  PropTypes.object.isRequired,
    drink: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
  })).isRequired,
};
export default ListCardsOnePagination;