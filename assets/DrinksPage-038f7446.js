import{n as g,u as R,j as o,m as q,r as E}from"./index-1ecc52fd.js";import{T as D}from"./TitlePage-e23ab5cb.js";import{E as I}from"./EllipsesLayout-b9b2558d.js";import{u as P}from"./useDispatch-2f8395ea.js";import{i as z}from"./cocktails-d0fd101f.js";var v="NOT_FOUND";function N(a){var t;return{get:function(n){return t&&a(t.key,n)?t.value:v},put:function(n,u){t={key:n,value:u}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function T(a,t){var e=[];function n(s){var r=e.findIndex(function(f){return t(s,f.key)});if(r>-1){var i=e[r];return r>0&&(e.splice(r,1),e.unshift(i)),i.value}return v}function u(s,r){n(s)===v&&(e.unshift({key:s,value:r}),e.length>a&&e.pop())}function c(){return e}function l(){e=[]}return{get:n,put:u,getEntries:c,clear:l}}var $=function(t,e){return t===e};function M(a){return function(e,n){if(e===null||n===null||e.length!==n.length)return!1;for(var u=e.length,c=0;c<u;c++)if(!a(e[c],n[c]))return!1;return!0}}function L(a,t){var e=typeof t=="object"?t:{equalityCheck:t},n=e.equalityCheck,u=n===void 0?$:n,c=e.maxSize,l=c===void 0?1:c,s=e.resultEqualityCheck,r=M(u),i=l===1?N(r):T(l,r);function f(){var p=i.get(arguments);if(p===v){if(p=a.apply(null,arguments),s){var d=i.getEntries(),x=d.find(function(m){return s(m.value,p)});x&&(p=x.value)}i.put(arguments,p)}return p}return f.clearCache=function(){return i.clear()},f}function U(a){var t=Array.isArray(a[0])?a[0]:a;if(!t.every(function(n){return typeof n=="function"})){var e=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function K(a){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];var u=function(){for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];var i=0,f,p={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(p=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var x=p,m=x.memoizeOptions,y=m===void 0?e:m,F=Array.isArray(y)?y:[y],w=U(s),C=a.apply(void 0,[function(){return i++,d.apply(null,arguments)}].concat(F)),j=a(function(){for(var S=[],O=w.length,b=0;b<O;b++)S.push(w[b].apply(null,arguments));return f=C.apply(null,S),f});return Object.assign(j,{resultFunc:d,memoizedResultFunc:C,dependencies:w,lastResult:function(){return f},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),j};return u}var W=K(L);const Y="/project-Dream4IT/assets/down-arrow-svgrepo-com-8dce313c.svg";g.div`
    display: flex;
    max-width: 335px;
`;const B=g.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,G=g.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 158px 0 62px 110px;
  }
`,H=g.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-right: 20px;
  margin-top: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-left: 0;
  }
`,J=g.input`
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
`,k=g.select`
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
    background-image: url(${Y});
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
`,Q=a=>a.recipes.items,A=a=>a.filter;W([Q,A],(a,t)=>a.filter(({name:e})=>e.toLowerCase().includes(t.toLowerCase())));const V=()=>{const a=P(),t=R(A),e=n=>{const{value:u}=n.target;a(q(u))};return o.jsx(J,{type:"text",name:"text",placeholder:"Enter the text",value:t,onChange:e})},X=()=>{const[a,t]=E.useState("all"),[e,n]=E.useState("all"),u=Array.from(new Set(z.map(r=>r.category))),c=Array.from(new Set(z.flatMap(r=>r.ingredients.map(i=>i.title)))),l=r=>{t(r.target.value)},s=r=>{n(r.target.value)};return o.jsxs(H,{children:[o.jsx(V,{}),o.jsxs(k,{onChange:l,value:a,children:[o.jsx("option",{value:"all",children:"All categories"}),u.map((r,i)=>o.jsx("option",{value:r,children:r},i))]}),o.jsxs(k,{onChange:s,value:e,children:[o.jsx("option",{value:"all",children:"All ingredients"}),c.map((r,i)=>o.jsx("option",{value:r,children:r},i))]})]})},re=()=>o.jsx(o.Fragment,{children:o.jsxs(B,{children:[o.jsx(I,{}),o.jsxs(G,{children:[o.jsx(D,{titlePage:"Drinks"}),o.jsx(X,{})]})]})});export{re as default};
