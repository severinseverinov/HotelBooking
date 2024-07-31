import{s as o,a3 as e,j as n,d as i}from"./index-5b5dd1dc.js";const g=o.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`,s=o.form`
  ${r=>r.type!=="regular"&&e`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${r=>r.type==="modal"&&e`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;s.defaultProps={type:"regular"};const l=o.div`
  display: grid;
  align-items: center;

  grid-template-columns: ${r=>r.orientation==="vertical"?"1fr":"24rem 1fr 1.2fr"};
  gap: ${r=>r.orientation==="vertical"?"0.8rem":"2.4rem"};

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: ${r=>r.orientation==="vertical"?"none":"1px solid var(--color-grey-100)"};
  }

  /* Special treatment if the row contains buttons, and if it's NOT a vertical row */
  ${r=>r.orientation!=="vertical"&&e`
      &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
      }
    `}
`,c=o.label`
  font-weight: 500;
`,m=o.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function f({label:r,error:t,children:a,orientation:d}){return n(l,{orientation:d,children:[r&&i(c,{htmlFor:a.props.id,children:r}),a,t&&i(m,{children:t})]})}export{s as F,g as I,f as a};
