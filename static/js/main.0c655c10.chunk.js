(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(37)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),o=n.n(r),l=n(7),u=(n(28),n(29),n(30),n(5)),i=n(1),s=n(20),d=n.n(s),m=a.a.createContext(null),f=n(22),p=function(e){return{type:"RESET",todos:e}},E=function(e){return{type:"TOGGLE",id:e}},h=function(e){return{type:"DELETE",id:e}},b=function(){return{type:"TOGGLE_ALL"}},v=function(){return{type:"DELETE_COMPLETED "}},O=function(e,t){return{type:"ADD_TODO",id:e,title:t}},g=function(e,t){return{type:"UPDATE_TODO",id:e,title:t}};function y(e,t){switch(t.type){case"RESET":return t.todos.map((function(e){return{id:e.id,title:e.title,completed:e.completed}}));case"TOGGLE":return e.map((function(e){return e.id!==t.id?e:{id:t.id,title:e.title,completed:!e.completed}}));case"DELETE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE_ALL":return e.every((function(e){return e.completed}))||e.every((function(e){return!e.completed}))?e.map((function(e){return{id:e.id,title:e.title,completed:!e.completed}})):e.map((function(e){return{id:e.id,title:e.title,completed:!0}}));case"ADD_TODO":return[].concat(Object(f.a)(e),[{id:t.id,title:t.title,completed:!1}]);case"DELETE_COMPLETED ":return e.filter((function(e){return!e.completed}));case"UPDATE_TODO":return e.map((function(e){return e.id!==t.id?e:{id:t.id,title:t.title,completed:e.completed}}));default:return e}}function C(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("Received response ".concat(e.status,": ").concat(e.statusText));return e.json()})).then((function(e){return e.data})).catch((function(e){throw new Error("".concat(e," occurred"))}))}var j=function(e){return C("/todos/".concat(e),{method:"DELETE"})},T=function(e,t){return C("/todos/".concat(e),{method:"PATCH",body:JSON.stringify({completed:t})})},N="/",k="/active",D="/completed";function x(e){var t=e.id,n=e.title,r=e.completed,o=e.editing,l=e.onEdit,i=Object(c.useContext)(m).dispatch,s=Object(c.useState)(n),d=Object(u.a)(s,2),f=d[0],p=d[1],b=Object(c.useRef)(null);Object(c.useEffect)((function(){o&&b.current.focus()}),[o]);var v=function(){var e=f.trim();if(e&&e!==n){var c=n;i(g(t,e)),p(e),function(e,t){return C("/todos/".concat(e),{method:"PATCH",body:JSON.stringify({title:t})})}(t,e).catch((function(){i(g(t,c)),p(c)}))}else e||O();l(-1)},O=function(){i(h(t)),j(t).catch((function(e){return alert("Failed to delete item ".concat(n,"; ").concat(e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",checked:r,onChange:function(){i(E(t)),T(t,!r).catch((function(e){return alert("Failed to toggle item ".concat(n,"; ").concat(e))}))}}),a.a.createElement("label",{onDoubleClick:function(){return l(t)}},n),a.a.createElement("button",{type:"button",className:"destroy",onClick:O})),a.a.createElement("input",{type:"text",className:"edit",value:f,ref:b,onChange:function(e){return p(e.target.value)},onBlur:v,onKeyDown:function(e){switch(e.key){case"Enter":v();break;case"Escape":p(n),l(-1)}}}))}function S(e){var t=e.todos,n=e.isToggleAllChecked,r=e.handleToggleAll,o=Object(i.d)().pathname,l=Object(c.useState)(-1),s=Object(u.a)(l,2),m=s[0],f=s[1],p=Object(c.useMemo)((function(){return t.filter((function(e){var t=e.completed;switch(o){case k:return!t;case D:return t;case N:default:return!0}}))}),[t,o]);return a.a.createElement("section",{className:"main"},t.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n,onChange:r}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")),a.a.createElement("ul",{className:"todo-list"},p.map((function(e){return a.a.createElement("li",{key:e.id,className:d()({completed:e.completed,editing:m===e.id})},a.a.createElement(x,Object.assign({},e,{editing:m===e.id,onEdit:f})))}))))}function w(e){var t=e.handleDeleteCompleted,n=e.activeCount,c=e.completedCount;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"".concat(n," items left")),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement(l.b,{to:"/",exact:!0,activeClassName:"selected"},"All")),a.a.createElement("li",null,a.a.createElement(l.b,{to:"/active",activeClassName:"selected"},"Active")),a.a.createElement("li",null,a.a.createElement(l.b,{to:"/completed",activeClassName:"selected"},"Completed"))),c>0&&a.a.createElement("button",{type:"button",className:"clear-completed",onClick:t},"Clear completed"))}function A(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useContext)(m).dispatch;return a.a.createElement("form",{onSubmit:function(e){var t,c;e.preventDefault(),n.trim()&&((t=1189,c=n.trim(),C("/todos",{method:"POST",body:JSON.stringify({userId:t,title:c,completed:!1})})).then((function(e){o(O(e.id,e.title))})).catch((function(e){return alert(e)})),r(""))}},a.a.createElement("input",{value:n,onChange:function(e){return r(e.target.value)},type:"text",className:"new-todo",placeholder:"What needs to be done?"}))}function L(e){var t=e.name;return a.a.createElement("h2",null,t)}function P(e){var t=e.children,n=Object(c.useReducer)(y,JSON.parse(localStorage.getItem("todos"))||[]),r=Object(u.a)(n,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){var e;(e=1189,C("/todos?userId=".concat(e))).then((function(e){return l(p(e))})).catch((function(e){return alert("Failed to fetch todo list; ".concat(e))}))}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),a.a.createElement(m.Provider,{value:{todos:o,dispatch:l}},t)}x.defaultProps={title:"",completed:!1,editing:!1},S.defaultProps={todos:[],isToggleAllChecked:!1},w.defaultProps={activeCount:0,completedCount:0},L.defaultProps={name:"user name"};var _=n(11),F=n.n(_),G=n(16),J=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e;(e=1189,C("/users/".concat(e))).then(a).catch((function(e){return alert("Failed to fetch user data; ".concat(e))}))}),[]),n};var M=function(){var e=Object(c.useContext)(m),t=e.todos,n=e.dispatch,r=J(),o=Object(c.useMemo)((function(){var e=t.filter((function(e){return e.completed})).length;return[t.length-e,e]}),[t]),l=Object(u.a)(o,2),i=l[0],s=l[1],d=Object(c.useMemo)((function(){return t.every((function(e){return e.completed}))}),[t]),f=function(){var e=Object(G.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(b()),!d&&!t.every((function(e){return!e.completed}))){e.next=6;break}return e.next=4,Promise.allSettled(t.map((function(e){return T(e.id,!e.completed)})));case 4:e.next=8;break;case 6:return e.next=8,Promise.allSettled(t.filter((function(e){return!e.completed})).map((function(e){return T(e.id,!0)})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(G.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v()),e.next=3,Promise.allSettled(t.filter((function(e){return e.completed})).map((function(e){return j(e.id)})));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(A,null)),a.a.createElement(S,{todos:t,handleToggleAll:f,isToggleAllChecked:d}),t.length>0&&a.a.createElement(w,{activeCount:i,completedCount:s,handleDeleteCompleted:p})),a.a.createElement(L,{name:r.name}))};o.a.render(a.a.createElement(l.a,null,a.a.createElement(P,null,a.a.createElement(M,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0c655c10.chunk.js.map