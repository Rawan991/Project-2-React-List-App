(this["webpackJsonpart-app"]=this["webpackJsonpart-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(35),a(29)),o=a.n(l),c=(a(39),a(15)),i=a(2),u=a(3),s=a(5),h=a(4),m=a(6),d=(a(40),a(11)),p=a(12),v=a(30),f=a.n(v),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChangeInputText=function(e){console.log("On Text Change",e.target.value),a.setState({term:e.target.value})},a.handleChangeTextarea=function(e){console.log("On Text Change",e.target.value),a.setState({object:e.target.value})},a.state={term:"",object:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Literature Title",value:this.state.term,onChange:this.handleChangeInputText}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{name:"Literature",rows:"10",cols:"30",value:this.state.object,onChange:this.handleChangeTextarea}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Post",onClick:function(){return e.props.addNewItem(e.state.term,e.state.object)}}))}}]),t}(r.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.literaturelines.map((function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.lines))}));return r.a.createElement("div",null,r.a.createElement("fieldset",null,e," "))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={deleteSelect:[],checked:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.faves.map((function(t,a){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"oneBookTitle",value:e.props.checkes}),r.a.createElement("button",{onClick:function(){return e.props.deletedbook()}},"Select to delete"," "),t)})),r.a.createElement("button",{onClick:function(){return e.props.clickToRemoveAll()}}," Clear "),r.a.createElement("br",null))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).inputSearchChange=function(e){var t=e.target.value;a.setState({searchOfTitle:t})},a.handleSearch=function(e){var t=a.props.literatureBook.filter((function(e){return e.title.toLowerCase().includes(a.state.searchOfTitle.toLowerCase())}));a.props.toFiltervalue(t)},a.state={searchOfTitle:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.literatureBook.map((function(t,a){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/LinesOfAuthor/".concat(a.title)},t.title," ")),r.a.createElement("button",{onClick:function(){e.props.handleFaveToggle(t.title)}},"Fave"))}));return r.a.createElement("div",null,r.a.createElement("p",null," ","There\u2019s no doubt that Shakespeare has influenced English literature enormously, from his impact on other authors, his addition of thousands of words and phrases to the language, and the continued reinterpretation of his plots, again and again. In this section of the site, we go beyond Shakespeare to look at English literature more broadly. We explore how we use the English language, and delve into the very best writers and works in the English language."),r.a.createElement("input",{placeholder:"serch Here of title",type:"text",value:this.state.searchOfTitle,onChange:function(t){return e.inputSearchChange(t)}}),r.a.createElement("button",{onClick:this.handleSearch}," Search "),r.a.createElement("button",{className:"AddNew"}," ",r.a.createElement(d.b,{to:"/AddNewLiterature"}," Add New ")," "),r.a.createElement("ul",null,t))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Aboutit"},r.a.createElement("h1",null," About it "),r.a.createElement("img",{className:"wil",src:"/.github.io/Project-2-React-List-AppShakespeare.jpg",alt:""}),r.a.createElement("label",null,r.a.createElement("ol",null,r.a.createElement("li",null,"Parents: John Shakespeare & Mary Shakespeare (nee Arden)."),r.a.createElement("li",null,"Date of Birth: Generally accepted as 23rd April 1564. Shakespeare was baptised on 26th April, 1564."),r.a.createElement("li",null,"Wife: Anne Hathaway (married 1582)."),r.a.createElement("li",null,"Children: Susanna (born 1583), Hamnet & Judith (twins, born 1585)."),r.a.createElement("li",null,"Resided: Born and raised in Stratford-Upon-Avon. Prime working years spent away from family in London. Returned to family in Stratford-Upon-Avon upon retirement."),r.a.createElement("li",null,"Career: Writer, actor, theatre owner and producer."),r.a.createElement("li",null,"Body of Work: 37 plays. 149 sonnets. 2 long narrative poems."),r.a.createElement("li",null,"Died: 23 April 1616, aged 52. Buried at Holy Trinity Church in Stratford-upon-Avon."))))}}]),t}(r.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"/")}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).toRemoveItem=function(e){var t=a.state.faves.slice(),n=t.find(e);console.log(t),console.log(n),t.splice(n,1),a.setState({faves:t})},a.toFiltervalue=function(e){a.setState({author:e})},a.handleFaveToggle=function(e){-1===a.state.faves.slice().indexOf(e)&&(a.setState({faves:[].concat(Object(c.a)(a.state.faves),[e])}),console.log("Adding To Favors"))},a.addNewItem=function(e,t){a.setState({author:[].concat(Object(c.a)(a.state.author),[{title:e,lines:t}])})},a.clickToRemoveAll=function(){console.log("remove"),a.setState({faves:[]})},a.deletedbook=function(e){var t=Object(c.a)(a.state.faves),n=t.indexOf(e);-1!==n?t.splice(n,1):console.log("not work"),a.setState({faves:t})},a.state={author:[],faves:[],checkes:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()({method:"get",url:"http://poetrydb.org/author/William%20Shakespeare"}).then((function(t){console.log(t,"succ"),console.log(t.data,"succ.data"),e.setState({author:t.data}),console.log(e.state.author,"author")})).catch((function(e){console.log(e,"error")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("header",null,"William Shakespeare")),r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(d.b,{to:"/Home"},"Home"),r.a.createElement(d.b,{to:"/Literature"},"Literature"),r.a.createElement(d.b,{to:"/About"},"About"),r.a.createElement(d.b,{to:"/Favorites"}," My Favorites")),r.a.createElement(p.a,{exact:!0,path:"/Home",component:j}),r.a.createElement(p.a,{path:"/AddNewLiterature",component:function(){return r.a.createElement(b,{addNewItem:e.addNewItem})}}),r.a.createElement(p.a,{path:"/Literature",component:function(){return r.a.createElement(k,{literatureBook:e.state.author,handleFaveToggle:e.handleFaveToggle,addToFav:e.addToFav,clickToRemoveAll:e.clickToRemoveAll,toFiltervalue:e.toFiltervalue})}}),r.a.createElement(p.a,{path:"/LinesOfAuthor",component:function(){return r.a.createElement(E,{literaturelines:e.state.author})}}),r.a.createElement(p.a,{path:"/Favorites",component:function(){return r.a.createElement(g,{faves:e.state.faves,handleFaveToggle:e.handleFaveToggle,clickToRemoveAll:e.clickToRemoveAll,clickToRemoveOne:e.clickToRemoveOne,checkes:e.state.checkes,toRemoveItem:e.toRemoveItem,deletedbook:e.deletedbook})}}),r.a.createElement(p.a,{path:"/About",component:O}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dd4e2e37.chunk.js.map