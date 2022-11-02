"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[8306],{6415:(e,t,i)=>{i.d(t,{I:()=>w,b:()=>v});var r=i(61681),a=i(69666),s=i(25714),n=i(5885),o=i(4731),l=i(73393),h=i(44391),d=i(32394),c=i(84614),u=i(93072),p=i(24603),g=i(23410),y=i(3961),m=i(15176),f=i(70984),_=i(21414);function v(e){const t=new y.kG;(0,c.S)(t,e),t.include(o.w),t.attributes.add(_.T.POSITION,"vec3"),t.attributes.add(_.T.UV0,"vec2"),t.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float");const{vertex:i,fragment:v}=t;return i.uniforms.add(new u.A("textureCoordinateScaleFactor",(e=>(0,r.pC)(e.texture)&&(0,r.pC)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:a.O))),i.code.add(g.H`
    void main(void) {
      vpos = position;
      ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(n.f5,e),t.include(l.l,e),v.uniforms.add([new m.A("tex",(e=>e.texture)),new p.p("opacity",(e=>e.opacity))]),t.varyings.add("vTexCoord","vec2"),e.output===s.H.Alpha?v.code.add(g.H`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${g.H.float(h.F)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(v.include(d.Y),v.code.add(g.H`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${g.H.float(h.F)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.transparencyPassType===f.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),t}const w=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},78306:(e,t,i)=>{i.d(t,{Z:()=>H});var r=i(36663),a=i(67979),s=i(23148),n=i(13802),o=i(61681),l=i(78668),h=i(76868),d=i(81977),c=(i(7753),i(39994),i(7283),i(40266)),u=i(91772),p=i(24568),g=i(43977),y=i(19654),m=i(47562),f=i(6087),_=i(21414);function v(e){return f.Z.createSquareGeometry([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}const w=[0,0,1];var x=i(53986),C=i(3289),b=i(9812),S=i(70984),R=i(79341),A=i(96047),T=i(44101),P=i(79591),E=i(26216),O=i(55068),I=i(42780),M=i(91907);const D=n.Z.getLogger("esri.views.3d.layers.DynamicLayerView3D");let L=class extends((0,O.Z)((0,y.A)(E.Z))){constructor(){super(...arguments),this.drapeSourceType=g.L.RasterImage,this.updatePolicy=S.jq.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=(0,l.Ds)((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{(0,l.D_)(e)||n.Z.getLogger(this.declaredClass).error(e)}))}),2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add((0,s.kB)((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise((0,x.E)(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this.updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler())),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks((()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")}),(()=>{}))),this._isScaleRangeLayer()&&this.updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.notifyChange("suspended")))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach((e=>{this._overlays[e.index]=e,this._updateImageExtent(e)}))}_updateImageExtent(e){const t=this._clippedExtent(e.extent,F);if((0,o.Wi)(t))return;const i=function(e,t,i){const r=(0,p.bf)(e)/(0,p.Cb)(e),a={width:i,height:i};return r>1.0001?a.height=i/r:r<.9999&&(a.width=i*r),a.width=Math.round(a.width/((0,p.bf)(e)/(0,p.bf)(t))),a.height=Math.round(a.height/((0,p.Cb)(e)/(0,p.Cb)(t))),a}(e.extent,t,e.resolution);let r=e.pixelRatio*this.view.state.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const e=this.layer.imageMaxWidth,t=this.layer.imageMaxHeight;if(i.width>e){const t=e/i.width;i.height=Math.floor(i.height*t),i.width=e,r*=t}if(i.height>t){const e=t/i.height;i.width=Math.floor(i.width*e),i.height=t,r*=e}}const a=this._extents[e.index];a&&(0,p.fS)(a.extent,t)&&this._imageSizeEquals(t,a.imageSize,i)||(this._extents[e.index]={extent:(0,p.Ue)(t),imageSize:i,pixelRatio:r},this.suspended||this._fetch(e.index).catch((e=>{(0,l.D_)(e)||D.error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await(0,l.as)(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:i}=e.effectiveScaleRange,r=this.view.scale;if(r<i||t>0&&r>t)return!1}return!0}isUpdating(){return this._images.some((e=>!!e.loadingPromise))}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new u.Z(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await(0,a.Ed)(this._images,(async(i,r)=>{i&&(await e(i,t),await this._createStageObjects(r,i.image,t))}))}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const r=(0,p.bf)(e)/this.maximumDataResolution.x,a=(0,p.Cb)(e)/this.maximumDataResolution.y,s=r/t.width,n=a/t.height,o=r/i.width,l=a/i.height,h=Math.abs(s-o),d=Math.abs(n-l),c=C.Z.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return h<=c&&d<=c}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],r=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:(0,p.Ue)(r)});const a=this._images[e];a.loadingAbortController&&(a.loadingAbortController.abort(),a.loadingAbortController=null);const s=new u.Z(r[0],r[1],r[2],r[3],this._spatialReference);if(0===s.width||0===s.height)return void this._clearImage(e);const n=new AbortController;a.loadingAbortController=n,(0,l.fu)(t,(()=>n.abort()));const o=n.signal,h=this._waitFetchReady(o).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:o},{height:r,width:a}=i.imageSize;return this.layer.fetchImage(s,a,r,t)})).then((e=>{if((0,l.Hc)(o))throw D.warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),(0,l.zE)();return this.processResult(a,e)})).then((()=>{(0,p.JG)(a.renderExtent,r)})).finally((()=>{h===a.loadingPromise&&(a.loadingPromise=null,a.loadingAbortController=null)}));a.loadingPromise=h,this.notifyChange("updating"),await h.then((async()=>{if(o.aborted)throw(0,l.zE)();await this._createStageObjects(e,a.image,o),this.notifyChange("updating")})).catch((e=>{throw e&&!(0,l.D_)(e)&&D.error(e),this.notifyChange("updating"),e}))}_clearImage(e){const t=this._images[e];if(t){(0,o.pC)(t.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],R.$.Geometry.UPDATE),t.renderGeometry=null);const e=this.view._stage;e.remove(t.texture),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const r=this.view._stage,s=this._images[e],n=()=>{r.remove(s.texture),s.texture=null,(0,o.pC)(s.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([s.renderGeometry],R.$.Geometry.UPDATE),s.renderGeometry=null)};if(t){const h=new T.x(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:M.e8.CLAMP_TO_EDGE,t:M.e8.CLAMP_TO_EDGE}});let d;if(await(0,a.q6)(this._images[e===b.fu.INNER?b.fu.OUTER:b.fu.INNER].loadingPromise),(0,l.k_)(i),e===b.fu.INNER)d=v(s.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void n();d=function(e,t){if(!(0,p.kK)(e,t))return v(t);const i=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],r=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],a=t[2]-t[0],s=t[3]-t[1],n=r[0]>0&&r[2]>0?3:2,o=i[0]>0&&i[2]>0?3:2,l=(o+1)*(n+1),h=new Float64Array(3*l),d=new Float32Array(2*l),c=new Uint32Array(6*(o*n-1));let u=0,g=0,y=0,f=0,x=0;for(let e=0;e<4;e++){const o=i[e];if(o<=0)continue;let l=0;for(let i=0;i<4;i++){const o=r[i];o<=0||(h[g++]=t[0]+l,h[g++]=t[1]+u,h[g++]=-1,d[y++]=l/a,d[y++]=u/s,i<3&&e<3&&(1!==i||1!==e)&&(c[x++]=f,c[x++]=f+1,c[x++]=f+n+1,c[x++]=f+1,c[x++]=f+n+2,c[x++]=f+n+1),f++,l+=o)}u+=o}const C=new Uint32Array(c.length);return new m.Z([[_.T.POSITION,{size:3,data:h,exclusive:!0}],[_.T.NORMAL,{size:3,data:w,exclusive:!0}],[_.T.UV0,{size:2,data:d,exclusive:!0}]],[[_.T.POSITION,c],[_.T.NORMAL,C],[_.T.UV0,c]])}(e,s.renderExtent)}n(),r.add(h),await r.loadImmediate(h),s.texture=h,(0,o.Wi)(s.material)?(s.material=new P.j({transparent:!0,textureId:h.id}),r.add(s.material)):s.material.setParameters({textureId:h.id}),s.renderGeometry=new A.z(d,s.material),s.renderGeometry.origin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([s.renderGeometry],R.$.Geometry.UPDATE)}else n(),r.remove(s.material),s.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:i}=e.effectiveScaleRange;return(0,I.Av)(t,i)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return(0,p.JG)(t,e);const i=this.view.basemapTerrain;return i.ready?(0,p.jV)(e,i.extent,t):(0,p.JG)(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await(0,h.N1)((()=>this.view.stationary),e),(0,l.k_)(e)}};(0,r._)([(0,d.Cb)()],L.prototype,"layer",void 0),(0,r._)([(0,d.Cb)()],L.prototype,"suspended",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],L.prototype,"fullExtentInLocalViewSpatialReference",void 0),(0,r._)([(0,d.Cb)()],L.prototype,"updating",void 0),L=(0,r._)([(0,c.j)("esri.views.3d.layers.DynamicLayerView3D")],L);const H=L,F=(0,p.Ue)()},19654:(e,t,i)=>{i.d(t,{A:()=>d});var r=i(36663),a=i(23148),s=i(78668),n=i(76868),o=i(81977),l=(i(7753),i(39994),i(7283),i(40266)),h=i(64862);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add((0,a.kB)((()=>e.abort()))),await(0,n.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,s.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},53986:(e,t,i)=>{i.d(t,{E:()=>n});var r=i(61681),a=i(39536),s=i(8060);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=(0,r.pC)(i)&&i.spatialReference;if((0,r.Wi)(i)||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const o=(0,a.iV)(i,t);return(0,r.pC)(o)?Promise.resolve(o):e.view.state.isLocal?(0,s.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:void 0)).catch((()=>null)):Promise.resolve(null)}},79591:(e,t,i)=>{i.d(t,{j:()=>A});var r=i(25714),a=i(70984),s=i(71399),n=i(80776),o=i(7358),l=i(12045),h=i(46378),d=i(89339),c=i(25584),u=i(36663),p=(i(23410),i(9969)),g=i(52756),y=i(67197),m=i(5474),f=i(95194),_=i(79040),v=i(86942),w=i(6415),x=i(91907),C=i(17346);class b extends g.A{initializeProgram(e){const t=b.shader.get().build(this.configuration);return new f.$(e.rctx,t,m.i)}_setPipelineState(e,t){const i=this.configuration,s=e===a.Am.NONE,n=e===a.Am.FrontFace;return(0,C.sm)({blending:i.output!==r.H.Color&&i.output!==r.H.Alpha||!i.transparent?null:s?S:(0,l.j7)(e),culling:(0,C.zp)(i.cullFace),depthTest:{func:(0,l.Bh)(e)},depthWrite:s?i.writeDepth&&C.LZ:(0,l.K5)(e),colorWrite:C.BK,stencilWrite:i.hasOccludees?_.s3:null,stencilTest:i.hasOccludees?t?_.eD:_.RY:null,polygonOffset:s||n?null:(0,l.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}b.shader=new p.J(w.I,(()=>i.e(7204).then(i.bind(i,47204))));const S=(0,C.if)(x.zi.ONE,x.zi.ONE_MINUS_SRC_ALPHA);class R extends v.W{constructor(){super(...arguments),this.output=r.H.Color,this.cullFace=a.Vr.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=a.Am.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}(0,u._)([(0,y.o)({count:r.H.COUNT})],R.prototype,"output",void 0),(0,u._)([(0,y.o)({count:a.Vr.COUNT})],R.prototype,"cullFace",void 0),(0,u._)([(0,y.o)()],R.prototype,"hasSlicePlane",void 0),(0,u._)([(0,y.o)()],R.prototype,"transparent",void 0),(0,u._)([(0,y.o)()],R.prototype,"enableOffset",void 0),(0,u._)([(0,y.o)()],R.prototype,"writeDepth",void 0),(0,u._)([(0,y.o)()],R.prototype,"hasOccludees",void 0),(0,u._)([(0,y.o)({count:a.Am.COUNT})],R.prototype,"transparencyPassType",void 0),(0,u._)([(0,y.o)()],R.prototype,"hasMultipassTerrain",void 0),(0,u._)([(0,y.o)()],R.prototype,"cullAboveGround",void 0);class A extends o.F5{constructor(e){super(e,new P),this.supportsEdges=!0,this.techniqueConfig=new R}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<l.ve,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,i,r,a,s,n){(0,c.Bw)(e,t,r,a,s,void 0,n)}requiresSlot(e,t){return e===h.r.DRAPED_MATERIAL||((0,s.S)(t)===r.H.Highlight?e===h.r.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?h.r.TRANSPARENT_MATERIAL:h.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:h.r.OPAQUE_MATERIAL))}createGLMaterial(e){return e.output===r.H.Color||e.output===r.H.Alpha||e.output===r.H.Highlight?new T(e):void 0}createBufferWriter(){return new d.G_(d.W1)}}class T extends n.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(b,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==r.H.Color&&this._output!==r.H.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class P extends o.Mt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=a.Vr.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}},26216:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(36663),a=i(53443),s=i(31355),n=i(53280),o=i(86618),l=i(13802),h=i(61681),d=i(64189),c=i(81977),u=(i(7753),i(39994),i(7283),i(40266));let p=class extends((0,n.p)((0,o.IG)((0,d.v)(s.Z.EventedMixin(a.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,c.Cb)()],p.prototype,"fullOpacity",null),(0,r._)([(0,c.Cb)()],p.prototype,"layer",void 0),(0,r._)([(0,c.Cb)()],p.prototype,"parent",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,r._)([(0,c.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,r._)([(0,c.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,r._)([(0,c.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,r._)([(0,c.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,r._)([(0,c.Cb)()],p.prototype,"visible",null),(0,r._)([(0,c.Cb)()],p.prototype,"view",void 0),p=(0,r._)([(0,u.j)("esri.views.layers.LayerView")],p);const g=p},55068:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(36663),a=i(13802),s=i(78668),n=i(76868),o=i(81977),l=(i(7753),i(39994),i(7283),i(40266));const h=e=>{let t=class extends e{initialize(){this.handles.add((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,s.D_)(e)||a.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);