import throttle from 'lodash.throttle';
import { useEffect, useRef } from 'react';
import { formValidation as validation } from '../../data/formValidation';

const DEBOUNCE_DELAY = 250;

export const useTextArea = () => {
  const ref = useRef(null);

  useEffect(() => {
    const desc = ref.current;

    // сбрасываем инлайн-стили у resizeable textarea
    // Иначе он не даст ресайзиться остальному контенту
    const handleWindowResize = throttle(() => {
      desc.setAttribute('style', '');
    }, DEBOUNCE_DELAY);

    window.addEventListener('resize', handleWindowResize);

    // ставим валидацию для textarea
    const handleCustomValidity = ({ target }) => {
      const { pattern, max, message } = validation.instructions;
      const regex = new RegExp(pattern, 'i');
      target.setCustomValidity(
        !regex.test(target.value) || target.value.length > max ? message : ''
      );
    };

    desc.addEventListener('input', handleCustomValidity);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [ref];
};
