import CardOne from '../CardOne/CardOne';
import items from "../../data/DB/cocktails.json";
import styled from "@emotion/styled";
import UsePagination from '../../hooks/usePagination';
import ButtonPagination from "../ButtonPagination/Button Pagination";
import { ContainerBtnPagination } from '../ListCardsTwo/ListCardsTwo.styled';

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

const ListCardsOnePagination = () => {
  // const elements = items.map(item => <CardOne key={item._id.$oid} {...item} />);
  
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
    contentPerPage: 9,
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
      <ButtonPagination prevPage={prevPage} totalPages={totalPages} nextPage={nextPage} page={page} setPage={setPage} />
      </ContainerBtnPagination>
  </>
  )
};

export default ListCardsOnePagination;