"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[5871],{21586:(e,t,i)=>{function s(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?n(e.view.floors,t.floorInfo.floorField):null}function r(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(!e?.length)return null;const i=e.filter((e=>""!==e)).map((e=>`'${e}'`));return i.push("''"),`${t} IN (${i.join(",")}) OR ${t} IS NULL`}i.d(t,{c:()=>s,f:()=>r})},19654:(e,t,i)=>{i.d(t,{A:()=>d});var s=i(36663),r=i(23148),n=i(78668),a=i(76868),o=i(81977),l=(i(7753),i(39994),i(7283),i(40266)),h=i(64862);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add((0,r.kB)((()=>e.abort()))),await(0,a.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,s._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},55765:(e,t,i)=>{i.d(t,{Z:()=>f});var s=i(36663),r=i(53443),n=i(31355),a=i(44584),o=i(61681),l=i(76868),h=i(81977),d=(i(7753),i(39994),i(7283),i(40266)),u=i(17135),c=i(24568),p=i(22167);class y{constructor(){this._extents=new u.Z({allocator:e=>e||(0,c.Ue)()}),this._tmpExtent=(0,c.Ue)(),this._dirty=!1}get empty(){return 0===this._extents.length}get size(){return this._extents.length}clear(){this._extents.clear()}add(e){this._contains(e)||(this._removeContained(e),(0,c.JG)(this._extents.pushNew(),e),this._dirty=!0)}pop(){return this._dirty&&this._mergeTight(),this._extents.pop()}merge(e){return this._mergeTight(e),e.hasProgressed}_mergeTight(e=p.G5){const t=this._extents,i=new Set;let s=0;for(;s!==t.length;){t.sort(((e,t)=>e[0]-t[0])),s=t.length,i.clear();for(let s=0;s<t.length;++s){if(e.done)return;const r=t.getItemAt(s);for(let e=s+1;e<t.length;++e){const s=t.getItemAt(e);if(s[0]>=r[2])break;i.add(s)}i.forEach((s=>{if(r===s)return;if(s[2]<=r[0])return void i.delete(s);const n=(0,c.SO)(r),a=(0,c.SO)(s),o=this._tmpExtent;(0,c.jn)(r,s,o);const l=n+a;((0,c.SO)(o)-l)/l<.05&&((0,c.JG)(r,o),i.delete(s),t.remove(s),e.madeProgress())})),i.add(r)}}this._dirty=!1}_contains(e){return this._extents.some((t=>(0,c.r3)(t,e)))}_removeContained(e){this._extents.filterInPlace((t=>!(0,c.r3)(e,t)))}get test(){const e=this;return{containsPoint:t=>e._extents.some((e=>(0,c.BD)(e,t)))}}}var g=i(70984);let b=class extends r.Z{constructor(){super(...arguments),this.dirtyExtents=new y,this.globalDirty=!1,this.averageExtentUpdateSize=0,this.dirtyGraphicsSet=new Set,this.handles=new a.Z,this.updateElevation=!1,this.graphicsCoreOwner=null,this.graphicsCore=null,this.events=new n.Z}setup(e,t,i,s){this.graphicsCoreOwner=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=s;const r=this.graphicsCoreOwner.view.resourceController.scheduler;this.handles.add([s.on("elevation-change",(e=>this._elevationChanged(e))),(0,l.YP)((()=>this.graphicsCoreOwner.suspended),(()=>this._suspendedChange())),r.registerTask(p.T8.ELEVATION_ALIGNMENT,this)])}destroy(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.graphicsCoreOwner=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}clear(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}_suspendedChange(){!0===this.graphicsCoreOwner.suspended?this.updateElevation=!1:!1===this.graphicsCoreOwner.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this.globalDirty=!0,this.notifyChange("updating")}get updating(){return this.running}get running(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}get updatingRemaining(){return this.dirtyGraphicsSet.size+this.dirtyExtents.size*this.averageExtentUpdateSize}runTask(e){for(this.globalDirty&&(this._markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run((()=>this.dirtyExtents.merge(e)));this.running&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.graphicsCoreOwner.view.deconflictor.setDirty(),this.notifyChange("updating")}_updateDirtyGraphics(e){const t=this.graphicsCoreOwner.view.renderCoordsHelper,i=this.graphicsCore.effectiveUpdatePolicy===g.jq.ASYNC;for(const s of this.dirtyGraphicsSet.keys()){const r=this.graphicsCore.getGraphics3DGraphicById(s);if(this.dirtyGraphicsSet.delete(s),(0,o.pC)(r)&&(r.alignWithElevation(this.elevationProvider,t,i),e.madeProgress()),e.done)return}}_updateDirtyExtents(e){for(;!this.dirtyExtents.empty&&!e.done;){const t=this.dirtyExtents.pop(),i=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:t,spatialReference:i});const s=this.dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(t,i,(e=>{const t=this.graphicsCore.getGraphics3DGraphicById(e);(0,o.pC)(t)&&t.needsElevationUpdates()&&this.dirtyGraphicsSet.add(e)})),this.averageExtentUpdateSize=.1*(this.dirtyGraphicsSet.size-s)+.9*this.averageExtentUpdateSize,e.madeProgress()}}_markAllGraphicsElevationDirty(){this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach(((e,t)=>this.dirtyGraphicsSet.add(t)))}_elevationChanged(e){if("scene"===e.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const{extent:t,spatialReference:i}=e;if(this.graphicsCoreOwner.suspended){if(!this.updateElevation){const e=this.graphicsCore.computedExtent;e&&t[2]>e.xmin&&t[0]<e.xmax&&t[3]>e.ymin&&t[1]<e.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}};(0,s._)([(0,h.Cb)({readOnly:!0})],b.prototype,"updating",null),(0,s._)([(0,h.Cb)({readOnly:!0})],b.prototype,"updatingRemaining",null),b=(0,s._)([(0,d.j)("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],b);const f=b},87262:(e,t,i)=>{i.d(t,{Z:()=>Q});var s=i(36663),r=i(80085),n=i(27755),a=i(53280),o=i(61681),l=i(78668),h=i(76868),d=i(81977),u=(i(7753),i(39994),i(7283),i(40266)),c=i(27281),p=i(39536),y=i(67905),g=i(14136),b=i(43977),f=i(9423),_=i(83927),m=i(55765),C=i(53443),v=i(44584),S=i(13802),w=i(98722),E=i(15553),x=i(21586),I=i(12391),O=i(42824),V=i(22167);const R=S.Z.getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility");let G=class extends C.Z{constructor(...e){super(...e),this._dirty=!1,this._querying=!1,this._handles=new v.Z}get updating(){return this._dirty||this._querying||(0,o.pC)(this._queryResult)}setup(e,t){this._layerView=e,this._core=t,this._objectIdField=e.layer.objectIdField,this._queryEngine=new O.q({layerView:this._layerView,priority:V.T8.FILTER_VISIBILITY});const i=this._layerView.view.resourceController.scheduler;this._handles.add(i.registerTask(V.T8.FILTER_VISIBILITY,this)),this._handles.add((0,h.on)((()=>t.owner?.loadedGraphics),"after-changes",(e=>this._graphicsChanged(e)),{onListenerAdd:()=>this.dirty=!0})),this.filterChanged()}destroy(){this._handles.destroy(),this._handles=null,this.clear(),this._layerView=null,this._core=null}clear(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities((e=>e.clearVisibilityFlag(I.P.FILTER))),this._queryResult=null,this._querying=!1),this.dirty=!1}_graphicsChanged(e){this._queryEngine&&0==(e.type&w.y.ADD)||(this.dirty=!0)}updateVisibility(e){this.active&&(e.hasVisibilityFlag(I.P.FILTER,I.E.GRAPHIC)||e.setVisibilityFlag(I.P.FILTER,!1,I.E.GRAPHIC),this.dirty=!0)}filterChanged(){const e=this._recomputeFilter();e!==this._featureFilter&&(this._featureFilter=e,this.dirty=!0);const t="layerFilter"in this._layerView?this._layerView.layerFilter:null;t!==this._sceneFilter&&(this._sceneFilter=t,this.dirty=!0)}get active(){return(this._featureFilter||this._sceneFilter)&&this._core.graphics3DGraphics.size>0}_recomputeFilter(){const e="filter"in this._layerView?this._layerView.filter:null,t="timeExtent"in this._layerView?this._layerView.timeExtent:null,i=(0,x.c)(this._layerView);if((0,o.Wi)(t)&&(0,o.Wi)(i))return e;const s=(0,o.pC)(e)?e.clone():new E.Z;if((0,o.pC)(t)&&(s.timeExtent=(0,o.pC)(s.timeExtent)?s.timeExtent.intersection(t):t),(0,o.pC)(i)){const e=null==s.where||""===s.where;s.where=e?i:`(${s.where}) AND (${i})`}return s}get running(){return this._dirty&&!this._querying||(0,o.pC)(this._queryResult)}runTask(e){if(!this.active)return void this.clear();!this._dirty||this._querying||e.done||(this._querying=!0,this.dirty=!1,this._queryEngine.executeQueryForIdSet(this._featureFilter,this._sceneFilter).then((e=>{this._queryResult=e,this._querying=!1})).catch((e=>{if(!(0,l.D_)(e)){R.warn("FeatureFilter query failed: "+e,{error:e});const t=new Set;this._core.graphics3DGraphics.forEach((e=>t.add(this._getFeatureId(e.graphic)))),this._queryResult=t,this._querying=!1}})),e.madeProgress());const t=this._queryResult;(0,o.pC)(t)&&!e.done&&(this._core.modifyGraphics3DGraphicVisibilities((i=>{if(e.done)return!1;const s=t.has(this._getFeatureId(i.graphic));return!!i.setVisibilityFlag(I.P.FILTER,s,I.E.GRAPHIC)&&(e.madeProgress(),!0)})),e.done||(this._queryResult=null))}_getFeatureId(e){return null==e.objectId?e.attributes[this._objectIdField]:e.objectId}set dirty(e){this._dirty=e}};(0,s._)([(0,d.Cb)({readOnly:!0})],G.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],G.prototype,"running",null),(0,s._)([(0,d.Cb)()],G.prototype,"_dirty",void 0),(0,s._)([(0,d.Cb)()],G.prototype,"_querying",void 0),(0,s._)([(0,d.Cb)()],G.prototype,"_queryResult",void 0),G=(0,s._)([(0,u.j)("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],G);var j=i(93760),F=i(82404),D=i(31153),P=i(14923),T=i(19405),q=i(70984);let A=class extends a.r{constructor(e){super(e),this.type="graphics-3d",this.elevationFeatureExpressionEnabled=!1,this.dataExtent=null,this.drapeSourceType=b.L.Features,this.preferredUpdatePolicy=q.jq.ASYNC,this.suspendResumeExtent=null}normalizeCtorArgs(e){const t=e.frustumVisibilityEnabled?new j.Z:null,i=e.scaleVisibilityEnabled?new D.Z:null,s=(e.filterVisibilityEnabled||e.timeExtentEnabled)&&"multipatch"!==e.owner.layer.geometryType?new G:null,r=e.elevationAlignmentEnabled?new m.Z:null,{owner:n,updateClippingExtent:a,dataExtent:o,elevationFeatureExpressionEnabled:l,preferredUpdatePolicy:h}=e;return{owner:n,updateClippingExtent:a,dataExtent:o,frustumVisibility:t,scaleVisibility:i,filterVisibility:s,elevationAlignment:r,elevationFeatureExpressionEnabled:l,preferredUpdatePolicy:h}}initialize(){const e=new _.w({owner:this,layer:this.layer,preferredUpdatePolicy:this.preferredUpdatePolicy,elevationFeatureExpressionEnabled:this.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:this.owner.hasZ,hasM:this.owner.hasM});this._set("graphicsCore",e),this.scaleVisibility&&this.updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.scaleVisibility.layerMinMaxScaleChangeHandler()));const t=this.filterVisibility;(0,o.pC)(t)&&(this.updatingHandles.add((()=>"filter"in this.owner&&this.owner.filter),(()=>t.filterChanged())),this.updatingHandles.add((()=>"timeExtent"in this.owner&&this.owner.timeExtent),(()=>t.filterChanged())),this.updatingHandles.add((()=>"layerFilter"in this.owner&&this.owner.layerFilter),(()=>t.filterChanged()))),this.elevationAlignment&&this.updatingHandles.add((()=>this.layer.elevationInfo),((e,t)=>{(0,c.Hg)(e,t)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})),this.updatingHandles.add((()=>this.layer.labelsVisible),(()=>this.graphicsCore.updateVisibilityInfo())),this.updatingHandles.add((()=>this.layer.labelingInfo),((e,t)=>{(0,c.Hg)(e,t)&&this.graphicsCore.updateLabelingInfo()})),this.updatingHandles.add((()=>this.preferredUpdatePolicy),(e=>this.graphicsCore.preferredUpdatePolicy=e))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("frustumVisibility",(0,o.SC)(this.frustumVisibility)),this._set("scaleVisibility",(0,o.SC)(this.scaleVisibility)),this._set("filterVisibility",(0,o.SC)(this.filterVisibility)),this._set("elevationAlignment",(0,o.SC)(this.elevationAlignment)),this._set("objectStates",(0,o.SC)(this.objectStates)),this._set("graphicsCore",(0,o.SC)(this.graphicsCore)),this._set("owner",null)}get layer(){return this.owner.layer}get suspendResumeExtentMode(){return"suspendResumeExtentMode"in this.owner?this.owner.suspendResumeExtentMode:"computed"}get scaleVisibilitySuspended(){return this.scaleVisibility?.suspended}get suspended(){return this.owner.suspended}get legendEnabled(){return(0,o.Wi)(this.frustumVisibility)||!this.frustumVisibility.suspended}get suspendInfo(){const e={};return this.scaleVisibility?.suspended&&(e.outsideScaleRange=!0),(0,o.pC)(this.frustumVisibility)&&this.frustumVisibility.suspended&&(e.outsideOfView=!0),e}get updating(){return!!(this.graphicsCore?.updating||(0,o.pC)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles?.updating)}get updatingRemaining(){return this.graphicsCore?.updatingRemaining??0}get featureStore(){return this.graphicsCore?.featureStore}get view(){return this.owner.view}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner?.fullOpacity}get filter(){return"filter"in this.owner?this.owner.filter:null}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}get featureSpatialReference(){return"featureSpatialReference"in this.owner?this.owner.featureSpatialReference:this.owner.view.spatialReference}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get symbolUpdateType(){return this.graphicsCore?.symbolUpdateType}get displayFeatureLimit(){const e=this.view.resourceController.memoryController.memoryFactor,t=this.graphicsCore?.displayFeatureLimit;if(1===e)return t;const i=Math.ceil(t.maximumNumberOfFeatures*e),s=Math.ceil(t.maximumTotalNumberOfFeatures*e),r=Math.ceil(t.minimumTotalNumberOfFeatures*e);return{...t,maximumNumberOfFeatures:i,maximumTotalNumberOfFeatures:s,minimumTotalNumberOfFeatures:r}}get usedMemory(){return this.graphicsCore?.usedMemory??0}get usedMemoryPerFeature(){return this.graphicsCore?.usedMemoryPerGraphic??0}get unprocessedMemoryEstimate(){return this.graphicsCore?.unprocessedMemoryEstimate??0}get performanceInfo(){return{core:this.graphicsCore.performanceInfo,elevationUpdating:this.elevationAlignment.updating,visibilityFrustum:(0,o.Wi)(this.frustumVisibility)||!this.frustumVisibility.suspended,visibilityScale:!this.scaleVisibility.suspended}}async setup(){(0,o.pC)(this.frustumVisibility)&&this.frustumVisibility.setup(this);const e=this.owner,t=this.owner.view.basemapTerrain,i=(e,t,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i);if(this.scaleVisibility&&this.scaleVisibility.setup(this,this.layer,i,this.graphicsCore,t),(0,o.pC)(this.filterVisibility)&&("filter"in e||"timeExtent"in e)&&this.filterVisibility.setup(e,this.graphicsCore),this.elevationAlignment){const t=e.view.elevationProvider;this.elevationAlignment.setup(this,i,this.graphicsCore,t)}this._set("objectStates",new F.d(this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",e.view.deconflictor.addGraphicsOwner(this.graphicsCore)),await(0,l.U3)(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates})),this.updatingHandles.add((()=>this.layer.renderer),(e=>this.updatingHandles.addPromise(this.graphicsCore.rendererChange(e)))),this.updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange())),this._setupSuspendResumeExtent(),this.updateClippingExtent&&(this.updatingHandles.add((()=>e.view.clippingArea),(()=>this._updateClippingExtent())),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&await(0,l.U3)(this.graphicsCore.updateLabelingInfo())}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(q.V_.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),i}highlight(e,t){if(e instanceof g.Z){const{set:i,handle:s}=this.objectStates.acquireSet(q.V_.Highlight,t);return this.owner.queryObjectIds(e).then((e=>this.objectStates.setObjectIds(i,e))),s}if("number"==typeof e||"string"==typeof e)return this.highlight([e],t);if(e instanceof r.Z)return this.highlight([e],t);if("toArray"in e&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof r.Z){const i=e;if(null==(0,T.g)(this.layer.fieldsIndex,i[0].attributes,t)){const e=i.map((e=>e.uid)),{set:t,handle:s}=this.objectStates.acquireSet(q.V_.Highlight,null);return this.objectStates.setUids(t,e),s}e=i.map((e=>(0,T.g)(this.layer.fieldsIndex,e.attributes,t)))}if("number"==typeof e[0]||"string"==typeof e[0]){const i=e,{set:s,handle:r}=this.objectStates.acquireSet(q.V_.Highlight,t);return this.objectStates.setObjectIds(s,i),r}}return U}whenGraphicBounds(e,t){return this.graphicsCore?.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.graphicsCore?.computeAttachmentOrigin(e,t)}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const s=(0,y.Kb)(e,{renderer:t,arcade:i});if((0,o.pC)(s)&&s.color){const e=s.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return s}getRenderingInfoAsync(e,t,i,s){return(0,y.xn)(e,{renderer:t,arcade:i,...s})}getSymbolLayerSize(e,t){return this.graphicsCore?.getSymbolLayerSize(e,t)}setObjectIdVisibility(e,t){this.graphicsCore?.setObjectIdVisibility(e,t)}_updateClippingExtent(){const e=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.owner.view.spatialReference)&&(this.updateClippingExtent(e)||this.graphicsCore.recreateAllGraphics())}_setupSuspendResumeExtent(){(this.frustumVisibility||this.scaleVisibility)&&this.handles.add((0,h.YP)((()=>this.suspendResumeExtentMode),(()=>{switch(this.handles.remove(N),this.suspendResumeExtentMode){case"computed":this.handles.add([(0,h.YP)((()=>this.graphicsCore.computedExtent),(e=>this._updateSuspendResumeExtent(e)),h.nn),(0,h.YP)((()=>this.graphicsCore.extentPadding),(()=>this._updateSuspendResumeExtent(this.graphicsCore.computedExtent)))],N);break;case"data":this.handles.add([(0,h.gx)((()=>this.dataExtent),(e=>this._updateSuspendResumeExtent(e)),h.nn),(0,h.YP)((()=>this.graphicsCore.extentPadding),(()=>this._updateSuspendResumeExtent((0,o.Wg)(this.dataExtent))))],N);break;default:(0,n.Bg)(this.suspendResumeExtentMode)}}),h.nn))}_updateSuspendResumeExtent(e){e?this._suspendResumeExtentChanged(this._extentToSuspendResumeRect(e,this.suspendResumeExtent)):this._suspendResumeExtentChanged(null)}_extentToSuspendResumeRect(e,t){const i=this.owner.view.spatialReference;if(!e.spatialReference.equals(i)){if(!(0,p.Q8)(e,i))return;e=(0,p.iV)(e,i)}return(0,P.Go)(e,t,f.ZF,this.graphicsCore.extentPadding)}_suspendResumeExtentChanged(e){(0,o.pC)(this.frustumVisibility)&&this.frustumVisibility.setExtent(e),this.scaleVisibility&&this.scaleVisibility.setExtent(e)}};(0,s._)([(0,d.Cb)()],A.prototype,"type",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"owner",void 0),(0,s._)([(0,d.Cb)()],A.prototype,"layer",null),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"updateClippingExtent",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"elevationFeatureExpressionEnabled",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"graphicsCore",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"scaleVisibility",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"filterVisibility",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"elevationAlignment",void 0),(0,s._)([(0,d.Cb)({constructOnly:!0})],A.prototype,"frustumVisibility",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],A.prototype,"deconfliction",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],A.prototype,"labeling",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],A.prototype,"objectStates",void 0),(0,s._)([(0,d.Cb)()],A.prototype,"suspendResumeExtentMode",null),(0,s._)([(0,d.Cb)()],A.prototype,"dataExtent",void 0),(0,s._)([(0,d.Cb)()],A.prototype,"scaleVisibilitySuspended",null),(0,s._)([(0,d.Cb)()],A.prototype,"suspended",null),(0,s._)([(0,d.Cb)()],A.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)()],A.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)()],A.prototype,"updating",null),(0,s._)([(0,d.Cb)()],A.prototype,"updatingRemaining",null),(0,s._)([(0,d.Cb)()],A.prototype,"featureStore",null),(0,s._)([(0,d.Cb)()],A.prototype,"view",null),(0,s._)([(0,d.Cb)()],A.prototype,"loadedGraphics",null),(0,s._)([(0,d.Cb)()],A.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],A.prototype,"filter",null),(0,s._)([(0,d.Cb)()],A.prototype,"slicePlaneEnabled",null),(0,s._)([(0,d.Cb)()],A.prototype,"drapeSourceType",void 0),(0,s._)([(0,d.Cb)()],A.prototype,"updatePolicy",null),(0,s._)([(0,d.Cb)()],A.prototype,"preferredUpdatePolicy",void 0),(0,s._)([(0,d.Cb)()],A.prototype,"displayFeatureLimit",null),A=(0,s._)([(0,u.j)("esri.views.3d.layers.graphics.Graphics3DFeatureProcessor")],A);const Q=A,N="suspendResumeExtentMode",U={remove(){},pause(){},resume(){}}},93760:(e,t,i)=>{i.d(t,{Z:()=>p});var s=i(36663),r=i(53443),n=i(44584),a=i(76868),o=i(81977),l=(i(7753),i(39994),i(7283),i(40266)),h=i(25726),d=i(79981),u=i(22167);let c=class extends r.Z{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new n.Z,this.graphicsCoreOwner=null,this.updating=!0}setup(e){this.graphicsCoreOwner=e,this.extentIntersection=new d.q({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,i=t.basemapTerrain,s=t.resourceController.scheduler;this.handles.add([t.on("resize",(()=>this._viewChange())),(0,a.YP)((()=>t.state.camera),(()=>this._viewChange()),a.Z_),s.registerTask(u.T8.FRUSTUM_VISIBILITY,this),i.on("elevation-bounds-change",(()=>this._elevationBoundsChange()))]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([(0,a.YP)((()=>[i.baseOpacity,i.wireframe,t.map?.ground?.navigationConstraint?.type]),(()=>this._updateIsVisibleBelowSurface()),a.nn)])}destroy(){this.graphicsCoreOwner=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}_viewChange(){this._setDirty()}_elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}_updateIsVisibleBelowSurface(){const e=this.graphicsCoreOwner.view,t=e.basemapTerrain,i="local"===e.viewingMode,s=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||s}_updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.graphicsCoreOwner.view;let t;if(this._isVisibleBelowSurface)t=-.3*(0,h.Iu)(e.spatialReference).radius;else{const{min:i,max:s}=e.basemapTerrain.elevationBounds;t=i-Math.max(1,(s-i)*(1.2-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}get running(){return this.updating}runTask(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this._updateExtentIntersection();const e=this.graphicsCoreOwner.view.frustum,t=(0,h.Iu)(this.graphicsCoreOwner.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};(0,s._)([(0,o.Cb)({readOnly:!0})],c.prototype,"suspended",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],c.prototype,"updating",void 0),c=(0,s._)([(0,l.j)("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],c);const p=c},82404:(e,t,i)=>{i.d(t,{d:()=>l});var s,r=i(23148),n=i(70984);!function(e){e[e.Object=0]="Object",e[e.RenderGeometry=1]="RenderGeometry",e[e.External=2]="External",e[e.COUNT=3]="COUNT"}(s||(s={}));class a{constructor(){this.items=[]}addObject(e,t){this.items.push({type:s.Object,objectStateId:t,object:e})}addRenderGeometry(e,t,i){this.items.push({type:s.RenderGeometry,objectStateId:t,renderGeometry:e,owner:i})}addExternal(e,t){this.items.push({type:s.External,objectStateId:t,remove:e})}remove(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];i.objectStateId===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeObject(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];i.type===s.Object&&i.object===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeRenderGeometry(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];i.type===s.RenderGeometry&&i.renderGeometry===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeAll(){this.items.forEach((e=>{this._removeObjectStateItem(e)})),this.items=[]}_removeObjectStateItem(e){switch(e.type){case s.Object:e.objectStateId.channel===n.V_.Highlight?e.object.removeHighlight(e.objectStateId):e.objectStateId.channel===n.V_.MaskOccludee&&e.object.removeOcclude(e.objectStateId);break;case s.RenderGeometry:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case s.External:e.remove(e.objectStateId)}}}class o{constructor(e,t){this.stateType=e,this.objectIdField=t,this.objectStateSet=new a,this.ids=new Set,this.paused=!1}hasGraphic(e){if(this.objectIdField){const t=e.graphic.attributes[this.objectIdField];return this.ids.has(t)}return this.ids.has(e.graphic.uid)}}class l{constructor(e){this._graphicsCore=e,this._stateSets=new Array}destroy(){this._stateSets&&this._stateSets.forEach((e=>e.objectStateSet.removeAll())),this._stateSets=null}acquireSet(e,t){const i=new o(e,t);this._stateSets.push(i);const s=(0,r.kB)((()=>this.releaseSet(i)));return{set:i,handle:s}}releaseSet(e){e.objectStateSet.removeAll();const t=this._stateSets?this._stateSets.indexOf(e):-1;-1!==t&&this._stateSets.splice(t,1)}_addObjectStateSet(e,t){e.addObjectStateSet(t.stateType,t.objectStateSet)}_removeObjectStateSet(e,t){e.removeObjectState(t.objectStateSet)}setUid(e,t){e.ids.add(t);const i=this._graphicsCore.graphics3DGraphics.get(t);i&&this._addObjectStateSet(i,e)}setUids(e,t){t.forEach((t=>this.setUid(e,t)))}setObjectIds(e,t){t.forEach((t=>e.ids.add(t))),this._initializeSet(e)}addGraphic(e){this._stateSets.forEach((t=>{!t.paused&&t.hasGraphic(e)&&this._addObjectStateSet(e,t)}))}removeGraphic(e){this._stateSets.forEach((t=>{t.hasGraphic(e)&&this._removeObjectStateSet(e,t)}))}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach((e=>e.objectStateSet.removeAll()))}_initializeSet(e){const t=this._graphicsCore.graphics3DGraphics;e.objectIdField?t.forEach((t=>{t&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)})):e.ids.forEach((i=>{const s=t.get(i);s&&this._addObjectStateSet(s,e)}))}get test(){return{states:this._stateSets}}}},42824:(e,t,i)=>{i.d(t,{q:()=>y});var s=i(36663),r=(i(91957),i(53443)),n=i(61681),a=i(81977),o=(i(7753),i(39994),i(7283),i(40266)),l=i(91772),h=i(14215),d=i(51211),u=i(14136),c=i(59659);const p=h.q;let y=class extends r.Z{constructor(e){super(e),this._dataQueryEngineInstance=null}get queryGeometryType(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}get defaultQueryJSON(){return new u.Z({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this._ensureDataQueryEngine()}destroy(){this.clear()}clear(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}async executeQueryForIdSet(e,t){return this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e,t))}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:i,extent:s}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:i,extent:l.Z.fromJSON(s)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQueryForLatestObservations(e,t){const i=await this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),t),s=d.default.fromJSON(i);return s.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),s}async executeQuery(e,t){const i=await this.dataQueryEngine.executeQuery(this._ensureQueryJSON(e),t),s=d.default.fromJSON(i);return s.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),s}_ensureQueryJSON(e,t){let i=this.defaultQueryJSON;return(0,n.pC)(e)&&("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),i=e.toJSON()),(0,n.pC)(t)&&(i={...i,sceneFilter:{...t,geometry:t.geometry.toJSON()}}),i}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,t=this.layer.objectIdField,i=c.Mk.toJSON(this.queryGeometryType),s=this.layer.fields.map((e=>e.toJSON())),r=this.layerView.view.resourceController.scheduler,n=this.priority,a=this.spatialReference.toJSON(),o=this.layerView.processor.featureStore,{hasZ:l,hasM:h}=this.layerView;return this._dataQueryEngineInstance=new p({hasZ:l,hasM:h,geometryType:i,fields:s,timeInfo:e,spatialReference:a,objectIdField:t,featureStore:o,scheduler:r,priority:n}),this._dataQueryEngineInstance}};(0,s._)([(0,a.Cb)({constructOnly:!0})],y.prototype,"layerView",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],y.prototype,"priority",void 0),(0,s._)([(0,a.Cb)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],y.prototype,"spatialReference",void 0),(0,s._)([(0,a.Cb)({readOnly:!0,aliasOf:"layerView.layer"})],y.prototype,"layer",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],y.prototype,"queryGeometryType",null),(0,s._)([(0,a.Cb)({readOnly:!0})],y.prototype,"defaultQueryJSON",null),y=(0,s._)([(0,o.j)("esri.views.3d.layers.graphics.QueryEngine")],y)},19405:(e,t,i)=>{function s(e,t,i){if(!i||null==t)return null;if(!e)return function(e,t){const i=t.toLowerCase();for(const t in e)if(t.toLowerCase()===i)return e[t];return null}(t,i);const s=e.get(i);return s?t[s.name]:null}i.d(t,{g:()=>s})},26216:(e,t,i)=>{i.d(t,{Z:()=>y});var s=i(36663),r=i(53443),n=i(31355),a=i(53280),o=i(86618),l=i(13802),h=i(61681),d=i(64189),u=i(81977),c=(i(7753),i(39994),i(7283),i(40266));let p=class extends((0,a.p)((0,o.IG)((0,d.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],p.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],p.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],p.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],p.prototype,"visible",null),(0,s._)([(0,u.Cb)()],p.prototype,"view",void 0),p=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],p);const y=p}}]);