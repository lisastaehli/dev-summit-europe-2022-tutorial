"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[9892],{63886:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(36663),r=n(15065),o=n(53443),s=n(41151),l=n(82064),a=n(61681),u=n(81977),p=(n(7753),n(39994),n(7283),n(40266)),y=n(42557),d=n(53446),c=n(74710);let h=class extends((0,l.eC)((0,s.J)(o.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a._W)(this.position,e.position)&&(0,a._W)(this.elevationInfo,e.elevationInfo)&&(0,r.kk)(this.feature,e.feature)}};(0,i._)([(0,u.Cb)({type:d.Z}),(0,y.B)()],h.prototype,"position",void 0),(0,i._)([(0,u.Cb)({type:c.ZP}),(0,y.B)()],h.prototype,"elevationInfo",void 0),(0,i._)([(0,u.Cb)(r.rX)],h.prototype,"feature",void 0),h=(0,i._)([(0,p.j)("esri.analysis.LineOfSightAnalysisObserver")],h);const b=h},31200:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(36663),r=n(15065),o=n(41151),s=n(82064),l=n(61681),a=n(81977),u=(n(7753),n(39994),n(7283),n(40266)),p=n(42557),y=n(53446),d=n(74710);let c=class extends((0,s.eC)(o.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l._W)(this.position,e.position)&&(0,l._W)(this.elevationInfo,e.elevationInfo)&&(0,r.kk)(this.feature,e.feature)}};(0,i._)([(0,a.Cb)({type:y.Z}),(0,p.B)()],c.prototype,"position",void 0),(0,i._)([(0,a.Cb)({type:d.ZP}),(0,p.B)()],c.prototype,"elevationInfo",void 0),(0,i._)([(0,a.Cb)(r.rX)],c.prototype,"feature",void 0),c=(0,i._)([(0,u.j)("esri.analysis.LineOfSightAnalysisTarget")],c);const h=c},15065:(e,t,n)=>{n.d(t,{kk:()=>r,pD:()=>o,rX:()=>s});var i=n(61681);function r(e,t){return o(e)===o(t)}function o(e){if((0,i.Wi)(e))return null;const t=null!=e.layer?e.layer.id:"";let n=null;return n=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==n?null:`o-${t}-${n}`}const s={json:{write:{writer:function(e,t){(0,i.Wi)(e)||null==e.layer?.objectIdField||null==e.attributes||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},69892:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var i=n(36663),r=n(53443),o=n(41151),s=n(86618),l=n(82064),a=n(61681),u=n(81977),p=(n(7753),n(39994),n(7283),n(40266));let y=0,d=class extends((0,l.eC)((0,o.J)((0,s.IG)(r.Z)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${y++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if((0,a.pC)(t))switch(t.type){case"line-of-sight":t.removeAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(a.pC)}};(0,i._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,i._)([(0,u.Cb)({type:String})],d.prototype,"title",void 0),(0,i._)([(0,u.Cb)({constructOnly:!0})],d.prototype,"type",void 0),(0,i._)([(0,u.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,i._)([(0,u.Cb)({readOnly:!0})],d.prototype,"extent",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],d.prototype,"isEditable",null),(0,i._)([(0,u.Cb)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],d.prototype,"nonEditableMessage",void 0),d=(0,i._)([(0,p.j)("esri.analysis.Analysis")],d);const c=d;var h=n(63886),b=n(31200),v=n(41831),g=n(58811),f=n(76868),C=n(90472),_=n(37116),w=n(83772);const I=v.Z.ofType(b.Z);let j=class extends c{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own((0,f.YP)((()=>this._computeExtent()),(e=>{((0,a.Wi)(e)||(0,a.Wi)(e.pending))&&this._set("extent",(0,a.pC)(e)?e.extent:null)}),f.tX))}get targets(){return this._get("targets")||new I}set targets(e){this._set("targets",(0,g.Z)(e,this.targets,I))}get spatialReference(){return(0,a.pC)(this.observer)&&(0,a.pC)(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[(0,a.yw)(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return(0,a.pC)(e)?(0,a.Wg)(e.pending):null}_computeExtent(){const e=this.spatialReference;if((0,a.Wi)(this.observer)||(0,a.Wi)(this.observer.position)||(0,a.Wi)(e))return null;const t=e=>"absolute-height"===(0,w.VW)(e.position,e.elevationInfo),n=this.observer.position,i=(0,_.al)(n.x,n.y,n.z,n.x,n.y,n.z);for(const t of this.targets)if((0,a.pC)(t.position)){const n=(0,C.dz)(t.position,e);if((0,a.pC)(n.pending))return{pending:n.pending,extent:null};if((0,a.pC)(n.geometry)){const{x:e,y:t,z:r}=n.geometry;(0,_.pp)(i,[e,t,r])}}const r=(0,_.HH)(i,e);return t(this.observer)&&this.targets.every(t)||(r.zmin=null,r.zmax=null),{pending:null,extent:r}}clear(){this.observer=null,this.targets.removeAll()}};(0,i._)([(0,u.Cb)({type:["line-of-sight"]})],j.prototype,"type",void 0),(0,i._)([(0,u.Cb)({type:h.Z,json:{read:!0,write:!0}})],j.prototype,"observer",void 0),(0,i._)([(0,u.Cb)({cast:g.R,type:I,nonNullable:!0,json:{read:!0,write:!0}})],j.prototype,"targets",null),(0,i._)([(0,u.Cb)({value:null,readOnly:!0})],j.prototype,"extent",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],j.prototype,"spatialReference",null),(0,i._)([(0,u.Cb)({readOnly:!0})],j.prototype,"requiredPropertiesForEditing",null),(0,i._)([(0,u.Cb)({readOnly:!0})],j.prototype,"nonEditableMessage",void 0),j=(0,i._)([(0,p.j)("esri.analysis.LineOfSightAnalysis")],j);const m=j;var x=n(15842),O=n(38481),Z=n(43330);const E=v.Z.ofType(b.Z);let P=class extends((0,Z.q)((0,x.R)(O.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new m,this.opacity=1}initialize(){this.own((0,f.YP)((()=>this.analysis),((e,t)=>{(0,a.pC)(t)&&t.parent===this&&(t.parent=null),(0,a.pC)(e)&&(e.parent=this)}),f.tX))}async load(){return(0,a.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return(0,a.yw)(this.analysis,(e=>e.observer))}set observer(e){(0,a.yw)(this.analysis,(t=>t.observer=e))}get targets(){return(0,a.pC)(this.analysis)?this.analysis.targets:null}set targets(e){(0,a.yw)(this.analysis,(t=>t.targets=e))}get fullExtent(){return(0,a.pC)(this.analysis)?this.analysis.extent:null}get spatialReference(){return(0,a.pC)(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new m)}};(0,i._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),(0,i._)([(0,u.Cb)({type:["LineOfSightLayer"]})],P.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({type:h.Z,json:{read:!0,write:{ignoreOrigin:!0}}})],P.prototype,"observer",null),(0,i._)([(0,u.Cb)({type:E,json:{read:!0,write:{ignoreOrigin:!0}}})],P.prototype,"targets",null),(0,i._)([(0,u.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],P.prototype,"analysis",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],P.prototype,"fullExtent",null),(0,i._)([(0,u.Cb)({readOnly:!0})],P.prototype,"spatialReference",null),(0,i._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],P.prototype,"opacity",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],P.prototype,"listMode",void 0),P=(0,i._)([(0,p.j)("esri.layers.LineOfSightLayer")],P);const W=P},83772:(e,t,n)=>{n.d(t,{RL:()=>s,VW:()=>o,jG:()=>y,tq:()=>p,vQ:()=>l,zx:()=>a});var i=n(61681),r=n(91478);function o(e,t){return function(e,t){return(0,i.Wi)(t)||!t.mode?e?"absolute-height":"on-the-ground":t.mode}(!!(0,i.pC)(e)&&e.hasZ,t)}function s(e){const t=function(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}(e),n=o(e.geometry,t);return{mode:n,offset:(0,i.pC)(t)&&"on-the-ground"!==n?(0,i.Pt)(t.offset,0)*(0,r.Z7)((0,i.Pt)(t.unit,"meters")):0}}function l(e,t,n,i=null){return u(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,n,i)}function a(e,t,n,i,r=null){return u(e,t[0],t[1],t.length>2?t[2]:0,n,i,r)}function u(e,t,n,r,o,s,l=null){if((0,i.Wi)(s))return;const a=(0,i.pC)(l)?l.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:u}=p(t,n,r,o,e,s);return function(e,t,n,r,o,s,l,a){const u=(0,i.pC)(l)&&(0,i.pC)(l.offset)?l.offset:0;switch(a){case"absolute-height":return e-u;case"relative-to-ground":return e-((0,i.Pt)(s.elevationProvider.getElevation(t,n,r,o,"ground"),0)+u);case"relative-to-scene":return e-((0,i.Pt)(s.elevationProvider.getElevation(t,n,r,o,"scene"),0)+u)}}(u,t,n,r,o,e,l,a)}function p(e,t,n,r,o,s){const l=(0,i.pC)(s.offset)?s.offset:0;switch(s.mode){case"absolute-height":return{absoluteZ:n+l,elevation:0};case"on-the-ground":{const n=(0,i.Pt)(o.elevationProvider.getElevation(e,t,0,r,"ground"),0);return{absoluteZ:n,elevation:n}}case"relative-to-ground":{const s=(0,i.Pt)(o.elevationProvider.getElevation(e,t,n,r,"ground"),0);return{absoluteZ:n+s+l,elevation:s}}case"relative-to-scene":{const s=(0,i.Pt)(o.elevationProvider.getElevation(e,t,n,r,"scene"),0);return{absoluteZ:n+s+l,elevation:s}}}}const y={mode:"absolute-height",offset:0}}}]);