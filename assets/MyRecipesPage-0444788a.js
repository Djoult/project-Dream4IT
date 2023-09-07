import{P as r,j as e,L as y,n as l,r as p,c as f,q as T,t as x}from"./index-127024b0.js";import{T as h}from"./TitlePage-d9eabd55.js";import{E as w}from"./EllipsesLayout-23f0857b.js";import{W as k,I as C,a as D,T as L,b as S,c as E,d as P,L as B,B as v,e as F,S as I,N as b}from"./NotFoundColection-f0950427.js";import{L as M}from"./ListCardsTwo.styled-48466864.js";import"./notfound_mobile-76c30311.js";const m=({_id:t,drink:a,instructions:o,drinkThumb:c="../src/images/myCocktail.png",onDelete:s})=>e.jsxs(k,{children:[e.jsx(C,{src:c}),e.jsxs(D,{children:[e.jsx(L,{children:a}),e.jsx(S,{children:"Ingredients"}),e.jsx(E,{children:e.jsx(P,{children:o})})]}),e.jsxs(B,{children:[e.jsx(y,{style:{textDecoration:"none"},to:`/recipe/${t}`,children:e.jsx(v,{children:"See recipe"})}),e.jsx(F,{onClick:()=>s(t),children:e.jsx(I,{style:{width:"24px",height:"24px"}})})]})]});m.propTypes={_id:r.string,drink:r.string,instructions:r.string,drinkThumb:r.string,onDelete:r.func};const g=({items:t,onDel:a})=>{const o=async s=>{await a(s)},c=t.map(s=>e.jsx(m,{...s,onDelete:o},s._id));return e.jsx(e.Fragment,{children:e.jsx(M,{children:c})})};g.propTypes={items:r.array,onDel:r.func};const N=l.div`
  position: relative;
  // background: #0a0a11;
`,R=l.div`

position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,W=l.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
  `,H=()=>{const[t,a]=p.useState([]),[o,c]=p.useState(!0),s=f(n=>n.auth.token);p.useEffect(()=>{T(s),(async()=>{try{c(!0),await x.get("api/recipes/own?limit=9").then(i=>{const d=i.data;a(d.hits),c(!1)})}catch(i){console.error("Error fetching coctails",i)}})()},[s]);const j=async n=>{try{await x.delete(`api/recipes/own/${n}`)}catch(i){console.error("Error deleting",i)}},u=n=>{j(n);const i=t.filter(d=>d._id!==n);a(i)};return e.jsx(e.Fragment,{children:e.jsxs(N,{children:[e.jsx(w,{}),!o&&t.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx(h,{titlePage:"My recipes"})}),e.jsx(g,{items:t,onDel:u})]}):!o&&e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx(h,{titlePage:"My recipes"})}),e.jsx(b,{colection:"own"})]})]})})};export{H as default};
