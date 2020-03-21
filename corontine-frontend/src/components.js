var app = function(t) {
    "use strict";
    function e() {}
    function s(t) {
        return t()
    }
    function n() {
        return Object.create(null)
    }
    function r(t) {
        t.forEach(s)
    }
    function o(t) {
        return "function" == typeof t
    }
    function a(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    function l(t, e) {
        t.appendChild(e)
    }
    function c(t, e, s) {
        t.insertBefore(e, s || null)
    }
    function i(t) {
        t.parentNode.removeChild(t)
    }
    function u(t, e) {
        for (let s = 0; s < t.length; s += 1)
            t[s] && t[s].d(e)
    }
    function m(t) {
        return document.createElement(t)
    }
    function p(t) {
        return document.createTextNode(t)
    }
    function d() {
        return p(" ")
    }
    function h(t, e, s, n) {
        return t.addEventListener(e, s, n),
        ()=>t.removeEventListener(e, s, n)
    }
    function g(t, e, s) {
        null == s ? t.removeAttribute(e) : t.getAttribute(e) !== s && t.setAttribute(e, s)
    }
    function f(t, e) {
        e = "" + e,
        t.data !== e && (t.data = e)
    }
    function b(t, e) {
        (null != e || t.value) && (t.value = e)
    }
    let y;
    function v(t) {
        y = t
    }
    function w(t) {
        (function() {
            if (!y)
                throw new Error("Function called outside component initialization");
            return y
        }
        )().$$.on_mount.push(t)
    }
    const x = []
      , $ = []
      , j = []
      , M = []
      , k = Promise.resolve();
    let R = !1;
    function T(t) {
        j.push(t)
    }
    const E = new Set;
    function I() {
        do {
            for (; x.length; ) {
                const t = x.shift();
                v(t),
                C(t.$$)
            }
            for (; $.length; )
                $.pop()();
            for (let t = 0; t < j.length; t += 1) {
                const e = j[t];
                E.has(e) || (E.add(e),
                e())
            }
            j.length = 0
        } while (x.length);for (; M.length; )
            M.pop()();
        R = !1,
        E.clear()
    }
    function C(t) {
        if (null !== t.fragment) {
            t.update(),
            r(t.before_update);
            const e = t.dirty;
            t.dirty = [-1],
            t.fragment && t.fragment.p(t.ctx, e),
            t.after_update.forEach(T)
        }
    }
    const J = new Set;
    function O(t, e) {
        -1 === t.$$.dirty[0] && (x.push(t),
        R || (R = !0,
        k.then(I)),
        t.$$.dirty.fill(0)),
        t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }
    function Q(t, a, l, c, i, u, m=[-1]) {
        const p = y;
        v(t);
        const d = a.props || {}
          , h = t.$$ = {
            fragment: null,
            ctx: null,
            props: u,
            update: e,
            not_equal: i,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(p ? p.$$.context : []),
            callbacks: n(),
            dirty: m
        };
        let g = !1;
        var f, b;
        h.ctx = l ? l(t, d, (e,s,...n)=>{
            const r = n.length ? n[0] : s;
            return h.ctx && i(h.ctx[e], h.ctx[e] = r) && (h.bound[e] && h.bound[e](r),
            g && O(t, e)),
            s
        }
        ) : [],
        h.update(),
        g = !0,
        r(h.before_update),
        h.fragment = !!c && c(h.ctx),
        a.target && (a.hydrate ? h.fragment && h.fragment.l(function(t) {
            return Array.from(t.childNodes)
        }(a.target)) : h.fragment && h.fragment.c(),
        a.intro && ((f = t.$$.fragment) && f.i && (J.delete(f),
        f.i(b))),
        function(t, e, n) {
            const {fragment: a, on_mount: l, on_destroy: c, after_update: i} = t.$$;
            a && a.m(e, n),
            T(()=>{
                const e = l.map(s).filter(o);
                c ? c.push(...e) : r(e),
                t.$$.on_mount = []
            }
            ),
            i.forEach(T)
        }(t, a.target, a.anchor),
        I()),
        v(p)
    }
    let X;
    function z(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[3]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                8 & e && f(s, t[3])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function H(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[4]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                16 & e && f(s, t[4])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function V(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[1])
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                2 & e && f(s, t[1])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function A(t) {
        let s, n, o, a, u, p, f, y, v, w, x, $, j, M, k, R, T, E, I, C, J, O, Q, X, A, P, q = t[3] && z(t), D = t[4] && H(t), U = t[1] && V(t);
        return {
            c() {
                s = m("svelte-head"),
                s.innerHTML = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',
                n = d(),
                o = m("div"),
                a = m("div"),
                u = m("div"),
                p = m("div"),
                f = m("div"),
                y = m("h5"),
                y.textContent = "Login In",
                v = d(),
                w = m("form"),
                x = m("div"),
                $ = m("input"),
                j = d(),
                q && q.c(),
                M = d(),
                k = m("div"),
                R = m("input"),
                T = d(),
                D && D.c(),
                E = d(),
                I = m("div"),
                C = m("button"),
                C.textContent = "Forgot the password ?",
                J = d(),
                U && U.c(),
                O = d(),
                Q = m("button"),
                Q.textContent = "Log in",
                X = d(),
                A = m("hr"),
                this.c = e,
                g(y, "class", "card-title text-center"),
                g($, "type", "email"),
                g($, "id", "inputEmail"),
                g($, "class", "form-control"),
                g($, "placeholder", "Username"),
                g(x, "class", "form-label-group"),
                g(R, "type", "password"),
                g(R, "id", "inputPassword"),
                g(R, "class", "form-control"),
                g(R, "placeholder", "Password"),
                g(k, "class", "form-label-group"),
                g(C, "type", "button"),
                g(C, "class", "forgot-password"),
                g(I, "class", "custom-control custom-checkbox mb-3"),
                g(Q, "class", "btn btn-lg btn-primary btn-block text-uppercase"),
                g(Q, "type", "button"),
                g(A, "class", "my-4"),
                g(w, "class", "form-signin"),
                g(f, "class", "card-body"),
                g(p, "class", "card card-signin my-5"),
                g(u, "class", "col-md-12"),
                g(a, "class", "row"),
                g(o, "class", "container")
            },
            m(e, r) {
                c(e, s, r),
                c(e, n, r),
                c(e, o, r),
                l(o, a),
                l(a, u),
                l(u, p),
                l(p, f),
                l(f, y),
                l(f, v),
                l(f, w),
                l(w, x),
                l(x, $),
                b($, t[0]),
                l(x, j),
                q && q.m(x, null),
                l(w, M),
                l(w, k),
                l(k, R),
                b(R, t[5]),
                l(k, T),
                D && D.m(k, null),
                l(w, E),
                l(w, I),
                l(I, C),
                l(w, J),
                U && U.m(w, null),
                l(w, O),
                l(w, Q),
                l(w, X),
                l(w, A),
                t[15](o),
                P = [h($, "input", t[11]), h($, "blur", t[12]), h(R, "input", t[13]), h(R, "blur", t[14]), h(C, "click", t[7]), h(Q, "click", t[6])]
            },
            p(t, [e]) {
                1 & e && $.value !== t[0] && b($, t[0]),
                t[3] ? q ? q.p(t, e) : (q = z(t),
                q.c(),
                q.m(x, null)) : q && (q.d(1),
                q = null),
                32 & e && R.value !== t[5] && b(R, t[5]),
                t[4] ? D ? D.p(t, e) : (D = H(t),
                D.c(),
                D.m(k, null)) : D && (D.d(1),
                D = null),
                t[1] ? U ? U.p(t, e) : (U = V(t),
                U.c(),
                U.m(w, O)) : U && (U.d(1),
                U = null)
            },
            i: e,
            o: e,
            d(e) {
                e && i(s),
                e && i(n),
                e && i(o),
                q && q.d(),
                D && D.d(),
                U && U.d(),
                t[15](null),
                r(P)
            }
        }
    }
    function P(t, e, s) {
        let n, r = null, o = null, a = null, {username: l} = e, {message: c} = e, {theme: i="default"} = e;
        function u(t, e) {
            r.dispatchEvent(new CustomEvent(t,{
                composed: !0,
                cancelable: !1,
                detail: e
            }))
        }
        const m = (t,e)=>{
            switch (t) {
            case "username":
                s(3, o = null),
                e || s(3, o = "Username cannot be empty");
                break;
            case "password":
                s(4, a = null),
                e || s(4, a = "Password cannot be empty")
            }
        }
        ;
        return t.$set = t=>{
            "username"in t && s(0, l = t.username),
            "message"in t && s(1, c = t.message),
            "theme"in t && s(9, i = t.theme)
        }
        ,
        [l, c, r, o, a, n, function() {
            m("username", l),
            m("password", n),
            o || a || u("login", {
                username: l,
                password: n
            })
        }
        , ()=>{
            u("forgot-password", {
                username: l,
                password: n
            })
        }
        , m, i, u, function() {
            l = this.value,
            s(0, l)
        }
        , ()=>m("username", l), function() {
            n = this.value,
            s(5, n)
        }
        , ()=>m("password", n), function(t) {
            $[t ? "unshift" : "push"](()=>{
                s(2, r = t)
            }
            )
        }
        ]
    }
    "function" == typeof HTMLElement && (X = class extends HTMLElement {
        constructor() {
            super(),
            this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            for (const t in this.$$.slotted)
                this.appendChild(this.$$.slotted[t])
        }
        attributeChangedCallback(t, e, s) {
            this[t] = s
        }
        $destroy() {
            !function(t, e) {
                const s = t.$$;
                null !== s.fragment && (r(s.on_destroy),
                s.fragment && s.fragment.d(e),
                s.on_destroy = s.fragment = null,
                s.ctx = [])
            }(this, 1),
            this.$destroy = e
        }
        $on(t, e) {
            const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return s.push(e),
            ()=>{
                const t = s.indexOf(e);
                -1 !== t && s.splice(t, 1)
            }
        }
        $set() {}
    }
    );
    class q extends X {
        constructor(t) {
            super(),
            this.shadowRoot.innerHTML = "<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}.forgot-password{position:absolute;right:2px;background-color:transparent;border:none}</style>",
            Q(this, {
                target: this.shadowRoot
            }, P, A, a, {
                username: 0,
                message: 1,
                theme: 9
            }),
            t && (t.target && c(t.target, this, t.anchor),
            t.props && (this.$set(t.props),
            I()))
        }
        static get observedAttributes() {
            return ["username", "message", "theme"]
        }
        get username() {
            return this.$$.ctx[0]
        }
        set username(t) {
            this.$set({
                username: t
            }),
            I()
        }
        get message() {
            return this.$$.ctx[1]
        }
        set message(t) {
            this.$set({
                message: t
            }),
            I()
        }
        get theme() {
            return this.$$.ctx[9]
        }
        set theme(t) {
            this.$set({
                theme: t
            }),
            I()
        }
    }
    function D(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[2]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                4 & e && f(s, t[2])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function U(t) {
        let s, n, o, a, u, p, f, y, v, w, x, $, j, M, k, R, T, E, I = t[2] && D(t);
        return {
            c() {
                s = m("svelte-head"),
                s.innerHTML = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',
                n = d(),
                o = m("div"),
                a = m("div"),
                u = m("div"),
                p = m("div"),
                f = m("div"),
                y = m("h5"),
                y.textContent = "Forgot your password",
                v = d(),
                w = m("form"),
                x = m("div"),
                $ = m("input"),
                j = d(),
                I && I.c(),
                M = d(),
                k = m("button"),
                k.textContent = "OK",
                R = d(),
                T = m("hr"),
                this.c = e,
                g(y, "class", "card-title text-center"),
                g($, "type", "email"),
                g($, "id", "inputEmail"),
                g($, "class", "form-control"),
                g($, "placeholder", "Username"),
                g(x, "class", "form-label-group"),
                g(k, "class", "btn btn-lg btn-primary btn-block text-uppercase"),
                g(k, "type", "button"),
                g(T, "class", "my-4"),
                g(w, "class", "form-signin"),
                g(f, "class", "card-body"),
                g(p, "class", "card card-signin my-5"),
                g(u, "class", "col-md-12"),
                g(a, "class", "row"),
                g(o, "class", "container")
            },
            m(e, r) {
                c(e, s, r),
                c(e, n, r),
                c(e, o, r),
                l(o, a),
                l(a, u),
                l(u, p),
                l(p, f),
                l(f, y),
                l(f, v),
                l(f, w),
                l(w, x),
                l(x, $),
                b($, t[0]),
                l(x, j),
                I && I.m(x, null),
                l(w, M),
                l(w, k),
                l(w, R),
                l(w, T),
                t[9](o),
                E = [h($, "input", t[7]), h($, "blur", t[8]), h(k, "click", t[3])]
            },
            p(t, [e]) {
                1 & e && $.value !== t[0] && b($, t[0]),
                t[2] ? I ? I.p(t, e) : (I = D(t),
                I.c(),
                I.m(x, null)) : I && (I.d(1),
                I = null)
            },
            i: e,
            o: e,
            d(e) {
                e && i(s),
                e && i(n),
                e && i(o),
                I && I.d(),
                t[9](null),
                r(E)
            }
        }
    }
    function L(t, e, s) {
        let n = null
          , r = null
          , {username: o=null} = e
          , {theme: a="default"} = e;
        function l(t, e) {
            n.dispatchEvent(new CustomEvent(t,{
                composed: !0,
                cancelable: !1,
                detail: e
            }))
        }
        const c = (t,e)=>{
            switch (t) {
            case "username":
                s(2, r = null),
                e || s(2, r = "Username cannot be empty")
            }
        }
        ;
        return t.$set = t=>{
            "username"in t && s(0, o = t.username),
            "theme"in t && s(5, a = t.theme)
        }
        ,
        [o, n, r, function() {
            c("username", o),
            r || l("forgot-password", {
                username: o
            })
        }
        , c, a, l, function() {
            o = this.value,
            s(0, o)
        }
        , ()=>c("username", o), function(t) {
            $[t ? "unshift" : "push"](()=>{
                s(1, n = t)
            }
            )
        }
        ]
    }
    customElements.define("login-page", q);
    class S extends X {
        constructor(t) {
            super(),
            this.shadowRoot.innerHTML = "<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",
            Q(this, {
                target: this.shadowRoot
            }, L, U, a, {
                username: 0,
                theme: 5
            }),
            t && (t.target && c(t.target, this, t.anchor),
            t.props && (this.$set(t.props),
            I()))
        }
        static get observedAttributes() {
            return ["username", "theme"]
        }
        get username() {
            return this.$$.ctx[0]
        }
        set username(t) {
            this.$set({
                username: t
            }),
            I()
        }
        get theme() {
            return this.$$.ctx[5]
        }
        set theme(t) {
            this.$set({
                theme: t
            }),
            I()
        }
    }
    function Y(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[2]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                4 & e && f(s, t[2])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function F(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[3]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                8 & e && f(s, t[3])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function _(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[4]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                16 & e && f(s, t[4])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function B(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[5]),
                g(e, "class", "error-message text-danger")
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                32 & e && f(s, t[5])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function Z(t) {
        let e, s;
        return {
            c() {
                e = m("small"),
                s = p(t[6])
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                64 & e && f(s, t[6])
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function K(t) {
        let s, n, o, a, u, p, f, y, v, w, x, $, j, M, k, R, T, E, I, C, J, O, Q, X, z, H, V, A, P, q, D, U = t[2] && Y(t), L = t[3] && F(t), S = t[4] && _(t), K = t[5] && B(t), N = t[6] && Z(t);
        return {
            c() {
                s = m("svelte-head"),
                s.innerHTML = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',
                n = d(),
                o = m("div"),
                a = m("div"),
                u = m("div"),
                p = m("div"),
                f = m("div"),
                y = m("h5"),
                y.textContent = "New Password",
                v = d(),
                w = m("form"),
                x = m("div"),
                $ = m("input"),
                j = d(),
                U && U.c(),
                M = d(),
                k = m("div"),
                R = m("input"),
                T = d(),
                L && L.c(),
                E = d(),
                I = m("div"),
                C = m("input"),
                J = d(),
                S && S.c(),
                O = d(),
                Q = m("div"),
                X = m("input"),
                z = d(),
                K && K.c(),
                H = d(),
                N && N.c(),
                V = d(),
                A = m("button"),
                A.textContent = "Change Password",
                P = d(),
                q = m("hr"),
                this.c = e,
                g(y, "class", "card-title text-center"),
                g($, "type", "email"),
                g($, "id", "inputUsername"),
                g($, "class", "form-control"),
                g($, "placeholder", "Username"),
                g(x, "class", "form-label-group"),
                g(R, "type", "password"),
                g(R, "id", "inputOldPassword"),
                g(R, "class", "form-control"),
                g(R, "placeholder", "Old password"),
                g(k, "class", "form-label-group"),
                g(C, "type", "password"),
                g(C, "id", "inputPassword"),
                g(C, "class", "form-control"),
                g(C, "placeholder", "New Password"),
                g(I, "class", "form-label-group"),
                g(X, "type", "password"),
                g(X, "id", "inputPasswordConfirm"),
                g(X, "class", "form-control"),
                g(X, "placeholder", "Repeat New Password"),
                g(Q, "class", "form-label-group"),
                g(A, "class", "btn btn-lg btn-primary btn-block text-uppercase"),
                g(A, "type", "button"),
                g(q, "class", "my-4"),
                g(w, "class", "form-signin"),
                g(f, "class", "card-body"),
                g(p, "class", "card card-signin my-5"),
                g(u, "class", "col-md-12"),
                g(a, "class", "row"),
                g(o, "class", "container")
            },
            m(e, r) {
                c(e, s, r),
                c(e, n, r),
                c(e, o, r),
                l(o, a),
                l(a, u),
                l(u, p),
                l(p, f),
                l(f, y),
                l(f, v),
                l(f, w),
                l(w, x),
                l(x, $),
                b($, t[0]),
                l(x, j),
                U && U.m(x, null),
                l(w, M),
                l(w, k),
                l(k, R),
                b(R, t[7]),
                l(k, T),
                L && L.m(k, null),
                l(w, E),
                l(w, I),
                l(I, C),
                b(C, t[8]),
                l(I, J),
                S && S.m(I, null),
                l(w, O),
                l(w, Q),
                l(Q, X),
                b(X, t[9]),
                l(Q, z),
                K && K.m(Q, null),
                l(w, H),
                N && N.m(w, null),
                l(w, V),
                l(w, A),
                l(w, P),
                l(w, q),
                t[23](o),
                D = [h($, "input", t[15]), h($, "blur", t[16]), h(R, "input", t[17]), h(R, "blur", t[18]), h(C, "input", t[19]), h(C, "blur", t[20]), h(X, "input", t[21]), h(X, "blur", t[22]), h(A, "click", t[10])]
            },
            p(t, [e]) {
                1 & e && $.value !== t[0] && b($, t[0]),
                t[2] ? U ? U.p(t, e) : (U = Y(t),
                U.c(),
                U.m(x, null)) : U && (U.d(1),
                U = null),
                128 & e && R.value !== t[7] && b(R, t[7]),
                t[3] ? L ? L.p(t, e) : (L = F(t),
                L.c(),
                L.m(k, null)) : L && (L.d(1),
                L = null),
                256 & e && C.value !== t[8] && b(C, t[8]),
                t[4] ? S ? S.p(t, e) : (S = _(t),
                S.c(),
                S.m(I, null)) : S && (S.d(1),
                S = null),
                512 & e && X.value !== t[9] && b(X, t[9]),
                t[5] ? K ? K.p(t, e) : (K = B(t),
                K.c(),
                K.m(Q, null)) : K && (K.d(1),
                K = null),
                t[6] ? N ? N.p(t, e) : (N = Z(t),
                N.c(),
                N.m(w, V)) : N && (N.d(1),
                N = null)
            },
            i: e,
            o: e,
            d(e) {
                e && i(s),
                e && i(n),
                e && i(o),
                U && U.d(),
                L && L.d(),
                S && S.d(),
                K && K.d(),
                N && N.d(),
                t[23](null),
                r(D)
            }
        }
    }
    function N(t, e, s) {
        let n, r, o, a = null, l = null, c = null, i = null, u = null, m = null, {username: p=null} = e, {theme: d="default"} = e, {message: h=null} = e;
        function g(t, e) {
            a.dispatchEvent(new CustomEvent(t,{
                composed: !0,
                cancelable: !1,
                detail: e
            }))
        }
        const f = (t,e)=>{
            switch (t) {
            case "username":
                s(2, l = null),
                e || s(2, l = "Username must be filled");
                break;
            case "old-password":
                s(3, c = null),
                e || s(3, c = "Old password must be filled");
                break;
            case "password1":
                s(4, i = null),
                e || s(4, i = "Password must be filled");
                break;
            case "password2":
                s(5, u = null),
                e || s(5, u = "Password must be filled")
            }
            s(6, m = null),
            r !== o && s(6, m = "Password dont match")
        }
        ;
        return t.$set = t=>{
            "username"in t && s(0, p = t.username),
            "theme"in t && s(12, d = t.theme),
            "message"in t && s(13, h = t.message)
        }
        ,
        [p, a, l, c, i, u, m, n, r, o, function() {
            f("username", p),
            f("old-password", n),
            f("password1", r),
            f("password2", o),
            i || u || c || l || m || g("change-password", {
                username: p,
                oldPassword: n,
                password1: r,
                password2: o
            })
        }
        , f, d, h, g, function() {
            p = this.value,
            s(0, p)
        }
        , ()=>f("username", p), function() {
            n = this.value,
            s(7, n)
        }
        , ()=>f("old-password", n), function() {
            r = this.value,
            s(8, r)
        }
        , ()=>f("password1", r), function() {
            o = this.value,
            s(9, o)
        }
        , ()=>f("password2", o), function(t) {
            $[t ? "unshift" : "push"](()=>{
                s(1, a = t)
            }
            )
        }
        ]
    }
    customElements.define("forgot-password-page", S);
    class G extends X {
        constructor(t) {
            super(),
            this.shadowRoot.innerHTML = "<style>.form-label-group{margin-bottom:15px}.error-message{margin-left:2px;margin-top:2px}</style>",
            Q(this, {
                target: this.shadowRoot
            }, N, K, a, {
                username: 0,
                theme: 12,
                message: 13
            }),
            t && (t.target && c(t.target, this, t.anchor),
            t.props && (this.$set(t.props),
            I()))
        }
        static get observedAttributes() {
            return ["username", "theme", "message"]
        }
        get username() {
            return this.$$.ctx[0]
        }
        set username(t) {
            this.$set({
                username: t
            }),
            I()
        }
        get theme() {
            return this.$$.ctx[12]
        }
        set theme(t) {
            this.$set({
                theme: t
            }),
            I()
        }
        get message() {
            return this.$$.ctx[13]
        }
        set message(t) {
            this.$set({
                message: t
            }),
            I()
        }
    }
    function W(t, e, s) {
        const n = t.slice();
        return n[4] = e[s],
        n
    }
    function tt(t) {
        let e, s = t[1], n = [];
        for (let e = 0; e < s.length; e += 1)
            n[e] = et(W(t, s, e));
        return {
            c() {
                for (let t = 0; t < n.length; t += 1)
                    n[t].c();
                e = p("")
            },
            m(t, s) {
                for (let e = 0; e < n.length; e += 1)
                    n[e].m(t, s);
                c(t, e, s)
            },
            p(t, r) {
                if (2 & r) {
                    let o;
                    for (s = t[1],
                    o = 0; o < s.length; o += 1) {
                        const a = W(t, s, o);
                        n[o] ? n[o].p(a, r) : (n[o] = et(a),
                        n[o].c(),
                        n[o].m(e.parentNode, e))
                    }
                    for (; o < n.length; o += 1)
                        n[o].d(1);
                    n.length = s.length
                }
            },
            d(t) {
                u(n, t),
                t && i(e)
            }
        }
    }
    function et(t) {
        let e, s, n, r, a, u = t[4].label + "";
        return {
            c() {
                e = m("li"),
                s = m("a"),
                n = p(u),
                r = d(),
                g(s, "class", "nav-link dropdown-toggle"),
                g(s, "href", ""),
                g(s, "id", "navbarDropdown"),
                g(s, "role", "button"),
                g(s, "data-toggle", "dropdown"),
                g(s, "aria-haspopup", "true"),
                g(s, "aria-expanded", "false"),
                g(e, "class", "nav-item dropdown")
            },
            m(i, u) {
                c(i, e, u),
                l(e, s),
                l(s, n),
                l(e, r),
                a = h(s, "click", (function() {
                    o(nt(t[4])) && nt(t[4]).apply(this, arguments)
                }
                ))
            },
            p(e, s) {
                t = e,
                2 & s && u !== (u = t[4].label + "") && f(n, u)
            },
            d(t) {
                t && i(e),
                a()
            }
        }
    }
    function st(t) {
        let s, n, r, o, a, u, b, y, v, w, x, $ = t[1] && tt(t);
        return {
            c() {
                s = m("svelte-head"),
                s.innerHTML = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',
                n = d(),
                r = m("nav"),
                o = m("a"),
                a = p(t[0]),
                u = d(),
                b = m("button"),
                b.innerHTML = '<span class="navbar-toggler-icon"></span>',
                y = d(),
                v = m("div"),
                w = m("ul"),
                $ && $.c(),
                this.c = e,
                g(o, "class", "navbar-brand"),
                g(b, "type", "button"),
                g(b, "class", "navbar-toggler"),
                g(b, "data-toggle", "collapse"),
                g(b, "data-target", "#navbarCollapse"),
                g(w, "class", "navbar-nav mr-auto"),
                g(v, "class", "collapse navbar-collapse"),
                g(v, "id", "navbarSupportedContent"),
                g(r, "class", "navbar navbar-expand-md navbar-light bg-light")
            },
            m(t, e) {
                c(t, s, e),
                c(t, n, e),
                c(t, r, e),
                l(r, o),
                l(o, a),
                l(r, u),
                l(r, b),
                l(r, y),
                l(r, v),
                l(v, w),
                $ && $.m(w, null),
                x = h(o, "click", rt)
            },
            p(t, [e]) {
                1 & e && f(a, t[0]),
                t[1] ? $ ? $.p(t, e) : ($ = tt(t),
                $.c(),
                $.m(w, null)) : $ && ($.d(1),
                $ = null)
            },
            i: e,
            o: e,
            d(t) {
                t && i(s),
                t && i(n),
                t && i(r),
                $ && $.d(),
                x()
            }
        }
    }
    customElements.define("password-change-page", G);
    function nt(t) {
        ot("item-clicked", t)
    }
    function rt() {
        ot("brand-clicked", {})
    }
    function ot(t, e) {
        null.dispatchEvent(new CustomEvent(t,{
            composed: !0,
            cancelable: !1,
            detail: e
        }))
    }
    function at(t, e, s) {
        let {theme: n="default"} = e
          , {logo: r=""} = e
          , {name: o="CMS"} = e
          , {items: a=null} = e;
        return w(async()=>{
            console.log(a)
        }
        ),
        t.$set = t=>{
            "theme"in t && s(2, n = t.theme),
            "logo"in t && s(3, r = t.logo),
            "name"in t && s(0, o = t.name),
            "items"in t && s(1, a = t.items)
        }
        ,
        [o, a, n, r]
    }
    class lt extends X {
        constructor(t) {
            super(),
            Q(this, {
                target: this.shadowRoot
            }, at, st, a, {
                theme: 2,
                logo: 3,
                name: 0,
                items: 1
            }),
            t && (t.target && c(t.target, this, t.anchor),
            t.props && (this.$set(t.props),
            I()))
        }
        static get observedAttributes() {
            return ["theme", "logo", "name", "items"]
        }
        get theme() {
            return this.$$.ctx[2]
        }
        set theme(t) {
            this.$set({
                theme: t
            }),
            I()
        }
        get logo() {
            return this.$$.ctx[3]
        }
        set logo(t) {
            this.$set({
                logo: t
            }),
            I()
        }
        get name() {
            return this.$$.ctx[0]
        }
        set name(t) {
            this.$set({
                name: t
            }),
            I()
        }
        get items() {
            return this.$$.ctx[1]
        }
        set items(t) {
            this.$set({
                items: t
            }),
            I()
        }
    }
    function ct(t) {
        let s, n, r;
        return {
            c() {
                s = m("svelte-head"),
                s.innerHTML = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n  <script defer="" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"><\/script> \n  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><\/script> \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>',
                n = d(),
                r = m("footer"),
                r.innerHTML = '<div class="footer-copyright text-center py-3">© 2020 Copyright:\n    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a></div>',
                this.c = e,
                g(r, "class", "page-footer font-small blue")
            },
            m(t, e) {
                c(t, s, e),
                c(t, n, e),
                c(t, r, e)
            },
            p: e,
            i: e,
            o: e,
            d(t) {
                t && i(s),
                t && i(n),
                t && i(r)
            }
        }
    }
    function it(t, e, s) {
        let {theme: n="default"} = e
          , {logo: r=""} = e
          , {name: o="CMS"} = e;
        return t.$set = t=>{
            "theme"in t && s(0, n = t.theme),
            "logo"in t && s(1, r = t.logo),
            "name"in t && s(2, o = t.name)
        }
        ,
        [n, r, o]
    }
    customElements.define("header-page", lt);
    class ut extends X {
        constructor(t) {
            super(),
            Q(this, {
                target: this.shadowRoot
            }, it, ct, a, {
                theme: 0,
                logo: 1,
                name: 2
            }),
            t && (t.target && c(t.target, this, t.anchor),
            t.props && (this.$set(t.props),
            I()))
        }
        static get observedAttributes() {
            return ["theme", "logo", "name"]
        }
        get theme() {
            return this.$$.ctx[0]
        }
        set theme(t) {
            this.$set({
                theme: t
            }),
            I()
        }
        get logo() {
            return this.$$.ctx[1]
        }
        set logo(t) {
            this.$set({
                logo: t
            }),
            I()
        }
        get name() {
            return this.$$.ctx[2]
        }
        set name(t) {
            this.$set({
                name: t
            }),
            I()
        }
    }
    function mt(t, e, s) {
        const n = t.slice();
        return n[5] = e[s],
        n
    }
    function pt(t, e, s) {
        const n = t.slice();
        return n[2] = e[s],
        n
    }
    function dt(t, e, s) {
        const n = t.slice();
        return n[5] = e[s],
        n
    }
    function ht(t) {
        let e, s, n = t[5].label + "";
        return {
            c() {
                e = m("th"),
                s = p(n)
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                1 & e && n !== (n = t[5].label + "") && f(s, n)
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function gt(t) {
        let e, s, n = t[2][t[5].id] + "";
        return {
            c() {
                e = m("td"),
                s = p(n)
            },
            m(t, n) {
                c(t, e, n),
                l(e, s)
            },
            p(t, e) {
                3 & e && n !== (n = t[2][t[5].id] + "") && f(s, n)
            },
            d(t) {
                t && i(e)
            }
        }
    }
    function ft(t) {
        let e, s, n = t[0], r = [];
        for (let e = 0; e < n.length; e += 1)
            r[e] = gt(mt(t, n, e));
        return {
            c() {
                e = m("tr");
                for (let t = 0; t < r.length; t += 1)
                    r[t].c();
                s = d()
            },
            m(t, n) {
                c(t, e, n);
                for (let t = 0; t < r.length; t += 1)
                    r[t].m(e, null);
                l(e, s)
            },
            p(t, o) {
                if (3 & o) {
                    let a;
                    for (n = t[0],
                    a = 0; a < n.length; a += 1) {
                        const l = mt(t, n, a);
                        r[a] ? r[a].p(l, o) : (r[a] = gt(l),
                        r[a].c(),
                        r[a].m(e, s))
                    }
                    for (; a < r.length; a += 1)
                        r[a].d(1);
                    r.length = n.length
                }
            },
            d(t) {
                t && i(e),
                u(r, t)
            }
        }
    }
    function bt(t) {
        let s, n, r, o, a, p, h, f, b, y, v, w, x, $ = t[0], j = [];
        for (let e = 0; e < $.length; e += 1)
            j[e] = ht(dt(t, $, e));
        let M = t[1]
          , k = [];
        for (let e = 0; e < M.length; e += 1)
            k[e] = ft(pt(t, M, e));
        return {
            c() {
                s = m("link"),
                n = m("script"),
                o = m("script"),
                p = d(),
                h = m("table"),
                f = m("thead"),
                b = m("tr");
                for (let t = 0; t < j.length; t += 1)
                    j[t].c();
                y = d(),
                v = m("tbody");
                for (let t = 0; t < k.length; t += 1)
                    k[t].c();
                w = d(),
                x = m("ul"),
                x.innerHTML = '<li class="page-item"><a class="page-link" href="#">Previous</a></li> \n  <li class="page-item"><a class="page-link" href="#">1</a></li> \n  <li class="page-item"><a class="page-link" href="#">2</a></li> \n  <li class="page-item"><a class="page-link" href="#">3</a></li> \n  <li class="page-item"><a class="page-link" href="#">Next</a></li>',
                this.c = e,
                g(s, "rel", "stylesheet"),
                g(s, "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),
                g(s, "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"),
                g(s, "crossorigin", "anonymous"),
                n.defer = !0,
                n.src !== (r = "https://use.fontawesome.com/releases/v5.0.6/js/all.js") && g(n, "src", "https://use.fontawesome.com/releases/v5.0.6/js/all.js"),
                o.src !== (a = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js") && g(o, "src", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"),
                g(o, "integrity", "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"),
                g(o, "crossorigin", "anonymous"),
                g(h, "class", "table"),
                g(x, "class", "pagination pagination-lg")
            },
            m(t, e) {
                l(document.head, s),
                l(document.head, n),
                l(document.head, o),
                c(t, p, e),
                c(t, h, e),
                l(h, f),
                l(f, b);
                for (let t = 0; t < j.length; t += 1)
                    j[t].m(b, null);
                l(h, y),
                l(h, v);
                for (let t = 0; t < k.length; t += 1)
                    k[t].m(v, null);
                c(t, w, e),
                c(t, x, e)
            },
            p(t, [e]) {
                if (1 & e) {
                    let s;
                    for ($ = t[0],
                    s = 0; s < $.length; s += 1) {
                        const n = dt(t, $, s);
                        j[s] ? j[s].p(n, e) : (j[s] = ht(n),
                        j[s].c(),
                        j[s].m(b, null))
                    }
                    for (; s < j.length; s += 1)
                        j[s].d(1);
                    j.length = $.length
                }
                if (3 & e) {
                    let s;
                    for (M = t[1],
                    s = 0; s < M.length; s += 1) {
                        const n = pt(t, M, s);
                        k[s] ? k[s].p(n, e) : (k[s] = ft(n),
                        k[s].c(),
                        k[s].m(v, null))
                    }
                    for (; s < k.length; s += 1)
                        k[s].d(1);
                    k.length = M.length
                }
            },
            i: e,
            o: e,
            d(t) {
                i(s),
                i(n),
                i(o),
                t && i(p),
                t && i(h),
                u(j, t),
                u(k, t),
                t && i(w),
                t && i(x)
            }
        }
    }
    function yt(t, e, s) {
        let {columns: n=[{
            label: "column1",
            id: "column1",
            sortable: !0,
            filterable: !0
        }, {
            label: "column2",
            id: "column2",
            sortable: !0,
            filterable: !0
        }, {
            label: "column3",
            id: "column3",
            sortable: !0,
            filterable: !0
        }]} = e
          , {rows: r=[{
            column1: "My Column",
            column2: "Another Value"
        }, {
            column1: "My Column",
            column3: "Another Value"
        }]} = e;
        return w(async()=>{}
        ),
        t.$set = t=>{
            "columns"in t && s(0, n = t.columns),
            "rows"in t && s(1, r = t.rows)
        }
        ,
        [n, r]
    }
    customElements.define("footer-page", ut);
    class vt extends X {
        constructor(t) {
            super(),
            Q(this, {
                target: this.shadowRoot
            }, yt, bt, a, {
                columns: 0,
                rows: 1
            }),
            t && (t.target && c(t.target, this, t.anchor),
            t.props && (this.$set(t.props),
            I()))
        }
        static get observedAttributes() {
            return ["columns", "rows"]
        }
        get columns() {
            return this.$$.ctx[0]
        }
        set columns(t) {
            this.$set({
                columns: t
            }),
            I()
        }
        get rows() {
            return this.$$.ctx[1]
        }
        set rows(t) {
            this.$set({
                rows: t
            }),
            I()
        }
    }
    return customElements.define("data-table", vt),
    t.changePassword = G,
    t.dataTable = vt,
    t.footer = ut,
    t.forgotPassword = S,
    t.header = lt,
    t.login = q,
    t
}({});
//# sourceMappingURL=components.js.map
