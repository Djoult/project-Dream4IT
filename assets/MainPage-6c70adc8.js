import{n as i,l as a,P as n,m as x,j as e,S as l}from"./index-7972dcca.js";const t="/project-Dream4IT/assets/hero-desktop-5baff696.jpg",c=i.section`
  background-color: ${a.mainBgColor};
  outline: 1px solid yellow;
  min-height: 100%;
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1180px) {
    padding-left: 100px;
  }
`,m=i.div`
  display: flex-inline;
  justify-content: st;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 768px) {
    padding-top: 180px;
  }
  @media (min-width: 1180px) {
    padding-top: 160px;
  }
`,h=i.div`
  height: 740px;
  background-size: 640px 790px;
  background-repeat: no-repeat;
  background-position: top 106 left 250;
  background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url("${t}");

  @media screen and (min-width: 480px) {
    height: 790px;
    background-size: 680px 790px;
    background-repeat: no-repeat;
    background-position: top 0 left 120px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${t}");
  }
  @media screen and (min-width: 768px) {
    height: 790px;
    margin: 0 auto;
    background-size: 680px 790px;
    background-repeat: no-repeat;
    background-position: top 0 left 320px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${t}");
  }
  @media screen and (min-width: 1180px) {
    height: 790px;
    margin: 0 auto;
    background-size: 700px 790px;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${t}");
  }
`,u=i.h1`
  max-width: 280px;
  color: ${a.textMainColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 715px;
    font-size: 64px;
    line-height: 68px;
  }
`,b=i.p`
  max-width: 270px;
  color: ${a.textMainColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`,d=({title:r,description:o,children:p})=>{const g=x(),s=()=>{g("/add")};return e.jsx(c,{children:e.jsx(h,{children:e.jsxs(m,{children:[r&&e.jsx(u,{children:r}),o&&e.jsx(b,{children:o}),e.jsx(l,{type:"button",onClick:s,children:"Add recipe"}),p]})})})};d.propTypes={title:n.string,description:n.string,children:n.oneOfType([n.arrayOf(n.element),n.element])};const k=()=>e.jsx(e.Fragment,{children:e.jsx(d,{title:"Craft Your Perfect Drink with Drink Master",description:`Unlock your inner mixologist with Drink Master, 
        your one-stop destination for exploring, crafting, 
        and mastering the world's finest beverages. `})});export{k as default};
