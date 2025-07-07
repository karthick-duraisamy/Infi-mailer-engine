var z0 = Object.defineProperty;
var q0 = (e, r, n) => r in e ? z0(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var pr = (e, r, n) => q0(e, typeof r != "symbol" ? r + "" : r, n);
import * as Ct from "react";
import Ft, { forwardRef as $0, createElement as ws, useState as X, useRef as Fe, useEffect as be, useCallback as dt, useMemo as We, useDebugValue as Qr, useLayoutEffect as H0 } from "react";
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function V0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function W0(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(e, s);
    Object.defineProperty(n, s, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[s];
      }
    });
  }), n;
}
var Vn = { exports: {} }, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs;
function Q0() {
  if (Cs) return Qt;
  Cs = 1;
  var e = Ft, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(u, d, a) {
    var l, w = {}, i = null, f = null;
    a !== void 0 && (i = "" + a), d.key !== void 0 && (i = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (l in d) s.call(d, l) && !g.hasOwnProperty(l) && (w[l] = d[l]);
    if (u && u.defaultProps) for (l in d = u.defaultProps, d) w[l] === void 0 && (w[l] = d[l]);
    return { $$typeof: r, type: u, key: i, ref: f, props: w, _owner: o.current };
  }
  return Qt.Fragment = n, Qt.jsx = b, Qt.jsxs = b, Qt;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Es;
function U0() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ft, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, m = "@@iterator";
    function y(F) {
      if (F === null || typeof F != "object")
        return null;
      var K = p && F[p] || F[m];
      return typeof K == "function" ? K : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(F) {
      {
        for (var K = arguments.length, te = new Array(K > 1 ? K - 1 : 0), de = 1; de < K; de++)
          te[de - 1] = arguments[de];
        x("error", F, te);
      }
    }
    function x(F, K, te) {
      {
        var de = E.ReactDebugCurrentFrame, pe = de.getStackAddendum();
        pe !== "" && (K += "%s", te = te.concat([pe]));
        var Ae = te.map(function(we) {
          return String(we);
        });
        Ae.unshift("Warning: " + K), Function.prototype.apply.call(console[F], console, Ae);
      }
    }
    var c = !1, h = !1, j = !1, A = !1, B = !1, _;
    _ = Symbol.for("react.module.reference");
    function C(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === s || F === g || B || F === o || F === a || F === l || A || F === f || c || h || j || typeof F == "object" && F !== null && (F.$$typeof === i || F.$$typeof === w || F.$$typeof === b || F.$$typeof === u || F.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === _ || F.getModuleId !== void 0));
    }
    function N(F, K, te) {
      var de = F.displayName;
      if (de)
        return de;
      var pe = K.displayName || K.name || "";
      return pe !== "" ? te + "(" + pe + ")" : te;
    }
    function D(F) {
      return F.displayName || "Context";
    }
    function k(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
        return F.displayName || F.name || null;
      if (typeof F == "string")
        return F;
      switch (F) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case g:
          return "Profiler";
        case o:
          return "StrictMode";
        case a:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case u:
            var K = F;
            return D(K) + ".Consumer";
          case b:
            var te = F;
            return D(te._context) + ".Provider";
          case d:
            return N(F, F.render, "ForwardRef");
          case w:
            var de = F.displayName || null;
            return de !== null ? de : k(F.type) || "Memo";
          case i: {
            var pe = F, Ae = pe._payload, we = pe._init;
            try {
              return k(we(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, R = 0, L, H, V, Q, G, T, O;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function P() {
      {
        if (R === 0) {
          L = console.log, H = console.info, V = console.warn, Q = console.error, G = console.group, T = console.groupCollapsed, O = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: F,
            log: F,
            warn: F,
            error: F,
            group: F,
            groupCollapsed: F,
            groupEnd: F
          });
        }
        R++;
      }
    }
    function Y() {
      {
        if (R--, R === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, F, {
              value: L
            }),
            info: S({}, F, {
              value: H
            }),
            warn: S({}, F, {
              value: V
            }),
            error: S({}, F, {
              value: Q
            }),
            group: S({}, F, {
              value: G
            }),
            groupCollapsed: S({}, F, {
              value: T
            }),
            groupEnd: S({}, F, {
              value: O
            })
          });
        }
        R < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = E.ReactCurrentDispatcher, ce;
    function re(F, K, te) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (pe) {
            var de = pe.stack.trim().match(/\n( *(at )?)/);
            ce = de && de[1] || "";
          }
        return `
` + ce + F;
      }
    }
    var ge = !1, me;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      me = new ae();
    }
    function J(F, K) {
      if (!F || ge)
        return "";
      {
        var te = me.get(F);
        if (te !== void 0)
          return te;
      }
      var de;
      ge = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = ie.current, ie.current = null, P();
      try {
        if (K) {
          var we = function() {
            throw Error();
          };
          if (Object.defineProperty(we.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(we, []);
            } catch (qe) {
              de = qe;
            }
            Reflect.construct(F, [], we);
          } else {
            try {
              we.call();
            } catch (qe) {
              de = qe;
            }
            F.call(we.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            de = qe;
          }
          F();
        }
      } catch (qe) {
        if (qe && de && typeof qe.stack == "string") {
          for (var ve = qe.stack.split(`
`), Me = de.stack.split(`
`), Te = ve.length - 1, Re = Me.length - 1; Te >= 1 && Re >= 0 && ve[Te] !== Me[Re]; )
            Re--;
          for (; Te >= 1 && Re >= 0; Te--, Re--)
            if (ve[Te] !== Me[Re]) {
              if (Te !== 1 || Re !== 1)
                do
                  if (Te--, Re--, Re < 0 || ve[Te] !== Me[Re]) {
                    var Ve = `
` + ve[Te].replace(" at new ", " at ");
                    return F.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", F.displayName)), typeof F == "function" && me.set(F, Ve), Ve;
                  }
                while (Te >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ie.current = Ae, Y(), Error.prepareStackTrace = pe;
      }
      var Ke = F ? F.displayName || F.name : "", Ze = Ke ? re(Ke) : "";
      return typeof F == "function" && me.set(F, Ze), Ze;
    }
    function De(F, K, te) {
      return J(F, !1);
    }
    function Ee(F) {
      var K = F.prototype;
      return !!(K && K.isReactComponent);
    }
    function Be(F, K, te) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return J(F, Ee(F));
      if (typeof F == "string")
        return re(F);
      switch (F) {
        case a:
          return re("Suspense");
        case l:
          return re("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case d:
            return De(F.render);
          case w:
            return Be(F.type, K, te);
          case i: {
            var de = F, pe = de._payload, Ae = de._init;
            try {
              return Be(Ae(pe), K, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, fe = {}, le = E.ReactDebugCurrentFrame;
    function I(F) {
      if (F) {
        var K = F._owner, te = Be(F.type, F._source, K ? K.type : null);
        le.setExtraStackFrame(te);
      } else
        le.setExtraStackFrame(null);
    }
    function ne(F, K, te, de, pe) {
      {
        var Ae = Function.call.bind(Z);
        for (var we in F)
          if (Ae(F, we)) {
            var ve = void 0;
            try {
              if (typeof F[we] != "function") {
                var Me = Error((de || "React class") + ": " + te + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              ve = F[we](K, we, de, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              ve = Te;
            }
            ve && !(ve instanceof Error) && (I(pe), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", te, we, typeof ve), I(null)), ve instanceof Error && !(ve.message in fe) && (fe[ve.message] = !0, I(pe), v("Failed %s type: %s", te, ve.message), I(null));
          }
      }
    }
    var oe = Array.isArray;
    function ee(F) {
      return oe(F);
    }
    function ke(F) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, te = K && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return te;
      }
    }
    function je(F) {
      try {
        return $e(F), !1;
      } catch {
        return !0;
      }
    }
    function $e(F) {
      return "" + F;
    }
    function Pe(F) {
      if (je(F))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ke(F)), $e(F);
    }
    var Ue = E.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, it, ht, Ye;
    Ye = {};
    function Ge(F) {
      if (Z.call(F, "ref")) {
        var K = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function pt(F) {
      if (Z.call(F, "key")) {
        var K = Object.getOwnPropertyDescriptor(F, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function mt(F, K) {
      if (typeof F.ref == "string" && Ue.current && K && Ue.current.stateNode !== K) {
        var te = k(Ue.current.type);
        Ye[te] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Ue.current.type), F.ref), Ye[te] = !0);
      }
    }
    function z(F, K) {
      {
        var te = function() {
          it || (it = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        te.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function q(F, K) {
      {
        var te = function() {
          ht || (ht = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        te.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var $ = function(F, K, te, de, pe, Ae, we) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: F,
        key: K,
        ref: te,
        props: we,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function W(F, K, te, de, pe) {
      {
        var Ae, we = {}, ve = null, Me = null;
        te !== void 0 && (Pe(te), ve = "" + te), pt(K) && (Pe(K.key), ve = "" + K.key), Ge(K) && (Me = K.ref, mt(K, pe));
        for (Ae in K)
          Z.call(K, Ae) && !xt.hasOwnProperty(Ae) && (we[Ae] = K[Ae]);
        if (F && F.defaultProps) {
          var Te = F.defaultProps;
          for (Ae in Te)
            we[Ae] === void 0 && (we[Ae] = Te[Ae]);
        }
        if (ve || Me) {
          var Re = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          ve && z(we, Re), Me && q(we, Re);
        }
        return $(F, ve, Me, pe, de, Ue.current, we);
      }
    }
    var se = E.ReactCurrentOwner, Oe = E.ReactDebugCurrentFrame;
    function Ie(F) {
      if (F) {
        var K = F._owner, te = Be(F.type, F._source, K ? K.type : null);
        Oe.setExtraStackFrame(te);
      } else
        Oe.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function nt(F) {
      return typeof F == "object" && F !== null && F.$$typeof === r;
    }
    function vt() {
      {
        if (se.current) {
          var F = k(se.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function ye(F) {
      return "";
    }
    var ct = {};
    function Lt(F) {
      {
        var K = vt();
        if (!K) {
          var te = typeof F == "string" ? F : F.displayName || F.name;
          te && (K = `

Check the top-level render call using <` + te + ">.");
        }
        return K;
      }
    }
    function At(F, K) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var te = Lt(K);
        if (ct[te])
          return;
        ct[te] = !0;
        var de = "";
        F && F._owner && F._owner !== se.current && (de = " It was passed a child from " + k(F._owner.type) + "."), Ie(F), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, de), Ie(null);
      }
    }
    function bt(F, K) {
      {
        if (typeof F != "object")
          return;
        if (ee(F))
          for (var te = 0; te < F.length; te++) {
            var de = F[te];
            nt(de) && At(de, K);
          }
        else if (nt(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var pe = y(F);
          if (typeof pe == "function" && pe !== F.entries)
            for (var Ae = pe.call(F), we; !(we = Ae.next()).done; )
              nt(we.value) && At(we.value, K);
        }
      }
    }
    function zt(F) {
      {
        var K = F.type;
        if (K == null || typeof K == "string")
          return;
        var te;
        if (typeof K == "function")
          te = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === w))
          te = K.propTypes;
        else
          return;
        if (te) {
          var de = k(K);
          ne(te, F.props, "prop", de, F);
        } else if (K.PropTypes !== void 0 && !rt) {
          rt = !0;
          var pe = k(K);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _t(F) {
      {
        for (var K = Object.keys(F.props), te = 0; te < K.length; te++) {
          var de = K[te];
          if (de !== "children" && de !== "key") {
            Ie(F), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Ie(null);
            break;
          }
        }
        F.ref !== null && (Ie(F), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    var ze = {};
    function Xe(F, K, te, de, pe, Ae) {
      {
        var we = C(F);
        if (!we) {
          var ve = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = ye();
          Me ? ve += Me : ve += vt();
          var Te;
          F === null ? Te = "null" : ee(F) ? Te = "array" : F !== void 0 && F.$$typeof === r ? (Te = "<" + (k(F.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof F, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ve);
        }
        var Re = W(F, K, te, pe, Ae);
        if (Re == null)
          return Re;
        if (we) {
          var Ve = K.children;
          if (Ve !== void 0)
            if (de)
              if (ee(Ve)) {
                for (var Ke = 0; Ke < Ve.length; Ke++)
                  bt(Ve[Ke], F);
                Object.freeze && Object.freeze(Ve);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bt(Ve, F);
        }
        if (Z.call(K, "key")) {
          var Ze = k(F), qe = Object.keys(K).filter(function(hr) {
            return hr !== "key";
          }), lt = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[Ze + lt]) {
            var xr = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lt, Ze, xr, Ze), ze[Ze + lt] = !0;
          }
        }
        return F === s ? _t(Re) : zt(Re), Re;
      }
    }
    function U(F, K, te) {
      return Xe(F, K, te, !0);
    }
    function xe(F, K, te) {
      return Xe(F, K, te, !1);
    }
    var he = xe, Se = U;
    Ut.Fragment = s, Ut.jsx = he, Ut.jsxs = Se;
  }()), Ut;
}
process.env.NODE_ENV === "production" ? Vn.exports = Q0() : Vn.exports = U0();
var t = Vn.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ue = (e, r) => {
  const n = $0(
    ({
      color: s = "currentColor",
      size: o = 24,
      strokeWidth: g = 2,
      absoluteStrokeWidth: b,
      className: u = "",
      children: d,
      ...a
    }, l) => ws(
      "svg",
      {
        ref: l,
        ...K0,
        width: o,
        height: o,
        stroke: s,
        strokeWidth: b ? Number(g) * 24 / Number(o) : g,
        className: ["lucide", `lucide-${G0(e)}`, u].join(" "),
        ...a
      },
      [
        ...r.map(([w, i]) => ws(w, i)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = ue("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = ue("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = ue("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = ue("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = ue("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = ue("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = ue("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = ue("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = ue("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = ue("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = ue("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = ue("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = ue("CircleUser", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = ue("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = ue("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = ue("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ua = ue("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = ue("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = ue("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = ue("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = ue("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = ue("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = ue("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = ue("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = ue("MailOpen", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = ue("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = ue("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = ue("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = ue("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = ue("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = ue("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = ue("PanelsTopLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = ue("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = ue("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = ue("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = ue("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = ue("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = ue("ReplyAll", [
  ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
  ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = ue("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = ue("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = ue("Save", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = ue("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = ue("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = ue("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = ue("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = ue("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = ue("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = ue("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = ue("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = ue("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = ue("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xa = ue("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = ue("UserCog", [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = ue("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = ue("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = ue("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = ue("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), _o = ({
  filters: e,
  onFiltersChange: r,
  onClearFilters: n
}) => {
  const [s, o] = X(!1), g = Fe(null);
  be(() => {
    const a = (l) => {
      g.current && !g.current.contains(l.target) && o(!1);
    };
    return s && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [s]);
  const b = (a, l) => {
    r({ ...e, [a]: l });
  }, u = (a, l) => {
    r({
      ...e,
      dateRange: { ...e.dateRange, [a]: l }
    });
  }, d = () => e.readStatus !== "all" || e.starred || e.hasAttachment || e.sortBy !== "newest" || e.dateRange.from || e.dateRange.to || e.intent !== "all";
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: g, children: [
    " ",
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => o(!s),
        className: `
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${d() ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
        `,
        children: [
          /* @__PURE__ */ t.jsx(ao, { className: "w-4 h-4" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium", children: "Filters" }),
          d() && /* @__PURE__ */ t.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: "Active" }),
          /* @__PURE__ */ t.jsx(Qa, { className: `w-4 h-4 transition-transform ${s ? "rotate-180" : ""}` })
        ]
      }
    ),
    s && /* @__PURE__ */ t.jsxs("div", { className: "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ t.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Filter Emails" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          d() && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: n,
              className: "text-xs text-gray-500 hover:text-gray-700",
              children: "Clear all"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => o(!1),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ t.jsx(et, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ t.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }),
          /* @__PURE__ */ t.jsx("div", { className: "flex space-x-2", children: [
            { value: "all", label: "All", icon: Nr },
            { value: "unread", label: "Unread", icon: Nr },
            { value: "read", label: "Read", icon: uo }
          ].map(({ value: a, label: l, icon: w }) => /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: () => b("readStatus", a),
              className: `
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${e.readStatus === a ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                    `,
              children: [
                /* @__PURE__ */ t.jsx(w, { className: "w-3 h-3" }),
                /* @__PURE__ */ t.jsx("span", { children: l })
              ]
            },
            a
          )) })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Quick Filters" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.starred,
                  onChange: (a) => b("starred", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ t.jsx(_r, { className: "w-4 h-4 ml-2 mr-1 text-yellow-500" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Starred only" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.hasAttachment,
                  onChange: (a) => b("hasAttachment", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ t.jsx(Wn, { className: "w-4 h-4 ml-2 mr-1 text-gray-500" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Has attachments" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort by" }),
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              value: e.sortBy,
              onChange: (a) => b("sortBy", a.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "newest", children: "Newest first" }),
                /* @__PURE__ */ t.jsx("option", { value: "oldest", children: "Oldest first" }),
                /* @__PURE__ */ t.jsx("option", { value: "subject-az", children: "Subject (A-Z)" }),
                /* @__PURE__ */ t.jsx("option", { value: "subject-za", children: "Subject (Z-A)" }),
                /* @__PURE__ */ t.jsx("option", { value: "sender-az", children: "Sender (A-Z)" }),
                /* @__PURE__ */ t.jsx("option", { value: "sender-za", children: "Sender (Z-A)" }),
                /* @__PURE__ */ t.jsx("option", { value: "starred-first", children: "Starred first" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            /* @__PURE__ */ t.jsx(Ha, { className: "w-4 h-4 inline mr-1" }),
            "Date Range"
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "From" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.from,
                  onChange: (a) => u("from", a.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "To" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.to,
                  onChange: (a) => u("to", a.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Type" }),
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              value: e.intent,
              onChange: (a) => b("intent", a.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "all", children: "All types" }),
                /* @__PURE__ */ t.jsx("option", { value: "new", children: "New emails" }),
                /* @__PURE__ */ t.jsx("option", { value: "meetings", children: "Meeting invites" }),
                /* @__PURE__ */ t.jsx("option", { value: "notifications", children: "System notifications" }),
                /* @__PURE__ */ t.jsx("option", { value: "campaigns", children: "Marketing campaigns" }),
                /* @__PURE__ */ t.jsx("option", { value: "support", children: "Support requests" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, ko = ({ isOpen: e, onClose: r }) => {
  const [n, s] = X(!0), [o, g] = X(!0), [b, u] = X(!1), [d, a] = X({ start: "22:00", end: "08:00" }), [l, w] = X({
    newEmails: !0,
    replies: !0,
    mentions: !0,
    reminders: !1
  }), i = () => {
    console.log("Saving notification preferences:", {
      emailNotifications: n,
      desktopNotifications: o,
      soundEnabled: b,
      quietHours: d,
      notificationTypes: l
    }), r();
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Notification Preferences" }),
      /* @__PURE__ */ t.jsx("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(et, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(Nr, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Email Notifications" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "Receive notifications via email" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: n,
              onChange: (f) => s(f.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(eo, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Desktop Notifications" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "Show browser notifications" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: o,
              onChange: (f) => g(f.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(J0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Sound Notifications" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "Play sound for new emails" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: b,
              onChange: (f) => u(f.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(as, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Quiet Hours" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-2 gap-4 ml-8", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "From" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "time",
                value: d.start,
                onChange: (f) => a({ ...d, start: f.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "To" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "time",
                value: d.end,
                onChange: (f) => a({ ...d, end: f.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Notification Types" }),
        /* @__PURE__ */ t.jsx("div", { className: "space-y-3 ml-4", children: Object.entries(l).map(([f, p]) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700 capitalize", children: f.replace(/([A-Z])/g, " $1").trim() }),
          /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: p,
                onChange: (m) => w({
                  ...l,
                  [f]: m.target.checked
                })
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, f)) })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: r,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: i,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, Do = ({ isOpen: e, onClose: r }) => {
  const [n, s] = X([
    {
      id: 1,
      name: "Default",
      content: `Best regards,
John Doe
Software Engineer
john.doe@company.com`,
      isDefault: !0
    },
    { id: 2, name: "Casual", content: `Thanks!
John`, isDefault: !1 }
  ]), [o, g] = X(null), [b, u] = X(""), [d, a] = X(""), [l, w] = X(!1), [i, f] = X(!1), p = Fe(null);
  be(() => {
    const h = n.find((j) => j.isDefault);
    h && sessionStorage.setItem("defaultSignature", h.content);
  }, [n]);
  const m = (h) => {
    g(h.id), u(h.name), a(h.content), w(!1);
  }, y = () => {
    g(null), u(""), a(""), w(!0);
  };
  be(() => {
    const h = (j) => {
      p.current && !p.current.contains(j.target) && r();
    };
    return e && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [e, r]);
  const E = () => {
    if (l) {
      const h = {
        id: Date.now(),
        name: b,
        content: d,
        isDefault: n.length === 0
      };
      s([...n, h]);
    } else o && s(
      n.map(
        (h) => h.id === o ? { ...h, name: b, content: d } : h
      )
    );
    g(null), w(!1), u(""), a("");
  }, v = (h) => {
    s(n.filter((j) => j.id !== h));
  }, x = (h) => {
    s(
      n.map((j) => ({ ...j, isDefault: j.id === h }))
    );
  }, c = () => {
    g(null), w(!1), u(""), a("");
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: p,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
          /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Signatures" }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: r,
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ t.jsx(et, { className: "w-6 h-6" })
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "p-6", children: l || o ? /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Signature Name" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: b,
                onChange: (h) => u(h.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                placeholder: "Enter signature name"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Signature Content" }),
              /* @__PURE__ */ t.jsxs(
                "button",
                {
                  onClick: () => f(!i),
                  className: "flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700",
                  children: [
                    i ? /* @__PURE__ */ t.jsx(go, { className: "w-4 h-4" }) : /* @__PURE__ */ t.jsx(Ua, { className: "w-4 h-4" }),
                    /* @__PURE__ */ t.jsx("span", { children: i ? "Edit" : "Preview" })
                  ]
                }
              )
            ] }),
            i ? /* @__PURE__ */ t.jsx("div", { className: "w-full min-h-32 p-3 border border-gray-300 rounded-md bg-gray-50", children: /* @__PURE__ */ t.jsx("div", { className: "whitespace-pre-wrap text-sm text-gray-900", children: d || "No content yet..." }) }) : /* @__PURE__ */ t.jsx(
              "textarea",
              {
                value: d,
                onChange: (h) => a(h.target.value),
                className: "w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
                placeholder: "Enter your signature content"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end space-x-3 pt-4", children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: c,
                className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: E,
                disabled: !b.trim() || !d.trim(),
                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                children: "Save Signature"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Your Signatures" }),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: y,
                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                children: "Create New"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "space-y-3", children: n.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
            /* @__PURE__ */ t.jsx(Xa, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
            /* @__PURE__ */ t.jsx("p", { children: "No signatures created yet" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm", children: 'Click "Create New" to add your first signature' })
          ] }) : n.map((h) => /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: "border border-gray-200 rounded-lg p-4",
              children: [
                /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ t.jsx("h4", { className: "font-medium text-gray-900", children: h.name }),
                    h.isDefault && /* @__PURE__ */ t.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: "Default" })
                  ] }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex space-x-2", children: [
                    !h.isDefault && /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => x(h.id),
                        className: "text-green-600 border border-green-600 hover:text-green-700 hover:border-green-700 text-sm rounded px-2 py-1",
                        children: "Set Default"
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => m(h),
                        className: "text-blue-600 border border-blue-600 hover:text-blue-700 hover:border-blue-700 text-sm rounded px-2 py-1",
                        children: "Edit"
                      }
                    ),
                    !h.isDefault && /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => v(h.id),
                        className: "text-red-600 border border-red-600 hover:text-red-700 hover:border-red-700 text-sm rounded px-2 py-1",
                        children: "Delete"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ t.jsx("div", { className: "bg-gray-50 rounded p-3 text-sm text-gray-700", children: /* @__PURE__ */ t.jsx("div", { className: "whitespace-pre-wrap", children: h.content }) })
              ]
            },
            h.id
          )) })
        ] }) })
      ]
    }
  ) }) : null;
}, Bo = ({ isOpen: e, onClose: r }) => {
  const [n, s] = X({
    density: "comfortable",
    readingPane: "right",
    showImages: "ask",
    fontSize: "medium",
    theme: "light",
    showPreview: !0,
    showSender: !0,
    showSnippet: !0,
    markAsReadDelay: 2,
    conversationView: !0
  }), o = (u, d) => {
    s((a) => ({ ...a, [u]: d }));
  }, g = () => {
    console.log("Saving display settings:", n), r();
  }, b = () => {
    s({
      density: "comfortable",
      readingPane: "right",
      showImages: "ask",
      fontSize: "medium",
      theme: "light",
      showPreview: !0,
      showSender: !0,
      showSnippet: !0,
      markAsReadDelay: 2,
      conversationView: !0
    });
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Display Options" }),
      /* @__PURE__ */ t.jsx("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(et, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(mo, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Display Density" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: ["compact", "comfortable", "relaxed"].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "density",
              value: u,
              checked: n.density === u,
              onChange: (d) => o("density", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700 capitalize", children: u })
        ] }, u)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(ho, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Reading Pane" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "right", label: "Right side" },
          { value: "bottom", label: "Bottom" },
          { value: "off", label: "No reading pane" }
        ].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "readingPane",
              value: u.value,
              checked: n.readingPane === u.value,
              onChange: (d) => o("readingPane", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label })
        ] }, u.value)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(co, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Image Display" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "always", label: "Always show images" },
          { value: "ask", label: "Ask before showing images" },
          { value: "never", label: "Never show images" }
        ].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "showImages",
              value: u.value,
              checked: n.showImages === u.value,
              onChange: (d) => o("showImages", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label })
        ] }, u.value)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Xa, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Font Size" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7", children: /* @__PURE__ */ t.jsxs(
          "select",
          {
            value: n.fontSize,
            onChange: (u) => o("fontSize", u.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ t.jsx("option", { value: "small", children: "Small" }),
              /* @__PURE__ */ t.jsx("option", { value: "medium", children: "Medium" }),
              /* @__PURE__ */ t.jsx("option", { value: "large", children: "Large" }),
              /* @__PURE__ */ t.jsx("option", { value: "extra-large", children: "Extra Large" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Ua, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Theme" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "auto", label: "Auto (system)" }
        ].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "theme",
              value: u.value,
              checked: n.theme === u.value,
              onChange: (d) => o("theme", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label })
        ] }, u.value)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Display Options" }),
        /* @__PURE__ */ t.jsx("div", { className: "space-y-3 ml-4", children: [
          { key: "showPreview", label: "Show email preview pane" },
          { key: "showSender", label: "Show sender avatars" },
          { key: "showSnippet", label: "Show email snippets in list" },
          { key: "conversationView", label: "Group emails by conversation" }
        ].map((u) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label }),
          /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: n[u.key],
                onChange: (d) => o(u.key, d.target.checked)
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, u.key)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Mark as Read Delay" }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-4", children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Seconds before marking email as read when opened" }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "10",
              step: "1",
              value: n.markAsReadDelay,
              onChange: (u) => o("markAsReadDelay", parseInt(u.target.value)),
              className: "w-full"
            }
          ),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
            /* @__PURE__ */ t.jsx("span", { children: "Immediately" }),
            /* @__PURE__ */ t.jsxs("span", { children: [
              n.markAsReadDelay,
              "s"
            ] }),
            /* @__PURE__ */ t.jsx("span", { children: "10s" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: b,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Reset to Defaults"
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: r,
            className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: g,
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
            children: "Save Changes"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, So = ({ isOpen: e, onClose: r }) => {
  const [n, s] = X({
    language: "en",
    timezone: "America/New_York",
    autoSave: !0,
    confirmDelete: !0,
    undoSendDelay: 10,
    maxAttachmentSize: 25,
    autoArchive: !1,
    archiveAfterDays: 30,
    backupFrequency: "weekly",
    twoFactorAuth: !1,
    sessionTimeout: 60,
    showTips: !0
  }), o = (d, a) => {
    s((l) => ({ ...l, [d]: a }));
  }, g = () => {
    console.log("Saving general settings:", n), r();
  }, b = () => {
    console.log("Exporting user data...");
  }, u = () => {
    window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    ) && console.log("Account deletion requested...");
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "General Settings" }),
      /* @__PURE__ */ t.jsx("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(et, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(io, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Language & Region" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Language" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.language,
                onChange: (d) => o("language", d.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: "en", children: "English" }),
                  /* @__PURE__ */ t.jsx("option", { value: "es", children: "Español" }),
                  /* @__PURE__ */ t.jsx("option", { value: "fr", children: "Français" }),
                  /* @__PURE__ */ t.jsx("option", { value: "de", children: "Deutsch" }),
                  /* @__PURE__ */ t.jsx("option", { value: "zh", children: "中文" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Timezone" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.timezone,
                onChange: (d) => o("timezone", d.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: "America/New_York", children: "Eastern Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "America/Chicago", children: "Central Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "America/Denver", children: "Mountain Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "America/Los_Angeles", children: "Pacific Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "UTC", children: "UTC" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(as, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Email Behavior" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Auto-save drafts" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Automatically save email drafts while composing" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.autoSave,
                  onChange: (d) => o("autoSave", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Confirm before deleting" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Show confirmation dialog when deleting emails" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.confirmDelete,
                  onChange: (d) => o("confirmDelete", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs("label", { className: "block text-sm text-gray-700 mb-2", children: [
              "Undo send delay: ",
              n.undoSendDelay,
              " seconds"
            ] }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "30",
                step: "5",
                value: n.undoSendDelay,
                onChange: (d) => o("undoSendDelay", parseInt(d.target.value)),
                className: "w-full"
              }
            ),
            /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
              /* @__PURE__ */ t.jsx("span", { children: "No delay" }),
              /* @__PURE__ */ t.jsx("span", { children: "30s" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Maximum attachment size (MB)" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.maxAttachmentSize,
                onChange: (d) => o("maxAttachmentSize", parseInt(d.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: 10, children: "10 MB" }),
                  /* @__PURE__ */ t.jsx("option", { value: 25, children: "25 MB" }),
                  /* @__PURE__ */ t.jsx("option", { value: 50, children: "50 MB" }),
                  /* @__PURE__ */ t.jsx("option", { value: 100, children: "100 MB" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(X0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Auto Archive" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Enable auto-archive" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Automatically archive old emails" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.autoArchive,
                  onChange: (d) => o("autoArchive", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          n.autoArchive && /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Archive emails after (days)" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.archiveAfterDays,
                onChange: (d) => o("archiveAfterDays", parseInt(d.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: 7, children: "7 days" }),
                  /* @__PURE__ */ t.jsx("option", { value: 30, children: "30 days" }),
                  /* @__PURE__ */ t.jsx("option", { value: 90, children: "90 days" }),
                  /* @__PURE__ */ t.jsx("option", { value: 365, children: "1 year" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Eo, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Security" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Two-factor authentication" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Add an extra layer of security" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.twoFactorAuth,
                  onChange: (d) => o("twoFactorAuth", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Session timeout (minutes)" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.sessionTimeout,
                onChange: (d) => o("sessionTimeout", parseInt(d.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: 15, children: "15 minutes" }),
                  /* @__PURE__ */ t.jsx("option", { value: 30, children: "30 minutes" }),
                  /* @__PURE__ */ t.jsx("option", { value: 60, children: "1 hour" }),
                  /* @__PURE__ */ t.jsx("option", { value: 120, children: "2 hours" }),
                  /* @__PURE__ */ t.jsx("option", { value: 0, children: "Never" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Ns, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Data Management" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-3", children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: b,
              className: "w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
              children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-gray-900", children: "Export your data" }),
                  /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Download a copy of your emails and settings" })
                ] }),
                /* @__PURE__ */ t.jsx(Ns, { className: "w-4 h-4 text-gray-400" })
              ] })
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: u,
              className: "w-full text-left px-4 py-3 border border-red-300 rounded-md hover:bg-red-50 transition-colors",
              children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-red-900", children: "Delete account" }),
                  /* @__PURE__ */ t.jsx("p", { className: "text-xs text-red-500", children: "Permanently delete your account and all data" })
                ] }),
                /* @__PURE__ */ t.jsx(Ir, { className: "w-4 h-4 text-red-400" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Show helpful tips" }),
          /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Display tips and shortcuts in the interface" })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: n.showTips,
              onChange: (d) => o("showTips", d.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: r,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: g,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, Fo = ({
  onMenuToggle: e,
  onSearch: r,
  onFiltersChange: n,
  filters: s,
  onComposeClick: o
}) => {
  const [g, b] = X(""), [u, d] = X(!1), [a, l] = X(!1), [w, i] = X(!1), [f, p] = X(!1), [m, y] = X(!1), [E, v] = X(!1), x = Fe(null), c = Fe(null);
  be(() => {
    const B = (_) => {
      x.current && !x.current.contains(_.target) && d(!1), c.current && !c.current.contains(_.target) && l(!1);
    };
    return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, []);
  const h = (B) => {
    b(B), r(B);
  }, j = () => {
    n({
      readStatus: "all",
      starred: !1,
      hasAttachment: !1,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all"
    });
  }, A = () => {
    p(!0), d(!1);
  };
  return /* @__PURE__ */ t.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50", children: [
    /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ t.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Mail" }) }) }),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 max-w-2xl mx-8", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
            onClick: () => h(g),
            tabIndex: 0,
            children: /* @__PURE__ */ t.jsx(wo, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search mail",
            value: g,
            onChange: (B) => b(B.target.value),
            onKeyDown: (B) => {
              B.key === "Enter" && h(g);
            },
            className: "w-full pl-10 pr-10 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
          }
        ),
        g && /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
            onClick: () => {
              b(""), h("");
            },
            tabIndex: 0,
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(
        _o,
        {
          filters: s,
          onFiltersChange: n,
          onClearFilters: j
        }
      )
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: x, children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => d(!u),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ t.jsx(Co, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        u && /* @__PURE__ */ t.jsx("div", { className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: A,
            className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
            children: [
              /* @__PURE__ */ t.jsx(no, { className: "w-4 h-4 text-gray-500" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-gray-700", children: "Signature Setup" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: "group flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 bg-blue-600 text-white",
          onClick: o,
          children: [
            /* @__PURE__ */ t.jsx(Ar, { className: "w-5 h-5" }),
            /* @__PURE__ */ t.jsx("span", { className: "ml-2 whitespace-nowrap hidden md:inline", children: "Compose" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      ko,
      {
        isOpen: w,
        onClose: () => i(!1)
      }
    ),
    /* @__PURE__ */ t.jsx(
      Do,
      {
        isOpen: f,
        onClose: () => p(!1)
      }
    ),
    /* @__PURE__ */ t.jsx(
      Bo,
      {
        isOpen: m,
        onClose: () => y(!1)
      }
    ),
    /* @__PURE__ */ t.jsx(
      So,
      {
        isOpen: E,
        onClose: () => v(!1)
      }
    )
  ] });
}, Ro = () => /* @__PURE__ */ t.jsxs("div", { className: "w-full h-14 bg-white shadow-md flex items-center px-4 animate-pulse", children: [
  /* @__PURE__ */ t.jsx("div", { className: "w-32 h-6 bg-gray-300 rounded mr-4" }),
  " ",
  /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ t.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ t.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" })
  ] }),
  /* @__PURE__ */ t.jsx("div", { className: "w-10 h-10 bg-gray-300 rounded-full ml-auto" }),
  " "
] }), To = () => /* @__PURE__ */ t.jsx("div", { className: "w-full h-full space-y-6 p-6 animate-pulse overflow-y-auto", children: [1, 2, 3].map((e, r) => /* @__PURE__ */ t.jsxs(
  "div",
  {
    className: "bg-white rounded-md shadow p-6 w-full",
    children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ t.jsx("div", { className: "w-12 h-12 bg-gray-300 rounded-full" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "w-1/3 h-4 bg-gray-300 rounded" }),
          /* @__PURE__ */ t.jsx("div", { className: "w-1/4 h-3 bg-gray-200 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-5/6 bg-gray-200 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-2/3 bg-gray-200 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-full bg-gray-100 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-3/4 bg-gray-100 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-4/5 bg-gray-100 rounded" })
      ] })
    ]
  },
  r
)) }), Oo = ({
  selectedLabels: e,
  availableLabels: r,
  onLabelsChange: n,
  onCreateLabel: s,
  placeholder: o = "Add labels...",
  className: g = "",
  maxHeight: b = "max-h-48"
}) => {
  const [u, d] = X(!1), [a, l] = X(""), [w, i] = X(!1), [f, p] = X(""), [m, y] = X("#3B82F6"), E = Fe(null), v = Fe(null);
  be(() => {
    const _ = (C) => {
      E.current && !E.current.contains(C.target) && (d(!1), i(!1), l(""), p(""));
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []);
  const x = r.filter(
    (_) => _.name.toLowerCase().includes(a.toLowerCase()) && !e.includes(_.id)
  ), c = r.filter(
    (_) => e.includes(_.id)
  ), h = (_) => {
    e.includes(_) ? n(e.filter((C) => C !== _)) : n([...e, _]);
  }, j = (_) => {
    n(e.filter((C) => C !== _));
  }, A = () => {
    if (!f.trim() || !s) return;
    const _ = r.find(
      (C) => C.name.toLowerCase() === f.trim().toLowerCase()
    );
    _ ? h(_.id) : s({
      name: f.trim(),
      color: m,
      isSystem: !1
    }), p(""), i(!1), l("");
  }, B = (_) => {
    _.key === "Enter" ? (_.preventDefault(), w ? A() : a.trim() && s && (p(a.trim()), i(!0))) : _.key === "Escape" && (d(!1), i(!1), l(""));
  };
  return /* @__PURE__ */ t.jsxs("div", { ref: E, className: `relative ${g}`, children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => {
          d(!0), setTimeout(() => {
            var _;
            return (_ = v.current) == null ? void 0 : _.focus();
          }, 0);
        },
        className: "min-h-[2.5rem] p-2 border border-gray-300 rounded-lg cursor-text focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
        children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          c.map((_) => /* @__PURE__ */ t.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium",
              style: {
                backgroundColor: `${_.color}20`,
                color: _.color,
                border: `1px solid ${_.color}40`
              },
              children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: _.color }
                  }
                ),
                _.name,
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: (C) => {
                      C.stopPropagation(), j(_.id);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ t.jsx(et, { className: "w-3 h-3" })
                  }
                )
              ]
            },
            _.id
          )),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              ref: v,
              type: "text",
              value: a,
              onChange: (_) => l(_.target.value),
              onKeyDown: B,
              onFocus: () => d(!0),
              placeholder: e.length === 0 ? o : "",
              className: "flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
            }
          )
        ] })
      }
    ),
    u && /* @__PURE__ */ t.jsxs("div", { className: `absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${b} overflow-y-auto`, children: [
      w && s && /* @__PURE__ */ t.jsxs("div", { className: "p-3 border-b border-gray-100 bg-blue-50", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
          /* @__PURE__ */ t.jsx(Ar, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-blue-900", children: "Create new label" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "text",
              value: f,
              onChange: (_) => p(_.target.value),
              onKeyDown: B,
              placeholder: "Label name...",
              className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "color",
              value: m,
              onChange: (_) => y(_.target.value),
              className: "w-8 h-8 border border-gray-300 rounded cursor-pointer"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: A,
              disabled: !f.trim(),
              className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors",
              children: /* @__PURE__ */ t.jsx(Wa, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "py-1", children: x.length === 0 && !w ? /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 text-center", children: a ? /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsxs("p", { children: [
          'No labels found for "',
          a,
          '"'
        ] }),
        s && /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => {
              p(a), i(!0);
            },
            className: "mt-1 text-blue-600 hover:text-blue-700 text-sm",
            children: [
              'Create "',
              a,
              '" label'
            ]
          }
        )
      ] }) : "No available labels" }) : x.map((_) => /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => h(_.id),
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full",
                style: { backgroundColor: _.color }
              }
            ),
            /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-900", children: _.name }),
            _.description && /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-500 truncate", children: [
              "- ",
              _.description
            ] })
          ]
        },
        _.id
      )) }),
      !w && s && a && x.length === 0 && /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100", children: /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => {
            p(a), i(!0);
          },
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-blue-600",
          children: [
            /* @__PURE__ */ t.jsx(Ar, { className: "w-4 h-4" }),
            /* @__PURE__ */ t.jsxs("span", { className: "text-sm", children: [
              'Create "',
              a,
              '" label'
            ] })
          ]
        }
      ) })
    ] })
  ] });
}, Po = ({
  emailIds: e,
  currentLabels: r,
  availableLabels: n,
  onLabelsChange: s,
  onCreateLabel: o,
  className: g = ""
}) => {
  const [b, u] = X(!1), [d, a] = X(r), [l, w] = X(!1), i = Fe(null);
  be(() => {
    a(r);
  }, [r]), be(() => {
    const m = (y) => {
      i.current && !i.current.contains(y.target) && u(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const f = async (m) => {
    w(!0), a(m);
    try {
      s(e, m), setTimeout(() => {
        w(!1), u(!1);
      }, 300);
    } catch (y) {
      w(!1), console.error("Error updating labels:", y);
    }
  }, p = n.filter(
    (m) => d.includes(m.id)
  );
  return /* @__PURE__ */ t.jsxs("div", { ref: i, className: `relative ${g}`, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => u(!b),
        disabled: l,
        className: `flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors ${l ? "opacity-50 cursor-not-allowed" : ""}`,
        title: "Manage labels",
        children: [
          /* @__PURE__ */ t.jsx(kr, { className: `w-4 h-4 ${l ? "animate-spin" : ""}` }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: "Labels" }),
          d.length > 0 && /* @__PURE__ */ t.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: d.length }),
          l && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-500", children: "Updating..." })
        ]
      }
    ),
    b && /* @__PURE__ */ t.jsxs("div", { className: "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "p-3 border-b border-gray-100", children: [
        /* @__PURE__ */ t.jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-2", children: [
          "Manage Labels ",
          e.length > 1 && `(${e.length} emails)`
        ] }),
        d.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "Current labels:" }),
          /* @__PURE__ */ t.jsx("div", { className: "flex flex-wrap gap-1", children: p.map((m) => /* @__PURE__ */ t.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
              style: {
                backgroundColor: `${m.color}20`,
                color: m.color,
                border: `1px solid ${m.color}40`
              },
              children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: m.color }
                  }
                ),
                m.name,
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => {
                      const y = d.filter((E) => E !== m.id);
                      f(y);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ t.jsx(et, { className: "w-2 h-2" })
                  }
                )
              ]
            },
            m.id
          )) })
        ] }),
        /* @__PURE__ */ t.jsx(
          Oo,
          {
            selectedLabels: d,
            availableLabels: n,
            onLabelsChange: f,
            onCreateLabel: o,
            placeholder: "Add or create labels...",
            maxHeight: "max-h-32"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "p-3", children: /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => u(!1),
          className: "w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm",
          children: "Done"
        }
      ) })
    ] })
  ] });
};
function Qe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Io = typeof Symbol == "function" && Symbol.observable || "@@observable", Ds = Io, Kr = () => Math.random().toString(36).substring(7).split("").join("."), Mo = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Kr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Kr()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Kr()}`
}, St = Mo;
function ut(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let r = e;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r || Object.getPrototypeOf(e) === null;
}
function Lo(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  switch (r) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return r;
  }
  if (Array.isArray(e))
    return "array";
  if ($o(e))
    return "date";
  if (qo(e))
    return "error";
  const n = zo(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function zo(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function qo(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function $o(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function wt(e) {
  let r = typeof e;
  return process.env.NODE_ENV !== "production" && (r = Lo(e)), r;
}
function Ja(e, r, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(2) : `Expected the root reducer to be a function. Instead, received: '${wt(e)}'`);
  if (typeof r == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof n > "u" && (n = r, r = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(1) : `Expected the enhancer to be a function. Instead, received: '${wt(n)}'`);
    return n(Ja)(e, r);
  }
  let s = e, o = r, g = /* @__PURE__ */ new Map(), b = g, u = 0, d = !1;
  function a() {
    b === g && (b = /* @__PURE__ */ new Map(), g.forEach((y, E) => {
      b.set(E, y);
    }));
  }
  function l() {
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function w(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(4) : `Expected the listener to be a function. Instead, received: '${wt(y)}'`);
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    a();
    const v = u++;
    return b.set(v, y), function() {
      if (E) {
        if (d)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, a(), b.delete(v), g = null;
      }
    };
  }
  function i(y) {
    if (!ut(y))
      throw new Error(process.env.NODE_ENV === "production" ? Qe(7) : `Actions must be plain objects. Instead, the actual type was: '${wt(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(17) : `Action "type" property must be a string. Instead, the actual type was: '${wt(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(9) : "Reducers may not dispatch actions.");
    try {
      d = !0, o = s(o, y);
    } finally {
      d = !1;
    }
    return (g = b).forEach((v) => {
      v();
    }), y;
  }
  function f(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(10) : `Expected the nextReducer to be a function. Instead, received: '${wt(y)}`);
    s = y, i({
      type: St.REPLACE
    });
  }
  function p() {
    const y = w;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(E) {
        if (typeof E != "object" || E === null)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(11) : `Expected the observer to be an object. Instead, received: '${wt(E)}'`);
        function v() {
          const c = E;
          c.next && c.next(l());
        }
        return v(), {
          unsubscribe: y(v)
        };
      },
      [Ds]() {
        return this;
      }
    };
  }
  return i({
    type: St.INIT
  }), {
    dispatch: i,
    subscribe: w,
    getState: l,
    replaceReducer: f,
    [Ds]: p
  };
}
function Bs(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ho(e, r, n, s) {
  const o = Object.keys(r), g = n && n.type === St.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!ut(e))
    return `The ${g} has unexpected type of "${wt(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const b = Object.keys(e).filter((u) => !r.hasOwnProperty(u) && !s[u]);
  if (b.forEach((u) => {
    s[u] = !0;
  }), !(n && n.type === St.REPLACE) && b.length > 0)
    return `Unexpected ${b.length > 1 ? "keys" : "key"} "${b.join('", "')}" found in ${g}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Vo(e) {
  Object.keys(e).forEach((r) => {
    const n = e[r];
    if (typeof n(void 0, {
      type: St.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(12) : `The slice reducer for key "${r}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: St.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(13) : `The slice reducer for key "${r}" returned undefined when probed with a random type. Don't try to handle '${St.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function e0(e) {
  const r = Object.keys(e), n = {};
  for (let b = 0; b < r.length; b++) {
    const u = r[b];
    process.env.NODE_ENV !== "production" && typeof e[u] > "u" && Bs(`No reducer provided for key "${u}"`), typeof e[u] == "function" && (n[u] = e[u]);
  }
  const s = Object.keys(n);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let g;
  try {
    Vo(n);
  } catch (b) {
    g = b;
  }
  return function(u = {}, d) {
    if (g)
      throw g;
    if (process.env.NODE_ENV !== "production") {
      const w = Ho(u, n, d, o);
      w && Bs(w);
    }
    let a = !1;
    const l = {};
    for (let w = 0; w < s.length; w++) {
      const i = s[w], f = n[i], p = u[i], m = f(p, d);
      if (typeof m > "u") {
        const y = d && d.type;
        throw new Error(process.env.NODE_ENV === "production" ? Qe(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${i}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[i] = m, a = a || m !== p;
    }
    return a = a || s.length !== Object.keys(u).length, a ? l : u;
  };
}
function Dr(...e) {
  return e.length === 0 ? (r) => r : e.length === 1 ? e[0] : e.reduce((r, n) => (...s) => r(n(...s)));
}
function Wo(...e) {
  return (r) => (n, s) => {
    const o = r(n, s);
    let g = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Qe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const b = {
      getState: o.getState,
      dispatch: (d, ...a) => g(d, ...a)
    }, u = e.map((d) => d(b));
    return g = Dr(...u)(o.dispatch), {
      ...o,
      dispatch: g
    };
  };
}
function os(e) {
  return ut(e) && "type" in e && typeof e.type == "string";
}
var is = Symbol.for("immer-nothing"), Zt = Symbol.for("immer-draftable"), Je = Symbol.for("immer-state"), t0 = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Le(e, ...r) {
  if (process.env.NODE_ENV !== "production") {
    const n = t0[e], s = typeof n == "function" ? n.apply(null, r) : n;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rt = Object.getPrototypeOf;
function ft(e) {
  return !!e && !!e[Je];
}
function ot(e) {
  var r;
  return e ? r0(e) || Array.isArray(e) || !!e[Zt] || !!((r = e.constructor) != null && r[Zt]) || cr(e) || lr(e) : !1;
}
var Qo = Object.prototype.constructor.toString();
function r0(e) {
  if (!e || typeof e != "object")
    return !1;
  const r = Rt(e);
  if (r === null)
    return !0;
  const n = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Qo;
}
function Uo(e) {
  return ft(e) || Le(15, e), e[Je].base_;
}
function rr(e, r) {
  Tt(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    r(n, e[n], e);
  }) : e.forEach((n, s) => r(s, n, e));
}
function Tt(e) {
  const r = e[Je];
  return r ? r.type_ : Array.isArray(e) ? 1 : cr(e) ? 2 : lr(e) ? 3 : 0;
}
function nr(e, r) {
  return Tt(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function Gr(e, r) {
  return Tt(e) === 2 ? e.get(r) : e[r];
}
function n0(e, r, n) {
  const s = Tt(e);
  s === 2 ? e.set(r, n) : s === 3 ? e.add(n) : e[r] = n;
}
function Ko(e, r) {
  return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function cr(e) {
  return e instanceof Map;
}
function lr(e) {
  return e instanceof Set;
}
function Dt(e) {
  return e.copy_ || e.base_;
}
function Un(e, r) {
  if (cr(e))
    return new Map(e);
  if (lr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = r0(e);
  if (r === !0 || r === "class_only" && !n) {
    const s = Object.getOwnPropertyDescriptors(e);
    delete s[Je];
    let o = Reflect.ownKeys(s);
    for (let g = 0; g < o.length; g++) {
      const b = o[g], u = s[b];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (s[b] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[b]
      });
    }
    return Object.create(Rt(e), s);
  } else {
    const s = Rt(e);
    if (s !== null && n)
      return { ...e };
    const o = Object.create(s);
    return Object.assign(o, e);
  }
}
function cs(e, r = !1) {
  return Mr(e) || ft(e) || !ot(e) || (Tt(e) > 1 && (e.set = e.add = e.clear = e.delete = Go), Object.freeze(e), r && Object.entries(e).forEach(([n, s]) => cs(s, !0))), e;
}
function Go() {
  Le(2);
}
function Mr(e) {
  return Object.isFrozen(e);
}
var Kn = {};
function Ot(e) {
  const r = Kn[e];
  return r || Le(0, e), r;
}
function Yo(e, r) {
  Kn[e] || (Kn[e] = r);
}
var sr;
function s0() {
  return sr;
}
function Xo(e, r) {
  return {
    drafts_: [],
    parent_: e,
    immer_: r,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Ss(e, r) {
  r && (Ot("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = r);
}
function Gn(e) {
  Yn(e), e.drafts_.forEach(Zo), e.drafts_ = null;
}
function Yn(e) {
  e === sr && (sr = e.parent_);
}
function Fs(e) {
  return sr = Xo(sr, e);
}
function Zo(e) {
  const r = e[Je];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : r.revoked_ = !0;
}
function Rs(e, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const n = r.drafts_[0];
  return e !== void 0 && e !== n ? (n[Je].modified_ && (Gn(r), Le(4)), ot(e) && (e = Br(r, e), r.parent_ || Sr(r, e)), r.patches_ && Ot("Patches").generateReplacementPatches_(
    n[Je].base_,
    e,
    r.patches_,
    r.inversePatches_
  )) : e = Br(r, n, []), Gn(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), e !== is ? e : void 0;
}
function Br(e, r, n) {
  if (Mr(r))
    return r;
  const s = r[Je];
  if (!s)
    return rr(
      r,
      (o, g) => Ts(e, s, r, o, g, n)
    ), r;
  if (s.scope_ !== e)
    return r;
  if (!s.modified_)
    return Sr(e, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const o = s.copy_;
    let g = o, b = !1;
    s.type_ === 3 && (g = new Set(o), o.clear(), b = !0), rr(
      g,
      (u, d) => Ts(e, s, o, u, d, n, b)
    ), Sr(e, o, !1), n && e.patches_ && Ot("Patches").generatePatches_(
      s,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return s.copy_;
}
function Ts(e, r, n, s, o, g, b) {
  if (process.env.NODE_ENV !== "production" && o === n && Le(5), ft(o)) {
    const u = g && r && r.type_ !== 3 && // Set objects are atomic since they have no keys.
    !nr(r.assigned_, s) ? g.concat(s) : void 0, d = Br(e, o, u);
    if (n0(n, s, d), ft(d))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else b && n.add(o);
  if (ot(o) && !Mr(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Br(e, o), (!r || !r.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(n, s) && Sr(e, o);
  }
}
function Sr(e, r, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && cs(r, n);
}
function Jo(e, r) {
  const n = Array.isArray(e), s = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: r ? r.scope_ : s0(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: r,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = s, g = ls;
  n && (o = [s], g = ar);
  const { revoke: b, proxy: u } = Proxy.revocable(o, g);
  return s.draft_ = u, s.revoke_ = b, u;
}
var ls = {
  get(e, r) {
    if (r === Je)
      return e;
    const n = Dt(e);
    if (!nr(n, r))
      return ei(e, n, r);
    const s = n[r];
    return e.finalized_ || !ot(s) ? s : s === Yr(e.base_, r) ? (Xr(e), e.copy_[r] = Zn(s, e)) : s;
  },
  has(e, r) {
    return r in Dt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Dt(e));
  },
  set(e, r, n) {
    const s = a0(Dt(e), r);
    if (s != null && s.set)
      return s.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Yr(Dt(e), r), g = o == null ? void 0 : o[Je];
      if (g && g.base_ === n)
        return e.copy_[r] = n, e.assigned_[r] = !1, !0;
      if (Ko(n, o) && (n !== void 0 || nr(e.base_, r)))
        return !0;
      Xr(e), Xn(e);
    }
    return e.copy_[r] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || r in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[r]) || (e.copy_[r] = n, e.assigned_[r] = !0), !0;
  },
  deleteProperty(e, r) {
    return Yr(e.base_, r) !== void 0 || r in e.base_ ? (e.assigned_[r] = !1, Xr(e), Xn(e)) : delete e.assigned_[r], e.copy_ && delete e.copy_[r], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, r) {
    const n = Dt(e), s = Reflect.getOwnPropertyDescriptor(n, r);
    return s && {
      writable: !0,
      configurable: e.type_ !== 1 || r !== "length",
      enumerable: s.enumerable,
      value: n[r]
    };
  },
  defineProperty() {
    Le(11);
  },
  getPrototypeOf(e) {
    return Rt(e.base_);
  },
  setPrototypeOf() {
    Le(12);
  }
}, ar = {};
rr(ls, (e, r) => {
  ar[e] = function() {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
});
ar.deleteProperty = function(e, r) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r)) && Le(13), ar.set.call(this, e, r, void 0);
};
ar.set = function(e, r, n) {
  return process.env.NODE_ENV !== "production" && r !== "length" && isNaN(parseInt(r)) && Le(14), ls.set.call(this, e[0], r, n, e[0]);
};
function Yr(e, r) {
  const n = e[Je];
  return (n ? Dt(n) : e)[r];
}
function ei(e, r, n) {
  var o;
  const s = a0(r, n);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = s.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function a0(e, r) {
  if (!(r in e))
    return;
  let n = Rt(e);
  for (; n; ) {
    const s = Object.getOwnPropertyDescriptor(n, r);
    if (s)
      return s;
    n = Rt(n);
  }
}
function Xn(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Xn(e.parent_));
}
function Xr(e) {
  e.copy_ || (e.copy_ = Un(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ti = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (r, n, s) => {
      if (typeof r == "function" && typeof n != "function") {
        const g = n;
        n = r;
        const b = this;
        return function(d = g, ...a) {
          return b.produce(d, (l) => n.call(this, l, ...a));
        };
      }
      typeof n != "function" && Le(6), s !== void 0 && typeof s != "function" && Le(7);
      let o;
      if (ot(r)) {
        const g = Fs(this), b = Zn(r, void 0);
        let u = !0;
        try {
          o = n(b), u = !1;
        } finally {
          u ? Gn(g) : Yn(g);
        }
        return Ss(g, s), Rs(o, g);
      } else if (!r || typeof r != "object") {
        if (o = n(r), o === void 0 && (o = r), o === is && (o = void 0), this.autoFreeze_ && cs(o, !0), s) {
          const g = [], b = [];
          Ot("Patches").generateReplacementPatches_(r, o, g, b), s(g, b);
        }
        return o;
      } else
        Le(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (typeof r == "function")
        return (b, ...u) => this.produceWithPatches(b, (d) => r(d, ...u));
      let s, o;
      return [this.produce(r, n, (b, u) => {
        s = b, o = u;
      }), s, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ot(e) || Le(8), ft(e) && (e = ri(e));
    const r = Fs(this), n = Zn(e, void 0);
    return n[Je].isManual_ = !0, Yn(r), n;
  }
  finishDraft(e, r) {
    const n = e && e[Je];
    (!n || !n.isManual_) && Le(9);
    const { scope_: s } = n;
    return Ss(s, r), Rs(void 0, s);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const o = r[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const s = Ot("Patches").applyPatches_;
    return ft(e) ? s(e, r) : this.produce(
      e,
      (o) => s(o, r)
    );
  }
};
function Zn(e, r) {
  const n = cr(e) ? Ot("MapSet").proxyMap_(e, r) : lr(e) ? Ot("MapSet").proxySet_(e, r) : Jo(e, r);
  return (r ? r.scope_ : s0()).drafts_.push(n), n;
}
function ri(e) {
  return ft(e) || Le(10, e), o0(e);
}
function o0(e) {
  if (!ot(e) || Mr(e))
    return e;
  const r = e[Je];
  let n;
  if (r) {
    if (!r.modified_)
      return r.base_;
    r.finalized_ = !0, n = Un(e, r.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Un(e, !0);
  return rr(n, (s, o) => {
    n0(n, s, o0(o));
  }), r && (r.finalized_ = !1), n;
}
function ni() {
  process.env.NODE_ENV !== "production" && t0.push(
    'Sets cannot have "replace" patches.',
    function(i) {
      return "Unsupported patch operation: " + i;
    },
    function(i) {
      return "Cannot apply patch, path doesn't resolve: " + i;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const r = "replace", n = "add", s = "remove";
  function o(i, f, p, m) {
    switch (i.type_) {
      case 0:
      case 2:
        return b(
          i,
          f,
          p,
          m
        );
      case 1:
        return g(i, f, p, m);
      case 3:
        return u(
          i,
          f,
          p,
          m
        );
    }
  }
  function g(i, f, p, m) {
    let { base_: y, assigned_: E } = i, v = i.copy_;
    v.length < y.length && ([y, v] = [v, y], [p, m] = [m, p]);
    for (let x = 0; x < y.length; x++)
      if (E[x] && v[x] !== y[x]) {
        const c = f.concat([x]);
        p.push({
          op: r,
          path: c,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: w(v[x])
        }), m.push({
          op: r,
          path: c,
          value: w(y[x])
        });
      }
    for (let x = y.length; x < v.length; x++) {
      const c = f.concat([x]);
      p.push({
        op: n,
        path: c,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: w(v[x])
      });
    }
    for (let x = v.length - 1; y.length <= x; --x) {
      const c = f.concat([x]);
      m.push({
        op: s,
        path: c
      });
    }
  }
  function b(i, f, p, m) {
    const { base_: y, copy_: E } = i;
    rr(i.assigned_, (v, x) => {
      const c = Gr(y, v), h = Gr(E, v), j = x ? nr(y, v) ? r : n : s;
      if (c === h && j === r)
        return;
      const A = f.concat(v);
      p.push(j === s ? { op: j, path: A } : { op: j, path: A, value: h }), m.push(
        j === n ? { op: s, path: A } : j === s ? { op: n, path: A, value: w(c) } : { op: r, path: A, value: w(c) }
      );
    });
  }
  function u(i, f, p, m) {
    let { base_: y, copy_: E } = i, v = 0;
    y.forEach((x) => {
      if (!E.has(x)) {
        const c = f.concat([v]);
        p.push({
          op: s,
          path: c,
          value: x
        }), m.unshift({
          op: n,
          path: c,
          value: x
        });
      }
      v++;
    }), v = 0, E.forEach((x) => {
      if (!y.has(x)) {
        const c = f.concat([v]);
        p.push({
          op: n,
          path: c,
          value: x
        }), m.unshift({
          op: s,
          path: c,
          value: x
        });
      }
      v++;
    });
  }
  function d(i, f, p, m) {
    p.push({
      op: r,
      path: [],
      value: f === is ? void 0 : f
    }), m.push({
      op: r,
      path: [],
      value: i
    });
  }
  function a(i, f) {
    return f.forEach((p) => {
      const { path: m, op: y } = p;
      let E = i;
      for (let h = 0; h < m.length - 1; h++) {
        const j = Tt(E);
        let A = m[h];
        typeof A != "string" && typeof A != "number" && (A = "" + A), (j === 0 || j === 1) && (A === "__proto__" || A === "constructor") && Le(19), typeof E == "function" && A === "prototype" && Le(19), E = Gr(E, A), typeof E != "object" && Le(18, m.join("/"));
      }
      const v = Tt(E), x = l(p.value), c = m[m.length - 1];
      switch (y) {
        case r:
          switch (v) {
            case 2:
              return E.set(c, x);
            case 3:
              Le(16);
            default:
              return E[c] = x;
          }
        case n:
          switch (v) {
            case 1:
              return c === "-" ? E.push(x) : E.splice(c, 0, x);
            case 2:
              return E.set(c, x);
            case 3:
              return E.add(x);
            default:
              return E[c] = x;
          }
        case s:
          switch (v) {
            case 1:
              return E.splice(c, 1);
            case 2:
              return E.delete(c);
            case 3:
              return E.delete(p.value);
            default:
              return delete E[c];
          }
        default:
          Le(17, y);
      }
    }), i;
  }
  function l(i) {
    if (!ot(i))
      return i;
    if (Array.isArray(i))
      return i.map(l);
    if (cr(i))
      return new Map(
        Array.from(i.entries()).map(([p, m]) => [p, l(m)])
      );
    if (lr(i))
      return new Set(Array.from(i).map(l));
    const f = Object.create(Rt(i));
    for (const p in i)
      f[p] = l(i[p]);
    return nr(i, Zt) && (f[Zt] = i[Zt]), f;
  }
  function w(i) {
    return ft(i) ? l(i) : i;
  }
  Yo("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: d
  });
}
var tt = new ti(), dr = tt.produce, i0 = tt.produceWithPatches.bind(
  tt
);
tt.setAutoFreeze.bind(tt);
tt.setUseStrictShallowCopy.bind(tt);
var Os = tt.applyPatches.bind(tt);
tt.createDraft.bind(tt);
tt.finishDraft.bind(tt);
var si = (e, r, n) => {
  if (r.length === 1 && r[0] === n) {
    let s = !1;
    try {
      const o = {};
      e(o) === o && (s = !0);
    } catch {
    }
    if (s) {
      let o;
      try {
        throw new Error();
      } catch (g) {
        ({ stack: o } = g);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, ai = (e, r, n) => {
  const { memoize: s, memoizeOptions: o } = r, { inputSelectorResults: g, inputSelectorResultsCopy: b } = e, u = s(() => ({}), ...o);
  if (!(u.apply(null, g) === u.apply(null, b))) {
    let a;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: a } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: g,
        secondInputs: b,
        stack: a
      }
    );
  }
}, oi = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function ii(e, r = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(r);
}
function ci(e, r = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(r);
}
function li(e, r = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (s) => typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s
    ).join(", ");
    throw new TypeError(`${r}[${n}]`);
  }
}
var Ps = (e) => Array.isArray(e) ? e : [e];
function di(e) {
  const r = Array.isArray(e[0]) ? e[0] : e;
  return li(
    r,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), r;
}
function Is(e, r) {
  const n = [], { length: s } = e;
  for (let o = 0; o < s; o++)
    n.push(e[o].apply(null, r));
  return n;
}
var ui = (e, r) => {
  const { identityFunctionCheck: n, inputStabilityCheck: s } = {
    ...oi,
    ...r
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: si
    },
    inputStabilityCheck: {
      shouldRun: s === "always" || s === "once" && e,
      run: ai
    }
  };
}, fi = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, xi = typeof WeakRef < "u" ? WeakRef : fi, hi = 0, Ms = 1;
function mr() {
  return {
    s: hi,
    v: void 0,
    o: null,
    p: null
  };
}
function Fr(e, r = {}) {
  let n = mr();
  const { resultEqualityCheck: s } = r;
  let o, g = 0;
  function b() {
    var w;
    let u = n;
    const { length: d } = arguments;
    for (let i = 0, f = d; i < f; i++) {
      const p = arguments[i];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let m = u.o;
        m === null && (u.o = m = /* @__PURE__ */ new WeakMap());
        const y = m.get(p);
        y === void 0 ? (u = mr(), m.set(p, u)) : u = y;
      } else {
        let m = u.p;
        m === null && (u.p = m = /* @__PURE__ */ new Map());
        const y = m.get(p);
        y === void 0 ? (u = mr(), m.set(p, u)) : u = y;
      }
    }
    const a = u;
    let l;
    if (u.s === Ms)
      l = u.v;
    else if (l = e.apply(null, arguments), g++, s) {
      const i = ((w = o == null ? void 0 : o.deref) == null ? void 0 : w.call(o)) ?? o;
      i != null && s(i, l) && (l = i, g !== 0 && g--), o = typeof l == "object" && l !== null || typeof l == "function" ? new xi(l) : l;
    }
    return a.s = Ms, a.v = l, l;
  }
  return b.clearCache = () => {
    n = mr(), b.resetResultsCount();
  }, b.resultsCount = () => g, b.resetResultsCount = () => {
    g = 0;
  }, b;
}
function pi(e, ...r) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: r
  } : e, s = (...o) => {
    let g = 0, b = 0, u, d = {}, a = o.pop();
    typeof a == "object" && (d = a, a = o.pop()), ii(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const l = {
      ...n,
      ...d
    }, {
      memoize: w,
      memoizeOptions: i = [],
      argsMemoize: f = Fr,
      argsMemoizeOptions: p = [],
      devModeChecks: m = {}
    } = l, y = Ps(i), E = Ps(p), v = di(o), x = w(function() {
      return g++, a.apply(
        null,
        arguments
      );
    }, ...y);
    let c = !0;
    const h = f(function() {
      b++;
      const A = Is(
        v,
        arguments
      );
      if (u = x.apply(null, A), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: B, inputStabilityCheck: _ } = ui(c, m);
        if (B.shouldRun && B.run(
          a,
          A,
          u
        ), _.shouldRun) {
          const C = Is(
            v,
            arguments
          );
          _.run(
            { inputSelectorResults: A, inputSelectorResultsCopy: C },
            { memoize: w, memoizeOptions: y },
            arguments
          );
        }
        c && (c = !1);
      }
      return u;
    }, ...E);
    return Object.assign(h, {
      resultFunc: a,
      memoizedResultFunc: x,
      dependencies: v,
      dependencyRecomputations: () => b,
      resetDependencyRecomputations: () => {
        b = 0;
      },
      lastResult: () => u,
      recomputations: () => g,
      resetRecomputations: () => {
        g = 0;
      },
      memoize: w,
      argsMemoize: f
    });
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var ds = /* @__PURE__ */ pi(Fr), mi = Object.assign(
  (e, r = ds) => {
    ci(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), s = n.map(
      (g) => e[g]
    );
    return r(
      s,
      (...g) => g.reduce((b, u, d) => (b[n[d]] = u, b), {})
    );
  },
  { withTypes: () => mi }
);
function c0(e) {
  return ({ dispatch: n, getState: s }) => (o) => (g) => typeof g == "function" ? g(n, s, e) : o(g);
}
var gi = c0(), yi = c0, vi = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Dr : Dr.apply(null, arguments);
}, l0 = (e) => e && typeof e.match == "function";
function at(e, r) {
  function n(...s) {
    if (r) {
      let o = r(...s);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? _e(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: s[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (s) => os(s) && s.type === e, n;
}
function bi(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  l0(e);
}
function wi(e) {
  const r = e ? `${e}`.split("/") : [], n = r[r.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Ci(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (s) => n(s);
  const {
    isActionCreator: r = bi
  } = e;
  return () => (n) => (s) => (r(s) && console.warn(wi(s.type)), n(s));
}
function d0(e, r) {
  let n = 0;
  return {
    measureTime(s) {
      const o = Date.now();
      try {
        return s();
      } finally {
        const g = Date.now();
        n += g - o;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${r} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var u0 = class Xt extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, Xt.prototype);
  }
  static get [Symbol.species]() {
    return Xt;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0]) ? new Xt(...r[0].concat(this)) : new Xt(...r.concat(this));
  }
};
function Ls(e) {
  return ot(e) ? dr(e, () => {
  }) : e;
}
function gr(e, r, n) {
  return e.has(r) ? e.get(r) : e.set(r, n(r)).get(r);
}
function Ei(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function ji(e, r, n) {
  const s = f0(e, r, n);
  return {
    detectMutations() {
      return x0(e, r, s, n);
    }
  };
}
function f0(e, r = [], n, s = "", o = /* @__PURE__ */ new Set()) {
  const g = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), g.children = {};
    for (const b in n) {
      const u = s ? s + "." + b : b;
      r.length && r.indexOf(u) !== -1 || (g.children[b] = f0(e, r, n[b], u));
    }
  }
  return g;
}
function x0(e, r = [], n, s, o = !1, g = "") {
  const b = n ? n.value : void 0, u = b === s;
  if (o && !u && !Number.isNaN(s))
    return {
      wasMutated: !0,
      path: g
    };
  if (e(b) || e(s))
    return {
      wasMutated: !1
    };
  const d = {};
  for (let l in n.children)
    d[l] = !0;
  for (let l in s)
    d[l] = !0;
  const a = r.length > 0;
  for (let l in d) {
    const w = g ? g + "." + l : l;
    if (a && r.some((p) => p instanceof RegExp ? p.test(w) : w === p))
      continue;
    const i = x0(e, r, n.children[l], s[l], u, w);
    if (i.wasMutated)
      return i;
  }
  return {
    wasMutated: !1
  };
}
function Ni(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  {
    let r = function(u, d, a, l) {
      return JSON.stringify(u, n(d, l), a);
    }, n = function(u, d) {
      let a = [], l = [];
      return d || (d = function(w, i) {
        return a[0] === i ? "[Circular ~]" : "[Circular ~." + l.slice(0, a.indexOf(i)).join(".") + "]";
      }), function(w, i) {
        if (a.length > 0) {
          var f = a.indexOf(this);
          ~f ? a.splice(f + 1) : a.push(this), ~f ? l.splice(f, 1 / 0, w) : l.push(w), ~a.indexOf(i) && (i = d.call(this, w, i));
        } else a.push(i);
        return u == null ? i : u.call(this, w, i);
      };
    }, {
      isImmutable: s = Ei,
      ignoredPaths: o,
      warnAfter: g = 32
    } = e;
    const b = ji.bind(null, s, o);
    return ({
      getState: u
    }) => {
      let d = u(), a = b(d), l;
      return (w) => (i) => {
        const f = d0(g, "ImmutableStateInvariantMiddleware");
        f.measureTime(() => {
          if (d = u(), l = a.detectMutations(), a = b(d), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? _e(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = w(i);
        return f.measureTime(() => {
          if (d = u(), l = a.detectMutations(), a = b(d), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? _e(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${r(i)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), f.warnIfExceeded(), p;
      };
    };
  }
}
function h0(e) {
  const r = typeof e;
  return e == null || r === "string" || r === "boolean" || r === "number" || Array.isArray(e) || ut(e);
}
function Jn(e, r = "", n = h0, s, o = [], g) {
  let b;
  if (!n(e))
    return {
      keyPath: r || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || g != null && g.has(e)) return !1;
  const u = s != null ? s(e) : Object.entries(e), d = o.length > 0;
  for (const [a, l] of u) {
    const w = r ? r + "." + a : a;
    if (!(d && o.some((f) => f instanceof RegExp ? f.test(w) : w === f))) {
      if (!n(l))
        return {
          keyPath: w,
          value: l
        };
      if (typeof l == "object" && (b = Jn(l, w, n, s, o, g), b))
        return b;
    }
  }
  return g && p0(e) && g.add(e), !1;
}
function p0(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const r of Object.values(e))
    if (!(typeof r != "object" || r === null) && !p0(r))
      return !1;
  return !0;
}
function Ai(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  {
    const {
      isSerializable: r = h0,
      getEntries: n,
      ignoredActions: s = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: g = [],
      warnAfter: b = 32,
      ignoreState: u = !1,
      ignoreActions: d = !1,
      disableCache: a = !1
    } = e, l = !a && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (w) => (i) => (f) => {
      if (!os(f))
        return i(f);
      const p = i(f), m = d0(b, "SerializableStateInvariantMiddleware");
      return !d && !(s.length && s.indexOf(f.type) !== -1) && m.measureTime(() => {
        const y = Jn(f, "", r, n, o, l);
        if (y) {
          const {
            keyPath: E,
            value: v
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${E}\`. Value:`, v, `
Take a look at the logic that dispatched this action: `, f, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (m.measureTime(() => {
        const y = w.getState(), E = Jn(y, "", r, n, g, l);
        if (E) {
          const {
            keyPath: v,
            value: x
          } = E;
          console.error(`A non-serializable value was detected in the state, in the path: \`${v}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${f.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), m.warnIfExceeded()), p;
    };
  }
}
function yr(e) {
  return typeof e == "boolean";
}
var _i = () => function(r) {
  const {
    thunk: n = !0,
    immutableCheck: s = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: g = !0
  } = r ?? {};
  let b = new u0();
  if (n && (yr(n) ? b.push(gi) : b.push(yi(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (s) {
      let u = {};
      yr(s) || (u = s), b.unshift(Ni(u));
    }
    if (o) {
      let u = {};
      yr(o) || (u = o), b.push(Ai(u));
    }
    if (g) {
      let u = {};
      yr(g) || (u = g), b.unshift(Ci(u));
    }
  }
  return b;
}, Lr = "RTK_autoBatch", Kt = () => (e) => ({
  payload: e,
  meta: {
    [Lr]: !0
  }
}), zs = (e) => (r) => {
  setTimeout(r, e);
}, ki = (e = {
  type: "raf"
}) => (r) => (...n) => {
  const s = r(...n);
  let o = !0, g = !1, b = !1;
  const u = /* @__PURE__ */ new Set(), d = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : zs(10)
  ) : e.type === "callback" ? e.queueNotification : zs(e.timeout), a = () => {
    b = !1, g && (g = !1, u.forEach((l) => l()));
  };
  return Object.assign({}, s, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const w = () => o && l(), i = s.subscribe(w);
      return u.add(l), () => {
        i(), u.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var w;
      try {
        return o = !((w = l == null ? void 0 : l.meta) != null && w[Lr]), g = !o, g && (b || (b = !0, d(a))), s.dispatch(l);
      } finally {
        o = !0;
      }
    }
  });
}, Di = (e) => function(n) {
  const {
    autoBatch: s = !0
  } = n ?? {};
  let o = new u0(e);
  return s && o.push(ki(typeof s == "object" ? s : void 0)), o;
};
function Bi(e) {
  const r = _i(), {
    reducer: n = void 0,
    middleware: s,
    devTools: o = !0,
    duplicateMiddlewareCheck: g = !0,
    preloadedState: b = void 0,
    enhancers: u = void 0
  } = e || {};
  let d;
  if (typeof n == "function")
    d = n;
  else if (ut(n))
    d = e0(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? _e(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? _e(2) : "`middleware` field must be a callback");
  let a;
  if (typeof s == "function") {
    if (a = s(r), process.env.NODE_ENV !== "production" && !Array.isArray(a))
      throw new Error(process.env.NODE_ENV === "production" ? _e(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    a = r();
  if (process.env.NODE_ENV !== "production" && a.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? _e(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && g) {
    let m = /* @__PURE__ */ new Set();
    a.forEach((y) => {
      if (m.has(y))
        throw new Error(process.env.NODE_ENV === "production" ? _e(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      m.add(y);
    });
  }
  let l = Dr;
  o && (l = vi({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const w = Wo(...a), i = Di(w);
  if (process.env.NODE_ENV !== "production" && u && typeof u != "function")
    throw new Error(process.env.NODE_ENV === "production" ? _e(5) : "`enhancers` field must be a callback");
  let f = typeof u == "function" ? u(i) : i();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(f))
    throw new Error(process.env.NODE_ENV === "production" ? _e(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && f.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? _e(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && a.length && !f.includes(w) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = l(...f);
  return Ja(d, b, p);
}
function m0(e) {
  const r = {}, n = [];
  let s;
  const o = {
    addCase(g, b) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? _e(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? _e(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof g == "string" ? g : g.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? _e(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in r)
        throw new Error(process.env.NODE_ENV === "production" ? _e(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return r[u] = b, o;
    },
    addMatcher(g, b) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? _e(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: g,
        reducer: b
      }), o;
    },
    addDefaultCase(g) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? _e(31) : "`builder.addDefaultCase` can only be called once");
      return s = g, o;
    }
  };
  return e(o), [r, n, s];
}
function Si(e) {
  return typeof e == "function";
}
function Fi(e, r) {
  if (process.env.NODE_ENV !== "production" && typeof r == "object")
    throw new Error(process.env.NODE_ENV === "production" ? _e(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, s, o] = m0(r), g;
  if (Si(e))
    g = () => Ls(e());
  else {
    const u = Ls(e);
    g = () => u;
  }
  function b(u = g(), d) {
    let a = [n[d.type], ...s.filter(({
      matcher: l
    }) => l(d)).map(({
      reducer: l
    }) => l)];
    return a.filter((l) => !!l).length === 0 && (a = [o]), a.reduce((l, w) => {
      if (w)
        if (ft(l)) {
          const f = w(l, d);
          return f === void 0 ? l : f;
        } else {
          if (ot(l))
            return dr(l, (i) => w(i, d));
          {
            const i = w(l, d);
            if (i === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return i;
          }
        }
      return l;
    }, u);
  }
  return b.getInitialState = g, b;
}
var g0 = (e, r) => l0(e) ? e.match(r) : e(r);
function yt(...e) {
  return (r) => e.some((n) => g0(n, r));
}
function Jt(...e) {
  return (r) => e.every((n) => g0(n, r));
}
function zr(e, r) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", s = r.indexOf(e.meta.requestStatus) > -1;
  return n && s;
}
function ur(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function us(...e) {
  return e.length === 0 ? (r) => zr(r, ["pending"]) : ur(e) ? yt(...e.map((r) => r.pending)) : us()(e[0]);
}
function Vt(...e) {
  return e.length === 0 ? (r) => zr(r, ["rejected"]) : ur(e) ? yt(...e.map((r) => r.rejected)) : Vt()(e[0]);
}
function qr(...e) {
  const r = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Jt(Vt(...e), r) : ur(e) ? Jt(Vt(...e), r) : qr()(e[0]);
}
function jt(...e) {
  return e.length === 0 ? (r) => zr(r, ["fulfilled"]) : ur(e) ? yt(...e.map((r) => r.fulfilled)) : jt()(e[0]);
}
function es(...e) {
  return e.length === 0 ? (r) => zr(r, ["pending", "fulfilled", "rejected"]) : ur(e) ? yt(...e.flatMap((r) => [r.pending, r.rejected, r.fulfilled])) : es()(e[0]);
}
var Ri = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", fs = (e = 21) => {
  let r = "", n = e;
  for (; n--; )
    r += Ri[Math.random() * 64 | 0];
  return r;
}, Ti = ["name", "message", "stack", "code"], Zr = class {
  constructor(e, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pr(this, "_type");
    this.payload = e, this.meta = r;
  }
}, qs = class {
  constructor(e, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    pr(this, "_type");
    this.payload = e, this.meta = r;
  }
}, Oi = (e) => {
  if (typeof e == "object" && e !== null) {
    const r = {};
    for (const n of Ti)
      typeof e[n] == "string" && (r[n] = e[n]);
    return r;
  }
  return {
    message: String(e)
  };
}, $s = "External signal was aborted", Hs = /* @__PURE__ */ (() => {
  function e(r, n, s) {
    const o = at(r + "/fulfilled", (d, a, l, w) => ({
      payload: d,
      meta: {
        ...w || {},
        arg: l,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), g = at(r + "/pending", (d, a, l) => ({
      payload: void 0,
      meta: {
        ...l || {},
        arg: a,
        requestId: d,
        requestStatus: "pending"
      }
    })), b = at(r + "/rejected", (d, a, l, w, i) => ({
      payload: w,
      error: (s && s.serializeError || Oi)(d || "Rejected"),
      meta: {
        ...i || {},
        arg: l,
        requestId: a,
        rejectedWithValue: !!w,
        requestStatus: "rejected",
        aborted: (d == null ? void 0 : d.name) === "AbortError",
        condition: (d == null ? void 0 : d.name) === "ConditionError"
      }
    }));
    function u(d, {
      signal: a
    } = {}) {
      return (l, w, i) => {
        const f = s != null && s.idGenerator ? s.idGenerator(d) : fs(), p = new AbortController();
        let m, y;
        function E(x) {
          y = x, p.abort();
        }
        a && (a.aborted ? E($s) : a.addEventListener("abort", () => E($s), {
          once: !0
        }));
        const v = async function() {
          var h, j;
          let x;
          try {
            let A = (h = s == null ? void 0 : s.condition) == null ? void 0 : h.call(s, d, {
              getState: w,
              extra: i
            });
            if (Ii(A) && (A = await A), A === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const B = new Promise((_, C) => {
              m = () => {
                C({
                  name: "AbortError",
                  message: y || "Aborted"
                });
              }, p.signal.addEventListener("abort", m);
            });
            l(g(f, d, (j = s == null ? void 0 : s.getPendingMeta) == null ? void 0 : j.call(s, {
              requestId: f,
              arg: d
            }, {
              getState: w,
              extra: i
            }))), x = await Promise.race([B, Promise.resolve(n(d, {
              dispatch: l,
              getState: w,
              extra: i,
              requestId: f,
              signal: p.signal,
              abort: E,
              rejectWithValue: (_, C) => new Zr(_, C),
              fulfillWithValue: (_, C) => new qs(_, C)
            })).then((_) => {
              if (_ instanceof Zr)
                throw _;
              return _ instanceof qs ? o(_.payload, f, d, _.meta) : o(_, f, d);
            })]);
          } catch (A) {
            x = A instanceof Zr ? b(null, f, d, A.payload, A.meta) : b(A, f, d);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return s && !s.dispatchConditionRejection && b.match(x) && x.meta.condition || l(x), x;
        }();
        return Object.assign(v, {
          abort: E,
          requestId: f,
          arg: d,
          unwrap() {
            return v.then(Pi);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: g,
      rejected: b,
      fulfilled: o,
      settled: yt(b, o),
      typePrefix: r
    });
  }
  return e.withTypes = () => e, e;
})();
function Pi(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ii(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Mi = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Li(e, r) {
  return `${e}/${r}`;
}
function zi({
  creators: e
} = {}) {
  var n;
  const r = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Mi];
  return function(o) {
    const {
      name: g,
      reducerPath: b = g
    } = o;
    if (!g)
      throw new Error(process.env.NODE_ENV === "production" ? _e(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof o.reducers == "function" ? o.reducers($i()) : o.reducers) || {}, d = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(c, h) {
        const j = typeof c == "string" ? c : c.type;
        if (!j)
          throw new Error(process.env.NODE_ENV === "production" ? _e(12) : "`context.addCase` cannot be called with an empty action type");
        if (j in a.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? _e(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + j);
        return a.sliceCaseReducersByType[j] = h, l;
      },
      addMatcher(c, h) {
        return a.sliceMatchers.push({
          matcher: c,
          reducer: h
        }), l;
      },
      exposeAction(c, h) {
        return a.actionCreators[c] = h, l;
      },
      exposeCaseReducer(c, h) {
        return a.sliceCaseReducersByName[c] = h, l;
      }
    };
    d.forEach((c) => {
      const h = u[c], j = {
        reducerName: c,
        type: Li(g, c),
        createNotation: typeof o.reducers == "function"
      };
      Vi(h) ? Qi(j, h, l, r) : Hi(j, h, l);
    });
    function w() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? _e(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [c = {}, h = [], j = void 0] = typeof o.extraReducers == "function" ? m0(o.extraReducers) : [o.extraReducers], A = {
        ...c,
        ...a.sliceCaseReducersByType
      };
      return Fi(o.initialState, (B) => {
        for (let _ in A)
          B.addCase(_, A[_]);
        for (let _ of a.sliceMatchers)
          B.addMatcher(_.matcher, _.reducer);
        for (let _ of h)
          B.addMatcher(_.matcher, _.reducer);
        j && B.addDefaultCase(j);
      });
    }
    const i = (c) => c, f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let m;
    function y(c, h) {
      return m || (m = w()), m(c, h);
    }
    function E() {
      return m || (m = w()), m.getInitialState();
    }
    function v(c, h = !1) {
      function j(B) {
        let _ = B[c];
        if (typeof _ > "u") {
          if (h)
            _ = gr(p, j, E);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? _e(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return _;
      }
      function A(B = i) {
        const _ = gr(f, h, () => /* @__PURE__ */ new WeakMap());
        return gr(_, B, () => {
          const C = {};
          for (const [N, D] of Object.entries(o.selectors ?? {}))
            C[N] = qi(D, B, () => gr(p, B, E), h);
          return C;
        });
      }
      return {
        reducerPath: c,
        getSelectors: A,
        get selectors() {
          return A(j);
        },
        selectSlice: j
      };
    }
    const x = {
      name: g,
      reducer: y,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: E,
      ...v(b),
      injectInto(c, {
        reducerPath: h,
        ...j
      } = {}) {
        const A = h ?? b;
        return c.inject({
          reducerPath: A,
          reducer: y
        }, j), {
          ...x,
          ...v(A, !0)
        };
      }
    };
    return x;
  };
}
function qi(e, r, n, s) {
  function o(g, ...b) {
    let u = r(g);
    if (typeof u > "u") {
      if (s)
        u = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? _e(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...b);
  }
  return o.unwrapped = e, o;
}
var Bt = /* @__PURE__ */ zi();
function $i() {
  function e(r, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: r,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(r) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [r.name](...n) {
          return r(...n);
        }
      }[r.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(r, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: r,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Hi({
  type: e,
  reducerName: r,
  createNotation: n
}, s, o) {
  let g, b;
  if ("reducer" in s) {
    if (n && !Wi(s))
      throw new Error(process.env.NODE_ENV === "production" ? _e(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    g = s.reducer, b = s.prepare;
  } else
    g = s;
  o.addCase(e, g).exposeCaseReducer(r, g).exposeAction(r, b ? at(e, b) : at(e));
}
function Vi(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Wi(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Qi({
  type: e,
  reducerName: r
}, n, s, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? _e(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: g,
    fulfilled: b,
    pending: u,
    rejected: d,
    settled: a,
    options: l
  } = n, w = o(e, g, l);
  s.exposeAction(r, w), b && s.addCase(w.fulfilled, b), u && s.addCase(w.pending, u), d && s.addCase(w.rejected, d), a && s.addMatcher(w.settled, a), s.exposeCaseReducer(r, {
    fulfilled: b || vr,
    pending: u || vr,
    rejected: d || vr,
    settled: a || vr
  });
}
function vr() {
}
function _e(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ui = class extends Error {
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(r) {
    super(r[0].message);
    /**
     * The schema issues.
     */
    pr(this, "issues");
    this.name = "SchemaError", this.issues = r;
  }
}, y0 = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(y0 || {});
function Vs(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Ws = ut;
function v0(e, r) {
  if (e === r || !(Ws(e) && Ws(r) || Array.isArray(e) && Array.isArray(r)))
    return r;
  const n = Object.keys(r), s = Object.keys(e);
  let o = n.length === s.length;
  const g = Array.isArray(r) ? [] : {};
  for (const b of n)
    g[b] = v0(e[b], r[b]), o && (o = e[b] === g[b]);
  return o ? e : g;
}
function Ht(e) {
  let r = 0;
  for (const n in e)
    r++;
  return r;
}
var Qs = (e) => [].concat(...e);
function Ki(e) {
  return new RegExp("(^|:)//").test(e);
}
function Gi() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Rr(e) {
  return e != null;
}
function Yi() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Xi = (e) => e.replace(/\/$/, ""), Zi = (e) => e.replace(/^\//, "");
function Ji(e, r) {
  if (!e)
    return r;
  if (!r)
    return e;
  if (Ki(r))
    return r;
  const n = e.endsWith("/") || !r.startsWith("?") ? "/" : "";
  return e = Xi(e), r = Zi(r), `${e}${n}${r}`;
}
function ec(e, r, n) {
  return e.has(r) ? e.get(r) : e.set(r, n).get(r);
}
var Us = (...e) => fetch(...e), tc = (e) => e.status >= 200 && e.status <= 299, rc = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Ks(e) {
  if (!ut(e))
    return e;
  const r = {
    ...e
  };
  for (const [n, s] of Object.entries(r))
    s === void 0 && delete r[n];
  return r;
}
function nc({
  baseUrl: e,
  prepareHeaders: r = (w) => w,
  fetchFn: n = Us,
  paramsSerializer: s,
  isJsonContentType: o = rc,
  jsonContentType: g = "application/json",
  jsonReplacer: b,
  timeout: u,
  responseHandler: d,
  validateStatus: a,
  ...l
} = {}) {
  return typeof fetch > "u" && n === Us && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (i, f, p) => {
    const {
      getState: m,
      extra: y,
      endpoint: E,
      forced: v,
      type: x
    } = f;
    let c, {
      url: h,
      headers: j = new Headers(l.headers),
      params: A = void 0,
      responseHandler: B = d ?? "json",
      validateStatus: _ = a ?? tc,
      timeout: C = u,
      ...N
    } = typeof i == "string" ? {
      url: i
    } : i, D, k = f.signal;
    C && (D = new AbortController(), f.signal.addEventListener("abort", D.abort), k = D.signal);
    let S = {
      ...l,
      signal: k,
      ...N
    };
    j = new Headers(Ks(j)), S.headers = await r(j, {
      getState: m,
      arg: i,
      extra: y,
      endpoint: E,
      forced: v,
      type: x,
      extraOptions: p
    }) || j;
    const R = (P) => typeof P == "object" && (ut(P) || Array.isArray(P) || typeof P.toJSON == "function");
    if (!S.headers.has("content-type") && R(S.body) && S.headers.set("content-type", g), R(S.body) && o(S.headers) && (S.body = JSON.stringify(S.body, b)), A) {
      const P = ~h.indexOf("?") ? "&" : "?", Y = s ? s(A) : new URLSearchParams(Ks(A));
      h += P + Y;
    }
    h = Ji(e, h);
    const L = new Request(h, S);
    c = {
      request: new Request(h, S)
    };
    let V, Q = !1, G = D && setTimeout(() => {
      Q = !0, D.abort();
    }, C);
    try {
      V = await n(L);
    } catch (P) {
      return {
        error: {
          status: Q ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(P)
        },
        meta: c
      };
    } finally {
      G && clearTimeout(G), D == null || D.signal.removeEventListener("abort", D.abort);
    }
    const T = V.clone();
    c.response = T;
    let O, M = "";
    try {
      let P;
      if (await Promise.all([
        w(V, B).then((Y) => O = Y, (Y) => P = Y),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        T.text().then((Y) => M = Y, () => {
        })
      ]), P) throw P;
    } catch (P) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: V.status,
          data: M,
          error: String(P)
        },
        meta: c
      };
    }
    return _(V, O) ? {
      data: O,
      meta: c
    } : {
      error: {
        status: V.status,
        data: O
      },
      meta: c
    };
  };
  async function w(i, f) {
    if (typeof f == "function")
      return f(i);
    if (f === "content-type" && (f = o(i.headers) ? "json" : "text"), f === "json") {
      const p = await i.text();
      return p.length ? JSON.parse(p) : null;
    }
    return i.text();
  }
}
var Gs = class {
  constructor(e, r = void 0) {
    this.value = e, this.meta = r;
  }
}, xs = /* @__PURE__ */ at("__rtkq/focused"), b0 = /* @__PURE__ */ at("__rtkq/unfocused"), hs = /* @__PURE__ */ at("__rtkq/online"), w0 = /* @__PURE__ */ at("__rtkq/offline");
function $r(e) {
  return e.type === "query";
}
function sc(e) {
  return e.type === "mutation";
}
function fr(e) {
  return e.type === "infinitequery";
}
function Tr(e) {
  return $r(e) || fr(e);
}
function ps(e, r, n, s, o, g) {
  return ac(e) ? e(r, n, s, o).filter(Rr).map(ts).map(g) : Array.isArray(e) ? e.map(ts).map(g) : [];
}
function ac(e) {
  return typeof e == "function";
}
function ts(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function oc(e, r) {
  return e.catch(r);
}
var or = Symbol("forceQueryFn"), rs = (e) => typeof e[or] == "function";
function ic({
  serializeQueryArgs: e,
  queryThunk: r,
  infiniteQueryThunk: n,
  mutationThunk: s,
  api: o,
  context: g
}) {
  const b = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: d,
    removeMutationResult: a,
    updateSubscriptionOptions: l
  } = o.internalActions;
  return {
    buildInitiateQuery: E,
    buildInitiateInfiniteQuery: v,
    buildInitiateMutation: x,
    getRunningQueryThunk: w,
    getRunningMutationThunk: i,
    getRunningQueriesThunk: f,
    getRunningMutationsThunk: p
  };
  function w(c, h) {
    return (j) => {
      var _;
      const A = g.endpointDefinitions[c], B = e({
        queryArgs: h,
        endpointDefinition: A,
        endpointName: c
      });
      return (_ = b.get(j)) == null ? void 0 : _[B];
    };
  }
  function i(c, h) {
    return (j) => {
      var A;
      return (A = u.get(j)) == null ? void 0 : A[h];
    };
  }
  function f() {
    return (c) => Object.values(b.get(c) || {}).filter(Rr);
  }
  function p() {
    return (c) => Object.values(u.get(c) || {}).filter(Rr);
  }
  function m(c) {
    if (process.env.NODE_ENV !== "production") {
      if (m.triggered) return;
      const h = c(o.internalActions.internal_getRTKQSubscriptions());
      if (m.triggered = !0, typeof h != "object" || typeof (h == null ? void 0 : h.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? _e(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function y(c, h) {
    const j = (A, {
      subscribe: B = !0,
      forceRefetch: _,
      subscriptionOptions: C,
      [or]: N,
      ...D
    } = {}) => (k, S) => {
      var ce;
      const R = e({
        queryArgs: A,
        endpointDefinition: h,
        endpointName: c
      });
      let L;
      const H = {
        ...D,
        type: "query",
        subscribe: B,
        forceRefetch: _,
        subscriptionOptions: C,
        endpointName: c,
        originalArgs: A,
        queryCacheKey: R,
        [or]: N
      };
      if ($r(h))
        L = r(H);
      else {
        const {
          direction: re,
          initialPageParam: ge
        } = D;
        L = n({
          ...H,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: re,
          initialPageParam: ge
        });
      }
      const V = o.endpoints[c].select(A), Q = k(L), G = V(S());
      m(k);
      const {
        requestId: T,
        abort: O
      } = Q, M = G.requestId !== T, P = (ce = b.get(k)) == null ? void 0 : ce[R], Y = () => V(S()), ie = Object.assign(N ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        Q.then(Y)
      ) : M && !P ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(G)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([P, Q]).then(Y)
      ), {
        arg: A,
        requestId: T,
        subscriptionOptions: C,
        queryCacheKey: R,
        abort: O,
        async unwrap() {
          const re = await ie;
          if (re.isError)
            throw re.error;
          return re.data;
        },
        refetch: () => k(j(A, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          B && k(d({
            queryCacheKey: R,
            requestId: T
          }));
        },
        updateSubscriptionOptions(re) {
          ie.subscriptionOptions = re, k(l({
            endpointName: c,
            requestId: T,
            queryCacheKey: R,
            options: re
          }));
        }
      });
      if (!P && !M && !N) {
        const re = ec(b, k, {});
        re[R] = ie, ie.then(() => {
          delete re[R], Ht(re) || b.delete(k);
        });
      }
      return ie;
    };
    return j;
  }
  function E(c, h) {
    return y(c, h);
  }
  function v(c, h) {
    return y(c, h);
  }
  function x(c) {
    return (h, {
      track: j = !0,
      fixedCacheKey: A
    } = {}) => (B, _) => {
      const C = s({
        type: "mutation",
        endpointName: c,
        originalArgs: h,
        track: j,
        fixedCacheKey: A
      }), N = B(C);
      m(B);
      const {
        requestId: D,
        abort: k,
        unwrap: S
      } = N, R = oc(N.unwrap().then((Q) => ({
        data: Q
      })), (Q) => ({
        error: Q
      })), L = () => {
        B(a({
          requestId: D,
          fixedCacheKey: A
        }));
      }, H = Object.assign(R, {
        arg: N.arg,
        requestId: D,
        abort: k,
        unwrap: S,
        reset: L
      }), V = u.get(B) || {};
      return u.set(B, V), V[D] = H, H.then(() => {
        delete V[D], Ht(V) || u.delete(B);
      }), A && (V[A] = H, H.then(() => {
        V[A] === H && (delete V[A], Ht(V) || u.delete(B));
      })), H;
    };
  }
}
var C0 = class extends Ui {
  constructor(e, r, n, s) {
    super(e), this.value = r, this.schemaName = n, this._bqMeta = s;
  }
};
async function kt(e, r, n, s) {
  const o = await e["~standard"].validate(r);
  if (o.issues)
    throw new C0(o.issues, r, n, s);
  return o.value;
}
function cc(e) {
  return e;
}
var Gt = (e = {}) => ({
  ...e,
  [Lr]: !0
});
function lc({
  reducerPath: e,
  baseQuery: r,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: s,
  api: o,
  assertTagType: g,
  selectors: b,
  onSchemaFailure: u,
  catchSchemaFailure: d,
  skipSchemaValidation: a
}) {
  const l = (N, D, k, S) => (R, L) => {
    const H = n[N], V = s({
      queryArgs: D,
      endpointDefinition: H,
      endpointName: N
    });
    if (R(o.internalActions.queryResultPatched({
      queryCacheKey: V,
      patches: k
    })), !S)
      return;
    const Q = o.endpoints[N].select(D)(
      // Work around TS 4.1 mismatch
      L()
    ), G = ps(H.providesTags, Q.data, void 0, D, {}, g);
    R(o.internalActions.updateProvidedBy([{
      queryCacheKey: V,
      providedTags: G
    }]));
  };
  function w(N, D, k = 0) {
    const S = [D, ...N];
    return k && S.length > k ? S.slice(0, -1) : S;
  }
  function i(N, D, k = 0) {
    const S = [...N, D];
    return k && S.length > k ? S.slice(1) : S;
  }
  const f = (N, D, k, S = !0) => (R, L) => {
    const V = o.endpoints[N].select(D)(
      // Work around TS 4.1 mismatch
      L()
    ), Q = {
      patches: [],
      inversePatches: [],
      undo: () => R(o.util.patchQueryData(N, D, Q.inversePatches, S))
    };
    if (V.status === "uninitialized")
      return Q;
    let G;
    if ("data" in V)
      if (ot(V.data)) {
        const [T, O, M] = i0(V.data, k);
        Q.patches.push(...O), Q.inversePatches.push(...M), G = T;
      } else
        G = k(V.data), Q.patches.push({
          op: "replace",
          path: [],
          value: G
        }), Q.inversePatches.push({
          op: "replace",
          path: [],
          value: V.data
        });
    return Q.patches.length === 0 || R(o.util.patchQueryData(N, D, Q.patches, S)), Q;
  }, p = (N, D, k) => (S) => S(o.endpoints[N].initiate(D, {
    subscribe: !1,
    forceRefetch: !0,
    [or]: () => ({
      data: k
    })
  })), m = (N, D) => N.query && N[D] ? N[D] : cc, y = async (N, {
    signal: D,
    abort: k,
    rejectWithValue: S,
    fulfillWithValue: R,
    dispatch: L,
    getState: H,
    extra: V
  }) => {
    var O, M;
    const Q = n[N.endpointName], {
      metaSchema: G,
      skipSchemaValidation: T = a
    } = Q;
    try {
      let P = m(Q, "transformResponse");
      const Y = {
        signal: D,
        abort: k,
        dispatch: L,
        getState: H,
        extra: V,
        endpoint: N.endpointName,
        type: N.type,
        forced: N.type === "query" ? E(N, H()) : void 0,
        queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
      }, ie = N.type === "query" ? N[or] : void 0;
      let ce;
      const re = async (me, ae, J, De) => {
        if (ae == null && me.pages.length)
          return Promise.resolve({
            data: me
          });
        const Ee = {
          queryArg: N.originalArgs,
          pageParam: ae
        }, Be = await ge(Ee), Z = De ? w : i;
        return {
          data: {
            pages: Z(me.pages, Be.data, J),
            pageParams: Z(me.pageParams, ae, J)
          },
          meta: Be.meta
        };
      };
      async function ge(me) {
        let ae;
        const {
          extraOptions: J,
          argSchema: De,
          rawResponseSchema: Ee,
          responseSchema: Be
        } = Q;
        if (De && !T && (me = await kt(
          De,
          me,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ie ? ae = ie() : Q.query ? ae = await r(Q.query(me), Y, J) : ae = await Q.queryFn(me, Y, J, (le) => r(le, Y, J)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const le = Q.query ? "`baseQuery`" : "`queryFn`";
          let I;
          if (!ae)
            I = `${le} did not return anything.`;
          else if (typeof ae != "object")
            I = `${le} did not return an object.`;
          else if (ae.error && ae.data)
            I = `${le} returned an object containing both \`error\` and \`result\`.`;
          else if (ae.error === void 0 && ae.data === void 0)
            I = `${le} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const ne of Object.keys(ae))
              if (ne !== "error" && ne !== "data" && ne !== "meta") {
                I = `The object returned by ${le} has the unknown property ${ne}.`;
                break;
              }
          I && console.error(`Error encountered handling the endpoint ${N.endpointName}.
                  ${I}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, ae);
        }
        if (ae.error) throw new Gs(ae.error, ae.meta);
        let {
          data: Z
        } = ae;
        Ee && !T && (Z = await kt(Ee, ae.data, "rawResponseSchema", ae.meta));
        let fe = await P(Z, ae.meta, me);
        return Be && !T && (fe = await kt(Be, fe, "responseSchema", ae.meta)), {
          ...ae,
          data: fe
        };
      }
      if (N.type === "query" && "infiniteQueryOptions" in Q) {
        const {
          infiniteQueryOptions: me
        } = Q, {
          maxPages: ae = 1 / 0
        } = me;
        let J;
        const De = {
          pages: [],
          pageParams: []
        }, Ee = (O = b.selectQueryEntry(H(), N.queryCacheKey)) == null ? void 0 : O.data, Z = /* arg.forceRefetch */ E(N, H()) && !N.direction || !Ee ? De : Ee;
        if ("direction" in N && N.direction && Z.pages.length) {
          const fe = N.direction === "backward", I = (fe ? E0 : ns)(me, Z, N.originalArgs);
          J = await re(Z, I, ae, fe);
        } else {
          const {
            initialPageParam: fe = me.initialPageParam
          } = N, le = (Ee == null ? void 0 : Ee.pageParams) ?? [], I = le[0] ?? fe, ne = le.length;
          J = await re(Z, I, ae), ie && (J = {
            data: J.data.pages[0]
          });
          for (let oe = 1; oe < ne; oe++) {
            const ee = ns(me, J.data, N.originalArgs);
            J = await re(J.data, ee, ae);
          }
        }
        ce = J;
      } else
        ce = await ge(N.originalArgs);
      return G && !T && ce.meta && (ce.meta = await kt(G, ce.meta, "metaSchema", ce.meta)), R(ce.data, Gt({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: ce.meta
      }));
    } catch (P) {
      let Y = P;
      if (Y instanceof Gs) {
        let ie = m(Q, "transformErrorResponse");
        const {
          rawErrorResponseSchema: ce,
          errorResponseSchema: re
        } = Q;
        let {
          value: ge,
          meta: me
        } = Y;
        try {
          ce && !T && (ge = await kt(ce, ge, "rawErrorResponseSchema", me)), G && !T && (me = await kt(G, me, "metaSchema", me));
          let ae = await ie(ge, me, N.originalArgs);
          return re && !T && (ae = await kt(re, ae, "errorResponseSchema", me)), S(ae, Gt({
            baseQueryMeta: me
          }));
        } catch (ae) {
          Y = ae;
        }
      }
      try {
        if (Y instanceof C0) {
          const ie = {
            endpoint: N.endpointName,
            arg: N.originalArgs,
            type: N.type,
            queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
          };
          (M = Q.onSchemaFailure) == null || M.call(Q, Y, ie), u == null || u(Y, ie);
          const {
            catchSchemaFailure: ce = d
          } = Q;
          if (ce)
            return S(ce(Y, ie), Gt({
              baseQueryMeta: Y._bqMeta
            }));
        }
      } catch (ie) {
        Y = ie;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${N.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, Y) : console.error(Y), Y;
    }
  };
  function E(N, D) {
    const k = b.selectQueryEntry(D, N.queryCacheKey), S = b.selectConfig(D).refetchOnMountOrArgChange, R = k == null ? void 0 : k.fulfilledTimeStamp, L = N.forceRefetch ?? (N.subscribe && S);
    return L ? L === !0 || (Number(/* @__PURE__ */ new Date()) - Number(R)) / 1e3 >= L : !1;
  }
  const v = () => Hs(`${e}/executeQuery`, y, {
    getPendingMeta({
      arg: D
    }) {
      const k = n[D.endpointName];
      return Gt({
        startedTimeStamp: Date.now(),
        ...fr(k) ? {
          direction: D.direction
        } : {}
      });
    },
    condition(D, {
      getState: k
    }) {
      var T;
      const S = k(), R = b.selectQueryEntry(S, D.queryCacheKey), L = R == null ? void 0 : R.fulfilledTimeStamp, H = D.originalArgs, V = R == null ? void 0 : R.originalArgs, Q = n[D.endpointName], G = D.direction;
      return rs(D) ? !0 : (R == null ? void 0 : R.status) === "pending" ? !1 : E(D, S) || $r(Q) && ((T = Q == null ? void 0 : Q.forceRefetch) != null && T.call(Q, {
        currentArg: H,
        previousArg: V,
        endpointState: R,
        state: S
      })) ? !0 : !(L && !G);
    },
    dispatchConditionRejection: !0
  }), x = v(), c = v(), h = Hs(`${e}/executeMutation`, y, {
    getPendingMeta() {
      return Gt({
        startedTimeStamp: Date.now()
      });
    }
  }), j = (N) => "force" in N, A = (N) => "ifOlderThan" in N, B = (N, D, k) => (S, R) => {
    const L = j(k) && k.force, H = A(k) && k.ifOlderThan, V = (G = !0) => {
      const T = {
        forceRefetch: G,
        isPrefetch: !0
      };
      return o.endpoints[N].initiate(D, T);
    }, Q = o.endpoints[N].select(D)(R());
    if (L)
      S(V());
    else if (H) {
      const G = Q == null ? void 0 : Q.fulfilledTimeStamp;
      if (!G) {
        S(V());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(G))) / 1e3 >= H && S(V());
    } else
      S(V(!1));
  };
  function _(N) {
    return (D) => {
      var k, S;
      return ((S = (k = D == null ? void 0 : D.meta) == null ? void 0 : k.arg) == null ? void 0 : S.endpointName) === N;
    };
  }
  function C(N, D) {
    return {
      matchPending: Jt(us(N), _(D)),
      matchFulfilled: Jt(jt(N), _(D)),
      matchRejected: Jt(Vt(N), _(D))
    };
  }
  return {
    queryThunk: x,
    mutationThunk: h,
    infiniteQueryThunk: c,
    prefetch: B,
    updateQueryData: f,
    upsertQueryData: p,
    patchQueryData: l,
    buildMatchThunkActions: C
  };
}
function ns(e, {
  pages: r,
  pageParams: n
}, s) {
  const o = r.length - 1;
  return e.getNextPageParam(r[o], r, n[o], n, s);
}
function E0(e, {
  pages: r,
  pageParams: n
}, s) {
  var o;
  return (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, r[0], r, n[0], n, s);
}
function j0(e, r, n, s) {
  return ps(n[e.meta.arg.endpointName][r], jt(e) ? e.payload : void 0, qr(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, s);
}
function br(e, r, n) {
  const s = e[r];
  s && n(s);
}
function ir(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ys(e, r, n) {
  const s = e[ir(r)];
  s && n(s);
}
var wr = {};
function dc({
  reducerPath: e,
  queryThunk: r,
  mutationThunk: n,
  serializeQueryArgs: s,
  context: {
    endpointDefinitions: o,
    apiUid: g,
    extractRehydrationInfo: b,
    hasRehydrationInfo: u
  },
  assertTagType: d,
  config: a
}) {
  const l = at(`${e}/resetApiState`);
  function w(_, C, N, D) {
    var k;
    _[k = C.queryCacheKey] ?? (_[k] = {
      status: "uninitialized",
      endpointName: C.endpointName
    }), br(_, C.queryCacheKey, (S) => {
      S.status = "pending", S.requestId = N && S.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        S.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        D.requestId
      ), C.originalArgs !== void 0 && (S.originalArgs = C.originalArgs), S.startedTimeStamp = D.startedTimeStamp;
      const R = o[D.arg.endpointName];
      fr(R) && "direction" in C && (S.direction = C.direction);
    });
  }
  function i(_, C, N, D) {
    br(_, C.arg.queryCacheKey, (k) => {
      if (k.requestId !== C.requestId && !D) return;
      const {
        merge: S
      } = o[C.arg.endpointName];
      if (k.status = "fulfilled", S)
        if (k.data !== void 0) {
          const {
            fulfilledTimeStamp: R,
            arg: L,
            baseQueryMeta: H,
            requestId: V
          } = C;
          let Q = dr(k.data, (G) => S(G, N, {
            arg: L.originalArgs,
            baseQueryMeta: H,
            fulfilledTimeStamp: R,
            requestId: V
          }));
          k.data = Q;
        } else
          k.data = N;
      else
        k.data = o[C.arg.endpointName].structuralSharing ?? !0 ? v0(ft(k.data) ? Uo(k.data) : k.data, N) : N;
      delete k.error, k.fulfilledTimeStamp = C.fulfilledTimeStamp;
    });
  }
  const f = Bt({
    name: `${e}/queries`,
    initialState: wr,
    reducers: {
      removeQueryResult: {
        reducer(_, {
          payload: {
            queryCacheKey: C
          }
        }) {
          delete _[C];
        },
        prepare: Kt()
      },
      cacheEntriesUpserted: {
        reducer(_, C) {
          for (const N of C.payload) {
            const {
              queryDescription: D,
              value: k
            } = N;
            w(_, D, !0, {
              arg: D,
              requestId: C.meta.requestId,
              startedTimeStamp: C.meta.timestamp
            }), i(
              _,
              {
                arg: D,
                requestId: C.meta.requestId,
                fulfilledTimeStamp: C.meta.timestamp,
                baseQueryMeta: {}
              },
              k,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (_) => ({
          payload: _.map((D) => {
            const {
              endpointName: k,
              arg: S,
              value: R
            } = D, L = o[k];
            return {
              queryDescription: {
                type: "query",
                endpointName: k,
                originalArgs: D.arg,
                queryCacheKey: s({
                  queryArgs: S,
                  endpointDefinition: L,
                  endpointName: k
                })
              },
              value: R
            };
          }),
          meta: {
            [Lr]: !0,
            requestId: fs(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(_, {
          payload: {
            queryCacheKey: C,
            patches: N
          }
        }) {
          br(_, C, (D) => {
            D.data = Os(D.data, N.concat());
          });
        },
        prepare: Kt()
      }
    },
    extraReducers(_) {
      _.addCase(r.pending, (C, {
        meta: N,
        meta: {
          arg: D
        }
      }) => {
        const k = rs(D);
        w(C, D, k, N);
      }).addCase(r.fulfilled, (C, {
        meta: N,
        payload: D
      }) => {
        const k = rs(N.arg);
        i(C, N, D, k);
      }).addCase(r.rejected, (C, {
        meta: {
          condition: N,
          arg: D,
          requestId: k
        },
        error: S,
        payload: R
      }) => {
        br(C, D.queryCacheKey, (L) => {
          if (!N) {
            if (L.requestId !== k) return;
            L.status = "rejected", L.error = R ?? S;
          }
        });
      }).addMatcher(u, (C, N) => {
        const {
          queries: D
        } = b(N);
        for (const [k, S] of Object.entries(D))
          // do not rehydrate entries that were currently in flight.
          ((S == null ? void 0 : S.status) === "fulfilled" || (S == null ? void 0 : S.status) === "rejected") && (C[k] = S);
      });
    }
  }), p = Bt({
    name: `${e}/mutations`,
    initialState: wr,
    reducers: {
      removeMutationResult: {
        reducer(_, {
          payload: C
        }) {
          const N = ir(C);
          N in _ && delete _[N];
        },
        prepare: Kt()
      }
    },
    extraReducers(_) {
      _.addCase(n.pending, (C, {
        meta: N,
        meta: {
          requestId: D,
          arg: k,
          startedTimeStamp: S
        }
      }) => {
        k.track && (C[ir(N)] = {
          requestId: D,
          status: "pending",
          endpointName: k.endpointName,
          startedTimeStamp: S
        });
      }).addCase(n.fulfilled, (C, {
        payload: N,
        meta: D
      }) => {
        D.arg.track && Ys(C, D, (k) => {
          k.requestId === D.requestId && (k.status = "fulfilled", k.data = N, k.fulfilledTimeStamp = D.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (C, {
        payload: N,
        error: D,
        meta: k
      }) => {
        k.arg.track && Ys(C, k, (S) => {
          S.requestId === k.requestId && (S.status = "rejected", S.error = N ?? D);
        });
      }).addMatcher(u, (C, N) => {
        const {
          mutations: D
        } = b(N);
        for (const [k, S] of Object.entries(D))
          // do not rehydrate entries that were currently in flight.
          ((S == null ? void 0 : S.status) === "fulfilled" || (S == null ? void 0 : S.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          k !== (S == null ? void 0 : S.requestId) && (C[k] = S);
      });
    }
  }), m = {
    tags: {},
    keys: {}
  }, y = Bt({
    name: `${e}/invalidation`,
    initialState: m,
    reducers: {
      updateProvidedBy: {
        reducer(_, C) {
          var N, D, k;
          for (const {
            queryCacheKey: S,
            providedTags: R
          } of C.payload) {
            E(_, S);
            for (const {
              type: L,
              id: H
            } of R) {
              const V = (D = (N = _.tags)[L] ?? (N[L] = {}))[k = H || "__internal_without_id"] ?? (D[k] = []);
              V.includes(S) || V.push(S);
            }
            _.keys[S] = R;
          }
        },
        prepare: Kt()
      }
    },
    extraReducers(_) {
      _.addCase(f.actions.removeQueryResult, (C, {
        payload: {
          queryCacheKey: N
        }
      }) => {
        E(C, N);
      }).addMatcher(u, (C, N) => {
        var k, S, R;
        const {
          provided: D
        } = b(N);
        for (const [L, H] of Object.entries(D))
          for (const [V, Q] of Object.entries(H)) {
            const G = (S = (k = C.tags)[L] ?? (k[L] = {}))[R = V || "__internal_without_id"] ?? (S[R] = []);
            for (const T of Q)
              G.includes(T) || G.push(T);
          }
      }).addMatcher(yt(jt(r), qr(r)), (C, N) => {
        v(C, [N]);
      }).addMatcher(f.actions.cacheEntriesUpserted.match, (C, N) => {
        const D = N.payload.map(({
          queryDescription: k,
          value: S
        }) => ({
          type: "UNKNOWN",
          payload: S,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: k
          }
        }));
        v(C, D);
      });
    }
  });
  function E(_, C) {
    var D;
    const N = _.keys[C] ?? [];
    for (const k of N) {
      const S = k.type, R = k.id ?? "__internal_without_id", L = (D = _.tags[S]) == null ? void 0 : D[R];
      L && (_.tags[S][R] = L.filter((H) => H !== C));
    }
    delete _.keys[C];
  }
  function v(_, C) {
    const N = C.map((D) => {
      const k = j0(D, "providesTags", o, d), {
        queryCacheKey: S
      } = D.meta.arg;
      return {
        queryCacheKey: S,
        providedTags: k
      };
    });
    y.caseReducers.updateProvidedBy(_, y.actions.updateProvidedBy(N));
  }
  const x = Bt({
    name: `${e}/subscriptions`,
    initialState: wr,
    reducers: {
      updateSubscriptionOptions(_, C) {
      },
      unsubscribeQueryResult(_, C) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), c = Bt({
    name: `${e}/internalSubscriptions`,
    initialState: wr,
    reducers: {
      subscriptionsUpdated: {
        reducer(_, C) {
          return Os(_, C.payload);
        },
        prepare: Kt()
      }
    }
  }), h = Bt({
    name: `${e}/config`,
    initialState: {
      online: Yi(),
      focused: Gi(),
      middlewareRegistered: !1,
      ...a
    },
    reducers: {
      middlewareRegistered(_, {
        payload: C
      }) {
        _.middlewareRegistered = _.middlewareRegistered === "conflict" || g !== C ? "conflict" : !0;
      }
    },
    extraReducers: (_) => {
      _.addCase(hs, (C) => {
        C.online = !0;
      }).addCase(w0, (C) => {
        C.online = !1;
      }).addCase(xs, (C) => {
        C.focused = !0;
      }).addCase(b0, (C) => {
        C.focused = !1;
      }).addMatcher(u, (C) => ({
        ...C
      }));
    }
  }), j = e0({
    queries: f.reducer,
    mutations: p.reducer,
    provided: y.reducer,
    subscriptions: c.reducer,
    config: h.reducer
  }), A = (_, C) => j(l.match(C) ? void 0 : _, C), B = {
    ...h.actions,
    ...f.actions,
    ...x.actions,
    ...c.actions,
    ...p.actions,
    ...y.actions,
    resetApiState: l
  };
  return {
    reducer: A,
    actions: B
  };
}
var st = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), N0 = {
  status: "uninitialized"
  /* uninitialized */
}, Xs = /* @__PURE__ */ dr(N0, () => {
}), Zs = /* @__PURE__ */ dr(N0, () => {
});
function uc({
  serializeQueryArgs: e,
  reducerPath: r,
  createSelector: n
}) {
  const s = (x) => Xs, o = (x) => Zs;
  return {
    buildQuerySelector: i,
    buildInfiniteQuerySelector: f,
    buildMutationSelector: p,
    selectInvalidatedBy: m,
    selectCachedArgsForQuery: y,
    selectApiState: b,
    selectQueries: u,
    selectMutations: a,
    selectQueryEntry: d,
    selectConfig: l
  };
  function g(x) {
    return {
      ...x,
      ...Vs(x.status)
    };
  }
  function b(x) {
    const c = x[r];
    if (process.env.NODE_ENV !== "production" && !c) {
      if (b.triggered) return c;
      b.triggered = !0, console.error(`Error: No data found at \`state.${r}\`. Did you forget to add the reducer to the store?`);
    }
    return c;
  }
  function u(x) {
    var c;
    return (c = b(x)) == null ? void 0 : c.queries;
  }
  function d(x, c) {
    var h;
    return (h = u(x)) == null ? void 0 : h[c];
  }
  function a(x) {
    var c;
    return (c = b(x)) == null ? void 0 : c.mutations;
  }
  function l(x) {
    var c;
    return (c = b(x)) == null ? void 0 : c.config;
  }
  function w(x, c, h) {
    return (j) => {
      if (j === st)
        return n(s, h);
      const A = e({
        queryArgs: j,
        endpointDefinition: c,
        endpointName: x
      });
      return n((_) => d(_, A) ?? Xs, h);
    };
  }
  function i(x, c) {
    return w(x, c, g);
  }
  function f(x, c) {
    const {
      infiniteQueryOptions: h
    } = c;
    function j(A) {
      const B = {
        ...A,
        ...Vs(A.status)
      }, {
        isLoading: _,
        isError: C,
        direction: N
      } = B, D = N === "forward", k = N === "backward";
      return {
        ...B,
        hasNextPage: E(h, B.data, B.originalArgs),
        hasPreviousPage: v(h, B.data, B.originalArgs),
        isFetchingNextPage: _ && D,
        isFetchingPreviousPage: _ && k,
        isFetchNextPageError: C && D,
        isFetchPreviousPageError: C && k
      };
    }
    return w(x, c, j);
  }
  function p() {
    return (x) => {
      let c;
      return typeof x == "object" ? c = ir(x) ?? st : c = x, n(c === st ? o : (A) => {
        var B, _;
        return ((_ = (B = b(A)) == null ? void 0 : B.mutations) == null ? void 0 : _[c]) ?? Zs;
      }, g);
    };
  }
  function m(x, c) {
    const h = x[r], j = /* @__PURE__ */ new Set();
    for (const A of c.filter(Rr).map(ts)) {
      const B = h.provided.tags[A.type];
      if (!B)
        continue;
      let _ = (A.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        B[A.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Qs(Object.values(B))
      )) ?? [];
      for (const C of _)
        j.add(C);
    }
    return Qs(Array.from(j.values()).map((A) => {
      const B = h.queries[A];
      return B ? [{
        queryCacheKey: A,
        endpointName: B.endpointName,
        originalArgs: B.originalArgs
      }] : [];
    }));
  }
  function y(x, c) {
    return Object.values(u(x)).filter(
      (h) => (h == null ? void 0 : h.endpointName) === c && h.status !== "uninitialized"
      /* uninitialized */
    ).map((h) => h.originalArgs);
  }
  function E(x, c, h) {
    return c ? ns(x, c, h) != null : !1;
  }
  function v(x, c, h) {
    return !c || !x.getPreviousPageParam ? !1 : E0(x, c, h) != null;
  }
}
var qt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Or = ({
  endpointName: e,
  queryArgs: r
}) => {
  let n = "";
  const s = qt == null ? void 0 : qt.get(r);
  if (typeof s == "string")
    n = s;
  else {
    const o = JSON.stringify(r, (g, b) => (b = typeof b == "bigint" ? {
      $bigint: b.toString()
    } : b, b = ut(b) ? Object.keys(b).sort().reduce((u, d) => (u[d] = b[d], u), {}) : b, b));
    ut(r) && (qt == null || qt.set(r, o)), n = o;
  }
  return `${e}(${n})`;
};
function fc(...e) {
  return function(n) {
    const s = Fr((a) => {
      var l;
      return (l = n.extractRehydrationInfo) == null ? void 0 : l.call(n, a, {
        reducerPath: n.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: s,
      serializeQueryArgs(a) {
        let l = Or;
        if ("serializeQueryArgs" in a.endpointDefinition) {
          const w = a.endpointDefinition.serializeQueryArgs;
          l = (i) => {
            const f = w(i);
            return typeof f == "string" ? f : Or({
              ...i,
              queryArgs: f
            });
          };
        } else n.serializeQueryArgs && (l = n.serializeQueryArgs);
        return l(a);
      },
      tagTypes: [...n.tagTypes || []]
    }, g = {
      endpointDefinitions: {},
      batch(a) {
        a();
      },
      apiUid: fs(),
      extractRehydrationInfo: s,
      hasRehydrationInfo: Fr((a) => s(a) != null)
    }, b = {
      injectEndpoints: d,
      enhanceEndpoints({
        addTagTypes: a,
        endpoints: l
      }) {
        if (a)
          for (const w of a)
            o.tagTypes.includes(w) || o.tagTypes.push(w);
        if (l)
          for (const [w, i] of Object.entries(l))
            typeof i == "function" ? i(g.endpointDefinitions[w]) : Object.assign(g.endpointDefinitions[w] || {}, i);
        return b;
      }
    }, u = e.map((a) => a.init(b, o, g));
    function d(a) {
      const l = a.endpoints({
        query: (w) => ({
          ...w,
          type: "query"
          /* query */
        }),
        mutation: (w) => ({
          ...w,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (w) => ({
          ...w,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [w, i] of Object.entries(l)) {
        if (a.overrideExisting !== !0 && w in g.endpointDefinitions) {
          if (a.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? _e(39) : `called \`injectEndpoints\` to override already-existing endpointName ${w} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${w} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && fr(i)) {
          const {
            infiniteQueryOptions: f
          } = i, {
            maxPages: p,
            getPreviousPageParam: m
          } = f;
          if (typeof p == "number") {
            if (p < 1)
              throw new Error(process.env.NODE_ENV === "production" ? _e(40) : `maxPages for endpoint '${w}' must be a number greater than 0`);
            if (typeof m != "function")
              throw new Error(process.env.NODE_ENV === "production" ? _e(41) : `getPreviousPageParam for endpoint '${w}' must be a function if maxPages is used`);
          }
        }
        g.endpointDefinitions[w] = i;
        for (const f of u)
          f.injectEndpoint(w, i);
      }
      return b;
    }
    return b.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function gt(e, ...r) {
  return Object.assign(e, ...r);
}
var xc = ({
  api: e,
  queryThunk: r,
  internalState: n
}) => {
  const s = `${e.reducerPath}/subscriptions`;
  let o = null, g = null;
  const {
    updateSubscriptionOptions: b,
    unsubscribeQueryResult: u
  } = e.internalActions, d = (f, p) => {
    var y, E, v;
    if (b.match(p)) {
      const {
        queryCacheKey: x,
        requestId: c,
        options: h
      } = p.payload;
      return (y = f == null ? void 0 : f[x]) != null && y[c] && (f[x][c] = h), !0;
    }
    if (u.match(p)) {
      const {
        queryCacheKey: x,
        requestId: c
      } = p.payload;
      return f[x] && delete f[x][c], !0;
    }
    if (e.internalActions.removeQueryResult.match(p))
      return delete f[p.payload.queryCacheKey], !0;
    if (r.pending.match(p)) {
      const {
        meta: {
          arg: x,
          requestId: c
        }
      } = p, h = f[E = x.queryCacheKey] ?? (f[E] = {});
      return h[`${c}_running`] = {}, x.subscribe && (h[c] = x.subscriptionOptions ?? h[c] ?? {}), !0;
    }
    let m = !1;
    if (r.fulfilled.match(p) || r.rejected.match(p)) {
      const x = f[p.meta.arg.queryCacheKey] || {}, c = `${p.meta.requestId}_running`;
      m || (m = !!x[c]), delete x[c];
    }
    if (r.rejected.match(p)) {
      const {
        meta: {
          condition: x,
          arg: c,
          requestId: h
        }
      } = p;
      if (x && c.subscribe) {
        const j = f[v = c.queryCacheKey] ?? (f[v] = {});
        j[h] = c.subscriptionOptions ?? j[h] ?? {}, m = !0;
      }
    }
    return m;
  }, a = () => n.currentSubscriptions, i = {
    getSubscriptions: a,
    getSubscriptionCount: (f) => {
      const m = a()[f] ?? {};
      return Ht(m);
    },
    isRequestSubscribed: (f, p) => {
      var y;
      const m = a();
      return !!((y = m == null ? void 0 : m[f]) != null && y[p]);
    }
  };
  return (f, p) => {
    if (o || (o = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(f))
      return o = n.currentSubscriptions = {}, g = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(f))
      return [!1, i];
    const m = d(n.currentSubscriptions, f);
    let y = !0;
    if (m) {
      g || (g = setTimeout(() => {
        const x = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, c] = i0(o, () => x);
        p.next(e.internalActions.subscriptionsUpdated(c)), o = x, g = null;
      }, 500));
      const E = typeof f.type == "string" && !!f.type.startsWith(s), v = r.rejected.match(f) && f.meta.condition && !!f.meta.arg.subscribe;
      y = !E && !v;
    }
    return [y, !1];
  };
};
function hc(e) {
  for (const r in e)
    return !1;
  return !0;
}
var pc = 2147483647 / 1e3 - 1, mc = ({
  reducerPath: e,
  api: r,
  queryThunk: n,
  context: s,
  internalState: o,
  selectors: {
    selectQueryEntry: g,
    selectConfig: b
  }
}) => {
  const {
    removeQueryResult: u,
    unsubscribeQueryResult: d,
    cacheEntriesUpserted: a
  } = r.internalActions, l = yt(d.match, n.fulfilled, n.rejected, a.match);
  function w(y) {
    const E = o.currentSubscriptions[y];
    return !!E && !hc(E);
  }
  const i = {}, f = (y, E, v) => {
    const x = E.getState(), c = b(x);
    if (l(y)) {
      let h;
      if (a.match(y))
        h = y.payload.map((j) => j.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: j
        } = d.match(y) ? y.payload : y.meta.arg;
        h = [j];
      }
      p(h, E, c);
    }
    if (r.util.resetApiState.match(y))
      for (const [h, j] of Object.entries(i))
        j && clearTimeout(j), delete i[h];
    if (s.hasRehydrationInfo(y)) {
      const {
        queries: h
      } = s.extractRehydrationInfo(y);
      p(Object.keys(h), E, c);
    }
  };
  function p(y, E, v) {
    const x = E.getState();
    for (const c of y) {
      const h = g(x, c);
      m(c, h == null ? void 0 : h.endpointName, E, v);
    }
  }
  function m(y, E, v, x) {
    const c = s.endpointDefinitions[E], h = (c == null ? void 0 : c.keepUnusedDataFor) ?? x.keepUnusedDataFor;
    if (h === 1 / 0)
      return;
    const j = Math.max(0, Math.min(h, pc));
    if (!w(y)) {
      const A = i[y];
      A && clearTimeout(A), i[y] = setTimeout(() => {
        w(y) || v.dispatch(u({
          queryCacheKey: y
        })), delete i[y];
      }, j * 1e3);
    }
  }
  return f;
}, Js = new Error("Promise never resolved before cacheEntryRemoved."), gc = ({
  api: e,
  reducerPath: r,
  context: n,
  queryThunk: s,
  mutationThunk: o,
  internalState: g,
  selectors: {
    selectQueryEntry: b,
    selectApiState: u
  }
}) => {
  const d = es(s), a = es(o), l = jt(s, o), w = {};
  function i(E, v, x) {
    const c = w[E];
    c != null && c.valueResolved && (c.valueResolved({
      data: v,
      meta: x
    }), delete c.valueResolved);
  }
  function f(E) {
    const v = w[E];
    v && (delete w[E], v.cacheEntryRemoved());
  }
  const p = (E, v, x) => {
    const c = m(E);
    function h(j, A, B, _) {
      const C = b(x, A), N = b(v.getState(), A);
      !C && N && y(j, _, A, v, B);
    }
    if (s.pending.match(E))
      h(E.meta.arg.endpointName, c, E.meta.requestId, E.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(E))
      for (const {
        queryDescription: j,
        value: A
      } of E.payload) {
        const {
          endpointName: B,
          originalArgs: _,
          queryCacheKey: C
        } = j;
        h(B, C, E.meta.requestId, _), i(C, A, {});
      }
    else if (o.pending.match(E))
      v.getState()[r].mutations[c] && y(E.meta.arg.endpointName, E.meta.arg.originalArgs, c, v, E.meta.requestId);
    else if (l(E))
      i(c, E.payload, E.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(E) || e.internalActions.removeMutationResult.match(E))
      f(c);
    else if (e.util.resetApiState.match(E))
      for (const j of Object.keys(w))
        f(j);
  };
  function m(E) {
    return d(E) ? E.meta.arg.queryCacheKey : a(E) ? E.meta.arg.fixedCacheKey ?? E.meta.requestId : e.internalActions.removeQueryResult.match(E) ? E.payload.queryCacheKey : e.internalActions.removeMutationResult.match(E) ? ir(E.payload) : "";
  }
  function y(E, v, x, c, h) {
    const j = n.endpointDefinitions[E], A = j == null ? void 0 : j.onCacheEntryAdded;
    if (!A) return;
    const B = {}, _ = new Promise((R) => {
      B.cacheEntryRemoved = R;
    }), C = Promise.race([new Promise((R) => {
      B.valueResolved = R;
    }), _.then(() => {
      throw Js;
    })]);
    C.catch(() => {
    }), w[x] = B;
    const N = e.endpoints[E].select(Tr(j) ? v : x), D = c.dispatch((R, L, H) => H), k = {
      ...c,
      getCacheEntry: () => N(c.getState()),
      requestId: h,
      extra: D,
      updateCachedData: Tr(j) ? (R) => c.dispatch(e.util.updateQueryData(E, v, R)) : void 0,
      cacheDataLoaded: C,
      cacheEntryRemoved: _
    }, S = A(v, k);
    Promise.resolve(S).catch((R) => {
      if (R !== Js)
        throw R;
    });
  }
  return p;
}, yc = ({
  api: e,
  context: {
    apiUid: r
  },
  reducerPath: n
}) => (s, o) => {
  var g, b;
  e.util.resetApiState.match(s) && o.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(s) && s.payload === r && ((b = (g = o.getState()[n]) == null ? void 0 : g.config) == null ? void 0 : b.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, vc = ({
  reducerPath: e,
  context: r,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: s,
  queryThunk: o,
  api: g,
  assertTagType: b,
  refetchQuery: u,
  internalState: d
}) => {
  const {
    removeQueryResult: a
  } = g.internalActions, l = yt(jt(s), qr(s)), w = yt(jt(s, o), Vt(s, o));
  let i = [];
  const f = (y, E) => {
    l(y) ? m(j0(y, "invalidatesTags", n, b), E) : w(y) ? m([], E) : g.util.invalidateTags.match(y) && m(ps(y.payload, void 0, void 0, void 0, void 0, b), E);
  };
  function p(y) {
    var x;
    const {
      queries: E,
      mutations: v
    } = y;
    for (const c of [E, v])
      for (const h in c)
        if (((x = c[h]) == null ? void 0 : x.status) === "pending") return !0;
    return !1;
  }
  function m(y, E) {
    const v = E.getState(), x = v[e];
    if (i.push(...y), x.config.invalidationBehavior === "delayed" && p(x))
      return;
    const c = i;
    if (i = [], c.length === 0) return;
    const h = g.util.selectInvalidatedBy(v, c);
    r.batch(() => {
      const j = Array.from(h.values());
      for (const {
        queryCacheKey: A
      } of j) {
        const B = x.queries[A], _ = d.currentSubscriptions[A] ?? {};
        B && (Ht(_) === 0 ? E.dispatch(a({
          queryCacheKey: A
        })) : B.status !== "uninitialized" && E.dispatch(u(B)));
      }
    });
  }
  return f;
}, bc = ({
  reducerPath: e,
  queryThunk: r,
  api: n,
  refetchQuery: s,
  internalState: o
}) => {
  const g = {}, b = (i, f) => {
    (n.internalActions.updateSubscriptionOptions.match(i) || n.internalActions.unsubscribeQueryResult.match(i)) && d(i.payload, f), (r.pending.match(i) || r.rejected.match(i) && i.meta.condition) && d(i.meta.arg, f), (r.fulfilled.match(i) || r.rejected.match(i) && !i.meta.condition) && u(i.meta.arg, f), n.util.resetApiState.match(i) && l();
  };
  function u({
    queryCacheKey: i
  }, f) {
    const p = f.getState()[e], m = p.queries[i], y = o.currentSubscriptions[i];
    if (!m || m.status === "uninitialized") return;
    const {
      lowestPollingInterval: E,
      skipPollingIfUnfocused: v
    } = w(y);
    if (!Number.isFinite(E)) return;
    const x = g[i];
    x != null && x.timeout && (clearTimeout(x.timeout), x.timeout = void 0);
    const c = Date.now() + E;
    g[i] = {
      nextPollTimestamp: c,
      pollingInterval: E,
      timeout: setTimeout(() => {
        (p.config.focused || !v) && f.dispatch(s(m)), u({
          queryCacheKey: i
        }, f);
      }, E)
    };
  }
  function d({
    queryCacheKey: i
  }, f) {
    const m = f.getState()[e].queries[i], y = o.currentSubscriptions[i];
    if (!m || m.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: E
    } = w(y);
    if (!Number.isFinite(E)) {
      a(i);
      return;
    }
    const v = g[i], x = Date.now() + E;
    (!v || x < v.nextPollTimestamp) && u({
      queryCacheKey: i
    }, f);
  }
  function a(i) {
    const f = g[i];
    f != null && f.timeout && clearTimeout(f.timeout), delete g[i];
  }
  function l() {
    for (const i of Object.keys(g))
      a(i);
  }
  function w(i = {}) {
    let f = !1, p = Number.POSITIVE_INFINITY;
    for (let m in i)
      i[m].pollingInterval && (p = Math.min(i[m].pollingInterval, p), f = i[m].skipPollingIfUnfocused || f);
    return {
      lowestPollingInterval: p,
      skipPollingIfUnfocused: f
    };
  }
  return b;
}, wc = ({
  api: e,
  context: r,
  queryThunk: n,
  mutationThunk: s
}) => {
  const o = us(n, s), g = Vt(n, s), b = jt(n, s), u = {};
  return (a, l) => {
    var w, i;
    if (o(a)) {
      const {
        requestId: f,
        arg: {
          endpointName: p,
          originalArgs: m
        }
      } = a.meta, y = r.endpointDefinitions[p], E = y == null ? void 0 : y.onQueryStarted;
      if (E) {
        const v = {}, x = new Promise((A, B) => {
          v.resolve = A, v.reject = B;
        });
        x.catch(() => {
        }), u[f] = v;
        const c = e.endpoints[p].select(Tr(y) ? m : f), h = l.dispatch((A, B, _) => _), j = {
          ...l,
          getCacheEntry: () => c(l.getState()),
          requestId: f,
          extra: h,
          updateCachedData: Tr(y) ? (A) => l.dispatch(e.util.updateQueryData(p, m, A)) : void 0,
          queryFulfilled: x
        };
        E(m, j);
      }
    } else if (b(a)) {
      const {
        requestId: f,
        baseQueryMeta: p
      } = a.meta;
      (w = u[f]) == null || w.resolve({
        data: a.payload,
        meta: p
      }), delete u[f];
    } else if (g(a)) {
      const {
        requestId: f,
        rejectedWithValue: p,
        baseQueryMeta: m
      } = a.meta;
      (i = u[f]) == null || i.reject({
        error: a.payload ?? a.error,
        isUnhandledError: !p,
        meta: m
      }), delete u[f];
    }
  };
}, Cc = ({
  reducerPath: e,
  context: r,
  api: n,
  refetchQuery: s,
  internalState: o
}) => {
  const {
    removeQueryResult: g
  } = n.internalActions, b = (d, a) => {
    xs.match(d) && u(a, "refetchOnFocus"), hs.match(d) && u(a, "refetchOnReconnect");
  };
  function u(d, a) {
    const l = d.getState()[e], w = l.queries, i = o.currentSubscriptions;
    r.batch(() => {
      for (const f of Object.keys(i)) {
        const p = w[f], m = i[f];
        if (!m || !p) continue;
        (Object.values(m).some((E) => E[a] === !0) || Object.values(m).every((E) => E[a] === void 0) && l.config[a]) && (Ht(m) === 0 ? d.dispatch(g({
          queryCacheKey: f
        })) : p.status !== "uninitialized" && d.dispatch(s(p)));
      }
    });
  }
  return b;
};
function Ec(e) {
  const {
    reducerPath: r,
    queryThunk: n,
    api: s,
    context: o
  } = e, {
    apiUid: g
  } = o, b = {
    invalidateTags: at(`${r}/invalidateTags`)
  }, u = (w) => w.type.startsWith(`${r}/`), d = [yc, mc, vc, bc, gc, wc];
  return {
    middleware: (w) => {
      let i = !1;
      const p = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: l,
        isThisApiSliceAction: u
      }, m = d.map((v) => v(p)), y = xc(p), E = Cc(p);
      return (v) => (x) => {
        if (!os(x))
          return v(x);
        i || (i = !0, w.dispatch(s.internalActions.middlewareRegistered(g)));
        const c = {
          ...w,
          next: v
        }, h = w.getState(), [j, A] = y(x, c, h);
        let B;
        if (j ? B = v(x) : B = A, w.getState()[r] && (E(x, c, h), u(x) || o.hasRehydrationInfo(x)))
          for (const _ of m)
            _(x, c, h);
        return B;
      };
    },
    actions: b
  };
  function l(w) {
    return e.api.endpoints[w.endpointName].initiate(w.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var ea = /* @__PURE__ */ Symbol(), jc = ({
  createSelector: e = ds
} = {}) => ({
  name: ea,
  init(r, {
    baseQuery: n,
    tagTypes: s,
    reducerPath: o,
    serializeQueryArgs: g,
    keepUnusedDataFor: b,
    refetchOnMountOrArgChange: u,
    refetchOnFocus: d,
    refetchOnReconnect: a,
    invalidationBehavior: l,
    onSchemaFailure: w,
    catchSchemaFailure: i,
    skipSchemaValidation: f
  }, p) {
    ni();
    const m = (Y) => (typeof process < "u" && process.env.NODE_ENV === "development" && (s.includes(Y.type) || console.error(`Tag type '${Y.type}' was used, but not specified in \`tagTypes\`!`)), Y);
    Object.assign(r, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: hs,
        onOffline: w0,
        onFocus: xs,
        onFocusLost: b0
      },
      util: {}
    });
    const y = uc({
      serializeQueryArgs: g,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: E,
      selectCachedArgsForQuery: v,
      buildQuerySelector: x,
      buildInfiniteQuerySelector: c,
      buildMutationSelector: h
    } = y;
    gt(r.util, {
      selectInvalidatedBy: E,
      selectCachedArgsForQuery: v
    });
    const {
      queryThunk: j,
      infiniteQueryThunk: A,
      mutationThunk: B,
      patchQueryData: _,
      updateQueryData: C,
      upsertQueryData: N,
      prefetch: D,
      buildMatchThunkActions: k
    } = lc({
      baseQuery: n,
      reducerPath: o,
      context: p,
      api: r,
      serializeQueryArgs: g,
      assertTagType: m,
      selectors: y,
      onSchemaFailure: w,
      catchSchemaFailure: i,
      skipSchemaValidation: f
    }), {
      reducer: S,
      actions: R
    } = dc({
      context: p,
      queryThunk: j,
      infiniteQueryThunk: A,
      mutationThunk: B,
      serializeQueryArgs: g,
      reducerPath: o,
      assertTagType: m,
      config: {
        refetchOnFocus: d,
        refetchOnReconnect: a,
        refetchOnMountOrArgChange: u,
        keepUnusedDataFor: b,
        reducerPath: o,
        invalidationBehavior: l
      }
    });
    gt(r.util, {
      patchQueryData: _,
      updateQueryData: C,
      upsertQueryData: N,
      prefetch: D,
      resetApiState: R.resetApiState,
      upsertQueryEntries: R.cacheEntriesUpserted
    }), gt(r.internalActions, R);
    const {
      middleware: L,
      actions: H
    } = Ec({
      reducerPath: o,
      context: p,
      queryThunk: j,
      mutationThunk: B,
      infiniteQueryThunk: A,
      api: r,
      assertTagType: m,
      selectors: y
    });
    gt(r.util, H), gt(r, {
      reducer: S,
      middleware: L
    });
    const {
      buildInitiateQuery: V,
      buildInitiateInfiniteQuery: Q,
      buildInitiateMutation: G,
      getRunningMutationThunk: T,
      getRunningMutationsThunk: O,
      getRunningQueriesThunk: M,
      getRunningQueryThunk: P
    } = ic({
      queryThunk: j,
      mutationThunk: B,
      infiniteQueryThunk: A,
      api: r,
      serializeQueryArgs: g,
      context: p
    });
    return gt(r.util, {
      getRunningMutationThunk: T,
      getRunningMutationsThunk: O,
      getRunningQueryThunk: P,
      getRunningQueriesThunk: M
    }), {
      name: ea,
      injectEndpoint(Y, ie) {
        var ge;
        const re = (ge = r.endpoints)[Y] ?? (ge[Y] = {});
        $r(ie) && gt(re, {
          name: Y,
          select: x(Y, ie),
          initiate: V(Y, ie)
        }, k(j, Y)), sc(ie) && gt(re, {
          name: Y,
          select: h(),
          initiate: G(Y)
        }, k(B, Y)), fr(ie) && gt(re, {
          name: Y,
          select: c(Y, ie),
          initiate: Q(Y, ie)
        }, k(j, Y));
      }
    };
  }
}), ss = { exports: {} }, Jr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function Nc() {
  if (ta) return Jr;
  ta = 1;
  var e = Ft;
  function r(d, a) {
    return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, o = e.useRef, g = e.useEffect, b = e.useMemo, u = e.useDebugValue;
  return Jr.useSyncExternalStoreWithSelector = function(d, a, l, w, i) {
    var f = o(null);
    if (f.current === null) {
      var p = { hasValue: !1, value: null };
      f.current = p;
    } else p = f.current;
    f = b(
      function() {
        function y(h) {
          if (!E) {
            if (E = !0, v = h, h = w(h), i !== void 0 && p.hasValue) {
              var j = p.value;
              if (i(j, h))
                return x = j;
            }
            return x = h;
          }
          if (j = x, n(v, h)) return j;
          var A = w(h);
          return i !== void 0 && i(j, A) ? (v = h, j) : (v = h, x = A);
        }
        var E = !1, v, x, c = l === void 0 ? null : l;
        return [
          function() {
            return y(a());
          },
          c === null ? void 0 : function() {
            return y(c());
          }
        ];
      },
      [a, l, w, i]
    );
    var m = s(d, f[0], f[1]);
    return g(
      function() {
        p.hasValue = !0, p.value = m;
      },
      [m]
    ), u(m), m;
  }, Jr;
}
var en = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function Ac() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d, a) {
      return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var r = Ft, n = typeof Object.is == "function" ? Object.is : e, s = r.useSyncExternalStore, o = r.useRef, g = r.useEffect, b = r.useMemo, u = r.useDebugValue;
    en.useSyncExternalStoreWithSelector = function(d, a, l, w, i) {
      var f = o(null);
      if (f.current === null) {
        var p = { hasValue: !1, value: null };
        f.current = p;
      } else p = f.current;
      f = b(
        function() {
          function y(h) {
            if (!E) {
              if (E = !0, v = h, h = w(h), i !== void 0 && p.hasValue) {
                var j = p.value;
                if (i(j, h))
                  return x = j;
              }
              return x = h;
            }
            if (j = x, n(v, h))
              return j;
            var A = w(h);
            return i !== void 0 && i(j, A) ? (v = h, j) : (v = h, x = A);
          }
          var E = !1, v, x, c = l === void 0 ? null : l;
          return [
            function() {
              return y(a());
            },
            c === null ? void 0 : function() {
              return y(c());
            }
          ];
        },
        [a, l, w, i]
      );
      var m = s(d, f[0], f[1]);
      return g(
        function() {
          p.hasValue = !0, p.value = m;
        },
        [m]
      ), u(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), en;
}
process.env.NODE_ENV === "production" ? ss.exports = Nc() : ss.exports = Ac();
var _c = ss.exports;
function kc(e) {
  e();
}
function na(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function er(e, r) {
  if (na(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  const n = Object.keys(e), s = Object.keys(r);
  if (n.length !== s.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(r, n[o]) || !na(e[n[o]], r[n[o]]))
      return !1;
  return !0;
}
var tn = /* @__PURE__ */ Symbol.for("react-redux-context"), rn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Dc() {
  if (!Ct.createContext) return {};
  const e = rn[tn] ?? (rn[tn] = /* @__PURE__ */ new Map());
  let r = e.get(Ct.createContext);
  return r || (r = Ct.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), e.set(Ct.createContext, r)), r;
}
var Pt = /* @__PURE__ */ Dc();
function ms(e = Pt) {
  return function() {
    const n = Ct.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var A0 = /* @__PURE__ */ ms();
function _0(e = Pt) {
  const r = e === Pt ? A0 : (
    // @ts-ignore
    ms(e)
  ), n = () => {
    const { store: s } = r();
    return s;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var k0 = /* @__PURE__ */ _0();
function Bc(e = Pt) {
  const r = e === Pt ? k0 : _0(e), n = () => r().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var gs = /* @__PURE__ */ Bc(), Sc = (e, r) => e === r;
function Fc(e = Pt) {
  const r = e === Pt ? A0 : ms(e), n = (s, o = {}) => {
    const { equalityFn: g = Sc } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!s)
        throw new Error("You must pass a selector to useSelector");
      if (typeof s != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof g != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const b = r(), { store: u, subscription: d, getServerState: a } = b, l = Ct.useRef(!0), w = Ct.useCallback(
      {
        [s.name](f) {
          const p = s(f);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: m = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: y, stabilityCheck: E } = b, {
              identityFunctionCheck: v,
              stabilityCheck: x
            } = {
              stabilityCheck: E,
              identityFunctionCheck: y,
              ...m
            };
            if (x === "always" || x === "once" && l.current) {
              const c = s(f);
              if (!g(p, c)) {
                let h;
                try {
                  throw new Error();
                } catch (j) {
                  ({ stack: h } = j);
                }
                console.warn(
                  "Selector " + (s.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: f,
                    selected: p,
                    selected2: c,
                    stack: h
                  }
                );
              }
            }
            if ((v === "always" || v === "once" && l.current) && p === f) {
              let c;
              try {
                throw new Error();
              } catch (h) {
                ({ stack: c } = h);
              }
              console.warn(
                "Selector " + (s.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: c }
              );
            }
            l.current && (l.current = !1);
          }
          return p;
        }
      }[s.name],
      [s]
    ), i = _c.useSyncExternalStoreWithSelector(
      d.addNestedSub,
      u.getState,
      a || u.getState,
      w,
      g
    );
    return Ct.useDebugValue(i), i;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var D0 = /* @__PURE__ */ Fc(), Rc = kc;
function Cr(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Tc(e) {
  let r = 0;
  for (const n in e)
    r++;
  return r;
}
function Oc(e) {
  return e.type === "query";
}
function Pc(e) {
  return e.type === "mutation";
}
function B0(e) {
  return e.type === "infinitequery";
}
function Yt(e, ...r) {
  return Object.assign(e, ...r);
}
var nn = Symbol();
function sn(e, r, n, s) {
  const o = We(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? r({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: s
    }) : e
  }), [e, r, n, s]), g = Fe(o);
  return be(() => {
    g.current.serialized !== o.serialized && (g.current = o);
  }, [o]), g.current.serialized === o.serialized ? g.current.queryArgs : e;
}
function Er(e) {
  const r = Fe(e);
  return be(() => {
    er(r.current, e) || (r.current = e);
  }, [e]), er(r.current, e) ? r.current : e;
}
var Ic = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mc = /* @__PURE__ */ Ic(), Lc = () => typeof navigator < "u" && navigator.product === "ReactNative", zc = /* @__PURE__ */ Lc(), qc = () => Mc || zc ? H0 : be, $c = /* @__PURE__ */ qc(), sa = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: y0.pending
} : e;
function an(e, ...r) {
  const n = {};
  return r.forEach((s) => {
    n[s] = e[s];
  }), n;
}
var on = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function Hc({
  api: e,
  moduleOptions: {
    batch: r,
    hooks: {
      useDispatch: n,
      useSelector: s,
      useStore: o
    },
    unstable__sideEffectsInRender: g,
    createSelector: b
  },
  serializeQueryArgs: u,
  context: d
}) {
  const a = g ? (c) => c() : be;
  return {
    buildQueryHooks: E,
    buildInfiniteQueryHooks: v,
    buildMutationHook: x,
    usePrefetch: i
  };
  function l(c, h, j) {
    if (h != null && h.endpointName && c.isUninitialized) {
      const {
        endpointName: D
      } = h, k = d.endpointDefinitions[D];
      j !== st && u({
        queryArgs: h.originalArgs,
        endpointDefinition: k,
        endpointName: D
      }) === u({
        queryArgs: j,
        endpointDefinition: k,
        endpointName: D
      }) && (h = void 0);
    }
    let A = c.isSuccess ? c.data : h == null ? void 0 : h.data;
    A === void 0 && (A = c.data);
    const B = A !== void 0, _ = c.isLoading, C = (!h || h.isLoading || h.isUninitialized) && !B && _, N = c.isSuccess || B && (_ && !(h != null && h.isError) || c.isUninitialized);
    return {
      ...c,
      data: A,
      currentData: c.data,
      isFetching: _,
      isLoading: C,
      isSuccess: N
    };
  }
  function w(c, h, j) {
    if (h != null && h.endpointName && c.isUninitialized) {
      const {
        endpointName: D
      } = h, k = d.endpointDefinitions[D];
      j !== st && u({
        queryArgs: h.originalArgs,
        endpointDefinition: k,
        endpointName: D
      }) === u({
        queryArgs: j,
        endpointDefinition: k,
        endpointName: D
      }) && (h = void 0);
    }
    let A = c.isSuccess ? c.data : h == null ? void 0 : h.data;
    A === void 0 && (A = c.data);
    const B = A !== void 0, _ = c.isLoading, C = (!h || h.isLoading || h.isUninitialized) && !B && _, N = c.isSuccess || _ && B;
    return {
      ...c,
      data: A,
      currentData: c.data,
      isFetching: _,
      isLoading: C,
      isSuccess: N
    };
  }
  function i(c, h) {
    const j = n(), A = Er(h);
    return dt((B, _) => j(e.util.prefetch(c, B, {
      ...A,
      ..._
    })), [c, j, A]);
  }
  function f(c, h, {
    refetchOnReconnect: j,
    refetchOnFocus: A,
    refetchOnMountOrArgChange: B,
    skip: _ = !1,
    pollingInterval: C = 0,
    skipPollingIfUnfocused: N = !1,
    ...D
  } = {}) {
    const {
      initiate: k
    } = e.endpoints[c], S = n(), R = Fe(void 0);
    if (!R.current) {
      const Y = S(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof Y != "object" || typeof (Y == null ? void 0 : Y.type) == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? _e(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      R.current = Y;
    }
    const L = sn(
      _ ? st : h,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Or,
      d.endpointDefinitions[c],
      c
    ), H = Er({
      refetchOnReconnect: j,
      refetchOnFocus: A,
      pollingInterval: C,
      skipPollingIfUnfocused: N
    }), V = D.initialPageParam, Q = Er(V), G = Fe(void 0);
    let {
      queryCacheKey: T,
      requestId: O
    } = G.current || {}, M = !1;
    T && O && (M = R.current.isRequestSubscribed(T, O));
    const P = !M && G.current !== void 0;
    return a(() => {
      P && (G.current = void 0);
    }, [P]), a(() => {
      var ce;
      const Y = G.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(P), L === st) {
        Y == null || Y.unsubscribe(), G.current = void 0;
        return;
      }
      const ie = (ce = G.current) == null ? void 0 : ce.subscriptionOptions;
      if (!Y || Y.arg !== L) {
        Y == null || Y.unsubscribe();
        const re = S(k(L, {
          subscriptionOptions: H,
          forceRefetch: B,
          ...B0(d.endpointDefinitions[c]) ? {
            initialPageParam: Q
          } : {}
        }));
        G.current = re;
      } else H !== ie && Y.updateSubscriptionOptions(H);
    }, [S, k, B, L, H, P, Q, c]), [G, S, k, H];
  }
  function p(c, h) {
    return (A, {
      skip: B = !1,
      selectFromResult: _
    } = {}) => {
      const {
        select: C
      } = e.endpoints[c], N = sn(B ? st : A, u, d.endpointDefinitions[c], c), D = Fe(void 0), k = We(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        b([
          // @ts-ignore
          C(N),
          (V, Q) => Q,
          (V) => N
        ], h, {
          memoizeOptions: {
            resultEqualityCheck: er
          }
        })
      ), [C, N]), S = We(() => _ ? b([k], _, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : k, [k, _]), R = s((V) => S(V, D.current), er), L = o(), H = k(L.getState(), D.current);
      return $c(() => {
        D.current = H;
      }, [H]), R;
    };
  }
  function m(c) {
    be(() => () => {
      var h, j;
      (j = (h = c.current) == null ? void 0 : h.unsubscribe) == null || j.call(h), c.current = void 0;
    }, [c]);
  }
  function y(c) {
    if (!c.current) throw new Error(process.env.NODE_ENV === "production" ? _e(38) : "Cannot refetch a query that has not been started yet.");
    return c.current.refetch();
  }
  function E(c) {
    const h = (B, _ = {}) => {
      const [C] = f(c, B, _);
      return m(C), We(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => y(C)
      }), [C]);
    }, j = ({
      refetchOnReconnect: B,
      refetchOnFocus: _,
      pollingInterval: C = 0,
      skipPollingIfUnfocused: N = !1
    } = {}) => {
      const {
        initiate: D
      } = e.endpoints[c], k = n(), [S, R] = X(nn), L = Fe(void 0), H = Er({
        refetchOnReconnect: B,
        refetchOnFocus: _,
        pollingInterval: C,
        skipPollingIfUnfocused: N
      });
      a(() => {
        var O, M;
        const T = (O = L.current) == null ? void 0 : O.subscriptionOptions;
        H !== T && ((M = L.current) == null || M.updateSubscriptionOptions(H));
      }, [H]);
      const V = Fe(H);
      a(() => {
        V.current = H;
      }, [H]);
      const Q = dt(function(T, O = !1) {
        let M;
        return r(() => {
          var P;
          (P = L.current) == null || P.unsubscribe(), L.current = M = k(D(T, {
            subscriptionOptions: V.current,
            forceRefetch: !O
          })), R(T);
        }), M;
      }, [k, D]), G = dt(() => {
        var T, O;
        (T = L.current) != null && T.queryCacheKey && k(e.internalActions.removeQueryResult({
          queryCacheKey: (O = L.current) == null ? void 0 : O.queryCacheKey
        }));
      }, [k]);
      return be(() => () => {
        var T;
        (T = L == null ? void 0 : L.current) == null || T.unsubscribe();
      }, []), be(() => {
        S !== nn && !L.current && Q(S, !0);
      }, [S, Q]), We(() => [Q, S, {
        reset: G
      }], [Q, S, G]);
    }, A = p(c, l);
    return {
      useQueryState: A,
      useQuerySubscription: h,
      useLazyQuerySubscription: j,
      useLazyQuery(B) {
        const [_, C, {
          reset: N
        }] = j(B), D = A(C, {
          ...B,
          skip: C === nn
        }), k = We(() => ({
          lastArg: C
        }), [C]);
        return We(() => [_, {
          ...D,
          reset: N
        }, k], [_, D, N, k]);
      },
      useQuery(B, _) {
        const C = h(B, _), N = A(B, {
          selectFromResult: B === st || _ != null && _.skip ? void 0 : sa,
          ..._
        }), D = an(N, ...on);
        return Qr(D), We(() => ({
          ...N,
          ...C
        }), [N, C]);
      }
    };
  }
  function v(c) {
    const h = (A, B = {}) => {
      const [_, C, N, D] = f(c, A, B), k = Fe(D);
      a(() => {
        k.current = D;
      }, [D]);
      const S = dt(function(H, V) {
        let Q;
        return r(() => {
          var G;
          (G = _.current) == null || G.unsubscribe(), _.current = Q = C(N(H, {
            subscriptionOptions: k.current,
            direction: V
          }));
        }), Q;
      }, [_, C, N]);
      m(_);
      const R = sn(
        B.skip ? st : A,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Or,
        d.endpointDefinitions[c],
        c
      ), L = dt(() => y(_), [_]);
      return We(() => ({
        trigger: S,
        /**
         * A method to manually refetch data for the query
         */
        refetch: L,
        fetchNextPage: () => S(R, "forward"),
        fetchPreviousPage: () => S(R, "backward")
      }), [L, S, R]);
    }, j = p(c, w);
    return {
      useInfiniteQueryState: j,
      useInfiniteQuerySubscription: h,
      useInfiniteQuery(A, B) {
        const {
          refetch: _,
          fetchNextPage: C,
          fetchPreviousPage: N
        } = h(A, B), D = j(A, {
          selectFromResult: A === st || B != null && B.skip ? void 0 : sa,
          ...B
        }), k = an(D, ...on, "hasNextPage", "hasPreviousPage");
        return Qr(k), We(() => ({
          ...D,
          fetchNextPage: C,
          fetchPreviousPage: N,
          refetch: _
        }), [D, C, N, _]);
      }
    };
  }
  function x(c) {
    return ({
      selectFromResult: h,
      fixedCacheKey: j
    } = {}) => {
      const {
        select: A,
        initiate: B
      } = e.endpoints[c], _ = n(), [C, N] = X();
      be(() => () => {
        C != null && C.arg.fixedCacheKey || C == null || C.reset();
      }, [C]);
      const D = dt(function(T) {
        const O = _(B(T, {
          fixedCacheKey: j
        }));
        return N(O), O;
      }, [_, B, j]), {
        requestId: k
      } = C || {}, S = We(() => A({
        fixedCacheKey: j,
        requestId: C == null ? void 0 : C.requestId
      }), [j, C, A]), R = We(() => h ? b([S], h) : S, [h, S]), L = s(R, er), H = j == null ? C == null ? void 0 : C.arg.originalArgs : void 0, V = dt(() => {
        r(() => {
          C && N(void 0), j && _(e.internalActions.removeMutationResult({
            requestId: k,
            fixedCacheKey: j
          }));
        });
      }, [_, j, C, k]), Q = an(L, ...on, "endpointName");
      Qr(Q);
      const G = We(() => ({
        ...L,
        originalArgs: H,
        reset: V
      }), [L, H, V]);
      return We(() => [D, G], [D, G]);
    };
  }
}
var Vc = /* @__PURE__ */ Symbol(), Wc = ({
  batch: e = Rc,
  hooks: r = {
    useDispatch: gs,
    useSelector: D0,
    useStore: k0
  },
  createSelector: n = ds,
  unstable__sideEffectsInRender: s = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const g = ["useDispatch", "useSelector", "useStore"];
    let b = !1;
    for (const u of g)
      if (Tc(o) > 0 && (o[u] && (b || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), b = !0)), r[u] = o[u]), typeof r[u] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? _e(36) : `When using custom hooks for context, all ${g.length} hooks need to be provided: ${g.join(", ")}.
Hook ${u} was either not provided or not a function.`);
  }
  return {
    name: Vc,
    init(g, {
      serializeQueryArgs: b
    }, u) {
      const d = g, {
        buildQueryHooks: a,
        buildInfiniteQueryHooks: l,
        buildMutationHook: w,
        usePrefetch: i
      } = Hc({
        api: g,
        moduleOptions: {
          batch: e,
          hooks: r,
          unstable__sideEffectsInRender: s,
          createSelector: n
        },
        serializeQueryArgs: b,
        context: u
      });
      return Yt(d, {
        usePrefetch: i
      }), Yt(u, {
        batch: e
      }), {
        injectEndpoint(f, p) {
          if (Oc(p)) {
            const {
              useQuery: m,
              useLazyQuery: y,
              useLazyQuerySubscription: E,
              useQueryState: v,
              useQuerySubscription: x
            } = a(f);
            Yt(d.endpoints[f], {
              useQuery: m,
              useLazyQuery: y,
              useLazyQuerySubscription: E,
              useQueryState: v,
              useQuerySubscription: x
            }), g[`use${Cr(f)}Query`] = m, g[`useLazy${Cr(f)}Query`] = y;
          }
          if (Pc(p)) {
            const m = w(f);
            Yt(d.endpoints[f], {
              useMutation: m
            }), g[`use${Cr(f)}Mutation`] = m;
          } else if (B0(p)) {
            const {
              useInfiniteQuery: m,
              useInfiniteQuerySubscription: y,
              useInfiniteQueryState: E
            } = l(f);
            Yt(d.endpoints[f], {
              useInfiniteQuery: m,
              useInfiniteQuerySubscription: y,
              useInfiniteQueryState: E
            }), g[`use${Cr(f)}InfiniteQuery`] = m;
          }
        }
      };
    }
  };
}, Qc = /* @__PURE__ */ fc(jc(), Wc()), S0 = { exports: {} };
function Uc(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var cn = { exports: {} };
const Kc = {}, Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kc
}, Symbol.toStringTag, { value: "Module" })), Yc = /* @__PURE__ */ W0(Gc);
var aa;
function Ne() {
  return aa || (aa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s();
    })(Ce, function() {
      var n = n || function(s, o) {
        var g;
        if (typeof window < "u" && window.crypto && (g = window.crypto), typeof self < "u" && self.crypto && (g = self.crypto), typeof globalThis < "u" && globalThis.crypto && (g = globalThis.crypto), !g && typeof window < "u" && window.msCrypto && (g = window.msCrypto), !g && typeof Ce < "u" && Ce.crypto && (g = Ce.crypto), !g && typeof Uc == "function")
          try {
            g = Yc;
          } catch {
          }
        var b = function() {
          if (g) {
            if (typeof g.getRandomValues == "function")
              try {
                return g.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof g.randomBytes == "function")
              try {
                return g.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, u = Object.create || /* @__PURE__ */ function() {
          function v() {
          }
          return function(x) {
            var c;
            return v.prototype = x, c = new v(), v.prototype = null, c;
          };
        }(), d = {}, a = d.lib = {}, l = a.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(v) {
              var x = u(this);
              return v && x.mixIn(v), (!x.hasOwnProperty("init") || this.init === x.init) && (x.init = function() {
                x.$super.init.apply(this, arguments);
              }), x.init.prototype = x, x.$super = this, x;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var v = this.extend();
              return v.init.apply(v, arguments), v;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(v) {
              for (var x in v)
                v.hasOwnProperty(x) && (this[x] = v[x]);
              v.hasOwnProperty("toString") && (this.toString = v.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), w = a.WordArray = l.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(v, x) {
            v = this.words = v || [], x != o ? this.sigBytes = x : this.sigBytes = v.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(v) {
            return (v || f).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(v) {
            var x = this.words, c = v.words, h = this.sigBytes, j = v.sigBytes;
            if (this.clamp(), h % 4)
              for (var A = 0; A < j; A++) {
                var B = c[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                x[h + A >>> 2] |= B << 24 - (h + A) % 4 * 8;
              }
            else
              for (var _ = 0; _ < j; _ += 4)
                x[h + _ >>> 2] = c[_ >>> 2];
            return this.sigBytes += j, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var v = this.words, x = this.sigBytes;
            v[x >>> 2] &= 4294967295 << 32 - x % 4 * 8, v.length = s.ceil(x / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var v = l.clone.call(this);
            return v.words = this.words.slice(0), v;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(v) {
            for (var x = [], c = 0; c < v; c += 4)
              x.push(b());
            return new w.init(x, v);
          }
        }), i = d.enc = {}, f = i.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(v) {
            for (var x = v.words, c = v.sigBytes, h = [], j = 0; j < c; j++) {
              var A = x[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              h.push((A >>> 4).toString(16)), h.push((A & 15).toString(16));
            }
            return h.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(v) {
            for (var x = v.length, c = [], h = 0; h < x; h += 2)
              c[h >>> 3] |= parseInt(v.substr(h, 2), 16) << 24 - h % 8 * 4;
            return new w.init(c, x / 2);
          }
        }, p = i.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(v) {
            for (var x = v.words, c = v.sigBytes, h = [], j = 0; j < c; j++) {
              var A = x[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              h.push(String.fromCharCode(A));
            }
            return h.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(v) {
            for (var x = v.length, c = [], h = 0; h < x; h++)
              c[h >>> 2] |= (v.charCodeAt(h) & 255) << 24 - h % 4 * 8;
            return new w.init(c, x);
          }
        }, m = i.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(v) {
            try {
              return decodeURIComponent(escape(p.stringify(v)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(v) {
            return p.parse(unescape(encodeURIComponent(v)));
          }
        }, y = a.BufferedBlockAlgorithm = l.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new w.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(v) {
            typeof v == "string" && (v = m.parse(v)), this._data.concat(v), this._nDataBytes += v.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(v) {
            var x, c = this._data, h = c.words, j = c.sigBytes, A = this.blockSize, B = A * 4, _ = j / B;
            v ? _ = s.ceil(_) : _ = s.max((_ | 0) - this._minBufferSize, 0);
            var C = _ * A, N = s.min(C * 4, j);
            if (C) {
              for (var D = 0; D < C; D += A)
                this._doProcessBlock(h, D);
              x = h.splice(0, C), c.sigBytes -= N;
            }
            return new w.init(x, N);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var v = l.clone.call(this);
            return v._data = this._data.clone(), v;
          },
          _minBufferSize: 0
        });
        a.Hasher = y.extend({
          /**
           * Configuration options.
           */
          cfg: l.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(v) {
            this.cfg = this.cfg.extend(v), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            y.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(v) {
            return this._append(v), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(v) {
            v && this._append(v);
            var x = this._doFinalize();
            return x;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(v) {
            return function(x, c) {
              return new v.init(c).finalize(x);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(v) {
            return function(x, c) {
              return new E.HMAC.init(v, c).finalize(x);
            };
          }
        });
        var E = d.algo = {};
        return d;
      }(Math);
      return n;
    });
  }(cn)), cn.exports;
}
var ln = { exports: {} }, oa;
function Hr() {
  return oa || (oa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function(s) {
        var o = n, g = o.lib, b = g.Base, u = g.WordArray, d = o.x64 = {};
        d.Word = b.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(a, l) {
            this.high = a, this.low = l;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), d.WordArray = b.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(a, l) {
            a = this.words = a || [], l != s ? this.sigBytes = l : this.sigBytes = a.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var a = this.words, l = a.length, w = [], i = 0; i < l; i++) {
              var f = a[i];
              w.push(f.high), w.push(f.low);
            }
            return u.create(w, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var a = b.clone.call(this), l = a.words = this.words.slice(0), w = l.length, i = 0; i < w; i++)
              l[i] = l[i].clone();
            return a;
          }
        });
      }(), n;
    });
  }(ln)), ln.exports;
}
var dn = { exports: {} }, ia;
function Xc() {
  return ia || (ia = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var s = n, o = s.lib, g = o.WordArray, b = g.init, u = g.init = function(d) {
            if (d instanceof ArrayBuffer && (d = new Uint8Array(d)), (d instanceof Int8Array || typeof Uint8ClampedArray < "u" && d instanceof Uint8ClampedArray || d instanceof Int16Array || d instanceof Uint16Array || d instanceof Int32Array || d instanceof Uint32Array || d instanceof Float32Array || d instanceof Float64Array) && (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength)), d instanceof Uint8Array) {
              for (var a = d.byteLength, l = [], w = 0; w < a; w++)
                l[w >>> 2] |= d[w] << 24 - w % 4 * 8;
              b.call(this, l, a);
            } else
              b.apply(this, arguments);
          };
          u.prototype = g;
        }
      }(), n.lib.WordArray;
    });
  }(dn)), dn.exports;
}
var un = { exports: {} }, ca;
function Zc() {
  return ca || (ca = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.WordArray, b = s.enc;
        b.Utf16 = b.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(d) {
            for (var a = d.words, l = d.sigBytes, w = [], i = 0; i < l; i += 2) {
              var f = a[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              w.push(String.fromCharCode(f));
            }
            return w.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(d) {
            for (var a = d.length, l = [], w = 0; w < a; w++)
              l[w >>> 1] |= d.charCodeAt(w) << 16 - w % 2 * 16;
            return g.create(l, a * 2);
          }
        }, b.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(d) {
            for (var a = d.words, l = d.sigBytes, w = [], i = 0; i < l; i += 2) {
              var f = u(a[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              w.push(String.fromCharCode(f));
            }
            return w.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(d) {
            for (var a = d.length, l = [], w = 0; w < a; w++)
              l[w >>> 1] |= u(d.charCodeAt(w) << 16 - w % 2 * 16);
            return g.create(l, a * 2);
          }
        };
        function u(d) {
          return d << 8 & 4278255360 | d >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(un)), un.exports;
}
var fn = { exports: {} }, la;
function It() {
  return la || (la = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.WordArray, b = s.enc;
        b.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(d) {
            var a = d.words, l = d.sigBytes, w = this._map;
            d.clamp();
            for (var i = [], f = 0; f < l; f += 3)
              for (var p = a[f >>> 2] >>> 24 - f % 4 * 8 & 255, m = a[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, y = a[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, E = p << 16 | m << 8 | y, v = 0; v < 4 && f + v * 0.75 < l; v++)
                i.push(w.charAt(E >>> 6 * (3 - v) & 63));
            var x = w.charAt(64);
            if (x)
              for (; i.length % 4; )
                i.push(x);
            return i.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(d) {
            var a = d.length, l = this._map, w = this._reverseMap;
            if (!w) {
              w = this._reverseMap = [];
              for (var i = 0; i < l.length; i++)
                w[l.charCodeAt(i)] = i;
            }
            var f = l.charAt(64);
            if (f) {
              var p = d.indexOf(f);
              p !== -1 && (a = p);
            }
            return u(d, a, w);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function u(d, a, l) {
          for (var w = [], i = 0, f = 0; f < a; f++)
            if (f % 4) {
              var p = l[d.charCodeAt(f - 1)] << f % 4 * 2, m = l[d.charCodeAt(f)] >>> 6 - f % 4 * 2, y = p | m;
              w[i >>> 2] |= y << 24 - i % 4 * 8, i++;
            }
          return g.create(w, i);
        }
      }(), n.enc.Base64;
    });
  }(fn)), fn.exports;
}
var xn = { exports: {} }, da;
function Jc() {
  return da || (da = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.WordArray, b = s.enc;
        b.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(d, a) {
            a === void 0 && (a = !0);
            var l = d.words, w = d.sigBytes, i = a ? this._safe_map : this._map;
            d.clamp();
            for (var f = [], p = 0; p < w; p += 3)
              for (var m = l[p >>> 2] >>> 24 - p % 4 * 8 & 255, y = l[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, E = l[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, v = m << 16 | y << 8 | E, x = 0; x < 4 && p + x * 0.75 < w; x++)
                f.push(i.charAt(v >>> 6 * (3 - x) & 63));
            var c = i.charAt(64);
            if (c)
              for (; f.length % 4; )
                f.push(c);
            return f.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(d, a) {
            a === void 0 && (a = !0);
            var l = d.length, w = a ? this._safe_map : this._map, i = this._reverseMap;
            if (!i) {
              i = this._reverseMap = [];
              for (var f = 0; f < w.length; f++)
                i[w.charCodeAt(f)] = f;
            }
            var p = w.charAt(64);
            if (p) {
              var m = d.indexOf(p);
              m !== -1 && (l = m);
            }
            return u(d, l, i);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function u(d, a, l) {
          for (var w = [], i = 0, f = 0; f < a; f++)
            if (f % 4) {
              var p = l[d.charCodeAt(f - 1)] << f % 4 * 2, m = l[d.charCodeAt(f)] >>> 6 - f % 4 * 2, y = p | m;
              w[i >>> 2] |= y << 24 - i % 4 * 8, i++;
            }
          return g.create(w, i);
        }
      }(), n.enc.Base64url;
    });
  }(xn)), xn.exports;
}
var hn = { exports: {} }, ua;
function Mt() {
  return ua || (ua = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function(s) {
        var o = n, g = o.lib, b = g.WordArray, u = g.Hasher, d = o.algo, a = [];
        (function() {
          for (var m = 0; m < 64; m++)
            a[m] = s.abs(s.sin(m + 1)) * 4294967296 | 0;
        })();
        var l = d.MD5 = u.extend({
          _doReset: function() {
            this._hash = new b.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(m, y) {
            for (var E = 0; E < 16; E++) {
              var v = y + E, x = m[v];
              m[v] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360;
            }
            var c = this._hash.words, h = m[y + 0], j = m[y + 1], A = m[y + 2], B = m[y + 3], _ = m[y + 4], C = m[y + 5], N = m[y + 6], D = m[y + 7], k = m[y + 8], S = m[y + 9], R = m[y + 10], L = m[y + 11], H = m[y + 12], V = m[y + 13], Q = m[y + 14], G = m[y + 15], T = c[0], O = c[1], M = c[2], P = c[3];
            T = w(T, O, M, P, h, 7, a[0]), P = w(P, T, O, M, j, 12, a[1]), M = w(M, P, T, O, A, 17, a[2]), O = w(O, M, P, T, B, 22, a[3]), T = w(T, O, M, P, _, 7, a[4]), P = w(P, T, O, M, C, 12, a[5]), M = w(M, P, T, O, N, 17, a[6]), O = w(O, M, P, T, D, 22, a[7]), T = w(T, O, M, P, k, 7, a[8]), P = w(P, T, O, M, S, 12, a[9]), M = w(M, P, T, O, R, 17, a[10]), O = w(O, M, P, T, L, 22, a[11]), T = w(T, O, M, P, H, 7, a[12]), P = w(P, T, O, M, V, 12, a[13]), M = w(M, P, T, O, Q, 17, a[14]), O = w(O, M, P, T, G, 22, a[15]), T = i(T, O, M, P, j, 5, a[16]), P = i(P, T, O, M, N, 9, a[17]), M = i(M, P, T, O, L, 14, a[18]), O = i(O, M, P, T, h, 20, a[19]), T = i(T, O, M, P, C, 5, a[20]), P = i(P, T, O, M, R, 9, a[21]), M = i(M, P, T, O, G, 14, a[22]), O = i(O, M, P, T, _, 20, a[23]), T = i(T, O, M, P, S, 5, a[24]), P = i(P, T, O, M, Q, 9, a[25]), M = i(M, P, T, O, B, 14, a[26]), O = i(O, M, P, T, k, 20, a[27]), T = i(T, O, M, P, V, 5, a[28]), P = i(P, T, O, M, A, 9, a[29]), M = i(M, P, T, O, D, 14, a[30]), O = i(O, M, P, T, H, 20, a[31]), T = f(T, O, M, P, C, 4, a[32]), P = f(P, T, O, M, k, 11, a[33]), M = f(M, P, T, O, L, 16, a[34]), O = f(O, M, P, T, Q, 23, a[35]), T = f(T, O, M, P, j, 4, a[36]), P = f(P, T, O, M, _, 11, a[37]), M = f(M, P, T, O, D, 16, a[38]), O = f(O, M, P, T, R, 23, a[39]), T = f(T, O, M, P, V, 4, a[40]), P = f(P, T, O, M, h, 11, a[41]), M = f(M, P, T, O, B, 16, a[42]), O = f(O, M, P, T, N, 23, a[43]), T = f(T, O, M, P, S, 4, a[44]), P = f(P, T, O, M, H, 11, a[45]), M = f(M, P, T, O, G, 16, a[46]), O = f(O, M, P, T, A, 23, a[47]), T = p(T, O, M, P, h, 6, a[48]), P = p(P, T, O, M, D, 10, a[49]), M = p(M, P, T, O, Q, 15, a[50]), O = p(O, M, P, T, C, 21, a[51]), T = p(T, O, M, P, H, 6, a[52]), P = p(P, T, O, M, B, 10, a[53]), M = p(M, P, T, O, R, 15, a[54]), O = p(O, M, P, T, j, 21, a[55]), T = p(T, O, M, P, k, 6, a[56]), P = p(P, T, O, M, G, 10, a[57]), M = p(M, P, T, O, N, 15, a[58]), O = p(O, M, P, T, V, 21, a[59]), T = p(T, O, M, P, _, 6, a[60]), P = p(P, T, O, M, L, 10, a[61]), M = p(M, P, T, O, A, 15, a[62]), O = p(O, M, P, T, S, 21, a[63]), c[0] = c[0] + T | 0, c[1] = c[1] + O | 0, c[2] = c[2] + M | 0, c[3] = c[3] + P | 0;
          },
          _doFinalize: function() {
            var m = this._data, y = m.words, E = this._nDataBytes * 8, v = m.sigBytes * 8;
            y[v >>> 5] |= 128 << 24 - v % 32;
            var x = s.floor(E / 4294967296), c = E;
            y[(v + 64 >>> 9 << 4) + 15] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, y[(v + 64 >>> 9 << 4) + 14] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, m.sigBytes = (y.length + 1) * 4, this._process();
            for (var h = this._hash, j = h.words, A = 0; A < 4; A++) {
              var B = j[A];
              j[A] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return h;
          },
          clone: function() {
            var m = u.clone.call(this);
            return m._hash = this._hash.clone(), m;
          }
        });
        function w(m, y, E, v, x, c, h) {
          var j = m + (y & E | ~y & v) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        function i(m, y, E, v, x, c, h) {
          var j = m + (y & v | E & ~v) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        function f(m, y, E, v, x, c, h) {
          var j = m + (y ^ E ^ v) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        function p(m, y, E, v, x, c, h) {
          var j = m + (E ^ (y | ~v)) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        o.MD5 = u._createHelper(l), o.HmacMD5 = u._createHmacHelper(l);
      }(Math), n.MD5;
    });
  }(hn)), hn.exports;
}
var pn = { exports: {} }, fa;
function F0() {
  return fa || (fa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.WordArray, b = o.Hasher, u = s.algo, d = [], a = u.SHA1 = b.extend({
          _doReset: function() {
            this._hash = new g.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(l, w) {
            for (var i = this._hash.words, f = i[0], p = i[1], m = i[2], y = i[3], E = i[4], v = 0; v < 80; v++) {
              if (v < 16)
                d[v] = l[w + v] | 0;
              else {
                var x = d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16];
                d[v] = x << 1 | x >>> 31;
              }
              var c = (f << 5 | f >>> 27) + E + d[v];
              v < 20 ? c += (p & m | ~p & y) + 1518500249 : v < 40 ? c += (p ^ m ^ y) + 1859775393 : v < 60 ? c += (p & m | p & y | m & y) - 1894007588 : c += (p ^ m ^ y) - 899497514, E = y, y = m, m = p << 30 | p >>> 2, p = f, f = c;
            }
            i[0] = i[0] + f | 0, i[1] = i[1] + p | 0, i[2] = i[2] + m | 0, i[3] = i[3] + y | 0, i[4] = i[4] + E | 0;
          },
          _doFinalize: function() {
            var l = this._data, w = l.words, i = this._nDataBytes * 8, f = l.sigBytes * 8;
            return w[f >>> 5] |= 128 << 24 - f % 32, w[(f + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296), w[(f + 64 >>> 9 << 4) + 15] = i, l.sigBytes = w.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var l = b.clone.call(this);
            return l._hash = this._hash.clone(), l;
          }
        });
        s.SHA1 = b._createHelper(a), s.HmacSHA1 = b._createHmacHelper(a);
      }(), n.SHA1;
    });
  }(pn)), pn.exports;
}
var mn = { exports: {} }, xa;
function ys() {
  return xa || (xa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      return function(s) {
        var o = n, g = o.lib, b = g.WordArray, u = g.Hasher, d = o.algo, a = [], l = [];
        (function() {
          function f(E) {
            for (var v = s.sqrt(E), x = 2; x <= v; x++)
              if (!(E % x))
                return !1;
            return !0;
          }
          function p(E) {
            return (E - (E | 0)) * 4294967296 | 0;
          }
          for (var m = 2, y = 0; y < 64; )
            f(m) && (y < 8 && (a[y] = p(s.pow(m, 1 / 2))), l[y] = p(s.pow(m, 1 / 3)), y++), m++;
        })();
        var w = [], i = d.SHA256 = u.extend({
          _doReset: function() {
            this._hash = new b.init(a.slice(0));
          },
          _doProcessBlock: function(f, p) {
            for (var m = this._hash.words, y = m[0], E = m[1], v = m[2], x = m[3], c = m[4], h = m[5], j = m[6], A = m[7], B = 0; B < 64; B++) {
              if (B < 16)
                w[B] = f[p + B] | 0;
              else {
                var _ = w[B - 15], C = (_ << 25 | _ >>> 7) ^ (_ << 14 | _ >>> 18) ^ _ >>> 3, N = w[B - 2], D = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                w[B] = C + w[B - 7] + D + w[B - 16];
              }
              var k = c & h ^ ~c & j, S = y & E ^ y & v ^ E & v, R = (y << 30 | y >>> 2) ^ (y << 19 | y >>> 13) ^ (y << 10 | y >>> 22), L = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25), H = A + L + k + l[B] + w[B], V = R + S;
              A = j, j = h, h = c, c = x + H | 0, x = v, v = E, E = y, y = H + V | 0;
            }
            m[0] = m[0] + y | 0, m[1] = m[1] + E | 0, m[2] = m[2] + v | 0, m[3] = m[3] + x | 0, m[4] = m[4] + c | 0, m[5] = m[5] + h | 0, m[6] = m[6] + j | 0, m[7] = m[7] + A | 0;
          },
          _doFinalize: function() {
            var f = this._data, p = f.words, m = this._nDataBytes * 8, y = f.sigBytes * 8;
            return p[y >>> 5] |= 128 << 24 - y % 32, p[(y + 64 >>> 9 << 4) + 14] = s.floor(m / 4294967296), p[(y + 64 >>> 9 << 4) + 15] = m, f.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = u.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        o.SHA256 = u._createHelper(i), o.HmacSHA256 = u._createHmacHelper(i);
      }(Math), n.SHA256;
    });
  }(mn)), mn.exports;
}
var gn = { exports: {} }, ha;
function el() {
  return ha || (ha = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), ys());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.WordArray, b = s.algo, u = b.SHA256, d = b.SHA224 = u.extend({
          _doReset: function() {
            this._hash = new g.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var a = u._doFinalize.call(this);
            return a.sigBytes -= 4, a;
          }
        });
        s.SHA224 = u._createHelper(d), s.HmacSHA224 = u._createHmacHelper(d);
      }(), n.SHA224;
    });
  }(gn)), gn.exports;
}
var yn = { exports: {} }, pa;
function R0() {
  return pa || (pa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Hr());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.Hasher, b = s.x64, u = b.Word, d = b.WordArray, a = s.algo;
        function l() {
          return u.create.apply(u, arguments);
        }
        var w = [
          l(1116352408, 3609767458),
          l(1899447441, 602891725),
          l(3049323471, 3964484399),
          l(3921009573, 2173295548),
          l(961987163, 4081628472),
          l(1508970993, 3053834265),
          l(2453635748, 2937671579),
          l(2870763221, 3664609560),
          l(3624381080, 2734883394),
          l(310598401, 1164996542),
          l(607225278, 1323610764),
          l(1426881987, 3590304994),
          l(1925078388, 4068182383),
          l(2162078206, 991336113),
          l(2614888103, 633803317),
          l(3248222580, 3479774868),
          l(3835390401, 2666613458),
          l(4022224774, 944711139),
          l(264347078, 2341262773),
          l(604807628, 2007800933),
          l(770255983, 1495990901),
          l(1249150122, 1856431235),
          l(1555081692, 3175218132),
          l(1996064986, 2198950837),
          l(2554220882, 3999719339),
          l(2821834349, 766784016),
          l(2952996808, 2566594879),
          l(3210313671, 3203337956),
          l(3336571891, 1034457026),
          l(3584528711, 2466948901),
          l(113926993, 3758326383),
          l(338241895, 168717936),
          l(666307205, 1188179964),
          l(773529912, 1546045734),
          l(1294757372, 1522805485),
          l(1396182291, 2643833823),
          l(1695183700, 2343527390),
          l(1986661051, 1014477480),
          l(2177026350, 1206759142),
          l(2456956037, 344077627),
          l(2730485921, 1290863460),
          l(2820302411, 3158454273),
          l(3259730800, 3505952657),
          l(3345764771, 106217008),
          l(3516065817, 3606008344),
          l(3600352804, 1432725776),
          l(4094571909, 1467031594),
          l(275423344, 851169720),
          l(430227734, 3100823752),
          l(506948616, 1363258195),
          l(659060556, 3750685593),
          l(883997877, 3785050280),
          l(958139571, 3318307427),
          l(1322822218, 3812723403),
          l(1537002063, 2003034995),
          l(1747873779, 3602036899),
          l(1955562222, 1575990012),
          l(2024104815, 1125592928),
          l(2227730452, 2716904306),
          l(2361852424, 442776044),
          l(2428436474, 593698344),
          l(2756734187, 3733110249),
          l(3204031479, 2999351573),
          l(3329325298, 3815920427),
          l(3391569614, 3928383900),
          l(3515267271, 566280711),
          l(3940187606, 3454069534),
          l(4118630271, 4000239992),
          l(116418474, 1914138554),
          l(174292421, 2731055270),
          l(289380356, 3203993006),
          l(460393269, 320620315),
          l(685471733, 587496836),
          l(852142971, 1086792851),
          l(1017036298, 365543100),
          l(1126000580, 2618297676),
          l(1288033470, 3409855158),
          l(1501505948, 4234509866),
          l(1607167915, 987167468),
          l(1816402316, 1246189591)
        ], i = [];
        (function() {
          for (var p = 0; p < 80; p++)
            i[p] = l();
        })();
        var f = a.SHA512 = g.extend({
          _doReset: function() {
            this._hash = new d.init([
              new u.init(1779033703, 4089235720),
              new u.init(3144134277, 2227873595),
              new u.init(1013904242, 4271175723),
              new u.init(2773480762, 1595750129),
              new u.init(1359893119, 2917565137),
              new u.init(2600822924, 725511199),
              new u.init(528734635, 4215389547),
              new u.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(p, m) {
            for (var y = this._hash.words, E = y[0], v = y[1], x = y[2], c = y[3], h = y[4], j = y[5], A = y[6], B = y[7], _ = E.high, C = E.low, N = v.high, D = v.low, k = x.high, S = x.low, R = c.high, L = c.low, H = h.high, V = h.low, Q = j.high, G = j.low, T = A.high, O = A.low, M = B.high, P = B.low, Y = _, ie = C, ce = N, re = D, ge = k, me = S, ae = R, J = L, De = H, Ee = V, Be = Q, Z = G, fe = T, le = O, I = M, ne = P, oe = 0; oe < 80; oe++) {
              var ee, ke, je = i[oe];
              if (oe < 16)
                ke = je.high = p[m + oe * 2] | 0, ee = je.low = p[m + oe * 2 + 1] | 0;
              else {
                var $e = i[oe - 15], Pe = $e.high, Ue = $e.low, xt = (Pe >>> 1 | Ue << 31) ^ (Pe >>> 8 | Ue << 24) ^ Pe >>> 7, it = (Ue >>> 1 | Pe << 31) ^ (Ue >>> 8 | Pe << 24) ^ (Ue >>> 7 | Pe << 25), ht = i[oe - 2], Ye = ht.high, Ge = ht.low, pt = (Ye >>> 19 | Ge << 13) ^ (Ye << 3 | Ge >>> 29) ^ Ye >>> 6, mt = (Ge >>> 19 | Ye << 13) ^ (Ge << 3 | Ye >>> 29) ^ (Ge >>> 6 | Ye << 26), z = i[oe - 7], q = z.high, $ = z.low, W = i[oe - 16], se = W.high, Oe = W.low;
                ee = it + $, ke = xt + q + (ee >>> 0 < it >>> 0 ? 1 : 0), ee = ee + mt, ke = ke + pt + (ee >>> 0 < mt >>> 0 ? 1 : 0), ee = ee + Oe, ke = ke + se + (ee >>> 0 < Oe >>> 0 ? 1 : 0), je.high = ke, je.low = ee;
              }
              var Ie = De & Be ^ ~De & fe, rt = Ee & Z ^ ~Ee & le, nt = Y & ce ^ Y & ge ^ ce & ge, vt = ie & re ^ ie & me ^ re & me, ye = (Y >>> 28 | ie << 4) ^ (Y << 30 | ie >>> 2) ^ (Y << 25 | ie >>> 7), ct = (ie >>> 28 | Y << 4) ^ (ie << 30 | Y >>> 2) ^ (ie << 25 | Y >>> 7), Lt = (De >>> 14 | Ee << 18) ^ (De >>> 18 | Ee << 14) ^ (De << 23 | Ee >>> 9), At = (Ee >>> 14 | De << 18) ^ (Ee >>> 18 | De << 14) ^ (Ee << 23 | De >>> 9), bt = w[oe], zt = bt.high, _t = bt.low, ze = ne + At, Xe = I + Lt + (ze >>> 0 < ne >>> 0 ? 1 : 0), ze = ze + rt, Xe = Xe + Ie + (ze >>> 0 < rt >>> 0 ? 1 : 0), ze = ze + _t, Xe = Xe + zt + (ze >>> 0 < _t >>> 0 ? 1 : 0), ze = ze + ee, Xe = Xe + ke + (ze >>> 0 < ee >>> 0 ? 1 : 0), U = ct + vt, xe = ye + nt + (U >>> 0 < ct >>> 0 ? 1 : 0);
              I = fe, ne = le, fe = Be, le = Z, Be = De, Z = Ee, Ee = J + ze | 0, De = ae + Xe + (Ee >>> 0 < J >>> 0 ? 1 : 0) | 0, ae = ge, J = me, ge = ce, me = re, ce = Y, re = ie, ie = ze + U | 0, Y = Xe + xe + (ie >>> 0 < ze >>> 0 ? 1 : 0) | 0;
            }
            C = E.low = C + ie, E.high = _ + Y + (C >>> 0 < ie >>> 0 ? 1 : 0), D = v.low = D + re, v.high = N + ce + (D >>> 0 < re >>> 0 ? 1 : 0), S = x.low = S + me, x.high = k + ge + (S >>> 0 < me >>> 0 ? 1 : 0), L = c.low = L + J, c.high = R + ae + (L >>> 0 < J >>> 0 ? 1 : 0), V = h.low = V + Ee, h.high = H + De + (V >>> 0 < Ee >>> 0 ? 1 : 0), G = j.low = G + Z, j.high = Q + Be + (G >>> 0 < Z >>> 0 ? 1 : 0), O = A.low = O + le, A.high = T + fe + (O >>> 0 < le >>> 0 ? 1 : 0), P = B.low = P + ne, B.high = M + I + (P >>> 0 < ne >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, m = p.words, y = this._nDataBytes * 8, E = p.sigBytes * 8;
            m[E >>> 5] |= 128 << 24 - E % 32, m[(E + 128 >>> 10 << 5) + 30] = Math.floor(y / 4294967296), m[(E + 128 >>> 10 << 5) + 31] = y, p.sigBytes = m.length * 4, this._process();
            var v = this._hash.toX32();
            return v;
          },
          clone: function() {
            var p = g.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        s.SHA512 = g._createHelper(f), s.HmacSHA512 = g._createHmacHelper(f);
      }(), n.SHA512;
    });
  }(yn)), yn.exports;
}
var vn = { exports: {} }, ma;
function tl() {
  return ma || (ma = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Hr(), R0());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.x64, g = o.Word, b = o.WordArray, u = s.algo, d = u.SHA512, a = u.SHA384 = d.extend({
          _doReset: function() {
            this._hash = new b.init([
              new g.init(3418070365, 3238371032),
              new g.init(1654270250, 914150663),
              new g.init(2438529370, 812702999),
              new g.init(355462360, 4144912697),
              new g.init(1731405415, 4290775857),
              new g.init(2394180231, 1750603025),
              new g.init(3675008525, 1694076839),
              new g.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var l = d._doFinalize.call(this);
            return l.sigBytes -= 16, l;
          }
        });
        s.SHA384 = d._createHelper(a), s.HmacSHA384 = d._createHmacHelper(a);
      }(), n.SHA384;
    });
  }(vn)), vn.exports;
}
var bn = { exports: {} }, ga;
function rl() {
  return ga || (ga = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Hr());
    })(Ce, function(n) {
      return function(s) {
        var o = n, g = o.lib, b = g.WordArray, u = g.Hasher, d = o.x64, a = d.Word, l = o.algo, w = [], i = [], f = [];
        (function() {
          for (var y = 1, E = 0, v = 0; v < 24; v++) {
            w[y + 5 * E] = (v + 1) * (v + 2) / 2 % 64;
            var x = E % 5, c = (2 * y + 3 * E) % 5;
            y = x, E = c;
          }
          for (var y = 0; y < 5; y++)
            for (var E = 0; E < 5; E++)
              i[y + 5 * E] = E + (2 * y + 3 * E) % 5 * 5;
          for (var h = 1, j = 0; j < 24; j++) {
            for (var A = 0, B = 0, _ = 0; _ < 7; _++) {
              if (h & 1) {
                var C = (1 << _) - 1;
                C < 32 ? B ^= 1 << C : A ^= 1 << C - 32;
              }
              h & 128 ? h = h << 1 ^ 113 : h <<= 1;
            }
            f[j] = a.create(A, B);
          }
        })();
        var p = [];
        (function() {
          for (var y = 0; y < 25; y++)
            p[y] = a.create();
        })();
        var m = l.SHA3 = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: u.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var y = this._state = [], E = 0; E < 25; E++)
              y[E] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(y, E) {
            for (var v = this._state, x = this.blockSize / 2, c = 0; c < x; c++) {
              var h = y[E + 2 * c], j = y[E + 2 * c + 1];
              h = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, j = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
              var A = v[c];
              A.high ^= j, A.low ^= h;
            }
            for (var B = 0; B < 24; B++) {
              for (var _ = 0; _ < 5; _++) {
                for (var C = 0, N = 0, D = 0; D < 5; D++) {
                  var A = v[_ + 5 * D];
                  C ^= A.high, N ^= A.low;
                }
                var k = p[_];
                k.high = C, k.low = N;
              }
              for (var _ = 0; _ < 5; _++)
                for (var S = p[(_ + 4) % 5], R = p[(_ + 1) % 5], L = R.high, H = R.low, C = S.high ^ (L << 1 | H >>> 31), N = S.low ^ (H << 1 | L >>> 31), D = 0; D < 5; D++) {
                  var A = v[_ + 5 * D];
                  A.high ^= C, A.low ^= N;
                }
              for (var V = 1; V < 25; V++) {
                var C, N, A = v[V], Q = A.high, G = A.low, T = w[V];
                T < 32 ? (C = Q << T | G >>> 32 - T, N = G << T | Q >>> 32 - T) : (C = G << T - 32 | Q >>> 64 - T, N = Q << T - 32 | G >>> 64 - T);
                var O = p[i[V]];
                O.high = C, O.low = N;
              }
              var M = p[0], P = v[0];
              M.high = P.high, M.low = P.low;
              for (var _ = 0; _ < 5; _++)
                for (var D = 0; D < 5; D++) {
                  var V = _ + 5 * D, A = v[V], Y = p[V], ie = p[(_ + 1) % 5 + 5 * D], ce = p[(_ + 2) % 5 + 5 * D];
                  A.high = Y.high ^ ~ie.high & ce.high, A.low = Y.low ^ ~ie.low & ce.low;
                }
              var A = v[0], re = f[B];
              A.high ^= re.high, A.low ^= re.low;
            }
          },
          _doFinalize: function() {
            var y = this._data, E = y.words;
            this._nDataBytes * 8;
            var v = y.sigBytes * 8, x = this.blockSize * 32;
            E[v >>> 5] |= 1 << 24 - v % 32, E[(s.ceil((v + 1) / x) * x >>> 5) - 1] |= 128, y.sigBytes = E.length * 4, this._process();
            for (var c = this._state, h = this.cfg.outputLength / 8, j = h / 8, A = [], B = 0; B < j; B++) {
              var _ = c[B], C = _.high, N = _.low;
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, A.push(N), A.push(C);
            }
            return new b.init(A, h);
          },
          clone: function() {
            for (var y = u.clone.call(this), E = y._state = this._state.slice(0), v = 0; v < 25; v++)
              E[v] = E[v].clone();
            return y;
          }
        });
        o.SHA3 = u._createHelper(m), o.HmacSHA3 = u._createHmacHelper(m);
      }(Math), n.SHA3;
    });
  }(bn)), bn.exports;
}
var wn = { exports: {} }, ya;
function nl() {
  return ya || (ya = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(s) {
        var o = n, g = o.lib, b = g.WordArray, u = g.Hasher, d = o.algo, a = b.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), l = b.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), w = b.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), i = b.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), f = b.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = b.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), m = d.RIPEMD160 = u.extend({
          _doReset: function() {
            this._hash = b.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(j, A) {
            for (var B = 0; B < 16; B++) {
              var _ = A + B, C = j[_];
              j[_] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var N = this._hash.words, D = f.words, k = p.words, S = a.words, R = l.words, L = w.words, H = i.words, V, Q, G, T, O, M, P, Y, ie, ce;
            M = V = N[0], P = Q = N[1], Y = G = N[2], ie = T = N[3], ce = O = N[4];
            for (var re, B = 0; B < 80; B += 1)
              re = V + j[A + S[B]] | 0, B < 16 ? re += y(Q, G, T) + D[0] : B < 32 ? re += E(Q, G, T) + D[1] : B < 48 ? re += v(Q, G, T) + D[2] : B < 64 ? re += x(Q, G, T) + D[3] : re += c(Q, G, T) + D[4], re = re | 0, re = h(re, L[B]), re = re + O | 0, V = O, O = T, T = h(G, 10), G = Q, Q = re, re = M + j[A + R[B]] | 0, B < 16 ? re += c(P, Y, ie) + k[0] : B < 32 ? re += x(P, Y, ie) + k[1] : B < 48 ? re += v(P, Y, ie) + k[2] : B < 64 ? re += E(P, Y, ie) + k[3] : re += y(P, Y, ie) + k[4], re = re | 0, re = h(re, H[B]), re = re + ce | 0, M = ce, ce = ie, ie = h(Y, 10), Y = P, P = re;
            re = N[1] + G + ie | 0, N[1] = N[2] + T + ce | 0, N[2] = N[3] + O + M | 0, N[3] = N[4] + V + P | 0, N[4] = N[0] + Q + Y | 0, N[0] = re;
          },
          _doFinalize: function() {
            var j = this._data, A = j.words, B = this._nDataBytes * 8, _ = j.sigBytes * 8;
            A[_ >>> 5] |= 128 << 24 - _ % 32, A[(_ + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, j.sigBytes = (A.length + 1) * 4, this._process();
            for (var C = this._hash, N = C.words, D = 0; D < 5; D++) {
              var k = N[D];
              N[D] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var j = u.clone.call(this);
            return j._hash = this._hash.clone(), j;
          }
        });
        function y(j, A, B) {
          return j ^ A ^ B;
        }
        function E(j, A, B) {
          return j & A | ~j & B;
        }
        function v(j, A, B) {
          return (j | ~A) ^ B;
        }
        function x(j, A, B) {
          return j & B | A & ~B;
        }
        function c(j, A, B) {
          return j ^ (A | ~B);
        }
        function h(j, A) {
          return j << A | j >>> 32 - A;
        }
        o.RIPEMD160 = u._createHelper(m), o.HmacRIPEMD160 = u._createHmacHelper(m);
      }(), n.RIPEMD160;
    });
  }(wn)), wn.exports;
}
var Cn = { exports: {} }, va;
function vs() {
  return va || (va = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(Ce, function(n) {
      (function() {
        var s = n, o = s.lib, g = o.Base, b = s.enc, u = b.Utf8, d = s.algo;
        d.HMAC = g.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(a, l) {
            a = this._hasher = new a.init(), typeof l == "string" && (l = u.parse(l));
            var w = a.blockSize, i = w * 4;
            l.sigBytes > i && (l = a.finalize(l)), l.clamp();
            for (var f = this._oKey = l.clone(), p = this._iKey = l.clone(), m = f.words, y = p.words, E = 0; E < w; E++)
              m[E] ^= 1549556828, y[E] ^= 909522486;
            f.sigBytes = p.sigBytes = i, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var a = this._hasher;
            a.reset(), a.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(a) {
            return this._hasher.update(a), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(a) {
            var l = this._hasher, w = l.finalize(a);
            l.reset();
            var i = l.finalize(this._oKey.clone().concat(w));
            return i;
          }
        });
      })();
    });
  }(Cn)), Cn.exports;
}
var En = { exports: {} }, ba;
function sl() {
  return ba || (ba = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), ys(), vs());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.Base, b = o.WordArray, u = s.algo, d = u.SHA256, a = u.HMAC, l = u.PBKDF2 = g.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: g.extend({
            keySize: 128 / 32,
            hasher: d,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(w) {
            this.cfg = this.cfg.extend(w);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(w, i) {
            for (var f = this.cfg, p = a.create(f.hasher, w), m = b.create(), y = b.create([1]), E = m.words, v = y.words, x = f.keySize, c = f.iterations; E.length < x; ) {
              var h = p.update(i).finalize(y);
              p.reset();
              for (var j = h.words, A = j.length, B = h, _ = 1; _ < c; _++) {
                B = p.finalize(B), p.reset();
                for (var C = B.words, N = 0; N < A; N++)
                  j[N] ^= C[N];
              }
              m.concat(h), v[0]++;
            }
            return m.sigBytes = x * 4, m;
          }
        });
        s.PBKDF2 = function(w, i, f) {
          return l.create(f).compute(w, i);
        };
      }(), n.PBKDF2;
    });
  }(En)), En.exports;
}
var jn = { exports: {} }, wa;
function Nt() {
  return wa || (wa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), F0(), vs());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.Base, b = o.WordArray, u = s.algo, d = u.MD5, a = u.EvpKDF = g.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: g.extend({
            keySize: 128 / 32,
            hasher: d,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(l, w) {
            for (var i, f = this.cfg, p = f.hasher.create(), m = b.create(), y = m.words, E = f.keySize, v = f.iterations; y.length < E; ) {
              i && p.update(i), i = p.update(l).finalize(w), p.reset();
              for (var x = 1; x < v; x++)
                i = p.finalize(i), p.reset();
              m.concat(i);
            }
            return m.sigBytes = E * 4, m;
          }
        });
        s.EvpKDF = function(l, w, i) {
          return a.create(i).compute(l, w);
        };
      }(), n.EvpKDF;
    });
  }(jn)), jn.exports;
}
var Nn = { exports: {} }, Ca;
function He() {
  return Ca || (Ca = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Nt());
    })(Ce, function(n) {
      n.lib.Cipher || function(s) {
        var o = n, g = o.lib, b = g.Base, u = g.WordArray, d = g.BufferedBlockAlgorithm, a = o.enc;
        a.Utf8;
        var l = a.Base64, w = o.algo, i = w.EvpKDF, f = g.Cipher = d.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: b.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(C, N) {
            return this.create(this._ENC_XFORM_MODE, C, N);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(C, N) {
            return this.create(this._DEC_XFORM_MODE, C, N);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(C, N, D) {
            this.cfg = this.cfg.extend(D), this._xformMode = C, this._key = N, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            d.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(C) {
            return this._append(C), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(C) {
            C && this._append(C);
            var N = this._doFinalize();
            return N;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function C(N) {
              return typeof N == "string" ? _ : j;
            }
            return function(N) {
              return {
                encrypt: function(D, k, S) {
                  return C(k).encrypt(N, D, k, S);
                },
                decrypt: function(D, k, S) {
                  return C(k).decrypt(N, D, k, S);
                }
              };
            };
          }()
        });
        g.StreamCipher = f.extend({
          _doFinalize: function() {
            var C = this._process(!0);
            return C;
          },
          blockSize: 1
        });
        var p = o.mode = {}, m = g.BlockCipherMode = b.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(C, N) {
            return this.Encryptor.create(C, N);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(C, N) {
            return this.Decryptor.create(C, N);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(C, N) {
            this._cipher = C, this._iv = N;
          }
        }), y = p.CBC = function() {
          var C = m.extend();
          C.Encryptor = C.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(D, k) {
              var S = this._cipher, R = S.blockSize;
              N.call(this, D, k, R), S.encryptBlock(D, k), this._prevBlock = D.slice(k, k + R);
            }
          }), C.Decryptor = C.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(D, k) {
              var S = this._cipher, R = S.blockSize, L = D.slice(k, k + R);
              S.decryptBlock(D, k), N.call(this, D, k, R), this._prevBlock = L;
            }
          });
          function N(D, k, S) {
            var R, L = this._iv;
            L ? (R = L, this._iv = s) : R = this._prevBlock;
            for (var H = 0; H < S; H++)
              D[k + H] ^= R[H];
          }
          return C;
        }(), E = o.pad = {}, v = E.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(C, N) {
            for (var D = N * 4, k = D - C.sigBytes % D, S = k << 24 | k << 16 | k << 8 | k, R = [], L = 0; L < k; L += 4)
              R.push(S);
            var H = u.create(R, k);
            C.concat(H);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(C) {
            var N = C.words[C.sigBytes - 1 >>> 2] & 255;
            C.sigBytes -= N;
          }
        };
        g.BlockCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: f.cfg.extend({
            mode: y,
            padding: v
          }),
          reset: function() {
            var C;
            f.reset.call(this);
            var N = this.cfg, D = N.iv, k = N.mode;
            this._xformMode == this._ENC_XFORM_MODE ? C = k.createEncryptor : (C = k.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, D && D.words) : (this._mode = C.call(k, this, D && D.words), this._mode.__creator = C);
          },
          _doProcessBlock: function(C, N) {
            this._mode.processBlock(C, N);
          },
          _doFinalize: function() {
            var C, N = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (N.pad(this._data, this.blockSize), C = this._process(!0)) : (C = this._process(!0), N.unpad(C)), C;
          },
          blockSize: 128 / 32
        });
        var x = g.CipherParams = b.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(C) {
            this.mixIn(C);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(C) {
            return (C || this.formatter).stringify(this);
          }
        }), c = o.format = {}, h = c.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(C) {
            var N, D = C.ciphertext, k = C.salt;
            return k ? N = u.create([1398893684, 1701076831]).concat(k).concat(D) : N = D, N.toString(l);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(C) {
            var N, D = l.parse(C), k = D.words;
            return k[0] == 1398893684 && k[1] == 1701076831 && (N = u.create(k.slice(2, 4)), k.splice(0, 4), D.sigBytes -= 16), x.create({ ciphertext: D, salt: N });
          }
        }, j = g.SerializableCipher = b.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: b.extend({
            format: h
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(C, N, D, k) {
            k = this.cfg.extend(k);
            var S = C.createEncryptor(D, k), R = S.finalize(N), L = S.cfg;
            return x.create({
              ciphertext: R,
              key: D,
              iv: L.iv,
              algorithm: C,
              mode: L.mode,
              padding: L.padding,
              blockSize: C.blockSize,
              formatter: k.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(C, N, D, k) {
            k = this.cfg.extend(k), N = this._parse(N, k.format);
            var S = C.createDecryptor(D, k).finalize(N.ciphertext);
            return S;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(C, N) {
            return typeof C == "string" ? N.parse(C, this) : C;
          }
        }), A = o.kdf = {}, B = A.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(C, N, D, k, S) {
            if (k || (k = u.random(64 / 8)), S)
              var R = i.create({ keySize: N + D, hasher: S }).compute(C, k);
            else
              var R = i.create({ keySize: N + D }).compute(C, k);
            var L = u.create(R.words.slice(N), D * 4);
            return R.sigBytes = N * 4, x.create({ key: R, iv: L, salt: k });
          }
        }, _ = g.PasswordBasedCipher = j.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: j.cfg.extend({
            kdf: B
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(C, N, D, k) {
            k = this.cfg.extend(k);
            var S = k.kdf.execute(D, C.keySize, C.ivSize, k.salt, k.hasher);
            k.iv = S.iv;
            var R = j.encrypt.call(this, C, N, S.key, k);
            return R.mixIn(S), R;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(C, N, D, k) {
            k = this.cfg.extend(k), N = this._parse(N, k.format);
            var S = k.kdf.execute(D, C.keySize, C.ivSize, N.salt, k.hasher);
            k.iv = S.iv;
            var R = j.decrypt.call(this, C, N, S.key, k);
            return R;
          }
        });
      }();
    });
  }(Nn)), Nn.exports;
}
var An = { exports: {} }, Ea;
function al() {
  return Ea || (Ea = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.mode.CFB = function() {
        var s = n.lib.BlockCipherMode.extend();
        s.Encryptor = s.extend({
          processBlock: function(g, b) {
            var u = this._cipher, d = u.blockSize;
            o.call(this, g, b, d, u), this._prevBlock = g.slice(b, b + d);
          }
        }), s.Decryptor = s.extend({
          processBlock: function(g, b) {
            var u = this._cipher, d = u.blockSize, a = g.slice(b, b + d);
            o.call(this, g, b, d, u), this._prevBlock = a;
          }
        });
        function o(g, b, u, d) {
          var a, l = this._iv;
          l ? (a = l.slice(0), this._iv = void 0) : a = this._prevBlock, d.encryptBlock(a, 0);
          for (var w = 0; w < u; w++)
            g[b + w] ^= a[w];
        }
        return s;
      }(), n.mode.CFB;
    });
  }(An)), An.exports;
}
var _n = { exports: {} }, ja;
function ol() {
  return ja || (ja = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.mode.CTR = function() {
        var s = n.lib.BlockCipherMode.extend(), o = s.Encryptor = s.extend({
          processBlock: function(g, b) {
            var u = this._cipher, d = u.blockSize, a = this._iv, l = this._counter;
            a && (l = this._counter = a.slice(0), this._iv = void 0);
            var w = l.slice(0);
            u.encryptBlock(w, 0), l[d - 1] = l[d - 1] + 1 | 0;
            for (var i = 0; i < d; i++)
              g[b + i] ^= w[i];
          }
        });
        return s.Decryptor = o, s;
      }(), n.mode.CTR;
    });
  }(_n)), _n.exports;
}
var kn = { exports: {} }, Na;
function il() {
  return Na || (Na = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var s = n.lib.BlockCipherMode.extend();
        function o(u) {
          if ((u >> 24 & 255) === 255) {
            var d = u >> 16 & 255, a = u >> 8 & 255, l = u & 255;
            d === 255 ? (d = 0, a === 255 ? (a = 0, l === 255 ? l = 0 : ++l) : ++a) : ++d, u = 0, u += d << 16, u += a << 8, u += l;
          } else
            u += 1 << 24;
          return u;
        }
        function g(u) {
          return (u[0] = o(u[0])) === 0 && (u[1] = o(u[1])), u;
        }
        var b = s.Encryptor = s.extend({
          processBlock: function(u, d) {
            var a = this._cipher, l = a.blockSize, w = this._iv, i = this._counter;
            w && (i = this._counter = w.slice(0), this._iv = void 0), g(i);
            var f = i.slice(0);
            a.encryptBlock(f, 0);
            for (var p = 0; p < l; p++)
              u[d + p] ^= f[p];
          }
        });
        return s.Decryptor = b, s;
      }(), n.mode.CTRGladman;
    });
  }(kn)), kn.exports;
}
var Dn = { exports: {} }, Aa;
function cl() {
  return Aa || (Aa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.mode.OFB = function() {
        var s = n.lib.BlockCipherMode.extend(), o = s.Encryptor = s.extend({
          processBlock: function(g, b) {
            var u = this._cipher, d = u.blockSize, a = this._iv, l = this._keystream;
            a && (l = this._keystream = a.slice(0), this._iv = void 0), u.encryptBlock(l, 0);
            for (var w = 0; w < d; w++)
              g[b + w] ^= l[w];
          }
        });
        return s.Decryptor = o, s;
      }(), n.mode.OFB;
    });
  }(Dn)), Dn.exports;
}
var Bn = { exports: {} }, _a;
function ll() {
  return _a || (_a = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.mode.ECB = function() {
        var s = n.lib.BlockCipherMode.extend();
        return s.Encryptor = s.extend({
          processBlock: function(o, g) {
            this._cipher.encryptBlock(o, g);
          }
        }), s.Decryptor = s.extend({
          processBlock: function(o, g) {
            this._cipher.decryptBlock(o, g);
          }
        }), s;
      }(), n.mode.ECB;
    });
  }(Bn)), Bn.exports;
}
var Sn = { exports: {} }, ka;
function dl() {
  return ka || (ka = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(s, o) {
          var g = s.sigBytes, b = o * 4, u = b - g % b, d = g + u - 1;
          s.clamp(), s.words[d >>> 2] |= u << 24 - d % 4 * 8, s.sigBytes += u;
        },
        unpad: function(s) {
          var o = s.words[s.sigBytes - 1 >>> 2] & 255;
          s.sigBytes -= o;
        }
      }, n.pad.Ansix923;
    });
  }(Sn)), Sn.exports;
}
var Fn = { exports: {} }, Da;
function ul() {
  return Da || (Da = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.pad.Iso10126 = {
        pad: function(s, o) {
          var g = o * 4, b = g - s.sigBytes % g;
          s.concat(n.lib.WordArray.random(b - 1)).concat(n.lib.WordArray.create([b << 24], 1));
        },
        unpad: function(s) {
          var o = s.words[s.sigBytes - 1 >>> 2] & 255;
          s.sigBytes -= o;
        }
      }, n.pad.Iso10126;
    });
  }(Fn)), Fn.exports;
}
var Rn = { exports: {} }, Ba;
function fl() {
  return Ba || (Ba = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.pad.Iso97971 = {
        pad: function(s, o) {
          s.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(s, o);
        },
        unpad: function(s) {
          n.pad.ZeroPadding.unpad(s), s.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(Rn)), Rn.exports;
}
var Tn = { exports: {} }, Sa;
function xl() {
  return Sa || (Sa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.pad.ZeroPadding = {
        pad: function(s, o) {
          var g = o * 4;
          s.clamp(), s.sigBytes += g - (s.sigBytes % g || g);
        },
        unpad: function(s) {
          for (var o = s.words, g = s.sigBytes - 1, g = s.sigBytes - 1; g >= 0; g--)
            if (o[g >>> 2] >>> 24 - g % 4 * 8 & 255) {
              s.sigBytes = g + 1;
              break;
            }
        }
      }, n.pad.ZeroPadding;
    });
  }(Tn)), Tn.exports;
}
var On = { exports: {} }, Fa;
function hl() {
  return Fa || (Fa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(On)), On.exports;
}
var Pn = { exports: {} }, Ra;
function pl() {
  return Ra || (Ra = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), He());
    })(Ce, function(n) {
      return function(s) {
        var o = n, g = o.lib, b = g.CipherParams, u = o.enc, d = u.Hex, a = o.format;
        a.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(l) {
            return l.ciphertext.toString(d);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(l) {
            var w = d.parse(l);
            return b.create({ ciphertext: w });
          }
        };
      }(), n.format.Hex;
    });
  }(Pn)), Pn.exports;
}
var In = { exports: {} }, Ta;
function ml() {
  return Ta || (Ta = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), It(), Mt(), Nt(), He());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.BlockCipher, b = s.algo, u = [], d = [], a = [], l = [], w = [], i = [], f = [], p = [], m = [], y = [];
        (function() {
          for (var x = [], c = 0; c < 256; c++)
            c < 128 ? x[c] = c << 1 : x[c] = c << 1 ^ 283;
          for (var h = 0, j = 0, c = 0; c < 256; c++) {
            var A = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4;
            A = A >>> 8 ^ A & 255 ^ 99, u[h] = A, d[A] = h;
            var B = x[h], _ = x[B], C = x[_], N = x[A] * 257 ^ A * 16843008;
            a[h] = N << 24 | N >>> 8, l[h] = N << 16 | N >>> 16, w[h] = N << 8 | N >>> 24, i[h] = N;
            var N = C * 16843009 ^ _ * 65537 ^ B * 257 ^ h * 16843008;
            f[A] = N << 24 | N >>> 8, p[A] = N << 16 | N >>> 16, m[A] = N << 8 | N >>> 24, y[A] = N, h ? (h = B ^ x[x[x[C ^ B]]], j ^= x[x[j]]) : h = j = 1;
          }
        })();
        var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], v = b.AES = g.extend({
          _doReset: function() {
            var x;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var c = this._keyPriorReset = this._key, h = c.words, j = c.sigBytes / 4, A = this._nRounds = j + 6, B = (A + 1) * 4, _ = this._keySchedule = [], C = 0; C < B; C++)
                C < j ? _[C] = h[C] : (x = _[C - 1], C % j ? j > 6 && C % j == 4 && (x = u[x >>> 24] << 24 | u[x >>> 16 & 255] << 16 | u[x >>> 8 & 255] << 8 | u[x & 255]) : (x = x << 8 | x >>> 24, x = u[x >>> 24] << 24 | u[x >>> 16 & 255] << 16 | u[x >>> 8 & 255] << 8 | u[x & 255], x ^= E[C / j | 0] << 24), _[C] = _[C - j] ^ x);
              for (var N = this._invKeySchedule = [], D = 0; D < B; D++) {
                var C = B - D;
                if (D % 4)
                  var x = _[C];
                else
                  var x = _[C - 4];
                D < 4 || C <= 4 ? N[D] = x : N[D] = f[u[x >>> 24]] ^ p[u[x >>> 16 & 255]] ^ m[u[x >>> 8 & 255]] ^ y[u[x & 255]];
              }
            }
          },
          encryptBlock: function(x, c) {
            this._doCryptBlock(x, c, this._keySchedule, a, l, w, i, u);
          },
          decryptBlock: function(x, c) {
            var h = x[c + 1];
            x[c + 1] = x[c + 3], x[c + 3] = h, this._doCryptBlock(x, c, this._invKeySchedule, f, p, m, y, d);
            var h = x[c + 1];
            x[c + 1] = x[c + 3], x[c + 3] = h;
          },
          _doCryptBlock: function(x, c, h, j, A, B, _, C) {
            for (var N = this._nRounds, D = x[c] ^ h[0], k = x[c + 1] ^ h[1], S = x[c + 2] ^ h[2], R = x[c + 3] ^ h[3], L = 4, H = 1; H < N; H++) {
              var V = j[D >>> 24] ^ A[k >>> 16 & 255] ^ B[S >>> 8 & 255] ^ _[R & 255] ^ h[L++], Q = j[k >>> 24] ^ A[S >>> 16 & 255] ^ B[R >>> 8 & 255] ^ _[D & 255] ^ h[L++], G = j[S >>> 24] ^ A[R >>> 16 & 255] ^ B[D >>> 8 & 255] ^ _[k & 255] ^ h[L++], T = j[R >>> 24] ^ A[D >>> 16 & 255] ^ B[k >>> 8 & 255] ^ _[S & 255] ^ h[L++];
              D = V, k = Q, S = G, R = T;
            }
            var V = (C[D >>> 24] << 24 | C[k >>> 16 & 255] << 16 | C[S >>> 8 & 255] << 8 | C[R & 255]) ^ h[L++], Q = (C[k >>> 24] << 24 | C[S >>> 16 & 255] << 16 | C[R >>> 8 & 255] << 8 | C[D & 255]) ^ h[L++], G = (C[S >>> 24] << 24 | C[R >>> 16 & 255] << 16 | C[D >>> 8 & 255] << 8 | C[k & 255]) ^ h[L++], T = (C[R >>> 24] << 24 | C[D >>> 16 & 255] << 16 | C[k >>> 8 & 255] << 8 | C[S & 255]) ^ h[L++];
            x[c] = V, x[c + 1] = Q, x[c + 2] = G, x[c + 3] = T;
          },
          keySize: 256 / 32
        });
        s.AES = g._createHelper(v);
      }(), n.AES;
    });
  }(In)), In.exports;
}
var Mn = { exports: {} }, Oa;
function gl() {
  return Oa || (Oa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), It(), Mt(), Nt(), He());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.WordArray, b = o.BlockCipher, u = s.algo, d = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], a = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], w = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], i = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], f = u.DES = b.extend({
          _doReset: function() {
            for (var E = this._key, v = E.words, x = [], c = 0; c < 56; c++) {
              var h = d[c] - 1;
              x[c] = v[h >>> 5] >>> 31 - h % 32 & 1;
            }
            for (var j = this._subKeys = [], A = 0; A < 16; A++) {
              for (var B = j[A] = [], _ = l[A], c = 0; c < 24; c++)
                B[c / 6 | 0] |= x[(a[c] - 1 + _) % 28] << 31 - c % 6, B[4 + (c / 6 | 0)] |= x[28 + (a[c + 24] - 1 + _) % 28] << 31 - c % 6;
              B[0] = B[0] << 1 | B[0] >>> 31;
              for (var c = 1; c < 7; c++)
                B[c] = B[c] >>> (c - 1) * 4 + 3;
              B[7] = B[7] << 5 | B[7] >>> 27;
            }
            for (var C = this._invSubKeys = [], c = 0; c < 16; c++)
              C[c] = j[15 - c];
          },
          encryptBlock: function(E, v) {
            this._doCryptBlock(E, v, this._subKeys);
          },
          decryptBlock: function(E, v) {
            this._doCryptBlock(E, v, this._invSubKeys);
          },
          _doCryptBlock: function(E, v, x) {
            this._lBlock = E[v], this._rBlock = E[v + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), m.call(this, 2, 858993459), m.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var c = 0; c < 16; c++) {
              for (var h = x[c], j = this._lBlock, A = this._rBlock, B = 0, _ = 0; _ < 8; _++)
                B |= w[_][((A ^ h[_]) & i[_]) >>> 0];
              this._lBlock = A, this._rBlock = j ^ B;
            }
            var C = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = C, p.call(this, 1, 1431655765), m.call(this, 8, 16711935), m.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), E[v] = this._lBlock, E[v + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(E, v) {
          var x = (this._lBlock >>> E ^ this._rBlock) & v;
          this._rBlock ^= x, this._lBlock ^= x << E;
        }
        function m(E, v) {
          var x = (this._rBlock >>> E ^ this._lBlock) & v;
          this._lBlock ^= x, this._rBlock ^= x << E;
        }
        s.DES = b._createHelper(f);
        var y = u.TripleDES = b.extend({
          _doReset: function() {
            var E = this._key, v = E.words;
            if (v.length !== 2 && v.length !== 4 && v.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var x = v.slice(0, 2), c = v.length < 4 ? v.slice(0, 2) : v.slice(2, 4), h = v.length < 6 ? v.slice(0, 2) : v.slice(4, 6);
            this._des1 = f.createEncryptor(g.create(x)), this._des2 = f.createEncryptor(g.create(c)), this._des3 = f.createEncryptor(g.create(h));
          },
          encryptBlock: function(E, v) {
            this._des1.encryptBlock(E, v), this._des2.decryptBlock(E, v), this._des3.encryptBlock(E, v);
          },
          decryptBlock: function(E, v) {
            this._des3.decryptBlock(E, v), this._des2.encryptBlock(E, v), this._des1.decryptBlock(E, v);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        s.TripleDES = b._createHelper(y);
      }(), n.TripleDES;
    });
  }(Mn)), Mn.exports;
}
var Ln = { exports: {} }, Pa;
function yl() {
  return Pa || (Pa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), It(), Mt(), Nt(), He());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.StreamCipher, b = s.algo, u = b.RC4 = g.extend({
          _doReset: function() {
            for (var l = this._key, w = l.words, i = l.sigBytes, f = this._S = [], p = 0; p < 256; p++)
              f[p] = p;
            for (var p = 0, m = 0; p < 256; p++) {
              var y = p % i, E = w[y >>> 2] >>> 24 - y % 4 * 8 & 255;
              m = (m + f[p] + E) % 256;
              var v = f[p];
              f[p] = f[m], f[m] = v;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(l, w) {
            l[w] ^= d.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function d() {
          for (var l = this._S, w = this._i, i = this._j, f = 0, p = 0; p < 4; p++) {
            w = (w + 1) % 256, i = (i + l[w]) % 256;
            var m = l[w];
            l[w] = l[i], l[i] = m, f |= l[(l[w] + l[i]) % 256] << 24 - p * 8;
          }
          return this._i = w, this._j = i, f;
        }
        s.RC4 = g._createHelper(u);
        var a = b.RC4Drop = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: u.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            u._doReset.call(this);
            for (var l = this.cfg.drop; l > 0; l--)
              d.call(this);
          }
        });
        s.RC4Drop = g._createHelper(a);
      }(), n.RC4;
    });
  }(Ln)), Ln.exports;
}
var zn = { exports: {} }, Ia;
function vl() {
  return Ia || (Ia = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), It(), Mt(), Nt(), He());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.StreamCipher, b = s.algo, u = [], d = [], a = [], l = b.Rabbit = g.extend({
          _doReset: function() {
            for (var i = this._key.words, f = this.cfg.iv, p = 0; p < 4; p++)
              i[p] = (i[p] << 8 | i[p] >>> 24) & 16711935 | (i[p] << 24 | i[p] >>> 8) & 4278255360;
            var m = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], y = this._C = [
              i[2] << 16 | i[2] >>> 16,
              i[0] & 4294901760 | i[1] & 65535,
              i[3] << 16 | i[3] >>> 16,
              i[1] & 4294901760 | i[2] & 65535,
              i[0] << 16 | i[0] >>> 16,
              i[2] & 4294901760 | i[3] & 65535,
              i[1] << 16 | i[1] >>> 16,
              i[3] & 4294901760 | i[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              w.call(this);
            for (var p = 0; p < 8; p++)
              y[p] ^= m[p + 4 & 7];
            if (f) {
              var E = f.words, v = E[0], x = E[1], c = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, h = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, j = c >>> 16 | h & 4294901760, A = h << 16 | c & 65535;
              y[0] ^= c, y[1] ^= j, y[2] ^= h, y[3] ^= A, y[4] ^= c, y[5] ^= j, y[6] ^= h, y[7] ^= A;
              for (var p = 0; p < 4; p++)
                w.call(this);
            }
          },
          _doProcessBlock: function(i, f) {
            var p = this._X;
            w.call(this), u[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, u[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, u[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, u[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var m = 0; m < 4; m++)
              u[m] = (u[m] << 8 | u[m] >>> 24) & 16711935 | (u[m] << 24 | u[m] >>> 8) & 4278255360, i[f + m] ^= u[m];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var i = this._X, f = this._C, p = 0; p < 8; p++)
            d[p] = f[p];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var m = i[p] + f[p], y = m & 65535, E = m >>> 16, v = ((y * y >>> 17) + y * E >>> 15) + E * E, x = ((m & 4294901760) * m | 0) + ((m & 65535) * m | 0);
            a[p] = v ^ x;
          }
          i[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, i[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, i[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, i[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, i[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, i[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, i[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, i[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.Rabbit = g._createHelper(l);
      }(), n.Rabbit;
    });
  }(zn)), zn.exports;
}
var qn = { exports: {} }, Ma;
function bl() {
  return Ma || (Ma = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), It(), Mt(), Nt(), He());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.StreamCipher, b = s.algo, u = [], d = [], a = [], l = b.RabbitLegacy = g.extend({
          _doReset: function() {
            var i = this._key.words, f = this.cfg.iv, p = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], m = this._C = [
              i[2] << 16 | i[2] >>> 16,
              i[0] & 4294901760 | i[1] & 65535,
              i[3] << 16 | i[3] >>> 16,
              i[1] & 4294901760 | i[2] & 65535,
              i[0] << 16 | i[0] >>> 16,
              i[2] & 4294901760 | i[3] & 65535,
              i[1] << 16 | i[1] >>> 16,
              i[3] & 4294901760 | i[0] & 65535
            ];
            this._b = 0;
            for (var y = 0; y < 4; y++)
              w.call(this);
            for (var y = 0; y < 8; y++)
              m[y] ^= p[y + 4 & 7];
            if (f) {
              var E = f.words, v = E[0], x = E[1], c = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, h = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, j = c >>> 16 | h & 4294901760, A = h << 16 | c & 65535;
              m[0] ^= c, m[1] ^= j, m[2] ^= h, m[3] ^= A, m[4] ^= c, m[5] ^= j, m[6] ^= h, m[7] ^= A;
              for (var y = 0; y < 4; y++)
                w.call(this);
            }
          },
          _doProcessBlock: function(i, f) {
            var p = this._X;
            w.call(this), u[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, u[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, u[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, u[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var m = 0; m < 4; m++)
              u[m] = (u[m] << 8 | u[m] >>> 24) & 16711935 | (u[m] << 24 | u[m] >>> 8) & 4278255360, i[f + m] ^= u[m];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var i = this._X, f = this._C, p = 0; p < 8; p++)
            d[p] = f[p];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var m = i[p] + f[p], y = m & 65535, E = m >>> 16, v = ((y * y >>> 17) + y * E >>> 15) + E * E, x = ((m & 4294901760) * m | 0) + ((m & 65535) * m | 0);
            a[p] = v ^ x;
          }
          i[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, i[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, i[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, i[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, i[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, i[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, i[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, i[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.RabbitLegacy = g._createHelper(l);
      }(), n.RabbitLegacy;
    });
  }(qn)), qn.exports;
}
var $n = { exports: {} }, La;
function wl() {
  return La || (La = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), It(), Mt(), Nt(), He());
    })(Ce, function(n) {
      return function() {
        var s = n, o = s.lib, g = o.BlockCipher, b = s.algo;
        const u = 16, d = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], a = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var l = {
          pbox: [],
          sbox: []
        };
        function w(y, E) {
          let v = E >> 24 & 255, x = E >> 16 & 255, c = E >> 8 & 255, h = E & 255, j = y.sbox[0][v] + y.sbox[1][x];
          return j = j ^ y.sbox[2][c], j = j + y.sbox[3][h], j;
        }
        function i(y, E, v) {
          let x = E, c = v, h;
          for (let j = 0; j < u; ++j)
            x = x ^ y.pbox[j], c = w(y, x) ^ c, h = x, x = c, c = h;
          return h = x, x = c, c = h, c = c ^ y.pbox[u], x = x ^ y.pbox[u + 1], { left: x, right: c };
        }
        function f(y, E, v) {
          let x = E, c = v, h;
          for (let j = u + 1; j > 1; --j)
            x = x ^ y.pbox[j], c = w(y, x) ^ c, h = x, x = c, c = h;
          return h = x, x = c, c = h, c = c ^ y.pbox[1], x = x ^ y.pbox[0], { left: x, right: c };
        }
        function p(y, E, v) {
          for (let A = 0; A < 4; A++) {
            y.sbox[A] = [];
            for (let B = 0; B < 256; B++)
              y.sbox[A][B] = a[A][B];
          }
          let x = 0;
          for (let A = 0; A < u + 2; A++)
            y.pbox[A] = d[A] ^ E[x], x++, x >= v && (x = 0);
          let c = 0, h = 0, j = 0;
          for (let A = 0; A < u + 2; A += 2)
            j = i(y, c, h), c = j.left, h = j.right, y.pbox[A] = c, y.pbox[A + 1] = h;
          for (let A = 0; A < 4; A++)
            for (let B = 0; B < 256; B += 2)
              j = i(y, c, h), c = j.left, h = j.right, y.sbox[A][B] = c, y.sbox[A][B + 1] = h;
          return !0;
        }
        var m = b.Blowfish = g.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var y = this._keyPriorReset = this._key, E = y.words, v = y.sigBytes / 4;
              p(l, E, v);
            }
          },
          encryptBlock: function(y, E) {
            var v = i(l, y[E], y[E + 1]);
            y[E] = v.left, y[E + 1] = v.right;
          },
          decryptBlock: function(y, E) {
            var v = f(l, y[E], y[E + 1]);
            y[E] = v.left, y[E + 1] = v.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        s.Blowfish = g._createHelper(m);
      }(), n.Blowfish;
    });
  }($n)), $n.exports;
}
(function(e, r) {
  (function(n, s, o) {
    e.exports = s(Ne(), Hr(), Xc(), Zc(), It(), Jc(), Mt(), F0(), ys(), el(), R0(), tl(), rl(), nl(), vs(), sl(), Nt(), He(), al(), ol(), il(), cl(), ll(), dl(), ul(), fl(), xl(), hl(), pl(), ml(), gl(), yl(), vl(), bl(), wl());
  })(Ce, function(n) {
    return n;
  });
})(S0);
var Cl = S0.exports;
const jr = /* @__PURE__ */ V0(Cl), El = (e) => {
  const r = "97cc+XE5NTUVhWOrdxrESw==";
  try {
    const n = jr.AES.decrypt(
      e.replace(/^"(.*)"$/, "$1"),
      jr.enc.Base64.parse(r),
      { mode: jr.mode.ECB }
    ).toString(jr.enc.Utf8);
    return JSON.parse(n);
  } catch {
    return null;
  }
}, Pr = Qc({
  reducerPath: "InboxService",
  baseQuery: nc({
    baseUrl: "https://notification.infinitisoftware.net/notificationapi/notification",
    // This allows you to access files in the public folder
    credentials: "include",
    prepareHeaders: (e) => {
      var s;
      const r = El(localStorage.getItem("user")), n = sessionStorage.getItem("iframe_token");
      if (n && n && e.set("Authorization", `Bearer ${n}`), r) {
        const o = (s = JSON.parse(r)) == null ? void 0 : s.token;
        o && e.set("X-XSRF-TOKEN", o);
      }
      return e;
    }
  }),
  endpoints: () => ({})
}), jl = Pr.enhanceEndpoints({
  addTagTypes: ["demo"]
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (e) => ({
    getMailListResponse: e.query({
      // query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`, // dynamic project ID
      query: (r) => ({
        url: `/mail-server/?project=${localStorage.getItem("project")}`,
        method: "GET",
        params: r
      })
    }),
    getConvoResponse: e.query({
      query: () => "staticResponse/convoResponse.json"
    }),
    getConversationDetails: e.query({
      query: (r) => `/mail-server/${r.id}/?project=${localStorage.getItem("project")}`
    }),
    getAIReplyResponse: e.mutation({
      query: (r) => ({
        url: "/mail-server/ai-replay/",
        method: "POST",
        body: r
      }),
      invalidatesTags: ["mailer"]
    }),
    getSettings: e.query({
      query: (r) => ({
        url: `/setting/?ordering=-setting&nolimit=Y&project=${localStorage.getItem("project")}`,
        method: "GET"
      })
    }),
    sentMail: e.mutation({
      query: (r) => ({
        url: "/mail-sent/",
        method: "POST",
        body: r
      }),
      invalidatesTags: ["mailer"]
    }),
    getTemplate: e.query({
      query: () => "/template/107/?folder=17"
    })
  })
}), {
  useLazyGetMailListResponseQuery: T0,
  useLazyGetConvoResponseQuery: Wl,
  useLazyGetConversationDetailsQuery: Nl,
  useGetAIReplyResponseMutation: Al,
  useLazyGetSettingsQuery: _l,
  useSentMailMutation: kl,
  useLazyGetTemplateQuery: Dl
} = jl, Bl = () => {
  const [e, r] = X({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return be(() => {
    const n = () => {
      r({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
}, Et = (e) => {
  const r = e.toLowerCase();
  return r.includes("get") ? {
    text: "Get Info",
    icon: Ha,
    color: "bg-blue-100 text-blue-800",
    iconColor: "text-blue-600"
  } : r.includes("approve") || r.includes("success") || r.includes("confirmed") ? {
    text: "Approved",
    icon: Va,
    color: "bg-green-100 text-green-800",
    iconColor: "text-green-600"
  } : r.includes("cancel") || r.includes("rejected") || r.includes("failed") ? {
    text: "Cancelled",
    icon: Za,
    color: "bg-red-100 text-red-800",
    iconColor: "text-red-600"
  } : r.includes("ticket") || r.includes("booking") || r.includes("reservation") ? {
    text: "Ticketing",
    icon: Ya,
    color: "bg-yellow-100 text-yellow-800",
    iconColor: "text-yellow-600"
  } : r.includes("feedback") || r.includes("report") ? {
    text: "Feedback",
    icon: fo,
    color: "bg-orange-100 text-orange-800",
    iconColor: "text-orange-600"
  } : {
    text: "new",
    icon: Nr,
    color: "bg-blue-100 text-blue-800",
    iconColor: "text-blue-600"
  };
}, O0 = (e) => {
  if (!e) return "";
  const r = e.match(/^(.*?)\s*<.*?>$/);
  let n = r ? r[1] : e;
  return n = n.replace(/["']/g, "").replace(/\(.*?\)/g, "").replace(/\[.*?\]/g, "").trim(), n;
}, Sl = ({
  emails: e,
  selectedEmailId: r,
  onEmailSelect: n,
  onStarToggle: s,
  onCheckToggle: o,
  checkedEmails: g,
  activeSection: b,
  customLabels: u,
  onEmailLabelsChange: d,
  onCreateLabel: a,
  onBulkMarkAsRead: l,
  onBulkDelete: w,
  onBulkRestore: i,
  onSelectAll: f,
  onUnselectAll: p,
  onUndo: m,
  setEmails: y,
  readStatus: E,
  searchFilter: v
}) => {
  const [x, c] = X(""), [h, j] = X(320), [A, B] = X(!1), [_, C] = X(!1), N = Fe(null), D = Fe(0), k = Fe(320), [S, R] = T0(), [L, H] = X({
    page: 1,
    page_size: 100,
    search: void 0,
    folder: "inbox"
  }), [V, Q] = X(0), G = D0((Z) => Z.filters);
  gs();
  const [T, O] = X(!1), [M, P] = X("inbox");
  be(() => {
    (G == null ? void 0 : G.search) === "" && (S(L), O(!1));
  }, [L, G]), be(() => {
    G !== void 0 && Object.keys(G).length >= 1 && (G == null ? void 0 : G.search) !== "" && (y && T === !1 && y([]), S(G), O(!0));
  }, [G]), be(() => {
    var Z, fe, le, I, ne, oe;
    if (R.isSuccess && y) {
      const ee = (le = (fe = (Z = R == null ? void 0 : R.data) == null ? void 0 : Z.response) == null ? void 0 : fe.data) == null ? void 0 : le.results;
      ee && Array.isArray(ee) && (Q(
        ((oe = (ne = (I = R == null ? void 0 : R.data) == null ? void 0 : I.response) == null ? void 0 : ne.data) == null ? void 0 : oe.count) || 0
      ), y((ke) => {
        const je = new Map(
          ke.map((Pe) => [Pe.mail_id, Pe])
        );
        return ee.map((Pe) => je.has(Pe.mail_id) ? je.get(Pe.mail_id) : {
          ...Pe,
          intentLabel: Pe.labels || "new"
        });
      }));
    }
  }, [R]);
  const Y = (Z, fe) => {
    fe.stopPropagation(), n(Z, !0);
  };
  be(() => {
    var Z, fe, le;
    c(
      ((fe = (Z = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : Z.to) == null ? void 0 : fe.length) > 0 ? (le = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : le.to[0] : void 0
    );
  }, [e]);
  const ie = (Z) => {
    const fe = new Date(Z), I = ((/* @__PURE__ */ new Date()).getTime() - fe.getTime()) / (1e3 * 60 * 60);
    return I < 24 ? fe.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : I < 168 ? fe.toLocaleDateString("en-US", { weekday: "short" }) : fe.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, ce = (Z) => {
    switch (Z) {
      case "inbox":
        return "Inbox";
      case "sent":
        return "Sent";
      case "drafts":
        return "Drafts";
      case "starred":
        return "Starred";
      case "snoozed":
        return "Snoozed";
      case "label-work":
        return "Work";
      case "label-personal":
        return "Personal";
      case "label-important":
        return "Important";
      case "label-travel":
        return "Travel";
      default:
        if (Z.startsWith("custom-label-")) {
          const fe = Z.replace("custom-label-", ""), le = u.find((I) => I.id === fe);
          return (le == null ? void 0 : le.name) || "Unknown Label";
        }
        return "Inbox";
    }
  }, re = (Z) => {
    switch (Z) {
      case "inbox":
        return lo;
      case "sent":
        return Ga;
      case "drafts":
        return tr;
      case "starred":
        return _r;
      case "snoozed":
        return as;
      default:
        return kr;
    }
  }, ge = (Z) => Z.labels ? Z.labels.map((fe) => u.find((le) => le.id === fe)).filter(Boolean) : [], me = ({ section: Z }) => {
    const fe = re(Z), le = ce(Z);
    return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center h-96 text-center p-8", children: [
      /* @__PURE__ */ t.jsx("div", { className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ t.jsx(fe, { className: "w-10 h-10 text-gray-400" }) }),
      /* @__PURE__ */ t.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
        "No emails in ",
        le
      ] }),
      /* @__PURE__ */ t.jsx("p", { className: "text-gray-500 max-w-sm", children: Z === "starred" ? "Star important conversations to find them quickly here." : Z === "snoozed" ? "Snoozed conversations will appear here when it's time to deal with them." : Z.startsWith("custom-label-") || Z.startsWith("label-") ? `Conversations with the "${le}" label will appear here.` : "No conversations available yet." })
    ] });
  }, ae = Array.from(g), J = ae.length > 0, De = dt(
    (Z) => {
      Z.preventDefault(), B(!0), D.current = Z.clientX, k.current = h, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    },
    [h]
  ), Ee = dt(
    (Z) => {
      if (!A) return;
      Z.preventDefault();
      const fe = Z.clientX - D.current, le = k.current + fe, I = Math.max(240, Math.min(le, 800));
      requestAnimationFrame(() => {
        j(I), localStorage.setItem("listwidth", I.toString() + "px");
      });
    },
    [A]
  ), Be = dt(() => {
    B(!1), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, []);
  return Ft.useEffect(() => (A && (document.addEventListener("mousemove", Ee, { passive: !1 }), document.addEventListener("mouseup", Be)), () => {
    document.removeEventListener("mousemove", Ee), document.removeEventListener("mouseup", Be), document.body.style.cursor = "", document.body.style.userSelect = "";
  }), [A, Ee, Be]), e.length === 0 ? /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: N,
      style: {
        width: `${h}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: De,
            children: /* @__PURE__ */ t.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: ce(b) }) }),
        /* @__PURE__ */ t.jsx(me, { section: b })
      ]
    }
  ) : /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: N,
      style: {
        width: `${h}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: De,
            children: /* @__PURE__ */ t.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "p-4 border-b border-gray-200",
            style: { backgroundColor: "#eef7fe" },
            children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => {
                      g.size === e.length ? p() : f();
                    },
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    title: g.size === e.length ? "Unselect all" : "Select all",
                    children: g.size === e.length && e.length > 0 ? /* @__PURE__ */ t.jsx(js, { className: "w-4 h-4 text-blue-600" }) : g.size > 0 ? /* @__PURE__ */ t.jsx(Ur, { className: "w-4 h-4 text-blue-600 fill-blue-100" }) : /* @__PURE__ */ t.jsx(Ur, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { style: { height: "100%" }, children: [
                  /* @__PURE__ */ t.jsxs("h2", { className: "text-lg font-semibold text-gray-900", children: [
                    M === "sent" ? "Sent" : "Conversations",
                    ` (${e.filter((Z) => !Z.is_read).length}/${E === "all" ? V : e.length})`
                  ] }),
                  /* @__PURE__ */ t.jsx("p", { className: "text-sm mt-1 truncate", children: M === "inbox" && "support@atyourprice.net" })
                ] })
              ] }),
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                J && /* @__PURE__ */ t.jsx(
                  Po,
                  {
                    emailIds: ae,
                    currentLabels: [],
                    availableLabels: u,
                    onLabelsChange: (Z, fe) => {
                      d(Z, fe), setTimeout(() => {
                        p();
                      }, 100);
                    },
                    onCreateLabel: a
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => C(!_),
                      className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      title: "More actions",
                      children: /* @__PURE__ */ t.jsx(Ka, { className: "w-4 h-4" })
                    }
                  ),
                  _ && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "p-1", children: [
                    J ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            l(ae, !0), C(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Read"
                        }
                      ),
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            l(ae, !1), C(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Unread"
                        }
                      ),
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            w(ae), C(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors",
                          children: "Delete"
                        }
                      )
                    ] }) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-500", children: "Select emails to see actions" }),
                    m && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100 my-1" }),
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            m(), C(!1);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Undo Last Action"
                        }
                      )
                    ] })
                  ] }) })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "divide-y divide-gray-100 overflow-y-auto thin-scrollbar",
            onScroll: (Z) => {
              const fe = Z.currentTarget;
              fe.scrollHeight - fe.scrollTop === fe.clientHeight && (T || (H((le) => ({
                ...le,
                page: le.page + 1
              })), O(!1)));
            },
            children: e.map((Z) => {
              const fe = r === Z.message_id, le = g.has(Z.message_id);
              return ge(Z), /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${fe ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${Z.is_read ? "" : "bg-blue-25"}
              `,
                  onClick: () => n(Z),
                  onDoubleClick: (I) => Y(Z, I),
                  title: "Double-click to open in full-page view",
                  style: {
                    ...fe ? { borderRight: "1px solid blue" } : {}
                  },
                  children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-start space-x-3", children: [
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: (I) => {
                          I.stopPropagation(), o(Z.message_id);
                        },
                        className: "mt-1 text-gray-400 hover:text-gray-600 transition-colors",
                        children: le ? /* @__PURE__ */ t.jsx(js, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ t.jsx(Ur, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: (I) => {
                          I.stopPropagation(), s(Z.message_id);
                        },
                        className: "mt-1 transition-colors",
                        children: /* @__PURE__ */ t.jsx(
                          _r,
                          {
                            className: `w-4 h-4 ${Z.is_starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400 hover:text-yellow-500"}`
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2 min-w-0", children: /* @__PURE__ */ t.jsx(
                          "p",
                          {
                            className: `
                        text-sm mt-1
                        ${Z.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                            children: O0(Z.from_address)
                          }
                        ) }),
                        /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 ml-2 flex-shrink-0", children: ie(Z.created_at) })
                      ] }),
                      /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2 min-w-0", children: /* @__PURE__ */ t.jsx(
                        "p",
                        {
                          className: `
                        text-sm mt-1
                        ${Z.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                          children: Z.subject
                        }
                      ) }) }),
                      /* @__PURE__ */ t.jsx(
                        "p",
                        {
                          className: `
                    text-sm mt-1 truncate
                    ${Z.is_read ? "text-gray-400" : "text-gray-700 font-medium"}
                  `,
                          children: Z.snippet
                        }
                      ),
                      (Z == null ? void 0 : Z.intent) && /* @__PURE__ */ t.jsxs(
                        "div",
                        {
                          className: `
                  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 mt-[5px] 
                  ${Et(Z.intent).color}
                `,
                          children: [
                            Ft.createElement(Et(Z.intent).icon, {
                              className: `w-3 h-3 mr-1 ${Et(Z.intent).iconColor}`
                            }),
                            Et(Z.intent).text
                          ]
                        }
                      )
                    ] })
                  ] })
                },
                Z.message_id
              );
            })
          }
        )
      ]
    }
  );
}, Fl = ({
  isOpen: e,
  onClose: r,
  triggerRef: n,
  entitiesInfo: s
}) => {
  console.log("Entities Info:", s);
  const o = Fe(null), [g, b] = X({ top: 0, left: 0 });
  if (be(() => {
    if (e && n.current && o.current) {
      const d = n.current.getBoundingClientRect(), a = o.current.getBoundingClientRect(), l = d.bottom + 8, w = d.left, i = window.innerWidth - a.width - 16, f = Math.min(w, i);
      b({ top: l, left: f });
    }
  }, [e, n]), be(() => {
    const d = (l) => {
      o.current && !o.current.contains(l.target) && n.current && !n.current.contains(l.target) && r();
    }, a = (l) => {
      l.key === "Escape" && r();
    };
    if (e)
      return document.addEventListener("mousedown", d), document.addEventListener("keydown", a), () => {
        document.removeEventListener("mousedown", d), document.removeEventListener("keydown", a);
      };
  }, [e, r, n]), !e) return null;
  const u = (d) => {
    switch (d.toLowerCase()) {
      case "ticket":
      case "pnr":
        return /* @__PURE__ */ t.jsx(Ya, { className: "w-4 h-4 text-green-600" });
      case "travel":
      case "airline":
      case "train":
        return /* @__PURE__ */ t.jsx(vo, { className: "w-4 h-4 text-blue-600" });
      case "date":
        return /* @__PURE__ */ t.jsx(tr, { className: "w-4 h-4 text-purple-600" });
      case "status":
        return /* @__PURE__ */ t.jsx(Va, { className: "w-4 h-4 text-green-600" });
      case "cancellation":
        return /* @__PURE__ */ t.jsx(Za, { className: "w-4 h-4 text-red-600" });
      default:
        return /* @__PURE__ */ t.jsx(tr, { className: "w-4 h-4 text-gray-500" });
    }
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 z-40" }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: o,
        className: "fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80",
        style: {
          top: `${g.top}px`,
          left: `${g.left}px`
        },
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute -top-2 left-9 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45" }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Observation Overview" }),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: r,
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ t.jsx(et, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "space-y-4", children: s && Object.entries(s).map(([d, a]) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
              u(d),
              /* @__PURE__ */ t.jsxs("span", { className: "text-sm font-medium text-gray-700 capitalize", children: [
                d.replace(/_/g, " "),
                ":"
              ] })
            ] }),
            /* @__PURE__ */ t.jsx("span", { title: String(a), className: "text-sm text-gray-900 font-mono truncate max-w-[150px] text-right", children: String(a) })
          ] }, d)) })
        ]
      }
    )
  ] });
}, Rl = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [
      /* @__PURE__ */ t.jsx("g", { "clip-path": "url(#clip0_116_182)", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M0 16.26C0 17.3 0.366667 18.18 1.1 18.9C1.83333 19.62 2.72 19.9867 3.76 20H16.26C17.2867 20 18.1667 19.6334 18.9 18.9C19.6333 18.1667 20 17.2867 20 16.26V12.5L15 7.50002H13.76V10H13.96L17.5 13.76H13.76V15C13.76 15.3467 13.6333 15.6467 13.38 15.9C13.1267 16.1534 12.8333 16.2734 12.5 16.26H7.5C7.15333 16.26 6.86 16.14 6.62 15.9C6.38 15.66 6.26 15.36 6.26 15V13.76H2.5L6.04 10H6.26V7.50002H5L0 12.5L0 16.26ZM6.28 3.54002C6.24 3.79336 6.26 4.02669 6.34 4.24002C6.42 4.45336 6.57333 4.63336 6.8 4.78002C7.02667 4.92669 7.26 5.00002 7.5 5.00002H8.76V8.76002C8.76 9.06669 8.84 9.32669 9 9.54002C9.16 9.75336 9.37333 9.88002 9.64 9.92002C9.90667 9.96002 10.1467 9.96002 10.36 9.92002C10.5733 9.88002 10.7867 9.75336 11 9.54002C11.2133 9.32669 11.3 9.06669 11.26 8.76002V5.00002H12.5C12.78 5.00002 13.02 4.92669 13.22 4.78002C13.42 4.63336 13.5667 4.44669 13.66 4.22002C13.7533 3.99336 13.7733 3.76002 13.72 3.52002C13.6667 3.28002 13.5533 3.06002 13.38 2.86002L10.88 0.360023C10.6267 0.10669 10.3333 -0.0133099 10 2.34376e-05C9.66667 0.0133568 9.37333 0.133357 9.12 0.360023L6.62 2.86002C6.42 3.06002 6.30667 3.28669 6.28 3.54002Z",
          fill: "green"
        }
      ) }),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_116_182", children: /* @__PURE__ */ t.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
    ]
  }
), Tl = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M12.8633 2L10.8633 4V0H9.13672V4L7.13672 2L5.90625 3.23047L10 7.32422L14.0937 3.23047L12.8633 2Z",
          fill: "blue"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M10 13.7539L17.7852 8.92188C17.5391 8.79687 17.2617 8.70703 16.9531 8.70703H3.04688C2.73828 8.70703 2.46094 8.80078 2.21484 8.92188L10 13.7539Z",
          fill: "blue"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M10.4609 15.5078C10.3086 15.6016 10.1523 15.6328 10 15.6328C9.84766 15.6328 9.69141 15.6016 9.53906 15.5078L1.29297 10.3984V10.4297V18.2461C1.29297 19.1992 2.0625 20 3.04687 20H16.9531C17.9062 20 18.707 19.2305 18.707 18.2461V10.4297V10.3984L10.4609 15.5078Z",
          fill: "blue"
        }
      )
    ]
  }
), za = ({
  email: e,
  onClose: r,
  onBack: n,
  isFullPage: s = !1,
  aiReplyState: o,
  onGenerateAiReply: g,
  onAiReplyStateChange: b,
  customLabels: u,
  onEmailLabelsChange: d,
  onCreateLabel: a,
  onDeleteEmail: l,
  onRestoreEmail: w,
  activeSection: i,
  onStarToggle: f
}) => {
  var At, bt, zt, _t, ze, Xe;
  const { width: p } = Bl(), [m, y] = X(""), [E, v] = X(!1), [x, c] = X(""), [h, j] = X(!1), [A, B] = X(void 0), [_, C] = X(
    /* @__PURE__ */ new Set()
  ), [N, D] = X(localStorage.getItem("listwidth") || "320px"), [k, S] = X(!1), [R, L] = X(!1), [H, V] = X(!1), [Q, G] = X([]), T = Fe(null), O = Fe(null), M = Fe(null), P = Fe(null), Y = Fe(null), [ie, ce] = X(), [re, ge] = Nl(), [me, ae] = Al(), [J, De] = X([]), Ee = Fe(null), [Be, Z] = X(), [fe, le] = _l(), [I, ne] = kl(), [oe, ee] = X(""), [ke, je] = Dl(), [$e, Pe] = X();
  be(() => {
    c("");
  }, [e]), be(() => {
    fe({}), ke({}), localStorage.setItem("notify", "true");
  }, []), be(() => {
    var U, xe, he, Se;
    le != null && le.isSuccess && (console.log("Settings fetched successfully", (xe = (U = le == null ? void 0 : le.data) == null ? void 0 : U.response) == null ? void 0 : xe.data), Z((Se = (he = le == null ? void 0 : le.data) == null ? void 0 : he.response) == null ? void 0 : Se.data));
  }, [le]), be(() => {
    o.showAiReply && T.current && setTimeout(() => {
      var U;
      (U = T.current) == null || U.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [o.showAiReply]), be(() => {
    h && m === o.generatedReply && O.current && setTimeout(() => {
      var U;
      (U = O.current) == null || U.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [h, m, o.generatedReply]), be(() => {
    var U, xe, he, Se, F, K, te, de, pe;
    ne != null && ne.isSuccess && ((he = (xe = (U = ne == null ? void 0 : ne.data) == null ? void 0 : U.response) == null ? void 0 : xe.data) == null || he.message, c(""), ((K = (F = (Se = ne == null ? void 0 : ne.data) == null ? void 0 : Se.response) == null ? void 0 : F.data) == null ? void 0 : K.success) === !0 && localStorage.getItem("notify") === "true" || localStorage.getItem("notify") === "true" && ((pe = (de = (te = ne == null ? void 0 : ne.data) == null ? void 0 : te.response) == null ? void 0 : de.data) == null || pe.message));
  }, [ne]), be(() => {
    var U, xe, he;
    je != null && je.isSuccess && Pe((he = (xe = (U = je == null ? void 0 : je.data) == null ? void 0 : U.response) == null ? void 0 : xe.data) == null ? void 0 : he.template_content);
  }, [je]), be(() => {
    const U = (xe) => {
      Ee.current && !Ee.current.contains(xe.target) && V(!1);
    };
    if (H)
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
  }, [H]), be(() => {
    if (e != null && e.mail_id) {
      let U = e == null ? void 0 : e.mail_id;
      re({ id: U });
    }
  }, [e == null ? void 0 : e.mail_id]);
  const Ue = (U) => U.reduce((xe, he) => he.entities && typeof he.entities == "object" ? { ...xe, ...he.entities } : xe, {});
  if (be(() => {
    var U, xe, he;
    if (ge != null && ge.isSuccess) {
      const Se = (he = (xe = (U = ge == null ? void 0 : ge.data) == null ? void 0 : U.response) == null ? void 0 : xe.data) == null ? void 0 : he.conversation;
      Se && (De(Se), G(Ue(Se)));
    }
  }, [ge]), !e)
    return /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ t.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ t.jsx("div", { className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ t.jsx("span", { className: "text-4xl text-gray-400", children: "📧" }) }),
      /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Select an email" }),
      /* @__PURE__ */ t.jsx("p", { className: "text-gray-500", children: "Choose an email from the list to view the conversation" })
    ] }) });
  const xt = (U) => new Date(U).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), it = () => {
    var U, xe, he, Se, F, K, te, de, pe, Ae, we, ve, Me, Te, Re, Ve, Ke, Ze, qe, lt, xr, hr, bs;
    if (m.trim()) {
      let Wt = "MANUAL";
      m === o.generatedReply && o.generatedReply ? Wt = "AI" : o.generatedReply && m.includes(o.generatedReply) && (Wt = "AI_EDITED"), console.log("Reply sent with type:", Wt);
      const I0 = (U = J[J.length - 1]) == null ? void 0 : U.from_address, Vr = Be == null ? void 0 : Be.find(
        (L0) => L0.from_email_id === I0
      );
      Vr == null || Vr.setting_id, console.log(
        m,
        J[J.length - 1],
        {
          mail_id: (xe = J[J.length - 1]) == null ? void 0 : xe.mail_id,
          thread_id: (he = J[J.length - 1]) == null ? void 0 : he.thread_id,
          folder: (Se = J[J.length - 1]) == null ? void 0 : Se.folder,
          subject: (F = J[J.length - 1]) == null ? void 0 : F.subject,
          to: [(K = J[J.length - 1]) == null ? void 0 : K.from_address],
          cc: (te = J[J.length - 1]) == null ? void 0 : te.cc,
          bcc: (de = J[J.length - 1]) == null ? void 0 : de.bcc,
          body_plain: (pe = J[J.length - 1]) == null ? void 0 : pe.body_plain,
          body_html: (Ae = J[J.length - 1]) == null ? void 0 : Ae.body_html,
          reply_type: Wt,
          edited: !1,
          labels: ((we = J[J.length - 1]) == null ? void 0 : we.labels) || [],
          ai_response: {
            intent: ((ve = J[J.length - 1]) == null ? void 0 : ve.intent) || "reply",
            entities: ((Me = J[J.length - 1]) == null ? void 0 : Me.entities) || {},
            reply: m
          },
          setting_id: 4
        }
      );
      const Wr = $e.replace("$[[dynamic_content]]", m).replace("$<<signature>>", sessionStorage.getItem("defaultSignature") || ""), M0 = {
        mail_id: (Te = J[J.length - 1]) == null ? void 0 : Te.mail_id,
        message_id: (Re = J[J.length - 1]) == null ? void 0 : Re.message_id,
        thread_id: (Ve = J[J.length - 1]) == null ? void 0 : Ve.thread_id,
        folder: (Ke = J[J.length - 1]) == null ? void 0 : Ke.folder,
        subject: (Ze = J[J.length - 1]) == null ? void 0 : Ze.subject,
        // to: [msgData[msgData.length - 1]?.from_address],
        to: ["madhivanan.e@infinitisoftware.net"],
        cc: (qe = J[J.length - 1]) == null ? void 0 : qe.cc,
        bcc: (lt = J[J.length - 1]) == null ? void 0 : lt.bcc,
        body_plain: m,
        body_html: Wr,
        reply_type: Wt,
        edited: !1,
        labels: ((xr = J[J.length - 1]) == null ? void 0 : xr.labels) || [],
        ai_response: {
          intent: ((hr = J[J.length - 1]) == null ? void 0 : hr.intent) || "reply",
          entities: ((bs = J[J.length - 1]) == null ? void 0 : bs.entities) || {},
          reply: m + `
` + Wr
        },
        setting_id: 30
      };
      I(M0), j(!1), y(m + `
` + Wr), b({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  };
  function ht(U) {
    const xe = document.createElement("div");
    return xe.innerHTML = U, xe.textContent || xe.innerText || "";
  }
  const Ye = (U) => {
    var Se;
    const xe = ye[ye.length - 1];
    return xe.to.length + (((Se = xe.cc) == null ? void 0 : Se.length) || 0) > 1 || xe.cc && xe.cc.length > 0;
  }, Ge = async () => {
    var xe;
    let U = {
      document_id: (xe = J[J.length - 1]) == null ? void 0 : xe.mail_id,
      prompt: ""
    };
    try {
      const he = await me(U).unwrap(), Se = he == null ? void 0 : he.response.data.reply;
      G((he == null ? void 0 : he.response.data.entities) || []), ee((he == null ? void 0 : he.response.data.intent) || ""), console.log("AI Reply generated:", Se), y(Se), Se && c(Se);
    } catch (he) {
      console.error("AI Reply fetch failed", he);
    }
  }, pt = () => {
    S(!k);
  }, mt = () => {
    j(!0), v(!0), b({ ...o, showAiReply: !1 });
  }, z = () => {
    const U = ye[ye.length - 1], xe = /* @__PURE__ */ new Set([
      ...U.to,
      ...U.cc || []
    ]);
    `${Array.from(
      xe
    ).join(", ")}${o.generatedReply}`, j(!0), v(!0), b({ ...o, showAiReply: !1 });
  }, q = () => {
    if (B("reply-all"), v(!0), e) {
      const U = ye[ye.length - 1], xe = /* @__PURE__ */ new Set([
        U.to,
        ...U.to,
        ...U.cc || []
      ]);
      `${Array.from(
        xe
      ).join(", ")}`, y(o.generatedReply), j(!0), b({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, $ = () => {
    if (J) {
      const U = ye[ye.length - 1];
      `${U.from_address}${xt(U.create_to)}${U.subject}${U.to.join(", ")}`, U.cc && `${U.cc.join(", ")}`, `${U.body_plain}`, y(o.generatedReply), j(!0), b({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, W = () => {
    if (!e) return;
    const U = ye[ye.length - 1], xe = U.body_plain, he = `Meeting: ${e.subject}`, Se = `Original email from: ${U.from_address}

${xe}`, F = /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/, K = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))/, te = xe.match(F), de = xe.match(K);
    let pe = /* @__PURE__ */ new Date();
    if (te && (pe = new Date(te[0])), de) {
      const Re = de[0], [Ve, Ke] = Re.split(/\s+/), [Ze, qe] = Ve.split(":").map(Number);
      let lt = Ze;
      (Ke == null ? void 0 : Ke.toLowerCase()) === "pm" && Ze !== 12 ? lt += 12 : (Ke == null ? void 0 : Ke.toLowerCase()) === "am" && Ze === 12 && (lt = 0), pe.setHours(lt, qe, 0, 0);
    }
    const Ae = (Re) => Re.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z", we = Ae(pe), ve = new Date(pe.getTime() + 60 * 60 * 1e3), Me = Ae(ve), Te = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(he)}&dates=${we}/${Me}&details=${encodeURIComponent(Se)}&location=${encodeURIComponent("To be determined")}`;
    window.open(Te, "_blank"), V(!1);
  }, se = () => {
    window.print(), V(!1);
  }, Oe = () => {
    e && (console.log("Reporting spam for email:", e.message_id), window.confirm(
      `Report "${e.subject}" as spam? This conversation will be moved to spam folder.`
    ) && r(), V(!1));
  }, Ie = () => {
    console.log("Block sender:", e == null ? void 0 : e.senderEmail), V(!1);
  }, rt = (U) => {
    C((xe) => {
      const he = new Set(xe);
      return he.has(U) ? he.delete(U) : he.add(U), he;
    });
  }, nt = (U) => U.customLabels ? U.customLabels.map((xe) => u.find((he) => he.id === xe)).filter(Boolean) : [], vt = ({
    replyType: U
  }) => {
    if (!U) return null;
    const xe = {
      manual: {
        icon: No,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200"
      },
      ai: {
        icon: to,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200"
      },
      "partial-ai": {
        icon: jo,
        label: "Partial AI Reply",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        borderColor: "border-orange-200"
      }
    }, {
      icon: he,
      label: Se,
      bgColor: F,
      textColor: K,
      borderColor: te
    } = xe[U];
    return /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${F} ${K} ${te}`,
        children: [
          /* @__PURE__ */ t.jsx(he, { className: "w-3 h-3 mr-1" }),
          Se
        ]
      }
    );
  }, ye = [...J].sort(
    (U, xe) => new Date(U.created_at).getTime() - new Date(xe.created_at).getTime()
  ), ct = nt(J), Lt = () => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ t.jsx(As, { className: "w-4 h-4 animate-spin" }),
    /* @__PURE__ */ t.jsx("span", { children: "Generating..." })
  ] });
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: ge != null && ge.isLoading || ge != null && ge.isFetching ? /* @__PURE__ */ t.jsx(To, {}) : /* @__PURE__ */ t.jsxs("div", { ref: M, className: "flex-1 flex flex-col bg-white", style: { maxWidth: `calc(100vw - ${N})` }, children: [
    /* @__PURE__ */ t.jsx("div", { className: "border-b border-gray-200 p-6", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0 flex items-center space-x-3", children: [
        s && n && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: n,
            className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors",
            title: "Back to email list",
            children: /* @__PURE__ */ t.jsx(Z0, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ t.jsx(
            "h2",
            {
              className: "text-2xl font-semibold text-gray-900 truncate",
              style: { whiteSpace: "unset" },
              children: e.subject
            }
          ),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [
            /* @__PURE__ */ t.jsxs("p", { className: "text-sm text-gray-500", children: [
              J.length,
              " message",
              J.length !== 1 ? "s" : "",
              " • Conversation"
            ] }),
            ct.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              ct.slice(0, 3).map((U) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                  style: {
                    backgroundColor: `${U.color}15`,
                    color: U.color,
                    border: `1px solid ${U.color}30`
                  },
                  children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mr-1",
                        style: { backgroundColor: U.color }
                      }
                    ),
                    U.name
                  ]
                },
                U.id
              )),
              ct.length > 3 && /* @__PURE__ */ t.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                "+",
                ct.length - 3,
                " more"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 ml-4", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            ref: P,
            onClick: () => {
              L(!R), ce(P);
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(tr, { className: "w-4 h-4 mr-1" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-600 hover:text-gray-800", children: "Entities" })
            ]
          }
        ),
        i === "bin" && w ? /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => w(e.message_id),
            className: "p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",
            title: "Restore conversation",
            children: /* @__PURE__ */ t.jsx(Qn, { className: "w-4 h-4" })
          }
        ) : l && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => l(e.message_id),
            className: "p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            title: "Delete conversation",
            children: /* @__PURE__ */ t.jsx(Ir, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: Ee, children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => V(!H),
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ t.jsx(Ka, { className: "w-5 h-5 text-gray-600" })
            }
          ),
          H && /* @__PURE__ */ t.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10", children: [
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: () => {
                  f && f(e.message_id), V(!1);
                },
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    _r,
                    {
                      className: `w-4 h-4 ${e.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`
                    }
                  ),
                  /* @__PURE__ */ t.jsx("span", { children: e.isStarred ? "Remove star" : "Add star" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: W,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ t.jsx("span", { children: "Add to calendar" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: se,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ t.jsx("span", { children: "Print" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100 my-1" }),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: Oe,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ t.jsx("span", { children: "Report spam" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: Ie,
                className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ t.jsxs("span", { children: [
                    "Block ",
                    e.sender
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ t.jsx("div", { style: { width: "98%", margin: "10px auto 0 auto" }, children: ye.map((U, xe) => {
      var K, te;
      const he = _.has(U.message_id) || xe === ye.length - 1 && !_.has(`collapsed-${U.message_id}`), Se = xe === ye.length - 1, F = U.from_address === e.from_address;
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "last:border-b-0",
          style: { marginBottom: 10 },
          children: /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: `p-6 ${F ? "bg-blue-50" : "bg-gray-50"}`,
              style: {
                marginBottom: 10,
                // border: "2px solid #abb1ae",
                borderRadius: 5,
                boxShadow: "0 1px 3px #abb1ae"
              },
              children: [
                /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: "cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg",
                    onClick: () => {
                      Se ? C(
                        he ? (de) => /* @__PURE__ */ new Set([
                          ...de,
                          `collapsed-${U.message_id}`
                        ]) : (de) => {
                          const pe = new Set(de);
                          return pe.delete(
                            `collapsed-${U.message_id}`
                          ), pe;
                        }
                      ) : rt(U.message_id);
                    },
                    children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
                          /* @__PURE__ */ t.jsx(
                            "div",
                            {
                              className: `w-10 h-10 ${F ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-blue-500 to-purple-600"} rounded-full flex items-center justify-center flex-shrink-0`,
                              children: /* @__PURE__ */ t.jsx("span", { className: "text-white font-semibold text-sm", children: (K = O0(U == null ? void 0 : U.from_address)) == null ? void 0 : K.charAt(0).toUpperCase() })
                            }
                          ),
                          /* @__PURE__ */ t.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                              /* @__PURE__ */ t.jsx("p", { className: "font-semibold text-gray-900", children: U.from_address }),
                              /* @__PURE__ */ t.jsx(vt, { replyType: U.replyType }),
                              F ? /* @__PURE__ */ t.jsx(Rl, {}) : /* @__PURE__ */ t.jsx(Tl, {})
                            ] }),
                            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: xt(U.created_at) })
                          ] })
                        ] }),
                        /* @__PURE__ */ t.jsx("button", { className: "text-gray-400 hover:text-gray-600 mt-1", children: he ? /* @__PURE__ */ t.jsx(ro, { className: "w-6 h-6" }) : /* @__PURE__ */ t.jsx(Qa, { className: "w-6 h-6" }) })
                      ] }),
                      he && (U.cc.length > 0 || U.bcc.length > 0) && /* @__PURE__ */ t.jsx("div", { className: "mb-4 bg-gray-50 rounded-lg p-4 space-y-2", children: /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                        U.cc && U.cc.length > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                          /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-700", children: "CC:" }),
                          /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 mt-1", children: U.cc.join(", ") })
                        ] }),
                        U.bcc && U.bcc.length > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                          /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-700", children: "BCC:" }),
                          /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 mt-1", children: U.bcc.join(", ") })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                he && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "prose max-w-none mb-6",
                    style: {
                      background: "#f9fafb",
                      marginTop: 10,
                      borderRadius: 5,
                      padding: 10
                    },
                    children: /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "text-gray-800 leading-relaxed whitespace-pre-wrap",
                        style: { wordBreak: "break-word" },
                        dangerouslySetInnerHTML: {
                          __html: (U == null ? void 0 : U.body_html) || (U == null ? void 0 : U.body_plain) || (U == null ? void 0 : U.snippet)
                        }
                      }
                    )
                  }
                ) }),
                !he && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "text-sm text-gray-500 truncate mb-3", children: [
                  (te = U == null ? void 0 : U.body_plain) == null ? void 0 : te.substring(0, 100),
                  "..."
                ] }) })
              ]
            }
          )
        },
        U.message_id
      );
    }) }) }),
    (x === "" || x.length === 0) && !h && /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ t.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 w-full", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => {
              B("AI"), j(!h), v(!0);
            },
            className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(ks, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: "Reply" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: q,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(_s, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: "Reply All" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: $,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(oo, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: "Forward" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: Ge,
          disabled: ae == null ? void 0 : ae.isLoading,
          className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
          children: ae != null && ae.isLoading ? /* @__PURE__ */ t.jsx(Lt, {}) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx($t, { className: "w-4 h-4" }),
            /* @__PURE__ */ t.jsx("span", { children: "Reply with AI" })
          ] })
        }
      ) })
    ] }) }) }),
    x.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        style: {
          width: p > 1580 ? "100%" : p < 1580 && p > 1280 ? "85%" : "65%"
        },
        children: /* @__PURE__ */ t.jsxs(
          "div",
          {
            ref: T,
            className: `bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all ${k ? "fixed inset-4 z-50 bg-white shadow-2xl flex flex-col" : ""}`,
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ t.jsx($t, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ t.jsxs("span", { className: "font-semibold text-gray-900", children: [
                    "AI Generated",
                    " ",
                    Ye() ? "Reply All" : "Reply"
                  ] })
                ] }),
                /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: `
                                    inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                                    ${Et(oe).color}
                                  `,
                      children: [
                        Ft.createElement(
                          Et(oe).icon,
                          {
                            className: `w-3 h-3 mr-1 ${Et(oe).iconColor}`
                          }
                        ),
                        Et(oe).text
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "button",
                    {
                      ref: Y,
                      onClick: () => {
                        L(!R), ce(Y);
                      },
                      className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
                      children: [
                        /* @__PURE__ */ t.jsx(tr, { className: "w-4 h-4 mr-1" }),
                        /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-600 hover:text-gray-800", children: "Entities" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: pt,
                      className: "text-purple-600 hover:text-purple-700 p-1",
                      title: k ? "Collapse" : "Expand",
                      children: k ? /* @__PURE__ */ t.jsx(xo, { className: "w-4 h-4" }) : /* @__PURE__ */ t.jsx(so, { className: "w-4 h-4" })
                    }
                  ),
                  ae != null && ae.isLoading ? /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: Ge,
                      disabled: !0,
                      className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
                      children: /* @__PURE__ */ t.jsx(Lt, {})
                    }
                  ) : /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: Ge,
                      disabled: o.isGenerating,
                      className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                      title: "Regenerate",
                      children: o.isGenerating ? /* @__PURE__ */ t.jsx(As, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ t.jsx(Qn, { className: "w-4 h-4" })
                    }
                  ),
                  k && /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => S(!1),
                      className: "text-gray-500 hover:text-gray-700 p-1",
                      title: "Close",
                      children: "×"
                    }
                  )
                ] })
              ] }),
              !(ae != null && ae.isLoading) && /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `bg-white border border-gray-200 rounded p-3 mb-3 ${k ? "flex-1 overflow-y-auto" : ""}`,
                  style: k ? { minHeight: "350px" } : {},
                  children: /* @__PURE__ */ t.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: /* @__PURE__ */ t.jsx("div", { dangerouslySetInnerHTML: { __html: x } }) })
                }
              ),
              !(ae != null && ae.isLoading) && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 flex-wrap", children: [
                /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    onClick: mt,
                    className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ t.jsx(ks, { className: "w-4 h-4" }),
                      /* @__PURE__ */ t.jsx("span", { children: "Reply" })
                    ]
                  }
                ),
                /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    onClick: z,
                    className: "flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ t.jsx(_s, { className: "w-4 h-4" }),
                      /* @__PURE__ */ t.jsx("span", { children: "Reply All" })
                    ]
                  }
                ),
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => {
                      c("");
                    },
                    className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
                    children: "Dismiss"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) }),
    h && E && /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: O,
        className: "border-t border-gray-200 p-6 bg-gray-50",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: m.includes("--- Reply All ---") ? "Reply to All Recipients" : m.includes("--- Forwarded Message ---") ? "Forward Message" : "Reply" }),
            /* @__PURE__ */ t.jsxs("div", { className: "text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "To:" }),
                  " ",
                  m.includes("--- Reply All ---") ? (() => {
                    const U = ye[ye.length - 1], xe = /* @__PURE__ */ new Set([
                      ...U.to
                    ]);
                    return Array.from(xe).join(", ");
                  })() : m.includes("--- Forwarded Message ---") ? "Enter recipient email(s)" : (bt = (At = ye[ye.length - 1]) == null ? void 0 : At.to) == null ? void 0 : bt.join(
                    ", "
                  ),
                  E
                ] }),
                A === "reply" && ((_t = (zt = ye[ye.length - 1]) == null ? void 0 : zt.cc) == null ? void 0 : _t.length) > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Cc:" }),
                  " ",
                  ye[ye.length - 1].cc.join(
                    ", "
                  )
                ] }),
                A === "reply-all" && ((Xe = (ze = ye[ye.length - 1]) == null ? void 0 : ze.bcc) == null ? void 0 : Xe.length) > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Bcc:" }),
                  " ",
                  ye[ye.length - 1].bcc.join(
                    ", "
                  )
                ] })
              ] }),
              /* @__PURE__ */ t.jsxs("p", { children: [
                /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Subject:" }),
                " ",
                m.includes("--- Forwarded Message ---") ? `Fwd: ${e.subject}` : `Re: ${e.subject}`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ t.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Message Content",
              /* @__PURE__ */ t.jsxs("span", { className: "text-gray-500 font-normal", children: [
                " ",
                "- Type your reply below"
              ] })
            ] }),
            /* @__PURE__ */ t.jsx(
              "textarea",
              {
                value: ht(m),
                onChange: (U) => y(U.target.value),
                placeholder: m.includes("--- Reply All ---") ? "Write your reply to all recipients..." : m.includes("--- Forwarded Message ---") ? "Add a message to forward..." : "Write your reply...",
                className: "w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              }
            )
          ] }),
          m === o.generatedReply && o.generatedReply && /* @__PURE__ */ t.jsxs("div", { className: "mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded", children: [
            /* @__PURE__ */ t.jsx($t, { className: "w-3 h-3" }),
            /* @__PURE__ */ t.jsx("span", { children: "Using AI-generated reply" })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: () => j(!1),
                className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: it,
                disabled: !m.trim(),
                className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
                children: m.includes("--- Reply All ---") ? "Send to All" : m.includes("--- Forwarded Message ---") ? "Forward" : "Send Reply"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ t.jsx(
      Fl,
      {
        isOpen: R,
        onClose: () => L(!1),
        triggerRef: ie,
        entitiesInfo: Q
      }
    )
  ] }) });
}, Ol = ({
  isOpen: e,
  onClose: r,
  onSend: n,
  onSaveDraft: s,
  initialData: o,
  isPanel: g = !1
}) => {
  const [b, u] = X((o == null ? void 0 : o.to) || []), [d, a] = X((o == null ? void 0 : o.cc) || []), [l, w] = X((o == null ? void 0 : o.bcc) || []), [i, f] = X((o == null ? void 0 : o.subject) || ""), [p, m] = X((o == null ? void 0 : o.body) || ""), [y, E] = X([]), [v, x] = X(!1), [c, h] = X(!1), [j, A] = X({}), [B, _] = X(!1), [C, N] = X(!1), [D, k] = X(""), [S, R] = X(""), [L, H] = X("");
  be(() => {
    const I = (ne) => {
      T.current && !T.current.contains(ne.target) && r();
    };
    return e && document.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I);
    };
  }, [e, r]);
  const [V, Q] = X({
    isGenerating: !1,
    showAIPanel: !1,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: !1
  }), G = Fe(null), T = Fe(null);
  be(() => {
    if (!e) return;
    const I = setInterval(() => {
      (b.length > 0 || i.trim() || p.trim()) && Z(!0);
    }, 3e4);
    return () => clearInterval(I);
  }, [b, i, p, e]), be(() => {
    const I = (ne) => {
      ne.key === "Escape" && e && fe();
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [e]);
  const O = (I) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(I.trim()), M = () => {
    const I = {};
    if (b.length === 0)
      I.to = "At least one recipient is required";
    else {
      const ee = b.filter((ke) => !O(ke));
      ee.length > 0 && (I.to = `Invalid email addresses: ${ee.join(", ")}`);
    }
    const ne = d.filter((ee) => !O(ee));
    ne.length > 0 && (I.cc = `Invalid CC email addresses: ${ne.join(
      ", "
    )}`);
    const oe = l.filter((ee) => !O(ee));
    return oe.length > 0 && (I.bcc = `Invalid BCC email addresses: ${oe.join(
      ", "
    )}`), A(I), Object.keys(I).length === 0;
  }, P = (I, ne, oe, ee) => {
    if (I.endsWith(",") || I.endsWith(";")) {
      const ke = I.slice(0, -1).trim();
      if (ke && O(ke)) {
        const je = [.../* @__PURE__ */ new Set([...ne, ke])];
        oe(je), ee("");
      } else
        ee(I);
    } else
      ee(I);
  }, Y = (I, ne, oe) => {
    oe(ne.filter((ee) => ee !== I));
  }, ie = (I) => {
    const ne = Array.from(I.target.files || []), oe = 25 * 1024 * 1024, ee = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain"
    ], je = ne.filter(($e) => !($e.size > oe || !ee.includes($e.type))).map(($e) => ({
      file: $e,
      id: Math.random().toString(36).substr(2, 9)
    }));
    E(($e) => [...$e, ...je]);
  }, ce = (I) => {
    E((ne) => ne.filter((oe) => oe.id !== I));
  }, re = (I) => {
    if (I === 0) return "0 Bytes";
    const ne = 1024, oe = ["Bytes", "KB", "MB", "GB"], ee = Math.floor(Math.log(I) / Math.log(ne));
    return parseFloat((I / Math.pow(ne, ee)).toFixed(2)) + " " + oe[ee];
  }, ge = async (I, ne = !1) => {
    if (!i.trim()) {
      alert("Please enter a subject first to generate AI content.");
      return;
    }
    Q((ee) => ({ ...ee, isGenerating: !0 })), await new Promise((ee) => setTimeout(ee, 2e3));
    const oe = me(i, I, b);
    Q((ee) => ({
      ...ee,
      isGenerating: !1,
      showAIPanel: !0,
      generatedContent: oe,
      hasGenerated: !0
    }));
  }, me = (I, ne, oe) => {
    const ee = I.toLowerCase(), ke = oe.length > 0 ? oe[0].split("@")[0].replace(/[._]/g, " ") : "there";
    let je = "general";
    return ee.includes("meeting") || ee.includes("schedule") || ee.includes("appointment") ? je = "meeting" : ee.includes("follow") || ee.includes("update") ? je = "followup" : ee.includes("thank") || ee.includes("appreciation") ? je = "thanks" : ee.includes("request") || ee.includes("help") || ee.includes("support") ? je = "request" : ee.includes("proposal") || ee.includes("offer") ? je = "proposal" : (ee.includes("reminder") || ee.includes("deadline")) && (je = "reminder"), ae(je, ne, ke, I);
  }, ae = (I, ne, oe, ee) => {
    var je;
    const ke = {
      meeting: {
        professional: `Dear ${oe},

I hope this email finds you well. I would like to schedule a meeting to discuss ${ee.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're doing well! I'd love to set up a meeting to chat about ${ee.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${oe},

Let's schedule a meeting about ${ee.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${oe},

I believe we have a valuable opportunity to discuss ${ee.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${oe},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${ee.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're having a great day! Just wanted to circle back on ${ee.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${oe},

Quick follow-up on ${ee.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${oe},

Following up on ${ee.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${oe},

I wanted to take a moment to express my sincere gratitude regarding ${ee.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${oe}!

I just had to reach out and say a huge thank you for ${ee.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${oe},

Thank you for ${ee.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${oe},

Your exceptional contribution to ${ee.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${oe},

I hope this email finds you well. I am writing to request your assistance with ${ee.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're doing well! I'm reaching out because I could really use your help with ${ee.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${oe},

I need assistance with ${ee.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${oe},

I have an exciting opportunity that aligns perfectly with your expertise: ${ee.toLowerCase()}.

This request represents a chance to:
• Showcase your exceptional skills
• Make a significant impact
• Contribute to a meaningful outcome

Your unique qualifications make you the ideal person for this. I'm confident that your involvement would ensure success.

Would you be interested in discussing this further?

Best regards`
      },
      general: {
        professional: `Dear ${oe},

I hope this email finds you well. I am writing to you regarding ${ee.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're having a great day! I wanted to reach out about ${ee.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${oe},

Regarding ${ee.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${oe},

I'm reaching out about an important matter: ${ee.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };
    return ((je = ke[I]) == null ? void 0 : je[ne]) || ke.general[ne];
  }, J = () => {
    m(V.generatedContent), Q((I) => ({ ...I, showAIPanel: !1 }));
  }, De = () => {
    ge(V.selectedTone, !0);
  }, Ee = (I) => {
    Q((ne) => ({ ...ne, selectedTone: I }));
  }, Be = async () => {
    if (M()) {
      _(!0);
      try {
        const I = {
          to: b,
          cc: d,
          bcc: l,
          subject: i,
          body: p,
          attachments: y.map((ne) => ne.file)
        };
        await n(I), fe();
      } catch (I) {
        console.error("Failed to send email:", I);
      } finally {
        _(!1);
      }
    }
  }, Z = async (I = !1) => {
    I || N(!0);
    try {
      const ne = {
        to: b,
        cc: d,
        bcc: l,
        subject: i,
        body: p,
        attachments: y.map((oe) => oe.file)
      };
      await s(ne), I || fe();
    } catch (ne) {
      console.error("Failed to save draft:", ne);
    } finally {
      I || N(!1);
    }
  }, fe = () => {
    if ((b.length > 0 || i.trim() || p.trim() || y.length > 0) && window.confirm(
      "You have unsaved changes. Would you like to save this as a draft before closing?"
    )) {
      Z();
      return;
    }
    u([]), a([]), w([]), f(""), m(""), E([]), k(""), R(""), H(""), x(!1), h(!1), A({}), Q({
      isGenerating: !1,
      showAIPanel: !1,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: !1
    }), r();
  };
  if (!e) return null;
  const le = () => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: g ? "Compose" : "New Message" }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: fe,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ t.jsx(et, { className: "w-5 h-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "To:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            b.map((I, ne) => /* @__PURE__ */ t.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md",
                children: [
                  I,
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => Y(I, b, u),
                      className: "ml-1 text-blue-600 hover:text-blue-800",
                      children: /* @__PURE__ */ t.jsx(et, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ne
            )),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: D,
                onChange: (I) => P(I.target.value, b, u, k),
                onKeyDown: (I) => {
                  I.key === "Enter" && (I.preventDefault(), D.trim() && O(D.trim()) && (u([...b, D.trim()]), k("")));
                },
                placeholder: b.length === 0 ? "Enter email addresses..." : "",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.to && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.to })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => x(!v),
              className: `text-sm px-2 py-1 rounded transition-colors ${v ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Cc"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => h(!c),
              className: `text-sm px-2 py-1 rounded transition-colors ${c ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Bcc"
            }
          )
        ] })
      ] }) }),
      v && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Cc:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            d.map((I, ne) => /* @__PURE__ */ t.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  I,
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => Y(I, d, a),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ t.jsx(et, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ne
            )),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: S,
                onChange: (I) => P(I.target.value, d, a, R),
                onKeyDown: (I) => {
                  I.key === "Enter" && (I.preventDefault(), S.trim() && O(S.trim()) && (a([...d, S.trim()]), R("")));
                },
                placeholder: "Enter CC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.cc && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.cc })
        ] })
      ] }),
      c && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Bcc:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            l.map((I, ne) => /* @__PURE__ */ t.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  I,
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => Y(I, l, w),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ t.jsx(et, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ne
            )),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: L,
                onChange: (I) => P(I.target.value, l, w, H),
                onKeyDown: (I) => {
                  I.key === "Enter" && (I.preventDefault(), L.trim() && O(L.trim()) && (w([...l, L.trim()]), H("")));
                },
                placeholder: "Enter BCC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.bcc && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.bcc })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Subject:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex space-x-2", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "text",
              value: i,
              onChange: (I) => f(I.target.value),
              placeholder: "Enter subject...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          i.trim() && /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: () => ge(V.selectedTone),
              disabled: V.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ t.jsx($t, { className: "w-4 h-4" }),
                /* @__PURE__ */ t.jsx("span", { children: V.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          )
        ] })
      ] }),
      V.showAIPanel && /* @__PURE__ */ t.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ t.jsx($t, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ t.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Content" })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: V.selectedTone,
                onChange: (I) => Ee(I.target.value),
                className: "text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: "professional", children: "Professional" }),
                  /* @__PURE__ */ t.jsx("option", { value: "friendly", children: "Friendly" }),
                  /* @__PURE__ */ t.jsx("option", { value: "concise", children: "Concise" }),
                  /* @__PURE__ */ t.jsx("option", { value: "persuasive", children: "Persuasive" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: De,
                disabled: V.isGenerating,
                className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                title: "Regenerate with selected tone",
                children: /* @__PURE__ */ t.jsx(Qn, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto", children: /* @__PURE__ */ t.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: V.generatedContent }) }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: J,
              className: "flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ t.jsx(Ao, { className: "w-4 h-4" }),
                /* @__PURE__ */ t.jsx("span", { children: "Use This Content" })
              ]
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => Q((I) => ({ ...I, showAIPanel: !1 })),
              className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
              children: "Dismiss"
            }
          )
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "border border-gray-200 rounded-lg p-3", children: [
        /* @__PURE__ */ t.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments" }),
        /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: y.map((I) => /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-2 bg-gray-50 rounded-md",
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ t.jsx(Wn, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: I.file.name }),
                /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "(",
                  re(I.file.size),
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  onClick: () => ce(I.id),
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ t.jsx(Ir, { className: "w-4 h-4" })
                }
              )
            ]
          },
          I.id
        )) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Message:" }),
          p === V.generatedContent && V.generatedContent && /* @__PURE__ */ t.jsxs("div", { className: "text-sm text-purple-600 flex items-center space-x-1", children: [
            /* @__PURE__ */ t.jsx($t, { className: "w-3 h-3" }),
            /* @__PURE__ */ t.jsx("span", { children: "Using AI-generated content" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          "textarea",
          {
            value: p,
            onChange: (I) => m(I.target.value),
            placeholder: "Compose your message...",
            rows: g ? 8 : 12,
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => {
              var I;
              return (I = G.current) == null ? void 0 : I.click();
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(Wn, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: "Attach" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: G,
            type: "file",
            multiple: !0,
            onChange: ie,
            className: "hidden",
            accept: ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: fe,
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Discard"
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => Z(),
            disabled: C,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ t.jsx(bo, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: C ? "Saving..." : "Save Draft" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: Be,
            disabled: B || b.length === 0,
            className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(Ga, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: B ? "Sending..." : "Send" })
            ]
          }
        )
      ] })
    ] })
  ] });
  return g ? /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: T,
      className: "fixed right-2 w-[500px] h-full bg-white border-l border-gray-200 shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out",
      style: { transform: "translateX(0)", zIndex: 60, height: "81%" },
      children: /* @__PURE__ */ t.jsx(le, {})
    }
  ) : /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: T,
      className: "bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col",
      children: /* @__PURE__ */ t.jsx(le, {})
    }
  ) });
}, Pl = [
  {
    id: "work",
    name: "Work",
    color: "#3B82F6",
    // blue-500
    description: "Work-related emails",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "personal",
    name: "Personal",
    color: "#10B981",
    // green-500
    description: "Personal emails",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "important",
    name: "Important",
    color: "#EF4444",
    // red-500
    description: "Important emails that need attention",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "travel",
    name: "Travel",
    color: "#8B5CF6",
    // purple-500
    description: "Travel-related emails",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "urgent",
    name: "Urgent",
    color: "#F59E0B",
    // amber-500
    description: "Urgent emails requiring immediate attention",
    createdAt: "2024-01-10T00:00:00Z",
    isSystem: !1
  },
  {
    id: "clients",
    name: "Clients",
    color: "#06B6D4",
    // cyan-500
    description: "Client communications",
    createdAt: "2024-01-12T00:00:00Z",
    isSystem: !1
  },
  {
    id: "newsletters",
    name: "Newsletters",
    color: "#84CC16",
    // lime-500
    description: "Newsletter subscriptions",
    createdAt: "2024-01-14T00:00:00Z",
    isSystem: !1
  },
  {
    id: "$Forwarded",
    name: "Forwarded",
    color: "#06B6D4",
    // cyan-500
    description: "Forwarded emails",
    createdAt: "2024-01-15T00:00:00Z",
    isSystem: !0
  },
  {
    id: "NonJunk",
    name: "Non-Junk",
    color: "#10B981",
    // green-500 (same as personal for safety tag)
    description: "Recognized as not junk",
    createdAt: "2024-01-16T00:00:00Z",
    isSystem: !0
  },
  {
    id: "\\Seen",
    name: "Seen",
    color: "#3B82F6",
    // blue-500
    description: "Email has been read",
    createdAt: "2024-01-17T00:00:00Z",
    isSystem: !0
  }
], Hn = [
  "#3B82F6",
  // blue-500
  "#10B981",
  // green-500
  "#EF4444",
  // red-500
  "#8B5CF6",
  // purple-500
  "#F59E0B",
  // amber-500
  "#06B6D4",
  // cyan-500
  "#84CC16",
  // lime-500
  "#EC4899",
  // pink-500
  "#6366F1",
  // indigo-500
  "#14B8A6",
  // teal-500
  "#F97316",
  // orange-500
  "#A855F7",
  // violet-500
  "#9CA3AF"
  // gray-400 — newly added for `Seen`
], Il = ({
  isOpen: e,
  onClose: r,
  labels: n,
  onCreateLabel: s,
  onUpdateLabel: o,
  onDeleteLabel: g
}) => {
  const [b, u] = X(""), [d, a] = X(Hn[0]), [l, w] = X(""), [i, f] = X(null), [p, m] = X(""), [y, E] = X(""), [v, x] = X(""), [c, h] = X({}), j = Fe(null);
  be(() => {
    const S = (R) => {
      R.key === "Escape" && e && r();
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [e, r]);
  const A = (S, R) => S.trim() ? S.trim().length < 2 ? (h((H) => ({ ...H, name: "Label name must be at least 2 characters" })), !1) : S.trim().length > 20 ? (h((H) => ({ ...H, name: "Label name must be less than 20 characters" })), !1) : n.find(
    (H) => H.name.toLowerCase() === S.trim().toLowerCase() && H.id !== R
  ) ? (h((H) => ({ ...H, name: "A label with this name already exists" })), !1) : (h((H) => ({ ...H, name: "" })), !0) : (h((H) => ({ ...H, name: "Label name is required" })), !1), B = () => {
    A(b) && (s({
      name: b.trim(),
      color: d,
      description: l.trim() || void 0,
      isSystem: !1
    }), u(""), a(Hn[0]), w(""), h({}));
  }, _ = (S) => {
    f(S.id), m(S.name), E(S.color), x(S.description || ""), h({});
  }, C = () => {
    i && A(p, i) && (o(i, {
      name: p.trim(),
      color: y,
      description: v.trim() || void 0
    }), f(null), m(""), E(""), x(""), h({}));
  }, N = () => {
    f(null), m(""), E(""), x(""), h({});
  }, D = (S) => {
    const R = n.find((H) => H.id === S);
    if (!R) return;
    const L = R.isSystem ? `Are you sure you want to delete the system label "${R.name}"? This action cannot be undone.` : `Are you sure you want to delete the label "${R.name}"? This will remove it from all emails.`;
    window.confirm(L) && g(S);
  }, k = ({ selectedColor: S, onColorChange: R, className: L = "" }) => /* @__PURE__ */ t.jsx("div", { className: `flex flex-wrap gap-2 ${L}`, children: Hn.map((H) => /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => R(H),
      className: `w-6 h-6 rounded-full border-2 transition-all ${S === H ? "border-gray-800 scale-110" : "border-gray-300 hover:border-gray-500"}`,
      style: { backgroundColor: H },
      title: `Select ${H}`
    },
    H
  )) });
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: j,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ t.jsx(kr, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Manage Labels" })
          ] }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: r,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ t.jsx(et, { className: "w-5 h-5 text-gray-500" })
            }
          )
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          /* @__PURE__ */ t.jsx("div", { className: "mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200", children: /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Label Name *" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "text",
                  value: b,
                  onChange: (S) => {
                    u(S.target.value), c.name && A(S.target.value);
                  },
                  onBlur: () => A(b),
                  placeholder: "Enter label name...",
                  className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${c.name ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
                  maxLength: 20
                }
              ),
              c.name && /* @__PURE__ */ t.jsxs("p", { className: "text-red-500 text-sm mt-1 flex items-center", children: [
                /* @__PURE__ */ t.jsx(Y0, { className: "w-3 h-3 mr-1" }),
                c.name
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
                /* @__PURE__ */ t.jsx(po, { className: "w-4 h-4 inline mr-1" }),
                "Color"
              ] }),
              /* @__PURE__ */ t.jsx(
                k,
                {
                  selectedColor: d,
                  onColorChange: a
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description (Optional)" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "text",
                  value: l,
                  onChange: (S) => w(S.target.value),
                  placeholder: "Brief description of this label...",
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  maxLength: 100
                }
              )
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: B,
                disabled: !b.trim(),
                className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium",
                children: [
                  /* @__PURE__ */ t.jsx(Ar, { className: "w-4 h-4" }),
                  /* @__PURE__ */ t.jsx("span", { children: "Create Label" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: [
              "Your Labels (",
              n.length,
              ")"
            ] }),
            n.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
              /* @__PURE__ */ t.jsx(kr, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ t.jsx("h4", { className: "text-lg font-medium text-gray-900 mb-2", children: "No labels yet" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-gray-500", children: "Create your first label above to get started organizing your emails" })
            ] }) : /* @__PURE__ */ t.jsx("div", { className: "space-y-3", children: n.map((S) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                children: i === S.id ? /* @__PURE__ */ t.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ t.jsx(
                        "input",
                        {
                          type: "text",
                          value: p,
                          onChange: (R) => {
                            m(R.target.value), c.name && A(R.target.value, S.id);
                          },
                          onBlur: () => A(p, S.id),
                          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${c.name ? "border-red-300" : "border-gray-300"}`,
                          maxLength: 20
                        }
                      ),
                      c.name && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-xs mt-1", children: c.name })
                    ] }),
                    /* @__PURE__ */ t.jsx(
                      k,
                      {
                        selectedColor: y,
                        onColorChange: E,
                        className: "flex-shrink-0"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (R) => x(R.target.value),
                      placeholder: "Description...",
                      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                      maxLength: 100
                    }
                  ),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ t.jsxs(
                      "button",
                      {
                        onClick: C,
                        disabled: !p.trim() || !!c.name,
                        className: "flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm transition-colors",
                        children: [
                          /* @__PURE__ */ t.jsx(Wa, { className: "w-4 h-4" }),
                          /* @__PURE__ */ t.jsx("span", { children: "Save" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: N,
                        className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex-shrink-0",
                        style: { backgroundColor: S.color }
                      }
                    ),
                    /* @__PURE__ */ t.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-900", children: S.name }),
                        S.isSystem && /* @__PURE__ */ t.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium", children: "System" })
                      ] }),
                      S.description && /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 mt-1", children: S.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-1", children: [
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => _(S),
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        title: "Edit label",
                        children: /* @__PURE__ */ t.jsx(yo, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => D(S.id),
                        className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Delete label",
                        children: /* @__PURE__ */ t.jsx(Ir, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              },
              S.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-end p-6 border-t border-gray-200", children: /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: r,
            className: "px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium",
            children: "Done"
          }
        ) })
      ]
    }
  ) }) : null;
}, qa = {
  //   readStatus: "all",
  page: 1,
  page_size: 20,
  //   sortBy: "newest",
  //   dateRange: { from: "", to: "" },
  //   intent: "all",
  search: ""
}, P0 = Bt({
  name: "filters",
  initialState: qa,
  reducers: {
    setFilterSettings(e, r) {
      return { ...e, ...r.payload };
    },
    resetFilters() {
      return qa;
    }
  }
}), { setFilterSettings: $a, resetFilters: Ql } = P0.actions, Ml = P0.reducer;
function Ll() {
  const [e, r] = X("inbox"), [n, s] = X(null), [o, g] = X(!1), [b, u] = T0(), [d, a] = X([]), [l, w] = X([]), [i, f] = X(Pl), [p, m] = X(!1), [y, E] = X(void 0), [v, x] = X(/* @__PURE__ */ new Set()), [c, h] = X(""), [j, A] = X({
    readStatus: "all",
    starred: !1,
    hasAttachment: !1,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all"
  }), [B, _] = X(void 0), [C, N] = X({
    search: void 0
  }), D = gs();
  be(() => {
    localStorage.getItem("user") || (localStorage.setItem(
      "user",
      '"K6L7I5e3R/pyUXXfAkYb2QV5/WIYawnYYAclNRe35oYNm2KluQtzHo41AXUFB4yHoVJrg/qtj7MJdS/5ZZkfuTBCMXVuZtL8rjrpvePcWUfDJDKgL6PtG4gNp8+qPUwXELEHDiOA/AIn6RaTQNVd5kT2IFS9j0BsgqKMwyd/QFWbrJlwW40wFadaO+xHNur1JdzR66GDRbu+EBmcLijmxQ=="'
    ), localStorage.setItem("project", "4"));
  }, []);
  const [k, S] = X({
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  }), [R, L] = X({
    page: 1,
    page_size: 50,
    search: void 0,
    folder: "inbox"
  });
  be(() => {
    b(R);
    const z = setInterval(() => {
      b(R);
    }, 6e4);
    return () => clearInterval(z);
  }, [b]), be(() => {
    console.log(B);
  }, [B]), be(() => {
    var z, q, $, W, se, Oe;
    if (u != null && u.isSuccess) {
      const Ie = ($ = (q = (z = u == null ? void 0 : u.data) == null ? void 0 : z.response) == null ? void 0 : q.data) == null ? void 0 : $.results, rt = Number(
        (Oe = (se = (W = u == null ? void 0 : u.data) == null ? void 0 : W.response) == null ? void 0 : se.data) == null ? void 0 : Oe.count
      );
      if (B !== void 0 && B !== rt) {
        E(rt - B), m(!0), console.log("difference generated"), localStorage.getItem("notify");
        const nt = setTimeout(() => {
          m(!1);
        }, 3e3);
        return () => clearTimeout(nt);
      }
      if (_(rt), Ie && Array.isArray(Ie)) {
        a(
          Ie.map((ye) => ({
            ...ye,
            intentLabel: ye.labels || "new"
          }))
        );
        const nt = Ie.filter((ye) => ye.is_deleted).map((ye) => ye.message_id), vt = Ie.filter((ye) => nt.includes(ye.message_id)).map((ye) => ({
          ...ye,
          intentLabel: ye.labels || "new"
        }));
        w(vt);
      }
    }
  }, [u]);
  const [H, V] = X(!1), [Q, G] = X(!1), [T, O] = X(!1), [M, P] = X(null), Y = () => {
    const z = {};
    return z.inbox = (d == null ? void 0 : d.filter(
      (q) => (!q.is_read || q.is_read) && !q.is_deleted
    ).length) || 0, z.starred = (d == null ? void 0 : d.filter((q) => q.is_starred).length) || 0, z.snoozed = 0, z.bin = l.filter((q) => q.is_deleted).length || 0, d == null || d.forEach((q) => {
      if (q.labels && q.labels.length > 0) {
        let $ = [];
        switch (d == null || d.map((W) => ({
          ...W,
          emailsOnly: W.to
        })), q.labels[0]) {
          case "work":
            $ = d.filter(
              (W) => {
                var se;
                return ((se = W.customLabels) == null ? void 0 : se.includes("work")) || W.from_address.includes("company.com") || W.from_address.includes("techcorp.com") || W.from_address.includes("consulting.com") || W.from_address.includes("design.studio");
              }
            );
            break;
          case "personal":
            $ = d.filter(
              (W) => {
                var se;
                return ((se = W.customLabels) == null ? void 0 : se.includes("personal")) || W.subject.toLowerCase().includes("welcome") || W.from_address.includes("startup.io");
              }
            );
            break;
          case "important":
            $ = d.filter(
              (W) => {
                var se;
                return ((se = W.customLabels) == null ? void 0 : se.includes("important")) || W.subject.toLowerCase().includes("urgent") || W.subject.toLowerCase().includes("important") || W.is_starred;
              }
            );
            break;
          case "travel":
            $ = d.filter(
              (W) => {
                var se;
                return (se = W.customLabels) == null ? void 0 : se.includes("travel");
              }
            );
            break;
        }
        z[`label-${q.id}`] = $.filter(
          (W) => !W.is_read
        ).length;
      } else {
        const $ = d.filter(
          (W) => {
            var se;
            return (se = W.customLabels) == null ? void 0 : se.includes(q.id);
          }
        );
        z[`custom-label-${q.id}`] = $.filter(
          (W) => !W.is_read
        ).length;
      }
    }), z;
  };
  We(() => Y(), [d, i, l]);
  const ie = (z) => {
    let q = [...z];
    return j.readStatus === "read" ? q = q.filter(($) => $.is_read === !0) : j.readStatus === "unread" ? q = q.filter(($) => $.is_read === !1) : j.readStatus === "all" && (q = z), j.starred && (q = q.filter(($) => $.is_starred)), j.hasAttachment && (q = q.filter(
      ($) => $.messages.some(
        (W) => W.content.toLowerCase().includes("attach") || W.content.toLowerCase().includes("file") || W.content.toLowerCase().includes("document")
      )
    )), (j.dateRange.from || j.dateRange.to) && (q = q.filter(($) => {
      const W = new Date($.created_at), se = j.dateRange.from ? new Date(j.dateRange.from) : null, Oe = j.dateRange.to ? /* @__PURE__ */ new Date(j.dateRange.to + "T23:59:59") : null;
      return (!se || W >= se) && (!Oe || W <= Oe);
    })), j.intent !== "all" && (q = q.filter(($) => {
      if ($.labels)
        switch (j.intent) {
          case "meetings":
            return $.labels === "meeting";
          case "notifications":
            return $.labels === "system";
          case "campaigns":
            return $.labels === "announcement";
          case "support":
            return $.labels === "feedback";
          default:
            return !0;
        }
      const W = $.labels || "new", se = `${$.subject} ${$ == null ? void 0 : $.snippet}`.toLowerCase();
      switch (j.intent) {
        case "meetings":
          return W === "meeting" || se.includes("meeting") || se.includes("schedule") || se.includes("appointment");
        case "notifications":
          return W === "system" || se.includes("notification") || se.includes("system") || se.includes("alert");
        case "campaigns":
          return W === "announcement" || se.includes("newsletter") || se.includes("campaign") || se.includes("marketing");
        case "support":
          return W === "feedback" || se.includes("support") || se.includes("help") || se.includes("issue");
        case "new":
          return W === "new";
        default:
          return W === "general";
      }
    })), q.sort(($, W) => {
      switch (j.sortBy) {
        case "oldest":
          return new Date($.created_at).getTime() - new Date(W.created_at).getTime();
        case "newest":
          return new Date(W.created_at).getTime() - new Date($.created_at).getTime();
        case "subject-az":
          return $.subject.localeCompare(W.subject);
        case "subject-za":
          return W.subject.localeCompare($.subject);
        case "sender-az":
          return $.sender.localeCompare(W.from_address);
        case "sender-za":
          return W.sender.localeCompare($.from_address);
        case "starred-first":
          return $.is_starred && !W.is_starred ? -1 : !$.is_starred && W.is_starred ? 1 : new Date(W.created_at).getTime() - new Date($.created_at).getTime();
        default:
          return new Date(W.created_at).getTime() - new Date($.created_at).getTime();
      }
    }), q;
  }, ce = We(() => d == null ? void 0 : d.map((z) => ({
    ...z,
    messages: z.messages || [],
    conversationEmails: [z]
    // Each email is its own conversation
  })).sort(
    (z, q) => new Date(q.created_at).getTime() - new Date(z.created_at).getTime()
  ), [d]), re = We(() => {
    let z = ce;
    switch (e) {
      case "inbox":
        z = ce == null ? void 0 : ce.filter((q) => !q.is_deleted);
        break;
      case "starred":
        z = ce == null ? void 0 : ce.filter((q) => q.is_starred);
        break;
      case "snoozed":
        z = [];
        break;
      case "bin":
        z = (l == null ? void 0 : l.map((q) => ({
          ...q,
          messages: q.messages || [],
          conversationEmails: [q]
        }))) || [];
        break;
      case "label-work":
        z = ce.filter(
          (q) => {
            var $;
            return (($ = q.customLabels) == null ? void 0 : $.includes("work")) || q.subject.toLowerCase().includes("project") || q.subject.toLowerCase().includes("meeting") || q.subject.toLowerCase().includes("campaign") || q.from_address.includes("company.com") || q.from_address.includes("techcorp.com");
          }
        );
        break;
      case "label-personal":
        z = ce.filter(
          (q) => {
            var $;
            return (($ = q.customLabels) == null ? void 0 : $.includes("personal")) || q.subject.toLowerCase().includes("welcome") || q.from_address.includes("startup.io");
          }
        );
        break;
      case "label-important":
        z = ce.filter(
          (q) => {
            var $;
            return (($ = q.customLabels) == null ? void 0 : $.includes("important")) || q.subject.toLowerCase().includes("urgent") || q.subject.toLowerCase().includes("important") || q.is_starred;
          }
        );
        break;
      case "label-travel":
        z = ce == null ? void 0 : ce.filter(
          (q) => {
            var $;
            return ($ = q.customLabels) == null ? void 0 : $.includes("travel");
          }
        );
        break;
      default:
        if (e.startsWith("custom-label-")) {
          const q = e.replace("custom-label-", "");
          z = ce == null ? void 0 : ce.filter(
            ($) => {
              var W;
              return (W = $.customLabels) == null ? void 0 : W.includes(q);
            }
          );
        }
        break;
    }
    if (c.trim()) {
      const q = c.toLowerCase();
      z = z == null ? void 0 : z.filter(
        ($) => $.subject.toLowerCase().includes(q) || $.from_adress.toLowerCase().includes(q) || $.preview.toLowerCase().includes(q) || $.messages.some(
          (W) => W.content.toLowerCase().includes(q)
        ) || // Search in custom labels
        $.customLabels && $.customLabels.some((W) => {
          const se = i.find((Oe) => Oe.id === W);
          return se == null ? void 0 : se.name.toLowerCase().includes(q);
        })
      );
    }
    return z = ie(z || []), z;
  }, [
    d,
    e,
    c,
    j,
    i,
    ce,
    l
  ]), ge = (z, q = !1) => {
    s(z), G(q), a(
      ($) => $ == null ? void 0 : $.map(
        (W) => W.message_id === z.message_id ? { ...W, is_read: !0 } : W
      )
    );
  }, me = () => {
    G(!1);
  }, ae = (z) => {
    const q = d == null ? void 0 : d.find((W) => W.message_id === z);
    if (!q) return;
    const $ = [
      { id: q.message_id, is_starred: q.is_starred }
    ];
    P({
      type: "star",
      emailIds: [z],
      previousState: $
    }), a(
      (W) => W == null ? void 0 : W.map(
        (se) => se.message_id === z ? { ...se, is_starred: !se.is_starred } : se
      )
    ), e === "starred" && !q.is_starred && (n == null ? void 0 : n.id) === z && s(null);
  }, J = (z) => {
    x((q) => {
      const $ = new Set(q);
      return $.has(z) ? $.delete(z) : $.add(z), $;
    });
  }, De = () => {
    g(!o);
  }, Ee = (z) => {
    D($a({ search: z }));
  }, Be = (z) => {
    A(z), D(
      $a({
        is_starred: z == null ? void 0 : z.starred,
        is_read: z.readStatus,
        has_attachment: z == null ? void 0 : z.hasAttachment
      })
    );
  }, Z = () => {
    O(!0);
  }, fe = () => {
    O(!1);
  }, le = async (z) => {
    await new Promise((q) => setTimeout(q, 1e3)), O(!1);
  }, I = async (z) => {
    await new Promise((q) => setTimeout(q, 500)), z.to.length > 0 || z.subject.trim() || z.body.trim(), O(!1);
  }, ne = (z) => {
    const q = {
      ...z,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    f(($) => [...$, q]);
  }, oe = (z, q) => {
    f(
      ($) => $.map(
        (W) => W.id === z ? { ...W, ...q } : W
      )
    );
  }, ee = (z) => {
    a(
      (q) => q == null ? void 0 : q.map(($) => {
        var W;
        return {
          ...$,
          customLabels: ((W = $.customLabels) == null ? void 0 : W.filter((se) => se !== z)) || []
        };
      })
    ), f((q) => q.filter(($) => $.id !== z)), e === `custom-label-${z}` && r("inbox");
  }, ke = (z, q) => {
    a(
      ($) => $.map(
        (W) => z.includes(W.message_id) ? { ...W, customLabels: q } : W
      )
    ), x(/* @__PURE__ */ new Set());
  }, je = (z, q) => {
    var W;
    const $ = (W = d == null ? void 0 : d.filter((se) => z.includes(se.message_id))) == null ? void 0 : W.map((se) => ({ id: se.message_id, is_read: se.is_read }));
    P({
      type: "markAsRead",
      emailIds: z,
      previousState: $
    }), a(
      (se) => se == null ? void 0 : se.map(
        (Oe) => z.includes(Oe.message_id) ? { ...Oe, is_read: q } : Oe
      )
    ), x(/* @__PURE__ */ new Set());
  }, $e = (z) => {
    const q = d == null ? void 0 : d.filter(
      (W) => z.includes(W.message_id)
    );
    P({
      type: "delete",
      emailIds: z,
      previousState: q
    });
    const $ = d.filter((W) => z.includes(W.message_id)).map((W) => ({ ...W, is_deleted: !0 }));
    w((W) => [...W, ...$]), a(
      (W) => W.map(
        (se) => z.includes(se.message_id) ? { ...se, is_deleted: !0 } : se
      )
    ), x(/* @__PURE__ */ new Set()), n && z.includes(n.message_id) && s(null);
  }, Pe = () => {
    const z = re.map((q) => q.message_id);
    x(new Set(z));
  }, Ue = () => {
    x(/* @__PURE__ */ new Set());
  }, xt = (z) => {
    const q = d == null ? void 0 : d.find(($) => $.message_id === z);
    q && (w(($) => [...$, q]), a(
      ($) => $ == null ? void 0 : $.map(
        (W) => W.message_id === z ? { ...W, is_deleted: !W.is_deleted } : W
      )
    ), n && n.message_id === z && s(null));
  }, it = (z) => {
    const q = l.find(
      ($) => $.message_id === z
    );
    q && (a(($) => [...$, q]), w(
      ($) => $.filter((W) => W.message_id !== z)
    ), n && n.message_id === z && s(null), console.log(`Email restored from bin: ${q.subject}`));
  }, ht = (z) => {
    const q = l.filter(
      ($) => z.includes($.message_id)
    );
    a(($) => [...$, ...q]), w(
      ($) => $.filter((W) => !z.includes(W.message_id))
    ), x(/* @__PURE__ */ new Set()), n && z.includes(n.message_id) && s(null);
  }, Ye = () => {
    if (M) {
      switch (M.type) {
        case "markAsRead":
          a(
            (z) => z == null ? void 0 : z.map((q) => {
              const $ = M.previousState.find(
                (W) => W.id === q.message_id
              );
              return $ ? { ...q, is_read: $.is_read } : q;
            })
          );
          break;
        case "delete":
          a((z) => [
            ...z,
            ...M.previousState
          ]);
          break;
        case "star":
          a(
            (z) => z == null ? void 0 : z.map((q) => {
              const $ = M.previousState.find(
                (W) => W.id === q.message_id
              );
              return $ ? { ...q, is_starred: $.is_starred } : q;
            })
          );
          break;
      }
      P(null);
    }
  }, Ge = (z) => k || {
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  }, pt = (z, q) => {
    S(($) => ({
      ...$,
      [z]: q
    }));
  }, mt = async (z, q = "professional", $ = "reply") => {
    const W = Ge(z.message_id);
    pt(z.message_id, {
      ...W,
      isGenerating: !0,
      showAiReply: !1,
      replyType: $
    }), await new Promise((Ie) => setTimeout(Ie, 2e3));
    let se = "";
    const Oe = d[d.length - 1];
    $ && (se = Oe == null ? void 0 : Oe.ai_response), S((Ie) => ({
      ...Ie,
      isGenerating: !1,
      showAiReply: !0,
      generatedReply: se,
      tone: q
    }));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: " flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ t.jsx(
      Fo,
      {
        onMenuToggle: De,
        onSearch: Ee,
        onFiltersChange: Be,
        filters: j,
        checkedEmails: v,
        onBulkMarkAsRead: je,
        onBulkDelete: $e,
        onSelectAll: Pe,
        onUnselectAll: Ue,
        onUndo: Ye,
        hasSelection: v.size > 0,
        onComposeClick: Z
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex overflow-hidden", children: (u == null ? void 0 : u.isSuccess) && /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "flex-1 flex min-w-0 transition-all duration-200",
        children: Q ? /* @__PURE__ */ t.jsx(
          za,
          {
            email: n,
            onClose: () => s(null),
            onBack: me,
            isFullPage: !0,
            aiReplyState: Ge((n == null ? void 0 : n.message_id) || ""),
            onGenerateAiReply: mt,
            onAiReplyStateChange: (z) => (n == null ? void 0 : n.message_id) && pt(n.message_id, z),
            customLabels: i,
            onEmailLabelsChange: ke,
            onCreateLabel: ne,
            onDeleteEmail: xt,
            onRestoreEmail: it,
            activeSection: e
          }
        ) : /* @__PURE__ */ t.jsxs("div", { className: "flex flex-1 h-full", children: [
          u != null && u.isLoading || u != null && u.isFetching ? /* @__PURE__ */ t.jsx(Ro, {}) : /* @__PURE__ */ t.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ t.jsx(
            Sl,
            {
              emails: re,
              selectedEmailId: (n == null ? void 0 : n.message_id) || null,
              onEmailSelect: ge,
              onStarToggle: ae,
              onCheckToggle: J,
              checkedEmails: v,
              activeSection: e,
              customLabels: i,
              onEmailLabelsChange: ke,
              onCreateLabel: ne,
              onBulkMarkAsRead: je,
              onBulkDelete: $e,
              onBulkRestore: ht,
              onSelectAll: Pe,
              onUnselectAll: Ue,
              setEmails: a,
              readStatus: j == null ? void 0 : j.readStatus,
              searchFilter: C
            }
          ) }),
          /* @__PURE__ */ t.jsx(
            za,
            {
              email: n,
              onClose: () => s(null),
              isFullPage: !1,
              aiReplyState: Ge((n == null ? void 0 : n.id) || ""),
              onGenerateAiReply: mt,
              onAiReplyStateChange: (z) => (n == null ? void 0 : n.message_id) && pt(n.message_id, z),
              customLabels: i,
              onEmailLabelsChange: ke,
              onCreateLabel: ne,
              onDeleteEmail: xt,
              onRestoreEmail: it,
              activeSection: e,
              onStarToggle: ae
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ t.jsx(
      Il,
      {
        isOpen: H,
        onClose: () => V(!1),
        labels: i,
        onCreateLabel: ne,
        onUpdateLabel: oe,
        onDeleteLabel: ee
      }
    ),
    T && /* @__PURE__ */ t.jsx(
      Ol,
      {
        isOpen: T,
        onClose: fe,
        onSend: le,
        onSaveDraft: I,
        isPanel: !0
      }
    )
  ] });
}
const zl = {
  [Pr.reducerPath]: Pr.reducer,
  filters: Ml
}, ql = (e) => e().concat(Pr.middleware), Ul = Bi({
  reducer: {
    ...zl
  },
  middleware: ql
}), Kl = () => /* @__PURE__ */ t.jsx(Ll, {});
export {
  Pr as InboxService,
  Kl as default,
  ql as inboxServiceMiddleware,
  zl as inboxServiceReducer,
  Ul as store
};
