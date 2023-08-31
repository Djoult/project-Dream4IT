import{n as t,k as p,P as n,j as i}from"./index-24779243.js";const w=t.div`
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
`,b=t.h2`
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
`,u=t.p`
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
`,k=t.div`
  display: flex;
  gap: 14px;
  z-index: 200;
`,o="/project-Dream4IT/assets/glass_mobile-ded0c6cb.jpg",x="/project-Dream4IT/assets/glass_tablet-ab31dca5.jpg",s="/project-Dream4IT/assets/glass_desktop-1423dc64.jpg",d=t.div`
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

  background-image: url("${o}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 568px) and (max-width: 767px) {
    background-image: url("${x}");
    min-width: 568px;
  }

  @media (min-width: 768px) {
    background-image: url("${s}");
    min-width: 769px;
  }
`,r=p`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`,l=p`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
`,e=t.div`
  position: absolute;
  filter: blur(104.8543701171875px);
  animation: ${r} 6s infinite, ${l} 10s infinite;
`,g=t(e)`
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
`,m=t(e)`
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
`,h=t(e)`
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
`,c=({children:a})=>i.jsxs(d,{children:[i.jsx(g,{}),i.jsx(m,{}),i.jsx(h,{}),a]});c.propTypes={children:n.node.isRequired};export{c as B,b as S,w as W,u as a,k as b};
