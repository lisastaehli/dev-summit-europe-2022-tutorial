"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[7710],{77710:(e,t,l)=>{l.r(t),l.d(t,{fetchSymbolFromStyle:()=>f,resolveWebStyleSymbol:()=>c});var n=l(4905),a=l(57989),r=l(70375),m=l(61681),s=l(3466),o=l(26869),i=l(16641),u=l(83313),y=l(85068),b=l(11644),p=l(3032);function c(e,t,l,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,l){const n=b.wm.replace(/\{SymbolName\}/gi,e.name),a=(0,m.pC)(t.portal)?t.portal:o.Z.getDefault();return(0,b.EJ)(n,l).then((e=>{const t=(0,b.KV)(e.data);return(0,u.im)(t,{portal:a,url:(0,s.mN)((0,s.Yd)(n)),origin:"portal-item"})}))}(e,t,n):(0,b.n2)(e,t,n).then((a=>f(a,e.name,t,l,n))):Promise.reject(new r.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function f(e,t,l,c,f){const h=e.data,d=l&&(0,m.pC)(l.portal)?l.portal:o.Z.getDefault(),g={portal:d,url:(0,s.mN)(e.baseUrl),origin:"portal-item"},N=h.items.find((e=>e.name===t));if(!N){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new r.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let w=(0,i.f)((0,b.v9)(N,c),g),S=N.thumbnail&&N.thumbnail.href;const Z=N.thumbnail&&N.thumbnail.imageData;(0,a.XO)()&&(w=(0,a.pJ)(w),S=(0,a.pJ)(S));const _={portal:d,url:(0,s.mN)((0,s.Yd)(w)),origin:"portal-item"};return(0,b.EJ)(w,f).then((a=>{const r="cimRef"===c?(0,b.KV)(a.data):a.data,m=(0,u.im)(r,_);if(m&&(0,n.dU)(m)){if(S){const e=(0,i.f)(S,g);m.thumbnail=new p.p({url:e})}else Z&&(m.thumbnail=new p.p({url:`data:image/png;base64,${Z}`}));e.styleUrl?m.styleOrigin=new y.Z({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(m.styleOrigin=new y.Z({portal:l.portal,styleName:e.styleName,name:t}))}return m}))}}}]);