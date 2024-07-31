import{Z as o,$ as m,a as g}from"./index-5b5dd1dc.js";async function f(){const{data:e,error:r}=await o.from("cabins").select("*");if(r)throw console.error(r),new Error("An error occurred while fetching cabins");return e}async function h(e,r){var n,l;const t=(l=(n=e.image)==null?void 0:n.startsWith)==null?void 0:l.call(n,m),i=`${Math.random()}-${e.image.name}`.replace("/",""),s=t?e.image:`${m}/storage/v1/object/public/cabin-images/${i}`;let a=o.from("cabins");r||(a=a.insert([{...e,image:s}])),r&&(a=a.update({...e,image:s}).eq("id",r));const{data:c,error:u}=await a.select().single();if(u)throw console.error(u),new Error("Cabin could not be created or updated");if(t)return c;const{storageError:d}=await o.storage.from("cabin-images").upload(i,e.image);if(d)throw await o.from("cabins").delete().eq("id",c.id),console.error(d),new Error("Image could not be uploaded and the cabin was not created or updated")}async function p(e){const{error:r}=await o.from("cabins").delete().eq("id",e);if(r)throw console.error(r),new Error("An error occurred while fetching cabins");return null}function w(){const{isPending:e,data:r,error:t}=g({queryKey:["cabins"],queryFn:f});return{isPending:e,error:t,cabins:r}}export{h as c,p as d,w as u};