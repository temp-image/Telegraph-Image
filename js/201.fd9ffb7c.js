(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[201],{1393:function(e,t,s){s(6573),s(8100),s(7936),s(7467),s(4732),s(9577),s(4979),s(4603),s(7566),s(8721),function(t,s){e.exports=s()}(0,(function(){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var i;function o(e){return["image/png","image/jpeg","image/gif"].some((t=>t===e))}s.r(t),s.d(t,"canvastoDataURL",(function(){return n})),s.d(t,"canvastoFile",(function(){return a})),s.d(t,"dataURLtoFile",(function(){return u})),s.d(t,"dataURLtoImage",(function(){return c})),s.d(t,"downloadFile",(function(){return d})),s.d(t,"filetoDataURL",(function(){return p})),s.d(t,"imagetoCanvas",(function(){return m})),s.d(t,"urltoBlob",(function(){return f})),s.d(t,"urltoImage",(function(){return g})),s.d(t,"compress",(function(){return y})),s.d(t,"compressAccurately",(function(){return k})),s.d(t,"EImageType",(function(){return i})),function(e){e.PNG="image/png",e.JPEG="image/jpeg",e.GIF="image/gif"}(i||(i={}));var l=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function n(e){try{r(i.next(e))}catch(e){l(e)}}function a(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}r((i=i.apply(e,t||[])).next())}))};function n(e,t=.92,s=i.JPEG){return l(this,void 0,void 0,(function*(){return o(s)||(s=i.JPEG),e.toDataURL(s,t)}))}function a(e,t=.92,s=i.JPEG){return new Promise((i=>e.toBlob((e=>i(e)),s,t)))}var r=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function n(e){try{r(i.next(e))}catch(e){l(e)}}function a(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}r((i=i.apply(e,t||[])).next())}))};function u(e,t){return r(this,void 0,void 0,(function*(){const s=e.split(",");let i=s[0].match(/:(.*?);/)[1];const l=atob(s[1]);let n=l.length;const a=new Uint8Array(n);for(;n--;)a[n]=l.charCodeAt(n);return o(t)&&(i=t),new Blob([a],{type:i})}))}function c(e){return new Promise(((t,s)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>s(new Error("dataURLtoImage(): dataURL is illegal")),i.src=e}))}function d(e,t){const s=document.createElement("a");s.href=window.URL.createObjectURL(e),s.download=t||Date.now().toString(36),document.body.appendChild(s);const i=document.createEvent("MouseEvents");i.initEvent("click",!1,!1),s.dispatchEvent(i),document.body.removeChild(s)}function p(e){return new Promise((t=>{const s=new FileReader;s.onloadend=e=>t(e.target.result),s.readAsDataURL(e)}))}var h=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function n(e){try{r(i.next(e))}catch(e){l(e)}}function a(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}r((i=i.apply(e,t||[])).next())}))};function m(e,t={}){return h(this,void 0,void 0,(function*(){const s=Object.assign({},t),i=document.createElement("canvas"),o=i.getContext("2d");let l,n;for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&(s[e]=Number(s[e]));if(s.scale){const t=s.scale>0&&s.scale<10?s.scale:1;n=e.width*t,l=e.height*t}else n=s.width||s.height*e.width/e.height||e.width,l=s.height||s.width*e.height/e.width||e.height;switch([5,6,7,8].some((e=>e===s.orientation))?(i.height=n,i.width=l):(i.height=l,i.width=n),s.orientation){case 3:o.rotate(180*Math.PI/180),o.drawImage(e,-i.width,-i.height,i.width,i.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(e,0,-i.width,i.height,i.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(e,-i.height,0,i.height,i.width);break;case 2:o.translate(i.width,0),o.scale(-1,1),o.drawImage(e,0,0,i.width,i.height);break;case 4:o.translate(i.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(e,-i.width,-i.height,i.width,i.height);break;case 5:o.translate(i.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(e,0,-i.width,i.height,i.width);break;case 7:o.translate(i.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(e,-i.height,0,i.height,i.width);break;default:o.drawImage(e,0,0,i.width,i.height)}return i}))}function f(e){return fetch(e).then((e=>e.blob()))}function g(e){return new Promise(((t,s)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>s(new Error("urltoImage(): Image failed to load, please check the image URL")),i.src=e}))}var b=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function n(e){try{r(i.next(e))}catch(e){l(e)}}function a(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}r((i=i.apply(e,t||[])).next())}))};function y(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({quality:t})),t.quality=Number(t.quality),Number.isNaN(t.quality))return e;const s=yield p(e);let l=s.split(",")[0].match(/:(.*?);/)[1],a=i.JPEG;o(t.type)&&(a=t.type,l=t.type);const r=yield c(s),d=yield m(r,Object.assign({},t)),h=yield n(d,t.quality,a),f=yield u(h,l);return f.size>e.size?e:f}))}function k(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({size:t})),t.size=Number(t.size),Number.isNaN(t.size))return e;if(1024*t.size>e.size)return e;t.accuracy=Number(t.accuracy),(!t.accuracy||t.accuracy<.8||t.accuracy>.99)&&(t.accuracy=.95);const s=t.size*(2-t.accuracy)*1024,l=1024*t.size,a=t.size*t.accuracy*1024,r=yield p(e);let d=r.split(",")[0].match(/:(.*?);/)[1],h=i.JPEG;o(t.type)&&(h=t.type,d=t.type);const f=yield c(r),g=yield m(f,Object.assign({},t));let b,y=.5;const k=[null,null];for(let e=1;e<=7;e++){b=yield n(g,y,h);const t=.75*b.length;if(7===e){(s<t||a>t)&&(b=[b,...k].filter((e=>e)).sort(((e,t)=>Math.abs(.75*e.length-l)-Math.abs(.75*t.length-l)))[0]);break}if(s<t)k[1]=b,y-=Math.pow(.5,e+1);else{if(!(a>t))break;k[0]=b,y+=Math.pow(.5,e+1)}}const C=yield u(b,d);return C.size>e.size?e:C}))}}])}))},6334:function(e,t,s){e.exports=s(1393)},5201:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ae}});var i=s(2006),o=(s(5331),s(4757)),l=(s(9092),s(213),s(5558)),n=s(7377),a=(s(5616),s(6810)),r=s(6768);const u={class:"page-footer"},c=["href"];function d(e,t,s,i,o,l){const n=(0,r.g2)("font-awesome-icon");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("p",null,[t[0]||(t[0]=(0,r.eW)("© 2024 Designed by ")),t[1]||(t[1]=(0,r.Lk)("a",{class:"footer-name",href:"https://github.com/MarSeventh",target:"_blank"},"SanyueQi",-1)),t[2]||(t[2]=(0,r.eW)(" for You! ")),(0,r.Lk)("a",{href:l.footerLink,target:"_blank"},[(0,r.bF)(n,{icon:"paper-plane",class:"footer-link-icon"})],8,c)])])}var p=s(782),h={name:"Footer",computed:{...(0,p.L8)(["userConfig"]),footerLink(){return this.userConfig?.footerLink||"https://sanyue.site"}}},m=s(1241);const f=(0,m.A)(h,[["render",d],["__scopeId","data-v-99ec39bc"]]);var g=f,b=s(683),y=(s(5385),s(2657)),k=(s(5970),s(9655)),C=s(2105),w=s(47),U=(s(8050),s(9017)),L=(s(6055),s(8830),s(3597),s(1450)),v=(s(9648),s(4253)),F=s(7358),M=s(813),I=s(4232);const R={class:"upload-form"},x={class:"upload-list-dashboard-action"},_=["href"],j={key:0,style:{width:"10vw","border-radius":"12px"},autoplay:"",muted:"",playsinline:"",loop:""},T=["src"],A=["src","onError"],E={class:"upload-list-item-content"},W={key:0,class:"upload-list-item-url"},B={class:"upload-list-item-url-row"},S={class:"upload-list-item-url-row"},z={key:1,class:"upload-list-item-progress"},P={class:"upload-list-item-action"};function V(e,t,i,o,l,n){const a=(0,r.g2)("CameraFilled"),u=M.tk,c=F.j5,d=(0,r.g2)("List"),p=(0,r.g2)("Checked"),h=(0,r.g2)("Failed"),m=v.$g,f=(0,r.g2)("font-awesome-icon"),g=w.S2,V=L.R7,N=U.c6,$=U.Iy,J=U.dW,Q=w.fg,D=C.WK,O=k.ve,G=(0,r.g2)("Link"),Z=(0,r.g2)("Delete"),X=y.kA,Y=b.Ik;return(0,r.uX)(),(0,r.CE)("div",R,[(0,r.bF)(c,{class:(0,I.C4)(["upload-card",{"is-uploading":l.uploading,"upload-card-busy":l.fileList.length}]),drag:"",multiple:"","http-request":n.uploadFile,onSuccess:n.handleSuccess,"on-error":n.handleError,"before-upload":n.beforeUpload,"on-progress":n.handleProgress,"file-list":l.fileList,"show-file-list":!1,accept:"image/*, video/*"},{tip:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.Lk)("div",{class:"el-upload__tip"},"支持多文件上传，支持图片和视频，不超过20MB",-1)]))),default:(0,r.k6)((()=>[(0,r.bF)(u,{class:"el-icon--upload",size:100},{default:(0,r.k6)((()=>[(0,r.bF)(a,{color:"blanchedalmond"})])),_:1}),t[1]||(t[1]=(0,r.Lk)("div",{class:"el-upload__text"},[(0,r.Lk)("em",null,"拖拽"),(0,r.eW)(),(0,r.Lk)("em",null,"点击"),(0,r.eW)(" 或 "),(0,r.Lk)("em",null,"Ctrl + V"),(0,r.eW)(" 粘贴上传")],-1))])),_:1},8,["class","http-request","onSuccess","on-error","before-upload","on-progress","file-list"]),(0,r.bF)(Y,{class:(0,I.C4)(["upload-list-card",{"upload-list-busy":l.fileList.length}])},{default:(0,r.k6)((()=>[(0,r.Lk)("div",{class:(0,I.C4)(["upload-list-container",{"upload-list-busy":l.fileList.length}])},[(0,r.bF)(X,{onScroll:n.handleScroll,ref:"scrollContainer"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",{class:(0,I.C4)(["upload-list-dashboard",{"list-scrolled":l.listScrolled}])},[(0,r.bF)(m,{class:"upload-list-dashboard-title"},{default:(0,r.k6)((()=>[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(d)])),_:1}),(0,r.eW)((0,I.v_)(n.uploadingCount+n.waitingCount)+" ",1),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(p)])),_:1}),(0,r.eW)((0,I.v_)(n.uploadSuccessCount)+" ",1),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(h)])),_:1}),(0,r.eW)((0,I.v_)(n.uploadErrorCount),1)])),_:1}),(0,r.Lk)("div",x,[(0,r.bF)(Q,null,{default:(0,r.k6)((()=>[(0,r.bF)(V,{disabled:n.disableTooltip,content:"整体复制",placement:"top"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{type:"primary",round:"",onClick:n.copyAll,alt:"整体复制"},{default:(0,r.k6)((()=>[(0,r.bF)(f,{icon:"copy"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,r.bF)(V,{disabled:n.disableTooltip,content:"失败重试",placement:"top"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{type:"primary",onClick:n.retryError},{default:(0,r.k6)((()=>[(0,r.bF)(f,{icon:"redo"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,r.bF)(V,{disabled:n.disableTooltip,content:"清空列表",placement:"top",style:{border:"none"}},{default:(0,r.k6)((()=>[(0,r.bF)(J,null,{dropdown:(0,r.k6)((()=>[(0,r.bF)($,{slot:"dropdown"},{default:(0,r.k6)((()=>[(0,r.bF)(N,{onClick:n.clearFileList},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("清空全部")]))),_:1},8,["onClick"]),(0,r.bF)(N,{onClick:n.clearSuccessList},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("清空已上传")]))),_:1},8,["onClick"])])),_:1})])),default:(0,r.k6)((()=>[(0,r.bF)(g,{type:"primary",round:"",style:{outline:"none","border-right":"none"}},{default:(0,r.k6)((()=>[(0,r.bF)(f,{icon:"trash-alt"})])),_:1})])),_:1})])),_:1},8,["disabled"])])),_:1})])],2),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.fileList.slice().reverse(),(e=>((0,r.uX)(),(0,r.CE)("div",{class:"upload-list-item",key:e.name,span:8},[(0,r.Lk)("a",{href:e.url,target:"_blank"},[n.isVideo(e.name)?((0,r.uX)(),(0,r.CE)("video",j,[(0,r.Lk)("source",{src:e.url,type:"video/mp4"},null,8,T),t[4]||(t[4]=(0,r.eW)(" Your browser does not support the video tag. "))])):((0,r.uX)(),(0,r.CE)("img",{key:1,style:{width:"10vw","border-radius":"12px"},src:e.url,onError:t=>e.url=s(6682)},null,40,A))],8,_),(0,r.Lk)("div",E,[(0,r.bF)(m,{class:"upload-list-item-name",truncated:""},{default:(0,r.k6)((()=>[(0,r.eW)((0,I.v_)(e.name),1)])),_:2},1024),"done"===e.status?((0,r.uX)(),(0,r.CE)("div",W,[(0,r.Lk)("div",B,[(0,r.bF)(D,{modelValue:e.finalURL,"onUpdate:modelValue":t=>e.finalURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,r.k6)((()=>t[5]||(t[5]=[(0,r.eW)("URL")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"]),(0,r.bF)(D,{modelValue:e.mdURL,"onUpdate:modelValue":t=>e.mdURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,r.k6)((()=>t[6]||(t[6]=[(0,r.eW)("MarkDown")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"])]),(0,r.Lk)("div",S,[(0,r.bF)(D,{modelValue:e.htmlURL,"onUpdate:modelValue":t=>e.htmlURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,r.k6)((()=>t[7]||(t[7]=[(0,r.eW)("HTML")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"]),(0,r.bF)(D,{modelValue:e.ubbURL,"onUpdate:modelValue":t=>e.ubbURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,r.k6)((()=>t[8]||(t[8]=[(0,r.eW)("BBCode")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"])])])):((0,r.uX)(),(0,r.CE)("div",z,[(0,r.bF)(O,{percentage:e.progreess,status:e.status,"show-text":!1},null,8,["percentage","status"])]))]),(0,r.Lk)("div",P,[(0,r.bF)(g,{type:"primary",circle:"",class:"upload-list-item-action-button",onClick:t=>n.handleCopy(e)},{default:(0,r.k6)((()=>[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(G)])),_:1})])),_:2},1032,["onClick"]),(0,r.bF)(g,{type:"danger",circle:"",class:"upload-list-item-action-button",onClick:t=>n.handleRemove(e)},{default:(0,r.k6)((()=>[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(Z)])),_:1})])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["onScroll"])],2)])),_:1},8,["class"])])}s(4114),s(4603),s(7566),s(8721);var N=s(4373),$=s(4570),J=s.n($),Q=s(6334),D={name:"UploadForm",props:{selectedUrlForm:{type:String,default:"url",required:!1},customerCompress:{type:Boolean,default:!0,required:!1},compressQuality:{type:Number,default:4,required:!1},compressBar:{type:Number,default:5,required:!1},serverCompress:{type:Boolean,default:!0,required:!1}},data(){return{fileList:[],uploading:!1,maxUploading:6,waitingList:[],exceptionList:[],listScrolled:!1,fileListLength:0,uploadCount:0}},watch:{fileList:{handler(){this.fileList.length>this.fileListLength&&this.$nextTick((()=>{setTimeout((()=>{this.$refs.scrollContainer.setScrollTop(0)}),100)})),this.fileListLength=this.fileList.length},deep:!0}},computed:{uploadSuccessCount(){return this.fileList.filter((e=>"done"===e.status||"success"===e.status)).length},uploadErrorCount(){return this.fileList.filter((e=>"exception"===e.status)).length},uploadingCount(){return this.fileList.filter((e=>"uploading"===e.status)).length},waitingCount(){return this.waitingList.length},urlSize(){return window.innerWidth<768?"small":"default"},disableTooltip(){return window.innerWidth<768}},mounted(){document.addEventListener("paste",this.handlePaste)},beforeUnmount(){document.removeEventListener("paste",this.handlePaste)},methods:{uploadFile(e){if(!this.fileList.find((t=>t.uid===e.file.uid)))return;if(this.uploadingCount>this.maxUploading)return this.waitingList.push(e),void(this.fileList.find((t=>t.uid===e.file.uid)).status="waiting");this.fileList.find((t=>t.uid===e.file.uid)).status="uploading";const t=new FormData;t.append("file",e.file);const s=this.fileList.find((t=>t.uid===e.file.uid)).serverCompress;(0,N.A)({url:"/upload?authCode="+J().get("authCode")+"&serverCompress="+s,method:"post",data:t,onUploadProgress:t=>{const s=Math.round(t.loaded/t.total*100);e.onProgress({percent:s,file:e.file})}}).then((t=>{e.onSuccess(t,e.file)})).catch((t=>{t.response&&401===t.response.status?(this.waitingList=[],this.fileList=[],this.$message.error("认证状态错误！"),this.$router.push("/login")):(this.exceptionList.push(e),e.onError(t,e.file))})).finally((()=>{this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)}))},handleRemove(e){this.fileList=this.fileList.filter((t=>t.uid!==e.uid)),this.$message({type:"info",message:e.name+"已删除"})},handleSuccess(e,t){try{const s=`${window.location.protocol}//${window.location.host}`;this.fileList.find((e=>e.uid===t.uid)).url=s+e.data[0].src,this.fileList.find((e=>e.uid===t.uid)).finalURL=s+e.data[0].src,this.fileList.find((e=>e.uid===t.uid)).mdURL=`![${t.name}](${s+e.data[0].src})`,this.fileList.find((e=>e.uid===t.uid)).htmlURL=`<img src="${s+e.data[0].src}" alt="${t.name}" width=100% />`,this.fileList.find((e=>e.uid===t.uid)).ubbURL=`[img]${s+e.data[0].src}[/img]`,this.fileList.find((e=>e.uid===t.uid)).progreess=100,this.fileList.find((e=>e.uid===t.uid)).status="success",this.$message({type:"success",message:t.name+"上传成功"}),setTimeout((()=>{this.fileList.find((e=>e.uid===t.uid)).status="done"}),1e3)}catch(s){this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception"}finally{if(this.uploadingCount+this.waitingCount===0&&(this.uploading=!1),this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}}},handleError(e,t){if(this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception",this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)},handleCopy(e){const t=this.fileList.find((t=>t.uid===e.uid)).status;"done"===t||"success"===t?("url"===this.selectedUrlForm?navigator.clipboard.writeText(e.finalURL):"md"===this.selectedUrlForm?navigator.clipboard.writeText(e.mdURL):"html"===this.selectedUrlForm?navigator.clipboard.writeText(e.htmlURL):"ubb"===this.selectedUrlForm?navigator.clipboard.writeText(e.ubbURL):navigator.clipboard.writeText(e.finalURL),this.$message({type:"success",message:"复制成功"})):this.$message({type:"warning",message:"文件未上传成功，无法复制链接"})},beforeUpload(e){return new Promise(((t,s)=>{const i=e.type.includes("image")&&(this.customerCompress&&e.size/1024/1024>this.compressBar||e.size/1024/1024>20),o=e.size/1024/1024<20,l=(e,s)=>{const i=URL.createObjectURL(e);this.fileList.push({uid:e.uid,name:e.name,url:i,finalURL:"",mdURL:"",htmlURL:"",ubbURL:"",status:"uploading",progreess:0,serverCompress:s}),t(e)};if(i)Q.compressAccurately(e,1024*this.compressQuality).then((t=>{t.size/1024/1024>20&&(this.$message.error(e.name+"压缩后文件过大，无法上传!"),s("文件过大")),this.uploading=!0;const i=new File([t],e.name,{type:t.type});i.uid=e.uid;const o=this.uploadCount++,n=this.serverCompress&&i.size/1024/1024<10;0===o?l(i,n):setTimeout((()=>{l(i,n),this.uploadCount--}),300*o)})).catch((t=>{this.$message.error(e.name+"压缩失败，无法上传!"),s(t)}));else if(o){this.uploading=!0;const t=this.uploadCount++,s=this.serverCompress&&(!e.type.includes("image")||e.size/1024/1024<10);0===t?l(e,s):setTimeout((()=>{l(e,s),this.uploadCount--}),300*t)}else this.$message.error(e.name+"文件过大，无法上传!"),s("文件过大")}))},handleProgress(e){this.fileList.find((t=>t.uid===e.file.uid)).progreess=e.percent},copyAll(){if("url"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}else if("md"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.mdURL})).join("\n");navigator.clipboard.writeText(e)}else if("html"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.htmlURL})).join("\n");navigator.clipboard.writeText(e)}else if("ubb"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.ubbURL})).join("\n");navigator.clipboard.writeText(e)}else{const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}this.$message({type:"success",message:"整体复制成功"})},clearFileList(){this.fileList.length>0?(this.fileList=[],this.$message({type:"success",message:"文件列表已清空"})):this.$message({type:"info",message:"文件列表为空"})},clearSuccessList(){this.uploadSuccessCount>0?(this.fileList=this.fileList.filter((e=>"done"!==e.status&&"success"!==e.status)),this.$message({type:"success",message:"成功上传文件已清空"})):this.$message({type:"info",message:"成功上传文件为空"})},handlePaste(e){if("INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return;const t=e.clipboardData.items;for(let s=0;s<t.length;s++)if("file"===t[s].kind){const e=t[s].getAsFile();if(e.type.includes("image")||e.type.includes("video")){e.uid=Date.now()+s,e.file=e;const t=this.beforeUpload(e);t instanceof Promise&&t.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))}else this.$message({type:"warning",message:"粘贴板中的文件不是图片或视频"})}else"string"===t[s].kind&&t[s].getAsString((e=>{const t=/^(https?:\/\/[^\s$.?#].[^\s]*)$/;let i="";t.test(e)&&fetch("/api/fetchRes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((t=>{const o=t.headers.get("content-type");if(200==t.status&&(o.includes("image")||o.includes("video"))){const o=t.headers.get("Content-Disposition");if(o){const e=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,t=/filename\*\s*=\s*UTF-8''([^;\n]*)/;let s=e.exec(o);if(null!=s&&s[1]){i=s[1].replace(/['"]/g,"");try{i=decodeURIComponent(i)}catch(l){i=""}}""===i&&(s=t.exec(o),null!=s&&s[1]&&(i=decodeURIComponent(s[1])))}if(""===i){const t=new URL(e);i=t.pathname.split("/").pop()}if(""===i){const t=new URL(e);let o=t.pathname.split(".").pop();["jpg","jpeg","png","gif","bmp","webp","mp4","webm","ogg","mkv"].includes(o)||(o="jpeg"),i="PastedFile"+Date.now()+s+"."+o}return t.blob()}throw new Error("URL地址的内容不是图片或视频")})).then((e=>{const t=new File([e],i,{type:e.type});t.uid=Date.now()+s,t.file=t;const o=this.beforeUpload(t);o instanceof Promise&&o.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))})).catch((e=>{this.$message({type:"warning",message:"粘贴板中的URL地址的内容不是图片或视频"})}))}))},selectAllText(e){navigator.clipboard.writeText(e.target.value).then((()=>{this.$message({type:"success",message:"复制成功"})})).catch((()=>{this.$message({type:"error",message:"复制失败"})}))},isImage(e){const t=["jpg","jpeg","png","gif","bmp","webp"],s=e.split(".").pop().toLowerCase();return t.includes(s)},isVideo(e){const t=["mp4","webm","ogg","mkv"],s=e.split(".").pop().toLowerCase();return t.includes(s)},handleScroll(e){this.listScrolled=e.scrollTop>0&&this.fileList.length>0},retryError(){this.exceptionList.length>0?(this.exceptionList.forEach((e=>{this.uploadFile({file:e.file,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})),this.exceptionList=[]):this.$message({type:"info",message:"无上传失败文件"})}}};const O=(0,m.A)(D,[["render",V],["__scopeId","data-v-6e8741b3"]]);var G=O;const Z={class:"upload-home"},X={class:"toolbar"},Y={class:"header"},q={href:"https://github.com/MarSeventh/CloudFlare-ImgBed"},K=["src"],H={class:"title"},ee={class:"main-title",href:"https://github.com/MarSeventh/CloudFlare-ImgBed",target:"_blank"},te={class:"dialog-action"},se={class:"dialog-action"};function ie(e,t,s,u,c,d){const p=(0,r.g2)("font-awesome-icon"),h=w.S2,m=L.R7,f=G,b=g,y=a.ll,k=a.MQ,C=n.kZ,U=l.qi,v=i.xE,F=o.B8,M=i.US;return(0,r.uX)(),(0,r.CE)("div",Z,[t[19]||(t[19]=(0,r.Lk)("img",{id:"bg1",class:"background-image1",alt:"Background Image"},null,-1)),t[20]||(t[20]=(0,r.Lk)("img",{id:"bg2",class:"background-image2",alt:"Background Image"},null,-1)),(0,r.Lk)("div",X,[(0,r.bF)(m,{disabled:d.disableTooltip,content:"压缩设置",placement:"left"},{default:(0,r.k6)((()=>[(0,r.bF)(h,{class:"toolbar-button",size:"large",onClick:d.openCompressDialog,circle:""},{default:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"file-archive",class:"compress-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,r.bF)(m,{disabled:d.disableTooltip,content:"链接格式",placement:"left"},{default:(0,r.k6)((()=>[(0,r.bF)(h,{class:"toolbar-button",size:"large",onClick:d.openUrlDialog,circle:""},{default:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"link",class:"link-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,r.bF)(m,{disabled:d.disableTooltip,content:"管理页面",placement:"left"},{default:(0,r.k6)((()=>[(0,r.bF)(h,{class:"toolbar-button",size:"large",onClick:d.handleManage,circle:""},{default:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"cog",class:"config-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,r.bF)(m,{disabled:d.disableTooltip,content:"退出登录",placement:"left"},{default:(0,r.k6)((()=>[(0,r.bF)(h,{class:"toolbar-button",size:"large",onClick:d.handleLogout,circle:""},{default:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"sign-out-alt",class:"sign-out-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"])]),(0,r.Lk)("div",Y,[(0,r.Lk)("a",q,[(0,r.Lk)("img",{class:"logo",alt:"Sanyue logo",src:d.logoUrl},null,8,K)]),(0,r.Lk)("h1",H,[(0,r.Lk)("a",ee,(0,I.v_)(d.ownerName),1),t[9]||(t[9]=(0,r.eW)(" ImgHub"))])]),(0,r.bF)(f,{selectedUrlForm:c.selectedUrlForm,customerCompress:c.customerCompress,compressQuality:c.compressQuality,compressBar:c.compressBar,serverCompress:c.serverCompress,class:"upload"},null,8,["selectedUrlForm","customerCompress","compressQuality","compressBar","serverCompress"]),(0,r.bF)(b),(0,r.bF)(C,{title:"选择复制链接格式",modelValue:c.showUrlDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>c.showUrlDialog=e),width:d.dialogWidth,"show-close":!1},{default:(0,r.k6)((()=>[(0,r.bF)(k,{modelValue:c.selectedUrlForm,"onUpdate:modelValue":t[0]||(t[0]=e=>c.selectedUrlForm=e),onChange:d.changeUrlForm},{default:(0,r.k6)((()=>[(0,r.bF)(y,{value:"url"},{default:(0,r.k6)((()=>t[10]||(t[10]=[(0,r.eW)("原始链接")]))),_:1}),(0,r.bF)(y,{value:"md"},{default:(0,r.k6)((()=>t[11]||(t[11]=[(0,r.eW)("MarkDown")]))),_:1}),(0,r.bF)(y,{value:"html"},{default:(0,r.k6)((()=>t[12]||(t[12]=[(0,r.eW)("HTML")]))),_:1}),(0,r.bF)(y,{value:"ubb"},{default:(0,r.k6)((()=>t[13]||(t[13]=[(0,r.eW)("BBCode")]))),_:1})])),_:1},8,["modelValue","onChange"]),(0,r.Lk)("div",te,[(0,r.bF)(h,{type:"primary",onClick:t[1]||(t[1]=e=>c.showUrlDialog=!1)},{default:(0,r.k6)((()=>t[14]||(t[14]=[(0,r.eW)("确定")]))),_:1})])])),_:1},8,["modelValue","width"]),(0,r.bF)(C,{title:"压缩设置",modelValue:c.showCompressDialog,"onUpdate:modelValue":t[8]||(t[8]=e=>c.showCompressDialog=e),width:d.dialogWidth,"show-close":!1},{default:(0,r.k6)((()=>[(0,r.bF)(M,{"label-width":"25%"},{default:(0,r.k6)((()=>[t[16]||(t[16]=(0,r.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"客户端压缩",-1)),(0,r.bF)(v,{label:"开启压缩"},{default:(0,r.k6)((()=>[(0,r.bF)(U,{modelValue:c.customerCompress,"onUpdate:modelValue":t[3]||(t[3]=e=>c.customerCompress=e),"active-text":"开启","inactive-text":"关闭","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),c.customerCompress?((0,r.uX)(),(0,r.Wv)(v,{key:0,label:"压缩阈值"},{default:(0,r.k6)((()=>[(0,r.bF)(F,{modelValue:c.compressBar,"onUpdate:modelValue":t[4]||(t[4]=e=>c.compressBar=e),min:1,max:20,"show-input":""},null,8,["modelValue"])])),_:1})):(0,r.Q3)("",!0),c.customerCompress?((0,r.uX)(),(0,r.Wv)(v,{key:1,label:"压缩后大小"},{default:(0,r.k6)((()=>[(0,r.bF)(F,{modelValue:c.compressQuality,"onUpdate:modelValue":t[5]||(t[5]=e=>c.compressQuality=e),min:1,max:c.compressBar,"show-input":""},null,8,["modelValue","max"])])),_:1})):(0,r.Q3)("",!0),t[17]||(t[17]=(0,r.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"服务端压缩",-1)),(0,r.bF)(v,{label:"开启压缩"},{default:(0,r.k6)((()=>[(0,r.bF)(U,{modelValue:c.serverCompress,"onUpdate:modelValue":t[6]||(t[6]=e=>c.serverCompress=e),"active-text":"开启","inactive-text":"关闭","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),t[18]||(t[18]=(0,r.Lk)("p",{style:{"text-align":"left","font-size":"small"}},[(0,r.Lk)("br"),(0,r.eW)("*Tips: "),(0,r.Lk)("br"),(0,r.eW)("1.本设置仅针对图片文件，单位为MB "),(0,r.Lk)("br"),(0,r.eW)("2.客户端压缩指上传前压缩，服务端压缩指Telegram端压缩 "),(0,r.Lk)("br"),(0,r.eW)("3.若图片大小>10MB，或压缩后图片大小>10MB，服务端压缩将自动失效 "),(0,r.Lk)("br"),(0,r.eW)("4.若图片大小>20MB，将自动进行客户端压缩 "),(0,r.Lk)("br"),(0,r.eW)("5.若想要存储的图片和原图完全一致，可以将两个压缩设置均设置为关闭 "),(0,r.Lk)("br"),(0,r.eW)("6.若上传分辨率过大、透明背景等图片，建议关闭服务端压缩，否则可能出现未知问题 ")],-1)),(0,r.Lk)("div",se,[(0,r.bF)(h,{type:"primary",onClick:t[7]||(t[7]=e=>c.showCompressDialog=!1)},{default:(0,r.k6)((()=>t[15]||(t[15]=[(0,r.eW)("确定")]))),_:1})])])),_:1})])),_:1},8,["modelValue","width"])])}var oe=s(144),le={name:"UploadHome",data(){return{selectedUrlForm:(0,oe.KR)(""),showUrlDialog:!1,bingWallPaperIndex:0,customWallPaperIndex:0,showCompressDialog:!1,customerCompress:!0,compressQuality:4,compressBar:5,serverCompress:!0}},watch:{customerCompress(e){this.updateCompressConfig("customerCompress",e)},compressQuality(e){this.updateCompressConfig("compressQuality",e)},compressBar(e){this.updateCompressConfig("compressBar",e)},serverCompress(e){this.updateCompressConfig("serverCompress",e)}},computed:{...(0,p.L8)(["userConfig","bingWallPapers","uploadCopyUrlForm","compressConfig"]),ownerName(){return this.userConfig?.ownerName||"Sanyue"},logoUrl(){return this.userConfig?.logoUrl||s(3153)},bkInterval(){return this.userConfig?.bkInterval||3e3},bkOpacity(){return this.userConfig?.bkOpacity||1},dialogWidth(){return window.innerWidth>768?"40%":"80%"},disableTooltip(){return window.innerWidth<768}},mounted(){const e=document.getElementById("bg1"),t=document.getElementById("bg2");"bing"===this.userConfig?.uploadBkImg?this.$store.dispatch("fetchBingWallPapers").then((()=>{e.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,e.onload=()=>{e.style.opacity=this.bkOpacity},setInterval((()=>{let s=0!=e.style.opacity?e:t,i=0!=e.style.opacity?t:e;s.style.opacity=0,this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length,i.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,i.onload=()=>{i.style.opacity=this.bkOpacity}}),this.bkInterval)})):this.userConfig?.uploadBkImg instanceof Array&&this.userConfig?.uploadBkImg?.length>1?(e.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],e.onload=()=>{e.style.opacity=this.bkOpacity},setInterval((()=>{let s=0!=e.style.opacity?e:t,i=0!=e.style.opacity?t:e;s.style.opacity=0,this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.uploadBkImg.length,i.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],i.onload=()=>{i.style.opacity=this.bkOpacity}}),this.bkInterval)):this.userConfig?.uploadBkImg instanceof Array&&1==this.userConfig?.uploadBkImg.length?(e.src=this.userConfig.uploadBkImg[0],e.onload=()=>{e.style.opacity=this.bkOpacity}):(e.src=s(732),e.onload=()=>{e.style.opacity=this.bkOpacity}),this.selectedUrlForm=this.uploadCopyUrlForm||"url",this.customerCompress=this.compressConfig.customerCompress,this.compressQuality=this.compressConfig.compressQuality,this.compressBar=this.compressConfig.compressBar,this.serverCompress=this.compressConfig.serverCompress},components:{UploadForm:G,Footer:g},methods:{handleManage(){this.$router.push("/dashboard")},openUrlDialog(){this.showUrlDialog=!0},handleLogout(){J().remove("authCode"),this.$router.push("/login"),this.$message.success("已退出登录~")},changeUrlForm(){this.$store.commit("setUploadCopyUrlForm",this.selectedUrlForm)},openCompressDialog(){this.showCompressDialog=!0},updateCompressConfig(e,t){this.$store.commit("setCompressConfig",{key:e,value:t})}}};const ne=(0,m.A)(le,[["render",ie],["__scopeId","data-v-3d1e89f8"]]);var ae=ne},6682:function(e,t,s){"use strict";e.exports=s.p+"img/404.8ed11fb3.png"},732:function(e){"use strict";e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAj90RVh0bXhmaWxlACUzQ214ZmlsZSUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMlRZVGw5Q0tSRmJGdzVKVUhsWk13JTIyJTIwbmFtZSUzRCUyMiVFNyVBQyVBQyUyMDElMjAlRTklQTElQjUlMjIlM0UlM0NteEdyYXBoTW9kZWwlMjBkeCUzRCUyMjExMDMlMjIlMjBkeSUzRCUyMjY1OSUyMiUyMGdyaWQlM0QlMjIxJTIyJTIwZ3JpZFNpemUlM0QlMjIxMCUyMiUyMGd1aWRlcyUzRCUyMjElMjIlMjB0b29sdGlwcyUzRCUyMjElMjIlMjBjb25uZWN0JTNEJTIyMSUyMiUyMGFycm93cyUzRCUyMjElMjIlMjBmb2xkJTNEJTIyMSUyMiUyMHBhZ2UlM0QlMjIxJTIyJTIwcGFnZVNjYWxlJTNEJTIyMSUyMiUyMHBhZ2VXaWR0aCUzRCUyMjEyMDAlMjIlMjBwYWdlSGVpZ2h0JTNEJTIyMTYwMCUyMiUyMG1hdGglM0QlMjIwJTIyJTIwc2hhZG93JTNEJTIyMCUyMiUzRSUzQ3Jvb3QlM0UlM0NteENlbGwlMjBpZCUzRCUyMjAlMjIlMkYlM0UlM0NteENlbGwlMjBpZCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIwJTIyJTJGJTNFJTNDJTJGcm9vdCUzRSUzQyUyRm14R3JhcGhNb2RlbCUzRSUzQyUyRmRpYWdyYW0lM0UlM0MlMkZteGZpbGUlM0Xw0DhKAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="},3153:function(e,t,s){"use strict";e.exports=s.p+"img/logo.e8dbfa27.png"},8050:function(e,t,s){"use strict";s(5331)},5385:function(e,t,s){"use strict";s(5331)},5616:function(e,t,s){"use strict";s(5331),s(7197)},3597:function(e,t,s){"use strict";s(5331)},8830:function(e,t,s){"use strict";s(5331)},6055:function(e,t,s){"use strict";s(5331),s(9648),s(8050),s(9104),s(5970)},9104:function(e,t,s){"use strict";s(5331)},5970:function(e,t,s){"use strict";s(5331)},213:function(e,t,s){"use strict";s(5331),s(9104)}}]);
//# sourceMappingURL=201.fd9ffb7c.js.map