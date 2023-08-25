import{n as i,N as s,j as e,P as n}from"./index-00c04cb7.js";const p=i.div`
  text-align: left;
  padding: 273px 855px 376px 100px;
  display: flex;
  flex-direction: column;
`,x=i.h2`
  text-align: start;
  color: #fafafa;
  font-family: Manrope;
  font-size: 40px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.8px;
`,l=i.p`
  color: #fafafa;
  font-family: Manrope;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.36px;
  margin-bottom: 40px;
  /* margin-top: 14px; */
`,d=i.div`
  display: flex;
  gap: 14px;
  z-index: 200;
`,c=i.ul`
  display: flex;
  gap: 14px;
`,r=i(s)`
  text-decoration: none;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  background-color: transparent;
  font-weight: 600;
  line-height: 18px;
  border-radius: 42px;
  border: 2px solid rgba(243, 243, 243, 0.2);

  padding: 18px 44px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    background: #f3f3f3;
    color: #000000;
    /* transform: scale(1.02); */
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &.active {
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black;
  }
`,g=()=>e.jsx("div",{style:{zIndex:100},children:e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(r,{to:"/signup",children:"Registration"})}),e.jsx("li",{children:e.jsx(r,{to:"/signin",children:"Log In"})})]})}),h=i.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 46.3%,
    rgba(0, 0, 0, 0.35) 72.75%,
    rgba(0, 0, 0, 0) 100%
  );
  overflow: hidden;
  position: relative;
  max-width: 375px;
  height: 812px;
  background-image: url("/src/assets/glass_mobile.jpg");
  background-repeat: no-repeat;
  background-position: right;

  max-width: 568px;
  margin: 0 auto;

  @media (max-width: 767px) {
    background-image: url("/src/assets/glass_tablet.jpg");
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url("/src/assets/glass_tablet.jpg");
    max-width: 768px;
    height: 1024px;
  }

  @media (min-width: 1440px) {
    background-image: url("/src/assets/glass.jpg");
    max-width: 1440px;
    height: 770px;
  }
`,t=i.div`
  position: absolute;
  filter: blur(104.8543701171875px);
  z-index: 1;
`,u=i(t)`
  width: 387px;
  height: 381px;
  border-radius: 387px;
  background: rgba(188, 230, 210, 0.4);
  top: -132px;
  left: 171px;
`,f=i(t)`
  width: 784px;
  height: 849px;
  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  top: -231px;
  left: -494px;
`,b=i(t)`
  width: 549px;
  height: 543px;
  flex-shrink: 0;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  top: 458px;
  left: 1181px;
`,a=({children:o})=>e.jsxs(h,{children:[e.jsxs(t,{children:[e.jsx(u,{}),e.jsx(f,{}),e.jsx(b,{})]}),o]});a.propTypes={children:n.node.isRequired};const j=()=>e.jsx(a,{children:e.jsxs(p,{children:[e.jsx(x,{children:"Welcome to the app!"}),e.jsx(l,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(d,{children:e.jsx(g,{})})]})});export{j as default};
