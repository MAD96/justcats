(this["webpackJsonpcat-api"]=this["webpackJsonpcat-api"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),c=a(8),s=a.n(c),r=(a(13),a(14),a(2)),o=a(3),l=a(5),h=a(4),u=a(0),d=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).onClick=function(){var e=t.props,a=e.label;(0,e.onClick)(a)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.onClick,e=this.props,a=e.activeTab,n=e.label,i="tab-list-item";return a===n&&(i+=" tab-list-active"),Object(u.jsx)("li",{className:i,onClick:t,children:n})}}]),a}(n.Component),j=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).onClickTabItem=function(t){n.setState({activeTab:t})},n.state={activeTab:n.props.children[0].props.label},n}return Object(o.a)(a,[{key:"render",value:function(){var t=this.onClickTabItem,e=this.props.children,a=this.state.activeTab;return Object(u.jsxs)("div",{className:"tabs",children:[Object(u.jsx)("ol",{className:"tab-list",children:e.map((function(e){var n=e.props.label;return Object(u.jsx)(d,{activeTab:a,label:n,onClick:t},n)}))}),Object(u.jsx)("div",{className:"tab-content",children:e.map((function(t){if(t.props.label===a)return t.props.children}))})]})}}]),a}(n.Component),p=a(6),b="fetching",m="fetched",f="c50f46cf-8ed0-402c-a5be-d41c7f559deb",g=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={images:[],loadingState:b,page:0,limit:10},t.loadMore=function(){t.setState((function(t){return{page:t.page+1}}),(function(){fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(t.state.limit,"&page=").concat(t.state.page),{headers:{"Content-Type":"application/json","x-api-key":f}}).then((function(t){return t.json()})).then((function(e){t.setState({images:[].concat(Object(p.a)(t.state.images),Object(p.a)(e.map((function(t){return{id:t.id,url:t.url}}))))})}))}))},t.getRandomCat=function(){t.setState({loadingState:b}),fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(t.state.limit,"&page=").concat(t.state.page),{headers:{"Content-Type":"application/json","x-api-key":"4bebae0d-0ec4-4787-8e77-8602741525af"}}).then((function(t){return t.json()})).then((function(e){t.setState({images:e.map((function(t){return{id:t.id,url:t.url}})),loadingState:m})}))},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getRandomCat()}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"gallery",children:[this.state.loadingState!==m&&Object(u.jsx)("div",{className:"loader",children:"Cute cats incoming..."}),this.state.loadingState!==b&&this.state.images.length>0&&this.state.images.map((function(e){return Object(u.jsxs)("div",{className:"imagePlaceholder",children:[Object(u.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{src:e.url,alt:"Cat"})}),console.log(t.state.images)]},e.id)})),this.state.loadingState===m&&Object(u.jsx)("button",{onClick:this.loadMore,children:"Show more"})]})}}]),a}(i.a.Component),O="fetching",v="fetched",x="c50f46cf-8ed0-402c-a5be-d41c7f559deb",y=(Math.abs(Math.floor(15*Math.random())),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={images:[],loadingState:O,page:0,limit:10},t.loadMore=function(){t.setState((function(t){return{page:t.page+1}}),(function(){fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(t.state.limit,"&page=").concat(t.state.page),{headers:{"Content-Type":"application/json","x-api-key":x}}).then((function(t){return t.json()})).then((function(e){t.setState({images:[].concat(Object(p.a)(t.state.images),Object(p.a)(e.map((function(t){return{id:t.id,url:t.url}}))))})}))}))},t.getRandomCat=function(){t.setState({loadingState:O}),fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(t.state.limit,"&page=").concat(t.state.page),{headers:{"Content-Type":"application/json","x-api-key":"4bebae0d-0ec4-4787-8e77-8602741525af"}}).then((function(t){return t.json()})).then((function(e){t.setState({images:e.map((function(t){return{id:t.id,url:t.url}})),loadingState:v})}))},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getRandomCat()}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"gallery",children:[this.state.loadingState!==v&&Object(u.jsx)("div",{className:"loader",children:"Cute cats incoming..."}),this.state.loadingState!==O&&this.state.images.length>0&&this.state.images.map((function(e){return Object(u.jsxs)("div",{className:"imagePlaceholder",children:[Object(u.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{src:e.url,alt:"Cat"})}),console.log(t.state.images)]},e.id)})),this.state.loadingState===v&&Object(u.jsx)("button",{onClick:this.loadMore,children:"Show more"})]})}}]),a}(i.a.Component));var C=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Les cats"}),Object(u.jsxs)(j,{children:[Object(u.jsx)("div",{className:"tab",label:"All cats",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{style:{display:"flex",justifyContent:"center"},children:"Cute little companions"}),Object(u.jsx)(g,{})]})}),Object(u.jsx)("div",{className:"tab",label:"Filter by:",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Then I have to figure out how to filter them"}),Object(u.jsx)(y,{})]})})]})]})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d0ebe0a8.chunk.js.map