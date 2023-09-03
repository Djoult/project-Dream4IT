import styled from "@emotion/styled";

export const StyledModal = styled.div`
  position: absolute;
  width: 300px;
  height: 70px;
  border: 1px solid #f3f3f380;
  background-color: transparent;
  color: #fff;
  z-index: 999;
  top: 10%;
  left: 50%;
  transform: ${props => props.$scale ? 'scale(1)' : 'scale(0)'} translate(-50%, -50%);;
`;
export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #f3f3f380;
  position: absolute;
  top: 12px;
  right: 12px;
  transition: border 0.3s, background-color 0.3s,
  cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover,
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    background-color: #161f37;
  }`;
