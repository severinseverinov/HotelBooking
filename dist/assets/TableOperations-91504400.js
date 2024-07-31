import{s,r as l,d as t,a0 as y,a1 as f,a2 as v,j as b,u as x}from"./index-5b5dd1dc.js";const w=s.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,h=s.header`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,S=s(h)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,C=s.section`
  margin: 0.4rem 0;
`,B=s(h)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,k=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`,P=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,u=l.createContext();function g({children:e,columns:o}){return t(u.Provider,{value:{columns:o},children:t(w,{role:"table",children:e})})}function T({children:e}){const{columns:o}=l.useContext(u);return t(S,{role:"row",columns:o,as:"header",children:e})}function j({children:e}){const{columns:o}=l.useContext(u);return t(B,{role:"row",columns:o,children:e})}function M({data:e,render:o}){const{columns:r}=l.useContext(u);return e.length?t(C,{role:"row",children:e.map(o)}):t(P,{role:"row",columns:r,children:"No data available"})}g.Header=T;g.Row=j;g.Body=M;g.Footer=k;const R=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,z=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,E=s.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
`,H=s.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,m=l.createContext();function p({children:e}){const[o,r]=l.useState(""),[a,n]=l.useState(null),i=()=>r(""),c=r;return t(m.Provider,{value:{openId:o,close:i,position:a,open:c,setPosition:n},children:e})}function I({id:e}){const{openId:o,close:r,open:a,setPosition:n}=l.useContext(m);function i(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();n({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?a(e):r()}return t(z,{onClick:i,children:t(y,{})})}function $({id:e,children:o}){const{openId:r,position:a,close:n}=l.useContext(m),i=f(n,!1);return r!==e?null:v.createPortal(t(E,{position:a,ref:i,children:o}),document.body)}function L({children:e,icon:o,onClick:r}){const{close:a}=l.useContext(m);function n(){r==null||r(),a()}return t("li",{children:b(H,{onClick:n,children:[o,t("span",{children:e})]})})}p.Menu=R;p.Toggle=I;p.List=$;p.Button=L;const O=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function F({options:e,value:o,onChange:r,...a}){return t(O,{value:o,onChange:r,...a,children:e.map(n=>t("option",{value:n.value,children:n.label},n.value))})}function N({options:e}){const[o,r]=x(),a=o.get("sortBy")||"";function n(i){o.set("sortBy",i.target.value),r(o)}return t(F,{options:e,type:"white",value:a,onChange:n})}const V=s.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;export{p as M,N as S,g as T,V as a};
