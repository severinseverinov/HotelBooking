import{s as d,z as x,w as q,A as F,j as i,d as e,C as N,D as A,o as C,T as H,f as O,M as k,E as z,G as j,I as E,J as Q,K as R,N as G,u as P,a as K,O as w,P as m,Q as $,U,S as L,V,F as _,y as J,q as W}from"./index-5b5dd1dc.js";import{T as g,M as l,a as Z,S as X}from"./TableOperations-91504400.js";import{F as Y}from"./Filter-f4936fd5.js";const I=d.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,B=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,ee=d.div`
  font-family: "Sono";
  font-weight: 500;
`;function ne({booking:{id:r,created_at:a,startDate:o,endDate:n,numNights:c,numGuests:f,totalPrice:u,status:t,guests:{fullName:s,email:p},cabins:{name:y}}}){const h=x(),{checkout:b,isCheckingOut:v}=q(),{isDeleting:M,deleteBooking:T}=F(),D={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return i(g.Row,{children:[e(I,{children:y}),i(B,{children:[e("span",{children:s}),e("span",{children:p})]}),i(B,{children:[i("span",{children:[N(new Date(o))?"Today":A(o)," ","→ ",c," night stay"]}),i("span",{children:[C(new Date(o),"MMM dd yyyy")," —"," ",C(new Date(n),"MMM dd yyyy")]})]}),e(H,{type:D[t],children:t.replace("-"," ")}),e(ee,{children:O(u)}),i(k,{children:[i(l.Menu,{children:[e(l.Toggle,{id:r}),i(l.List,{id:r,children:[e(l.Button,{icon:e(z,{}),onClick:()=>h(`/bookings/${r}`),children:"See details"}),(t==="unconfirmed"||t==="checked-out")&&e(l.Button,{icon:e(j,{}),onClick:()=>h(`/checkin/${r}`),children:"Check in"}),t==="checked-in"&&e(l.Button,{icon:e(E,{}),onClick:()=>b({bookingId:r}),disabled:v,children:"Check out"}),e(k.Open,{opens:"delete",children:e(l.Button,{icon:e(Q,{}),variation:"danger",children:"Delete booking"})})]})]}),e(k.Window,{name:"delete",children:e(R,{resourceName:"booking",onConfirm:()=>T(r),disabled:M})})]})]})}function re(){const r=G(),[a]=P(),o=a.get("status"),n=!o||o==="all"?null:{field:"status",value:o},c=a.get("sortBy")||"startDate-desc",[f,u]=c.split("-"),t={field:f,direction:u},s=a.get("page")?Number(a.get("page")):1,{isPending:p,data:{data:y,count:h}={},error:b}=K({queryKey:["bookings",n,t,s],queryFn:()=>w({filter:n,sortBy:t,page:s})}),v=Math.ceil(h/m);return s<v&&r.prefetchQuery({queryKey:["bookings",n,t,s+1],queryFn:()=>w({filter:n,sortBy:t,page:s+1})}),s>1&&r.prefetchQuery({queryKey:["bookings",n,t,s-1],queryFn:()=>w({filter:n,sortBy:t,page:s-1})}),{isPending:p,error:b,bookings:y,count:h}}const ie=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,te=d.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,ae=d.div`
  display: flex;
  gap: 0.6rem;
`,S=d.button`
  background-color: ${r=>r.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${r=>r.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function oe({count:r}){const[a,o]=P(),n=a.get("page")?Number(a.get("page")):1,c=Math.ceil(r/m);function f(){const t=n===c?n:n+1;a.set("page",t),o(a)}function u(){const t=n===1?n:n-1;a.set("page",t),o(a)}return c<=1?null:i(ie,{children:[i(te,{children:["Showing ",e("span",{children:(n-1)*m+1})," to"," ",e("span",{children:n===c?r:n*m})," ","of ",e("span",{children:r})," results"]}),i(ae,{children:[i(S,{onClick:u,disabled:n===1,children:[e($,{})," ",e("span",{children:"Previous"})]}),i(S,{onClick:f,disabled:n===c,children:[e("span",{children:"Next"}),e(U,{})]})]})]})}function se(){const{isPending:r,bookings:a,count:o}=re();return r?e(L,{}):a?e(l,{children:i(g,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[i(g.Header,{children:[e("div",{children:"Cabin"}),e("div",{children:"Guest"}),e("div",{children:"Dates"}),e("div",{children:"Status"}),e("div",{children:"Amount"}),e("div",{})]}),e(g.Body,{data:a,render:n=>e(ne,{booking:n},n.id)}),e(g.Footer,{children:e(oe,{count:o})})]})}):e(V,{resourceName:"Bookings"})}function ce(){return i(Z,{children:[e(Y,{filterField:"status",options:[{value:"all",label:"All"},{value:"checked-out",label:"Checked out"},{value:"checked-in",label:"Checked in"},{value:"unconfirmed",label:"Unconfirmed"}]}),e(X,{options:[{value:"startDate-desc",label:"Sort by date (recent first)"},{value:"startDate-asc",label:"Sort by date (earlier first)"},{value:"totalPrice-desc",label:"Sort by amount (high first)"},{value:"totalPrice-asc",label:"Sort by amount (low first)"}]})]})}function he(){return i(_,{children:[i(J,{type:"horizontal",children:[e(W,{as:"h1",children:"All bookings"}),e(ce,{})]}),e(se,{})]})}export{he as default};
