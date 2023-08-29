import PropTypes from 'prop-types';
import { Title } from "./TitlePage.styled";

const TitlePage = ({ titlePage }) => {
  return <Title>{titlePage}</Title>;
};

export default TitlePage;

TitlePage.propTypes = {
  titlePage: PropTypes.string,
};