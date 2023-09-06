/* eslint-disable react/prop-types */
import { fitIntoRange } from '../../../../../heplers';
import { CounterWrapper } from './Counter.styled';

export const Counter = ({ onIncrease, onDecrease, value, min, max }) => {
  const increase = () => value < max && onIncrease();
  const decrease = () => value > min && onDecrease();

  return (
    <CounterWrapper>
      <span data-control onClick={decrease}>
        &ndash;
      </span>
      <span>{fitIntoRange(value, min, max)}</span>
      <span data-control onClick={increase}>
        +
      </span>
    </CounterWrapper>
  );
};
