import{P as i,j as e,L as j,n as l,r as x,c as u,p as y,q as d}from"./index-41c1b055.js";import{T as h}from"./TitlePage-2db4c0e9.js";import{E as f}from"./EllipsesLayout-757312f8.js";import{W as w,B as T,S as C,I as k,a as D,T as L,b as P,c as S,d as v,L as B,e as E,f as I,g as F,N as b}from"./NotFoundColection-d5b5ac02.js";import{L as M}from"./ListCardsTwo.styled-251de52f.js";import"./notfound_mobile-76c30311.js";const g=({_id:t,drink:a,instructions:o,drinkThumb:c,onDelete:n})=>{const s=Object.values({drinkThumb:c})[0];return e.jsxs(w,{children:[!s||s===""?e.jsx(T,{children:e.jsx(C,{})}):e.jsx(k,{src:c}),e.jsxs(D,{children:[e.jsx(L,{children:a}),e.jsx(P,{children:"Ingredients"}),e.jsx(S,{children:e.jsx(v,{children:o})})]}),e.jsxs(B,{children:[e.jsx(j,{style:{textDecoration:"none"},to:`/recipe/${t}`,children:e.jsx(E,{children:"See recipe"})}),e.jsx(I,{onClick:()=>n(t),children:e.jsx(F,{style:{width:"24px",height:"24px"}})})]})]})};g.propTypes={_id:i.string,drink:i.string,instructions:i.string,drinkThumb:i.string,onDelete:i.func};const m=({items:t,onDel:a})=>{const o=async n=>{await a(n)},c=t.map(n=>e.jsx(g,{...n,onDelete:o},n._id));return e.jsx(e.Fragment,{children:e.jsx(M,{children:c})})};m.propTypes={items:i.array,onDel:i.func};const N=l.div`
  position: relative;
  background: #0a0a11;
`,R=l.div`

position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 25px 0 62px 110px;
  }
`,W=l.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
  `,z=()=>{const[t,a]=x.useState([]),o=u(s=>s.auth.token);x.useEffect(()=>{y(o),(async()=>{try{await d.get("api/recipes/own?limit=9").then(r=>{const p=r.data;a(p.hits)})}catch(r){console.error("Error fetching coctails",r)}})()},[o]);const c=async s=>{try{await d.delete(`api/recipes/own/${s}`)}catch(r){console.error("Error deleting",r)}},n=s=>{c(s);const r=t.filter(p=>p._id!==s);a(r)};return console.log(t.length===0),e.jsx(e.Fragment,{children:e.jsxs(N,{children:[e.jsx(f,{}),t.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx(h,{titlePage:"My recipes"})}),e.jsx(m,{items:t,onDel:n})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx(h,{titlePage:"My recipes"})}),e.jsx(b,{colection:"own"})]})]})})};export{z as default};
