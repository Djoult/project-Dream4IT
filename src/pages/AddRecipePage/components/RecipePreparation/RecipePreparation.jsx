import { Subtitle } from '../../../../styles/shared';
import { Container, Description } from './RecipePreparation.styled';
import throttle from 'lodash.throttle';
import { useEffect, useRef } from 'react';

const DEBOUNCE_DELAY = 250;

export const RecipePreparation = () => {
  const descRef = useRef(null);

  useEffect(() => {
    const handleWindowResize = throttle(() => {
      // сбрасываем инлайн-стили у resizeable textarea
      // Иначе он не даст ресайзиться остальному контенту
      descRef.current.setAttribute('style', '');
    }, DEBOUNCE_DELAY);

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Container>
      <Subtitle>Recipe preparation</Subtitle>
      <Description ref={descRef} placeholder="Enter the recipe..." />
    </Container>
  );
};
