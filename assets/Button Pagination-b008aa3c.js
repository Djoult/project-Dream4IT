import{r as i,n as x,P as a,j as n,L as w}from"./index-82c5c1e2.js";const v=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:8,height:15,viewBox:"0 0 8 15",...t},i.createElement("path",{d:"M0.355291 0.394637C0.242666 0.518919 0.153312 0.666543 0.0923468 0.829057C0.0313812 0.991571 0 1.16579 0 1.34173C0 1.51767 0.0313812 1.69188 0.0923468 1.8544C0.153312 2.01691 0.242666 2.16454 0.355291 2.28882L5.06911 7.50117L0.355291 12.7135C0.128132 12.9647 0.000514428 13.3054 0.000514428 13.6606C0.000514428 14.0158 0.128132 14.3565 0.355291 14.6077C0.582451 14.8589 0.890546 15 1.2118 15C1.53305 15 1.84114 14.8589 2.0683 14.6077L7.64471 8.44154C7.75734 8.31726 7.84669 8.16964 7.90765 8.00712C7.96862 7.84461 8 7.6704 8 7.49445C8 7.31851 7.96862 7.1443 7.90765 6.98178C7.84669 6.81927 7.75734 6.67165 7.64471 6.54736L2.0683 0.381203C1.60664 -0.129285 0.829104 -0.129285 0.355291 0.394637Z"})),b=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:8,height:15,viewBox:"0 0 8 15",...t},i.createElement("path",{d:"M7.64471 0.394637C7.75733 0.518919 7.84669 0.666543 7.90765 0.829057C7.96862 0.991571 8 1.16579 8 1.34173C8 1.51767 7.96862 1.69188 7.90765 1.8544C7.84669 2.01691 7.75733 2.16454 7.64471 2.28882L2.93089 7.50117L7.64471 12.7135C7.87187 12.9647 7.99949 13.3054 7.99949 13.6606C7.99949 14.0158 7.87187 14.3565 7.64471 14.6077C7.41755 14.8589 7.10945 15 6.7882 15C6.46695 15 6.15886 14.8589 5.9317 14.6077L0.35529 8.44154C0.242664 8.31726 0.153311 8.16964 0.0923452 8.00712C0.0313797 7.84461 0 7.67039 0 7.49445C0 7.31851 0.0313797 7.1443 0.0923452 6.98178C0.153311 6.81927 0.242664 6.67165 0.35529 6.54736L5.9317 0.381203C6.39336 -0.129285 7.1709 -0.129285 7.64471 0.394637Z"})),F=({contentPerPage:t,count:c})=>{const[g,s]=i.useState(1),o=Math.ceil(c/t),p=g*t,f=p-t,l=r=>{s(e=>r?e===o?e:e+1:e===1?e:e-1)};return{totalPages:o,nextPage:()=>l(!0),prevPage:()=>l(!1),setPage:r=>{r>o?s(o):r<1?s(1):s(r)},firstContentIndex:f,lastContentIndex:p,page:g}},m=x.button`
  color: #f3f3f3;
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${t=>t.active?"rgba(64, 112, 205, 0.50)":"transparent"};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`,j=x.p`
  // position: absolute;
  // z-index: 2;
`,y=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,C=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,L=({prevPage:t,totalPages:c,nextPage:g,page:s,setPage:o,pageType:p})=>{const[f,l]=i.useState("#F3F3F3"),[h,r]=i.useState("rgba(243, 243, 243, 0.30)");return i.useEffect(()=>{(()=>{const u=Object.values({page:s})[0],d=Object.values({totalPages:c})[0];u>1?r("#F3F3F3"):r("rgba(243, 243, 243, 0.30)"),l(u===d?"rgba(243, 243, 243, 0.30)":"#F3F3F3")})()},[s,c]),n.jsxs(y,{children:[n.jsx(C,{onClick:t,children:n.jsx(b,{style:{fill:`${h}`,width:"8px",height:"15px"}})}),[...Array(c).keys()].map(e=>n.jsx("li",{children:n.jsx(w,{to:`/${p}/${e+1}`,children:n.jsx(m,{onClick:()=>o(e+1),active:`${s===e+1?"active":""}`,children:n.jsx(j,{children:e+1})})})},e)),n.jsx(C,{onClick:g,children:n.jsx(v,{style:{fill:`${f}`,width:"8px",height:"15px"}})})]})};L.propTypes={prevPage:a.func,totalPages:a.number,nextPage:a.func,page:a.number,setPage:a.func,pageType:a.string};export{L as B,F as U};
