import{n as l,m as $,u as R,j as i,r as P,P as E,L as T}from"./index-d11967cc.js";import{T as L}from"./TitlePage-a8eca58c.js";import{E as q}from"./EllipsesLayout-059a822b.js";import{u as D}from"./useDispatch-4415d93e.js";import{i as g,U as M,B as N}from"./Button Pagination-5517a3a7.js";import{C as U}from"./ListCardsTwo.styled-0a41969c.js";var y="NOT_FOUND";function B(n){var t;return{get:function(a){return t&&n(t.key,a)?t.value:y},put:function(a,p){t={key:a,value:p}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function W(n,t){var e=[];function a(s){var r=e.findIndex(function(f){return t(s,f.key)});if(r>-1){var o=e[r];return r>0&&(e.splice(r,1),e.unshift(o)),o.value}return y}function p(s,r){a(s)===y&&(e.unshift({key:s,value:r}),e.length>n&&e.pop())}function c(){return e}function d(){e=[]}return{get:a,put:p,getEntries:c,clear:d}}var K=function(t,e){return t===e};function Y(n){return function(e,a){if(e===null||a===null||e.length!==a.length)return!1;for(var p=e.length,c=0;c<p;c++)if(!n(e[c],a[c]))return!1;return!0}}function G(n,t){var e=typeof t=="object"?t:{equalityCheck:t},a=e.equalityCheck,p=a===void 0?K:a,c=e.maxSize,d=c===void 0?1:c,s=e.resultEqualityCheck,r=Y(p),o=d===1?B(r):W(d,r);function f(){var u=o.get(arguments);if(u===y){if(u=n.apply(null,arguments),s){var x=o.getEntries(),m=x.find(function(h){return s(h.value,u)});m&&(u=m.value)}o.put(arguments,u)}return u}return f.clearCache=function(){return o.clear()},f}function H(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(a){return typeof a=="function"})){var e=t.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function J(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var p=function(){for(var d=arguments.length,s=new Array(d),r=0;r<d;r++)s[r]=arguments[r];var o=0,f,u={memoizeOptions:void 0},x=s.pop();if(typeof x=="object"&&(u=x,x=s.pop()),typeof x!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof x+"]");var m=u,h=m.memoizeOptions,w=h===void 0?e:h,O=Array.isArray(w)?w:[w],j=H(s),b=n.apply(void 0,[function(){return o++,x.apply(null,arguments)}].concat(O)),S=n(function(){for(var z=[],A=j.length,C=0;C<A;C++)z.push(j[C].apply(null,arguments));return f=b.apply(null,z),f});return Object.assign(S,{resultFunc:x,memoizedResultFunc:b,dependencies:j,lastResult:function(){return f},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),S};return p}var Q=J(G);const V="/project-Dream4IT/assets/down-arrow-svgrepo-com-8dce313c.svg";l.div`
    display: flex;
    max-width: 335px;
`;const X=l.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,Z=l.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 32px 60px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 158px 110px 62px 110px;
  }
`,_=l.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  ${""}
  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;
    ${""}
  }
  @media only screen and (min-width: 768px) {
    margin-top: 80px;
    ${""}
  }
`,ee=l.input`
max-width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: transparent;
  color: #f3f3f3;
  outline: none;
  z-index:9;
  @media only screen and (min-width: 768px) {
    width: 265px;
    padding: 15px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px){
    padding: 15px ;
    font-size: 17px;
  }
    }
`,k=l.select`
  max-width: 335px;
  position: relative;
  ${""}
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;
  appearance: none;
  @media only screen and (min-width: 768px) {
    width: 200px;
    ${""}
    padding: 18px 24px;
    font-size: 17px;
  } 
  ::after {
    content: "";
    background-image: url(${V});
    background-repeat: no-repeat;
    background-position: right center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px; 
    width: 16px; 
    height: 16px; 
  }
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`,te=n=>n.recipes.items,I=n=>n.filter;Q([te,I],(n,t)=>n.filter(({name:e})=>e.toLowerCase().includes(t.toLowerCase())));const ne=$({name:"filter",initialState:"",reducers:{setFilter:(n,t)=>t.payload}}),{setFilter:re}=ne.actions,ae=()=>{const n=D(),t=R(I),e=a=>{const{value:p}=a.target;n(re(p))};return i.jsx(ee,{type:"text",name:"text",placeholder:"Enter the text",value:t,onChange:e})},ie=()=>{const[n,t]=P.useState("all"),[e,a]=P.useState("all"),p=Array.from(new Set(g.map(r=>r.category))),c=Array.from(new Set(g.flatMap(r=>r.ingredients.map(o=>o.title)))),d=r=>{t(r.target.value)},s=r=>{a(r.target.value)};return i.jsxs(_,{children:[i.jsx(ae,{}),i.jsxs(k,{onChange:d,value:n,children:[i.jsx("option",{value:"all",children:"All categories"}),p.map((r,o)=>i.jsx("option",{value:r,children:r},o))]}),i.jsxs(k,{onChange:s,value:e,children:[i.jsx("option",{value:"all",children:"All ingredients"}),c.map((r,o)=>i.jsx("option",{value:r,children:r},o))]})]})},oe=l.div``,se=l.img`
  width: 335px;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 342px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    ${""}
  }
`,pe=l.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ce=l.h2`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  margin-bottom: 4px;
`,le=l.ul`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  width: 335px;
`,F=({_id:n,drink:t,drinkThumb:e})=>i.jsxs(oe,{children:[i.jsx(T,{to:`/recipe/${n}`,children:i.jsx(se,{src:e})}),i.jsxs(le,{children:[i.jsx(ce,{children:t}),i.jsx(pe,{children:"Ingredients"})]})]});F.propTypes={drink:E.string,drinkThumb:E.string};const de=l.ul`
  margin: 0 auto 80px auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px 20px;
  }
`,ue=()=>{const{firstContentIndex:n,lastContentIndex:t,nextPage:e,prevPage:a,page:p,setPage:c,totalPages:d}=M({contentPerPage:9,count:g.length}),s=g.slice(n,t).map(r=>i.jsx(F,{...r},r._id.$oid));return i.jsxs(i.Fragment,{children:[i.jsx(de,{children:s}),i.jsx(U,{children:i.jsx(N,{prevPage:a,totalPages:d,nextPage:e,page:p,setPage:c})})]})},ye=()=>{const n=g;return i.jsx(i.Fragment,{children:i.jsxs(X,{children:[i.jsx(q,{}),i.jsxs(Z,{children:[i.jsx(L,{titlePage:"Drinks"}),i.jsx(ie,{}),i.jsx(ue,{items:n})]})]})})};export{ye as default};
