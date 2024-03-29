if (function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (hb.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return {}
            }}), this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {
                }
                sb.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }
    function u(a) {
        var b = Z, c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }}
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
            if (b = Xb[e] + c, b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Rb(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $b.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a,props: _.extend({}, b),opts: _.extend(!0, {specialEasing: {}}, c),originalProperties: b,originalOptions: c,startTime: Yb || D(),duration: c.duration,tweens: [],createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts))
                return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {elem: a,anim: j,queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {state: "parsererror",error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return {state: "success",data: b}
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.3", _ = function(a, b) {
        return new _.fn.init(a, b)
    }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bb = /^-ms-/, cb = /-([\da-z])/gi, db = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {jquery: $,constructor: _,selector: "",length: 0,toArray: function() {
            return R.call(this)
        },get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },each: function(a, b) {
            return _.each(this, a, b)
        },map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: T,sort: Q.sort,splice: Q.splice}, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(a) {
            throw new Error(a)
        },noop: function() {
        },isFunction: function(a) {
            return "function" === _.type(a)
        },isArray: Array.isArray,isWindow: function(a) {
            return null != a && a === a.window
        },isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1)
                        break;
            return a
        },trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a
        },grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },guid: 1,proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },now: Date.now,support: Y}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        }finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0, a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            }finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {
        }
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return ab(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, ab = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cb = "[\\x20\\t\\r\\n\\f]", db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", eb = db.replace("w", "w#"), fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]", gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)", hb = new RegExp(cb + "+", "g"), ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"), jb = new RegExp("^" + cb + "*," + cb + "*"), kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"), lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"), mb = new RegExp(gb), nb = new RegExp("^" + eb + "$"), ob = {ID: new RegExp("^#(" + db + ")"),CLASS: new RegExp("^\\.(" + db + ")"),TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),ATTR: new RegExp("^" + fb),PSEUDO: new RegExp("^" + gb),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),bool: new RegExp("^(?:" + bb + ")$", "i"),needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")}, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, xb = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (yb) {
            $ = {apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }}
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", gb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (c = a; c = c.parentNode; )
                    i.unshift(c);
                for (c = b; c = c.parentNode; )
                    j.unshift(c);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }, w = b.selectors = {cacheLength: 50,createPseudo: d,match: ob,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }},filter: {TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); )
                                    ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = ab(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }},pseudos: {not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),contains: d(function(a) {
                    return a = a.replace(vb, wb), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },root: function(a) {
                    return a === H
                },focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },enabled: function(a) {
                    return a.disabled === !1
                },disabled: function(a) {
                    return a.disabled === !0
                },checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(a) {
                    return !w.pseudos.empty(a)
                },header: function(a) {
                    return qb.test(a.nodeName)
                },input: function(a) {
                    return pb.test(a.nodeName)
                },button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },first: j(function() {
                    return [0]
                }),last: j(function(a, b) {
                    return [b - 1]
                }),eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })}}, w.pseudos.nth = w.pseudos.eq;
        for (u in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            w.pseudos[u] = h(u);
        for (u in {submit: !0,reset: !0})
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({value: d,type: e[0].replace(ib, " ")}), h = h.slice(d.length));
                for (g in w.filter)
                    !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d,type: g,matches: e}), h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; )
                    f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b)
                        return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a)
                            return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(bb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext, gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }});
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b)
                return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), gb.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/, mb = {children: !0,contents: !0,next: !0,prev: !0};
    _.extend({dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && _(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }}), _.fn.extend({has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a]))
                        return !0
            })
        },closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }}), _.each({parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },parents: function(a) {
            return _.dir(a, "parentNode")
        },parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },next: function(a) {
            return e(a, "nextSibling")
        },prev: function(a) {
            return e(a, "previousSibling")
        },nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },children: function(a) {
            return _.sibling(a.firstChild)
        },contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }}, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var nb = /\S+/g, ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), d ? g = i.length : b && (e = c, k(b))
                }
                return this
            },remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; )
                        i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                }), this
            },has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            },empty: function() {
                return i = [], g = 0, this
            },disable: function() {
                return i = j = b = void 0, this
            },disabled: function() {
                return !i
            },lock: function() {
                return j = void 0, b || l.disable(), this
            },locked: function() {
                return !j
            },fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
            },fire: function() {
                return l.fireWith(this, arguments), this
            },fired: function() {
                return !!c
            }};
        return l
    }, _.extend({Deferred: function(a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                },always: function() {
                    return e.done(arguments).fail(arguments), this
                },then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },promise: function(a) {
                    return null != a ? _.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
                    f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }});
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({isReady: !1,readyWait: 1,holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }}), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {key: function(a) {
            if (!h.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (_.isEmptyObject(f))
                _.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
                for (; c--; )
                    delete g[d[c]]
            }
        },hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }};
    var rb = new h, sb = new h, tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ub = /([A-Z])/g;
    _.extend({hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },data: function(a, b, c) {
            return sb.access(a, b, c)
        },removeData: function(a, b) {
            sb.remove(a, b)
        },_data: function(a, b, c) {
            return rb.access(a, b, c)
        },_removeData: function(a, b) {
            rb.remove(a, b)
        }}), _.fn.extend({data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c)
                        return c;
                    if (c = sb.get(f, d), void 0 !== c)
                        return c;
                    if (c = i(f, d, void 0), void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = sb.get(this, d);
                        sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }}), _.extend({queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },_queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })})
        }}), _.fn.extend({queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; )
                c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }});
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wb = ["Top", "Right", "Bottom", "Left"], xb = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }, yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/, Bb = /^(?:mouse|pointer|contextmenu)|click/, Cb = /^(?:focusinfocus|focusoutblur)$/, Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {global: {},add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(nb) || [""], j = b.length; j--; )
                    h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({type: n,origType: p,data: d,handler: c,guid: c.guid,selector: e,needsContext: e && _.expr.match.needsContext.test(e),namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""], j = b.length; j--; )
                    if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i)
                            _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
            }
        },trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                        m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i,handlers: d})
                    }
            return h < b.length && g.push({elem: this,handlers: b.slice(h)}), g
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }},fix: function(a) {
            if (a[_.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; )
                c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },special: {load: {noBubble: !0},focus: {trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },_default: function(a) {
                    return _.nodeName(a.target, "a")
                }},beforeunload: {postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }}},simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {isDefaultPrevented: k,isPropagationStopped: k,isImmediatePropagationStopped: k,preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }}, _.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(a, b) {
        _.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }}
    }), Y.focusinBubbles || _.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {setup: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
            },teardown: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
            }}
    }), _.fn.extend({on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = k;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }});
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fb = /<([\w:]+)/, Gb = /<|&#?\w+;/, Hb = /<(?:script|style|link)/i, Ib = /checked\s*(?:[^=]|=\s*.checked.)/i, Jb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mb = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
                    s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
                        q(f[d], g[d]);
                else
                    q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e))
                        _.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--; )
                            f = f.lastChild;
                        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; )
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++]; )
                        Jb.test(e.type || "") && c.push(e);
            return k
        },cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }}), _.fn.extend({text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },detach: function(a) {
            return this.remove(a, !0)
        },domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
                    g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)
                        g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }}), _.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"), Rb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {pixelPosition: function() {
                return b(), c
            },boxSizingReliable: function() {
                return null == d && b(), d
            },reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }}))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/, Tb = new RegExp("^(" + vb + ")(.*)$", "i"), Ub = new RegExp("^([+-])=(" + vb + ")", "i"), Vb = {position: "absolute",visibility: "hidden",display: "block"}, Wb = {letterSpacing: "0",fontWeight: "400"}, Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }}), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }}
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        _.cssHooks[a + b] = {expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, Pb.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++)
                        f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },show: function() {
            return B(this, !0)
        },hide: function() {
            return B(this)
        },toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }}), _.Tween = C, C.prototype = {constructor: C,init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }}, C.prototype.init.prototype = C.prototype, C.propHooks = {_default: {get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, _.easing = {linear: function(a) {
            return a
        },swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }}, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"), ac = /queueHooks$/, bc = [G], cc = {"*": [function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = _b.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do
                        h = h || ".5", g /= h, _.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]};
    _.Animation = _.extend(I, {tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
        },prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }}), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {complete: c || !c && b || _.isFunction(a) && a,duration: a,easing: c && b || b && !_.isFunction(b) && b};
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        },animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = rb.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({slideDown: E("show"),slideUp: E("hide"),slideToggle: E("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Zb), Zb = null
    }, _.fx.speeds = {slow: 600,fast: 200,_default: 400}, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }}), _.extend({attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },attrHooks: {type: {set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}}}), ec = {set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }}, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }}), _.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },propHooks: {tabIndex: {get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }}}}), Y.optSelected || (_.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            })
        },hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }});
    var ic = /\r/g;
    _.fn.extend({val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = _.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
            }
        }}), _.extend({valHooks: {option: {get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }},select: {get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                },set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
                        d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }}}}), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }}, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },unbind: function(a, b) {
            return this.off(a, null, b)
        },delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var jc = _.now(), kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lc = /#.*$/, mc = /([?&])_=[^&]*/, nc = /^(.*?):[ \t]*([^\r\n]*)$/gm, oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pc = /^(?:GET|HEAD)$/, qc = /^\/\//, rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sc = {}, tc = {}, uc = "*/".concat("*"), vc = a.location.href, wc = rc.exec(vc.toLowerCase()) || [];
    _.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: vc,type: "GET",isLocal: oc.test(wc[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": uc,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": _.parseJSON,"text xml": _.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },ajaxPrefilter: J(sc),ajaxTransport: J(tc),ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0,getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g)
                            for (g = {}; b = nc.exec(f); )
                                g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this
                },statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this
                }};
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wc[3] || ("http:" === wc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sc, l, b, v), 2 === t)
                return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (k in {success: 1,error: 1,complete: 1})
                v[k](l[k]);
            if (d = K(tc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }}), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({url: a,type: b,dataType: e,data: c,success: d})
        }
    }), _._evalUrl = function(a) {
        return _.ajax({url: a,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, _.fn.extend({wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }}), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xc = /%20/g, yc = /\[\]$/, zc = /\r?\n/g, Ac = /^(?:submit|button|image|reset|file)$/i, Bc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(xc, "+")
    }, _.fn.extend({serialize: function() {
            return _.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {name: b.name,value: a.replace(zc, "\r\n")}
                }) : {name: b.name,value: c.replace(zc, "\r\n")}
            }).get()
        }}), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0: 200,1223: 204}, Fc = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Dc)
            Dc[a]()
    }), Y.cors = !!Fc && "withCredentials" in Fc, Y.ajax = Fc = !!Fc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {send: function(c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },abort: function() {
                b && b()
            }} : void 0
    }), _.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(a) {
                return _.globalEval(a), a
            }}}), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {send: function(d, e) {
                    b = _("<script>").prop({async: !0,charset: a.scriptCharset,src: a.url}).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },abort: function() {
                    c && c()
                }}
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var a = Gc.pop() || _.expando + "_" + jc++;
            return this[a] = !0, a
        }}), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ic = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({url: a,type: e,dataType: "html",data: b}).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    _.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }}, _.fn.extend({offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {top: 0,left: 0}, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {top: e.top + c.pageYOffset - b.clientTop,left: e.left + c.pageXOffset - b.clientLeft}) : e
        },position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0,left: 0};
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - _.css(c, "marginTop", !0),left: b.left - d.left - _.css(c, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                    a = a.offsetParent;
                return a || Jc
            })
        }}), _.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height",Width: "width"}, function(a, b) {
        _.each({padding: "inner" + a,content: b,"": "outer" + a}, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kc = a.jQuery, Lc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lc), b && a.jQuery === _ && (a.jQuery = Kc), _
    }, typeof b === zb && (a.jQuery = a.$ = _), _
}), function(a, b, c) {
    "use strict";
    function d(a, b) {
        return b = b || Error, function() {
            var c, d, e = arguments[0], f = "[" + (a ? a + ":" : "") + e + "] ", g = arguments[1], h = arguments;
            for (c = f + g.replace(/\{\d+\}/g, function(a) {
                var b = +a.slice(1, -1);
                return b + 2 < h.length ? mb(h[b + 2]) : a
            }), c = c + "\nhttp://errors.angularjs.org/1.3.10/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++)
                c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(mb(arguments[d]));
            return new b(c)
        }
    }
    function e(a) {
        if (null == a || z(a))
            return !1;
        var b = a.length;
        return a.nodeType === qe && b ? !0 : u(a) || je(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function f(a, b, c) {
        var d, g;
        if (a)
            if (x(a))
                for (d in a)
                    "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (je(a) || e(a)) {
                var h = "object" != typeof a;
                for (d = 0, g = a.length; g > d; d++)
                    (h || d in a) && b.call(c, a[d], d, a)
            } else if (a.forEach && a.forEach !== f)
                a.forEach(b, c, a);
            else
                for (d in a)
                    a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        return a
    }
    function g(a) {
        return Object.keys(a).sort()
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++)
            b.call(c, a[d[e]], d[e]);
        return d
    }
    function i(a) {
        return function(b, c) {
            a(c, b)
        }
    }
    function j() {
        return ++he
    }
    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }
    function l(a) {
        for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e)
                for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                    var i = f[g];
                    a[i] = e[i]
                }
        }
        return k(a, b), a
    }
    function m(a) {
        return parseInt(a, 10)
    }
    function n(a, b) {
        return l(Object.create(a), b)
    }
    function o() {
    }
    function p(a) {
        return a
    }
    function q(a) {
        return function() {
            return a
        }
    }
    function r(a) {
        return "undefined" == typeof a
    }
    function s(a) {
        return "undefined" != typeof a
    }
    function t(a) {
        return null !== a && "object" == typeof a
    }
    function u(a) {
        return "string" == typeof a
    }
    function v(a) {
        return "number" == typeof a
    }
    function w(a) {
        return "[object Date]" === ee.call(a)
    }
    function x(a) {
        return "function" == typeof a
    }
    function y(a) {
        return "[object RegExp]" === ee.call(a)
    }
    function z(a) {
        return a && a.window === a
    }
    function A(a) {
        return a && a.$evalAsync && a.$watch
    }
    function B(a) {
        return "[object File]" === ee.call(a)
    }
    function C(a) {
        return "[object FormData]" === ee.call(a)
    }
    function D(a) {
        return "[object Blob]" === ee.call(a)
    }
    function E(a) {
        return "boolean" == typeof a
    }
    function F(a) {
        return a && x(a.then)
    }
    function G(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }
    function H(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++)
            c[d[b]] = !0;
        return c
    }
    function I(a) {
        return Ud(a.nodeName || a[0] && a[0].nodeName)
    }
    function J(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), b
    }
    function K(a, b, c, d) {
        if (z(a) || A(a))
            throw fe("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b)
                throw fe("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], t(a)) {
                var e = c.indexOf(a);
                if (-1 !== e)
                    return d[e];
                c.push(a), d.push(b)
            }
            var g;
            if (je(a)) {
                b.length = 0;
                for (var h = 0; h < a.length; h++)
                    g = K(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
            } else {
                var i = b.$$hashKey;
                je(b) ? b.length = 0 : f(b, function(a, c) {
                    delete b[c]
                });
                for (var j in a)
                    a.hasOwnProperty(j) && (g = K(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g);
                k(b, i)
            }
        } else if (b = a, a)
            if (je(a))
                b = K(a, [], c, d);
            else if (w(a))
                b = new Date(a.getTime());
            else if (y(a))
                b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex;
            else if (t(a)) {
                var l = Object.create(Object.getPrototypeOf(a));
                b = K(a, l, c, d)
            }
        return b
    }
    function L(a, b) {
        if (je(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++)
                b[c] = a[c]
        } else if (t(a)) {
            b = b || {};
            for (var e in a)
                ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
        }
        return b || a
    }
    function M(a, b) {
        if (a === b)
            return !0;
        if (null === a || null === b)
            return !1;
        if (a !== a && b !== b)
            return !0;
        var d, e, f, g = typeof a, h = typeof b;
        if (g == h && "object" == g) {
            if (!je(a)) {
                if (w(a))
                    return w(b) ? M(a.getTime(), b.getTime()) : !1;
                if (y(a) && y(b))
                    return a.toString() == b.toString();
                if (A(a) || A(b) || z(a) || z(b) || je(b))
                    return !1;
                f = {};
                for (e in a)
                    if ("$" !== e.charAt(0) && !x(a[e])) {
                        if (!M(a[e], b[e]))
                            return !1;
                        f[e] = !0
                    }
                for (e in b)
                    if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e]))
                        return !1;
                return !0
            }
            if (!je(b))
                return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++)
                    if (!M(a[e], b[e]))
                        return !1;
                return !0
            }
        }
        return !1
    }
    function N(a, b, c) {
        return a.concat(be.call(b, c))
    }
    function O(a, b) {
        return be.call(a, b || 0)
    }
    function P(a, b) {
        var c = arguments.length > 2 ? O(arguments, 2) : [];
        return !x(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, N(c, arguments, 0)) : b.apply(a, c)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }
    function Q(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
    }
    function R(a, b) {
        return "undefined" == typeof a ? c : (v(b) || (b = b ? 2 : null), JSON.stringify(a, Q, b))
    }
    function S(a) {
        return u(a) ? JSON.parse(a) : a
    }
    function T(a) {
        a = $d(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var c = $d("<div>").append(a).html();
        try {
            return a[0].nodeType === re ? Ud(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Ud(b)
            })
        } catch (b) {
            return Ud(c)
        }
    }
    function U(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }
    function V(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                var e = s(b[1]) ? U(b[1]) : !0;
                Vd.call(d, c) ? je(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }), d
    }
    function W(a) {
        var b = [];
        return f(a, function(a, c) {
            je(a) ? f(a, function(a) {
                b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
        }), b.length ? b.join("&") : ""
    }
    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }
    function Z(a, b) {
        var c, d, e = ne.length;
        for (a = $d(a), d = 0; e > d; ++d)
            if (c = ne[d] + b, u(c = a.attr(c)))
                return c;
        return null
    }
    function $(a, b) {
        var c, d, e = {};
        f(ne, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
        }), f(ne, function(b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
        }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [d] : [], e))
    }
    function _(c, d, e) {
        t(e) || (e = {});
        var g = {strictDi: !1};
        e = l(g, e);
        var h = function() {
            if (c = $d(c), c.injector()) {
                var a = c[0] === b ? "document" : T(c);
                throw fe("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            d = d || [], d.unshift(["$provide", function(a) {
                    a.value("$rootElement", c)
                }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]), d.unshift("ng");
            var f = Sb(d, e.strictDi);
            return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d), c(b)(a)
                    })
                }]), f
        }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), void (ge.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a)
            }), h()
        }))
    }
    function ab() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }
    function bb(a) {
        var b = ge.element(a).injector();
        if (!b)
            throw fe("test", "no injector found for element argument to getTestability");
        return b.get("$$testability")
    }
    function cb(a, b) {
        return b = b || "_", a.replace(oe, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }
    function db() {
        var b;
        pe || (_d = a.jQuery, _d && _d.fn.on ? ($d = _d, l(_d.fn, {scope: Je.scope,isolateScope: Je.isolateScope,controller: Je.controller,injector: Je.injector,inheritedData: Je.inheritedData}), b = _d.cleanData, _d.cleanData = function(a) {
            var c;
            if (ie)
                ie = !1;
            else
                for (var d, e = 0; null != (d = a[e]); e++)
                    c = _d._data(d, "events"), c && c.$destroy && _d(d).triggerHandler("$destroy");
            b(a)
        }) : $d = ub, ge.element = $d, pe = !0)
    }
    function eb(a, b, c) {
        if (!a)
            throw fe("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }
    function fb(a, b, c) {
        return c && je(a) && (a = a[a.length - 1]), eb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }
    function gb(a, b) {
        if ("hasOwnProperty" === a)
            throw fe("badname", "hasOwnProperty is not a valid {0} name", b)
    }
    function hb(a, b, c) {
        if (!b)
            return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)
            d = e[h], a && (a = (f = a)[d]);
        return !c && x(a) ? P(f, a) : a
    }
    function ib(a) {
        var b = a[0], c = a[a.length - 1], d = [b];
        do {
            if (b = b.nextSibling, !b)
                break;
            d.push(b)
        } while (b !== c);
        return $d(d)
    }
    function jb() {
        return Object.create(null)
    }
    function kb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a)
                        throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, c, d, e) {
                        return e || (e = b), function() {
                            return e[d || "push"]([a, c, arguments]), j
                        }
                    }
                    if (!f)
                        throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [], e = [], h = [], i = a("$injector", "invoke", "push", e), j = {_invokeQueue: b,_configBlocks: e,_runBlocks: h,requires: f,name: d,provider: a("$provide", "provider"),factory: a("$provide", "factory"),service: a("$provide", "service"),value: a("$provide", "value"),constant: a("$provide", "constant", "unshift"),animation: a("$animateProvider", "register"),filter: a("$filterProvider", "register"),controller: a("$controllerProvider", "register"),directive: a("$compileProvider", "directive"),config: i,run: function(a) {
                            return h.push(a), this
                        }};
                    return g && i(g), j
                })
            }
        })
    }
    function lb(a) {
        var b = [];
        return JSON.stringify(a, function(a, c) {
            if (c = Q(a, c), t(c)) {
                if (b.indexOf(c) >= 0)
                    return "<<already seen>>";
                b.push(c)
            }
            return c
        })
    }
    function mb(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? lb(a) : a
    }
    function nb(b) {
        l(b, {bootstrap: _,copy: K,extend: l,equals: M,element: $d,forEach: f,injector: Sb,noop: o,bind: P,toJson: R,fromJson: S,identity: p,isUndefined: r,isDefined: s,isString: u,isFunction: x,isObject: t,isNumber: v,isElement: G,isArray: je,version: ve,isDate: w,lowercase: Ud,uppercase: Wd,callbacks: {counter: 0},getTestability: bb,$$minErr: d,$$csp: me,reloadWithDebugInfo: ab}), ae = kb(a);
        try {
            ae("ngLocale")
        } catch (c) {
            ae("ngLocale", []).provider("$locale", qc)
        }
        ae("ng", ["ngLocale"], ["$provide", function(a) {
                a.provider({$$sanitizeUri: Wc}), a.provider("$compile", Zb).directive({a: Bf,input: Sf,textarea: Sf,form: Gf,script: Hg,select: Kg,style: Mg,option: Lg,ngBind: Vf,ngBindHtml: Xf,ngBindTemplate: Wf,ngClass: Zf,ngClassEven: _f,ngClassOdd: $f,ngCloak: ag,ngController: bg,ngForm: Hf,ngHide: Bg,ngIf: eg,ngInclude: fg,ngInit: hg,ngNonBindable: vg,ngPluralize: wg,ngRepeat: xg,ngShow: Ag,ngStyle: Cg,ngSwitch: Dg,ngSwitchWhen: Eg,ngSwitchDefault: Fg,ngOptions: Jg,ngTransclude: Gg,ngModel: sg,ngList: ig,ngChange: Yf,pattern: Og,ngPattern: Og,required: Ng,ngRequired: Ng,minlength: Qg,ngMinlength: Qg,maxlength: Pg,ngMaxlength: Pg,ngValue: Uf,ngModelOptions: ug}).directive({ngInclude: gg}).directive(Cf).directive(cg), a.provider({$anchorScroll: Tb,$animate: Te,$browser: Wb,$cacheFactory: Xb,$controller: bc,$document: cc,$exceptionHandler: dc,$filter: gd,$interpolate: oc,$interval: pc,$http: kc,$httpBackend: mc,$location: Ec,$log: Fc,$parse: Qc,$rootScope: Vc,$q: Rc,$$q: Sc,$sce: $c,$sceDelegate: Zc,$sniffer: _c,$templateCache: Yb,$templateRequest: ad,$$testability: bd,$timeout: cd,$window: fd,$$rAF: Uc,$$asyncCallback: Ub,$$jqLite: Nb})
            }])
    }
    function ob() {
        return ++xe
    }
    function pb(a) {
        return a.replace(Ae, function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Be, "Moz$1")
    }
    function qb(a) {
        return !Fe.test(a)
    }
    function rb(a) {
        var b = a.nodeType;
        return b === qe || !b || b === te
    }
    function sb(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(), i = [];
        if (qb(a))
            i.push(b.createTextNode(a));
        else {
            for (c = c || h.appendChild(b.createElement("div")), d = (Ge.exec(a) || ["", ""])[1].toLowerCase(), e = Ie[d] || Ie._default, c.innerHTML = e[1] + a.replace(He, "<$1></$2>") + e[2], g = e[0]; g--; )
                c = c.lastChild;
            i = N(i, c.childNodes), c = h.firstChild, c.textContent = ""
        }
        return h.textContent = "", h.innerHTML = "", f(i, function(a) {
            h.appendChild(a)
        }), h
    }
    function tb(a, c) {
        c = c || b;
        var d;
        return (d = Ee.exec(a)) ? [c.createElement(d[1])] : (d = sb(a, c)) ? d.childNodes : []
    }
    function ub(a) {
        if (a instanceof ub)
            return a;
        var b;
        if (u(a) && (a = ke(a), b = !0), !(this instanceof ub)) {
            if (b && "<" != a.charAt(0))
                throw De("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new ub(a)
        }
        b ? Eb(this, tb(a)) : Eb(this, a)
    }
    function vb(a) {
        return a.cloneNode(!0)
    }
    function wb(a, b) {
        if (b || yb(a), a.querySelectorAll)
            for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++)
                yb(c[d])
    }
    function xb(a, b, c, d) {
        if (s(d))
            throw De("offargs", "jqLite#off() does not support the `selector` argument");
        var e = zb(a), g = e && e.events, h = e && e.handle;
        if (h)
            if (b)
                f(b.split(" "), function(b) {
                    if (s(c)) {
                        var d = g[b];
                        if (J(d || [], c), d && d.length > 0)
                            return
                    }
                    ze(a, b, h), delete g[b]
                });
            else
                for (b in g)
                    "$destroy" !== b && ze(a, b, h), delete g[b]
    }
    function yb(a, b) {
        var d = a.ng339, e = d && we[d];
        if (e) {
            if (b)
                return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), xb(a)), delete we[d], a.ng339 = c
        }
    }
    function zb(a, b) {
        var d = a.ng339, e = d && we[d];
        return b && !e && (a.ng339 = d = ob(), e = we[d] = {events: {},data: {},handle: c}), e
    }
    function Ab(a, b, c) {
        if (rb(a)) {
            var d = s(c), e = !d && b && !t(b), f = !b, g = zb(a, !e), h = g && g.data;
            if (d)
                h[b] = c;
            else {
                if (f)
                    return h;
                if (e)
                    return h && h[b];
                l(h, b)
            }
        }
    }
    function Bb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }
    function Cb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", ke((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ke(b) + " ", " ")))
        })
    }
    function Db(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = ke(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", ke(c))
        }
    }
    function Eb(a, b) {
        if (b)
            if (b.nodeType)
                a[a.length++] = b;
            else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)
                        for (var d = 0; c > d; d++)
                            a[a.length++] = b[d]
                } else
                    a[a.length++] = b
            }
    }
    function Fb(a, b) {
        return Gb(a, "$" + (b || "ngController") + "Controller")
    }
    function Gb(a, b, d) {
        a.nodeType == te && (a = a.documentElement);
        for (var e = je(b) ? b : [b]; a; ) {
            for (var f = 0, g = e.length; g > f; f++)
                if ((d = $d.data(a, e[f])) !== c)
                    return d;
            a = a.parentNode || a.nodeType === ue && a.host
        }
    }
    function Hb(a) {
        for (wb(a, !0); a.firstChild; )
            a.removeChild(a.firstChild)
    }
    function Ib(a, b) {
        b || wb(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }
    function Jb(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : $d(c).on("load", b)
    }
    function Kb(a, b) {
        var c = Ke[b.toLowerCase()];
        return c && Le[I(a)] && c
    }
    function Lb(a, b) {
        var c = a.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Me[b]
    }
    function Mb(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var e = b[d || c.type], f = e ? e.length : 0;
            if (f) {
                if (r(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return c.immediatePropagationStopped === !0
                }, f > 1 && (e = L(e));
                for (var h = 0; f > h; h++)
                    c.isImmediatePropagationStopped() || e[h].call(a, c)
            }
        };
        return c.elem = a, c
    }
    function Nb() {
        this.$get = function() {
            return l(ub, {hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Bb(a, b)
                },addClass: function(a, b) {
                    return a.attr && (a = a[0]), Db(a, b)
                },removeClass: function(a, b) {
                    return a.attr && (a = a[0]), Cb(a, b)
                }})
        }
    }
    function Ob(a, b) {
        var c = a && a.$$hashKey;
        if (c)
            return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a
    }
    function Pb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        f(a, this.put, this)
    }
    function Qb(a) {
        var b = a.toString().replace(Qe, ""), c = b.match(Ne);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }
    function Rb(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b)
                        throw u(c) && c || (c = a.name || Qb(a)), Re("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(Qe, ""), g = e.match(Ne), f(g[1].split(Oe), function(a) {
                        a.replace(Pe, function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else
            je(a) ? (h = a.length - 1, fb(a[h], "fn"), d = a.slice(0, h)) : fb(a, "fn", !0);
        return d
    }
    function Sb(a, b) {
        function d(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c)
            }
        }
        function e(a, b) {
            if (gb(a, "service"), (x(b) || je(b)) && (b = A.instantiate(b)), !b.$get)
                throw Re("pget", "Provider '{0}' must define $get factory method.", a);
            return z[a + v] = b
        }
        function g(a, b) {
            return function() {
                var c = C.invoke(b, this);
                if (r(c))
                    throw Re("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c
            }
        }
        function h(a, b, c) {
            return e(a, {$get: c !== !1 ? g(a, b) : b})
        }
        function j(a, b) {
            return h(a, ["$injector", function(a) {
                    return a.instantiate(b)
                }])
        }
        function k(a, b) {
            return h(a, q(b), !1)
        }
        function l(a, b) {
            gb(a, "constant"), z[a] = b, B[a] = b
        }
        function m(a, b) {
            var c = A.get(a + v), d = c.$get;
            c.$get = function() {
                var a = C.invoke(d, c);
                return C.invoke(b, null, {$delegate: a})
            }
        }
        function n(a) {
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b], e = A.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }
                if (!y.get(a)) {
                    y.put(a, !0);
                    try {
                        u(a) ? (b = ae(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : je(a) ? c.push(A.invoke(a)) : fb(a, "module")
                    } catch (e) {
                        throw je(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Re("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                    }
                }
            }), c
        }
        function p(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === s)
                        throw Re("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                    return a[b]
                }
                try {
                    return w.unshift(b), a[b] = s, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === s && delete a[b], e
                }finally {
                    w.shift()
                }
            }
            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [], k = Rb(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i)
                        throw Re("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return je(a) && (a = a[g]), a.apply(c, j)
            }
            function f(a, b, c) {
                var d = Object.create((je(a) ? a[a.length - 1] : a).prototype || null), f = e(a, d, b, c);
                return t(f) || x(f) ? f : d
            }
            return {invoke: e,instantiate: f,get: d,annotate: Rb,has: function(b) {
                    return z.hasOwnProperty(b + v) || a.hasOwnProperty(b)
                }}
        }
        b = b === !0;
        var s = {}, v = "Provider", w = [], y = new Pb([], !0), z = {$provide: {provider: d(e),factory: d(h),service: d(j),value: d(k),constant: d(l),decorator: m}}, A = z.$injector = p(z, function(a, b) {
            throw ge.isString(b) && w.push(b), Re("unpr", "Unknown provider: {0}", w.join(" <- "))
        }), B = {}, C = B.$injector = p(B, function(a, b) {
            var d = A.get(a + v, b);
            return C.invoke(d.$get, d, c, a)
        });
        return f(n(a), function(a) {
            C.invoke(a || o)
        }), C
    }
    function Tb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
                function e(a) {
                    var b = null;
                    return Array.prototype.some.call(a, function(a) {
                        return "a" === I(a) ? (b = a, !0) : void 0
                    }), b
                }
                function f() {
                    var a = h.yOffset;
                    if (x(a))
                        a = a();
                    else if (G(a)) {
                        var c = a[0], d = b.getComputedStyle(c);
                        a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                    } else
                        v(a) || (a = 0);
                    return a
                }
                function g(a) {
                    if (a) {
                        a.scrollIntoView();
                        var c = f();
                        if (c) {
                            var d = a.getBoundingClientRect().top;
                            b.scrollBy(0, d - c)
                        }
                    } else
                        b.scrollTo(0, 0)
                }
                function h() {
                    var a, b = c.hash();
                    b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null)
                }
                var i = b.document;
                return a && d.$watch(function() {
                    return c.hash()
                }, function(a, b) {
                    (a !== b || "" !== a) && Jb(function() {
                        d.$evalAsync(h)
                    })
                }), h
            }]
    }
    function Ub() {
        this.$get = ["$$rAF", "$timeout", function(a, b) {
                return a.supported ? function(b) {
                    return a(b)
                } : function(a) {
                    return b(a, 0, !1)
                }
            }]
    }
    function Vb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, O(arguments, 1))
            }finally {
                if (x--, 0 === x)
                    for (; y.length; )
                        try {
                            y.pop()()
                        } catch (b) {
                            d.error(b)
                        }
            }
        }
        function h(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b + 1)
        }
        function i(a, b) {
            !function c() {
                f(A, function(a) {
                    a()
                }), z = b(c, a)
            }()
        }
        function j() {
            k(), l()
        }
        function k() {
            B = a.history.state, B = r(B) ? null : B, M(B, I) && (B = I), I = B
        }
        function l() {
            (D !== n.url() || C !== B) && (D = n.url(), C = B, f(G, function(a) {
                a(n.url(), B)
            }))
        }
        function m(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var n = this, p = b[0], q = a.location, s = a.history, t = a.setTimeout, v = a.clearTimeout, w = {};
        n.isMock = !1;
        var x = 0, y = [];
        n.$$completeOutstandingRequest = g, n.$$incOutstandingRequestCount = function() {
            x++
        }, n.notifyWhenNoOutstandingRequests = function(a) {
            f(A, function(a) {
                a()
            }), 0 === x ? a() : y.push(a)
        };
        var z, A = [];
        n.addPollFn = function(a) {
            return r(z) && i(100, t), A.push(a), a
        };
        var B, C, D = q.href, E = b.find("base"), F = null;
        k(), C = B, n.url = function(b, c, d) {
            if (r(d) && (d = null), q !== a.location && (q = a.location), s !== a.history && (s = a.history), b) {
                var f = C === d;
                if (D === b && (!e.history || f))
                    return n;
                var g = D && vc(D) === vc(b);
                return D = b, C = d, !e.history || g && f ? (g || (F = b), c ? q.replace(b) : g ? q.hash = h(b) : q.href = b) : (s[c ? "replaceState" : "pushState"](d, "", b), k(), C = B), n
            }
            return F || q.href.replace(/%27/g, "'")
        }, n.state = function() {
            return B
        };
        var G = [], H = !1, I = null;
        n.onUrlChange = function(b) {
            return H || (e.history && $d(a).on("popstate", j), $d(a).on("hashchange", j), H = !0), G.push(b), b
        }, n.$$checkUrlChange = l, n.baseHref = function() {
            var a = E.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var J = {}, K = "", L = n.baseHref();
        n.cookies = function(a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (p.cookie !== K)
                    for (K = p.cookie, f = K.split("; "), J = {}, h = 0; h < f.length; h++)
                        g = f[h], i = g.indexOf("="), i > 0 && (a = m(g.substring(0, i)), J[a] === c && (J[a] = m(g.substring(i + 1))));
                return J
            }
            b === c ? p.cookie = encodeURIComponent(a) + "=;path=" + L + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + L).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, n.defer = function(a, b) {
            var c;
            return x++, c = t(function() {
                delete w[c], g(a)
            }, b || 0), w[c] = !0, c
        }, n.defer.cancel = function(a) {
            return w[a] ? (delete w[a], v(a), g(o), !0) : !1
        }
    }
    function Wb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
                return new Vb(a, d, b, c)
            }]
    }
    function Xb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b)
                    throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = l({}, c, {id: a}), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {key: a});
                            e(c)
                        }
                        if (!r(b))
                            return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                    },get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b)
                                return;
                            e(b)
                        }
                        return i[a]
                    },remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b)
                                return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                        }
                        delete i[a], g--
                    },removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null
                    },destroy: function() {
                        i = null, h = null, k = null, delete b[a]
                    },info: function() {
                        return l({}, h, {size: g})
                    }}
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function(a) {
                return b[a]
            }, a
        }
    }
    function Yb() {
        this.$get = ["$cacheFactory", function(a) {
                return a("templates")
            }]
    }
    function Zb(a, d) {
        function e(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            return f(a, function(a, e) {
                var f = a.match(c);
                if (!f)
                    throw Ue("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                d[e] = {mode: f[1][0],collection: "*" === f[2],optional: "?" === f[3],attrName: f[4] || e}
            }), d
        }
        var g = {}, h = "Directive", j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, k = /(([\w\-]+)(?:\:([^;]+))?;?)/, m = H("ngSrc,ngSrcset,src,srcset"), r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, v = /^(on[a-z]+|formaction)$/;
        this.directive = function y(b, c) {
            return gb(b, "directive"), u(b) ? (eb(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], a.factory(b + h, ["$injector", "$exceptionHandler", function(a, c) {
                    var d = [];
                    return f(g[b], function(f, g) {
                        try {
                            var h = a.invoke(f);
                            x(h) ? h = {compile: q(h)} : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), d.push(h)
                        } catch (i) {
                            c(i)
                        }
                    }), d
                }])), g[b].push(c)) : f(b, i(y)), this
        }, this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var w = !0;
        this.debugInfoEnabled = function(a) {
            return s(a) ? (w = a, this) : w
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, i, q, s, y, z, B, C, D) {
                function E(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {
                    }
                }
                function F(a, b, c, d, e) {
                    a instanceof $d || (a = $d(a)), f(a, function(b, c) {
                        b.nodeType == re && b.nodeValue.match(/\S+/) && (a[c] = $d(b).wrap("<span></span>").parent()[0])
                    });
                    var g = H(a, b, a, c, d, e);
                    F.$$addScopeClass(a);
                    var h = null;
                    return function(b, c, d) {
                        eb(b, "scope"), d = d || {};
                        var e = d.parentBoundTranscludeFn, f = d.transcludeControllers, i = d.futureParentElement;
                        e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                        var j;
                        if (j = "html" !== h ? $d($(h, $d("<div>").append(a).html())) : c ? Je.clone.call(a) : a, f)
                            for (var k in f)
                                j.data("$" + k + "Controller", f[k].instance);
                        return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                    }
                }
                function G(a) {
                    var b = a && a[0];
                    return b && "foreignobject" !== I(b) && b.toString().match(/SVG/) ? "svg" : "html"
                }
                function H(a, b, d, e, f, g) {
                    function h(a, d, e, f) {
                        var g, h, i, j, k, l, m, n, q;
                        if (o) {
                            var r = d.length;
                            for (q = new Array(r), k = 0; k < p.length; k += 3)
                                m = p[k], q[m] = d[m]
                        } else
                            q = d;
                        for (k = 0, l = p.length; l > k; )
                            i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), F.$$addScopeInfo($d(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                    }
                    for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++)
                        i = new gb, j = L(a[q], [], i, 0 === q ? e : c, f), k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                    return n ? h : null
                }
                function K(a, b, c) {
                    var d = function(d, e, f, g, h) {
                        return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {parentBoundTranscludeFn: c,transcludeControllers: f,futureParentElement: g})
                    };
                    return d
                }
                function L(a, b, c, d, e) {
                    var f, g, h = a.nodeType, i = c.$attr;
                    switch (h) {
                        case qe:
                            S(b, $b(I(a)), "E", d, e);
                            for (var l, m, n, o, p, q, r = a.attributes, s = 0, v = r && r.length; v > s; s++) {
                                var w = !1, x = !1;
                                l = r[s], m = l.name, p = ke(l.value), o = $b(m), (q = lb.test(o)) && (m = m.replace(Ve, "").substr(8).replace(/_(.)/g, function(a, b) {
                                    return b.toUpperCase()
                                }));
                                var y = o.replace(/(Start|End)$/, "");
                                U(y) && o === y + "Start" && (w = m, x = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = $b(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Kb(a, n) && (c[n] = !0)), ab(a, b, p, n, q), S(b, n, "A", d, e, w, x)
                            }
                            if (g = a.className, t(g) && (g = g.animVal), u(g) && "" !== g)
                                for (; f = k.exec(g); )
                                    n = $b(f[2]), S(b, n, "C", d, e) && (c[n] = ke(f[3])), g = g.substr(f.index + f[0].length);
                            break;
                        case re:
                            Z(b, a.nodeValue);
                            break;
                        case se:
                            try {
                                f = j.exec(a.nodeValue), f && (n = $b(f[1]), S(b, n, "M", d, e) && (c[n] = ke(f[2])))
                            } catch (z) {
                            }
                    }
                    return b.sort(X), b
                }
                function N(a, b, c) {
                    var d = [], e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a)
                                throw Ue("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            a.nodeType == qe && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                        } while (e > 0)
                    } else
                        d.push(a);
                    return $d(d)
                }
                function P(a, b, c) {
                    return function(d, e, f, g, h) {
                        return e = N(e[0], b, c), a(d, e, f, g, h)
                    }
                }
                function Q(a, g, h, i, j, k, l, m, n) {
                    function o(a, b, c, d) {
                        a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = db(a, {isolateScope: !0})), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, (I === z || z.$$isolateScope) && (b = db(b, {isolateScope: !0})), m.push(b))
                    }
                    function p(a, b, c, d) {
                        var e, g, h = "data", i = !1, j = c;
                        if (u(b)) {
                            if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), e = e || j[h]("$" + b + "Controller"), !e && !i)
                                throw Ue("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                            return e || null
                        }
                        return je(b) && (e = [], f(b, function(b) {
                            e.push(p(a, b, c, d))
                        })), e
                    }
                    function v(a, b, e, i, j) {
                        function k(a, b, d) {
                            var e;
                            return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), j(a, b, e, d, D)
                        }
                        var n, o, r, t, u, v, w, x, z;
                        if (g === e ? (z = h, x = h.$$element) : (x = $d(e), z = new gb(x, h)), I && (u = b.$new(!0)), j && (w = k, w.$$boundTransclude = j), H && (y = {}, v = {}, f(H, function(a) {
                            var c, d = {$scope: a === I || a.$$isolateScope ? u : b,$element: x,$attrs: z,$transclude: w};
                            t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c
                        })), I) {
                            F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                            var B = y && y[I.name], C = u;
                            B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function(a, c) {
                                var e, f, g, h, i = a.attrName, j = a.optional, k = a.mode;
                                switch (k) {
                                    case "@":
                                        z.$observe(i, function(a) {
                                            C[c] = a
                                        }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                        break;
                                    case "=":
                                        if (j && !z[i])
                                            return;
                                        f = q(z[i]), h = f.literal ? M : function(a, b) {
                                            return a === b || a !== a && b !== b
                                        }, g = f.assign || function() {
                                            throw e = C[c] = f(b), Ue("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name)
                                        }, e = C[c] = f(b);
                                        var l = function(a) {
                                            return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a
                                        };
                                        l.$stateful = !0;
                                        var m;
                                        m = a.collection ? b.$watchCollection(z[i], l) : b.$watch(q(z[i], l), null, f.literal), u.$on("$destroy", m);
                                        break;
                                    case "&":
                                        f = q(z[i]), C[c] = function(a) {
                                            return f(b, a)
                                        }
                                }
                            })
                        }
                        for (y && (f(y, function(a) {
                            a()
                        }), y = null), n = 0, o = l.length; o > n; n++)
                            r = l[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                        var D = b;
                        for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), n = m.length - 1; n >= 0; n--)
                            r = m[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w)
                    }
                    n = n || {};
                    for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, S = !1, U = n.hasElementTranscludeDirective, X = h.$$element = $d(g), Z = k, _ = i, ab = 0, cb = a.length; cb > ab; ab++) {
                        z = a[ab];
                        var eb = z.$$start, hb = z.$$end;
                        if (eb && (X = N(g, eb, hb)), C = c, G > z.priority)
                            break;
                        if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, C = X, X = h.$$element = $d(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], bb(j, O(C), g), _ = F(C, i, G, Z && Z.name, {nonTlbTranscludeDirective: K})) : (C = $d(vb(g)).contents(), X.empty(), _ = F(C, i))), z.template)
                            if (S = !0, Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, E = kb(E), z.replace) {
                                if (Z = z, C = qb(E) ? [] : ac($(z.templateNamespace, ke(E))), g = C[0], 1 != C.length || g.nodeType !== qe)
                                    throw Ue("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                                bb(j, X, g);
                                var ib = {$attr: {}}, jb = L(g, [], ib), lb = a.splice(ab + 1, a.length - (ab + 1));
                                I && R(jb), a = a.concat(jb).concat(lb), V(h, ib), cb = a.length
                            } else
                                X.html(E);
                        if (z.templateUrl)
                            S = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), v = W(a.splice(ab, a.length - ab), X, h, j, Q && _, l, m, {controllerDirectives: H,newIsolateScopeDirective: I,templateDirective: J,nonTlbTranscludeDirective: K}), cb = a.length;
                        else if (z.compile)
                            try {
                                D = z.compile(X, h, _), x(D) ? o(null, D, eb, hb) : D && o(D.pre, D.post, eb, hb)
                            } catch (mb) {
                                e(mb, T(X))
                            }
                        z.terminal && (v.terminal = !0, G = Math.max(G, z.priority))
                    }
                    return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, v.templateOnThisElement = S, v.transclude = _, n.hasElementTranscludeDirective = U, v
                }
                function R(a) {
                    for (var b = 0, c = a.length; c > b; b++)
                        a[b] = n(a[b], {$$isolateScope: !0})
                }
                function S(b, d, f, i, j, k, l) {
                    if (d === j)
                        return null;
                    var m = null;
                    if (g.hasOwnProperty(d))
                        for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++)
                            try {
                                o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {$$start: k,$$end: l})), b.push(o), m = o)
                            } catch (s) {
                                e(s)
                            }
                    return m
                }
                function U(b) {
                    if (g.hasOwnProperty(b))
                        for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++)
                            if (c = d[e], c.multiElement)
                                return !0;
                    return !1
                }
                function V(a, b) {
                    var c = b.$attr, d = a.$attr, e = a.$$element;
                    f(a, function(d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), f(b, function(b, f) {
                        "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }
                function W(a, b, c, d, e, g, h, j) {
                    var k, m, n = [], o = b[0], p = a.shift(), q = l({}, p, {templateUrl: null,transclude: null,replace: null,$$originalDirective: p}), r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                    return b.empty(), i(B.getTrustedResourceUrl(r)).then(function(i) {
                        var l, u, v, w;
                        if (i = kb(i), p.replace) {
                            if (v = qb(i) ? [] : ac($(s, ke(i))), l = v[0], 1 != v.length || l.nodeType !== qe)
                                throw Ue("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                            u = {$attr: {}}, bb(d, b, l);
                            var x = L(l, [], u);
                            t(p.scope) && R(x), a = x.concat(a), V(c, u)
                        } else
                            l = o, b.html(i);
                        for (a.unshift(q), k = Q(a, l, c, e, b, p, g, h, j), f(d, function(a, c) {
                            a == l && (d[c] = b[0])
                        }), m = H(b[0].childNodes, e); n.length; ) {
                            var y = n.shift(), z = n.shift(), A = n.shift(), B = n.shift(), C = b[0];
                            if (!y.$$destroyed) {
                                if (z !== o) {
                                    var D = z.className;
                                    j.hasElementTranscludeDirective && p.replace || (C = vb(l)), bb(A, $d(z), C), E($d(C), D)
                                }
                                w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(m, y, C, d, w)
                            }
                        }
                        n = null
                    }), function(a, b, c, d, e) {
                        var f = e;
                        b.$$destroyed || (n ? n.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), k(m, b, c, d, f)))
                    }
                }
                function X(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }
                function Y(a, b, c, d) {
                    if (b)
                        throw Ue("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
                }
                function Z(a, b) {
                    var c = d(b, !0);
                    c && a.push({priority: 0,compile: function(a) {
                            var b = a.parent(), d = !!b.length;
                            return d && F.$$addBindingClass(b), function(a, b) {
                                var e = b.parent();
                                d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                    b[0].nodeValue = a
                                })
                            }
                        }})
                }
                function $(a, c) {
                    switch (a = Ud(a || "html")) {
                        case "svg":
                        case "math":
                            var d = b.createElement("div");
                            return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                        default:
                            return c
                    }
                }
                function _(a, b) {
                    if ("srcdoc" == b)
                        return B.HTML;
                    var c = I(a);
                    return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
                }
                function ab(a, b, c, e, f) {
                    var g = _(a, e);
                    f = m[e] || f;
                    var h = d(c, !0, g, f);
                    if (h) {
                        if ("multiple" === e && "select" === I(a))
                            throw Ue("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                        b.push({priority: 100,compile: function() {
                                return {pre: function(a, b, i) {
                                        var j = i.$$observers || (i.$$observers = {});
                                        if (v.test(e))
                                            throw Ue("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var k = i[e];
                                        k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                            "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                        }))
                                    }}
                            }})
                    }
                }
                function bb(a, c, d) {
                    var e, f, g = c[0], h = c.length, i = g.parentNode;
                    if (a)
                        for (e = 0, f = a.length; f > e; e++)
                            if (a[e] == g) {
                                a[e++] = d;
                                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)
                                    l > k ? a[j] = a[k] : delete a[j];
                                a.length -= h - 1, a.context === g && (a.context = d);
                                break
                            }
                    i && i.replaceChild(d, g);
                    var m = b.createDocumentFragment();
                    m.appendChild(g), $d(d).data($d(g).data()), _d ? (ie = !0, _d.cleanData([g])) : delete $d.cache[g[$d.expando]];
                    for (var n = 1, o = c.length; o > n; n++) {
                        var p = c[n];
                        $d(p).remove(), m.appendChild(p), delete c[n]
                    }
                    c[0] = d, c.length = 1
                }
                function db(a, b) {
                    return l(function() {
                        return a.apply(null, arguments)
                    }, a, b)
                }
                function fb(a, b, c, d, f, g) {
                    try {
                        a(b, c, d, f, g)
                    } catch (h) {
                        e(h, T(c))
                    }
                }
                var gb = function(a, b) {
                    if (b) {
                        var c, d, e, f = Object.keys(b);
                        for (c = 0, d = f.length; d > c; c++)
                            e = f[c], this[e] = b[e]
                    } else
                        this.$attr = {};
                    this.$$element = a
                };
                gb.prototype = {$normalize: $b,$addClass: function(a) {
                        a && a.length > 0 && C.addClass(this.$$element, a)
                    },$removeClass: function(a) {
                        a && a.length > 0 && C.removeClass(this.$$element, a)
                    },$updateClass: function(a, b) {
                        var c = _b(a, b);
                        c && c.length && C.addClass(this.$$element, c);
                        var d = _b(b, a);
                        d && d.length && C.removeClass(this.$$element, d)
                    },$set: function(a, b, d, g) {
                        var h, i = this.$$element[0], j = Kb(i, a), k = Lb(i, a), l = a;
                        if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = cb(a, "-"))), h = I(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a)
                            this[a] = b = D(b, "src" === a);
                        else if ("img" === h && "srcset" === a) {
                            for (var m = "", n = ke(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                                var t = 2 * s;
                                m += D(ke(q[t]), !0), m += " " + ke(q[t + 1])
                            }
                            var u = ke(q[2 * s]).split(/\s/);
                            m += D(ke(u[0]), !0), 2 === u.length && (m += " " + ke(u[1])), this[a] = b = m
                        }
                        d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                        var v = this.$$observers;
                        v && f(v[l], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                e(c)
                            }
                        })
                    },$observe: function(a, b) {
                        var c = this, d = c.$$observers || (c.$$observers = jb()), e = d[a] || (d[a] = []);
                        return e.push(b), y.$evalAsync(function() {
                            !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                        }), function() {
                            J(e, b)
                        }
                    }};
                var hb = d.startSymbol(), ib = d.endSymbol(), kb = "{{" == hb || "}}" == ib ? p : function(a) {
                    return a.replace(/\{\{/g, hb).replace(/}}/g, ib)
                }, lb = /^ngAttr[A-Z]/;
                return F.$$addBindingInfo = w ? function(a, b) {
                    var c = a.data("$binding") || [];
                    je(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
                } : o, F.$$addBindingClass = w ? function(a) {
                    E(a, "ng-binding")
                } : o, F.$$addScopeInfo = w ? function(a, b, c, d) {
                    var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    a.data(e, b)
                } : o, F.$$addScopeClass = w ? function(a, b) {
                    E(a, b ? "ng-isolate-scope" : "ng-scope")
                } : o, F
            }]
    }
    function $b(a) {
        return pb(a.replace(Ve, ""))
    }
    function _b(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h])
                    continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }
    function ac(a) {
        a = $d(a);
        var b = a.length;
        if (1 >= b)
            return a;
        for (; b--; ) {
            var c = a[b];
            c.nodeType === se && ce.call(a, b, 1)
        }
        return a
    }
    function bc() {
        var a = {}, b = !1, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            gb(b, "controller"), t(b) ? l(a, b) : a[b] = c
        }, this.allowGlobals = function() {
            b = !0
        }, this.$get = ["$injector", "$window", function(f, g) {
                function h(a, b, c, e) {
                    if (!a || !t(a.$scope))
                        throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                    a.$scope[b] = c
                }
                return function(d, i, j, k) {
                    var m, n, o, p;
                    if (j = j === !0, k && u(k) && (p = k), u(d) && (n = d.match(e), o = n[1], p = p || n[3], d = a.hasOwnProperty(o) ? a[o] : hb(i.$scope, o, !0) || (b ? hb(g, o, !0) : c), fb(d, o, !0)), j) {
                        var q = (je(d) ? d[d.length - 1] : d).prototype;
                        return m = Object.create(q || null), p && h(i, p, m, o || d.name), l(function() {
                            return f.invoke(d, m, i, o), m
                        }, {instance: m,identifier: p})
                    }
                    return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m
                }
            }]
    }
    function cc() {
        this.$get = ["$window", function(a) {
                return $d(a.document)
            }]
    }
    function dc() {
        this.$get = ["$log", function(a) {
                return function() {
                    a.error.apply(a, arguments)
                }
            }]
    }
    function ec(a, b) {
        if (u(a)) {
            var c = a.replace($e, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(We) || fc(c)) && (a = S(c))
            }
        }
        return a
    }
    function fc(a) {
        var b = a.match(Ye);
        return b && Ze[b[0]].test(a)
    }
    function gc(a) {
        var b, c, d, e = jb();
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = Ud(ke(a.substr(0, d))), c = ke(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
        }), e) : e
    }
    function hc(a) {
        var b = t(a) ? a : c;
        return function(c) {
            if (b || (b = gc(a)), c) {
                var d = b[Ud(c)];
                return void 0 === d && (d = null), d
            }
            return b
        }
    }
    function ic(a, b, c, d) {
        return x(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c)
        }), a)
    }
    function jc(a) {
        return a >= 200 && 300 > a
    }
    function kc() {
        var a = this.defaults = {transformResponse: [ec],transformRequest: [function(a) {
                    return !t(a) || B(a) || D(a) || C(a) ? a : R(a)
                }],headers: {common: {Accept: "application/json, text/plain, */*"},post: L(Xe),put: L(Xe),patch: L(Xe)},xsrfCookieName: "XSRF-TOKEN",xsrfHeaderName: "X-XSRF-TOKEN"}, b = !1;
        this.useApplyAsync = function(a) {
            return s(a) ? (b = !!a, this) : b
        };
        var e = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(g, i, j, k, m, n) {
                function o(b) {
                    function e(a) {
                        var b = l({}, a);
                        return b.data = a.data ? ic(a.data, a.headers, a.status, i.transformResponse) : a.data, jc(a.status) ? b : m.reject(b)
                    }
                    function g(a) {
                        var b, c = {};
                        return f(a, function(a, d) {
                            x(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                        }), c
                    }
                    function h(b) {
                        var c, d, e, f = a.headers, h = l({}, b.headers);
                        f = l({}, f.common, f[Ud(b.method)]);
                        a: for (c in f) {
                            d = Ud(c);
                            for (e in h)
                                if (Ud(e) === d)
                                    continue a;
                            h[c] = f[c]
                        }
                        return g(h)
                    }
                    if (!ge.isObject(b))
                        throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                    var i = l({method: "get",transformRequest: a.transformRequest,transformResponse: a.transformResponse}, b);
                    i.headers = h(b), i.method = Wd(i.method);
                    var j = function(b) {
                        var d = b.headers, g = ic(b.data, hc(d), c, b.transformRequest);
                        return r(g) && f(d, function(a, b) {
                            "content-type" === Ud(b) && delete d[b]
                        }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), v(b, g).then(e, e)
                    }, k = [j, c], n = m.when(i);
                    for (f(A, function(a) {
                        (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError)
                    }); k.length; ) {
                        var o = k.shift(), p = k.shift();
                        n = n.then(o, p)
                    }
                    return n.success = function(a) {
                        return n.then(function(b) {
                            a(b.data, b.status, b.headers, i)
                        }), n
                    }, n.error = function(a) {
                        return n.then(null, function(b) {
                            a(b.data, b.status, b.headers, i)
                        }), n
                    }, n
                }
                function p() {
                    f(arguments, function(a) {
                        o[a] = function(b, c) {
                            return o(l(c || {}, {method: a,url: b}))
                        }
                    })
                }
                function q() {
                    f(arguments, function(a) {
                        o[a] = function(b, c, d) {
                            return o(l(d || {}, {method: a,url: b,data: c}))
                        }
                    })
                }
                function v(d, e) {
                    function f(a, c, d, e) {
                        function f() {
                            h(c, a, d, e)
                        }
                        n && (jc(a) ? n.put(w, [a, c, gc(d), e]) : n.remove(w)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                    }
                    function h(a, b, c, e) {
                        b = Math.max(b, 0), (jc(b) ? q.resolve : q.reject)({data: a,status: b,headers: hc(c),config: d,statusText: e})
                    }
                    function j(a) {
                        h(a.data, a.status, L(a.headers()), a.statusText)
                    }
                    function l() {
                        var a = o.pendingRequests.indexOf(d);
                        -1 !== a && o.pendingRequests.splice(a, 1)
                    }
                    var n, p, q = m.defer(), u = q.promise, v = d.headers, w = y(d.url, d.params);
                    if (o.pendingRequests.push(d), u.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = t(d.cache) ? d.cache : t(a.cache) ? a.cache : z), n && (p = n.get(w), s(p) ? F(p) ? p.then(j, j) : je(p) ? h(p[1], p[0], L(p[2]), p[3]) : h(p, 200, {}, "OK") : n.put(w, u)), r(p)) {
                        var x = ed(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c;
                        x && (v[d.xsrfHeaderName || a.xsrfHeaderName] = x), g(d.method, w, e, f, v, d.timeout, d.withCredentials, d.responseType)
                    }
                    return u
                }
                function y(a, b) {
                    if (!b)
                        return a;
                    var c = [];
                    return h(b, function(a, b) {
                        null === a || r(a) || (je(a) || (a = [a]), f(a, function(a) {
                            t(a) && (a = w(a) ? a.toISOString() : R(a)), c.push(Y(b) + "=" + Y(a))
                        }))
                    }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
                }
                var z = j("$http"), A = [];
                return f(e, function(a) {
                    A.unshift(u(a) ? n.get(a) : n.invoke(a))
                }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
            }]
    }
    function lc() {
        return new a.XMLHttpRequest
    }
    function mc() {
        this.$get = ["$browser", "$window", "$document", function(a, b, c) {
                return nc(a, lc, a.defer, b.angular.callbacks, c[0])
            }]
    }
    function nc(a, b, d, e, g) {
        function h(a, b, c) {
            var d = g.createElement("script"), f = null;
            return d.type = "text/javascript", d.src = a, d.async = !0, f = function(a) {
                ze(d, "load", f), ze(d, "error", f), g.body.removeChild(d), d = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || e[b].called || (a = {type: "error"}), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, ye(d, "load", f), ye(d, "error", f), g.body.appendChild(d), f
        }
        return function(g, i, j, k, l, m, n, p) {
            function q() {
                u && u(), v && v.abort()
            }
            function r(b, e, f, g, h) {
                y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(o)
            }
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Ud(g)) {
                var t = "_" + (e.counter++).toString(36);
                e[t] = function(a) {
                    e[t].data = a, e[t].called = !0
                };
                var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function(a, b) {
                    r(k, a, e[t].data, "", b), e[t] = o
                })
            } else {
                var v = b();
                v.open(g, i, !0), f(l, function(a, b) {
                    s(a) && v.setRequestHeader(b, a)
                }), v.onload = function() {
                    var a = v.statusText || "", b = "response" in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == dd(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
                };
                var w = function() {
                    r(k, -1, null, null, "")
                };
                if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), p)
                    try {
                        v.responseType = p
                    } catch (x) {
                        if ("json" !== p)
                            throw x
                    }
                v.send(j || null)
            }
            if (m > 0)
                var y = d(q, m);
            else
                F(m) && m.then(q)
        }
    }
    function oc() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
                function f(a) {
                    return "\\\\\\" + a
                }
                function g(f, g, m, n) {
                    function o(c) {
                        return c.replace(j, a).replace(k, b)
                    }
                    function p(a) {
                        try {
                            return a = D(a), n && !s(a) ? a : E(a)
                        } catch (b) {
                            var c = _e("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                            d(c)
                        }
                    }
                    n = !!n;
                    for (var q, t, u, v = 0, w = [], y = [], z = f.length, A = [], B = []; z > v; ) {
                        if (-1 == (q = f.indexOf(a, v)) || -1 == (t = f.indexOf(b, q + h))) {
                            v !== z && A.push(o(f.substring(v)));
                            break
                        }
                        v !== q && A.push(o(f.substring(v, q))), u = f.substring(q + h, t), w.push(u), y.push(c(u, p)), v = t + i, B.push(A.length), A.push("")
                    }
                    if (m && A.length > 1)
                        throw _e("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                    if (!g || w.length) {
                        var C = function(a) {
                            for (var b = 0, c = w.length; c > b; b++) {
                                if (n && r(a[b]))
                                    return;
                                A[B[b]] = a[b]
                            }
                            return A.join("")
                        }, D = function(a) {
                            return m ? e.getTrusted(m, a) : e.valueOf(a)
                        }, E = function(a) {
                            if (null == a)
                                return "";
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = R(a)
                            }
                            return a
                        };
                        return l(function(a) {
                            var b = 0, c = w.length, e = new Array(c);
                            try {
                                for (; c > b; b++)
                                    e[b] = y[b](a);
                                return C(e)
                            } catch (g) {
                                var h = _e("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                                d(h)
                            }
                        }, {exp: f,expressions: w,$$watchDelegate: function(a, b, c) {
                                var d;
                                return a.$watchGroup(y, function(c, e) {
                                    var f = C(c);
                                    x(b) && b.call(this, f, c !== e ? d : f, a), d = f
                                }, c)
                            }})
                    }
                }
                var h = a.length, i = b.length, j = new RegExp(a.replace(/./g, f), "g"), k = new RegExp(b.replace(/./g, f), "g");
                return g.startSymbol = function() {
                    return a
                }, g.endSymbol = function() {
                    return b
                }, g
            }]
    }
    function pc() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
                function e(e, g, h, i) {
                    var j = b.setInterval, k = b.clearInterval, l = 0, m = s(i) && !i, n = (m ? d : c).defer(), o = n.promise;
                    return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function() {
                        n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), m || a.$apply()
                    }, g), f[o.$$intervalId] = n, o
                }
                var f = {};
                return e.cancel = function(a) {
                    return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
                }, e
            }]
    }
    function qc() {
        this.$get = function() {
            return {id: "en-us",NUMBER_FORMATS: {DECIMAL_SEP: ".",GROUP_SEP: ",",PATTERNS: [{minInt: 1,minFrac: 0,maxFrac: 3,posPre: "",posSuf: "",negPre: "-",negSuf: "",gSize: 3,lgSize: 3}, {minInt: 1,minFrac: 2,maxFrac: 2,posPre: "¤",posSuf: "",negPre: "(¤",negSuf: ")",gSize: 3,lgSize: 3}],CURRENCY_SYM: "$"},DATETIME_FORMATS: {MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS: ["AM", "PM"],medium: "MMM d, y h:mm:ss a","short": "M/d/yy h:mm a",fullDate: "EEEE, MMMM d, y",longDate: "MMMM d, y",mediumDate: "MMM d, y",shortDate: "M/d/yy",mediumTime: "h:mm:ss a",shortTime: "h:mm a"},pluralCat: function(a) {
                    return 1 === a ? "one" : "other"
                }}
        }
    }
    function rc(a) {
        for (var b = a.split("/"), c = b.length; c--; )
            b[c] = X(b[c]);
        return b.join("/")
    }
    function sc(a, b) {
        var c = dd(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || bf[c.protocol] || null
    }
    function tc(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = dd(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }
    function uc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }
    function vc(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }
    function wc(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }
    function xc(a) {
        return a.substr(0, vc(a).lastIndexOf("/") + 1)
    }
    function yc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }
    function zc(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = xc(a);
        sc(a, this), this.$$parse = function(a) {
            var b = uc(d, a);
            if (!u(b))
                throw cf("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
            tc(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var a = W(this.$$search), b = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(e, f) {
            if (f && "#" === f[0])
                return this.hash(f.slice(1)), !0;
            var g, h, i;
            return (g = uc(a, e)) !== c ? (h = g, i = (g = uc(b, g)) !== c ? d + (uc("/", g) || g) : a + h) : (g = uc(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i
        }
    }
    function Ac(a, b) {
        var c = xc(a);
        sc(a, this), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }
            var f, g = uc(a, d) || uc(c, d);
            "#" === g.charAt(0) ? (f = uc(b, g), r(f) && (f = g)) : f = this.$$html5 ? g : "", tc(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
        }, this.$$compose = function() {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$parseLinkUrl = function(b) {
            return vc(a) == vc(b) ? (this.$$parse(b), !0) : !1
        }
    }
    function Bc(a, b) {
        this.$$html5 = !0, Ac.apply(this, arguments);
        var c = xc(a);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0])
                return this.hash(e.slice(1)), !0;
            var f, g;
            return a == vc(d) ? f = d : (g = uc(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
        }, this.$$compose = function() {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
        }
    }
    function Cc(a) {
        return function() {
            return this[a]
        }
    }
    function Dc(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }
    function Ec() {
        var a = "", b = {enabled: !1,requireBase: !0,rewriteLinks: !0};
        this.hashPrefix = function(b) {
            return s(b) ? (a = b, this) : a
        }, this.html5Mode = function(a) {
            return E(a) ? (b.enabled = a, this) : t(a) ? (E(a.enabled) && (b.enabled = a.enabled), E(a.requireBase) && (b.requireBase = a.requireBase), E(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
                function h(a, b, c) {
                    var e = j.url(), f = j.$$state;
                    try {
                        d.url(a, b, c), j.$$state = d.state()
                    } catch (g) {
                        throw j.url(e), j.$$state = f, g
                    }
                }
                function i(a, b) {
                    c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
                }
                var j, k, l, m = d.baseHref(), n = d.url();
                if (b.enabled) {
                    if (!m && b.requireBase)
                        throw cf("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    l = yc(n) + (m || "/"), k = e.history ? zc : Bc
                } else
                    l = vc(n), k = Ac;
                j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
                var o = /^\s*(javascript|mailto):/i;
                f.on("click", function(a) {
                    if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && 2 != a.which) {
                        for (var e = $d(a.target); "a" !== I(e[0]); )
                            if (e[0] === f[0] || !(e = e.parent())[0])
                                return;
                        var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                        t(h) && "[object SVGAnimatedString]" === h.toString() && (h = dd(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                    }
                }), j.absUrl() != n && d.url(j.absUrl(), !0);
                var p = !0;
                return d.onUrlChange(function(a, b) {
                    c.$evalAsync(function() {
                        var d, e = j.absUrl(), f = j.$$state;
                        j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                    }), c.$$phase || c.$digest()
                }), c.$watch(function() {
                    var a = wc(d.url()), b = wc(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                    (p || k) && (p = !1, c.$evalAsync(function() {
                        var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                        j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                    })), j.$$replace = !1
                }), j
            }]
    }
    function Fc() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a
        }, this.$get = ["$window", function(c) {
                function d(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }
                function e(a) {
                    var b = c.console || {}, e = b[a] || b.log || o, g = !1;
                    try {
                        g = !!e.apply
                    } catch (h) {
                    }
                    return g ? function() {
                        var a = [];
                        return f(arguments, function(b) {
                            a.push(d(b))
                        }), e.apply(b, a)
                    } : function(a, b) {
                        e(a, null == b ? "" : b)
                    }
                }
                return {log: e("log"),info: e("info"),warn: e("warn"),error: e("error"),debug: function() {
                        var c = e("debug");
                        return function() {
                            a && c.apply(b, arguments)
                        }
                    }()}
            }]
    }
    function Gc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)
            throw ef("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }
    function Hc(a, b) {
        if (a) {
            if (a.constructor === a)
                throw ef("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a)
                throw ef("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))
                throw ef("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object)
                throw ef("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }
    function Ic(a, b) {
        if (a) {
            if (a.constructor === a)
                throw ef("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === ff || a === gf || a === hf)
                throw ef("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }
    function Jc(a) {
        return a.constant
    }
    function Kc(a, b, c, d, e) {
        Hc(a, e), Hc(b, e);
        for (var f, g = c.split("."), h = 0; g.length > 1; h++) {
            f = Gc(g.shift(), e);
            var i = 0 === h && b && b[f] || a[f];
            i || (i = {}, a[f] = i), a = Hc(i, e)
        }
        return f = Gc(g.shift(), e), Hc(a[f], e), a[f] = d, d
    }
    function Lc(a) {
        return "constructor" == a
    }
    function Mc(a, b, d, e, f, g, h) {
        Gc(a, g), Gc(b, g), Gc(d, g), Gc(e, g), Gc(f, g);
        var i = function(a) {
            return Hc(a, g)
        }, j = h || Lc(a) ? i : p, k = h || Lc(b) ? i : p, l = h || Lc(d) ? i : p, m = h || Lc(e) ? i : p, n = h || Lc(f) ? i : p;
        return function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i)
        }
    }
    function Nc(a, b) {
        return function(c, d) {
            return a(c, d, Hc, b)
        }
    }
    function Oc(a, b, d) {
        var e = b.expensiveChecks, g = e ? pf : of, h = g[a];
        if (h)
            return h;
        var i = a.split("."), j = i.length;
        if (b.csp)
            h = 6 > j ? Mc(i[0], i[1], i[2], i[3], i[4], d, e) : function(a, b) {
                var f, g = 0;
                do
                    f = Mc(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f;
                while (j > g);
                return f
            };
        else {
            var k = "";
            e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var l = e;
            f(i, function(a, b) {
                Gc(a, d);
                var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                (e || Lc(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n"
            }), k += "return s;";
            var m = new Function("s", "l", "eso", "fe", k);
            m.toString = q(k), l && (m = Nc(m, d)), h = m
        }
        return h.sharedGetter = !0, h.assign = function(b, c, d) {
            return Kc(b, d, a, c, a)
        }, g[a] = h, h
    }
    function Pc(a) {
        return x(a.valueOf) ? a.valueOf() : qf.call(a)
    }
    function Qc() {
        var a = jb(), b = jb();
        this.$get = ["$filter", "$sniffer", function(c, d) {
                function e(a) {
                    var b = a;
                    return a.sharedGetter && (b = function(b, c) {
                        return a(b, c)
                    }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b
                }
                function g(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                    }
                    return b
                }
                function h(a, b) {
                    return null == a || null == b ? a === b : "object" == typeof a && (a = Pc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
                }
                function i(a, b, c, d) {
                    var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                    if (1 === f.length) {
                        var i = h;
                        return f = f[0], a.$watch(function(a) {
                            var b = f(a);
                            return h(b, i) || (e = d(a), i = b && Pc(b)), e
                        }, b, c)
                    }
                    for (var j = [], k = 0, l = f.length; l > k; k++)
                        j[k] = h;
                    return a.$watch(function(a) {
                        for (var b = !1, c = 0, g = f.length; g > c; c++) {
                            var i = f[c](a);
                            (b || (b = !h(i, j[c]))) && (j[c] = i && Pc(i))
                        }
                        return b && (e = d(a)), e
                    }, b, c)
                }
                function j(a, b, c, d) {
                    var e, f;
                    return e = a.$watch(function(a) {
                        return d(a)
                    }, function(a, c, d) {
                        f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function() {
                            s(f) && e()
                        })
                    }, c)
                }
                function k(a, b, c, d) {
                    function e(a) {
                        var b = !0;
                        return f(a, function(a) {
                            s(a) || (b = !1)
                        }), b
                    }
                    var g, h;
                    return g = a.$watch(function(a) {
                        return d(a)
                    }, function(a, c, d) {
                        h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                            e(h) && g()
                        })
                    }, c)
                }
                function l(a, b, c, d) {
                    var e;
                    return e = a.$watch(function(a) {
                        return d(a)
                    }, function() {
                        x(b) && b.apply(this, arguments), e()
                    }, c)
                }
                function m(a, b) {
                    if (!b)
                        return a;
                    var c = a.$$watchDelegate, d = c !== k && c !== j, e = d ? function(c, d) {
                        var e = a(c, d);
                        return b(e, c, d)
                    } : function(c, d) {
                        var e = a(c, d), f = b(e, c, d);
                        return s(e) ? f : e
                    };
                    return a.$$watchDelegate && a.$$watchDelegate !== i ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = i, e.inputs = [a]), e
                }
                var n = {csp: d.csp,expensiveChecks: !1}, p = {csp: d.csp,expensiveChecks: !0};
                return function(d, f, g) {
                    var h, q, r;
                    switch (typeof d) {
                        case "string":
                            r = d = d.trim();
                            var s = g ? b : a;
                            if (h = s[r], !h) {
                                ":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2));
                                var t = g ? p : n, u = new mf(t), v = new nf(u, c, t);
                                h = v.parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), s[r] = h
                            }
                            return m(h, f);
                        case "function":
                            return m(d, f);
                        default:
                            return m(o, f)
                    }
                }
            }]
    }
    function Rc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
                return Tc(function(b) {
                    a.$evalAsync(b)
                }, b)
            }]
    }
    function Sc() {
        this.$get = ["$browser", "$exceptionHandler", function(a, b) {
                return Tc(function(b) {
                    a.defer(b)
                }, b)
            }]
    }
    function Tc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }
        function g() {
            this.$$state = {status: 0}
        }
        function h(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }
        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                } catch (i) {
                    e.reject(i), b(i)
                }
            }
        }
        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                i(b)
            }))
        }
        function k() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }
        function l(a) {
            var b = new k, c = 0, d = je(a) ? [] : {};
            return f(a, function(a, e) {
                c++, r(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }
        var m = d("$q", TypeError), n = function() {
            return new k
        };
        g.prototype = {then: function(a, b, c) {
                var d = new k;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
            },"catch": function(a) {
                return this.then(null, a)
            },"finally": function(a, b) {
                return this.then(function(b) {
                    return q(b, !0, a)
                }, function(b) {
                    return q(b, !1, a)
                }, b)
            }}, k.prototype = {resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
            },$$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            },reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },$$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
            },notify: function(c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(x(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }};
        var o = function(a) {
            var b = new k;
            return b.reject(a), b.promise
        }, p = function(a, b) {
            var c = new k;
            return b ? c.resolve(a) : c.reject(a), c.promise
        }, q = function(a, b, c) {
            var d = null;
            try {
                x(c) && (d = c())
            } catch (e) {
                return p(e, !1)
            }
            return F(d) ? d.then(function() {
                return p(a, b)
            }, function(a) {
                return p(a, !1)
            }) : p(a, b)
        }, r = function(a, b, c, d) {
            var e = new k;
            return e.resolve(a), e.promise.then(b, c, d)
        }, s = function u(a) {
            function b(a) {
                d.resolve(a)
            }
            function c(a) {
                d.reject(a)
            }
            if (!x(a))
                throw m("norslvr", "Expected resolverFn, got '{0}'", a);
            if (!(this instanceof u))
                return new u(a);
            var d = new k;
            return a(b, c), d.promise
        };
        return s.defer = n, s.reject = o, s.when = r, s.all = l, s
    }
    function Uc() {
        this.$get = ["$window", "$timeout", function(a, b) {
                var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(a) {
                    var c = b(a, 16.66, !1);
                    return function() {
                        b.cancel(c)
                    }
                };
                return f.supported = e, f
            }]
    }
    function Vc() {
        var a = 10, b = d("$rootScope"), c = null, g = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, h, i, k) {
                function l() {
                    this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
                }
                function m(a) {
                    if (v.$$phase)
                        throw b("inprog", "{0} already in progress", v.$$phase);
                    v.$$phase = a
                }
                function n() {
                    v.$$phase = null
                }
                function p(a, b, c) {
                    do
                        a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                    while (a = a.$parent)
                }
                function q() {
                }
                function s() {
                    for (; z.length; )
                        try {
                            z.shift()()
                        } catch (a) {
                            h(a)
                        }
                    g = null
                }
                function u() {
                    null === g && (g = k.defer(function() {
                        v.$apply(s)
                    }))
                }
                l.prototype = {constructor: l,$new: function(a, b) {
                        function c() {
                            d.$$destroyed = !0
                        }
                        var d;
                        return b = b || this, a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$ChildScope = null
                        }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope), d.$parent = b, d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), d
                    },$watch: function(a, b, d) {
                        var e = i(a);
                        if (e.$$watchDelegate)
                            return e.$$watchDelegate(this, b, d, e);
                        var f = this, g = f.$$watchers, h = {fn: b,last: q,get: e,exp: a,eq: !!d};
                        return c = null, x(b) || (h.fn = o), g || (g = f.$$watchers = []), g.unshift(h), function() {
                            J(g, h), c = null
                        }
                    },$watchGroup: function(a, b) {
                        function c() {
                            i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                        }
                        var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
                        if (!a.length) {
                            var k = !0;
                            return h.$evalAsync(function() {
                                k && b(e, e, h)
                            }), function() {
                                k = !1
                            }
                        }
                        return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                            e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                        }) : (f(a, function(a, b) {
                            var f = h.$watch(a, function(a, f) {
                                e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                            });
                            g.push(f)
                        }), function() {
                            for (; g.length; )
                                g.shift()()
                        })
                    },$watchCollection: function(a, b) {
                        function c(a) {
                            f = a;
                            var b, c, d, h, i;
                            if (!r(f)) {
                                if (t(f))
                                    if (e(f)) {
                                        g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                        for (var j = 0; b > j; j++)
                                            i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                                    } else {
                                        g !== o && (g = o = {}, q = 0, l++), b = 0;
                                        for (c in f)
                                            f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                        if (q > b) {
                                            l++;
                                            for (c in g)
                                                f.hasOwnProperty(c) || (q--, delete g[c])
                                        }
                                    }
                                else
                                    g !== f && (g = f, l++);
                                return l
                            }
                        }
                        function d() {
                            if (p ? (p = !1, b(f, f, j)) : b(f, h, j), k)
                                if (t(f))
                                    if (e(f)) {
                                        h = new Array(f.length);
                                        for (var a = 0; a < f.length; a++)
                                            h[a] = f[a]
                                    } else {
                                        h = {};
                                        for (var c in f)
                                            Vd.call(f, c) && (h[c] = f[c])
                                    }
                                else
                                    h = f
                        }
                        c.$stateful = !0;
                        var f, g, h, j = this, k = b.length > 1, l = 0, m = i(a, c), n = [], o = {}, p = !0, q = 0;
                        return this.$watch(m, d)
                    },$digest: function() {
                        var d, e, f, i, j, l, o, p, r, t, u = a, z = this, A = [];
                        m("$digest"), k.$$checkUrlChange(), this === v && null !== g && (k.defer.cancel(g), s()), c = null;
                        do {
                            for (l = !1, p = z; w.length; ) {
                                try {
                                    t = w.shift(), t.scope.$eval(t.expression, t.locals)
                                } catch (B) {
                                    h(B)
                                }
                                c = null
                            }
                            a: do {
                                if (i = p.$$watchers)
                                    for (j = i.length; j--; )
                                        try {
                                            if (d = i[j])
                                                if ((e = d.get(p)) === (f = d.last) || (d.eq ? M(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                                    if (d === c) {
                                                        l = !1;
                                                        break a
                                                    }
                                                } else
                                                    l = !0, c = d, d.last = d.eq ? K(e, null) : e, d.fn(e, f === q ? e : f, p), 5 > u && (r = 4 - u, A[r] || (A[r] = []), A[r].push({msg: x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp,newVal: e,oldVal: f}))
                                        } catch (B) {
                                            h(B)
                                        }
                                if (!(o = p.$$childHead || p !== z && p.$$nextSibling))
                                    for (; p !== z && !(o = p.$$nextSibling); )
                                        p = p.$parent
                            } while (p = o);
                            if ((l || w.length) && !u--)
                                throw n(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, A)
                        } while (l || w.length);
                        for (n(); y.length; )
                            try {
                                y.shift()()
                            } catch (B) {
                                h(B)
                            }
                    },$destroy: function() {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v) {
                                for (var b in this.$$listenerCount)
                                    p(this, this.$$listenerCount[b], b);
                                a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, this.$on = this.$watch = this.$watchGroup = function() {
                                    return o
                                }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                            }
                        }
                    },$eval: function(a, b) {
                        return i(a)(this, b)
                    },$evalAsync: function(a, b) {
                        v.$$phase || w.length || k.defer(function() {
                            w.length && v.$digest()
                        }), w.push({scope: this,expression: a,locals: b})
                    },$$postDigest: function(a) {
                        y.push(a)
                    },$apply: function(a) {
                        try {
                            return m("$apply"), this.$eval(a)
                        } catch (b) {
                            h(b)
                        }finally {
                            n();
                            try {
                                v.$digest()
                            } catch (b) {
                                throw h(b), b
                            }
                        }
                    },$applyAsync: function(a) {
                        function b() {
                            c.$eval(a)
                        }
                        var c = this;
                        a && z.push(b), u()
                    },$on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []), c.push(b);
                        var d = this;
                        do
                            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
                        while (d = d.$parent);
                        var e = this;
                        return function() {
                            var d = c.indexOf(b);
                            -1 !== d && (c[d] = null, p(e, 1, a))
                        }
                    },$emit: function(a) {
                        var b, c, d, e = [], f = this, g = !1, i = {name: a,targetScope: f,stopPropagation: function() {
                                g = !0
                            },preventDefault: function() {
                                i.defaultPrevented = !0
                            },defaultPrevented: !1}, j = N([i], arguments, 1);
                        do {
                            for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
                                if (b[c])
                                    try {
                                        b[c].apply(null, j)
                                    } catch (k) {
                                        h(k)
                                    }
                                else
                                    b.splice(c, 1), c--, d--;
                            if (g)
                                return i.currentScope = null, i;
                            f = f.$parent
                        } while (f);
                        return i.currentScope = null, i
                    },$broadcast: function(a) {
                        var b = this, c = b, d = b, e = {name: a,targetScope: b,preventDefault: function() {
                                e.defaultPrevented = !0
                            },defaultPrevented: !1};
                        if (!b.$$listenerCount[a])
                            return e;
                        for (var f, g, i, j = N([e], arguments, 1); c = d; ) {
                            for (e.currentScope = c, f = c.$$listeners[a] || [], g = 0, i = f.length; i > g; g++)
                                if (f[g])
                                    try {
                                        f[g].apply(null, j)
                                    } catch (k) {
                                        h(k)
                                    }
                                else
                                    f.splice(g, 1), g--, i--;
                            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== b && c.$$nextSibling))
                                for (; c !== b && !(d = c.$$nextSibling); )
                                    c = c.$parent
                        }
                        return e.currentScope = null, e
                    }};
                var v = new l, w = v.$$asyncQueue = [], y = v.$$postDigestQueue = [], z = v.$$applyAsyncQueue = [];
                return v
            }]
    }
    function Wc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = dd(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }
    function Xc(a) {
        if ("self" === a)
            return a;
        if (u(a)) {
            if (a.indexOf("***") > -1)
                throw rf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = le(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (y(a))
            return new RegExp("^" + a.source + "$");
        throw rf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }
    function Yc(a) {
        var b = [];
        return s(a) && f(a, function(a) {
            b.push(Xc(a))
        }), b
    }
    function Zc() {
        this.SCE_CONTEXTS = sf;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Yc(b)), a
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Yc(a)), b
        }, this.$get = ["$injector", function(d) {
                function e(a, b) {
                    return "self" === a ? ed(b) : !!a.exec(b.href)
                }
                function f(c) {
                    var d, f, g = dd(c.toString()), h = !1;
                    for (d = 0, f = a.length; f > d; d++)
                        if (e(a[d], g)) {
                            h = !0;
                            break
                        }
                    if (h)
                        for (d = 0, f = b.length; f > d; d++)
                            if (e(b[d], g)) {
                                h = !1;
                                break
                            }
                    return h
                }
                function g(a) {
                    var b = function(a) {
                        this.$$unwrapTrustedValue = function() {
                            return a
                        }
                    };
                    return a && (b.prototype = new a), b.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, b.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, b
                }
                function h(a, b) {
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (!d)
                        throw rf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                    if (null === b || b === c || "" === b)
                        return b;
                    if ("string" != typeof b)
                        throw rf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                    return new d(b)
                }
                function i(a) {
                    return a instanceof l ? a.$$unwrapTrustedValue() : a
                }
                function j(a, b) {
                    if (null === b || b === c || "" === b)
                        return b;
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (d && b instanceof d)
                        return b.$$unwrapTrustedValue();
                    if (a === sf.RESOURCE_URL) {
                        if (f(b))
                            return b;
                        throw rf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                    }
                    if (a === sf.HTML)
                        return k(b);
                    throw rf("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var k = function() {
                    throw rf("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                d.has("$sanitize") && (k = d.get("$sanitize"));
                var l = g(), m = {};
                return m[sf.HTML] = g(l), m[sf.CSS] = g(l), m[sf.URL] = g(l), m[sf.JS] = g(l), m[sf.RESOURCE_URL] = g(m[sf.URL]), {trustAs: h,getTrusted: j,valueOf: i}
            }]
    }
    function $c() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
                if (a && 8 > Zd)
                    throw rf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var d = L(sf);
                d.isEnabled = function() {
                    return a
                }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                    return b
                }, d.valueOf = p), d.parseAs = function(a, c) {
                    var e = b(c);
                    return e.literal && e.constant ? e : b(c, function(b) {
                        return d.getTrusted(a, b)
                    })
                };
                var e = d.parseAs, g = d.getTrusted, h = d.trustAs;
                return f(sf, function(a, b) {
                    var c = Ud(b);
                    d[pb("parse_as_" + c)] = function(b) {
                        return e(a, b)
                    }, d[pb("get_trusted_" + c)] = function(b) {
                        return g(a, b)
                    }, d[pb("trust_as_" + c)] = function(b) {
                        return h(a, b)
                    }
                }), d
            }]
    }
    function _c() {
        this.$get = ["$window", "$document", function(a, b) {
                var c, d, e = {}, f = m((/android (\d+)/.exec(Ud((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
                if (j) {
                    for (var n in j)
                        if (d = i.exec(n)) {
                            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                            break
                        }
                    c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = u(h.body.style.webkitTransition), l = u(h.body.style.webkitAnimation))
                }
                return {history: !(!a.history || !a.history.pushState || 4 > f || g),hasEvent: function(a) {
                        if ("input" === a && 11 >= Zd)
                            return !1;
                        if (r(e[a])) {
                            var b = h.createElement("div");
                            e[a] = "on" + a in b
                        }
                        return e[a]
                    },csp: me(),vendorPrefix: c,transitions: k,animations: l,android: f}
            }]
    }
    function ad() {
        this.$get = ["$templateCache", "$http", "$q", function(a, b, c) {
                function d(e, f) {
                    function g(a) {
                        if (!f)
                            throw Ue("tpload", "Failed to load template: {0}", e);
                        return c.reject(a)
                    }
                    d.totalPendingRequests++;
                    var h = b.defaults && b.defaults.transformResponse;
                    je(h) ? h = h.filter(function(a) {
                        return a !== ec
                    }) : h === ec && (h = null);
                    var i = {cache: a,transformResponse: h};
                    return b.get(e, i)["finally"](function() {
                        d.totalPendingRequests--
                    }).then(function(a) {
                        return a.data
                    }, g)
                }
                return d.totalPendingRequests = 0, d
            }]
    }
    function bd() {
        this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
                var d = {};
                return d.findBindings = function(a, b, c) {
                    var d = a.getElementsByClassName("ng-binding"), e = [];
                    return f(d, function(a) {
                        var d = ge.element(a).data("$binding");
                        d && f(d, function(d) {
                            if (c) {
                                var f = new RegExp("(^|\\s)" + le(b) + "(\\s|\\||$)");
                                f.test(d) && e.push(a)
                            } else
                                -1 != d.indexOf(b) && e.push(a)
                        })
                    }), e
                }, d.findModels = function(a, b, c) {
                    for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                        var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                        if (h.length)
                            return h
                    }
                }, d.getLocation = function() {
                    return c.url()
                }, d.setLocation = function(b) {
                    b !== c.url() && (c.url(b), a.$digest())
                }, d.whenStable = function(a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }, d
            }]
    }
    function cd() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
                function f(f, h, i) {
                    var j, k = s(i) && !i, l = (k ? d : c).defer(), m = l.promise;
                    return j = b.defer(function() {
                        try {
                            l.resolve(f())
                        } catch (b) {
                            l.reject(b), e(b)
                        }finally {
                            delete g[m.$$timeoutId]
                        }
                        k || a.$apply()
                    }, h), m.$$timeoutId = j, g[j] = l, m
                }
                var g = {};
                return f.cancel = function(a) {
                    return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                }, f
            }]
    }
    function dd(a) {
        var b = a;
        return Zd && (tf.setAttribute("href", b), b = tf.href), tf.setAttribute("href", b), {href: tf.href,protocol: tf.protocol ? tf.protocol.replace(/:$/, "") : "",host: tf.host,search: tf.search ? tf.search.replace(/^\?/, "") : "",hash: tf.hash ? tf.hash.replace(/^#/, "") : "",hostname: tf.hostname,port: tf.port,pathname: "/" === tf.pathname.charAt(0) ? tf.pathname : "/" + tf.pathname}
    }
    function ed(a) {
        var b = u(a) ? dd(a) : a;
        return b.protocol === uf.protocol && b.host === uf.host
    }
    function fd() {
        this.$get = q(a)
    }
    function gd(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b, this.$get = ["$injector", function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }], b("currency", kd), b("date", vd), b("filter", hd), b("json", wd), b("limitTo", xd), b("lowercase", zf), b("number", ld), b("orderBy", yd), b("uppercase", Af)
    }
    function hd() {
        return function(a, b, c) {
            if (!je(a))
                return a;
            var d, e;
            switch (typeof b) {
                case "function":
                    d = b;
                    break;
                case "boolean":
                case "number":
                case "string":
                    e = !0;
                case "object":
                    d = id(b, c, e);
                    break;
                default:
                    return a
            }
            return a.filter(d)
        }
    }
    function id(a, b, c) {
        var d, e = t(a) && "$" in a;
        return b === !0 ? b = M : x(b) || (b = function(a, b) {
            return t(a) || t(b) ? !1 : (a = Ud("" + a), b = Ud("" + b), -1 !== a.indexOf(b))
        }), d = function(d) {
            return e && !t(d) ? jd(d, a.$, b, !1) : jd(d, a, b, c)
        }
    }
    function jd(a, b, c, d, e) {
        var f = typeof a, g = typeof b;
        if ("string" === g && "!" === b.charAt(0))
            return !jd(a, b.substring(1), c, d);
        if (je(a))
            return a.some(function(a) {
                return jd(a, b, c, d)
            });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && jd(a[h], b, c, !0))
                            return !0;
                    return e ? !1 : jd(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b) {
                        var i = b[h];
                        if (!x(i)) {
                            var j = "$" === h, k = j ? a : a[h];
                            if (!jd(k, i, c, j, j))
                                return !1
                        }
                    }
                    return !0
                }
                return c(a, b);
            case "function":
                return !1;
            default:
                return c(a, b)
        }
    }
    function kd(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : md(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }
    function ld(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : md(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }
    function md(a, b, c, d, e) {
        if (!isFinite(a) || t(a))
            return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0)
        }
        if (j)
            e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h));
        else {
            var l = (g.split(vf)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var m = ("" + a).split(vf), n = m[0];
            m = m[1] || "";
            var o, p = 0, q = b.lgSize, s = b.gSize;
            if (n.length >= q + s)
                for (p = n.length - q, o = 0; p > o; o++)
                    (p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
            for (o = p; o < n.length; o++)
                (n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
            for (; m.length < e; )
                m += "0";
            e && "0" !== e && (h += d + m.substr(0, e))
        }
        return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), i.join("")
    }
    function nd(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; )
            a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }
    function od(a, b, c, d) {
        return c = c || 0, function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), nd(f, b, d)
        }
    }
    function pd(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Wd(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }
    function qd(a) {
        var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
        return c += nd(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + nd(Math.abs(b % 60), 2)
    }
    function rd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }
    function sd(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }
    function td(a) {
        return function(b) {
            var c = rd(b.getFullYear()), d = sd(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return nd(f, a)
        }
    }
    function ud(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }
    function vd(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "", j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = yf.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))
                return c;
            for (; d; )
                h = xf.exec(d), h ? (j = N(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), f(j, function(b) {
                g = wf[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }
    function wd() {
        return function(a, b) {
            return r(b) && (b = 2), R(a, b)
        }
    }
    function xd() {
        return function(a, b) {
            return v(a) && (a = a.toString()), je(a) || u(a) ? (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), b ? b > 0 ? a.slice(0, b) : a.slice(b) : u(a) ? "" : []) : a
        }
    }
    function yd(a) {
        return function(b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)
                        return e
                }
                return 0
            }
            function g(a, b) {
                return b ? function(b, c) {
                    return a(c, b)
                } : a
            }
            function h(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }
            function i(a) {
                return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : ""
            }
            function j(a, b) {
                var c = typeof a, d = typeof b;
                return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }
            return e(b) ? (c = je(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function(b) {
                var c = !1, d = b || p;
                if (u(b)) {
                    if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b)
                        return g(j, c);
                    if (d = a(b), d.constant) {
                        var e = d();
                        return g(function(a, b) {
                            return j(a[e], b[e])
                        }, c)
                    }
                }
                return g(function(a, b) {
                    return j(d(a), d(b))
                }, c)
            }), be.call(b).sort(g(f, d))) : b
        }
    }
    function zd(a) {
        return x(a) && (a = {link: a}), a.restrict = a.restrict || "AC", q(a)
    }
    function Ad(a, b) {
        a.$name = b
    }
    function Bd(a, b, d, e, g) {
        var h = this, i = [], j = h.$$parentForm = a.parent().controller("form") || Df;
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function(a) {
            gb(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a)
            }), J(i, a)
        }, Qd({ctrl: this,$element: a,set: function(a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c);
                    -1 === e && d.push(c)
                } else
                    a[b] = [c]
            },unset: function(a, b, c) {
                var d = a[b];
                d && (J(d, c), 0 === d.length && delete a[b])
            },parentForm: j,$animate: e}), h.$setDirty = function() {
            e.removeClass(a, lg), e.addClass(a, mg), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
        }, h.$setPristine = function() {
            e.setClass(a, lg, mg + " " + Ef), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function() {
            e.addClass(a, Ef), h.$submitted = !0, j.$setSubmitted()
        }
    }
    function Cd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }
    function Dd(a, b, c, d, e, f) {
        Ed(a, b, c, d, e, f), Cd(d)
    }
    function Ed(a, b, c, d, e, f) {
        var g = Ud(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function() {
                h = !0
            }), b.on("compositionend", function() {
                h = !1, i()
            })
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(), i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = ke(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
            }
        };
        if (e.hasEvent("input"))
            b.on("input", i);
        else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function() {
            b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }
    function Fd(a, b) {
        if (w(a))
            return a;
        if (u(a)) {
            Of.lastIndex = 0;
            var c = Of.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = rd(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
            }
        }
        return 0 / 0
    }
    function Gd(a, b) {
        return function(c, d) {
            var e, g;
            if (w(c))
                return c;
            if (u(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), If.test(c))
                    return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c))
                    return e.shift(), g = d ? {yyyy: d.getFullYear(),MM: d.getMonth() + 1,dd: d.getDate(),HH: d.getHours(),mm: d.getMinutes(),ss: d.getSeconds(),sss: d.getMilliseconds() / 1e3} : {yyyy: 1970,MM: 1,dd: 1,HH: 0,mm: 0,ss: 0,sss: 0}, f(e, function(a, c) {
                        c < b.length && (g[b[c]] = +a)
                    }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return 0 / 0
        }
    }
    function Hd(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }
            function n(a) {
                return s(a) ? w(a) ? a : d(a) : c
            }
            Id(f, g, h, i), Ed(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                if (i.$isEmpty(a))
                    return null;
                if (b.test(a)) {
                    var e = d(a, o);
                    return "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                }
                return c
            }), i.$formatters.push(function(a) {
                if (a && !w(a))
                    throw qg("datefmt", "Expected `{0}` to be a date", a);
                if (m(a)) {
                    if (o = a, o && "UTC" === p) {
                        var b = 6e4 * o.getTimezoneOffset();
                        o = new Date(o.getTime() + b)
                    }
                    return l("date")(a, e, p)
                }
                return o = null, ""
            }), s(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function(a) {
                    return !m(a) || r(q) || d(a) >= q
                }, h.$observe("min", function(a) {
                    q = n(a), i.$validate()
                })
            }
            if (s(h.max) || h.ngMax) {
                var t;
                i.$validators.max = function(a) {
                    return !m(a) || r(t) || d(a) <= t
                }, h.$observe("max", function(a) {
                    t = n(a), i.$validate()
                })
            }
        }
    }
    function Id(a, b, d, e) {
        var f = b[0], g = e.$$hasNativeValidators = t(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(Td) || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }
    function Jd(a, b, d, e, f, g) {
        if (Id(a, b, d, e), Ed(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
            return e.$isEmpty(a) ? null : Lf.test(a) ? parseFloat(a) : c
        }), e.$formatters.push(function(a) {
            if (!e.$isEmpty(a)) {
                if (!v(a))
                    throw qg("numfmt", "Expected `{0}` to be a number", a);
                a = a.toString()
            }
            return a
        }), d.min || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
                return e.$isEmpty(a) || r(h) || a >= h
            }, d.$observe("min", function(a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
        if (d.max || d.ngMax) {
            var i;
            e.$validators.max = function(a) {
                return e.$isEmpty(a) || r(i) || i >= a
            }, d.$observe("max", function(a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
    }
    function Kd(a, b, c, d, e, f) {
        Ed(a, b, c, d, e, f), Cd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Jf.test(c)
        }
    }
    function Ld(a, b, c, d, e, f) {
        Ed(a, b, c, d, e, f), Cd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Kf.test(c)
        }
    }
    function Md(a, b, c, d) {
        r(c.name) && b.attr("name", j());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type)
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }
    function Nd(a, b, c, e, f) {
        var g;
        if (s(e)) {
            if (g = a(e), !g.constant)
                throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
            return g(b)
        }
        return f
    }
    function Od(a, b, c, d, e, f, g, h) {
        var i = Nd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = Nd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function(a) {
            d.$setViewValue(b[0].checked, a && a.type)
        };
        b.on("click", k), d.$render = function() {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function(a) {
            return a === !1
        }, d.$formatters.push(function(a) {
            return M(a, i)
        }), d.$parsers.push(function(a) {
            return a ? i : j
        })
    }
    function Pd(a, b) {
        return a = "ngClass" + a, ["$animate", function(c) {
                function d(a, b) {
                    var c = [];
                    a: for (var d = 0; d < a.length; d++) {
                        for (var e = a[d], f = 0; f < b.length; f++)
                            if (e == b[f])
                                continue a;
                        c.push(e)
                    }
                    return c
                }
                function e(a) {
                    if (je(a))
                        return a;
                    if (u(a))
                        return a.split(" ");
                    if (t(a)) {
                        var b = [];
                        return f(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        }), b
                    }
                    return a
                }
                return {restrict: "AC",link: function(g, h, i) {
                        function j(a) {
                            var b = l(a, 1);
                            i.$addClass(b)
                        }
                        function k(a) {
                            var b = l(a, -1);
                            i.$removeClass(b)
                        }
                        function l(a, b) {
                            var c = h.data("$classCounts") || {}, d = [];
                            return f(a, function(a) {
                                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                            }), h.data("$classCounts", c), d.join(" ")
                        }
                        function m(a, b) {
                            var e = d(b, a), f = d(a, b);
                            e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                        }
                        function n(a) {
                            if (b === !0 || g.$index % 2 === b) {
                                var c = e(a || []);
                                if (o) {
                                    if (!M(a, o)) {
                                        var d = e(o);
                                        m(d, c)
                                    }
                                } else
                                    j(c)
                            }
                            o = L(a)
                        }
                        var o;
                        g.$watch(i[a], n, !0), i.$observe("class", function() {
                            n(g.$eval(i[a]))
                        }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                            var f = 1 & c;
                            if (f !== (1 & d)) {
                                var h = e(g.$eval(i[a]));
                                f === b ? j(h) : k(h)
                            }
                        })
                    }}
            }]
    }
    function Qd(a) {
        function b(a, b, i) {
            b === c ? d("$pending", a, i) : e("$pending", a, i), E(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(pg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(pg, !1), h.$valid = Rd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
        }
        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c)
        }
        function e(a, b, d) {
            h[a] && l(h[a], b, d), Rd(h[a]) && (h[a] = c)
        }
        function f(a, b) {
            b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
        }
        function g(a, b) {
            a = a ? "-" + cb(a, "-") : "", f(jg + a, b === !0), f(kg + a, b === !1)
        }
        var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.parentForm, n = a.$animate;
        j[kg] = !(j[jg] = i.hasClass(jg)), h.$setValidity = b
    }
    function Rd(a) {
        if (a)
            for (var b in a)
                return !1;
        return !0
    }
    var Sd = /^\/(.+)\/([a-z]*)$/, Td = "validity", Ud = function(a) {
        return u(a) ? a.toLowerCase() : a
    }, Vd = Object.prototype.hasOwnProperty, Wd = function(a) {
        return u(a) ? a.toUpperCase() : a
    }, Xd = function(a) {
        return u(a) ? a.replace(/[A-Z]/g, function(a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
    }, Yd = function(a) {
        return u(a) ? a.replace(/[a-z]/g, function(a) {
            return String.fromCharCode(-33 & a.charCodeAt(0))
        }) : a
    };
    "i" !== "I".toLowerCase() && (Ud = Xd, Wd = Yd);
    var Zd, $d, _d, ae, be = [].slice, ce = [].splice, de = [].push, ee = Object.prototype.toString, fe = d("ng"), ge = a.angular || (a.angular = {}), he = 0;
    Zd = b.documentMode, o.$inject = [], p.$inject = [];
    var ie, je = Array.isArray, ke = function(a) {
        return u(a) ? a.trim() : a
    }, le = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, me = function() {
        if (s(me.isActive_))
            return me.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a)
            try {
                new Function("")
            } catch (c) {
                a = !0
            }
        return me.isActive_ = a
    }, ne = ["ng-", "data-ng-", "ng:", "x-ng-"], oe = /[A-Z]/g, pe = !1, qe = 1, re = 3, se = 8, te = 9, ue = 11, ve = {full: "1.3.10",major: 1,minor: 3,dot: 10,codeName: "heliotropic-sundial"};
    ub.expando = "ng339";
    var we = ub.cache = {}, xe = 1, ye = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }, ze = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    };
    ub._data = function(a) {
        return this.cache[a[this.expando]] || {}
    };
    var Ae = /([\:\-\_]+(.))/g, Be = /^moz([A-Z])/, Ce = {mouseleave: "mouseout",mouseenter: "mouseover"}, De = d("jqLite"), Ee = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Fe = /<|&#?\w+;/, Ge = /<([\w:]+)/, He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ie = {option: [1, '<select multiple="multiple">', "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
    var Je = ub.prototype = {ready: function(c) {
            function d() {
                e || (e = !0, c())
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ub(a).on("load", d))
        },toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b)
            }), "[" + a.join(", ") + "]"
        },eq: function(a) {
            return $d(a >= 0 ? this[a] : this[this.length + a])
        },length: 0,push: de,sort: [].sort,splice: [].splice}, Ke = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        Ke[Ud(a)] = a
    });
    var Le = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        Le[a] = !0
    });
    var Me = {ngMinlength: "minlength",ngMaxlength: "maxlength",ngMin: "min",ngMax: "max",ngPattern: "pattern"};
    f({data: Ab,removeData: yb}, function(a, b) {
        ub[b] = a
    }), f({data: Ab,inheritedData: Gb,scope: function(a) {
            return $d.data(a, "$scope") || Gb(a.parentNode || a, ["$isolateScope", "$scope"])
        },isolateScope: function(a) {
            return $d.data(a, "$isolateScope") || $d.data(a, "$isolateScopeNoTemplate")
        },controller: Fb,injector: function(a) {
            return Gb(a, "$injector")
        },removeAttr: function(a, b) {
            a.removeAttribute(b)
        },hasClass: Bb,css: function(a, b, c) {
            return b = pb(b), s(c) ? void (a.style[b] = c) : a.style[b]
        },attr: function(a, b, d) {
            var e = Ud(b);
            if (Ke[e]) {
                if (!s(d))
                    return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (s(d))
                a.setAttribute(b, d);
            else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f
            }
        },prop: function(a, b, c) {
            return s(c) ? void (a[b] = c) : a[b]
        },text: function() {
            function a(a, b) {
                if (r(b)) {
                    var c = a.nodeType;
                    return c === qe || c === re ? a.textContent : ""
                }
                a.textContent = b
            }
            return a.$dv = "", a
        }(),val: function(a, b) {
            if (r(b)) {
                if (a.multiple && "select" === I(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },html: function(a, b) {
            return r(b) ? a.innerHTML : (wb(a, !0), void (a.innerHTML = b))
        },empty: Hb}, function(a, b) {
        ub.prototype[b] = function(b, d) {
            var e, f, g = this.length;
            if (a !== Hb && (2 == a.length && a !== Bb && a !== Fb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++)
                        if (a === Ab)
                            a(this[e], b);
                        else
                            for (f in b)
                                a(this[e], f, b[f]);
                    return this
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k
                }
                return h
            }
            for (e = 0; g > e; e++)
                a(this[e], b, d);
            return this
        }
    }), f({removeData: yb,on: function Rg(a, b, c, d) {
            if (s(d))
                throw De("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (rb(a)) {
                var e = zb(a, !0), f = e.events, g = e.handle;
                g || (g = e.handle = Mb(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--; ) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Rg(a, Ce[b], function(a) {
                        var c = this, d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b)
                    }) : "$destroy" !== b && ye(a, b, g), j = f[b]), j.push(c)
                }
            }
        },off: xb,one: function(a, b, c) {
            a = $d(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },replaceWith: function(a, b) {
            var c, d = a.parentNode;
            wb(a), f(new ub(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === qe && b.push(a)
            }), b
        },contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },append: function(a, b) {
            var c = a.nodeType;
            if (c === qe || c === ue) {
                b = new ub(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        },prepend: function(a, b) {
            if (a.nodeType === qe) {
                var c = a.firstChild;
                f(new ub(b), function(b) {
                    a.insertBefore(b, c)
                })
            }
        },wrap: function(a, b) {
            b = $d(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },remove: Ib,detach: function(a) {
            Ib(a, !0)
        },after: function(a, b) {
            var c = a, d = a.parentNode;
            b = new ub(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        },addClass: Db,removeClass: Cb,toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                r(d) && (d = !Bb(a, b)), (d ? Db : Cb)(a, b)
            })
        },parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ue ? b : null
        },next: function(a) {
            return a.nextElementSibling
        },find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },clone: vb,triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b, i = zb(a), j = i && i.events, k = j && j[h];
            k && (d = {preventDefault: function() {
                    this.defaultPrevented = !0
                },isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },stopPropagation: o,type: h,target: a}, b.type && (d = l(d, b)), e = L(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }}, function(a, b) {
        ub.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++)
                r(e) ? (e = a(this[f], b, c, d), s(e) && (e = $d(e))) : Eb(e, a(this[f], b, c, d));
            return s(e) ? e : this
        }, ub.prototype.bind = ub.prototype.on, ub.prototype.unbind = ub.prototype.off
    }), Pb.prototype = {put: function(a, b) {
            this[Ob(a, this.nextUid)] = b
        },get: function(a) {
            return this[Ob(a, this.nextUid)]
        },remove: function(a) {
            var b = this[a = Ob(a, this.nextUid)];
            return delete this[a], b
        }};
    var Ne = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Oe = /,/, Pe = /^\s*(_?)(\S+?)\1\s*$/, Qe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Re = d("$injector");
    Sb.$$annotate = Rb;
    var Se = d("$animate"), Te = ["$provide", function(a) {
            this.$$selectors = {}, this.register = function(b, c) {
                var d = b + "-animation";
                if (b && "." != b.charAt(0))
                    throw Se("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                this.$$selectors[b.substr(1)] = d, a.factory(d, c)
            }, this.classNameFilter = function(a) {
                return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
            }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, b, c) {
                    function d(b) {
                        var d, e = a.defer();
                        return e.promise.$$cancelFn = function() {
                            d && d()
                        }, c.$$postDigest(function() {
                            d = b(function() {
                                e.resolve()
                            })
                        }), e.promise
                    }
                    function e(a, b) {
                        var c = [], d = [], e = jb();
                        return f((a.attr("class") || "").split(/\s+/), function(a) {
                            e[a] = !0
                        }), f(b, function(a, b) {
                            var f = e[b];
                            a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b)
                        }), c.length + d.length > 0 && [c.length ? c : null, d.length ? d : null]
                    }
                    function g(a, b, c) {
                        for (var d = 0, e = b.length; e > d; ++d) {
                            var f = b[d];
                            a[f] = c
                        }
                    }
                    function h() {
                        return j || (j = a.defer(), b(function() {
                            j.resolve(), j = null
                        })), j.promise
                    }
                    function i(a, b) {
                        if (ge.isObject(b)) {
                            var c = l(b.from || {}, b.to || {});
                            a.css(c)
                        }
                    }
                    var j;
                    return {animate: function(a, b, c) {
                            return i(a, {from: b,to: c}), h()
                        },enter: function(a, b, c, d) {
                            return i(a, d), c ? c.after(a) : b.prepend(a), h()
                        },leave: function(a) {
                            return a.remove(), h()
                        },move: function(a, b, c, d) {
                            return this.enter(a, b, c, d)
                        },addClass: function(a, b, c) {
                            return this.setClass(a, b, [], c)
                        },$$addClassImmediately: function(a, b, c) {
                            return a = $d(a), b = u(b) ? b : je(b) ? b.join(" ") : "", f(a, function(a) {
                                Db(a, b)
                            }), i(a, c), h()
                        },removeClass: function(a, b, c) {
                            return this.setClass(a, [], b, c)
                        },$$removeClassImmediately: function(a, b, c) {
                            return a = $d(a), b = u(b) ? b : je(b) ? b.join(" ") : "", f(a, function(a) {
                                Cb(a, b)
                            }), i(a, c), h()
                        },setClass: function(a, b, c, f) {
                            var h = this, i = "$$animateClasses", j = !1;
                            a = $d(a);
                            var k = a.data(i);
                            k ? f && k.options && (k.options = ge.extend(k.options || {}, f)) : (k = {classes: {},options: f}, j = !0);
                            var l = k.classes;
                            return b = je(b) ? b : b.split(" "), c = je(c) ? c : c.split(" "), g(l, b, !0), g(l, c, !1), j && (k.promise = d(function(b) {
                                var c = a.data(i);
                                if (a.removeData(i), c) {
                                    var d = e(a, c.classes);
                                    d && h.$$setClassImmediately(a, d[0], d[1], c.options)
                                }
                                b()
                            }), a.data(i, k)), k.promise
                        },$$setClassImmediately: function(a, b, c, d) {
                            return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), i(a, d), h()
                        },enabled: o,cancel: o}
                }]
        }], Ue = d("$compile");
    Zb.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ve = /^((?:x|data)[\:\-_])/i, We = "application/json", Xe = {"Content-Type": We + ";charset=utf-8"}, Ye = /^\[|^\{(?!\{)/, Ze = {"[": /]$/,"{": /}$/}, $e = /^\)\]\}',?\n/, _e = d("$interpolate"), af = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, bf = {http: 80,https: 443,ftp: 21}, cf = d("$location"), df = {$$html5: !1,$$replace: !1,absUrl: Cc("$$absUrl"),url: function(a) {
            if (r(a))
                return this.$$url;
            var b = af.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
        },protocol: Cc("$$protocol"),host: Cc("$$host"),port: Cc("$$port"),path: Dc("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
        }),search: function(a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (u(a) || v(a))
                        a = a.toString(), this.$$search = V(a);
                    else {
                        if (!t(a))
                            throw cf("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        a = K(a, {}), f(a, function(b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a
                    }
                    break;
                default:
                    r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(), this
        },hash: Dc("$$hash", function(a) {
            return null !== a ? a.toString() : ""
        }),replace: function() {
            return this.$$replace = !0, this
        }};
    f([Bc, Ac, zc], function(a) {
        a.prototype = Object.create(df), a.prototype.state = function(b) {
            if (!arguments.length)
                return this.$$state;
            if (a !== zc || !this.$$html5)
                throw cf("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = r(b) ? null : b, this
        }
    });
    var ef = d("$parse"), ff = Function.prototype.call, gf = Function.prototype.apply, hf = Function.prototype.bind, jf = jb();
    f({"null": function() {
            return null
        },"true": function() {
            return !0
        },"false": function() {
            return !1
        },undefined: function() {
        }}, function(a, b) {
        a.constant = a.literal = a.sharedGetter = !0, jf[b] = a
    }), jf["this"] = function(a) {
        return a
    }, jf["this"].sharedGetter = !0;
    var kf = l(jb(), {"+": function(a, b, d, e) {
            return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
        },"-": function(a, b, c, d) {
            return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
        },"*": function(a, b, c, d) {
            return c(a, b) * d(a, b)
        },"/": function(a, b, c, d) {
            return c(a, b) / d(a, b)
        },"%": function(a, b, c, d) {
            return c(a, b) % d(a, b)
        },"===": function(a, b, c, d) {
            return c(a, b) === d(a, b)
        },"!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b)
        },"==": function(a, b, c, d) {
            return c(a, b) == d(a, b)
        },"!=": function(a, b, c, d) {
            return c(a, b) != d(a, b)
        },"<": function(a, b, c, d) {
            return c(a, b) < d(a, b)
        },">": function(a, b, c, d) {
            return c(a, b) > d(a, b)
        },"<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b)
        },">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b)
        },"&&": function(a, b, c, d) {
            return c(a, b) && d(a, b)
        },"||": function(a, b, c, d) {
            return c(a, b) || d(a, b)
        },"!": function(a, b, c) {
            return !c(a, b)
        },"=": !0,"|": !0}), lf = {n: "\n",f: "\f",r: "\r",t: "	",v: "","'": "'",'"': '"'}, mf = function(a) {
        this.options = a
    };
    mf.prototype = {constructor: mf,lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b)
                    this.readString(b);
                else if (this.isNumber(b) || "." === b && this.isNumber(this.peek()))
                    this.readNumber();
                else if (this.isIdent(b))
                    this.readIdent();
                else if (this.is(b, "(){}[].,;:?"))
                    this.tokens.push({index: this.index,text: b}), this.index++;
                else if (this.isWhitespace(b))
                    this.index++;
                else {
                    var c = b + this.peek(), d = c + this.peek(2), e = kf[b], f = kf[c], g = kf[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({index: this.index,text: h,operator: !0}), this.index += h.length
                    } else
                        this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },is: function(a, b) {
            return -1 !== b.indexOf(a)
        },peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        },isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
        },isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },throwError: function(a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw ef("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = Ud(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c))
                    a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d))
                        a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))
                        a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))
                            break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: b,text: a,constant: !0,value: Number(a)})
        },readIdent: function() {
            for (var a = this.index; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b))
                    break;
                this.index++
            }
            this.tokens.push({index: a,text: this.text.slice(a, this.index),identifier: !0})
        },readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = lf[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f)
                    e = !0;
                else {
                    if (f === a)
                        return this.index++, void this.tokens.push({index: b,text: d,constant: !0,value: c});
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }};
    var nf = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c
    };
    nf.ZERO = l(function() {
        return 0
    }, {sharedGetter: !0,constant: !0}), nf.prototype = {constructor: nf,parse: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b
        },primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in jf ? a = jf[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b, c; b = this.expect("(", "[", "."); )
                "(" === b.text ? (a = this.functionCall(a, c), c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },throwError: function(a, b) {
            throw ef("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },peekToken: function() {
            if (0 === this.tokens.length)
                throw ef("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a], g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e)
                    return f
            }
            return !1
        },expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1
        },consume: function(a) {
            if (0 === this.tokens.length)
                throw ef("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },unaryFn: function(a, b) {
            var c = kf[a];
            return l(function(a, d) {
                return c(a, d, b)
            }, {constant: b.constant,inputs: [b]})
        },binaryFn: function(a, b, c, d) {
            var e = kf[b];
            return l(function(b, d) {
                return e(b, d, a, c)
            }, {constant: a.constant && c.constant,inputs: !d && [a, c]})
        },identifier: function() {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); )
                a += this.consume().text + this.consume().text;
            return Oc(a, this.options, this.text)
        },constant: function() {
            var a = this.consume().value;
            return l(function() {
                return a
            }, {constant: !0,literal: !0})
        },statements: function() {
            for (var a = []; ; )
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))
                    return 1 === a.length ? a[0] : function(b, c) {
                        for (var d, e = 0, f = a.length; f > e; e++)
                            d = a[e](b, c);
                        return d
                    }
        },filterChain: function() {
            for (var a, b = this.expression(); a = this.expect("|"); )
                b = this.filter(b);
            return b
        },filter: function(a) {
            var b, d, e = this.$filter(this.consume().text);
            if (this.peek(":"))
                for (b = [], d = []; this.expect(":"); )
                    b.push(this.expression());
            var f = [a].concat(b || []);
            return l(function(f, g) {
                var h = a(f, g);
                if (d) {
                    d[0] = h;
                    for (var i = b.length; i--; )
                        d[i + 1] = b[i](f, g);
                    return e.apply(c, d)
                }
                return e(h)
            }, {constant: !e.$stateful && f.every(Jc),inputs: !e.$stateful && f})
        },expression: function() {
            return this.assignment()
        },assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), l(function(b, d) {
                return c.assign(b, a(b, d), d)
            }, {inputs: [c, a]})) : c
        },ternary: function() {
            var a, b, c = this.logicalOR();
            if ((b = this.expect("?")) && (a = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return l(function(b, e) {
                    return c(b, e) ? a(b, e) : d(b, e)
                }, {constant: c.constant && a.constant && d.constant})
            }
            return c
        },logicalOR: function() {
            for (var a, b = this.logicalAND(); a = this.expect("||"); )
                b = this.binaryFn(b, a.text, this.logicalAND(), !0);
            return b
        },logicalAND: function() {
            for (var a, b = this.equality(); a = this.expect("&&"); )
                b = this.binaryFn(b, a.text, this.equality(), !0);
            return b
        },equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!=="); )
                b = this.binaryFn(b, a.text, this.relational());
            return b
        },relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">="); )
                b = this.binaryFn(b, a.text, this.additive());
            return b
        },additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); )
                b = this.binaryFn(b, a.text, this.multiplicative());
            return b
        },multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); )
                b = this.binaryFn(b, a.text, this.unary());
            return b
        },unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(nf.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        },fieldAccess: function(a) {
            var b = this.identifier();
            return l(function(d, e, f) {
                var g = f || a(d, e);
                return null == g ? c : b(g)
            }, {assign: function(c, d, e) {
                    var f = a(c, e);
                    return f || a.assign(c, f = {}, e), b.assign(f, d)
                }})
        },objectIndex: function(a) {
            var b = this.text, d = this.expression();
            return this.consume("]"), l(function(e, f) {
                var g, h = a(e, f), i = d(e, f);
                return Gc(i, b), h ? g = Hc(h[i], b) : c
            }, {assign: function(c, e, f) {
                    var g = Gc(d(c, f), b), h = Hc(a(c, f), b);
                    return h || a.assign(c, h = {}, f), h[g] = e
                }})
        },functionCall: function(a, b) {
            var d = [];
            if (")" !== this.peekToken().text)
                do
                    d.push(this.expression());
                while (this.expect(","));
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function(g, h) {
                var i = b ? b(g, h) : s(b) ? c : g, j = a(g, h, i) || o;
                if (f)
                    for (var k = d.length; k--; )
                        f[k] = Hc(d[k](g, h), e);
                Hc(i, e), Ic(j, e);
                var l = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]);
                return Hc(l, e)
            }
        },arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]"))
                        break;
                    a.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), l(function(b, c) {
                for (var d = [], e = 0, f = a.length; f > e; e++)
                    d.push(a[e](b, c));
                return d
            }, {literal: !0,constant: a.every(Jc),inputs: a})
        },object: function() {
            var a = [], b = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}"))
                        break;
                    var c = this.consume();
                    c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), this.consume(":"), b.push(this.expression())
                } while (this.expect(","));
            return this.consume("}"), l(function(c, d) {
                for (var e = {}, f = 0, g = b.length; g > f; f++)
                    e[a[f]] = b[f](c, d);
                return e
            }, {literal: !0,constant: b.every(Jc),inputs: b})
        }};
    var of = jb(), pf = jb(), qf = Object.prototype.valueOf, rf = d("$sce"), sf = {HTML: "html",CSS: "css",URL: "url",RESOURCE_URL: "resourceUrl",JS: "js"}, Ue = d("$compile"), tf = b.createElement("a"), uf = dd(a.location.href);
    gd.$inject = ["$provide"], kd.$inject = ["$locale"], ld.$inject = ["$locale"];
    var vf = ".", wf = {yyyy: od("FullYear", 4),yy: od("FullYear", 2, 0, !0),y: od("FullYear", 1),MMMM: pd("Month"),MMM: pd("Month", !0),MM: od("Month", 2, 1),M: od("Month", 1, 1),dd: od("Date", 2),d: od("Date", 1),HH: od("Hours", 2),H: od("Hours", 1),hh: od("Hours", 2, -12),h: od("Hours", 1, -12),mm: od("Minutes", 2),m: od("Minutes", 1),ss: od("Seconds", 2),s: od("Seconds", 1),sss: od("Milliseconds", 3),EEEE: pd("Day"),EEE: pd("Day", !0),a: ud,Z: qd,ww: td(2),w: td(1)}, xf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, yf = /^\-?\d+$/;
    vd.$inject = ["$locale"];
    var zf = q(Ud), Af = q(Wd);
    yd.$inject = ["$parse"];
    var Bf = q({restrict: "E",compile: function(a, b) {
            return b.href || b.xlinkHref || b.name ? void 0 : function(a, b) {
                var c = "[object SVGAnimatedString]" === ee.call(b.prop("href")) ? "xlink:href" : "href";
                b.on("click", function(a) {
                    b.attr(c) || a.preventDefault()
                })
            }
        }}), Cf = {};
    f(Ke, function(a, b) {
        if ("multiple" != a) {
            var c = $b("ng-" + b);
            Cf[c] = function() {
                return {restrict: "A",priority: 100,link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !!a)
                        })
                    }}
            }
        }
    }), f(Me, function(a, b) {
        Cf[b] = function() {
            return {priority: 100,link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(Sd);
                        if (e)
                            return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a)
                    })
                }}
        }
    }), f(["src", "srcset", "href"], function(a) {
        var b = $b("ng-" + a);
        Cf[b] = function() {
            return {priority: 99,link: function(c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === ee.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void (Zd && f && d.prop(f, e[g]))) : void ("href" === a && e.$set(g, null))
                    })
                }}
        }
    });
    var Df = {$addControl: o,$$renameControl: Ad,$removeControl: o,$setValidity: o,$setDirty: o,$setPristine: o,$setSubmitted: o}, Ef = "ng-submitted";
    Bd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Ff = function(a) {
        return ["$timeout", function(b) {
                var d = {name: "form",restrict: a ? "EAC" : "E",controller: Bd,compile: function(a) {
                        return a.addClass(lg).addClass(jg), {pre: function(a, d, e, f) {
                                if (!("action" in e)) {
                                    var g = function(b) {
                                        a.$apply(function() {
                                            f.$commitViewValue(), f.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    ye(d[0], "submit", g), d.on("$destroy", function() {
                                        b(function() {
                                            ze(d[0], "submit", g)
                                        }, 0, !1)
                                    })
                                }
                                var h = f.$$parentForm, i = f.$name;
                                i && (Kc(a, null, i, f, i), e.$observe(e.name ? "name" : "ngForm", function(b) {
                                    i !== b && (Kc(a, null, i, c, i), i = b, Kc(a, null, i, f, i), h.$$renameControl(f, i))
                                })), d.on("$destroy", function() {
                                    h.$removeControl(f), i && Kc(a, null, i, c, i), l(f, Df)
                                })
                            }}
                    }};
                return d
            }]
    }, Gf = Ff(), Hf = Ff(!0), If = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Jf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Kf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Lf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Mf = /^(\d{4})-(\d{2})-(\d{2})$/, Nf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Of = /^(\d{4})-W(\d\d)$/, Pf = /^(\d{4})-(\d\d)$/, Qf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Rf = {text: Dd,date: Hd("date", Mf, Gd(Mf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),"datetime-local": Hd("datetimelocal", Nf, Gd(Nf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),time: Hd("time", Qf, Gd(Qf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),week: Hd("week", Of, Fd, "yyyy-Www"),month: Hd("month", Pf, Gd(Pf, ["yyyy", "MM"]), "yyyy-MM"),number: Jd,url: Kd,email: Ld,radio: Md,checkbox: Od,hidden: o,button: o,submit: o,reset: o,file: o}, Sf = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
            return {restrict: "E",require: ["?ngModel"],link: {pre: function(e, f, g, h) {
                        h[0] && (Rf[Ud(g.type)] || Rf.text)(e, f, g, h[0], b, a, c, d)
                    }}}
        }], Tf = /^(true|false|\d+)$/, Uf = function() {
        return {restrict: "A",priority: 100,compile: function(a, b) {
                return Tf.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue))
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a)
                    })
                }
            }}
    }, Vf = ["$compile", function(a) {
            return {restrict: "AC",compile: function(b) {
                    return a.$$addBindingClass(b), function(b, d, e) {
                        a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                            d.textContent = a === c ? "" : a
                        })
                    }
                }}
        }], Wf = ["$interpolate", "$compile", function(a, b) {
            return {compile: function(d) {
                    return b.$$addBindingClass(d), function(d, e, f) {
                        var g = a(e.attr(f.$attr.ngBindTemplate));
                        b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                            e.textContent = a === c ? "" : a
                        })
                    }
                }}
        }], Xf = ["$sce", "$parse", "$compile", function(a, b, c) {
            return {restrict: "A",compile: function(d, e) {
                    var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(a) {
                        return (a || "").toString()
                    });
                    return c.$$addBindingClass(d), function(b, d, e) {
                        c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                            d.html(a.getTrustedHtml(f(b)) || "")
                        })
                    }
                }}
        }], Yf = q({restrict: "A",require: "ngModel",link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange)
            })
        }}), Zf = Pd("", !0), $f = Pd("Odd", 0), _f = Pd("Even", 1), ag = zd({compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak")
        }}), bg = [function() {
            return {restrict: "A",scope: !0,controller: "@",priority: 500}
        }], cg = {}, dg = {blur: !0,focus: !0};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = $b("ng-" + a);
        cg[b] = ["$parse", "$rootScope", function(c, d) {
                return {restrict: "A",compile: function(e, f) {
                        var g = c(f[b], null, !0);
                        return function(b, c) {
                            c.on(a, function(c) {
                                var e = function() {
                                    g(b, {$event: c})
                                };
                                dg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                            })
                        }
                    }}
            }]
    });
    var eg = ["$animate", function(a) {
            return {multiElement: !0,transclude: "element",priority: 600,terminal: !0,restrict: "A",$$tlb: !0,link: function(c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function(c) {
                        c ? i || g(function(c, f) {
                            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {clone: c}, a.enter(c, d.parent(), d)
                        }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ib(h.clone), a.leave(j).then(function() {
                            j = null
                        }), h = null))
                    })
                }}
        }], fg = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, b, c, d) {
            return {restrict: "ECA",priority: 400,terminal: !0,transclude: "element",controller: ge.noop,compile: function(e, f) {
                    var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                    return function(e, f, j, k, l) {
                        var m, n, o, p = 0, q = function() {
                            n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function() {
                                n = null
                            }), n = o, o = null)
                        };
                        e.$watch(d.parseAsResourceUrl(g), function(d) {
                            var g = function() {
                                !s(i) || i && !e.$eval(i) || b()
                            }, j = ++p;
                            d ? (a(d, !0).then(function(a) {
                                if (j === p) {
                                    var b = e.$new();
                                    k.template = a;
                                    var i = l(b, function(a) {
                                        q(), c.enter(a, null, f).then(g)
                                    });
                                    m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h)
                                }
                            }, function() {
                                j === p && (q(), e.$emit("$includeContentError", d))
                            }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                        })
                    }
                }}
        }], gg = ["$compile", function(a) {
            return {restrict: "ECA",priority: -400,require: "ngInclude",link: function(c, d, e, f) {
                    return /SVG/.test(d[0].toString()) ? (d.empty(), void a(sb(f.template, b).childNodes)(c, function(a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), void a(d.contents())(c))
                }}
        }], hg = zd({priority: 450,compile: function() {
            return {pre: function(a, b, c) {
                    a.$eval(c.ngInit)
                }}
        }}), ig = function() {
        return {restrict: "A",priority: 100,require: "ngModel",link: function(a, b, d, e) {
                var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? ke(g) : g, j = function(a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(i), function(a) {
                            a && b.push(h ? ke(a) : a)
                        }), b
                    }
                };
                e.$parsers.push(j), e.$formatters.push(function(a) {
                    return je(a) ? a.join(g) : c
                }), e.$isEmpty = function(a) {
                    return !a || !a.length
                }
            }}
    }, jg = "ng-valid", kg = "ng-invalid", lg = "ng-pristine", mg = "ng-dirty", ng = "ng-untouched", og = "ng-touched", pg = "ng-pending", qg = new d("ngModel"), rg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
            var m = g(d.ngModel), n = m.assign, p = m, q = n, t = null, u = this;
            this.$$setOptions = function(a) {
                if (u.$options = a, a && a.getterSetter) {
                    var b = g(d.ngModel + "()"), c = g(d.ngModel + "($$$p)");
                    p = function(a) {
                        var c = m(a);
                        return x(c) && (c = b(a)), c
                    }, q = function(a) {
                        x(m(a)) ? c(a, {$$$p: u.$modelValue}) : n(a, u.$modelValue)
                    }
                } else if (!m.assign)
                    throw qg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, T(e))
            }, this.$render = o, this.$isEmpty = function(a) {
                return r(a) || "" === a || null === a || a !== a
            };
            var w = e.inheritedData("$formController") || Df, y = 0;
            Qd({ctrl: this,$element: e,set: function(a, b) {
                    a[b] = !0
                },unset: function(a, b) {
                    delete a[b]
                },parentForm: w,$animate: h}), this.$setPristine = function() {
                u.$dirty = !1, u.$pristine = !0, h.removeClass(e, mg), h.addClass(e, lg)
            }, this.$setDirty = function() {
                u.$dirty = !0, u.$pristine = !1, h.removeClass(e, lg), h.addClass(e, mg), w.$setDirty()
            }, this.$setUntouched = function() {
                u.$touched = !1, u.$untouched = !0, h.setClass(e, ng, og)
            }, this.$setTouched = function() {
                u.$touched = !0, u.$untouched = !1, h.setClass(e, og, ng)
            }, this.$rollbackViewValue = function() {
                i.cancel(t), u.$viewValue = u.$$lastCommittedViewValue, u.$render()
            }, this.$validate = function() {
                if (!v(u.$modelValue) || !isNaN(u.$modelValue)) {
                    var a = u.$$lastCommittedViewValue, b = u.$$rawModelValue, d = u.$$parserName || "parse", e = u.$error[d] ? !1 : c, f = u.$valid, g = u.$modelValue, h = u.$options && u.$options.allowInvalid;
                    u.$$runValidators(e, b, a, function(a) {
                        h || f === a || (u.$modelValue = a ? b : c, u.$modelValue !== g && u.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(a, b, d, e) {
                function g(a) {
                    var b = u.$$parserName || "parse";
                    if (a === c)
                        j(b, null);
                    else if (j(b, a), !a)
                        return f(u.$validators, function(a, b) {
                            j(b, null)
                        }), f(u.$asyncValidators, function(a, b) {
                            j(b, null)
                        }), !1;
                    return !0
                }
                function h() {
                    var a = !0;
                    return f(u.$validators, function(c, e) {
                        var f = c(b, d);
                        a = a && f, j(e, f)
                    }), a ? !0 : (f(u.$asyncValidators, function(a, b) {
                        j(b, null)
                    }), !1)
                }
                function i() {
                    var a = [], e = !0;
                    f(u.$asyncValidators, function(f, g) {
                        var h = f(b, d);
                        if (!F(h))
                            throw qg("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                        j(g, c), a.push(h.then(function() {
                            j(g, !0)
                        }, function() {
                            e = !1, j(g, !1)
                        }))
                    }), a.length ? k.all(a).then(function() {
                        l(e)
                    }, o) : l(!0)
                }
                function j(a, b) {
                    m === y && u.$setValidity(a, b)
                }
                function l(a) {
                    m === y && e(a)
                }
                y++;
                var m = y;
                return g(a) && h() ? void i() : void l(!1)
            }, this.$commitViewValue = function() {
                var a = u.$viewValue;
                i.cancel(t), (u.$$lastCommittedViewValue !== a || "" === a && u.$$hasNativeValidators) && (u.$$lastCommittedViewValue = a, u.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function b() {
                    u.$modelValue !== h && u.$$writeModelToScope()
                }
                var d = u.$$lastCommittedViewValue, e = d, f = r(e) ? c : !0;
                if (f)
                    for (var g = 0; g < u.$parsers.length; g++)
                        if (e = u.$parsers[g](e), r(e)) {
                            f = !1;
                            break
                        }
                v(u.$modelValue) && isNaN(u.$modelValue) && (u.$modelValue = p(a));
                var h = u.$modelValue, i = u.$options && u.$options.allowInvalid;
                u.$$rawModelValue = e, i && (u.$modelValue = e, b()), u.$$runValidators(f, e, u.$$lastCommittedViewValue, function(a) {
                    i || (u.$modelValue = a ? e : c, b())
                })
            }, this.$$writeModelToScope = function() {
                q(a, u.$modelValue), f(u.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function(a, b) {
                u.$viewValue = a, (!u.$options || u.$options.updateOnDefault) && u.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function(b) {
                var c, d = 0, e = u.$options;
                e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), i.cancel(t), d ? t = i(function() {
                    u.$commitViewValue()
                }, d) : j.$$phase ? u.$commitViewValue() : a.$apply(function() {
                    u.$commitViewValue()
                })
            }, a.$watch(function() {
                var b = p(a);
                if (b !== u.$modelValue) {
                    u.$modelValue = u.$$rawModelValue = b;
                    for (var d = u.$formatters, e = d.length, f = b; e--; )
                        f = d[e](f);
                    u.$viewValue !== f && (u.$viewValue = u.$$lastCommittedViewValue = f, u.$render(), u.$$runValidators(c, b, f, o))
                }
                return b
            })
        }], sg = ["$rootScope", function(a) {
            return {restrict: "A",require: ["ngModel", "^?form", "^?ngModelOptions"],controller: rg,priority: 1,compile: function(b) {
                    return b.addClass(lg).addClass(ng).addClass(jg), {pre: function(a, b, c, d) {
                            var e = d[0], f = d[1] || Df;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                                e.$name !== a && f.$$renameControl(e, a)
                            }), a.$on("$destroy", function() {
                                f.$removeControl(e)
                            })
                        },post: function(b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function() {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }}
                }}
        }], tg = /(\s+|^)default(\s+|$)/, ug = function() {
        return {restrict: "A",controller: ["$scope", "$attrs", function(a, b) {
                    var d = this;
                    this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = ke(this.$options.updateOn.replace(tg, function() {
                        return d.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]}
    }, vg = zd({terminal: !0,priority: 1e3}), wg = ["$locale", "$interpolate", function(a, b) {
            var c = /{}/g, d = /^when(Minus)?(.+)$/;
            return {restrict: "EA",link: function(e, g, h) {
                    function i(a) {
                        g.text(a || "")
                    }
                    var j, k = h.count, l = h.$attr.when && g.attr(h.$attr.when), m = h.offset || 0, n = e.$eval(l) || {}, o = {}, p = b.startSymbol(), q = b.endSymbol(), r = p + k + "-" + m + q, s = ge.noop;
                    f(h, function(a, b) {
                        var c = d.exec(b);
                        if (c) {
                            var e = (c[1] ? "-" : "") + Ud(c[2]);
                            n[e] = g.attr(h.$attr[b])
                        }
                    }), f(n, function(a, d) {
                        o[d] = b(a.replace(c, r))
                    }), e.$watch(k, function(b) {
                        var c = parseFloat(b), d = isNaN(c);
                        d || c in n || (c = a.pluralCat(c - m)), c === j || d && isNaN(j) || (s(), s = e.$watch(o[c], i), j = c)
                    })
                }}
        }], xg = ["$parse", "$animate", function(a, g) {
            var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function(a, b, c, d, e, f, g) {
                a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
            }, k = function(a) {
                return a.clone[0]
            }, l = function(a) {
                return a.clone[a.clone.length - 1]
            };
            return {restrict: "A",multiElement: !0,transclude: "element",priority: 1e3,terminal: !0,$$tlb: !0,compile: function(d, m) {
                    var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!p)
                        throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                    var q = p[1], r = p[2], s = p[3], t = p[4];
                    if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p)
                        throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                    var u = p[3] || p[1], v = p[2];
                    if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))
                        throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                    var w, x, y, z, A = {$id: Ob};
                    return t ? w = a(t) : (y = function(a, b) {
                        return Ob(b)
                    }, z = function(a) {
                        return a
                    }), function(a, b, d, m, p) {
                        w && (x = function(b, c, d) {
                            return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                        });
                        var q = jb();
                        a.$watchCollection(r, function(d) {
                            var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = jb();
                            if (s && (a[s] = d), e(d))
                                E = d, D = x || y;
                            else {
                                D = x || z, E = [];
                                for (var K in d)
                                    d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                                E.sort()
                            }
                            for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                                if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C])
                                    F = q[C], delete q[C], J[C] = F, G[m] = F;
                                else {
                                    if (J[C])
                                        throw f(G, function(a) {
                                            a && a.scope && (q[a.id] = a)
                                        }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                    G[m] = {id: C,scope: c,clone: c}, J[C] = !0
                                }
                            for (var L in q) {
                                if (F = q[L], H = ib(F.clone), g.leave(H), H[0].parentNode)
                                    for (m = 0, r = H.length; r > m; m++)
                                        H[m][h] = !0;
                                F.scope.$destroy()
                            }
                            for (m = 0; w > m; m++)
                                if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                    t = I;
                                    do
                                        t = t.nextSibling;
                                    while (t && t[h]);
                                    k(F) != t && g.move(ib(F.clone), null, $d(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                                } else
                                    p(function(a, b) {
                                        F.scope = b;
                                        var c = o.cloneNode(!1);
                                        a[a.length++] = c, g.enter(a, null, $d(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                                    });
                            q = J
                        })
                    }
                }}
        }], yg = "ng-hide", zg = "ng-hide-animate", Ag = ["$animate", function(a) {
            return {restrict: "A",multiElement: !0,link: function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[b ? "removeClass" : "addClass"](c, yg, {tempClasses: zg})
                    })
                }}
        }], Bg = ["$animate", function(a) {
            return {restrict: "A",multiElement: !0,link: function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[b ? "addClass" : "removeClass"](c, yg, {tempClasses: zg})
                    })
                }}
        }], Cg = zd(function(a, b, c) {
        a.$watchCollection(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "")
            }), a && b.css(a)
        })
    }), Dg = ["$animate", function(a) {
            return {restrict: "EA",require: "ngSwitch",controller: ["$scope", function() {
                        this.cases = {}
                    }],link: function(c, d, e, g) {
                    var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function(a, b) {
                        return function() {
                            a.splice(b, 1)
                        }
                    };
                    c.$watch(h, function(c) {
                        var d, e;
                        for (d = 0, e = k.length; e > d; ++d)
                            a.cancel(k[d]);
                        for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                            var h = ib(j[d].clone);
                            l[d].$destroy();
                            var n = k[d] = a.leave(h);
                            n.then(m(k, d))
                        }
                        j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                            c.transclude(function(d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                var g = {clone: d};
                                j.push(g), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }}
        }], Eg = zd({transclude: "element",priority: 1200,require: "^ngSwitch",multiElement: !0,link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({transclude: e,element: b})
        }}), Fg = zd({transclude: "element",priority: 1200,require: "^ngSwitch",multiElement: !0,link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e,element: b})
        }}), Gg = zd({restrict: "EAC",link: function(a, b, c, e, f) {
            if (!f)
                throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
            f(function(a) {
                b.empty(), b.append(a)
            })
        }}), Hg = ["$templateCache", function(a) {
            return {restrict: "E",terminal: !0,compile: function(b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id, e = b[0].text;
                        a.put(d, e)
                    }
                }}
        }], Ig = d("ngOptions"), Jg = q({restrict: "A",terminal: !0}), Kg = ["$compile", "$parse", function(a, d) {
            var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {$setViewValue: o};
            return {restrict: "E",require: ["select", "?ngModel"],controller: ["$element", "$scope", "$attrs", function(a, b, c) {
                        var d, e, f = this, g = {}, i = h;
                        f.databound = c.ngModel, f.init = function(a, b, c) {
                            i = a, d = b, e = c
                        }, f.addOption = function(b, c) {
                            gb(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), c && c[0].hasAttribute("selected") && (c[0].selected = !0)
                        }, f.removeOption = function(a) {
                            this.hasOption(a) && (delete g[a], i.$viewValue === a && this.renderUnknownOption(a))
                        }, f.renderUnknownOption = function(b) {
                            var c = "? " + Ob(b) + " ?";
                            e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                        }, f.hasOption = function(a) {
                            return g.hasOwnProperty(a)
                        }, b.$on("$destroy", function() {
                            f.renderUnknownOption = o
                        })
                    }],link: function(h, i, j, k) {
                    function l(a, b, c, d) {
                        c.$render = function() {
                            var a = c.$viewValue;
                            d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                        }, b.on("change", function() {
                            a.$apply(function() {
                                z.parent() && z.remove(), c.$setViewValue(b.val())
                            })
                        })
                    }
                    function m(a, b, c) {
                        var d;
                        c.$render = function() {
                            var a = new Pb(c.$viewValue);
                            f(b.find("option"), function(b) {
                                b.selected = s(a.get(b.value))
                            })
                        }, a.$watch(function() {
                            M(d, c.$viewValue) || (d = L(c.$viewValue), c.$render())
                        }), b.on("change", function() {
                            a.$apply(function() {
                                var a = [];
                                f(b.find("option"), function(b) {
                                    b.selected && a.push(b.value)
                                }), c.$setViewValue(a)
                            })
                        })
                    }
                    function n(b, h, i) {
                        function j(a, c, d) {
                            return M[B] = d, E && (M[E] = c), a(b, M)
                        }
                        function k() {
                            b.$apply(function() {
                                var a, c = H(b) || [];
                                if (t)
                                    a = [], f(h.val(), function(b) {
                                        b = J ? K[b] : b, a.push(l(b, c[b]))
                                    });
                                else {
                                    var d = J ? K[h.val()] : h.val();
                                    a = l(d, c[d])
                                }
                                i.$setViewValue(a), r()
                            })
                        }
                        function l(a, b) {
                            if ("?" === a)
                                return c;
                            if ("" === a)
                                return null;
                            var d = D ? D : G;
                            return j(d, a, b)
                        }
                        function m() {
                            var a, c = H(b);
                            if (c && je(c)) {
                                a = new Array(c.length);
                                for (var d = 0, e = c.length; e > d; d++)
                                    a[d] = j(A, d, c[d]);
                                return a
                            }
                            if (c) {
                                a = {};
                                for (var f in c)
                                    c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]))
                            }
                            return a
                        }
                        function n(a) {
                            var b;
                            if (t)
                                if (J && je(a)) {
                                    b = new Pb([]);
                                    for (var c = 0; c < a.length; c++)
                                        b.put(j(J, null, a[c]), !0)
                                } else
                                    b = new Pb(a);
                            else
                                J && (a = j(J, null, a));
                            return function(c, d) {
                                var e;
                                return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a === j(e, c, d)
                            }
                        }
                        function o() {
                            w || (b.$$postDigest(r), w = !0)
                        }
                        function q(a, b, c) {
                            a[b] = a[b] || 0, a[b] += c ? 1 : -1
                        }
                        function r() {
                            w = !1;
                            var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, N, O = {"": []}, P = [""], Q = i.$viewValue, R = H(b) || [], S = E ? g(R) : R, T = {}, U = n(Q), V = !1;
                            for (K = {}, B = 0; u = S.length, u > B; B++)
                                m = B, E && (m = S[B], "$" === m.charAt(0)) || (o = R[m], a = j(F, m, o) || "", (c = O[a]) || (c = O[a] = [], P.push(a)), C = U(m, o), V = V || C, I = j(A, m, o), I = s(I) ? I : "", N = J ? J(b, M) : E ? S[B] : B, J && (K[N] = m), c.push({id: N,label: I,selected: C}));
                            for (t || (v || null === Q ? O[""].unshift({id: "",label: "",selected: !V}) : V || O[""].unshift({id: "?",label: "",selected: !0})), z = 0, r = P.length; r > z; z++) {
                                for (a = P[z], c = O[a], L.length <= z ? (e = {element: y.clone().attr("label", a),label: c.label}, k = [e], L.push(k), h.append(e.element)) : (k = L[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, u = c.length; u > B; B++)
                                    d = c[B], (l = k[B + 1]) ? (D = l.element, l.label !== d.label && (q(T, l.label, !1), q(T, d.label, !0), D.text(l.label = d.label), D.prop("label", l.label)), l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), Zd && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), k.push(l = {element: G,label: d.label,id: d.id,selected: d.selected}), q(T, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                                for (B++; k.length > B; )
                                    d = k.pop(), q(T, d.label, !1), d.element.remove()
                            }
                            for (; L.length > z; ) {
                                for (c = L.pop(), B = 1; B < c.length; ++B)
                                    q(T, c[B].label, !1);
                                c[0].element.remove()
                            }
                            f(T, function(a, b) {
                                a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b)
                            })
                        }
                        var z;
                        if (!(z = u.match(e)))
                            throw Ig("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(h));
                        var A = d(z[2] || z[1]), B = z[4] || z[6], C = / as /.test(z[0]) && z[1], D = C ? d(C) : null, E = z[5], F = d(z[3] || ""), G = d(z[2] ? z[1] : B), H = d(z[7]), I = z[8], J = I ? d(z[8]) : null, K = {}, L = [[{element: h,label: ""}]], M = {};
                        v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function() {
                            return i.$modelValue
                        }, o)
                    }
                    if (k[1]) {
                        for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = $d(b.createElement("option")), y = $d(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
                            if ("" === B[A].value) {
                                o = v = B.eq(A);
                                break
                            }
                        p.init(q, v, z), t && (q.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                    }
                }}
        }], Lg = ["$interpolate", function(a) {
            var b = {addOption: o,removeOption: o};
            return {restrict: "E",priority: 100,compile: function(c, d) {
                    if (r(d.value)) {
                        var e = a(c.text(), !0);
                        e || d.$set("value", c.text())
                    }
                    return function(a, c, d) {
                        var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                        h && h.databound || (h = b), e ? a.$watch(e, function(a, b) {
                            d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c)
                        }) : h.addOption(d.value, c), c.on("$destroy", function() {
                            h.removeOption(d.value)
                        })
                    }
                }}
        }], Mg = q({restrict: "E",terminal: !1}), Ng = function() {
        return {restrict: "A",require: "?ngModel",link: function(a, b, c, d) {
                d && (c.required = !0, d.$validators.required = function(a, b) {
                    return !c.required || !d.$isEmpty(b)
                }, c.$observe("required", function() {
                    d.$validate()
                }))
            }}
    }, Og = function() {
        return {restrict: "A",require: "?ngModel",link: function(a, b, e, f) {
                if (f) {
                    var g, h = e.ngPattern || e.pattern;
                    e.$observe("pattern", function(a) {
                        if (u(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test)
                            throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, T(b));
                        g = a || c, f.$validate()
                    }), f.$validators.pattern = function(a) {
                        return f.$isEmpty(a) || r(g) || g.test(a)
                    }
                }
            }}
    }, Pg = function() {
        return {restrict: "A",require: "?ngModel",link: function(a, b, c, d) {
                if (d) {
                    var e = -1;
                    c.$observe("maxlength", function(a) {
                        var b = m(a);
                        e = isNaN(b) ? -1 : b, d.$validate()
                    }), d.$validators.maxlength = function(a, b) {
                        return 0 > e || d.$isEmpty(a) || b.length <= e
                    }
                }
            }}
    }, Qg = function() {
        return {restrict: "A",require: "?ngModel",link: function(a, b, c, d) {
                if (d) {
                    var e = 0;
                    c.$observe("minlength", function(a) {
                        e = m(a) || 0, d.$validate()
                    }), d.$validators.minlength = function(a, b) {
                        return d.$isEmpty(b) || b.length >= e
                    }
                }
            }}
    };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (db(), nb(ge), void $d(b).ready(function() {
        $(b, _)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
if (+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
        for (var c in b)
            if (void 0 !== a.style[c])
                return {end: b[c]};
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {bindType: a.support.transition.end,delegateType: a.support.transition.end,handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }})
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.2", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 600, c.DEFAULTS = {interval: 5e3,pause: "hover",wrap: !0,keyboard: !0}, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j,direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j,direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0,trigger: '[data-toggle="collapse"]'}, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : a.extend({}, e.data(), {trigger: this});
        c.call(f, h)
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this), e = c(d), f = {relatedTarget: this};
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.2", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)
                    return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), +function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {backdrop: !0,keyboard: !0,show: !0}, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }, c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""})
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "",paddingRight: ""})
    }, c.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1,viewport: {selector: "body",padding: 0}}, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {show: b.delay,hide: b.delay}), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({top: 0,left: 0,display: "block"}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({using: function(a) {
                d.css({top: Math.round(a.top),left: Math.round(a.left)})
            }}, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this, f = this.tip(), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left,height: e.bottom - e.top}));
        var f = d ? {top: 0,left: 0} : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {width: a(window).width(),height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {top: b.top + b.height,left: b.left + b.width / 2 - c / 2} : "top" == a ? {top: b.top - d,left: b.left + b.width / 2 - c / 2} : "left" == a ? {top: b.top + b.height / 2 - d / 2,left: b.left - c} : {top: b.top + b.height / 2 - d / 2,left: b.left + b.width}
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {top: 0,left: 0};
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.2", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {placement: "right",trigger: "click",content: "",template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), +function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.2", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null, this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({type: "hidden.bs.tab",relatedTarget: b[0]}), b.trigger({type: "shown.bs.tab",relatedTarget: e[0]})
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.2", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {offset: 0,target: window}, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())
                    return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), function(a, b, c) {
    "use strict";
    b.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
        var a = "$$ngAnimateChildren";
        return function(c, d, e) {
            var f = e.ngAnimateChildren;
            b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function(b) {
                d.data(a, !!b)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function(a, b) {
            var c = b[0].body;
            return function(b) {
                return a(function() {
                    c.offsetWidth + 1;
                    b()
                })
            }
        }]).config(["$provide", "$animateProvider", function(d, e) {
            function f(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c.nodeType == q)
                        return c
                }
            }
            function g(a) {
                return a && b.element(a)
            }
            function h(a) {
                return b.element(f(a))
            }
            function i(a, b) {
                return f(a) == f(b)
            }
            var j, k = b.noop, l = b.forEach, m = e.$$selectors, n = b.isArray, o = b.isString, p = b.isObject, q = 1, r = "$$ngAnimateState", s = "$$ngAnimateChildren", t = "ng-animate", u = {running: !0};
            d.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(a, c, d, q, v, w, x, y, z, A) {
                    function B(a, b) {
                        var c = a.data(r) || {};
                        return b && (c.running = !0, c.structural = !0, a.data(r, c)), c.disabled || c.running && c.structural
                    }
                    function C(a) {
                        var b, d = c.defer();
                        return d.promise.$$cancelFn = function() {
                            b && b()
                        }, x.$$postDigest(function() {
                            b = a(function() {
                                d.resolve()
                            })
                        }), d.promise
                    }
                    function D(a) {
                        return p(a) ? (a.tempClasses && o(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a) : void 0
                    }
                    function E(a, b, c) {
                        c = c || {};
                        var d = {};
                        l(c, function(a, b) {
                            l(b.split(" "), function(b) {
                                d[b] = a
                            })
                        });
                        var e = Object.create(null);
                        l((a.attr("class") || "").split(/\s+/), function(a) {
                            e[a] = !0
                        });
                        var f = [], g = [];
                        return l(b && b.classes || [], function(a, b) {
                            var c = e[b], h = d[b] || {};
                            a === !1 ? (c || "addClass" == h.event) && g.push(b) : a === !0 && (c && "removeClass" != h.event || f.push(b))
                        }), f.length + g.length > 0 && [f.join(" "), g.join(" ")]
                    }
                    function F(a) {
                        if (a) {
                            var b = [], c = {}, e = a.substr(1).split(".");
                            (q.transitions || q.animations) && b.push(d.get(m[""]));
                            for (var f = 0; f < e.length; f++) {
                                var g = e[f], h = m[g];
                                h && !c[g] && (b.push(d.get(h)), c[g] = !0)
                            }
                            return b
                        }
                    }
                    function G(a, c, d, e) {
                        function f(a, b) {
                            var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                            return c || d ? ("leave" == b && (d = c, c = null), w.push({event: b,fn: c}), t.push({event: b,fn: d}), !0) : void 0
                        }
                        function g(b, c, f) {
                            function g(a) {
                                if (c) {
                                    if ((c[a] || k)(), ++m < h.length)
                                        return;
                                    c = null
                                }
                                f()
                            }
                            var h = [];
                            l(b, function(a) {
                                a.fn && h.push(a)
                            });
                            var m = 0;
                            l(h, function(b, f) {
                                var h = function() {
                                    g(f)
                                };
                                switch (b.event) {
                                    case "setClass":
                                        c.push(b.fn(a, i, j, h, e));
                                        break;
                                    case "animate":
                                        c.push(b.fn(a, d, e.from, e.to, h));
                                        break;
                                    case "addClass":
                                        c.push(b.fn(a, i || d, h, e));
                                        break;
                                    case "removeClass":
                                        c.push(b.fn(a, j || d, h, e));
                                        break;
                                    default:
                                        c.push(b.fn(a, h, e))
                                }
                            }), c && 0 === c.length && f()
                        }
                        var h = a[0];
                        if (h) {
                            e && (e.to = e.to || {}, e.from = e.from || {});
                            var i, j;
                            n(d) && (i = d[0], j = d[1], i ? j ? d = i + " " + j : (d = i, c = "addClass") : (d = j, c = "removeClass"));
                            var m = "setClass" == c, o = m || "addClass" == c || "removeClass" == c || "animate" == c, p = a.attr("class"), q = p + " " + d;
                            if (O(q)) {
                                var r = k, s = [], t = [], u = k, v = [], w = [], x = (" " + q).replace(/\s+/g, ".");
                                return l(F(x), function(a) {
                                    var b = f(a, c);
                                    !b && m && (f(a, "addClass"), f(a, "removeClass"))
                                }), {node: h,event: c,className: d,isClassBased: o,isSetClassOperation: m,applyStyles: function() {
                                        e && a.css(b.extend(e.from || {}, e.to || {}))
                                    },before: function(a) {
                                        r = a, g(t, s, function() {
                                            r = k, a()
                                        })
                                    },after: function(a) {
                                        u = a, g(w, v, function() {
                                            u = k, a()
                                        })
                                    },cancel: function() {
                                        s && (l(s, function(a) {
                                            (a || k)(!0)
                                        }), r(!0)), v && (l(v, function(a) {
                                            (a || k)(!0)
                                        }), u(!0))
                                    }}
                            }
                        }
                    }
                    function H(a, c, d, e, f, g, h, i) {
                        function m(b) {
                            var e = "$animate:" + b;
                            x && x[e] && x[e].length > 0 && w(function() {
                                d.triggerHandler(e, {event: a,className: c})
                            })
                        }
                        function n() {
                            m("before")
                        }
                        function o() {
                            m("after")
                        }
                        function p() {
                            m("close"), i()
                        }
                        function q() {
                            q.hasBeenRun || (q.hasBeenRun = !0, g())
                        }
                        function s() {
                            if (!s.hasBeenRun) {
                                v && v.applyStyles(), s.hasBeenRun = !0, h && h.tempClasses && l(h.tempClasses, function(a) {
                                    j.removeClass(d, a)
                                });
                                var b = d.data(r);
                                b && (v && v.isClassBased ? J(d, c) : (w(function() {
                                    var b = d.data(r) || {};
                                    H == b.index && J(d, c, a)
                                }), d.data(r, b))), p()
                            }
                        }
                        var u = k, v = G(d, a, c, h);
                        if (!v)
                            return q(), n(), o(), s(), u;
                        a = v.event, c = v.className;
                        var x = b.element._data(v.node);
                        if (x = x && x.events, e || (e = f ? f.parent() : d.parent()), K(d, e))
                            return q(), n(), o(), s(), u;
                        var y = d.data(r) || {}, z = y.active || {}, A = y.totalActive || 0, B = y.last, C = !1;
                        if (A > 0) {
                            var D = [];
                            if (v.isClassBased) {
                                if ("setClass" == B.event)
                                    D.push(B), J(d, c);
                                else if (z[c]) {
                                    var E = z[c];
                                    E.event == a ? C = !0 : (D.push(E), J(d, c))
                                }
                            } else if ("leave" == a && z["ng-leave"])
                                C = !0;
                            else {
                                for (var F in z)
                                    D.push(z[F]);
                                y = {}, J(d, !0)
                            }
                            D.length > 0 && l(D, function(a) {
                                a.cancel()
                            })
                        }
                        if (!v.isClassBased || v.isSetClassOperation || "animate" == a || C || (C = "addClass" == a == d.hasClass(c)), C)
                            return q(), n(), o(), p(), u;
                        z = y.active || {}, A = y.totalActive || 0, "leave" == a && d.one("$destroy", function() {
                            var a = b.element(this), c = a.data(r);
                            if (c) {
                                var d = c.active["ng-leave"];
                                d && (d.cancel(), J(a, "ng-leave"))
                            }
                        }), j.addClass(d, t), h && h.tempClasses && l(h.tempClasses, function(a) {
                            j.addClass(d, a)
                        });
                        var H = M++;
                        return A++, z[c] = v, d.data(r, {last: v,active: z,index: H,totalActive: A}), n(), v.before(function(b) {
                            var e = d.data(r);
                            b = b || !e || !e.active[c] || v.isClassBased && e.active[c].event != a, q(), b === !0 ? s() : (o(), v.after(s))
                        }), v.cancel
                    }
                    function I(a) {
                        var c = f(a);
                        if (c) {
                            var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(t) : c.querySelectorAll("." + t);
                            l(d, function(a) {
                                a = b.element(a);
                                var c = a.data(r);
                                c && c.active && l(c.active, function(a) {
                                    a.cancel()
                                })
                            })
                        }
                    }
                    function J(a, b) {
                        if (i(a, v))
                            u.disabled || (u.running = !1, u.structural = !1);
                        else if (b) {
                            var c = a.data(r) || {}, d = b === !0;
                            !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (j.removeClass(a, t), a.removeData(r))
                        }
                    }
                    function K(a, c) {
                        if (u.disabled)
                            return !0;
                        if (i(a, v))
                            return u.running;
                        var d, e, f;
                        do {
                            if (0 === c.length)
                                break;
                            var g = i(c, v), h = g ? u : c.data(r) || {};
                            if (h.disabled)
                                return !0;
                            if (g && (f = !0), d !== !1) {
                                var j = c.data(s);
                                b.isDefined(j) && (d = j)
                            }
                            e = e || h.running || h.last && !h.last.isClassBased
                        } while (c = c.parent());
                        return !f || !d && e
                    }
                    j = A, v.data(r, u);
                    var L = x.$watch(function() {
                        return z.totalPendingRequests
                    }, function(a) {
                        0 === a && (L(), x.$$postDigest(function() {
                            x.$$postDigest(function() {
                                u.running = !1
                            })
                        }))
                    }), M = 0, N = e.classNameFilter(), O = N ? function(a) {
                        return N.test(a)
                    } : function() {
                        return !0
                    };
                    return {animate: function(a, b, c, d, e) {
                            return d = d || "ng-inline-animate", e = D(e) || {}, e.from = c ? b : null, e.to = c ? c : b, C(function(b) {
                                return H("animate", d, h(a), null, null, k, e, b)
                            })
                        },enter: function(c, d, e, f) {
                            return f = D(f), c = b.element(c), d = g(d), e = g(e), B(c, !0), a.enter(c, d, e), C(function(a) {
                                return H("enter", "ng-enter", h(c), d, e, k, f, a)
                            })
                        },leave: function(c, d) {
                            return d = D(d), c = b.element(c), I(c), B(c, !0), C(function(b) {
                                return H("leave", "ng-leave", h(c), null, null, function() {
                                    a.leave(c)
                                }, d, b)
                            })
                        },move: function(c, d, e, f) {
                            return f = D(f), c = b.element(c), d = g(d), e = g(e), I(c), B(c, !0), a.move(c, d, e), C(function(a) {
                                return H("move", "ng-move", h(c), d, e, k, f, a)
                            })
                        },addClass: function(a, b, c) {
                            return this.setClass(a, b, [], c)
                        },removeClass: function(a, b, c) {
                            return this.setClass(a, [], b, c)
                        },setClass: function(c, d, e, g) {
                            g = D(g);
                            var i = "$$animateClasses";
                            if (c = b.element(c), c = h(c), B(c))
                                return a.$$setClassImmediately(c, d, e, g);
                            var j, k = c.data(i), m = !!k;
                            return k || (k = {}, k.classes = {}), j = k.classes, d = n(d) ? d : d.split(" "), l(d, function(a) {
                                a && a.length && (j[a] = !0)
                            }), e = n(e) ? e : e.split(" "), l(e, function(a) {
                                a && a.length && (j[a] = !1)
                            }), m ? (g && k.options && (k.options = b.extend(k.options || {}, g)), k.promise) : (c.data(i, k = {classes: j,options: g}), k.promise = C(function(b) {
                                var d = c.parent(), e = f(c), g = e.parentNode;
                                if (!g || g.$$NG_REMOVED || e.$$NG_REMOVED)
                                    return void b();
                                var h = c.data(i);
                                c.removeData(i);
                                var j = c.data(r) || {}, k = E(c, h, j.active);
                                return k ? H("setClass", k, c, d, null, function() {
                                    k[0] && a.$$addClassImmediately(c, k[0]), k[1] && a.$$removeClassImmediately(c, k[1])
                                }, h.options, b) : b()
                            }))
                        },cancel: function(a) {
                            a.$$cancelFn()
                        },enabled: function(a, b) {
                            switch (arguments.length) {
                                case 2:
                                    if (a)
                                        J(b);
                                    else {
                                        var c = b.data(r) || {};
                                        c.disabled = !0, b.data(r, c)
                                    }
                                    break;
                                case 1:
                                    u.disabled = !a;
                                    break;
                                default:
                                    a = !u.disabled
                            }
                            return !!a
                        }}
                }]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, h) {
                    function i() {
                        J || (J = h(function() {
                            W = [], J = null, U = {}
                        }))
                    }
                    function m(a, b) {
                        J && J(), W.push(b), J = h(function() {
                            l(W, function(a) {
                                a()
                            }), W = [], J = null, U = {}
                        })
                    }
                    function p(a, c) {
                        var d = f(a);
                        a = b.element(d), Z.push(a);
                        var e = Date.now() + c;
                        Y >= e || (g.cancel(X), Y = e, X = g(function() {
                            r(Z), Z = []
                        }, c, !1))
                    }
                    function r(a) {
                        l(a, function(a) {
                            var b = a.data(Q);
                            b && l(b.closeAnimationFns, function(a) {
                                a()
                            })
                        })
                    }
                    function s(a, b) {
                        var c = b ? U[b] : null;
                        if (!c) {
                            var e = 0, f = 0, g = 0, h = 0;
                            l(a, function(a) {
                                if (a.nodeType == q) {
                                    var b = d.getComputedStyle(a) || {}, c = b[E + K];
                                    e = Math.max(t(c), e);
                                    var i = b[E + M];
                                    f = Math.max(t(i), f);
                                    {
                                        b[G + M]
                                    }
                                    h = Math.max(t(b[G + M]), h);
                                    var j = t(b[G + K]);
                                    j > 0 && (j *= parseInt(b[G + N], 10) || 1), g = Math.max(j, g)
                                }
                            }), c = {total: 0,transitionDelay: f,transitionDuration: e,animationDelay: h,animationDuration: g}, b && (U[b] = c)
                        }
                        return c
                    }
                    function t(a) {
                        var b = 0, c = o(a) ? a.split(/\s*,\s*/) : [];
                        return l(c, function(a) {
                            b = Math.max(parseFloat(a) || 0, b)
                        }), b
                    }
                    function u(a) {
                        var b = a.parent(), c = b.data(P);
                        return c || (b.data(P, ++V), c = V), c + "-" + f(a).getAttribute("class")
                    }
                    function v(a, b, c, d) {
                        var e = ["ng-enter", "ng-leave", "ng-move"].indexOf(c) >= 0, g = u(b), h = g + " " + c, i = U[h] ? ++U[h].total : 0, k = {};
                        if (i > 0) {
                            var l = c + "-stagger", m = g + " " + l, n = !U[m];
                            n && j.addClass(b, l), k = s(b, m), n && j.removeClass(b, l)
                        }
                        j.addClass(b, c);
                        var o = b.data(Q) || {}, p = s(b, h), q = p.transitionDuration, r = p.animationDuration;
                        if (e && 0 === q && 0 === r)
                            return j.removeClass(b, c), !1;
                        var t = d || e && q > 0, v = r > 0 && k.animationDelay > 0 && 0 === k.animationDuration, w = o.closeAnimationFns || [];
                        b.data(Q, {stagger: k,cacheKey: h,running: o.running || 0,itemIndex: i,blockTransition: t,closeAnimationFns: w});
                        var z = f(b);
                        return t && (x(z, !0), d && b.css(d)), v && y(z, !0), !0
                    }
                    function w(a, b, c, d, e) {
                        function h() {
                            b.off(M, i), j.removeClass(b, n), j.removeClass(b, o), K && g.cancel(K), C(b, c);
                            var a = f(b);
                            for (var d in r)
                                a.style.removeProperty(r[d])
                        }
                        function i(a) {
                            a.stopPropagation();
                            var b = a.originalEvent || a, c = b.$manualTimeStamp || b.timeStamp || Date.now(), e = parseFloat(b.elapsedTime.toFixed(R));
                            Math.max(c - L, 0) >= G && e >= D && d()
                        }
                        var k = f(b), m = b.data(Q);
                        if (-1 == k.getAttribute("class").indexOf(c) || !m)
                            return void d();
                        var n = "", o = "";
                        l(c.split(" "), function(a, b) {
                            var c = (b > 0 ? " " : "") + a;
                            n += c + "-active", o += c + "-pending"
                        });
                        var q = "", r = [], t = m.itemIndex, u = m.stagger, v = 0;
                        if (t > 0) {
                            var w = 0;
                            u.transitionDelay > 0 && 0 === u.transitionDuration && (w = u.transitionDelay * t);
                            var z = 0;
                            u.animationDelay > 0 && 0 === u.animationDuration && (z = u.animationDelay * t, r.push(I + "animation-play-state")), v = Math.round(100 * Math.max(w, z)) / 100
                        }
                        v || (j.addClass(b, n), m.blockTransition && x(k, !1));
                        var A = m.cacheKey + " " + n, B = s(b, A), D = Math.max(B.transitionDuration, B.animationDuration);
                        if (0 === D)
                            return j.removeClass(b, n), C(b, c), void d();
                        !v && e && Object.keys(e).length > 0 && (B.transitionDuration || (b.css("transition", B.animationDuration + "s linear all"), r.push("transition")), b.css(e));
                        var E = Math.max(B.transitionDelay, B.animationDelay), G = E * T;
                        if (r.length > 0) {
                            var J = k.getAttribute("style") || "";
                            ";" !== J.charAt(J.length - 1) && (J += ";"), k.setAttribute("style", J + " " + q)
                        }
                        var K, L = Date.now(), M = H + " " + F, N = (E + D) * S, O = (v + N) * T;
                        return v > 0 && (j.addClass(b, o), K = g(function() {
                            K = null, B.transitionDuration > 0 && x(k, !1), B.animationDuration > 0 && y(k, !1), j.addClass(b, n), j.removeClass(b, o), e && (0 === B.transitionDuration && b.css("transition", B.animationDuration + "s linear all"), b.css(e), r.push("transition"))
                        }, v * T, !1)), b.on(M, i), m.closeAnimationFns.push(function() {
                            h(), d()
                        }), m.running++, p(b, O), h
                    }
                    function x(a, b) {
                        a.style[E + L] = b ? "none" : ""
                    }
                    function y(a, b) {
                        a.style[G + O] = b ? "paused" : ""
                    }
                    function z(a, b, c, d) {
                        return v(a, b, c, d) ? function(a) {
                            a && C(b, c)
                        } : void 0
                    }
                    function A(a, b, c, d, e) {
                        return b.data(Q) ? w(a, b, c, d, e) : (C(b, c), void d())
                    }
                    function B(a, b, c, d, e) {
                        var f = z(a, b, c, e.from);
                        if (!f)
                            return i(), void d();
                        var g = f;
                        return m(b, function() {
                            g = A(a, b, c, d, e.to)
                        }), function(a) {
                            (g || k)(a)
                        }
                    }
                    function C(a, b) {
                        j.removeClass(a, b);
                        var c = a.data(Q);
                        c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(Q))
                    }
                    function D(a, b) {
                        var c = "";
                        return a = n(a) ? a : a.split(/\s+/), l(a, function(a, d) {
                            a && a.length > 0 && (c += (d > 0 ? " " : "") + a + b)
                        }), c
                    }
                    var E, F, G, H, I = "";
                    a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
                    var J, K = "Duration", L = "Property", M = "Delay", N = "IterationCount", O = "PlayState", P = "$$ngAnimateKey", Q = "$$ngAnimateCSS3Data", R = 3, S = 1.5, T = 1e3, U = {}, V = 0, W = [], X = null, Y = 0, Z = [];
                    return {animate: function(a, b, c, d, e, f) {
                            return f = f || {}, f.from = c, f.to = d, B("animate", a, b, e, f)
                        },enter: function(a, b, c) {
                            return c = c || {}, B("enter", a, "ng-enter", b, c)
                        },leave: function(a, b, c) {
                            return c = c || {}, B("leave", a, "ng-leave", b, c)
                        },move: function(a, b, c) {
                            return c = c || {}, B("move", a, "ng-move", b, c)
                        },beforeSetClass: function(a, b, c, d, e) {
                            e = e || {};
                            var f = D(c, "-remove") + " " + D(b, "-add"), g = z("setClass", a, f, e.from);
                            return g ? (m(a, d), g) : (i(), void d())
                        },beforeAddClass: function(a, b, c, d) {
                            d = d || {};
                            var e = z("addClass", a, D(b, "-add"), d.from);
                            return e ? (m(a, c), e) : (i(), void c())
                        },beforeRemoveClass: function(a, b, c, d) {
                            d = d || {};
                            var e = z("removeClass", a, D(b, "-remove"), d.from);
                            return e ? (m(a, c), e) : (i(), void c())
                        },setClass: function(a, b, c, d, e) {
                            e = e || {}, c = D(c, "-remove"), b = D(b, "-add");
                            var f = c + " " + b;
                            return A("setClass", a, f, d, e.to)
                        },addClass: function(a, b, c, d) {
                            return d = d || {}, A("addClass", a, D(b, "-add"), c, d.to)
                        },removeClass: function(a, b, c, d) {
                            return d = d || {}, A("removeClass", a, D(b, "-remove"), c, d.to)
                        }}
                }])
        }])
}(window, window.angular), function(a, b, c) {
    "use strict";
    b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(a, d) {
            function e() {
                var a, e, f, i;
                for (a in h)
                    k(g[a]) && d.cookies(a, c);
                for (a in g)
                    e = g[a], b.isString(e) || (e = "" + e, g[a] = e), e !== h[a] && (d.cookies(a, e), i = !0);
                if (i) {
                    i = !1, f = d.cookies();
                    for (a in g)
                        g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
                }
            }
            var f, g = {}, h = {}, i = !1, j = b.copy, k = b.isUndefined;
            return d.addPollFn(function() {
                var b = d.cookies();
                f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
            })(), i = !0, a.$watch(e), g
        }]).factory("$cookieStore", ["$cookies", function(a) {
            return {get: function(c) {
                    var d = a[c];
                    return d ? b.fromJson(d) : d
                },put: function(c, d) {
                    a[c] = b.toJson(d)
                },remove: function(b) {
                    delete a[b]
                }}
        }])
}(window, window.angular), function(a, b, c) {
    "use strict";
    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }
    function e(a, b) {
        if (!d(b))
            throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c
        }
        return a
    }
    function f(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b]
        });
        for (var d in a)
            !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c
    }
    var g = b.$$minErr("$resource"), h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function() {
        var a = this;
        this.defaults = {stripTrailingSlashes: !0,actions: {get: {method: "GET"},save: {method: "POST"},query: {method: "GET",isArray: !0},remove: {method: "DELETE"},"delete": {method: "DELETE"}}}, this.$get = ["$http", "$q", function(d, h) {
                function i(a) {
                    return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                }
                function j(a, b) {
                    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
                }
                function k(b, c) {
                    this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {}
                }
                function l(i, j, r, s) {
                    function t(a, b) {
                        var c = {};
                        return b = o({}, j, b), n(b, function(b, d) {
                            q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                        }), c
                    }
                    function u(a) {
                        return a.resource
                    }
                    function v(a) {
                        f(a || {}, this)
                    }
                    var w = new k(i, s);
                    return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function() {
                        var a = o({}, this);
                        return delete a.$promise, delete a.$resolved, a
                    }, n(r, function(a, e) {
                        var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                        v[e] = function(j, k, l, r) {
                            var s, x, y, z = {};
                            switch (arguments.length) {
                                case 4:
                                    y = r, x = l;
                                case 3:
                                case 2:
                                    if (!q(k)) {
                                        z = j, s = k, x = l;
                                        break
                                    }
                                    if (q(j)) {
                                        x = j, y = k;
                                        break
                                    }
                                    x = k, y = l;
                                case 1:
                                    q(j) ? x = j : i ? s = j : z = j;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var A = this instanceof v, B = A ? s : a.isArray ? [] : new v(s), C = {}, D = a.interceptor && a.interceptor.response || u, E = a.interceptor && a.interceptor.responseError || c;
                            n(a, function(a, b) {
                                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a))
                            }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                            var F = d(C).then(function(c) {
                                var d = c.data, h = B.$promise;
                                if (d) {
                                    if (b.isArray(d) !== !!a.isArray)
                                        throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object");
                                    a.isArray ? (B.length = 0, n(d, function(a) {
                                        B.push("object" == typeof a ? new v(a) : a)
                                    })) : (f(d, B), B.$promise = h)
                                }
                                return B.$resolved = !0, c.resource = B, c
                            }, function(a) {
                                return B.$resolved = !0, (y || m)(a), h.reject(a)
                            });
                            return F = F.then(function(a) {
                                var b = D(a);
                                return (x || m)(b, a.headers), b
                            }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
                        }, v.prototype["$" + e] = function(a, b, c) {
                            q(a) && (c = b, b = a, a = {});
                            var d = v[e].call(this, a, this, b, c);
                            return d.$promise || d
                        }
                    }), v.bind = function(a) {
                        return l(i, o({}, j, a), r)
                    }, v
                }
                var m = b.noop, n = b.forEach, o = b.extend, p = b.copy, q = b.isFunction;
                return k.prototype = {setUrlParams: function(a, c, d) {
                        var e, f, h = this, j = d || h.template, k = h.urlParams = {};
                        n(j.split(/\W/), function(a) {
                            if ("hasOwnProperty" === a)
                                throw g("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                        }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function(a, d) {
                            e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                                return f + b
                            })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c
                            })
                        }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
                            h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                        })
                    }}, l
            }]
    })
}(window, window.angular), function(a, b) {
    "use strict";
    function c() {
        function a(a, c) {
            return b.extend(Object.create(a), c)
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {originalPath: a,regexp: a}, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d ? d : null, g = "*" === d ? d : null;
                return e.push({name: c,optional: !!f}), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
        }
        var d = {};
        this.when = function(a, e) {
            var f = b.copy(e);
            if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[g] = b.extend({redirectTo: a}, c(g, f))
            }
            return this
        }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
            return "string" == typeof a && (a = {redirectTo: a}), this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, f, g, i, j, k) {
                function l(a, b) {
                    var c = b.keys, d = {};
                    if (!b.regexp)
                        return null;
                    var e = b.regexp.exec(a);
                    if (!e)
                        return null;
                    for (var f = 1, g = e.length; g > f; ++f) {
                        var h = c[f - 1], i = e[f];
                        h && i && (d[h.name] = i)
                    }
                    return d
                }
                function m(a) {
                    var d = t.current;
                    q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
                }
                function n() {
                    var a = t.current, d = q;
                    r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function() {
                        if (d) {
                            var a, c, e = b.extend({}, d.resolve);
                            return b.forEach(e, function(a, c) {
                                e[c] = b.isString(a) ? i.get(a) : i.invoke(a, null, null, c)
                            }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
                        }
                    }).then(function(e) {
                        d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
                    }, function(b) {
                        d == t.current && c.$broadcast("$routeChangeError", d, a, b)
                    }))
                }
                function o() {
                    var c, f;
                    return b.forEach(d, function(d) {
                        !f && (c = l(e.path(), d)) && (f = a(d, {params: b.extend({}, e.search(), c),pathParams: c}), f.$$route = d)
                    }), f || d[null] && a(d[null], {params: {},pathParams: {}})
                }
                function p(a, c) {
                    var d = [];
                    return b.forEach((a || "").split(":"), function(a, b) {
                        if (0 === b)
                            d.push(a);
                        else {
                            var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f]
                        }
                    }), d.join("")
                }
                var q, r, s = !1, t = {routes: d,reload: function() {
                        s = !0, c.$evalAsync(function() {
                            m(), n()
                        })
                    },updateParams: function(a) {
                        if (!this.current || !this.current.$$route)
                            throw h("norout", "Tried updating route when with no current route");
                        var c = {}, d = this;
                        b.forEach(Object.keys(a), function(b) {
                            d.current.pathParams[b] || (c[b] = a[b])
                        }), a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(b.extend({}, e.search(), c))
                    }};
                return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
            }]
    }
    function d() {
        this.$get = function() {
            return {}
        }
    }
    function e(a, c, d) {
        return {restrict: "ECA",terminal: !0,priority: 400,transclude: "element",link: function(e, f, g, h, i) {
                function j() {
                    n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function() {
                        n = null
                    }), m = null)
                }
                function k() {
                    var g = a.current && a.current.locals, h = g && g.$template;
                    if (b.isDefined(h)) {
                        var k = e.$new(), n = a.current, q = i(k, function(a) {
                            d.enter(a, null, m || f).then(function() {
                                !b.isDefined(o) || o && !e.$eval(o) || c()
                            }), j()
                        });
                        m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
                    } else
                        j()
                }
                var l, m, n, o = g.autoscroll, p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k()
            }}
    }
    function f(a, b, c) {
        return {restrict: "ECA",priority: -400,link: function(d, e) {
                var f = c.current, g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
                }
                h(d)
            }}
    }
    var g = b.module("ngRoute", ["ng"]).provider("$route", c), h = b.$$minErr("ngRoute");
    g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), e.$inject = ["$route", "$anchorScroll", "$animate"], f.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular), function(a, b) {
    "use strict";
    function c() {
        this.$get = ["$$sanitizeUri", function(a) {
                return function(b) {
                    var c = [];
                    return f(b, i(c, function(b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }]
    }
    function d(a) {
        var c = [], d = i(c, b.noop);
        return d.chars(a), c.join("")
    }
    function e(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++)
            c[d[b]] = !0;
        return c
    }
    function f(a, c) {
        function d(a, d, f, h) {
            if (d = b.lowercase(d), y[d])
                for (; t.last() && z[t.last()]; )
                    e("", t.last());
            x[d] && t.last() == d && e("", d), h = u[d] || !!h, h || t.push(d);
            var i = {};
            f.replace(m, function(a, b, c, d, e) {
                var f = c || d || e || "";
                i[b] = g(f)
            }), c.start && c.start(d, i, h)
        }
        function e(a, d) {
            var e, f = 0;
            if (d = b.lowercase(d))
                for (f = t.length - 1; f >= 0 && t[f] != d; f--)
                    ;
            if (f >= 0) {
                for (e = t.length - 1; e >= f; e--)
                    c.end && c.end(t[e]);
                t.length = f
            }
        }
        "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
        var f, h, i, s, t = [], v = a;
        for (t.last = function() {
            return t[t.length - 1]
        }; a; ) {
            if (s = "", h = !0, t.last() && B[t.last()] ? (a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) {
                return b = b.replace(p, "$1").replace(r, "$1"), c.chars && c.chars(g(b)), ""
            }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(k, d)), h = !1) : (s += "<", a = a.substring(1))), h && (f = a.indexOf("<"), s += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(g(s)))), a == v)
                throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
            v = a
        }
        e()
    }
    function g(a) {
        if (!a)
            return "";
        var b = I.exec(a), c = b[1], d = b[3], e = b[2];
        return e && (H.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in H ? H.textContent : H.innerText), c + e + d
    }
    function h(a) {
        return a.replace(/&/g, "&amp;").replace(s, function(a) {
            var b = a.charCodeAt(0), c = a.charCodeAt(1);
            return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
        }).replace(t, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function i(a, c) {
        var d = !1, e = b.bind(a, a.push);
        return {start: function(a, f, g) {
                a = b.lowercase(a), !d && B[a] && (d = a), d || C[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
                    var g = b.lowercase(f), i = "img" === a && "src" === g || "background" === g;
                    G[g] !== !0 || D[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
                }), e(g ? "/>" : ">"))
            },end: function(a) {
                a = b.lowercase(a), d || C[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
            },chars: function(a) {
                d || e(h(a))
            }}
    }
    var j = b.$$minErr("$sanitize"), k = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, l = /^<\/\s*([\w:-]+)[^>]*>/, m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, n = /^</, o = /^<\//, p = /<!--(.*?)-->/g, q = /<!DOCTYPE([^>]*?)>/i, r = /<!\[CDATA\[(.*?)]]>/g, s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, t = /([^\#-~| |!])/g, u = e("area,br,col,hr,img,wbr"), v = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), w = e("rp,rt"), x = b.extend({}, w, v), y = b.extend({}, v, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), z = b.extend({}, w, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), A = e("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"), B = e("script,style"), C = b.extend({}, u, y, z, x, A), D = e("background,cite,href,longdesc,src,usemap,xlink:href"), E = e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"), F = e("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"), G = b.extend({}, D, F, E), H = document.createElement("pre"), I = /^(\s*)([\s\S]*?)(\s*)$/;
    b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
            var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/, e = /^mailto:/;
            return function(f, g) {
                function h(a) {
                    a && n.push(d(a))
                }
                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
                }
                if (!f)
                    return f;
                for (var j, k, l, m = f, n = []; j = m.match(c); )
                    k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(e, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }])
}(window, window.angular), function(a, b) {
    "use strict";
    function c(a, c, e) {
        d.directive(a, ["$parse", "$swipe", function(d, f) {
                var g = 75, h = .3, i = 30;
                return function(j, k, l) {
                    function m(a) {
                        if (!n)
                            return !1;
                        var b = Math.abs(a.y - n.y), d = (a.x - n.x) * c;
                        return o && g > b && d > 0 && d > i && h > b / d
                    }
                    var n, o, p = d(l[a]), q = ["touch"];
                    b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {start: function(a) {
                            n = a, o = !0
                        },cancel: function() {
                            o = !1
                        },end: function(a, b) {
                            m(a) && j.$apply(function() {
                                k.triggerHandler(e), p(j, {$event: b})
                            })
                        }}, q)
                }
            }])
    }
    var d = b.module("ngTouch", []);
    d.factory("$swipe", [function() {
            function a(a) {
                var b = a.touches && a.touches.length ? a.touches : [a], c = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || b[0].originalEvent || b[0];
                return {x: c.clientX,y: c.clientY}
            }
            function c(a, c) {
                var d = [];
                return b.forEach(a, function(a) {
                    var b = e[a][c];
                    b && d.push(b)
                }), d.join(" ")
            }
            var d = 10, e = {mouse: {start: "mousedown",move: "mousemove",end: "mouseup"},touch: {start: "touchstart",move: "touchmove",end: "touchend",cancel: "touchcancel"}};
            return {bind: function(b, e, f) {
                    var g, h, i, j, k = !1;
                    f = f || ["mouse", "touch"], b.on(c(f, "start"), function(b) {
                        i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                    });
                    var l = c(f, "cancel");
                    l && b.on(l, function(a) {
                        k = !1, e.cancel && e.cancel(a)
                    }), b.on(c(f, "move"), function(b) {
                        if (k && i) {
                            var c = a(b);
                            if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h))
                                return h > g ? (k = !1, void (e.cancel && e.cancel(b))) : (b.preventDefault(), void (e.move && e.move(c, b)))
                        }
                    }), b.on(c(f, "end"), function(b) {
                        k && (k = !1, e.end && e.end(a(b), b))
                    })
                }}
        }]), d.config(["$provide", function(a) {
            a.decorator("ngClickDirective", ["$delegate", function(a) {
                    return a.shift(), a
                }])
        }]), d.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(a, c, d) {
            function e(a, b, c, d) {
                return Math.abs(a - c) < p && Math.abs(b - d) < p
            }
            function f(a, b, c) {
                for (var d = 0; d < a.length; d += 2)
                    if (e(a[d], a[d + 1], b, c))
                        return a.splice(d, d + 2), !0;
                return !1
            }
            function g(a) {
                if (!(Date.now() - j > o)) {
                    var b = a.touches && a.touches.length ? a.touches : [a], c = b[0].clientX, d = b[0].clientY;
                    1 > c && 1 > d || l && l[0] === c && l[1] === d || (l && (l = null), "label" === a.target.tagName.toLowerCase() && (l = [c, d]), f(k, c, d) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur()))
                }
            }
            function h(a) {
                var b = a.touches && a.touches.length ? a.touches : [a], d = b[0].clientX, e = b[0].clientY;
                k.push(d, e), c(function() {
                    for (var a = 0; a < k.length; a += 2)
                        if (k[a] == d && k[a + 1] == e)
                            return void k.splice(a, a + 2)
                }, o, !1)
            }
            function i(a, b) {
                k || (d[0].addEventListener("click", g, !0), d[0].addEventListener("touchstart", h, !0), k = []), j = Date.now(), f(k, a, b)
            }
            var j, k, l, m = 750, n = 12, o = 2500, p = 25, q = "ng-click-active";
            return function(c, d, e) {
                function f() {
                    o = !1, d.removeClass(q)
                }
                var g, h, j, k, l = a(e.ngClick), o = !1;
                d.on("touchstart", function(a) {
                    o = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(q), h = Date.now();
                    var b = a.touches && a.touches.length ? a.touches : [a], c = b[0].originalEvent || b[0];
                    j = c.clientX, k = c.clientY
                }), d.on("touchmove", function() {
                    f()
                }), d.on("touchcancel", function() {
                    f()
                }), d.on("touchend", function(a) {
                    var c = Date.now() - h, l = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a], p = l[0].originalEvent || l[0], q = p.clientX, r = p.clientY, s = Math.sqrt(Math.pow(q - j, 2) + Math.pow(r - k, 2));
                    o && m > c && n > s && (i(q, r), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
                }), d.onclick = function() {
                }, d.on("click", function(a, b) {
                    c.$apply(function() {
                        l(c, {$event: b || a})
                    })
                }), d.on("mousedown", function() {
                    d.addClass(q)
                }), d.on("mousemove mouseup", function() {
                    d.removeClass(q)
                })
            }
        }]), c("ngSwipeLeft", -1, "swipeleft"), c("ngSwipeRight", 1, "swiperight")
}(window, window.angular), function() {
    "use strict";
    function a() {
    }
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c,once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {listener: b,once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define(function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function(a) {
    "use strict";
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement, d = function() {
    };
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {
    };
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d,unbind: e};
    "function" == typeof define && define.amd ? define(f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window), function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}(window, function(a, b, c) {
    "use strict";
    function d(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function e(a) {
        return "[object Array]" === m.call(a)
    }
    function f(a) {
        var b = [];
        if (e(a))
            b = a;
        else if ("number" == typeof a.length)
            for (var c = 0, d = a.length; d > c; c++)
                b.push(a[c]);
        else
            b.push(a);
        return b
    }
    function g(a, b, c) {
        if (!(this instanceof g))
            return new g(a, b);
        "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function() {
            e.check()
        })
    }
    function h(a) {
        this.img = a
    }
    function i(a) {
        this.src = a, n[a] = this
    }
    var j = a.jQuery, k = a.console, l = "undefined" != typeof k, m = Object.prototype.toString;
    g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
        this.images = [];
        for (var a = 0, b = this.elements.length; b > a; a++) {
            var c = this.elements[a];
            "IMG" === c.nodeName && this.addImage(c);
            var d = c.nodeType;
            if (d && (1 === d || 9 === d || 11 === d))
                for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                    var h = e[f];
                    this.addImage(h)
                }
        }
    }, g.prototype.addImage = function(a) {
        var b = new h(a);
        this.images.push(b)
    }, g.prototype.check = function() {
        function a(a, e) {
            return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
        }
        var b = this, c = 0, d = this.images.length;
        if (this.hasAnyBroken = !1, !d)
            return void this.complete();
        for (var e = 0; d > e; e++) {
            var f = this.images[e];
            f.on("confirm", a), f.check()
        }
    }, g.prototype.progress = function(a) {
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
        var b = this;
        setTimeout(function() {
            b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
        })
    }, g.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var b = this;
        setTimeout(function() {
            if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                var c = b.hasAnyBroken ? "reject" : "resolve";
                b.jqDeferred[c](b)
            }
        })
    }, j && (j.fn.imagesLoaded = function(a, b) {
        var c = new g(this, a, b);
        return c.jqDeferred.promise(j(this))
    }), h.prototype = new b, h.prototype.check = function() {
        var a = n[this.img.src] || new i(this.img.src);
        if (a.isConfirmed)
            return void this.confirm(a.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var b = this;
        a.on("confirm", function(a, c) {
            return b.confirm(a.isLoaded, c), !0
        }), a.check()
    }, h.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emit("confirm", this, b)
    };
    var n = {};
    return i.prototype = new b, i.prototype.check = function() {
        if (!this.isChecked) {
            var a = new Image;
            c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
        }
    }, i.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, i.prototype.onload = function(a) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(a)
    }, i.prototype.onerror = function(a) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
    }, i.prototype.confirm = function(a, b) {
        this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
    }, i.prototype.unbindProxyEvents = function(a) {
        c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
    }, g
}), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b])
                    return a[b]
        }
        var e = function(d, f, g) {
            g = g || {};
            var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function() {
                c.$apply(function() {
                    d.unbind(i, j), h.resolve(d)
                })
            };
            return i && d.bind(i, j), b(function() {
                angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        }, f = document.createElement("trans"), g = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd",transition: "transitionend"}, h = {WebkitTransition: "webkitAnimationEnd",MozTransition: "animationend",OTransition: "oAnimationEnd",transition: "animationend"};
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
        return {link: function(b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }
                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({height: c[0].scrollHeight + "px"}).then(g))
                }
                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({height: "auto"})
                }
                function h() {
                    if (k)
                        k = !1, i(), c.css({height: 0});
                    else {
                        c.css({height: c[0].scrollHeight + "px"});
                        {
                            c[0].offsetWidth
                        }
                        c.removeClass("collapse in").addClass("collapsing"), e({height: 0}).then(i)
                    }
                }
                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function(a) {
                    a ? h() : f()
                })
            }}
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function() {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a);
            -1 !== b && this.groups.splice(b, 1)
        }
    }]).directive("accordion", function() {
    return {restrict: "EA",controller: "AccordionController",transclude: !0,replace: !1,templateUrl: "template/accordion/accordion.html"}
}).directive("accordionGroup", function() {
    return {require: "^accordion",restrict: "EA",transclude: !0,replace: !0,templateUrl: "template/accordion/accordion-group.html",scope: {heading: "@",isOpen: "=?",isDisabled: "=?"},controller: function() {
            this.setHeading = function(a) {
                this.heading = a
            }
        },link: function(a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function(b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function() {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }}
}).directive("accordionHeading", function() {
    return {restrict: "EA",transclude: !0,template: "",replace: !0,require: "^accordionGroup",link: function(a, b, c, d, e) {
            d.setHeading(e(a, function() {
            }))
        }}
}).directive("accordionTransclude", function() {
    return {require: "^accordionGroup",link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }}
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
        a.closeable = "close" in b, this.close = a.close
    }]).directive("alert", function() {
    return {restrict: "EA",controller: "AlertController",templateUrl: "template/alert/alert.html",transclude: !0,replace: !0,scope: {type: "@",close: "&"}}
}).directive("dismissOnTimeout", ["$timeout", function(a) {
        return {require: "alert",link: function(b, c, d, e) {
                a(function() {
                    e.close()
                }, parseInt(d.dismissOnTimeout, 10))
            }}
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {activeClass: "active",toggleEvent: "click"}).controller("ButtonsController", ["buttonConfig", function(a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }]).directive("btnRadio", function() {
    return {require: ["btnRadio", "ngModel"],controller: "ButtonsController",link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }}
}).directive("btnCheckbox", function() {
    return {require: ["btnCheckbox", "ngModel"],controller: "ButtonsController",link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }
            function f() {
                return g(c.btnCheckboxFalse, !1)
            }
            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0], i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }}
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(a, b, c, d) {
        function e() {
            f();
            var b = +a.interval;
            !isNaN(b) && b > 0 && (h = c(g, b))
        }
        function f() {
            h && (c.cancel(h), h = null)
        }
        function g() {
            var b = +a.interval;
            i && !isNaN(b) && b > 0 ? a.next() : a.pause()
        }
        var h, i, j = this, k = j.slides = a.slides = [], l = -1;
        j.currentSlide = null;
        var m = !1;
        j.select = a.select = function(c, f) {
            function g() {
                if (!m) {
                    if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
                        c.$element.addClass(f);
                        {
                            c.$element[0].offsetWidth
                        }
                        angular.forEach(k, function(a) {
                            angular.extend(a, {direction: "",entering: !1,leaving: !1,active: !1})
                        }), angular.extend(c, {direction: f,active: !0,entering: !0}), angular.extend(j.currentSlide || {}, {direction: f,leaving: !0}), a.$currentTransition = d(c.$element, {}), function(b, c) {
                            a.$currentTransition.then(function() {
                                h(b, c)
                            }, function() {
                                h(b, c)
                            })
                        }(c, j.currentSlide)
                    } else
                        h(c, j.currentSlide);
                    j.currentSlide = c, l = i, e()
                }
            }
            function h(b, c) {
                angular.extend(b, {direction: "",active: !0,leaving: !1,entering: !1}), angular.extend(c || {}, {direction: "",active: !1,leaving: !1,entering: !1}), a.$currentTransition = null
            }
            var i = k.indexOf(c);
            void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function() {
            m = !0
        }), j.indexOfSlide = function(a) {
            return k.indexOf(a)
        }, a.next = function() {
            var b = (l + 1) % k.length;
            return a.$currentTransition ? void 0 : j.select(k[b], "next")
        }, a.prev = function() {
            var b = 0 > l - 1 ? k.length - 1 : l - 1;
            return a.$currentTransition ? void 0 : j.select(k[b], "prev")
        }, a.isActive = function(a) {
            return j.currentSlide === a
        }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
            i || (i = !0, e())
        }, a.pause = function() {
            a.noPause || (i = !1, f())
        }, j.addSlide = function(b, c) {
            b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
        }, j.removeSlide = function(a) {
            var b = k.indexOf(a);
            k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
        }
    }]).directive("carousel", [function() {
        return {restrict: "EA",transclude: !0,replace: !0,controller: "CarouselController",require: "carousel",templateUrl: "template/carousel/carousel.html",scope: {interval: "=",noTransition: "=",noPause: "="}}
    }]).directive("slide", function() {
    return {require: "^carousel",restrict: "EA",transclude: !0,replace: !0,templateUrl: "template/carousel/slide.html",scope: {active: "=?"},link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a)
            }), a.$watch("active", function(b) {
                b && d.select(a)
            })
        }}
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
        function c(a) {
            var c = [], d = a.split("");
            return angular.forEach(e, function(b, e) {
                var f = a.indexOf(e);
                if (f > -1) {
                    a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + e.length; h > g; g++)
                        d[g] = "", a[g] = "$";
                    a = a.join(""), c.push({index: f,apply: b.apply})
                }
            }), {regex: new RegExp("^" + d.join("") + "$"),map: b(c, "index")}
        }
        function d(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }
        this.parsers = {};
        var e = {yyyy: {regex: "\\d{4}",apply: function(a) {
                    this.year = +a
                }},yy: {regex: "\\d{2}",apply: function(a) {
                    this.year = +a + 2e3
                }},y: {regex: "\\d{1,4}",apply: function(a) {
                    this.year = +a
                }},MMMM: {regex: a.DATETIME_FORMATS.MONTH.join("|"),apply: function(b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }},MMM: {regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply: function(b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }},MM: {regex: "0[1-9]|1[0-2]",apply: function(a) {
                    this.month = a - 1
                }},M: {regex: "[1-9]|1[0-2]",apply: function(a) {
                    this.month = a - 1
                }},dd: {regex: "[0-2][0-9]{1}|3[0-1]{1}",apply: function(a) {
                    this.date = +a
                }},d: {regex: "[1-2]?[0-9]{1}|3[0-1]{1}",apply: function(a) {
                    this.date = +a
                }},EEEE: {regex: a.DATETIME_FORMATS.DAY.join("|")},EEE: {regex: a.DATETIME_FORMATS.SHORTDAY.join("|")}};
        this.parse = function(b, e) {
            if (!angular.isString(b) || !e)
                return b;
            e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
            var f = this.parsers[e], g = f.regex, h = f.map, i = b.match(g);
            if (i && i.length) {
                for (var j, k = {year: 1900,month: 0,date: 1,hours: 0}, l = 1, m = i.length; m > l; l++) {
                    var n = h[l - 1];
                    n.apply && n.apply.call(k, i[l])
                }
                return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }
        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e); )
                e = e.offsetParent;
            return e || c
        };
        return {position: function(b) {
                var c = this.offset(b), d = {top: 0,left: 0}, f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {width: g.width || b.prop("offsetWidth"),height: g.height || b.prop("offsetHeight"),top: c.top - d.top,left: c.left - d.left}
            },offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {width: d.width || c.prop("offsetWidth"),height: d.height || c.prop("offsetHeight"),top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)}
            },positionElements: function(a, b, c, d) {
                var e, f, g, h, i = c.split("-"), j = i[0], k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {center: function() {
                        return e.left + e.width / 2 - f / 2
                    },left: function() {
                        return e.left
                    },right: function() {
                        return e.left + e.width
                    }}, m = {center: function() {
                        return e.top + e.height / 2 - g / 2
                    },top: function() {
                        return e.top
                    },bottom: function() {
                        return e.top + e.height
                    }};
                switch (j) {
                    case "right":
                        h = {top: m[k](),left: l[j]()};
                        break;
                    case "left":
                        h = {top: m[k](),left: e.left - f};
                        break;
                    case "bottom":
                        h = {top: m[j](),left: l[k]()};
                        break;
                    default:
                        h = {top: e.top - g,left: l[k]()}
                }
                return h
            }}
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {formatDay: "dd",formatMonth: "MMMM",formatYear: "yyyy",formatDayHeader: "EEE",formatDayTitle: "MMMM yyyy",formatMonthTitle: "yyyy",datepickerMode: "day",minMode: "day",maxMode: "year",showWeeks: !0,startingDay: 0,yearRange: 20,minDate: null,maxDate: null}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
        var i = this, j = {$setViewValue: angular.noop};
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function(d) {
            b[d] ? a.$parent.$watch(c(b[d]), function(a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function(a) {
            j = a, j.$render = function() {
                i.render()
            }
        }, this.render = function() {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue), b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function(a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {date: a,label: g(a, b),selected: c && 0 === this.compare(a, c),disabled: this.isDisabled(a),current: 0 === this.compare(a, new Date)}
        }, this.isDisabled = function(c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({date: c,mode: a.datepickerMode})
        }, this.split = function(a, b) {
            for (var c = []; a.length > 0; )
                c.push(a.splice(0, b));
            return c
        }, a.select = function(b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else
                i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function(a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function(b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {13: "enter",32: "space",33: "pageup",34: "pagedown",35: "end",36: "home",37: "left",38: "up",39: "right",40: "down"};
        var k = function() {
            e(function() {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function(b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate))
                        return;
                    a.select(i.activeDate), k()
                } else
                    !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }]).directive("datepicker", function() {
    return {restrict: "EA",replace: !0,templateUrl: "template/datepicker/datepicker.html",scope: {datepickerMode: "=?",dateDisabled: "&"},require: ["datepicker", "?^ngModel"],controller: "DatepickerController",link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f && e.init(f)
        }}
}).directive("daypicker", ["dateFilter", function(a) {
        return {restrict: "EA",replace: !0,templateUrl: "template/datepicker/day.html",require: "^datepicker",link: function(b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }
                function g(a, b) {
                    var c = new Array(b), d = new Date(a), e = 0;
                    for (d.setHours(12); b > e; )
                        c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }
                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                b.showWeeks = e.showWeeks, e.step = {months: 1}, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function() {
                    var c = e.activeDate.getFullYear(), d = e.activeDate.getMonth(), f = new Date(c, d, 1), i = e.startingDay - f.getDay(), j = i > 0 ? 7 - i : -i, k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++)
                        l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {secondary: l[m].getMonth() !== d,uid: b.uniqueId + "-" + m});
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++)
                        b.labels[n] = {abbr: a(l[n].date, e.formatDayHeader),full: a(l[n].date, "EEEE")};
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p; )
                            ;
                    }
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function(a) {
                    var b = e.activeDate.getDate();
                    if ("left" === a)
                        b -= 1;
                    else if ("up" === a)
                        b -= 7;
                    else if ("right" === a)
                        b += 1;
                    else if ("down" === a)
                        b += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                    } else
                        "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(b)
                }, e.refreshView()
            }}
    }]).directive("monthpicker", ["dateFilter", function(a) {
        return {restrict: "EA",replace: !0,templateUrl: "template/datepicker/month.html",require: "^datepicker",link: function(b, c, d, e) {
                e.step = {years: 1}, e.element = c, e._refreshView = function() {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++)
                        c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {uid: b.uniqueId + "-" + f});
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function(a) {
                    var b = e.activeDate.getMonth();
                    if ("left" === a)
                        b -= 1;
                    else if ("up" === a)
                        b -= 3;
                    else if ("right" === a)
                        b += 1;
                    else if ("down" === a)
                        b += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(c)
                    } else
                        "home" === a ? b = 0 : "end" === a && (b = 11);
                    e.activeDate.setMonth(b)
                }, e.refreshView()
            }}
    }]).directive("yearpicker", ["dateFilter", function() {
        return {restrict: "EA",replace: !0,templateUrl: "template/datepicker/year.html",require: "^datepicker",link: function(a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }
                var f = d.yearRange;
                d.step = {years: f}, d.element = b, d._refreshView = function() {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++)
                        b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {uid: a.uniqueId + "-" + c});
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function(a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function(a) {
                    var b = d.activeDate.getFullYear();
                    "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
                }, d.refreshView()
            }}
    }]).constant("datepickerPopupConfig", {datepickerPopup: "yyyy-MM-dd",currentText: "Today",clearText: "Clear",closeText: "Done",closeOnDateSelection: !0,appendToBody: !1,showButtonBar: !0}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
        return {restrict: "EA",require: "ngModel",scope: {isOpen: "=?",currentText: "@",clearText: "@",closeText: "@",dateDisabled: "&"},link: function(h, i, j, k) {
                function l(a) {
                    return a.replace(/([A-Z])/g, function(a) {
                        return "-" + a.toLowerCase()
                    })
                }
                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a))
                            return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }
                var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection, p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function(a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({"ng-model": "date","ng-change": "dateSelection()"});
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                    r.attr(l(b), a)
                }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                    if (j[a]) {
                        var c = b(j[a]);
                        if (h.$parent.$watch(c, function(b) {
                            h.watchData[a] = b
                        }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                            var d = c.assign;
                            h.$watch("watchData." + a, function(a, b) {
                                a !== b && d(h.$parent, a)
                            })
                        }
                    }
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function() {
                    h.$apply(function() {
                        h.date = k.$modelValue
                    })
                }), k.$render = function() {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function(a) {
                    h.isOpen && a.target !== i[0] && h.$apply(function() {
                        h.isOpen = !1
                    })
                }, t = function(a) {
                    h.keydown(a)
                };
                i.bind("keydown", t), h.keydown = function(a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function(a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function(a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function() {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }}
    }]).directive("datepickerPopupWrap", function() {
    return {restrict: "EA",replace: !0,transclude: !0,templateUrl: "template/datepicker/popup.html",link: function(a, b) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }}
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", function(a) {
        var b = null;
        this.open = function(e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function(e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function(a) {
            if (b) {
                var c = b.getToggleElement();
                a && c && c[0].contains(a.target) || b.$apply(function() {
                    b.isOpen = !1
                })
            }
        }, d = function(a) {
            27 === a.which && (b.focusToggleElement(), c())
        }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
        var g, h = this, i = a.$new(), j = d.openClass, k = angular.noop, l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function(d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
                i.isOpen = !!a
            }))
        }, this.toggle = function(a) {
            return i.isOpen = arguments.length ? !!a : !i.isOpen
        }, this.isOpen = function() {
            return i.isOpen
        }, i.getToggleElement = function() {
            return h.toggleElement
        }, i.focusToggleElement = function() {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function(b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {open: !!b})
        }), a.$on("$locationChangeSuccess", function() {
            i.isOpen = !1
        }), a.$on("$destroy", function() {
            i.$destroy()
        })
    }]).directive("dropdown", function() {
    return {controller: "DropdownController",link: function(a, b, c, d) {
            d.init(b)
        }}
}).directive("dropdownToggle", function() {
    return {require: "?^dropdown",link: function(a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({"aria-haspopup": !0,"aria-expanded": !1}), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function() {
                    b.unbind("click", e)
                })
            }
        }}
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return {createNew: function() {
            var a = [];
            return {add: function(b, c) {
                    a.push({key: b,value: c})
                },get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key)
                            return a[c]
                },keys: function() {
                    for (var b = [], c = 0; c < a.length; c++)
                        b.push(a[c].key);
                    return b
                },top: function() {
                    return a[a.length - 1]
                },remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },length: function() {
                    return a.length
                }}
        }}
}).directive("modalBackdrop", ["$timeout", function(a) {
        return {restrict: "EA",replace: !0,templateUrl: "template/modal/backdrop.html",link: function(b, c, d) {
                b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                    b.animate = !0
                })
            }}
    }]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
        return {restrict: "EA",scope: {index: "@",animate: "="},replace: !0,transclude: !0,templateUrl: function(a, b) {
                return b.templateUrl || "template/modal/window.html"
            },link: function(c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                    c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
                }), c.close = function(b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }}
    }]).directive("modalTransclude", function() {
    return {link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a)
            })
        }}
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)
                n.get(b[c]).value.backdrop && (a = c);
            return a
        }
        function h(a) {
            var b = c.find("body").eq(0), d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }
        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function() {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }
        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function() {
                    b.cancel(i), g(), d.$apply()
                })
            } else
                b(g)
        }
        var k, l, m = "modal-open", n = f.createNew(), o = {};
        return e.$watch(g, function(a) {
            l && (l.index = a)
        }), c.bind("keydown", function(a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function(a, b) {
            n.add(a, {deferred: b.deferred,modalScope: b.scope,backdrop: b.backdrop,keyboard: b.keyboard});
            var f = c.find("body").eq(0), h = g();
            if (h >= 0 && !k) {
                l = e.$new(!0), l.index = h;
                var i = angular.element("<div modal-backdrop></div>");
                i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
            }
            var j = angular.element("<div modal-window></div>");
            j.attr({"template-url": b.windowTemplateUrl,"window-class": b.windowClass,size: b.size,index: n.length() - 1,animate: "animate"}).html(b.content);
            var o = d(j)(b.scope);
            n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
        }, o.close = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.resolve(b), h(a))
        }, o.dismiss = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.reject(b), h(a))
        }, o.dismissAll = function(a) {
            for (var b = this.getTop(); b; )
                this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function() {
            return n.top()
        }, o
    }]).provider("$modal", function() {
    var a = {options: {backdrop: !0,keyboard: !0},$get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {cache: f}).then(function(a) {
                        return a.data
                    })
                }
                function j(a) {
                    var c = [];
                    return angular.forEach(a, function(a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function(b) {
                    var e = d.defer(), f = d.defer(), k = {result: e.promise,opened: f.promise,close: function(a) {
                            h.close(k, a)
                        },dismiss: function(a) {
                            h.dismiss(k, a)
                        }};
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)
                        throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function(a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {}, j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {scope: d,deferred: e,content: a[0],backdrop: b.backdrop,keyboard: b.keyboard,backdropClass: b.backdropClass,windowClass: b.windowClass,windowTemplateUrl: b.windowTemplateUrl,size: b.size})
                    }, function(a) {
                        e.reject(a)
                    }), l.then(function() {
                        f.resolve(!0)
                    }, function() {
                        f.reject(!1)
                    }), k
                }, k
            }]};
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
        var d = this, e = {$setViewValue: angular.noop}, f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function(f, g) {
            e = f, this.config = g, e.$render = function() {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function() {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function() {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function(b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function(b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function() {
            return 1 === a.page
        }, a.noNext = function() {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }]).constant("paginationConfig", {itemsPerPage: 10,boundaryLinks: !1,directionLinks: !0,firstText: "First",previousText: "Previous",nextText: "Next",lastText: "Last",rotate: !0}).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
        return {restrict: "EA",scope: {totalItems: "=",firstText: "@",previousText: "@",nextText: "@",lastText: "@"},require: ["pagination", "?ngModel"],controller: "PaginationController",templateUrl: "template/pagination/pagination.html",replace: !0,link: function(c, d, e, f) {
                function g(a, b, c) {
                    return {number: a,text: b,active: c}
                }
                function h(a, b) {
                    var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }
                var i = f[0], j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function() {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }}
    }]).constant("pagerConfig", {itemsPerPage: 10,previousText: "« Previous",nextText: "Next »",align: !0}).directive("pager", ["pagerConfig", function(a) {
        return {restrict: "EA",scope: {totalItems: "=",previousText: "@",nextText: "@"},require: ["pager", "?ngModel"],controller: "PaginationController",templateUrl: "template/pagination/pager.html",replace: !0,link: function(b, c, d, e) {
                var f = e[0], g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }}
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g, c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {placement: "top",animation: !0,popupDelay: 0}, c = {mouseenter: "mouseleave",click: "click",focus: "blur"}, d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
            return function(e, k, l) {
                function m(a) {
                    var b = a || n.trigger || l, d = c[b] || b;
                    return {show: b,hide: d}
                }
                var n = angular.extend({}, b, d), o = a(e), p = j.startSymbol(), q = j.endSymbol(), r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
                return {restrict: "EA",compile: function() {
                        var a = f(r);
                        return function(b, c, d) {
                            function f() {
                                D.isOpen ? l() : j()
                            }
                            function j() {
                                (!C || b.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                    a()
                                })) : o()())
                            }
                            function l() {
                                b.$apply(function() {
                                    p()
                                })
                            }
                            function o() {
                                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({top: 0,left: 0,display: "block"}), A ? h.find("body").append(w) : c.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                            }
                            function p() {
                                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                            }
                            function q() {
                                w && r(), x = D.$new(), w = a(x, angular.noop)
                            }
                            function r() {
                                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                            }
                            function s() {
                                t(), u()
                            }
                            function t() {
                                var a = d[k + "Placement"];
                                D.placement = angular.isDefined(a) ? a : n.placement
                            }
                            function u() {
                                var a = d[k + "PopupDelay"], b = parseInt(a, 10);
                                D.popupDelay = isNaN(b) ? n.popupDelay : b
                            }
                            function v() {
                                var a = d[k + "Trigger"];
                                F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l))
                            }
                            var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1, B = m(void 0), C = angular.isDefined(d[k + "Enable"]), D = b.$new(!0), E = function() {
                                var a = i.positionElements(c, w, D.placement, A);
                                a.top += "px", a.left += "px", w.css(a)
                            };
                            D.isOpen = !1, d.$observe(e, function(a) {
                                D.content = a, !a && D.isOpen && p()
                            }), d.$observe(k + "Title", function(a) {
                                D.title = a
                            });
                            var F = function() {
                                c.unbind(B.show, j), c.unbind(B.hide, l)
                            };
                            v();
                            var G = b.$eval(d[k + "Animation"]);
                            D.animation = angular.isDefined(G) ? !!G : n.animation;
                            var H = b.$eval(d[k + "AppendToBody"]);
                            A = angular.isDefined(H) ? H : A, A && b.$on("$locationChangeSuccess", function() {
                                D.isOpen && p()
                            }), b.$on("$destroy", function() {
                                g.cancel(y), g.cancel(z), F(), r(), D = null
                            })
                        }
                    }}
            }
        }]
}).directive("tooltipPopup", function() {
    return {restrict: "EA",replace: !0,scope: {content: "@",placement: "@",animation: "&",isOpen: "&"},templateUrl: "template/tooltip/tooltip-popup.html"}
}).directive("tooltip", ["$tooltip", function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipHtmlUnsafePopup", function() {
    return {restrict: "EA",replace: !0,scope: {content: "@",placement: "@",animation: "&",isOpen: "&"},templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"}
}).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {restrict: "EA",replace: !0,scope: {title: "@",content: "@",placement: "@",animation: "&",isOpen: "&"},templateUrl: "template/popover/popover.html"}
}).directive("popover", ["$tooltip", function(a) {
        return a("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {animate: !0,max: 100}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
        var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
            e || c.css({transition: "none"}), this.bars.push(b), b.$watch("value", function(c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function() {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function(a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }]).directive("progress", function() {
    return {restrict: "EA",replace: !0,transclude: !0,controller: "ProgressController",require: "progress",scope: {},templateUrl: "template/progressbar/progress.html"}
}).directive("bar", function() {
    return {restrict: "EA",replace: !0,transclude: !0,require: "^progress",scope: {value: "=",type: "@"},templateUrl: "template/progressbar/bar.html",link: function(a, b, c, d) {
            d.addBar(a, b)
        }}
}).directive("progressbar", function() {
    return {restrict: "EA",replace: !0,transclude: !0,controller: "ProgressController",scope: {value: "=",type: "@"},templateUrl: "template/progressbar/progressbar.html",link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }}
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {max: 5,stateOn: null,stateOff: null}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
        var d = {$setViewValue: angular.noop};
        this.init = function(e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function(a) {
            for (var b = 0, c = a.length; c > b; b++)
                a[b] = angular.extend({index: b}, {stateOn: this.stateOn,stateOff: this.stateOff}, a[b]);
            return a
        }, a.rate = function(b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function(b) {
            a.readonly || (a.value = b), a.onHover({value: b})
        }, a.reset = function() {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function(b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function() {
            a.value = d.$viewValue
        }
    }]).directive("rating", function() {
    return {restrict: "EA",require: ["rating", "ngModel"],scope: {readonly: "=?",onHover: "&",onLeave: "&"},controller: "RatingController",templateUrl: "template/rating/rating.html",replace: !0,link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f && e.init(f)
        }}
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
        var b = this, c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function(a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function(a) {
            var e = c.indexOf(a);
            if (a.active && c.length > 1 && !d) {
                var f = e == c.length - 1 ? e - 1 : e + 1;
                b.select(c[f])
            }
            c.splice(e, 1)
        };
        var d;
        a.$on("$destroy", function() {
            d = !0
        })
    }]).directive("tabset", function() {
    return {restrict: "EA",transclude: !0,replace: !0,scope: {type: "@"},controller: "TabsetController",templateUrl: "template/tabs/tabset.html",link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }}
}).directive("tab", ["$parse", function(a) {
        return {require: "^tabset",restrict: "EA",replace: !0,templateUrl: "template/tabs/tab.html",transclude: !0,scope: {active: "=?",heading: "@",onSelect: "&select",onDeselect: "&deselect"},controller: function() {
            },compile: function(b, c, d) {
                return function(b, c, e, f) {
                    b.$watch("active", function(a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !!a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }}
    }]).directive("tabHeadingTransclude", [function() {
        return {restrict: "A",require: "^tab",link: function(a, b) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }}
    }]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {restrict: "A",require: "^tabset",link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }}
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {hourStep: 1,minuteStep: 1,showMeridian: !0,meridians: null,readonlyInput: !1,mousewheel: !0}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
        function g() {
            var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
            return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
        }
        function h() {
            var b = parseInt(a.minutes, 10);
            return b >= 0 && 60 > b ? b : void 0
        }
        function i(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }
        function j(a) {
            k(), o.$setViewValue(new Date(n)), l(a)
        }
        function k() {
            o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
        }
        function l(b) {
            var c = n.getHours(), d = n.getMinutes();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
        }
        function m(a) {
            var b = new Date(n.getTime() + 6e4 * a);
            n.setHours(b.getHours(), b.getMinutes()), j()
        }
        var n = new Date, o = {$setViewValue: angular.noop}, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
        this.init = function(c, d) {
            o = c, o.$render = this.render;
            var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
            h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
        };
        var q = f.hourStep;
        b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
            q = parseInt(a, 10)
        });
        var r = f.minuteStep;
        b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
            r = parseInt(a, 10)
        }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
            if (a.showMeridian = !!b, o.$error.time) {
                var c = g(), d = h();
                angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
            } else
                l()
        }), this.setupMousewheelEvents = function(b, c) {
            var d = function(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                return a.detail || b > 0
            };
            b.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
            }), c.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
            })
        }, this.setupInputEvents = function(b, c) {
            if (a.readonlyInput)
                return a.updateHours = angular.noop, void (a.updateMinutes = angular.noop);
            var d = function(b, c) {
                o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
            };
            a.updateHours = function() {
                var a = g();
                angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
            }, b.bind("blur", function() {
                !a.invalidHours && a.hours < 10 && a.$apply(function() {
                    a.hours = i(a.hours)
                })
            }), a.updateMinutes = function() {
                var a = h();
                angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
            }, c.bind("blur", function() {
                !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                    a.minutes = i(a.minutes)
                })
            })
        }, this.render = function() {
            var a = o.$modelValue ? new Date(o.$modelValue) : null;
            isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
        }, a.incrementHours = function() {
            m(60 * q)
        }, a.decrementHours = function() {
            m(60 * -q)
        }, a.incrementMinutes = function() {
            m(r)
        }, a.decrementMinutes = function() {
            m(-r)
        }, a.toggleMeridian = function() {
            m(720 * (n.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function() {
    return {restrict: "EA",require: ["timepicker", "?^ngModel"],controller: "TimepickerController",replace: !0,scope: {},templateUrl: "template/timepicker/timepicker.html",link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f && e.init(f, b.find("input"))
        }}
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
        var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {parse: function(c) {
                var d = c.match(b);
                if (!d)
                    throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {itemName: d[3],source: a(d[4]),viewMapper: a(d[2] || d[1]),modelMapper: a(d[1])}
            }}
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {require: "ngModel",link: function(i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1, u = i.$eval(k.typeaheadFocusFirst) !== !1, v = b(k.ngModel).assign, w = g.parse(k.typeahead), x = i.$new();
                i.$on("$destroy", function() {
                    x.$destroy()
                });
                var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({"aria-autocomplete": "list","aria-expanded": !1,"aria-owns": y});
                var z = angular.element("<div typeahead-popup></div>");
                z.attr({id: y,matches: "matches",active: "activeIdx",select: "select(activeIdx)",query: "query",position: "position"}), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
                var A = function() {
                    x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                }, B = function(a) {
                    return y + "-option-" + a
                };
                x.$watch("activeIdx", function(a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
                });
                var C = function(a) {
                    var b = {$viewValue: a};
                    q(i, !0), c.when(w.source(i, b)).then(function(c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                                for (var e = 0; e < c.length; e++)
                                    b[w.itemName] = c[e], x.matches.push({id: B(e),label: w.viewMapper(x, b),model: c[e]});
                                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else
                                A();
                        d && q(i, !1)
                    }, function() {
                        A(), q(i, !1)
                    })
                };
                A(), x.query = void 0;
                var D, E = function(a) {
                    D = d(function() {
                        C(a)
                    }, o)
                }, F = function() {
                    D && d.cancel(D)
                };
                l.$parsers.unshift(function(a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function(a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function(a) {
                    var b, c, e = {};
                    e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {$item: c,$model: b,$label: w.viewMapper(i, e)}), A(), d(function() {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function(a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
                }), j.bind("blur", function() {
                    m = !1
                });
                var G = function(a) {
                    j[0] !== a.target && (A(), x.$digest())
                };
                e.bind("click", G), i.$on("$destroy", function() {
                    e.unbind("click", G), t && H.remove()
                });
                var H = a(z)(x);
                t ? e.find("body").append(H) : j.after(H)
            }}
    }]).directive("typeaheadPopup", function() {
    return {restrict: "EA",scope: {matches: "=",query: "=",active: "=",position: "=",select: "&"},replace: !0,templateUrl: "template/typeahead/typeahead-popup.html",link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({activeIdx: b})
            }
        }}
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
        return {restrict: "EA",scope: {index: "=",match: "=",query: "="},link: function(e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {cache: b}).success(function(a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }}
    }]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
        a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
        a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
    }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
        a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
        a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
    }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }]), function(a) {
    var b, c, d = "0.4.2", e = "hasOwnProperty", f = /[\.\/]/, g = "*", h = function() {
    }, i = function(a, b) {
        return a - b
    }, j = {n: {}}, k = function(a, d) {
        a = String(a);
        var e, f = c, g = Array.prototype.slice.call(arguments, 2), h = k.listeners(a), j = 0, l = [], m = {}, n = [], o = b;
        b = a, c = 0;
        for (var p = 0, q = h.length; q > p; p++)
            "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
        for (l.sort(i); l[j] < 0; )
            if (e = m[l[j++]], n.push(e.apply(d, g)), c)
                return c = f, n;
        for (p = 0; q > p; p++)
            if (e = h[p], "zIndex" in e)
                if (e.zIndex == l[j]) {
                    if (n.push(e.apply(d, g)), c)
                        break;
                    do
                        if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c)
                            break;
                    while (e)
                } else
                    m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c)
                break;
        return c = f, b = o, n.length ? n : null
    };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f), n = j, o = [n], p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--; )
                    b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b)
            return function() {
            };
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++)
            d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {n: {}});
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
            if (d.f[e] == b)
                return h;
        return d.f.push(b), function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, k.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function() {
        c = 1
    }, k.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function() {
        return b.split(f)
    }, k.off = k.unbind = function(a, b) {
        if (!a)
            return void (k._events = j = {n: {}});
        var c, d, h, i, l, m, n, o = a.split(f), p = [j];
        for (i = 0, l = o.length; l > i; i++)
            for (m = 0; m < p.length; m += h.length - 2) {
                if (h = [m, 1], c = p[m].n, o[i] != g)
                    c[o[i]] && h.push(c[o[i]]);
                else
                    for (d in c)
                        c[e](d) && h.push(c[d]);
                p.splice.apply(p, h)
            }
        for (i = 0, l = p.length; l > i; i++)
            for (c = p[i]; c.n; ) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) {
                                c.f.splice(m, 1);
                                break
                            }
                        !c.f.length && delete c.f
                    }
                    for (d in c.n)
                        if (c.n[e](d) && c.n[d].f) {
                            var q = c.n[d].f;
                            for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) {
                                    q.splice(m, 1);
                                    break
                                }
                            !q.length && delete c.n[d].f
                        }
                } else {
                    delete c.f;
                    for (d in c.n)
                        c.n[e](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
    }, k.once = function(a, b) {
        var c = function() {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k
    }) : a.eve = k
}(window || this), function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve || "function" == typeof require && require("eve"))
}(this, function(a, b) {
    function c(a) {
        if (c.is(a, "function"))
            return u ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, V))
            return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
        var d = Array.prototype.slice.call(arguments, 0);
        if (c.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
                e.call(c._engine.create[D](c, d))
            })
        }
        return c._engine.create[D](c, arguments)
    }
    function d(a) {
        if ("function" == typeof a || Object(a) !== a)
            return a;
        var b = new a.constructor;
        for (var c in a)
            a[z](c) && (b[c] = d(a[c]));
        return b
    }
    function e(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return a.push(a.splice(c, 1)[0])
    }
    function f(a, b, c) {
        function d() {
            var f = Array.prototype.slice.call(arguments, 0), g = f.join("␀"), h = d.cache = d.cache || {}, i = d.count = d.count || [];
            return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
        }
        return d
    }
    function g() {
        return this.hex
    }
    function h(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{x: +a[d - 2],y: +a[d - 1]}, {x: +a[d],y: +a[d + 1]}, {x: +a[d + 2],y: +a[d + 3]}, {x: +a[d + 4],y: +a[d + 5]}];
            b ? d ? e - 4 == d ? f[3] = {x: +a[0],y: +a[1]} : e - 2 == d && (f[2] = {x: +a[0],y: +a[1]}, f[3] = {x: +a[2],y: +a[3]}) : f[0] = {x: +a[e - 2],y: +a[e - 1]} : e - 4 == d ? f[3] = f[2] : d || (f[0] = {x: +a[d],y: +a[d + 1]}), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }
    function i(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e, g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }
    function j(a, b, c, d, e, f, g, h, j) {
        null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
        for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
            var q = k * m[p] + k, r = i(q, a, c, e, g), s = i(q, b, d, f, h), t = r * r + s * s;
            o += n[p] * N.sqrt(t)
        }
        return k * o
    }
    function k(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
            var k, l = 1, m = l / 2, n = l - m, o = .01;
            for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o; )
                m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
            return n
        }
    }
    function l(a, b, c, d, e, f, g, h) {
        if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g), j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g), k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k, m = j / k, n = +l.toFixed(2), o = +m.toFixed(2);
                if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2)))
                    return {x: l,y: m}
            }
        }
    }
    function m(a, b, d) {
        var e = c.bezierBBox(a), f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f))
            return d ? 0 : [];
        for (var g = j.apply(0, a), h = j.apply(0, b), i = O(~~(g / 5), 1), k = O(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
            var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
            m.push({x: r.x,y: r.y,t: q / i})
        }
        for (q = 0; k + 1 > q; q++)
            r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({x: r.x,y: r.y,t: q / k});
        for (q = 0; i > q; q++)
            for (var s = 0; k > s; s++) {
                var t = m[q], u = m[q + 1], v = n[s], w = n[s + 1], x = Q(u.x - t.x) < .001 ? "y" : "x", y = Q(w.x - v.x) < .001 ? "y" : "x", z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
                if (z) {
                    if (o[z.x.toFixed(4)] == z.y.toFixed(4))
                        continue;
                    o[z.x.toFixed(4)] = z.y.toFixed(4);
                    var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t), B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                    A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({x: z.x,y: z.y,t1: P(A, 1),t2: P(B, 1)}))
                }
            }
        return p
    }
    function n(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
            var s = a[q];
            if ("M" == s[0])
                e = i = s[1], f = j = s[2];
            else {
                "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var t = 0, u = b.length; u > t; t++) {
                    var v = b[t];
                    if ("M" == v[0])
                        g = k = v[1], h = l = v[2];
                    else {
                        "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var w = m(n, o, d);
                        if (d)
                            p += w;
                        else {
                            for (var x = 0, y = w.length; y > x; x++)
                                w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w)
                        }
                    }
                }
            }
        }
        return p
    }
    function o(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }
    function p() {
        return this.x + H + this.y + H + this.width + " × " + this.height
    }
    function q(a, b, c, d, e, f) {
        function g(a) {
            return ((l * a + k) * a + j) * a
        }
        function h(a, b) {
            var c = i(a, b);
            return ((o * c + n) * c + m) * c
        }
        function i(a, b) {
            var c, d, e, f, h, i;
            for (e = a, i = 0; 8 > i; i++) {
                if (f = g(e) - a, Q(f) < b)
                    return e;
                if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6)
                    break;
                e -= f / h
            }
            if (c = 0, d = 1, e = a, c > e)
                return c;
            if (e > d)
                return d;
            for (; d > c; ) {
                if (f = g(e), Q(f - a) < b)
                    return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        var j = 3 * b, k = 3 * (d - b) - j, l = 1 - j - k, m = 3 * c, n = 3 * (e - c) - m, o = 1 - m - n;
        return h(a, 1 / (200 * f))
    }
    function r(a, b) {
        var c = [], d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a)
                a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
            c.sort(lb)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }
    function s(a, d, e, f, g, h) {
        e = _(e);
        var i, j, k, l, m, n, p = a.ms, r = {}, s = {}, t = {};
        if (f)
            for (v = 0, x = ic.length; x > v; v++) {
                var u = ic[v];
                if (u.el.id == d.id && u.anim == a) {
                    u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                    break
                }
            }
        else
            f = +s;
        for (var v = 0, x = a.percents.length; x > v; v++) {
            if (a.percents[v] == e || a.percents[v] > f * a.top) {
                e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
                break
            }
            f && d.attr(a.anim[a.percents[v]])
        }
        if (i) {
            if (j)
                j.initstatus = f, j.start = new Date - j.ms * f;
            else {
                for (var y in i)
                    if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y)))
                        switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
                            case T:
                                t[y] = (s[y] - r[y]) / p;
                                break;
                            case "colour":
                                r[y] = c.getRGB(r[y]);
                                var A = c.getRGB(s[y]);
                                t[y] = {r: (A.r - r[y].r) / p,g: (A.g - r[y].g) / p,b: (A.b - r[y].b) / p};
                                break;
                            case "path":
                                var B = Kb(r[y], s[y]), C = B[1];
                                for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                                    t[y][v] = [0];
                                    for (var D = 1, F = r[y][v].length; F > D; D++)
                                        t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                                }
                                break;
                            case "transform":
                                var G = d._, H = Pb(G[y], s[y]);
                                if (H)
                                    for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)
                                        for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++)
                                            t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
                                else {
                                    var K = d.matrix || new o, L = {_: {transform: G.transform},getBBox: function() {
                                            return d.getBBox(1)
                                        }};
                                    r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
                                }
                                break;
                            case "csv":
                                var M = I(i[y])[J](w), N = I(r[y])[J](w);
                                if ("clip-rect" == y)
                                    for (r[y] = N, t[y] = [], v = N.length; v--; )
                                        t[y][v] = (M[v] - r[y][v]) / p;
                                s[y] = M;
                                break;
                            default:
                                for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--; )
                                    t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
                        }
                var O = i.easing, P = c.easing_formulas[O];
                if (!P)
                    if (P = I(O).match(Z), P && 5 == P.length) {
                        var Q = P;
                        P = function(a) {
                            return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
                        }
                    } else
                        P = nb;
                if (n = i.start || a.start || +new Date, u = {anim: a,percent: e,timestamp: n,start: n + (a.del || 0),status: 0,initstatus: f || 0,stop: !1,ms: p,easing: P,from: r,diff: t,to: s,el: d,callback: i.callback,prev: m,next: l,repeat: h || a.times,origin: d.attr(),totalOrigin: g}, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length))
                    return kc();
                k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }
    function t(a) {
        for (var b = 0; b < ic.length; b++)
            ic[b].el.paper == a && ic.splice(b--, 1)
    }
    c.version = "2.1.2", c.eve = b;
    var u, v, w = /[, ]+/, x = {circle: 1,rect: 1,path: 1,ellipse: 1,text: 1,image: 1}, y = /\{(\d+)\}/g, z = "hasOwnProperty", A = {doc: document,win: a}, B = {was: Object.prototype[z].call(A.win, "Raphael"),is: A.win.Raphael}, C = function() {
        this.ca = this.customAttributes = {}
    }, D = "apply", E = "concat", F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch, G = "", H = " ", I = String, J = "split", K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H), L = {mousedown: "touchstart",mousemove: "touchmove",mouseup: "touchend"}, M = I.prototype.toLowerCase, N = Math, O = N.max, P = N.min, Q = N.abs, R = N.pow, S = N.PI, T = "number", U = "string", V = "array", W = Object.prototype.toString, X = (c._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), Y = {NaN: 1,Infinity: 1,"-Infinity": 1}, Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, $ = N.round, _ = parseFloat, ab = parseInt, bb = I.prototype.toUpperCase, cb = c._availableAttrs = {"arrow-end": "none","arrow-start": "none",blur: 0,"clip-rect": "0 0 1e9 1e9",cursor: "default",cx: 0,cy: 0,fill: "#fff","fill-opacity": 1,font: '10px "Arial"',"font-family": '"Arial"',"font-size": "10","font-style": "normal","font-weight": 400,gradient: 0,height: 0,href: "http://raphaeljs.com/","letter-spacing": 0,opacity: 1,path: "M0,0",r: 0,rx: 0,ry: 0,src: "",stroke: "#000","stroke-dasharray": "","stroke-linecap": "butt","stroke-linejoin": "butt","stroke-miterlimit": 0,"stroke-opacity": 1,"stroke-width": 1,target: "_blank","text-anchor": "middle",title: "Raphael",transform: "",width: 0,x: 0,y: 0}, db = c._availableAnimAttrs = {blur: T,"clip-rect": "csv",cx: T,cy: T,fill: "colour","fill-opacity": T,"font-size": T,height: T,opacity: T,path: "path",r: T,rx: T,ry: T,stroke: "colour","stroke-opacity": T,"stroke-width": T,transform: "transform",width: T,x: T,y: T}, eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, fb = {hs: 1,rg: 1}, gb = /,?([achlmqrstvxz]),?/gi, hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), lb = function(a, b) {
        return _(a) - _(b)
    }, mb = function() {
    }, nb = function(a) {
        return a
    }, ob = c._rectPath = function(a, b, c, d, e) {
        return e ? [["M", a + e, b], ["l", c - 2 * e, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - 2 * e], ["a", e, e, 0, 0, 1, -e, e], ["l", 2 * e - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, 2 * e - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]] : [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
    }, pb = function(a, b, c, d) {
        return null == d && (d = c), [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
    }, qb = c._getPath = {path: function(a) {
            return a.attr("path")
        },circle: function(a) {
            var b = a.attrs;
            return pb(b.cx, b.cy, b.r)
        },ellipse: function(a) {
            var b = a.attrs;
            return pb(b.cx, b.cy, b.rx, b.ry)
        },rect: function(a) {
            var b = a.attrs;
            return ob(b.x, b.y, b.width, b.height, b.r)
        },image: function(a) {
            var b = a.attrs;
            return ob(b.x, b.y, b.width, b.height)
        },text: function(a) {
            var b = a._getBBox();
            return ob(b.x, b.y, b.width, b.height)
        },set: function(a) {
            var b = a._getBBox();
            return ob(b.x, b.y, b.width, b.height)
        }}, rb = c.mapPath = function(a, b) {
        if (!b)
            return a;
        var c, d, e, f, g, h, i;
        for (a = Kb(a), e = 0, g = a.length; g > e; e++)
            for (i = a[e], f = 1, h = i.length; h > f; f += 2)
                c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
        return a
    };
    if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var sb, tb = A.doc.createElement("div");
        if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj)
            return c.type = G;
        tb = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
        return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, -1).toLowerCase() == b
    }, c.angle = function(a, b, d, e, f, g) {
        if (null == f) {
            var h = a - d, i = b - e;
            return h || i ? (180 + 180 * N.atan2(-i, -h) / S + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
    }, c.rad = function(a) {
        return a % 360 * S / 180
    }, c.deg = function(a) {
        return 180 * a / S % 360
    }, c.snapTo = function(a, b, d) {
        if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
            for (var e = a.length; e--; )
                if (Q(a[e] - b) <= d)
                    return a[e]
        } else {
            a = +a;
            var f = b % a;
            if (d > f)
                return b - f;
            if (f > a - d)
                return b - f + a
        }
        return b
    };
    c.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = 16 * N.random() | 0, c = "x" == a ? b : 3 & b | 8;
        return c.toString(16)
    });
    c.setWindow = function(a) {
        b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
    };
    var ub = function(a) {
        if (c.vml) {
            var b, d = /^\s+|\s+$/g;
            try {
                var e = new ActiveXObject("htmlfile");
                e.write("<body>"), e.close(), b = e.body
            } catch (g) {
                b = createPopup().document.body
            }
            var h = b.createTextRange();
            ub = f(function(a) {
                try {
                    b.style.color = I(a).replace(d, G);
                    var c = h.queryCommandValue("ForeColor");
                    return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
                } catch (e) {
                    return "none"
                }
            })
        } else {
            var i = A.doc.createElement("i");
            i.title = "Raphaël Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ub = f(function(a) {
                return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
            })
        }
        return ub(a)
    }, vb = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }, wb = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }, xb = function() {
        return this.hex
    }, yb = function(a, b, d) {
        if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
            var e = c.getRGB(a);
            a = e.r, b = e.g, d = e.b
        }
        return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
    }, zb = function(a, b, d, e) {
        a *= 255, b *= 255, d *= 255;
        var f = {r: a,g: b,b: d,hex: c.rgb(a, b, d),toString: xb};
        return c.is(e, "finite") && (f.opacity = e), f
    };
    c.color = function(a) {
        var b;
        return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {hex: "none"}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xb, a
    }, c.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.rgb2hsb = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {h: d,s: e,b: f,toString: vb}
    }, c.rgb2hsl = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {h: d,s: e,l: f,toString: wb}
    }, c._path2string = function() {
        return this.join(",").replace(gb, "$1")
    };
    c._preload = function(a, b) {
        var c = A.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, A.doc.body.removeChild(this)
        }, c.onerror = function() {
            A.doc.body.removeChild(this)
        }, A.doc.body.appendChild(c), c.src = a
    };
    c.getRGB = f(function(a) {
        if (!a || (a = I(a)).indexOf("-") + 1)
            return {r: -1,g: -1,b: -1,hex: "none",error: 1,toString: g};
        if ("none" == a)
            return {r: -1,g: -1,b: -1,hex: "none",toString: g};
        !(fb[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ub(a));
        var b, d, e, f, h, i, j = a.match(X);
        return j ? (j[2] && (e = ab(j[2].substring(5), 16), d = ab(j[2].substring(3, 5), 16), b = ab(j[2].substring(1, 3), 16)), j[3] && (e = ab((h = j[3].charAt(3)) + h, 16), d = ab((h = j[3].charAt(2)) + h, 16), b = ab((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {r: b,g: d,b: e,toString: g}, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {r: -1,g: -1,b: -1,hex: "none",error: 1,toString: g}
    }, c), c.hsb = f(function(a, b, d) {
        return c.hsb2rgb(a, b, d).hex
    }), c.hsl = f(function(a, b, d) {
        return c.hsl2rgb(a, b, d).hex
    }), c.rgb = f(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), c.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {h: 0,s: 1,b: a || .75}, c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {h: 0,s: 1,b: b.b})), c.hex
    }, c.getColor.reset = function() {
        delete this.start
    }, c.parsePathString = function(a) {
        if (!a)
            return null;
        var b = Ab(a);
        if (b.arr)
            return Cb(b.arr);
        var d = {a: 7,c: 6,h: 1,l: 2,m: 2,r: 4,q: 4,s: 4,t: 2,v: 1,z: 0}, e = [];
        return c.is(a, V) && c.is(a[0], V) && (e = Cb(a)), e.length || I(a).replace(hb, function(a, b, c) {
            var f = [], g = b.toLowerCase();
            if (c.replace(jb, function(a, b) {
                b && f.push(+b)
            }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g)
                e.push([b][E](f));
            else
                for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]); )
                    ;
        }), e.toString = c._path2string, b.arr = Cb(e), e
    }, c.parseTransformString = f(function(a) {
        if (!a)
            return null;
        var b = [];
        return c.is(a, V) && c.is(a[0], V) && (b = Cb(a)), b.length || I(a).replace(ib, function(a, c, d) {
            {
                var e = [];
                M.call(c)
            }
            d.replace(jb, function(a, b) {
                b && e.push(+b)
            }), b.push([c][E](e))
        }), b.toString = c._path2string, b
    });
    var Ab = function(a) {
        var b = Ab.ps = Ab.ps || {};
        return b[a] ? b[a].sleep = 100 : b[a] = {sleep: 100}, setTimeout(function() {
            for (var c in b)
                b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }), b[a]
    };
    c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i, k = R(j, 3), l = R(j, 2), m = i * i, n = m * i, o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g, p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h, q = a + 2 * i * (c - a) + m * (e - 2 * c + a), r = b + 2 * i * (d - b) + m * (f - 2 * d + b), s = c + 2 * i * (e - c) + m * (g - 2 * e + c), t = d + 2 * i * (f - d) + m * (h - 2 * f + d), u = j * a + i * c, v = j * b + i * d, w = j * e + i * g, x = j * f + i * h, y = 90 - 180 * N.atan2(q - s, r - t) / S;
        return (q > s || t > r) && (y += 180), {x: o,y: p,m: {x: q,y: r},n: {x: s,y: t},start: {x: u,y: v},end: {x: w,y: x},alpha: y}
    }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
        var j = Jb.apply(null, a);
        return {x: j.min.x,y: j.min.y,x2: j.max.x,y2: j.max.y,width: j.max.x - j.min.x,height: j.max.y - j.min.y}
    }, c.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, c.isBBoxIntersect = function(a, b) {
        var d = c.isPointInsideBBox;
        return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }, c.pathIntersection = function(a, b) {
        return n(a, b)
    }, c.pathIntersectionNumber = function(a, b) {
        return n(a, b, 1)
    }, c.isPointInsidePath = function(a, b, d) {
        var e = c.pathBBox(a);
        return c.isPointInsideBBox(e, b, d) && n(a, [["M", b, d], ["H", e.x2 + 10]], 1) % 2 == 1
    }, c._removedFactory = function(a) {
        return function() {
            b("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var Bb = c.pathBBox = function(a) {
        var b = Ab(a);
        if (b.bbox)
            return d(b.bbox);
        if (!a)
            return {x: 0,y: 0,width: 0,height: 0,x2: 0,y2: 0};
        a = Kb(a);
        for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
            if (c = a[i], "M" == c[0])
                e = c[1], f = c[2], g.push(e), h.push(f);
            else {
                var k = Jb(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
                g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
            }
        var l = P[D](0, g), m = P[D](0, h), n = O[D](0, g), o = O[D](0, h), p = n - l, q = o - m, r = {x: l,y: m,x2: n,y2: o,width: p,height: q,cx: l + p / 2,cy: m + q / 2};
        return b.bbox = d(r), r
    }, Cb = function(a) {
        var b = d(a);
        return b.toString = c._path2string, b
    }, Db = c._pathToRelative = function(a) {
        var b = Ab(a);
        if (b.rel)
            return Cb(b.rel);
        c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
        var d = [], e = 0, f = 0, g = 0, h = 0, i = 0;
        "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
        for (var j = i, k = a.length; k > j; j++) {
            var l = d[j] = [], m = a[j];
            if (m[0] != M.call(m[0]))
                switch (l[0] = M.call(m[0]), l[0]) {
                    case "a":
                        l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                        break;
                    case "v":
                        l[1] = +(m[1] - f).toFixed(3);
                        break;
                    case "m":
                        g = m[1], h = m[2];
                    default:
                        for (var n = 1, o = m.length; o > n; n++)
                            l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                }
            else {
                l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                for (var p = 0, q = m.length; q > p; p++)
                    d[j][p] = m[p]
            }
            var r = d[j].length;
            switch (d[j][0]) {
                case "z":
                    e = g, f = h;
                    break;
                case "h":
                    e += +d[j][r - 1];
                    break;
                case "v":
                    f += +d[j][r - 1];
                    break;
                default:
                    e += +d[j][r - 2], f += +d[j][r - 1]
            }
        }
        return d.toString = c._path2string, b.rel = Cb(d), d
    }, Eb = c._pathToAbsolute = function(a) {
        var b = Ab(a);
        if (b.abs)
            return Cb(b.abs);
        if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length)
            return [["M", 0, 0]];
        var d = [], e = 0, f = 0, g = 0, i = 0, j = 0;
        "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
        for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
            if (d.push(k = []), l = a[n], l[0] != bb.call(l[0]))
                switch (k[0] = bb.call(l[0]), k[0]) {
                    case "A":
                        k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                        break;
                    case "V":
                        k[1] = +l[1] + f;
                        break;
                    case "H":
                        k[1] = +l[1] + e;
                        break;
                    case "R":
                        for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++)
                            p[q] = +p[q] + e, p[++q] = +p[q] + f;
                        d.pop(), d = d[E](h(p, m));
                        break;
                    case "M":
                        g = +l[1] + e, i = +l[2] + f;
                    default:
                        for (q = 1, r = l.length; r > q; q++)
                            k[q] = +l[q] + (q % 2 ? e : f)
                }
            else if ("R" == l[0])
                p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
            else
                for (var s = 0, t = l.length; t > s; s++)
                    k[s] = l[s];
            switch (k[0]) {
                case "Z":
                    e = g, f = i;
                    break;
                case "H":
                    e = k[1];
                    break;
                case "V":
                    f = k[1];
                    break;
                case "M":
                    g = k[k.length - 2], i = k[k.length - 1];
                default:
                    e = k[k.length - 2], f = k[k.length - 1]
            }
        }
        return d.toString = c._path2string, b.abs = Cb(d), d
    }, Fb = function(a, b, c, d) {
        return [a, b, c, d, c, d]
    }, Gb = function(a, b, c, d, e, f) {
        var g = 1 / 3, h = 2 / 3;
        return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }, Hb = function(a, b, c, d, e, g, h, i, j, k) {
        var l, m = 120 * S / 180, n = S / 180 * (+e || 0), o = [], p = f(function(a, b, c) {
            var d = a * N.cos(c) - b * N.sin(c), e = a * N.sin(c) + b * N.cos(c);
            return {x: d,y: e}
        });
        if (k)
            y = k[0], z = k[1], w = k[2], x = k[3];
        else {
            l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
            var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2), r = (b - j) / 2, s = q * q / (c * c) + r * r / (d * d);
            s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
            var t = c * c, u = d * d, v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))), w = v * c * r / d + (a + i) / 2, x = v * -d * q / c + (b + j) / 2, y = N.asin(((b - x) / d).toFixed(9)), z = N.asin(((j - x) / d).toFixed(9));
            y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
        }
        var A = z - y;
        if (Q(A) > m) {
            var B = z, C = i, D = j;
            z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Hb(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
        }
        A = z - y;
        var F = N.cos(y), G = N.sin(y), H = N.cos(z), I = N.sin(z), K = N.tan(A / 4), L = 4 / 3 * c * K, M = 4 / 3 * d * K, O = [a, b], P = [a + L * G, b - M * F], R = [i + L * I, j - M * H], T = [i, j];
        if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k)
            return [P, R, T][E](o);
        o = [P, R, T][E](o).join()[J](",");
        for (var U = [], V = 0, W = o.length; W > V; V++)
            U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
        return U
    }, Ib = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i;
        return {x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h}
    }, Jb = f(function(a, b, c, d, e, f, g, h) {
        var i, j = e - 2 * c + a - (g - 2 * e + c), k = 2 * (c - a) - 2 * (e - c), l = a - c, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, o = [b, h], p = [a, g];
        return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {min: {x: P[D](0, p),y: P[D](0, o)},max: {x: O[D](0, p),y: O[D](0, o)}}
    }), Kb = c._path2curve = f(function(a, b) {
        var c = !b && Ab(a);
        if (!b && c.curve)
            return Cb(c.curve);
        for (var d = Eb(a), e = b && Eb(b), f = {x: 0,y: 0,bx: 0,by: 0,X: 0,Y: 0,qx: null,qy: null}, g = {x: 0,y: 0,bx: 0,by: 0,X: 0,Y: 0,qx: null,qy: null}, h = (function(a, b, c) {
            var d, e, f = {T: 1,Q: 1};
            if (!a)
                return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
            switch (!(a[0] in f) && (b.qx = b.qy = null), a[0]) {
                case "M":
                    b.X = a[1], b.Y = a[2];
                    break;
                case "A":
                    a = ["C"][E](Hb[D](0, [b.x, b.y][E](a.slice(1))));
                    break;
                case "S":
                    "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][E](a.slice(1));
                    break;
                case "T":
                    "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][E](Gb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                    break;
                case "Q":
                    b.qx = a[1], b.qy = a[2], a = ["C"][E](Gb(b.x, b.y, a[1], a[2], a[3], a[4]));
                    break;
                case "L":
                    a = ["C"][E](Fb(b.x, b.y, a[1], a[2]));
                    break;
                case "H":
                    a = ["C"][E](Fb(b.x, b.y, a[1], b.y));
                    break;
                case "V":
                    a = ["C"][E](Fb(b.x, b.y, b.x, a[1]));
                    break;
                case "Z":
                    a = ["C"][E](Fb(b.x, b.y, b.X, b.Y))
            }
            return a
        }), i = function(a, b) {
            if (a[b].length > 7) {
                a[b].shift();
                for (var c = a[b]; c.length; )
                    k[b] = "A", e && (l[b] = "A"), a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
                a.splice(b, 1), p = O(d.length, e && e.length || 0)
            }
        }, j = function(a, b, c, f, g) {
            a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], p = O(d.length, e && e.length || 0))
        }, k = [], l = [], m = "", n = "", o = 0, p = O(d.length, e && e.length || 0); p > o; o++) {
            d[o] && (m = d[o][0]), "C" != m && (k[o] = m, o && (n = k[o - 1])), d[o] = h(d[o], f, n), "A" != k[o] && "C" == m && (k[o] = "C"), i(d, o), e && (e[o] && (m = e[o][0]), "C" != m && (l[o] = m, o && (n = l[o - 1])), e[o] = h(e[o], g, n), "A" != l[o] && "C" == m && (l[o] = "C"), i(e, o)), j(d, e, f, g, o), j(e, d, g, f, o);
            var q = d[o], r = e && e[o], s = q.length, t = e && r.length;
            f.x = q[s - 2], f.y = q[s - 1], f.bx = _(q[s - 4]) || f.x, f.by = _(q[s - 3]) || f.y, g.bx = e && (_(r[t - 4]) || g.x), g.by = e && (_(r[t - 3]) || g.y), g.x = e && r[t - 2], g.y = e && r[t - 1]
        }
        return e || (c.curve = Cb(d)), e ? [d, e] : d
    }, null, Cb), Lb = (c._parseDots = f(function(a) {
        for (var b = [], d = 0, e = a.length; e > d; d++) {
            var f = {}, g = a[d].match(/^([^:]*):?([\d\.]*)/);
            if (f.color = c.getRGB(g[1]), f.color.error)
                return null;
            f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
        }
        for (d = 1, e = b.length - 1; e > d; d++)
            if (!b[d].offset) {
                for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                    if (b[j].offset) {
                        i = b[j].offset;
                        break
                    }
                i || (i = 100, j = e), i = _(i);
                for (var k = (i - h) / (j - d + 1); j > d; d++)
                    h += k, b[d].offset = h + "%"
            }
        return b
    }), c._tear = function(a, b) {
        a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
    }), Mb = (c._tofront = function(a, b) {
        b.top !== a && (Lb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
    }, c._toback = function(a, b) {
        b.bottom !== a && (Lb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
    }, c._insertafter = function(a, b, c) {
        Lb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
    }, c._insertbefore = function(a, b, c) {
        Lb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
    }, c.toMatrix = function(a, b) {
        var c = Bb(a), d = {_: {transform: G},getBBox: function() {
                return c
            }};
        return Nb(d, b), d.matrix
    }), Nb = (c.transformPath = function(a, b) {
        return rb(a, Mb(a, b))
    }, c._extractTransform = function(a, b) {
        if (null == b)
            return a._.transform;
        b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
        var d = c.parseTransformString(b), e = 0, f = 0, g = 0, h = 1, i = 1, j = a._, k = new o;
        if (j.transform = d || [], d)
            for (var l = 0, m = d.length; m > l; l++) {
                var n, p, q, r, s, t = d[l], u = t.length, v = I(t[0]).toLowerCase(), w = t[0] != v, x = w ? k.invert() : 0;
                "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
            }
        a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
    }), Ob = function(a) {
        var b = a[0];
        switch (b.toLowerCase()) {
            case "t":
                return [b, 0, 0];
            case "m":
                return [b, 1, 0, 0, 1, 0, 0];
            case "r":
                return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
            case "s":
                return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
        }
    }, Pb = c._equaliseTransform = function(a, b) {
        b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
        for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
            if (f = a[k] || Ob(b[k]), g = b[k] || Ob(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4]))
                return;
            for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++)
                d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
        }
        return {from: i,to: j}
    };
    c._getContainer = function(a, b, d, e) {
        var f;
        return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {container: f,width: f.style.pixelWidth || f.offsetWidth,height: f.style.pixelHeight || f.offsetHeight} : {container: f,width: b,height: d} : {container: 1,x: a,y: b,width: d,height: e} : void 0
    }, c.pathToRelative = Db, c._engine = {}, c.path2curve = Kb, c.matrix = function(a, b, c, d, e, f) {
        return new o(a, b, c, d, e, f)
    }, function(a) {
        function b(a) {
            return a[0] * a[0] + a[1] * a[1]
        }
        function d(a) {
            var c = N.sqrt(b(a));
            a[0] && (a[0] /= c), a[1] && (a[1] /= c)
        }
        a.add = function(a, b, c, d, e, f) {
            var g, h, i, j, k = [[], [], []], l = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], m = [[a, c, e], [b, d, f], [0, 0, 1]];
            for (a && a instanceof o && (m = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), g = 0; 3 > g; g++)
                for (h = 0; 3 > h; h++) {
                    for (j = 0, i = 0; 3 > i; i++)
                        j += l[g][i] * m[i][h];
                    k[g][h] = j
                }
            this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
        }, a.invert = function() {
            var a = this, b = a.a * a.d - a.b * a.c;
            return new o(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
        }, a.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
        }, a.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b)
        }, a.scale = function(a, b, c, d) {
            null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
        }, a.rotate = function(a, b, d) {
            a = c.rad(a), b = b || 0, d = d || 0;
            var e = +N.cos(a).toFixed(9), f = +N.sin(a).toFixed(9);
            this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
        }, a.x = function(a, b) {
            return a * this.a + b * this.c + this.e
        }, a.y = function(a, b) {
            return a * this.b + b * this.d + this.f
        }, a.get = function(a) {
            return +this[I.fromCharCode(97 + a)].toFixed(4)
        }, a.toString = function() {
            return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, a.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, a.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, a.split = function() {
            var a = {};
            a.dx = this.e, a.dy = this.f;
            var e = [[this.a, this.c], [this.b, this.d]];
            a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
            var f = -e[0][1], g = e[1][1];
            return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
        }, a.toTransformString = function(a) {
            var b = a || this[J]();
            return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(o.prototype);
    var Qb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    v.safari = "Apple Computer, Inc." == navigator.vendor && (Qb && Qb[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qb && Qb[1] < 8 ? function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
        setTimeout(function() {
            a.remove()
        })
    } : mb;
    for (var Rb = function() {
        this.returnValue = !1
    }, Sb = function() {
        return this.originalEvent.preventDefault()
    }, Tb = function() {
        this.cancelBubble = !0
    }, Ub = function() {
        return this.originalEvent.stopPropagation()
    }, Vb = function(a) {
        var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
        return {x: a.clientX + c,y: a.clientY + b}
    }, Wb = function() {
        return A.doc.addEventListener ? function(a, b, c, d) {
            var e = function(a) {
                var b = Vb(a);
                return c.call(d, a, b.x, b.y)
            };
            if (a.addEventListener(b, e, !1), F && L[b]) {
                var f = function(b) {
                    for (var e = Vb(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                        if (b.targetTouches[g].target == a) {
                            b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Sb, b.stopPropagation = Ub;
                            break
                        }
                    return c.call(d, b, e.x, e.y)
                };
                a.addEventListener(L[b], f, !1)
            }
            return function() {
                return a.removeEventListener(b, e, !1), F && L[b] && a.removeEventListener(L[b], f, !1), !0
            }
        } : A.doc.attachEvent ? function(a, b, c, d) {
            var e = function(a) {
                a = a || A.win.event;
                var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, f = a.clientX + e, g = a.clientY + b;
                return a.preventDefault = a.preventDefault || Rb, a.stopPropagation = a.stopPropagation || Tb, c.call(d, a, f, g)
            };
            a.attachEvent("on" + b, e);
            var f = function() {
                return a.detachEvent("on" + b, e), !0
            };
            return f
        } : void 0
    }(), Xb = [], Yb = function(a) {
        for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Xb.length; h--; ) {
            if (c = Xb[h], F && a.touches) {
                for (var i, j = a.touches.length; j--; )
                    if (i = a.touches[j], i.identifier == c.el._drag.id) {
                        d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                        break
                    }
            } else
                a.preventDefault();
            var k, l = c.el.node, m = l.nextSibling, n = l.parentNode, o = l.style.display;
            A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
        }
    }, Zb = function(a) {
        c.unmousemove(Yb).unmouseup(Zb);
        for (var d, e = Xb.length; e--; )
            d = Xb[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
        Xb = []
    }, $b = c.el = {}, _b = K.length; _b--; )
        !function(a) {
            c[a] = $b[a] = function(b, d) {
                return c.is(b, "function") && (this.events = this.events || [], this.events.push({name: a,f: b,unbind: Wb(this.shape || this.node || A.doc, a, b, d || this)})), this
            }, c["un" + a] = $b["un" + a] = function(b) {
                for (var d = this.events || [], e = d.length; e--; )
                    d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
                return this
            }
        }(K[_b]);
    $b.data = function(a, d) {
        var e = kb[this.id] = kb[this.id] || {};
        if (0 == arguments.length)
            return e;
        if (1 == arguments.length) {
            if (c.is(a, "object")) {
                for (var f in a)
                    a[z](f) && this.data(f, a[f]);
                return this
            }
            return b("raphael.data.get." + this.id, this, e[a], a), e[a]
        }
        return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
    }, $b.removeData = function(a) {
        return null == a ? kb[this.id] = {} : kb[this.id] && delete kb[this.id][a], this
    }, $b.getData = function() {
        return d(kb[this.id] || {})
    }, $b.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, $b.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var ac = [];
    $b.drag = function(a, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = i.clientX, k = i.clientY, l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            if (this._drag.id = i.identifier, F && i.touches)
                for (var n, o = i.touches.length; o--; )
                    if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
                        j = n.clientX, k = n.clientY;
                        break
                    }
            this._drag.x = j + m, this._drag.y = k + l, !Xb.length && c.mousemove(Yb).mouseup(Zb), Xb.push({el: this,move_scope: f,start_scope: g,end_scope: h}), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
        }
        return this._drag = {}, ac.push({el: this,start: i}), this.mousedown(i), this
    }, $b.onDragOver = function(a) {
        a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
    }, $b.undrag = function() {
        for (var a = ac.length; a--; )
            ac[a].el == this && (this.unmousedown(ac[a].start), ac.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
        !ac.length && c.unmousemove(Yb).unmouseup(Zb), Xb = []
    }, v.circle = function(a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0);
        return this.__set__ && this.__set__.push(e), e
    }, v.rect = function(a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.ellipse = function(a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f), f
    }, v.path = function(a) {
        a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
        var b = c._engine.path(c.format[D](c, arguments), this);
        return this.__set__ && this.__set__.push(b), b
    }, v.image = function(a, b, d, e, f) {
        var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.text = function(a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, I(d));
        return this.__set__ && this.__set__.push(e), e
    }, v.set = function(a) {
        !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new mc(a);
        return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
    }, v.setStart = function(a) {
        this.__set__ = a || this.set()
    }, v.setFinish = function() {
        var a = this.__set__;
        return delete this.__set__, a
    }, v.getSize = function() {
        var a = this.canvas.parentNode;
        return {width: a.offsetWidth,height: a.offsetHeight}
    }, v.setSize = function(a, b) {
        return c._engine.setSize.call(this, a, b)
    }, v.setViewBox = function(a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
    }, v.top = v.bottom = null, v.raphael = c;
    var bc = function(a) {
        var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.body, e = c.documentElement, f = e.clientTop || d.clientTop || 0, g = e.clientLeft || d.clientLeft || 0, h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f, i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {y: h,x: i}
    };
    v.getElementByPoint = function(a, b) {
        var c = this, d = c.canvas, e = A.doc.elementFromPoint(a, b);
        if (A.win.opera && "svg" == e.tagName) {
            var f = bc(d), g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e)
            return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael; )
            e = e.parentNode;
        return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
    }, v.getElementsByBBox = function(a) {
        var b = this.set();
        return this.forEach(function(d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
        }), b
    }, v.getById = function(a) {
        for (var b = this.bottom; b; ) {
            if (b.id == a)
                return b;
            b = b.next
        }
        return null
    }, v.forEach = function(a, b) {
        for (var c = this.bottom; c; ) {
            if (a.call(b, c) === !1)
                return this;
            c = c.next
        }
        return this
    }, v.getElementsByPoint = function(a, b) {
        var c = this.set();
        return this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        }), c
    }, $b.isPointInside = function(a, b) {
        var d = this.realPath = qb[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
    }, $b.getBBox = function(a) {
        if (this.removed)
            return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qb[this.type](this), b.bboxwt = Bb(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qb[this.type](this)), b.bbox = Bb(rb(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
    }, $b.clone = function() {
        if (this.removed)
            return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a), a
    }, $b.glow = function(a) {
        if ("text" == this.type)
            return null;
        a = a || {};
        var b = {width: (a.width || 10) + (+this.attr("stroke-width") || 1),fill: a.fill || !1,opacity: a.opacity || .5,offsetx: a.offsetx || 0,offsety: a.offsety || 0,color: a.color || "#000"}, c = b.width / 2, d = this.paper, e = d.set(), f = this.realPath || qb[this.type](this);
        f = this.matrix ? rb(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++)
            e.push(d.path(f).attr({stroke: b.color,fill: b.fill ? b.color : "none","stroke-linejoin": "round","stroke-linecap": "round","stroke-width": +(b.width / c * g).toFixed(3),opacity: +(b.opacity / c).toFixed(3)}));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var cc = function(a, b, d, e, f, g, h, i, l) {
        return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
    }, dc = function(a, b) {
        return function(d, e, f) {
            d = Kb(d);
            for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                if (i = d[o], "M" == i[0])
                    g = +i[1], h = +i[2];
                else {
                    if (j = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                        if (b && !m.start) {
                            if (k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f)
                                return l;
                            m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                            continue
                        }
                        if (!a && !b)
                            return k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {x: k.x,y: k.y,alpha: k.alpha}
                    }
                    n += j, g = +i[5], h = +i[6]
                }
                l += i.shift() + i
            }
            return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {x: k.x,y: k.y,alpha: k.alpha}), k
        }
    }, ec = dc(1), fc = dc(), gc = dc(0, 1);
    c.getTotalLength = ec, c.getPointAtLength = fc, c.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6)
            return gc(a, b).end;
        var d = gc(a, c, 1);
        return b ? gc(d, b).end : d
    }, $b.getTotalLength = function() {
        var a = this.getPath();
        if (a)
            return this.node.getTotalLength ? this.node.getTotalLength() : ec(a)
    }, $b.getPointAtLength = function(a) {
        var b = this.getPath();
        if (b)
            return fc(b, a)
    }, $b.getPath = function() {
        var a, b = c._getPath[this.type];
        if ("text" != this.type && "set" != this.type)
            return b && (a = b(this)), a
    }, $b.getSubpath = function(a, b) {
        var d = this.getPath();
        if (d)
            return c.getSubpath(d, a, b)
    };
    var hc = c.easing_formulas = {linear: function(a) {
            return a
        },"<": function(a) {
            return R(a, 1.7)
        },">": function(a) {
            return R(a, .48)
        },"<>": function(a) {
            var b = .48 - a / 1.04, c = N.sqrt(.1734 + b * b), d = c - b, e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1), f = -c - b, g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1), h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },elastic: function(a) {
            return a == !!a ? a : R(2, -10 * a) * N.sin(2 * (a - .075) * S / .3) + 1
        },bounce: function(a) {
            var b, c = 7.5625, d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }};
    hc.easeIn = hc["ease-in"] = hc["<"], hc.easeOut = hc["ease-out"] = hc[">"], hc.easeInOut = hc["ease-in-out"] = hc["<>"], hc["back-in"] = hc.backIn, hc["back-out"] = hc.backOut;
    var ic = [], jc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
        setTimeout(a, 16)
    }, kc = function() {
        for (var a = +new Date, d = 0; d < ic.length; d++) {
            var e = ic[d];
            if (!e.el.removed && !e.paused) {
                var f, g, h = a - e.start, i = e.ms, j = e.easing, k = e.from, l = e.diff, m = e.to, n = (e.t, e.el), o = {}, p = {};
                if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && ic.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
                    if (i > h) {
                        var q = j(h / i);
                        for (var r in k)
                            if (k[z](r)) {
                                switch (db[r]) {
                                    case T:
                                        f = +k[r] + q * i * l[r];
                                        break;
                                    case "colour":
                                        f = "rgb(" + [lc($(k[r].r + q * i * l[r].r)), lc($(k[r].g + q * i * l[r].g)), lc($(k[r].b + q * i * l[r].b))].join(",") + ")";
                                        break;
                                    case "path":
                                        f = [];
                                        for (var t = 0, u = k[r].length; u > t; t++) {
                                            f[t] = [k[r][t][0]];
                                            for (var v = 1, w = k[r][t].length; w > v; v++)
                                                f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                                            f[t] = f[t].join(H)
                                        }
                                        f = f.join(H);
                                        break;
                                    case "transform":
                                        if (l[r].real)
                                            for (f = [], t = 0, u = k[r].length; u > t; t++)
                                                for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++)
                                                    f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                                        else {
                                            var x = function(a) {
                                                return +k[r][a] + q * i * l[r][a]
                                            };
                                            f = [["m", x(0), x(1), x(2), x(3), x(4), x(5)]]
                                        }
                                        break;
                                    case "csv":
                                        if ("clip-rect" == r)
                                            for (f = [], t = 4; t--; )
                                                f[t] = +k[r][t] + q * i * l[r][t];
                                        break;
                                    default:
                                        var y = [][E](k[r]);
                                        for (f = [], t = n.paper.customAttributes[r].length; t--; )
                                            f[t] = +y[t] + q * i * l[r][t]
                                }
                                o[r] = f
                            }
                        n.attr(o), function(a, c, d) {
                            setTimeout(function() {
                                b("raphael.anim.frame." + a, c, d)
                            })
                        }(n.id, n, e.anim)
                    } else {
                        if (function(a, d, e) {
                            setTimeout(function() {
                                b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                            })
                        }(e.callback, n, e.anim), n.attr(m), ic.splice(d--, 1), e.repeat > 1 && !e.next) {
                            for (g in m)
                                m[z](g) && (p[g] = e.totalOrigin[g]);
                            e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                        }
                        e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                    }
            }
        }
        c.svg && n && n.paper && n.paper.safari(), ic.length && jc(kc)
    }, lc = function(a) {
        return a > 255 ? 255 : 0 > a ? 0 : a
    };
    $b.animateWith = function(a, b, d, e, f, g) {
        var h = this;
        if (h.removed)
            return g && g.call(h), h;
        var i = d instanceof r ? d : c.animation(d, e, f, g);
        s(i, h, i.percents[0], null, h.attr());
        for (var j = 0, k = ic.length; k > j; j++)
            if (ic[j].anim == b && ic[j].el == a) {
                ic[k - 1].start = ic[j].start;
                break
            }
        return h
    }, $b.onAnimation = function(a) {
        return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
    }, r.prototype.delay = function(a) {
        var b = new r(this.anim, this.ms);
        return b.times = this.times, b.del = +a || 0, b
    }, r.prototype.repeat = function(a) {
        var b = new r(this.anim, this.ms);
        return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
    }, c.animation = function(a, b, d, e) {
        if (a instanceof r)
            return a;
        (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
        var f, g, h = {};
        for (g in a)
            a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
        if (f)
            return d && (h.easing = d), e && (h.callback = e), new r({100: h}, b);
        if (e) {
            var i = 0;
            for (var j in a) {
                var k = ab(j);
                a[z](j) && k > i && (i = k)
            }
            i += "%", !a[i].callback && (a[i].callback = e)
        }
        return new r(a, b)
    }, $b.animate = function(a, b, d, e) {
        var f = this;
        if (f.removed)
            return e && e.call(f), f;
        var g = a instanceof r ? a : c.animation(a, b, d, e);
        return s(g, f, g.percents[0], null, f.attr()), f
    }, $b.setTime = function(a, b) {
        return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
    }, $b.status = function(a, b) {
        var c, d, e = [], f = 0;
        if (null != b)
            return s(a, this, -1, P(b, 1)), this;
        for (c = ic.length; c > f; f++)
            if (d = ic[f], d.el.id == this.id && (!a || d.anim == a)) {
                if (a)
                    return d.status;
                e.push({anim: d.anim,status: d.status})
            }
        return a ? 0 : e
    }, $b.pause = function(a) {
        for (var c = 0; c < ic.length; c++)
            ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.pause." + this.id, this, ic[c].anim) !== !1 && (ic[c].paused = !0);
        return this
    }, $b.resume = function(a) {
        for (var c = 0; c < ic.length; c++)
            if (ic[c].el.id == this.id && (!a || ic[c].anim == a)) {
                var d = ic[c];
                b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
            }
        return this
    }, $b.stop = function(a) {
        for (var c = 0; c < ic.length; c++)
            ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.stop." + this.id, this, ic[c].anim) !== !1 && ic.splice(c--, 1);
        return this
    }, b.on("raphael.remove", t), b.on("raphael.clear", t), $b.toString = function() {
        return "Raphaël’s object"
    };
    var mc = function(a) {
        if (this.items = [], this.length = 0, this.type = "set", a)
            for (var b = 0, c = a.length; c > b; b++)
                !a[b] || a[b].constructor != $b.constructor && a[b].constructor != mc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    }, nc = mc.prototype;
    nc.push = function() {
        for (var a, b, c = 0, d = arguments.length; d > c; c++)
            a = arguments[c], !a || a.constructor != $b.constructor && a.constructor != mc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, nc.pop = function() {
        return this.length && delete this[this.length--], this.items.pop()
    }, nc.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; d > c; c++)
            if (a.call(b, this.items[c], c) === !1)
                return this;
        return this
    };
    for (var oc in $b)
        $b[z](oc) && (nc[oc] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a][D](c, b)
                })
            }
        }(oc));
    return nc.attr = function(a, b) {
        if (a && c.is(a, V) && c.is(a[0], "object"))
            for (var d = 0, e = a.length; e > d; d++)
                this.items[d].attr(a[d]);
        else
            for (var f = 0, g = this.items.length; g > f; f++)
                this.items[f].attr(a, b);
        return this
    }, nc.clear = function() {
        for (; this.length; )
            this.pop()
    }, nc.splice = function(a, b) {
        a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
        var c, d = [], e = [], f = [];
        for (c = 2; c < arguments.length; c++)
            f.push(arguments[c]);
        for (c = 0; b > c; c++)
            e.push(this[a + c]);
        for (; c < this.length - a; c++)
            d.push(this[a + c]);
        var g = f.length;
        for (c = 0; c < g + d.length; c++)
            this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
        for (c = this.items.length = this.length -= b - g; this[c]; )
            delete this[c++];
        return new mc(e)
    }, nc.exclude = function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (this[b] == a)
                return this.splice(b, 1), !0
    }, nc.animate = function(a, b, d, e) {
        (c.is(d, "function") || !d) && (e = d || null);
        var f, g, h = this.items.length, i = h, j = this;
        if (!h)
            return this;
        e && (g = function() {
            !--h && e.call(j)
        }), d = c.is(d, U) ? d : g;
        var k = c.animation(a, b, d, g);
        for (f = this.items[--i].animate(k); i--; )
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
        return this
    }, nc.insertAfter = function(a) {
        for (var b = this.items.length; b--; )
            this.items[b].insertAfter(a);
        return this
    }, nc.getBBox = function() {
        for (var a = [], b = [], c = [], d = [], e = this.items.length; e--; )
            if (!this.items[e].removed) {
                var f = this.items[e].getBBox();
                a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
            }
        return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {x: a,y: b,x2: c,y2: d,width: c - a,height: d - b}
    }, nc.clone = function(a) {
        a = this.paper.set();
        for (var b = 0, c = this.items.length; c > b; b++)
            a.push(this.items[b].clone());
        return a
    }, nc.toString = function() {
        return "Raphaël‘s set"
    }, nc.glow = function(a) {
        var b = this.paper.set();
        return this.forEach(function(c) {
            var d = c.glow(a);
            null != d && d.forEach(function(a) {
                b.push(a)
            })
        }), b
    }, nc.isPointInside = function(a, b) {
        var c = !1;
        return this.forEach(function(d) {
            return d.isPointInside(a, b) ? (c = !0, !1) : void 0
        }), c
    }, c.registerFont = function(a) {
        if (!a.face)
            return a;
        this.fonts = this.fonts || {};
        var b = {w: a.w,face: {},glyphs: {}}, c = a.face["font-family"];
        for (var d in a.face)
            a.face[z](d) && (b.face[d] = a.face[d]);
        if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
            b.face["units-per-em"] = ab(a.face["units-per-em"], 10);
            for (var e in a.glyphs)
                if (a.glyphs[z](e)) {
                    var f = a.glyphs[e];
                    if (b.glyphs[e] = {w: f.w,k: {},d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                            return {l: "L",c: "C",x: "z",t: "m",r: "l",v: "c"}[a] || "M"
                        }) + "z"}, f.k)
                        for (var g in f.k)
                            f[z](g) && (b.glyphs[e].k[g] = f.k[g])
                }
        }
        return a
    }, v.getFont = function(a, b, d, e) {
        if (e = e || "normal", d = d || "normal", b = +b || {normal: 400,bold: 700,lighter: 300,bolder: 800}[b] || 400, c.fonts) {
            var f = c.fonts[a];
            if (!f) {
                var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
                for (var h in c.fonts)
                    if (c.fonts[z](h) && g.test(h)) {
                        f = c.fonts[h];
                        break
                    }
            }
            var i;
            if (f)
                for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++)
                    ;
            return i
        }
    }, v.print = function(a, b, d, e, f, g, h, i) {
        g = g || "middle", h = O(P(h || 0, 1), -1), i = O(P(i || 1, 3), 1);
        var j, k = I(d)[J](G), l = 0, m = 0, n = G;
        if (c.is(e, "string") && (e = this.getFont(e)), e) {
            j = (f || 16) / e.face["units-per-em"];
            for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
                if ("\n" == k[t])
                    l = 0, x = 0, m = 0, r += q * i;
                else {
                    var v = m && e.glyphs[k[t - 1]] || {}, x = e.glyphs[k[t]];
                    l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
                }
                x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
            }
        }
        return this.path(n).attr({fill: "#000",stroke: "none"})
    }, v.add = function(a) {
        if (c.is(a, "array"))
            for (var b, d = this.set(), e = 0, f = a.length; f > e; e++)
                b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
        return d
    }, c.format = function(a, b) {
        var d = c.is(b, V) ? [0][E](b) : arguments;
        return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
            return null == d[++b] ? G : d[b]
        })), a || G
    }, c.fullfill = function() {
        var a = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, c = function(a, c, d) {
            var e = d;
            return c.replace(b, function(a, b, c, d, f) {
                b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
            }), e = (null == e || e == d ? a : e) + ""
        };
        return function(b, d) {
            return String(b).replace(a, function(a, b) {
                return c(a, b, d)
            })
        }
    }(), c.ninja = function() {
        return B.was ? A.win.Raphael = B.is : delete Raphael, c
    }, c.st = nc, b.on("raphael.DOMload", function() {
        u = !0
    }), function(a, b, d) {
        function e() {
            /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
        }
        null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
            a.removeEventListener(b, d, !1), a.readyState = "complete"
        }, !1), a.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), function() {
        if (c.svg) {
            var a = "hasOwnProperty", b = String, d = parseFloat, e = parseInt, f = Math, g = f.max, h = f.abs, i = f.pow, j = /[, ]+/, k = c.eve, l = "", m = " ", n = "http://www.w3.org/1999/xlink", o = {block: "M5,0 0,2.5 5,5z",classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",open: "M6,1 1,3.5 6,6",oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"}, p = {};
            c.toString = function() {
                return "Your browser supports SVG.\nYou are running Raphaël " + this.version
            };
            var q = function(d, e) {
                if (e) {
                    "string" == typeof d && (d = q(d));
                    for (var f in e)
                        e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
                } else
                    d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return d
            }, r = function(a, e) {
                var j = "linear", k = a.id + e, m = .5, n = .5, o = a.node, p = a.paper, r = o.style, s = c._g.doc.getElementById(k);
                if (!s) {
                    if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                        if (j = "radial", b && c) {
                            m = d(b), n = d(c);
                            var e = 2 * (n > .5) - 1;
                            i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                        }
                        return l
                    }), e = e.split(/\s*\-\s*/), "linear" == j) {
                        var t = e.shift();
                        if (t = -d(t), isNaN(t))
                            return null;
                        var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))], v = 1 / (g(h(u[2]), h(u[3])) || 1);
                        u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                    }
                    var w = c._parseDots(e);
                    if (!w)
                        return null;
                    if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                        s = q(j + "Gradient", {id: k}), a.gradient = s, q(s, "radial" == j ? {fx: m,fy: n} : {x1: u[0],y1: u[1],x2: u[2],y2: u[3],gradientTransform: a.matrix.invert()}), p.defs.appendChild(s);
                        for (var x = 0, y = w.length; y > x; x++)
                            s.appendChild(q("stop", {offset: w[x].offset ? w[x].offset : x ? "100%" : "0%","stop-color": w[x].color || "#fff"}))
                    }
                }
                return q(o, {fill: "url(" + document.location + "#" + k + ")",opacity: 1,"fill-opacity": 1}), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
            }, s = function(a) {
                var b = a.getBBox(1);
                q(a.pattern, {patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"})
            }, t = function(d, e, f) {
                if ("path" == d.type) {
                    for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--; )
                        switch (m[v]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                w = m[v];
                                break;
                            case "wide":
                                y = 5;
                                break;
                            case "narrow":
                                y = 2;
                                break;
                            case "long":
                                x = 5;
                                break;
                            case "short":
                                x = 2
                        }
                    if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {fill: "none",stroke: t.stroke}) : (j = i = x / 2, k = {fill: t.stroke,stroke: "none"}), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                        var A = "raphael-marker-" + w, B = "raphael-marker-" + r + w + x + y + "-obj" + d.id;
                        c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {"stroke-linecap": "round",d: o[w],id: A})), p[A] = 1);
                        var C, D = c._g.doc.getElementById(B);
                        D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {id: B,markerHeight: y,markerWidth: x,orient: "auto",refX: j,refY: y / 2}), C = q(q("use"), {"xlink:href": "#" + A,transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")","stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)}), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                        var E = i * ("diamond" != w && "oval" != w);
                        f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
                    } else
                        f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {d: c.getSubpath(t.path, g, h)}), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
                    for (k in p)
                        if (p[a](k) && !p[k]) {
                            var F = c._g.doc.getElementById(k);
                            F && F.parentNode.removeChild(F)
                        }
                }
            }, u = {"": [0],none: [0],"-": [3, 1],".": [1, 1],"-.": [3, 1, 1, 1],"-..": [3, 1, 1, 1, 1, 1],". ": [1, 3],"- ": [4, 3],"--": [8, 3],"- .": [4, 3, 1, 3],"--.": [8, 3, 1, 3],"--..": [8, 3, 1, 3, 1, 3]}, v = function(a, c, d) {
                if (c = u[b(c).toLowerCase()]) {
                    for (var e = a.attrs["stroke-width"] || "1", f = {round: e,square: e,butt: 0}[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--; )
                        g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
                    q(a.node, {"stroke-dasharray": g.join(",")})
                }
            }, w = function(d, f) {
                var i = d.node, k = d.attrs, m = i.style.visibility;
                i.style.visibility = "hidden";
                for (var o in f)
                    if (f[a](o)) {
                        if (!c._availableAttrs[a](o))
                            continue;
                        var p = f[o];
                        switch (k[o] = p, o) {
                            case "blur":
                                d.blur(p);
                                break;
                            case "title":
                                var u = i.getElementsByTagName("title");
                                if (u.length && (u = u[0]))
                                    u.firstChild.nodeValue = p;
                                else {
                                    u = q("title");
                                    var w = c._g.doc.createTextNode(p);
                                    u.appendChild(w), i.appendChild(u)
                                }
                                break;
                            case "href":
                            case "target":
                                var x = i.parentNode;
                                if ("a" != x.tagName.toLowerCase()) {
                                    var z = q("a");
                                    x.insertBefore(z, i), z.appendChild(i), x = z
                                }
                                "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                                break;
                            case "cursor":
                                i.style.cursor = p;
                                break;
                            case "transform":
                                d.transform(p);
                                break;
                            case "arrow-start":
                                t(d, p);
                                break;
                            case "arrow-end":
                                t(d, p, 1);
                                break;
                            case "clip-rect":
                                var A = b(p).split(j);
                                if (4 == A.length) {
                                    d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                    var B = q("clipPath"), C = q("rect");
                                    B.id = c.createUUID(), q(C, {x: A[0],y: A[1],width: A[2],height: A[3]}), B.appendChild(C), d.paper.defs.appendChild(B), q(i, {"clip-path": "url(#" + B.id + ")"}), d.clip = C
                                }
                                if (!p) {
                                    var D = i.getAttribute("clip-path");
                                    if (D) {
                                        var E = c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g, l));
                                        E && E.parentNode.removeChild(E), q(i, {"clip-path": l}), delete d.clip
                                    }
                                }
                                break;
                            case "path":
                                "path" == d.type && (q(i, {d: p ? k.path = c._pathToAbsolute(p) : "M0,0"}), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                                break;
                            case "width":
                                if (i.setAttribute(o, p), d._.dirty = 1, !k.fx)
                                    break;
                                o = "x", p = k.x;
                            case "x":
                                k.fx && (p = -k.x - (k.width || 0));
                            case "rx":
                                if ("rx" == o && "rect" == d.type)
                                    break;
                            case "cx":
                                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                break;
                            case "height":
                                if (i.setAttribute(o, p), d._.dirty = 1, !k.fy)
                                    break;
                                o = "y", p = k.y;
                            case "y":
                                k.fy && (p = -k.y - (k.height || 0));
                            case "ry":
                                if ("ry" == o && "rect" == d.type)
                                    break;
                            case "cy":
                                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                break;
                            case "r":
                                "rect" == d.type ? q(i, {rx: p,ry: p}) : i.setAttribute(o, p), d._.dirty = 1;
                                break;
                            case "src":
                                "image" == d.type && i.setAttributeNS(n, "href", p);
                                break;
                            case "stroke-width":
                                (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                break;
                            case "stroke-dasharray":
                                v(d, p, f);
                                break;
                            case "fill":
                                var F = b(p).match(c._ISURL);
                                if (F) {
                                    B = q("pattern");
                                    var G = q("image");
                                    B.id = c.createUUID(), q(B, {x: 0,y: 0,patternUnits: "userSpaceOnUse",height: 1,width: 1}), q(G, {x: 0,y: 0,"xlink:href": F[1]}), B.appendChild(G), function(a) {
                                        c._preload(F[1], function() {
                                            var b = this.offsetWidth, c = this.offsetHeight;
                                            q(a, {width: b,height: c}), q(G, {width: b,height: c}), d.paper.safari()
                                        })
                                    }(B), d.paper.defs.appendChild(B), q(i, {fill: "url(#" + B.id + ")"}), d.pattern = B, d.pattern && s(d);
                                    break
                                }
                                var H = c.getRGB(p);
                                if (H.error) {
                                    if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                                        if ("opacity" in k || "fill-opacity" in k) {
                                            var I = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                            if (I) {
                                                var J = I.getElementsByTagName("stop");
                                                q(J[J.length - 1], {"stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)})
                                            }
                                        }
                                        k.gradient = p, k.fill = "none";
                                        break
                                    }
                                } else
                                    delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {opacity: k.opacity}), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {"fill-opacity": k["fill-opacity"]});
                                H[a]("opacity") && q(i, {"fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity});
                            case "stroke":
                                H = c.getRGB(p), i.setAttribute(o, H.hex), "stroke" == o && H[a]("opacity") && q(i, {"stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity}), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                break;
                            case "gradient":
                                ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                                break;
                            case "opacity":
                                k.gradient && !k[a]("stroke-opacity") && q(i, {"stroke-opacity": p > 1 ? p / 100 : p});
                            case "fill-opacity":
                                if (k.gradient) {
                                    I = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), I && (J = I.getElementsByTagName("stop"), q(J[J.length - 1], {"stop-opacity": p}));
                                    break
                                }
                            default:
                                "font-size" == o && (p = e(p, 10) + "px");
                                var K = o.replace(/(\-.)/g, function(a) {
                                    return a.substring(1).toUpperCase()
                                });
                                i.style[K] = p, d._.dirty = 1, i.setAttribute(o, p)
                        }
                    }
                y(d, f), i.style.visibility = m
            }, x = 1.2, y = function(d, f) {
                if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
                    var g = d.attrs, h = d.node, i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                    if (f[a]("text")) {
                        for (g.text = f.text; h.firstChild; )
                            h.removeChild(h.firstChild);
                        for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++)
                            j = q("tspan"), n && q(j, {dy: i * x,x: g.x}), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
                    } else
                        for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++)
                            n ? q(m[n], {dy: i * x,x: g.x}) : q(m[0], {dy: 0});
                    q(h, {x: g.x,y: g.y}), d._.dirty = 1;
                    var p = d._getBBox(), r = g.y - (p.y + p.height / 2);
                    r && c.is(r, "finite") && q(m[0], {dy: r})
                }
            }, z = function(a) {
                return a.parentNode && "a" === a.parentNode.tagName.toLowerCase() ? a.parentNode : a
            };
            Element = function(a, b) {
                this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {transform: [],sx: 1,sy: 1,deg: 0,dx: 0,dy: 0,dirty: 1}, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
            }, $b = c.el, Element.prototype = $b, $b.constructor = Element, c._engine.path = function(a, b) {
                var c = q("path");
                b.canvas && b.canvas.appendChild(c);
                var d = new Element(c, b);
                return d.type = "path", w(d, {fill: "none",stroke: "#000",path: a}), d
            }, $b.rotate = function(a, c, e) {
                if (this.removed)
                    return this;
                if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                    var f = this.getBBox(1);
                    c = f.x + f.width / 2, e = f.y + f.height / 2
                }
                return this.transform(this._.transform.concat([["r", a, c, e]])), this
            }, $b.scale = function(a, c, e, f) {
                if (this.removed)
                    return this;
                if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f)
                    var g = this.getBBox(1);
                return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, c, e, f]])), this
            }, $b.translate = function(a, c) {
                return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([["t", a, c]])), this)
            }, $b.transform = function(b) {
                var d = this._;
                if (null == b)
                    return d.transform;
                if (c._extractTransform(this, b), this.clip && q(this.clip, {transform: this.matrix.invert()}), this.pattern && s(this), this.node && q(this.node, {transform: this.matrix}), 1 != d.sx || 1 != d.sy) {
                    var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({"stroke-width": e})
                }
                return this
            }, $b.hide = function() {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this
            }, $b.show = function() {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this
            }, $b.remove = function() {
                var a = z(this.node);
                if (!this.removed && a.parentNode) {
                    var b = this.paper;
                    b.__set__ && b.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && b.defs.removeChild(this.gradient), c._tear(this, b), a.parentNode.removeChild(a), this.removeData();
                    for (var d in this)
                        this[d] = "function" == typeof this[d] ? c._removedFactory(d) : null;
                    this.removed = !0
                }
            }, $b._getBBox = function() {
                if ("none" == this.node.style.display) {
                    this.show();
                    var a = !0
                }
                var b, c = !1;
                this.paper.canvas.parentElement ? b = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (b = this.paper.canvas.parentNode.style), b && "none" == b.display && (c = !0, b.display = "");
                var d = {};
                try {
                    d = this.node.getBBox()
                } catch (e) {
                    d = {x: this.node.clientLeft,y: this.node.clientTop,width: this.node.clientWidth,height: this.node.clientHeight}
                }finally {
                    d = d || {}, c && (b.display = "none")
                }
                return a && this.hide(), d
            }, $b.attr = function(b, d) {
                if (this.removed)
                    return this;
                if (null == b) {
                    var e = {};
                    for (var f in this.attrs)
                        this.attrs[a](f) && (e[f] = this.attrs[f]);
                    return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                }
                if (null == d && c.is(b, "string")) {
                    if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient)
                        return this.attrs.gradient;
                    if ("transform" == b)
                        return this._.transform;
                    for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++)
                        b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                    return l - 1 ? h : h[g[0]]
                }
                if (null == d && c.is(b, "array")) {
                    for (h = {}, i = 0, l = b.length; l > i; i++)
                        h[b[i]] = this.attr(b[i]);
                    return h
                }
                if (null != d) {
                    var m = {};
                    m[b] = d
                } else
                    null != b && c.is(b, "object") && (m = b);
                for (var n in m)
                    k("raphael.attr." + n + "." + this.id, this, m[n]);
                for (n in this.paper.customAttributes)
                    if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
                        var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                        this.attrs[n] = m[n];
                        for (var p in o)
                            o[a](p) && (m[p] = o[p])
                    }
                return w(this, m), this
            }, $b.toFront = function() {
                if (this.removed)
                    return this;
                var a = z(this.node);
                a.parentNode.appendChild(a);
                var b = this.paper;
                return b.top != this && c._tofront(this, b), this
            }, $b.toBack = function() {
                if (this.removed)
                    return this;
                var a = z(this.node), b = a.parentNode;
                b.insertBefore(a, b.firstChild), c._toback(this, this.paper);
                this.paper;
                return this
            }, $b.insertAfter = function(a) {
                if (this.removed || !a)
                    return this;
                var b = z(this.node), d = z(a.node || a[a.length - 1].node);
                return d.nextSibling ? d.parentNode.insertBefore(b, d.nextSibling) : d.parentNode.appendChild(b), c._insertafter(this, a, this.paper), this
            }, $b.insertBefore = function(a) {
                if (this.removed || !a)
                    return this;
                var b = z(this.node), d = z(a.node || a[0].node);
                return d.parentNode.insertBefore(b, d), c._insertbefore(this, a, this.paper), this
            }, $b.blur = function(a) {
                var b = this;
                if (0 !== +a) {
                    var d = q("filter"), e = q("feGaussianBlur");
                    b.attrs.blur = a, d.id = c.createUUID(), q(e, {stdDeviation: +a || 1.5}), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {filter: "url(#" + d.id + ")"})
                } else
                    b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
                return b
            }, c._engine.circle = function(a, b, c, d) {
                var e = q("circle");
                a.canvas && a.canvas.appendChild(e);
                var f = new Element(e, a);
                return f.attrs = {cx: b,cy: c,r: d,fill: "none",stroke: "#000"}, f.type = "circle", q(e, f.attrs), f
            }, c._engine.rect = function(a, b, c, d, e, f) {
                var g = q("rect");
                a.canvas && a.canvas.appendChild(g);
                var h = new Element(g, a);
                return h.attrs = {x: b,y: c,width: d,height: e,rx: f || 0,ry: f || 0,fill: "none",stroke: "#000"}, h.type = "rect", q(g, h.attrs), h
            }, c._engine.ellipse = function(a, b, c, d, e) {
                var f = q("ellipse");
                a.canvas && a.canvas.appendChild(f);
                var g = new Element(f, a);
                return g.attrs = {cx: b,cy: c,rx: d,ry: e,fill: "none",stroke: "#000"}, g.type = "ellipse", q(f, g.attrs), g
            }, c._engine.image = function(a, b, c, d, e, f) {
                var g = q("image");
                q(g, {x: c,y: d,width: e,height: f,preserveAspectRatio: "none"}), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                var h = new Element(g, a);
                return h.attrs = {x: c,y: d,width: e,height: f,src: b}, h.type = "image", h
            }, c._engine.text = function(a, b, d, e) {
                var f = q("text");
                a.canvas && a.canvas.appendChild(f);
                var g = new Element(f, a);
                return g.attrs = {x: b,y: d,"text-anchor": "middle",text: e,"font-family": c._availableAttrs["font-family"],"font-size": c._availableAttrs["font-size"],stroke: "none",fill: "#000"}, g.type = "text", w(g, g.attrs), g
            }, c._engine.setSize = function(a, b) {
                return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
            }, c._engine.create = function() {
                var a = c._getContainer.apply(0, arguments), b = a && a.container, d = a.x, e = a.y, f = a.width, g = a.height;
                if (!b)
                    throw new Error("SVG container not found.");
                var h, i = q("svg"), j = "overflow:hidden;";
                return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {height: g,version: 1.1,width: f,xmlns: "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink"}), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {
                }), b.renderfix(), b
            }, c._engine.setViewBox = function(a, b, c, d, e) {
                k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                var f, h, i = this.getSize(), j = g(c / i.width, d / i.height), l = this.top, n = e ? "xMidYMid meet" : "xMinYMin";
                for (null == a ? (this._vbSize && (j = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = j, f = a + m + b + m + c + m + d), q(this.canvas, {viewBox: f,preserveAspectRatio: n}); j && l; )
                    h = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({"stroke-width": h}), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
                return this._viewBox = [a, b, c, d, !!e], this
            }, c.prototype.renderfix = function() {
                var a, b = this.canvas, c = b.style;
                try {
                    a = b.getScreenCTM() || b.createSVGMatrix()
                } catch (d) {
                    a = b.createSVGMatrix()
                }
                var e = -a.e % 1, f = -a.f % 1;
                (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
            }, c.prototype.clear = function() {
                c.eve("raphael.clear", this);
                for (var a = this.canvas; a.firstChild; )
                    a.removeChild(a.firstChild);
                this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
            }, c.prototype.remove = function() {
                k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var a in this)
                    this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
            };
            var A = c.st;
            for (var B in $b)
                $b[a](B) && !A[a](B) && (A[B] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(B))
        }
    }(), function() {
        if (c.vml) {
            var a = "hasOwnProperty", b = String, d = parseFloat, e = Math, f = e.round, g = e.max, h = e.min, i = e.abs, j = "fill", k = /[, ]+/, l = c.eve, m = " progid:DXImageTransform.Microsoft", n = " ", o = "", p = {M: "m",L: "l",C: "c",Z: "x",m: "t",l: "r",c: "v",z: "x"}, q = /([clmz]),?([^clmz]*)/gi, r = / progid:\S+Blur\([^\)]+\)/g, s = /-?[^,\s-]+/g, t = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)", u = 21600, v = {path: 1,rect: 1,image: 1}, w = {circle: 1,ellipse: 1}, x = function(a) {
                var d = /[ahqstv]/gi, e = c._pathToAbsolute;
                if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
                    var g = b(a).replace(q, function(a, b, c) {
                        var d = [], e = "m" == b.toLowerCase(), g = p[b];
                        return c.replace(s, function(a) {
                            e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                        }), g + d
                    });
                    return g
                }
                var h, i, j = e(a);
                g = [];
                for (var k = 0, l = j.length; l > k; k++) {
                    h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
                    for (var m = 1, r = h.length; r > m; m++)
                        i += f(h[m] * u) + (m != r - 1 ? "," : o);
                    g.push(i)
                }
                return g.join(n)
            }, y = function(a, b, d) {
                var e = c.matrix();
                return e.rotate(-a, .5, .5), {dx: e.x(b, d),dy: e.y(b, d)}
            }, z = function(a, b, c, d, e, f) {
                var g = a._, h = a.matrix, k = g.fillpos, l = a.node, m = l.style, o = 1, p = "", q = u / b, r = u / c;
                if (m.visibility = "hidden", b && c) {
                    if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                        var s = y(f, d, e);
                        d = s.dx, e = s.dy
                    }
                    if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                        var t = l.getElementsByTagName(j);
                        t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
                    }
                    m.visibility = "visible"
                }
            };
            c.toString = function() {
                return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
            };
            var A = function(a, c, d) {
                for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--; )
                    switch (e[g]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            h = e[g];
                            break;
                        case "wide":
                        case "narrow":
                            j = e[g];
                            break;
                        case "long":
                        case "short":
                            i = e[g]
                    }
                var k = a.node.getElementsByTagName("stroke")[0];
                k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
            }, B = function(e, i) {
                e.attrs = e.attrs || {};
                var l = e.node, m = e.attrs, p = l.style, q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r), r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry), s = e;
                for (var t in i)
                    i[a](t) && (m[t] = i[t]);
                if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), e._.dirty = 1, "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                    var y = +m.cx, B = +m.cy, D = +m.rx || +m.r || 0, E = +m.ry || +m.r || 0;
                    l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
                }
                if ("clip-rect" in i) {
                    var G = b(i["clip-rect"]).split(k);
                    if (4 == G.length) {
                        G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                        var H = l.clipRect || c._g.doc.createElement("div"), I = H.style;
                        I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                    }
                    i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                }
                if (e.textpath) {
                    var J = e.textpath.style;
                    i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
                }
                if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                    var K = l.getElementsByTagName(j), L = !1;
                    if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                        var M = b(i.fill).match(c._ISURL);
                        if (M) {
                            K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                            var N = e.getBBox(1);
                            K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                                e._.fillsize = [this.offsetWidth, this.offsetHeight]
                            })
                        } else
                            K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {circle: 1,ellipse: 1} || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
                    }
                    if ("fill-opacity" in i || "opacity" in i) {
                        var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                        O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
                    }
                    l.appendChild(K);
                    var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0], Q = !1;
                    !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
                    var R = c.getRGB(i.stroke);
                    P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
                    var S = .75 * (d(i["stroke-width"]) || 1);
                    if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in i) {
                        var T = {"-": "shortdash",".": "shortdot","-.": "shortdashdot","-..": "shortdashdotdot",". ": "dot","- ": "dash","--": "longdash","- .": "dashdot","--.": "longdashdot","--..": "longdashdotdot"};
                        P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
                    }
                    Q && l.appendChild(P)
                }
                if ("text" == s.type) {
                    s.paper.canvas.style.display = o;
                    var U = s.paper.span, V = 100, W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                    p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                    var X = U.getBoundingClientRect();
                    s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                    for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                        if (Y[Z] in i) {
                            s._.dirty = 1;
                            break
                        }
                    switch (m["text-anchor"]) {
                        case "start":
                            s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                            break;
                        case "end":
                            s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                            break;
                        default:
                            s.textpath.style["v-text-align"] = "center", s.bbx = 0
                    }
                    s.textpath.style["v-text-kern"] = !0
                }
            }, C = function(a, f, g) {
                a.attrs = a.attrs || {};
                var h = (a.attrs, Math.pow), i = "linear", j = ".5 .5";
                if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                    return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
                }), f = f.split(/\s*\-\s*/), "linear" == i) {
                    var k = f.shift();
                    if (k = -d(k), isNaN(k))
                        return null
                }
                var l = c._parseDots(f);
                if (!l)
                    return null;
                if (a = a.shape || a.node, l.length) {
                    a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
                    for (var m = [], p = 0, q = l.length; q > p; p++)
                        l[p].offset && m.push(l[p].offset + n + l[p].color);
                    g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
                }
                return 1
            }, D = function(a, b) {
                this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {transform: [],sx: 1,sy: 1,dx: 0,dy: 0,deg: 0,dirty: 1,dirtyT: 1}, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
            }, E = c.el;
            D.prototype = E, E.constructor = D, E.transform = function(a) {
                if (null == a)
                    return this._.transform;
                var d, e = this.paper._viewBoxShift, f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
                e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
                var g, h = this.matrix.clone(), i = this.skew, j = this.node, k = ~b(this.attrs.fill).indexOf("-"), l = !b(this.attrs.fill).indexOf("url(");
                if (h.translate(1, 1), l || k || "image" == this.type)
                    if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                        j.style.filter = h.toFilter();
                        var m = this.getBBox(), p = this.getBBox(1), q = m.x - p.x, r = m.y - p.y;
                        j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
                    } else
                        j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
                else
                    j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
                return null !== d && (this._.transform = d, c._extractTransform(this, d)), this
            }, E.rotate = function(a, c, e) {
                if (this.removed)
                    return this;
                if (null != a) {
                    if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                        var f = this.getBBox(1);
                        c = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", a, c, e]])), this
                }
            }, E.translate = function(a, c) {
                return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([["t", a, c]])), this)
            }, E.scale = function(a, c, e, f) {
                if (this.removed)
                    return this;
                if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f)
                    var g = this.getBBox(1);
                return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, c, e, f]])), this._.dirtyT = 1, this
            }, E.hide = function() {
                return !this.removed && (this.node.style.display = "none"), this
            }, E.show = function() {
                return !this.removed && (this.node.style.display = o), this
            }, E.auxGetBBox = c.el.getBBox, E.getBBox = function() {
                var a = this.auxGetBBox();
                if (this.paper && this.paper._viewBoxShift) {
                    var b = {}, c = 1 / this.paper._viewBoxShift.scale;
                    return b.x = a.x - this.paper._viewBoxShift.dx, b.x *= c, b.y = a.y - this.paper._viewBoxShift.dy, b.y *= c, b.width = a.width * c, b.height = a.height * c, b.x2 = b.x + b.width, b.y2 = b.y + b.height, b
                }
                return a
            }, E._getBBox = function() {
                return this.removed ? {} : {x: this.X + (this.bbx || 0) - this.W / 2,y: this.Y - this.H,width: this.W,height: this.H}
            }, E.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                    for (var a in this)
                        this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                    this.removed = !0
                }
            }, E.attr = function(b, d) {
                if (this.removed)
                    return this;
                if (null == b) {
                    var e = {};
                    for (var f in this.attrs)
                        this.attrs[a](f) && (e[f] = this.attrs[f]);
                    return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                }
                if (null == d && c.is(b, "string")) {
                    if (b == j && "none" == this.attrs.fill && this.attrs.gradient)
                        return this.attrs.gradient;
                    for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++)
                        b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                    return m - 1 ? h : h[g[0]]
                }
                if (this.attrs && null == d && c.is(b, "array")) {
                    for (h = {}, i = 0, m = b.length; m > i; i++)
                        h[b[i]] = this.attr(b[i]);
                    return h
                }
                var n;
                null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
                for (var o in n)
                    l("raphael.attr." + o + "." + this.id, this, n[o]);
                if (n) {
                    for (o in this.paper.customAttributes)
                        if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                            var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                            this.attrs[o] = n[o];
                            for (var q in p)
                                p[a](q) && (n[q] = p[q])
                        }
                    n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
                }
                return this
            }, E.toFront = function() {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
            }, E.toBack = function() {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
            }, E.insertAfter = function(a) {
                return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
            }, E.insertBefore = function(a) {
                return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
            }, E.blur = function(a) {
                var b = this.node.runtimeStyle, d = b.filter;
                return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
            }, c._engine.path = function(a, b) {
                var c = F("shape");
                c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
                var d = new D(c, b), e = {fill: "none",stroke: "#000"};
                a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
                var f = F("skew");
                return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
            }, c._engine.rect = function(a, b, d, e, f, g) {
                var h = c._rectPath(b, d, e, f, g), i = a.path(h), j = i.attrs;
                return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
            }, c._engine.ellipse = function(a, b, c, d, e) {
                {
                    var f = a.path();
                    f.attrs
                }
                return f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {cx: b,cy: c,rx: d,ry: e}), f
            }, c._engine.circle = function(a, b, c, d) {
                {
                    var e = a.path();
                    e.attrs
                }
                return e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {cx: b,cy: c,r: d}), e
            }, c._engine.image = function(a, b, d, e, f, g) {
                var h = c._rectPath(d, e, f, g), i = a.path(h).attr({stroke: "none"}), k = i.attrs, l = i.node, m = l.getElementsByTagName(j)[0];
                return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
            }, c._engine.text = function(a, d, e, g) {
                var h = F("shape"), i = F("path"), j = F("textpath");
                d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
                var k = new D(h, a), l = {fill: "#000",stroke: "none",font: c._availableAttrs.font,text: g};
                k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
                var m = F("skew");
                return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
            }, c._engine.setSize = function(a, b) {
                var d = this.canvas.style;
                return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
            }, c._engine.setViewBox = function(a, b, d, e, f) {
                c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
                var g, h, i = this.getSize(), j = i.width, k = i.height;
                return f && (g = k / e, h = j / d, j > d * g && (a -= (j - d * g) / 2 / g), k > e * h && (b -= (k - e * h) / 2 / h)), this._viewBox = [a, b, d, e, !!f], this._viewBoxShift = {dx: -a,dy: -b,scale: size}, this.forEach(function(a) {
                    a.transform("...")
                }), this
            };
            var F;
            c._engine.initWin = function(a) {
                var b = a.document;
                b.styleSheets.length < 31 ? b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : b.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                        return b.createElement("<rvml:" + a + ' class="rvml">')
                    }
                } catch (c) {
                    F = function(a) {
                        return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
            }, c._engine.initWin(c._g.win), c._engine.create = function() {
                var a = c._getContainer.apply(0, arguments), b = a.container, d = a.height, e = a.width, f = a.x, g = a.y;
                if (!b)
                    throw new Error("VML container not found.");
                var h = new c._Paper, i = h.canvas = c._g.doc.createElement("div"), j = i.style;
                return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {
                }, h
            }, c.prototype.clear = function() {
                c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
            }, c.prototype.remove = function() {
                c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var a in this)
                    this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                return !0
            };
            var G = c.st;
            for (var H in E)
                E[a](H) && !G[a](H) && (G[H] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(H))
        }
    }(), B.was ? A.win.Raphael = c : Raphael = c, "object" == typeof exports && (module.exports = c), c
}), !Raphael && require)
    var Raphael = require("raphael");
Raphael.fn.importSVG = function(a, b) {
    "use strict";
    var c = this.set(), d = {}, e = {"text-anchor": "start"}, f = function(a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }, g = Function.prototype.bind && Array.prototype.forEach ? Function.prototype.call.bind(Array.prototype.forEach) : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            b(a[c], c, a)
    };
    this.parseElement = function(a) {
        if (3 !== a.nodeType) {
            var g, h, i, j, k = {stroke: "none","stroke-width": 1,fill: "black"}, l = a.nodeName;
            if (a.attributes)
                for (g = 0, h = a.attributes.length; h > g; g++)
                    k[a.attributes[g].name] = a.attributes[g].value;
            switch (l) {
                case "svg":
                case "g":
                    var m = a.getAttribute("id"), n = a.getAttribute("class");
                    if (m || n) {
                        var o = a.childNodes;
                        for (g = 0, h = o.length; h > g; g++) {
                            var p = o[g];
                            3 !== p.nodeType && (m && p.setAttribute("data-svg-group", m), n && p.setAttribute("class", (p.getAttribute("class") || "") + " " + n))
                        }
                    }
                    var q = this.set();
                    for (g = 0, h = a.childNodes.length; h > g; g++)
                        q.push(this.parseElement(a.childNodes.item(g)));
                    if (k.transform) {
                        var r = /translate\(([^,]+),([^,]+)\)/.exec(k.transform);
                        3 == r.length && q.translate(r[1], r[2])
                    }
                    return "none" === k.display && q.hide(), void (m && a.childNodes.length && (d[m] = q));
                case "rect":
                    k.rx && k.ry ? (k.r = (+(k.rx || 0) + +(k.ry || 0)) / 2, delete k.rx, delete k.ry) : (k.r = k.rx || k.ry || 0, delete k.rx, delete k.ry);
                case "circle":
                case "ellipse":
                    j = this[l]();
                    break;
                case "path":
                    j = this.path(k.d), delete k.d;
                    break;
                case "polygon":
                    j = this.polygon(k);
                    break;
                case "polyline":
                    j = this.polyline(k);
                    break;
                case "line":
                    j = this.line(k);
                    break;
                case "image":
                    j = this.image();
                    break;
                case "text":
                    for (i in e)
                        !k[i] && e.hasOwnProperty(i) && (k[i] = e[i]);
                    j = this.text(k.x, k.y, a.text || a.textContent);
                    break;
                default:
                    var s = a.getElementsByTagName("svg");
                    return void (s.length && (s[0].normalize(), this.parseElement(s[0])))
            }
            var t = k.transform;
            if (t) {
                t = t.substring(7, t.length - 1).split(" ");
                for (var u in t)
                    t[u] = parseFloat(t[u]);
                var v = j.matrix;
                v.add.apply(v, t), j.transform(v.toTransformString()), delete k.transform
            }
            if (k.style) {
                var w, x = k.style.split(";");
                for (g = 0; g < x.length; g++)
                    w = x[g].split(":"), i = f(w[0]), i && (k[i] = f(w[1]))
            }
            j.attr(k);
            var y = a.getAttribute("class");
            y && j.node.setAttribute("class", (j.node.getAttribute("class") || "") + " " + y), j.node.setAttribute("data-svg", l);
            var z = a.getAttribute("data-svg-group");
            z && j.node.setAttribute("data-svg-group", z);
            var A = a.getAttribute("id");
            return A && (j.node.id = A), b && b.parseElement && (j = b.parseElement(j, a)), j && c.push(j), j
        }
    }, this.parseElement(a);
    var h = this;
    g(a.getElementsByTagName("style"), function(a) {
        var b = document.createElement("style"), c = a.textContent || a.text;
        b.type = "text/css", document.head.appendChild(b);
        var d;
        b.styleSheet ? (b.styleSheet.cssText = c, d = b.styleSheet.rules) : (b.appendChild(document.createTextNode(c)), d = b.sheet.cssRules), g(d, function(a) {
            var b = a.style, c = document.querySelectorAll(a.selectorText), d = {};
            for (var e in Raphael._availableAttrs) {
                var f = b[e];
                f && (d[e] = "number" == typeof Raphael._availableAttrs[e] ? parseFloat(f) : f)
            }
            g(c, function(a) {
                h.getById(a.raphaelid).attr(d)
            })
        })
    });
    var i, j = !1;
    for (i in d) {
        j = !0;
        break
    }
    return j && (c.groups = d), c
}, Raphael.fn.line = function(a) {
    var b = ["M", a.x1, a.y1, "L", a.x2, a.y2, "Z"];
    return delete a.x1, delete a.y1, delete a.x2, delete a.y2, this.path(b)
}, Raphael.fn.polygon = function(a) {
    for (var b = a.points, c = ["M"], d = b.split(" "), e = 0; e < d.length; e++) {
        for (var f = d[e].split(","), g = 0; g < f.length; g++) {
            var h = parseFloat(f[g]);
            isNaN(h) || c.push(h)
        }
        0 === e && c.push("L")
    }
    return c.push("Z"), delete a.points, this.path(c)
}, Raphael.fn.polyline = function(a) {
    for (var b = a.points, c = ["M"], d = b.split(" "), e = 0; e < d.length; e++) {
        for (var f = d[e].split(","), g = 0; g < f.length; g++) {
            var h = parseFloat(f[g]);
            isNaN(h) || c.push(h)
        }
        0 === e && c.push("L")
    }
    return delete a.points, this.path(c)
}, angular.module("toggle-switch", ["ng"]).directive("toggleSwitch", function() {
    return {restrict: "EA",replace: !0,require: "ngModel",scope: {disabled: "@",onLabel: "@",offLabel: "@",knobLabel: "@"},template: '<div role="radio" class="toggle-switch" ng-class="{ \'disabled\': disabled }"><div class="toggle-switch-animate" ng-class="{\'switch-off\': !model, \'switch-on\': model}"><span class="switch-left" ng-bind="onLabel"></span><span class="knob" ng-bind="knobLabel"></span><span class="switch-right" ng-bind="offLabel"></span></div></div>',link: function(a, b, c, d) {
            c.onLabel || (c.onLabel = "On"), c.offLabel || (c.offLabel = "Off"), c.knobLabel || (c.knobLabel = " "), c.disabled || (c.disabled = !1), b.on("click", function() {
                a.$apply(a.toggle)
            }), d.$formatters.push(function(a) {
                return a
            }), d.$parsers.push(function(a) {
                return a
            }), d.$render = function() {
                a.model = d.$viewValue
            }, a.toggle = function() {
                a.disabled || (a.model = !a.model, d.$setViewValue(a.model))
            }
        }}
});
