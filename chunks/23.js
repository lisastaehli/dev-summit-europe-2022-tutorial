"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[23],{70023:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});var t=s(36663),i=s(53443),o=s(86618),p=s(61681),c=s(81977),a=(s(7753),s(39994),s(7283),s(40266)),n=s(95484);const h=e=>{let r=class extends((0,o.IG)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return(0,t._)([(0,c.Cb)()],r.prototype,"graphics",void 0),(0,t._)([(0,c.Cb)()],r.prototype,"renderer",void 0),(0,t._)([(0,c.Cb)()],r.prototype,"updating",void 0),(0,t._)([(0,c.Cb)()],r.prototype,"view",void 0),r=(0,t._)([(0,a.j)("esri.views.layers.GraphicsView")],r),r};let l=class extends(h(i.Z)){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new u}initialize(){this._set("processor",new n.D({owner:this})),this.processor.setup()}destroy(){this._set("processor",(0,p.SC)(this.processor))}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){return!!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,r){return this.processor.whenGraphicBounds(e,r)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(e,r){return(0,p.pC)(r)?r.clientGraphics:null}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}};(0,t._)([(0,c.Cb)({readOnly:!0})],l.prototype,"graphics",null),(0,t._)([(0,c.Cb)()],l.prototype,"loadedGraphics",null),(0,t._)([(0,c.Cb)({readOnly:!0})],l.prototype,"updating",null),(0,t._)([(0,c.Cb)({constructOnly:!0})],l.prototype,"view",void 0),(0,t._)([(0,c.Cb)()],l.prototype,"processor",void 0),(0,t._)([(0,c.Cb)({type:Boolean})],l.prototype,"slicePlaneEnabled",void 0),(0,t._)([(0,c.Cb)()],l.prototype,"layer",void 0),l=(0,t._)([(0,a.j)("esri.views.3d.layers.GraphicsView3D")],l);class u extends o.Ej{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const d=l}}]);