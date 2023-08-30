import { Circular, LoaderContainer, Path } from './Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <Circular viewBox="25 25 50 50">
      <Path cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
    </Circular>
  </LoaderContainer>
);

export default Loader;