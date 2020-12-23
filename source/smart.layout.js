
/* Smart UI v9.0.0 (2020-Dec) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=71)}({71:function(e,t){class i extends HTMLElement{constructor(){super(),this._properties={min:50,label:"Item",modifiers:["resize","drag","close"],size:null}}_setProperty(e,t){const i=this;if(i._properties[e]===t)return;if(i._properties[e]=t,i._updating=!0,"disabled"===e||"modifiers"===e?t?i.setAttribute(e,t):i.removeAttribute(e):null===t?i.removeAttribute(e):i.setAttribute(e,t),!i.isCompleted)return;const r=i.closest("smart-layout");r&&(r._resizeDetails||r._updating||!r.isRendered||r.refresh()),i._updating=!1}get label(){return this._properties.label}set label(e){this._setProperty("label",e)}get modifiers(){return this._properties.modifiers}set modifiers(e){this._setProperty("modifiers",e)}get min(){return this._properties.min}set min(e){this._setProperty("min",e)}get size(){return this._properties.size}set size(e){null!==e?"string"==typeof e?this._setProperty("size",e):this._setProperty("size",Math.max(this.min,e)):this._setProperty("size",e)}static get observedAttributes(){return["min","size","label","modifiers"]}attributeChangedCallback(e,t,i){const r=this;if(t!==i&&r.isCompleted)if("size"===e){if(!r._updating){if(null===i)return void(this[e]=null);r[e]=Math.max(r.min,parseInt(i))}}else r[e]=i}connectedCallback(){this.isCompleted||this.render()}whenRendered(e){const t=this;t.isRendered?e():(t.whenRenderedCallbacks||(t.whenRenderedCallbacks=[]),t.whenRenderedCallbacks.push(e))}render(){const e=this;e.hasAttribute("data-id")||e.setAttribute("data-id","id"+Math.random().toString(16).slice(2)),e.hasAttribute("label")||e.setAttribute("label",e.label),e.hasAttribute("min")||e.setAttribute("min",e.min),e.hasAttribute("label")||e.setAttribute("label",e.label),e.hasAttribute("modifiers")||e.setAttribute("modifiers",e.modifiers);for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t],r=i.name,n=i.value;isNaN(n)||"min"!==r&&"size"!==r?e._properties[r]=n:e._properties[r]=parseInt(n)}if(e.classList.add("smart-layout-item"),e.isCompleted=!0,e.whenRenderedCallbacks){for(let t=0;t<e.whenRenderedCallbacks.length;t++)e.whenRenderedCallbacks[t]();e.whenRenderedCallbacks=[]}}}class r extends i{constructor(){super(),this._properties.label="Group",this._properties.orientation="vertical"}get orientation(){return this._properties.orientation}set orientation(e){this._setProperty("orientation",e)}static get observedAttributes(){return["min","size","modifiers","orientation","position"]}render(){const e=this;super.render(),e.className="smart-layout-group",e.hasAttribute("orientation")?e._properties.orientation=e.getAttribute("orientation"):e.setAttribute("orientation",e._properties.orientation)}}class n extends r{constructor(){super(),this._properties.position="top",this._properties.label="TabGroup"}get position(){return this._properties.position}set position(e){this._setProperty("position",e)}render(){const e=this;super.render(),!e.hasAttribute("position")&&e.position&&e.setAttribute("position","top")}static get observedAttributes(){return["min","size","modifiers","orientation","position"]}}class s extends r{constructor(){super(),this._properties.label="TabItem"}}customElements.define("smart-layout-group",r),customElements.define("smart-layout-item",i),customElements.define("smart-tab-layout-group",n),customElements.define("smart-tab-layout-item",s),Smart("smart-layout",class extends Smart.ContentElement{static get properties(){return{allowLiveSplit:{value:!1,type:"boolean"},allowContextMenu:{value:!1,type:"boolean"},contextMenuDataSource:{value:["select","delete"],type:"any"},dataSource:{reflectToAttribute:!1,value:null,type:"any"},messages:{value:{en:{select:"Select Parent",delete:"Delete"}},type:"object",extend:!0},orientation:{value:"vertical",type:"string"},selectedIndex:{value:null,type:"any"}}}static get listeners(){return{contextmenu:"_contextMenuHandler","document.down":"_documentDownHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","document.selectstart":"_documentSelectStartHandler",mouseleave:"_leaveHandler",mouseenter:"_enterHandler",dragStart:"_dragStart","document.keyup":"_keyUpHandler"}}_dragStart(e){e.stopPropagation(),e.preventDefault()}_leaveHandler(){const e=this;e._resizeDetails||(e._handleButtonsVisibility(null),e._hideSplitter(),requestAnimationFrame(()=>{e.classList.remove("outline")}))}_enterHandler(){const e=this;e._resizeDetails||(e._handleButtonsVisibility(e._selectedItem),e._updateSplitter(),requestAnimationFrame(()=>{e.classList.add("outline")}))}template(){return'<div id="container" role="presentation"><smart-layout-group data-id="root" id="itemsContainer"><content></content></smart-layout-group><div root-splitter id="splitter" class="smart-layout-splitter"></div>'}propertyChangedHandler(e,t,i){const r=this;switch(e){case"contextMenuDataSource":r._contextMenu&&(r._closeContextMenu(),r._contextMenu.innerHTML="");break;case"orientation":r.$.itemsContainer&&(r.$.itemsContainer.orientation=r.orientation);break;case"dataSource":r.dataBind();break;case"selectedIndex":r._handleItemClick(r.getItem(i+""),!0);break;default:super.propertyChangedHandler(e,t,i)}}dataBind(){this.$.itemsContainer.innerHTML="";let e="";const t=(i,r)=>{for(let n=0;n<i.length;n++){const s=i[n],o=s.size,a=s.min,l=s.modifiers,d=s.type,c=s.position,u=s.orientation?s.orientation:"vertical";let p="";if(void 0!==o&&(p+=`size="${o}" `),void 0!==a&&(p+=`min="${a}" `),void 0!==l&&(p+=`modifiers="${l}" `),void 0!==c&&(p+=`position="${c}" `),s.items)p+=`orientation=${u} `,"tabs"===d?(e+=`<smart-tab-layout-group ${p}>`,t(s.items,!0),e+="</smart-tab-layout-group>"):(e+=`<smart-layout-group ${p}>`,t(s.items),e+="</smart-layout-group>");else{const t=s.content||"";e+=r?`<smart-tab-layout-item ${p}>`+t+"</smart-tab-layout-item>":`<smart-layout-item ${p}>`+t+"</smart-layout-item>"}}};t(this.dataSource),this.$.itemsContainer.innerHTML=e,this.refresh()}render(){const e=this;e.setAttribute("role","group"),e.selectedIndex&&e._handleItemClick(e.getItem(e.selectedIndex+""),!0),e.checkLicense();const t=()=>{e.dataSource?e.dataBind():e.dataSource=e._getDataSource(e._getLayout()),e.$.itemsContainer.orientation=e.orientation,super.render(),e.refresh(),e._updateSplitter()};"complete"===document.readyState?t():window.addEventListener("load",()=>{t()})}getItem(e){if(null==e)return;e=(e+"").split(".");let t,i=this._getDataSource(this._getLayout());for(let r=0;r<e.length&&(t=i[e[r]],t);r++)i=t.items;return t}_contextMenuHandler(e){const t=this;let i=e.target;if(t.allowContextMenu&&i.closest){if(i.closest(".smart-layout-context-menu"))return void e.preventDefault();let n=t.querySelector("[selected][data-id]");if(n||(n=i.closest(".smart-layout-item")||i.closest(".smart-layout-group")),!n)return;e.preventDefault(),t._createContextMenu();const s=t._contextMenu.children;for(let e=0;e<s.length;e++){const t=s[e];"delete"===t.getAttribute("value")?n.hasAttribute("index")&&"0"===n.getAttribute("index")?t.setAttribute("disabled",""):t.removeAttribute("disabled"):"select"===t.getAttribute("value")&&(n.hasAttribute("index")&&"0"===n.getAttribute("index")||!(n.parentElement instanceof r)?t.setAttribute("disabled",""):t.removeAttribute("disabled"))}t._openContextMenu(n,e.pageX,e.pageY)}}_createContextMenu(){const e=this;let t=e._contextMenu;if(t||(t=document.createElement("div"),t.classList.add("smart-layout-context-menu","smart-visibility-hidden"),e._contextMenu=t),!t.innerHTML){const i=e.contextMenuDataSource;for(let r=0;r<i.length;r++){const n=i[r];let s,o;"object"==typeof n?(s=n.label,o=n.value):o=s=n+"",t.innerHTML+=`<div class="smart-layout-context-menu-item" value="${o}">${e.localize(s)||s}</div>`}}}_openContextMenu(e,t,i){const r=this._contextMenu;r&&r.classList.contains("smart-visibility-hidden")&&(this.$.fireEvent("opening").defaultPrevented||e.parentElement&&(r._target=e,this._opening=!0,this.$.container.appendChild(r),this._positionContextMenu(t,i),r.classList.remove("smart-visibility-hidden"),this.$.fireEvent("open")))}_closeContextMenu(){const e=this,t=e._contextMenu;t&&!t.classList.contains("smart-visibility-hidden")&&(e.$.fireEvent("closing").defaultPrevented||(delete e._opening,e.hasAnimation&&t.addEventListener("transitionend",e._contextMenuTransitionEndHandler.bind(e),{once:!0}),t.classList.add("smart-visibility-hidden"),e.$.fireEvent("close")))}_contextMenuTransitionEndHandler(){const e=this._contextMenu;e&&!this._opening&&e.parentElement&&this.$.container.removeChild(e)}_positionContextMenu(e,t){const i=this._contextMenu;if(!i)return;const r=this.$.container.getBoundingClientRect();e-=r.left+window.pageXOffset,t-=r.top+window.pageYOffset,e+i.offsetWidth>r.width&&(e-=e+i.offsetWidth-r.width),t+i.offsetHeight>r.height&&(t-=t+i.offsetHeight-r.height),i.style.left=e+"px",i.style.top=t+"px"}_documentDownHandler(e){const t=this,i=e.originalEvent.target;t.contains(i)&&i.closest&&(t._target=i,t._updateSplitter())}_documentMoveHandler(e){const t=this,i=e.originalEvent.target,r=t._contextMenu;if(r&&!Smart.Utilities.Core.isMobile){if(r.querySelector(".smart-layout-context-menu-item[hover]")){const e=r.children;for(let t=0;t<e.length;t++)e[t].removeAttribute("hover")}r.contains(i)&&i.closest&&i.closest(".smart-layout-context-menu-item")&&i.setAttribute("hover","")}if(t._dragDetails){const i=Math.abs(t._dragDetails.pageX-e.pageX);if(Math.abs(t._dragDetails.pageY-e.pageY)<=5&&i<=5)return;t._dragDetails.feedback.parentElement||(document.body.appendChild(t._dragDetails.feedback),document.body.appendChild(t._dragDetails.overlay),setTimeout(()=>{t._dragDetails.feedback.classList.add("dragging")},100)),t._dragDetails.dragging=!0,t._dragDetails.feedback.style.left=e.pageX-t._dragDetails.feedback.offsetWidth/2-5+"px",t._dragDetails.feedback.style.top=e.pageY-t._dragDetails.feedback.offsetHeight/2-5+"px";const r=document.elementsFromPoint(e.pageX,e.pageY);let o=null,a=!1;for(let e=0;e<r.length;e++){const i=r[e];if(!t._dragDetails.feedback.contains(i)){if(i.classList.contains("smart-layout-tab-strip")){if(t._dragDetails.element.contains(i))continue;o=i.parentElement,a=!0;break}if((i.parentElement!==t._dragDetails.parent&&i!==t._dragDetails.parent||1!==t._dragDetails.layoutGroup.items.length)&&!t._dragDetails.element.contains(i)){if(i instanceof s){o=i.parentElement;break}if(i instanceof n){o=i;break}}}}const l=(i,r)=>{const n=t.offset(i);let s=null,o=50,a=r,l=r;r?o=0:(l=i.offsetWidth/3,a=i.offsetHeight/3);const d=[{left:n.left,top:n.top,right:n.left+o,bottom:n.top+o,position:"top"},{left:n.left+o,top:n.top,right:n.left+i.offsetWidth-o,bottom:n.top+a-o,position:"top"},{left:n.left+i.offsetWidth-o,top:n.top,right:n.left+i.offsetWidth,bottom:n.top+o,position:"top"},{left:n.left,top:n.top+o,right:n.left+l,bottom:n.top+i.offsetHeight-o,position:"left"},{left:n.left+i.offsetWidth-l,top:n.top+o,right:n.left+i.offsetWidth,bottom:n.top+i.offsetHeight-o,position:"right"},{left:n.left,top:n.top+i.offsetHeight-o,right:n.left+o,bottom:n.top+i.offsetHeight,position:"bottom"},{left:n.left+o,top:n.top+i.offsetHeight-a+o,right:n.left+i.offsetWidth-o,bottom:n.top+i.offsetHeight,position:"bottom"},{left:n.left+i.offsetWidth-o,top:n.top+i.offsetHeight-o,right:n.left+i.offsetWidth,bottom:n.top+i.offsetHeight,position:"bottom"}];for(let t=0;t<d.length;t++){const i=d[t];if(i.left<=e.pageX&&e.pageX<=i.right&&i.top<=e.pageY&&e.pageY<=i.bottom){s=i.position;break}}return s},d=t.querySelector("smart-layout-group");let c=l(d,10),u=null;c?u=d:o?a?o!==t._dragDetails.parent&&(c="center",u=o):(c=l(o)||"center",u=o):t._handleDropArea(null),u&&(t._dragDetails.current=u,t._dragDetails.position=c,t._handleDropArea(u,c))}if(t._resizeDetails){const i=Math.abs(t._resizeDetails.clientX-e.clientX),r=Math.abs(t._resizeDetails.clientY-e.clientY),n=t._resizeDetails.splitter,s=t._resizeDetails.item,o=t._resizeDetails.itemRect,a=t._resizeDetails.previousItemRect,l=t._resizeDetails.previousItem,d=t._resizeDetails.nextItemRect,c=t._resizeDetails.nextItem,u=parseInt(s.getAttribute("min")),p=e=>{e.classList.contains("smart-visibility-hidden")||(e.style.right="",e.style.top="",e.style.left="",e.style.bottom="")};if(p(n),p(t.$.splitter),n.classList.remove("error"),n.classList.add("active"),!t._resizeDetails.dragging){if(n.classList.contains("horizontal")&&r<=5)return;if(n.classList.contains("vertical")&&i<=5)return;t._resizeDetails.dragging=!0}let m={clientPos:"clientX",pos:"x",size:"width",near:"left",far:"right",offsetSize:"offsetWidth"};n.classList.contains("horizontal")&&(m={clientPos:"clientY",pos:"y",size:"height",near:"top",far:"bottom",offsetSize:"offsetHeight"});const f=e=>{const i=t.offset(e),r=t.offset(t);t.$.splitter.style.width=e.offsetWidth+"px",t.$.splitter.style.height=e.offsetHeight+"px",t.$.splitter.className=e.className,t.$.splitter.style.left=i.left-r.left+"px",t.$.splitter.style.top=i.top-r.top+"px",e.setAttribute("drag",""),t.$.splitter.setAttribute("drag","")};if(n.classList.contains("last")){let i=e[m.clientPos]-t._resizeDetails.splitterRect[m.pos],r=o[m.size]-u;if(i>r&&(i=r,n.classList.add("error")),a){const e=parseInt(l.getAttribute("min"));let t=a[m.size]-e;i<-t&&(i=-t,n.classList.add("error"))}n.style[m.near]=i+"px";const d=s[m.offsetSize]-i;if(s.setAttribute("size",d),l){const e=s[m.offsetSize]+l[m.offsetSize]-d;l.setAttribute("size",e)}}else{let i=-e[m.clientPos]+t._resizeDetails.splitterRect[m.pos],r=o[m.size]-u;if(i>r&&(i=r,n.classList.add("error")),d){const e=parseInt(c.getAttribute("min"));let t=-d[m.size]+e;i<t&&(i=t,n.classList.add("error"))}n.style[m.far]=i+"px";const a=s[m.offsetSize]-i;if(s.setAttribute("size",a),c){const e=c[m.offsetSize]+s[m.offsetSize]-a;c.setAttribute("size",e)}}f(n)}}_offsetTop(e){return e?e.offsetTop+this._offsetTop(e.offsetParent):0}_offsetLeft(e){return e?e.offsetLeft+this._offsetLeft(e.offsetParent):0}offset(e){return{left:this._offsetLeft(e),top:this._offsetTop(e)}}_keyUpHandler(e){const t=this;if("Escape"===e.key){if(t._dragDetails&&(t._dragDetails.feedback.remove(),t._dragDetails.overlay.remove(),t._dragDetails=null,t._handleDropArea(null)),t._resizeDetails){const e=t._resizeDetails;return e.splitter.classList.contains("last")?e.previousItem.size=e.previousItemSize:e.nextItem.size=e.nextItem.previousItemSize,e.item.size=e.itemSize,t.refresh(),t._handleItemClick(e.item),void(t._resizeDetails=null)}}else"Delete"===e.key&&t._selectedItem&&t._removeLayoutItem(t._selectedItem)}_endDrag(){const e=this;if(e._handleDropArea(null),!e._dragDetails.dragging)return void(e._dragDetails=null);const t=e._dragDetails.current,i=e._dragDetails.element,r=e._dragDetails.position;if(e._handleDropArea(null),t){if(e._addTabLayoutItem(t,r,i),e._removeLayoutItem(i),t.parentElement&&1===Array.from(t.parentElement.parentElement.children).filter(e=>!!e.classList.contains("smart-layout-group")).length){const i=t.parentElement,r=i.parentElement,n=r.parentElement;if("root"!==r.getAttribute("data-id")&&"root"!==n.getAttribute("data-id")&&n!==e){const e=Array.from(n.children).indexOf(i.parentElement);e>=0?n.insertBefore(i,n.children[e]):n.appendChild(i),r.remove()}}e.refresh(),e._updateSplitter(),requestAnimationFrame(()=>{e.classList.add("outline"),e.querySelectorAll(".smart-element").forEach(e=>{e.$.fireEvent("resize")})})}e.$.fireEvent("stateChange",{type:"insert",item:i}),e._dragDetails.feedback.remove(),e._dragDetails.overlay.remove(),e._dragDetails=null}_documentUpHandler(e){const t=this,i=Smart.Utilities.Core.isMobile,r=i?document.elementFromPoint(e.pageX-window.pageXOffset,e.pageY-window.pageYOffset):e.originalEvent.target;if(2!==e.button){if(t._dragDetails&&t._endDrag(e),t._resizeDetails){const e=t._resizeDetails;return e.item&&(e.item.style.overflow=""),e.previousItem&&(e.previousItem.style.overflow=""),e.nextItem&&(e.nextItem.style.overflow=""),t.refresh(),t._handleItemClick(e.item),t._resizeDetails=null,void t.querySelectorAll(".smart-element").forEach(e=>{e.$.fireEvent("resize")})}if(t.contains(r)&&(t.classList.add("outline"),t._target&&!r.item&&(r instanceof s?t._handleItemClick(r):t._handleItemClick(r.closest(".smart-layout-item"))),t._target)){if(t._target!==r)return void delete t._target;if(!e.button&&r.closest(".smart-layout-buttons-container")){const i=e.originalEvent.target;t._handleButtonClick(i.item,i.position)}else r.closest(".smart-layout-context-menu")&&(!i&&!e.button||i)&&t._handleMenuItemClick(r.closest(".smart-layout-context-menu-item"));delete t._target}}}_documentSelectStartHandler(e){this._target&&e.preventDefault()}_getDataSource(e,t,n){const s=this;let o=[];n||(n=0),t||(t="");for(let a=0;a<e.length;a++){const l=e[a],d={label:l.label,id:l.getAttribute("data-id"),orientation:l.orientation,size:l.size,min:l.min,type:l.type,modifiers:l.modifiers,position:l.position};if(l.removeAttribute("index"),l instanceof r){if(o.push(d),d.index=""!==t?t+"."+n:n.toString(),l.setAttribute("index",d.index),l.items){const e=s._getDataSource(l.items,d.index,0);d.items=e}}else if(l instanceof i)if(l.items){const e=s._getDataSource(l.items,t,n);o=o.concat(e)}else d.index=""!==t?t+"."+n:n.toString(),l.setAttribute("index",d.index),o.push(d);n++}return o}_getLayout(){const e=this,t=arguments.length?arguments[0]:e.$.itemsContainer;e._buttons&&e._buttons.remove(),e._dropArea&&e._dropArea.remove();const i=e.querySelectorAll(".smart-layout-splitter");for(let t=0;t<i.length;t++){const r=i[t];r!==e.$.splitter&&r.remove()}t.items=Array.from(t.children),t.items=t.items.filter(e=>e!==t.tabs&&e.hasAttribute("data-id"));const n=t.items.map((function(t){if(t.classList.contains("smart-layout-tab-strip"))return null;const i=t,n=t instanceof r?t:null;return n&&(i.items=e._getLayout(n)),i}));if(t!==e.$.itemsContainer)return n.filter(e=>null!==e&&e!==t.tabs);const s=[],o=t;return o.items=n.filter(e=>null!==e&&e!==t.tabs),s.push(o),s}_updateSplitter(){const e=this;e._buttons&&e._dragDetails&&e._buttons.remove(),e._removeSplitter();const t=e.querySelectorAll("[data-id]");for(let i=0;i<t.length;i++){const r=t[i];if("root"!==r.getAttribute("data-id")){if(r.hasAttribute("role")){const e=r.getAttribute("role");if("gridcell"===e||"row"===e||"columnheader"===e||"rowheader"===e)continue}r.setAttribute("hover",""),e._handleSplitter(r)}}}_hideSplitter(){const e=this.querySelectorAll("[data-id]");for(let t=0;t<e.length;t++){e[t].removeAttribute("hover")}}_removeSplitter(){const e=this,t=e.querySelectorAll(".smart-layout-splitter");for(let i=0;i<t.length;i++){const r=t[i];r!==e.$.splitter&&r.remove()}e._hideSplitter()}_handleItemClick(e){const t=this,i=t.selectedIndex;let r=null;return e?(r=e instanceof HTMLElement?e:t.querySelector("[data-id="+e.id+"]"),r&&r.readonly?(t._closeContextMenu(),void(t.selectedIndex=null)):(t.querySelectorAll("[data-id]").forEach(e=>e.removeAttribute("selected")),t._closeContextMenu(),void(r?(t.selectedIndex=r.getAttribute("index"),r.setAttribute("selected",""),r.setAttribute("hover",""),t._selectedItem=r,r.classList.contains("smart-hidden")&&t.refresh(),t._handleButtonsVisibility(r),i!==t.selectedIndex&&t.$.fireEvent("change",{selectedIndex:t.selectedIndex,oldSelectedIndex:i}),t._updateSplitter()):t.refresh()))):(t._closeContextMenu(),t.selectedIndex=null,t.querySelectorAll("[data-id]").forEach(e=>e.removeAttribute("selected")),void(t._selectedItem=null))}_handleButtonClick(e,t){const i=this._addLayoutItem(e,t);this.$.fireEvent("stateChange",{type:"insert",item:i}),this._handleItemClick(i,!0)}_handleMenuItemClick(e){const t=this;if(!e||e.hasAttribute("disabled"))return;const i=e.getAttribute("value"),r=t._contextMenu;t.$.fireEvent("menuItemClick",{target:r?r._target:null,item:e,label:e.textContent,value:i});const n=r._target;n&&("select"===i&&t._handleItemClick(n.parentElement?n.parentElement:n),"delete"===i&&t._removeLayoutItem(n))}_removeLayoutItem(e){const t=this;if("root"!==e.getAttribute("data-id")){if(e instanceof i&&1===e.parentElement.items.length){let i=e.parentElement,r=i;for(;i&&i.items&&1===i.items.length&&"root"!==i.getAttribute("data-id");)r=i,i=i.parentElement;"root"!==r.getAttribute("data-id")?r.remove():t.allowLiveSplit&&r.appendChild(document.createElement("smart-layout-item"))}else e.remove();t.refresh(),t.$.fireEvent("stateChange",{type:"delete",item:e})}}refresh(){const e=this;if(e._isUpdating)return;e.dataSource=e._getDataSource(e._getLayout()),e.$.splitter.className="smart-visibility-hidden smart-layout-splitter";const t=t=>{const i=e.getItem(t.getAttribute("index"));if(!i)return;t.style.gridTemplateColumns="",t.style.gridTemplateRows="";let r="",o=0,a=0;if(t instanceof n){t.tabs&&t.tabs.remove();const r=document.createElement("div");r.classList.add("smart-layout-tab-strip"),e._selectedItem&&t.contains(e._selectedItem)&&e._selectedItem instanceof s&&(t.selectedIndex=Math.max(0,t.items.indexOf(e._selectedItem))),t.selectedIndex>=t.children.length&&(t.selectedIndex=0);for(let n=0;n<t.children.length;n++){const s=t.children[n],o=e.getItem(s.getAttribute("index"));if(!o)continue;const a=document.createElement("div");a.classList.add("smart-layout-tab"),a.innerHTML="<label>"+o.label+'</label><span class="smart-close-button"></span>',r.appendChild(a),s.setAttribute("tab",""),s.classList.add("smart-hidden"),a.content=s,a.item=o,a.group=i,s.modifiers?-1===s.modifiers.indexOf("close")&&a.querySelector(".smart-close-button").classList.add("smart-hidden"):a.querySelector(".smart-close-button").classList.add("smart-hidden"),void 0!==t.selectedIndex&&n!==t.selectedIndex||(a.classList.add("selected"),s.classList.remove("smart-hidden"),t.selectedIndex=n),a.onpointerup=function(i){i.target.classList.contains("smart-close-button")&&a.close&&(t.selectedIndex=0,e._removeLayoutItem(e._selectedItem),e._handleItemClick(parent))},a.onpointerdown=function(t){const i=this.closest(".smart-layout-group");e._handleItemClick(this.content),a.close=!1,t.target.classList.contains("smart-close-button")?a.close=!0:o.modifiers&&o.modifiers.indexOf("drag")>=0&&e._beginDrag(i,this,t)}}t.tabs=r,"top"===i.position||"left"===i.position?t.insertBefore(r,t.firstChild):t.appendChild(r)}else{for(let e=0;e<t.children.length;e++){const i=t.children[e];if(i.hasAttribute("size")){const e=i.getAttribute("size"),n=parseFloat(e),s="vertical"===t.orientation?t.offsetWidth:t.offsetHeight,l=e.indexOf("%")>=0?parseFloat(e):parseFloat(n/s*100);if(o+=l,a++,a===t.children.length){if(o<100){r+="1fr ",o=100;continue}}else if(o>100||0===l){a=t.children.length,o=0;break}r+=l+"% "}else r+="1fr "}if(a===t.children.length&&(o<99||o>100)){r="";for(let e=0;e<t.children.length;e++){t.children[e].removeAttribute("size"),r+="1fr "}}"vertical"===t.orientation?t.style.gridTemplateColumns=r:t.style.gridTemplateRows=r}t.items=Array.from(t.children),t.items=t.items.filter(e=>e!==t.tabs)},i=e.querySelectorAll(".smart-layout-group");for(let e=0;e<i.length;e++)t(i[e])}_beginDrag(e,t,i){const r=this;r._dragDetails&&r._dragDetails.feedback.remove();const n=document.createElement("div"),s=document.createElement("div"),o=e.querySelector(".smart-layout-tab-strip");let a="";if(o)for(let t=0;t<Array.from(o.children).length;t++)t===e.selectedIndex&&(a=o.children[t].innerText);n.innerHTML=`<smart-layout><smart-tab-layout-group><smart-tab-layout-item label="${a}"></smart-tab-layout-item></smart-tab-layout-group></smart-layout>`,r._feedback=n,r._feedback.classList.add("smart-layout-feedback","smart-layout"),s.classList.add("smart-layout-overlay"),r._dragDetails={element:t.content,item:t.item,layoutGroup:t.group,parent:e,overlay:s,feedback:n,pageX:i.pageX,pageY:i.pageY}}moveChildren(e,t){t.innerHTML="";let i=e;for(;i.firstChild;){const e=i.firstChild;t.appendChild(e)}}createLayoutItem(e,t){const i=this;return"layoutItem"!==e&&e?"tabLayoutItem"!==e&&e?"tabLayoutGroup"===e?(e=>{const t=document.createElement("smart-tab-layout-group"),r="top"===e||"bottom"===e?"horizontal":"vertical";return t.setAttribute("orientation",r),t.orientation=r,i.$.fireEvent("createGroup",{item:t,type:"tabLayoutGroup"}),t})(t):(e=>{const t=document.createElement("smart-layout-group"),r="top"===e||"bottom"===e?"horizontal":"vertical";return i.$.fireEvent("createGroup",{item:t,type:"layoutGroup"}),t.setAttribute("orientation",r),t.orientation=r,t})(t):(()=>{const e=document.createElement("smart-tab-layout-item");return e.innerHTML="",i.$.fireEvent("createItem",{item:e,type:"tabLayoutItem"}),e})():(()=>{const e=document.createElement("smart-layout-item");return e.innerHTML="",i.$.fireEvent("createItem",{item:e,type:"layoutItem"}),e})()}_addTabLayoutItem(e,t,o){const a=this,l=a.createLayoutItem("tabLayoutItem"),d=e.closest("smart-tab-layout-group");let c;o&&(l.label=o.label,l.modifiers=o.modifiers,a.moveChildren(o,l));const u=e=>{for(let t=0;t<e.children.length;t++){e.children[t].removeAttribute("size")}e.removeAttribute("size")},p=t=>{if(e.removeAttribute("size"),e.querySelector("smart-layout-group"))a._addLayoutItem(e.querySelector("smart-layout-group"),t);else{c=a.createLayoutItem("layoutGroup",t);const i=a.createLayoutItem();a.moveChildren(e,i),"top"===t||"left"===t?(c.appendChild(a.createLayoutItem()),c.appendChild(i)):(c.appendChild(i),c.appendChild(a.createLayoutItem())),e.appendChild(c)}},m=(t,i)=>{const r=e.parentElement,n=e,s=a.createLayoutItem("layoutGroup",i);r.insertBefore(s,n),"top"===i||"left"===i?(s.append(t),s.appendChild(n)):(s.appendChild(n),s.append(t)),"root"===n.getAttribute("data-id")&&(n.setAttribute("data-id",s.getAttribute("data-id")),s.setAttribute("data-id","root"),a.$.itemsContainer=s),u(n),u(r)};if(o)switch(t){case"center":if(e instanceof n||e instanceof s)d.appendChild(l);else{const t=a.createLayoutItem("tabLayoutGroup","top");t.appendChild(l),e instanceof r&&!(e instanceof s)?(e.appendChild(t),u(e)):e instanceof i&&(c=a.createLayoutItem("layoutGroup"),e.parentElement.insertBefore(c,e),c.appendChild(e),c.appendChild(t),u(c))}break;case"left":case"right":{const i=a.createLayoutItem("tabLayoutGroup","top");i.appendChild(l),"root"===e.getAttribute("data-id")?(i.position=t,m(i,t)):m(i,t)}break;case"top":case"bottom":{const i=a.createLayoutItem("tabLayoutGroup","top");i.appendChild(l),"root"===e.getAttribute("data-id")?(i.position=t,m(i,t)):m(i,t);break}}else{switch(t){case"center":e instanceof n||e instanceof s?d.appendChild(l):p();break;case"left":case"right":if(e instanceof n){const i=e.querySelector("smart-tab-layout-item");i&&"left"===t?e.insertBefore(l,i):e.appendChild(l)}else if(e instanceof s){const i=a.createLayoutItem("tabLayoutGroup","top"),r=e.parentElement;i.appendChild(l),c=a.createLayoutItem("layoutGroup"),r.parentElement.insertBefore(c,r),"right"===t?(c.appendChild(r),c.appendChild(i)):"left"===t&&(c.appendChild(i),c.appendChild(r))}else if(o){const t=a.createLayoutItem("tabLayoutGroup","top");t.appendChild(l),e instanceof r?e.insertBefore(e.firstChild,t):e instanceof i&&(c=a.createLayoutItem("layoutGroup"),c.orientation=d.orientation,c.setAttribute("orientation",d.orientation),e.removeAttribute("size"),e.parentElement.insertBefore(c,e),c.appendChild(e),c.appendChild(t))}else p(t);break;case"top":case"bottom":e instanceof n?(c=a.createLayoutItem("layoutGroup","top"),e.removeAttribute("size"),e.parentElement.insertBefore(c,e),"top"===t?(c.appendChild(a.createLayoutItem()),c.appendChild(e)):(c.appendChild(e),c.appendChild(a.createLayoutItem()))):p(t)}a.refresh()}}_addLayoutItem(e,t,o){const a=this;if(!e)return;const l=e=>{for(let t=0;t<e.children.length;t++){e.children[t].removeAttribute("size")}e.removeAttribute("size")};if(e instanceof s||e instanceof n||o&&o instanceof s)return a._addTabLayoutItem(e,t,o);const d=a.createLayoutItem(),c=e.closest(".smart-layout-group");let u;if(o&&a.moveChildren(o,d),"center"===t){if(e instanceof r)return u=c,u.appendChild(d),l(u),a.refresh(),d;if(e instanceof i)return u=a.createLayoutItem("layoutGroup"),u.orientation=c.orientation,u.setAttribute("orientation",c.orientation),e.removeAttribute("size"),e.parentElement.insertBefore(u,e),u.appendChild(e),u.appendChild(d),a.refresh(),u}if("vertical"===c.orientation&&("left"===t||"right"===t)||"horizontal"===c.orientation&&("top"===t||"bottom"===t))if(u=c,e instanceof r)"left"===t||"top"===t?u.insertBefore(d,u.children[0]):u.appendChild(d),l(e);else{const i=u.items,r=Math.max(0,i.indexOf(e)+("top"===t||"left"===t?0:1));u.insertBefore(d,i[r]),l(u)}else if(e instanceof r){const i=e.parentElement,r=e,n=a.createLayoutItem("layoutGroup",t);i.insertBefore(n,r),"top"===t||"left"===t?(n.append(d),n.appendChild(r)):(n.appendChild(r),n.append(d)),"root"===r.getAttribute("data-id")&&(r.setAttribute("data-id",n.getAttribute("data-id")),n.setAttribute("data-id","root"),a.$.itemsContainer=n),l(i)}else u=a.createLayoutItem("layoutGroup",t),c.insertBefore(u,e),"top"===t||"left"===t?(u.appendChild(d),u.appendChild(e)):(u.appendChild(e),u.appendChild(d)),l(u);return a.refresh(),d}_handleButtonsVisibility(e){const t=this;if(t._buttons||(t._buttons=document.createElement("div"),t._buttons.classList.add("smart-layout-buttons-container"),t._buttons.innerHTML='<div role="button" position="top"></div>\n                                       <div role="button" position="bottom"></div>\n                                       <div role="button" position="center"></div>\n                                       <div role="button" position="left"></div>\n                                       <div role="button" position="right"></div>'),e||!t._buttons.parentElement){if(e){const i=e._buttonPosition||[],r=t._buttons.children;for(let t=0;t<r.length;t++){const n=r[t];n.position=n.getAttribute("position"),n.item=e,i.length&&i.indexOf(n.getAttribute("position"))<0?n.classList.add("smart-hidden"):n.classList.remove("smart-hidden"),n.onmouseenter=()=>{n.setAttribute("hover","")},n.onmouseleave=()=>{n.removeAttribute("hover")}}t.allowLiveSplit&&t._buttons.parentElement!==e&&e.appendChild(t._buttons)}}else t._buttons.parentElement.removeChild(t._buttons)}_handleDropArea(e,t="center"){const i=this,r=e=>{switch(e){case"left":i._dropArea.style.top="0px",i._dropArea.style.left="0px",i._dropArea.style.width="50%",i._dropArea.style.height="100%";break;case"right":i._dropArea.style.top="0px",i._dropArea.style.left="calc(100% - 50%)",i._dropArea.style.width="50%",i._dropArea.style.height="100%";break;case"top":i._dropArea.style.top="0px",i._dropArea.style.left="0px",i._dropArea.style.width="100%",i._dropArea.style.height="50%";break;case"bottom":i._dropArea.style.top="calc(100% - 50%)",i._dropArea.style.left="0px",i._dropArea.style.width="100%",i._dropArea.style.height="50%";break;case"center":i._dropArea.style.top="0px",i._dropArea.style.left="0px",i._dropArea.style.width="100%",i._dropArea.style.height="100%"}};i._dropArea&&i._dropArea.parentElement===e?r(t):(i._dropArea&&i._dropArea.remove(),i._dragDetails&&e&&(i._dropArea=document.createElement("div"),i._dropArea.classList.add("smart-layout-drop-area"),e.appendChild(i._dropArea),i._dropArea.style.opacity=1,r(t)))}_handleSplitter(e){const t=this;if(!e)return;if(e.hasAttribute("tab")&&(e=e.parentElement),e._splitter&&e._splitter.remove(),e._splitter||(e._splitter=document.createElement("div")),t._dragDetails&&t._dragDetails.dragging)return void e._splitter.remove();if(-1===e.modifiers.indexOf("resize"))return;e.appendChild(e._splitter);const i=e.parentElement;if(i){e._splitter.className="smart-layout-splitter",e._splitter.item=e,e._splitter.removeAttribute("drag");const r=i.orientation;e.nextElementSibling&&e.nextElementSibling.hasAttribute("data-id")?e._splitter.classList.add(r):e.previousElementSibling&&e.previousElementSibling.hasAttribute("data-id")&&(e._splitter.classList.add(r),e._splitter.classList.add("last")),(e=>{e.style.top="",e.style.left="",e.style.bottom="",e.style.right="",e.onpointerdown=e=>{const i=e.target.item;i.style.overflow="hidden",t._resizeDetails={splitter:e.target,splitterRect:e.target.getBoundingClientRect(),itemRect:i.getBoundingClientRect(),item:i,itemSize:i.size,group:i.parentElement,clientX:e.clientX,clientY:e.clientY},t._selectedItem!==i&&(t.querySelectorAll("[data-id]").forEach(e=>e.removeAttribute("selected")),t.selectedIndex=i.getAttribute("index"),i.setAttribute("selected",""),t._selectedItem=i,t._handleButtonsVisibility(i)),i.previousElementSibling&&i.previousElementSibling.hasAttribute("data-id")?(t._resizeDetails.previousItemRect=i.previousElementSibling.getBoundingClientRect(),t._resizeDetails.previousItem=i.previousElementSibling,t._resizeDetails.previousItemSize=i.previousElementSibling.size,t._resizeDetails.previousItem.style.overflow="hidden"):(t._resizeDetails.previousItemRect=null,t._resizeDetails.previousItem=null),i.nextElementSibling&&i.nextElementSibling.hasAttribute("data-id")?(t._resizeDetails.nextItemRect=i.nextElementSibling.getBoundingClientRect(),t._resizeDetails.nextItem=i.nextElementSibling,t._resizeDetails.nextItemSize=i.nextElementSibling.size,t._resizeDetails.nextItem.style.overflow="hidden"):(t._resizeDetails.nextItemRect=null,t._resizeDetails.nextItem=null)}})(e._splitter)}}})}});