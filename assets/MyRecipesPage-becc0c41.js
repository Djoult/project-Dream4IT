import{P as a,j as e,L as y,n as l,r as x,c as f,q as w,t as h}from"./index-bf4d79b3.js";import{T as g}from"./TitlePage-7aa132cd.js";import{E as T}from"./EllipsesLayout-68d83a52.js";import{W as C,B as k,S as L,I as S,a as D,T as P,b as v,c as B,d as E,L as I,e as F,f as b,g as M,N}from"./NotFoundColection-95ad7059.js";import{L as R}from"./ListCardsTwo.styled-03315a12.js";import"./notfound_mobile-76c30311.js";const m=({_id:t,drink:o,instructions:c,drinkThumb:n,onDelete:s})=>{const d=Object.values({drinkThumb:n})[0];return e.jsxs(C,{children:[!d||d===""?e.jsx(k,{children:e.jsx(L,{})}):e.jsx(S,{src:n}),e.jsxs(D,{children:[e.jsx(P,{children:o}),e.jsx(v,{children:"Ingredients"}),e.jsx(B,{children:e.jsx(E,{children:c})})]}),e.jsxs(I,{children:[e.jsx(y,{style:{textDecoration:"none"},to:`/recipe/${t}`,children:e.jsx(F,{children:"See recipe"})}),e.jsx(b,{onClick:()=>s(t),children:e.jsx(M,{style:{width:"24px",height:"24px"}})})]})]})};m.propTypes={_id:a.string,drink:a.string,instructions:a.string,drinkThumb:a.string,onDelete:a.func};const j=({items:t,onDel:o})=>{const c=async s=>{await o(s)},n=t.map(s=>e.jsx(m,{...s,onDelete:c},s._id));return e.jsx(e.Fragment,{children:e.jsx(R,{children:n})})};j.propTypes={items:a.array,onDel:a.func};const W=l.div`
  position: relative;
  // background: #0a0a11;
`,_=l.div`

position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,$=l.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
  `,J=()=>{const[t,o]=x.useState([]),[c,n]=x.useState(!0),s=f(r=>r.auth.token);x.useEffect(()=>{w(s),(async()=>{try{n(!0),await h.get("api/recipes/own?limit=9").then(i=>{const p=i.data;o(p.hits),n(!1)})}catch(i){console.error("Error fetching coctails",i)}})()},[s]);const d=async r=>{try{await h.delete(`api/recipes/own/${r}`)}catch(i){console.error("Error deleting",i)}},u=r=>{d(r);const i=t.filter(p=>p._id!==r);o(i)};return e.jsx(e.Fragment,{children:e.jsxs(W,{children:[e.jsx(T,{}),!c&&t.length!==0?e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx(g,{titlePage:"My recipes"})}),e.jsx(j,{items:t,onDel:u})]}):!c&&e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(g,{titlePage:"My recipes"})}),e.jsx(N,{colection:"own"})]})]})})};export{J as default};
