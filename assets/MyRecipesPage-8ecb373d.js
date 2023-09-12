import{P as i,j as e,L as m,n as d,c,Z as h,$ as g,u as j,r as u,q as k,a0 as y,a1 as T}from"./index-65b61e25.js";import{T as p}from"./TitlePage-52aa2c2b.js";import{E as C}from"./EllipsesLayout-c80d09fb.js";import{W as f,I as w,a as L,T as P,b as B,c as D,d as M,L as S,B as v,e as E,S as F,N as I}from"./NotFoundColection-25c10bbb.js";import{L as b}from"./ListCardsTwo.styled-adeeefbd.js";import"./notfound_mobile-76c30311.js";const x=({_id:n,drink:a,instructions:r,drinkThumb:t="../src/images/myCocktail.png",onDelete:s})=>e.jsxs(f,{children:[e.jsx(w,{src:t}),e.jsxs(L,{children:[e.jsx(P,{children:a}),e.jsx(B,{children:"Ingredients"}),e.jsx(D,{children:e.jsx(M,{children:r})})]}),e.jsxs(S,{children:[e.jsx(m,{style:{textDecoration:"none"},to:`/recipe/${n}`,children:e.jsx(v,{children:"See recipe"})}),e.jsx(E,{onClick:()=>s(n),children:e.jsx(F,{style:{width:"24px",height:"24px"}})})]})]});x.propTypes={_id:i.string,drink:i.string,instructions:i.string,drinkThumb:i.string,onDelete:i.func};const l=({items:n,onDel:a})=>{const r=async s=>{await a(s)},t=n.map(s=>e.jsx(x,{...s,onDelete:r},s._id));return e.jsx(e.Fragment,{children:e.jsx(b,{children:t})})};l.propTypes={items:i.array,onDel:i.func};const N=d.div`
  position: relative;
  // background: #0a0a11;
`,R=d.div`

position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,W=d.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
  `,G=()=>{const n=c(o=>o.auth.token),a=c(h),r=c(g),t=j();u.useEffect(()=>{k(n),t(y())},[t,n]);const s=o=>{t(T(o))};return e.jsx(e.Fragment,{children:e.jsxs(N,{children:[e.jsx(C,{}),!r&&a.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx(p,{titlePage:"My recipes"})}),e.jsx(l,{items:a,onDel:s})]}):!r&&e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx(p,{titlePage:"My recipes"})}),e.jsx(I,{colection:"own"})]})]})})};export{G as default};
