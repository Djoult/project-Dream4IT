import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const color = keyframes`
  0%, 100% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%, 90% {
    stroke: #ffa700;
  }
`;

export const LoaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;
  
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Circular = styled.svg`
  animation: ${spin} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Path = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite;
  stroke-linecap: round;
`;