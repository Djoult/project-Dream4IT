import{n as t,l,T as C,P as m,c as T,X as j,r as h,p as x,q as g,j as e,Y as S}from"./index-e97045af.js";import{E as Y}from"./EllipsesLayout-33bff56e.js";import{T as E}from"./TitlePage-b662fa25.js";const B=t.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
  }
`,F=t.p`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;

  color: rgba(243, 243, 243, 0.5);

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,R=t.p`
  margin-top: 20px;
  width: 355px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  color: ${l.textMainColor};

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    width: 593px;
    font-size: 16px;
    line-height: 1.38;
  }
`,w=t.button`
  margin-top: 40px;
  margin-bottom: 80px;
  padding: 14px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  cursor: pointer;

  color: ${l.buttonLightBgTextColor};
  background-color: ${l.textMainColor};
  border: none;
  border-radius: 223px;
  transition: ${C("color","background-color")};

  &:hover,
  &:focus {
    color: ${l.textMainColor};
    background-color: #434d67;
  }

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }
`,G=t.img`
  width: 335px;
  height: 400px;

  border-radius: 8px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin-left: auto;
    width: 400px;
    height: 400px;
  }
`,I=({recipe:r})=>{const p=T(c=>c.auth.token),{recipeId:o}=j(),[a,s]=h.useState(!1),{drink:d,glass:i,about:n,drinkThumb:b}=r;h.useEffect(()=>{x(p),g.get(`/api/recipes/favorite/${o}`).then(c=>{s(!!c)}).catch(c=>console.log(c.message))},[p,o]);const A=()=>{x(p),g.patch(`/api/recipes/favorite/${o}`).then(c=>{const{favorite:y}=c.data;s(!!y)})};return e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(F,{children:i}),e.jsx(E,{titlePage:d}),n!==void 0?e.jsx(R,{children:n}):null,a?e.jsx(w,{type:"button",onClick:A,children:"Remove from favorite recipe"}):e.jsx(w,{type:"button",onClick:A,children:"Add to favorite recipe"})]}),e.jsx(G,{src:b,alt:"Cocktail photo"})]})};I.propTypes={resipe:m.object};const v="data:image/png;base64,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",M=t.div`
  margin-top: 40px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 335px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
  }
`,O=t.p`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  color: rgba(243, 243, 243, 0.5);
`,X=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    gap: 22px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    gap: 35px;
  }
`,z=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 157px;
  height: 157px;

  background-color: rgba(22, 32, 55, 0.5);
  border-radius: 6px;

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`,L=t.img`
  width: 107px;
  height: 107px;

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`,K=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: ${l.textMainColor};

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,H=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: rgba(243, 243, 243, 0.5);

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,W=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 157px;

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    margin-top: 14px;
    width: 220px;
  }
`,k=({recipe:r})=>{const{ingredients:p}=r;return e.jsxs(M,{children:[e.jsx(O,{children:"Ingredients"}),e.jsx(X,{children:p.map(({_id:o,title:a,measure:s,ingredientThumb:d})=>{let i="";return d!==void 0?i=d:i=v,e.jsxs("li",{children:[e.jsx(z,{children:e.jsx(L,{src:i,alt:a})}),e.jsxs(W,{children:[e.jsx(K,{children:a}),e.jsx(H,{children:s||null})]})]},o)})})]})};k.propTypes={resipe:m.object};const J=t.div`
  margin-right: auto;
  margin-left: auto;
  width: 335px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 100%;
  }
`,Q=t.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  color: ${l.textMainColor};

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,f=t.li`
  width: 335px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  list-style: inside;

  color: ${l.textMainColor};

  &::after {
    content: '';
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  }

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    width: 549px;
    font-size: 16px;
    line-height: 1.38;
  }
`,u=t.img`
  margin-top: 42px;
  margin-bottom: 80px;
  width: 335px;
  height: 430px;

  border-radius: 8px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 140px;
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 631px;
  }
`,U=t.div`
  display: flex;
  justify-content: space-between;
`,D=({recipe:r})=>{const[p,o]=h.useState(!1),{drinkThumb:a,instructions:s,drink:d}=r,i=s.split(".").filter(n=>n.trim()!=="");return h.useEffect(()=>{const n=()=>{window.innerWidth>1440?o(!0):o(!1)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e.jsxs(J,{children:[e.jsx(Q,{children:"Recipe Preparation"}),p?e.jsxs(U,{children:[e.jsx(u,{src:a,alt:d}),e.jsx("ul",{children:i.map(n=>e.jsx(f,{children:n}))})]}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:i.map(n=>e.jsx(f,{children:n}))}),e.jsx(u,{src:a,alt:d})]})]})};D.propTypes={recipe:m.object};const Z=t.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,N=t.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 32px 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 100px 62px 100px;
  }
`,$=()=>{const[r,p]=h.useState(null),[o,a]=h.useState(!1),{recipeId:s}=j(),d=T(i=>i.auth.token);return h.useEffect(()=>{x(d),a(!0),g.get(`/api/recipes/${s}`).then(i=>{const n=i.data;p(n)}).catch(i=>console.log(i.message)).finally(a(!1))},[s]),e.jsx(e.Fragment,{children:e.jsxs(Z,{children:[e.jsx(Y,{}),o?e.jsx(S,{}):e.jsx(N,{children:r!==null&&e.jsxs(e.Fragment,{children:[e.jsx(I,{recipe:r}),e.jsx(k,{recipe:r}),e.jsx(D,{recipe:r})]})})]})})};export{N as Container,$ as default};
