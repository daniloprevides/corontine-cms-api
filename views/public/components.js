var app=function(e){"use strict";function t(){}function n(e){return e()}function o(){return Object.create(null)}function s(e){e.forEach(n)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function p(){return h(" ")}function m(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t,n){t in e?e[t]=n:f(e,t,n)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}function y(e,t){(null!=t||e.value)&&(e.value=t)}let g;function v(e){g=e}function A(e){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(e)}const w=[],x=[],C=[],E=[],S=Promise.resolve();let P=!1;function O(e){C.push(e)}let T=!1;const k=new Set;function I(){if(!T){T=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];v(t),L(t.$$)}for(w.length=0;x.length;)x.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];k.has(t)||(k.add(t),t())}C.length=0}while(w.length);for(;E.length;)E.pop()();P=!1,T=!1,k.clear()}}function L(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const M=new Set;function z(e,t){-1===e.$$.dirty[0]&&(w.push(e),P||(P=!0,S.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(e,r,a,l,d,c,u=[-1]){const h=g;v(e);const p=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:d,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:o(),dirty:u};let f=!1;var _,b;m.ctx=a?a(e,p,(t,n,...o)=>{const s=o.length?o[0]:n;return m.ctx&&d(m.ctx[t],m.ctx[t]=s)&&(m.bound[t]&&m.bound[t](s),f&&z(e,t)),n}):[],m.update(),f=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),r.target&&(r.hydrate?m.fragment&&m.fragment.l(function(e){return Array.from(e.childNodes)}(r.target)):m.fragment&&m.fragment.c(),r.intro&&((_=e.$$.fragment)&&_.i&&(M.delete(_),_.i(b))),function(e,t,o){const{fragment:r,on_mount:a,on_destroy:l,after_update:d}=e.$$;r&&r.m(t,o),O(()=>{const t=a.map(n).filter(i);l?l.push(...t):s(t),e.$$.on_mount=[]}),d.forEach(O)}(e,r.target,r.anchor),I()),v(h)}let R;function B(e){let t,n;return{c(){t=u("small"),n=h(e[3]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){8&t&&b(n,e[3])},d(e){e&&d(t)}}}function D(e){let t,n;return{c(){t=u("small"),n=h(e[4]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){16&t&&b(n,e[4])},d(e){e&&d(t)}}}function F(e){let t,n;return{c(){t=u("small"),n=h(e[1])},m(e,o){l(e,t,o),a(t,n)},p(e,t){2&t&&b(n,e[1])},d(e){e&&d(t)}}}function $(e){let n,o,i,r,c,h,_,b,g,v,A,w,x,C,E,S,P,O,T,k,I,L,M,z,N,R,$=e[3]&&B(e),H=e[4]&&D(e),j=e[1]&&F(e);return{c(){n=u("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',o=p(),i=u("div"),r=u("div"),c=u("div"),h=u("div"),_=u("div"),b=u("h5"),b.textContent="Login In",g=p(),v=u("form"),A=u("div"),w=u("input"),x=p(),$&&$.c(),C=p(),E=u("div"),S=u("input"),P=p(),H&&H.c(),O=p(),T=u("div"),k=u("button"),k.textContent="Forgot the password ?",I=p(),j&&j.c(),L=p(),M=u("button"),M.textContent="Log in",z=p(),N=u("hr"),this.c=t,f(b,"class","card-title text-center"),f(w,"type","email"),f(w,"id","inputEmail"),f(w,"class","form-control"),f(w,"placeholder","Username"),f(A,"class","form-label-group"),f(S,"type","password"),f(S,"id","inputPassword"),f(S,"class","form-control"),f(S,"placeholder","Password"),f(E,"class","form-label-group"),f(k,"type","button"),f(k,"class","forgot-password"),f(T,"class","custom-control custom-checkbox mb-3"),f(M,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(M,"type","button"),f(N,"class","my-4"),f(v,"class","form-signin"),f(_,"class","card-body"),f(h,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(i,"class","container")},m(t,s){l(t,n,s),l(t,o,s),l(t,i,s),a(i,r),a(r,c),a(c,h),a(h,_),a(_,b),a(_,g),a(_,v),a(v,A),a(A,w),y(w,e[0]),a(A,x),$&&$.m(A,null),a(v,C),a(v,E),a(E,S),y(S,e[5]),a(E,P),H&&H.m(E,null),a(v,O),a(v,T),a(T,k),a(v,I),j&&j.m(v,null),a(v,L),a(v,M),a(v,z),a(v,N),e[15](i),R=[m(w,"input",e[11]),m(w,"blur",e[12]),m(S,"input",e[13]),m(S,"blur",e[14]),m(k,"click",e[7]),m(M,"click",e[6])]},p(e,[t]){1&t&&w.value!==e[0]&&y(w,e[0]),e[3]?$?$.p(e,t):($=B(e),$.c(),$.m(A,null)):$&&($.d(1),$=null),32&t&&S.value!==e[5]&&y(S,e[5]),e[4]?H?H.p(e,t):(H=D(e),H.c(),H.m(E,null)):H&&(H.d(1),H=null),e[1]?j?j.p(e,t):(j=F(e),j.c(),j.m(v,L)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(i),$&&$.d(),H&&H.d(),j&&j.d(),e[15](null),s(R)}}}function H(e,t,n){let o,s=null,i=null,r=null,{username:a}=t,{message:l}=t,{theme:d="default"}=t;function c(e,t){s.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}const u=(e,t)=>{switch(e){case"username":n(3,i=null),t||n(3,i="Username cannot be empty");break;case"password":n(4,r=null),t||n(4,r="Password cannot be empty")}};return e.$set=e=>{"username"in e&&n(0,a=e.username),"message"in e&&n(1,l=e.message),"theme"in e&&n(9,d=e.theme)},[a,l,s,i,r,o,function(){u("username",a),u("password",o),i||r||c("login",{username:a,password:o})},()=>{c("forgot-password",{username:a,password:o})},u,d,c,function(){a=this.value,n(0,a)},()=>u("username",a),function(){o=this.value,n(5,o)},()=>u("password",o),function(e){x[e?"unshift":"push"](()=>{n(2,s=e)})}]}"function"==typeof HTMLElement&&(R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class j extends R{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}.forgot-password{position:absolute;right:2px;background-color:transparent;border:none}</style>",N(this,{target:this.shadowRoot},H,$,r,{username:0,message:1,theme:9}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["username","message","theme"]}get username(){return this.$$.ctx[0]}set username(e){this.$set({username:e}),I()}get message(){return this.$$.ctx[1]}set message(e){this.$set({message:e}),I()}get theme(){return this.$$.ctx[9]}set theme(e){this.$set({theme:e}),I()}}function q(e){let t,n;return{c(){t=u("small"),n=h(e[2]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){4&t&&b(n,e[2])},d(e){e&&d(t)}}}function V(e){let n,o,i,r,c,h,_,b,g,v,A,w,x,C,E,S,P,O,T=e[2]&&q(e);return{c(){n=u("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',o=p(),i=u("div"),r=u("div"),c=u("div"),h=u("div"),_=u("div"),b=u("h5"),b.textContent="Forgot your password",g=p(),v=u("form"),A=u("div"),w=u("input"),x=p(),T&&T.c(),C=p(),E=u("button"),E.textContent="OK",S=p(),P=u("hr"),this.c=t,f(b,"class","card-title text-center"),f(w,"type","email"),f(w,"id","inputEmail"),f(w,"class","form-control"),f(w,"placeholder","Username"),f(A,"class","form-label-group"),f(E,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(E,"type","button"),f(P,"class","my-4"),f(v,"class","form-signin"),f(_,"class","card-body"),f(h,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(i,"class","container")},m(t,s){l(t,n,s),l(t,o,s),l(t,i,s),a(i,r),a(r,c),a(c,h),a(h,_),a(_,b),a(_,g),a(_,v),a(v,A),a(A,w),y(w,e[0]),a(A,x),T&&T.m(A,null),a(v,C),a(v,E),a(v,S),a(v,P),e[9](i),O=[m(w,"input",e[7]),m(w,"blur",e[8]),m(E,"click",e[3])]},p(e,[t]){1&t&&w.value!==e[0]&&y(w,e[0]),e[2]?T?T.p(e,t):(T=q(e),T.c(),T.m(A,null)):T&&(T.d(1),T=null)},i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(i),T&&T.d(),e[9](null),s(O)}}}function Y(e,t,n){let o=null,s=null,{username:i=null}=t,{theme:r="default"}=t;function a(e,t){o.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}const l=(e,t)=>{switch(e){case"username":n(2,s=null),t||n(2,s="Username cannot be empty")}};return e.$set=e=>{"username"in e&&n(0,i=e.username),"theme"in e&&n(5,r=e.theme)},[i,o,s,function(){l("username",i),s||a("forgot-password",{username:i})},l,r,a,function(){i=this.value,n(0,i)},()=>l("username",i),function(e){x[e?"unshift":"push"](()=>{n(1,o=e)})}]}customElements.define("login-page",j);class U extends R{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",N(this,{target:this.shadowRoot},Y,V,r,{username:0,theme:5}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["username","theme"]}get username(){return this.$$.ctx[0]}set username(e){this.$set({username:e}),I()}get theme(){return this.$$.ctx[5]}set theme(e){this.$set({theme:e}),I()}}function G(e){let t,n;return{c(){t=u("small"),n=h(e[2]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){4&t&&b(n,e[2])},d(e){e&&d(t)}}}function J(e){let t,n;return{c(){t=u("small"),n=h(e[3]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){8&t&&b(n,e[3])},d(e){e&&d(t)}}}function Q(e){let t,n;return{c(){t=u("small"),n=h(e[4]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){16&t&&b(n,e[4])},d(e){e&&d(t)}}}function X(e){let t,n;return{c(){t=u("small"),n=h(e[5]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){32&t&&b(n,e[5])},d(e){e&&d(t)}}}function W(e){let t,n;return{c(){t=u("small"),n=h(e[6])},m(e,o){l(e,t,o),a(t,n)},p(e,t){64&t&&b(n,e[6])},d(e){e&&d(t)}}}function K(e){let n,o,i,r,c,h,_,b,g,v,A,w,x,C,E,S,P,O,T,k,I,L,M,z,N,R,B,D,F,$,H,j=e[2]&&G(e),q=e[3]&&J(e),V=e[4]&&Q(e),Y=e[5]&&X(e),U=e[6]&&W(e);return{c(){n=u("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',o=p(),i=u("div"),r=u("div"),c=u("div"),h=u("div"),_=u("div"),b=u("h5"),b.textContent="New Password",g=p(),v=u("form"),A=u("div"),w=u("input"),x=p(),j&&j.c(),C=p(),E=u("div"),S=u("input"),P=p(),q&&q.c(),O=p(),T=u("div"),k=u("input"),I=p(),V&&V.c(),L=p(),M=u("div"),z=u("input"),N=p(),Y&&Y.c(),R=p(),U&&U.c(),B=p(),D=u("button"),D.textContent="Change Password",F=p(),$=u("hr"),this.c=t,f(b,"class","card-title text-center"),f(w,"type","email"),f(w,"id","inputUsername"),f(w,"class","form-control"),f(w,"placeholder","Username"),f(A,"class","form-label-group"),f(S,"type","password"),f(S,"id","inputOldPassword"),f(S,"class","form-control"),f(S,"placeholder","Old password"),f(E,"class","form-label-group"),f(k,"type","password"),f(k,"id","inputPassword"),f(k,"class","form-control"),f(k,"placeholder","New Password"),f(T,"class","form-label-group"),f(z,"type","password"),f(z,"id","inputPasswordConfirm"),f(z,"class","form-control"),f(z,"placeholder","Repeat New Password"),f(M,"class","form-label-group"),f(D,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(D,"type","button"),f($,"class","my-4"),f(v,"class","form-signin"),f(_,"class","card-body"),f(h,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(i,"class","container")},m(t,s){l(t,n,s),l(t,o,s),l(t,i,s),a(i,r),a(r,c),a(c,h),a(h,_),a(_,b),a(_,g),a(_,v),a(v,A),a(A,w),y(w,e[0]),a(A,x),j&&j.m(A,null),a(v,C),a(v,E),a(E,S),y(S,e[7]),a(E,P),q&&q.m(E,null),a(v,O),a(v,T),a(T,k),y(k,e[8]),a(T,I),V&&V.m(T,null),a(v,L),a(v,M),a(M,z),y(z,e[9]),a(M,N),Y&&Y.m(M,null),a(v,R),U&&U.m(v,null),a(v,B),a(v,D),a(v,F),a(v,$),e[23](i),H=[m(w,"input",e[15]),m(w,"blur",e[16]),m(S,"input",e[17]),m(S,"blur",e[18]),m(k,"input",e[19]),m(k,"blur",e[20]),m(z,"input",e[21]),m(z,"blur",e[22]),m(D,"click",e[10])]},p(e,[t]){1&t&&w.value!==e[0]&&y(w,e[0]),e[2]?j?j.p(e,t):(j=G(e),j.c(),j.m(A,null)):j&&(j.d(1),j=null),128&t&&S.value!==e[7]&&y(S,e[7]),e[3]?q?q.p(e,t):(q=J(e),q.c(),q.m(E,null)):q&&(q.d(1),q=null),256&t&&k.value!==e[8]&&y(k,e[8]),e[4]?V?V.p(e,t):(V=Q(e),V.c(),V.m(T,null)):V&&(V.d(1),V=null),512&t&&z.value!==e[9]&&y(z,e[9]),e[5]?Y?Y.p(e,t):(Y=X(e),Y.c(),Y.m(M,null)):Y&&(Y.d(1),Y=null),e[6]?U?U.p(e,t):(U=W(e),U.c(),U.m(v,B)):U&&(U.d(1),U=null)},i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(i),j&&j.d(),q&&q.d(),V&&V.d(),Y&&Y.d(),U&&U.d(),e[23](null),s(H)}}}function Z(e,t,n){let o,s,i,r=null,a=null,l=null,d=null,c=null,u=null,{username:h=null}=t,{theme:p="default"}=t,{message:m=null}=t;function f(e,t){r.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}const _=(e,t)=>{switch(e){case"username":n(2,a=null),t||n(2,a="Username must be filled");break;case"old-password":n(3,l=null),t||n(3,l="Old password must be filled");break;case"password1":n(4,d=null),t||n(4,d="Password must be filled");break;case"password2":n(5,c=null),t||n(5,c="Password must be filled")}n(6,u=null),s!==i&&n(6,u="Password dont match")};return e.$set=e=>{"username"in e&&n(0,h=e.username),"theme"in e&&n(12,p=e.theme),"message"in e&&n(13,m=e.message)},[h,r,a,l,d,c,u,o,s,i,function(){_("username",h),_("old-password",o),_("password1",s),_("password2",i),d||c||l||a||u||f("change-password",{username:h,oldPassword:o,password1:s,password2:i})},_,p,m,f,function(){h=this.value,n(0,h)},()=>_("username",h),function(){o=this.value,n(7,o)},()=>_("old-password",o),function(){s=this.value,n(8,s)},()=>_("password1",s),function(){i=this.value,n(9,i)},()=>_("password2",i),function(e){x[e?"unshift":"push"](()=>{n(1,r=e)})}]}customElements.define("forgot-password-page",U);class ee extends R{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",N(this,{target:this.shadowRoot},Z,K,r,{username:0,theme:12,message:13}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["username","theme","message"]}get username(){return this.$$.ctx[0]}set username(e){this.$set({username:e}),I()}get theme(){return this.$$.ctx[12]}set theme(e){this.$set({theme:e}),I()}get message(){return this.$$.ctx[13]}set message(e){this.$set({message:e}),I()}}customElements.define("password-change-page",ee);class te extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",te);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let ne,oe=null,se=window.HTMLImports&&window.HTMLImports.whenReady||null;function ie(e){requestAnimationFrame((function(){se?se(e):(oe||(oe=new Promise(e=>{ne=e}),"complete"===document.readyState?ne():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&ne()})),oe.then((function(){e&&e()})))}))}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const re="__shadyCSSCachedStyle";let ae=null,le=null;class de{constructor(){this.customStyles=[],this.enqueued=!1,ie(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&le&&(this.enqueued=!0,ie(le))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[re])return e[re];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[re])continue;const o=this.getStyleForCustomStyle(n);if(o){const e=o.__appliedElement||o;ae&&ae(e),n[re]=e}}return e}}de.prototype.addCustomStyle=de.prototype.addCustomStyle,de.prototype.getStyleForCustomStyle=de.prototype.getStyleForCustomStyle,de.prototype.processStyles=de.prototype.processStyles,Object.defineProperties(de.prototype,{transformCallback:{get:()=>ae,set(e){ae=e}},validateCallback:{get:()=>le,set(e){let t=!1;le||(t=!0),le=e,t&&this.enqueueDocumentValidation()}}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const ce=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ue=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,he=/@media\s(.*)/;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function pe(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function me(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const fe=!(window.ShadyDOM&&window.ShadyDOM.inUse);let _e,be;function ye(e){_e=(!e||!e.shimcssproperties)&&(fe||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(be=window.ShadyCSS.cssBuild);const ge=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?_e=window.ShadyCSS.nativeCss:window.ShadyCSS?(ye(window.ShadyCSS),window.ShadyCSS=void 0):ye(window.WebComponents&&window.WebComponents.flags);const ve=_e,Ae=new de;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){Ae.processStyles(),pe(e,t)},styleElement(e){Ae.processStyles()},styleDocument(e){Ae.processStyles(),pe(document.body,e)},getComputedStyleValue:(e,t)=>me(e,t),flushCustomStyles(){},nativeCss:ve,nativeShadow:fe,cssBuild:be,disableRuntime:ge}),window.ShadyCSS.CustomStyleInterface=Ae,
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
let we,xe,Ce=/(url\()([^)]*)(\))/g,Ee=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Se(e,t){if(e&&Ee.test(e))return e;if("//"===e)return e;if(void 0===we){we=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",we="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),we)try{return new URL(e,t).href}catch(t){return e}return xe||(xe=document.implementation.createHTMLDocument("temp"),xe.base=xe.createElement("base"),xe.head.appendChild(xe.base),xe.anchor=xe.createElement("a"),xe.body.appendChild(xe.anchor)),xe.base.href=t,xe.anchor.href=e,xe.anchor.href||e}function Pe(e,t){return e.replace(Ce,(function(e,n,o,s){return n+"'"+Se(o.replace(/["']/g,""),t)+"'"+s}))}function Oe(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const Te=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let ke=Oe(document.baseURI||window.location.href),Ie=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Le={},Me={};class ze extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=function(e){return Le[e]||Me[e.toLowerCase()]}(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,o){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Se(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Oe(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,function(e,t){Le[e]=Me[e.toLowerCase()]=t}(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}ze.prototype.modules=Le,customElements.define("dom-module",ze);function Ne(e){return ze.import(e)}function Re(e){const t=Pe((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function Be(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...De(t[e]));return n}function De(e){const t=Ne(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...$e(t));const n=t.querySelector("template");n&&e.push(...Fe(n,t.assetpath)),t._styles=e}return t._styles}function Fe(e,t){if(!e._styles){const n=[],o=e.content.querySelectorAll("style");for(let e=0;e<o.length;e++){let s=o[e],i=s.getAttribute("include");i&&n.push(...Be(i).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(s.textContent=Pe(s.textContent,t)),n.push(s)}e._styles=n}return e._styles}function $e(e){const t=[],n=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<n.length;e++){let o=n[e];if(o.import){const e=o.import,n=o.hasAttribute("shady-unscoped");if(n&&!e._unscopedStyle){const t=Re(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=Re(e));t.push(n?e._unscopedStyle:e._style)}}return t}function He(e){let t=Ne(e);if(t&&void 0===t._cssText){let e=function(e){let t="",n=$e(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const o=Fe(e,t);for(let e=0;e<o.length;e++){let t=o[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const je=window.ShadyCSS.CustomStyleInterface;class qe extends HTMLElement{constructor(){super(),this._style=null,je.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=He(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",qe);const Ve=document.createElement("template");Ve.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ve.content);const Ye=document.createElement("template");Ye.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ye.content);const Ue=document.createElement("template");Ue.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ue.content);const Ge=document.createElement("template");Ge.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ge.content);const Je=document.createElement("template");Je.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Je.content);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class Qe{constructor(e){this.value=e.toString()}toString(){return this.value}}function Xe(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Qe)return function(e){if(e instanceof Qe)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const We=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,o)=>t+Xe(n)+e[o+1],e[0]),n},Ke=We`<dom-module id="lumo-button" theme-for="vaadin-button">
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
</dom-module>`;document.head.appendChild(Ke.content);const Ze=We`<dom-module id="lumo-menu-bar-button" theme-for="vaadin-menu-bar-button">
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
</dom-module>`;document.head.appendChild(Ze.content);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let et=0;const tt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=et++;return function(o){let s=o.__mixinSet;if(s&&s[n])return o;let i=t,r=i.get(o);r||(r=e(o),i.set(o,r));let a=Object.create(r.__mixinSet||s||null);return a[n]=!0,r.__mixinSet=a,r}},nt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
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
function ot(e){return e.indexOf(".")>=0}function st(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function it(e,t){return 0===e.indexOf(t+".")}function rt(e,t){return 0===t.indexOf(e+".")}function at(e,t,n){return t+n.slice(e.length)}function lt(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let o=e[n].toString().split(".");for(let e=0;e<o.length;e++)t.push(o[e])}return t.join(".")}return e}function dt(e){return Array.isArray(e)?lt(e).split("."):e.toString().split(".")}function ct(e,t,n){let o=e,s=dt(t);for(let e=0;e<s.length;e++){if(!o)return;o=o[s[e]]}return n&&(n.path=s.join(".")),o}function ut(e,t,n){let o=e,s=dt(t),i=s[s.length-1];if(s.length>1){for(let e=0;e<s.length-1;e++){if(o=o[s[e]],!o)return}o[i]=n}else o[t]=n;return s.join(".")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const ht={},pt=/-[a-z]/g,mt=/([A-Z])/g;function ft(e){return ht[e]||(ht[e]=e.indexOf("-")<0?e:e.replace(pt,e=>e[1].toUpperCase()))}function _t(e){return ht[e]||(ht[e]=e.replace(mt,"-$1").toLowerCase())}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let bt=0,yt=0,gt=[],vt=0,At=document.createTextNode("");new window.MutationObserver((function(){const e=gt.length;for(let t=0;t<e;t++){let e=gt[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}gt.splice(0,e),yt+=e})).observe(At,{characterData:!0});const wt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},xt={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Ct={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Et={run:e=>(At.textContent=vt++,gt.push(e),bt++),cancel(e){const t=e-yt;if(t>=0){if(!gt[t])throw new Error("invalid async handle: "+e);gt[t]=null}}},St=Et,Pt=tt(e=>class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let o=this.__data[e],s=this._shouldPropertyChange(e,t,o);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=o),this.__data[e]=t,this.__dataPending[e]=t),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,St.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,o){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,o)}_attributeToProperty(e,t,n){if(!this.__serializing){const o=this.__dataAttributes,s=o&&o[e]||e;this[s]=this._deserializeValue(t,n||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const o=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=nt(e)),void 0===o?e.removeAttribute(n):e.setAttribute(n,o)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),Ot={};let Tt=HTMLElement.prototype;for(;Tt;){let e=Object.getOwnPropertyNames(Tt);for(let t=0;t<e.length;t++)Ot[e[t]]=!0;Tt=Object.getPrototypeOf(Tt)}const kt=tt(e=>{const t=Pt(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ft(e[t]))}static attributeNameForProperty(e){return _t(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!Ot[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),It={"dom-if":!0,"dom-repeat":!0};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let Lt=!1,Mt=!1;function zt(e){(function(){if(!Lt){Lt=!0;const e=document.createElement("textarea");e.placeholder="a",Mt=e.placeholder===e.textContent}return Mt})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Nt(e){let t=e.getAttribute("is");if(t&&It[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function Rt(e,t){let n=t.parentInfo&&Rt(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,o=0;e;e=e.nextSibling)if(t.parentIndex===o++)return e}function Bt(e,t,n,o){o.id&&(t[o.id]=n)}function Dt(e,t,n){if(n.events&&n.events.length)for(let o,s=0,i=n.events;s<i.length&&(o=i[s]);s++)e._addMethodEventListenerToNode(t,o.name,o.value,e)}function Ft(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const $t=tt(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let o=!1,s=e;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(t.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(s,t,n)||o,zt(s),s.firstChild&&this._parseTemplateChildNodes(s,t,n),s.hasAttributes&&s.hasAttributes()&&(o=this._parseTemplateNodeAttributes(s,t,n)||o),o}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let o,s=e.firstChild,i=0;s;s=o){if("template"==s.localName&&(s=Nt(s)),o=s.nextSibling,s.nodeType===Node.TEXT_NODE){let n=o;for(;n&&n.nodeType===Node.TEXT_NODE;)s.textContent+=n.textContent,o=n.nextSibling,e.removeChild(n),n=o;if(t.stripWhiteSpace&&!s.textContent.trim()){e.removeChild(s);continue}}let r={parentIndex:i,parentInfo:n};this._parseTemplateNode(s,t,r)&&(r.infoIndex=t.nodeInfoList.push(r)-1),s.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let o=e,s=this._parseTemplate(o,t);return(s.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),n.templateInfo=s,!0}static _parseTemplateNodeAttributes(e,t,n){let o=!1,s=Array.from(e.attributes);for(let i,r=s.length-1;i=s[r];r--)o=this._parseTemplateNodeAttribute(e,t,n,i.name,i.value)||o;return o}static _parseTemplateNodeAttribute(e,t,n,o,s){return"on-"===o.slice(0,3)?(e.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:s}),!0):"id"===o&&(n.id=s,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,o=t.content||e.content,s=document.importNode(o,!0);s.__noInsertionPoint=!t.hasInsertionPoint;let i=s.nodeList=new Array(n.length);s.$={};for(let e,t=0,o=n.length;t<o&&(e=n[t]);t++){let n=i[t]=Rt(s,e);Bt(0,s.$,n,e),Ft(0,n,e),Dt(this,n,e)}return s=s,s}_addMethodEventListenerToNode(e,t,n,o){let s=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(o=o||e,0,n);return this._addEventListenerToNode(e,t,s),s}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}});
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
     */let Ht=0;const jt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},qt=/[A-Z]/;function Vt(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],o=n[e]=Array(t.length);for(let e=0;e<t.length;e++)o[e]=t[e]}}}else n=e[t]={};return n}function Yt(e,t,n,o,s,i){if(t){let r=!1,a=Ht++;for(let l in n)Ut(e,t,a,l,n,o,s,i)&&(r=!0);return r}return!1}function Ut(e,t,n,o,s,i,r,a){let l=!1,d=t[r?st(o):o];if(d)for(let t,c=0,u=d.length;c<u&&(t=d[c]);c++)t.info&&t.info.lastRun===n||r&&!Gt(o,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,o,s,i,t.info,r,a),l=!0);return l}function Gt(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!it(n,e))||!(!t.wildcard||!rt(n,e))}return!0}function Jt(e,t,n,o,s){let i="string"==typeof s.method?e[s.method]:s.method,r=s.property;i?i.call(e,e.__data[r],o[r]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Qt(e,t,n){let o=st(t);if(o!==t){return Xt(e,_t(o)+"-changed",n[t],t),!0}return!1}function Xt(e,t,n,o){let s={value:n,queueProperty:!0};o&&(s.path=o),nt(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function Wt(e,t,n,o,s,i){let r=(i?st(t):t)!=t?t:null,a=r?ct(e,r):e.__data[t];r&&void 0===a&&(a=n[t]),Xt(e,s.eventName,a,r)}function Kt(e,t,n,o,s){let i=e.__data[t];Ie&&(i=Ie(i,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,i)}function Zt(e,t,n,o,s){let i=an(e,t,n,o,s),r=s.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[r]?e._setPendingProperty(r,i,!0):e[r]=i}function en(e,t,n,o,s,i,r){n.bindings=n.bindings||[];let a={kind:o,target:s,parts:i,literal:r,isCompound:1!==i.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||_t(s)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let o=a.parts[n];o.compoundIndex=n,tn(e,t,a,o,l)}}function tn(e,t,n,o,s){if(!o.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,r={index:s,binding:n,part:o,evaluator:e};for(let n=0;n<i.length;n++){let o=i[n];"string"==typeof o&&(o=hn(o),o.wildcard=!0),e._addTemplatePropertyEffect(t,o.rootProperty,{fn:nn,info:r,trigger:o})}}}function nn(e,t,n,o,s,i,r){let a=r[s.index],l=s.binding,d=s.part;if(i&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let o=n[t];t=at(d.source,l.target,t),a._setPendingPropertyOrPath(t,o,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,n,o,s){s=function(e,t,n,o){if(n.isCompound){let s=e.__dataCompoundStorage[n.target];s[o.compoundIndex]=t,t=s.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,s,n,o),Ie&&(s=Ie(s,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,s,n.target);else{let o=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?t[jt.READ_ONLY]&&t[jt.READ_ONLY][o]||t._setPendingProperty(o,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,o,s)}}(e,a,l,d,s.evaluator._evaluateBinding(e,d,t,n,o,i))}}function on(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),o=t.parts,s=new Array(o.length);for(let e=0;e<o.length;e++)s[e]=o[e].literal;let i=t.target;n[i]=s,t.literal&&"property"==t.kind&&("className"===i&&(e=nt(e)),e[i]=t.literal)}}function sn(e,t,n){if(n.listenerEvent){let o=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,o,s){let i,r=e.detail,a=r&&r.path;a?(o=at(n,o,a),i=r&&r.value):i=e.currentTarget[n],i=s?!i:i,t[jt.READ_ONLY]&&t[jt.READ_ONLY][o]||!t._setPendingPropertyOrPath(o,i,!0,Boolean(a))||r&&r.queueProperty||t._invalidateProperties()}(e,t,n.target,o.source,o.negate)}))}}function rn(e,t,n,o,s,i){i=t.static||i&&("object"!=typeof i||i[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:i};for(let s,i=0;i<t.args.length&&(s=t.args[i]);i++)s.literal||e._addPropertyEffect(s.rootProperty,n,{fn:o,info:r,trigger:s});i&&e._addPropertyEffect(t.methodName,n,{fn:o,info:r})}function an(e,t,n,o,s){let i=e._methodHost||e,r=i[s.methodName];if(r){let o=e._marshalArgs(s.args,t,n);return r.apply(i,o)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const ln=[],dn=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function cn(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function un(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ln};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let n=hn(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function hn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},o=t[0];switch("-"===o&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=st(t),n.structured=ot(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function pn(e,t,n){let o=ct(e,n);return void 0===o&&(o=t[n]),o}function mn(e,t,n,o){e.notifyPath(n+".splices",{indexSplices:o}),e.notifyPath(n+".length",t.length)}function fn(e,t,n,o,s,i){mn(e,t,n,[{index:o,addedCount:s,removed:i,object:t,type:"splice"}])}const _n=tt(e=>{const t=$t(kt(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return jt}_initializeProperties(){super._initializeProperties(),bn.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[jt.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==jt.READ_ONLY);let o=Vt(this,t)[e];o||(o=this[t][e]=[]),o.push(n)}_removePropertyEffect(e,t,n){let o=Vt(this,t)[e],s=o.indexOf(n);s>=0&&o.splice(s,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,jt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,jt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,jt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,jt.COMPUTE)}_setPendingPropertyOrPath(e,t,n,o){if(o||st(Array.isArray(e)?e[0]:e)!==e){if(!o){let n=ct(this,e);if(!(e=ut(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let o=e.__dataLinkedPaths;if(o){let s;for(let i in o){let r=o[i];rt(i,t)?(s=at(i,r,t),e._setPendingPropertyOrPath(s,n,!0,!0)):rt(r,t)&&(s=at(r,i,t),e._setPendingPropertyOrPath(s,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=nt(e)),e[t]=n)}_setPendingProperty(e,t,n){let o=this.__dataHasPaths&&ot(e),s=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,s[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),o?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(o||this[jt.NOTIFY]&&this[jt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[jt.READ_ONLY]&&this[jt.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let o=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,o){let s=e[jt.COMPUTE];if(s){let i=t;for(;Yt(e,s,i,n,o);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),i=e.__dataPending,e.__dataPending=null}}(this,t,n,o);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,o),this._flushClients(),Yt(this,this[jt.REFLECT],t,n,o),Yt(this,this[jt.OBSERVE],t,n,o),s&&function(e,t,n,o,s){let i,r,a=e[jt.NOTIFY],l=Ht++;for(let r in t)t[r]&&(a&&Ut(e,a,l,r,n,o,s)||s&&Qt(e,r,n))&&(i=!0);i&&(r=e.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,s,t,n,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[jt.PROPAGATE]&&Yt(this,this[jt.PROPAGATE],e,t,n);let o=this.__templateInfo;for(;o;)Yt(this,o.propertyEffects,e,t,n,o.nodeList),o=o.nextTemplateInfo}linkPaths(e,t){e=lt(e),t=lt(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=lt(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};mn(this,ct(this,e,n),n.path,t)}get(e,t){return ct(t||this,e)}set(e,t,n){n?ut(n,e,t):this[jt.READ_ONLY]&&this[jt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},o=ct(this,e,n),s=o.length,i=o.push(...t);return t.length&&fn(this,o,n.path,s,t.length,[]),i}pop(e){let t={path:""},n=ct(this,e,t),o=Boolean(n.length),s=n.pop();return o&&fn(this,n,t.path,n.length,0,[s]),s}splice(e,t,n,...o){let s,i={path:""},r=ct(this,e,i);return t<0?t=r.length-Math.floor(-t):t&&(t=Math.floor(t)),s=2===arguments.length?r.splice(t):r.splice(t,n,...o),(o.length||s.length)&&fn(this,r,i.path,t,o.length,s),s}shift(e){let t={path:""},n=ct(this,e,t),o=Boolean(n.length),s=n.shift();return o&&fn(this,n,t.path,0,0,[s]),s}unshift(e,...t){let n={path:""},o=ct(this,e,n),s=o.unshift(...t);return t.length&&fn(this,o,n.path,0,t.length,[]),s}notifyPath(e,t){let n;if(1==arguments.length){let o={path:""};t=ct(this,e,o),n=o.path}else n=Array.isArray(e)?lt(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,jt.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let o={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,jt.OBSERVE,{fn:Jt,info:o,trigger:{name:e}}),n&&this._addPropertyEffect(t,jt.OBSERVE,{fn:Jt,info:o,trigger:{name:t}})}_createMethodObserver(e,t){let n=un(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");rn(this,n,jt.OBSERVE,an,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,jt.NOTIFY,{fn:Wt,info:{eventName:_t(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,jt.REFLECT,{fn:Kt,info:{attrName:t}})}_createComputedProperty(e,t,n){let o=un(t);if(!o)throw new Error("Malformed computed expression '"+t+"'");rn(this,o,jt.COMPUTE,Zt,e,n)}_marshalArgs(e,t,n){const o=this.__data,s=[];for(let i=0,r=e.length;i<r;i++){let{name:r,structured:a,wildcard:l,value:d,literal:c}=e[i];if(!c)if(l){const e=rt(r,t),s=pn(o,n,e?t:r);d={path:e?t:r,value:s,base:e?ct(o,r):s}}else d=a?pn(o,n,r):o[r];s[i]=d}return s}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),o=this.__templateInfo==n;if(!o)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&(n=Object.create(n),n.wasPreBound=o,!o&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let o=e.propertyEffects=e.propertyEffects||{};(o[t]=o[t]||[]).push(n)}_stampTemplate(e){bn.beginHosting(this);let t=super._stampTemplate(e);bn.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:o}=t;if(o.length)for(let t=0;t<o.length;t++){let s=o[t],i=n[t],r=s.bindings;if(r)for(let t=0;t<r.length;t++){let n=r[t];on(i,n),sn(i,e,n)}i.__dataHost=e}}(this,n),this.__dataReady&&Yt(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,n,o){let s=t._parseTemplateNode.call(this,e,n,o);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=cn(t)||" ",en(this,n,o,"text","textContent",t),s=!0)}return s}static _parseTemplateNodeAttribute(e,n,o,s,i){let r=this._parseBindings(i,n);if(r){let t=s,i="property";qt.test(s)?i="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),i="attribute");let a=cn(r);return a&&"attribute"==i&&("class"==s&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(s)),e.setAttribute(s,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===i&&(s=ft(s)),en(this,n,o,i,s,r,a),!0}return t._parseTemplateNodeAttribute.call(this,e,n,o,s,i)}static _parseTemplateNestedTemplate(e,n,o){let s=t._parseTemplateNestedTemplate.call(this,e,n,o),i=o.templateInfo.hostProps;for(let e in i){en(this,n,o,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return s}static _parseBindings(e,t){let n,o=[],s=0;for(;null!==(n=dn.exec(e));){n.index>s&&o.push({literal:e.slice(s,n.index)});let i=n[1][0],r=Boolean(n[2]),a=n[3].trim(),l=!1,d="",c=-1;"{"==i&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let u=un(a),h=[];if(u){let{args:e,methodName:n}=u;for(let t=0;t<e.length;t++){let n=e[t];n.literal||h.push(n)}let o=t.dynamicFns;(o&&o[n]||u.static)&&(h.push(n),u.dynamicFn=!0)}else h.push(a);o.push({source:a,mode:i,negate:r,customEvent:l,signature:u,dependencies:h,event:d}),s=dn.lastIndex}if(s&&s<e.length){let t=e.substring(s);t&&o.push({literal:t})}return o.length?o:null}static _evaluateBinding(e,t,n,o,s,i){let r;return r=t.signature?an(e,n,o,0,t.signature):n!=t.source?ct(e,t.source):i&&ot(n)?ct(e,n):e.__data[n],t.negate&&(r=!r),r}}});const bn=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */const yn=tt(e=>{const t=Pt(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof s?t:null}function o(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function(e){const t={};for(let n in e){const o=e[n];t[n]="function"==typeof o?{type:o}:o}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=o(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,o(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),gn=window.ShadyCSS&&window.ShadyCSS.cssBuild,vn=tt(e=>{const t=yn(_n(e));function n(e,t,n,o){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,o)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===n.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===n.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,o[n.observer]),e._addPropertyToAttributeMap(t)}function o(e,t,n,o){if(!gn){const s=t.content.querySelectorAll("style"),i=Fe(t),r=function(e){let t=Ne(e);return t?$e(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<r.length;n++){let s=r[n];s.textContent=e._processStyleText(s.textContent,o),t.content.insertBefore(s,a)}let l=0;for(let t=0;t<i.length;t++){let n=i[t],r=s[l];r!==n?(n=n.cloneNode(!0),r.parentNode.insertBefore(n,r)):l++,n.textContent=e._processStyleText(n.textContent,o)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let t in e)n(this.prototype,t,e[t],e)}static createObservers(e,t){const n=this.prototype;for(let o=0;o<e.length;o++)n._createMethodObserver(e[o],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;return e&&(t=ze.import(e,"template")),t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Oe(e.url);else{const e=ze.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ke,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let o=t[n];"value"in o&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=o)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return Pe(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;o(this,t,e,n?Se(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=nt(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Se(this.importPath)),Se(e,t)}static _parseTemplateContent(e,n,o){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,o)}static _addTemplatePropertyEffect(e,n,o){return t._addTemplatePropertyEffect.call(this,e,n,o)}}}),An=vn(HTMLElement);
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
class wn{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,xn.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),xn.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof wn?e._cancelAsync():e=new wn,e.setConfig(t,n),e}}let xn=new Set;const Cn=function(e){xn.add(e)},En=function(){const e=Boolean(xn.size);return xn.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Sn="string"==typeof document.head.style.touchAction,Pn="__polymerGesturesHandled",On="__polymerGesturesTouchAction",Tn=["mousedown","mousemove","mouseup","click"],kn=[0,1,4,2],In=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Ln(e){return Tn.indexOf(e)>-1}let Mn=!1;function zn(e){Ln(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Mn=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Nn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Rn=[],Bn={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Dn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Fn(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let o=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<o.length;e++)t.push(o[e])}}return t}let $n=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[Pn]={skip:!0},"click"===e.type)){let t=!1,o=Un(e);for(let e=0;e<o.length;e++){if(o[e].nodeType===Node.ELEMENT_NODE)if("label"===o[e].localName)Rn.push(o[e]);else if(n=o[e],Bn[n.localName]){let n=Fn(o[e]);for(let e=0;e<n.length;e++)t=t||Rn.indexOf(n[e])>-1}if(o[e]===qn.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Hn(e){let t=Nn?["click"]:Tn;for(let n,o=0;o<t.length;o++)n=t[o],e?(Rn.length=0,document.addEventListener(n,$n,!0)):document.removeEventListener(n,$n,!0)}function jn(e){let t=e.type;if(!Ln(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!In&&(t=kn[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let qn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Vn(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function Yn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){qn.mouse.mouseIgnoreJob||Hn(!0),qn.mouse.target=Un(e)[0],qn.mouse.mouseIgnoreJob=wn.debounce(qn.mouse.mouseIgnoreJob,wt.after(2500),(function(){Hn(),qn.mouse.target=null,qn.mouse.mouseIgnoreJob=null}))}),!!Mn&&{passive:!0});const Un=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Gn={},Jn=[];function Qn(e){const t=Un(e);return t.length>0?t[0]:e.target}function Xn(e){let t,n=e.type,o=e.currentTarget.__polymerGestures;if(!o)return;let s=o[n];if(s){if(!e[Pn]&&(e[Pn]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(qn.touch.id=t.identifier),qn.touch.id!==t.identifier)return;Sn||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)qn.touch.x=t.clientX,qn.touch.y=t.clientY,qn.touch.scrollDecided=!1;else if("touchmove"===n){if(qn.touch.scrollDecided)return;qn.touch.scrollDecided=!0;let n=function(e){let t="auto",n=Un(e);for(let e,o=0;o<n.length;o++)if(e=n[o],e[On]){t=e[On];break}return t}(e),o=!1,s=Math.abs(qn.touch.x-t.clientX),i=Math.abs(qn.touch.y-t.clientY);e.cancelable&&("none"===n?o=!0:"pan-x"===n?o=i>s:"pan-y"===n&&(o=s>i)),o?e.preventDefault():no("track")}}(e)}if(t=e[Pn],!t.skip){for(let n,o=0;o<Jn.length;o++)n=Jn[o],s[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let o,i=0;i<Jn.length;i++)o=Jn[i],s[o.name]&&!t[o.name]&&(t[o.name]=!0,o[n](e))}}}function Wn(e,t,n){return!!Gn[t]&&(function(e,t,n){let o=Gn[t],s=o.deps,i=o.name,r=e.__polymerGestures;r||(e.__polymerGestures=r={});for(let t,n,o=0;o<s.length;o++)t=s[o],Nn&&Ln(t)&&"click"!==t||(n=r[t],n||(r[t]=n={_count:0}),0===n._count&&e.addEventListener(t,Xn,zn(t)),n[i]=(n[i]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),o.touchAction&&eo(e,o.touchAction)}(e,t,n),!0)}function Kn(e,t,n){return!!Gn[t]&&(function(e,t,n){let o=Gn[t],s=o.deps,i=o.name,r=e.__polymerGestures;if(r)for(let t,n,o=0;o<s.length;o++)t=s[o],n=r[t],n&&n[i]&&(n[i]=(n[i]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,Xn,zn(t)));e.removeEventListener(t,n)}(e,t,n),!0)}function Zn(e){Jn.push(e);for(let t=0;t<e.emits.length;t++)Gn[e.emits[t]]=e}function eo(e,t){Sn&&e instanceof HTMLElement&&Et.run(()=>{e.style.touchAction=t}),e[On]=t}function to(e,t,n){let o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,nt(e).dispatchEvent(o),o.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function no(e){let t=function(e){for(let t,n=0;n<Jn.length;n++){t=Jn[n];for(let n,o=0;o<t.emits.length;o++)if(n=t.emits[o],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function oo(e,t,n,o){t&&to(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(e){return no(e)}})}function so(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let o=Math.abs(e.x-t),s=Math.abs(e.y-n);return o>=5||s>=5}function io(e,t,n){if(!t)return;let o,s=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],r=i.x-e.x,a=i.y-e.y,l=0;s&&(o=i.x-s.x,l=i.y-s.y),to(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:r,dy:a,ddx:o,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let s=o;if(o=o.shadowRoot.elementFromPoint(e,t),s===o)break;o&&(n=o)}return n}(n.clientX,n.clientY)}})}function ro(e,t,n){let o=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),i=Qn(n||t);!i||Dn[i.localName]&&i.hasAttribute("disabled")||(isNaN(o)||isNaN(s)||o<=25&&s<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Qn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),o=e.pageX,s=e.pageY;return!(o>=n.left&&o<=n.right&&s>=n.top&&s<=n.bottom)}return!1}(t))&&(e.prevent||to(i,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */Zn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Yn(this.info)},mousedown:function(e){if(!jn(e))return;let t=Qn(e),n=this;Vn(this.info,(function(e){jn(e)||(oo("up",t,e),Yn(n.info))}),(function(e){jn(e)&&oo("up",t,e),Yn(n.info)})),oo("down",t,e)},touchstart:function(e){oo("down",Qn(e),e.changedTouches[0],e)},touchend:function(e){oo("up",Qn(e),e.changedTouches[0],e)}}),Zn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Yn(this.info)},mousedown:function(e){if(!jn(e))return;let t=Qn(e),n=this,o=function(e){let o=e.clientX,s=e.clientY;so(n.info,o,s)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&no("tap"),n.info.addMove({x:o,y:s}),jn(e)||(n.info.state="end",Yn(n.info)),t&&io(n.info,t,e),n.info.started=!0)};Vn(this.info,o,(function(e){n.info.started&&o(e),Yn(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Qn(e),n=e.changedTouches[0],o=n.clientX,s=n.clientY;so(this.info,o,s)&&("start"===this.info.state&&no("tap"),this.info.addMove({x:o,y:s}),io(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Qn(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),io(this.info,t,n))}}),Zn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){jn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){jn(e)&&ro(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ro(this.info,e.changedTouches[0],e)}});const ao=tt(e=>class extends e{_addEventListenerToNode(e,t,n){Wn(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){Kn(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}),lo=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}},co=e=>class extends(lo(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=ze.prototype.modules;let n=!1;const o=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const n=0===e.indexOf("vaadin-"),o=0===t.indexOf("vaadin-"),s=["lumo-","material-"],i=s.filter(t=>0===e.indexOf(t)).length>0,r=s.filter(e=>0===t.indexOf(e)).length>0;return n!==o?n?-1:1:i!==r?i?-1:1:0}).forEach(s=>{if(s!==o){const o=t[s].getAttribute("theme-for");o&&o.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(s,e))})}}),!n&&t[o]&&this._includeStyle(o,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */,uo=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity=0,e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */,ho=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=En()}while(e||t)},po=[];new MutationObserver((function(){const e=fo();po.forEach(t=>{mo(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const mo=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},fo=function(){return document.documentElement.getAttribute("dir")},_o=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,bo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function yo(e,t){if("function"!=typeof e)return;const n=_o.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const go=function(e,t){if(window.Vaadin.developmentMode)return yo(e,t)};function vo(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(bo?!function(){if(bo){if(Object.keys(bo).map(e=>bo[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!yo((function(){return!0})))}catch(e){return!1}}());const Ao=function(){return go(vo)};let wo;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Ao&&Ao()};const xo=new Set,Co=e=>class extends((e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),mo(this,fo()))}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"dir"!==e)return;const o=n===fo()&&-1===po.indexOf(this),s=!n&&t&&-1===po.indexOf(this),i=n!==fo()&&t===fo();o||s?(this.__subscribe(),mo(this,fo())):i&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1)}__subscribe(e=!0){e?-1===po.indexOf(this)&&po.push(this):po.indexOf(this)>-1&&po.splice(po.indexOf(this),1)}})(e)){static finalize(){super.finalize();const{is:e}=this;e&&!xo.has(e)&&(window.Vaadin.registrations.push(this),xo.add(e),window.Vaadin.developmentModeCallback&&(wo=wn.debounce(wo,Ct,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Cn(wo)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class Eo extends(Co(uo(co(ao(An))))){static get template(){return We`
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
`}static get is(){return"vaadin-button"}static get version(){return"2.2.2"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Wn(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Wn(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(Eo.is,Eo);
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const So=document.createElement("template");So.innerHTML='<dom-module id="vaadin-menu-bar-button-styles" theme-for="vaadin-menu-bar-button">\n  <template>\n    <style>\n      [part="label"] ::slotted(vaadin-context-menu-item) {\n        position: relative;\n        z-index: 1;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(So.content);class Po extends Eo{static get is(){return"vaadin-menu-bar-button"}}customElements.define(Po.is,Po);const Oo=We`<dom-module id="lumo-menu-bar-item" theme-for="vaadin-context-menu-item">
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
</dom-module>`;document.head.appendChild(Oo.content);const To=We`<dom-module id="lumo-menu-bar-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host(:first-of-type) {
        padding-top: var(--lumo-space-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(To.content);const ko=document.createElement("template");ko.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ko.content);const Io=document.createElement("template");Io.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Io.content);const Lo=document.createElement("template");Lo.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(Lo.content);const Mo=We`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
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
</dom-module>`;document.head.appendChild(Mo.content);const zo=We`<dom-module id="lumo-item" theme-for="vaadin-item">
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
</dom-module>`;document.head.appendChild(zo.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class No extends((e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}})(co(An))){static get template(){return We`
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
`}static get is(){return"vaadin-item"}static get version(){return"2.1.1"}constructor(){super(),this.value}}customElements.define(No.is,No);const Ro=We`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
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
function Bo(e,t,n){return{index:e,removed:t,addedCount:n}}document.head.appendChild(Ro.content);function Do(e,t,n,o,s,i){let r,a=0,l=0,d=Math.min(n-t,i-s);if(0==t&&0==s&&(a=function(e,t,n){for(let o=0;o<n;o++)if(!$o(e[o],t[o]))return o;return n}(e,o,d)),n==e.length&&i==o.length&&(l=function(e,t,n){let o=e.length,s=t.length,i=0;for(;i<n&&$o(e[--o],t[--s]);)i++;return i}(e,o,d-a)),s+=a,i-=l,(n-=l)-(t+=a)==0&&i-s==0)return[];if(t==n){for(r=Bo(t,[],0);s<i;)r.removed.push(o[s++]);return[r]}if(s==i)return[Bo(t,[],n-t)];let c=function(e){let t=e.length-1,n=e[0].length-1,o=e[t][n],s=[];for(;t>0||n>0;){if(0==t){s.push(2),n--;continue}if(0==n){s.push(3),t--;continue}let i,r=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];i=a<l?a<r?a:r:l<r?l:r,i==r?(r==o?s.push(0):(s.push(1),o=r),t--,n--):i==a?(s.push(3),t--,o=a):(s.push(2),n--,o=l)}return s.reverse(),s}(function(e,t,n,o,s,i){let r=i-s+1,a=n-t+1,l=new Array(r);for(let e=0;e<r;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<r;n++)for(let i=1;i<a;i++)if($o(e[t+i-1],o[s+n-1]))l[n][i]=l[n-1][i-1];else{let e=l[n-1][i]+1,t=l[n][i-1]+1;l[n][i]=e<t?e:t}return l}(e,t,n,o,s,i));r=void 0;let u=[],h=t,p=s;for(let e=0;e<c.length;e++)switch(c[e]){case 0:r&&(u.push(r),r=void 0),h++,p++;break;case 1:r||(r=Bo(h,[],0)),r.addedCount++,h++,r.removed.push(o[p]),p++;break;case 2:r||(r=Bo(h,[],0)),r.addedCount++,h++;break;case 3:r||(r=Bo(h,[],0)),r.removed.push(o[p]),p++}return r&&u.push(r),u}function Fo(e,t){return Do(e,0,e.length,t,0,t.length)}function $o(e,t){return e===t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Ho(e){return"slot"===e.localName}let jo=class{static getFlattenedNodes(e){const t=nt(e);return Ho(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Ho(e)?nt(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ho(this._target)?this._listenSlots([this._target]):nt(this._target).children&&(this._listenSlots(nt(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ho(this._target)?this._unlistenSlots([this._target]):nt(this._target).children&&(this._unlistenSlots(nt(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Et.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Fo(t,this._effectiveNodes);for(let t,o=0;o<n.length&&(t=n[o]);o++)for(let n,o=0;o<t.removed.length&&(n=t.removed[o]);o++)e.removedNodes.push(n);for(let o,s=0;s<n.length&&(o=n[s]);s++)for(let n=o.index;n<o.index+o.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let o=!1;return(e.addedNodes.length||e.removedNodes.length)&&(o=!0,this.callback.call(this._target,e)),o}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Ho(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Ho(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */const qo=e=>class extends((e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new jo(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,n,o){if(!o&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(n);const o=e[n];e.forEach(e=>e.selected=e===o),o&&!o.disabled&&this._scrollToItem(n)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let n;t&&!t.disabled&&(n=this.items.indexOf(t))>=0&&(this.selected=n)}_searchKey(e,t){this._searchReset=wn.debounce(this._searchReset,wt.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const n=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(n,1,e=>!e.disabled&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),n=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(n,t);return void(e>=0&&this._focus(e))}let o,s;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(s=-1,o=n-1):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(s=1,o=n+1):"Home"===t?(s=1,o=0):"End"===t&&(s=-1,o=this.items.length-1),o=this._getAvailableIndex(o,s,e=>!e.disabled),o>=0&&(this._focus(o),e.preventDefault())}_getAvailableIndex(e,t,n){const o=this.items.length;for(let s=0;"number"==typeof e&&s<o;s++,e+=t||1){if(e<0?e=o-1:e>=o&&(e=0),n(this.items[e]))return e}return-1}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const n=this._vertical?["top","bottom"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),s=(this.items[e+1]||t).getBoundingClientRect(),i=(this.items[e-1]||t).getBoundingClientRect();let r=0;s[n[1]]>=o[n[1]]?r=s[n[1]]-o[n[1]]:i[n[0]]<=o[n[0]]&&(r=i[n[0]]-o[n[0]]),this._scroll(r)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=e}})
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,n,o){if(!e||!t)return;if(o){const t=o.map(t=>e[t]);e.forEach(e=>e.selected=-1!==t.indexOf(e))}const s=this.selectedValues.slice(-1)[0];s&&!s.disabled&&this._scrollToItem(s)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],n=t&&!t.disabled?this.items.indexOf(t):-1;n<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(n)?this.selectedValues=this.selectedValues.filter(e=>e!==n):this.selectedValues=this.selectedValues.concat(n))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class Vo extends(Co(qo(co(An)))){static get template(){return We`
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
`}static get is(){return"vaadin-list-box"}static get version(){return"1.2.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof An||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(Vo.is,Vo),
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
Zn({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};const t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{const n=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,n.clientX,n.clientY)),no("tap"))},500)},touchmove:function(e){const t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),no("tap"))},fire:function(e,t,n){const o=this.info.sourceEvent,s=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});s.detail={x:t,y:n,sourceEvent:o},e.dispatchEvent(s),s.defaultPrevented&&o&&o.preventDefault&&o.preventDefault()}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class Yo{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Uo(e){return function e(t,n){let o=n.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=o.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;o=n.substring(e,t.start-1),o=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(o),o=o.replace(Wo.multipleSpaces," "),o=o.substring(o.lastIndexOf(";")+1);let s=t.parsedSelector=t.selector=o.trim();t.atRule=0===s.indexOf(es),t.atRule?0===s.indexOf(Zo)?t.type=Jo.MEDIA_RULE:s.match(Wo.keyframesRule)&&(t.type=Jo.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Wo.multipleSpaces).pop()):0===s.indexOf(Ko)?t.type=Jo.MIXIN_RULE:t.type=Jo.STYLE_RULE}let s=t.rules;if(s)for(let t,o=0,i=s.length;o<i&&(t=s[o]);o++)e(t,n);return t}(function(e){let t=new Yo;t.start=0,t.end=e.length;let n=t;for(let o=0,s=e.length;o<s;o++)if(e[o]===Qo){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new Yo,n.start=o+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[o]===Xo&&(n.end=o+1,n=n.parent||t);return t}(e=e.replace(Wo.comments,"").replace(Wo.port,"")),e)}function Go(e,t,n=""){let o="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Ko)}(n))for(let e,s=0,i=n.length;s<i&&(e=n[s]);s++)o=Go(e,t,o);else o=t?e.cssText:function(e){return function(e){return e.replace(Wo.mixinApply,"").replace(Wo.varApply,"")}(e=function(e){return e.replace(Wo.customProp,"").replace(Wo.mixinProp,"")}(e))}(e.cssText),o=o.trim(),o&&(o="  "+o+"\n")}return o&&(e.selector&&(n+=e.selector+" "+Qo+"\n"),n+=o,e.selector&&(n+=Xo+"\n\n")),n}const Jo={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Qo="{",Xo="}",Wo={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ko="--",Zo="@media",es="@",ts=new Set;function ns(e){const t=e.textContent;if(!ts.has(t)){ts.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function os(e){return e.hasAttribute("shady-unscoped")}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function ss(e,t){return e?("string"==typeof e&&(e=Uo(e)),t&&rs(e,t),Go(e,ve)):""}function is(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Uo(e.textContent)),e.__cssRules||null}function rs(e,t,n,o){if(!e)return;let s=!1,i=e.type;if(o&&i===Jo.MEDIA_RULE){let t=e.selector.match(he);t&&(window.matchMedia(t[1]).matches||(s=!0))}i===Jo.STYLE_RULE?t(e):n&&i===Jo.KEYFRAMES_RULE?n(e):i===Jo.MIXIN_RULE&&(s=!0);let r=e.rules;if(r&&!s)for(let e,s=0,i=r.length;s<i&&(e=r[s]);s++)rs(e,t,n,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function as(e){if(void 0!==be)return be;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(e),e.__cssBuild=t}}return e.__cssBuild||""}function ls(e){return""!==as(e)}const ds=/;\s*/m,cs=/^\s*(initial)|(inherit)\s*$/,us=/\s*!important/;class hs{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let ps=null;class ms{constructor(){this._currentElement=null,this._measureElement=null,this._map=new hs}detectMixin(e){return function(e){const t=ue.test(e)||ce.test(e);return ue.lastIndex=0,ce.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const o=n[e];os(o)?fe||(ns(o),o.parentNode.removeChild(o)):(t.push(o.textContent),o.parentNode.removeChild(o))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=is(e);return this.transformRules(n,t),e.textContent=ss(n),n}transformCustomStyle(e){let t=is(e);return rs(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=ss(t),t}transformRules(e,t){this._currentElement=t,rs(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(ce,(e,n,o,s)=>this._produceCssProperties(e,n,o,s,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let o=!1;return rs(t,t=>{o=o||t===e,o||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=ue.exec(e);){let o=n[0],s=n[1],i=n.index,r=i+o.indexOf("@apply"),a=i+o.length,l=e.slice(0,r),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let u=this._atApplyToCssProperties(s,c);e=`${l}${u}${d}`,ue.lastIndex=i+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(ds,"");let n=[],o=this._map.get(e);if(o||(this._map.set(e,{}),o=this._map.get(e)),o){let s,i,r;this._currentElement&&(o.dependants[this._currentElement]=!0);const a=o.properties;for(s in a)r=t&&t[s],i=[s,": var(",e,"_-_",s],r&&i.push(",",r.replace(us,"")),i.push(")"),us.test(a[s])&&i.push(" !important"),n.push(i.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=cs.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,o,s=e.split(";"),i={};for(let e,r,a=0;a<s.length;a++)e=s[a],e&&(r=e.split(":"),r.length>1&&(n=r[0].trim(),o=r.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(n,o)),i[n]=o));return i}_invalidateMixinEntry(e){if(ps)for(let t in e.dependants)t!==this._currentElement&&ps(t)}_produceCssProperties(e,t,n,o,s){if(n&&function e(t,n){let o=t.indexOf("var(");if(-1===o)return n(t,"","","");let s=function(e,t){let n=0;for(let o=t,s=e.length;o<s;o++)if("("===e[o])n++;else if(")"===e[o]&&0==--n)return o;return-1}(t,o+3),i=t.substring(o+4,s),r=t.substring(0,o),a=e(t.substring(s+1),n),l=i.indexOf(",");return-1===l?n(r,i.trim(),"",a):n(r,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(n,(e,t)=>{t&&this._map.get(t)&&(o=`@apply ${t};`)}),!o)return e;let i=this._consumeCssProperties(""+o,s),r=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let u,h,p=[],m=!1;for(u in l)h=a[u],void 0===h&&(h="initial"),!c||u in c||(m=!0),p.push(`${t}_-_${u}: ${h}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),n&&(r=`${e};${r}`),`${r}${p.join("; ")};`}}ms.prototype.detectMixin=ms.prototype.detectMixin,ms.prototype.transformStyle=ms.prototype.transformStyle,ms.prototype.transformCustomStyle=ms.prototype.transformCustomStyle,ms.prototype.transformRules=ms.prototype.transformRules,ms.prototype.transformRule=ms.prototype.transformRule,ms.prototype.transformTemplate=ms.prototype.transformTemplate,ms.prototype._separator="_-_",Object.defineProperty(ms.prototype,"invalidCallback",{get:()=>ps,set(e){ps=e}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const fs={},_s="_applyShimCurrentVersion",bs="_applyShimNextVersion",ys=Promise.resolve();
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function gs(e){let t=fs[e];t&&function(e){e[_s]=e[_s]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[bs]=(e[bs]||0)+1}(t)}function vs(e){return e[_s]===e[bs]}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const As=new ms;class ws{constructor(){this.customStyleInterface=null,As.invalidCallback=gs}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{As.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),ls(e))return;fs[t]=e;let n=As.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],o=this.customStyleInterface.getStyleForCustomStyle(n);o&&As.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&pe(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",o="";return t?t.indexOf("-")>-1?n=t:(o=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,o=e.extends),{is:n,typeExtension:o}}(e),n=fs[t];if((!n||!ls(n))&&n&&!vs(n)){(function(e){return!vs(e)&&e._applyShimValidatingVersion===e[bs]})(n)||(this.prepareTemplate(n,t),function(e){e._applyShimValidatingVersion=e[bs],e._validating||(e._validating=!0,ys.then((function(){e[_s]=e[bs],e._validating=!1})))}(n));let o=e.shadowRoot;if(o){let e=o.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=ss(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new ws;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,o){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>me(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:ve,nativeShadow:fe,cssBuild:be,disableRuntime:ge},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=As;
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
const xs=/:host\(:dir\((ltr|rtl)\)\)/g,Cs=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Es=/:dir\((?:ltr|rtl)\)/,Ss=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Ps=[];let Os=null,Ts="";function ks(){Ts=document.documentElement.getAttribute("dir")}function Is(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Ts)}}function Ls(){ks(),Ts=document.documentElement.getAttribute("dir");for(let e=0;e<Ps.length;e++)Is(Ps[e])}const Ms=tt(e=>{Ss||Os||(ks(),Os=new MutationObserver(Ls),Os.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=kt(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!Ss&&Es.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(xs,':host([dir="$1"])'),t=t.replace(Cs,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Os&&Os.takeRecords().length&&Ls(),Ps.push(this),Is(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Ps.indexOf(this);e>-1&&Ps.splice(e,1)}}}return n.__activateDir=!1,n});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */let zs=!1,Ns=[],Rs=[];function Bs(){zs=!0,requestAnimationFrame((function(){zs=!1,function(e){for(;e.length;)Ds(e.shift())}(Ns),setTimeout((function(){!function(e){for(let t=0,n=e.length;t<n;t++)Ds(e.shift())}(Rs)}))}))}function Ds(e){const t=e[0],n=e[1],o=e[2];try{n.apply(t,o)}catch(e){setTimeout(()=>{throw e})}}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
function Fs(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?Fs():window.addEventListener("DOMContentLoaded",Fs)
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */;const $s=Element.prototype,Hs=$s.matches||$s.matchesSelector||$s.mozMatchesSelector||$s.msMatchesSelector||$s.oMatchesSelector||$s.webkitMatchesSelector,js=function(e,t){return Hs.call(e,t)};class qs{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new jo(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(nt(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=nt(t).parentNode||nt(t).host;return t===this.node}getOwnerRoot(){return nt(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?nt(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=nt(this.node).assignedSlot;for(;t;)e.push(t),t=nt(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return nt(n).importNode(e,t)}getEffectiveChildNodes(){return jo.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let o,s=0,i=t.length;s<i&&(o=t[s]);s++)o.nodeType===Node.ELEMENT_NODE&&js(o,e)&&n.push(o);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Vs(e,t){for(let n=0;n<t.length;n++){let o=t[n];Object.defineProperty(e,o,{get:function(){return this.node[o]},configurable:!0})}}class Ys{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}qs.prototype.cloneNode,qs.prototype.appendChild,qs.prototype.insertBefore,qs.prototype.removeChild,qs.prototype.replaceChild,qs.prototype.setAttribute,qs.prototype.removeAttribute,qs.prototype.querySelector,qs.prototype.querySelectorAll,qs.prototype.parentNode,qs.prototype.firstChild,qs.prototype.lastChild,qs.prototype.nextSibling,qs.prototype.previousSibling,qs.prototype.firstElementChild,qs.prototype.lastElementChild,qs.prototype.nextElementSibling,qs.prototype.previousElementSibling,qs.prototype.childNodes,qs.prototype.children,qs.prototype.classList,qs.prototype.textContent,qs.prototype.innerHTML;let Us=qs;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(qs.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=qs.prototype[t])}),Vs(e.prototype,["classList"]),Us=e,Object.defineProperties(Ys.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Gs(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const o=n[e];if(Gs(o).getOwnerRoot()===t)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let o=t[n];e[o]=function(){return this.node[o].apply(this.node,arguments)}}}(qs.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Vs(qs.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let o=t[n];Object.defineProperty(e,o,{get:function(){return this.node[o]},set:function(e){this.node[o]=e},configurable:!0})}}(qs.prototype,["textContent","innerHTML","className"]);const Gs=function(e){if((e=e||document)instanceof Us)return e;if(e instanceof Ys)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Ys(e):new Us(e),e.__domApi=t),t},Js=window.ShadyDOM,Qs=window.ShadyCSS;
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function Xs(e,t){return nt(e).getRootNode()===t}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Ws=window.ShadyCSS;const Ks=tt(e=>{const t=Ms(ao(vn(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,o){t!==n&&(super.attributeChangedCallback(e,t,n,o),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let o,s=0;s<n.length&&(o=n[s]);s++){let n=Object.getOwnPropertyDescriptor(t,o);n&&Object.defineProperty(e,o,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=t;let s=n.node||this;return nt(s).dispatchEvent(o),o}listen(e,t,n){e=e||this;let o=this.__boundListeners||(this.__boundListeners=new WeakMap),s=o.get(e);s||(s={},o.set(e,s));let i=t+n;s[i]||(s[i]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let o=this.__boundListeners&&this.__boundListeners.get(e),s=t+n,i=o&&o[s];i&&(this._removeEventListenerFromNode(e,t,i),o[s]=null)}setScrollDirection(e,t){eo(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=nt(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Gs(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Gs(this).getEffectiveChildNodes()}queryDistributedElements(e){return Gs(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,o=0;n=e[o];o++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Gs(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&nt(this).contains(e)&&nt(this).getRootNode()===nt(e).getRootNode()}isLocalDescendant(e){return this.root===nt(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Js||!Qs)return null;if(!Js.handlesDynamicScoping)return null;const n=Qs.ScopingShim;if(!n)return null;const o=n.scopeForNode(e),s=nt(e).getRootNode(),i=e=>{if(!Xs(e,s))return;const t=Array.from(Js.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const i=t[e];if(!Xs(i,s))continue;const r=n.currentScopeForNode(i);r!==o&&(""!==r&&n.unscopeNode(i,r),n.scopeNode(i,o))}};if(i(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&i(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Ws.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=wn.debounce(this._debouncers[e],n>0?wt.after(n):Et,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?wt.run(e.bind(this),t):~Et.run(e.bind(this))}cancelAsync(e){e<0?Et.cancel(~e):wt.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return js(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(nt(n).setAttribute(e,""),!0):(nt(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,o){o=o||this,this.transform("translate3d("+e+","+t+","+n+")",o)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else{if(n=ct(this,e).indexOf(t),n>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o}),Zs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ei={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},ti=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ei);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */function ni(e,t,n,o){!function(e,t,n){const o=e._noAccessors,s=Object.getOwnPropertyNames(e);for(let i=0;i<s.length;i++){let r=s[i];if(!(r in n))if(o)t[r]=e[r];else{let n=Object.getOwnPropertyDescriptor(e,r);n&&(n.configurable=!0,Object.defineProperty(t,r,n))}}}(t,e,o);for(let e in Zs)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function oi(e,t){for(const n in t){const o=e[n],s=t[n];e[n]=!("value"in s)&&o&&"value"in o?Object.assign({value:o.value},s):s}}function si(e,t,n){let o;const s={};class i extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(o)for(let e,t=0;t<o.length;t++)e=o[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(o)for(let e=0;e<o.length;e++)oi(t,o[e].properties);return oi(t,e.properties),t}static get observers(){let t=[];if(o)for(let e,n=0;n<o.length;n++)e=o[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=s.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=i.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let n=s.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=s.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=s.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=s.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=s.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=s.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=s.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let o=s.attributeChanged;if(o)for(let s=0;s<o.length;s++)o[s].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;o=function e(t,n,o){n=n||[];for(let s=t.length-1;s>=0;s--){let i=t[s];i?Array.isArray(i)?e(i,n):n.indexOf(i)<0&&(!o||o.indexOf(i)<0)&&n.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),i.prototype.behaviors=e?e.concat(n):o}return(t=>{o&&function(e,t,n){for(let o=0;o<t.length;o++)ni(e,t[o],n,ti)}(t,o,s),ni(t,e,s,ei)})(i.prototype),i.generatedFrom=e,i}const ii=function(e){let t;return t="function"==typeof e?e:ii.Class(e),customElements.define(t.is,t),t};
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
function ri(e,t,n,o,s){let i;s&&(i="object"==typeof n&&null!==n,i&&(o=e.__dataTemp[t]));let r=o!==n&&(o==o||n==n);return i&&r&&(e.__dataTemp[t]=n),r}ii.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(Ks(HTMLElement)):Ks(HTMLElement);return n=si(e,n,e.behaviors),n.is=n.prototype.is=e.is,n};const ai=tt(e=>class extends e{_shouldPropertyChange(e,t,n){return ri(this,e,t,n,!0)}}),li=tt(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return ri(this,e,t,n,this.mutableData)}});ai._mutablePropertyChange=ri;
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let di=null;function ci(){return di}ci.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ci,writable:!0}});const ui=_n(ci),hi=ai(ui);const pi=_n(class{});class mi extends pi{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let o=t[n];if(Boolean(e)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)e?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(e)o.__polymerReplaced__=document.createComment("hidden-slot"),nt(nt(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const e=o.__polymerReplaced__;e&&nt(nt(e).parentNode).replaceChild(o,e)}else o.style&&(e?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=e,o._showHideChildren&&o._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}mi.prototype.__dataHost,mi.prototype.__templatizeOptions,mi.prototype._methodHost,mi.prototype.__templatizeOwner,mi.prototype.__hostProps;const fi=ai(mi);function _i(e,t,n){let o=n.mutableData?fi:mi;vi.mixin&&(o=vi.mixin(o));let s=class extends o{};return s.prototype.__templatizeOptions=n,s.prototype._bindTemplate(e),function(e,t,n,o){let s=n.hostProps||{};for(let t in o.instanceProps){delete s[t];let n=o.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:gi(t,n)})}if(o.forwardHostProp&&t.__dataHost)for(let t in s)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(s,e,t,n),s}function bi(e,t,n){let o=n.forwardHostProp;if(o&&t.hasHostProps){let s=t.templatizeTemplateClass;if(!s){let e=n.mutableData?hi:ui;s=t.templatizeTemplateClass=class extends e{};let i=t.hostProps;for(let e in i)s.prototype._addPropertyEffect("_host_"+e,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:yi(e,o)}),s.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){di=e,Object.setPrototypeOf(e,t.prototype),new t,di=null}(e,s),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function yi(e,t){return function(e,n,o){t.call(e.__templatizeOwner,n.substring("_host_".length),o[n])}}function gi(e,t){return function(e,n,o){t.call(e.__templatizeOwner,e,n,o[n])}}function vi(e,t,n){if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let o=(t?t.constructor:mi)._parseTemplate(e),s=o.templatizeInstanceClass;s||(s=_i(e,o,n),o.templatizeInstanceClass=s),bi(e,o,n);let i=class extends s{};return i.prototype._methodHost=function(e){let t=e.__dataHost;return t&&t._methodHost||t}(e),i.prototype.__dataHost=e,i.prototype.__templatizeOwner=t,i.prototype.__hostProps=o.hostProps,i=i,i}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const Ai=ao(li(_n(HTMLElement)));customElements.define("dom-bind",class extends Ai{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,o){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){nt(nt(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
const wi=li(An);class xi extends wi{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=nt(nt(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=vi(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let o,s=0;s<n.length&&(o=n[s]);s++)o.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((o=this.as)===(s=t)||it(o,s)||rt(o,s)){let o=e[this.itemsIndexAs];t==this.as&&(this.items[o]=n);let s=at(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,t);this.notifyPath(s,n)}var o,s}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=wn.debounce(this.__renderDebouncer,t>0?wt.after(t):Et,e.bind(this)),Cn(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ho()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,o)=>this.__filterFn(e[t],n,o))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let o=0;const s=Math.min(t.length,this.__limit);for(;o<s;o++){let s=this.__instances[o],i=t[o],r=e[i];n[i]=o,s?(s._setPendingProperty(this.as,r),s._setPendingProperty(this.indexAs,o),s._setPendingProperty(this.itemsIndexAs,i),s._flushProperties()):this.__insertInstance(r,o,i)}for(let e=this.__instances.length-1;e>=o;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=nt(t.root);for(let e=0;e<t.children.length;e++){let o=t.children[e];n.appendChild(o)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let o={};return o[this.as]=e,o[this.indexAs]=t,o[this.itemsIndexAs]=n,new this.__ctor(o)}__insertInstance(e,t,n){let o=this.__pool.pop();o?(o._setPendingProperty(this.as,e),o._setPendingProperty(this.indexAs,t),o._setPendingProperty(this.itemsIndexAs,n),o._flushProperties()):o=this.__stampInstance(e,t,n);let s=this.__instances[t+1],i=s?s.children[0]:this;return nt(nt(this).parentNode).insertBefore(o.root,i),this.__instances[t]=o,o}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),o=n.indexOf("."),s=o<0?n:n.substring(0,o);if(s==parseInt(s,10)){let e=o<0?"":n.substring(o+1);this.__handleObservedPaths(e);let i=this.__itemsIdxToInstIdx[s],r=this.__instances[i];if(r){let n=this.as+(e?"."+e:"");r._setPendingPropertyOrPath(n,t,!1,!0),r._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=nt(t).parentNode;return null}
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */(this.template,e)}}customElements.define(xi.is,xi);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
class Ci extends An{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=wn.debounce(this.__renderDebouncer,Et,()=>this.__render()),Cn(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=nt(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||nt(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){ho()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=nt(this).parentNode;if(e){if(!this.__ctor){let e=nt(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!nt(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=vi(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[st(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(nt(this).previousSibling!==t[t.length-1])for(let n,o=0;o<t.length&&(n=t[o]);o++)nt(e).insertBefore(n,this)}}else this.__instance=new this.__ctor,nt(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=nt(e[0]).parentNode;if(t){t=nt(t);for(let n,o=0;o<e.length&&(n=e[o]);o++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ci.is,Ci);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
let Ei=tt(e=>{let t=vn(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],o=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),o){let e=Fo(n,o);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let o=e[n];t.forEach((e,n)=>{e<o.index||(e>=o.index+o.removed.length?t.set(n,e+o.addedCount-o.removed.length):t.set(n,-1))});for(let e=0;e<o.addedCount;e++){let n=o.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,o)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(o)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,o)=>{t==e++&&this.deselect(o)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(An);class Si extends Ei{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Si.is,Si);
/**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
Ks(HTMLElement).prototype;
/**
    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */ii({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Pi extends class extends An{}{static get template(){return We`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(Pi.is,Pi);class Oi extends No{static get is(){return"vaadin-context-menu-item"}}class Ti extends Vo{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(Oi.is,Oi),customElements.define(Ti.is,Ti);const ki=Element.prototype,Ii=ki.matches||ki.matchesSelector||ki.mozMatchesSelector||ki.msMatchesSelector||ki.oMatchesSelector||ki.webkitMatchesSelector,Li={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return Ii.call(e,"input, select, textarea, button, object")?Ii.call(e,":not([disabled])"):Ii.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&Ii.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const n=e,o=this._normalizedTabIndex(n);let s,i=o>0;if(o>=0&&t.push(n),s="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children,s)for(let e=0;e<s.length;e++)i=this._collectTabbableNodes(s[e],t)||i;return i},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const n=Math.ceil(t/2),o=this._sortByTabIndex(e.slice(0,n)),s=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(o,s)},_mergeSortByTabIndex:function(e,t){const n=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)},_hasLowerTabOrder:function(e,t){const n=Math.max(e.tabIndex,0),o=Math.max(t.tabIndex,0);return 0===n||0===o?o>n:n>o}};
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
let Mi=0;const zi={},Ni=e=>{Mi++;const t=`vaadin-overlay-content-${Mi}`,n=document.createElement("template"),o=document.createElement("style");o.textContent=":host { display: block; }"+e,n.content.appendChild(o),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(n,t);const s=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(n.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(s.is,s),zi[e]=t,t};class Ri extends(co(An)){static get template(){return We`
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
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new jo(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,n=document.documentElement.clientHeight;t&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){var n,o,s;this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),n=this,o=()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)},zs||Bs(),Rs.push([n,o,s]),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const n=`__${e}Handler`,o=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",o),delete this[n])};this[n]=o,this.addEventListener("animationend",o)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof Ri).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===Ri.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Ri.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Ri.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=vi(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const n=e._templateRoot||(e._templateRoot=e.getRootNode());if(n!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(n.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(n.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=zi[e]||Ni(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this.template=void 0:n!==o&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,n,o,s,i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==n||this._oldModel!==o;this._oldModel=o,this._oldOwner=n;const a=this._oldInstanceProps!==s||this._oldTemplate!==e;this._oldInstanceProps=s,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==i;if(this._oldOpened=i,e&&a)this._stampOverlayTemplate(e,s);else if(t&&(l||d||r)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);i&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const n=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(n)),(t+=e)>=n.length?t=0:t<0&&(t=n.length-1),n[t].focus()}_getFocusableElements(){return Li.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const n=e.ownerDocument;for(;t&&t!==n&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=Ri.__attachedInstances.filter(e=>e!==this).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(Ri.is,Ri);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Bi=document.createElement("template");Bi.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Bi.content);class Di extends Ri{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let n=e.bottom-t.height;const o=this.parentOverlay;if(o&&o.hasAttribute("bottom-aligned")){const e=getComputedStyle(o);n=n-parseFloat(e.bottom)-parseFloat(e.height)}return{xMax:e.right-t.width,yMax:n,left:e.left,top:e.top,width:t.width}}}customElements.define(Di.is,Di);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Fi extends(Co(lo((e=>class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){const n=e.parentOverlay.querySelector("[expanded]");n&&n.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;const n=t.getBoundingClientRect(),o=e.$.overlay.$.content,s=getComputedStyle(o),i=this.$.overlay,r=i.hasAttribute("bottom-aligned")?n.bottom+parseFloat(s.paddingBottom):n.top-parseFloat(s.paddingTop);let a;e.$.overlay._setParentOverlay(i),i.theme?e.setAttribute("theme",i.theme):e.removeAttribute("theme"),o.style.minWidth="",document.documentElement.clientWidth-n.right>n.width?a=n.right:(a=n.left-n.width,o.style.minWidth=i.$.content.clientWidth+"px"),a=Math.max(a,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:a,y:r,children:t._item.children}}))}__itemsRenderer(e,t,n){this.__initMenu(e,t),e.querySelector(this.constructor.is).closeOn=t.closeOn;const o=e.querySelector("vaadin-context-menu-list-box");o.innerHTML="",Array.from(n.detail.children||t.items).forEach(e=>{let t;t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item"),t instanceof No?(t.setAttribute("role","menuitem"),t.classList.add("vaadin-menu-item")):"hr"===t.localName&&t.setAttribute("role","separator"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),o.appendChild(t)})}__toggleMenuComponentAttribute(e,t,n){n?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){const t=e.querySelector("vaadin-context-menu-list-box");this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme")}else{const n=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${n} hidden></${n}>\n      `,ho();const o=e.querySelector("vaadin-context-menu-list-box");this.theme&&o.setAttribute("theme",this.theme),o.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>o.setAttribute("role","menu"));const s=e.querySelector(n);s.$.overlay.modeless=!0,s.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&s.close()),s.addEventListener("opened-changed",e=>{if(!e.detail.value){const e=o.querySelector("[expanded]");e&&(e.setAttribute("aria-expanded","false"),e.removeAttribute("expanded"))}}),o.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){const n=e.target.items[e.detail.value]._item;if(!n.children){const e={value:n};t.dispatchEvent(new CustomEvent("item-selected",{detail:e}))}o.selected=null}}),s.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),s.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{37===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);const i=(e,n=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>i(e,n));else if(n){if(s.items!==n._item.children&&s.close(),!t.opened)return;n._item.children&&n._item.children.length?(n.setAttribute("aria-expanded","true"),n.setAttribute("expanded",""),this.__openSubMenu(s,n)):s.listenOn.focus()}};t.$.overlay.addEventListener("mouseover",i),t.$.overlay.addEventListener("keydown",e=>(39===e.keyCode||13===e.keyCode||32===e.keyCode)&&i(e))}}})(ao(An))))){static get template(){return We`
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
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.3.15"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._observer=new jo(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.msUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.msUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this._contentTemplate=void 0:n!==o&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,n,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,o){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&n&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const n=this.$.overlay.style;n[e]=(parseInt(n[e])||0)+t+"px"}__alignOverlayPosition(){const e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));const{xMax:n,yMax:o,left:s,top:i,width:r}=e.getBoundaries();let a=this.__x||s;const l=this.__y||i,d=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=e.parentOverlay;let h,p=!1;if(u)if(h=u.$.overlay.getBoundingClientRect(),u.hasAttribute("right-aligned")){const n=getComputedStyle(u),o=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),s=parseFloat(n.right)+h.width;d-(s-(o(u,"Left")+o(e,"Right")))>r&&(e.setAttribute("right-aligned",""),t.right=s+"px",p=!0)}else a<h.x&&(a-=r-h.width);p||((a<d/2||a<n)&&!u?t.left=a+"px":u&&d-h.width-h.left>=h.width?t.left=h.left+h.width+"px":u?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left,h.left-e.getBoundingClientRect().width)+"px",e.setAttribute("right-aligned","")):(t.right=Math.max(0,d-a)+"px",e.setAttribute("right-aligned",""))),l<c/2||l<o?t.top=l+"px":(t.bottom=Math.max(0,c-l)+"px",e.setAttribute("bottom-aligned",""))}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){const n="client"+t.toUpperCase(),o=e.changedTouches?e.changedTouches[0][n]:e[n];if(0===o){const n=e.target.getBoundingClientRect();return"x"===t?n.left:n.top+n.height}return o}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,n){Gn[t]?Wn(e,t,n):e.addEventListener(t,n)}_unlisten(e,t,n){Gn[t]?Kn(e,t,n):e.removeEventListener(t,n)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(Fi.is,Fi);
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
var $i=new Set;const Hi={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):($i.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():Te||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Gs(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):($i.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?$i.delete(this):$i.add(this)}},ji=e=>class extends(function(e,t){return si({},Ks(t),e)}(Hi,e)){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}ready(){super.ready(),this.setAttribute("role","menubar"),this.addEventListener("iron-resize",e=>this.__onResize()),this._overflow.setAttribute("role","menuitem"),this._overflow.setAttribute("aria-haspopup","true"),this._overflow.setAttribute("aria-expanded","false")}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e,t){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__detectOverflow(){const e=this._container,t=this._buttons.slice(0),n=t.pop(),o=e.offsetWidth;if(e.offsetWidth<e.scrollWidth){let e;for(this._hasOverflow=!0,e=t.length;e>0;e--){const s=t[e-1],i=getComputedStyle(s);if("hidden"===i.visibility)continue;const r=s.offsetWidth;if(s.offsetLeft+r<o-n.offsetWidth)break;s.disabled=!0,s.style.visibility="hidden",s.style.position="absolute",s.style.width=i.width}n.item={children:t.filter((t,n)=>n>=e).map(e=>e.item)}}else if(this._hasOverflow){this._subMenu.opened&&this._subMenu.close();for(let e=0;e<t.length;e++){const s=t[e];if("hidden"!==getComputedStyle(s).visibility)continue;const i=n.offsetLeft,r=s.getBoundingClientRect().width;if(!(i+n.offsetWidth+r<o))break;{s.disabled=s.item.disabled,s.style.visibility="",s.style.position="",s.style.width="";const o=s.item&&s.item.component;o instanceof HTMLElement&&o.classList.contains("vaadin-menu-item")&&(s.appendChild(o),o.classList.remove("vaadin-menu-item")),n.item={children:t.filter((t,n)=>n>=e+1).map(e=>e.item)},s===t[t.length-1]&&(this._hasOverflow=!1,n.item={children:[]})}}}}render(){this.shadowRoot&&this.__renderButtons(this.items)}__renderButtons(e=[]){const t=this._container,n=this._overflow;for(;t.children.length>1;)t.removeChild(t.firstElementChild);e.forEach(e=>{const o=document.createElement("vaadin-menu-bar-button"),s=Object.assign({},e);o.item=s;const i=e.component;if(i){let t;const n=i instanceof HTMLElement;if(n&&"vaadin-context-menu-item"===i.localName?t=i:(t=document.createElement("vaadin-context-menu-item"),t.appendChild(n?i:document.createElement(i))),e.text){(t.firstChild||t).textContent=e.text}s.component=t,t.item=s,t.setAttribute("theme","menu-bar-item"),o.appendChild(t)}else e.text&&(o.textContent=e.text);e.disabled?(o.disabled=!0,o.setAttribute("tabindex","-1")):o.setAttribute("tabindex","0"),o.item.children&&(o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded","false")),o.setAttribute("part","menu-bar-button"),this.theme&&""!==this.theme&&o.setAttribute("theme",this.theme),t.insertBefore(o,n),o.setAttribute("role","menuitem")}),this.__detectOverflow()}__onResize(){this.__debounceOverflow=wn.debounce(this.__debounceOverflow,xt,this.__detectOverflow.bind(this))}}
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;
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
class qi extends Fi{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(qi.is,qi);
/**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class Vi extends(ji((e=>class extends e{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)","_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("focusin",e=>this._onFocusin(e)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));const e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));const t=this._container;t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",e=>this._onMouseOver(e))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.__boundOutsideClickListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.__boundOutsideClickListener,!0)}_themeChanged(e){e?(this._buttons.forEach(t=>t.setAttribute("theme",e)),this._subMenu.setAttribute("theme",e)):(this._buttons.forEach(e=>e.removeAttribute("theme")),this._subMenu.removeAttribute("theme"))}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(e=>"vaadin-menu-bar-button"===e.localName)[0]}_onFocusin(e){const t=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');t&&this._buttons.forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}_onKeydown(e){const t=this._getButtonFromEvent(e);t&&(40===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,e)):38===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,e,{focusLast:!0})):27===e.keyCode&&t===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){const t=e.key.replace(/^Arrow/,""),n=this._buttons,o=this.shadowRoot.activeElement||this._expandedButton,s=n.indexOf(o);let i,r;switch(t){case"Left":r=-1,i=s-1;break;case"Right":r=1,i=s+1;break;case"Home":r=1,i=0;break;case"End":r=-1,i=n.length-1}if(i=this._getAvailableIndex(i,r,n),i>=0){e.preventDefault();const t=n[i],s=o===this._expandedButton;s&&this._close(),this._focusButton(t),s&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}_getAvailableIndex(e,t,n){const o=n.length;let s=e;for(let e=0;"number"==typeof s&&e<o;e++,s+=t||1){s<0?s=o-1:s>=o&&(s=0);const e=n[s];if(!e.disabled&&!e.hasAttribute("hidden"))return s}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(!this._expandedButton)return;const t=e.target,{width:n,height:o}=this._expandedButton.getBoundingClientRect();t.hasAttribute("bottom-aligned")&&(t.style.bottom=parseInt(getComputedStyle(t).bottom)+o+"px"),t.hasAttribute("right-aligned")&&(t.style.right=parseInt(getComputedStyle(t).right)-n+"px")}_itemsChanged(e,t){const n=this._subMenu;n&&n.opened&&n.close()}_onMouseOver(e){const t=this._getButtonFromEvent(e);if(t&&t!==this._expandedButton){const n=this._subMenu.opened;t.item.children&&(this.openOnHover||n)?this.__openSubMenu(t,e):n&&this._close()}}__onContextMenuKeydown(e){const t=Array.from(e.composedPath()).filter(e=>e._item)[0];if(t){const n=t.parentNode;if(38===e.keyCode&&t===n.items[0]&&this._close(!0),37===e.keyCode||39===e.keyCode&&!t._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);const t=this.shadowRoot.activeElement;t&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,e)}__openSubMenu(e,t,n={}){const o=this._subMenu,s=e.item;if(o.opened&&(this._close(),o.listenOn===e))return;const i=s&&s.children;if(!i||0===i.length)return void this.__fireItemSelected(s);o.items=i,o.listenOn=e,this._expandedButton=e;const r=e.getBoundingClientRect();requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:r.left,y:r.bottom,children:i}})),e.setAttribute("expanded",""),e.setAttribute("aria-expanded","true")}),n.focusLast&&this.__onceOpened(()=>this._focusLastItem()),n.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),"keydown"!==t.type&&this.__onceOpened(()=>{o.$.overlay.$.overlay.focus()})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onceOpened(e){this.style.pointerEvents="auto";const t=this._subMenu.$.overlay,n=()=>{e(),t.removeEventListener("vaadin-overlay-open",n)};t.addEventListener("vaadin-overlay-open",n)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(e){this.__deactivateButton(!0)}__deactivateButton(e){const t=this._expandedButton;t&&t.hasAttribute("expanded")&&(t.removeAttribute("expanded"),t.setAttribute("aria-expanded","false"),e&&this._focusButton(t),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}})(Co(co(An))))){static get template(){return We`
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
`}static get is(){return"vaadin-menu-bar"}static get version(){return"1.0.5"}static get properties(){return{items:{type:Array,value:()=>[]}}}}function Yi(e){let n,o,s;return{c(){n=u("svelte-head"),o=p(),s=u("vaadin-menu-bar"),this.c=t,_(s,"theme","dark"),_(s,"class","vaadin-menu")},m(t,i){l(t,n,i),l(t,o,i),l(t,s,i),e[8](s)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(s),e[8](null)}}}function Ui(e,t,n){let o=null,{theme:s="default"}=t,{logo:i=""}=t,{name:r="CMS"}=t,{values:a=[]}=t,l=[];function d(e,t){o.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}return A(async()=>{o.addEventListener("item-selected",(function(e){d("item-clicked",e.detail.value)}))}),e.$set=e=>{"theme"in e&&n(1,s=e.theme),"logo"in e&&n(2,i=e.logo),"name"in e&&n(3,r=e.name),"values"in e&&n(4,a=e.values)},e.$$.update=()=>{49&e.$$.dirty&&a&&a.length&&(n(5,l=a.map(e=>(e.text=e.label,e.children&&(e.children=e.children.map(e=>(e.text=e.label,e))),e))),o&&n(0,o.items=l,o))},[o,s,i,r,a,l,function(){d("brand-clicked",{})},d,function(e){x[e?"unshift":"push"](()=>{n(0,o=e)})}]}customElements.define(Vi.is,Vi);class Gi extends R{constructor(e){super(),N(this,{target:this.shadowRoot},Ui,Yi,r,{theme:1,logo:2,name:3,values:4}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["theme","logo","name","values"]}get theme(){return this.$$.ctx[1]}set theme(e){this.$set({theme:e}),I()}get logo(){return this.$$.ctx[2]}set logo(e){this.$set({logo:e}),I()}get name(){return this.$$.ctx[3]}set name(e){this.$set({name:e}),I()}get values(){return this.$$.ctx[4]}set values(e){this.$set({values:e}),I()}}function Ji(e){let n,o,s;return{c(){n=u("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',o=p(),s=u("footer"),s.innerHTML='<div class="footer-copyright text-center py-3">© 2020 Copyright:\n    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a></div>',this.c=t,f(s,"class","page-footer font-small blue")},m(e,t){l(e,n,t),l(e,o,t),l(e,s,t)},p:t,i:t,o:t,d(e){e&&d(n),e&&d(o),e&&d(s)}}}function Qi(e,t,n){let{theme:o="default"}=t,{logo:s=""}=t,{name:i="CMS"}=t;return e.$set=e=>{"theme"in e&&n(0,o=e.theme),"logo"in e&&n(1,s=e.logo),"name"in e&&n(2,i=e.name)},[o,s,i]}customElements.define("header-page",Gi);class Xi extends R{constructor(e){super(),N(this,{target:this.shadowRoot},Qi,Ji,r,{theme:0,logo:1,name:2}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["theme","logo","name"]}get theme(){return this.$$.ctx[0]}set theme(e){this.$set({theme:e}),I()}get logo(){return this.$$.ctx[1]}set logo(e){this.$set({logo:e}),I()}get name(){return this.$$.ctx[2]}set name(e){this.$set({name:e}),I()}}function Wi(e,t,n){const o=e.slice();return o[5]=t[n],o}function Ki(e,t,n){const o=e.slice();return o[2]=t[n],o}function Zi(e,t,n){const o=e.slice();return o[5]=t[n],o}function er(e){let t,n,o=e[5].label+"";return{c(){t=u("th"),n=h(o)},m(e,o){l(e,t,o),a(t,n)},p(e,t){1&t&&o!==(o=e[5].label+"")&&b(n,o)},d(e){e&&d(t)}}}function tr(e){let t,n,o=e[2][e[5].id]+"";return{c(){t=u("td"),n=h(o)},m(e,o){l(e,t,o),a(t,n)},p(e,t){3&t&&o!==(o=e[2][e[5].id]+"")&&b(n,o)},d(e){e&&d(t)}}}function nr(e){let t,n,o=e[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=tr(Wi(e,o,t));return{c(){t=u("tr");for(let e=0;e<s.length;e+=1)s[e].c();n=p()},m(e,o){l(e,t,o);for(let e=0;e<s.length;e+=1)s[e].m(t,null);a(t,n)},p(e,i){if(3&i){let r;for(o=e[0],r=0;r<o.length;r+=1){const a=Wi(e,o,r);s[r]?s[r].p(a,i):(s[r]=tr(a),s[r].c(),s[r].m(t,n))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},d(e){e&&d(t),c(s,e)}}}function or(e){let n,o,s,i,r,h,m,_,b,y,g,v,A,w=e[0],x=[];for(let t=0;t<w.length;t+=1)x[t]=er(Zi(e,w,t));let C=e[1],E=[];for(let t=0;t<C.length;t+=1)E[t]=nr(Ki(e,C,t));return{c(){n=u("link"),o=u("script"),i=u("script"),h=p(),m=u("table"),_=u("thead"),b=u("tr");for(let e=0;e<x.length;e+=1)x[e].c();y=p(),g=u("tbody");for(let e=0;e<E.length;e+=1)E[e].c();v=p(),A=u("ul"),A.innerHTML='<li class="page-item"><a class="page-link" href="#">Previous</a></li> \n  <li class="page-item"><a class="page-link" href="#">1</a></li> \n  <li class="page-item"><a class="page-link" href="#">2</a></li> \n  <li class="page-item"><a class="page-link" href="#">3</a></li> \n  <li class="page-item"><a class="page-link" href="#">Next</a></li>',this.c=t,f(n,"rel","stylesheet"),f(n,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),f(n,"integrity","sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"),f(n,"crossorigin","anonymous"),o.defer=!0,o.src!==(s="https://use.fontawesome.com/releases/v5.0.6/js/all.js")&&f(o,"src","https://use.fontawesome.com/releases/v5.0.6/js/all.js"),i.src!==(r="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js")&&f(i,"src","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"),f(i,"integrity","sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"),f(i,"crossorigin","anonymous"),f(m,"class","table"),f(A,"class","pagination pagination-lg")},m(e,t){a(document.head,n),a(document.head,o),a(document.head,i),l(e,h,t),l(e,m,t),a(m,_),a(_,b);for(let e=0;e<x.length;e+=1)x[e].m(b,null);a(m,y),a(m,g);for(let e=0;e<E.length;e+=1)E[e].m(g,null);l(e,v,t),l(e,A,t)},p(e,[t]){if(1&t){let n;for(w=e[0],n=0;n<w.length;n+=1){const o=Zi(e,w,n);x[n]?x[n].p(o,t):(x[n]=er(o),x[n].c(),x[n].m(b,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=w.length}if(3&t){let n;for(C=e[1],n=0;n<C.length;n+=1){const o=Ki(e,C,n);E[n]?E[n].p(o,t):(E[n]=nr(o),E[n].c(),E[n].m(g,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=C.length}},i:t,o:t,d(e){d(n),d(o),d(i),e&&d(h),e&&d(m),c(x,e),c(E,e),e&&d(v),e&&d(A)}}}function sr(e,t,n){let{columns:o=[{label:"column1",id:"column1",sortable:!0,filterable:!0},{label:"column2",id:"column2",sortable:!0,filterable:!0},{label:"column3",id:"column3",sortable:!0,filterable:!0}]}=t,{rows:s=[{column1:"My Column",column2:"Another Value"},{column1:"My Column",column3:"Another Value"}]}=t;return A(async()=>{}),e.$set=e=>{"columns"in e&&n(0,o=e.columns),"rows"in e&&n(1,s=e.rows)},[o,s]}customElements.define("footer-page",Xi);class ir extends R{constructor(e){super(),N(this,{target:this.shadowRoot},sr,or,r,{columns:0,rows:1}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["columns","rows"]}get columns(){return this.$$.ctx[0]}set columns(e){this.$set({columns:e}),I()}get rows(){return this.$$.ctx[1]}set rows(e){this.$set({rows:e}),I()}}function rr(e){let t,n;return{c(){t=u("small"),n=h(e[1]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){2&t&&b(n,e[1])},d(e){e&&d(t)}}}function ar(e){let t,n;return{c(){t=u("small"),n=h(e[2]),f(t,"class","error-message text-danger")},m(e,o){l(e,t,o),a(t,n)},p(e,t){4&t&&b(n,e[2])},d(e){e&&d(t)}}}function lr(e){let t,n;return{c(){t=u("small"),n=h(e[3])},m(e,o){l(e,t,o),a(t,n)},p(e,t){8&t&&b(n,e[3])},d(e){e&&d(t)}}}function dr(e){let n,o,i,r,c,h,_,b,g,v,A,w,x,C,E,S,P,O,T,k,I,L,M,z=e[1]&&rr(e),N=e[2]&&ar(e),R=e[3]&&lr(e);return{c(){n=u("svelte-head"),n.innerHTML='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',o=p(),i=u("div"),r=u("div"),c=u("div"),h=u("div"),_=u("div"),b=u("h5"),b.textContent="New Password",g=p(),v=u("form"),A=u("div"),w=u("input"),x=p(),z&&z.c(),C=p(),E=u("div"),S=u("input"),P=p(),N&&N.c(),O=p(),R&&R.c(),T=p(),k=u("button"),k.textContent="OK",I=p(),L=u("hr"),this.c=t,f(b,"class","card-title text-center"),f(w,"type","password"),f(w,"id","inputPassword"),f(w,"class","form-control"),f(w,"placeholder","New Password"),f(A,"class","form-label-group"),f(S,"type","password"),f(S,"id","inputNewPassword"),f(S,"class","form-control"),f(S,"placeholder","Confirm New Password"),f(E,"class","form-label-group"),f(k,"class","btn btn-lg btn-primary btn-block text-uppercase"),f(k,"type","button"),f(L,"class","my-4"),f(v,"class","form-signin"),f(_,"class","card-body"),f(h,"class","card card-signin my-5"),f(c,"class","col-md-12"),f(r,"class","row"),f(i,"class","container")},m(t,s){l(t,n,s),l(t,o,s),l(t,i,s),a(i,r),a(r,c),a(c,h),a(h,_),a(_,b),a(_,g),a(_,v),a(v,A),a(A,w),y(w,e[4]),a(A,x),z&&z.m(A,null),a(v,C),a(v,E),a(E,S),y(S,e[5]),a(E,P),N&&N.m(E,null),a(v,O),R&&R.m(v,null),a(v,T),a(v,k),a(v,I),a(v,L),e[16](i),M=[m(w,"input",e[12]),m(w,"blur",e[13]),m(S,"input",e[14]),m(S,"keydown",e[6]),m(S,"blur",e[15]),m(k,"click",e[7])]},p(e,[t]){16&t&&w.value!==e[4]&&y(w,e[4]),e[1]?z?z.p(e,t):(z=rr(e),z.c(),z.m(A,null)):z&&(z.d(1),z=null),32&t&&S.value!==e[5]&&y(S,e[5]),e[2]?N?N.p(e,t):(N=ar(e),N.c(),N.m(E,null)):N&&(N.d(1),N=null),e[3]?R?R.p(e,t):(R=lr(e),R.c(),R.m(v,T)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&d(n),t&&d(o),t&&d(i),z&&z.d(),N&&N.d(),R&&R.d(),e[16](null),s(M)}}}function cr(e,t,n){let o,s,i=null,r=null,a=null,l=null,{theme:d="default"}=t,{message:c=null}=t;function u(e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,cancelable:!1,detail:t}))}function h(){p("password1",o),p("password2",s),r||a||u("new-password",{newPassword:o,confirmNewPassword:s})}const p=(e,t)=>{switch(e){case"password1":n(1,r=null),t||n(1,r="Password must be filled");break;case"password2":n(2,a=null),t||n(2,a="Confirm password must be filled")}o!=s&&n(3,l="Passwords must match")};return e.$set=e=>{"theme"in e&&n(9,d=e.theme),"message"in e&&n(10,c=e.message)},[i,r,a,l,o,s,function(e){e.key,13==e.keyCode&&h()},h,p,d,c,u,function(){o=this.value,n(4,o)},()=>p("password1",o),function(){s=this.value,n(5,s)},()=>p("password2",s),function(e){x[e?"unshift":"push"](()=>{n(0,i=e)})}]}customElements.define("data-table",ir);class ur extends R{constructor(e){super(),this.shadowRoot.innerHTML="<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",N(this,{target:this.shadowRoot},cr,dr,r,{theme:9,message:10}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["theme","message"]}get theme(){return this.$$.ctx[9]}set theme(e){this.$set({theme:e}),I()}get message(){return this.$$.ctx[10]}set message(e){this.$set({message:e}),I()}}customElements.define("new-password-page",ur);const hr=document.createElement("template");hr.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(hr.content);const pr=document.createElement("template");pr.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(pr.content);const mr=We`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
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
</dom-module>`;document.head.appendChild(mr.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const fr=document.createElement("template");fr.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(fr.content);const _r={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},br={DEFAULT:"default",ACCESSIBLE:"accessible"},yr=e=>class extends(uo(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+_r.default.join(", ")+")","_hostAccessiblePropsChanged("+_r.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=wn.debounce(this._inputDebouncer,wt.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value}_stateChanged(e,t,n,o){!e&&!t&&n&&o?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput?this.__userInput=!1:(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(br).map(e=>br[e]).forEach(e=>this._propagateHostAttributes(_r[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,br.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,br.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const n=this.inputElement,o=_r[t];"accessible"===t?o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],n),this._setOrToggleAttribute(`aria-${t}`,e[o],n)}):o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],n)})}_setOrToggleAttribute(e,t,n){e&&n&&(t?n.setAttribute(e,"boolean"==typeof t?"":t):n.removeAttribute(e))}_constraintsChanged(e,t,n,o){this.invalid&&(e||t||n||o?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=yr._uniqueId=1+yr._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const n=new Event("change",{bubbles:!this._slottedInput});n.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(n)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){const t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){const t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,n){this._setOrToggleAttribute("aria-describedby",t&&e?n:void 0,this.focusElement)}_getActiveLabelId(e,t,n){let o=n;e&&(o=`${t} ${n}`),this.focusElement.setAttribute("aria-labelledby",o)}_getErrorMessageAriaHidden(e,t,n){return(!(t&&e?n:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const n="__previous"+e;void 0!==this[n]&&this[n]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[n]=t}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class gr extends(Co(yr(co(An)))){static get template(){return We`
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
`}static get is(){return"vaadin-text-field"}static get version(){return"2.5.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(gr.is,gr);const vr=We`<dom-module id="lumo-password-field" theme-for="vaadin-password-field">
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
</dom-module>`;document.head.appendChild(vr.content);
/**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Ar=document.createElement("template");let wr;Ar.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'vaadin-password-field-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAYMAAsAAAAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFgGNtYXAAAAFoAAAAVAAAAFQXVtKIZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfwAAAH8yBLEP2hlYWQAAAPAAAAANgAAADYN+RfTaGhlYQAAA/gAAAAkAAAAJAfCA8dobXR4AAAEHAAAABgAAAAYDgAAAGxvY2EAAAQ0AAAADgAAAA4BJgCSbWF4cAAABEQAAAAgAAAAIAAMAFpuYW1lAAAEZAAAAYYAAAGGmUoJ+3Bvc3QAAAXsAAAAIAAAACAAAwAAAAMDVQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkB//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAAAHoEAALGABQAJABFAAABIg4CMTAeAjMyPgIxMC4CIwc+ATEwBhUUFjEHMCY1NDYTIi4CJz4BNw4BFRQeAjMyPgI1NCYnHgEXDgMjAgChyHAnN3rAiYjFfjsncMihrRg7IA1GExmnY5ZqQg8PWGAFCChGXTU1XUYoCAVgWA8RRW2ZZALGZnpmUmJSUGBQaHxoYA8FRSIhJQ0rIiYz/lQvQkYVInswEygYNV1GKChGXTUYKBMrgCIVRkIvAAAABQAA/8AEAAPAABoAJgA6AEcAVwAAAQceARcOAyMiJicHHgEzMj4CMTAuAicHNCYnATIWMzI+AhMBLgEjIg4CMTAeAhcHFTMBNQEuASc+ATcOARUUFhc3BzAmNTQ2MT4BMTAGFQYWAzo0UlMPEUVtmWQiNR0zJ1QsiMV+OxEsTTw6AgT+zA8dDjVdRijT/ucnXjWhyHAnGTNQN9MtA9P9AE1ZFA9YYAUILSY6QBMZGDsgBAsCczMrcyIWQ0AtCAQzDgtQYFAzS1ckeQ4bCv7TBihGXQH7/uYKEGZ6Zic5RBzNLQPTLf0tIVoYInswEygYNWMihgwrISc5DwVHJiIlAAEAAAAAAADkyo21Xw889QALBAAAAAAA1W1pqwAAAADVbWmrAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAYEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAAAAAAAAoAFAAeAH4A/gAAAAEAAAAGAFgABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style><dom-module id="vaadin-password-field-template">\n  <template>\n    <style>\n      /* Hide the native eye icon for IE/Edge */\n      ::-ms-reveal {\n        display: none;\n      }\n\n      [part="reveal-button"][hidden] {\n        display: none !important;\n      }\n    </style>\n\n    <div part="reveal-button" on-mousedown="_revealButtonMouseDown" on-touchend="_togglePasswordVisibilityTouchend" on-click="_togglePasswordVisibility" hidden$="[[revealButtonHidden]]">\n    </div>\n  </template>\n  \n</dom-module>',document.head.appendChild(Ar.content);class xr extends gr{static get is(){return"vaadin-password-field"}static get version(){return"2.5.4"}static get properties(){return{revealButtonHidden:{type:Boolean,value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChange",readOnly:!0}}}static get template(){if(!wr){wr=super.template.cloneNode(!0);const e=ze.import(this.is+"-template","template"),t=e.content.querySelector('[part="reveal-button"]'),n=e.content.querySelector("style");wr.content.querySelector('[part="input-field"]').appendChild(t),wr.content.appendChild(n)}return wr}ready(){super.ready(),this.inputElement.type="password",this.inputElement.autocapitalize="off",this.addEventListener("focusout",()=>{this._passwordVisibilityChanging||(this._setPasswordVisible(!1),this._cachedChangeEvent&&this._onChange(this._cachedChangeEvent))})}_onChange(e){this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`)&&e.stopPropagation(),this._passwordVisibilityChanging?this._cachedChangeEvent=e:(this._cachedChangeEvent=null,super._onChange(e))}_revealButtonMouseDown(e){this.hasAttribute("focused")&&e.preventDefault()}_togglePasswordVisibilityTouchend(e){e.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_togglePasswordVisibility(){this._passwordVisibilityChanging=!0,this.inputElement.blur(),this._setPasswordVisible(!this.passwordVisible),this.inputElement.focus(),this._passwordVisibilityChanging=!1}_passwordVisibleChange(e){this.inputElement.type=e?"text":"password"}}customElements.define(xr.is,xr);const Cr=We`<dom-module id="lumo-login-form-wrapper" theme-for="vaadin-login-form-wrapper">
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
</dom-module>`;document.head.appendChild(Cr.content);
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Er=e=>class extends e{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();const{detail:t,composed:n,cancelable:o,bubbles:s}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:s,cancelable:o,composed:n,detail:t}))||e.preventDefault()}}
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */;class Sr extends(Er(Co(co(An)))){static get template(){return We`
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
`}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(Sr.is,Sr);const Pr=We`<dom-module id="lumo-login-form" theme-for="vaadin-login-form">
  <template>
    <style>
      vaadin-button[part="vaadin-login-submit"] {
        margin-top: var(--lumo-space-l);
        margin-bottom: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Pr.content);class Or extends(Er(Co(co(An)))){static get template(){return We`
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
`}static get is(){return"vaadin-login-form"}static get version(){return"1.0.1"}static get properties(){return{theme:{type:String}}}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this)}_attachDom(e){this.appendChild(e)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(this.disabled||!this.__isValid(this.$.vaadinLoginUsername)||!this.__isValid(this.$.vaadinLoginPassword))return;this.error=!1,this.disabled=!0;const e={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},t=this.dispatchEvent(new CustomEvent("login",e));this.action&&t&&this.querySelector('[part="vaadin-login-native-form"]').submit()}__isValid(e){return e.validate&&e.validate()||e.checkValidity&&e.checkValidity()}_isEnterKey(e){return"Enter"===e.key||13===e.keyCode}_handleInputKeydown(e){if(this._isEnterKey(e)){const{currentTarget:t}=e,n="vaadinLoginUsername"===t.id?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(t)&&(this.__isValid(n)?this.submit():n.focus())}}_handleInputKeyup(e){const t="Tab"===e.key||9===e.keyCode,n=e.currentTarget;t&&n&&n.select&&(n.select(),setTimeout(()=>n.setSelectionRange(0,9999)))}}customElements.define(Or.is,Or);const Tr=We`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(Tr.content);const kr=We`<dom-module id="vaadin-login-overlay-wrapper-lumo-styles" theme-for="vaadin-login-overlay-wrapper">
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
</dom-module>`;document.head.appendChild(kr.content);
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
const Ir=document.createElement("template");let Lr;Ir.innerHTML='<dom-module id="vaadin-login-overlay-wrapper-template">\n  <template>\n    <style>\n      [part="overlay"] {\n        outline: none;\n      }\n\n      [part="card"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="brand"] {\n        box-sizing: border-box;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-shrink: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n      }\n\n      [part="brand"] h1 {\n        color: inherit;\n        margin: 0;\n      }\n    </style>\n    <section part="card">\n      <div part="brand">\n        <slot name="title">\n          <h1 part="title">[[title]]</h1>\n        </slot>\n        <p part="description">[[description]]</p>\n      </div>\n      <div part="form">\n        <slot></slot>\n      </div>\n    </section>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(Ir.content);class Mr extends Ri{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!Lr){Lr=super.template.cloneNode(!0);const e=ze.import(this.is+"-template","template"),t=e.content.querySelector("[part=card]"),n=e.content.querySelector("style"),o=Lr.content.querySelector("#content");o.replaceChild(t,o.children[0]),o.appendChild(n)}return Lr}}customElements.define(Mr.is,Mr);
/**
    @license
    Vaadin Login
    Copyright (C) 2018 Vaadin Ltd
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
class zr extends(Er(Co(co(An)))){static get template(){return We`
    <vaadin-login-overlay-wrapper id="vaadinLoginOverlayWrapper" opened="{{opened}}" focus-trap="" with-backdrop="" title="[[title]]" description="[[description]]" theme\$="[[theme]]">

      <vaadin-login-form theme="with-overlay" id="vaadinLoginForm" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      </vaadin-login-form>

    </vaadin-login-overlay-wrapper>
`}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"},theme:{type:String}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){const t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(e=>this.$.vaadinLoginOverlayWrapper.appendChild(e));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}return customElements.define(zr.is,zr),e.changePassword=ee,e.dataTable=ir,e.footer=Xi,e.forgotPassword=U,e.header=Gi,e.login=j,e.newPassword=ur,e}({});
//# sourceMappingURL=components.js.map
