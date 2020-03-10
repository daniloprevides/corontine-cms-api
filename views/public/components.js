var app=function(e){"use strict";function t(){}function n(e){return e()}function i(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function p(){return u(" ")}function m(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t,n){t in e?e[t]=n:f(e,t,n)}function g(e,t){t=""+t,e.data!==t&&(e.data=t)}function v(e,t){(null!=t||e.value)&&(e.value=t)}function b(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}let y;function A(e){y=e}function w(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const x=[],C=[],E=[],S=[],k=Promise.resolve();let P=!1;function O(e){E.push(e)}let T=!1;const I=new Set;function D(){if(!T){T=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];A(t),M(t.$$)}for(x.length=0;C.length;)C.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];I.has(t)||(I.add(t),t())}E.length=0}while(x.length);for(;S.length;)S.pop()();P=!1,T=!1,I.clear()}}function M(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const L=new Set;function N(e,t){-1===e.$$.dirty[0]&&(x.push(e),P||(P=!0,k.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,r,a,l,d,c,h=[-1]){const u=y;A(e);const p=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:d,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:h};let f=!1;var _,g;m.ctx=a?a(e,p,(t,n,...i)=>{const o=i.length?i[0]:n;return m.ctx&&d(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),f&&N(e,t)),n}):[],m.update(),f=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),r.target&&(r.hydrate?m.fragment&&m.fragment.l(function(e){return Array.from(e.childNodes)}(r.target)):m.fragment&&m.fragment.c(),r.intro&&((_=e.$$.fragment)&&_.i&&(L.delete(_),_.i(g))),function(e,t,i){const{fragment:r,on_mount:a,on_destroy:l,after_update:d}=e.$$;r&&r.m(t,i),O(()=>{const t=a.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]}),d.forEach(O)}(e,r.target,r.anchor),D()),A(u)}let B;function R(e){let t,n;return{c(){t=h("small"),n=u(e[3]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){8&t&&g(n,e[3])},d(e){e&&d(t)}}}function F(e){let t,n;return{c(){t=h("small"),n=u(e[4]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){16&t&&g(n,e[4])},d(e){e&&d(t)}}}function $(e){let t,n;return{c(){t=h("small"),n=u(e[1])},m(e,i){l(e,t,i),a(t,n)},p(e,t){2&t&&g(n,e[1])},d(e){e&&d(t)}}}function H(e){let n,i,s,r,c,u,_,g,b,y,A,w,x,C,E,S,k,P,O,T,I,D,M,L,N,z,B=e[3]&&R(e),H=e[4]&&F(e),V=e[1]&&$(e);return{c(){n=h("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',i=p(),s=h("div"),r=h("div"),c=h("div"),u=h("div"),_=h("div"),g=h("h5"),g.textContent="Login In",b=p(),y=h("form"),A=h("div"),w=h("input"),x=p(),B&&B.c(),C=p(),E=h("div"),S=h("input"),k=p(),H&&H.c(),P=p(),O=h("div"),T=h("button"),T.textContent="Forgot the password ?",I=p(),V&&V.c(),D=p(),M=h("button"),M.textContent="Log in",L=p(),N=h("hr"),this.c=t,f(g,"class","card-title text-center"),f(w,"type","email"),f(w,"id","inputEmail"),f(w,"class","form-control"),f(w,"placeholder","Username"),f(A,"class","form-label-group"),f(S,"type","password"),f(S,"id","inputPassword"),f(S,"class","form-control"),f(S,"placeholder","Password"),f(E,"class","form-label-group"),f(T,"type","button"),f(T,"class","forgot-password"),f(O,"class","custom-control custom-checkbox mb-3"),f(M,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(M,"type","button"),f(N,"class","my-4"),f(y,"class","form-signin"),f(_,"class","card-body"),f(u,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(s,"class","container")},m(t,o){l(t,n,o),l(t,i,o),l(t,s,o),a(s,r),a(r,c),a(c,u),a(u,_),a(_,g),a(_,b),a(_,y),a(y,A),a(A,w),v(w,e[0]),a(A,x),B&&B.m(A,null),a(y,C),a(y,E),a(E,S),v(S,e[5]),a(E,k),H&&H.m(E,null),a(y,P),a(y,O),a(O,T),a(y,I),V&&V.m(y,null),a(y,D),a(y,M),a(y,L),a(y,N),e[15](s),z=[m(w,"input",e[11]),m(w,"blur",e[12]),m(S,"input",e[13]),m(S,"blur",e[14]),m(T,"click",e[7]),m(M,"click",e[6])]},p(e,[t]){1&t&&w.value!==e[0]&&v(w,e[0]),e[3]?B?B.p(e,t):(B=R(e),B.c(),B.m(A,null)):B&&(B.d(1),B=null),32&t&&S.value!==e[5]&&v(S,e[5]),e[4]?H?H.p(e,t):(H=F(e),H.c(),H.m(E,null)):H&&(H.d(1),H=null),e[1]?V?V.p(e,t):(V=$(e),V.c(),V.m(y,D)):V&&(V.d(1),V=null)},i:t,o:t,d(t){t&&d(n),t&&d(i),t&&d(s),B&&B.d(),H&&H.d(),V&&V.d(),e[15](null),o(z)}}}function V(e,t,n){let i,o=null,s=null,r=null,{username:a}=t,{message:l}=t,{theme:d="default"}=t;function c(e,t){o.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}const h=(e,t)=>{switch(e){case"username":n(3,s=null),t||n(3,s="Username cannot be empty");break;case"password":n(4,r=null),t||n(4,r="Password cannot be empty")}};return e.$set=e=>{"username"in e&&n(0,a=e.username),"message"in e&&n(1,l=e.message),"theme"in e&&n(9,d=e.theme)},[a,l,o,s,r,i,function(){h("username",a),h("password",i),s||r||c("login",{username:a,password:i})},()=>{c("forgot-password",{username:a,password:i})},h,d,c,function(){a=this.value,n(0,a)},()=>h("username",a),function(){i=this.value,n(5,i)},()=>h("password",i),function(e){C[e?"unshift":"push"](()=>{n(2,o=e)})}]}"function"==typeof HTMLElement&&(B=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class q extends B{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}.forgot-password{position:absolute;right:2px;background-color:transparent;border:none}</style>",z(this,{target:this.shadowRoot},V,H,r,{username:0,message:1,theme:9}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["username","message","theme"]}get username(){return this.$$.ctx[0]}set username(e){this.$set({username:e}),D()}get message(){return this.$$.ctx[1]}set message(e){this.$set({message:e}),D()}get theme(){return this.$$.ctx[9]}set theme(e){this.$set({theme:e}),D()}}function j(e){let t,n;return{c(){t=h("small"),n=u(e[2]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){4&t&&g(n,e[2])},d(e){e&&d(t)}}}function Y(e){let n,i,s,r,c,u,_,g,b,y,A,w,x,C,E,S,k,P,O=e[2]&&j(e);return{c(){n=h("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',i=p(),s=h("div"),r=h("div"),c=h("div"),u=h("div"),_=h("div"),g=h("h5"),g.textContent="Forgot your password",b=p(),y=h("form"),A=h("div"),w=h("input"),x=p(),O&&O.c(),C=p(),E=h("button"),E.textContent="OK",S=p(),k=h("hr"),this.c=t,f(g,"class","card-title text-center"),f(w,"type","email"),f(w,"id","inputEmail"),f(w,"class","form-control"),f(w,"placeholder","Username"),f(A,"class","form-label-group"),f(E,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(E,"type","button"),f(k,"class","my-4"),f(y,"class","form-signin"),f(_,"class","card-body"),f(u,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(s,"class","container")},m(t,o){l(t,n,o),l(t,i,o),l(t,s,o),a(s,r),a(r,c),a(c,u),a(u,_),a(_,g),a(_,b),a(_,y),a(y,A),a(A,w),v(w,e[0]),a(A,x),O&&O.m(A,null),a(y,C),a(y,E),a(y,S),a(y,k),e[9](s),P=[m(w,"input",e[7]),m(w,"blur",e[8]),m(E,"click",e[3])]},p(e,[t]){1&t&&w.value!==e[0]&&v(w,e[0]),e[2]?O?O.p(e,t):(O=j(e),O.c(),O.m(A,null)):O&&(O.d(1),O=null)},i:t,o:t,d(t){t&&d(n),t&&d(i),t&&d(s),O&&O.d(),e[9](null),o(P)}}}function W(e,t,n){let i=null,o=null,{username:s=null}=t,{theme:r="default"}=t;function a(e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}const l=(e,t)=>{switch(e){case"username":n(2,o=null),t||n(2,o="Username cannot be empty")}};return e.$set=e=>{"username"in e&&n(0,s=e.username),"theme"in e&&n(5,r=e.theme)},[s,i,o,function(){l("username",s),o||a("forgot-password",{username:s})},l,r,a,function(){s=this.value,n(0,s)},()=>l("username",s),function(e){C[e?"unshift":"push"](()=>{n(1,i=e)})}]}customElements.define("login-page",q);class U extends B{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",z(this,{target:this.shadowRoot},W,Y,r,{username:0,theme:5}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["username","theme"]}get username(){return this.$$.ctx[0]}set username(e){this.$set({username:e}),D()}get theme(){return this.$$.ctx[5]}set theme(e){this.$set({theme:e}),D()}}function Q(e){let t,n;return{c(){t=h("small"),n=u(e[2]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){4&t&&g(n,e[2])},d(e){e&&d(t)}}}function G(e){let t,n;return{c(){t=h("small"),n=u(e[3]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){8&t&&g(n,e[3])},d(e){e&&d(t)}}}function J(e){let t,n;return{c(){t=h("small"),n=u(e[4]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){16&t&&g(n,e[4])},d(e){e&&d(t)}}}function K(e){let t,n;return{c(){t=h("small"),n=u(e[5]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){32&t&&g(n,e[5])},d(e){e&&d(t)}}}function X(e){let t,n;return{c(){t=h("small"),n=u(e[6])},m(e,i){l(e,t,i),a(t,n)},p(e,t){64&t&&g(n,e[6])},d(e){e&&d(t)}}}function Z(e){let n,i,s,r,c,u,_,g,b,y,A,w,x,C,E,S,k,P,O,T,I,D,M,L,N,z,B,R,F,$,H,V=e[2]&&Q(e),q=e[3]&&G(e),j=e[4]&&J(e),Y=e[5]&&K(e),W=e[6]&&X(e);return{c(){n=h("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',i=p(),s=h("div"),r=h("div"),c=h("div"),u=h("div"),_=h("div"),g=h("h5"),g.textContent="New Password",b=p(),y=h("form"),A=h("div"),w=h("input"),x=p(),V&&V.c(),C=p(),E=h("div"),S=h("input"),k=p(),q&&q.c(),P=p(),O=h("div"),T=h("input"),I=p(),j&&j.c(),D=p(),M=h("div"),L=h("input"),N=p(),Y&&Y.c(),z=p(),W&&W.c(),B=p(),R=h("button"),R.textContent="Change Password",F=p(),$=h("hr"),this.c=t,f(g,"class","card-title text-center"),f(w,"type","email"),f(w,"id","inputUsername"),f(w,"class","form-control"),f(w,"placeholder","Username"),f(A,"class","form-label-group"),f(S,"type","password"),f(S,"id","inputOldPassword"),f(S,"class","form-control"),f(S,"placeholder","Old password"),f(E,"class","form-label-group"),f(T,"type","password"),f(T,"id","inputPassword"),f(T,"class","form-control"),f(T,"placeholder","New Password"),f(O,"class","form-label-group"),f(L,"type","password"),f(L,"id","inputPasswordConfirm"),f(L,"class","form-control"),f(L,"placeholder","Repeat New Password"),f(M,"class","form-label-group"),f(R,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(R,"type","button"),f($,"class","my-4"),f(y,"class","form-signin"),f(_,"class","card-body"),f(u,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(s,"class","container")},m(t,o){l(t,n,o),l(t,i,o),l(t,s,o),a(s,r),a(r,c),a(c,u),a(u,_),a(_,g),a(_,b),a(_,y),a(y,A),a(A,w),v(w,e[0]),a(A,x),V&&V.m(A,null),a(y,C),a(y,E),a(E,S),v(S,e[7]),a(E,k),q&&q.m(E,null),a(y,P),a(y,O),a(O,T),v(T,e[8]),a(O,I),j&&j.m(O,null),a(y,D),a(y,M),a(M,L),v(L,e[9]),a(M,N),Y&&Y.m(M,null),a(y,z),W&&W.m(y,null),a(y,B),a(y,R),a(y,F),a(y,$),e[23](s),H=[m(w,"input",e[15]),m(w,"blur",e[16]),m(S,"input",e[17]),m(S,"blur",e[18]),m(T,"input",e[19]),m(T,"blur",e[20]),m(L,"input",e[21]),m(L,"blur",e[22]),m(R,"click",e[10])]},p(e,[t]){1&t&&w.value!==e[0]&&v(w,e[0]),e[2]?V?V.p(e,t):(V=Q(e),V.c(),V.m(A,null)):V&&(V.d(1),V=null),128&t&&S.value!==e[7]&&v(S,e[7]),e[3]?q?q.p(e,t):(q=G(e),q.c(),q.m(E,null)):q&&(q.d(1),q=null),256&t&&T.value!==e[8]&&v(T,e[8]),e[4]?j?j.p(e,t):(j=J(e),j.c(),j.m(O,null)):j&&(j.d(1),j=null),512&t&&L.value!==e[9]&&v(L,e[9]),e[5]?Y?Y.p(e,t):(Y=K(e),Y.c(),Y.m(M,null)):Y&&(Y.d(1),Y=null),e[6]?W?W.p(e,t):(W=X(e),W.c(),W.m(y,B)):W&&(W.d(1),W=null)},i:t,o:t,d(t){t&&d(n),t&&d(i),t&&d(s),V&&V.d(),q&&q.d(),j&&j.d(),Y&&Y.d(),W&&W.d(),e[23](null),o(H)}}}function ee(e,t,n){let i,o,s,r=null,a=null,l=null,d=null,c=null,h=null,{username:u=null}=t,{theme:p="default"}=t,{message:m=null}=t;function f(e,t){r.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}const _=(e,t)=>{switch(e){case"username":n(2,a=null),t||n(2,a="Username must be filled");break;case"old-password":n(3,l=null),t||n(3,l="Old password must be filled");break;case"password1":n(4,d=null),t||n(4,d="Password must be filled");break;case"password2":n(5,c=null),t||n(5,c="Password must be filled")}n(6,h=null),o!==s&&n(6,h="Password dont match")};return e.$set=e=>{"username"in e&&n(0,u=e.username),"theme"in e&&n(12,p=e.theme),"message"in e&&n(13,m=e.message)},[u,r,a,l,d,c,h,i,o,s,function(){_("username",u),_("old-password",i),_("password1",o),_("password2",s),d||c||l||a||h||f("change-password",{username:u,oldPassword:i,password1:o,password2:s})},_,p,m,f,function(){u=this.value,n(0,u)},()=>_("username",u),function(){i=this.value,n(7,i)},()=>_("old-password",i),function(){o=this.value,n(8,o)},()=>_("password1",o),function(){s=this.value,n(9,s)},()=>_("password2",s),function(e){C[e?"unshift":"push"](()=>{n(1,r=e)})}]}customElements.define("forgot-password-page",U);class te extends B{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",z(this,{target:this.shadowRoot},ee,Z,r,{username:0,theme:12,message:13}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["username","theme","message"]}get username(){return this.$$.ctx[0]}set username(e){this.$set({username:e}),D()}get theme(){return this.$$.ctx[12]}set theme(e){this.$set({theme:e}),D()}get message(){return this.$$.ctx[13]}set message(e){this.$set({message:e}),D()}}customElements.define("password-change-page",te);class ne extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",ne);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let ie,oe=null,se=window.HTMLImports&&window.HTMLImports.whenReady||null;function re(e){requestAnimationFrame((function(){se?se(e):(oe||(oe=new Promise(e=>{ie=e}),"complete"===document.readyState?ie():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&ie()})),oe.then((function(){e&&e()})))}))}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const ae="__shadyCSSCachedStyle";let le=null,de=null;class ce{constructor(){this.customStyles=[],this.enqueued=!1,re(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&de&&(this.enqueued=!0,re(de))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[ae])return e[ae];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[ae])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;le&&le(e),n[ae]=e}}return e}}ce.prototype.addCustomStyle=ce.prototype.addCustomStyle,ce.prototype.getStyleForCustomStyle=ce.prototype.getStyleForCustomStyle,ce.prototype.processStyles=ce.prototype.processStyles,Object.defineProperties(ce.prototype,{transformCallback:{get:()=>le,set(e){le=e}},validateCallback:{get:()=>de,set(e){let t=!1;de||(t=!0),de=e,t&&this.enqueueDocumentValidation()}}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const he=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ue=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,pe=/@media\s(.*)/;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function me(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function fe(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const _e=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ge,ve;function be(e){ge=(!e||!e.shimcssproperties)&&(_e||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ve=window.ShadyCSS.cssBuild);const ye=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ge=window.ShadyCSS.nativeCss:window.ShadyCSS?(be(window.ShadyCSS),window.ShadyCSS=void 0):be(window.WebComponents&&window.WebComponents.flags);const Ae=ge,we=new ce;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){we.processStyles(),me(e,t)},styleElement(e){we.processStyles()},styleDocument(e){we.processStyles(),me(document.body,e)},getComputedStyleValue:(e,t)=>fe(e,t),flushCustomStyles(){},nativeCss:Ae,nativeShadow:_e,cssBuild:ve,disableRuntime:ye}),window.ShadyCSS.CustomStyleInterface=we,
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
window.JSCompiler_renameProperty=function(e,t){return e};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let xe,Ce,Ee=/(url\()([^)]*)(\))/g,Se=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ke(e,t){if(e&&Se.test(e))return e;if("//"===e)return e;if(void 0===xe){xe=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",xe="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),xe)try{return new URL(e,t).href}catch(t){return e}return Ce||(Ce=document.implementation.createHTMLDocument("temp"),Ce.base=Ce.createElement("base"),Ce.head.appendChild(Ce.base),Ce.anchor=Ce.createElement("a"),Ce.body.appendChild(Ce.anchor)),Ce.base.href=t,Ce.anchor.href=e,Ce.anchor.href||e}function Pe(e,t){return e.replace(Ee,(function(e,n,i,o){return n+"'"+ke(i.replace(/["']/g,""),t)+"'"+o}))}function Oe(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const Te=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let Ie=Oe(document.baseURI||window.location.href),De=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Me={},Le={};class Ne extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=function(e){return Me[e]||Le[e.toLowerCase()]}(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=ke(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Oe(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,function(e,t){Me[e]=Le[e.toLowerCase()]=t}(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}Ne.prototype.modules=Me,customElements.define("dom-module",Ne);function ze(e){return Ne.import(e)}function Be(e){const t=Pe((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function Re(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...Fe(t[e]));return n}function Fe(e){const t=ze(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...He(t));const n=t.querySelector("template");n&&e.push(...$e(n,t.assetpath)),t._styles=e}return t._styles}function $e(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let o=i[e],s=o.getAttribute("include");s&&n.push(...Re(s).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(o.textContent=Pe(o.textContent,t)),n.push(o)}e._styles=n}return e._styles}function He(e){const t=[],n=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<n.length;e++){let i=n[e];if(i.import){const e=i.import,n=i.hasAttribute("shady-unscoped");if(n&&!e._unscopedStyle){const t=Be(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=Be(e));t.push(n?e._unscopedStyle:e._style)}}return t}function Ve(e){let t=ze(e);if(t&&void 0===t._cssText){let e=function(e){let t="",n=He(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const i=$e(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const qe=window.ShadyCSS.CustomStyleInterface;class je extends HTMLElement{constructor(){super(),this._style=null,qe.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=Ve(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",je);const Ye=document.createElement("template");Ye.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ye.content);const We=document.createElement("template");We.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(We.content);const Ue=document.createElement("template");Ue.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ue.content);const Qe=document.createElement("template");Qe.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Qe.content);const Ge=document.createElement("template");Ge.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ge.content);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class Je{constructor(e){this.value=e.toString()}toString(){return this.value}}function Ke(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Je)return function(e){if(e instanceof Je)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Xe=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,i)=>t+Ke(n)+e[i+1],e[0]),n},Ze=Xe`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Ze.content);const et=Xe`<dom-module id="lumo-menu-bar-button" theme-for="vaadin-menu-bar-button">
  <template>
    <style include="lumo-button">
      :host {
        margin: calc(var(--lumo-space-xs) / 2);
        margin-left: 0;
        border-radius: 0;
      }

      [part="label"] {
        width: 100%;
      }

      /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
      [part="label"] ::slotted(vaadin-context-menu-item) {
        justify-content: center;
        height: var(--lumo-button-size);
        margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="small"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        min-height: var(--lumo-size-s);
        margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="tertiary"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0 calc((var(--lumo-button-size) / 6) * -1);
        padding-left: calc(var(--lumo-button-size) / 6);
        padding-right: calc(var(--lumo-button-size) / 6);
      }

      :host([theme~="tertiary-inline"]) {
        margin-top: calc(var(--lumo-space-xs) / 2);
        margin-bottom: calc(var(--lumo-space-xs) / 2);
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="tertiary-inline"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0;
        padding: 0;
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([expanded][theme~="primary"]) {
        background-color: var(--lumo-primary-color-50pct);
      }

      :host([disabled][theme~="primary"]) {
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      :host([expanded][theme~="tertiary"]),
      :host([expanded][theme~="tertiary-inline"]) {
        background-color: var(--lumo-primary-color-10pct) !important;
      }

      :host(:first-of-type) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

        /* Needed to retain the focus-ring with border-radius */
        margin-left: calc(var(--lumo-space-xs) / 2);
      }

      :host(:nth-last-of-type(2)),
      :host([part="overflow-button"]) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
      }

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        border-radius: var(--lumo-border-radius-m);
      }

      :host([part="overflow-button"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([part="overflow-button"]) ::slotted(*) {
        font-size: var(--lumo-font-size-xl);
      }

      :host([part="overflow-button"]) [part="prefix"],
      :host([part="overflow-button"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(et.content);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let tt=0;const nt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=tt++;return function(i){let o=i.__mixinSet;if(o&&o[n])return i;let s=t,r=s.get(i);r||(r=e(i),s.set(i,r));let a=Object.create(r.__mixinSet||o||null);return a[n]=!0,r.__mixinSet=a,r}},it=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function ot(e){return e.indexOf(".")>=0}function st(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function rt(e,t){return 0===e.indexOf(t+".")}function at(e,t){return 0===t.indexOf(e+".")}function lt(e,t,n){return t+n.slice(e.length)}function dt(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function ct(e){return Array.isArray(e)?dt(e).split("."):e.toString().split(".")}function ht(e,t,n){let i=e,o=ct(t);for(let e=0;e<o.length;e++){if(!i)return;i=i[o[e]]}return n&&(n.path=o.join(".")),i}function ut(e,t,n){let i=e,o=ct(t),s=o[o.length-1];if(o.length>1){for(let e=0;e<o.length-1;e++){if(i=i[o[e]],!i)return}i[s]=n}else i[t]=n;return o.join(".")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const pt={},mt=/-[a-z]/g,ft=/([A-Z])/g;function _t(e){return pt[e]||(pt[e]=e.indexOf("-")<0?e:e.replace(mt,e=>e[1].toUpperCase()))}function gt(e){return pt[e]||(pt[e]=e.replace(ft,"-$1").toLowerCase())}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let vt=0,bt=0,yt=[],At=0,wt=document.createTextNode("");new window.MutationObserver((function(){const e=yt.length;for(let t=0;t<e;t++){let e=yt[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}yt.splice(0,e),bt+=e})).observe(wt,{characterData:!0});const xt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Ct={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Et={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},St={run:e=>(wt.textContent=At++,yt.push(e),vt++),cancel(e){const t=e-bt;if(t>=0){if(!yt[t])throw new Error("invalid async handle: "+e);yt[t]=null}}},kt=St,Pt=nt(e=>class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],o=this._shouldPropertyChange(e,t,i);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),o}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,kt.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,o=i&&i[e]||e;this[o]=this._deserializeValue(t,n||this.constructor.typeForProperty(o))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=it(e)),void 0===i?e.removeAttribute(n):e.setAttribute(n,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),Ot={};let Tt=HTMLElement.prototype;for(;Tt;){let e=Object.getOwnPropertyNames(Tt);for(let t=0;t<e.length;t++)Ot[e[t]]=!0;Tt=Object.getPrototypeOf(Tt)}const It=nt(e=>{const t=Pt(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(_t(e[t]))}static attributeNameForProperty(e){return gt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!Ot[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),Dt={"dom-if":!0,"dom-repeat":!0};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let Mt=!1,Lt=!1;function Nt(e){(function(){if(!Mt){Mt=!0;const e=document.createElement("textarea");e.placeholder="a",Lt=e.placeholder===e.textContent}return Lt})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function zt(e){let t=e.getAttribute("is");if(t&&Dt[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function Bt(e,t){let n=t.parentInfo&&Bt(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function Rt(e,t,n,i){i.id&&(t[i.id]=n)}function Ft(e,t,n){if(n.events&&n.events.length)for(let i,o=0,s=n.events;o<s.length&&(i=s[o]);o++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function $t(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const Ht=nt(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i=!1,o=e;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(o,t,n)||i,Nt(o),o.firstChild&&this._parseTemplateChildNodes(o,t,n),o.hasAttributes&&o.hasAttributes()&&(i=this._parseTemplateNodeAttributes(o,t,n)||i),i}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let i,o=e.firstChild,s=0;o;o=i){if("template"==o.localName&&(o=zt(o)),i=o.nextSibling,o.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)o.textContent+=n.textContent,i=n.nextSibling,e.removeChild(n),n=i;if(t.stripWhiteSpace&&!o.textContent.trim()){e.removeChild(o);continue}}let r={parentIndex:s,parentInfo:n};this._parseTemplateNode(o,t,r)&&(r.infoIndex=t.nodeInfoList.push(r)-1),o.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,n){let i=e,o=this._parseTemplate(i,t);return(o.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=o,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,o=Array.from(e.attributes);for(let s,r=o.length-1;s=o[r];r--)i=this._parseTemplateNodeAttribute(e,t,n,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,o){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:o}),!0):"id"===i&&(n.id=o,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,i=t.content||e.content,o=document.importNode(i,!0);o.__noInsertionPoint=!t.hasInsertionPoint;let s=o.nodeList=new Array(n.length);o.$={};for(let e,t=0,i=n.length;t<i&&(e=n[t]);t++){let n=s[t]=Bt(o,e);Rt(0,o.$,n,e),$t(0,n,e),Ft(this,n,e)}return o=o,o}_addMethodEventListenerToNode(e,t,n,i){let o=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||e,0,n);return this._addEventListenerToNode(e,t,o),o}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}});
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */let Vt=0;const qt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},jt=/[A-Z]/;function Yt(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}}else n=e[t]={};return n}function Wt(e,t,n,i,o,s){if(t){let r=!1,a=Vt++;for(let l in n)Ut(e,t,a,l,n,i,o,s)&&(r=!0);return r}return!1}function Ut(e,t,n,i,o,s,r,a){let l=!1,d=t[r?st(i):i];if(d)for(let t,c=0,h=d.length;c<h&&(t=d[c]);c++)t.info&&t.info.lastRun===n||r&&!Qt(i,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,i,o,s,t.info,r,a),l=!0);return l}function Qt(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!rt(n,e))||!(!t.wildcard||!at(n,e))}return!0}function Gt(e,t,n,i,o){let s="string"==typeof o.method?e[o.method]:o.method,r=o.property;s?s.call(e,e.__data[r],i[r]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Jt(e,t,n){let i=st(t);if(i!==t){return Kt(e,gt(i)+"-changed",n[t],t),!0}return!1}function Kt(e,t,n,i){let o={value:n,queueProperty:!0};i&&(o.path=i),it(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function Xt(e,t,n,i,o,s){let r=(s?st(t):t)!=t?t:null,a=r?ht(e,r):e.__data[t];r&&void 0===a&&(a=n[t]),Kt(e,o.eventName,a,r)}function Zt(e,t,n,i,o){let s=e.__data[t];De&&(s=De(s,o.attrName,"attribute",e)),e._propertyToAttribute(t,o.attrName,s)}function en(e,t,n,i,o){let s=ln(e,t,n,i,o),r=o.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[r]?e._setPendingProperty(r,s,!0):e[r]=s}function tn(e,t,n,i,o,s,r){n.bindings=n.bindings||[];let a={kind:i,target:o,parts:s,literal:r,isCompound:1!==s.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||gt(o)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let i=a.parts[n];i.compoundIndex=n,nn(e,t,a,i,l)}}function nn(e,t,n,i,o){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,r={index:o,binding:n,part:i,evaluator:e};for(let n=0;n<s.length;n++){let i=s[n];"string"==typeof i&&(i=pn(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:on,info:r,trigger:i})}}}function on(e,t,n,i,o,s,r){let a=r[o.index],l=o.binding,d=o.part;if(s&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=n[t];t=lt(d.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,n,i,o){o=function(e,t,n,i){if(n.isCompound){let o=e.__dataCompoundStorage[n.target];o[i.compoundIndex]=t,t=o.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,o,n,i),De&&(o=De(o,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,o,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[qt.READ_ONLY]&&t[qt.READ_ONLY][i]||t._setPendingProperty(i,o)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,o)}}(e,a,l,d,o.evaluator._evaluateBinding(e,d,t,n,i,s))}}function sn(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,o=new Array(i.length);for(let e=0;e<i.length;e++)o[e]=i[e].literal;let s=t.target;n[s]=o,t.literal&&"property"==t.kind&&("className"===s&&(e=it(e)),e[s]=t.literal)}}function rn(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,i,o){let s,r=e.detail,a=r&&r.path;a?(i=lt(n,i,a),s=r&&r.value):s=e.currentTarget[n],s=o?!s:s,t[qt.READ_ONLY]&&t[qt.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,s,!0,Boolean(a))||r&&r.queueProperty||t._invalidateProperties()}(e,t,n.target,i.source,i.negate)}))}}function an(e,t,n,i,o,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:s};for(let o,s=0;s<t.args.length&&(o=t.args[s]);s++)o.literal||e._addPropertyEffect(o.rootProperty,n,{fn:i,info:r,trigger:o});s&&e._addPropertyEffect(t.methodName,n,{fn:i,info:r})}function ln(e,t,n,i,o){let s=e._methodHost||e,r=s[o.methodName];if(r){let i=e._marshalArgs(o.args,t,n);return r.apply(s,i)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const dn=[],cn=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function hn(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function un(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:dn};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let n=pn(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function pn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=st(t),n.structured=ot(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function mn(e,t,n){let i=ht(e,n);return void 0===i&&(i=t[n]),i}function fn(e,t,n,i){e.notifyPath(n+".splices",{indexSplices:i}),e.notifyPath(n+".length",t.length)}function _n(e,t,n,i,o,s){fn(e,t,n,[{index:i,addedCount:o,removed:s,object:t,type:"splice"}])}const gn=nt(e=>{const t=Ht(It(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return qt}_initializeProperties(){super._initializeProperties(),vn.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[qt.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==qt.READ_ONLY);let i=Yt(this,t)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=Yt(this,t)[e],o=i.indexOf(n);o>=0&&i.splice(o,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,qt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,qt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,qt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,qt.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||st(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=ht(this,e);if(!(e=ut(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let i=e.__dataLinkedPaths;if(i){let o;for(let s in i){let r=i[s];at(s,t)?(o=lt(s,r,t),e._setPendingPropertyOrPath(o,n,!0,!0)):at(r,t)&&(o=lt(r,s,t),e._setPendingPropertyOrPath(o,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=it(e)),e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&ot(e),o=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,o[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[qt.NOTIFY]&&this[qt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[qt.READ_ONLY]&&this[qt.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,i){let o=e[qt.COMPUTE];if(o){let s=t;for(;Wt(e,o,s,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}(this,t,n,i);let o=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,i),this._flushClients(),Wt(this,this[qt.REFLECT],t,n,i),Wt(this,this[qt.OBSERVE],t,n,i),o&&function(e,t,n,i,o){let s,r,a=e[qt.NOTIFY],l=Vt++;for(let r in t)t[r]&&(a&&Ut(e,a,l,r,n,i,o)||o&&Jt(e,r,n))&&(s=!0);s&&(r=e.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,o,t,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[qt.PROPAGATE]&&Wt(this,this[qt.PROPAGATE],e,t,n);let i=this.__templateInfo;for(;i;)Wt(this,i.propertyEffects,e,t,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(e,t){e=dt(e),t=dt(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=dt(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};fn(this,ht(this,e,n),n.path,t)}get(e,t){return ht(t||this,e)}set(e,t,n){n?ut(n,e,t):this[qt.READ_ONLY]&&this[qt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=ht(this,e,n),o=i.length,s=i.push(...t);return t.length&&_n(this,i,n.path,o,t.length,[]),s}pop(e){let t={path:""},n=ht(this,e,t),i=Boolean(n.length),o=n.pop();return i&&_n(this,n,t.path,n.length,0,[o]),o}splice(e,t,n,...i){let o,s={path:""},r=ht(this,e,s);return t<0?t=r.length-Math.floor(-t):t&&(t=Math.floor(t)),o=2===arguments.length?r.splice(t):r.splice(t,n,...i),(i.length||o.length)&&_n(this,r,s.path,t,i.length,o),o}shift(e){let t={path:""},n=ht(this,e,t),i=Boolean(n.length),o=n.shift();return i&&_n(this,n,t.path,0,0,[o]),o}unshift(e,...t){let n={path:""},i=ht(this,e,n),o=i.unshift(...t);return t.length&&_n(this,i,n.path,0,t.length,[]),o}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=ht(this,e,i),n=i.path}else n=Array.isArray(e)?dt(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,qt.READ_ONLY),t&&(this["_set"+function(e){return e[0].toUpperCase()+e.substring(1)}(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,qt.OBSERVE,{fn:Gt,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,qt.OBSERVE,{fn:Gt,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=un(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");an(this,n,qt.OBSERVE,ln,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,qt.NOTIFY,{fn:Xt,info:{eventName:gt(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,qt.REFLECT,{fn:Zt,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=un(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");an(this,i,qt.COMPUTE,en,e,n)}_marshalArgs(e,t,n){const i=this.__data,o=[];for(let s=0,r=e.length;s<r;s++){let{name:r,structured:a,wildcard:l,value:d,literal:c}=e[s];if(!c)if(l){const e=at(r,t),o=mn(i,n,e?t:r);d={path:e?t:r,value:o,base:e?ht(i,r):o}}else d=a?mn(i,n,r):i[r];o[s]=d}return o}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__templateInfo==n;if(!i)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&(n=Object.create(n),n.wasPreBound=i,!i&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e){vn.beginHosting(this);let t=super._stampTemplate(e);vn.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let o=i[t],s=n[t],r=o.bindings;if(r)for(let t=0;t<r.length;t++){let n=r[t];sn(s,n),rn(s,e,n)}s.__dataHost=e}}(this,n),this.__dataReady&&Wt(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,n,i){let o=t._parseTemplateNode.call(this,e,n,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=hn(t)||" ",tn(this,n,i,"text","textContent",t),o=!0)}return o}static _parseTemplateNodeAttribute(e,n,i,o,s){let r=this._parseBindings(s,n);if(r){let t=o,s="property";jt.test(o)?s="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),s="attribute");let a=hn(r);return a&&"attribute"==s&&("class"==o&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(o)),e.setAttribute(o,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(o=_t(o)),tn(this,n,i,s,o,r,a),!0}return t._parseTemplateNodeAttribute.call(this,e,n,i,o,s)}static _parseTemplateNestedTemplate(e,n,i){let o=t._parseTemplateNestedTemplate.call(this,e,n,i),s=i.templateInfo.hostProps;for(let e in s){tn(this,n,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return o}static _parseBindings(e,t){let n,i=[],o=0;for(;null!==(n=cn.exec(e));){n.index>o&&i.push({literal:e.slice(o,n.index)});let s=n[1][0],r=Boolean(n[2]),a=n[3].trim(),l=!1,d="",c=-1;"{"==s&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let h=un(a),u=[];if(h){let{args:e,methodName:n}=h;for(let t=0;t<e.length;t++){let n=e[t];n.literal||u.push(n)}let i=t.dynamicFns;(i&&i[n]||h.static)&&(u.push(n),h.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:s,negate:r,customEvent:l,signature:h,dependencies:u,event:d}),o=cn.lastIndex}if(o&&o<e.length){let t=e.substring(o);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,o,s){let r;return r=t.signature?ln(e,n,i,0,t.signature):n!=t.source?ht(e,t.source):s&&ot(n)?ht(e,n):e.__data[n],t.negate&&(r=!r),r}}});const vn=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const bn=nt(e=>{const t=Pt(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof o?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o}),yn=window.ShadyCSS&&window.ShadyCSS.cssBuild,An=nt(e=>{const t=bn(gn(e));function n(e,t,n,i){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,i)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===n.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===n.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,i[n.observer]),e._addPropertyToAttributeMap(t)}function i(e,t,n,i){if(!yn){const o=t.content.querySelectorAll("style"),s=$e(t),r=function(e){let t=ze(e);return t?He(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<r.length;n++){let o=r[n];o.textContent=e._processStyleText(o.textContent,i),t.content.insertBefore(o,a)}let l=0;for(let t=0;t<s.length;t++){let n=s[t],r=o[l];r!==n?(n=n.cloneNode(!0),r.parentNode.insertBefore(n,r)):l++,n.textContent=e._processStyleText(n.textContent,i)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let t in e)n(this.prototype,t,e[t],e)}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;return e&&(t=Ne.import(e,"template")),t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Oe(e.url);else{const e=Ne.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ie,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return Pe(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;i(this,t,e,n?ke(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=it(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=ke(this.importPath)),ke(e,t)}static _parseTemplateContent(e,n,i){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,i)}static _addTemplatePropertyEffect(e,n,i){return t._addTemplatePropertyEffect.call(this,e,n,i)}}}),wn=An(HTMLElement);
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class xn{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Cn.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Cn.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof xn?e._cancelAsync():e=new xn,e.setConfig(t,n),e}}let Cn=new Set;const En=function(e){Cn.add(e)},Sn=function(){const e=Boolean(Cn.size);return Cn.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let kn="string"==typeof document.head.style.touchAction,Pn="__polymerGesturesHandled",On="__polymerGesturesTouchAction",Tn=["mousedown","mousemove","mouseup","click"],In=[0,1,4,2],Dn=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Mn(e){return Tn.indexOf(e)>-1}let Ln=!1;function Nn(e){Mn(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Ln=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let zn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Bn=[],Rn={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Fn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function $n(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let Hn=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[Pn]={skip:!0},"click"===e.type)){let t=!1,i=Un(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)Bn.push(i[e]);else if(n=i[e],Rn[n.localName]){let n=$n(i[e]);for(let e=0;e<n.length;e++)t=t||Bn.indexOf(n[e])>-1}if(i[e]===jn.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Vn(e){let t=zn?["click"]:Tn;for(let n,i=0;i<t.length;i++)n=t[i],e?(Bn.length=0,document.addEventListener(n,Hn,!0)):document.removeEventListener(n,Hn,!0)}function qn(e){let t=e.type;if(!Mn(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Dn&&(t=In[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let jn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Yn(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function Wn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){jn.mouse.mouseIgnoreJob||Vn(!0),jn.mouse.target=Un(e)[0],jn.mouse.mouseIgnoreJob=xn.debounce(jn.mouse.mouseIgnoreJob,xt.after(2500),(function(){Vn(),jn.mouse.target=null,jn.mouse.mouseIgnoreJob=null}))}),!!Ln&&{passive:!0});const Un=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Qn={},Gn=[];function Jn(e){const t=Un(e);return t.length>0?t[0]:e.target}function Kn(e){let t,n=e.type,i=e.currentTarget.__polymerGestures;if(!i)return;let o=i[n];if(o){if(!e[Pn]&&(e[Pn]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(jn.touch.id=t.identifier),jn.touch.id!==t.identifier)return;kn||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)jn.touch.x=t.clientX,jn.touch.y=t.clientY,jn.touch.scrollDecided=!1;else if("touchmove"===n){if(jn.touch.scrollDecided)return;jn.touch.scrollDecided=!0;let n=function(e){let t="auto",n=Un(e);for(let e,i=0;i<n.length;i++)if(e=n[i],e[On]){t=e[On];break}return t}(e),i=!1,o=Math.abs(jn.touch.x-t.clientX),s=Math.abs(jn.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=s>o:"pan-y"===n&&(i=o>s)),i?e.preventDefault():ii("track")}}(e)}if(t=e[Pn],!t.skip){for(let n,i=0;i<Gn.length;i++)n=Gn[i],o[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,s=0;s<Gn.length;s++)i=Gn[s],o[i.name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function Xn(e,t,n){return!!Qn[t]&&(function(e,t,n){let i=Qn[t],o=i.deps,s=i.name,r=e.__polymerGestures;r||(e.__polymerGestures=r={});for(let t,n,i=0;i<o.length;i++)t=o[i],zn&&Mn(t)&&"click"!==t||(n=r[t],n||(r[t]=n={_count:0}),0===n._count&&e.addEventListener(t,Kn,Nn(t)),n[s]=(n[s]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),i.touchAction&&ti(e,i.touchAction)}(e,t,n),!0)}function Zn(e,t,n){return!!Qn[t]&&(function(e,t,n){let i=Qn[t],o=i.deps,s=i.name,r=e.__polymerGestures;if(r)for(let t,n,i=0;i<o.length;i++)t=o[i],n=r[t],n&&n[s]&&(n[s]=(n[s]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,Kn,Nn(t)));e.removeEventListener(t,n)}(e,t,n),!0)}function ei(e){Gn.push(e);for(let t=0;t<e.emits.length;t++)Qn[e.emits[t]]=e}function ti(e,t){kn&&e instanceof HTMLElement&&St.run(()=>{e.style.touchAction=t}),e[On]=t}function ni(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,it(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function ii(e){let t=function(e){for(let t,n=0;n<Gn.length;n++){t=Gn[n];for(let n,i=0;i<t.emits.length;i++)if(n=t.emits[i],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function oi(e,t,n,i){t&&ni(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return ii(e)}})}function si(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),o=Math.abs(e.y-n);return i>=5||o>=5}function ri(e,t,n){if(!t)return;let i,o=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],r=s.x-e.x,a=s.y-e.y,l=0;o&&(i=s.x-o.x,l=s.y-o.y),ni(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:r,dy:a,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let o=i;if(i=i.shadowRoot.elementFromPoint(e,t),o===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function ai(e,t,n){let i=Math.abs(t.clientX-e.x),o=Math.abs(t.clientY-e.y),s=Jn(n||t);!s||Fn[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(o)||i<=25&&o<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Jn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,o=e.pageY;return!(i>=n.left&&i<=n.right&&o>=n.top&&o<=n.bottom)}return!1}(t))&&(e.prevent||ni(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */ei({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Wn(this.info)},mousedown:function(e){if(!qn(e))return;let t=Jn(e),n=this;Yn(this.info,(function(e){qn(e)||(oi("up",t,e),Wn(n.info))}),(function(e){qn(e)&&oi("up",t,e),Wn(n.info)})),oi("down",t,e)},touchstart:function(e){oi("down",Jn(e),e.changedTouches[0],e)},touchend:function(e){oi("up",Jn(e),e.changedTouches[0],e)}}),ei({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Wn(this.info)},mousedown:function(e){if(!qn(e))return;let t=Jn(e),n=this,i=function(e){let i=e.clientX,o=e.clientY;si(n.info,i,o)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&ii("tap"),n.info.addMove({x:i,y:o}),qn(e)||(n.info.state="end",Wn(n.info)),t&&ri(n.info,t,e),n.info.started=!0)};Yn(this.info,i,(function(e){n.info.started&&i(e),Wn(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Jn(e),n=e.changedTouches[0],i=n.clientX,o=n.clientY;si(this.info,i,o)&&("start"===this.info.state&&ii("tap"),this.info.addMove({x:i,y:o}),ri(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Jn(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),ri(this.info,t,n))}}),ei({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){qn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){qn(e)&&ai(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ai(this.info,e.changedTouches[0],e)}});const li=nt(e=>class extends e{_addEventListenerToNode(e,t,n){Xn(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){Zn(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}),di=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}},ci=e=>class extends(di(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=Ne.prototype.modules;let n=!1;const i=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const n=0===e.indexOf("vaadin-"),i=0===t.indexOf("vaadin-"),o=["lumo-","material-"],s=o.filter(t=>0===e.indexOf(t)).length>0,r=o.filter(e=>0===t.indexOf(e)).length>0;return n!==i?n?-1:1:s!==r?s?-1:1:0}).forEach(o=>{if(o!==i){const i=t[o].getAttribute("theme-for");i&&i.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(o,e))})}}),!n&&t[i]&&this._includeStyle(i,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */,hi=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity=0,e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */,ui=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Sn()}while(e||t)},pi=[];new MutationObserver((function(){const e=fi();pi.forEach(t=>{mi(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const mi=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},fi=function(){return document.documentElement.getAttribute("dir")},_i=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,gi=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function vi(e,t){if("function"!=typeof e)return;const n=_i.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const bi=function(e,t){if(window.Vaadin.developmentMode)return vi(e,t)};function yi(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(gi?!function(){if(gi){if(Object.keys(gi).map(e=>gi[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!vi((function(){return!0})))}catch(e){return!1}}());const Ai=function(){return bi(yi)};let wi;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Ai&&Ai()};const xi=new Set,Ci=e=>class extends((e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),mi(this,fi()))}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"dir"!==e)return;const i=n===fi()&&-1===pi.indexOf(this),o=!n&&t&&-1===pi.indexOf(this),s=n!==fi()&&t===fi();i||o?(this.__subscribe(),mi(this,fi())):s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1)}__subscribe(e=!0){e?-1===pi.indexOf(this)&&pi.push(this):pi.indexOf(this)>-1&&pi.splice(pi.indexOf(this),1)}})(e)){static finalize(){super.finalize();const{is:e}=this;e&&!xi.has(e)&&(window.Vaadin.registrations.push(this),xi.add(e),window.Vaadin.developmentModeCallback&&(wi=xn.debounce(wi,Et,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),En(wi)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class Ei extends(Ci(hi(ci(li(wn))))){static get template(){return Xe`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.2"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Xn(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Xn(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(Ei.is,Ei);
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Si=document.createElement("template");Si.innerHTML='<dom-module id="vaadin-menu-bar-button-styles" theme-for="vaadin-menu-bar-button">\n  <template>\n    <style>\n      [part="label"] ::slotted(vaadin-context-menu-item) {\n        position: relative;\n        z-index: 1;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Si.content);class ki extends Ei{static get is(){return"vaadin-menu-bar-button"}}customElements.define(ki.is,ki);const Pi=Xe`<dom-module id="lumo-menu-bar-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host([theme="menu-bar-item"]) [part="content"] {
        display: flex;
        /* tweak to inherit centering from menu bar button */
        align-items: inherit;
        justify-content: inherit;
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: var(--lumo-space-xs);
        box-sizing: border-box !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Pi.content);const Oi=Xe`<dom-module id="lumo-menu-bar-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host(:first-of-type) {
        padding-top: var(--lumo-space-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Oi.content);const Ti=document.createElement("template");Ti.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ti.content);const Ii=document.createElement("template");Ii.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ii.content);const Di=document.createElement("template");Di.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(Di.content);const Mi=Xe`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])),
      [part="items"] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host {
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
      }

      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Mi.content);const Li=Xe`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Li.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Ni extends((e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}})(ci(wn))){static get template(){return Xe`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.1"}constructor(){super(),this.value}}customElements.define(Ni.is,Ni);const zi=Xe`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function Bi(e,t,n){return{index:e,removed:t,addedCount:n}}document.head.appendChild(zi.content);function Ri(e,t,n,i,o,s){let r,a=0,l=0,d=Math.min(n-t,s-o);if(0==t&&0==o&&(a=function(e,t,n){for(let i=0;i<n;i++)if(!$i(e[i],t[i]))return i;return n}(e,i,d)),n==e.length&&s==i.length&&(l=function(e,t,n){let i=e.length,o=t.length,s=0;for(;s<n&&$i(e[--i],t[--o]);)s++;return s}(e,i,d-a)),o+=a,s-=l,(n-=l)-(t+=a)==0&&s-o==0)return[];if(t==n){for(r=Bi(t,[],0);o<s;)r.removed.push(i[o++]);return[r]}if(o==s)return[Bi(t,[],n-t)];let c=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],o=[];for(;t>0||n>0;){if(0==t){o.push(2),n--;continue}if(0==n){o.push(3),t--;continue}let s,r=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];s=a<l?a<r?a:r:l<r?l:r,s==r?(r==i?o.push(0):(o.push(1),i=r),t--,n--):s==a?(o.push(3),t--,i=a):(o.push(2),n--,i=l)}return o.reverse(),o}(function(e,t,n,i,o,s){let r=s-o+1,a=n-t+1,l=new Array(r);for(let e=0;e<r;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<r;n++)for(let s=1;s<a;s++)if($i(e[t+s-1],i[o+n-1]))l[n][s]=l[n-1][s-1];else{let e=l[n-1][s]+1,t=l[n][s-1]+1;l[n][s]=e<t?e:t}return l}(e,t,n,i,o,s));r=void 0;let h=[],u=t,p=o;for(let e=0;e<c.length;e++)switch(c[e]){case 0:r&&(h.push(r),r=void 0),u++,p++;break;case 1:r||(r=Bi(u,[],0)),r.addedCount++,u++,r.removed.push(i[p]),p++;break;case 2:r||(r=Bi(u,[],0)),r.addedCount++,u++;break;case 3:r||(r=Bi(u,[],0)),r.removed.push(i[p]),p++}return r&&h.push(r),h}function Fi(e,t){return Ri(e,0,e.length,t,0,t.length)}function $i(e,t){return e===t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Hi(e){return"slot"===e.localName}let Vi=class{static getFlattenedNodes(e){const t=it(e);return Hi(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Hi(e)?it(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Hi(this._target)?this._listenSlots([this._target]):it(this._target).children&&(this._listenSlots(it(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Hi(this._target)?this._unlistenSlots([this._target]):it(this._target).children&&(this._unlistenSlots(it(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,St.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Fi(t,this._effectiveNodes);for(let t,i=0;i<n.length&&(t=n[i]);i++)for(let n,i=0;i<t.removed.length&&(n=t.removed[i]);i++)e.removedNodes.push(n);for(let i,o=0;o<n.length&&(i=n[o]);o++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Hi(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Hi(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */const qi=e=>class extends((e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new Vi(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,n,i){if(!i&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(n);const i=e[n];e.forEach(e=>e.selected=e===i),i&&!i.disabled&&this._scrollToItem(n)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let n;t&&!t.disabled&&(n=this.items.indexOf(t))>=0&&(this.selected=n)}_searchKey(e,t){this._searchReset=xn.debounce(this._searchReset,xt.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const n=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(n,1,e=>!e.disabled&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),n=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(n,t);return void(e>=0&&this._focus(e))}let i,o;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(o=-1,i=n-1):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(o=1,i=n+1):"Home"===t?(o=1,i=0):"End"===t&&(o=-1,i=this.items.length-1),i=this._getAvailableIndex(i,o,e=>!e.disabled),i>=0&&(this._focus(i),e.preventDefault())}_getAvailableIndex(e,t,n){const i=this.items.length;for(let o=0;"number"==typeof e&&o<i;o++,e+=t||1){if(e<0?e=i-1:e>=i&&(e=0),n(this.items[e]))return e}return-1}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const n=this._vertical?["top","bottom"]:["left","right"],i=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||t).getBoundingClientRect(),s=(this.items[e-1]||t).getBoundingClientRect();let r=0;o[n[1]]>=i[n[1]]?r=o[n[1]]-i[n[1]]:s[n[0]]<=i[n[0]]&&(r=s[n[0]]-i[n[0]]),this._scroll(r)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=e}})
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,n,i){if(!e||!t)return;if(i){const t=i.map(t=>e[t]);e.forEach(e=>e.selected=-1!==t.indexOf(e))}const o=this.selectedValues.slice(-1)[0];o&&!o.disabled&&this._scrollToItem(o)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],n=t&&!t.disabled?this.items.indexOf(t):-1;n<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(n)?this.selectedValues=this.selectedValues.filter(e=>e!==n):this.selectedValues=this.selectedValues.concat(n))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class ji extends(Ci(qi(ci(wn)))){static get template(){return Xe`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.2.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof wn||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(ji.is,ji),
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
ei({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};const t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{const n=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,n.clientX,n.clientY)),ii("tap"))},500)},touchmove:function(e){const t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),ii("tap"))},fire:function(e,t,n){const i=this.info.sourceEvent,o=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});o.detail={x:t,y:n,sourceEvent:i},e.dispatchEvent(o),o.defaultPrevented&&i&&i.preventDefault&&i.preventDefault()}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class Yi{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Wi(e){return function e(t,n){let i=n.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;i=n.substring(e,t.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(Ki.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let o=t.parsedSelector=t.selector=i.trim();t.atRule=0===o.indexOf(eo),t.atRule?0===o.indexOf(Zi)?t.type=Qi.MEDIA_RULE:o.match(Ki.keyframesRule)&&(t.type=Qi.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Ki.multipleSpaces).pop()):0===o.indexOf(Xi)?t.type=Qi.MIXIN_RULE:t.type=Qi.STYLE_RULE}let o=t.rules;if(o)for(let t,i=0,s=o.length;i<s&&(t=o[i]);i++)e(t,n);return t}(function(e){let t=new Yi;t.start=0,t.end=e.length;let n=t;for(let i=0,o=e.length;i<o;i++)if(e[i]===Gi){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new Yi,n.start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===Ji&&(n.end=i+1,n=n.parent||t);return t}(e=e.replace(Ki.comments,"").replace(Ki.port,"")),e)}function Ui(e,t,n=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Xi)}(n))for(let e,o=0,s=n.length;o<s&&(e=n[o]);o++)i=Ui(e,t,i);else i=t?e.cssText:function(e){return function(e){return e.replace(Ki.mixinApply,"").replace(Ki.varApply,"")}(e=function(e){return e.replace(Ki.customProp,"").replace(Ki.mixinProp,"")}(e))}(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(n+=e.selector+" "+Gi+"\n"),n+=i,e.selector&&(n+=Ji+"\n\n")),n}const Qi={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Gi="{",Ji="}",Ki={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Xi="--",Zi="@media",eo="@",to=new Set;function no(e){const t=e.textContent;if(!to.has(t)){to.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function io(e){return e.hasAttribute("shady-unscoped")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function oo(e,t){return e?("string"==typeof e&&(e=Wi(e)),t&&ro(e,t),Ui(e,Ae)):""}function so(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Wi(e.textContent)),e.__cssRules||null}function ro(e,t,n,i){if(!e)return;let o=!1,s=e.type;if(i&&s===Qi.MEDIA_RULE){let t=e.selector.match(pe);t&&(window.matchMedia(t[1]).matches||(o=!0))}s===Qi.STYLE_RULE?t(e):n&&s===Qi.KEYFRAMES_RULE?n(e):s===Qi.MIXIN_RULE&&(o=!0);let r=e.rules;if(r&&!o)for(let e,o=0,s=r.length;o<s&&(e=r[o]);o++)ro(e,t,n,i)}window.ShadyDOM&&window.ShadyDOM.wrap;function ao(e){if(void 0!==ve)return ve;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(e),e.__cssBuild=t}}return e.__cssBuild||""}function lo(e){return""!==ao(e)}const co=/;\s*/m,ho=/^\s*(initial)|(inherit)\s*$/,uo=/\s*!important/;class po{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let mo=null;class fo{constructor(){this._currentElement=null,this._measureElement=null,this._map=new po}detectMixin(e){return function(e){const t=ue.test(e)||he.test(e);return ue.lastIndex=0,he.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const i=n[e];io(i)?_e||(no(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=so(e);return this.transformRules(n,t),e.textContent=oo(n),n}transformCustomStyle(e){let t=so(e);return ro(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=oo(t),t}transformRules(e,t){this._currentElement=t,ro(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(he,(e,n,i,o)=>this._produceCssProperties(e,n,i,o,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return ro(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=ue.exec(e);){let i=n[0],o=n[1],s=n.index,r=s+i.indexOf("@apply"),a=s+i.length,l=e.slice(0,r),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let h=this._atApplyToCssProperties(o,c);e=`${l}${h}${d}`,ue.lastIndex=s+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(co,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let o,s,r;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(o in a)r=t&&t[o],s=[o,": var(",e,"_-_",o],r&&s.push(",",r.replace(uo,"")),s.push(")"),uo.test(a[o])&&s.push(" !important"),n.push(s.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=ho.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,o=e.split(";"),s={};for(let e,r,a=0;a<o.length;a++)e=o[a],e&&(r=e.split(":"),r.length>1&&(n=r[0].trim(),i=r.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),s[n]=i));return s}_invalidateMixinEntry(e){if(mo)for(let t in e.dependants)t!==this._currentElement&&mo(t)}_produceCssProperties(e,t,n,i,o){if(n&&function e(t,n){let i=t.indexOf("var(");if(-1===i)return n(t,"","","");let o=function(e,t){let n=0;for(let i=t,o=e.length;i<o;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}(t,i+3),s=t.substring(i+4,o),r=t.substring(0,i),a=e(t.substring(o+1),n),l=s.indexOf(",");return-1===l?n(r,s.trim(),"",a):n(r,s.substring(0,l).trim(),s.substring(l+1).trim(),a)}(n,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let s=this._consumeCssProperties(""+i,o),r=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let h,u,p=[],m=!1;for(h in l)u=a[h],void 0===u&&(u="initial"),!c||h in c||(m=!0),p.push(`${t}_-_${h}: ${u}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),n&&(r=`${e};${r}`),`${r}${p.join("; ")};`}}fo.prototype.detectMixin=fo.prototype.detectMixin,fo.prototype.transformStyle=fo.prototype.transformStyle,fo.prototype.transformCustomStyle=fo.prototype.transformCustomStyle,fo.prototype.transformRules=fo.prototype.transformRules,fo.prototype.transformRule=fo.prototype.transformRule,fo.prototype.transformTemplate=fo.prototype.transformTemplate,fo.prototype._separator="_-_",Object.defineProperty(fo.prototype,"invalidCallback",{get:()=>mo,set(e){mo=e}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const _o={},go="_applyShimCurrentVersion",vo="_applyShimNextVersion",bo=Promise.resolve();
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function yo(e){let t=_o[e];t&&function(e){e[go]=e[go]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[vo]=(e[vo]||0)+1}(t)}function Ao(e){return e[go]===e[vo]}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const wo=new fo;class xo{constructor(){this.customStyleInterface=null,wo.invalidCallback=yo}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{wo.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),lo(e))return;_o[t]=e;let n=wo.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&wo.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&me(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}(e),n=_o[t];if((!n||!lo(n))&&n&&!Ao(n)){(function(e){return!Ao(e)&&e._applyShimValidatingVersion===e[vo]})(n)||(this.prepareTemplate(n,t),function(e){e._applyShimValidatingVersion=e[vo],e._validating||(e._validating=!0,bo.then((function(){e[go]=e[vo],e._validating=!1})))}(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=oo(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new xo;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>fe(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Ae,nativeShadow:_e,cssBuild:ve,disableRuntime:ye},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=wo;
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */
const Co=/:host\(:dir\((ltr|rtl)\)\)/g,Eo=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,So=/:dir\((?:ltr|rtl)\)/,ko=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Po=[];let Oo=null,To="";function Io(){To=document.documentElement.getAttribute("dir")}function Do(e){if(!e.__autoDirOptOut){e.setAttribute("dir",To)}}function Mo(){Io(),To=document.documentElement.getAttribute("dir");for(let e=0;e<Po.length;e++)Do(Po[e])}const Lo=nt(e=>{ko||Oo||(Io(),Oo=new MutationObserver(Mo),Oo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=It(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!ko&&So.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Co,':host([dir="$1"])'),t=t.replace(Eo,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Oo&&Oo.takeRecords().length&&Mo(),Po.push(this),Do(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Po.indexOf(this);e>-1&&Po.splice(e,1)}}}return n.__activateDir=!1,n});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let No=!1,zo=[],Bo=[];function Ro(){No=!0,requestAnimationFrame((function(){No=!1,function(e){for(;e.length;)Fo(e.shift())}(zo),setTimeout((function(){!function(e){for(let t=0,n=e.length;t<n;t++)Fo(e.shift())}(Bo)}))}))}function Fo(e){const t=e[0],n=e[1],i=e[2];try{n.apply(t,i)}catch(e){setTimeout(()=>{throw e})}}function $o(e,t,n){No||Ro(),zo.push([e,t,n])}function Ho(e,t,n){No||Ro(),Bo.push([e,t,n])}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Vo(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?Vo():window.addEventListener("DOMContentLoaded",Vo)
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */;const qo=Element.prototype,jo=qo.matches||qo.matchesSelector||qo.mozMatchesSelector||qo.msMatchesSelector||qo.oMatchesSelector||qo.webkitMatchesSelector,Yo=function(e,t){return jo.call(e,t)};class Wo{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Vi(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(it(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=it(t).parentNode||it(t).host;return t===this.node}getOwnerRoot(){return it(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?it(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=it(this.node).assignedSlot;for(;t;)e.push(t),t=it(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return it(n).importNode(e,t)}getEffectiveChildNodes(){return Vi.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,o=0,s=t.length;o<s&&(i=t[o]);o++)i.nodeType===Node.ELEMENT_NODE&&Yo(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Uo(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class Qo{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Wo.prototype.cloneNode,Wo.prototype.appendChild,Wo.prototype.insertBefore,Wo.prototype.removeChild,Wo.prototype.replaceChild,Wo.prototype.setAttribute,Wo.prototype.removeAttribute,Wo.prototype.querySelector,Wo.prototype.querySelectorAll,Wo.prototype.parentNode,Wo.prototype.firstChild,Wo.prototype.lastChild,Wo.prototype.nextSibling,Wo.prototype.previousSibling,Wo.prototype.firstElementChild,Wo.prototype.lastElementChild,Wo.prototype.nextElementSibling,Wo.prototype.previousElementSibling,Wo.prototype.childNodes,Wo.prototype.children,Wo.prototype.classList,Wo.prototype.textContent,Wo.prototype.innerHTML;let Go=Wo;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Wo.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=Wo.prototype[t])}),Uo(e.prototype,["classList"]),Go=e,Object.defineProperties(Qo.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Jo(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const i=n[e];if(Jo(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(Wo.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Uo(Wo.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(Wo.prototype,["textContent","innerHTML","className"]);const Jo=function(e){if((e=e||document)instanceof Go)return e;if(e instanceof Qo)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Qo(e):new Go(e),e.__domApi=t),t},Ko=window.ShadyDOM,Xo=window.ShadyCSS;
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Zo(e,t){return it(e).getRootNode()===t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let es=window.ShadyCSS;const ts=nt(e=>{const t=Lo(li(An(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,o=0;o<n.length&&(i=n[o]);o++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let o=n.node||this;return it(o).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),o=i.get(e);o||(o={},i.set(e,o));let s=t+n;o[s]||(o[s]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),o=t+n,s=i&&i[o];s&&(this._removeEventListenerFromNode(e,t,s),i[o]=null)}setScrollDirection(e,t){ti(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=it(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Jo(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Jo(this).getEffectiveChildNodes()}queryDistributedElements(e){return Jo(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Jo(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&it(this).contains(e)&&it(this).getRootNode()===it(e).getRootNode()}isLocalDescendant(e){return this.root===it(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Ko||!Xo)return null;if(!Ko.handlesDynamicScoping)return null;const n=Xo.ScopingShim;if(!n)return null;const i=n.scopeForNode(e),o=it(e).getRootNode(),s=e=>{if(!Zo(e,o))return;const t=Array.from(Ko.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const s=t[e];if(!Zo(s,o))continue;const r=n.currentScopeForNode(s);r!==i&&(""!==r&&n.unscopeNode(s,r),n.scopeNode(s,i))}};if(s(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&s(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return es.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=xn.debounce(this._debouncers[e],n>0?xt.after(n):St,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?xt.run(e.bind(this),t):~St.run(e.bind(this))}cancelAsync(e){e<0?St.cancel(~e):xt.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return Yo(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(it(n).setAttribute(e,""),!0):(it(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else{if(n=ht(this,e).indexOf(t),n>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i}),ns={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},is={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},os=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},is);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function ss(e,t){return ls({},ts(t),e)}function rs(e,t,n,i){!function(e,t,n){const i=e._noAccessors,o=Object.getOwnPropertyNames(e);for(let s=0;s<o.length;s++){let r=o[s];if(!(r in n))if(i)t[r]=e[r];else{let n=Object.getOwnPropertyDescriptor(e,r);n&&(n.configurable=!0,Object.defineProperty(t,r,n))}}}(t,e,i);for(let e in ns)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function as(e,t){for(const n in t){const i=e[n],o=t[n];e[n]=!("value"in o)&&i&&"value"in i?Object.assign({value:i.value},o):o}}function ls(e,t,n){let i;const o={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)as(t,i[e].properties);return as(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)e=i[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=o.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=s.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let n=o.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=o.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=o.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=o.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=o.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=o.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=o.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=o.attributeChanged;if(i)for(let o=0;o<i.length;o++)i[o].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=function e(t,n,i){n=n||[];for(let o=t.length-1;o>=0;o--){let s=t[o];s?Array.isArray(s)?e(s,n):n.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&n.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),s.prototype.behaviors=e?e.concat(n):i}return(t=>{i&&function(e,t,n){for(let i=0;i<t.length;i++)rs(e,t[i],n,os)}(t,i,o),rs(t,e,o,is)})(s.prototype),s.generatedFrom=e,s}const ds=function(e){let t;return t="function"==typeof e?e:ds.Class(e),customElements.define(t.is,t),t};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function cs(e,t,n,i,o){let s;o&&(s="object"==typeof n&&null!==n,s&&(i=e.__dataTemp[t]));let r=i!==n&&(i==i||n==n);return s&&r&&(e.__dataTemp[t]=n),r}ds.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(ts(HTMLElement)):ts(HTMLElement);return n=ls(e,n,e.behaviors),n.is=n.prototype.is=e.is,n};const hs=nt(e=>class extends e{_shouldPropertyChange(e,t,n){return cs(this,e,t,n,!0)}}),us=nt(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return cs(this,e,t,n,this.mutableData)}});hs._mutablePropertyChange=cs;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let ps=null;function ms(){return ps}ms.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ms,writable:!0}});const fs=gn(ms),_s=hs(fs);const gs=gn(class{});class vs extends gs{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),it(it(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&it(it(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}vs.prototype.__dataHost,vs.prototype.__templatizeOptions,vs.prototype._methodHost,vs.prototype.__templatizeOwner,vs.prototype.__hostProps;const bs=hs(vs);function ys(e,t,n){let i=n.mutableData?bs:vs;Cs.mixin&&(i=Cs.mixin(i));let o=class extends i{};return o.prototype.__templatizeOptions=n,o.prototype._bindTemplate(e),function(e,t,n,i){let o=n.hostProps||{};for(let t in i.instanceProps){delete o[t];let n=i.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:xs(t,n)})}if(i.forwardHostProp&&t.__dataHost)for(let t in o)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(o,e,t,n),o}function As(e,t,n){let i=n.forwardHostProp;if(i&&t.hasHostProps){let o=t.templatizeTemplateClass;if(!o){let e=n.mutableData?_s:fs;o=t.templatizeTemplateClass=class extends e{};let s=t.hostProps;for(let e in s)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ws(e,i)}),o.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){ps=e,Object.setPrototypeOf(e,t.prototype),new t,ps=null}(e,o),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function ws(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring("_host_".length),i[n])}}function xs(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function Cs(e,t,n){if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:vs)._parseTemplate(e),o=i.templatizeInstanceClass;o||(o=ys(e,i,n),i.templatizeInstanceClass=o),As(e,i,n);let s=class extends o{};return s.prototype._methodHost=function(e){let t=e.__dataHost;return t&&t._methodHost||t}(e),s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=i.hostProps,s=s,s}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const Es=li(us(gn(HTMLElement)));customElements.define("dom-bind",class extends Es{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,i){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){it(it(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const Ss=us(wn);class ks extends Ss{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=it(it(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Cs(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let i,o=0;o<n.length&&(i=n[o]);o++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((i=this.as)===(o=t)||rt(i,o)||at(i,o)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let o=lt(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(o,n)}var i,o}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=xn.debounce(this.__renderDebouncer,t>0?xt.after(t):St,e.bind(this)),En(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ui()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,i)=>this.__filterFn(e[t],n,i))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const o=Math.min(t.length,this.__limit);for(;i<o;i++){let o=this.__instances[i],s=t[i],r=e[s];n[s]=i,o?(o._setPendingProperty(this.as,r),o._setPendingProperty(this.indexAs,i),o._setPendingProperty(this.itemsIndexAs,s),o._flushProperties()):this.__insertInstance(r,i,s)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=it(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];n.appendChild(i)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,e),i._setPendingProperty(this.indexAs,t),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(e,t,n);let o=this.__instances[t+1],s=o?o.children[0]:this;return it(it(this).parentNode).insertBefore(i.root,s),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),o=i<0?n:n.substring(0,i);if(o==parseInt(o,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let s=this.__itemsIdxToInstIdx[o],r=this.__instances[s];if(r){let n=this.as+(e?"."+e:"");r._setPendingPropertyOrPath(n,t,!1,!0),r._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=it(t).parentNode;return null}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(this.template,e)}}customElements.define(ks.is,ks);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class Ps extends wn{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=xn.debounce(this.__renderDebouncer,St,()=>this.__render()),En(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=it(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||it(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){ui()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=it(this).parentNode;if(e){if(!this.__ctor){let e=it(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!it(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Cs(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[st(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(it(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)it(e).insertBefore(n,this)}}else this.__instance=new this.__ctor,it(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=it(e[0]).parentNode;if(t){t=it(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ps.is,Ps);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Os=nt(e=>{let t=An(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Fi(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let i=e[n];t.forEach((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))});for(let e=0;e<i.addedCount;e++){let n=i.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(wn);class Ts extends Os{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ts.is,Ts);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
ts(HTMLElement).prototype;
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */ds({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Is extends class extends wn{}{static get template(){return Xe`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(Is.is,Is);class Ds extends Ni{static get is(){return"vaadin-context-menu-item"}}class Ms extends ji{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(Ds.is,Ds),customElements.define(Ms.is,Ms);const Ls=Element.prototype,Ns=Ls.matches||Ls.matchesSelector||Ls.mozMatchesSelector||Ls.msMatchesSelector||Ls.oMatchesSelector||Ls.webkitMatchesSelector,zs={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return Ns.call(e,"input, select, textarea, button, object")?Ns.call(e,":not([disabled])"):Ns.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&Ns.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const n=e,i=this._normalizedTabIndex(n);let o,s=i>0;if(i>=0&&t.push(n),o="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children,o)for(let e=0;e<o.length;e++)s=this._collectTabbableNodes(o[e],t)||s;return s},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const n=Math.ceil(t/2),i=this._sortByTabIndex(e.slice(0,n)),o=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(i,o)},_mergeSortByTabIndex:function(e,t){const n=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)},_hasLowerTabOrder:function(e,t){const n=Math.max(e.tabIndex,0),i=Math.max(t.tabIndex,0);return 0===n||0===i?i>n:n>i}};
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
let Bs=0;const Rs={},Fs=e=>{Bs++;const t=`vaadin-overlay-content-${Bs}`,n=document.createElement("template"),i=document.createElement("style");i.textContent=":host { display: block; }"+e,n.content.appendChild(i),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(n,t);const o=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(n.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(o.is,o),Rs[e]=t,t};class $s extends(ci(wn)){static get template(){return Xe`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new Vi(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,n=document.documentElement.clientHeight;t&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Ho(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const n=`__${e}Handler`,i=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",i),delete this[n])};this[n]=i,this.addEventListener("animationend",i)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof $s).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===$s.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),$s.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=$s.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Cs(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const n=e._templateRoot||(e._templateRoot=e.getRootNode());if(n!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(n.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(n.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=Rs[e]||Fs(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,n,i){e!==t?this.template=void 0:n!==i&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,n,i,o,s){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==n||this._oldModel!==i;this._oldModel=i,this._oldOwner=n;const a=this._oldInstanceProps!==o||this._oldTemplate!==e;this._oldInstanceProps=o,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==s;if(this._oldOpened=s,e&&a)this._stampOverlayTemplate(e,o);else if(t&&(l||d||r)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);s&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const n=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(n)),(t+=e)>=n.length?t=0:t<0&&(t=n.length-1),n[t].focus()}_getFocusableElements(){return zs.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const n=e.ownerDocument;for(;t&&t!==n&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=$s.__attachedInstances.filter(e=>e!==this).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define($s.is,$s);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Hs=document.createElement("template");Hs.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Hs.content);class Vs extends $s{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let n=e.bottom-t.height;const i=this.parentOverlay;if(i&&i.hasAttribute("bottom-aligned")){const e=getComputedStyle(i);n=n-parseFloat(e.bottom)-parseFloat(e.height)}return{xMax:e.right-t.width,yMax:n,left:e.left,top:e.top,width:t.width}}}customElements.define(Vs.is,Vs);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class qs extends(Ci(di((e=>class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){const n=e.parentOverlay.querySelector("[expanded]");n&&n.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;const n=t.getBoundingClientRect(),i=e.$.overlay.$.content,o=getComputedStyle(i),s=this.$.overlay,r=s.hasAttribute("bottom-aligned")?n.bottom+parseFloat(o.paddingBottom):n.top-parseFloat(o.paddingTop);let a;e.$.overlay._setParentOverlay(s),s.theme?e.setAttribute("theme",s.theme):e.removeAttribute("theme"),i.style.minWidth="",document.documentElement.clientWidth-n.right>n.width?a=n.right:(a=n.left-n.width,i.style.minWidth=s.$.content.clientWidth+"px"),a=Math.max(a,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:a,y:r,children:t._item.children}}))}__itemsRenderer(e,t,n){this.__initMenu(e,t),e.querySelector(this.constructor.is).closeOn=t.closeOn;const i=e.querySelector("vaadin-context-menu-list-box");i.innerHTML="",Array.from(n.detail.children||t.items).forEach(e=>{let t;t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item"),t instanceof Ni?(t.setAttribute("role","menuitem"),t.classList.add("vaadin-menu-item")):"hr"===t.localName&&t.setAttribute("role","separator"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),i.appendChild(t)})}__toggleMenuComponentAttribute(e,t,n){n?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){const t=e.querySelector("vaadin-context-menu-list-box");this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme")}else{const n=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${n} hidden></${n}>\n      `,ui();const i=e.querySelector("vaadin-context-menu-list-box");this.theme&&i.setAttribute("theme",this.theme),i.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>i.setAttribute("role","menu"));const o=e.querySelector(n);o.$.overlay.modeless=!0,o.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&o.close()),o.addEventListener("opened-changed",e=>{if(!e.detail.value){const e=i.querySelector("[expanded]");e&&(e.setAttribute("aria-expanded","false"),e.removeAttribute("expanded"))}}),i.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){const n=e.target.items[e.detail.value]._item;if(!n.children){const e={value:n};t.dispatchEvent(new CustomEvent("item-selected",{detail:e}))}i.selected=null}}),o.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),o.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{37===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);const s=(e,n=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>s(e,n));else if(n){if(o.items!==n._item.children&&o.close(),!t.opened)return;n._item.children&&n._item.children.length?(n.setAttribute("aria-expanded","true"),n.setAttribute("expanded",""),this.__openSubMenu(o,n)):o.listenOn.focus()}};t.$.overlay.addEventListener("mouseover",s),t.$.overlay.addEventListener("keydown",e=>(39===e.keyCode||13===e.keyCode||32===e.keyCode)&&s(e))}}})(li(wn))))){static get template(){return Xe`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.3.15"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._observer=new Vi(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.msUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.msUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,n,i){e!==t?this._contentTemplate=void 0:n!==i&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,n,i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,i){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&n&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const n=this.$.overlay.style;n[e]=(parseInt(n[e])||0)+t+"px"}__alignOverlayPosition(){const e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));const{xMax:n,yMax:i,left:o,top:s,width:r}=e.getBoundaries();let a=this.__x||o;const l=this.__y||s,d=document.documentElement.clientWidth,c=document.documentElement.clientHeight,h=e.parentOverlay;let u,p=!1;if(h)if(u=h.$.overlay.getBoundingClientRect(),h.hasAttribute("right-aligned")){const n=getComputedStyle(h),i=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),o=parseFloat(n.right)+u.width;d-(o-(i(h,"Left")+i(e,"Right")))>r&&(e.setAttribute("right-aligned",""),t.right=o+"px",p=!0)}else a<u.x&&(a-=r-u.width);p||((a<d/2||a<n)&&!h?t.left=a+"px":h&&d-u.width-u.left>=u.width?t.left=u.left+u.width+"px":h?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left,u.left-e.getBoundingClientRect().width)+"px",e.setAttribute("right-aligned","")):(t.right=Math.max(0,d-a)+"px",e.setAttribute("right-aligned",""))),l<c/2||l<i?t.top=l+"px":(t.bottom=Math.max(0,c-l)+"px",e.setAttribute("bottom-aligned",""))}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){const n="client"+t.toUpperCase(),i=e.changedTouches?e.changedTouches[0][n]:e[n];if(0===i){const n=e.target.getBoundingClientRect();return"x"===t?n.left:n.top+n.height}return i}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,n){Qn[t]?Xn(e,t,n):e.addEventListener(t,n)}_unlisten(e,t,n){Qn[t]?Zn(e,t,n):e.removeEventListener(t,n)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(qs.is,qs);
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
var js=new Set;const Ys={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(js.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():Te||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Jo(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(js.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?js.delete(this):js.add(this)}};
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Ws extends qs{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(Ws.is,Ws);
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Us extends((e=>class extends(ss(Ys,e)){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}ready(){super.ready(),this.setAttribute("role","menubar"),this.addEventListener("iron-resize",e=>this.__onResize()),this._overflow.setAttribute("role","menuitem"),this._overflow.setAttribute("aria-haspopup","true"),this._overflow.setAttribute("aria-expanded","false")}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e,t){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__detectOverflow(){const e=this._container,t=this._buttons.slice(0),n=t.pop(),i=e.offsetWidth;if(e.offsetWidth<e.scrollWidth){let e;for(this._hasOverflow=!0,e=t.length;e>0;e--){const o=t[e-1],s=getComputedStyle(o);if("hidden"===s.visibility)continue;const r=o.offsetWidth;if(o.offsetLeft+r<i-n.offsetWidth)break;o.disabled=!0,o.style.visibility="hidden",o.style.position="absolute",o.style.width=s.width}n.item={children:t.filter((t,n)=>n>=e).map(e=>e.item)}}else if(this._hasOverflow){this._subMenu.opened&&this._subMenu.close();for(let e=0;e<t.length;e++){const o=t[e];if("hidden"!==getComputedStyle(o).visibility)continue;const s=n.offsetLeft,r=o.getBoundingClientRect().width;if(!(s+n.offsetWidth+r<i))break;{o.disabled=o.item.disabled,o.style.visibility="",o.style.position="",o.style.width="";const i=o.item&&o.item.component;i instanceof HTMLElement&&i.classList.contains("vaadin-menu-item")&&(o.appendChild(i),i.classList.remove("vaadin-menu-item")),n.item={children:t.filter((t,n)=>n>=e+1).map(e=>e.item)},o===t[t.length-1]&&(this._hasOverflow=!1,n.item={children:[]})}}}}render(){this.shadowRoot&&this.__renderButtons(this.items)}__renderButtons(e=[]){const t=this._container,n=this._overflow;for(;t.children.length>1;)t.removeChild(t.firstElementChild);e.forEach(e=>{const i=document.createElement("vaadin-menu-bar-button"),o=Object.assign({},e);i.item=o;const s=e.component;if(s){let t;const n=s instanceof HTMLElement;if(n&&"vaadin-context-menu-item"===s.localName?t=s:(t=document.createElement("vaadin-context-menu-item"),t.appendChild(n?s:document.createElement(s))),e.text){(t.firstChild||t).textContent=e.text}o.component=t,t.item=o,t.setAttribute("theme","menu-bar-item"),i.appendChild(t)}else e.text&&(i.textContent=e.text);e.disabled?(i.disabled=!0,i.setAttribute("tabindex","-1")):i.setAttribute("tabindex","0"),i.item.children&&(i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded","false")),i.setAttribute("part","menu-bar-button"),this.theme&&""!==this.theme&&i.setAttribute("theme",this.theme),t.insertBefore(i,n),i.setAttribute("role","menuitem")}),this.__detectOverflow()}__onResize(){this.__debounceOverflow=xn.debounce(this.__debounceOverflow,Ct,this.__detectOverflow.bind(this))}})
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */((e=>class extends e{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)","_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("focusin",e=>this._onFocusin(e)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));const e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));const t=this._container;t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",e=>this._onMouseOver(e))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.__boundOutsideClickListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.__boundOutsideClickListener,!0)}_themeChanged(e){e?(this._buttons.forEach(t=>t.setAttribute("theme",e)),this._subMenu.setAttribute("theme",e)):(this._buttons.forEach(e=>e.removeAttribute("theme")),this._subMenu.removeAttribute("theme"))}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(e=>"vaadin-menu-bar-button"===e.localName)[0]}_onFocusin(e){const t=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');t&&this._buttons.forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}_onKeydown(e){const t=this._getButtonFromEvent(e);t&&(40===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,e)):38===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,e,{focusLast:!0})):27===e.keyCode&&t===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){const t=e.key.replace(/^Arrow/,""),n=this._buttons,i=this.shadowRoot.activeElement||this._expandedButton,o=n.indexOf(i);let s,r;switch(t){case"Left":r=-1,s=o-1;break;case"Right":r=1,s=o+1;break;case"Home":r=1,s=0;break;case"End":r=-1,s=n.length-1}if(s=this._getAvailableIndex(s,r,n),s>=0){e.preventDefault();const t=n[s],o=i===this._expandedButton;o&&this._close(),this._focusButton(t),o&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}_getAvailableIndex(e,t,n){const i=n.length;let o=e;for(let e=0;"number"==typeof o&&e<i;e++,o+=t||1){o<0?o=i-1:o>=i&&(o=0);const e=n[o];if(!e.disabled&&!e.hasAttribute("hidden"))return o}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(!this._expandedButton)return;const t=e.target,{width:n,height:i}=this._expandedButton.getBoundingClientRect();t.hasAttribute("bottom-aligned")&&(t.style.bottom=parseInt(getComputedStyle(t).bottom)+i+"px"),t.hasAttribute("right-aligned")&&(t.style.right=parseInt(getComputedStyle(t).right)-n+"px")}_itemsChanged(e,t){const n=this._subMenu;n&&n.opened&&n.close()}_onMouseOver(e){const t=this._getButtonFromEvent(e);if(t&&t!==this._expandedButton){const n=this._subMenu.opened;t.item.children&&(this.openOnHover||n)?this.__openSubMenu(t,e):n&&this._close()}}__onContextMenuKeydown(e){const t=Array.from(e.composedPath()).filter(e=>e._item)[0];if(t){const n=t.parentNode;if(38===e.keyCode&&t===n.items[0]&&this._close(!0),37===e.keyCode||39===e.keyCode&&!t._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);const t=this.shadowRoot.activeElement;t&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,e)}__openSubMenu(e,t,n={}){const i=this._subMenu,o=e.item;if(i.opened&&(this._close(),i.listenOn===e))return;const s=o&&o.children;if(!s||0===s.length)return void this.__fireItemSelected(o);i.items=s,i.listenOn=e,this._expandedButton=e;const r=e.getBoundingClientRect();requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:r.left,y:r.bottom,children:s}})),e.setAttribute("expanded",""),e.setAttribute("aria-expanded","true")}),n.focusLast&&this.__onceOpened(()=>this._focusLastItem()),n.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),"keydown"!==t.type&&this.__onceOpened(()=>{i.$.overlay.$.overlay.focus()})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onceOpened(e){this.style.pointerEvents="auto";const t=this._subMenu.$.overlay,n=()=>{e(),t.removeEventListener("vaadin-overlay-open",n)};t.addEventListener("vaadin-overlay-open",n)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(e){this.__deactivateButton(!0)}__deactivateButton(e){const t=this._expandedButton;t&&t.hasAttribute("expanded")&&(t.removeAttribute("expanded"),t.setAttribute("aria-expanded","false"),e&&this._focusButton(t),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}})(Ci(ci(wn))))){static get template(){return Xe`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="container"] {
        position: relative;
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        overflow: hidden;
      }

      [part\$="button"] {
        flex-shrink: 0;
      }

      [part="overflow-button"] {
        margin-right: 0;
      }

      .dots::before {
        display: block;
        content: "\\00B7\\00B7\\00B7";
        font-size: inherit;
        line-height: inherit;
      }
    </style>

    <div part="container">
      <vaadin-menu-bar-button part="overflow-button" hidden\$="[[!_hasOverflow]]">
        <div class="dots"></div>
      </vaadin-menu-bar-button>
    </div>
    <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
`}static get is(){return"vaadin-menu-bar"}static get version(){return"1.0.5"}static get properties(){return{items:{type:Array,value:()=>[]}}}}function Qs(e){let n,i,o;return{c(){n=h("svelte-head"),i=p(),o=h("vaadin-menu-bar"),this.c=t,_(o,"theme","dark"),_(o,"class","vaadin-menu")},m(t,s){l(t,n,s),l(t,i,s),l(t,o,s),e[8](o)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(i),t&&d(o),e[8](null)}}}function Gs(e,t,n){let i=null,{theme:o="default"}=t,{logo:s=""}=t,{name:r="CMS"}=t,{values:a=[]}=t,l=[];function d(e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}return w(async()=>{i.addEventListener("item-selected",(function(e){d("item-clicked",e.detail.value)}))}),e.$set=e=>{"theme"in e&&n(1,o=e.theme),"logo"in e&&n(2,s=e.logo),"name"in e&&n(3,r=e.name),"values"in e&&n(4,a=e.values)},e.$$.update=()=>{49&e.$$.dirty&&a&&a.length&&(n(5,l=a.map(e=>(e.text=e.label,e.children&&(e.children=e.children.map(e=>(e.text=e.label,e))),e))),i&&n(0,i.items=l,i))},[i,o,s,r,a,l,function(){d("brand-clicked",{})},d,function(e){C[e?"unshift":"push"](()=>{n(0,i=e)})}]}customElements.define(Us.is,Us);class Js extends B{constructor(e){super(),z(this,{target:this.shadowRoot},Gs,Qs,r,{theme:1,logo:2,name:3,values:4}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["theme","logo","name","values"]}get theme(){return this.$$.ctx[1]}set theme(e){this.$set({theme:e}),D()}get logo(){return this.$$.ctx[2]}set logo(e){this.$set({logo:e}),D()}get name(){return this.$$.ctx[3]}set name(e){this.$set({name:e}),D()}get values(){return this.$$.ctx[4]}set values(e){this.$set({values:e}),D()}}function Ks(e){let n,i,o;return{c(){n=h("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',i=p(),o=h("footer"),o.innerHTML='<div class="footer-copyright text-center py-3">© 2020 Copyright:\n    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a></div>',this.c=t,f(o,"class","page-footer font-small blue")},m(e,t){l(e,n,t),l(e,i,t),l(e,o,t)},p:t,i:t,o:t,d(e){e&&d(n),e&&d(i),e&&d(o)}}}function Xs(e,t,n){let{theme:i="default"}=t,{logo:o=""}=t,{name:s="CMS"}=t;return e.$set=e=>{"theme"in e&&n(0,i=e.theme),"logo"in e&&n(1,o=e.logo),"name"in e&&n(2,s=e.name)},[i,o,s]}customElements.define("header-page",Js);class Zs extends B{constructor(e){super(),z(this,{target:this.shadowRoot},Xs,Ks,r,{theme:0,logo:1,name:2}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["theme","logo","name"]}get theme(){return this.$$.ctx[0]}set theme(e){this.$set({theme:e}),D()}get logo(){return this.$$.ctx[1]}set logo(e){this.$set({logo:e}),D()}get name(){return this.$$.ctx[2]}set name(e){this.$set({name:e}),D()}}function er(e,t,n){const i=e.slice();return i[5]=t[n],i}function tr(e,t,n){const i=e.slice();return i[2]=t[n],i}function nr(e,t,n){const i=e.slice();return i[5]=t[n],i}function ir(e){let t,n,i=e[5].label+"";return{c(){t=h("th"),n=u(i)},m(e,i){l(e,t,i),a(t,n)},p(e,t){1&t&&i!==(i=e[5].label+"")&&g(n,i)},d(e){e&&d(t)}}}function or(e){let t,n,i=e[2][e[5].id]+"";return{c(){t=h("td"),n=u(i)},m(e,i){l(e,t,i),a(t,n)},p(e,t){3&t&&i!==(i=e[2][e[5].id]+"")&&g(n,i)},d(e){e&&d(t)}}}function sr(e){let t,n,i=e[0],o=[];for(let t=0;t<i.length;t+=1)o[t]=or(er(e,i,t));return{c(){t=h("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=p()},m(e,i){l(e,t,i);for(let e=0;e<o.length;e+=1)o[e].m(t,null);a(t,n)},p(e,s){if(3&s){let r;for(i=e[0],r=0;r<i.length;r+=1){const a=er(e,i,r);o[r]?o[r].p(a,s):(o[r]=or(a),o[r].c(),o[r].m(t,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=i.length}},d(e){e&&d(t),c(o,e)}}}function rr(e){let n,i,o,s,r,u,m,_,g,v,b,y,A,w=e[0],x=[];for(let t=0;t<w.length;t+=1)x[t]=ir(nr(e,w,t));let C=e[1],E=[];for(let t=0;t<C.length;t+=1)E[t]=sr(tr(e,C,t));return{c(){n=h("link"),i=h("script"),s=h("script"),u=p(),m=h("table"),_=h("thead"),g=h("tr");for(let e=0;e<x.length;e+=1)x[e].c();v=p(),b=h("tbody");for(let e=0;e<E.length;e+=1)E[e].c();y=p(),A=h("ul"),A.innerHTML='<li class="page-item"><a class="page-link" href="#">Previous</a></li> \n  <li class="page-item"><a class="page-link" href="#">1</a></li> \n  <li class="page-item"><a class="page-link" href="#">2</a></li> \n  <li class="page-item"><a class="page-link" href="#">3</a></li> \n  <li class="page-item"><a class="page-link" href="#">Next</a></li>',this.c=t,f(n,"rel","stylesheet"),f(n,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),f(n,"integrity","sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"),f(n,"crossorigin","anonymous"),i.defer=!0,i.src!==(o="https://use.fontawesome.com/releases/v5.0.6/js/all.js")&&f(i,"src","https://use.fontawesome.com/releases/v5.0.6/js/all.js"),s.src!==(r="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js")&&f(s,"src","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"),f(s,"integrity","sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"),f(s,"crossorigin","anonymous"),f(m,"class","table"),f(A,"class","pagination pagination-lg")},m(e,t){a(document.head,n),a(document.head,i),a(document.head,s),l(e,u,t),l(e,m,t),a(m,_),a(_,g);for(let e=0;e<x.length;e+=1)x[e].m(g,null);a(m,v),a(m,b);for(let e=0;e<E.length;e+=1)E[e].m(b,null);l(e,y,t),l(e,A,t)},p(e,[t]){if(1&t){let n;for(w=e[0],n=0;n<w.length;n+=1){const i=nr(e,w,n);x[n]?x[n].p(i,t):(x[n]=ir(i),x[n].c(),x[n].m(g,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=w.length}if(3&t){let n;for(C=e[1],n=0;n<C.length;n+=1){const i=tr(e,C,n);E[n]?E[n].p(i,t):(E[n]=sr(i),E[n].c(),E[n].m(b,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=C.length}},i:t,o:t,d(e){d(n),d(i),d(s),e&&d(u),e&&d(m),c(x,e),c(E,e),e&&d(y),e&&d(A)}}}function ar(e,t,n){let{columns:i=[{label:"column1",id:"column1",sortable:!0,filterable:!0},{label:"column2",id:"column2",sortable:!0,filterable:!0},{label:"column3",id:"column3",sortable:!0,filterable:!0}]}=t,{rows:o=[{column1:"My Column",column2:"Another Value"},{column1:"My Column",column3:"Another Value"}]}=t;return w(async()=>{}),e.$set=e=>{"columns"in e&&n(0,i=e.columns),"rows"in e&&n(1,o=e.rows)},[i,o]}customElements.define("footer-page",Zs);class lr extends B{constructor(e){super(),z(this,{target:this.shadowRoot},ar,rr,r,{columns:0,rows:1}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["columns","rows"]}get columns(){return this.$$.ctx[0]}set columns(e){this.$set({columns:e}),D()}get rows(){return this.$$.ctx[1]}set rows(e){this.$set({rows:e}),D()}}function dr(e){let t,n;return{c(){t=h("small"),n=u(e[1]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){2&t&&g(n,e[1])},d(e){e&&d(t)}}}function cr(e){let t,n;return{c(){t=h("small"),n=u(e[2]),f(t,"class","error-message text-danger")},m(e,i){l(e,t,i),a(t,n)},p(e,t){4&t&&g(n,e[2])},d(e){e&&d(t)}}}function hr(e){let t,n;return{c(){t=h("small"),n=u(e[3])},m(e,i){l(e,t,i),a(t,n)},p(e,t){8&t&&g(n,e[3])},d(e){e&&d(t)}}}function ur(e){let n,i,s,r,c,u,_,g,b,y,A,w,x,C,E,S,k,P,O,T,I,D,M,L=e[1]&&dr(e),N=e[2]&&cr(e),z=e[3]&&hr(e);return{c(){n=h("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',i=p(),s=h("div"),r=h("div"),c=h("div"),u=h("div"),_=h("div"),g=h("h5"),g.textContent="New Password",b=p(),y=h("form"),A=h("div"),w=h("input"),x=p(),L&&L.c(),C=p(),E=h("div"),S=h("input"),k=p(),N&&N.c(),P=p(),z&&z.c(),O=p(),T=h("button"),T.textContent="OK",I=p(),D=h("hr"),this.c=t,f(g,"class","card-title text-center"),f(w,"type","password"),f(w,"id","inputPassword"),f(w,"class","form-control"),f(w,"placeholder","New Password"),f(A,"class","form-label-group"),f(S,"type","password"),f(S,"id","inputNewPassword"),f(S,"class","form-control"),f(S,"placeholder","Confirm New Password"),f(E,"class","form-label-group"),f(T,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(T,"type","button"),f(D,"class","my-4"),f(y,"class","form-signin"),f(_,"class","card-body"),f(u,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(s,"class","container")},m(t,o){l(t,n,o),l(t,i,o),l(t,s,o),a(s,r),a(r,c),a(c,u),a(u,_),a(_,g),a(_,b),a(_,y),a(y,A),a(A,w),v(w,e[4]),a(A,x),L&&L.m(A,null),a(y,C),a(y,E),a(E,S),v(S,e[5]),a(E,k),N&&N.m(E,null),a(y,P),z&&z.m(y,null),a(y,O),a(y,T),a(y,I),a(y,D),e[16](s),M=[m(w,"input",e[12]),m(w,"blur",e[13]),m(S,"input",e[14]),m(S,"keydown",e[6]),m(S,"blur",e[15]),m(T,"click",e[7])]},p(e,[t]){16&t&&w.value!==e[4]&&v(w,e[4]),e[1]?L?L.p(e,t):(L=dr(e),L.c(),L.m(A,null)):L&&(L.d(1),L=null),32&t&&S.value!==e[5]&&v(S,e[5]),e[2]?N?N.p(e,t):(N=cr(e),N.c(),N.m(E,null)):N&&(N.d(1),N=null),e[3]?z?z.p(e,t):(z=hr(e),z.c(),z.m(y,O)):z&&(z.d(1),z=null)},i:t,o:t,d(t){t&&d(n),t&&d(i),t&&d(s),L&&L.d(),N&&N.d(),z&&z.d(),e[16](null),o(M)}}}function pr(e,t,n){let i,o,s=null,r=null,a=null,l=null,{theme:d="default"}=t,{message:c=null}=t;function h(e,t){s.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}function u(){p("password1",i),p("password2",o),r||a||h("new-password",{newPassword:i,confirmNewPassword:o})}const p=(e,t)=>{switch(n(3,l=null),e){case"password1":n(1,r=null),t||n(1,r="Password must be filled");break;case"password2":n(2,a=null),t||n(2,a="Confirm password must be filled")}i!=o&&n(3,l="Passwords must match")};return e.$set=e=>{"theme"in e&&n(9,d=e.theme),"message"in e&&n(10,c=e.message)},[s,r,a,l,i,o,function(e){e.key,13==e.keyCode&&u()},u,p,d,c,h,function(){i=this.value,n(4,i)},()=>p("password1",i),function(){o=this.value,n(5,o)},()=>p("password2",o),function(e){C[e?"unshift":"push"](()=>{n(0,s=e)})}]}customElements.define("data-table",lr);class mr extends B{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",z(this,{target:this.shadowRoot},pr,ur,r,{theme:9,message:10}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["theme","message"]}get theme(){return this.$$.ctx[9]}set theme(e){this.$set({theme:e}),D()}get message(){return this.$$.ctx[10]}set message(e){this.$set({message:e}),D()}}customElements.define("new-password-page",mr);class fr{constructor(){this.screenModel={pages:[{name:"add",style:"",items:[]},{name:"edit",style:"",items:[]},{name:"list",style:"",items:[]}]}}get pageTypes(){return[{label:"add",component:null},{label:"edit",component:null},{label:"list",component:null}]}apiSelected(e){this.dispatchEvent("source-selected",{page:this.selectedPage,value:e.target.value})}selectItem(e,t,n){const i=e.id,o=e.querySelector(".item-close");this.selectedItem=this.components.find(t=>t.id==e.getAttribute("data-type")),this.setSelectedItem(this.selectedItem),this.selectedComponent=t,this.selectedMasterElement=e,this.selectedItem.columns=this.selectedItem.columns?this.selectedItem.columns:2,this.dropArea.querySelectorAll(".component-area").forEach(e=>{e.id!=i&&e.classList.remove("selected")}),e.classList&&e.classList.toggle("selected"),e.classList.contains("selected")?o.removeAttribute("hidden"):(o.setAttribute("hidden",!0),this.clearSelection()),"drop-target"!=i&&this.dropArea.classList.remove("selected")}setFieldNameToFieldInPage(e,t,n,i){const o=this.screenModel.pages.find(t=>t.name===e).items;let s=o.find(e=>e.name===t&&e.id===n);s||(o.push({name:t,id:n,attributes:[]}),s=o.find(e=>e.name===t&&e.id===n)),s.field=i,this.debugModel=JSON.stringify(this.screenModel),this.setDebugModel(this.debugModel)}setFieldToPage(e,t,n,i){const o=this.screenModel.pages.find(t=>t.name===e).items;let s=o.find(e=>e.name===t&&e.id===n);s||(o.push({name:t,id:n,attributes:[]}),s=o.find(e=>e.name===t&&e.id===n)),s.attributes||(s.attributes=[]),i&&i.forEach(e=>{let{name:t,value:n,type:i,model:o}=e,r=s.attributes.find(e=>e.name===t);r?r.value=n:s.attributes.push({name:t,value:n,type:i,model:o})}),this.debugModel=JSON.stringify(this.screenModel),this.setDebugModel(this.debugModel)}removeFieldFromPage(e,t,n){const i=this.screenModel.pages.find(t=>t.name===e);let o=i.items;o.find(e=>e.name===t&&e.id===n)&&(o=o.filter(e=>e.id!==n)),i.items=o,this.debugModel=JSON.stringify(this.screenModel),this.setDebugModel(this.debugModel)}removeAttributeFromPage(e,t,n,i){const o=this.screenModel.pages.find(t=>t.name===e).items;let s=o.find(e=>e.name===t);s||(o.push({name:name,attributes:[]}),s=o.find(e=>e.name===t)),s&&(s.attributes||(s.attributes=[]),s.attributes.forEach(e=>{let{name:t,value:n}=e;s.attributes.find(e=>e.name===t)&&(s.attributes=s.attributes.filter(e=>e.name!==i))}),this.debugModel=JSON.stringify(this.screenModel),this.setDebugModel(this.debugModel))}selectField(e,t){this.selectedMasterElement.setAttribute("data-fieldname",e.target.value),this.setFieldNameToFieldInPage(this.selectedPage,this.selectedItem.name,t,e.target.value)}applyProperties(e,t,n,i){const o=[];n.attributes.forEach(n=>{if(null!=n.defaultValue&&JSON.stringify(n.defaultValue)!==JSON.stringify({}))try{t[n.name]=n.defaultValue,o.push({name:n.name,value:n.defaultValue,type:n.type,model:"none"}),this.setFieldToPage(this.selectedPage,e,i,o)}catch(e){console.debug(e)}})}applyValue(e,t,n,i){console.log("Value",e),this.selectedComponent[t]=e,null==e||""==e.toString().trim()?this.removeAttributeFromPage(this.selectedPage,this.selectedItem.label,i,t):this.setFieldToPage(this.selectedPage,this.selectedItem.label,i,[{name:t,value:e,type:n.type,model:"none"}])}applyColValue(e,t,n){t.columns=e,this.selectedMasterElement.setAttribute("colspan",e),null==e||""===e.trim()?this.removeAttributeFromPage(this.selectedPage,this.selectedItem.label,n,"colspan"):this.setFieldToPage(this.selectedPage,this.selectedItem.label,n,[{name:"colspan",value:e,type:"STRING",model:"none"}])}dragStart(e){const t=e.target.id.replace("drag_",""),n=this.components.find(e=>e.id==t),i=`added_${Math.random().toString(36).substring(7)}`;e.dataTransfer.setData("text/plain",i),e.dataTransfer.setData("text/html",this.getDefaultMasterItem(n,i,t))}dragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}dragStartInsidePage(e){const t=e.target["data-type"],n=e.target.id;let i=e.target.cloneNode(!0);const o=`added_${Math.random().toString(36).substring(7)}`;i.id=o,i.querySelector(`#comp_${n}`).id=`comp_${t}`,e.dataTransfer.setData("text/html",i.outerHTML),e.dataTransfer.setData("text/plain",`move:${o}:${n}`)}dropHandler(e){e.preventDefault();let t=null;if(e.dataTransfer.getData("text/plain").indexOf("move")>=0){let n=null;if([,t,n]=e.dataTransfer.getData("text/plain").split(":"),n){let e=this.dropArea.querySelector(`#${n}`),t=e.getAttribute("data-type"),i=this.components.find(e=>e.id==t);this.removeFieldFromPage(this.selectedPage,i.label,n),e.parentNode.removeChild(e)}}else t=e.dataTransfer.getData("text/plain");const n=e.dataTransfer.getData("text/html");e.target.innerHTML=e.target.innerHTML+n;const i=this.dropArea.querySelector(`#${t}`),o=this.dropArea.querySelector(`#comp_${t}`),s=this.components.find(e=>e.id==i.getAttribute("data-type"));this.setFieldToPage(this.selectedPage,s.label,t),this.applyProperties(s.label,o,s,t),this.resetAllEventsAfterDropHandle()}resetAllEventsAfterDropHandle(){this.dropArea.querySelectorAll(".component-area").forEach(e=>{e.ondragstart=this.dragStartInsidePage,e.querySelector(".item-close").onclick=t=>{this.deleteComponenFromPageClicked(t,e)},e.onclick=t=>{this.componentInsideScreenClicked(t,e)}})}componentInsideScreenClicked(e,t){e.stopPropagation(),this.selectItem(t,this.element,this.components)}deleteComponenFromPageClicked(e,t){e.stopPropagation(),this.selectedItem&&this.removeFieldFromPage(this.selectedPage,this.selectedItem.label,t.id),this.clearSelection(),t.parentNode.removeChild(t)}clearSelection(){this.selectedItem=null,this.selectedMasterElement=null,this.selectedComponent=null,this.setSelectedItem(this.selectedItem)}getDefaultElement(e,t){return`<${e.label} style="width: var(--cms-options-custom-elements-size);" id="${t}" />`}getDefaultMasterItem(e,t,n){return`<div class="component-area default-style" id="${t}" data-type="${n}" draggable="true" colspan="2">\n                <span class="item-title">${e.label}</span>\n                <span class="item-close" hidden>X</span>\n                ${this.getDefaultElement(e,`comp_${t}`)}\n            </div>\n            \n`}dispatchEvent(e,t){this.element.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}}function _r(e,t,n){const i=e.slice();return i[41]=t[n],i}function gr(e,t,n){const i=e.slice();return i[44]=t[n],i}function vr(e,t,n){const i=e.slice();return i[47]=t[n],i[49]=n,i}function br(e,t,n){const i=e.slice();return i[50]=t[n],i[51]=t,i[52]=n,i}function yr(e,t,n){const i=e.slice();return i[50]=t[n],i}function Ar(e,t,n){const i=e.slice();return i[55]=t[n],i}function wr(e){let t,n=e[1],i=[];for(let t=0;t<n.length;t+=1)i[t]=xr(Ar(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=u("")},m(e,n){for(let t=0;t<i.length;t+=1)i[t].m(e,n);l(e,t,n)},p(e,o){if(1026&o[0]){let s;for(n=e[1],s=0;s<n.length;s+=1){const r=Ar(e,n,s);i[s]?i[s].p(r,o):(i[s]=xr(r),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(e){c(i,e),e&&d(t)}}}function xr(e){let t,n,i,o,s,r=e[55].label+"";return{c(){t=h("div"),n=u(r),i=p(),f(t,"class","item"),f(t,"draggable","true"),f(t,"id",o="drag_"+e[55].id)},m(o,r){l(o,t,r),a(t,n),a(t,i),s=m(t,"dragstart",e[10])},p(e,i){2&i[0]&&r!==(r=e[55].label+"")&&g(n,r),2&i[0]&&o!==(o="drag_"+e[55].id)&&f(t,"id",o)},d(e){e&&d(t),s()}}}function Cr(e){let t,n,i=e[50].label+"";return{c(){t=h("vaadin-item"),n=u(i)},m(e,i){l(e,t,i),a(t,n)},p(e,t){512&t[0]&&i!==(i=e[50].label+"")&&g(n,i)},d(e){e&&d(t)}}}function Er(e){let t,n,i,s=e[50];const r=()=>e[29](t,s),a=()=>e[29](null,s);return{c(){t=h("vaadin-form-layout"),_(t,"name",n=e[50].label),_(t,"id","drop-target"),t.hidden=!0},m(n,o){l(n,t,o),r(),i=[m(t,"drop",e[12]),m(t,"dragover",e[11])]},p(i,o){e=i,512&o[0]&&n!==(n=e[50].label)&&_(t,"name",n),s!==e[50]&&(a(),s=e[50],r())},d(e){e&&d(t),a(),o(i)}}}function Sr(e){let t,n=e[7].attributes,i=[];for(let t=0;t<n.length;t+=1)i[t]=Ir(vr(e,n,t));return{c(){t=h("table");for(let e=0;e<i.length;e+=1)i[e].c();f(t,"class","table-general-properties")},m(e,n){l(e,t,n);for(let e=0;e<i.length;e+=1)i[e].m(t,null)},p(e,o){if(384&o[0]){let s;for(n=e[7].attributes,s=0;s<n.length;s+=1){const r=vr(e,n,s);i[s]?i[s].p(r,o):(i[s]=Ir(r),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(e){e&&d(t),c(i,e)}}}function kr(e){let t,n,i;function o(...t){return e[33](e[47],...t)}return{c(){t=h("input"),f(t,"type","text"),f(t,"class","input-property-value"),t.value=n=e[47].value},m(e,n){l(e,t,n),i=m(t,"blur",o)},p(i,o){e=i,128&o[0]&&n!==(n=e[47].value)&&t.value!==n&&(t.value=n)},d(e){e&&d(t),i()}}}function Pr(e){let t,n,i;function o(...t){return e[34](e[47],...t)}return{c(){t=h("input"),f(t,"type","checkbox"),t.checked=n=e[47].defaultValue,f(t,"class","input-property-value")},m(e,n){l(e,t,n),i=m(t,"click",o)},p(i,o){e=i,128&o[0]&&n!==(n=e[47].defaultValue)&&(t.checked=n)},d(e){e&&d(t),i()}}}function Or(e){let t,n,i;function o(...t){return e[35](e[47],...t)}return{c(){t=h("input"),f(t,"type","number"),f(t,"class","input-property-value"),t.value=n=e[47].value},m(e,n){l(e,t,n),i=m(t,"blur",o)},p(i,o){e=i,128&o[0]&&n!==(n=e[47].value)&&(t.value=n)},d(e){e&&d(t),i()}}}function Tr(e){let t,n,i;function o(...t){return e[36](e[47],...t)}return{c(){t=h("textarea"),f(t,"class","input-property-value"),t.value=n="\n                  "+JSON.stringify(e[47].value)+"\n                "},m(e,n){l(e,t,n),i=m(t,"blur",o)},p(i,o){e=i,128&o[0]&&n!==(n="\n                  "+JSON.stringify(e[47].value)+"\n                ")&&(t.value=n)},d(e){e&&d(t),i()}}}function Ir(e){let t,n,i,s,r,c,_,b,y,A,w,x,C=e[47].required?"*":"",E=e[47].name+"",S=0===e[49]&&function(e){let t,n,i,s,r,c,_,b,y,A,w,x,C=e[7].label+"",E=!1;function S(){E=!0,e[30].call(w)}function k(...t){return e[31](e[47],...t)}function P(...t){return e[32](e[47],...t)}return{c(){t=h("tr"),n=h("td"),n.textContent="Name:",i=p(),s=h("td"),r=u(C),c=p(),_=h("tr"),b=h("td"),b.textContent="Cols:",y=p(),A=h("td"),w=h("input"),f(w,"type","number"),f(w,"min","1"),f(w,"max","2"),f(w,"class","input-property-value")},m(o,d){l(o,t,d),a(t,n),a(t,i),a(t,s),a(s,r),l(o,c,d),l(o,_,d),a(_,b),a(_,y),a(_,A),a(A,w),v(w,e[7].columns),x=[m(w,"input",S),m(w,"mouseup",k),m(w,"keyup",P)]},p(t,n){e=t,128&n[0]&&C!==(C=e[7].label+"")&&g(r,C),!E&&128&n[0]&&v(w,e[7].columns),E=!1},d(e){e&&d(t),e&&d(c),e&&d(_),o(x)}}}(e),k="STRING"==e[47].type&&kr(e),P="BOOLEAN"==e[47].type&&Pr(e),O="NUMBER"==e[47].type&&Or(e),T="ANY"==e[47].type&&Tr(e);return{c(){S&&S.c(),t=p(),n=h("tr"),i=h("td"),s=u(C),r=p(),c=u(E),_=p(),b=h("td"),k&&k.c(),y=p(),P&&P.c(),A=p(),O&&O.c(),w=p(),T&&T.c(),x=p()},m(e,o){S&&S.m(e,o),l(e,t,o),l(e,n,o),a(n,i),a(i,s),a(i,r),a(i,c),a(n,_),a(n,b),k&&k.m(b,null),a(b,y),P&&P.m(b,null),a(b,A),O&&O.m(b,null),a(b,w),T&&T.m(b,null),a(n,x)},p(e,t){0===e[49]&&S.p(e,t),128&t[0]&&C!==(C=e[47].required?"*":"")&&g(s,C),128&t[0]&&E!==(E=e[47].name+"")&&g(c,E),"STRING"==e[47].type?k?k.p(e,t):(k=kr(e),k.c(),k.m(b,y)):k&&(k.d(1),k=null),"BOOLEAN"==e[47].type?P?P.p(e,t):(P=Pr(e),P.c(),P.m(b,A)):P&&(P.d(1),P=null),"NUMBER"==e[47].type?O?O.p(e,t):(O=Or(e),O.c(),O.m(b,w)):O&&(O.d(1),O=null),"ANY"==e[47].type?T?T.p(e,t):(T=Tr(e),T.c(),T.m(b,null)):T&&(T.d(1),T=null)},d(e){S&&S.d(e),e&&d(t),e&&d(n),k&&k.d(),P&&P.d(),O&&O.d(),T&&T.d()}}}function Dr(e){let t,n,i,o,s,r,u,_,g,v=e[0],b=[];for(let t=0;t<v.length;t+=1)b[t]=Mr(gr(e,v,t));let y=e[2]&&e[2].length&&Lr(e);return{c(){t=h("table"),n=h("tr"),i=h("td"),i.textContent="Api:",o=p(),s=h("td"),r=h("select");for(let e=0;e<b.length;e+=1)b[e].c();_=p(),y&&y.c(),f(r,"class","input-property-select"),f(t,"class","table-general-properties")},m(d,c){l(d,t,c),a(t,n),a(n,i),a(n,o),a(n,s),a(s,r);for(let e=0;e<b.length;e+=1)b[e].m(r,null);u=Br;for(var h=0;h<r.options.length;h+=1){var p=r.options[h];if(p.__value===u){p.selected=!0;break}}a(t,_),y&&y.m(t,null),g=m(r,"change",e[37])},p(e,n){if(1&n[0]){let t;for(v=e[0],t=0;t<v.length;t+=1){const i=gr(e,v,t);b[t]?b[t].p(i,n):(b[t]=Mr(i),b[t].c(),b[t].m(r,null))}for(;t<b.length;t+=1)b[t].d(1);b.length=v.length}e[2]&&e[2].length?y?y.p(e,n):(y=Lr(e),y.c(),y.m(t,null)):y&&(y.d(1),y=null)},d(e){e&&d(t),c(b,e),y&&y.d(),g()}}}function Mr(e){let t,n,i,o=e[44].name+"";return{c(){t=h("option"),n=u(o),t.__value=i=e[44].name,t.value=t.__value},m(e,i){l(e,t,i),a(t,n)},p(e,s){1&s[0]&&o!==(o=e[44].name+"")&&g(n,o),1&s[0]&&i!==(i=e[44].name)&&(t.__value=i),t.value=t.__value},d(e){e&&d(t)}}}function Lr(e){let t,n,i,o,s,r,u=e[2],_=[];for(let t=0;t<u.length;t+=1)_[t]=Nr(_r(e,u,t));return{c(){t=h("tr"),n=h("td"),n.textContent="Item:",i=p(),o=h("td"),s=h("select");for(let e=0;e<_.length;e+=1)_[e].c();f(s,"class","input-property-select")},m(d,c){l(d,t,c),a(t,n),a(t,i),a(t,o),a(o,s);for(let e=0;e<_.length;e+=1)_[e].m(s,null);r=m(s,"change",e[38])},p(e,t){if(4&t[0]){let n;for(u=e[2],n=0;n<u.length;n+=1){const i=_r(e,u,n);_[n]?_[n].p(i,t):(_[n]=Nr(i),_[n].c(),_[n].m(s,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=u.length}},d(e){e&&d(t),c(_,e),r()}}}function Nr(e){let t,n,i,o=e[41]+"";return{c(){t=h("option"),n=u(o),t.__value=i=e[41],t.value=t.__value},m(e,i){l(e,t,i),a(t,n)},p(e,s){4&s[0]&&o!==(o=e[41]+"")&&g(n,o),4&s[0]&&i!==(i=e[41])&&(t.__value=i),t.value=t.__value},d(e){e&&d(t)}}}function zr(e){let n,i,o,s,r,u,g,y,A,w,x,C,E,S,k,P,O,T,I,D,M,L,N,z,B,R,F,$,H,V,q,j,Y,W=e[1]&&e[1].length&&wr(e),U=e[9],Q=[];for(let t=0;t<U.length;t+=1)Q[t]=Cr(yr(e,U,t));let G=e[9],J=[];for(let t=0;t<G.length;t+=1)J[t]=Er(br(e,G,t));let K=e[7]&&Sr(e),X=e[7]&&Dr(e);return{c(){n=h("div"),i=h("div"),o=h("h2"),o.textContent="Components",s=p(),W&&W.c(),r=p(),u=h("div"),g=h("div"),y=h("div"),y.innerHTML='<h2 class="page-title">Page Builder</h2> \n        <small>Add components to your page</small>',A=p(),w=h("div"),x=h("label"),x.textContent="View Type:",C=p(),E=h("vaadin-select"),S=h("template"),k=h("vaadin-list-box");for(let e=0;e<Q.length;e+=1)Q[e].c();O=p();for(let e=0;e<J.length;e+=1)J[e].c();T=p(),I=h("div"),D=h("h2"),D.textContent="General Properties",M=p(),K&&K.c(),L=p(),N=h("div"),z=p(),B=h("h2"),B.textContent="Data Source",R=p(),X&&X.c(),F=p(),$=h("textarea"),H=p(),V=h("svelte-head"),V.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',q=p(),j=h("span"),this.c=t,f(o,"class","comps-title"),f(i,"class","components"),f(y,"class","col-md-8"),_(E,"placeholder","Page Mode"),_(E,"value",P=e[9][0].label),f(w,"class","col-md-4"),f(g,"class","row"),f(u,"class","page"),f(D,"class","comps-title"),f(B,"class","comps-title"),f(I,"class","options"),f(n,"class","main"),b($,"width","100%"),b($,"min-height","800px"),f(j,"class","item-title component-area selected default-style item-close"),j.hidden=!0},m(t,d){l(t,n,d),a(n,i),a(i,o),a(i,s),W&&W.m(i,null),e[27](i),a(n,r),a(n,u),a(u,g),a(g,y),a(g,A),a(g,w),a(w,x),a(w,C),a(w,E),a(E,S),a(S.content,k);for(let e=0;e<Q.length;e+=1)Q[e].m(k,null);e[28](E),a(u,O);for(let e=0;e<J.length;e+=1)J[e].m(u,null);a(n,T),a(n,I),a(I,D),a(I,M),K&&K.m(I,null),a(I,L),a(I,N),a(I,z),a(I,B),a(I,R),X&&X.m(I,null),e[39](n),l(t,F,d),l(t,$,d),v($,e[4]),l(t,H,d),l(t,V,d),l(t,q,d),l(t,j,d),Y=m($,"input",e[40])},p(e,t){if(e[1]&&e[1].length?W?W.p(e,t):(W=wr(e),W.c(),W.m(i,null)):W&&(W.d(1),W=null),512&t[0]){let n;for(U=e[9],n=0;n<U.length;n+=1){const i=yr(e,U,n);Q[n]?Q[n].p(i,t):(Q[n]=Cr(i),Q[n].c(),Q[n].m(k,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=U.length}if(512&t[0]&&P!==(P=e[9][0].label)&&_(E,"value",P),6656&t[0]){let n;for(G=e[9],n=0;n<G.length;n+=1){const i=br(e,G,n);J[n]?J[n].p(i,t):(J[n]=Er(i),J[n].c(),J[n].m(u,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=G.length}e[7]?K?K.p(e,t):(K=Sr(e),K.c(),K.m(I,L)):K&&(K.d(1),K=null),e[7]?X?X.p(e,t):(X=Dr(e),X.c(),X.m(I,null)):X&&(X.d(1),X=null),16&t[0]&&v($,e[4])},i:t,o:t,d(t){t&&d(n),W&&W.d(),e[27](null),c(Q,t),e[28](null),c(J,t),K&&K.d(),X&&X.d(),e[39](null),t&&d(F),t&&d($),t&&d(H),t&&d(V),t&&d(q),t&&d(j),Y()}}}let Br=null;function Rr(e,t,n){let i=null,o="",s=null,r=null,a=null,l=null;const d=new fr;let c=d.screenModel;const h=d.pageTypes;let{theme:u="default"}=t,{sources:p=[]}=t,{components:m=[]}=t,{fieldNamesList:f=[]}=t;const _=d.apiSelected.bind(d),g=d.selectField.bind(d);d.setSelectedItem=e=>{n(7,l=e)},d.setDebugModel=e=>{n(4,o=e)};const v=d.setFieldToPage.bind(d),b=d.setFieldNameToFieldInPage.bind(d),y=d.removeFieldFromPage.bind(d),A=d.removeAttributeFromPage.bind(d),x=d.selectItem.bind(d),E=d.dragStart.bind(d),S=d.dragStartInsidePage.bind(d),k=d.dragOver.bind(d),P=d.dropHandler.bind(d),O=d.applyProperties.bind(d),T=d.applyValue.bind(d),I=d.applyColValue.bind(d);w(async()=>{a.addEventListener("value-changed",(function(e){r=h.find(t=>t.label===e.detail.value).component,h.forEach(e=>{e.component.setAttribute("hidden","hidden")}),r.removeAttribute("hidden"),n(8,d.element=i,d),n(8,d.dropArea=r,d),n(8,d.selectedPage=e.detail.value,d),n(8,d.components=m,d)}))});return e.$set=e=>{"theme"in e&&n(13,u=e.theme),"sources"in e&&n(0,p=e.sources),"components"in e&&n(1,m=e.components),"fieldNamesList"in e&&n(2,f=e.fieldNamesList)},e.$$.update=()=>{6&e.$$.dirty[0]&&(n(8,d.components=m,d),n(8,d.fieldNamesList=f,d))},[p,m,f,i,o,s,a,l,d,h,E,k,P,u,r,c,_,g,v,b,y,A,x,S,O,T,I,function(e){C[e?"unshift":"push"](()=>{n(5,s=e)})},function(e){C[e?"unshift":"push"](()=>{n(6,a=e)})},function(e,t){t.component!==e&&C[e?"unshift":"push"](()=>{t.component=e,n(50,t)})},function(){var e;l.columns=""===(e=this.value)?void 0:+e,n(7,l)},(e,t)=>{d.selectedMasterElement&&d.applyColValue(t.target.value,e,d.selectedMasterElement.id)},(e,t)=>{d.selectedMasterElement&&d.applyColValue(t.target.value,e,d.selectedMasterElement.id)},(e,t)=>{d.applyValue(t.target.value,e.name,e,d.selectedMasterElement.id)},(e,t)=>{d.applyValue(t.target.checked,e.name,e,d.selectedMasterElement.id)},(e,t)=>{d.applyValue(t.target.value,e.name,e,d.selectedMasterElement.id)},(e,t)=>{d.applyValue(t.target.value,e.name,e,d.selectedMasterElement.id)},e=>{d.apiSelected(e)},e=>{d.selectField(e,d.selectedMasterElement.id)},function(e){C[e?"unshift":"push"](()=>{n(3,i=e)})},function(){o=this.value,n(4,o)}]}class Fr extends B{constructor(e){super(),this.shadowRoot.innerHTML="<style>.main{display:flex;flex-direction:row}.default-style{margin:5px}.components{position:absolute;left:0;top:40px;width:15rem;height:calc(100vh - 40px);max-height:calc(100vh - 40px);overflow-y:auto;background-color:var(--cms-options-bg-color)}.page{width:100%;height:100%;height:calc(100vh - 40px);max-height:calc(100vh - 40px);overflow-y:auto;margin-left:15rem;margin-right:15rem;padding:20px}.options{position:absolute;right:0;top:40px;min-width:15rem;height:calc(100vh - 40px);max-height:calc(100vh - 40px);overflow-y:auto;background-color:var(--cms-options-bg-color)}.comps-title{background-color:var(--cms-options-title-bg-color);text-align:center;color:white;font-size:var(--lumo-font-size-m);padding:5px}#drop-target{border:2px dashed #d9d9d9;border-radius:5px;min-height:calc(100vh - 170px);margin:0 auto;margin-top:10px;padding:1em;display:block;text-align:center}.selected{border:2px dashed var(--cms-options-title-bg-color) !important;border-radius:5px !important}.component-area{border:2px dashed #d9d9d9;border-radius:5px;min-height:50px;min-width:100px;text-align:center;position:relative}.item-title{position:absolute;background-color:white;transform:translate(0, -50%);left:0;margin-left:10px}.page-title{font-size:1.5rem}.item{margin:15px;text-align:center;cursor:move;padding:5px;border:1px dashed #7d7d7d;border-radius:5px;color:white;font-size:var(--lumo-font-size-s)}.item-close{position:absolute;transform:translate(50%, -50%);right:0;margin-right:10px;border:2px solid red;background-color:white;padding:5px;border-radius:20px;color:red;width:36px}.table-general-properties{color:white;font-size:0.7rem;margin:5px;width:98%}.input-property-value{background-color:rgba(255, 255, 255, 0.1);color:white;border:none;width:100%}.input-property-select{background-color:rgba(255, 255, 255, 0.1);color:rgba(0, 0, 0, 0.8);border:none;width:100%}</style>",z(this,{target:this.shadowRoot},Rr,zr,r,{theme:13,sources:0,components:1,fieldNamesList:2},[-1,-1]),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["theme","sources","components","fieldNamesList"]}get theme(){return this.$$.ctx[13]}set theme(e){this.$set({theme:e}),D()}get sources(){return this.$$.ctx[0]}set sources(e){this.$set({sources:e}),D()}get components(){return this.$$.ctx[1]}set components(e){this.$set({components:e}),D()}get fieldNamesList(){return this.$$.ctx[2]}set fieldNamesList(e){this.$set({fieldNamesList:e}),D()}}customElements.define("prevides-page-builder",Fr);const $r=document.createElement("template");$r.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($r.content);const Hr=document.createElement("template");Hr.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Hr.content);const Vr=Xe`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Vr.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const qr=document.createElement("template");qr.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(qr.content);const jr={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},Yr={DEFAULT:"default",ACCESSIBLE:"accessible"},Wr=e=>class extends(hi(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+jr.default.join(", ")+")","_hostAccessiblePropsChanged("+jr.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=xn.debounce(this._inputDebouncer,xt.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value}_stateChanged(e,t,n,i){!e&&!t&&n&&i?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput?this.__userInput=!1:(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(Yr).map(e=>Yr[e]).forEach(e=>this._propagateHostAttributes(jr[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,Yr.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,Yr.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const n=this.inputElement,i=jr[t];"accessible"===t?i.forEach((t,i)=>{this._setOrToggleAttribute(t,e[i],n),this._setOrToggleAttribute(`aria-${t}`,e[i],n)}):i.forEach((t,i)=>{this._setOrToggleAttribute(t,e[i],n)})}_setOrToggleAttribute(e,t,n){e&&n&&(t?n.setAttribute(e,"boolean"==typeof t?"":t):n.removeAttribute(e))}_constraintsChanged(e,t,n,i){this.invalid&&(e||t||n||i?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=Wr._uniqueId=1+Wr._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const n=new Event("change",{bubbles:!this._slottedInput});n.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(n)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){const t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){const t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,n){this._setOrToggleAttribute("aria-describedby",t&&e?n:void 0,this.focusElement)}_getActiveLabelId(e,t,n){let i=n;e&&(i=`${t} ${n}`),this.focusElement.setAttribute("aria-labelledby",i)}_getErrorMessageAriaHidden(e,t,n){return(!(t&&e?n:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const n="__previous"+e;void 0!==this[n]&&this[n]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[n]=t}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class Ur extends(Ci(Wr(ci(wn)))){static get template(){return Xe`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.5.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(Ur.is,Ur);const Qr=Xe`<dom-module id="lumo-password-field" theme-for="vaadin-password-field">
  <template>
    <style>
      [part="reveal-button"]::before {
        content: var(--lumo-icons-eye);
      }

      :host([password-visible]) [part="reveal-button"]::before {
        content: var(--lumo-icons-eye-disabled);
      }

      /* Make it easy to hide the button across the whole app */
      [part="reveal-button"] {
        display: var(--lumo-password-field-reveal-button-display, block);
      }

      /* FIXME: ShadyCSS workaround for slotted input in Edge */
      [part="input-field"] ::slotted(input)::-ms-reveal {
        display: none;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Qr.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Gr=document.createElement("template");let Jr;Gr.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'vaadin-password-field-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAYMAAsAAAAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFgGNtYXAAAAFoAAAAVAAAAFQXVtKIZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfwAAAH8yBLEP2hlYWQAAAPAAAAANgAAADYN+RfTaGhlYQAAA/gAAAAkAAAAJAfCA8dobXR4AAAEHAAAABgAAAAYDgAAAGxvY2EAAAQ0AAAADgAAAA4BJgCSbWF4cAAABEQAAAAgAAAAIAAMAFpuYW1lAAAEZAAAAYYAAAGGmUoJ+3Bvc3QAAAXsAAAAIAAAACAAAwAAAAMDVQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkB//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAAAHoEAALGABQAJABFAAABIg4CMTAeAjMyPgIxMC4CIwc+ATEwBhUUFjEHMCY1NDYTIi4CJz4BNw4BFRQeAjMyPgI1NCYnHgEXDgMjAgChyHAnN3rAiYjFfjsncMihrRg7IA1GExmnY5ZqQg8PWGAFCChGXTU1XUYoCAVgWA8RRW2ZZALGZnpmUmJSUGBQaHxoYA8FRSIhJQ0rIiYz/lQvQkYVInswEygYNV1GKChGXTUYKBMrgCIVRkIvAAAABQAA/8AEAAPAABoAJgA6AEcAVwAAAQceARcOAyMiJicHHgEzMj4CMTAuAicHNCYnATIWMzI+AhMBLgEjIg4CMTAeAhcHFTMBNQEuASc+ATcOARUUFhc3BzAmNTQ2MT4BMTAGFQYWAzo0UlMPEUVtmWQiNR0zJ1QsiMV+OxEsTTw6AgT+zA8dDjVdRijT/ucnXjWhyHAnGTNQN9MtA9P9AE1ZFA9YYAUILSY6QBMZGDsgBAsCczMrcyIWQ0AtCAQzDgtQYFAzS1ckeQ4bCv7TBihGXQH7/uYKEGZ6Zic5RBzNLQPTLf0tIVoYInswEygYNWMihgwrISc5DwVHJiIlAAEAAAAAAADkyo21Xw889QALBAAAAAAA1W1pqwAAAADVbWmrAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAYEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAAAAAAAAoAFAAeAH4A/gAAAAEAAAAGAFgABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style><dom-module id="vaadin-password-field-template">\n  <template>\n    <style>\n      /* Hide the native eye icon for IE/Edge */\n      ::-ms-reveal {\n        display: none;\n      }\n\n      [part="reveal-button"][hidden] {\n        display: none !important;\n      }\n    </style>\n\n    <div part="reveal-button" on-mousedown="_revealButtonMouseDown" on-touchend="_togglePasswordVisibilityTouchend" on-click="_togglePasswordVisibility" hidden$="[[revealButtonHidden]]">\n    </div>\n  </template>\n  \n</dom-module>',document.head.appendChild(Gr.content);class Kr extends Ur{static get is(){return"vaadin-password-field"}static get version(){return"2.5.4"}static get properties(){return{revealButtonHidden:{type:Boolean,value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChange",readOnly:!0}}}static get template(){if(!Jr){Jr=super.template.cloneNode(!0);const e=Ne.import(this.is+"-template","template"),t=e.content.querySelector('[part="reveal-button"]'),n=e.content.querySelector("style");Jr.content.querySelector('[part="input-field"]').appendChild(t),Jr.content.appendChild(n)}return Jr}ready(){super.ready(),this.inputElement.type="password",this.inputElement.autocapitalize="off",this.addEventListener("focusout",()=>{this._passwordVisibilityChanging||(this._setPasswordVisible(!1),this._cachedChangeEvent&&this._onChange(this._cachedChangeEvent))})}_onChange(e){this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`)&&e.stopPropagation(),this._passwordVisibilityChanging?this._cachedChangeEvent=e:(this._cachedChangeEvent=null,super._onChange(e))}_revealButtonMouseDown(e){this.hasAttribute("focused")&&e.preventDefault()}_togglePasswordVisibilityTouchend(e){e.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_togglePasswordVisibility(){this._passwordVisibilityChanging=!0,this.inputElement.blur(),this._setPasswordVisible(!this.passwordVisible),this.inputElement.focus(),this._passwordVisibilityChanging=!1}_passwordVisibleChange(e){this.inputElement.type=e?"text":"password"}}customElements.define(Kr.is,Kr);const Xr=Xe`<dom-module id="lumo-login-form-wrapper" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        max-width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="form"] {
        padding: var(--lumo-space-l);
      }

      [part="form-title"] {
        margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
      }

      #forgotPasswordButton {
        margin: var(--lumo-space-s) auto;
      }

      [part="error-message"] {
        background-color: var(--lumo-error-color-10pct);
        padding: var(--lumo-space-m);
        padding-left: var(--lumo-size-m);
        border-radius: var(--lumo-border-radius);
        margin-top: var(--lumo-space-m);
        margin-bottom: var(--lumo-space-s);
        color: var(--lumo-error-text-color);
      }

      [part="error-message"]::before {
        content: var(--lumo-icons-error);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        position: absolute;
        width: var(--lumo-size-m);
        height: 1em;
        line-height: 1;
        text-align: center;
        /* Visual centering */
        margin-left: calc(var(--lumo-size-m) * -0.95);
      }

      [part="error-message-title"] {
        margin: 0 0 0.25em;
        color: inherit;
      }

      [part="error-message-description"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        margin: 0;
        opacity: 0.9;
      }

      [part="footer"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Xr.content);
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Zr=e=>class extends e{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();const{detail:t,composed:n,cancelable:i,bubbles:o}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:o,cancelable:i,composed:n,detail:t}))||e.preventDefault()}}
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class ea extends(Zr(Ci(ci(wn)))){static get template(){return Xe`
    <style>
      :host {
        overflow: hidden;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="form"] {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }

      [part="form-title"] {
        margin: 0;
      }

      [part="error-message"] {
        position: relative;
      }
    </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden\$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form">
        </slot>

        <vaadin-button id="forgotPasswordButton" theme="tertiary small forgot-password" on-click="_forgotPassword" hidden\$="[[noForgotPassword]]">[[i18n.form.forgotPassword]]</vaadin-button>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
`}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(ea.is,ea);const ta=Xe`<dom-module id="lumo-login-form" theme-for="vaadin-login-form">
  <template>
    <style>
      vaadin-button[part="vaadin-login-submit"] {
        margin-top: var(--lumo-space-l);
        margin-bottom: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ta.content);class na extends(Zr(Ci(ci(wn)))){static get template(){return Xe`
    <style>
      [part="vaadin-login-native-form"] * {
        width: 100%;
      }
    </style>
    <vaadin-login-form-wrapper theme\$="[[theme]]" part="vaadin-login-native-form-wrapper" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      <form part="vaadin-login-native-form" method="POST" action\$="[[action]]" slot="form">
        <vaadin-text-field name="username" label="[[i18n.form.username]]" id="vaadinLoginUsername" required="" on-keydown="_handleInputKeydown" autocapitalize="none" autocorrect="off" spellcheck="false">
          <input type="text" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-text-field>

        <vaadin-password-field name="password" label="[[i18n.form.password]]" id="vaadinLoginPassword" required="" on-keydown="_handleInputKeydown" spellcheck="false">
          <input type="password" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-password-field>

        <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled\$="[[disabled]]">[[i18n.form.submit]]</vaadin-button>
      </form>
    </vaadin-login-form-wrapper>
`}static get is(){return"vaadin-login-form"}static get version(){return"1.0.1"}static get properties(){return{theme:{type:String}}}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this)}_attachDom(e){this.appendChild(e)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(this.disabled||!this.__isValid(this.$.vaadinLoginUsername)||!this.__isValid(this.$.vaadinLoginPassword))return;this.error=!1,this.disabled=!0;const e={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},t=this.dispatchEvent(new CustomEvent("login",e));this.action&&t&&this.querySelector('[part="vaadin-login-native-form"]').submit()}__isValid(e){return e.validate&&e.validate()||e.checkValidity&&e.checkValidity()}_isEnterKey(e){return"Enter"===e.key||13===e.keyCode}_handleInputKeydown(e){if(this._isEnterKey(e)){const{currentTarget:t}=e,n="vaadinLoginUsername"===t.id?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(t)&&(this.__isValid(n)?this.submit():n.focus())}}_handleInputKeyup(e){const t="Tab"===e.key||9===e.keyCode,n=e.currentTarget;t&&n&&n.select&&(n.select(),setTimeout(()=>n.setSelectionRange(0,9999)))}}customElements.define(na.is,na);const ia=Xe`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(ia.content);const oa=Xe`<dom-module id="vaadin-login-overlay-wrapper-lumo-styles" theme-for="vaadin-login-overlay-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      [part="backdrop"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      }

      [part="content"] {
        padding: 0;
      }

      [part="overlay"] {
        background: none;
        border-radius: 0;
        box-shadow: none;
        width: 100%;
        height: 100%;
      }

      @media only screen
      and (max-width: 500px) {
        [part="overlay"],
        [part="content"] {
          height: 100%;
        }
      }

      [part="card"] {
        width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="brand"] {
        padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        min-height: calc(var(--lumo-size-m) * 5);
      }

      [part="description"] {
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-tint-70pct);
        margin-bottom: 0;
      }

      [part="content"] {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      [part="card"] {
        border-radius: var(--lumo-border-radius);
        box-shadow: var(--lumo-box-shadow-s);
        margin: var(--lumo-space-s);
        height: auto;
      }

      /* Small screen */
      @media only screen
      and (max-width: 500px) {
        [part="content"] {
          min-height: 100%;
          background: var(--lumo-base-color);
          align-items: flex-start;
        }

        [part="card"],
        [part="overlay"] {
          width: 100%;
          border-radius: 0;
          box-shadow: none;
          margin: 0;
        }
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="card"] {
          flex-direction: row;
          align-items: stretch;
          max-width: calc(var(--lumo-size-m) * 16);
          width: 100%;
        }

        [part="brand"],
        [part="form"] {
          flex: auto;
          flex-basis: 0;
          box-sizing: border-box;
        }

        [part="brand"] {
          justify-content: flex-start;
        }

        [part="form"] {
          padding: var(--lumo-space-l);
          overflow: auto;
        }
      }

      /* Landscape really small screen */
      @media only screen
      and (max-height: 500px)
      and (min-width: 600px)
      and (orientation: landscape),
      only screen
      and (max-width: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="content"] {
          height: 100vh;
        }

        [part="card"] {
          margin: 0;
          width: 100%;
          max-width: none;
          height: 100%;
          flex: auto;
          border-radius: 0;
          box-shadow: none;
        }

        [part="form"] {
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
      }

      /* Handle iPhone X notch */
      @media only screen
      and (device-width: 375px)
      and (device-height: 812px)
      and (-webkit-device-pixel-ratio: 3) {
        [part="card"] {
          padding: 0 constant(safe-area-inset-bottom);
          padding: 0 env(safe-area-inset-bottom);
        }

        [part="brand"] {
          margin-left: calc(constant(safe-area-inset-bottom) * -1);
          margin-left: calc(env(safe-area-inset-bottom) * -1);
          padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-bottom));
          padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-bottom));
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-login-overlay" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host([theme~="with-overlay"]) {
        min-height: 100%;
        display: flex;
        justify-content: center;
        max-width: 100%;
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        :host([theme~="with-overlay"]) [part="form"] {
          height: 100%;
          -webkit-overflow-scrolling: touch;
          flex: 1;
          padding: 2px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(oa.content);
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const sa=document.createElement("template");let ra;sa.innerHTML='<dom-module id="vaadin-login-overlay-wrapper-template">\n  <template>\n    <style>\n      [part="overlay"] {\n        outline: none;\n      }\n\n      [part="card"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="brand"] {\n        box-sizing: border-box;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-shrink: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n      }\n\n      [part="brand"] h1 {\n        color: inherit;\n        margin: 0;\n      }\n    </style>\n    <section part="card">\n      <div part="brand">\n        <slot name="title">\n          <h1 part="title">[[title]]</h1>\n        </slot>\n        <p part="description">[[description]]</p>\n      </div>\n      <div part="form">\n        <slot></slot>\n      </div>\n    </section>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(sa.content);class aa extends $s{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!ra){ra=super.template.cloneNode(!0);const e=Ne.import(this.is+"-template","template"),t=e.content.querySelector("[part=card]"),n=e.content.querySelector("style"),i=ra.content.querySelector("#content");i.replaceChild(t,i.children[0]),i.appendChild(n)}return ra}}customElements.define(aa.is,aa);
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class la extends(Zr(Ci(ci(wn)))){static get template(){return Xe`
    <vaadin-login-overlay-wrapper id="vaadinLoginOverlayWrapper" opened="{{opened}}" focus-trap="" with-backdrop="" title="[[title]]" description="[[description]]" theme\$="[[theme]]">

      <vaadin-login-form theme="with-overlay" id="vaadinLoginForm" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      </vaadin-login-form>

    </vaadin-login-overlay-wrapper>
`}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"},theme:{type:String}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){const t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(e=>this.$.vaadinLoginOverlayWrapper.appendChild(e));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(la.is,la);const da=Xe`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(da.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class ca extends(Ci(ci(ss([Ys],wn)))){static get template(){return Xe`
    <style>
      :host {
        display: block;
        max-width: 100%;
        animation: 1ms vaadin-form-layout-appear;
        /* CSS API for host */
        --vaadin-form-layout-column-spacing: 2em; /* (default) */
        align-self: stretch;
      }

      @keyframes vaadin-form-layout-appear {
        to {
          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
        }
      }

      :host([hidden]) {
        display: none !important;
      }

      #layout {
        display: flex;

        align-items: baseline; /* default \`stretch\` is not appropriate */

        flex-wrap: wrap; /* the items should wrap */
      }

      #layout ::slotted(*) {
        /* Items should neither grow nor shrink. */
        flex-grow: 0;
        flex-shrink: 0;

        /* Margins make spacing between the columns */
        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
      }

      #layout ::slotted(br) {
        display: none;
      }
    </style>
    <div id="layout">
      <slot id="slot"></slot>
    </div>
`}static get is(){return"vaadin-form-layout"}static get version(){return"2.1.7"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.root.appendChild(this._styleElement),this._styleElement.textContent=" ",window.ShadyDOM&&window.ShadyDOM.flush(),super.ready(),this.addEventListener("iron-resize",this._selectResponsiveStep),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),$o(this,this._selectResponsiveStep),$o(this,this.updateStyles),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(e=>{"attributes"!==e.type||"colspan"!==e.attributeName&&"hidden"!==e.attributeName||this._invokeUpdateStyles()})}),this.__childObserver=new Vi(this,t=>{const n=this._getObservableNodes(t.addedNodes),i=this._getObservableNodes(t.removedNodes);n.forEach(t=>{this.__mutationObserver.observe(t,e)}),(n.length>0||i.length>0)&&this._invokeUpdateStyles()})}_getObservableNodes(e){const t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter(e=>e.nodeType===Node.ELEMENT_NODE&&-1===t.indexOf(e.localName.toLowerCase()))}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(n){t&&t!==e?(console.warn(`${n.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=t):(console.warn(`${n.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty("background-position",t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(e=t)}),this.$.layout.style.removeProperty("background-position"),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition),/\b(Edge|Trident)\//.test(navigator.userAgent)&&this.offsetWidth!==this._lastOffsetWidth&&(this.updateStyles(),this._lastOffsetWidth=this.offsetWidth)}_invokeUpdateStyles(){this.updateStyles()}updateStyles(...e){super.updateStyles(...e);const t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),n=getComputedStyle(this).direction,i="margin-"+("ltr"===n?"left":"right"),o="margin-"+("ltr"===n?"right":"left"),s=this.offsetWidth;window.ShadyDOM&&window.ShadyDOM.flush();let r=0;Array.from(this.children).filter(e=>"br"===e.localName||"none"!==getComputedStyle(e).display).forEach((e,n,a)=>{if("br"===e.localName)return void(r=0);let l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const d=l/this._columnCount;e.style.width=`calc(${99.9*d}% - ${1-d} * ${t})`,r+l>this._columnCount&&(r=0),0===r?e.style.setProperty(i,"0px"):e.style.removeProperty(i);const c=n+1,h=c<a.length&&"br"===a[c].localName;if(r+l===this._columnCount)e.style.setProperty(o,"0px");else if(h){const n=(this._columnCount-r-l)/this._columnCount;e.style.setProperty(o,`calc(${n*s}px + ${n} * ${t})`)}else e.style.removeProperty(o);r=(r+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?e.setAttribute("label-position","top"):e.removeAttribute("label-position"))})}}customElements.define(ca.is,ca);const ha=Xe`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ha.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class ua extends(Ci(Wr(ci(wn)))){static get template(){return Xe`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label and the error message should neither grow nor shrink. */
      [part="label"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.5.4"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd)}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){const e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,n=this.inputElement,i=getComputedStyle(n).width,o=this.value?this.value.length:0;this._oldValueLength>=o&&(n.style.maxWidth=i,n.style.height="auto",e.style.display="block"),this._oldValueLength=o;const s=n.scrollHeight;s>n.clientHeight&&(n.style.height=s+"px"),n.style.removeProperty("max-width"),e.style.removeProperty("display"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",s)}}customElements.define(ua.is,ua);
/**
    @license
    Copyright (c) 2018 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class pa extends Ur{static get is(){return"vaadin-email-field"}static get version(){return"2.5.4"}ready(){super.ready(),this.inputElement.type="email",this.inputElement.autocapitalize="off"}_createConstraintsObserver(){this.pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",super._createConstraintsObserver()}}customElements.define(pa.is,pa);const ma=Xe`<dom-module id="lumo-number-field" theme-for="vaadin-number-field">
  <template>
    <style include="lumo-field-button">
      :host {
        width: 8em;
      }

      :host([has-controls]:not([theme~="align-right"])) [part="value"] {
        text-align: center;
      }

      [part="decrease-button"][disabled],
      [part="increase-button"][disabled] {
        opacity: 0.2;
      }

      :host([has-controls]) [part="input-field"] {
        padding: 0;
      }

      [part="decrease-button"],
      [part="increase-button"] {
        cursor: pointer;
        font-size: var(--lumo-icon-size-s);
        width: 1.6em;
        height: 1.6em;
      }

      [part="decrease-button"]::before,
      [part="increase-button"]::before {
        margin-top: 0.2em;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ma.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const fa=document.createElement("template");let _a;fa.innerHTML='<dom-module id="vaadin-number-field-template">\n  <template>\n    <style>\n      :host([readonly]) [part$="button"] {\n        pointer-events: none;\n      }\n\n      [part="decrease-button"]::before {\n        content: "−";\n      }\n\n      [part="increase-button"]::before {\n        content: "+";\n      }\n\n      [part="decrease-button"],\n      [part="increase-button"] {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n\n      /* Hide the native arrow icons */\n      [part="value"]::-webkit-outer-spin-button,\n      [part="value"]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n\n      [part="value"] {\n        /* Older Firefox versions (v47.0) requires !important */\n        -moz-appearance: textfield !important;\n      }\n    </style>\n\n    <div disabled$="[[!_allowed(-1, value, min, max, step)]]" part="decrease-button" on-click="_decreaseValue" on-touchend="_decreaseButtonTouchend" hidden$="[[!hasControls]]">\n    </div>\n\n    <div disabled$="[[!_allowed(1, value, min, max, step)]]" part="increase-button" on-click="_increaseValue" on-touchend="_increaseButtonTouchend" hidden$="[[!hasControls]]">\n    </div>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(fa.content);class ga extends Ur{static get is(){return"vaadin-number-field"}static get version(){return"2.5.4"}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,reflectToAttribute:!0,observer:"_minChanged"},max:{type:Number,reflectToAttribute:!0,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}ready(){super.ready(),this.__previousValidInput=this.value||"",this.inputElement.type="number",this.inputElement.addEventListener("change",this.__onInputChange.bind(this))}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}static get template(){if(!_a){_a=super.template.cloneNode(!0);const e=Ne.import(this.is+"-template","template"),t=e.content.querySelector('[part="decrease-button"]'),n=e.content.querySelector('[part="increase-button"]'),i=e.content.querySelector("style"),o=_a.content.querySelector('[part="input-field"]'),s=_a.content.querySelector('[name="prefix"]');o.insertBefore(t,s),o.appendChild(n),_a.content.appendChild(i)}return _a}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern, min, max, step)")}_constraintsChanged(e,t,n,i,o,s,r){if(!this.invalid)return;const a=e=>!e&&0!==e;a(o)&&a(s)?super._constraintsChanged(e,t,n,i):this.validate()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;let t=parseFloat(this.value);this.value?t<this.min?(e=0,t=this.min):t>this.max&&(e=0,t=this.max):0==this.min&&e<0||0==this.max&&e>0||0==this.max&&0==this.min?(e=0,t=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?t=0:this.min>0?(t=this.min,this.max<0&&e<0&&(t=this.max),e=0):this.max<0&&(t=this.max,e<0?e=0:this._getIncrement(1,t-this.step)>this.max?t-=2*this.step:t-=this.step);const n=this._getIncrement(e,t);this.value&&0!=e&&!this._incrementIsInsideTheLimits(e,t)||this._setValue(n)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){let n=this.step||1,i=this.min||0;const o=Math.max(this._getMultiplier(t),this._getMultiplier(n),this._getMultiplier(i));n*=o,i*=o;const s=((t=Math.round(t*o))-i)%n;return e>0?(t-s+n)/o:e<0?(t-(s||n))/o:t/o}_getDecimalCount(e){const t=String(e),n=t.indexOf(".");return-1===n?1:t.length-n-1}_getMultiplier(e){if(!isNaN(e))return Math.pow(10,this._getDecimalCount(e))}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){const t=e*(this.step||1),n=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,n)}_stepChanged(e){this.__validateByStep=this.__stepChangedCalled||null!==this.getAttribute("step"),this.inputElement.step=this.__validateByStep?e:"any",this.__stepChangedCalled=!0,this.setAttribute("step",e)}_minChanged(e){this.inputElement.min=e}_maxChanged(e){this.inputElement.max=e}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){38==e.keyCode?(e.preventDefault(),this._increaseValue()):40==e.keyCode&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}__onInputChange(){this.validate()}checkValidity(){return void 0!==this.min||void 0!==this.max||this.__validateByStep?this.inputElement.checkValidity():super.checkValidity()}}window.customElements.define(ga.is,ga);
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const va=document.createElement("template");va.innerHTML='<dom-module id="vaadin-integer-field-template">\n\n  \n</dom-module>',document.head.appendChild(va.content);class ba extends ga{static get is(){return"vaadin-integer-field"}static get version(){return"2.5.4"}static get properties(){return{pattern:String,preventInvalidInput:Boolean,minlength:Number,maxlength:Number}}ready(){super.ready(),this._enabledCharPattern="[-+\\d]"}_valueChanged(e,t){if(""!==e&&!this.__isInteger(e))return console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>.`+" Clearing the value."),void(this.value="");super._valueChanged(e,t)}_stepChanged(e,t){if(!this.__hasOnlyDigits(e))return console.warn(`Trying to set invalid step size "${e}",`+" which is not a positive integer, to <vaadin-integer-field>. Resetting the default value 1."),void(this.step=1);super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/.test(String(e))}__hasOnlyDigits(e){return/^\d*$/.test(String(e))}}window.customElements.define(ba.is,ba);const ya=Xe`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ya.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Aa extends(Ci(hi(ci(li(wn))))){static get template(){return Xe`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.12"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",e)}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(Aa.is,Aa);const wa=Xe`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="overlay"] {
        flex-direction: column;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(wa.content);const xa=Xe`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(xa.content);const Ca=Xe`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(Ca.content);const Ea=Xe`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay-content"] {
          height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Ea.content);
/**
     * @fileoverview
     * @suppress {checkPrototypalTypes}
     * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */
const Sa=nt(e=>{const t=An(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat("disable-upgrade")}attributeChangedCallback(e,t,n,i){"disable-upgrade"==e?!this.__dataEnabled&&null==n&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,n,i)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute("disable-upgrade")||super.connectedCallback()}_enableProperties(){this.hasAttribute("disable-upgrade")||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}});
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class ka extends(Sa($s)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(ka.is,ka);
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
var Pa={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Oa={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Ta={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Ia=/[a-z0-9*]/,Da=/U\+/,Ma=/^arrow/,La=/^space(bar)?/,Na=/^escape$/;function za(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||La.test(i)?n="space":Na.test(i)?n="esc":1==i.length?t&&!Ia.test(i)||(n=i):n=Ma.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function Ba(e,t){return e.key?za(e.key,t):e.detail&&e.detail.key?za(e.detail.key,t):(n=e.keyIdentifier,i="",n&&(n in Pa?i=Pa[n]:Da.test(n)?(n=parseInt(n.replace("U+","0x"),16),i=String.fromCharCode(n).toLowerCase()):i=n.toLowerCase()),i||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Oa[e]),t}(e.keyCode)||"");var n,i}function Ra(e,t){return Ba(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Fa(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],o=n[1];return i in Ta?(e[Ta[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=o||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}Boolean;
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const $a=function(e,t){for(var n=Fa(t),i=0;i<n.length;++i)if(Ra(n[i],e))return!0;return!1},Ha=ds({_template:Xe`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){Ha.instance||(Ha.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});Ha.instance=null,Ha.requestAvailability=function(){Ha.instance||(Ha.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(Ha.instance)};
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Va=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var n=4-t,i=new Date(e.getTime()+24*n*3600*1e3),o=new Date(0,0);o.setFullYear(i.getFullYear());var s=i.getTime()-o.getTime(),r=Math.round(s/864e5);return Math.floor(r/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,n){return(!t||e>=t)&&(!n||e<=n)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,n)=>n?t?Math.abs(e.getTime()-n.getTime())<Math.abs(t.getTime()-e.getTime())?n:t:n:t)}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}};
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */class qa extends(ci(li(wn))){static get template(){return Xe`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return Va._dateEquals(e,t)}_dateAllowed(e,t,n){return Va._dateAllowed(e,t,n)}_isDisabled(e,t,n){var i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);var o=new Date(0,0);return o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()+1),o.setDate(0),!(t&&n&&t.getMonth()===n.getMonth()&&t.getMonth()===e.getMonth()&&n.getDate()-t.getDate()>=0)&&(!this._dateAllowed(i,t,n)&&!this._dateAllowed(o,t,n))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,n,i){if(void 0!==e&&void 0!==t&&void 0!==n&&void 0!==i)return e=this._applyFirstDayOfWeek(e,i),t=this._applyFirstDayOfWeek(t,i),e=e.map((e,n)=>({weekDay:e,weekDayShort:t[n]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var n=new Date(0,0);for(n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);n.getDay()!==t;)this._dateAdd(n,-1);for(var i=[],o=n.getMonth(),s=e.getMonth();n.getMonth()===s||n.getMonth()===o;)i.push(n.getMonth()===s?new Date(n.getTime()):null),this._dateAdd(n,1);return i}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),Va._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,n)=>n.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentation"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,n){if(void 0!==e&&void 0!==t&&void 0!==n)return this._dateAllowed(e,t,n)?"false":"true"}}customElements.define(qa.is,qa);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class ja extends wn{static get template(){return Xe`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Cs(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(n=>{[].forEach.call(n.children,n=>{n._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.root.querySelector(".buffer").offsetTop,n=e>this._buffers[1].translateY+this.itemHeight+t,i=e<this._buffers[0].translateY+this.itemHeight+t;(n||i)&&(this._translateBuffer(i),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=xn.debounce(this._debouncerScrollFinish,xt.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();const e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const n=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(n)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=xn.debounce(this._debouncerUpdateClones,xt.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(var n=0;n<this.bufferSize;n++){const n=document.createElement("div");n.style.height=this.itemHeight+"px",n.instance={};const i="vaadin-infinite-scroller-item-content-"+(ja._contentIndex=ja._contentIndex+1||0),o=document.createElement("slot");o.setAttribute("name",i),o._itemWrapper=n,t.appendChild(o),n.setAttribute("slot",i),this.appendChild(n),ui(),setTimeout(()=>{this._isVisible(n,e)&&this._ensureStampedInstance(n)},1)}},this),setTimeout(()=>{Ho(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(n=>{e.instance.set(n,t[n])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((n,i)=>{if(!n.updated){var o=this._firstIndex+this.bufferSize*i;[].forEach.call(n.children,(n,i)=>{const s=n._itemWrapper;e&&!this._isVisible(s,t)||(s.instance.index=o+i)}),n.updated=!0}},this)}_isVisible(e,t){var n=e.getBoundingClientRect();return n.bottom>t.top&&n.top<t.bottom}}customElements.define(ja.is,ja);const Ya=document.createElement("template");Ya.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir="rtl"]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ya.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Wa extends(ci(di(li(wn)))){static get template(){return Xe`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Xn(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),ti(this.$.scrollers,"pan-y"),Ha.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];Va._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(Va._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e){if(e){var t=this._differenceInMonths(e,this._originDate),n=this.$.monthScroller.position>t,i=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,o=this.$.monthScroller.position+i-1<t;n?this._scrollToPosition(t,!0):o&&this._scrollToPosition(t-i+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=xn.debounce(this._debouncer,xt.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,n){return e?t(Va._extractDateParts(e)):n}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var n=t?300:0,i=0,o=this.$.monthScroller.position,s=e=>{var t,r,a,l=e-(i=i||e);if(l<n){var d=(t=l,r=o,a=this._targetPosition-o,(t/=n/2)<1?a/2*t*t+r:-a/2*(--t*(t-2)-1)+r);this.$.monthScroller.position=d,window.requestAnimationFrame(s)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(s)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){const e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],n=0;n<t.length;n++){var i=t[n];if($a(e,i))return i}}_onKeydown(e){var t=this._currentlyFocusedDate();const n=e.composedPath().indexOf(this.$.todayButton)>=0,i=e.composedPath().indexOf(this.$.cancelButton)>=0,o=!n&&!i;var s=this._eventKey(e);if("tab"===s){e.stopPropagation();const t=this.hasAttribute("fullscreen"),s=e.shiftKey;t?e.preventDefault():s&&o||!s&&i?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):s&&n?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(s)switch(e.preventDefault(),e.stopPropagation(),s){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":o&&this._moveFocusByDays(1);break;case"left":o&&this._moveFocusByDays(-1);break;case"enter":o||i?this._close():n&&this._onTodayTap();break;case"space":if(i)this._close();else if(n)this._onTodayTap();else{var r=this.focusedDate;Va._dateEquals(r,this.selectedDate)?(this.selectedDate="",this.focusedDate=r):this.selectedDate=r}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(e){this.focusedDate=e,this._focusedMonthDate=e.getDate()}_focusClosestDate(e){this._focusDate(Va._getClosestDate(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),n=new Date(0,0);n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(t.getDate()+e),this._dateAllowed(n,this.minDate,this.maxDate)?this._focusDate(n):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),n=new Date(0,0);n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()+e);var i=n.getMonth();n.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),n.getMonth()!==i&&n.setDate(0),this._dateAllowed(n,this.minDate,this.maxDate)?this.focusedDate=n:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var n=new Date(0,0);n.setFullYear(e.getFullYear()),"minDate"===t?(n.setMonth(e.getMonth()),n.setDate(1)):(n.setMonth(e.getMonth()+1),n.setDate(0)),this._dateAllowed(n,this.minDate,this.maxDate)?this._focusDate(n):this._dateAllowed(e,this.minDate,this.maxDate)?this._focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,n){return(!t||e>=t)&&(!n||e<=n)}_isTodayAllowed(e,t){var n=new Date,i=new Date(0,0);return i.setFullYear(n.getFullYear()),i.setMonth(n.getMonth()),i.setDate(n.getDate()),this._dateAllowed(i,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(Wa.is,Wa);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Ua extends(Ci(hi(ci(di((e=>class extends(ss([Ys],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{const t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{const t=e.split("/"),n=new Date;let i,o=n.getMonth(),s=n.getFullYear();if(3===t.length?(s=parseInt(t[2]),t[2].length<3&&s>=0&&(s+=s<50?2e3:1900),o=parseInt(t[0])-1,i=parseInt(t[1])):2===t.length?(o=parseInt(t[0])-1,i=parseInt(t[1])):1===t.length&&(i=parseInt(t[0])),void 0!==i)return{day:i,month:o,year:s}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);const e=e=>{const t=e.composedPath(),n=t.indexOf(this._inputElement);return 1===t.slice(0,n).filter(e=>e.getAttribute&&"clear-button"===e.getAttribute("part")).length};Xn(this,"tap",t=>{e(t)||this.open()}),this.addEventListener("touchend",t=>{e(t)||t.preventDefault()}),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur()),this.addEventListener("blur",e=>!this.opened&&this.validate())}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){this._overlayInitialized&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var n=new Date(0,0);return n.setFullYear(parseInt(t[1],10)),n.setMonth(parseInt(t[2],10)-1),n.setDate(parseInt(t[3],10)),n}}_isNoInput(e,t,n){return!this._inputElement||e||t||!n.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const t=(e,t="00")=>(t+e).substr((t+e).length-t.length);let n="",i="0000",o=e.getFullYear();return o<0?(o=-o,n="-",i="000000"):e.getFullYear()>=1e4&&(n="+",i="000000"),[n+t(o,i),t(e.getMonth()+1),t(e.getDate())].join("-")}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){if(void 0===e||void 0===t)return;this.__userInputOccurred&&(this.__dispatchChange=!0);const n=e&&t(Va._extractDateParts(e)),i=this._formatISO(e);this._inputValue=e?n:"",i!==this.value&&(this.validate(),this.value=i),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||(this._inputValue=e?t(Va._extractDateParts(e)):""))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,n){if(t){var i=this._parseDate(t);i?Va._dateEquals(this[e],i)||(this[e]=i,this.value&&this.validate()):this.value=n}else this[e]=""}_valueChanged(e,t){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){const e=this._inputElement.getBoundingClientRect(),t=e.top>window.innerHeight/2;if(e.left+this.clientWidth/2>window.innerWidth/2){const t=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=t-e.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=e.left+"px";if(t){const t=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=t-e.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=e.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||Va._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=Va._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var n=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:n})}e=e.parentElement}return t}_onOverlayClosed(){if(this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"";const t=this.i18n.parseDate(e),n=t&&this._parseDate(`${t.year}-${t.month+1}-${t.day}`);this._isValidDate(n)?this._selectedDate=n:(this._selectedDate=null,this._inputValue=e)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1,this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),!this.value&&this.validate()}validate(){return!(this.invalid=!this.checkValidity(this._inputValue))}checkValidity(){const e=!this._inputValue||this._selectedDate&&this._inputValue===this.i18n.formatDate(Va._extractDateParts(this._selectedDate)),t=!this._selectedDate||Va._dateAllowed(this._selectedDate,this._minDate,this._maxDate);let n=!0;return this._inputElement&&(this._inputElement.checkValidity?(this._inputElement.__forceCheckValidity=!0,n=this._inputElement.checkValidity(),this._inputElement.__forceCheckValidity=!1):this._inputElement.validate&&(n=this._inputElement.validate())),e&&t&&n}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_eventKey(e){for(var t=["down","up","enter","esc","tab"],n=0;n<t.length;n++){var i=t[n];if($a(e,i))return i}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":{const e=this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(e.year+"-"+(e.month+1)+"-"+e.day);this._overlayInitialized&&this._overlayContent.focusedDate&&this._isValidDate(t)&&(this._selectedDate=this._overlayContent.focusedDate),this.close();break}case"esc":this._focusedDate=this._selectedDate,this._close();break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_onUserInput(e){!this.opened&&this._inputElement.value&&this.open(),this._userInputValueChanged()}_userInputValueChanged(e){if(this.opened&&this._inputValue){const e=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(`${e.year}-${e.month+1}-${e.day}`);this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,Va._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,n){t&&!n&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}})(li(wn))))))){static get template(){return Xe`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"4.0.7"}static get properties(){return{clearButtonVisible:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}ready(){super.ready(),Ho(this,()=>this._inputElement.validate=()=>{}),this._inputElement.addEventListener("change",()=>{""===this._inputElement.value&&(this.__dispatchChange=!0,this.value="",this.validate(),this.__dispatchChange=!1)})}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}_setClearButtonLabel(e){this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute("aria-label",e)}}customElements.define(Ua.is,Ua);const Qa=Xe`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
        flex: auto;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      :host([theme~="align-right"]) [selected] {
        text-align: right;
      }

      :host([theme~="align-center"]) [selected] {
        text-align: center;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }

      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

      :host([theme~="align-right"]) {
        text-align: right;
      }

      :host([theme~="align-center"]) {
        text-align: center;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Qa.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Ga=document.createElement("template");Ga.innerHTML='<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ga.content);class Ja extends $s{static get is(){return"vaadin-select-overlay"}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
let Ka;customElements.define(Ja.is,Ja);class Xa extends Ur{static get is(){return"vaadin-select-text-field"}static get template(){if(super.template.content.querySelector('slot[name="input"]'))return super.template;if(!Ka){Ka=super.template.cloneNode(!0);const e=document.createElement("slot");e.setAttribute("name","value");const t=Ka.content.querySelector("input");t.parentElement.replaceChild(e,t),e.appendChild(t)}return Ka}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(Xa.is,Xa);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Za=document.createElement("template");Za.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Za.content);class el extends(Ci(hi(ci(di(ss(Ys,wn)))))){static get template(){return Xe`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`}static get is(){return"vaadin-select"}static get version(){return"2.1.7"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",e=>this.opened=!this.readonly),this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e)),this._observer=new Vi(this,e=>this._setTemplateFromNodes(e.addedNodes)),this._observer.flush()}_setTemplateFromNodes(e){const t=Array.from(e).filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=t,this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){const e=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;this._overlayElement._instance&&(this._overlayElement._instance.forwardHostProp=(...t)=>{e.apply(this._overlayElement._instance,t),setTimeout(()=>{this._updateValueSlot()})},this._assignMenuElement())}}render(){this._overlayElement.render(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}_removeNewRendererOrTemplate(e,t,n,i){e!==t?this._contentTemplate=void 0:n!==i&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,n){if(n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for select content");this._oldTemplate=e,this._oldRenderer=t,t&&(n.setProperties({owner:this,renderer:t}),this.render(),n.content.firstChild&&this._assignMenuElement())}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(e=>"style"!==e.localName)[0],this._menuElement&&(this._menuElement.addEventListener("items-changed",e=>{this._items=this._menuElement.items,this._items.forEach(e=>e.setAttribute("role","option"))}),this._menuElement.addEventListener("selected-changed",e=>this._updateValueSlot()),this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e)),this._menuElement.addEventListener("click",e=>{this.__userInteraction=!0,this.opened=!1},!0),this._menuElement.setAttribute("role","listbox"))}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_requiredChanged(e){this.setAttribute("aria-required",e)}_valueChanged(e,t){""===e?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===e&&void 0===t||this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){const t=this._menuElement.selected,n=void 0!==t?t:-1,i=this._menuElement._searchKey(n,e.key);i>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[i].value,this._items))}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else t&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(e){return!!e&&Boolean(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()||e.children.length)}_attachSelectedItem(e){if(!e)return;let t;e.hasAttribute("label")?(t=document.createElement("vaadin-item"),t.textContent=e.getAttribute("label")):t=e.cloneNode(!0),t._sourceItem=e,t.removeAttribute("tabindex"),t.removeAttribute("role"),this._valueElement.appendChild(t),t.selected=!0}_updateAriaExpanded(e,t,n){t&&t.setAttribute("aria-expanded",e),n&&n.focusElement&&n.focusElement.setAttribute("aria-expanded",e)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";const e=this._items[this._menuElement.selected],t=this._hasContent(e),n=this._inputElement.shadowRoot.querySelector('slot[name="input"]')?"input":"value";this._valueElement.slot=t?n:"",t&&window.ShadyDOM&&window.ShadyDOM.flush(),this._attachSelectedItem(e),!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce((t,n,i)=>void 0===t&&n.value===e?i:t,void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(e){super._setFocused(this.opened||e),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){const e=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),n=e.top>(t-e.height)/2;this._overlayElement.style.left=e.left+"px",n?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":e.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}return customElements.define(el.is,el),e.PageBuilder=Fr,e.changePassword=te,e.dataTable=lr,e.footer=Zs,e.forgotPassword=U,e.header=Js,e.login=q,e.newPassword=mr,e}({});
//# sourceMappingURL=components.js.map
