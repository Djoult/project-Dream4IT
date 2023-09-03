import{n as t,j as n}from"./index-dbe15efa.js";import"./TitlePage-e30e7323.js";import{E as o}from"./EllipsesLayout-2d5f91fe.js";const i="/assets/notfound_mobile-4017e95d.png",e=t.div`
    position: relative;
    max-width: 465px;
    display: flex;
    margin: 0 auto;
    justify-content: center;

`,s=t.div`
display: flex;
justify-content: center;
position: relative;

`,a=t.span`
position: absolute;
top: 25%;
/* left: 39%; */
left: 55px;
    color: rgba(243, 243, 243, 0.10);
font-family: Manrope;
font-size: 150px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`,r=t.span`
position: absolute;
top: 25%;
/* right: 39%; */
right: 55px;
    color: rgba(243, 243, 243, 0.10);
font-family: Manrope;
font-size: 150px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`,p=()=>n.jsx(e,{children:n.jsxs(s,{children:[n.jsx(a,{children:"4"}),n.jsx("img",{src:i}),n.jsx(r,{children:"4"})]})}),d=t.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,l=t.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,m=()=>n.jsxs(d,{children:[n.jsx(o,{}),n.jsx(l,{children:n.jsx(p,{})})]});export{l as Container,m as default};
