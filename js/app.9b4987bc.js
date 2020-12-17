(function(e){function t(t){for(var n,c,u=t[0],i=t[1],a=t[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&f.push(l[c][0]),l[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==l[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},l={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/trello-to-scrumblr/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0a7b":function(e,t,r){"use strict";r("73b7")},"447e":function(e,t,r){"use strict";r("8055")},"73b7":function(e,t,r){},8055:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),l=Object(n["f"])("footer",null,[Object(n["e"])(" Julien Maulny - "),Object(n["f"])("a",{href:"https://twitter.com/alcalyn_",target:"_blank"},"@alcalyn"),Object(n["e"])(" - "),Object(n["f"])("a",{href:"https://github.com/alcalyn/trello-to-scrumblr",target:"_blank"},"See project on Github")],-1);function o(e,t,r,o,c,u){var i=Object(n["m"])("TrelloToScrumblr");return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])("main",null,[Object(n["f"])(i)]),l])}var c=r("d4ec"),u=r("262e"),i=r("2caf"),a=r("9ab4"),s=r("ce1f"),d=(r("b0c0"),Object(n["r"])("data-v-4dd4f468"));Object(n["j"])("data-v-4dd4f468");var f=Object(n["f"])("h1",null,"Trello to Scrumblr",-1),b=Object(n["f"])("h2",null,"Import from Trello",-1),p=Object(n["f"])("p",null,"Export your Trello board as JSON, then drop it here:",-1),h=Object(n["f"])("br",null,null,-1),O={key:0},j=Object(n["f"])("h2",null,"Export to Scrumblr",-1),m=Object(n["f"])("h3",null,"Only columns",-1),y=Object(n["f"])("p",null,' Unselect Trello columns you want to ignore (i.e "Done" column): ',-1),v=Object(n["f"])("h3",null,"Update Scrumblr board",-1),x=Object(n["f"])("p",null,[Object(n["f"])("i",null,"Ignore this if you are creating a new board."),Object(n["f"])("br"),Object(n["e"])(" To update an already exported board using this tool, export the Scrumblr board you want to update and drop it here: ")],-1),g=Object(n["f"])("br",null,null,-1),w={key:0},E=Object(n["f"])("h3",null,"How to handle deleted cards in Trello ?",-1),S=Object(n["f"])("p",null," If you deleted some Trello cards since the last time you exported it to Scrumblr, how to handle obsolete post-its? ",-1),T=Object(n["f"])("option",{value:"change-color"},"Change post-it color",-1),k=Object(n["f"])("option",{value:"delete"},"Delete post-it",-1),P=Object(n["f"])("br",null,null,-1);Object(n["h"])();var F=d((function(e,t,r,l,o,c){return Object(n["g"])(),Object(n["c"])("div",null,[f,Object(n["f"])("section",null,[b,p,Object(n["f"])("input",{type:"file",ref:"trelloExportInput",onChange:t[1]||(t[1]=function(){return e.selectedTrelloFile&&e.selectedTrelloFile.apply(e,arguments)})},null,544),h]),e.trelloExport?(Object(n["g"])(),Object(n["c"])("section",O,[j,m,y,Object(n["f"])("ul",null,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(e.exportLists,(function(t){return Object(n["g"])(),Object(n["c"])("li",{key:t.list.id},[Object(n["f"])("label",null,[Object(n["q"])(Object(n["f"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return t.export=e}},null,8,["onUpdate:modelValue"]),[[n["o"],t.export]]),Object(n["e"])(" "+Object(n["n"])(t.list.name)+" ("+Object(n["n"])(e.cardsInList(t.list).length)+" cards) ",1)])])})),128))]),v,x,Object(n["f"])("input",{type:"file",ref:"scrumblrExportInput",onChange:t[2]||(t[2]=function(){return e.selectedScrumblrFile&&e.selectedScrumblrFile.apply(e,arguments)})},null,544),g,e.scrumblrExport?(Object(n["g"])(),Object(n["c"])("div",w,[E,S,Object(n["q"])(Object(n["f"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.deletedCardsPolicy=t})},[T,k],512),[[n["p"],e.deletedCardsPolicy]])])):Object(n["d"])("",!0),P,Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return e.downloadScrumblrExport&&e.downloadScrumblrExport.apply(e,arguments)})},"Download Scrumblr export")])):Object(n["d"])("",!0)])})),I=(r("4de4"),r("d81d"),r("bee2")),A=(r("d3b7"),r("96cf"),r("1da1")),C=function(){function e(){Object(c["a"])(this,e)}return Object(I["a"])(e,[{key:"downloadAsTextFile",value:function(e,t){var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),r.setAttribute("download",t),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}},{key:"loadJsonFromInputFile",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.files&&0!==t.files.length){e.next=2;break}return e.abrupt("return",Promise.reject("no file"));case 2:return r=t.files[0],n=new FileReader,n.readAsText(r,"UTF-8"),e.abrupt("return",new Promise((function(e,t){n.onload=function(r){if(r.target){var n=r.target.result;if(n)try{e(JSON.parse(""+n))}catch(l){t("This file is not a Json export")}else t("no file text")}else t("no event target")}})));case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),L=new C,_=(r("4160"),r("caad"),r("2532"),r("159b"),function(){function e(){Object(c["a"])(this,e)}return Object(I["a"])(e,[{key:"createNewScrumblrExport",value:function(){return{cards:[],columns:[],theme:"smallcards",size:{width:1110,height:466}}}},{key:"checkTrelloExport",value:function(e){var t=e,r=new Error("This file seems not to be a JSON Trello export");if(!t.cards||!Array.isArray(t.cards))throw r;if(!t.lists||!Array.isArray(t.lists))throw r;return t}},{key:"checkScrumblrExport",value:function(e){var t=e,r=new Error("This file seems not to be a JSON Scrumblr export");if(!t.cards||Array.isArray(!t.cards))throw r;if(!t.columns||Array.isArray(!t.columns))throw r;return t}},{key:"generateScrumblrFromTrello",value:function(t){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null===l&&(l=this.createNewScrumblrExport()),null===n&&(n=e.DEFAULT_OPTIONS);var o=l,c={};t.lists.forEach((function(e){c[e.id]=e}));var u=t.cards.filter((function(e){return!c[e.idList].closed})).filter((function(e){return!e.closed}));null!==n.idLists&&(u=u.filter((function(e){var t,r;return null===(t=n)||void 0===t||null===(r=t.idLists)||void 0===r?void 0:r.includes(e.idList)}))),u.forEach((function(e){var t=o.cards.filter((function(t){return t.id===e.id})).pop();t?t.text=e.name:o.cards.push(r.createPostit(e.id,e.name))}));var i=u.map((function(e){return e.id}));return"delete"===n.deletedCardsPolicy&&(o.cards=o.cards.filter((function(e){return i.includes(e.id)}))),"change-color"===n.deletedCardsPolicy&&o.cards.filter((function(e){return!i.includes(e.id)})).forEach((function(e){return e.colour="yellow"})),o}},{key:"createPostit",value:function(e,t){return{id:e,colour:"blue",rot:0,x:1,y:1,text:t,sticker:null}}}]),e}());_.DEFAULT_OPTIONS={idLists:null,deletedCardsPolicy:"change-color"};var J=new _,N=function(e){Object(u["a"])(r,e);var t=Object(i["a"])(r);function r(){var e;return Object(c["a"])(this,r),e=t.apply(this,arguments),e.trelloExport=null,e.scrumblrExport=null,e.exportLists=[],e.deletedCardsPolicy="change-color",e}return Object(I["a"])(r,[{key:"selectedTrelloFile",value:function(){var e=this;L.loadJsonFromInputFile(this.$refs.trelloExportInput).then(J.checkTrelloExport).then((function(t){e.trelloExport=J.checkTrelloExport(t),e.exportLists=e.trelloExport.lists.filter((function(e){return!e.closed})).map((function(e){return{list:e,export:!0}}))})).catch(alert)}},{key:"selectedScrumblrFile",value:function(){var e=this;L.loadJsonFromInputFile(this.$refs.scrumblrExportInput).then(J.checkScrumblrExport).then((function(t){return e.scrumblrExport=t})).catch(alert)}},{key:"cardsInList",value:function(e){if(!this.trelloExport)throw new Error("Trello export not yet loaded");return this.trelloExport.cards.filter((function(e){return!e.closed})).filter((function(t){return t.idList===e.id}))}},{key:"downloadScrumblrExport",value:function(){if(null===this.trelloExport)throw new Error("Trello export not yet loaded");var e={idLists:this.exportLists.filter((function(e){return e.export})).map((function(e){return e.list.id})),deletedCardsPolicy:this.deletedCardsPolicy},t=J.generateScrumblrFromTrello(this.trelloExport,e,this.scrumblrExport);L.downloadAsTextFile(JSON.stringify(t),"trello-to-scrumblr.json")}}]),r}(s["b"]);N=Object(a["a"])([Object(s["a"])({props:{msg:String}})],N);var U=N;r("0a7b");U.render=F,U.__scopeId="data-v-4dd4f468";var D=U,M=function(e){Object(u["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(s["b"]);M=Object(a["a"])([Object(s["a"])({components:{TrelloToScrumblr:D}})],M);var R=M;r("447e");R.render=o;var V=R;Object(n["b"])(V).mount("#app")}});
//# sourceMappingURL=app.9b4987bc.js.map