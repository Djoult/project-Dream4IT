import{n as t,k as p,P as n,j as i}from"./index-2bcd1831.js";const w=t.div`
  min-width: 335px;

  display: flex;
  flex-direction: column;
  box-sizing: content-box;

  padding: 304px 28px;

  @media (min-width: 568px) {
    align-items: baseline;
    padding: 400px 234px 400px 64px;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    padding: 273px 855px 273px 100px;
    max-width: 400px;
  }
`,b=t.h2`
  color: #fafafa;

  text-align: center;

  white-space: nowrap;

  font-size: 28px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.8px;

  @media (min-width: 568px) {
    text-align: left;
    font-size: 40px;
  }
`,u=t.p`
  text-align: center;
  color: #fafafa;

  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.36px;

  margin-top: 14px;
  margin-bottom: 40px;

  @media (min-width: 568px) {
    width: 432px;

    text-align: left;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 437px;

    text-align: left;
    font-size: 18px;
  }
`,k=t.div`
  width: 337px;
  justify-content: center;
  display: flex;

  gap: 14px;

  @media (min-width: 568px) {
    justify-content: start;
  }
`,o="/project-Dream4IT/assets/glass_mobile-ded0c6cb.jpg",x="/project-Dream4IT/assets/glass_tablet-ab31dca5.jpg",s="/project-Dream4IT/assets/glass_desktop-a0e36413.jpg",d=t.div`
  min-width: 375px;

  height: 100vh;

  background-color: #0a0a11;
  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  );
  overflow: hidden;
  position: relative;

  background-image: url("${o}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url("${x}");
  }

  @media (min-width: 1439px) {
    background-image: url("${s}");
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

  animation: ${r} 6s infinite, ${l} 10s infinite; // Применяем анимации
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
`,h=t(e)`
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
`,m=t(e)`
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
`,c=({children:a})=>i.jsxs(d,{children:[i.jsx(g,{}),i.jsx(h,{}),i.jsx(m,{}),a]});c.propTypes={children:n.node.isRequired};export{c as B,b as S,w as W,u as a,k as b};
