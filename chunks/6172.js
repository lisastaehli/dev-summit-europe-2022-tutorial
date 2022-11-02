"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[6172],{6172:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var r,o=i(36663),s=i(70375),n=i(44584),a=i(61681),p=i(15842),l=i(78668),y=i(76868),d=i(81977),c=(i(7753),i(39994),i(7283),i(34248)),h=i(40266),u=i(42557),m=i(38481),f=i(91223),g=i(87232),v=i(43330),_=i(18241),w=i(95874),S=i(69877),b=i(51599),C=i(97304),T=i(66341),O=i(41831),x=i(82064),N=i(3466),Z=i(90482);let I=r=class extends((0,x.eC)(O.Z.ofType(Z.Z))){constructor(e){super(e),this.url=null}clone(){return new r({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const i=new r;for(const r of e)i.add(Z.Z.fromJSON(r,t));return i}static async fromUrl(e,t,i){const o={url:(0,N.mN)(e),origin:"service"},s=await(0,T.default)(e,{responseType:"json",signal:(0,a.U2)(i,"signal")}),n=t.toJSON(),p=[];for(const e of s.data)p.push(Z.Z.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},o));return new r({url:e,items:p})}};(0,o._)([(0,d.Cb)({type:String})],I.prototype,"url",void 0),I=r=(0,o._)([(0,h.j)("esri.layers.support.SceneModifications")],I);const R=I;var L=i(16641);let M=class extends((0,S.Vt)((0,g.Y)((0,v.q)((0,_.I)((0,w.M)((0,p.R)((0,f.V)(m.Z)))))))){constructor(...e){super(...e),this._handles=new n.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add((0,y.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),y.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:(0,L.f)(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,a.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,l.r9)(e)}if(await this._fetchService(t),(0,a.pC)(this._modificationsSource)){const t=await R.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,a.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(S.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,o._)([(0,d.Cb)({type:String,readOnly:!0})],M.prototype,"geometryType",void 0),(0,o._)([(0,d.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,o._)([(0,d.Cb)({type:["IntegratedMeshLayer"]})],M.prototype,"operationalLayerType",void 0),(0,o._)([(0,d.Cb)({json:{read:!1},readOnly:!0})],M.prototype,"type",void 0),(0,o._)([(0,d.Cb)({type:C.U4,readOnly:!0})],M.prototype,"nodePages",void 0),(0,o._)([(0,d.Cb)({type:[C.QI],readOnly:!0})],M.prototype,"materialDefinitions",void 0),(0,o._)([(0,d.Cb)({type:[C.Yh],readOnly:!0})],M.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,d.Cb)({type:[C.H3],readOnly:!0})],M.prototype,"geometryDefinitions",void 0),(0,o._)([(0,d.Cb)({readOnly:!0})],M.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,d.Cb)({type:R}),(0,u.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],M.prototype,"modifications",void 0),(0,o._)([(0,c.r)(["web-scene","portal-item"],"modifications")],M.prototype,"readModifications",null),(0,o._)([(0,d.Cb)(b.PV)],M.prototype,"elevationInfo",void 0),(0,o._)([(0,d.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),M=(0,o._)([(0,h.j)("esri.layers.IntegratedMeshLayer")],M);const U=M},90482:(e,t,i)=>{i.d(t,{Z:()=>m});var r,o=i(36663),s=(i(91957),i(82064)),n=i(67134),a=i(96863),p=i(81977),l=(i(7283),i(40266)),y=i(39835),d=i(42557),c=i(90472),h=i(89542);let u=r=class extends s.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,c.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new a.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new h.Z;(0,c.Wt)(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new r({geometry:(0,n.d9)(this.geometry),type:this.type})}};(0,o._)([(0,p.Cb)({type:h.Z}),(0,d.B)()],u.prototype,"geometry",void 0),(0,o._)([(0,y.c)(["web-scene","portal-item"],"geometry")],u.prototype,"writeGeometry",null),(0,o._)([(0,p.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,d.B)()],u.prototype,"type",void 0),u=r=(0,o._)([(0,l.j)("esri.layers.support.SceneModification")],u);const m=u}}]);