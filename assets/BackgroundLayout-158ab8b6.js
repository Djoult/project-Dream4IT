import{n as i,k as p,P as n,j as t}from"./index-886b64b3.js";const m=i.div`
  width: 375px;
  font-size: 28px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 304px 28px;

  @media (min-width: 568px) {
    align-items: baseline;
    width: 470px;
    padding: 400px 234px 400px 64px;
  }

  @media (min-width: 768px) {
    width: 485px;
    padding: 273px 855px 376px 100px;
  }
`,c=i.h2`
  color: #fafafa;

  align-items: center;
  text-align: center;

  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.8px;

  @media (min-width: 568px) {
    text-align: left;
    width: 393px;
    font-size: 40px;
  }
`,f=i.p`
  text-align: center;
  color: #fafafa;

  font-family: Manrope;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.36px;

  margin-top: 14px;

  margin-bottom: 40px;

  @media (min-width: 568px) {
    text-align: left;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 18px;
  }
`,w=i.div`
  display: flex;
  gap: 14px;
  z-index: 200;
`,x=i.div`
  width: 100%;
  height: 100%;

  background-color: #0a0a11;
  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  );
  overflow: hidden;
  position: relative;
  min-width: 375px;

  background-image: url("/src/images/glass/glass_mobile.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 568px) and (max-width: 767px) {
    background-image: url("/src/images/glass/glass_tablet.jpg");
    min-width: 568px;
  }
  @media (min-width: 768px) {
    background-image: url("/src/images/glass/glass_desktop.jpg");
    min-width: 769px;
  }
`,o=p`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`,d=p`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
`,e=i.div`
  position: absolute;
  filter: blur(104.8543701171875px);
  animation: ${o} 6s infinite, ${d} 10s infinite; // Применяем анимации
`,s=i(e)`
  width: 257px;
  height: 247px;

  top: 84px;
  left: 42px;

  border-radius: 387px;
  background: rgba(188, 230, 210, 0.4);

  @media (min-width: 568px) {
    width: 387px;
    height: 372px;

    top: 46px;
  }

  @media (min-width: 768px) {
    width: 387px;
    height: 381px;

    top: -132px;
    left: 171px;
  }
`,r=i(e)`
  width: 520px;
  height: 550px;
  top: 20px;
  left: -399px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);

  @media (min-width: 568px) {
    width: 784px;
    height: 829px;
    top: -50px;
    left: -665px;
  }

  @media (min-width: 768px) {
    width: 784px;
    height: 849px;
    top: -231px;
    left: -494px;
  }
`,l=i(e)`
  width: 549px;
  height: 543px;

  top: 498px;
  left: 331px;
  z-index: 0;

  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);

  @media (min-width: 568px) {
    width: 549px;
    height: 543px;

    top: 498px;
    left: 621px;
  }

  @media (min-width: 768px) {
    width: 549px;
    height: 543px;

    top: 458px;
    left: 1181px;
  }
`,g=({children:a})=>t.jsxs(x,{children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(l,{}),a]});g.propTypes={children:n.node.isRequired};export{g as B,c as S,m as W,f as a,w as b};
