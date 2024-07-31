import{s as o,ac as d,d as e,j as r,ad as u,h as g,ae as h,af as m,ag as v,z as s,N as p,W as f,ah as y,_ as b,ai as k,n as x,aj as H,ak as w,al as S,a9 as M,am as C}from"./index-5b5dd1dc.js";import{L}from"./Logo-0ee7e21d.js";import{S as O}from"./SpinnerMini-207b3d18.js";const j=o.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,a=o(d)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function N(){return e("nav",{children:r(j,{children:[e("li",{children:r(a,{to:"/dashboard",children:[e(u,{}),e("span",{children:"Home"})]})}),e("li",{children:r(a,{to:"/bookings",children:[e(g,{}),e("span",{children:"Bookings"})]})}),e("li",{children:r(a,{to:"/cabins",children:[e(h,{}),e("span",{children:"Cabins"})]})}),e("li",{children:r(a,{to:"/users",children:[e(m,{}),e("span",{children:"Users"})]})}),e("li",{children:r(a,{to:"/settings",children:[e(v,{}),e("span",{children:"Settings"})]})})]})})}const U=o.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function A(){return r(U,{children:[e(L,{}),e(N,{})]})}const l=o.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;function D(){const i=s(),n=p(),{mutate:t,isPending:c}=f({mutationFn:y,onSuccess:()=>{n.removeQueries(),i("/login",{replace:!0})},onError:W=>{b.error("There was an error logging out. Please try again.")}});return{logout:t,isPending:c}}function T(){const{logout:i,isPending:n}=D();return e(l,{disabled:n,onClick:i,children:n?e(O,{}):e(k,{})})}function z(){const{isDarkMode:i,toggleDarkMode:n}=x();return e(l,{onClick:n,children:i?e(H,{}):e(w,{})})}const P=o.div`
  display: flex;
  gap: 0.4rem;
  list-style-type: none;
`;function _(){const i=s();return r(P,{children:[e("li",{children:e(l,{onClick:()=>i("/account"),children:e(S,{})})}),e("li",{children:e(z,{})}),e("li",{children:e(T,{})})]})}const B=o.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,Q=o.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function R(){const{user:i}=M(),{fullName:n,avatar:t}=i.user_metadata;return r(B,{children:[e(Q,{src:t||"default-user.jpg",alt:`Avatar of ${n||"User"}`}),e("span",{children:n||"User"})]})}const $=o.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function q(){return r($,{children:[e(R,{}),e(_,{})]})}const E=o.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`,F=o.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`,I=o.div`
max-width: 120rem;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 3.2rem
`;function V(){return r(E,{children:[e(q,{}),e(A,{}),e(F,{children:e(I,{children:e(C,{})})})]})}export{V as default};
