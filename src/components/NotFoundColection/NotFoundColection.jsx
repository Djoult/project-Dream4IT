import React from 'react';
import NotFoundMobile from '../../assets/notfound_mobile.png';
import {
    Glass,
  Wrapper,
  Text
} from './NotFoundColection.styled';

const NotFoundColection = ({colection}) => {
  return (
    <Wrapper>
      <Glass src={NotFoundMobile} />
      <Text>You haven't added any {colection} cocktails yet</Text>
    </Wrapper>
  );
};

export default NotFoundColection;
