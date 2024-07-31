import{N as f,W as h,a6 as k,_ as g,a7 as x,d as e,S as B,j as m,y as S,q as y}from"./index-5b5dd1dc.js";import{F as P,a as s,I as a}from"./FormRow-3f426176.js";function U(){const r=f(),{mutate:u,isPending:o}=h({mutationFn:k,onSuccess:()=>{g.success("Setting successfully edited"),r.invalidateQueries({queryKey:["settings"]})},onError:d=>g.error(d.message)});return{updatingSetting:u,isUpdating:o}}function F(){const{isPending:r,settings:{minBookingLength:u,maxBookingLength:o,maxGuestsPerBooking:d,breakfastPrice:c}={}}=x(),{updatingSetting:p,isUpdating:n}=U();function i(t,b){const{value:l}=t.target;l&&p({[b]:l})}return r?e(B,{}):m(P,{children:[e(s,{label:"Minimum nights/booking",children:e(a,{disabled:n,type:"number",id:"min-nights",defaultValue:u,onBlur:t=>i(t,"minBookingLength")})}),e(s,{label:"Maximum nights/booking",children:e(a,{disabled:n,type:"number",id:"max-nights",defaultValue:o,onBlur:t=>i(t,"maxBookingLength")})}),e(s,{label:"Maximum guests/booking",children:e(a,{disabled:n,type:"number",id:"max-guests",defaultValue:d,onBlur:t=>i(t,"maxGuestsPerBooking")})}),e(s,{label:"Breakfast price",children:e(a,{disabled:n,type:"number",id:"breakfast-price",defaultValue:c,onBlur:t=>i(t,"breakfastPrice")})})]})}function V(){return m(S,{children:[e(y,{as:"h1",children:"Update hotel settings"}),e(F,{})]})}export{V as default};
