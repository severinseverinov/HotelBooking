import{N as g,z as p,W as h,aa as v,_ as f,r as u,j as d,d as e,B as y,s as L,q as b}from"./index-5b5dd1dc.js";import{F as w,a as l,I as c}from"./FormRow-3f426176.js";import{S}from"./SpinnerMini-207b3d18.js";import{L as C}from"./Logo-0ee7e21d.js";function F(){const a=g(),i=p(),{mutate:r,isPending:s}=h({mutationFn:({email:t,password:n})=>v({email:t,password:n}),onSuccess:t=>{a.setQueryData(["user"],t.user),i("/dashboard",{replace:!0})},onError:t=>{f.error("Provided email or password is incorrect.")}});return{login:r,isPending:s}}function P(){const[a,i]=u.useState(""),[r,s]=u.useState(""),{login:t,isPending:n}=F();function m(o){o.preventDefault(),!(!a||!r)&&t({email:a,password:r},{onSettled:()=>{i(""),s("")}})}return d(w,{onSubmit:m,children:[e(l,{label:"Email address",orientation:"vertical",children:e(c,{type:"email",id:"email",autoComplete:"username",value:a,onChange:o=>i(o.target.value),disabled:n})}),e(l,{label:"Password",orientation:"vertical",children:e(c,{type:"password",id:"password",autoComplete:"current-password",value:r,onChange:o=>s(o.target.value),disabled:n})}),e(l,{orientation:"vertical",children:e(y,{size:"large",children:n?e(S,{}):"Login"})})]})}const j=L.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function B(){return d(j,{children:[e(C,{}),e(b,{as:"h4",children:"Log in your account"}),e(P,{})]})}export{B as default};
