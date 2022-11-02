"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[6885],{68403:(t,e,n)=>{n.d(e,{Z:()=>v});var r,o=n(36663),i=n(82064),s=n(61681),a=n(81977),l=(n(7753),n(39994),n(7283),n(40266)),c=n(24455),u=n(39100),p=n(6766),f=n(8909),h=n(53446),g=n(90472),m=n(25726),y=n(34218),d=n(81936),x=n(86717),w=n(14789);let b=r=class extends i.wq{constructor(t){super(t),this.origin=(0,f.c)(),this.translation=(0,f.c)(),this.rotation=(0,y.Ue)(),this.scale=(0,f.f)(1,1,1),this.geographic=!0}get localMatrix(){const t=(0,u.c)();return(0,c.u)(t,this.scale),(0,c.e)(t,t,(0,y.WH)(this.rotation),(0,y.ZZ)(this.rotation)),(0,c.j)(t,t,this.translation),t}get localMatrixInverse(){return(0,c.a)((0,u.c)(),this.localMatrix)}applyLocal(t,e){return(0,p.m)(e,t,this.localMatrix)}applyLocalInverse(t,e){return(0,p.m)(e,t,this.localMatrixInverse)}project(t,e){const n=new Float64Array(t.length),r=d.fP.fromTypedArray(n),o=d.fP.fromTypedArray(t);if(this.geographic){const t=(0,m.rS)(e),i=(0,u.c)();return(0,g.Bm)(e,this.origin,i,t),(0,c.m)(i,i,this.localMatrix),(0,x.t)(r,o,i),(0,g.CM)(n,t,0,n,e,0,n.length/3),n}const{localMatrix:i,origin:s}=this;(0,c.v)(i,u.I)?(0,w.c)(r,o):(0,x.t)(r,o,i);for(let t=0;t<n.length;t+=3)n[t+0]+=s[0],n[t+1]+=s[1],n[t+2]+=s[2];return n}getOriginPoint(t){const[e,n,r]=this.origin;return new h.Z({x:e,y:n,z:r,spatialReference:t})}equals(t){return(0,s.pC)(t)&&this.geographic===t.geographic&&(0,p.k)(this.origin,t.origin)&&(0,c.w)(this.localMatrix,t.localMatrix)}clone(){const t={origin:(0,f.a)(this.origin),translation:(0,f.a)(this.translation),rotation:(0,y.Ue)(this.rotation),scale:(0,f.a)(this.scale),geographic:this.geographic};return new r(t)}};(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"origin",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"translation",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"rotation",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"scale",void 0),(0,o._)([(0,a.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],b.prototype,"geographic",void 0),(0,o._)([(0,a.Cb)()],b.prototype,"localMatrix",null),(0,o._)([(0,a.Cb)()],b.prototype,"localMatrixInverse",null),b=r=(0,o._)([(0,l.j)("esri.geometry.support.MeshTransform")],b);const v=b},34218:(t,e,n)=>{n.d(e,{Ue:()=>a,WH:()=>p,ZZ:()=>u,qC:()=>c,uT:()=>l});var r=n(19431),o=n(10663),i=n(61044),s=n(6766);function a(t=f){return[t[0],t[1],t[2],t[3]]}function l(t,e,n=a()){return(0,s.c)(n,t),n[3]=e,n}function c(t,e,n=a()){return(0,o.s)(h,t,p(t)),(0,o.s)(g,e,p(e)),(0,o.m)(h,g,h),function(t,e){return t[3]=e,t}(n,(0,r.BV)((0,o.g)(n,h)))}function u(t){return t}function p(t){return(0,r.Vl)(t[3])}const f=[0,0,1,0],h=(0,i.a)(),g=(0,i.a)();a()},67341:(t,e,n)=>{function r(t,e){return t.isGeographic||t.isWebMercator&&(e?.geographic??!0)}n.d(e,{h:()=>r})},91780:(t,e,n)=>{n.d(e,{FF:()=>w,I5:()=>d,Yq:()=>b,iv:()=>y,w1:()=>x});var r=n(61681),o=n(17321),i=n(34344),s=n(24455),a=n(39100),l=n(1662),c=n(90472),u=n(25726),p=n(68403),f=n(81936),h=n(86717),g=n(67341),m=n(49921);function y(t,e,n){return(0,g.h)(e.spatialReference,n)?function(t,e,n){const r=e.spatialReference,o=F(e,n,E),i=new Float64Array(t.position.length),s=function(t,e,n,r){(0,h.t)(f.fP.fromTypedArray(r),f.fP.fromTypedArray(t),e);const o=new Float64Array(t.length);return(0,m.To)(r,o,n)}(t.position,o,r,i),a=(0,l.a)(O,o);return{position:s,normal:v(s,i,t.normal,a,r),tangent:A(s,i,t.tangent,a,r)}}(t,e,n):function(t,e,n){const r=new Float64Array(t.position.length),o=t.position,i=e.x,s=e.y,a=e.z||0,{horizontal:l,vertical:c}=P(n?n.unit:null,e.spatialReference);for(let t=0;t<o.length;t+=3)r[t+0]=o[t+0]*l+i,r[t+1]=o[t+1]*l+s,r[t+2]=o[t+2]*c+a;return{position:r,normal:t.normal,tangent:t.tangent}}(t,e,n)}function d(t,e,n){const{position:o,normal:i,tangent:s}=t;if((0,r.Wi)(e))return{position:o,normal:i,tangent:s};const a=e.localMatrix;return y({position:(0,m.zZ)(o,new Float64Array(o.length),a),normal:(0,r.pC)(i)?(0,m.w9)(i,new Float32Array(i.length),a):null,tangent:(0,r.pC)(s)?(0,m.VS)(s,new Float32Array(s.length),a):null},e.getOriginPoint(n),{geographic:e.geographic})}function x(t,e,n){if(n?.useTransform){const{position:r,normal:o,tangent:i}=t;return{vertexAttributes:{position:r,normal:o,tangent:i},transform:new p.Z({origin:[e.x,e.y,e.z??0],geographic:(0,g.h)(e.spatialReference,n)})}}return{vertexAttributes:y(t,e,n),transform:null}}function w(t,e,n){return(0,g.h)(e.spatialReference,n)?R(t,e,n):C(t,e,n)}function b(t,e,n,o){if((0,r.Wi)(e))return w(t,n,o);const i=d(t,e,n.spatialReference);return n.equals(e.getOriginPoint(n.spatialReference))?C(i,n,o):(0,g.h)(n.spatialReference,o)?R(i,n,o):C(i,n,o)}function v(t,e,n,o,i){if((0,r.Wi)(n))return null;const s=new Float32Array(n.length);return(0,h.a)(f.ct.fromTypedArray(s),f.ct.fromTypedArray(n),o),(0,m.Yk)(s,t,e,i,s),s}function A(t,e,n,o,i){if((0,r.Wi)(n))return null;const s=new Float32Array(n.length);(0,h.a)(f.ct.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT),f.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),o);for(let t=3;t<s.length;t+=4)s[t]=n[t];return(0,m.M2)(s,t,e,i,s),s}function C(t,e,n){const r=new Float64Array(t.position.length),o=t.position,i=e.x,s=e.y,a=e.z||0,{horizontal:l,vertical:c}=P(n?n.unit:null,e.spatialReference);for(let t=0;t<o.length;t+=3)r[t+0]=(o[t+0]-i)/l,r[t+1]=(o[t+1]-s)/l,r[t+2]=(o[t+2]-a)/c;return{position:r,normal:t.normal,tangent:t.tangent}}function R(t,e,n){const r=e.spatialReference;F(e,n,E);const o=(0,s.a)(T,E),i=new Float64Array(t.position.length),a=function(t,e,n,r){const o=(0,m.XO)(t,e,r),i=f.fP.fromTypedArray(o),s=new Float64Array(o.length),a=f.fP.fromTypedArray(s);return(0,h.t)(a,i,n),s}(t.position,r,o,i),c=(0,l.a)(O,o);return{position:a,normal:M(t.normal,t.position,i,r,c),tangent:Z(t.tangent,t.position,i,r,c)}}function F(t,e,n){(0,c.Bm)(t.spatialReference,[t.x,t.y,t.z||0],n,(0,u.rS)(t.spatialReference));const{horizontal:r,vertical:o}=P(e?e.unit:null,t.spatialReference);return(0,s.h)(n,n,[r,r,o]),n}function M(t,e,n,o,i){if((0,r.Wi)(t))return null;const s=(0,m.Iz)(t,e,n,o,new Float32Array(t.length)),a=f.ct.fromTypedArray(s);return(0,h.a)(a,a,i),s}function Z(t,e,n,o,i){if((0,r.Wi)(t))return null;const s=(0,m.wi)(t,e,n,o,new Float32Array(t.length)),a=f.ct.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT);return(0,h.a)(a,a,i),s}function P(t,e){if((0,r.Wi)(t))return I;const n=e.isGeographic?1:(0,o.c9)(e),i=e.isGeographic?1:(0,o._R)(e),s=(0,o.En)(1,t,"meters");return{horizontal:s*n,vertical:s*i}}const E=(0,a.c)(),T=(0,a.c)(),O=(0,i.c)(),I={horizontal:1,vertical:1}},16885:(t,e,n)=>{n.r(e),n.d(e,{meshFeatureSetFromJSON:()=>Zt});var r=n(80085),o=n(61681),i=n(91772),s=n(36663),a=n(70375),l=n(53280),c=n(68309),u=n(13802),p=n(64189),f=n(78668),h=n(76868),g=n(81977),m=(n(7753),n(39994),n(7283),n(40266)),y=n(8909),d=n(20031),x=n(53446),w=n(89542),b=n(34218),v=n(77727),A=n(68403),C=n(124),R=n(35413),F=n(90472),M=n(67341),Z=n(91780);const P=u.Z.getLogger("esri.geometry.support.meshUtils.centerAt");const E=(0,y.c)(),T=(0,y.c)();var O=n(3466);function I(t){const e=(0,O.Yd)(t.url);return n=>{const r=(0,O.PF)(n,e,e),o=r?r.replace(/^ *\.\//,""):null;return t.files.get(o)??n}}async function z(t,e){return t instanceof Blob?L.fromBlob(t):"string"==typeof t?new L(t):Array.isArray(t)?async function(t,e){const n=new Map;let r=null;const i=await(0,f.WW)(t.map((async t=>({name:t.name,source:await z(t instanceof Blob?t:t.source,e)})))),s=[];for(const t of i)t&&((0,f.Hc)(e)?t.source.dispose():s.push(t));(0,f.k_)(e);for(const{name:t,source:e}of s)((0,o.Wi)(r)||/\.(gltf|glb)/i.test(t))&&(r=e.url),n.set(t,e.url),e.files&&e.files.forEach(((t,e)=>n.set(e,t)));if((0,o.Wi)(r))throw new a.Z("mesh-load-external:missing-files","Missing files to load external mesh source");return new L(r,(()=>s.forEach((({source:t})=>t.dispose()))),n)}(t,e):async function(t,e){const{default:r}=await(0,f.Hl)(Promise.resolve().then(n.bind(n,66341)),e),o="string"==typeof t.multipart[0]?await Promise.all(t.multipart.map((async t=>(await r(t,{responseType:"array-buffer"})).data))):t.multipart;return L.fromBlob(new Blob(o))}(t,e)}class L{constructor(t,e=(()=>{}),n=new Map){this.url=t,this.dispose=e,this.files=n}static fromBlob(t){const e=URL.createObjectURL(t);return new L(e,(()=>URL.revokeObjectURL(e)))}}var S=n(1662),_=n(34344),N=n(39100),U=n(6766),k=n(25726),D=n(49921);const j=u.Z.getLogger("esri.geometry.support.meshUtils.offset");function B(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const W=(0,y.c)(),G=(0,N.c)(),$=(0,_.c)(),Y={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function q(t,e,n){t.isPlane||function(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}(t),function(t,e){if(null==e)return;const n="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];V[0]=n[0],V[4]=n[1],V[8]=n[2];for(let e=0;e<t.position.length;e+=3){for(let n=0;n<3;n++)X[n]=t.position[e+n];(0,U.t)(X,X,V);for(let n=0;n<3;n++)t.position[e+n]=X[n]}if(n[0]!==n[1]||n[1]!==n[2]){V[0]=1/n[0],V[4]=1/n[1],V[8]=1/n[2];for(let e=0;e<t.normal.length;e+=3){for(let n=0;n<3;n++)X[n]=t.normal[e+n];(0,U.t)(X,X,V),(0,U.n)(X,X);for(let n=0;n<3;n++)t.normal[e+n]=X[n]}}}(t,n&&n.size);const{vertexAttributes:r,transform:o}=(0,Z.w1)(t,e,n);return{vertexAttributes:new C.Q({...r,uv:t.uv}),transform:o,components:[new v.Z({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}const H={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},K={south:0,east:1,north:2,west:3,up:4,down:5},X=(0,y.c)(),V=(0,_.c)();var J=n(24455);const Q=u.Z.getLogger("esri.geometry.support.meshUtils.rotate");function tt(t,e,n,r=y.Z){if(!(0,o.Wi)(t)){(0,J.d)(ot,(0,b.WH)(e),(0,b.ZZ)(e));for(let e=0;e<t.length;e+=n){for(let n=0;n<3;n++)et[n]=t[e+n]-r[n];(0,U.m)(et,et,ot);for(let n=0;n<3;n++)t[e+n]=et[n]+r[n]}}}const et=(0,y.c)(),nt=(0,y.c)(),rt=(0,b.Ue)(),ot=(0,N.c)(),it=(0,_.c)(),st=(0,y.c)(),at=u.Z.getLogger("esri.geometry.support.meshUtils.scale");function lt(t,e,n=y.Z){if(t)for(let r=0;r<t.length;r+=3){for(let e=0;e<3;e++)ct[e]=t[r+e]-n[e];(0,U.g)(ct,ct,e);for(let e=0;e<3;e++)t[r+e]=ct[e]+n[e]}}const ct=(0,y.c)(),ut=(0,y.c)(),pt=(0,y.c)();var ft;const ht=u.Z.getLogger("esri.geometry.Mesh");let gt=ft=class extends((0,l.p)(c.Z.LoadableMixin((0,p.v)(d.Z)))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new C.Q,this.type="mesh"}initialize(){((0,o.Wi)(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add((0,h.YP)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((t=>t.clone())),transform:(0,o.pC)(this.transform)?this.transform.clone():null})),(()=>this._set("external",null)),{once:!0,sync:!0}))}))}get hasExtent(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(0===t.length||this.components&&0===this.components.length)return{extent:new i.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new x.Z({x:0,y:0,z:0,spatialReference:e})};const n=(0,o.pC)(this.transform)?this.transform.project(t,e):t;let r=1/0,s=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,p=0,f=0,h=0;const g=n.length,m=1/(g/3);let y=0;for(;y<g;){const t=n[y++],e=n[y++],o=n[y++];r=Math.min(r,t),s=Math.min(s,e),a=Math.min(a,o),l=Math.max(l,t),c=Math.max(c,e),u=Math.max(u,o),p+=m*t,f+=m*e,h+=m*o}return{extent:new i.Z({xmin:r,ymin:s,zmin:a,xmax:l,ymax:c,zmax:u,spatialReference:e}),center:new x.Z({x:p,y:f,z:h,spatialReference:e})}}get anchor(){if((0,o.pC)(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new x.Z({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return(0,o.pC)(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(v.Z.from(t)),this.notifyChange("components")):ht.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(-1!==e)return this.components.splice(e,1),void this.notifyChange("components")}ht.error("removeComponent()","Provided component is not part of the list of components")}else ht.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return(0,b.uT)(mt.x,t,yt),(0,b.uT)(mt.y,e,dt),(0,b.uT)(mt.z,n,xt),(0,b.qC)(yt,dt,yt),(0,b.qC)(yt,xt,yt),function(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const r=t.spatialReference;if((0,o.pC)(t.transform)){null!=n?.geographic&&n.geographic!==t.transform.geographic&&Q.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=n?.origin??t.transform.getOriginPoint(r);!function(t,e,n){const r=(0,U.s)(et,n.x,n.y,n.z),o=(0,U.b)(et,r,t.origin);t.applyLocalInverse(o,nt),t.rotation=(0,b.qC)(t.rotation,e,(0,b.Ue)()),t.applyLocalInverse(o,o),(0,U.b)(o,o,nt),t.translation=(0,U.a)((0,y.c)(),t.translation,o)}(t.transform,e,o)}else{const r=n?.origin??t.origin;(0,M.h)(t.spatialReference,n)?function(t,e,n){const r=t.spatialReference,i=(0,k.rS)(r),s=st;(0,F.KC)(n,s,i)||(0,F.KC)(t.origin,s,i);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,u=new Float64Array(a.length),p=(0,o.pC)(l)?new Float32Array(l.length):null,f=(0,o.pC)(c)?new Float32Array(c.length):null;(0,F.Bm)(i,s,ot,i),(0,S.f)(it,ot);const h=rt;(0,U.t)((0,b.ZZ)(rt),(0,b.ZZ)(e),it),h[3]=e[3],(0,D.XO)(a,r,u),(0,o.pC)(l)&&(0,D.Iz)(l,a,u,r,p),(0,o.pC)(c)&&(0,D.wi)(c,a,u,r,f),tt(u,h,3,s),(0,D.To)(u,a,r),(0,o.pC)(l)&&(tt(p,h,3),(0,D.Yk)(p,a,u,r,l)),(0,o.pC)(c)&&(tt(f,h,4),(0,D.M2)(f,a,u,r,c)),t.vertexAttributesChanged()}(t,e,r):function(t,e,n){const r=st;if(!(0,F.KC)(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,Q.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}tt(t.vertexAttributes.position,e,3,r),tt(t.vertexAttributes.normal,e,3),tt(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}(t,e,r)}}(this,yt,r),this}offset(t,e,n,r){return this.loaded?(wt[0]=t,wt[1]=e,wt[2]=n,function(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&((0,o.pC)(t.transform)?(null!=n?.geographic&&n.geographic!==t.transform.geographic&&j.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function(t,e){const n=t.origin;t.origin=(0,U.a)((0,y.c)(),n,e)}(t.transform,e)):(0,M.h)(t.spatialReference,n)?function(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,i=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,a=new Float64Array(r.length),l=(0,o.pC)(i)?new Float32Array(i.length):null,c=(0,o.pC)(s)?new Float32Array(s.length):null,u=t.extent.center,p=W;(0,F.Bm)(n,[u.x,u.y,u.z],G,(0,k.rS)(n)),(0,S.f)($,G),(0,U.t)(p,e,$),(0,D.XO)(r,n,a),(0,o.pC)(i)&&(0,D.Iz)(i,r,a,n,l),(0,o.pC)(s)&&(0,D.wi)(s,r,a,n,c),B(a,p),(0,D.To)(a,r,n),(0,o.pC)(i)&&(0,D.Yk)(l,r,a,n,i),(0,o.pC)(s)&&(0,D.M2)(c,r,a,n,s),t.vertexAttributesChanged()}(t,e):function(t,e){B(t.vertexAttributes.position,e),t.vertexAttributesChanged()}(t,e))}(this,wt,r),this):(ht.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(function(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if((0,o.pC)(t.transform)){null!=n?.geographic&&n.geographic!==t.transform.geographic&&at.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=n?.origin??t.transform.getOriginPoint(r);!function(t,e,n){const r=(0,U.s)(ct,n.x,n.y,n.z),o=(0,U.b)(ct,r,t.origin);t.applyLocalInverse(o,ut);const i=(0,U.g)((0,y.c)(),t.scale,e);t.scale=i,t.applyLocalInverse(o,o),(0,U.b)(o,o,ut),t.translation=(0,U.a)((0,y.c)(),t.translation,o)}(t.transform,e,o)}else{const r=(0,M.h)(t.spatialReference,n),i=n&&n.origin||t.origin;r?function(t,e,n){const r=t.spatialReference,i=(0,k.rS)(r),s=pt;(0,F.KC)(n,s,i)||(0,F.KC)(t.origin,s,i);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,u=new Float64Array(a.length),p=(0,o.pC)(l)?new Float32Array(l.length):null,f=(0,o.pC)(c)?new Float32Array(c.length):null;(0,D.XO)(a,r,u),(0,o.pC)(l)&&(0,D.Iz)(l,a,u,r,p),(0,o.pC)(c)&&(0,D.wi)(c,a,u,r,f),lt(u,e,s),(0,D.To)(u,a,r),(0,o.pC)(l)&&(0,D.Yk)(p,a,u,r,l),(0,o.pC)(c)&&(0,D.M2)(f,a,u,r,c),t.vertexAttributesChanged()}(t,e,i):function(t,e,n){const r=pt;if(!(0,F.KC)(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,at.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}lt(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}(t,e,i)}}(this,t,e),this):(ht.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(function(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=n?.origin??t.origin;(0,o.pC)(t.transform)?(null!=n?.geographic&&n.geographic!==t.transform.geographic&&P.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function(t,e,n){const r=e.x-n.x,o=e.y-n.y,i=e.hasZ&&n.hasZ?e.z-n.z:0,s=t.origin;t.origin=[s[0]+r,s[1]+o,s[2]+i]}(t.transform,e,r)):(0,M.h)(t.spatialReference,n)?function(t,e,n){const r=(0,Z.FF)(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:i,tangent:s}=(0,Z.iv)(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=i,t.vertexAttributes.tangent=s,t.vertexAttributesChanged()}(t,e,r):function(t,e,n){const r=T,o=E;if((0,F.KC)(e,o,t.spatialReference)){if(!(0,F.KC)(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,P.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}(function(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]})(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else P.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}(t,e,r)}(this,t,e),this):(ht.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return(0,o.pC)(this.external)&&this.addResolvingPromise(async function(t,e,r){const{loadGLTFMesh:i}=await(0,f.Hl)(n.e(216).then(n.bind(n,40216)),r),s=await z(e,r),a=i(new x.Z({x:0,y:0,z:0,spatialReference:t.spatialReference}),s.url,{resolveFile:I(s),useTransform:!0,signal:(0,o.pC)(r)?r.signal:null});a.then((()=>s.dispose()),(()=>s.dispose()));const{vertexAttributes:l,components:c}=await a;t.vertexAttributes=l,t.components=c}(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map((n=>n.cloneWithDeduplication(t,e))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:(0,o.pC)(this.transform)?this.transform.clone():null,external:(0,o.pC)(this.external)?{source:this.external.source,extent:(0,o.pC)(this.external.extent)?this.external.extent.clone():null}:null};return new ft(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await n.e(7400).then(n.bind(n,57400));return e(this,t)}static createBox(t,e){if(!(t instanceof x.Z))return ht.error(".createBox()","expected location to be a Point instance"),null;const n=new ft(q(function(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=H,r=4*t.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let l=0,c=0,u=0,p=0;for(let r=0;r<t.length;r++){const f=t[r],h=l/3;for(const t of e)a[p++]=h+t;const g=f.corners;for(let t=0;t<4;t++){const e=g[t];let r=0;s[u++]=.25*n[t][0]+f.uvOrigin[0],s[u++]=f.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==f.axis[t]?(o[l++]=.5*f.axis[t],i[c++]=f.axis[t]):(o[l++]=.5*e[r++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:a}}(),t,e));return e&&e.imageFace&&"all"!==e.imageFace?function(t,e){const n=t.components[0],r=n.faces,i=K[e],s=6*i,a=new Uint32Array(6),l=new Uint32Array(r.length-6);let c=0,u=0;for(let t=0;t<r.length;t++)t>=s&&t<s+6?a[c++]=r[t]:l[u++]=r[t];if((0,o.pC)(t.vertexAttributes.uv)){const e=new Float32Array(t.vertexAttributes.uv),n=4*i*2,r=[0,1,1,1,1,0,0,0];for(let t=0;t<r.length;t++)e[n+t]=r[t];t.vertexAttributes.uv=e}return t.components=[new v.Z({faces:a,material:n.material}),new v.Z({faces:l})],t}(n,e.imageFace):n}static createSphere(t,e){return t instanceof x.Z?new ft(q(function(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array((e-1)*n*2*3);let l=0,c=0,u=0,p=0;for(let t=0;t<=e;t++){const r=t/e*Math.PI+.5*Math.PI,f=Math.cos(r),h=Math.sin(r);X[2]=h;const g=0===t||t===e,m=g?n-1:n;for(let r=0;r<=m;r++){const h=r/m*2*Math.PI;X[0]=-Math.sin(h)*f,X[1]=Math.cos(h)*f;for(let t=0;t<3;t++)o[l]=.5*X[t],i[l]=X[t],++l;s[c++]=(r+(g?.5:0))/n,s[c++]=t/e,0!==t&&r!==n&&(t!==e&&(a[u++]=p,a[u++]=p+1,a[u++]=p-n),1!==t&&(a[u++]=p,a[u++]=p-n,a[u++]=p-n-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}(e&&e.densificationFactor||0),t,e)):(ht.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof x.Z?new ft(q(function(t=0){const e=Math.round(16*2**t),n=4*(e+1)+2*e,r=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),s=new Uint32Array(4*e*3);let a=0,l=0,c=0,u=0,p=0;for(let t=0;t<=5;t++){const n=0===t||5===t,f=t<=1||t>=4,h=2===t||4===t,g=n?e-1:e;for(let m=0;m<=g;m++){const y=m/g*2*Math.PI,d=n?0:.5;X[0]=d*Math.sin(y),X[1]=d*-Math.cos(y),X[2]=t<=2?.5:-.5;for(let e=0;e<3;e++)r[a++]=X[e],o[l++]=f?2===e?t<=1?1:-1:0:2===e?0:X[e]/d;i[c++]=(m+(n?.5:0))/e,i[c++]=t<=1?1*t/3:t<=3?1*(t-2)/3+1/3:1*(t-4)/3+2/3,h||0===t||m===e||(5!==t&&(s[u++]=p,s[u++]=p+1,s[u++]=p-e),1!==t&&(s[u++]=p,s[u++]=p-e,s[u++]=p-e-1)),p++}}return{position:r,normal:o,uv:i,faces:s}}(e&&e.densificationFactor||0),t,e)):(ht.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){if(!(t instanceof x.Z))return ht.error(".createPlane()","expected location to be a Point instance"),null;const n=e?.facing??"up",r=function(t,e){const n="number"==typeof e?e:null!=e?e.width:1,r="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}(n,e?.size);return new ft(q(function(t){const e=Y.facingAxisOrderSwap[t],n=Y.position,r=Y.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let s=0;for(let t=0;t<4;t++){const t=s;for(let a=0;a<3;a++){const l=e[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[s]=n[t+c]*u,i[s]=r[t+c]*u,s++}}return{position:o,normal:i,uv:new Float32Array(Y.uv),faces:new Uint32Array(Y.faces),isPlane:!0}}(n),t,{...e,size:r}))}static createFromPolygon(t,e){if(!(t instanceof w.Z))return ht.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=(0,R.bT)(t);return new ft({vertexAttributes:new C.Q({position:n.position}),components:[new v.Z({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,r){if(!(t instanceof x.Z))throw ht.error(".createfromGLTF()","expected location to be a Point instance"),new a.Z("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:o}=await(0,f.Hl)(n.e(216).then(n.bind(n,40216)),r);return new ft(await o(t,e,r))}static createWithExternalSource(t,e,n){const r=n?.extent??null,o=n?.transform.clone()??new A.Z;o.origin=[t.x,t.y,t.z??0];const i=t.spatialReference;return new ft({external:{source:e,extent:r},transform:o,spatialReference:i})}static createIncomplete(t,e){const n=e?.transform.clone()??new A.Z;n.origin=[t.x,t.y,t.z??0];const r=t.spatialReference,o=new ft({transform:n,spatialReference:r});return o.addResolvingPromise(Promise.reject(new a.Z("mesh-incomplete","Mesh resources are not complete"))),o}};(0,s._)([(0,g.Cb)({type:[v.Z],json:{write:!0}})],gt.prototype,"components",void 0),(0,s._)([(0,g.Cb)({type:A.Z,json:{write:!0}})],gt.prototype,"transform",void 0),(0,s._)([(0,g.Cb)({constructOnly:!0})],gt.prototype,"external",void 0),(0,s._)([(0,g.Cb)({readOnly:!0})],gt.prototype,"hasExtent",null),(0,s._)([(0,g.Cb)({readOnly:!0})],gt.prototype,"boundingInfo",null),(0,s._)([(0,g.Cb)({readOnly:!0})],gt.prototype,"anchor",null),(0,s._)([(0,g.Cb)({readOnly:!0})],gt.prototype,"origin",null),(0,s._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],gt.prototype,"extent",null),(0,s._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],gt.prototype,"hasZ",void 0),(0,s._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],gt.prototype,"hasM",void 0),(0,s._)([(0,g.Cb)({type:C.Q,nonNullable:!0,json:{write:!0}})],gt.prototype,"vertexAttributes",void 0),gt=ft=(0,s._)([(0,m.j)("esri.geometry.Mesh")],gt);const mt={x:(0,y.f)(1,0,0),y:(0,y.f)(0,1,0),z:(0,y.f)(0,0,1)},yt=(0,b.Ue)(),dt=(0,b.Ue)(),xt=(0,b.Ue)(),wt=(0,y.c)(),bt=gt;var vt,At,Ct;(Ct=vt||(vt={})).featureGUID="featureGUID",Ct.assetName="assetName",Ct.hash="hash",Ct.type="type",Ct.conversionStatus="conversionStatus",Ct.flags="flags",Ct.complexity="complexity",Ct.size="size",Ct.seqNo="seqNo",Ct.sourceHash="sourceHash",Ct.assetURL="assetURL",function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}(At||(At={}));var Rt,Ft,Mt=n(51211);function Zt(t,e,n){const i=n.features;n.features=[],delete n.geometryType;const s=Mt.default.fromJSON(n);s.geometryType="mesh";const a=s.spatialReference,l=(0,o.Wi)(t.outFields)||!t.outFields.length?()=>({}):(c=t.outFields.includes("*")?null:new Set(t.outFields),({attributes:t})=>{if(!t)return{};if(!c)return t;for(const e in t)c.has(e)||delete t[e];return t});var c;for(const t of i){const n=Pt(t,a,e);(0,o.pC)(n)&&s.features.push(new r.Z({geometry:n,attributes:l(t)}))}return s}function Pt(t,e,n){const{status:r,source:o}=function(t){if(!t.assetMappings)return{status:Rt.FAILED};const e=[],n=new Map;for(const r of t.assetMappings){const t=r[vt.seqNo],o=r[vt.assetName],i=r[vt.assetURL],s=r[vt.conversionStatus];if(s===At.FAILED)return{status:Rt.FAILED};if(s!==At.COMPLETED)return{status:Rt.PENDING};if(null==t)e.push({name:o,source:i});else{const r=n.get(o);let s;r?s=r.multipart:(s=[],e.push({name:o,source:{multipart:s}}),n.set(o,{multipart:s})),s[t]=i}}return{status:Rt.COMPLETED,source:e}}(t);if(r===Rt.FAILED)return null;const s=function({attributes:t},e,{transformFieldRoles:n}){return new x.Z({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}(t,e,n),a=i.Z.fromJSON(t.geometry);a.spatialReference=e;const l=function({attributes:t,assetMappings:e},{transformFieldRoles:n}){return new A.Z({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:(0,b.uT)([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!e[vt.flags]?.includes("PROJECT_VERTICES")})}(t,n);return r===Rt.PENDING?bt.createIncomplete(s,{extent:a,transform:l}):bt.createWithExternalSource(s,o,{extent:a,transform:l})}(Ft=Rt||(Rt={}))[Ft.FAILED=0]="FAILED",Ft[Ft.PENDING=1]="PENDING",Ft[Ft.COMPLETED=2]="COMPLETED"}}]);