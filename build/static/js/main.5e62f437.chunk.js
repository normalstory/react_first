(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),s=n.n(o),c=(n(14),n(1)),r=n(2),l=n(4),u=n(3),d=n(5),h=(n(15),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log("sub render"),i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),this.props.onChangePage()}.bind(this)},this.props.title)),this.props.sub)}}]),t}(a.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){console.log("TOC render");for(var e=[],t=this.props.data,n=0;n<t.length;)e.push(i.a.createElement("li",{key:t[n].id},i.a.createElement("a",{href:"/content/"+t[n].id,"data-skdjfnsdkfj":t[n].id,onClick:function(e,t){t.preventDefault(),this.props.onChangePage(e)}.bind(this,t[n].id)}," ",t[n].title)," ")),n+=1;return i.a.createElement("nav",null,i.a.createElement("ul",null,e))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log("app render"),i.a.createElement("article",null,i.a.createElement("h2",null,this.props.title),this.props.desc)}}]),t}(a.Component),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={mode:"read",welcome:{title:"welcome",desc:"hello react"},selected_content_id:1,subject:{title:"WEB",sub:"world wide web !"},content:[{id:1,title:"HTML",desc:"HTML is HyperText "},{id:2,title:"CSS",desc:"Css is for design "},{id:3,title:"JS",desc:"javascript is for intrective "}]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){console.log("APP render & this is : ",this);var e,t=null;if("welcome"===this.state.mode)e=this.state.welcome.title,t=this.state.welcome.desc;else if("read"===this.state.mode)for(var n=0;n<this.state.content.length;){var a=this.state.content[n];if(a.id===this.state.selected_content_id){e=a.title,t=a.desc;break}n++}return i.a.createElement("div",{className:"App"},i.a.createElement(h,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),i.a.createElement(p,{data:this.state.content,onChangePage:function(e){this.setState({mode:"read",selected_content_id:Number(e)})}.bind(this)}),i.a.createElement(b,{title:e,desc:t}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.5e62f437.chunk.js.map