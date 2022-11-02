"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[8015,6361],{8015:(e,a,t)=>{t.r(a),t.d(a,{save:()=>E,saveAll:()=>J,saveAs:()=>M});var r=t(7753),n=t(70375),l=t(13802),s=t(61681),i=t(78668),o=t(50516),u=t(45955),y=t(66361),c=t(20692),d=t(54957),f=t(26869),p=t(53110),m=t(84513),w=t(31370);const h=l.Z.getLogger("esri.layers.FeatureLayer"),b="Feature Service";function S(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function I(e,a){if(a.type!==b)throw new n.Z("feature-layer:portal-item-wrong-type",S(e,`should have portal item of type "${b}"`))}async function v(e){if(await e.load(),(0,d.rQ)(e))throw new n.Z("feature-layer:save",S(e,"using an in-memory source cannot be saved to a portal item"))}async function L(e,a,t){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},a);return function(e,a){let t=e.messages.filter((({type:e})=>"error"===e)).map((({name:e,message:a,details:t})=>new n.Z(e,a,t)));if(a?.ignoreUnsupported&&(t=t.filter((({name:e})=>"layer:unsupported"!==e&&"symbol:unsupported"!==e&&"symbol-layer:unsupported"!==e&&"property:unsupported"!==e&&"url:unsupported"!==e))),t.length>0)throw new n.Z("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}(a,t),r}function P(e){const{layer:a,layerJSON:t}=e;return a.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function g(e){(0,w.qj)(e,w.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function T(e,a){return/\/\d+\/?$/.test(e.url)?P(a[0]):async function(e,a){const{layer:{url:t,customParameters:r,apiKey:n}}=a[0];let l=await e.fetchData("json");l&&null!=l.layers&&null!=l.tables||(l=await async function(e,a,t){var r,n;e||(e={}),(r=e).layers||(r.layers=[]),(n=e).tables||(n.tables=[]);const{url:l,customParameters:o,apiKey:c}=a,{serviceJSON:d,layersJSON:f}=await(0,y.fetchFeatureService)(l,{customParameters:o,apiKey:c}),p=O(e.layers,d.layers,t),m=O(e.tables,d.tables,t);e.layers=p.itemResources,e.tables=m.itemResources;const w=[...p.added,...m.added],h=f?[...f.layers,...f.tables]:[];return await async function(e,a,t,r){const n=a.map((({id:e})=>new u.default({url:t,layerId:e,sourceJSON:r.find((({id:a})=>a===e))})));await(0,i.as)(n.map((e=>e.load()))),n.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;r&&!(0,s.Wi)(n)&&N(a,{id:t,popupInfo:n.toJSON()},e)}))}(e,w,l,h),e}(l,{url:t,customParameters:r,apiKey:n},a.map((e=>e.layer.layerId))));for(const e of a)N(e.layer,e.layerJSON,l);return l}(e,a)}function O(e,a,t){const n=(0,r.e5)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const l=n.added.map((({id:e})=>({id:e})));return l.forEach((({id:a})=>{e.push({id:a})})),{itemResources:e,added:l.filter((({id:e})=>!t.includes(e)))}}function N(e,a,t){e.isTable?A(t.tables,a):A(t.layers,a)}function A(e,a){const t=e.findIndex((({id:e})=>e===a.id));-1===t?e.push(a):e[t]=a}function C(e){const{portalItem:a}=e;return(0,d.y2)(e)&&!e.dynamicDataSource&&!!a?.loaded&&a.type===b}const E=(0,i.Ds)((async function(e,a){await v(e),function(e){const a=e.portalItem;if(!a)throw h.error("save: requires the portalItem property to be set"),new n.Z("feature-layer:portal-item-not-set",S(e,"requires the portalItem property to be set"));if(!a.loaded)throw new n.Z("feature-layer:portal-item-not-loaded",S(e,"cannot be saved to a portal item that does not exist or is inaccessible"));I(e,a)}(e);const t=e.portalItem,r=(0,m.Y)(t),l=await L(e,r,a),s=await T(t,[{layer:e,layerJSON:l}]);return g(t),await t.update({data:s}),(0,o.D)(r),t})),J=(0,i.Ds)((async(e,a)=>{await async function(e){if(!e?.length)throw new n.Z("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(e.map((e=>e.load())));for(const a of e)if(!C(a))throw new n.Z("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${S(a,"does not conform")}`,{layer:a});const a=e.map((e=>e.portalItem.id));if(new Set(a).size>1)throw new n.Z("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=e.map((e=>e.layerId));if(new Set(t).size!==t.length)throw new n.Z("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}(e);const t=e[0].portalItem,r=(0,m.Y)(t),l=await Promise.all(e.map((e=>L(e,r,a)))),s=await T(t,e.map(((e,a)=>({layer:e,layerJSON:l[a]}))));return g(t),await t.update({data:s}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),(0,o.D)(r),t.clone()})),M=(0,i.Ds)((async function(e,a,t){await v(e);const r=function(e,a){var t,r;let n=p.default.from(a);return n.id&&(n=n.clone(),n.id=null),(t=n).type??(t.type=b),(r=n).portal??(r.portal=f.Z.getDefault()),I(e,n),n}(e,a),n=(0,m.Y)(r),l=P({layer:e,layerJSON:await L(e,n,t)});return await async function(e,a){const{url:t,layerId:r,title:n,fullExtent:l,isTable:i}=e,o=(0,c.Qc)(t),u=(0,s.pC)(o)&&"FeatureServer"===o.serverType;a.url=u?t:`${t}/${r}`,a.title||(a.title=n),a.extent=null,!i&&(0,s.pC)(l)&&(a.extent=await(0,w.$o)(l)),(0,w.ck)(a,w.Kz.METADATA),(0,w.ck)(a,w.Kz.MULTI_LAYER),(0,w.qj)(a,w.Kz.SINGLE_LAYER),i&&(0,w.qj)(a,w.Kz.TABLE),g(a)}(e,r),await async function(e,a,t){const r=e.portal;await r._signIn(),await r.user.addItem({item:e,data:a,folder:t?.folder})}(r,l,t),e.portalItem=r,(0,o.D)(n),r}))},66361:(e,a,t)=>{t.r(a),t.d(a,{fetchFeatureService:()=>p,fromUrl:()=>u});var r=t(66341),n=t(70375),l=t(61681),s=t(3466),i=t(20692),o=t(92557);async function u(e){const a=e.properties?.customParameters,r=await async function(e,a){let t=(0,i.Qc)(e);if((0,l.Wi)(t)&&(t=await c(e,a)),(0,l.Wi)(t))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:r,sublayer:s}=t;let u;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(r){case"MapServer":u=null!=s?"FeatureLayer":async function(e,a){return(await m(e,{customParameters:a})).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=m(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=m(t.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},t=e.layers[0]?.layerType;if(null!=a[t])return a[t]}}return"SceneLayer"}));break;default:u=y[r]}const d="FeatureServer"===r,f={parsedUrl:t,Constructor:null,layerOrTableId:d?s:null,sublayerIds:null,tableIds:null},w=await u;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==s){const t=await async function(e,a,t){let r,n=!1;if("FeatureServer"===a){const a=await p(e,{customParameters:t});n=!!a.layersJSON,r=a.layersJSON||a.serviceJSON}else r=await m(e,{customParameters:t});const l=r?.layers,s=r?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,r,a);d&&(f.sublayerInfos=t.layerInfos,f.tableInfos=t.tableInfos),1!==t.layerIds.length+t.tableIds.length?(f.sublayerIds=t.layerIds,f.tableIds=t.tableIds):d&&(f.layerOrTableId=t.layerIds[0]??t.tableIds[0],f.sourceJSON=t.layerInfos[0]??t.tableInfos[0])}return f.Constructor=await async function(e){return(0,o.T[e])()}(w),f}(e.url,a),s={...e.properties,url:e.url};if(!r.sublayerIds)return null!=r.layerOrTableId&&(s.layerId=r.layerOrTableId,s.sourceJSON=r.sourceJSON),new r.Constructor(s);const u=new(0,(await t.e(6753).then(t.bind(t,56753))).default)({title:r.parsedUrl.title});return function(e,a,t){function r(e,r){const n={...t,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(r)&&(n.sourceJSON=r),new a.Constructor(n)}a.sublayerIds.forEach((t=>{const n=r(t,y(a.sublayerInfos,t));e.add(n)})),a.tableIds.forEach((t=>{const n=r(t,y(a.tableInfos,t));e.tables.add(n)}))}(u,r,s),u}function y(e,a){return e?e.find((e=>e.id===a)):null}async function c(e,a){const t=await m(e,{customParameters:a});let r=null,n=null;const o=t.type;if("Feature Layer"===o||"Table"===o?(r="FeatureServer",n=t.id):"indexedVector"===o?r="VectorTileServer":t.hasOwnProperty("mapName")?r="MapServer":t.hasOwnProperty("bandCount")&&t.hasOwnProperty("pixelSizeX")?r="ImageServer":t.hasOwnProperty("maxRecordCount")&&t.hasOwnProperty("allowGeometryUpdates")?r="FeatureServer":t.hasOwnProperty("streamUrls")?r="StreamServer":d(t)?(r="SceneServer",n=t.id):t.hasOwnProperty("layers")&&d(t.layers?.[0])&&(r="SceneServer"),!r)return null;const u=null!=n?(0,i.DR)(e):null;return{title:(0,l.pC)(u)&&t.name||(0,s.vt)(e),serverType:r,sublayer:n,url:{path:(0,l.pC)(u)?u.serviceUrl:(0,s.mN)(e).path}}}function d(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function f(e){return!e.type||"Feature Layer"===e.type}async function p(e,a){let t=await m(e,a);t=t||{},t.layers=t.layers?.filter(f)||[];const r={serviceJSON:t};if(t.currentVersion<10.5)return r;const n=await m(e+"/layers",a);return r.layersJSON={layers:n?.layers?.filter(f)||[],tables:n?.tables||[]},r}async function m(e,a){return(await(0,r.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}},92557:(e,a,t)=>{t.d(a,{T:()=>r});const r={BingMapsLayer:async()=>(await t.e(1968).then(t.bind(t,31968))).default,BuildingSceneLayer:async()=>(await t.e(3833).then(t.bind(t,23833))).default,CSVLayer:async()=>(await t.e(9849).then(t.bind(t,89849))).default,ElevationLayer:async()=>(await t.e(8558).then(t.bind(t,98558))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,45955))).default,GroupLayer:async()=>(await t.e(6753).then(t.bind(t,56753))).default,GeoRSSLayer:async()=>(await t.e(4417).then(t.bind(t,84417))).default,GeoJSONLayer:async()=>(await t.e(1655).then(t.bind(t,81655))).default,ImageryLayer:async()=>(await Promise.all([t.e(1329),t.e(7359),t.e(8927),t.e(1825)]).then(t.bind(t,1825))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(1329),t.e(7359),t.e(8927),t.e(7107),t.e(7974)]).then(t.bind(t,47974))).default,IntegratedMeshLayer:async()=>(await t.e(6172).then(t.bind(t,6172))).default,KMLLayer:async()=>(await t.e(711).then(t.bind(t,60711))).default,LineOfSightLayer:async()=>(await t.e(9892).then(t.bind(t,69892))).default,MapImageLayer:async()=>(await Promise.all([t.e(7153),t.e(9420)]).then(t.bind(t,69420))).default,MapNotesLayer:async()=>(await t.e(849).then(t.bind(t,50849))).default,OGCFeatureLayer:async()=>(await t.e(3963).then(t.bind(t,53963))).default,OpenStreetMapLayer:async()=>(await t.e(3206).then(t.bind(t,81388))).default,PointCloudLayer:async()=>(await t.e(3108).then(t.bind(t,73108))).default,RouteLayer:async()=>(await Promise.all([t.e(3970),t.e(6033)]).then(t.bind(t,56033))).default,SceneLayer:async()=>(await Promise.resolve().then(t.bind(t,74606))).default,StreamLayer:async()=>(await t.e(5609).then(t.bind(t,75609))).default,TileLayer:async()=>(await Promise.all([t.e(7153),t.e(5369)]).then(t.bind(t,75369))).default,UnknownLayer:async()=>(await t.e(81).then(t.bind(t,40081))).default,UnsupportedLayer:async()=>(await t.e(4864).then(t.bind(t,74864))).default,VectorTileLayer:async()=>(await Promise.all([t.e(3043),t.e(5202)]).then(t.bind(t,19410))).default,VoxelLayer:async()=>(await t.e(4164).then(t.bind(t,94164))).default,WebTileLayer:async()=>(await t.e(9859).then(t.bind(t,89859))).default,WFSLayer:async()=>(await t.e(4420).then(t.bind(t,84420))).default,WMSLayer:async()=>(await t.e(1936).then(t.bind(t,61936))).default,WMTSLayer:async()=>(await t.e(9306).then(t.bind(t,9306))).default}},84513:(e,a,t)=>{t.d(a,{Y:()=>s,h:()=>l});var r=t(3466),n=t(26869);function l(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},31370:(e,a,t)=>{t.d(a,{$o:()=>u,Kz:()=>y,_$:()=>i,ck:()=>o,qj:()=>s});var r=t(90472),n=t(14685),l=t(39536);function s(e,a){if(!i(e,a)){const t=e.typeKeywords;t?t.push(a):e.typeKeywords=[a]}}function i(e,a){return!!e.typeKeywords?.includes(a)}function o(e,a){const t=e.typeKeywords;if(t){const e=t.indexOf(a);e>-1&&t.splice(e,1)}}async function u(e){const a=e.clone().normalize();let t;if(a.length>1)for(const e of a)t?e.width>t.width&&(t=e):t=e;else t=a[0];return async function(e){const a=e.spatialReference;if(a.isWGS84)return e.clone();if(a.isWebMercator)return(0,l.Sx)(e);const t=n.Z.WGS84;return await(0,r.iQ)(a,t),(0,r.iV)(e,t)}(t)}const y={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}}}]);