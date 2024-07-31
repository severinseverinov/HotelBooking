import{s,a3 as t,u as n,d as o}from"./index-5b5dd1dc.js";const i=s.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,b=s.button`
  background-color: var(--color-grey-0);
  border: none;

  ${e=>e.active&&t`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function v({filterField:e,options:d}){const[a,l]=n();function c(r){a.set(e,r),a.get("page")&&a.set("page",1),l(a)}return o(i,{children:d.map(r=>o(b,{onClick:()=>c(r.value),active:a.get(e)===r.value,disabled:a.get(e)===r.value,children:r.label},r.value))})}export{v as F};
