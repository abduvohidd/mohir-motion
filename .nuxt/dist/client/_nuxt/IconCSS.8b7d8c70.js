import{g as u,z as r,k as p,o as f,c as _,x as d,_ as m}from"./entry.ae8fc1c9.js";import{u as x}from"./config.16212d95.js";function l(c){let t,n=c[0],a=1;for(;a<c.length;){const o=c[a],i=c[a+1];if(a+=2,(o==="optionalAccess"||o==="optionalCall")&&n==null)return;o==="access"||o==="optionalAccess"?(t=n,n=i(n)):(o==="call"||o==="optionalCall")&&(n=i((...e)=>n.call(t,...e)),t=void 0)}return n}const S=u({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(c){const t=c;r(e=>({"5fa51ebc":o.value}));const n=x();l([n,"optionalAccess",e=>e.nuxtIcon,"optionalAccess",e=>e.aliases]);const a=p(()=>(l([n,"optionalAccess",e=>e.nuxtIcon,"optionalAccess",e=>e.aliases])||{})[t.name]||t.name),o=p(()=>`url('https://api.iconify.design/${a.value.replace(":","/")}.svg')`),i=p(()=>{if(!t.size&&typeof l([n,"access",s=>s.nuxtIcon,"optionalAccess",s=>s.size])=="boolean"&&!l([n,"access",s=>s.nuxtIcon,"optionalAccess",s=>s.size]))return;const e=t.size||l([n,"access",s=>s.nuxtIcon,"optionalAccess",s=>s.size])||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(f(),_("span",{style:d({width:i.value,height:i.value})},null,4))}});const v=m(S,[["__scopeId","data-v-5ee01813"]]);export{v as default};