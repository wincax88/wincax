(this.webpackJsonpexpDate=this.webpackJsonpexpDate||[]).push([[0],{141:function(e,t,a){},212:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},217:function(e,t,a){e.exports=a(426)},232:function(e,t,a){},233:function(e,t,a){},236:function(e,t,a){},307:function(e,t){},309:function(e,t){},320:function(e,t){},322:function(e,t){},349:function(e,t){},351:function(e,t){},352:function(e,t){},358:function(e,t){},360:function(e,t){},378:function(e,t){},380:function(e,t){},392:function(e,t){},395:function(e,t){},421:function(e,t,a){},422:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);a(218);var n=a(44),r=a(0),o=a.n(r),i=a(19),c=a.n(i),s=a(13),u=a(214),l=a.n(u),p=(a(228),a(206)),m=a(5),h=a(207),d=a(126),g=a(208),f=a.n(g),b=a(6),O={userId:"",userName:"",isMaster:!1,appRole:"",isLogon:!1,imageUrl:"",isShowStartPage:!0,isShowCamera:!1,isShowCropImage:!1,isShowRecognizeResult:!1,croppedImageUrl:"",blocks:[]},v=function(e){return{type:"app/SET_IMAGE_URL",payload:e}},w=function(){return{type:"app/SHOW_CROP_IMAGE"}},C=function(){return{type:"app/SHOW_RECOGNIZE_RESULT"}},E=function(){return{type:"app/SHOW_CAMERA"}},S=function(e){return{type:"app/SET_CROPPED_IMAGE_URL",payload:e}},j=function(e){return{type:"app/SET_BLOCKS",payload:e}},y=Object(m.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.payload;switch(t.type){case"app/SET_BLOCKS":return Object(b.a)(Object(b.a)({},e),{},{blocks:a});case"app/SET_CROPPED_IMAGE_URL":return Object(b.a)(Object(b.a)({},e),{},{croppedImageUrl:a});case"app/SHOW_CAMERA":return Object(b.a)(Object(b.a)({},e),{},{isShowCamera:!0,isShowStartPage:!1,isShowCropImage:!1,isShowRecognizeResult:!1});case"app/HIDE_CAMERA":return Object(b.a)(Object(b.a)({},e),{},{isShowCamera:!1});case"app/SHOW_RECOGNIZE_RESULT":return Object(b.a)(Object(b.a)({},e),{},{isShowRecognizeResult:!0,isShowCropImage:!1,isShowCamera:!1,isShowStartPage:!1});case"app/HIDE_RECOGNIZE_RESULT":return Object(b.a)(Object(b.a)({},e),{},{isShowRecognizeResult:!1});case"app/SHOW_CROP_IMAGE":return Object(b.a)(Object(b.a)({},e),{},{isShowCropImage:!0,isShowCamera:!1,isShowRecognizeResult:!1,isShowStartPage:!1});case"app/HIDE_CROP_IMAGE":return Object(b.a)(Object(b.a)({},e),{},{isShowCropImage:!1});case"app/SET_IMAGE_URL":return Object(b.a)(Object(b.a)({},e),{},{imageUrl:a});case"app/SET_APP_USER":var n=a.appRole,r=a.userId,o=a.userName;return Object(b.a)(Object(b.a)({},e),{},{isMaster:"teacher"===n,appRole:n,userId:r,userName:o,isLogon:!(!r||r.length<=0)});default:return e}}}),R={key:"exp-date-root",storage:f.a,whitelist:["courseware","tabs"]},I=Object(d.a)(R,(function(e,t){return y(e,t)})),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,k=Object(m.e)(I,_(Object(m.a)(h.a)));console.info("Store created:",k.getState());var U=Object(d.b)(k),N=a(20),P=a(21),z=a(14),M=a(25),L=a(24),T=a(83),D=a.n(T),x=(a(231),a(232),function(e){Object(M.a)(a,e);var t=Object(L.a)(a);function a(e){var n;Object(N.a)(this,a),n=t.call(this,e);var r=document.getElementById("root");return n.state={width:r.clientWidth,height:r.clientHeight},n.handleTakePhoto=n.handleTakePhoto.bind(Object(z.a)(n)),n.handleResize=n.handleResize.bind(Object(z.a)(n)),n}return Object(P.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){var e=document.getElementById("camera-container");e&&this.setState({width:e.clientWidth,height:e.clientHeight})}},{key:"handleTakePhoto",value:function(e){var t=this.props,a=t.setImageUrl,n=t.showCropImage;a(e),n()}},{key:"render",value:function(){var e=this;return this.props.isShowCamera?o.a.createElement("div",{className:"camera-container",id:"camera-container"},o.a.createElement(D.a,{isFullscreen:!0,isImageMirror:!1,idealFacingMode:T.FACING_MODES.ENVIRONMENT,imageType:T.IMAGE_TYPES.JPG,isMaxResolution:!0,isDisplayStartCameraError:!0,sizeFactor:1,onTakePhoto:function(t){e.handleTakePhoto(t)},onCameraError:function(e){console.error(e)}})):null}}]),a}(r.Component));var A=Object(s.b)((function(e){return{isShowCamera:e.app.isShowCamera}}),(function(e){return Object(m.b)({setImageUrl:v,showCropImage:w},e)}))(x),G=(a(233),function(e){Object(M.a)(a,e);var t=Object(L.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(P.a)(a,[{key:"render",value:function(){return this.props.isShowCamera?o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"}),o.a.createElement("div",{className:"grid"})):null}}]),a}(r.Component));var H=Object(s.b)((function(e){return{isShowCamera:e.app.isShowCamera}}),(function(e){return Object(m.b)({},e)}))(G),W=(a(128),a(66)),B=a(209),F=a.n(B),J=(a(235),a(236),function(e){Object(M.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).onImageLoaded=function(e){n.imageRef=e},n.onCropChange=function(e){n.setState({crop:e})},n.onCropComplete=function(e){n.imageRef&&e.width&&e.height&&n.getCroppedImg(n.imageRef,e,"newFile.jpeg").then((function(e){n.setState({croppedImageUrl:e}),console.log("croppedImageUrl",e)}))},n.state={crop:{unit:"%",x:10,y:30,width:80,height:30},croppedImageUrl:null},n.imageRef=null,n.onCropChange=n.onCropChange.bind(Object(z.a)(n)),n.onCropComplete=n.onCropComplete.bind(Object(z.a)(n)),n.getCroppedImg=n.getCroppedImg.bind(Object(z.a)(n)),n.onCamera=n.onCamera.bind(Object(z.a)(n)),n.onRecognize=n.onRecognize.bind(Object(z.a)(n)),n.onImageLoaded=n.onImageLoaded.bind(Object(z.a)(n)),n}return Object(P.a)(a,[{key:"componentDidMount",value:function(){}},{key:"getCroppedImg",value:function(e,t,a){var n=this,r=document.createElement("canvas"),o=e.naturalWidth/e.width,i=e.naturalHeight/e.height;return r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(e,t.x*o,t.y*i,t.width*o,t.height*i,0,0,t.width,t.height),new Promise((function(e){r.toBlob((function(t){t.name=a,window.URL.revokeObjectURL(n.fileUrl),n.fileUrl=window.URL.createObjectURL(t),e(n.fileUrl)}),"image/jpeg")}))}},{key:"onCamera",value:function(){(0,this.props.showCamera)()}},{key:"onRecognize",value:function(){var e=this.props,t=e.setCroppedImageUrl,a=e.showRecognizeResult;t(this.state.croppedImageUrl),a()}},{key:"render",value:function(){var e=this,t=this.props,a=t.isShowCropImage,n=t.imageUrl;return a?o.a.createElement("div",{className:"crop-image-container"},o.a.createElement(F.a,{src:n,crop:this.state.crop,keepSelection:!0,minWidth:20,minHeight:20,crossorigin:"anonymous",onImageLoaded:this.onImageLoaded,onChange:function(t){return e.onCropChange(t)},onComplete:this.onCropComplete}),o.a.createElement("div",{className:"button-wrap"},o.a.createElement(W.a,{shape:"circle",icon:"camera",className:"camera-button",onClick:this.onCamera}),o.a.createElement(W.a,{type:"primary",shape:"circle",icon:"check",className:"process-button",onClick:this.onRecognize}))):null}}]),a}(r.Component));var X=Object(s.b)((function(e){return{isShowCropImage:e.app.isShowCropImage,imageUrl:e.app.imageUrl}}),(function(e){return Object(m.b)({showCamera:E,setCroppedImageUrl:S,showRecognizeResult:C},e)}))(J),q=(a(282),a(215)),Z=(a(141),function(e){Object(M.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={},n}return Object(P.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.top,a=e.left,n=e.height,r=e.width,i=e.score,c=parseInt(255*i),s={top:t+10+"px",left:a+10+"px",height:n+"px",width:r+"px",background:"rgba(".concat(c,", 0, 0, 0.33)")};return o.a.createElement("div",{className:"text-rect-container",style:s})}}]),a}(r.Component));var K,V=Object(s.b)((function(e){return{}}),(function(e){return Object(m.b)({},e)}))(Z),Y=a(31),Q=a.n(Y),$=a(121),ee=a.n($),te=a(34),ae=a.n(te),ne=a(212),re=function(e,t){ae.a.q.push(["add_event",{key:e,segmentation:{value:ee.a.stringify(t)}}])},oe=a(121);function ie(e,t,a){return new Promise((function(n,r){Q.a.post(e,oe.stringify(t),a).then((function(t){var a=t.data;return 200===a.status||"200"===a.status||200===a.state||"200"===a.state||1===a.status||"1"===a.status||1===a.success||200===a.code||200===t.status?n(a):(console.error("post : ",e,t),r(a.msg||a.message||"\u672a\u77e5\u9519\u8bef"))}),(function(t){if(console.error("post : ",e,t),t)return r(t.msg||t.message||"\u672a\u77e5\u9519\u8bef")}))}))}ae.a.app_key=K,ae.a.url="https://asia-try.count.ly",ae.a.app_version=ne.a,ae.a.debug=!1,ae.a.init(),ae.a.q.push(["track_sessions"]),ae.a.q.push(["track_errors"]),Q.a.defaults.timeout=3e3,Q.a.defaults.headers.common.retry=3,Q.a.defaults.headers.common.retryDelay=1e3,Q.a.interceptors.request.use((function(e){return e}),(function(e){return re("http_error",e.message),Promise.reject(e)})),Q.a.interceptors.response.use((function(e){return e&&e.data&&(0===e.data.status||-1===e.data.state)&&e.data.msg&&e.data.msg.includes("\u672a\u767b")?(alert("\u8fd8\u672a\u767b\u5f55!"),window.location.href="/user",Promise.reject("\u8fd8\u672a\u767b\u5f55!")):e}),(function(e){var t=e.config,a=t.headers;return t&&a.retry?(a.__retryCount=a.__retryCount||0,a.__retryCount>=a.retry?(e.message.includes("timeout")||e.message.includes("Network Error"),re("http_error",e.message),Promise.reject(e)):(a.__retryCount+=1,new Promise((function(e){setTimeout(e,a.retryDelay||1)})).then((function(){return Q()(t)})))):Promise.reject(e)}));window.location.href.indexOf("localhost"),Q.a;var ce=a(302),se="https://webapi.xfyun.cn/v1/service/v1/ocr/recognize_document",ue="5f0c296c",le="31cb1e5568b3a0fc644b775322f574bb",pe=parseInt((new Date).getTime()/1e3);function me(){var e=ce.enc.Base64.stringify(ce.enc.Utf8.parse(JSON.stringify({engine_type:"recognize_document"}))),t=ce.MD5(le+pe+e).toString();return{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8","X-Appid":ue,"X-CurTime":pe+"","X-Param":e,"X-CheckSum":t,"Access-Control-Allow-Origin":"*"}}var he=function(e){Object(M.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={},n}return Object(P.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){this.props.isShowRecognizeResult&&!e.isShowRecognizeResult&&this.doRecognize()}},{key:"doRecognize",value:function(){var e=this.props,t=e.croppedImageUrl,a=e.setBlocks;fetch(t).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){(function(e){var t={headers:me()};return ie(se,{image:e},t)})(t.result.replace("data:image/jpeg;base64,","")).then((function(e){e.data&&e.data.document&&e.data.document.blocks?(console.log(e.data.document.blocks),a(e.data.document.blocks)):a([])})).catch((function(e){console.error(e),q.a.warn(JSON.stringify(e))}))}}))}},{key:"render",value:function(){var e=this.props,t=e.isShowRecognizeResult,a=e.croppedImageUrl,n=e.blocks,r=n.map((function(e,t){console.log(e.lines[0].characters);var a=e.lines[0].text;return o.a.createElement("div",{key:t},a)})),i=n.map((function(e,t){console.log(e.lines[0].position);var a=e.lines[0].score,n=e.lines[0].position.bounding_box;return o.a.createElement(V,{key:t,height:n.height,width:n.width,top:n.top,left:n.left,score:a})}));return t?o.a.createElement("div",{className:"recognize-container"},o.a.createElement("div",null,o.a.createElement("img",{src:a,alt:""}),o.a.createElement("div",{className:"text-rect-wrap"},i)),o.a.createElement("div",{className:"result-wrap"},r)):null}}]),a}(r.Component);var de=Object(s.b)((function(e){return{isShowRecognizeResult:e.app.isShowRecognizeResult,croppedImageUrl:e.app.croppedImageUrl,blocks:e.app.blocks}}),(function(e){return Object(m.b)({setBlocks:j},e)}))(he),ge=(a(421),function(e){Object(M.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={},n.onStart=n.onStart.bind(Object(z.a)(n)),n}return Object(P.a)(a,[{key:"componentDidMount",value:function(){}},{key:"onStart",value:function(){(0,this.props.showCamera)()}},{key:"render",value:function(){return this.props.isShowStartPage?o.a.createElement("div",{className:"start-pahge-container"},o.a.createElement(W.a,{type:"primary",shape:"circle",icon:"scan",className:"start-button",onClick:this.onStart})):null}}]),a}(r.Component));var fe=Object(s.b)((function(e){return{isShowStartPage:e.app.isShowStartPage}}),(function(e){return Object(m.b)({showCamera:E},e)}))(ge);a(422);var be=function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(fe,null),o.a.createElement(A,null),o.a.createElement(H,null),o.a.createElement(X,null),o.a.createElement(de,null))},Oe=o.a.createElement(n.a,{locale:l.a},o.a.createElement(s.a,{store:k},o.a.createElement(p.a,{loading:null,persistor:U},o.a.createElement(be,null))));c.a.render(Oe,document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.28f63ab8.chunk.js.map