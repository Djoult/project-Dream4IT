import{n,l as e,P as i,m as s,j as t,S as h}from"./index-e5c1c2b2.js";const m=n.section`
  max-height: 690px;
  padding-top: 120px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${e.mainBgColor};

  @media (min-width: 768px) {
    max-height: 840px;
    padding-top: 180px;
    padding-bottom: 140px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    max-height: 740px;
    padding-top: 160px;
    padding-left: 100px;
    padding-right: 100px;
  }
`,g=n.h1`
  max-width: 280px;
  color: ${e.textMainColor};
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
`,l=n.p`
  max-width: 270px;
  color: ${e.textMainColor};
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
`,a=({title:o,description:p,children:r})=>{const d=s(),x=()=>{d("/add")};return t.jsxs(m,{children:[o&&t.jsx(g,{children:o}),p&&t.jsx(l,{children:p}),t.jsx(h,{type:"button",onClick:x,children:"Add recipe"}),r]})};a.propTypes={title:i.string,description:i.string,children:i.oneOfType([i.arrayOf(i.element),i.element])};const f=()=>t.jsx(t.Fragment,{children:t.jsx(a,{title:"Craft Your Perfect Drink with Drink Master",description:`Unlock your inner mixologist with Drink Master, 
        your one-stop destination for exploring, crafting, 
        and mastering the world's finest beverages. `})});export{f as default};
