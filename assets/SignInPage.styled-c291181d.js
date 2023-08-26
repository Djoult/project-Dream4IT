import{n as o,L as t}from"./index-ed644f11.js";const p=o.form`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 14px;
  gap: 14px;
`,e=o.button`
  color: #161f37;
  font-family: Manrope;
  font-size: 16px;

  font-weight: 600;
  line-height: 18px;

  border-radius: 42px;
  background: #f3f3f3;
  border: 2px solid rgba(64, 111, 205, 0);

  cursor: pointer;

  padding: 18px 44px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.02);
    border: 2px solid rgba(64, 112, 205, 0.5);
    background: #161f37;
    color: #f3f3f3;
  }
`,a=o.div`
  width: 100%;
  display: grid;
  position: relative;
`,x=o.img`
  position: absolute;
  top: 11px;
  right: 19px;
`,d=o.div`
  font-family: Manrope;
  font-size: 12px;
  line-height: 14px;

  color: #da1414;

  text-align: start;

  margin-left: 25px;
`;o.form`
  display: flex;
  flex-direction: column;
`;const s=o.input`
  border-radius: 200px;
  border: 1px solid #f3f3f380;
  color: #f3f3f3;
  padding: 14px 24px;

  background-color: transparent;

  outline: none;

  transition: border-color 0.3s;

  border-color: ${({error:i,correct:n})=>i?"red":n?"green":"initial"};

  &:focus,
  &:hover {
    &::placeholder {
      color: #f3f3f3;
    }
  }
`,l=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  text-align: center;
  z-index: 1100;
  margin-bottom: 14px;
  max-width: 335px;

  padding: 240px 20px 240px 20px;

  @media (min-width: 568px) and (max-width: 768px) {
    /* padding: 366px 304px 366px 64px; */
    padding: 204px 940px 204px 100px;
    width: 400px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 366px 304px 366px 64px;
    width: 400px;
  }

  @media (min-width: 1440px) {
    padding: 204px 940px 204px 100px;
    width: 400px;
  }
`,f=o(t)`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-decoration-line: underline;

  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.12);
  }
`;export{f as C,p as F,x as I,d as N,a as S,s as T,e as a,l as b};
