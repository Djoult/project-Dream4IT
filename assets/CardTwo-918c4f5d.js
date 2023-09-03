import{r as o,n,P as t,j as e,L as d}from"./index-0eb60231.js";const c=i=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},o.createElement("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:"#F3F3F3",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),h=n.div`
  flex-basis: 335px;
  
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    flex-basis: 342px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 3);
    flex-basis: 400px;
  }
`,l=n.p`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  max-height: 72px;
  @media screen and (min-width: 768px) {
    max-height: 88px;
  }

  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
`,f=n.div`
  overflow: hidden;

  height: 75px;
  margin: 18px 0;

  @media screen and (min-width: 768px) {
    height: 96px;
    margin: 24px 0;
  }
`,m=n.img`
  background-position: center top;
  background-size: cover;
  height: 360px;

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,g=n.div`
  margin-top: 24px;
`,w=n.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,b=n.h2`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

  margin-bottom: 4px;
`,u=n.ul`
  display: flex;
  gap: 8px;
`,k=n.p`
  padding: 14px 40px;
  border-radius: 42px;
  background: #161f37;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    background: #434d67;
  }
`,y=n.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: #161f37;

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: #434d67;
  }
`,j=({_id:i,drink:s,instructions:r,drinkThumb:p,onDelete:x})=>{const a=i.$oid;return e.jsxs(h,{children:[e.jsx(m,{src:p}),e.jsxs(g,{children:[e.jsx(b,{children:s}),e.jsx(w,{children:"Ingredients"}),e.jsx(f,{children:e.jsx(l,{children:r})})]}),e.jsxs(u,{children:[e.jsx(d,{style:{textDecoration:"none"},to:`/recipe/${i}`,children:e.jsx(k,{children:"See recipe"})}),e.jsx(y,{onClick:()=>x(a),children:e.jsx(c,{style:{width:"24px",height:"24px"}})})]})]})};j.propTypes={drink:t.string,instructions:t.string,drinkThumb:t.string};export{j as C};
