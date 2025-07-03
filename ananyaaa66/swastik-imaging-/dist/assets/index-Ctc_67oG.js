var sf = (r) => {
  throw TypeError(r);
};
var Al = (r, s, a) => s.has(r) || sf("Cannot " + a);
var A = (r, s, a) => (
    Al(r, s, "read from private field"), a ? a.call(r) : s.get(r)
  ),
  be = (r, s, a) =>
    s.has(r)
      ? sf("Cannot add the same private member more than once")
      : s instanceof WeakSet
        ? s.add(r)
        : s.set(r, a),
  pe = (r, s, a, u) => (
    Al(r, s, "write to private field"), u ? u.call(r, a) : s.set(r, a), a
  ),
  ut = (r, s, a) => (Al(r, s, "access private method"), a);
var Ma = (r, s, a, u) => ({
  set _(d) {
    pe(r, s, d, a);
  },
  get _() {
    return A(r, s, u);
  },
});
function pg(r, s) {
  for (var a = 0; a < s.length; a++) {
    const u = s[a];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in r)) {
          const p = Object.getOwnPropertyDescriptor(u, d);
          p &&
            Object.defineProperty(
              r,
              d,
              p.get ? p : { enumerable: !0, get: () => u[d] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) u(d);
  new MutationObserver((d) => {
    for (const p of d)
      if (p.type === "childList")
        for (const m of p.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && u(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(d) {
    const p = {};
    return (
      d.integrity && (p.integrity = d.integrity),
      d.referrerPolicy && (p.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (p.credentials = "omit")
          : (p.credentials = "same-origin"),
      p
    );
  }
  function u(d) {
    if (d.ep) return;
    d.ep = !0;
    const p = a(d);
    fetch(d.href, p);
  }
})();
function Yf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Ll = { exports: {} },
  ri = {},
  Dl = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var af;
function mg() {
  if (af) return he;
  af = 1;
  var r = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    p = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    j = Symbol.iterator;
  function y(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (j && S[j]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    R = {};
  function C(S, M, G) {
    (this.props = S),
      (this.context = M),
      (this.refs = R),
      (this.updater = G || _);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (S, M) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, M, "setState");
    }),
    (C.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function D() {}
  D.prototype = C.prototype;
  function I(S, M, G) {
    (this.props = S),
      (this.context = M),
      (this.refs = R),
      (this.updater = G || _);
  }
  var z = (I.prototype = new D());
  (z.constructor = I), L(z, C.prototype), (z.isPureReactComponent = !0);
  var H = Array.isArray,
    q = Object.prototype.hasOwnProperty,
    oe = { current: null },
    ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(S, M, G) {
    var ae,
      fe = {},
      re = null,
      Se = null;
    if (M != null)
      for (ae in (M.ref !== void 0 && (Se = M.ref),
      M.key !== void 0 && (re = "" + M.key),
      M))
        q.call(M, ae) && !ee.hasOwnProperty(ae) && (fe[ae] = M[ae]);
    var ye = arguments.length - 2;
    if (ye === 1) fe.children = G;
    else if (1 < ye) {
      for (var je = Array(ye), Ke = 0; Ke < ye; Ke++)
        je[Ke] = arguments[Ke + 2];
      fe.children = je;
    }
    if (S && S.defaultProps)
      for (ae in ((ye = S.defaultProps), ye))
        fe[ae] === void 0 && (fe[ae] = ye[ae]);
    return {
      $$typeof: r,
      type: S,
      key: re,
      ref: Se,
      props: fe,
      _owner: oe.current,
    };
  }
  function ve(S, M) {
    return {
      $$typeof: r,
      type: S.type,
      key: M,
      ref: S.ref,
      props: S.props,
      _owner: S._owner,
    };
  }
  function _e(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Pe(S) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (G) {
        return M[G];
      })
    );
  }
  var le = /\/+/g;
  function Te(S, M) {
    return typeof S == "object" && S !== null && S.key != null
      ? Pe("" + S.key)
      : M.toString(36);
  }
  function te(S, M, G, ae, fe) {
    var re = typeof S;
    (re === "undefined" || re === "boolean") && (S = null);
    var Se = !1;
    if (S === null) Se = !0;
    else
      switch (re) {
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case s:
              Se = !0;
          }
      }
    if (Se)
      return (
        (Se = S),
        (fe = fe(Se)),
        (S = ae === "" ? "." + Te(Se, 0) : ae),
        H(fe)
          ? ((G = ""),
            S != null && (G = S.replace(le, "$&/") + "/"),
            te(fe, M, G, "", function (Ke) {
              return Ke;
            }))
          : fe != null &&
            (_e(fe) &&
              (fe = ve(
                fe,
                G +
                  (!fe.key || (Se && Se.key === fe.key)
                    ? ""
                    : ("" + fe.key).replace(le, "$&/") + "/") +
                  S,
              )),
            M.push(fe)),
        1
      );
    if (((Se = 0), (ae = ae === "" ? "." : ae + ":"), H(S)))
      for (var ye = 0; ye < S.length; ye++) {
        re = S[ye];
        var je = ae + Te(re, ye);
        Se += te(re, M, G, je, fe);
      }
    else if (((je = y(S)), typeof je == "function"))
      for (S = je.call(S), ye = 0; !(re = S.next()).done; )
        (re = re.value), (je = ae + Te(re, ye++)), (Se += te(re, M, G, je, fe));
    else if (re === "object")
      throw (
        ((M = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return Se;
  }
  function xe(S, M, G) {
    if (S == null) return S;
    var ae = [],
      fe = 0;
    return (
      te(S, ae, "", "", function (re) {
        return M.call(G, re, fe++);
      }),
      ae
    );
  }
  function me(S) {
    if (S._status === -1) {
      var M = S._result;
      (M = M()),
        M.then(
          function (G) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = G));
          },
          function (G) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = G));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = M));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ge = { current: null },
    O = { transition: null },
    Q = {
      ReactCurrentDispatcher: ge,
      ReactCurrentBatchConfig: O,
      ReactCurrentOwner: oe,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (he.Children = {
      map: xe,
      forEach: function (S, M, G) {
        xe(
          S,
          function () {
            M.apply(this, arguments);
          },
          G,
        );
      },
      count: function (S) {
        var M = 0;
        return (
          xe(S, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (S) {
        return (
          xe(S, function (M) {
            return M;
          }) || []
        );
      },
      only: function (S) {
        if (!_e(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    }),
    (he.Component = C),
    (he.Fragment = a),
    (he.Profiler = d),
    (he.PureComponent = I),
    (he.StrictMode = u),
    (he.Suspense = v),
    (he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (he.act = W),
    (he.cloneElement = function (S, M, G) {
      if (S == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            S +
            ".",
        );
      var ae = L({}, S.props),
        fe = S.key,
        re = S.ref,
        Se = S._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((re = M.ref), (Se = oe.current)),
          M.key !== void 0 && (fe = "" + M.key),
          S.type && S.type.defaultProps)
        )
          var ye = S.type.defaultProps;
        for (je in M)
          q.call(M, je) &&
            !ee.hasOwnProperty(je) &&
            (ae[je] = M[je] === void 0 && ye !== void 0 ? ye[je] : M[je]);
      }
      var je = arguments.length - 2;
      if (je === 1) ae.children = G;
      else if (1 < je) {
        ye = Array(je);
        for (var Ke = 0; Ke < je; Ke++) ye[Ke] = arguments[Ke + 2];
        ae.children = ye;
      }
      return {
        $$typeof: r,
        type: S.type,
        key: fe,
        ref: re,
        props: ae,
        _owner: Se,
      };
    }),
    (he.createContext = function (S) {
      return (
        (S = {
          $$typeof: m,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (S.Provider = { $$typeof: p, _context: S }),
        (S.Consumer = S)
      );
    }),
    (he.createElement = ne),
    (he.createFactory = function (S) {
      var M = ne.bind(null, S);
      return (M.type = S), M;
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (he.isValidElement = _e),
    (he.lazy = function (S) {
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: me };
    }),
    (he.memo = function (S, M) {
      return { $$typeof: x, type: S, compare: M === void 0 ? null : M };
    }),
    (he.startTransition = function (S) {
      var M = O.transition;
      O.transition = {};
      try {
        S();
      } finally {
        O.transition = M;
      }
    }),
    (he.unstable_act = W),
    (he.useCallback = function (S, M) {
      return ge.current.useCallback(S, M);
    }),
    (he.useContext = function (S) {
      return ge.current.useContext(S);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (S) {
      return ge.current.useDeferredValue(S);
    }),
    (he.useEffect = function (S, M) {
      return ge.current.useEffect(S, M);
    }),
    (he.useId = function () {
      return ge.current.useId();
    }),
    (he.useImperativeHandle = function (S, M, G) {
      return ge.current.useImperativeHandle(S, M, G);
    }),
    (he.useInsertionEffect = function (S, M) {
      return ge.current.useInsertionEffect(S, M);
    }),
    (he.useLayoutEffect = function (S, M) {
      return ge.current.useLayoutEffect(S, M);
    }),
    (he.useMemo = function (S, M) {
      return ge.current.useMemo(S, M);
    }),
    (he.useReducer = function (S, M, G) {
      return ge.current.useReducer(S, M, G);
    }),
    (he.useRef = function (S) {
      return ge.current.useRef(S);
    }),
    (he.useState = function (S) {
      return ge.current.useState(S);
    }),
    (he.useSyncExternalStore = function (S, M, G) {
      return ge.current.useSyncExternalStore(S, M, G);
    }),
    (he.useTransition = function () {
      return ge.current.useTransition();
    }),
    (he.version = "18.3.1"),
    he
  );
}
var of;
function au() {
  return of || ((of = 1), (Dl.exports = mg())), Dl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lf;
function hg() {
  if (lf) return ri;
  lf = 1;
  var r = au(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, v, x) {
    var b,
      j = {},
      y = null,
      _ = null;
    x !== void 0 && (y = "" + x),
      v.key !== void 0 && (y = "" + v.key),
      v.ref !== void 0 && (_ = v.ref);
    for (b in v) u.call(v, b) && !p.hasOwnProperty(b) && (j[b] = v[b]);
    if (h && h.defaultProps)
      for (b in ((v = h.defaultProps), v)) j[b] === void 0 && (j[b] = v[b]);
    return {
      $$typeof: s,
      type: h,
      key: y,
      ref: _,
      props: j,
      _owner: d.current,
    };
  }
  return (ri.Fragment = a), (ri.jsx = m), (ri.jsxs = m), ri;
}
var uf;
function gg() {
  return uf || ((uf = 1), (Ll.exports = hg())), Ll.exports;
}
var l = gg(),
  _a = {},
  Il = { exports: {} },
  St = {},
  zl = { exports: {} },
  Fl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cf;
function yg() {
  return (
    cf ||
      ((cf = 1),
      (function (r) {
        function s(O, Q) {
          var W = O.length;
          O.push(Q);
          e: for (; 0 < W; ) {
            var S = (W - 1) >>> 1,
              M = O[S];
            if (0 < d(M, Q)) (O[S] = Q), (O[W] = M), (W = S);
            else break e;
          }
        }
        function a(O) {
          return O.length === 0 ? null : O[0];
        }
        function u(O) {
          if (O.length === 0) return null;
          var Q = O[0],
            W = O.pop();
          if (W !== Q) {
            O[0] = W;
            e: for (var S = 0, M = O.length, G = M >>> 1; S < G; ) {
              var ae = 2 * (S + 1) - 1,
                fe = O[ae],
                re = ae + 1,
                Se = O[re];
              if (0 > d(fe, W))
                re < M && 0 > d(Se, fe)
                  ? ((O[S] = Se), (O[re] = W), (S = re))
                  : ((O[S] = fe), (O[ae] = W), (S = ae));
              else if (re < M && 0 > d(Se, W))
                (O[S] = Se), (O[re] = W), (S = re);
              else break e;
            }
          }
          return Q;
        }
        function d(O, Q) {
          var W = O.sortIndex - Q.sortIndex;
          return W !== 0 ? W : O.id - Q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var p = performance;
          r.unstable_now = function () {
            return p.now();
          };
        } else {
          var m = Date,
            h = m.now();
          r.unstable_now = function () {
            return m.now() - h;
          };
        }
        var v = [],
          x = [],
          b = 1,
          j = null,
          y = 3,
          _ = !1,
          L = !1,
          R = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z(O) {
          for (var Q = a(x); Q !== null; ) {
            if (Q.callback === null) u(x);
            else if (Q.startTime <= O)
              u(x), (Q.sortIndex = Q.expirationTime), s(v, Q);
            else break;
            Q = a(x);
          }
        }
        function H(O) {
          if (((R = !1), z(O), !L))
            if (a(v) !== null) (L = !0), me(q);
            else {
              var Q = a(x);
              Q !== null && ge(H, Q.startTime - O);
            }
        }
        function q(O, Q) {
          (L = !1), R && ((R = !1), D(ne), (ne = -1)), (_ = !0);
          var W = y;
          try {
            for (
              z(Q), j = a(v);
              j !== null && (!(j.expirationTime > Q) || (O && !Pe()));

            ) {
              var S = j.callback;
              if (typeof S == "function") {
                (j.callback = null), (y = j.priorityLevel);
                var M = S(j.expirationTime <= Q);
                (Q = r.unstable_now()),
                  typeof M == "function"
                    ? (j.callback = M)
                    : j === a(v) && u(v),
                  z(Q);
              } else u(v);
              j = a(v);
            }
            if (j !== null) var G = !0;
            else {
              var ae = a(x);
              ae !== null && ge(H, ae.startTime - Q), (G = !1);
            }
            return G;
          } finally {
            (j = null), (y = W), (_ = !1);
          }
        }
        var oe = !1,
          ee = null,
          ne = -1,
          ve = 5,
          _e = -1;
        function Pe() {
          return !(r.unstable_now() - _e < ve);
        }
        function le() {
          if (ee !== null) {
            var O = r.unstable_now();
            _e = O;
            var Q = !0;
            try {
              Q = ee(!0, O);
            } finally {
              Q ? Te() : ((oe = !1), (ee = null));
            }
          } else oe = !1;
        }
        var Te;
        if (typeof I == "function")
          Te = function () {
            I(le);
          };
        else if (typeof MessageChannel < "u") {
          var te = new MessageChannel(),
            xe = te.port2;
          (te.port1.onmessage = le),
            (Te = function () {
              xe.postMessage(null);
            });
        } else
          Te = function () {
            C(le, 0);
          };
        function me(O) {
          (ee = O), oe || ((oe = !0), Te());
        }
        function ge(O, Q) {
          ne = C(function () {
            O(r.unstable_now());
          }, Q);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            L || _ || ((L = !0), me(q));
          }),
          (r.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ve = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return a(v);
          }),
          (r.unstable_next = function (O) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = y;
            }
            var W = y;
            y = Q;
            try {
              return O();
            } finally {
              y = W;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (O, Q) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var W = y;
            y = O;
            try {
              return Q();
            } finally {
              y = W;
            }
          }),
          (r.unstable_scheduleCallback = function (O, Q, W) {
            var S = r.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? S + W : S))
                : (W = S),
              O)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = W + M),
              (O = {
                id: b++,
                callback: Q,
                priorityLevel: O,
                startTime: W,
                expirationTime: M,
                sortIndex: -1,
              }),
              W > S
                ? ((O.sortIndex = W),
                  s(x, O),
                  a(v) === null &&
                    O === a(x) &&
                    (R ? (D(ne), (ne = -1)) : (R = !0), ge(H, W - S)))
                : ((O.sortIndex = M), s(v, O), L || _ || ((L = !0), me(q))),
              O
            );
          }),
          (r.unstable_shouldYield = Pe),
          (r.unstable_wrapCallback = function (O) {
            var Q = y;
            return function () {
              var W = y;
              y = Q;
              try {
                return O.apply(this, arguments);
              } finally {
                y = W;
              }
            };
          });
      })(Fl)),
    Fl
  );
}
var df;
function vg() {
  return df || ((df = 1), (zl.exports = yg())), zl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff;
function xg() {
  if (ff) return St;
  ff = 1;
  var r = au(),
    s = vg();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    d = {};
  function p(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    b = {},
    j = {};
  function y(e) {
    return v.call(j, e)
      ? !0
      : v.call(b, e)
        ? !1
        : x.test(e)
          ? (j[e] = !0)
          : ((b[e] = !0), !1);
  }
  function _(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function L(e, t, n, i) {
    if (t === null || typeof t > "u" || _(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function R(e, t, n, i, o, c, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = f);
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      C[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      C[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        C[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      C[e] = new R(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        C[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      C[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      C[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      C[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      C[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var D = /[\-:]([a-z])/g;
  function I(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(D, I);
      C[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(D, I);
        C[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(D, I);
      C[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      C[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (C.xlinkHref = new R(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      C[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function z(e, t, n, i) {
    var o = C.hasOwnProperty(t) ? C[t] : null;
    (o !== null
      ? o.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (L(t, n, o, i) && (n = null),
      i || o === null
        ? y(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
          : ((t = o.attributeName),
            (i = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    q = Symbol.for("react.element"),
    oe = Symbol.for("react.portal"),
    ee = Symbol.for("react.fragment"),
    ne = Symbol.for("react.strict_mode"),
    ve = Symbol.for("react.profiler"),
    _e = Symbol.for("react.provider"),
    Pe = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    Te = Symbol.for("react.suspense"),
    te = Symbol.for("react.suspense_list"),
    xe = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ge = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (O && e[O]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    S;
  function M(e) {
    if (S === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        S = (t && t[1]) || "";
      }
    return (
      `
` +
      S +
      e
    );
  }
  var G = !1;
  function ae(e, t) {
    if (!e || G) return "";
    G = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (T) {
            var i = T;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (T) {
            i = T;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          i = T;
        }
        e();
      }
    } catch (T) {
      if (T && i && typeof T.stack == "string") {
        for (
          var o = T.stack.split(`
`),
            c = i.stack.split(`
`),
            f = o.length - 1,
            g = c.length - 1;
          1 <= f && 0 <= g && o[f] !== c[g];

        )
          g--;
        for (; 1 <= f && 0 <= g; f--, g--)
          if (o[f] !== c[g]) {
            if (f !== 1 || g !== 1)
              do
                if ((f--, g--, 0 > g || o[f] !== c[g])) {
                  var w =
                    `
` + o[f].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= f && 0 <= g);
            break;
          }
      }
    } finally {
      (G = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function fe(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ae(e.type, !1)), e;
      case 11:
        return (e = ae(e.type.render, !1)), e;
      case 1:
        return (e = ae(e.type, !0)), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ee:
        return "Fragment";
      case oe:
        return "Portal";
      case ve:
        return "Profiler";
      case ne:
        return "StrictMode";
      case Te:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Pe:
          return (e.displayName || "Context") + ".Consumer";
        case _e:
          return (e._context.displayName || "Context") + ".Provider";
        case le:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case xe:
          return (
            (t = e.displayName || null), t !== null ? t : re(e.type) || "Memo"
          );
        case me:
          (t = e._payload), (e = e._init);
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function Se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ye(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function je(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ke(e) {
    var t = je(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (f) {
            (i = "" + f), c.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (f) {
            i = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Pr(e) {
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function Tr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = je(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Rr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Mr(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ms(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (n = ye(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ln(e, t) {
    (t = t.checked), t != null && z(e, "checked", t, !1);
  }
  function hs(e, t) {
    ln(e, t);
    var n = ye(t.value),
      i = t.type;
    if (n != null)
      i === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? st(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && st(e, t.type, ye(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function xi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function st(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mt = Array.isArray;
  function Nn(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ye(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function gs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function nr(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Mt(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ye(n) };
  }
  function wi(e, t) {
    var n = ye(t.value),
      i = ye(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      i != null && (e.defaultValue = "" + i);
  }
  function ys(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function _r(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? _r(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var rr,
    un = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, i, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, i, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          rr = rr || document.createElement("div"),
            rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = rr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Sn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var sr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ni = ["Webkit", "ms", "Moz", "O"];
  Object.keys(sr).forEach(function (e) {
    Ni.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
    });
  });
  function vs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Si(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var i = n.indexOf("--") === 0,
          o = vs(n, t[n], i);
        n === "float" && (n = "cssFloat"), i ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var xs = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function _t(e, t) {
    if (t) {
      if (xs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ws(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ce = null;
  function Ce(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ke = null,
    et = null,
    tt = null;
  function ir(e) {
    if ((e = $s(e))) {
      if (typeof ke != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Qi(t)), ke(e.stateNode, e.type, t));
    }
  }
  function ji(e) {
    et ? (tt ? tt.push(e) : (tt = [e])) : (et = e);
  }
  function ju() {
    if (et) {
      var e = et,
        t = tt;
      if (((tt = et = null), ir(e), t)) for (e = 0; e < t.length; e++) ir(t[e]);
    }
  }
  function ku(e, t) {
    return e(t);
  }
  function bu() {}
  var Ya = !1;
  function Cu(e, t, n) {
    if (Ya) return e(t, n);
    Ya = !0;
    try {
      return ku(e, t, n);
    } finally {
      (Ya = !1), (et !== null || tt !== null) && (bu(), ju());
    }
  }
  function Ns(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Qi(n);
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var Xa = !1;
  if (h)
    try {
      var Ss = {};
      Object.defineProperty(Ss, "passive", {
        get: function () {
          Xa = !0;
        },
      }),
        window.addEventListener("test", Ss, Ss),
        window.removeEventListener("test", Ss, Ss);
    } catch {
      Xa = !1;
    }
  function xm(e, t, n, i, o, c, f, g, w) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (U) {
      this.onError(U);
    }
  }
  var js = !1,
    ki = null,
    bi = !1,
    Za = null,
    wm = {
      onError: function (e) {
        (js = !0), (ki = e);
      },
    };
  function Nm(e, t, n, i, o, c, f, g, w) {
    (js = !1), (ki = null), xm.apply(wm, arguments);
  }
  function Sm(e, t, n, i, o, c, f, g, w) {
    if ((Nm.apply(this, arguments), js)) {
      if (js) {
        var T = ki;
        (js = !1), (ki = null);
      } else throw Error(a(198));
      bi || ((bi = !0), (Za = T));
    }
  }
  function ar(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Eu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Pu(e) {
    if (ar(e) !== e) throw Error(a(188));
  }
  function jm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ar(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (((i = o.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === n) return Pu(o), e;
          if (c === i) return Pu(o), t;
          c = c.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== i.return) (n = o), (i = c);
      else {
        for (var f = !1, g = o.child; g; ) {
          if (g === n) {
            (f = !0), (n = o), (i = c);
            break;
          }
          if (g === i) {
            (f = !0), (i = o), (n = c);
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = c.child; g; ) {
            if (g === n) {
              (f = !0), (n = c), (i = o);
              break;
            }
            if (g === i) {
              (f = !0), (i = c), (n = o);
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(a(189));
        }
      }
      if (n.alternate !== i) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Tu(e) {
    return (e = jm(e)), e !== null ? Ru(e) : null;
  }
  function Ru(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ru(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Mu = s.unstable_scheduleCallback,
    _u = s.unstable_cancelCallback,
    km = s.unstable_shouldYield,
    bm = s.unstable_requestPaint,
    He = s.unstable_now,
    Cm = s.unstable_getCurrentPriorityLevel,
    Ja = s.unstable_ImmediatePriority,
    Ou = s.unstable_UserBlockingPriority,
    Ci = s.unstable_NormalPriority,
    Em = s.unstable_LowPriority,
    Au = s.unstable_IdlePriority,
    Ei = null,
    Jt = null;
  function Pm(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
      try {
        Jt.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ut = Math.clz32 ? Math.clz32 : Mm,
    Tm = Math.log,
    Rm = Math.LN2;
  function Mm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Tm(e) / Rm) | 0)) | 0;
  }
  var Pi = 64,
    Ti = 4194304;
  function ks(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ri(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      o = e.suspendedLanes,
      c = e.pingedLanes,
      f = n & 268435455;
    if (f !== 0) {
      var g = f & ~o;
      g !== 0 ? (i = ks(g)) : ((c &= f), c !== 0 && (i = ks(c)));
    } else (f = n & ~o), f !== 0 ? (i = ks(f)) : c !== 0 && (i = ks(c));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      (t & o) === 0 &&
      ((o = i & -i), (c = t & -t), o >= c || (o === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((i & 4) !== 0 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (n = 31 - Ut(t)), (o = 1 << n), (i |= e[n]), (t &= ~o);
    return i;
  }
  function _m(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Om(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        o = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var f = 31 - Ut(c),
        g = 1 << f,
        w = o[f];
      w === -1
        ? ((g & n) === 0 || (g & i) !== 0) && (o[f] = _m(g, t))
        : w <= t && (e.expiredLanes |= g),
        (c &= ~g);
    }
  }
  function eo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Lu() {
    var e = Pi;
    return (Pi <<= 1), (Pi & 4194240) === 0 && (Pi = 64), e;
  }
  function to(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bs(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ut(t)),
      (e[t] = n);
  }
  function Am(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Ut(n),
        c = 1 << o;
      (t[o] = 0), (i[o] = -1), (e[o] = -1), (n &= ~c);
    }
  }
  function no(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - Ut(n),
        o = 1 << i;
      (o & t) | (e[i] & t) && (e[i] |= t), (n &= ~o);
    }
  }
  var Ee = 0;
  function Du(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Iu,
    ro,
    zu,
    Fu,
    Uu,
    so = !1,
    Mi = [],
    jn = null,
    kn = null,
    bn = null,
    Cs = new Map(),
    Es = new Map(),
    Cn = [],
    Lm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jn = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        bn = null;
        break;
      case "pointerover":
      case "pointerout":
        Cs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Es.delete(t.pointerId);
    }
  }
  function Ps(e, t, n, i, o, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [o],
        }),
        t !== null && ((t = $s(t)), t !== null && ro(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Dm(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return (jn = Ps(jn, e, t, n, i, o)), !0;
      case "dragenter":
        return (kn = Ps(kn, e, t, n, i, o)), !0;
      case "mouseover":
        return (bn = Ps(bn, e, t, n, i, o)), !0;
      case "pointerover":
        var c = o.pointerId;
        return Cs.set(c, Ps(Cs.get(c) || null, e, t, n, i, o)), !0;
      case "gotpointercapture":
        return (
          (c = o.pointerId), Es.set(c, Ps(Es.get(c) || null, e, t, n, i, o)), !0
        );
    }
    return !1;
  }
  function $u(e) {
    var t = or(e.target);
    if (t !== null) {
      var n = ar(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Eu(n)), t !== null)) {
            (e.blockedOn = t),
              Uu(e.priority, function () {
                zu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        (ce = i), n.target.dispatchEvent(i), (ce = null);
      } else return (t = $s(n)), t !== null && ro(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Hu(e, t, n) {
    _i(e) && n.delete(t);
  }
  function Im() {
    (so = !1),
      jn !== null && _i(jn) && (jn = null),
      kn !== null && _i(kn) && (kn = null),
      bn !== null && _i(bn) && (bn = null),
      Cs.forEach(Hu),
      Es.forEach(Hu);
  }
  function Ts(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      so ||
        ((so = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Im)));
  }
  function Rs(e) {
    function t(o) {
      return Ts(o, e);
    }
    if (0 < Mi.length) {
      Ts(Mi[0], e);
      for (var n = 1; n < Mi.length; n++) {
        var i = Mi[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      jn !== null && Ts(jn, e),
        kn !== null && Ts(kn, e),
        bn !== null && Ts(bn, e),
        Cs.forEach(t),
        Es.forEach(t),
        n = 0;
      n < Cn.length;
      n++
    )
      (i = Cn[n]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Cn.length && ((n = Cn[0]), n.blockedOn === null); )
      $u(n), n.blockedOn === null && Cn.shift();
  }
  var Or = H.ReactCurrentBatchConfig,
    Oi = !0;
  function zm(e, t, n, i) {
    var o = Ee,
      c = Or.transition;
    Or.transition = null;
    try {
      (Ee = 1), io(e, t, n, i);
    } finally {
      (Ee = o), (Or.transition = c);
    }
  }
  function Fm(e, t, n, i) {
    var o = Ee,
      c = Or.transition;
    Or.transition = null;
    try {
      (Ee = 4), io(e, t, n, i);
    } finally {
      (Ee = o), (Or.transition = c);
    }
  }
  function io(e, t, n, i) {
    if (Oi) {
      var o = ao(e, t, n, i);
      if (o === null) ko(e, t, i, Ai, n), Bu(e, i);
      else if (Dm(o, e, t, n, i)) i.stopPropagation();
      else if ((Bu(e, i), t & 4 && -1 < Lm.indexOf(e))) {
        for (; o !== null; ) {
          var c = $s(o);
          if (
            (c !== null && Iu(c),
            (c = ao(e, t, n, i)),
            c === null && ko(e, t, i, Ai, n),
            c === o)
          )
            break;
          o = c;
        }
        o !== null && i.stopPropagation();
      } else ko(e, t, i, null, n);
    }
  }
  var Ai = null;
  function ao(e, t, n, i) {
    if (((Ai = null), (e = Ce(i)), (e = or(e)), e !== null))
      if (((t = ar(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Eu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ai = e), null;
  }
  function Vu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Cm()) {
          case Ja:
            return 1;
          case Ou:
            return 4;
          case Ci:
          case Em:
            return 16;
          case Au:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var En = null,
    oo = null,
    Li = null;
  function Wu() {
    if (Li) return Li;
    var e,
      t = oo,
      n = t.length,
      i,
      o = "value" in En ? En.value : En.textContent,
      c = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === o[c - i]; i++);
    return (Li = o.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Di(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ii() {
    return !0;
  }
  function Qu() {
    return !1;
  }
  function jt(e) {
    function t(n, i, o, c, f) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = f),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(c) : c[g]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ii
          : Qu),
        (this.isPropagationStopped = Qu),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ii));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ii));
        },
        persist: function () {},
        isPersistent: Ii,
      }),
      t
    );
  }
  var Ar = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    lo = jt(Ar),
    Ms = W({}, Ar, { view: 0, detail: 0 }),
    Um = jt(Ms),
    uo,
    co,
    _s,
    zi = W({}, Ms, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: po,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== _s &&
              (_s && e.type === "mousemove"
                ? ((uo = e.screenX - _s.screenX), (co = e.screenY - _s.screenY))
                : (co = uo = 0),
              (_s = e)),
            uo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : co;
      },
    }),
    Ku = jt(zi),
    Bm = W({}, zi, { dataTransfer: 0 }),
    $m = jt(Bm),
    Hm = W({}, Ms, { relatedTarget: 0 }),
    fo = jt(Hm),
    Vm = W({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wm = jt(Vm),
    Qm = W({}, Ar, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Km = jt(Qm),
    Gm = W({}, Ar, { data: 0 }),
    Gu = jt(Gm),
    qm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ym = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Xm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Xm[e])
        ? !!t[e]
        : !1;
  }
  function po() {
    return Zm;
  }
  var Jm = W({}, Ms, {
      key: function (e) {
        if (e.key) {
          var t = qm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Ym[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: po,
      charCode: function (e) {
        return e.type === "keypress" ? Di(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Di(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    eh = jt(Jm),
    th = W({}, zi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    qu = jt(th),
    nh = W({}, Ms, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: po,
    }),
    rh = jt(nh),
    sh = W({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ih = jt(sh),
    ah = W({}, zi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    oh = jt(ah),
    lh = [9, 13, 27, 32],
    mo = h && "CompositionEvent" in window,
    Os = null;
  h && "documentMode" in document && (Os = document.documentMode);
  var uh = h && "TextEvent" in window && !Os,
    Yu = h && (!mo || (Os && 8 < Os && 11 >= Os)),
    Xu = " ",
    Zu = !1;
  function Ju(e, t) {
    switch (e) {
      case "keyup":
        return lh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ec(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Lr = !1;
  function ch(e, t) {
    switch (e) {
      case "compositionend":
        return ec(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zu = !0), Xu);
      case "textInput":
        return (e = t.data), e === Xu && Zu ? null : e;
      default:
        return null;
    }
  }
  function dh(e, t) {
    if (Lr)
      return e === "compositionend" || (!mo && Ju(e, t))
        ? ((e = Wu()), (Li = oo = En = null), (Lr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fh[e.type] : t === "textarea";
  }
  function nc(e, t, n, i) {
    ji(i),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((n = new lo("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t }));
  }
  var As = null,
    Ls = null;
  function ph(e) {
    wc(e, 0);
  }
  function Fi(e) {
    var t = Ur(e);
    if (Tr(t)) return e;
  }
  function mh(e, t) {
    if (e === "change") return t;
  }
  var rc = !1;
  if (h) {
    var ho;
    if (h) {
      var go = "oninput" in document;
      if (!go) {
        var sc = document.createElement("div");
        sc.setAttribute("oninput", "return;"),
          (go = typeof sc.oninput == "function");
      }
      ho = go;
    } else ho = !1;
    rc = ho && (!document.documentMode || 9 < document.documentMode);
  }
  function ic() {
    As && (As.detachEvent("onpropertychange", ac), (Ls = As = null));
  }
  function ac(e) {
    if (e.propertyName === "value" && Fi(Ls)) {
      var t = [];
      nc(t, Ls, e, Ce(e)), Cu(ph, t);
    }
  }
  function hh(e, t, n) {
    e === "focusin"
      ? (ic(), (As = t), (Ls = n), As.attachEvent("onpropertychange", ac))
      : e === "focusout" && ic();
  }
  function gh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fi(Ls);
  }
  function yh(e, t) {
    if (e === "click") return Fi(t);
  }
  function vh(e, t) {
    if (e === "input" || e === "change") return Fi(t);
  }
  function xh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Bt = typeof Object.is == "function" ? Object.is : xh;
  function Ds(e, t) {
    if (Bt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!v.call(t, o) || !Bt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function oc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function lc(e, t) {
    var n = oc(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = oc(n);
    }
  }
  function uc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? uc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function cc() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Rr(e.document);
    }
    return t;
  }
  function yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function wh(e) {
    var t = cc(),
      n = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      uc(n.ownerDocument.documentElement, n)
    ) {
      if (i !== null && yo(n)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            c = Math.min(i.start, o);
          (i = i.end === void 0 ? c : Math.min(i.end, o)),
            !e.extend && c > i && ((o = i), (i = c), (c = o)),
            (o = lc(n, c));
          var f = lc(n, i);
          o &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            c > i
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Nh = h && "documentMode" in document && 11 >= document.documentMode,
    Dr = null,
    vo = null,
    Is = null,
    xo = !1;
  function dc(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xo ||
      Dr == null ||
      Dr !== Rr(i) ||
      ((i = Dr),
      "selectionStart" in i && yo(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Is && Ds(Is, i)) ||
        ((Is = i),
        (i = Hi(vo, "onSelect")),
        0 < i.length &&
          ((t = new lo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = Dr))));
  }
  function Ui(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ir = {
      animationend: Ui("Animation", "AnimationEnd"),
      animationiteration: Ui("Animation", "AnimationIteration"),
      animationstart: Ui("Animation", "AnimationStart"),
      transitionend: Ui("Transition", "TransitionEnd"),
    },
    wo = {},
    fc = {};
  h &&
    ((fc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ir.animationend.animation,
      delete Ir.animationiteration.animation,
      delete Ir.animationstart.animation),
    "TransitionEvent" in window || delete Ir.transitionend.transition);
  function Bi(e) {
    if (wo[e]) return wo[e];
    if (!Ir[e]) return e;
    var t = Ir[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in fc) return (wo[e] = t[n]);
    return e;
  }
  var pc = Bi("animationend"),
    mc = Bi("animationiteration"),
    hc = Bi("animationstart"),
    gc = Bi("transitionend"),
    yc = new Map(),
    vc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Pn(e, t) {
    yc.set(e, t), p(t, [e]);
  }
  for (var No = 0; No < vc.length; No++) {
    var So = vc[No],
      Sh = So.toLowerCase(),
      jh = So[0].toUpperCase() + So.slice(1);
    Pn(Sh, "on" + jh);
  }
  Pn(pc, "onAnimationEnd"),
    Pn(mc, "onAnimationIteration"),
    Pn(hc, "onAnimationStart"),
    Pn("dblclick", "onDoubleClick"),
    Pn("focusin", "onFocus"),
    Pn("focusout", "onBlur"),
    Pn(gc, "onTransitionEnd"),
    m("onMouseEnter", ["mouseout", "mouseover"]),
    m("onMouseLeave", ["mouseout", "mouseover"]),
    m("onPointerEnter", ["pointerout", "pointerover"]),
    m("onPointerLeave", ["pointerout", "pointerover"]),
    p(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    p(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    p(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var zs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    kh = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(zs),
    );
  function xc(e, t, n) {
    var i = e.type || "unknown-event";
    (e.currentTarget = n), Sm(i, t, void 0, e), (e.currentTarget = null);
  }
  function wc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        o = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var f = i.length - 1; 0 <= f; f--) {
            var g = i[f],
              w = g.instance,
              T = g.currentTarget;
            if (((g = g.listener), w !== c && o.isPropagationStopped()))
              break e;
            xc(o, g, T), (c = w);
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((g = i[f]),
              (w = g.instance),
              (T = g.currentTarget),
              (g = g.listener),
              w !== c && o.isPropagationStopped())
            )
              break e;
            xc(o, g, T), (c = w);
          }
      }
    }
    if (bi) throw ((e = Za), (bi = !1), (Za = null), e);
  }
  function Oe(e, t) {
    var n = t[Ro];
    n === void 0 && (n = t[Ro] = new Set());
    var i = e + "__bubble";
    n.has(i) || (Nc(t, e, 2, !1), n.add(i));
  }
  function jo(e, t, n) {
    var i = 0;
    t && (i |= 4), Nc(n, e, i, t);
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function Fs(e) {
    if (!e[$i]) {
      (e[$i] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (kh.has(n) || jo(n, !1, e), jo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$i] || ((t[$i] = !0), jo("selectionchange", !1, t));
    }
  }
  function Nc(e, t, n, i) {
    switch (Vu(t)) {
      case 1:
        var o = zm;
        break;
      case 4:
        o = Fm;
        break;
      default:
        o = io;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Xa ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      i
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1);
  }
  function ko(e, t, n, i, o) {
    var c = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var g = i.stateNode.containerInfo;
          if (g === o || (g.nodeType === 8 && g.parentNode === o)) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var w = f.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = f.stateNode.containerInfo),
                w === o || (w.nodeType === 8 && w.parentNode === o))
              )
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (((f = or(g)), f === null)) return;
            if (((w = f.tag), w === 5 || w === 6)) {
              i = c = f;
              continue e;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    Cu(function () {
      var T = c,
        U = Ce(n),
        B = [];
      e: {
        var F = yc.get(e);
        if (F !== void 0) {
          var K = lo,
            X = e;
          switch (e) {
            case "keypress":
              if (Di(n) === 0) break e;
            case "keydown":
            case "keyup":
              K = eh;
              break;
            case "focusin":
              (X = "focus"), (K = fo);
              break;
            case "focusout":
              (X = "blur"), (K = fo);
              break;
            case "beforeblur":
            case "afterblur":
              K = fo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              K = Ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = $m;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = rh;
              break;
            case pc:
            case mc:
            case hc:
              K = Wm;
              break;
            case gc:
              K = ih;
              break;
            case "scroll":
              K = Um;
              break;
            case "wheel":
              K = oh;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = Km;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = qu;
          }
          var Z = (t & 4) !== 0,
            Ve = !Z && e === "scroll",
            E = Z ? (F !== null ? F + "Capture" : null) : F;
          Z = [];
          for (var k = T, P; k !== null; ) {
            P = k;
            var $ = P.stateNode;
            if (
              (P.tag === 5 &&
                $ !== null &&
                ((P = $),
                E !== null &&
                  (($ = Ns(k, E)), $ != null && Z.push(Us(k, $, P)))),
              Ve)
            )
              break;
            k = k.return;
          }
          0 < Z.length &&
            ((F = new K(F, X, null, n, U)), B.push({ event: F, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (K = e === "mouseout" || e === "pointerout"),
            F &&
              n !== ce &&
              (X = n.relatedTarget || n.fromElement) &&
              (or(X) || X[cn]))
          )
            break e;
          if (
            (K || F) &&
            ((F =
              U.window === U
                ? U
                : (F = U.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            K
              ? ((X = n.relatedTarget || n.toElement),
                (K = T),
                (X = X ? or(X) : null),
                X !== null &&
                  ((Ve = ar(X)), X !== Ve || (X.tag !== 5 && X.tag !== 6)) &&
                  (X = null))
              : ((K = null), (X = T)),
            K !== X)
          ) {
            if (
              ((Z = Ku),
              ($ = "onMouseLeave"),
              (E = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Z = qu),
                ($ = "onPointerLeave"),
                (E = "onPointerEnter"),
                (k = "pointer")),
              (Ve = K == null ? F : Ur(K)),
              (P = X == null ? F : Ur(X)),
              (F = new Z($, k + "leave", K, n, U)),
              (F.target = Ve),
              (F.relatedTarget = P),
              ($ = null),
              or(U) === T &&
                ((Z = new Z(E, k + "enter", X, n, U)),
                (Z.target = P),
                (Z.relatedTarget = Ve),
                ($ = Z)),
              (Ve = $),
              K && X)
            )
              t: {
                for (Z = K, E = X, k = 0, P = Z; P; P = zr(P)) k++;
                for (P = 0, $ = E; $; $ = zr($)) P++;
                for (; 0 < k - P; ) (Z = zr(Z)), k--;
                for (; 0 < P - k; ) (E = zr(E)), P--;
                for (; k--; ) {
                  if (Z === E || (E !== null && Z === E.alternate)) break t;
                  (Z = zr(Z)), (E = zr(E));
                }
                Z = null;
              }
            else Z = null;
            K !== null && Sc(B, F, K, Z, !1),
              X !== null && Ve !== null && Sc(B, Ve, X, Z, !0);
          }
        }
        e: {
          if (
            ((F = T ? Ur(T) : window),
            (K = F.nodeName && F.nodeName.toLowerCase()),
            K === "select" || (K === "input" && F.type === "file"))
          )
            var J = mh;
          else if (tc(F))
            if (rc) J = vh;
            else {
              J = gh;
              var se = hh;
            }
          else
            (K = F.nodeName) &&
              K.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (J = yh);
          if (J && (J = J(e, T))) {
            nc(B, J, n, U);
            break e;
          }
          se && se(e, F, T),
            e === "focusout" &&
              (se = F._wrapperState) &&
              se.controlled &&
              F.type === "number" &&
              st(F, "number", F.value);
        }
        switch (((se = T ? Ur(T) : window), e)) {
          case "focusin":
            (tc(se) || se.contentEditable === "true") &&
              ((Dr = se), (vo = T), (Is = null));
            break;
          case "focusout":
            Is = vo = Dr = null;
            break;
          case "mousedown":
            xo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xo = !1), dc(B, n, U);
            break;
          case "selectionchange":
            if (Nh) break;
          case "keydown":
          case "keyup":
            dc(B, n, U);
        }
        var ie;
        if (mo)
          e: {
            switch (e) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          Lr
            ? Ju(e, n) && (ue = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ue = "onCompositionStart");
        ue &&
          (Yu &&
            n.locale !== "ko" &&
            (Lr || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && Lr && (ie = Wu())
              : ((En = U),
                (oo = "value" in En ? En.value : En.textContent),
                (Lr = !0))),
          (se = Hi(T, ue)),
          0 < se.length &&
            ((ue = new Gu(ue, e, null, n, U)),
            B.push({ event: ue, listeners: se }),
            ie
              ? (ue.data = ie)
              : ((ie = ec(n)), ie !== null && (ue.data = ie)))),
          (ie = uh ? ch(e, n) : dh(e, n)) &&
            ((T = Hi(T, "onBeforeInput")),
            0 < T.length &&
              ((U = new Gu("onBeforeInput", "beforeinput", null, n, U)),
              B.push({ event: U, listeners: T }),
              (U.data = ie)));
      }
      wc(B, t);
    });
  }
  function Us(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hi(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e,
        c = o.stateNode;
      o.tag === 5 &&
        c !== null &&
        ((o = c),
        (c = Ns(e, n)),
        c != null && i.unshift(Us(e, c, o)),
        (c = Ns(e, t)),
        c != null && i.push(Us(e, c, o))),
        (e = e.return);
    }
    return i;
  }
  function zr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sc(e, t, n, i, o) {
    for (var c = t._reactName, f = []; n !== null && n !== i; ) {
      var g = n,
        w = g.alternate,
        T = g.stateNode;
      if (w !== null && w === i) break;
      g.tag === 5 &&
        T !== null &&
        ((g = T),
        o
          ? ((w = Ns(n, c)), w != null && f.unshift(Us(n, w, g)))
          : o || ((w = Ns(n, c)), w != null && f.push(Us(n, w, g)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var bh = /\r\n?/g,
    Ch = /\u0000|\uFFFD/g;
  function jc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        bh,
        `
`,
      )
      .replace(Ch, "");
  }
  function Vi(e, t, n) {
    if (((t = jc(t)), jc(e) !== t && n)) throw Error(a(425));
  }
  function Wi() {}
  var bo = null,
    Co = null;
  function Eo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Po = typeof setTimeout == "function" ? setTimeout : void 0,
    Eh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    kc = typeof Promise == "function" ? Promise : void 0,
    Ph =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof kc < "u"
          ? function (e) {
              return kc.resolve(null).then(e).catch(Th);
            }
          : Po;
  function Th(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function To(e, t) {
    var n = t,
      i = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (i === 0) {
            e.removeChild(o), Rs(t);
            return;
          }
          i--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
      n = o;
    } while (n);
    Rs(t);
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function bc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Fr = Math.random().toString(36).slice(2),
    en = "__reactFiber$" + Fr,
    Bs = "__reactProps$" + Fr,
    cn = "__reactContainer$" + Fr,
    Ro = "__reactEvents$" + Fr,
    Rh = "__reactListeners$" + Fr,
    Mh = "__reactHandles$" + Fr;
  function or(e) {
    var t = e[en];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[cn] || n[en])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = bc(e); e !== null; ) {
            if ((n = e[en])) return n;
            e = bc(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function $s(e) {
    return (
      (e = e[en] || e[cn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ur(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Qi(e) {
    return e[Bs] || null;
  }
  var Mo = [],
    Br = -1;
  function Rn(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > Br || ((e.current = Mo[Br]), (Mo[Br] = null), Br--);
  }
  function Me(e, t) {
    Br++, (Mo[Br] = e.current), (e.current = t);
  }
  var Mn = {},
    it = Rn(Mn),
    yt = Rn(!1),
    lr = Mn;
  function $r(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      c;
    for (c in n) o[c] = t[c];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function vt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ki() {
    Ae(yt), Ae(it);
  }
  function Cc(e, t, n) {
    if (it.current !== Mn) throw Error(a(168));
    Me(it, t), Me(yt, n);
  }
  function Ec(e, t, n) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return n;
    i = i.getChildContext();
    for (var o in i) if (!(o in t)) throw Error(a(108, Se(e) || "Unknown", o));
    return W({}, n, i);
  }
  function Gi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Mn),
      (lr = it.current),
      Me(it, e),
      Me(yt, yt.current),
      !0
    );
  }
  function Pc(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(a(169));
    n
      ? ((e = Ec(e, t, lr)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Ae(yt),
        Ae(it),
        Me(it, e))
      : Ae(yt),
      Me(yt, n);
  }
  var dn = null,
    qi = !1,
    _o = !1;
  function Tc(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function _h(e) {
    (qi = !0), Tc(e);
  }
  function _n() {
    if (!_o && dn !== null) {
      _o = !0;
      var e = 0,
        t = Ee;
      try {
        var n = dn;
        for (Ee = 1; e < n.length; e++) {
          var i = n[e];
          do i = i(!0);
          while (i !== null);
        }
        (dn = null), (qi = !1);
      } catch (o) {
        throw (dn !== null && (dn = dn.slice(e + 1)), Mu(Ja, _n), o);
      } finally {
        (Ee = t), (_o = !1);
      }
    }
    return null;
  }
  var Hr = [],
    Vr = 0,
    Yi = null,
    Xi = 0,
    Ot = [],
    At = 0,
    ur = null,
    fn = 1,
    pn = "";
  function cr(e, t) {
    (Hr[Vr++] = Xi), (Hr[Vr++] = Yi), (Yi = e), (Xi = t);
  }
  function Rc(e, t, n) {
    (Ot[At++] = fn), (Ot[At++] = pn), (Ot[At++] = ur), (ur = e);
    var i = fn;
    e = pn;
    var o = 32 - Ut(i) - 1;
    (i &= ~(1 << o)), (n += 1);
    var c = 32 - Ut(t) + o;
    if (30 < c) {
      var f = o - (o % 5);
      (c = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (o -= f),
        (fn = (1 << (32 - Ut(t) + o)) | (n << o) | i),
        (pn = c + e);
    } else (fn = (1 << c) | (n << o) | i), (pn = e);
  }
  function Oo(e) {
    e.return !== null && (cr(e, 1), Rc(e, 1, 0));
  }
  function Ao(e) {
    for (; e === Yi; )
      (Yi = Hr[--Vr]), (Hr[Vr] = null), (Xi = Hr[--Vr]), (Hr[Vr] = null);
    for (; e === ur; )
      (ur = Ot[--At]),
        (Ot[At] = null),
        (pn = Ot[--At]),
        (Ot[At] = null),
        (fn = Ot[--At]),
        (Ot[At] = null);
  }
  var kt = null,
    bt = null,
    De = !1,
    $t = null;
  function Mc(e, t) {
    var n = zt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function _c(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (kt = e), (bt = Tn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (kt = e), (bt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = ur !== null ? { id: fn, overflow: pn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = zt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (kt = e),
              (bt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Lo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Do(e) {
    if (De) {
      var t = bt;
      if (t) {
        var n = t;
        if (!_c(e, t)) {
          if (Lo(e)) throw Error(a(418));
          t = Tn(n.nextSibling);
          var i = kt;
          t && _c(e, t)
            ? Mc(i, n)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (kt = e));
        }
      } else {
        if (Lo(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (kt = e);
      }
    }
  }
  function Oc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    kt = e;
  }
  function Zi(e) {
    if (e !== kt) return !1;
    if (!De) return Oc(e), (De = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Eo(e.type, e.memoizedProps))),
      t && (t = bt))
    ) {
      if (Lo(e)) throw (Ac(), Error(a(418)));
      for (; t; ) Mc(e, t), (t = Tn(t.nextSibling));
    }
    if ((Oc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                bt = Tn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        bt = null;
      }
    } else bt = kt ? Tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ac() {
    for (var e = bt; e; ) e = Tn(e.nextSibling);
  }
  function Wr() {
    (bt = kt = null), (De = !1);
  }
  function Io(e) {
    $t === null ? ($t = [e]) : $t.push(e);
  }
  var Oh = H.ReactCurrentBatchConfig;
  function Hs(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(a(147, e));
        var o = i,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (f) {
              var g = o.refs;
              f === null ? delete g[c] : (g[c] = f);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Ji(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Lc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Dc(e) {
    function t(E, k) {
      if (e) {
        var P = E.deletions;
        P === null ? ((E.deletions = [k]), (E.flags |= 16)) : P.push(k);
      }
    }
    function n(E, k) {
      if (!e) return null;
      for (; k !== null; ) t(E, k), (k = k.sibling);
      return null;
    }
    function i(E, k) {
      for (E = new Map(); k !== null; )
        k.key !== null ? E.set(k.key, k) : E.set(k.index, k), (k = k.sibling);
      return E;
    }
    function o(E, k) {
      return (E = Un(E, k)), (E.index = 0), (E.sibling = null), E;
    }
    function c(E, k, P) {
      return (
        (E.index = P),
        e
          ? ((P = E.alternate),
            P !== null
              ? ((P = P.index), P < k ? ((E.flags |= 2), k) : P)
              : ((E.flags |= 2), k))
          : ((E.flags |= 1048576), k)
      );
    }
    function f(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function g(E, k, P, $) {
      return k === null || k.tag !== 6
        ? ((k = Pl(P, E.mode, $)), (k.return = E), k)
        : ((k = o(k, P)), (k.return = E), k);
    }
    function w(E, k, P, $) {
      var J = P.type;
      return J === ee
        ? U(E, k, P.props.children, $, P.key)
        : k !== null &&
            (k.elementType === J ||
              (typeof J == "object" &&
                J !== null &&
                J.$$typeof === me &&
                Lc(J) === k.type))
          ? (($ = o(k, P.props)), ($.ref = Hs(E, k, P)), ($.return = E), $)
          : (($ = ja(P.type, P.key, P.props, null, E.mode, $)),
            ($.ref = Hs(E, k, P)),
            ($.return = E),
            $);
    }
    function T(E, k, P, $) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== P.containerInfo ||
        k.stateNode.implementation !== P.implementation
        ? ((k = Tl(P, E.mode, $)), (k.return = E), k)
        : ((k = o(k, P.children || [])), (k.return = E), k);
    }
    function U(E, k, P, $, J) {
      return k === null || k.tag !== 7
        ? ((k = vr(P, E.mode, $, J)), (k.return = E), k)
        : ((k = o(k, P)), (k.return = E), k);
    }
    function B(E, k, P) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (k = Pl("" + k, E.mode, P)), (k.return = E), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case q:
            return (
              (P = ja(k.type, k.key, k.props, null, E.mode, P)),
              (P.ref = Hs(E, null, k)),
              (P.return = E),
              P
            );
          case oe:
            return (k = Tl(k, E.mode, P)), (k.return = E), k;
          case me:
            var $ = k._init;
            return B(E, $(k._payload), P);
        }
        if (Mt(k) || Q(k))
          return (k = vr(k, E.mode, P, null)), (k.return = E), k;
        Ji(E, k);
      }
      return null;
    }
    function F(E, k, P, $) {
      var J = k !== null ? k.key : null;
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return J !== null ? null : g(E, k, "" + P, $);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case q:
            return P.key === J ? w(E, k, P, $) : null;
          case oe:
            return P.key === J ? T(E, k, P, $) : null;
          case me:
            return (J = P._init), F(E, k, J(P._payload), $);
        }
        if (Mt(P) || Q(P)) return J !== null ? null : U(E, k, P, $, null);
        Ji(E, P);
      }
      return null;
    }
    function K(E, k, P, $, J) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return (E = E.get(P) || null), g(k, E, "" + $, J);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case q:
            return (
              (E = E.get($.key === null ? P : $.key) || null), w(k, E, $, J)
            );
          case oe:
            return (
              (E = E.get($.key === null ? P : $.key) || null), T(k, E, $, J)
            );
          case me:
            var se = $._init;
            return K(E, k, P, se($._payload), J);
        }
        if (Mt($) || Q($)) return (E = E.get(P) || null), U(k, E, $, J, null);
        Ji(k, $);
      }
      return null;
    }
    function X(E, k, P, $) {
      for (
        var J = null, se = null, ie = k, ue = (k = 0), Je = null;
        ie !== null && ue < P.length;
        ue++
      ) {
        ie.index > ue ? ((Je = ie), (ie = null)) : (Je = ie.sibling);
        var Ne = F(E, ie, P[ue], $);
        if (Ne === null) {
          ie === null && (ie = Je);
          break;
        }
        e && ie && Ne.alternate === null && t(E, ie),
          (k = c(Ne, k, ue)),
          se === null ? (J = Ne) : (se.sibling = Ne),
          (se = Ne),
          (ie = Je);
      }
      if (ue === P.length) return n(E, ie), De && cr(E, ue), J;
      if (ie === null) {
        for (; ue < P.length; ue++)
          (ie = B(E, P[ue], $)),
            ie !== null &&
              ((k = c(ie, k, ue)),
              se === null ? (J = ie) : (se.sibling = ie),
              (se = ie));
        return De && cr(E, ue), J;
      }
      for (ie = i(E, ie); ue < P.length; ue++)
        (Je = K(ie, E, ue, P[ue], $)),
          Je !== null &&
            (e &&
              Je.alternate !== null &&
              ie.delete(Je.key === null ? ue : Je.key),
            (k = c(Je, k, ue)),
            se === null ? (J = Je) : (se.sibling = Je),
            (se = Je));
      return (
        e &&
          ie.forEach(function (Bn) {
            return t(E, Bn);
          }),
        De && cr(E, ue),
        J
      );
    }
    function Z(E, k, P, $) {
      var J = Q(P);
      if (typeof J != "function") throw Error(a(150));
      if (((P = J.call(P)), P == null)) throw Error(a(151));
      for (
        var se = (J = null), ie = k, ue = (k = 0), Je = null, Ne = P.next();
        ie !== null && !Ne.done;
        ue++, Ne = P.next()
      ) {
        ie.index > ue ? ((Je = ie), (ie = null)) : (Je = ie.sibling);
        var Bn = F(E, ie, Ne.value, $);
        if (Bn === null) {
          ie === null && (ie = Je);
          break;
        }
        e && ie && Bn.alternate === null && t(E, ie),
          (k = c(Bn, k, ue)),
          se === null ? (J = Bn) : (se.sibling = Bn),
          (se = Bn),
          (ie = Je);
      }
      if (Ne.done) return n(E, ie), De && cr(E, ue), J;
      if (ie === null) {
        for (; !Ne.done; ue++, Ne = P.next())
          (Ne = B(E, Ne.value, $)),
            Ne !== null &&
              ((k = c(Ne, k, ue)),
              se === null ? (J = Ne) : (se.sibling = Ne),
              (se = Ne));
        return De && cr(E, ue), J;
      }
      for (ie = i(E, ie); !Ne.done; ue++, Ne = P.next())
        (Ne = K(ie, E, ue, Ne.value, $)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              ie.delete(Ne.key === null ? ue : Ne.key),
            (k = c(Ne, k, ue)),
            se === null ? (J = Ne) : (se.sibling = Ne),
            (se = Ne));
      return (
        e &&
          ie.forEach(function (fg) {
            return t(E, fg);
          }),
        De && cr(E, ue),
        J
      );
    }
    function Ve(E, k, P, $) {
      if (
        (typeof P == "object" &&
          P !== null &&
          P.type === ee &&
          P.key === null &&
          (P = P.props.children),
        typeof P == "object" && P !== null)
      ) {
        switch (P.$$typeof) {
          case q:
            e: {
              for (var J = P.key, se = k; se !== null; ) {
                if (se.key === J) {
                  if (((J = P.type), J === ee)) {
                    if (se.tag === 7) {
                      n(E, se.sibling),
                        (k = o(se, P.props.children)),
                        (k.return = E),
                        (E = k);
                      break e;
                    }
                  } else if (
                    se.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === me &&
                      Lc(J) === se.type)
                  ) {
                    n(E, se.sibling),
                      (k = o(se, P.props)),
                      (k.ref = Hs(E, se, P)),
                      (k.return = E),
                      (E = k);
                    break e;
                  }
                  n(E, se);
                  break;
                } else t(E, se);
                se = se.sibling;
              }
              P.type === ee
                ? ((k = vr(P.props.children, E.mode, $, P.key)),
                  (k.return = E),
                  (E = k))
                : (($ = ja(P.type, P.key, P.props, null, E.mode, $)),
                  ($.ref = Hs(E, k, P)),
                  ($.return = E),
                  (E = $));
            }
            return f(E);
          case oe:
            e: {
              for (se = P.key; k !== null; ) {
                if (k.key === se)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === P.containerInfo &&
                    k.stateNode.implementation === P.implementation
                  ) {
                    n(E, k.sibling),
                      (k = o(k, P.children || [])),
                      (k.return = E),
                      (E = k);
                    break e;
                  } else {
                    n(E, k);
                    break;
                  }
                else t(E, k);
                k = k.sibling;
              }
              (k = Tl(P, E.mode, $)), (k.return = E), (E = k);
            }
            return f(E);
          case me:
            return (se = P._init), Ve(E, k, se(P._payload), $);
        }
        if (Mt(P)) return X(E, k, P, $);
        if (Q(P)) return Z(E, k, P, $);
        Ji(E, P);
      }
      return (typeof P == "string" && P !== "") || typeof P == "number"
        ? ((P = "" + P),
          k !== null && k.tag === 6
            ? (n(E, k.sibling), (k = o(k, P)), (k.return = E), (E = k))
            : (n(E, k), (k = Pl(P, E.mode, $)), (k.return = E), (E = k)),
          f(E))
        : n(E, k);
    }
    return Ve;
  }
  var Qr = Dc(!0),
    Ic = Dc(!1),
    ea = Rn(null),
    ta = null,
    Kr = null,
    zo = null;
  function Fo() {
    zo = Kr = ta = null;
  }
  function Uo(e) {
    var t = ea.current;
    Ae(ea), (e._currentValue = t);
  }
  function Bo(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Gr(e, t) {
    (ta = e),
      (zo = Kr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (xt = !0), (e.firstContext = null));
  }
  function Lt(e) {
    var t = e._currentValue;
    if (zo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
        if (ta === null) throw Error(a(308));
        (Kr = e), (ta.dependencies = { lanes: 0, firstContext: e });
      } else Kr = Kr.next = e;
    return t;
  }
  var dr = null;
  function $o(e) {
    dr === null ? (dr = [e]) : dr.push(e);
  }
  function zc(e, t, n, i) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), $o(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      mn(e, i)
    );
  }
  function mn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var On = !1;
  function Ho(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Fc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function hn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (we & 2) !== 0)) {
      var o = i.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (i.pending = t),
        mn(e, n)
      );
    }
    return (
      (o = i.interleaved),
      o === null ? ((t.next = t), $o(i)) : ((t.next = o.next), (o.next = t)),
      (i.interleaved = t),
      mn(e, n)
    );
  }
  function na(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), no(e, n);
    }
  }
  function Uc(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var o = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          c === null ? (o = c = f) : (c = c.next = f), (n = n.next);
        } while (n !== null);
        c === null ? (o = c = t) : (c = c.next = t);
      } else o = c = t;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function ra(e, t, n, i) {
    var o = e.updateQueue;
    On = !1;
    var c = o.firstBaseUpdate,
      f = o.lastBaseUpdate,
      g = o.shared.pending;
    if (g !== null) {
      o.shared.pending = null;
      var w = g,
        T = w.next;
      (w.next = null), f === null ? (c = T) : (f.next = T), (f = w);
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (g = U.lastBaseUpdate),
        g !== f &&
          (g === null ? (U.firstBaseUpdate = T) : (g.next = T),
          (U.lastBaseUpdate = w)));
    }
    if (c !== null) {
      var B = o.baseState;
      (f = 0), (U = T = w = null), (g = c);
      do {
        var F = g.lane,
          K = g.eventTime;
        if ((i & F) === F) {
          U !== null &&
            (U = U.next =
              {
                eventTime: K,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              });
          e: {
            var X = e,
              Z = g;
            switch (((F = t), (K = n), Z.tag)) {
              case 1:
                if (((X = Z.payload), typeof X == "function")) {
                  B = X.call(K, B, F);
                  break e;
                }
                B = X;
                break e;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = Z.payload),
                  (F = typeof X == "function" ? X.call(K, B, F) : X),
                  F == null)
                )
                  break e;
                B = W({}, B, F);
                break e;
              case 2:
                On = !0;
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64),
            (F = o.effects),
            F === null ? (o.effects = [g]) : F.push(g));
        } else
          (K = {
            eventTime: K,
            lane: F,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            U === null ? ((T = U = K), (w = B)) : (U = U.next = K),
            (f |= F);
        if (((g = g.next), g === null)) {
          if (((g = o.shared.pending), g === null)) break;
          (F = g),
            (g = F.next),
            (F.next = null),
            (o.lastBaseUpdate = F),
            (o.shared.pending = null);
        }
      } while (!0);
      if (
        (U === null && (w = B),
        (o.baseState = w),
        (o.firstBaseUpdate = T),
        (o.lastBaseUpdate = U),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (f |= o.lane), (o = o.next);
        while (o !== t);
      } else c === null && (o.shared.lanes = 0);
      (mr |= f), (e.lanes = f), (e.memoizedState = B);
    }
  }
  function Bc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          o = i.callback;
        if (o !== null) {
          if (((i.callback = null), (i = n), typeof o != "function"))
            throw Error(a(191, o));
          o.call(i);
        }
      }
  }
  var Vs = {},
    tn = Rn(Vs),
    Ws = Rn(Vs),
    Qs = Rn(Vs);
  function fr(e) {
    if (e === Vs) throw Error(a(174));
    return e;
  }
  function Vo(e, t) {
    switch ((Me(Qs, t), Me(Ws, e), Me(tn, Vs), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zt(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Zt(t, e));
    }
    Ae(tn), Me(tn, t);
  }
  function qr() {
    Ae(tn), Ae(Ws), Ae(Qs);
  }
  function $c(e) {
    fr(Qs.current);
    var t = fr(tn.current),
      n = Zt(t, e.type);
    t !== n && (Me(Ws, e), Me(tn, n));
  }
  function Wo(e) {
    Ws.current === e && (Ae(tn), Ae(Ws));
  }
  var Fe = Rn(0);
  function sa(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Qo = [];
  function Ko() {
    for (var e = 0; e < Qo.length; e++)
      Qo[e]._workInProgressVersionPrimary = null;
    Qo.length = 0;
  }
  var ia = H.ReactCurrentDispatcher,
    Go = H.ReactCurrentBatchConfig,
    pr = 0,
    Ue = null,
    Ge = null,
    Xe = null,
    aa = !1,
    Ks = !1,
    Gs = 0,
    Ah = 0;
  function at() {
    throw Error(a(321));
  }
  function qo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function Yo(e, t, n, i, o, c) {
    if (
      ((pr = c),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ia.current = e === null || e.memoizedState === null ? zh : Fh),
      (e = n(i, o)),
      Ks)
    ) {
      c = 0;
      do {
        if (((Ks = !1), (Gs = 0), 25 <= c)) throw Error(a(301));
        (c += 1),
          (Xe = Ge = null),
          (t.updateQueue = null),
          (ia.current = Uh),
          (e = n(i, o));
      } while (Ks);
    }
    if (
      ((ia.current = ua),
      (t = Ge !== null && Ge.next !== null),
      (pr = 0),
      (Xe = Ge = Ue = null),
      (aa = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function Xo() {
    var e = Gs !== 0;
    return (Gs = 0), e;
  }
  function nn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (Ue.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
  }
  function Dt() {
    if (Ge === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = Xe === null ? Ue.memoizedState : Xe.next;
    if (t !== null) (Xe = t), (Ge = e);
    else {
      if (e === null) throw Error(a(310));
      (Ge = e),
        (e = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null,
        }),
        Xe === null ? (Ue.memoizedState = Xe = e) : (Xe = Xe.next = e);
    }
    return Xe;
  }
  function qs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zo(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = Ge,
      o = i.baseQueue,
      c = n.pending;
    if (c !== null) {
      if (o !== null) {
        var f = o.next;
        (o.next = c.next), (c.next = f);
      }
      (i.baseQueue = o = c), (n.pending = null);
    }
    if (o !== null) {
      (c = o.next), (i = i.baseState);
      var g = (f = null),
        w = null,
        T = c;
      do {
        var U = T.lane;
        if ((pr & U) === U)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null,
              }),
            (i = T.hasEagerState ? T.eagerState : e(i, T.action));
        else {
          var B = {
            lane: U,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          };
          w === null ? ((g = w = B), (f = i)) : (w = w.next = B),
            (Ue.lanes |= U),
            (mr |= U);
        }
        T = T.next;
      } while (T !== null && T !== c);
      w === null ? (f = i) : (w.next = g),
        Bt(i, t.memoizedState) || (xt = !0),
        (t.memoizedState = i),
        (t.baseState = f),
        (t.baseQueue = w),
        (n.lastRenderedState = i);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (c = o.lane), (Ue.lanes |= c), (mr |= c), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Jo(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      o = n.pending,
      c = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var f = (o = o.next);
      do (c = e(c, f.action)), (f = f.next);
      while (f !== o);
      Bt(c, t.memoizedState) || (xt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, i];
  }
  function Hc() {}
  function Vc(e, t) {
    var n = Ue,
      i = Dt(),
      o = t(),
      c = !Bt(i.memoizedState, o);
    if (
      (c && ((i.memoizedState = o), (xt = !0)),
      (i = i.queue),
      el(Kc.bind(null, n, i, e), [e]),
      i.getSnapshot !== t || c || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ys(9, Qc.bind(null, n, i, o, t), void 0, null),
        Ze === null)
      )
        throw Error(a(349));
      (pr & 30) !== 0 || Wc(n, t, o);
    }
    return o;
  }
  function Wc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ue.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Qc(e, t, n, i) {
    (t.value = n), (t.getSnapshot = i), Gc(t) && qc(e);
  }
  function Kc(e, t, n) {
    return n(function () {
      Gc(t) && qc(e);
    });
  }
  function Gc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function qc(e) {
    var t = mn(e, 1);
    t !== null && Qt(t, e, 1, -1);
  }
  function Yc(e) {
    var t = nn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qs,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ih.bind(null, Ue, e)),
      [t.memoizedState, e]
    );
  }
  function Ys(e, t, n, i) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ue.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function Xc() {
    return Dt().memoizedState;
  }
  function oa(e, t, n, i) {
    var o = nn();
    (Ue.flags |= e),
      (o.memoizedState = Ys(1 | t, n, void 0, i === void 0 ? null : i));
  }
  function la(e, t, n, i) {
    var o = Dt();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (Ge !== null) {
      var f = Ge.memoizedState;
      if (((c = f.destroy), i !== null && qo(i, f.deps))) {
        o.memoizedState = Ys(t, n, c, i);
        return;
      }
    }
    (Ue.flags |= e), (o.memoizedState = Ys(1 | t, n, c, i));
  }
  function Zc(e, t) {
    return oa(8390656, 8, e, t);
  }
  function el(e, t) {
    return la(2048, 8, e, t);
  }
  function Jc(e, t) {
    return la(4, 2, e, t);
  }
  function ed(e, t) {
    return la(4, 4, e, t);
  }
  function td(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function nd(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), la(4, 4, td.bind(null, t, e), n)
    );
  }
  function tl() {}
  function rd(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && qo(t, i[1])
      ? i[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function sd(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && qo(t, i[1])
      ? i[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function id(e, t, n) {
    return (pr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (xt = !0)), (e.memoizedState = n))
      : (Bt(n, t) ||
          ((n = Lu()), (Ue.lanes |= n), (mr |= n), (e.baseState = !0)),
        t);
  }
  function Lh(e, t) {
    var n = Ee;
    (Ee = n !== 0 && 4 > n ? n : 4), e(!0);
    var i = Go.transition;
    Go.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ee = n), (Go.transition = i);
    }
  }
  function ad() {
    return Dt().memoizedState;
  }
  function Dh(e, t, n) {
    var i = zn(e);
    if (
      ((n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      od(e))
    )
      ld(t, n);
    else if (((n = zc(e, t, n, i)), n !== null)) {
      var o = pt();
      Qt(n, e, i, o), ud(n, t, i);
    }
  }
  function Ih(e, t, n) {
    var i = zn(e),
      o = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (od(e)) ld(t, o);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var f = t.lastRenderedState,
            g = c(f, n);
          if (((o.hasEagerState = !0), (o.eagerState = g), Bt(g, f))) {
            var w = t.interleaved;
            w === null
              ? ((o.next = o), $o(t))
              : ((o.next = w.next), (w.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = zc(e, t, o, i)),
        n !== null && ((o = pt()), Qt(n, e, i, o), ud(n, t, i));
    }
  }
  function od(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function ld(e, t) {
    Ks = aa = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ud(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), no(e, n);
    }
  }
  var ua = {
      readContext: Lt,
      useCallback: at,
      useContext: at,
      useEffect: at,
      useImperativeHandle: at,
      useInsertionEffect: at,
      useLayoutEffect: at,
      useMemo: at,
      useReducer: at,
      useRef: at,
      useState: at,
      useDebugValue: at,
      useDeferredValue: at,
      useTransition: at,
      useMutableSource: at,
      useSyncExternalStore: at,
      useId: at,
      unstable_isNewReconciler: !1,
    },
    zh = {
      readContext: Lt,
      useCallback: function (e, t) {
        return (nn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Lt,
      useEffect: Zc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          oa(4194308, 4, td.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return oa(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return oa(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = nn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var i = nn();
        return (
          (t = n !== void 0 ? n(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = Dh.bind(null, Ue, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = nn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Yc,
      useDebugValue: tl,
      useDeferredValue: function (e) {
        return (nn().memoizedState = e);
      },
      useTransition: function () {
        var e = Yc(!1),
          t = e[0];
        return (e = Lh.bind(null, e[1])), (nn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var i = Ue,
          o = nn();
        if (De) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Ze === null)) throw Error(a(349));
          (pr & 30) !== 0 || Wc(i, t, n);
        }
        o.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (o.queue = c),
          Zc(Kc.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          Ys(9, Qc.bind(null, i, c, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = nn(),
          t = Ze.identifierPrefix;
        if (De) {
          var n = pn,
            i = fn;
          (n = (i & ~(1 << (32 - Ut(i) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Gs++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Ah++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Fh = {
      readContext: Lt,
      useCallback: rd,
      useContext: Lt,
      useEffect: el,
      useImperativeHandle: nd,
      useInsertionEffect: Jc,
      useLayoutEffect: ed,
      useMemo: sd,
      useReducer: Zo,
      useRef: Xc,
      useState: function () {
        return Zo(qs);
      },
      useDebugValue: tl,
      useDeferredValue: function (e) {
        var t = Dt();
        return id(t, Ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Zo(qs)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Hc,
      useSyncExternalStore: Vc,
      useId: ad,
      unstable_isNewReconciler: !1,
    },
    Uh = {
      readContext: Lt,
      useCallback: rd,
      useContext: Lt,
      useEffect: el,
      useImperativeHandle: nd,
      useInsertionEffect: Jc,
      useLayoutEffect: ed,
      useMemo: sd,
      useReducer: Jo,
      useRef: Xc,
      useState: function () {
        return Jo(qs);
      },
      useDebugValue: tl,
      useDeferredValue: function (e) {
        var t = Dt();
        return Ge === null ? (t.memoizedState = e) : id(t, Ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Jo(qs)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Hc,
      useSyncExternalStore: Vc,
      useId: ad,
      unstable_isNewReconciler: !1,
    };
  function Ht(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function nl(e, t, n, i) {
    (t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ca = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ar(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = pt(),
        o = zn(e),
        c = hn(i, o);
      (c.payload = t),
        n != null && (c.callback = n),
        (t = An(e, c, o)),
        t !== null && (Qt(t, e, o, i), na(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = pt(),
        o = zn(e),
        c = hn(i, o);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = An(e, c, o)),
        t !== null && (Qt(t, e, o, i), na(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = pt(),
        i = zn(e),
        o = hn(n, i);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = An(e, o, i)),
        t !== null && (Qt(t, e, i, n), na(t, e, i));
    },
  };
  function cd(e, t, n, i, o, c, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ds(n, i) || !Ds(o, c)
          : !0
    );
  }
  function dd(e, t, n) {
    var i = !1,
      o = Mn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = Lt(c))
        : ((o = vt(t) ? lr : it.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? $r(e, o) : Mn)),
      (t = new t(n, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ca),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function fd(e, t, n, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && ca.enqueueReplaceState(t, t.state, null);
  }
  function rl(e, t, n, i) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ho(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (o.context = Lt(c))
      : ((c = vt(t) ? lr : it.current), (o.context = $r(e, c))),
      (o.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (nl(e, t, c, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && ca.enqueueReplaceState(o, o.state, null),
        ra(e, n, o, i),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Yr(e, t) {
    try {
      var n = "",
        i = t;
      do (n += fe(i)), (i = i.return);
      while (i);
      var o = n;
    } catch (c) {
      o =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function sl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function il(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Bh = typeof WeakMap == "function" ? WeakMap : Map;
  function pd(e, t, n) {
    (n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = t.value;
    return (
      (n.callback = function () {
        ya || ((ya = !0), (wl = i)), il(e, t);
      }),
      n
    );
  }
  function md(e, t, n) {
    (n = hn(-1, n)), (n.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var o = t.value;
      (n.payload = function () {
        return i(o);
      }),
        (n.callback = function () {
          il(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (n.callback = function () {
          il(e, t),
            typeof i != "function" &&
              (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
          var f = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: f !== null ? f : "",
          });
        }),
      n
    );
  }
  function hd(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Bh();
      var o = new Set();
      i.set(t, o);
    } else (o = i.get(t)), o === void 0 && ((o = new Set()), i.set(t, o));
    o.has(n) || (o.add(n), (e = tg.bind(null, e, t, n)), t.then(e, e));
  }
  function gd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function yd(e, t, n, i, o) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = hn(-1, 1)), (t.tag = 2), An(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = o), e);
  }
  var $h = H.ReactCurrentOwner,
    xt = !1;
  function ft(e, t, n, i) {
    t.child = e === null ? Ic(t, null, n, i) : Qr(t, e.child, n, i);
  }
  function vd(e, t, n, i, o) {
    n = n.render;
    var c = t.ref;
    return (
      Gr(t, o),
      (i = Yo(e, t, n, i, c, o)),
      (n = Xo()),
      e !== null && !xt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          gn(e, t, o))
        : (De && n && Oo(t), (t.flags |= 1), ft(e, t, i, o), t.child)
    );
  }
  function xd(e, t, n, i, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !El(c) &&
        c.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), wd(e, t, c, i, o))
        : ((e = ja(n.type, null, i, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & o) === 0)) {
      var f = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ds), n(f, i) && e.ref === t.ref)
      )
        return gn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = Un(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function wd(e, t, n, i, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ds(c, i) && e.ref === t.ref)
        if (((xt = !1), (t.pendingProps = i = c), (e.lanes & o) !== 0))
          (e.flags & 131072) !== 0 && (xt = !0);
        else return (t.lanes = e.lanes), gn(e, t, o);
    }
    return al(e, t, n, i, o);
  }
  function Nd(e, t, n) {
    var i = t.pendingProps,
      o = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Me(Zr, Ct),
          (Ct |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Me(Zr, Ct),
            (Ct |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : n),
          Me(Zr, Ct),
          (Ct |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | n), (t.memoizedState = null)) : (i = n),
        Me(Zr, Ct),
        (Ct |= i);
    return ft(e, t, o, n), t.child;
  }
  function Sd(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function al(e, t, n, i, o) {
    var c = vt(n) ? lr : it.current;
    return (
      (c = $r(t, c)),
      Gr(t, o),
      (n = Yo(e, t, n, i, c, o)),
      (i = Xo()),
      e !== null && !xt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          gn(e, t, o))
        : (De && i && Oo(t), (t.flags |= 1), ft(e, t, n, o), t.child)
    );
  }
  function jd(e, t, n, i, o) {
    if (vt(n)) {
      var c = !0;
      Gi(t);
    } else c = !1;
    if ((Gr(t, o), t.stateNode === null))
      fa(e, t), dd(t, n, i), rl(t, n, i, o), (i = !0);
    else if (e === null) {
      var f = t.stateNode,
        g = t.memoizedProps;
      f.props = g;
      var w = f.context,
        T = n.contextType;
      typeof T == "object" && T !== null
        ? (T = Lt(T))
        : ((T = vt(n) ? lr : it.current), (T = $r(t, T)));
      var U = n.getDerivedStateFromProps,
        B =
          typeof U == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function";
      B ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((g !== i || w !== T) && fd(t, f, i, T)),
        (On = !1);
      var F = t.memoizedState;
      (f.state = F),
        ra(t, i, f, o),
        (w = t.memoizedState),
        g !== i || F !== w || yt.current || On
          ? (typeof U == "function" && (nl(t, n, U, i), (w = t.memoizedState)),
            (g = On || cd(t, n, g, i, F, w, T))
              ? (B ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = w)),
            (f.props = i),
            (f.state = w),
            (f.context = T),
            (i = g))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (f = t.stateNode),
        Fc(e, t),
        (g = t.memoizedProps),
        (T = t.type === t.elementType ? g : Ht(t.type, g)),
        (f.props = T),
        (B = t.pendingProps),
        (F = f.context),
        (w = n.contextType),
        typeof w == "object" && w !== null
          ? (w = Lt(w))
          : ((w = vt(n) ? lr : it.current), (w = $r(t, w)));
      var K = n.getDerivedStateFromProps;
      (U =
        typeof K == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function") ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((g !== B || F !== w) && fd(t, f, i, w)),
        (On = !1),
        (F = t.memoizedState),
        (f.state = F),
        ra(t, i, f, o);
      var X = t.memoizedState;
      g !== B || F !== X || yt.current || On
        ? (typeof K == "function" && (nl(t, n, K, i), (X = t.memoizedState)),
          (T = On || cd(t, n, T, i, F, X, w) || !1)
            ? (U ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(i, X, w),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(i, X, w)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = X)),
          (f.props = i),
          (f.state = X),
          (f.context = w),
          (i = T))
        : (typeof f.componentDidUpdate != "function" ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return ol(e, t, n, i, c, o);
  }
  function ol(e, t, n, i, o, c) {
    Sd(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return o && Pc(t, n, !1), gn(e, t, c);
    (i = t.stateNode), ($h.current = t);
    var g =
      f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && f
        ? ((t.child = Qr(t, e.child, null, c)), (t.child = Qr(t, null, g, c)))
        : ft(e, t, g, c),
      (t.memoizedState = i.state),
      o && Pc(t, n, !0),
      t.child
    );
  }
  function kd(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Cc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Cc(e, t.context, !1),
      Vo(e, t.containerInfo);
  }
  function bd(e, t, n, i, o) {
    return Wr(), Io(o), (t.flags |= 256), ft(e, t, n, i), t.child;
  }
  var ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ul(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cd(e, t, n) {
    var i = t.pendingProps,
      o = Fe.current,
      c = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) ||
        (g = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      g
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      Me(Fe, o & 1),
      e === null)
    )
      return (
        Do(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((f = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (f = { mode: "hidden", children: f }),
                (i & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = f))
                  : (c = ka(f, i, 0, null)),
                (e = vr(e, i, n, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = ul(n)),
                (t.memoizedState = ll),
                e)
              : cl(t, f))
      );
    if (((o = e.memoizedState), o !== null && ((g = o.dehydrated), g !== null)))
      return Hh(e, t, f, i, g, o, n);
    if (c) {
      (c = i.fallback), (f = t.mode), (o = e.child), (g = o.sibling);
      var w = { mode: "hidden", children: i.children };
      return (
        (f & 1) === 0 && t.child !== o
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = w),
            (t.deletions = null))
          : ((i = Un(o, w)), (i.subtreeFlags = o.subtreeFlags & 14680064)),
        g !== null ? (c = Un(g, c)) : ((c = vr(c, f, n, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (f = e.child.memoizedState),
        (f =
          f === null
            ? ul(n)
            : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions,
              }),
        (c.memoizedState = f),
        (c.childLanes = e.childLanes & ~n),
        (t.memoizedState = ll),
        i
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = Un(c, { mode: "visible", children: i.children })),
      (t.mode & 1) === 0 && (i.lanes = n),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function cl(e, t) {
    return (
      (t = ka({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function da(e, t, n, i) {
    return (
      i !== null && Io(i),
      Qr(t, e.child, null, n),
      (e = cl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Hh(e, t, n, i, o, c, f) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (i = sl(Error(a(422)))), da(e, t, f, i))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = i.fallback),
            (o = t.mode),
            (i = ka({ mode: "visible", children: i.children }, o, 0, null)),
            (c = vr(c, o, f, null)),
            (c.flags |= 2),
            (i.return = t),
            (c.return = t),
            (i.sibling = c),
            (t.child = i),
            (t.mode & 1) !== 0 && Qr(t, e.child, null, f),
            (t.child.memoizedState = ul(f)),
            (t.memoizedState = ll),
            c);
    if ((t.mode & 1) === 0) return da(e, t, f, null);
    if (o.data === "$!") {
      if (((i = o.nextSibling && o.nextSibling.dataset), i)) var g = i.dgst;
      return (
        (i = g), (c = Error(a(419))), (i = sl(c, i, void 0)), da(e, t, f, i)
      );
    }
    if (((g = (f & e.childLanes) !== 0), xt || g)) {
      if (((i = Ze), i !== null)) {
        switch (f & -f) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = (o & (i.suspendedLanes | f)) !== 0 ? 0 : o),
          o !== 0 &&
            o !== c.retryLane &&
            ((c.retryLane = o), mn(e, o), Qt(i, e, o, -1));
      }
      return Cl(), (i = sl(Error(a(421)))), da(e, t, f, i);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = ng.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (bt = Tn(o.nextSibling)),
        (kt = t),
        (De = !0),
        ($t = null),
        e !== null &&
          ((Ot[At++] = fn),
          (Ot[At++] = pn),
          (Ot[At++] = ur),
          (fn = e.id),
          (pn = e.overflow),
          (ur = t)),
        (t = cl(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function Ed(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Bo(e.return, t, n);
  }
  function dl(e, t, n, i, o) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: o,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = n),
        (c.tailMode = o));
  }
  function Pd(e, t, n) {
    var i = t.pendingProps,
      o = i.revealOrder,
      c = i.tail;
    if ((ft(e, t, i.children, n), (i = Fe.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ed(e, n, t);
          else if (e.tag === 19) Ed(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      i &= 1;
    }
    if ((Me(Fe, i), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && sa(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            dl(t, !1, o, n, c);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && sa(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          dl(t, !0, n, null, c);
          break;
        case "together":
          dl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fa(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function gn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (mr |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Un(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Un(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Vh(e, t, n) {
    switch (t.tag) {
      case 3:
        kd(t), Wr();
        break;
      case 5:
        $c(t);
        break;
      case 1:
        vt(t.type) && Gi(t);
        break;
      case 4:
        Vo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          o = t.memoizedProps.value;
        Me(ea, i._currentValue), (i._currentValue = o);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Me(Fe, Fe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Cd(e, t, n)
              : (Me(Fe, Fe.current & 1),
                (e = gn(e, t, n)),
                e !== null ? e.sibling : null);
        Me(Fe, Fe.current & 1);
        break;
      case 19:
        if (((i = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (i) return Pd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Me(Fe, Fe.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Nd(e, t, n);
    }
    return gn(e, t, n);
  }
  var Td, fl, Rd, Md;
  (Td = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (fl = function () {}),
    (Rd = function (e, t, n, i) {
      var o = e.memoizedProps;
      if (o !== i) {
        (e = t.stateNode), fr(tn.current);
        var c = null;
        switch (n) {
          case "input":
            (o = Mr(e, o)), (i = Mr(e, i)), (c = []);
            break;
          case "select":
            (o = W({}, o, { value: void 0 })),
              (i = W({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (o = gs(e, o)), (i = gs(e, i)), (c = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = Wi);
        }
        _t(n, i);
        var f;
        n = null;
        for (T in o)
          if (!i.hasOwnProperty(T) && o.hasOwnProperty(T) && o[T] != null)
            if (T === "style") {
              var g = o[T];
              for (f in g) g.hasOwnProperty(f) && (n || (n = {}), (n[f] = ""));
            } else
              T !== "dangerouslySetInnerHTML" &&
                T !== "children" &&
                T !== "suppressContentEditableWarning" &&
                T !== "suppressHydrationWarning" &&
                T !== "autoFocus" &&
                (d.hasOwnProperty(T)
                  ? c || (c = [])
                  : (c = c || []).push(T, null));
        for (T in i) {
          var w = i[T];
          if (
            ((g = o != null ? o[T] : void 0),
            i.hasOwnProperty(T) && w !== g && (w != null || g != null))
          )
            if (T === "style")
              if (g) {
                for (f in g)
                  !g.hasOwnProperty(f) ||
                    (w && w.hasOwnProperty(f)) ||
                    (n || (n = {}), (n[f] = ""));
                for (f in w)
                  w.hasOwnProperty(f) &&
                    g[f] !== w[f] &&
                    (n || (n = {}), (n[f] = w[f]));
              } else n || (c || (c = []), c.push(T, n)), (n = w);
            else
              T === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (g = g ? g.__html : void 0),
                  w != null && g !== w && (c = c || []).push(T, w))
                : T === "children"
                  ? (typeof w != "string" && typeof w != "number") ||
                    (c = c || []).push(T, "" + w)
                  : T !== "suppressContentEditableWarning" &&
                    T !== "suppressHydrationWarning" &&
                    (d.hasOwnProperty(T)
                      ? (w != null && T === "onScroll" && Oe("scroll", e),
                        c || g === w || (c = []))
                      : (c = c || []).push(T, w));
        }
        n && (c = c || []).push("style", n);
        var T = c;
        (t.updateQueue = T) && (t.flags |= 4);
      }
    }),
    (Md = function (e, t, n, i) {
      n !== i && (t.flags |= 4);
    });
  function Xs(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (i |= o.subtreeFlags & 14680064),
          (i |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (i |= o.subtreeFlags),
          (i |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = n), t;
  }
  function Wh(e, t, n) {
    var i = t.pendingProps;
    switch ((Ao(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(t), null;
      case 1:
        return vt(t.type) && Ki(), ot(t), null;
      case 3:
        return (
          (i = t.stateNode),
          qr(),
          Ae(yt),
          Ae(it),
          Ko(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), $t !== null && (jl($t), ($t = null)))),
          fl(e, t),
          ot(t),
          null
        );
      case 5:
        Wo(t);
        var o = fr(Qs.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Rd(e, t, n, i, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(a(166));
            return ot(t), null;
          }
          if (((e = fr(tn.current)), Zi(t))) {
            (i = t.stateNode), (n = t.type);
            var c = t.memoizedProps;
            switch (((i[en] = t), (i[Bs] = c), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Oe("cancel", i), Oe("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", i);
                break;
              case "video":
              case "audio":
                for (o = 0; o < zs.length; o++) Oe(zs[o], i);
                break;
              case "source":
                Oe("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", i), Oe("load", i);
                break;
              case "details":
                Oe("toggle", i);
                break;
              case "input":
                ms(i, c), Oe("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  Oe("invalid", i);
                break;
              case "textarea":
                nr(i, c), Oe("invalid", i);
            }
            _t(n, c), (o = null);
            for (var f in c)
              if (c.hasOwnProperty(f)) {
                var g = c[f];
                f === "children"
                  ? typeof g == "string"
                    ? i.textContent !== g &&
                      (c.suppressHydrationWarning !== !0 &&
                        Vi(i.textContent, g, e),
                      (o = ["children", g]))
                    : typeof g == "number" &&
                      i.textContent !== "" + g &&
                      (c.suppressHydrationWarning !== !0 &&
                        Vi(i.textContent, g, e),
                      (o = ["children", "" + g]))
                  : d.hasOwnProperty(f) &&
                    g != null &&
                    f === "onScroll" &&
                    Oe("scroll", i);
              }
            switch (n) {
              case "input":
                Pr(i), xi(i, c, !0);
                break;
              case "textarea":
                Pr(i), ys(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = Wi);
            }
            (i = o), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (f = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = _r(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = f.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                    ? (e = f.createElement(n, { is: i.is }))
                    : ((e = f.createElement(n)),
                      n === "select" &&
                        ((f = e),
                        i.multiple
                          ? (f.multiple = !0)
                          : i.size && (f.size = i.size)))
                : (e = f.createElementNS(e, n)),
              (e[en] = t),
              (e[Bs] = i),
              Td(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((f = ws(n, i)), n)) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), (o = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), (o = i);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < zs.length; o++) Oe(zs[o], e);
                  o = i;
                  break;
                case "source":
                  Oe("error", e), (o = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Oe("error", e), Oe("load", e), (o = i);
                  break;
                case "details":
                  Oe("toggle", e), (o = i);
                  break;
                case "input":
                  ms(e, i), (o = Mr(e, i)), Oe("invalid", e);
                  break;
                case "option":
                  o = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (o = W({}, i, { value: void 0 })),
                    Oe("invalid", e);
                  break;
                case "textarea":
                  nr(e, i), (o = gs(e, i)), Oe("invalid", e);
                  break;
                default:
                  o = i;
              }
              _t(n, o), (g = o);
              for (c in g)
                if (g.hasOwnProperty(c)) {
                  var w = g[c];
                  c === "style"
                    ? Si(e, w)
                    : c === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && un(e, w))
                      : c === "children"
                        ? typeof w == "string"
                          ? (n !== "textarea" || w !== "") && Sn(e, w)
                          : typeof w == "number" && Sn(e, "" + w)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          c !== "autoFocus" &&
                          (d.hasOwnProperty(c)
                            ? w != null && c === "onScroll" && Oe("scroll", e)
                            : w != null && z(e, c, w, f));
                }
              switch (n) {
                case "input":
                  Pr(e), xi(e, i, !1);
                  break;
                case "textarea":
                  Pr(e), ys(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ye(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? Nn(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        Nn(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Wi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ot(t), null;
      case 6:
        if (e && t.stateNode != null) Md(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = fr(Qs.current)), fr(tn.current), Zi(t))) {
            if (
              ((i = t.stateNode),
              (n = t.memoizedProps),
              (i[en] = t),
              (c = i.nodeValue !== n) && ((e = kt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Vi(i.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Vi(i.nodeValue, n, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
              (i[en] = t),
              (t.stateNode = i);
        }
        return ot(t), null;
      case 13:
        if (
          (Ae(Fe),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Ac(), Wr(), (t.flags |= 98560), (c = !1);
          else if (((c = Zi(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(a(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(a(317));
              c[en] = t;
            } else
              Wr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ot(t), (c = !1);
          } else $t !== null && (jl($t), ($t = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Fe.current & 1) !== 0
                  ? qe === 0 && (qe = 3)
                  : Cl())),
            t.updateQueue !== null && (t.flags |= 4),
            ot(t),
            null);
      case 4:
        return (
          qr(),
          fl(e, t),
          e === null && Fs(t.stateNode.containerInfo),
          ot(t),
          null
        );
      case 10:
        return Uo(t.type._context), ot(t), null;
      case 17:
        return vt(t.type) && Ki(), ot(t), null;
      case 19:
        if ((Ae(Fe), (c = t.memoizedState), c === null)) return ot(t), null;
        if (((i = (t.flags & 128) !== 0), (f = c.rendering), f === null))
          if (i) Xs(c, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = sa(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Xs(c, !1),
                      i = f.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = n,
                      n = t.child;
                    n !== null;

                  )
                    (c = n),
                      (e = i),
                      (c.flags &= 14680066),
                      (f = c.alternate),
                      f === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = f.childLanes),
                          (c.lanes = f.lanes),
                          (c.child = f.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = f.memoizedProps),
                          (c.memoizedState = f.memoizedState),
                          (c.updateQueue = f.updateQueue),
                          (c.type = f.type),
                          (e = f.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Me(Fe, (Fe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              He() > Jr &&
              ((t.flags |= 128), (i = !0), Xs(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = sa(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Xs(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !f.alternate &&
                  !De)
              )
                return ot(t), null;
            } else
              2 * He() - c.renderingStartTime > Jr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (i = !0), Xs(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((n = c.last),
              n !== null ? (n.sibling = f) : (t.child = f),
              (c.last = f));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = He()),
            (t.sibling = null),
            (n = Fe.current),
            Me(Fe, i ? (n & 1) | 2 : n & 1),
            t)
          : (ot(t), null);
      case 22:
      case 23:
        return (
          bl(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && (t.mode & 1) !== 0
            ? (Ct & 1073741824) !== 0 &&
              (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ot(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Qh(e, t) {
    switch ((Ao(t), t.tag)) {
      case 1:
        return (
          vt(t.type) && Ki(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          qr(),
          Ae(yt),
          Ae(it),
          Ko(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Wo(t), null;
      case 13:
        if (
          (Ae(Fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Wr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ae(Fe), null;
      case 4:
        return qr(), null;
      case 10:
        return Uo(t.type._context), null;
      case 22:
      case 23:
        return bl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pa = !1,
    lt = !1,
    Kh = typeof WeakSet == "function" ? WeakSet : Set,
    Y = null;
  function Xr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Be(e, t, i);
        }
      else n.current = null;
  }
  function pl(e, t, n) {
    try {
      n();
    } catch (i) {
      Be(e, t, i);
    }
  }
  var _d = !1;
  function Gh(e, t) {
    if (((bo = Oi), (e = cc()), yo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var o = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              g = -1,
              w = -1,
              T = 0,
              U = 0,
              B = e,
              F = null;
            t: for (;;) {
              for (
                var K;
                B !== n || (o !== 0 && B.nodeType !== 3) || (g = f + o),
                  B !== c || (i !== 0 && B.nodeType !== 3) || (w = f + i),
                  B.nodeType === 3 && (f += B.nodeValue.length),
                  (K = B.firstChild) !== null;

              )
                (F = B), (B = K);
              for (;;) {
                if (B === e) break t;
                if (
                  (F === n && ++T === o && (g = f),
                  F === c && ++U === i && (w = f),
                  (K = B.nextSibling) !== null)
                )
                  break;
                (B = F), (F = B.parentNode);
              }
              B = K;
            }
            n = g === -1 || w === -1 ? null : { start: g, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Co = { focusedElem: e, selectionRange: n }, Oi = !1, Y = t;
      Y !== null;

    )
      if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Y = e);
      else
        for (; Y !== null; ) {
          t = Y;
          try {
            var X = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (X !== null) {
                    var Z = X.memoizedProps,
                      Ve = X.memoizedState,
                      E = t.stateNode,
                      k = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Z : Ht(t.type, Z),
                        Ve,
                      );
                    E.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var P = t.stateNode.containerInfo;
                  P.nodeType === 1
                    ? (P.textContent = "")
                    : P.nodeType === 9 &&
                      P.documentElement &&
                      P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch ($) {
            Be(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Y = e);
            break;
          }
          Y = t.return;
        }
    return (X = _d), (_d = !1), X;
  }
  function Zs(e, t, n) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var o = (i = i.next);
      do {
        if ((o.tag & e) === e) {
          var c = o.destroy;
          (o.destroy = void 0), c !== void 0 && pl(t, n, c);
        }
        o = o.next;
      } while (o !== i);
    }
  }
  function ma(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ml(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Od(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Od(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[en],
          delete t[Bs],
          delete t[Ro],
          delete t[Rh],
          delete t[Mh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ld(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ad(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function hl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Wi));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (hl(e, t, n), e = e.sibling; e !== null; )
        hl(e, t, n), (e = e.sibling);
  }
  function gl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (gl(e, t, n), e = e.sibling; e !== null; )
        gl(e, t, n), (e = e.sibling);
  }
  var nt = null,
    Vt = !1;
  function Ln(e, t, n) {
    for (n = n.child; n !== null; ) Dd(e, t, n), (n = n.sibling);
  }
  function Dd(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(Ei, n);
      } catch {}
    switch (n.tag) {
      case 5:
        lt || Xr(n, t);
      case 6:
        var i = nt,
          o = Vt;
        (nt = null),
          Ln(e, t, n),
          (nt = i),
          (Vt = o),
          nt !== null &&
            (Vt
              ? ((e = nt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : nt.removeChild(n.stateNode));
        break;
      case 18:
        nt !== null &&
          (Vt
            ? ((e = nt),
              (n = n.stateNode),
              e.nodeType === 8
                ? To(e.parentNode, n)
                : e.nodeType === 1 && To(e, n),
              Rs(e))
            : To(nt, n.stateNode));
        break;
      case 4:
        (i = nt),
          (o = Vt),
          (nt = n.stateNode.containerInfo),
          (Vt = !0),
          Ln(e, t, n),
          (nt = i),
          (Vt = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !lt &&
          ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          o = i = i.next;
          do {
            var c = o,
              f = c.destroy;
            (c = c.tag),
              f !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && pl(n, t, f),
              (o = o.next);
          } while (o !== i);
        }
        Ln(e, t, n);
        break;
      case 1:
        if (
          !lt &&
          (Xr(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = n.memoizedProps),
              (i.state = n.memoizedState),
              i.componentWillUnmount();
          } catch (g) {
            Be(n, t, g);
          }
        Ln(e, t, n);
        break;
      case 21:
        Ln(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((lt = (i = lt) || n.memoizedState !== null), Ln(e, t, n), (lt = i))
          : Ln(e, t, n);
        break;
      default:
        Ln(e, t, n);
    }
  }
  function Id(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Kh()),
        t.forEach(function (i) {
          var o = rg.bind(null, e, i);
          n.has(i) || (n.add(i), i.then(o, o));
        });
    }
  }
  function Wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        try {
          var c = e,
            f = t,
            g = f;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                (nt = g.stateNode), (Vt = !1);
                break e;
              case 3:
                (nt = g.stateNode.containerInfo), (Vt = !0);
                break e;
              case 4:
                (nt = g.stateNode.containerInfo), (Vt = !0);
                break e;
            }
            g = g.return;
          }
          if (nt === null) throw Error(a(160));
          Dd(c, f, o), (nt = null), (Vt = !1);
          var w = o.alternate;
          w !== null && (w.return = null), (o.return = null);
        } catch (T) {
          Be(o, t, T);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) zd(t, e), (t = t.sibling);
  }
  function zd(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Wt(t, e), rn(e), i & 4)) {
          try {
            Zs(3, e, e.return), ma(3, e);
          } catch (Z) {
            Be(e, e.return, Z);
          }
          try {
            Zs(5, e, e.return);
          } catch (Z) {
            Be(e, e.return, Z);
          }
        }
        break;
      case 1:
        Wt(t, e), rn(e), i & 512 && n !== null && Xr(n, n.return);
        break;
      case 5:
        if (
          (Wt(t, e),
          rn(e),
          i & 512 && n !== null && Xr(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Sn(o, "");
          } catch (Z) {
            Be(e, e.return, Z);
          }
        }
        if (i & 4 && ((o = e.stateNode), o != null)) {
          var c = e.memoizedProps,
            f = n !== null ? n.memoizedProps : c,
            g = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              g === "input" && c.type === "radio" && c.name != null && ln(o, c),
                ws(g, f);
              var T = ws(g, c);
              for (f = 0; f < w.length; f += 2) {
                var U = w[f],
                  B = w[f + 1];
                U === "style"
                  ? Si(o, B)
                  : U === "dangerouslySetInnerHTML"
                    ? un(o, B)
                    : U === "children"
                      ? Sn(o, B)
                      : z(o, U, B, T);
              }
              switch (g) {
                case "input":
                  hs(o, c);
                  break;
                case "textarea":
                  wi(o, c);
                  break;
                case "select":
                  var F = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!c.multiple;
                  var K = c.value;
                  K != null
                    ? Nn(o, !!c.multiple, K, !1)
                    : F !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Nn(o, !!c.multiple, c.defaultValue, !0)
                        : Nn(o, !!c.multiple, c.multiple ? [] : "", !1));
              }
              o[Bs] = c;
            } catch (Z) {
              Be(e, e.return, Z);
            }
        }
        break;
      case 6:
        if ((Wt(t, e), rn(e), i & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (o = e.stateNode), (c = e.memoizedProps);
          try {
            o.nodeValue = c;
          } catch (Z) {
            Be(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (
          (Wt(t, e), rn(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Rs(t.containerInfo);
          } catch (Z) {
            Be(e, e.return, Z);
          }
        break;
      case 4:
        Wt(t, e), rn(e);
        break;
      case 13:
        Wt(t, e),
          rn(e),
          (o = e.child),
          o.flags & 8192 &&
            ((c = o.memoizedState !== null),
            (o.stateNode.isHidden = c),
            !c ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (xl = He())),
          i & 4 && Id(e);
        break;
      case 22:
        if (
          ((U = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((lt = (T = lt) || U), Wt(t, e), (lt = T)) : Wt(t, e),
          rn(e),
          i & 8192)
        ) {
          if (
            ((T = e.memoizedState !== null),
            (e.stateNode.isHidden = T) && !U && (e.mode & 1) !== 0)
          )
            for (Y = e, U = e.child; U !== null; ) {
              for (B = Y = U; Y !== null; ) {
                switch (((F = Y), (K = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Zs(4, F, F.return);
                    break;
                  case 1:
                    Xr(F, F.return);
                    var X = F.stateNode;
                    if (typeof X.componentWillUnmount == "function") {
                      (i = F), (n = F.return);
                      try {
                        (t = i),
                          (X.props = t.memoizedProps),
                          (X.state = t.memoizedState),
                          X.componentWillUnmount();
                      } catch (Z) {
                        Be(i, n, Z);
                      }
                    }
                    break;
                  case 5:
                    Xr(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Bd(B);
                      continue;
                    }
                }
                K !== null ? ((K.return = F), (Y = K)) : Bd(B);
              }
              U = U.sibling;
            }
          e: for (U = null, B = e; ; ) {
            if (B.tag === 5) {
              if (U === null) {
                U = B;
                try {
                  (o = B.stateNode),
                    T
                      ? ((c = o.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((g = B.stateNode),
                        (w = B.memoizedProps.style),
                        (f =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (g.style.display = vs("display", f)));
                } catch (Z) {
                  Be(e, e.return, Z);
                }
              }
            } else if (B.tag === 6) {
              if (U === null)
                try {
                  B.stateNode.nodeValue = T ? "" : B.memoizedProps;
                } catch (Z) {
                  Be(e, e.return, Z);
                }
            } else if (
              ((B.tag !== 22 && B.tag !== 23) ||
                B.memoizedState === null ||
                B === e) &&
              B.child !== null
            ) {
              (B.child.return = B), (B = B.child);
              continue;
            }
            if (B === e) break e;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === e) break e;
              U === B && (U = null), (B = B.return);
            }
            U === B && (U = null),
              (B.sibling.return = B.return),
              (B = B.sibling);
          }
        }
        break;
      case 19:
        Wt(t, e), rn(e), i & 4 && Id(e);
        break;
      case 21:
        break;
      default:
        Wt(t, e), rn(e);
    }
  }
  function rn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ad(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (i.tag) {
          case 5:
            var o = i.stateNode;
            i.flags & 32 && (Sn(o, ""), (i.flags &= -33));
            var c = Ld(e);
            gl(e, c, o);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo,
              g = Ld(e);
            hl(e, g, f);
            break;
          default:
            throw Error(a(161));
        }
      } catch (w) {
        Be(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qh(e, t, n) {
    (Y = e), Fd(e);
  }
  function Fd(e, t, n) {
    for (var i = (e.mode & 1) !== 0; Y !== null; ) {
      var o = Y,
        c = o.child;
      if (o.tag === 22 && i) {
        var f = o.memoizedState !== null || pa;
        if (!f) {
          var g = o.alternate,
            w = (g !== null && g.memoizedState !== null) || lt;
          g = pa;
          var T = lt;
          if (((pa = f), (lt = w) && !T))
            for (Y = o; Y !== null; )
              (f = Y),
                (w = f.child),
                f.tag === 22 && f.memoizedState !== null
                  ? $d(o)
                  : w !== null
                    ? ((w.return = f), (Y = w))
                    : $d(o);
          for (; c !== null; ) (Y = c), Fd(c), (c = c.sibling);
          (Y = o), (pa = g), (lt = T);
        }
        Ud(e);
      } else
        (o.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = o), (Y = c))
          : Ud(e);
    }
  }
  function Ud(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                lt || ma(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !lt)
                  if (n === null) i.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ht(t.type, n.memoizedProps);
                    i.componentDidUpdate(
                      o,
                      n.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var c = t.updateQueue;
                c !== null && Bc(t, c, i);
                break;
              case 3:
                var f = t.updateQueue;
                if (f !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Bc(t, f, n);
                }
                break;
              case 5:
                var g = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = g;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && n.focus();
                      break;
                    case "img":
                      w.src && (n.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var T = t.alternate;
                  if (T !== null) {
                    var U = T.memoizedState;
                    if (U !== null) {
                      var B = U.dehydrated;
                      B !== null && Rs(B);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          lt || (t.flags & 512 && ml(t));
        } catch (F) {
          Be(t, t.return, F);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (Y = n);
        break;
      }
      Y = t.return;
    }
  }
  function Bd(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (Y = n);
        break;
      }
      Y = t.return;
    }
  }
  function $d(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ma(4, t);
            } catch (w) {
              Be(t, n, w);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var o = t.return;
              try {
                i.componentDidMount();
              } catch (w) {
                Be(t, o, w);
              }
            }
            var c = t.return;
            try {
              ml(t);
            } catch (w) {
              Be(t, c, w);
            }
            break;
          case 5:
            var f = t.return;
            try {
              ml(t);
            } catch (w) {
              Be(t, f, w);
            }
        }
      } catch (w) {
        Be(t, t.return, w);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (Y = g);
        break;
      }
      Y = t.return;
    }
  }
  var Yh = Math.ceil,
    ha = H.ReactCurrentDispatcher,
    yl = H.ReactCurrentOwner,
    It = H.ReactCurrentBatchConfig,
    we = 0,
    Ze = null,
    We = null,
    rt = 0,
    Ct = 0,
    Zr = Rn(0),
    qe = 0,
    Js = null,
    mr = 0,
    ga = 0,
    vl = 0,
    ei = null,
    wt = null,
    xl = 0,
    Jr = 1 / 0,
    yn = null,
    ya = !1,
    wl = null,
    Dn = null,
    va = !1,
    In = null,
    xa = 0,
    ti = 0,
    Nl = null,
    wa = -1,
    Na = 0;
  function pt() {
    return (we & 6) !== 0 ? He() : wa !== -1 ? wa : (wa = He());
  }
  function zn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (we & 2) !== 0 && rt !== 0
        ? rt & -rt
        : Oh.transition !== null
          ? (Na === 0 && (Na = Lu()), Na)
          : ((e = Ee),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
            e);
  }
  function Qt(e, t, n, i) {
    if (50 < ti) throw ((ti = 0), (Nl = null), Error(a(185)));
    bs(e, n, i),
      ((we & 2) === 0 || e !== Ze) &&
        (e === Ze && ((we & 2) === 0 && (ga |= n), qe === 4 && Fn(e, rt)),
        Nt(e, i),
        n === 1 &&
          we === 0 &&
          (t.mode & 1) === 0 &&
          ((Jr = He() + 500), qi && _n()));
  }
  function Nt(e, t) {
    var n = e.callbackNode;
    Om(e, t);
    var i = Ri(e, e === Ze ? rt : 0);
    if (i === 0)
      n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((n != null && _u(n), t === 1))
        e.tag === 0 ? _h(Vd.bind(null, e)) : Tc(Vd.bind(null, e)),
          Ph(function () {
            (we & 6) === 0 && _n();
          }),
          (n = null);
      else {
        switch (Du(i)) {
          case 1:
            n = Ja;
            break;
          case 4:
            n = Ou;
            break;
          case 16:
            n = Ci;
            break;
          case 536870912:
            n = Au;
            break;
          default:
            n = Ci;
        }
        n = Zd(n, Hd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Hd(e, t) {
    if (((wa = -1), (Na = 0), (we & 6) !== 0)) throw Error(a(327));
    var n = e.callbackNode;
    if (es() && e.callbackNode !== n) return null;
    var i = Ri(e, e === Ze ? rt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Sa(e, i);
    else {
      t = i;
      var o = we;
      we |= 2;
      var c = Qd();
      (Ze !== e || rt !== t) && ((yn = null), (Jr = He() + 500), gr(e, t));
      do
        try {
          Jh();
          break;
        } catch (g) {
          Wd(e, g);
        }
      while (!0);
      Fo(),
        (ha.current = c),
        (we = o),
        We !== null ? (t = 0) : ((Ze = null), (rt = 0), (t = qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = eo(e)), o !== 0 && ((i = o), (t = Sl(e, o)))),
        t === 1)
      )
        throw ((n = Js), gr(e, 0), Fn(e, i), Nt(e, He()), n);
      if (t === 6) Fn(e, i);
      else {
        if (
          ((o = e.current.alternate),
          (i & 30) === 0 &&
            !Xh(o) &&
            ((t = Sa(e, i)),
            t === 2 && ((c = eo(e)), c !== 0 && ((i = c), (t = Sl(e, c)))),
            t === 1))
        )
          throw ((n = Js), gr(e, 0), Fn(e, i), Nt(e, He()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            yr(e, wt, yn);
            break;
          case 3:
            if (
              (Fn(e, i),
              (i & 130023424) === i && ((t = xl + 500 - He()), 10 < t))
            ) {
              if (Ri(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & i) !== i)) {
                pt(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Po(yr.bind(null, e, wt, yn), t);
              break;
            }
            yr(e, wt, yn);
            break;
          case 4:
            if ((Fn(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, o = -1; 0 < i; ) {
              var f = 31 - Ut(i);
              (c = 1 << f), (f = t[f]), f > o && (o = f), (i &= ~c);
            }
            if (
              ((i = o),
              (i = He() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                    ? 480
                    : 1080 > i
                      ? 1080
                      : 1920 > i
                        ? 1920
                        : 3e3 > i
                          ? 3e3
                          : 4320 > i
                            ? 4320
                            : 1960 * Yh(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = Po(yr.bind(null, e, wt, yn), i);
              break;
            }
            yr(e, wt, yn);
            break;
          case 5:
            yr(e, wt, yn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Nt(e, He()), e.callbackNode === n ? Hd.bind(null, e) : null;
  }
  function Sl(e, t) {
    var n = ei;
    return (
      e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256),
      (e = Sa(e, t)),
      e !== 2 && ((t = wt), (wt = n), t !== null && jl(t)),
      e
    );
  }
  function jl(e) {
    wt === null ? (wt = e) : wt.push.apply(wt, e);
  }
  function Xh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var i = 0; i < n.length; i++) {
            var o = n[i],
              c = o.getSnapshot;
            o = o.value;
            try {
              if (!Bt(c(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Fn(e, t) {
    for (
      t &= ~vl,
        t &= ~ga,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Ut(t),
        i = 1 << n;
      (e[n] = -1), (t &= ~i);
    }
  }
  function Vd(e) {
    if ((we & 6) !== 0) throw Error(a(327));
    es();
    var t = Ri(e, 0);
    if ((t & 1) === 0) return Nt(e, He()), null;
    var n = Sa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = eo(e);
      i !== 0 && ((t = i), (n = Sl(e, i)));
    }
    if (n === 1) throw ((n = Js), gr(e, 0), Fn(e, t), Nt(e, He()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      yr(e, wt, yn),
      Nt(e, He()),
      null
    );
  }
  function kl(e, t) {
    var n = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      (we = n), we === 0 && ((Jr = He() + 500), qi && _n());
    }
  }
  function hr(e) {
    In !== null && In.tag === 0 && (we & 6) === 0 && es();
    var t = we;
    we |= 1;
    var n = It.transition,
      i = Ee;
    try {
      if (((It.transition = null), (Ee = 1), e)) return e();
    } finally {
      (Ee = i), (It.transition = n), (we = t), (we & 6) === 0 && _n();
    }
  }
  function bl() {
    (Ct = Zr.current), Ae(Zr);
  }
  function gr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Eh(n)), We !== null))
      for (n = We.return; n !== null; ) {
        var i = n;
        switch ((Ao(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && Ki();
            break;
          case 3:
            qr(), Ae(yt), Ae(it), Ko();
            break;
          case 5:
            Wo(i);
            break;
          case 4:
            qr();
            break;
          case 13:
            Ae(Fe);
            break;
          case 19:
            Ae(Fe);
            break;
          case 10:
            Uo(i.type._context);
            break;
          case 22:
          case 23:
            bl();
        }
        n = n.return;
      }
    if (
      ((Ze = e),
      (We = e = Un(e.current, null)),
      (rt = Ct = t),
      (qe = 0),
      (Js = null),
      (vl = ga = mr = 0),
      (wt = ei = null),
      dr !== null)
    ) {
      for (t = 0; t < dr.length; t++)
        if (((n = dr[t]), (i = n.interleaved), i !== null)) {
          n.interleaved = null;
          var o = i.next,
            c = n.pending;
          if (c !== null) {
            var f = c.next;
            (c.next = o), (i.next = f);
          }
          n.pending = i;
        }
      dr = null;
    }
    return e;
  }
  function Wd(e, t) {
    do {
      var n = We;
      try {
        if ((Fo(), (ia.current = ua), aa)) {
          for (var i = Ue.memoizedState; i !== null; ) {
            var o = i.queue;
            o !== null && (o.pending = null), (i = i.next);
          }
          aa = !1;
        }
        if (
          ((pr = 0),
          (Xe = Ge = Ue = null),
          (Ks = !1),
          (Gs = 0),
          (yl.current = null),
          n === null || n.return === null)
        ) {
          (qe = 1), (Js = t), (We = null);
          break;
        }
        e: {
          var c = e,
            f = n.return,
            g = n,
            w = t;
          if (
            ((t = rt),
            (g.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var T = w,
              U = g,
              B = U.tag;
            if ((U.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
              var F = U.alternate;
              F
                ? ((U.updateQueue = F.updateQueue),
                  (U.memoizedState = F.memoizedState),
                  (U.lanes = F.lanes))
                : ((U.updateQueue = null), (U.memoizedState = null));
            }
            var K = gd(f);
            if (K !== null) {
              (K.flags &= -257),
                yd(K, f, g, c, t),
                K.mode & 1 && hd(c, T, t),
                (t = K),
                (w = T);
              var X = t.updateQueue;
              if (X === null) {
                var Z = new Set();
                Z.add(w), (t.updateQueue = Z);
              } else X.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                hd(c, T, t), Cl();
                break e;
              }
              w = Error(a(426));
            }
          } else if (De && g.mode & 1) {
            var Ve = gd(f);
            if (Ve !== null) {
              (Ve.flags & 65536) === 0 && (Ve.flags |= 256),
                yd(Ve, f, g, c, t),
                Io(Yr(w, g));
              break e;
            }
          }
          (c = w = Yr(w, g)),
            qe !== 4 && (qe = 2),
            ei === null ? (ei = [c]) : ei.push(c),
            (c = f);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var E = pd(c, w, t);
                Uc(c, E);
                break e;
              case 1:
                g = w;
                var k = c.type,
                  P = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (P !== null &&
                      typeof P.componentDidCatch == "function" &&
                      (Dn === null || !Dn.has(P))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var $ = md(c, g, t);
                  Uc(c, $);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Gd(n);
      } catch (J) {
        (t = J), We === n && n !== null && (We = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qd() {
    var e = ha.current;
    return (ha.current = ua), e === null ? ua : e;
  }
  function Cl() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
      Ze === null ||
        ((mr & 268435455) === 0 && (ga & 268435455) === 0) ||
        Fn(Ze, rt);
  }
  function Sa(e, t) {
    var n = we;
    we |= 2;
    var i = Qd();
    (Ze !== e || rt !== t) && ((yn = null), gr(e, t));
    do
      try {
        Zh();
        break;
      } catch (o) {
        Wd(e, o);
      }
    while (!0);
    if ((Fo(), (we = n), (ha.current = i), We !== null)) throw Error(a(261));
    return (Ze = null), (rt = 0), qe;
  }
  function Zh() {
    for (; We !== null; ) Kd(We);
  }
  function Jh() {
    for (; We !== null && !km(); ) Kd(We);
  }
  function Kd(e) {
    var t = Xd(e.alternate, e, Ct);
    (e.memoizedProps = e.pendingProps),
      t === null ? Gd(e) : (We = t),
      (yl.current = null);
  }
  function Gd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Wh(n, t, Ct)), n !== null)) {
          We = n;
          return;
        }
      } else {
        if (((n = Qh(n, t)), n !== null)) {
          (n.flags &= 32767), (We = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (qe = 6), (We = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        We = t;
        return;
      }
      We = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function yr(e, t, n) {
    var i = Ee,
      o = It.transition;
    try {
      (It.transition = null), (Ee = 1), eg(e, t, n, i);
    } finally {
      (It.transition = o), (Ee = i);
    }
    return null;
  }
  function eg(e, t, n, i) {
    do es();
    while (In !== null);
    if ((we & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = n.lanes | n.childLanes;
    if (
      (Am(e, c),
      e === Ze && ((We = Ze = null), (rt = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        va ||
        ((va = !0),
        Zd(Ci, function () {
          return es(), null;
        })),
      (c = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = It.transition), (It.transition = null);
      var f = Ee;
      Ee = 1;
      var g = we;
      (we |= 4),
        (yl.current = null),
        Gh(e, n),
        zd(n, e),
        wh(Co),
        (Oi = !!bo),
        (Co = bo = null),
        (e.current = n),
        qh(n),
        bm(),
        (we = g),
        (Ee = f),
        (It.transition = c);
    } else e.current = n;
    if (
      (va && ((va = !1), (In = e), (xa = o)),
      (c = e.pendingLanes),
      c === 0 && (Dn = null),
      Pm(n.stateNode),
      Nt(e, He()),
      t !== null)
    )
      for (i = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), i(o.value, { componentStack: o.stack, digest: o.digest });
    if (ya) throw ((ya = !1), (e = wl), (wl = null), e);
    return (
      (xa & 1) !== 0 && e.tag !== 0 && es(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Nl ? ti++ : ((ti = 0), (Nl = e))) : (ti = 0),
      _n(),
      null
    );
  }
  function es() {
    if (In !== null) {
      var e = Du(xa),
        t = It.transition,
        n = Ee;
      try {
        if (((It.transition = null), (Ee = 16 > e ? 16 : e), In === null))
          var i = !1;
        else {
          if (((e = In), (In = null), (xa = 0), (we & 6) !== 0))
            throw Error(a(331));
          var o = we;
          for (we |= 4, Y = e.current; Y !== null; ) {
            var c = Y,
              f = c.child;
            if ((Y.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var w = 0; w < g.length; w++) {
                  var T = g[w];
                  for (Y = T; Y !== null; ) {
                    var U = Y;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zs(8, U, c);
                    }
                    var B = U.child;
                    if (B !== null) (B.return = U), (Y = B);
                    else
                      for (; Y !== null; ) {
                        U = Y;
                        var F = U.sibling,
                          K = U.return;
                        if ((Od(U), U === T)) {
                          Y = null;
                          break;
                        }
                        if (F !== null) {
                          (F.return = K), (Y = F);
                          break;
                        }
                        Y = K;
                      }
                  }
                }
                var X = c.alternate;
                if (X !== null) {
                  var Z = X.child;
                  if (Z !== null) {
                    X.child = null;
                    do {
                      var Ve = Z.sibling;
                      (Z.sibling = null), (Z = Ve);
                    } while (Z !== null);
                  }
                }
                Y = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && f !== null)
              (f.return = c), (Y = f);
            else
              e: for (; Y !== null; ) {
                if (((c = Y), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zs(9, c, c.return);
                  }
                var E = c.sibling;
                if (E !== null) {
                  (E.return = c.return), (Y = E);
                  break e;
                }
                Y = c.return;
              }
          }
          var k = e.current;
          for (Y = k; Y !== null; ) {
            f = Y;
            var P = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && P !== null)
              (P.return = f), (Y = P);
            else
              e: for (f = k; Y !== null; ) {
                if (((g = Y), (g.flags & 2048) !== 0))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ma(9, g);
                    }
                  } catch (J) {
                    Be(g, g.return, J);
                  }
                if (g === f) {
                  Y = null;
                  break e;
                }
                var $ = g.sibling;
                if ($ !== null) {
                  ($.return = g.return), (Y = $);
                  break e;
                }
                Y = g.return;
              }
          }
          if (
            ((we = o),
            _n(),
            Jt && typeof Jt.onPostCommitFiberRoot == "function")
          )
            try {
              Jt.onPostCommitFiberRoot(Ei, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Ee = n), (It.transition = t);
      }
    }
    return !1;
  }
  function qd(e, t, n) {
    (t = Yr(n, t)),
      (t = pd(e, t, 1)),
      (e = An(e, t, 1)),
      (t = pt()),
      e !== null && (bs(e, 1, t), Nt(e, t));
  }
  function Be(e, t, n) {
    if (e.tag === 3) qd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Dn === null || !Dn.has(i)))
          ) {
            (e = Yr(n, e)),
              (e = md(t, e, 1)),
              (t = An(t, e, 1)),
              (e = pt()),
              t !== null && (bs(t, 1, e), Nt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function tg(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = pt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ze === e &&
        (rt & n) === n &&
        (qe === 4 || (qe === 3 && (rt & 130023424) === rt && 500 > He() - xl)
          ? gr(e, 0)
          : (vl |= n)),
      Nt(e, t);
  }
  function Yd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ti), (Ti <<= 1), (Ti & 130023424) === 0 && (Ti = 4194304)));
    var n = pt();
    (e = mn(e, t)), e !== null && (bs(e, t, n), Nt(e, n));
  }
  function ng(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Yd(e, n);
  }
  function rg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    i !== null && i.delete(t), Yd(e, n);
  }
  var Xd;
  Xd = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || yt.current) xt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (xt = !1), Vh(e, t, n);
        xt = (e.flags & 131072) !== 0;
      }
    else (xt = !1), De && (t.flags & 1048576) !== 0 && Rc(t, Xi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        fa(e, t), (e = t.pendingProps);
        var o = $r(t, it.current);
        Gr(t, n), (o = Yo(null, t, i, e, o, n));
        var c = Xo();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              vt(i) ? ((c = !0), Gi(t)) : (c = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Ho(t),
              (o.updater = ca),
              (t.stateNode = o),
              (o._reactInternals = t),
              rl(t, i, e, n),
              (t = ol(null, t, i, !0, c, n)))
            : ((t.tag = 0), De && c && Oo(t), ft(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (fa(e, t),
            (e = t.pendingProps),
            (o = i._init),
            (i = o(i._payload)),
            (t.type = i),
            (o = t.tag = ig(i)),
            (e = Ht(i, e)),
            o)
          ) {
            case 0:
              t = al(null, t, i, e, n);
              break e;
            case 1:
              t = jd(null, t, i, e, n);
              break e;
            case 11:
              t = vd(null, t, i, e, n);
              break e;
            case 14:
              t = xd(null, t, i, Ht(i.type, e), n);
              break e;
          }
          throw Error(a(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (o = t.pendingProps),
          (o = t.elementType === i ? o : Ht(i, o)),
          al(e, t, i, o, n)
        );
      case 1:
        return (
          (i = t.type),
          (o = t.pendingProps),
          (o = t.elementType === i ? o : Ht(i, o)),
          jd(e, t, i, o, n)
        );
      case 3:
        e: {
          if ((kd(t), e === null)) throw Error(a(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (o = c.element),
            Fc(e, t),
            ra(t, i, null, n);
          var f = t.memoizedState;
          if (((i = f.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: f.cache,
                pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                transitions: f.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (o = Yr(Error(a(423)), t)), (t = bd(e, t, i, n, o));
              break e;
            } else if (i !== o) {
              (o = Yr(Error(a(424)), t)), (t = bd(e, t, i, n, o));
              break e;
            } else
              for (
                bt = Tn(t.stateNode.containerInfo.firstChild),
                  kt = t,
                  De = !0,
                  $t = null,
                  n = Ic(t, null, i, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Wr(), i === o)) {
              t = gn(e, t, n);
              break e;
            }
            ft(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          $c(t),
          e === null && Do(t),
          (i = t.type),
          (o = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (f = o.children),
          Eo(i, o) ? (f = null) : c !== null && Eo(i, c) && (t.flags |= 32),
          Sd(e, t),
          ft(e, t, f, n),
          t.child
        );
      case 6:
        return e === null && Do(t), null;
      case 13:
        return Cd(e, t, n);
      case 4:
        return (
          Vo(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Qr(t, null, i, n)) : ft(e, t, i, n),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (o = t.pendingProps),
          (o = t.elementType === i ? o : Ht(i, o)),
          vd(e, t, i, o, n)
        );
      case 7:
        return ft(e, t, t.pendingProps, n), t.child;
      case 8:
        return ft(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ft(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (o = t.pendingProps),
            (c = t.memoizedProps),
            (f = o.value),
            Me(ea, i._currentValue),
            (i._currentValue = f),
            c !== null)
          )
            if (Bt(c.value, f)) {
              if (c.children === o.children && !yt.current) {
                t = gn(e, t, n);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var g = c.dependencies;
                if (g !== null) {
                  f = c.child;
                  for (var w = g.firstContext; w !== null; ) {
                    if (w.context === i) {
                      if (c.tag === 1) {
                        (w = hn(-1, n & -n)), (w.tag = 2);
                        var T = c.updateQueue;
                        if (T !== null) {
                          T = T.shared;
                          var U = T.pending;
                          U === null
                            ? (w.next = w)
                            : ((w.next = U.next), (U.next = w)),
                            (T.pending = w);
                        }
                      }
                      (c.lanes |= n),
                        (w = c.alternate),
                        w !== null && (w.lanes |= n),
                        Bo(c.return, n, t),
                        (g.lanes |= n);
                      break;
                    }
                    w = w.next;
                  }
                } else if (c.tag === 10) f = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((f = c.return), f === null)) throw Error(a(341));
                  (f.lanes |= n),
                    (g = f.alternate),
                    g !== null && (g.lanes |= n),
                    Bo(f, n, t),
                    (f = c.sibling);
                } else f = c.child;
                if (f !== null) f.return = c;
                else
                  for (f = c; f !== null; ) {
                    if (f === t) {
                      f = null;
                      break;
                    }
                    if (((c = f.sibling), c !== null)) {
                      (c.return = f.return), (f = c);
                      break;
                    }
                    f = f.return;
                  }
                c = f;
              }
          ft(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (i = t.pendingProps.children),
          Gr(t, n),
          (o = Lt(o)),
          (i = i(o)),
          (t.flags |= 1),
          ft(e, t, i, n),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (o = Ht(i, t.pendingProps)),
          (o = Ht(i.type, o)),
          xd(e, t, i, o, n)
        );
      case 15:
        return wd(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (i = t.type),
          (o = t.pendingProps),
          (o = t.elementType === i ? o : Ht(i, o)),
          fa(e, t),
          (t.tag = 1),
          vt(i) ? ((e = !0), Gi(t)) : (e = !1),
          Gr(t, n),
          dd(t, i, o),
          rl(t, i, o, n),
          ol(null, t, i, !0, e, n)
        );
      case 19:
        return Pd(e, t, n);
      case 22:
        return Nd(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Zd(e, t) {
    return Mu(e, t);
  }
  function sg(e, t, n, i) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function zt(e, t, n, i) {
    return new sg(e, t, n, i);
  }
  function El(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ig(e) {
    if (typeof e == "function") return El(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === le)) return 11;
      if (e === xe) return 14;
    }
    return 2;
  }
  function Un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = zt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ja(e, t, n, i, o, c) {
    var f = 2;
    if (((i = e), typeof e == "function")) El(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else
      e: switch (e) {
        case ee:
          return vr(n.children, o, c, t);
        case ne:
          (f = 8), (o |= 8);
          break;
        case ve:
          return (
            (e = zt(12, n, t, o | 2)), (e.elementType = ve), (e.lanes = c), e
          );
        case Te:
          return (e = zt(13, n, t, o)), (e.elementType = Te), (e.lanes = c), e;
        case te:
          return (e = zt(19, n, t, o)), (e.elementType = te), (e.lanes = c), e;
        case ge:
          return ka(n, o, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _e:
                f = 10;
                break e;
              case Pe:
                f = 9;
                break e;
              case le:
                f = 11;
                break e;
              case xe:
                f = 14;
                break e;
              case me:
                (f = 16), (i = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = zt(f, n, t, o)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    );
  }
  function vr(e, t, n, i) {
    return (e = zt(7, e, i, t)), (e.lanes = n), e;
  }
  function ka(e, t, n, i) {
    return (
      (e = zt(22, e, i, t)),
      (e.elementType = ge),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Pl(e, t, n) {
    return (e = zt(6, e, null, t)), (e.lanes = n), e;
  }
  function Tl(e, t, n) {
    return (
      (t = zt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ag(e, t, n, i, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = to(0)),
      (this.expirationTimes = to(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = to(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Rl(e, t, n, i, o, c, f, g, w) {
    return (
      (e = new ag(e, t, n, g, w)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = zt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ho(c),
      e
    );
  }
  function og(e, t, n) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: oe,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Jd(e) {
    if (!e) return Mn;
    e = e._reactInternals;
    e: {
      if (ar(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (vt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (vt(n)) return Ec(e, n, t);
    }
    return t;
  }
  function ef(e, t, n, i, o, c, f, g, w) {
    return (
      (e = Rl(n, i, !0, e, o, c, f, g, w)),
      (e.context = Jd(null)),
      (n = e.current),
      (i = pt()),
      (o = zn(n)),
      (c = hn(i, o)),
      (c.callback = t ?? null),
      An(n, c, o),
      (e.current.lanes = o),
      bs(e, o, i),
      Nt(e, i),
      e
    );
  }
  function ba(e, t, n, i) {
    var o = t.current,
      c = pt(),
      f = zn(o);
    return (
      (n = Jd(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = hn(c, f)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = An(o, t, f)),
      e !== null && (Qt(e, o, f, c), na(e, o, f)),
      f
    );
  }
  function Ca(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function tf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ml(e, t) {
    tf(e, t), (e = e.alternate) && tf(e, t);
  }
  function lg() {
    return null;
  }
  var nf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _l(e) {
    this._internalRoot = e;
  }
  (Ea.prototype.render = _l.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      ba(e, t, null, null);
    }),
    (Ea.prototype.unmount = _l.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          hr(function () {
            ba(null, e, null, null);
          }),
            (t[cn] = null);
        }
      });
  function Ea(e) {
    this._internalRoot = e;
  }
  Ea.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Fu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Cn.length && t !== 0 && t < Cn[n].priority; n++);
      Cn.splice(n, 0, e), n === 0 && $u(e);
    }
  };
  function Ol(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pa(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rf() {}
  function ug(e, t, n, i, o) {
    if (o) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var T = Ca(f);
          c.call(T);
        };
      }
      var f = ef(t, i, e, 0, null, !1, !1, "", rf);
      return (
        (e._reactRootContainer = f),
        (e[cn] = f.current),
        Fs(e.nodeType === 8 ? e.parentNode : e),
        hr(),
        f
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof i == "function") {
      var g = i;
      i = function () {
        var T = Ca(w);
        g.call(T);
      };
    }
    var w = Rl(e, 0, !1, null, null, !1, !1, "", rf);
    return (
      (e._reactRootContainer = w),
      (e[cn] = w.current),
      Fs(e.nodeType === 8 ? e.parentNode : e),
      hr(function () {
        ba(t, w, n, i);
      }),
      w
    );
  }
  function Ta(e, t, n, i, o) {
    var c = n._reactRootContainer;
    if (c) {
      var f = c;
      if (typeof o == "function") {
        var g = o;
        o = function () {
          var w = Ca(f);
          g.call(w);
        };
      }
      ba(t, f, e, o);
    } else f = ug(n, t, e, o, i);
    return Ca(f);
  }
  (Iu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ks(t.pendingLanes);
          n !== 0 &&
            (no(t, n | 1),
            Nt(t, He()),
            (we & 6) === 0 && ((Jr = He() + 500), _n()));
        }
        break;
      case 13:
        hr(function () {
          var i = mn(e, 1);
          if (i !== null) {
            var o = pt();
            Qt(i, e, 1, o);
          }
        }),
          Ml(e, 1);
    }
  }),
    (ro = function (e) {
      if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
          var n = pt();
          Qt(t, e, 134217728, n);
        }
        Ml(e, 134217728);
      }
    }),
    (zu = function (e) {
      if (e.tag === 13) {
        var t = zn(e),
          n = mn(e, t);
        if (n !== null) {
          var i = pt();
          Qt(n, e, t, i);
        }
        Ml(e, t);
      }
    }),
    (Fu = function () {
      return Ee;
    }),
    (Uu = function (e, t) {
      var n = Ee;
      try {
        return (Ee = e), t();
      } finally {
        Ee = n;
      }
    }),
    (ke = function (e, t, n) {
      switch (t) {
        case "input":
          if ((hs(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = Qi(i);
                if (!o) throw Error(a(90));
                Tr(i), hs(i, o);
              }
            }
          }
          break;
        case "textarea":
          wi(e, n);
          break;
        case "select":
          (t = n.value), t != null && Nn(e, !!n.multiple, t, !1);
      }
    }),
    (ku = kl),
    (bu = hr);
  var cg = { usingClientEntryPoint: !1, Events: [$s, Ur, Qi, ji, ju, kl] },
    ni = {
      findFiberByHostInstance: or,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    dg = {
      bundleType: ni.bundleType,
      version: ni.version,
      rendererPackageName: ni.rendererPackageName,
      rendererConfig: ni.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: H.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Tu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ni.findFiberByHostInstance || lg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ra.isDisabled && Ra.supportsFiber)
      try {
        (Ei = Ra.inject(dg)), (Jt = Ra);
      } catch {}
  }
  return (
    (St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cg),
    (St.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ol(t)) throw Error(a(200));
      return og(e, t, null, n);
    }),
    (St.createRoot = function (e, t) {
      if (!Ol(e)) throw Error(a(299));
      var n = !1,
        i = "",
        o = nf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Rl(e, 1, !1, null, null, n, !1, i, o)),
        (e[cn] = t.current),
        Fs(e.nodeType === 8 ? e.parentNode : e),
        new _l(t)
      );
    }),
    (St.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = Tu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (St.flushSync = function (e) {
      return hr(e);
    }),
    (St.hydrate = function (e, t, n) {
      if (!Pa(t)) throw Error(a(200));
      return Ta(null, e, t, !0, n);
    }),
    (St.hydrateRoot = function (e, t, n) {
      if (!Ol(e)) throw Error(a(405));
      var i = (n != null && n.hydratedSources) || null,
        o = !1,
        c = "",
        f = nf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (t = ef(t, null, e, 1, n ?? null, o, !1, c, f)),
        (e[cn] = t.current),
        Fs(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (n = i[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new Ea(t);
    }),
    (St.render = function (e, t, n) {
      if (!Pa(t)) throw Error(a(200));
      return Ta(null, e, t, !1, n);
    }),
    (St.unmountComponentAtNode = function (e) {
      if (!Pa(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (hr(function () {
            Ta(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[cn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (St.unstable_batchedUpdates = kl),
    (St.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
      if (!Pa(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Ta(e, t, n, !1, i);
    }),
    (St.version = "18.3.1-next-f1338f8080-20240426"),
    St
  );
}
var pf;
function Xf() {
  if (pf) return Il.exports;
  pf = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), (Il.exports = xg()), Il.exports;
}
var mf;
function wg() {
  if (mf) return _a;
  mf = 1;
  var r = Xf();
  return (_a.createRoot = r.createRoot), (_a.hydrateRoot = r.hydrateRoot), _a;
}
var Ng = wg(),
  N = au();
const V = Yf(N),
  Sg = pg({ __proto__: null, default: V }, [N]),
  jg = 1,
  kg = 1e6;
let Ul = 0;
function bg() {
  return (Ul = (Ul + 1) % Number.MAX_SAFE_INTEGER), Ul.toString();
}
const Bl = new Map(),
  hf = (r) => {
    if (Bl.has(r)) return;
    const s = setTimeout(() => {
      Bl.delete(r), oi({ type: "REMOVE_TOAST", toastId: r });
    }, kg);
    Bl.set(r, s);
  },
  Cg = (r, s) => {
    switch (s.type) {
      case "ADD_TOAST":
        return { ...r, toasts: [s.toast, ...r.toasts].slice(0, jg) };
      case "UPDATE_TOAST":
        return {
          ...r,
          toasts: r.toasts.map((a) =>
            a.id === s.toast.id ? { ...a, ...s.toast } : a,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: a } = s;
        return (
          a
            ? hf(a)
            : r.toasts.forEach((u) => {
                hf(u.id);
              }),
          {
            ...r,
            toasts: r.toasts.map((u) =>
              u.id === a || a === void 0 ? { ...u, open: !1 } : u,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return s.toastId === void 0
          ? { ...r, toasts: [] }
          : { ...r, toasts: r.toasts.filter((a) => a.id !== s.toastId) };
    }
  },
  Ia = [];
let za = { toasts: [] };
function oi(r) {
  (za = Cg(za, r)),
    Ia.forEach((s) => {
      s(za);
    });
}
function Eg({ ...r }) {
  const s = bg(),
    a = (d) => oi({ type: "UPDATE_TOAST", toast: { ...d, id: s } }),
    u = () => oi({ type: "DISMISS_TOAST", toastId: s });
  return (
    oi({
      type: "ADD_TOAST",
      toast: {
        ...r,
        id: s,
        open: !0,
        onOpenChange: (d) => {
          d || u();
        },
      },
    }),
    { id: s, dismiss: u, update: a }
  );
}
function Pg() {
  const [r, s] = N.useState(za);
  return (
    N.useEffect(
      () => (
        Ia.push(s),
        () => {
          const a = Ia.indexOf(s);
          a > -1 && Ia.splice(a, 1);
        }
      ),
      [r],
    ),
    {
      ...r,
      toast: Eg,
      dismiss: (a) => oi({ type: "DISMISS_TOAST", toastId: a }),
    }
  );
}
var Ha = Xf();
const Zf = Yf(Ha);
function gt(r, s, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (d) {
    if ((r == null || r(d), a === !1 || !d.defaultPrevented))
      return s == null ? void 0 : s(d);
  };
}
function Tg(r, s) {
  typeof r == "function" ? r(s) : r != null && (r.current = s);
}
function Jf(...r) {
  return (s) => r.forEach((a) => Tg(a, s));
}
function er(...r) {
  return N.useCallback(Jf(...r), r);
}
function ou(r, s = []) {
  let a = [];
  function u(p, m) {
    const h = N.createContext(m),
      v = a.length;
    a = [...a, m];
    function x(j) {
      const { scope: y, children: _, ...L } = j,
        R = (y == null ? void 0 : y[r][v]) || h,
        C = N.useMemo(() => L, Object.values(L));
      return l.jsx(R.Provider, { value: C, children: _ });
    }
    function b(j, y) {
      const _ = (y == null ? void 0 : y[r][v]) || h,
        L = N.useContext(_);
      if (L) return L;
      if (m !== void 0) return m;
      throw new Error(`\`${j}\` must be used within \`${p}\``);
    }
    return (x.displayName = p + "Provider"), [x, b];
  }
  const d = () => {
    const p = a.map((m) => N.createContext(m));
    return function (h) {
      const v = (h == null ? void 0 : h[r]) || p;
      return N.useMemo(() => ({ [`__scope${r}`]: { ...h, [r]: v } }), [h, v]);
    };
  };
  return (d.scopeName = r), [u, Rg(d, ...s)];
}
function Rg(...r) {
  const s = r[0];
  if (r.length === 1) return s;
  const a = () => {
    const u = r.map((d) => ({ useScope: d(), scopeName: d.scopeName }));
    return function (p) {
      const m = u.reduce((h, { useScope: v, scopeName: x }) => {
        const j = v(p)[`__scope${x}`];
        return { ...h, ...j };
      }, {});
      return N.useMemo(() => ({ [`__scope${s.scopeName}`]: m }), [m]);
    };
  };
  return (a.scopeName = s.scopeName), a;
}
var ui = N.forwardRef((r, s) => {
  const { children: a, ...u } = r,
    d = N.Children.toArray(a),
    p = d.find(_g);
  if (p) {
    const m = p.props.children,
      h = d.map((v) =>
        v === p
          ? N.Children.count(m) > 1
            ? N.Children.only(null)
            : N.isValidElement(m)
              ? m.props.children
              : null
          : v,
      );
    return l.jsx(Ql, {
      ...u,
      ref: s,
      children: N.isValidElement(m) ? N.cloneElement(m, void 0, h) : null,
    });
  }
  return l.jsx(Ql, { ...u, ref: s, children: a });
});
ui.displayName = "Slot";
var Ql = N.forwardRef((r, s) => {
  const { children: a, ...u } = r;
  if (N.isValidElement(a)) {
    const d = Ag(a);
    return N.cloneElement(a, { ...Og(u, a.props), ref: s ? Jf(s, d) : d });
  }
  return N.Children.count(a) > 1 ? N.Children.only(null) : null;
});
Ql.displayName = "SlotClone";
var Mg = ({ children: r }) => l.jsx(l.Fragment, { children: r });
function _g(r) {
  return N.isValidElement(r) && r.type === Mg;
}
function Og(r, s) {
  const a = { ...s };
  for (const u in s) {
    const d = r[u],
      p = s[u];
    /^on[A-Z]/.test(u)
      ? d && p
        ? (a[u] = (...h) => {
            p(...h), d(...h);
          })
        : d && (a[u] = d)
      : u === "style"
        ? (a[u] = { ...d, ...p })
        : u === "className" && (a[u] = [d, p].filter(Boolean).join(" "));
  }
  return { ...r, ...a };
}
function Ag(r) {
  var u, d;
  let s =
      (u = Object.getOwnPropertyDescriptor(r.props, "ref")) == null
        ? void 0
        : u.get,
    a = s && "isReactWarning" in s && s.isReactWarning;
  return a
    ? r.ref
    : ((s =
        (d = Object.getOwnPropertyDescriptor(r, "ref")) == null
          ? void 0
          : d.get),
      (a = s && "isReactWarning" in s && s.isReactWarning),
      a ? r.props.ref : r.props.ref || r.ref);
}
function Lg(r) {
  const s = r + "CollectionProvider",
    [a, u] = ou(s),
    [d, p] = a(s, { collectionRef: { current: null }, itemMap: new Map() }),
    m = (_) => {
      const { scope: L, children: R } = _,
        C = V.useRef(null),
        D = V.useRef(new Map()).current;
      return l.jsx(d, { scope: L, itemMap: D, collectionRef: C, children: R });
    };
  m.displayName = s;
  const h = r + "CollectionSlot",
    v = V.forwardRef((_, L) => {
      const { scope: R, children: C } = _,
        D = p(h, R),
        I = er(L, D.collectionRef);
      return l.jsx(ui, { ref: I, children: C });
    });
  v.displayName = h;
  const x = r + "CollectionItemSlot",
    b = "data-radix-collection-item",
    j = V.forwardRef((_, L) => {
      const { scope: R, children: C, ...D } = _,
        I = V.useRef(null),
        z = er(L, I),
        H = p(x, R);
      return (
        V.useEffect(
          () => (
            H.itemMap.set(I, { ref: I, ...D }), () => void H.itemMap.delete(I)
          ),
        ),
        l.jsx(ui, { [b]: "", ref: z, children: C })
      );
    });
  j.displayName = x;
  function y(_) {
    const L = p(r + "CollectionConsumer", _);
    return V.useCallback(() => {
      const C = L.collectionRef.current;
      if (!C) return [];
      const D = Array.from(C.querySelectorAll(`[${b}]`));
      return Array.from(L.itemMap.values()).sort(
        (H, q) => D.indexOf(H.ref.current) - D.indexOf(q.ref.current),
      );
    }, [L.collectionRef, L.itemMap]);
  }
  return [{ Provider: m, Slot: v, ItemSlot: j }, y, u];
}
var Dg = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Rt = Dg.reduce((r, s) => {
    const a = N.forwardRef((u, d) => {
      const { asChild: p, ...m } = u,
        h = p ? ui : s;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        l.jsx(h, { ...m, ref: d })
      );
    });
    return (a.displayName = `Primitive.${s}`), { ...r, [s]: a };
  }, {});
function ep(r, s) {
  r && Ha.flushSync(() => r.dispatchEvent(s));
}
function wn(r) {
  const s = N.useRef(r);
  return (
    N.useEffect(() => {
      s.current = r;
    }),
    N.useMemo(
      () =>
        (...a) => {
          var u;
          return (u = s.current) == null ? void 0 : u.call(s, ...a);
        },
      [],
    )
  );
}
function Ig(r, s = globalThis == null ? void 0 : globalThis.document) {
  const a = wn(r);
  N.useEffect(() => {
    const u = (d) => {
      d.key === "Escape" && a(d);
    };
    return (
      s.addEventListener("keydown", u, { capture: !0 }),
      () => s.removeEventListener("keydown", u, { capture: !0 })
    );
  }, [a, s]);
}
var zg = "DismissableLayer",
  Kl = "dismissableLayer.update",
  Fg = "dismissableLayer.pointerDownOutside",
  Ug = "dismissableLayer.focusOutside",
  gf,
  tp = N.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  np = N.forwardRef((r, s) => {
    const {
        disableOutsidePointerEvents: a = !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: p,
        onInteractOutside: m,
        onDismiss: h,
        ...v
      } = r,
      x = N.useContext(tp),
      [b, j] = N.useState(null),
      y =
        (b == null ? void 0 : b.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, _] = N.useState({}),
      L = er(s, (ee) => j(ee)),
      R = Array.from(x.layers),
      [C] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
      D = R.indexOf(C),
      I = b ? R.indexOf(b) : -1,
      z = x.layersWithOutsidePointerEventsDisabled.size > 0,
      H = I >= D,
      q = $g((ee) => {
        const ne = ee.target,
          ve = [...x.branches].some((_e) => _e.contains(ne));
        !H ||
          ve ||
          (d == null || d(ee),
          m == null || m(ee),
          ee.defaultPrevented || h == null || h());
      }, y),
      oe = Hg((ee) => {
        const ne = ee.target;
        [...x.branches].some((_e) => _e.contains(ne)) ||
          (p == null || p(ee),
          m == null || m(ee),
          ee.defaultPrevented || h == null || h());
      }, y);
    return (
      Ig((ee) => {
        I === x.layers.size - 1 &&
          (u == null || u(ee),
          !ee.defaultPrevented && h && (ee.preventDefault(), h()));
      }, y),
      N.useEffect(() => {
        if (b)
          return (
            a &&
              (x.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((gf = y.body.style.pointerEvents),
                (y.body.style.pointerEvents = "none")),
              x.layersWithOutsidePointerEventsDisabled.add(b)),
            x.layers.add(b),
            yf(),
            () => {
              a &&
                x.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (y.body.style.pointerEvents = gf);
            }
          );
      }, [b, y, a, x]),
      N.useEffect(
        () => () => {
          b &&
            (x.layers.delete(b),
            x.layersWithOutsidePointerEventsDisabled.delete(b),
            yf());
        },
        [b, x],
      ),
      N.useEffect(() => {
        const ee = () => _({});
        return (
          document.addEventListener(Kl, ee),
          () => document.removeEventListener(Kl, ee)
        );
      }, []),
      l.jsx(Rt.div, {
        ...v,
        ref: L,
        style: {
          pointerEvents: z ? (H ? "auto" : "none") : void 0,
          ...r.style,
        },
        onFocusCapture: gt(r.onFocusCapture, oe.onFocusCapture),
        onBlurCapture: gt(r.onBlurCapture, oe.onBlurCapture),
        onPointerDownCapture: gt(
          r.onPointerDownCapture,
          q.onPointerDownCapture,
        ),
      })
    );
  });
np.displayName = zg;
var Bg = "DismissableLayerBranch",
  rp = N.forwardRef((r, s) => {
    const a = N.useContext(tp),
      u = N.useRef(null),
      d = er(s, u);
    return (
      N.useEffect(() => {
        const p = u.current;
        if (p)
          return (
            a.branches.add(p),
            () => {
              a.branches.delete(p);
            }
          );
      }, [a.branches]),
      l.jsx(Rt.div, { ...r, ref: d })
    );
  });
rp.displayName = Bg;
function $g(r, s = globalThis == null ? void 0 : globalThis.document) {
  const a = wn(r),
    u = N.useRef(!1),
    d = N.useRef(() => {});
  return (
    N.useEffect(() => {
      const p = (h) => {
          if (h.target && !u.current) {
            let v = function () {
              sp(Fg, a, x, { discrete: !0 });
            };
            const x = { originalEvent: h };
            h.pointerType === "touch"
              ? (s.removeEventListener("click", d.current),
                (d.current = v),
                s.addEventListener("click", d.current, { once: !0 }))
              : v();
          } else s.removeEventListener("click", d.current);
          u.current = !1;
        },
        m = window.setTimeout(() => {
          s.addEventListener("pointerdown", p);
        }, 0);
      return () => {
        window.clearTimeout(m),
          s.removeEventListener("pointerdown", p),
          s.removeEventListener("click", d.current);
      };
    }, [s, a]),
    { onPointerDownCapture: () => (u.current = !0) }
  );
}
function Hg(r, s = globalThis == null ? void 0 : globalThis.document) {
  const a = wn(r),
    u = N.useRef(!1);
  return (
    N.useEffect(() => {
      const d = (p) => {
        p.target &&
          !u.current &&
          sp(Ug, a, { originalEvent: p }, { discrete: !1 });
      };
      return (
        s.addEventListener("focusin", d),
        () => s.removeEventListener("focusin", d)
      );
    }, [s, a]),
    {
      onFocusCapture: () => (u.current = !0),
      onBlurCapture: () => (u.current = !1),
    }
  );
}
function yf() {
  const r = new CustomEvent(Kl);
  document.dispatchEvent(r);
}
function sp(r, s, a, { discrete: u }) {
  const d = a.originalEvent.target,
    p = new CustomEvent(r, { bubbles: !1, cancelable: !0, detail: a });
  s && d.addEventListener(r, s, { once: !0 }),
    u ? ep(d, p) : d.dispatchEvent(p);
}
var Vg = np,
  Wg = rp,
  ci = globalThis != null && globalThis.document ? N.useLayoutEffect : () => {},
  Qg = "Portal",
  ip = N.forwardRef((r, s) => {
    var h;
    const { container: a, ...u } = r,
      [d, p] = N.useState(!1);
    ci(() => p(!0), []);
    const m =
      a ||
      (d &&
        ((h = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : h.body));
    return m ? Zf.createPortal(l.jsx(Rt.div, { ...u, ref: s }), m) : null;
  });
ip.displayName = Qg;
function Kg(r, s) {
  return N.useReducer((a, u) => s[a][u] ?? a, r);
}
var lu = (r) => {
  const { present: s, children: a } = r,
    u = Gg(s),
    d =
      typeof a == "function" ? a({ present: u.isPresent }) : N.Children.only(a),
    p = er(u.ref, qg(d));
  return typeof a == "function" || u.isPresent
    ? N.cloneElement(d, { ref: p })
    : null;
};
lu.displayName = "Presence";
function Gg(r) {
  const [s, a] = N.useState(),
    u = N.useRef({}),
    d = N.useRef(r),
    p = N.useRef("none"),
    m = r ? "mounted" : "unmounted",
    [h, v] = Kg(m, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    N.useEffect(() => {
      const x = Oa(u.current);
      p.current = h === "mounted" ? x : "none";
    }, [h]),
    ci(() => {
      const x = u.current,
        b = d.current;
      if (b !== r) {
        const y = p.current,
          _ = Oa(x);
        r
          ? v("MOUNT")
          : _ === "none" || (x == null ? void 0 : x.display) === "none"
            ? v("UNMOUNT")
            : v(b && y !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
          (d.current = r);
      }
    }, [r, v]),
    ci(() => {
      if (s) {
        const x = (j) => {
            const _ = Oa(u.current).includes(j.animationName);
            j.target === s && _ && Ha.flushSync(() => v("ANIMATION_END"));
          },
          b = (j) => {
            j.target === s && (p.current = Oa(u.current));
          };
        return (
          s.addEventListener("animationstart", b),
          s.addEventListener("animationcancel", x),
          s.addEventListener("animationend", x),
          () => {
            s.removeEventListener("animationstart", b),
              s.removeEventListener("animationcancel", x),
              s.removeEventListener("animationend", x);
          }
        );
      } else v("ANIMATION_END");
    }, [s, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: N.useCallback((x) => {
        x && (u.current = getComputedStyle(x)), a(x);
      }, []),
    }
  );
}
function Oa(r) {
  return (r == null ? void 0 : r.animationName) || "none";
}
function qg(r) {
  var u, d;
  let s =
      (u = Object.getOwnPropertyDescriptor(r.props, "ref")) == null
        ? void 0
        : u.get,
    a = s && "isReactWarning" in s && s.isReactWarning;
  return a
    ? r.ref
    : ((s =
        (d = Object.getOwnPropertyDescriptor(r, "ref")) == null
          ? void 0
          : d.get),
      (a = s && "isReactWarning" in s && s.isReactWarning),
      a ? r.props.ref : r.props.ref || r.ref);
}
function ap({ prop: r, defaultProp: s, onChange: a = () => {} }) {
  const [u, d] = Yg({ defaultProp: s, onChange: a }),
    p = r !== void 0,
    m = p ? r : u,
    h = wn(a),
    v = N.useCallback(
      (x) => {
        if (p) {
          const j = typeof x == "function" ? x(r) : x;
          j !== r && h(j);
        } else d(x);
      },
      [p, r, d, h],
    );
  return [m, v];
}
function Yg({ defaultProp: r, onChange: s }) {
  const a = N.useState(r),
    [u] = a,
    d = N.useRef(u),
    p = wn(s);
  return (
    N.useEffect(() => {
      d.current !== u && (p(u), (d.current = u));
    }, [u, d, p]),
    a
  );
}
var Xg = "VisuallyHidden",
  uu = N.forwardRef((r, s) =>
    l.jsx(Rt.span, {
      ...r,
      ref: s,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...r.style,
      },
    }),
  );
uu.displayName = Xg;
var cu = "ToastProvider",
  [du, Zg, Jg] = Lg("Toast"),
  [op, A0] = ou("Toast", [Jg]),
  [ey, Va] = op(cu),
  lp = (r) => {
    const {
        __scopeToast: s,
        label: a = "Notification",
        duration: u = 5e3,
        swipeDirection: d = "right",
        swipeThreshold: p = 50,
        children: m,
      } = r,
      [h, v] = N.useState(null),
      [x, b] = N.useState(0),
      j = N.useRef(!1),
      y = N.useRef(!1);
    return (
      a.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${cu}\`. Expected non-empty \`string\`.`,
        ),
      l.jsx(du.Provider, {
        scope: s,
        children: l.jsx(ey, {
          scope: s,
          label: a,
          duration: u,
          swipeDirection: d,
          swipeThreshold: p,
          toastCount: x,
          viewport: h,
          onViewportChange: v,
          onToastAdd: N.useCallback(() => b((_) => _ + 1), []),
          onToastRemove: N.useCallback(() => b((_) => _ - 1), []),
          isFocusedToastEscapeKeyDownRef: j,
          isClosePausedRef: y,
          children: m,
        }),
      })
    );
  };
lp.displayName = cu;
var up = "ToastViewport",
  ty = ["F8"],
  Gl = "toast.viewportPause",
  ql = "toast.viewportResume",
  cp = N.forwardRef((r, s) => {
    const {
        __scopeToast: a,
        hotkey: u = ty,
        label: d = "Notifications ({hotkey})",
        ...p
      } = r,
      m = Va(up, a),
      h = Zg(a),
      v = N.useRef(null),
      x = N.useRef(null),
      b = N.useRef(null),
      j = N.useRef(null),
      y = er(s, j, m.onViewportChange),
      _ = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      L = m.toastCount > 0;
    N.useEffect(() => {
      const C = (D) => {
        var z;
        u.every((H) => D[H] || D.code === H) &&
          ((z = j.current) == null || z.focus());
      };
      return (
        document.addEventListener("keydown", C),
        () => document.removeEventListener("keydown", C)
      );
    }, [u]),
      N.useEffect(() => {
        const C = v.current,
          D = j.current;
        if (L && C && D) {
          const I = () => {
              if (!m.isClosePausedRef.current) {
                const oe = new CustomEvent(Gl);
                D.dispatchEvent(oe), (m.isClosePausedRef.current = !0);
              }
            },
            z = () => {
              if (m.isClosePausedRef.current) {
                const oe = new CustomEvent(ql);
                D.dispatchEvent(oe), (m.isClosePausedRef.current = !1);
              }
            },
            H = (oe) => {
              !C.contains(oe.relatedTarget) && z();
            },
            q = () => {
              C.contains(document.activeElement) || z();
            };
          return (
            C.addEventListener("focusin", I),
            C.addEventListener("focusout", H),
            C.addEventListener("pointermove", I),
            C.addEventListener("pointerleave", q),
            window.addEventListener("blur", I),
            window.addEventListener("focus", z),
            () => {
              C.removeEventListener("focusin", I),
                C.removeEventListener("focusout", H),
                C.removeEventListener("pointermove", I),
                C.removeEventListener("pointerleave", q),
                window.removeEventListener("blur", I),
                window.removeEventListener("focus", z);
            }
          );
        }
      }, [L, m.isClosePausedRef]);
    const R = N.useCallback(
      ({ tabbingDirection: C }) => {
        const I = h().map((z) => {
          const H = z.ref.current,
            q = [H, ...my(H)];
          return C === "forwards" ? q : q.reverse();
        });
        return (C === "forwards" ? I.reverse() : I).flat();
      },
      [h],
    );
    return (
      N.useEffect(() => {
        const C = j.current;
        if (C) {
          const D = (I) => {
            var q, oe, ee;
            const z = I.altKey || I.ctrlKey || I.metaKey;
            if (I.key === "Tab" && !z) {
              const ne = document.activeElement,
                ve = I.shiftKey;
              if (I.target === C && ve) {
                (q = x.current) == null || q.focus();
                return;
              }
              const le = R({ tabbingDirection: ve ? "backwards" : "forwards" }),
                Te = le.findIndex((te) => te === ne);
              $l(le.slice(Te + 1))
                ? I.preventDefault()
                : ve
                  ? (oe = x.current) == null || oe.focus()
                  : (ee = b.current) == null || ee.focus();
            }
          };
          return (
            C.addEventListener("keydown", D),
            () => C.removeEventListener("keydown", D)
          );
        }
      }, [h, R]),
      l.jsxs(Wg, {
        ref: v,
        role: "region",
        "aria-label": d.replace("{hotkey}", _),
        tabIndex: -1,
        style: { pointerEvents: L ? void 0 : "none" },
        children: [
          L &&
            l.jsx(Yl, {
              ref: x,
              onFocusFromOutsideViewport: () => {
                const C = R({ tabbingDirection: "forwards" });
                $l(C);
              },
            }),
          l.jsx(du.Slot, {
            scope: a,
            children: l.jsx(Rt.ol, { tabIndex: -1, ...p, ref: y }),
          }),
          L &&
            l.jsx(Yl, {
              ref: b,
              onFocusFromOutsideViewport: () => {
                const C = R({ tabbingDirection: "backwards" });
                $l(C);
              },
            }),
        ],
      })
    );
  });
cp.displayName = up;
var dp = "ToastFocusProxy",
  Yl = N.forwardRef((r, s) => {
    const { __scopeToast: a, onFocusFromOutsideViewport: u, ...d } = r,
      p = Va(dp, a);
    return l.jsx(uu, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...d,
      ref: s,
      style: { position: "fixed" },
      onFocus: (m) => {
        var x;
        const h = m.relatedTarget;
        !((x = p.viewport) != null && x.contains(h)) && u();
      },
    });
  });
Yl.displayName = dp;
var Wa = "Toast",
  ny = "toast.swipeStart",
  ry = "toast.swipeMove",
  sy = "toast.swipeCancel",
  iy = "toast.swipeEnd",
  fp = N.forwardRef((r, s) => {
    const { forceMount: a, open: u, defaultOpen: d, onOpenChange: p, ...m } = r,
      [h = !0, v] = ap({ prop: u, defaultProp: d, onChange: p });
    return l.jsx(lu, {
      present: a || h,
      children: l.jsx(ly, {
        open: h,
        ...m,
        ref: s,
        onClose: () => v(!1),
        onPause: wn(r.onPause),
        onResume: wn(r.onResume),
        onSwipeStart: gt(r.onSwipeStart, (x) => {
          x.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: gt(r.onSwipeMove, (x) => {
          const { x: b, y: j } = x.detail.delta;
          x.currentTarget.setAttribute("data-swipe", "move"),
            x.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${b}px`,
            ),
            x.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${j}px`,
            );
        }),
        onSwipeCancel: gt(r.onSwipeCancel, (x) => {
          x.currentTarget.setAttribute("data-swipe", "cancel"),
            x.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            x.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            x.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            x.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: gt(r.onSwipeEnd, (x) => {
          const { x: b, y: j } = x.detail.delta;
          x.currentTarget.setAttribute("data-swipe", "end"),
            x.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            x.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            x.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${b}px`,
            ),
            x.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${j}px`,
            ),
            v(!1);
        }),
      }),
    });
  });
fp.displayName = Wa;
var [ay, oy] = op(Wa, { onClose() {} }),
  ly = N.forwardRef((r, s) => {
    const {
        __scopeToast: a,
        type: u = "foreground",
        duration: d,
        open: p,
        onClose: m,
        onEscapeKeyDown: h,
        onPause: v,
        onResume: x,
        onSwipeStart: b,
        onSwipeMove: j,
        onSwipeCancel: y,
        onSwipeEnd: _,
        ...L
      } = r,
      R = Va(Wa, a),
      [C, D] = N.useState(null),
      I = er(s, (te) => D(te)),
      z = N.useRef(null),
      H = N.useRef(null),
      q = d || R.duration,
      oe = N.useRef(0),
      ee = N.useRef(q),
      ne = N.useRef(0),
      { onToastAdd: ve, onToastRemove: _e } = R,
      Pe = wn(() => {
        var xe;
        (C == null ? void 0 : C.contains(document.activeElement)) &&
          ((xe = R.viewport) == null || xe.focus()),
          m();
      }),
      le = N.useCallback(
        (te) => {
          !te ||
            te === 1 / 0 ||
            (window.clearTimeout(ne.current),
            (oe.current = new Date().getTime()),
            (ne.current = window.setTimeout(Pe, te)));
        },
        [Pe],
      );
    N.useEffect(() => {
      const te = R.viewport;
      if (te) {
        const xe = () => {
            le(ee.current), x == null || x();
          },
          me = () => {
            const ge = new Date().getTime() - oe.current;
            (ee.current = ee.current - ge),
              window.clearTimeout(ne.current),
              v == null || v();
          };
        return (
          te.addEventListener(Gl, me),
          te.addEventListener(ql, xe),
          () => {
            te.removeEventListener(Gl, me), te.removeEventListener(ql, xe);
          }
        );
      }
    }, [R.viewport, q, v, x, le]),
      N.useEffect(() => {
        p && !R.isClosePausedRef.current && le(q);
      }, [p, q, R.isClosePausedRef, le]),
      N.useEffect(() => (ve(), () => _e()), [ve, _e]);
    const Te = N.useMemo(() => (C ? xp(C) : null), [C]);
    return R.viewport
      ? l.jsxs(l.Fragment, {
          children: [
            Te &&
              l.jsx(uy, {
                __scopeToast: a,
                role: "status",
                "aria-live": u === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Te,
              }),
            l.jsx(ay, {
              scope: a,
              onClose: Pe,
              children: Ha.createPortal(
                l.jsx(du.ItemSlot, {
                  scope: a,
                  children: l.jsx(Vg, {
                    asChild: !0,
                    onEscapeKeyDown: gt(h, () => {
                      R.isFocusedToastEscapeKeyDownRef.current || Pe(),
                        (R.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: l.jsx(Rt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": p ? "open" : "closed",
                      "data-swipe-direction": R.swipeDirection,
                      ...L,
                      ref: I,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...r.style,
                      },
                      onKeyDown: gt(r.onKeyDown, (te) => {
                        te.key === "Escape" &&
                          (h == null || h(te.nativeEvent),
                          te.nativeEvent.defaultPrevented ||
                            ((R.isFocusedToastEscapeKeyDownRef.current = !0),
                            Pe()));
                      }),
                      onPointerDown: gt(r.onPointerDown, (te) => {
                        te.button === 0 &&
                          (z.current = { x: te.clientX, y: te.clientY });
                      }),
                      onPointerMove: gt(r.onPointerMove, (te) => {
                        if (!z.current) return;
                        const xe = te.clientX - z.current.x,
                          me = te.clientY - z.current.y,
                          ge = !!H.current,
                          O = ["left", "right"].includes(R.swipeDirection),
                          Q = ["left", "up"].includes(R.swipeDirection)
                            ? Math.min
                            : Math.max,
                          W = O ? Q(0, xe) : 0,
                          S = O ? 0 : Q(0, me),
                          M = te.pointerType === "touch" ? 10 : 2,
                          G = { x: W, y: S },
                          ae = { originalEvent: te, delta: G };
                        ge
                          ? ((H.current = G), Aa(ry, j, ae, { discrete: !1 }))
                          : vf(G, R.swipeDirection, M)
                            ? ((H.current = G),
                              Aa(ny, b, ae, { discrete: !1 }),
                              te.target.setPointerCapture(te.pointerId))
                            : (Math.abs(xe) > M || Math.abs(me) > M) &&
                              (z.current = null);
                      }),
                      onPointerUp: gt(r.onPointerUp, (te) => {
                        const xe = H.current,
                          me = te.target;
                        if (
                          (me.hasPointerCapture(te.pointerId) &&
                            me.releasePointerCapture(te.pointerId),
                          (H.current = null),
                          (z.current = null),
                          xe)
                        ) {
                          const ge = te.currentTarget,
                            O = { originalEvent: te, delta: xe };
                          vf(xe, R.swipeDirection, R.swipeThreshold)
                            ? Aa(iy, _, O, { discrete: !0 })
                            : Aa(sy, y, O, { discrete: !0 }),
                            ge.addEventListener(
                              "click",
                              (Q) => Q.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                R.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  uy = (r) => {
    const { __scopeToast: s, children: a, ...u } = r,
      d = Va(Wa, s),
      [p, m] = N.useState(!1),
      [h, v] = N.useState(!1);
    return (
      fy(() => m(!0)),
      N.useEffect(() => {
        const x = window.setTimeout(() => v(!0), 1e3);
        return () => window.clearTimeout(x);
      }, []),
      h
        ? null
        : l.jsx(ip, {
            asChild: !0,
            children: l.jsx(uu, {
              ...u,
              children:
                p && l.jsxs(l.Fragment, { children: [d.label, " ", a] }),
            }),
          })
    );
  },
  cy = "ToastTitle",
  pp = N.forwardRef((r, s) => {
    const { __scopeToast: a, ...u } = r;
    return l.jsx(Rt.div, { ...u, ref: s });
  });
pp.displayName = cy;
var dy = "ToastDescription",
  mp = N.forwardRef((r, s) => {
    const { __scopeToast: a, ...u } = r;
    return l.jsx(Rt.div, { ...u, ref: s });
  });
mp.displayName = dy;
var hp = "ToastAction",
  gp = N.forwardRef((r, s) => {
    const { altText: a, ...u } = r;
    return a.trim()
      ? l.jsx(vp, {
          altText: a,
          asChild: !0,
          children: l.jsx(fu, { ...u, ref: s }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${hp}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
gp.displayName = hp;
var yp = "ToastClose",
  fu = N.forwardRef((r, s) => {
    const { __scopeToast: a, ...u } = r,
      d = oy(yp, a);
    return l.jsx(vp, {
      asChild: !0,
      children: l.jsx(Rt.button, {
        type: "button",
        ...u,
        ref: s,
        onClick: gt(r.onClick, d.onClose),
      }),
    });
  });
fu.displayName = yp;
var vp = N.forwardRef((r, s) => {
  const { __scopeToast: a, altText: u, ...d } = r;
  return l.jsx(Rt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": u || void 0,
    ...d,
    ref: s,
  });
});
function xp(r) {
  const s = [];
  return (
    Array.from(r.childNodes).forEach((u) => {
      if (
        (u.nodeType === u.TEXT_NODE && u.textContent && s.push(u.textContent),
        py(u))
      ) {
        const d = u.ariaHidden || u.hidden || u.style.display === "none",
          p = u.dataset.radixToastAnnounceExclude === "";
        if (!d)
          if (p) {
            const m = u.dataset.radixToastAnnounceAlt;
            m && s.push(m);
          } else s.push(...xp(u));
      }
    }),
    s
  );
}
function Aa(r, s, a, { discrete: u }) {
  const d = a.originalEvent.currentTarget,
    p = new CustomEvent(r, { bubbles: !0, cancelable: !0, detail: a });
  s && d.addEventListener(r, s, { once: !0 }),
    u ? ep(d, p) : d.dispatchEvent(p);
}
var vf = (r, s, a = 0) => {
  const u = Math.abs(r.x),
    d = Math.abs(r.y),
    p = u > d;
  return s === "left" || s === "right" ? p && u > a : !p && d > a;
};
function fy(r = () => {}) {
  const s = wn(r);
  ci(() => {
    let a = 0,
      u = 0;
    return (
      (a = window.requestAnimationFrame(
        () => (u = window.requestAnimationFrame(s)),
      )),
      () => {
        window.cancelAnimationFrame(a), window.cancelAnimationFrame(u);
      }
    );
  }, [s]);
}
function py(r) {
  return r.nodeType === r.ELEMENT_NODE;
}
function my(r) {
  const s = [],
    a = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (u) => {
        const d = u.tagName === "INPUT" && u.type === "hidden";
        return u.disabled || u.hidden || d
          ? NodeFilter.FILTER_SKIP
          : u.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode(); ) s.push(a.currentNode);
  return s;
}
function $l(r) {
  const s = document.activeElement;
  return r.some((a) =>
    a === s ? !0 : (a.focus(), document.activeElement !== s),
  );
}
var hy = lp,
  wp = cp,
  Np = fp,
  Sp = pp,
  jp = mp,
  kp = gp,
  bp = fu;
function Cp(r) {
  var s,
    a,
    u = "";
  if (typeof r == "string" || typeof r == "number") u += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var d = r.length;
      for (s = 0; s < d; s++)
        r[s] && (a = Cp(r[s])) && (u && (u += " "), (u += a));
    } else for (a in r) r[a] && (u && (u += " "), (u += a));
  return u;
}
function Ep() {
  for (var r, s, a = 0, u = "", d = arguments.length; a < d; a++)
    (r = arguments[a]) && (s = Cp(r)) && (u && (u += " "), (u += s));
  return u;
}
const xf = (r) => (typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r),
  wf = Ep,
  Qa = (r, s) => (a) => {
    var u;
    if ((s == null ? void 0 : s.variants) == null)
      return wf(
        r,
        a == null ? void 0 : a.class,
        a == null ? void 0 : a.className,
      );
    const { variants: d, defaultVariants: p } = s,
      m = Object.keys(d).map((x) => {
        const b = a == null ? void 0 : a[x],
          j = p == null ? void 0 : p[x];
        if (b === null) return null;
        const y = xf(b) || xf(j);
        return d[x][y];
      }),
      h =
        a &&
        Object.entries(a).reduce((x, b) => {
          let [j, y] = b;
          return y === void 0 || (x[j] = y), x;
        }, {}),
      v =
        s == null || (u = s.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((x, b) => {
              let { class: j, className: y, ..._ } = b;
              return Object.entries(_).every((L) => {
                let [R, C] = L;
                return Array.isArray(C)
                  ? C.includes({ ...p, ...h }[R])
                  : { ...p, ...h }[R] === C;
              })
                ? [...x, j, y]
                : x;
            }, []);
    return wf(
      r,
      m,
      v,
      a == null ? void 0 : a.class,
      a == null ? void 0 : a.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Pp = (...r) =>
    r
      .filter((s, a, u) => !!s && s.trim() !== "" && u.indexOf(s) === a)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var yy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vy = N.forwardRef(
  (
    {
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: u,
      className: d = "",
      children: p,
      iconNode: m,
      ...h
    },
    v,
  ) =>
    N.createElement(
      "svg",
      {
        ref: v,
        ...yy,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: u ? (Number(a) * 24) / Number(s) : a,
        className: Pp("lucide", d),
        ...h,
      },
      [
        ...m.map(([x, b]) => N.createElement(x, b)),
        ...(Array.isArray(p) ? p : [p]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Re = (r, s) => {
  const a = N.forwardRef(({ className: u, ...d }, p) =>
    N.createElement(vy, {
      ref: p,
      iconNode: s,
      className: Pp(`lucide-${gy(r)}`, u),
      ...d,
    }),
  );
  return (a.displayName = `${r}`), a;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xy = Re("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const li = Re("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wy = Re("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ny = Re("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = Re("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fa = Re("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = Re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tt = Re("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yi = Re("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tp = Re("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xl = Re("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ua = Re("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ky = Re("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pu = Re("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mu = Re("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = Re("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zl = Re("Microscope", [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tr = Re("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = Re("Radiation", [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  [
    "path",
    {
      d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",
      key: "wy49g3",
    },
  ],
  [
    "path",
    {
      d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",
      key: "vklnvr",
    },
  ],
  [
    "path",
    {
      d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",
      key: "wkdf1o",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hu = Re("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mp = Re("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gu = Re("Stethoscope", [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  [
    "path",
    {
      d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      key: "rb5t3r",
    },
  ],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nf = Re("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _p = Re("TestTube", [
  [
    "path",
    {
      d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",
      key: "125lnx",
    },
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cy = Re("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sf = Re("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Op = Re("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  yu = "-",
  Ey = (r) => {
    const s = Ty(r),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: u } = r;
    return {
      getClassGroupId: (m) => {
        const h = m.split(yu);
        return h[0] === "" && h.length !== 1 && h.shift(), Ap(h, s) || Py(m);
      },
      getConflictingClassGroupIds: (m, h) => {
        const v = a[m] || [];
        return h && u[m] ? [...v, ...u[m]] : v;
      },
    };
  },
  Ap = (r, s) => {
    var m;
    if (r.length === 0) return s.classGroupId;
    const a = r[0],
      u = s.nextPart.get(a),
      d = u ? Ap(r.slice(1), u) : void 0;
    if (d) return d;
    if (s.validators.length === 0) return;
    const p = r.join(yu);
    return (m = s.validators.find(({ validator: h }) => h(p))) == null
      ? void 0
      : m.classGroupId;
  },
  jf = /^\[(.+)\]$/,
  Py = (r) => {
    if (jf.test(r)) {
      const s = jf.exec(r)[1],
        a = s == null ? void 0 : s.substring(0, s.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  Ty = (r) => {
    const { theme: s, prefix: a } = r,
      u = { nextPart: new Map(), validators: [] };
    return (
      My(Object.entries(r.classGroups), a).forEach(([p, m]) => {
        Jl(m, u, p, s);
      }),
      u
    );
  },
  Jl = (r, s, a, u) => {
    r.forEach((d) => {
      if (typeof d == "string") {
        const p = d === "" ? s : kf(s, d);
        p.classGroupId = a;
        return;
      }
      if (typeof d == "function") {
        if (Ry(d)) {
          Jl(d(u), s, a, u);
          return;
        }
        s.validators.push({ validator: d, classGroupId: a });
        return;
      }
      Object.entries(d).forEach(([p, m]) => {
        Jl(m, kf(s, p), a, u);
      });
    });
  },
  kf = (r, s) => {
    let a = r;
    return (
      s.split(yu).forEach((u) => {
        a.nextPart.has(u) ||
          a.nextPart.set(u, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(u));
      }),
      a
    );
  },
  Ry = (r) => r.isThemeGetter,
  My = (r, s) =>
    s
      ? r.map(([a, u]) => {
          const d = u.map((p) =>
            typeof p == "string"
              ? s + p
              : typeof p == "object"
                ? Object.fromEntries(
                    Object.entries(p).map(([m, h]) => [s + m, h]),
                  )
                : p,
          );
          return [a, d];
        })
      : r,
  _y = (r) => {
    if (r < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      a = new Map(),
      u = new Map();
    const d = (p, m) => {
      a.set(p, m), s++, s > r && ((s = 0), (u = a), (a = new Map()));
    };
    return {
      get(p) {
        let m = a.get(p);
        if (m !== void 0) return m;
        if ((m = u.get(p)) !== void 0) return d(p, m), m;
      },
      set(p, m) {
        a.has(p) ? a.set(p, m) : d(p, m);
      },
    };
  },
  Lp = "!",
  Oy = (r) => {
    const { separator: s, experimentalParseClassName: a } = r,
      u = s.length === 1,
      d = s[0],
      p = s.length,
      m = (h) => {
        const v = [];
        let x = 0,
          b = 0,
          j;
        for (let C = 0; C < h.length; C++) {
          let D = h[C];
          if (x === 0) {
            if (D === d && (u || h.slice(C, C + p) === s)) {
              v.push(h.slice(b, C)), (b = C + p);
              continue;
            }
            if (D === "/") {
              j = C;
              continue;
            }
          }
          D === "[" ? x++ : D === "]" && x--;
        }
        const y = v.length === 0 ? h : h.substring(b),
          _ = y.startsWith(Lp),
          L = _ ? y.substring(1) : y,
          R = j && j > b ? j - b : void 0;
        return {
          modifiers: v,
          hasImportantModifier: _,
          baseClassName: L,
          maybePostfixModifierPosition: R,
        };
      };
    return a ? (h) => a({ className: h, parseClassName: m }) : m;
  },
  Ay = (r) => {
    if (r.length <= 1) return r;
    const s = [];
    let a = [];
    return (
      r.forEach((u) => {
        u[0] === "[" ? (s.push(...a.sort(), u), (a = [])) : a.push(u);
      }),
      s.push(...a.sort()),
      s
    );
  },
  Ly = (r) => ({ cache: _y(r.cacheSize), parseClassName: Oy(r), ...Ey(r) }),
  Dy = /\s+/,
  Iy = (r, s) => {
    const {
        parseClassName: a,
        getClassGroupId: u,
        getConflictingClassGroupIds: d,
      } = s,
      p = [],
      m = r.trim().split(Dy);
    let h = "";
    for (let v = m.length - 1; v >= 0; v -= 1) {
      const x = m[v],
        {
          modifiers: b,
          hasImportantModifier: j,
          baseClassName: y,
          maybePostfixModifierPosition: _,
        } = a(x);
      let L = !!_,
        R = u(L ? y.substring(0, _) : y);
      if (!R) {
        if (!L) {
          h = x + (h.length > 0 ? " " + h : h);
          continue;
        }
        if (((R = u(y)), !R)) {
          h = x + (h.length > 0 ? " " + h : h);
          continue;
        }
        L = !1;
      }
      const C = Ay(b).join(":"),
        D = j ? C + Lp : C,
        I = D + R;
      if (p.includes(I)) continue;
      p.push(I);
      const z = d(R, L);
      for (let H = 0; H < z.length; ++H) {
        const q = z[H];
        p.push(D + q);
      }
      h = x + (h.length > 0 ? " " + h : h);
    }
    return h;
  };
function zy() {
  let r = 0,
    s,
    a,
    u = "";
  for (; r < arguments.length; )
    (s = arguments[r++]) && (a = Dp(s)) && (u && (u += " "), (u += a));
  return u;
}
const Dp = (r) => {
  if (typeof r == "string") return r;
  let s,
    a = "";
  for (let u = 0; u < r.length; u++)
    r[u] && (s = Dp(r[u])) && (a && (a += " "), (a += s));
  return a;
};
function Fy(r, ...s) {
  let a,
    u,
    d,
    p = m;
  function m(v) {
    const x = s.reduce((b, j) => j(b), r());
    return (a = Ly(x)), (u = a.cache.get), (d = a.cache.set), (p = h), h(v);
  }
  function h(v) {
    const x = u(v);
    if (x) return x;
    const b = Iy(v, a);
    return d(v, b), b;
  }
  return function () {
    return p(zy.apply(null, arguments));
  };
}
const Le = (r) => {
    const s = (a) => a[r] || [];
    return (s.isThemeGetter = !0), s;
  },
  Ip = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Uy = /^\d+\/\d+$/,
  By = new Set(["px", "full", "screen"]),
  $y = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Hy =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Vy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Wy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Qy =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  vn = (r) => ns(r) || By.has(r) || Uy.test(r),
  $n = (r) => fs(r, "length", ev),
  ns = (r) => !!r && !Number.isNaN(Number(r)),
  Hl = (r) => fs(r, "number", ns),
  si = (r) => !!r && Number.isInteger(Number(r)),
  Ky = (r) => r.endsWith("%") && ns(r.slice(0, -1)),
  de = (r) => Ip.test(r),
  Hn = (r) => $y.test(r),
  Gy = new Set(["length", "size", "percentage"]),
  qy = (r) => fs(r, Gy, zp),
  Yy = (r) => fs(r, "position", zp),
  Xy = new Set(["image", "url"]),
  Zy = (r) => fs(r, Xy, nv),
  Jy = (r) => fs(r, "", tv),
  ii = () => !0,
  fs = (r, s, a) => {
    const u = Ip.exec(r);
    return u
      ? u[1]
        ? typeof s == "string"
          ? u[1] === s
          : s.has(u[1])
        : a(u[2])
      : !1;
  },
  ev = (r) => Hy.test(r) && !Vy.test(r),
  zp = () => !1,
  tv = (r) => Wy.test(r),
  nv = (r) => Qy.test(r),
  rv = () => {
    const r = Le("colors"),
      s = Le("spacing"),
      a = Le("blur"),
      u = Le("brightness"),
      d = Le("borderColor"),
      p = Le("borderRadius"),
      m = Le("borderSpacing"),
      h = Le("borderWidth"),
      v = Le("contrast"),
      x = Le("grayscale"),
      b = Le("hueRotate"),
      j = Le("invert"),
      y = Le("gap"),
      _ = Le("gradientColorStops"),
      L = Le("gradientColorStopPositions"),
      R = Le("inset"),
      C = Le("margin"),
      D = Le("opacity"),
      I = Le("padding"),
      z = Le("saturate"),
      H = Le("scale"),
      q = Le("sepia"),
      oe = Le("skew"),
      ee = Le("space"),
      ne = Le("translate"),
      ve = () => ["auto", "contain", "none"],
      _e = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Pe = () => ["auto", de, s],
      le = () => [de, s],
      Te = () => ["", vn, $n],
      te = () => ["auto", ns, de],
      xe = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      me = () => ["solid", "dashed", "dotted", "double", "none"],
      ge = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      O = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      Q = () => ["", "0", de],
      W = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      S = () => [ns, de];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ii],
        spacing: [vn, $n],
        blur: ["none", "", Hn, de],
        brightness: S(),
        borderColor: [r],
        borderRadius: ["none", "", "full", Hn, de],
        borderSpacing: le(),
        borderWidth: Te(),
        contrast: S(),
        grayscale: Q(),
        hueRotate: S(),
        invert: Q(),
        gap: le(),
        gradientColorStops: [r],
        gradientColorStopPositions: [Ky, $n],
        inset: Pe(),
        margin: Pe(),
        opacity: S(),
        padding: le(),
        saturate: S(),
        scale: S(),
        sepia: Q(),
        skew: S(),
        space: le(),
        translate: le(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", de] }],
        container: ["container"],
        columns: [{ columns: [Hn] }],
        "break-after": [{ "break-after": W() }],
        "break-before": [{ "break-before": W() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...xe(), de] }],
        overflow: [{ overflow: _e() }],
        "overflow-x": [{ "overflow-x": _e() }],
        "overflow-y": [{ "overflow-y": _e() }],
        overscroll: [{ overscroll: ve() }],
        "overscroll-x": [{ "overscroll-x": ve() }],
        "overscroll-y": [{ "overscroll-y": ve() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [R] }],
        "inset-x": [{ "inset-x": [R] }],
        "inset-y": [{ "inset-y": [R] }],
        start: [{ start: [R] }],
        end: [{ end: [R] }],
        top: [{ top: [R] }],
        right: [{ right: [R] }],
        bottom: [{ bottom: [R] }],
        left: [{ left: [R] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", si, de] }],
        basis: [{ basis: Pe() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", de] }],
        grow: [{ grow: Q() }],
        shrink: [{ shrink: Q() }],
        order: [{ order: ["first", "last", "none", si, de] }],
        "grid-cols": [{ "grid-cols": [ii] }],
        "col-start-end": [{ col: ["auto", { span: ["full", si, de] }, de] }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": [ii] }],
        "row-start-end": [{ row: ["auto", { span: [si, de] }, de] }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", de] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", de] }],
        gap: [{ gap: [y] }],
        "gap-x": [{ "gap-x": [y] }],
        "gap-y": [{ "gap-y": [y] }],
        "justify-content": [{ justify: ["normal", ...O()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...O(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...O(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [I] }],
        px: [{ px: [I] }],
        py: [{ py: [I] }],
        ps: [{ ps: [I] }],
        pe: [{ pe: [I] }],
        pt: [{ pt: [I] }],
        pr: [{ pr: [I] }],
        pb: [{ pb: [I] }],
        pl: [{ pl: [I] }],
        m: [{ m: [C] }],
        mx: [{ mx: [C] }],
        my: [{ my: [C] }],
        ms: [{ ms: [C] }],
        me: [{ me: [C] }],
        mt: [{ mt: [C] }],
        mr: [{ mr: [C] }],
        mb: [{ mb: [C] }],
        ml: [{ ml: [C] }],
        "space-x": [{ "space-x": [ee] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [ee] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, s] }],
        "min-w": [{ "min-w": [de, s, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              de,
              s,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Hn] },
              Hn,
            ],
          },
        ],
        h: [{ h: [de, s, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [de, s, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [de, s, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [de, s, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Hn, $n] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Hl,
            ],
          },
        ],
        "font-family": [{ font: [ii] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              de,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ns, Hl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              vn,
              de,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", de] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", de] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [r] }],
        "placeholder-opacity": [{ "placeholder-opacity": [D] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [r] }],
        "text-opacity": [{ "text-opacity": [D] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...me(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", vn, $n] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", vn, de] }],
        "text-decoration-color": [{ decoration: [r] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: le() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              de,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", de] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [D] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...xe(), Yy] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", qy] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Zy,
            ],
          },
        ],
        "bg-color": [{ bg: [r] }],
        "gradient-from-pos": [{ from: [L] }],
        "gradient-via-pos": [{ via: [L] }],
        "gradient-to-pos": [{ to: [L] }],
        "gradient-from": [{ from: [_] }],
        "gradient-via": [{ via: [_] }],
        "gradient-to": [{ to: [_] }],
        rounded: [{ rounded: [p] }],
        "rounded-s": [{ "rounded-s": [p] }],
        "rounded-e": [{ "rounded-e": [p] }],
        "rounded-t": [{ "rounded-t": [p] }],
        "rounded-r": [{ "rounded-r": [p] }],
        "rounded-b": [{ "rounded-b": [p] }],
        "rounded-l": [{ "rounded-l": [p] }],
        "rounded-ss": [{ "rounded-ss": [p] }],
        "rounded-se": [{ "rounded-se": [p] }],
        "rounded-ee": [{ "rounded-ee": [p] }],
        "rounded-es": [{ "rounded-es": [p] }],
        "rounded-tl": [{ "rounded-tl": [p] }],
        "rounded-tr": [{ "rounded-tr": [p] }],
        "rounded-br": [{ "rounded-br": [p] }],
        "rounded-bl": [{ "rounded-bl": [p] }],
        "border-w": [{ border: [h] }],
        "border-w-x": [{ "border-x": [h] }],
        "border-w-y": [{ "border-y": [h] }],
        "border-w-s": [{ "border-s": [h] }],
        "border-w-e": [{ "border-e": [h] }],
        "border-w-t": [{ "border-t": [h] }],
        "border-w-r": [{ "border-r": [h] }],
        "border-w-b": [{ "border-b": [h] }],
        "border-w-l": [{ "border-l": [h] }],
        "border-opacity": [{ "border-opacity": [D] }],
        "border-style": [{ border: [...me(), "hidden"] }],
        "divide-x": [{ "divide-x": [h] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [h] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [D] }],
        "divide-style": [{ divide: me() }],
        "border-color": [{ border: [d] }],
        "border-color-x": [{ "border-x": [d] }],
        "border-color-y": [{ "border-y": [d] }],
        "border-color-t": [{ "border-t": [d] }],
        "border-color-r": [{ "border-r": [d] }],
        "border-color-b": [{ "border-b": [d] }],
        "border-color-l": [{ "border-l": [d] }],
        "divide-color": [{ divide: [d] }],
        "outline-style": [{ outline: ["", ...me()] }],
        "outline-offset": [{ "outline-offset": [vn, de] }],
        "outline-w": [{ outline: [vn, $n] }],
        "outline-color": [{ outline: [r] }],
        "ring-w": [{ ring: Te() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [r] }],
        "ring-opacity": [{ "ring-opacity": [D] }],
        "ring-offset-w": [{ "ring-offset": [vn, $n] }],
        "ring-offset-color": [{ "ring-offset": [r] }],
        shadow: [{ shadow: ["", "inner", "none", Hn, Jy] }],
        "shadow-color": [{ shadow: [ii] }],
        opacity: [{ opacity: [D] }],
        "mix-blend": [
          { "mix-blend": [...ge(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": ge() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [a] }],
        brightness: [{ brightness: [u] }],
        contrast: [{ contrast: [v] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Hn, de] }],
        grayscale: [{ grayscale: [x] }],
        "hue-rotate": [{ "hue-rotate": [b] }],
        invert: [{ invert: [j] }],
        saturate: [{ saturate: [z] }],
        sepia: [{ sepia: [q] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [a] }],
        "backdrop-brightness": [{ "backdrop-brightness": [u] }],
        "backdrop-contrast": [{ "backdrop-contrast": [v] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [x] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b] }],
        "backdrop-invert": [{ "backdrop-invert": [j] }],
        "backdrop-opacity": [{ "backdrop-opacity": [D] }],
        "backdrop-saturate": [{ "backdrop-saturate": [z] }],
        "backdrop-sepia": [{ "backdrop-sepia": [q] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [m] }],
        "border-spacing-x": [{ "border-spacing-x": [m] }],
        "border-spacing-y": [{ "border-spacing-y": [m] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              de,
            ],
          },
        ],
        duration: [{ duration: S() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", de] }],
        delay: [{ delay: S() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", de] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [H] }],
        "scale-x": [{ "scale-x": [H] }],
        "scale-y": [{ "scale-y": [H] }],
        rotate: [{ rotate: [si, de] }],
        "translate-x": [{ "translate-x": [ne] }],
        "translate-y": [{ "translate-y": [ne] }],
        "skew-x": [{ "skew-x": [oe] }],
        "skew-y": [{ "skew-y": [oe] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              de,
            ],
          },
        ],
        accent: [{ accent: ["auto", r] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              de,
            ],
          },
        ],
        "caret-color": [{ caret: [r] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": le() }],
        "scroll-mx": [{ "scroll-mx": le() }],
        "scroll-my": [{ "scroll-my": le() }],
        "scroll-ms": [{ "scroll-ms": le() }],
        "scroll-me": [{ "scroll-me": le() }],
        "scroll-mt": [{ "scroll-mt": le() }],
        "scroll-mr": [{ "scroll-mr": le() }],
        "scroll-mb": [{ "scroll-mb": le() }],
        "scroll-ml": [{ "scroll-ml": le() }],
        "scroll-p": [{ "scroll-p": le() }],
        "scroll-px": [{ "scroll-px": le() }],
        "scroll-py": [{ "scroll-py": le() }],
        "scroll-ps": [{ "scroll-ps": le() }],
        "scroll-pe": [{ "scroll-pe": le() }],
        "scroll-pt": [{ "scroll-pt": le() }],
        "scroll-pr": [{ "scroll-pr": le() }],
        "scroll-pb": [{ "scroll-pb": le() }],
        "scroll-pl": [{ "scroll-pl": le() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", de] },
        ],
        fill: [{ fill: [r, "none"] }],
        "stroke-w": [{ stroke: [vn, $n, Hl] }],
        stroke: [{ stroke: [r, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  sv = Fy(rv);
function Ye(...r) {
  return sv(Ep(r));
}
const iv = hy,
  Fp = N.forwardRef(({ className: r, ...s }, a) =>
    l.jsx(wp, {
      ref: a,
      className: Ye(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        r,
      ),
      ...s,
    }),
  );
Fp.displayName = wp.displayName;
const av = Qa(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Up = N.forwardRef(({ className: r, variant: s, ...a }, u) =>
    l.jsx(Np, { ref: u, className: Ye(av({ variant: s }), r), ...a }),
  );
Up.displayName = Np.displayName;
const ov = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx(kp, {
    ref: a,
    className: Ye(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      r,
    ),
    ...s,
  }),
);
ov.displayName = kp.displayName;
const Bp = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx(bp, {
    ref: a,
    className: Ye(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      r,
    ),
    "toast-close": "",
    ...s,
    children: l.jsx(Op, { className: "h-4 w-4" }),
  }),
);
Bp.displayName = bp.displayName;
const $p = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx(Sp, { ref: a, className: Ye("text-sm font-semibold", r), ...s }),
);
$p.displayName = Sp.displayName;
const Hp = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx(jp, { ref: a, className: Ye("text-sm opacity-90", r), ...s }),
);
Hp.displayName = jp.displayName;
function lv() {
  const { toasts: r } = Pg();
  return l.jsxs(iv, {
    children: [
      r.map(function ({ id: s, title: a, description: u, action: d, ...p }) {
        return l.jsxs(
          Up,
          {
            ...p,
            children: [
              l.jsxs("div", {
                className: "grid gap-1",
                children: [
                  a && l.jsx($p, { children: a }),
                  u && l.jsx(Hp, { children: u }),
                ],
              }),
              d,
              l.jsx(Bp, {}),
            ],
          },
          s,
        );
      }),
      l.jsx(Fp, {}),
    ],
  });
}
var bf = ["light", "dark"],
  uv = "(prefers-color-scheme: dark)",
  cv = N.createContext(void 0),
  dv = { setTheme: (r) => {}, themes: [] },
  fv = () => {
    var r;
    return (r = N.useContext(cv)) != null ? r : dv;
  };
N.memo(
  ({
    forcedTheme: r,
    storageKey: s,
    attribute: a,
    enableSystem: u,
    enableColorScheme: d,
    defaultTheme: p,
    value: m,
    attrs: h,
    nonce: v,
  }) => {
    let x = p === "system",
      b =
        a === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${h.map((L) => `'${L}'`).join(",")})`};`
          : `var d=document.documentElement,n='${a}',s='setAttribute';`,
      j = d
        ? bf.includes(p) && p
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${p}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      y = (L, R = !1, C = !0) => {
        let D = m ? m[L] : L,
          I = R ? L + "|| ''" : `'${D}'`,
          z = "";
        return (
          d &&
            C &&
            !R &&
            bf.includes(L) &&
            (z += `d.style.colorScheme = '${L}';`),
          a === "class"
            ? R || D
              ? (z += `c.add(${I})`)
              : (z += "null")
            : D && (z += `d[s](n,${I})`),
          z
        );
      },
      _ = r
        ? `!function(){${b}${y(r)}}()`
        : u
          ? `!function(){try{${b}var e=localStorage.getItem('${s}');if('system'===e||(!e&&${x})){var t='${uv}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${m ? `var x=${JSON.stringify(m)};` : ""}${y(m ? "x[e]" : "e", !0)}}${x ? "" : "else{" + y(p, !1, !1) + "}"}${j}}catch(e){}}()`
          : `!function(){try{${b}var e=localStorage.getItem('${s}');if(e){${m ? `var x=${JSON.stringify(m)};` : ""}${y(m ? "x[e]" : "e", !0)}}else{${y(p, !1, !1)};}${j}}catch(t){}}();`;
    return N.createElement("script", {
      nonce: v,
      dangerouslySetInnerHTML: { __html: _ },
    });
  },
);
var pv = (r) => {
    switch (r) {
      case "success":
        return gv;
      case "info":
        return vv;
      case "warning":
        return yv;
      case "error":
        return xv;
      default:
        return null;
    }
  },
  mv = Array(12).fill(0),
  hv = ({ visible: r }) =>
    V.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": r },
      V.createElement(
        "div",
        { className: "sonner-spinner" },
        mv.map((s, a) =>
          V.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${a}`,
          }),
        ),
      ),
    ),
  gv = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  yv = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  vv = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  xv = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  wv = () => {
    let [r, s] = V.useState(document.hidden);
    return (
      V.useEffect(() => {
        let a = () => {
          s(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", a),
          () => window.removeEventListener("visibilitychange", a)
        );
      }, []),
      r
    );
  },
  eu = 1,
  Nv = class {
    constructor() {
      (this.subscribe = (r) => (
        this.subscribers.push(r),
        () => {
          let s = this.subscribers.indexOf(r);
          this.subscribers.splice(s, 1);
        }
      )),
        (this.publish = (r) => {
          this.subscribers.forEach((s) => s(r));
        }),
        (this.addToast = (r) => {
          this.publish(r), (this.toasts = [...this.toasts, r]);
        }),
        (this.create = (r) => {
          var s;
          let { message: a, ...u } = r,
            d =
              typeof (r == null ? void 0 : r.id) == "number" ||
              ((s = r.id) == null ? void 0 : s.length) > 0
                ? r.id
                : eu++,
            p = this.toasts.find((h) => h.id === d),
            m = r.dismissible === void 0 ? !0 : r.dismissible;
          return (
            p
              ? (this.toasts = this.toasts.map((h) =>
                  h.id === d
                    ? (this.publish({ ...h, ...r, id: d, title: a }),
                      { ...h, ...r, id: d, dismissible: m, title: a })
                    : h,
                ))
              : this.addToast({ title: a, ...u, dismissible: m, id: d }),
            d
          );
        }),
        (this.dismiss = (r) => (
          r ||
            this.toasts.forEach((s) => {
              this.subscribers.forEach((a) => a({ id: s.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((s) => s({ id: r, dismiss: !0 })),
          r
        )),
        (this.message = (r, s) => this.create({ ...s, message: r })),
        (this.error = (r, s) =>
          this.create({ ...s, message: r, type: "error" })),
        (this.success = (r, s) =>
          this.create({ ...s, type: "success", message: r })),
        (this.info = (r, s) => this.create({ ...s, type: "info", message: r })),
        (this.warning = (r, s) =>
          this.create({ ...s, type: "warning", message: r })),
        (this.loading = (r, s) =>
          this.create({ ...s, type: "loading", message: r })),
        (this.promise = (r, s) => {
          if (!s) return;
          let a;
          s.loading !== void 0 &&
            (a = this.create({
              ...s,
              promise: r,
              type: "loading",
              message: s.loading,
              description:
                typeof s.description != "function" ? s.description : void 0,
            }));
          let u = r instanceof Promise ? r : r(),
            d = a !== void 0;
          return (
            u
              .then(async (p) => {
                if (jv(p) && !p.ok) {
                  d = !1;
                  let m =
                      typeof s.error == "function"
                        ? await s.error(`HTTP error! status: ${p.status}`)
                        : s.error,
                    h =
                      typeof s.description == "function"
                        ? await s.description(`HTTP error! status: ${p.status}`)
                        : s.description;
                  this.create({
                    id: a,
                    type: "error",
                    message: m,
                    description: h,
                  });
                } else if (s.success !== void 0) {
                  d = !1;
                  let m =
                      typeof s.success == "function"
                        ? await s.success(p)
                        : s.success,
                    h =
                      typeof s.description == "function"
                        ? await s.description(p)
                        : s.description;
                  this.create({
                    id: a,
                    type: "success",
                    message: m,
                    description: h,
                  });
                }
              })
              .catch(async (p) => {
                if (s.error !== void 0) {
                  d = !1;
                  let m =
                      typeof s.error == "function" ? await s.error(p) : s.error,
                    h =
                      typeof s.description == "function"
                        ? await s.description(p)
                        : s.description;
                  this.create({
                    id: a,
                    type: "error",
                    message: m,
                    description: h,
                  });
                }
              })
              .finally(() => {
                var p;
                d && (this.dismiss(a), (a = void 0)),
                  (p = s.finally) == null || p.call(s);
              }),
            a
          );
        }),
        (this.custom = (r, s) => {
          let a = (s == null ? void 0 : s.id) || eu++;
          return this.create({ jsx: r(a), id: a, ...s }), a;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Pt = new Nv(),
  Sv = (r, s) => {
    let a = (s == null ? void 0 : s.id) || eu++;
    return Pt.addToast({ title: r, ...s, id: a }), a;
  },
  jv = (r) =>
    r &&
    typeof r == "object" &&
    "ok" in r &&
    typeof r.ok == "boolean" &&
    "status" in r &&
    typeof r.status == "number",
  kv = Sv,
  bv = () => Pt.toasts;
Object.assign(
  kv,
  {
    success: Pt.success,
    info: Pt.info,
    warning: Pt.warning,
    error: Pt.error,
    custom: Pt.custom,
    message: Pt.message,
    promise: Pt.promise,
    dismiss: Pt.dismiss,
    loading: Pt.loading,
  },
  { getHistory: bv },
);
function Cv(r, { insertAt: s } = {}) {
  if (typeof document > "u") return;
  let a = document.head || document.getElementsByTagName("head")[0],
    u = document.createElement("style");
  (u.type = "text/css"),
    s === "top" && a.firstChild
      ? a.insertBefore(u, a.firstChild)
      : a.appendChild(u),
    u.styleSheet
      ? (u.styleSheet.cssText = r)
      : u.appendChild(document.createTextNode(r));
}
Cv(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function La(r) {
  return r.label !== void 0;
}
var Ev = 3,
  Pv = "32px",
  Tv = 4e3,
  Rv = 356,
  Mv = 14,
  _v = 20,
  Ov = 200;
function Av(...r) {
  return r.filter(Boolean).join(" ");
}
var Lv = (r) => {
  var s, a, u, d, p, m, h, v, x, b;
  let {
      invert: j,
      toast: y,
      unstyled: _,
      interacting: L,
      setHeights: R,
      visibleToasts: C,
      heights: D,
      index: I,
      toasts: z,
      expanded: H,
      removeToast: q,
      defaultRichColors: oe,
      closeButton: ee,
      style: ne,
      cancelButtonStyle: ve,
      actionButtonStyle: _e,
      className: Pe = "",
      descriptionClassName: le = "",
      duration: Te,
      position: te,
      gap: xe,
      loadingIcon: me,
      expandByDefault: ge,
      classNames: O,
      icons: Q,
      closeButtonAriaLabel: W = "Close toast",
      pauseWhenPageIsHidden: S,
      cn: M,
    } = r,
    [G, ae] = V.useState(!1),
    [fe, re] = V.useState(!1),
    [Se, ye] = V.useState(!1),
    [je, Ke] = V.useState(!1),
    [Pr, Tr] = V.useState(0),
    [Rr, Mr] = V.useState(0),
    ms = V.useRef(null),
    ln = V.useRef(null),
    hs = I === 0,
    xi = I + 1 <= C,
    st = y.type,
    Mt = y.dismissible !== !1,
    Nn = y.className || "",
    gs = y.descriptionClassName || "",
    nr = V.useMemo(
      () => D.findIndex((ce) => ce.toastId === y.id) || 0,
      [D, y.id],
    ),
    wi = V.useMemo(() => {
      var ce;
      return (ce = y.closeButton) != null ? ce : ee;
    }, [y.closeButton, ee]),
    ys = V.useMemo(() => y.duration || Te || Tv, [y.duration, Te]),
    _r = V.useRef(0),
    Zt = V.useRef(0),
    rr = V.useRef(0),
    un = V.useRef(null),
    [Sn, sr] = te.split("-"),
    Ni = V.useMemo(
      () => D.reduce((ce, Ce, ke) => (ke >= nr ? ce : ce + Ce.height), 0),
      [D, nr],
    ),
    vs = wv(),
    Si = y.invert || j,
    xs = st === "loading";
  (Zt.current = V.useMemo(() => nr * xe + Ni, [nr, Ni])),
    V.useEffect(() => {
      ae(!0);
    }, []),
    V.useLayoutEffect(() => {
      if (!G) return;
      let ce = ln.current,
        Ce = ce.style.height;
      ce.style.height = "auto";
      let ke = ce.getBoundingClientRect().height;
      (ce.style.height = Ce),
        Mr(ke),
        R((et) =>
          et.find((tt) => tt.toastId === y.id)
            ? et.map((tt) => (tt.toastId === y.id ? { ...tt, height: ke } : tt))
            : [{ toastId: y.id, height: ke, position: y.position }, ...et],
        );
    }, [G, y.title, y.description, R, y.id]);
  let _t = V.useCallback(() => {
    re(!0),
      Tr(Zt.current),
      R((ce) => ce.filter((Ce) => Ce.toastId !== y.id)),
      setTimeout(() => {
        q(y);
      }, Ov);
  }, [y, q, R, Zt]);
  V.useEffect(() => {
    if (
      (y.promise && st === "loading") ||
      y.duration === 1 / 0 ||
      y.type === "loading"
    )
      return;
    let ce,
      Ce = ys;
    return (
      H || L || (S && vs)
        ? (() => {
            if (rr.current < _r.current) {
              let ke = new Date().getTime() - _r.current;
              Ce = Ce - ke;
            }
            rr.current = new Date().getTime();
          })()
        : Ce !== 1 / 0 &&
          ((_r.current = new Date().getTime()),
          (ce = setTimeout(() => {
            var ke;
            (ke = y.onAutoClose) == null || ke.call(y, y), _t();
          }, Ce))),
      () => clearTimeout(ce)
    );
  }, [H, L, ge, y, ys, _t, y.promise, st, S, vs]),
    V.useEffect(() => {
      let ce = ln.current;
      if (ce) {
        let Ce = ce.getBoundingClientRect().height;
        return (
          Mr(Ce),
          R((ke) => [
            { toastId: y.id, height: Ce, position: y.position },
            ...ke,
          ]),
          () => R((ke) => ke.filter((et) => et.toastId !== y.id))
        );
      }
    }, [R, y.id]),
    V.useEffect(() => {
      y.delete && _t();
    }, [_t, y.delete]);
  function ws() {
    return Q != null && Q.loading
      ? V.createElement(
          "div",
          { className: "sonner-loader", "data-visible": st === "loading" },
          Q.loading,
        )
      : me
        ? V.createElement(
            "div",
            { className: "sonner-loader", "data-visible": st === "loading" },
            me,
          )
        : V.createElement(hv, { visible: st === "loading" });
  }
  return V.createElement(
    "li",
    {
      "aria-live": y.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: ln,
      className: M(
        Pe,
        Nn,
        O == null ? void 0 : O.toast,
        (s = y == null ? void 0 : y.classNames) == null ? void 0 : s.toast,
        O == null ? void 0 : O.default,
        O == null ? void 0 : O[st],
        (a = y == null ? void 0 : y.classNames) == null ? void 0 : a[st],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (u = y.richColors) != null ? u : oe,
      "data-styled": !(y.jsx || y.unstyled || _),
      "data-mounted": G,
      "data-promise": !!y.promise,
      "data-removed": fe,
      "data-visible": xi,
      "data-y-position": Sn,
      "data-x-position": sr,
      "data-index": I,
      "data-front": hs,
      "data-swiping": Se,
      "data-dismissible": Mt,
      "data-type": st,
      "data-invert": Si,
      "data-swipe-out": je,
      "data-expanded": !!(H || (ge && G)),
      style: {
        "--index": I,
        "--toasts-before": I,
        "--z-index": z.length - I,
        "--offset": `${fe ? Pr : Zt.current}px`,
        "--initial-height": ge ? "auto" : `${Rr}px`,
        ...ne,
        ...y.style,
      },
      onPointerDown: (ce) => {
        xs ||
          !Mt ||
          ((ms.current = new Date()),
          Tr(Zt.current),
          ce.target.setPointerCapture(ce.pointerId),
          ce.target.tagName !== "BUTTON" &&
            (ye(!0), (un.current = { x: ce.clientX, y: ce.clientY })));
      },
      onPointerUp: () => {
        var ce, Ce, ke, et;
        if (je || !Mt) return;
        un.current = null;
        let tt = Number(
            ((ce = ln.current) == null
              ? void 0
              : ce.style
                  .getPropertyValue("--swipe-amount")
                  .replace("px", "")) || 0,
          ),
          ir =
            new Date().getTime() -
            ((Ce = ms.current) == null ? void 0 : Ce.getTime()),
          ji = Math.abs(tt) / ir;
        if (Math.abs(tt) >= _v || ji > 0.11) {
          Tr(Zt.current),
            (ke = y.onDismiss) == null || ke.call(y, y),
            _t(),
            Ke(!0);
          return;
        }
        (et = ln.current) == null ||
          et.style.setProperty("--swipe-amount", "0px"),
          ye(!1);
      },
      onPointerMove: (ce) => {
        var Ce;
        if (!un.current || !Mt) return;
        let ke = ce.clientY - un.current.y,
          et = ce.clientX - un.current.x,
          tt = (Sn === "top" ? Math.min : Math.max)(0, ke),
          ir = ce.pointerType === "touch" ? 10 : 2;
        Math.abs(tt) > ir
          ? (Ce = ln.current) == null ||
            Ce.style.setProperty("--swipe-amount", `${ke}px`)
          : Math.abs(et) > ir && (un.current = null);
      },
    },
    wi && !y.jsx
      ? V.createElement(
          "button",
          {
            "aria-label": W,
            "data-disabled": xs,
            "data-close-button": !0,
            onClick:
              xs || !Mt
                ? () => {}
                : () => {
                    var ce;
                    _t(), (ce = y.onDismiss) == null || ce.call(y, y);
                  },
            className: M(
              O == null ? void 0 : O.closeButton,
              (d = y == null ? void 0 : y.classNames) == null
                ? void 0
                : d.closeButton,
            ),
          },
          V.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            V.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            V.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
          ),
        )
      : null,
    y.jsx || V.isValidElement(y.title)
      ? y.jsx || y.title
      : V.createElement(
          V.Fragment,
          null,
          st || y.icon || y.promise
            ? V.createElement(
                "div",
                {
                  "data-icon": "",
                  className: M(
                    O == null ? void 0 : O.icon,
                    (p = y == null ? void 0 : y.classNames) == null
                      ? void 0
                      : p.icon,
                  ),
                },
                y.promise || (y.type === "loading" && !y.icon)
                  ? y.icon || ws()
                  : null,
                y.type !== "loading"
                  ? y.icon || (Q == null ? void 0 : Q[st]) || pv(st)
                  : null,
              )
            : null,
          V.createElement(
            "div",
            {
              "data-content": "",
              className: M(
                O == null ? void 0 : O.content,
                (m = y == null ? void 0 : y.classNames) == null
                  ? void 0
                  : m.content,
              ),
            },
            V.createElement(
              "div",
              {
                "data-title": "",
                className: M(
                  O == null ? void 0 : O.title,
                  (h = y == null ? void 0 : y.classNames) == null
                    ? void 0
                    : h.title,
                ),
              },
              y.title,
            ),
            y.description
              ? V.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: M(
                      le,
                      gs,
                      O == null ? void 0 : O.description,
                      (v = y == null ? void 0 : y.classNames) == null
                        ? void 0
                        : v.description,
                    ),
                  },
                  y.description,
                )
              : null,
          ),
          V.isValidElement(y.cancel)
            ? y.cancel
            : y.cancel && La(y.cancel)
              ? V.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: y.cancelButtonStyle || ve,
                    onClick: (ce) => {
                      var Ce, ke;
                      La(y.cancel) &&
                        Mt &&
                        ((ke = (Ce = y.cancel).onClick) == null ||
                          ke.call(Ce, ce),
                        _t());
                    },
                    className: M(
                      O == null ? void 0 : O.cancelButton,
                      (x = y == null ? void 0 : y.classNames) == null
                        ? void 0
                        : x.cancelButton,
                    ),
                  },
                  y.cancel.label,
                )
              : null,
          V.isValidElement(y.action)
            ? y.action
            : y.action && La(y.action)
              ? V.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: y.actionButtonStyle || _e,
                    onClick: (ce) => {
                      var Ce, ke;
                      La(y.action) &&
                        (ce.defaultPrevented ||
                          ((ke = (Ce = y.action).onClick) == null ||
                            ke.call(Ce, ce),
                          _t()));
                    },
                    className: M(
                      O == null ? void 0 : O.actionButton,
                      (b = y == null ? void 0 : y.classNames) == null
                        ? void 0
                        : b.actionButton,
                    ),
                  },
                  y.action.label,
                )
              : null,
        ),
  );
};
function Cf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let r = document.documentElement.getAttribute("dir");
  return r === "auto" || !r
    ? window.getComputedStyle(document.documentElement).direction
    : r;
}
var Dv = (r) => {
  let {
      invert: s,
      position: a = "bottom-right",
      hotkey: u = ["altKey", "KeyT"],
      expand: d,
      closeButton: p,
      className: m,
      offset: h,
      theme: v = "light",
      richColors: x,
      duration: b,
      style: j,
      visibleToasts: y = Ev,
      toastOptions: _,
      dir: L = Cf(),
      gap: R = Mv,
      loadingIcon: C,
      icons: D,
      containerAriaLabel: I = "Notifications",
      pauseWhenPageIsHidden: z,
      cn: H = Av,
    } = r,
    [q, oe] = V.useState([]),
    ee = V.useMemo(
      () =>
        Array.from(
          new Set(
            [a].concat(q.filter((S) => S.position).map((S) => S.position)),
          ),
        ),
      [q, a],
    ),
    [ne, ve] = V.useState([]),
    [_e, Pe] = V.useState(!1),
    [le, Te] = V.useState(!1),
    [te, xe] = V.useState(
      v !== "system"
        ? v
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    me = V.useRef(null),
    ge = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    O = V.useRef(null),
    Q = V.useRef(!1),
    W = V.useCallback(
      (S) => {
        var M;
        ((M = q.find((G) => G.id === S.id)) != null && M.delete) ||
          Pt.dismiss(S.id),
          oe((G) => G.filter(({ id: ae }) => ae !== S.id));
      },
      [q],
    );
  return (
    V.useEffect(
      () =>
        Pt.subscribe((S) => {
          if (S.dismiss) {
            oe((M) => M.map((G) => (G.id === S.id ? { ...G, delete: !0 } : G)));
            return;
          }
          setTimeout(() => {
            Zf.flushSync(() => {
              oe((M) => {
                let G = M.findIndex((ae) => ae.id === S.id);
                return G !== -1
                  ? [...M.slice(0, G), { ...M[G], ...S }, ...M.slice(G + 1)]
                  : [S, ...M];
              });
            });
          });
        }),
      [],
    ),
    V.useEffect(() => {
      if (v !== "system") {
        xe(v);
        return;
      }
      v === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? xe("dark")
          : xe("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: S }) => {
              xe(S ? "dark" : "light");
            });
    }, [v]),
    V.useEffect(() => {
      q.length <= 1 && Pe(!1);
    }, [q]),
    V.useEffect(() => {
      let S = (M) => {
        var G, ae;
        u.every((fe) => M[fe] || M.code === fe) &&
          (Pe(!0), (G = me.current) == null || G.focus()),
          M.code === "Escape" &&
            (document.activeElement === me.current ||
              ((ae = me.current) != null &&
                ae.contains(document.activeElement))) &&
            Pe(!1);
      };
      return (
        document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
      );
    }, [u]),
    V.useEffect(() => {
      if (me.current)
        return () => {
          O.current &&
            (O.current.focus({ preventScroll: !0 }),
            (O.current = null),
            (Q.current = !1));
        };
    }, [me.current]),
    q.length
      ? V.createElement(
          "section",
          { "aria-label": `${I} ${ge}`, tabIndex: -1 },
          ee.map((S, M) => {
            var G;
            let [ae, fe] = S.split("-");
            return V.createElement(
              "ol",
              {
                key: S,
                dir: L === "auto" ? Cf() : L,
                tabIndex: -1,
                ref: me,
                className: m,
                "data-sonner-toaster": !0,
                "data-theme": te,
                "data-y-position": ae,
                "data-x-position": fe,
                style: {
                  "--front-toast-height": `${((G = ne[0]) == null ? void 0 : G.height) || 0}px`,
                  "--offset": typeof h == "number" ? `${h}px` : h || Pv,
                  "--width": `${Rv}px`,
                  "--gap": `${R}px`,
                  ...j,
                },
                onBlur: (re) => {
                  Q.current &&
                    !re.currentTarget.contains(re.relatedTarget) &&
                    ((Q.current = !1),
                    O.current &&
                      (O.current.focus({ preventScroll: !0 }),
                      (O.current = null)));
                },
                onFocus: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    Q.current ||
                    ((Q.current = !0), (O.current = re.relatedTarget));
                },
                onMouseEnter: () => Pe(!0),
                onMouseMove: () => Pe(!0),
                onMouseLeave: () => {
                  le || Pe(!1);
                },
                onPointerDown: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    Te(!0);
                },
                onPointerUp: () => Te(!1),
              },
              q
                .filter((re) => (!re.position && M === 0) || re.position === S)
                .map((re, Se) => {
                  var ye, je;
                  return V.createElement(Lv, {
                    key: re.id,
                    icons: D,
                    index: Se,
                    toast: re,
                    defaultRichColors: x,
                    duration:
                      (ye = _ == null ? void 0 : _.duration) != null ? ye : b,
                    className: _ == null ? void 0 : _.className,
                    descriptionClassName:
                      _ == null ? void 0 : _.descriptionClassName,
                    invert: s,
                    visibleToasts: y,
                    closeButton:
                      (je = _ == null ? void 0 : _.closeButton) != null
                        ? je
                        : p,
                    interacting: le,
                    position: S,
                    style: _ == null ? void 0 : _.style,
                    unstyled: _ == null ? void 0 : _.unstyled,
                    classNames: _ == null ? void 0 : _.classNames,
                    cancelButtonStyle: _ == null ? void 0 : _.cancelButtonStyle,
                    actionButtonStyle: _ == null ? void 0 : _.actionButtonStyle,
                    removeToast: W,
                    toasts: q.filter((Ke) => Ke.position == re.position),
                    heights: ne.filter((Ke) => Ke.position == re.position),
                    setHeights: ve,
                    expandByDefault: d,
                    gap: R,
                    loadingIcon: C,
                    expanded: _e,
                    pauseWhenPageIsHidden: z,
                    cn: H,
                  });
                }),
            );
          }),
        )
      : null
  );
};
const Iv = ({ ...r }) => {
  const { theme: s = "system" } = fv();
  return l.jsx(Dv, {
    theme: s,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...r,
  });
};
var Ka = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(r) {
      return (
        this.listeners.add(r),
        this.onSubscribe(),
        () => {
          this.listeners.delete(r), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ga = typeof window > "u" || "Deno" in globalThis;
function Kt() {}
function zv(r, s) {
  return typeof r == "function" ? r(s) : r;
}
function Fv(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Uv(r, s) {
  return Math.max(r + (s || 0) - Date.now(), 0);
}
function Ef(r, s) {
  return typeof r == "function" ? r(s) : r;
}
function Bv(r, s) {
  return typeof r == "function" ? r(s) : r;
}
function Pf(r, s) {
  const {
    type: a = "all",
    exact: u,
    fetchStatus: d,
    predicate: p,
    queryKey: m,
    stale: h,
  } = r;
  if (m) {
    if (u) {
      if (s.queryHash !== vu(m, s.options)) return !1;
    } else if (!fi(s.queryKey, m)) return !1;
  }
  if (a !== "all") {
    const v = s.isActive();
    if ((a === "active" && !v) || (a === "inactive" && v)) return !1;
  }
  return !(
    (typeof h == "boolean" && s.isStale() !== h) ||
    (d && d !== s.state.fetchStatus) ||
    (p && !p(s))
  );
}
function Tf(r, s) {
  const { exact: a, status: u, predicate: d, mutationKey: p } = r;
  if (p) {
    if (!s.options.mutationKey) return !1;
    if (a) {
      if (di(s.options.mutationKey) !== di(p)) return !1;
    } else if (!fi(s.options.mutationKey, p)) return !1;
  }
  return !((u && s.state.status !== u) || (d && !d(s)));
}
function vu(r, s) {
  return ((s == null ? void 0 : s.queryKeyHashFn) || di)(r);
}
function di(r) {
  return JSON.stringify(r, (s, a) =>
    tu(a)
      ? Object.keys(a)
          .sort()
          .reduce((u, d) => ((u[d] = a[d]), u), {})
      : a,
  );
}
function fi(r, s) {
  return r === s
    ? !0
    : typeof r != typeof s
      ? !1
      : r && s && typeof r == "object" && typeof s == "object"
        ? !Object.keys(s).some((a) => !fi(r[a], s[a]))
        : !1;
}
function Vp(r, s) {
  if (r === s) return r;
  const a = Rf(r) && Rf(s);
  if (a || (tu(r) && tu(s))) {
    const u = a ? r : Object.keys(r),
      d = u.length,
      p = a ? s : Object.keys(s),
      m = p.length,
      h = a ? [] : {};
    let v = 0;
    for (let x = 0; x < m; x++) {
      const b = a ? x : p[x];
      ((!a && u.includes(b)) || a) && r[b] === void 0 && s[b] === void 0
        ? ((h[b] = void 0), v++)
        : ((h[b] = Vp(r[b], s[b])), h[b] === r[b] && r[b] !== void 0 && v++);
    }
    return d === m && v === d ? r : h;
  }
  return s;
}
function Rf(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function tu(r) {
  if (!Mf(r)) return !1;
  const s = r.constructor;
  if (s === void 0) return !0;
  const a = s.prototype;
  return !(
    !Mf(a) ||
    !a.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(r) !== Object.prototype
  );
}
function Mf(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function $v(r) {
  return new Promise((s) => {
    setTimeout(s, r);
  });
}
function Hv(r, s, a) {
  return typeof a.structuralSharing == "function"
    ? a.structuralSharing(r, s)
    : a.structuralSharing !== !1
      ? Vp(r, s)
      : s;
}
function Vv(r, s, a = 0) {
  const u = [...r, s];
  return a && u.length > a ? u.slice(1) : u;
}
function Wv(r, s, a = 0) {
  const u = [s, ...r];
  return a && u.length > a ? u.slice(0, -1) : u;
}
var Wp = Symbol();
function Qp(r, s) {
  return !r.queryFn && s != null && s.initialPromise
    ? () => s.initialPromise
    : !r.queryFn || r.queryFn === Wp
      ? () => Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`))
      : r.queryFn;
}
var wr,
  Qn,
  rs,
  $f,
  Qv =
    (($f = class extends Ka {
      constructor() {
        super();
        be(this, wr);
        be(this, Qn);
        be(this, rs);
        pe(this, rs, (s) => {
          if (!Ga && window.addEventListener) {
            const a = () => s();
            return (
              window.addEventListener("visibilitychange", a, !1),
              () => {
                window.removeEventListener("visibilitychange", a);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, Qn) || this.setEventListener(A(this, rs));
      }
      onUnsubscribe() {
        var s;
        this.hasListeners() ||
          ((s = A(this, Qn)) == null || s.call(this), pe(this, Qn, void 0));
      }
      setEventListener(s) {
        var a;
        pe(this, rs, s),
          (a = A(this, Qn)) == null || a.call(this),
          pe(
            this,
            Qn,
            s((u) => {
              typeof u == "boolean" ? this.setFocused(u) : this.onFocus();
            }),
          );
      }
      setFocused(s) {
        A(this, wr) !== s && (pe(this, wr, s), this.onFocus());
      }
      onFocus() {
        const s = this.isFocused();
        this.listeners.forEach((a) => {
          a(s);
        });
      }
      isFocused() {
        var s;
        return typeof A(this, wr) == "boolean"
          ? A(this, wr)
          : ((s = globalThis.document) == null ? void 0 : s.visibilityState) !==
              "hidden";
      }
    }),
    (wr = new WeakMap()),
    (Qn = new WeakMap()),
    (rs = new WeakMap()),
    $f),
  Kp = new Qv(),
  ss,
  Kn,
  is,
  Hf,
  Kv =
    ((Hf = class extends Ka {
      constructor() {
        super();
        be(this, ss, !0);
        be(this, Kn);
        be(this, is);
        pe(this, is, (s) => {
          if (!Ga && window.addEventListener) {
            const a = () => s(!0),
              u = () => s(!1);
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", u, !1),
              () => {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", u);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, Kn) || this.setEventListener(A(this, is));
      }
      onUnsubscribe() {
        var s;
        this.hasListeners() ||
          ((s = A(this, Kn)) == null || s.call(this), pe(this, Kn, void 0));
      }
      setEventListener(s) {
        var a;
        pe(this, is, s),
          (a = A(this, Kn)) == null || a.call(this),
          pe(this, Kn, s(this.setOnline.bind(this)));
      }
      setOnline(s) {
        A(this, ss) !== s &&
          (pe(this, ss, s),
          this.listeners.forEach((u) => {
            u(s);
          }));
      }
      isOnline() {
        return A(this, ss);
      }
    }),
    (ss = new WeakMap()),
    (Kn = new WeakMap()),
    (is = new WeakMap()),
    Hf),
  Ba = new Kv();
function Gv(r) {
  return Math.min(1e3 * 2 ** r, 3e4);
}
function Gp(r) {
  return (r ?? "online") === "online" ? Ba.isOnline() : !0;
}
var qp = class extends Error {
  constructor(r) {
    super("CancelledError"),
      (this.revert = r == null ? void 0 : r.revert),
      (this.silent = r == null ? void 0 : r.silent);
  }
};
function Vl(r) {
  return r instanceof qp;
}
function Yp(r) {
  let s = !1,
    a = 0,
    u = !1,
    d,
    p,
    m;
  const h = new Promise((D, I) => {
      (p = D), (m = I);
    }),
    v = (D) => {
      var I;
      u || (L(new qp(D)), (I = r.abort) == null || I.call(r));
    },
    x = () => {
      s = !0;
    },
    b = () => {
      s = !1;
    },
    j = () =>
      Kp.isFocused() &&
      (r.networkMode === "always" || Ba.isOnline()) &&
      r.canRun(),
    y = () => Gp(r.networkMode) && r.canRun(),
    _ = (D) => {
      var I;
      u ||
        ((u = !0),
        (I = r.onSuccess) == null || I.call(r, D),
        d == null || d(),
        p(D));
    },
    L = (D) => {
      var I;
      u ||
        ((u = !0),
        (I = r.onError) == null || I.call(r, D),
        d == null || d(),
        m(D));
    },
    R = () =>
      new Promise((D) => {
        var I;
        (d = (z) => {
          (u || j()) && D(z);
        }),
          (I = r.onPause) == null || I.call(r);
      }).then(() => {
        var D;
        (d = void 0), u || (D = r.onContinue) == null || D.call(r);
      }),
    C = () => {
      if (u) return;
      let D;
      const I = a === 0 ? r.initialPromise : void 0;
      try {
        D = I ?? r.fn();
      } catch (z) {
        D = Promise.reject(z);
      }
      Promise.resolve(D)
        .then(_)
        .catch((z) => {
          var ne;
          if (u) return;
          const H = r.retry ?? (Ga ? 0 : 3),
            q = r.retryDelay ?? Gv,
            oe = typeof q == "function" ? q(a, z) : q,
            ee =
              H === !0 ||
              (typeof H == "number" && a < H) ||
              (typeof H == "function" && H(a, z));
          if (s || !ee) {
            L(z);
            return;
          }
          a++,
            (ne = r.onFail) == null || ne.call(r, a, z),
            $v(oe)
              .then(() => (j() ? void 0 : R()))
              .then(() => {
                s ? L(z) : C();
              });
        });
    };
  return {
    promise: h,
    cancel: v,
    continue: () => (d == null || d(), h),
    cancelRetry: x,
    continueRetry: b,
    canStart: y,
    start: () => (y() ? C() : R().then(C), h),
  };
}
function qv() {
  let r = [],
    s = 0,
    a = (h) => {
      h();
    },
    u = (h) => {
      h();
    },
    d = (h) => setTimeout(h, 0);
  const p = (h) => {
      s
        ? r.push(h)
        : d(() => {
            a(h);
          });
    },
    m = () => {
      const h = r;
      (r = []),
        h.length &&
          d(() => {
            u(() => {
              h.forEach((v) => {
                a(v);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let v;
      s++;
      try {
        v = h();
      } finally {
        s--, s || m();
      }
      return v;
    },
    batchCalls:
      (h) =>
      (...v) => {
        p(() => {
          h(...v);
        });
      },
    schedule: p,
    setNotifyFunction: (h) => {
      a = h;
    },
    setBatchNotifyFunction: (h) => {
      u = h;
    },
    setScheduler: (h) => {
      d = h;
    },
  };
}
var ht = qv(),
  Nr,
  Vf,
  Xp =
    ((Vf = class {
      constructor() {
        be(this, Nr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Fv(this.gcTime) &&
            pe(
              this,
              Nr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(r) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          r ?? (Ga ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        A(this, Nr) && (clearTimeout(A(this, Nr)), pe(this, Nr, void 0));
      }
    }),
    (Nr = new WeakMap()),
    Vf),
  as,
  os,
  Ft,
  ct,
  hi,
  Sr,
  Gt,
  xn,
  Wf,
  Yv =
    ((Wf = class extends Xp {
      constructor(s) {
        super();
        be(this, Gt);
        be(this, as);
        be(this, os);
        be(this, Ft);
        be(this, ct);
        be(this, hi);
        be(this, Sr);
        pe(this, Sr, !1),
          pe(this, hi, s.defaultOptions),
          this.setOptions(s.options),
          (this.observers = []),
          pe(this, Ft, s.cache),
          (this.queryKey = s.queryKey),
          (this.queryHash = s.queryHash),
          pe(this, as, Zv(this.options)),
          (this.state = s.state ?? A(this, as)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var s;
        return (s = A(this, ct)) == null ? void 0 : s.promise;
      }
      setOptions(s) {
        (this.options = { ...A(this, hi), ...s }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          A(this, Ft).remove(this);
      }
      setData(s, a) {
        const u = Hv(this.state.data, s, this.options);
        return (
          ut(this, Gt, xn).call(this, {
            data: u,
            type: "success",
            dataUpdatedAt: a == null ? void 0 : a.updatedAt,
            manual: a == null ? void 0 : a.manual,
          }),
          u
        );
      }
      setState(s, a) {
        ut(this, Gt, xn).call(this, {
          type: "setState",
          state: s,
          setStateOptions: a,
        });
      }
      cancel(s) {
        var u, d;
        const a = (u = A(this, ct)) == null ? void 0 : u.promise;
        return (
          (d = A(this, ct)) == null || d.cancel(s),
          a ? a.then(Kt).catch(Kt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(A(this, as));
      }
      isActive() {
        return this.observers.some((s) => Bv(s.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((s) => s.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(s = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Uv(this.state.dataUpdatedAt, s)
        );
      }
      onFocus() {
        var a;
        const s = this.observers.find((u) => u.shouldFetchOnWindowFocus());
        s == null || s.refetch({ cancelRefetch: !1 }),
          (a = A(this, ct)) == null || a.continue();
      }
      onOnline() {
        var a;
        const s = this.observers.find((u) => u.shouldFetchOnReconnect());
        s == null || s.refetch({ cancelRefetch: !1 }),
          (a = A(this, ct)) == null || a.continue();
      }
      addObserver(s) {
        this.observers.includes(s) ||
          (this.observers.push(s),
          this.clearGcTimeout(),
          A(this, Ft).notify({
            type: "observerAdded",
            query: this,
            observer: s,
          }));
      }
      removeObserver(s) {
        this.observers.includes(s) &&
          ((this.observers = this.observers.filter((a) => a !== s)),
          this.observers.length ||
            (A(this, ct) &&
              (A(this, Sr)
                ? A(this, ct).cancel({ revert: !0 })
                : A(this, ct).cancelRetry()),
            this.scheduleGc()),
          A(this, Ft).notify({
            type: "observerRemoved",
            query: this,
            observer: s,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ut(this, Gt, xn).call(this, { type: "invalidate" });
      }
      fetch(s, a) {
        var v, x, b;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && a != null && a.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (A(this, ct))
            return A(this, ct).continueRetry(), A(this, ct).promise;
        }
        if ((s && this.setOptions(s), !this.options.queryFn)) {
          const j = this.observers.find((y) => y.options.queryFn);
          j && this.setOptions(j.options);
        }
        const u = new AbortController(),
          d = (j) => {
            Object.defineProperty(j, "signal", {
              enumerable: !0,
              get: () => (pe(this, Sr, !0), u.signal),
            });
          },
          p = () => {
            const j = Qp(this.options, a),
              y = { queryKey: this.queryKey, meta: this.meta };
            return (
              d(y),
              pe(this, Sr, !1),
              this.options.persister ? this.options.persister(j, y, this) : j(y)
            );
          },
          m = {
            fetchOptions: a,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: p,
          };
        d(m),
          (v = this.options.behavior) == null || v.onFetch(m, this),
          pe(this, os, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((x = m.fetchOptions) == null ? void 0 : x.meta)) &&
            ut(this, Gt, xn).call(this, {
              type: "fetch",
              meta: (b = m.fetchOptions) == null ? void 0 : b.meta,
            });
        const h = (j) => {
          var y, _, L, R;
          (Vl(j) && j.silent) ||
            ut(this, Gt, xn).call(this, { type: "error", error: j }),
            Vl(j) ||
              ((_ = (y = A(this, Ft).config).onError) == null ||
                _.call(y, j, this),
              (R = (L = A(this, Ft).config).onSettled) == null ||
                R.call(L, this.state.data, j, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          pe(
            this,
            ct,
            Yp({
              initialPromise: a == null ? void 0 : a.initialPromise,
              fn: m.fetchFn,
              abort: u.abort.bind(u),
              onSuccess: (j) => {
                var y, _, L, R;
                if (j === void 0) {
                  h(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(j);
                } catch (C) {
                  h(C);
                  return;
                }
                (_ = (y = A(this, Ft).config).onSuccess) == null ||
                  _.call(y, j, this),
                  (R = (L = A(this, Ft).config).onSettled) == null ||
                    R.call(L, j, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: h,
              onFail: (j, y) => {
                ut(this, Gt, xn).call(this, {
                  type: "failed",
                  failureCount: j,
                  error: y,
                });
              },
              onPause: () => {
                ut(this, Gt, xn).call(this, { type: "pause" });
              },
              onContinue: () => {
                ut(this, Gt, xn).call(this, { type: "continue" });
              },
              retry: m.options.retry,
              retryDelay: m.options.retryDelay,
              networkMode: m.options.networkMode,
              canRun: () => !0,
            }),
          ),
          A(this, ct).start()
        );
      }
    }),
    (as = new WeakMap()),
    (os = new WeakMap()),
    (Ft = new WeakMap()),
    (ct = new WeakMap()),
    (hi = new WeakMap()),
    (Sr = new WeakMap()),
    (Gt = new WeakSet()),
    (xn = function (s) {
      const a = (u) => {
        switch (s.type) {
          case "failed":
            return {
              ...u,
              fetchFailureCount: s.failureCount,
              fetchFailureReason: s.error,
            };
          case "pause":
            return { ...u, fetchStatus: "paused" };
          case "continue":
            return { ...u, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...u,
              ...Xv(u.data, this.options),
              fetchMeta: s.meta ?? null,
            };
          case "success":
            return {
              ...u,
              data: s.data,
              dataUpdateCount: u.dataUpdateCount + 1,
              dataUpdatedAt: s.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!s.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const d = s.error;
            return Vl(d) && d.revert && A(this, os)
              ? { ...A(this, os), fetchStatus: "idle" }
              : {
                  ...u,
                  error: d,
                  errorUpdateCount: u.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: u.fetchFailureCount + 1,
                  fetchFailureReason: d,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...u, isInvalidated: !0 };
          case "setState":
            return { ...u, ...s.state };
        }
      };
      (this.state = a(this.state)),
        ht.batch(() => {
          this.observers.forEach((u) => {
            u.onQueryUpdate();
          }),
            A(this, Ft).notify({ query: this, type: "updated", action: s });
        });
    }),
    Wf);
function Xv(r, s) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Gp(s.networkMode) ? "fetching" : "paused",
    ...(r === void 0 && { error: null, status: "pending" }),
  };
}
function Zv(r) {
  const s =
      typeof r.initialData == "function" ? r.initialData() : r.initialData,
    a = s !== void 0,
    u = a
      ? typeof r.initialDataUpdatedAt == "function"
        ? r.initialDataUpdatedAt()
        : r.initialDataUpdatedAt
      : 0;
  return {
    data: s,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? (u ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var sn,
  Qf,
  Jv =
    ((Qf = class extends Ka {
      constructor(s = {}) {
        super();
        be(this, sn);
        (this.config = s), pe(this, sn, new Map());
      }
      build(s, a, u) {
        const d = a.queryKey,
          p = a.queryHash ?? vu(d, a);
        let m = this.get(p);
        return (
          m ||
            ((m = new Yv({
              cache: this,
              queryKey: d,
              queryHash: p,
              options: s.defaultQueryOptions(a),
              state: u,
              defaultOptions: s.getQueryDefaults(d),
            })),
            this.add(m)),
          m
        );
      }
      add(s) {
        A(this, sn).has(s.queryHash) ||
          (A(this, sn).set(s.queryHash, s),
          this.notify({ type: "added", query: s }));
      }
      remove(s) {
        const a = A(this, sn).get(s.queryHash);
        a &&
          (s.destroy(),
          a === s && A(this, sn).delete(s.queryHash),
          this.notify({ type: "removed", query: s }));
      }
      clear() {
        ht.batch(() => {
          this.getAll().forEach((s) => {
            this.remove(s);
          });
        });
      }
      get(s) {
        return A(this, sn).get(s);
      }
      getAll() {
        return [...A(this, sn).values()];
      }
      find(s) {
        const a = { exact: !0, ...s };
        return this.getAll().find((u) => Pf(a, u));
      }
      findAll(s = {}) {
        const a = this.getAll();
        return Object.keys(s).length > 0 ? a.filter((u) => Pf(s, u)) : a;
      }
      notify(s) {
        ht.batch(() => {
          this.listeners.forEach((a) => {
            a(s);
          });
        });
      }
      onFocus() {
        ht.batch(() => {
          this.getAll().forEach((s) => {
            s.onFocus();
          });
        });
      }
      onOnline() {
        ht.batch(() => {
          this.getAll().forEach((s) => {
            s.onOnline();
          });
        });
      }
    }),
    (sn = new WeakMap()),
    Qf),
  an,
  mt,
  jr,
  on,
  Vn,
  Kf,
  ex =
    ((Kf = class extends Xp {
      constructor(s) {
        super();
        be(this, on);
        be(this, an);
        be(this, mt);
        be(this, jr);
        (this.mutationId = s.mutationId),
          pe(this, mt, s.mutationCache),
          pe(this, an, []),
          (this.state = s.state || tx()),
          this.setOptions(s.options),
          this.scheduleGc();
      }
      setOptions(s) {
        (this.options = s), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(s) {
        A(this, an).includes(s) ||
          (A(this, an).push(s),
          this.clearGcTimeout(),
          A(this, mt).notify({
            type: "observerAdded",
            mutation: this,
            observer: s,
          }));
      }
      removeObserver(s) {
        pe(
          this,
          an,
          A(this, an).filter((a) => a !== s),
        ),
          this.scheduleGc(),
          A(this, mt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: s,
          });
      }
      optionalRemove() {
        A(this, an).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : A(this, mt).remove(this));
      }
      continue() {
        var s;
        return (
          ((s = A(this, jr)) == null ? void 0 : s.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(s) {
        var d, p, m, h, v, x, b, j, y, _, L, R, C, D, I, z, H, q, oe, ee;
        pe(
          this,
          jr,
          Yp({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(s)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (ne, ve) => {
              ut(this, on, Vn).call(this, {
                type: "failed",
                failureCount: ne,
                error: ve,
              });
            },
            onPause: () => {
              ut(this, on, Vn).call(this, { type: "pause" });
            },
            onContinue: () => {
              ut(this, on, Vn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, mt).canRun(this),
          }),
        );
        const a = this.state.status === "pending",
          u = !A(this, jr).canStart();
        try {
          if (!a) {
            ut(this, on, Vn).call(this, {
              type: "pending",
              variables: s,
              isPaused: u,
            }),
              await ((p = (d = A(this, mt).config).onMutate) == null
                ? void 0
                : p.call(d, s, this));
            const ve = await ((h = (m = this.options).onMutate) == null
              ? void 0
              : h.call(m, s));
            ve !== this.state.context &&
              ut(this, on, Vn).call(this, {
                type: "pending",
                context: ve,
                variables: s,
                isPaused: u,
              });
          }
          const ne = await A(this, jr).start();
          return (
            await ((x = (v = A(this, mt).config).onSuccess) == null
              ? void 0
              : x.call(v, ne, s, this.state.context, this)),
            await ((j = (b = this.options).onSuccess) == null
              ? void 0
              : j.call(b, ne, s, this.state.context)),
            await ((_ = (y = A(this, mt).config).onSettled) == null
              ? void 0
              : _.call(
                  y,
                  ne,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((R = (L = this.options).onSettled) == null
              ? void 0
              : R.call(L, ne, null, s, this.state.context)),
            ut(this, on, Vn).call(this, { type: "success", data: ne }),
            ne
          );
        } catch (ne) {
          try {
            throw (
              (await ((D = (C = A(this, mt).config).onError) == null
                ? void 0
                : D.call(C, ne, s, this.state.context, this)),
              await ((z = (I = this.options).onError) == null
                ? void 0
                : z.call(I, ne, s, this.state.context)),
              await ((q = (H = A(this, mt).config).onSettled) == null
                ? void 0
                : q.call(
                    H,
                    void 0,
                    ne,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((ee = (oe = this.options).onSettled) == null
                ? void 0
                : ee.call(oe, void 0, ne, s, this.state.context)),
              ne)
            );
          } finally {
            ut(this, on, Vn).call(this, { type: "error", error: ne });
          }
        } finally {
          A(this, mt).runNext(this);
        }
      }
    }),
    (an = new WeakMap()),
    (mt = new WeakMap()),
    (jr = new WeakMap()),
    (on = new WeakSet()),
    (Vn = function (s) {
      const a = (u) => {
        switch (s.type) {
          case "failed":
            return {
              ...u,
              failureCount: s.failureCount,
              failureReason: s.error,
            };
          case "pause":
            return { ...u, isPaused: !0 };
          case "continue":
            return { ...u, isPaused: !1 };
          case "pending":
            return {
              ...u,
              context: s.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: s.isPaused,
              status: "pending",
              variables: s.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...u,
              data: s.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...u,
              data: void 0,
              error: s.error,
              failureCount: u.failureCount + 1,
              failureReason: s.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = a(this.state)),
        ht.batch(() => {
          A(this, an).forEach((u) => {
            u.onMutationUpdate(s);
          }),
            A(this, mt).notify({ mutation: this, type: "updated", action: s });
        });
    }),
    Kf);
function tx() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Et,
  gi,
  Gf,
  nx =
    ((Gf = class extends Ka {
      constructor(s = {}) {
        super();
        be(this, Et);
        be(this, gi);
        (this.config = s), pe(this, Et, new Map()), pe(this, gi, Date.now());
      }
      build(s, a, u) {
        const d = new ex({
          mutationCache: this,
          mutationId: ++Ma(this, gi)._,
          options: s.defaultMutationOptions(a),
          state: u,
        });
        return this.add(d), d;
      }
      add(s) {
        const a = Da(s),
          u = A(this, Et).get(a) ?? [];
        u.push(s),
          A(this, Et).set(a, u),
          this.notify({ type: "added", mutation: s });
      }
      remove(s) {
        var u;
        const a = Da(s);
        if (A(this, Et).has(a)) {
          const d =
            (u = A(this, Et).get(a)) == null
              ? void 0
              : u.filter((p) => p !== s);
          d && (d.length === 0 ? A(this, Et).delete(a) : A(this, Et).set(a, d));
        }
        this.notify({ type: "removed", mutation: s });
      }
      canRun(s) {
        var u;
        const a =
          (u = A(this, Et).get(Da(s))) == null
            ? void 0
            : u.find((d) => d.state.status === "pending");
        return !a || a === s;
      }
      runNext(s) {
        var u;
        const a =
          (u = A(this, Et).get(Da(s))) == null
            ? void 0
            : u.find((d) => d !== s && d.state.isPaused);
        return (a == null ? void 0 : a.continue()) ?? Promise.resolve();
      }
      clear() {
        ht.batch(() => {
          this.getAll().forEach((s) => {
            this.remove(s);
          });
        });
      }
      getAll() {
        return [...A(this, Et).values()].flat();
      }
      find(s) {
        const a = { exact: !0, ...s };
        return this.getAll().find((u) => Tf(a, u));
      }
      findAll(s = {}) {
        return this.getAll().filter((a) => Tf(s, a));
      }
      notify(s) {
        ht.batch(() => {
          this.listeners.forEach((a) => {
            a(s);
          });
        });
      }
      resumePausedMutations() {
        const s = this.getAll().filter((a) => a.state.isPaused);
        return ht.batch(() =>
          Promise.all(s.map((a) => a.continue().catch(Kt))),
        );
      }
    }),
    (Et = new WeakMap()),
    (gi = new WeakMap()),
    Gf);
function Da(r) {
  var s;
  return (
    ((s = r.options.scope) == null ? void 0 : s.id) ?? String(r.mutationId)
  );
}
function _f(r) {
  return {
    onFetch: (s, a) => {
      var b, j, y, _, L;
      const u = s.options,
        d =
          (y =
            (j = (b = s.fetchOptions) == null ? void 0 : b.meta) == null
              ? void 0
              : j.fetchMore) == null
            ? void 0
            : y.direction,
        p = ((_ = s.state.data) == null ? void 0 : _.pages) || [],
        m = ((L = s.state.data) == null ? void 0 : L.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        v = 0;
      const x = async () => {
        let R = !1;
        const C = (z) => {
            Object.defineProperty(z, "signal", {
              enumerable: !0,
              get: () => (
                s.signal.aborted
                  ? (R = !0)
                  : s.signal.addEventListener("abort", () => {
                      R = !0;
                    }),
                s.signal
              ),
            });
          },
          D = Qp(s.options, s.fetchOptions),
          I = async (z, H, q) => {
            if (R) return Promise.reject();
            if (H == null && z.pages.length) return Promise.resolve(z);
            const oe = {
              queryKey: s.queryKey,
              pageParam: H,
              direction: q ? "backward" : "forward",
              meta: s.options.meta,
            };
            C(oe);
            const ee = await D(oe),
              { maxPages: ne } = s.options,
              ve = q ? Wv : Vv;
            return {
              pages: ve(z.pages, ee, ne),
              pageParams: ve(z.pageParams, H, ne),
            };
          };
        if (d && p.length) {
          const z = d === "backward",
            H = z ? rx : Of,
            q = { pages: p, pageParams: m },
            oe = H(u, q);
          h = await I(q, oe, z);
        } else {
          const z = r ?? p.length;
          do {
            const H = v === 0 ? (m[0] ?? u.initialPageParam) : Of(u, h);
            if (v > 0 && H == null) break;
            (h = await I(h, H)), v++;
          } while (v < z);
        }
        return h;
      };
      s.options.persister
        ? (s.fetchFn = () => {
            var R, C;
            return (C = (R = s.options).persister) == null
              ? void 0
              : C.call(
                  R,
                  x,
                  {
                    queryKey: s.queryKey,
                    meta: s.options.meta,
                    signal: s.signal,
                  },
                  a,
                );
          })
        : (s.fetchFn = x);
    },
  };
}
function Of(r, { pages: s, pageParams: a }) {
  const u = s.length - 1;
  return s.length > 0 ? r.getNextPageParam(s[u], s, a[u], a) : void 0;
}
function rx(r, { pages: s, pageParams: a }) {
  var u;
  return s.length > 0
    ? (u = r.getPreviousPageParam) == null
      ? void 0
      : u.call(r, s[0], s, a[0], a)
    : void 0;
}
var $e,
  Gn,
  qn,
  ls,
  us,
  Yn,
  cs,
  ds,
  qf,
  sx =
    ((qf = class {
      constructor(r = {}) {
        be(this, $e);
        be(this, Gn);
        be(this, qn);
        be(this, ls);
        be(this, us);
        be(this, Yn);
        be(this, cs);
        be(this, ds);
        pe(this, $e, r.queryCache || new Jv()),
          pe(this, Gn, r.mutationCache || new nx()),
          pe(this, qn, r.defaultOptions || {}),
          pe(this, ls, new Map()),
          pe(this, us, new Map()),
          pe(this, Yn, 0);
      }
      mount() {
        Ma(this, Yn)._++,
          A(this, Yn) === 1 &&
            (pe(
              this,
              cs,
              Kp.subscribe(async (r) => {
                r &&
                  (await this.resumePausedMutations(), A(this, $e).onFocus());
              }),
            ),
            pe(
              this,
              ds,
              Ba.subscribe(async (r) => {
                r &&
                  (await this.resumePausedMutations(), A(this, $e).onOnline());
              }),
            ));
      }
      unmount() {
        var r, s;
        Ma(this, Yn)._--,
          A(this, Yn) === 0 &&
            ((r = A(this, cs)) == null || r.call(this),
            pe(this, cs, void 0),
            (s = A(this, ds)) == null || s.call(this),
            pe(this, ds, void 0));
      }
      isFetching(r) {
        return A(this, $e).findAll({ ...r, fetchStatus: "fetching" }).length;
      }
      isMutating(r) {
        return A(this, Gn).findAll({ ...r, status: "pending" }).length;
      }
      getQueryData(r) {
        var a;
        const s = this.defaultQueryOptions({ queryKey: r });
        return (a = A(this, $e).get(s.queryHash)) == null
          ? void 0
          : a.state.data;
      }
      ensureQueryData(r) {
        const s = this.getQueryData(r.queryKey);
        if (s === void 0) return this.fetchQuery(r);
        {
          const a = this.defaultQueryOptions(r),
            u = A(this, $e).build(this, a);
          return (
            r.revalidateIfStale &&
              u.isStaleByTime(Ef(a.staleTime, u)) &&
              this.prefetchQuery(a),
            Promise.resolve(s)
          );
        }
      }
      getQueriesData(r) {
        return A(this, $e)
          .findAll(r)
          .map(({ queryKey: s, state: a }) => {
            const u = a.data;
            return [s, u];
          });
      }
      setQueryData(r, s, a) {
        const u = this.defaultQueryOptions({ queryKey: r }),
          d = A(this, $e).get(u.queryHash),
          p = d == null ? void 0 : d.state.data,
          m = zv(s, p);
        if (m !== void 0)
          return A(this, $e)
            .build(this, u)
            .setData(m, { ...a, manual: !0 });
      }
      setQueriesData(r, s, a) {
        return ht.batch(() =>
          A(this, $e)
            .findAll(r)
            .map(({ queryKey: u }) => [u, this.setQueryData(u, s, a)]),
        );
      }
      getQueryState(r) {
        var a;
        const s = this.defaultQueryOptions({ queryKey: r });
        return (a = A(this, $e).get(s.queryHash)) == null ? void 0 : a.state;
      }
      removeQueries(r) {
        const s = A(this, $e);
        ht.batch(() => {
          s.findAll(r).forEach((a) => {
            s.remove(a);
          });
        });
      }
      resetQueries(r, s) {
        const a = A(this, $e),
          u = { type: "active", ...r };
        return ht.batch(
          () => (
            a.findAll(r).forEach((d) => {
              d.reset();
            }),
            this.refetchQueries(u, s)
          ),
        );
      }
      cancelQueries(r = {}, s = {}) {
        const a = { revert: !0, ...s },
          u = ht.batch(() =>
            A(this, $e)
              .findAll(r)
              .map((d) => d.cancel(a)),
          );
        return Promise.all(u).then(Kt).catch(Kt);
      }
      invalidateQueries(r = {}, s = {}) {
        return ht.batch(() => {
          if (
            (A(this, $e)
              .findAll(r)
              .forEach((u) => {
                u.invalidate();
              }),
            r.refetchType === "none")
          )
            return Promise.resolve();
          const a = { ...r, type: r.refetchType ?? r.type ?? "active" };
          return this.refetchQueries(a, s);
        });
      }
      refetchQueries(r = {}, s) {
        const a = {
            ...s,
            cancelRefetch: (s == null ? void 0 : s.cancelRefetch) ?? !0,
          },
          u = ht.batch(() =>
            A(this, $e)
              .findAll(r)
              .filter((d) => !d.isDisabled())
              .map((d) => {
                let p = d.fetch(void 0, a);
                return (
                  a.throwOnError || (p = p.catch(Kt)),
                  d.state.fetchStatus === "paused" ? Promise.resolve() : p
                );
              }),
          );
        return Promise.all(u).then(Kt);
      }
      fetchQuery(r) {
        const s = this.defaultQueryOptions(r);
        s.retry === void 0 && (s.retry = !1);
        const a = A(this, $e).build(this, s);
        return a.isStaleByTime(Ef(s.staleTime, a))
          ? a.fetch(s)
          : Promise.resolve(a.state.data);
      }
      prefetchQuery(r) {
        return this.fetchQuery(r).then(Kt).catch(Kt);
      }
      fetchInfiniteQuery(r) {
        return (r.behavior = _f(r.pages)), this.fetchQuery(r);
      }
      prefetchInfiniteQuery(r) {
        return this.fetchInfiniteQuery(r).then(Kt).catch(Kt);
      }
      ensureInfiniteQueryData(r) {
        return (r.behavior = _f(r.pages)), this.ensureQueryData(r);
      }
      resumePausedMutations() {
        return Ba.isOnline()
          ? A(this, Gn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return A(this, $e);
      }
      getMutationCache() {
        return A(this, Gn);
      }
      getDefaultOptions() {
        return A(this, qn);
      }
      setDefaultOptions(r) {
        pe(this, qn, r);
      }
      setQueryDefaults(r, s) {
        A(this, ls).set(di(r), { queryKey: r, defaultOptions: s });
      }
      getQueryDefaults(r) {
        const s = [...A(this, ls).values()];
        let a = {};
        return (
          s.forEach((u) => {
            fi(r, u.queryKey) && (a = { ...a, ...u.defaultOptions });
          }),
          a
        );
      }
      setMutationDefaults(r, s) {
        A(this, us).set(di(r), { mutationKey: r, defaultOptions: s });
      }
      getMutationDefaults(r) {
        const s = [...A(this, us).values()];
        let a = {};
        return (
          s.forEach((u) => {
            fi(r, u.mutationKey) && (a = { ...a, ...u.defaultOptions });
          }),
          a
        );
      }
      defaultQueryOptions(r) {
        if (r._defaulted) return r;
        const s = {
          ...A(this, qn).queries,
          ...this.getQueryDefaults(r.queryKey),
          ...r,
          _defaulted: !0,
        };
        return (
          s.queryHash || (s.queryHash = vu(s.queryKey, s)),
          s.refetchOnReconnect === void 0 &&
            (s.refetchOnReconnect = s.networkMode !== "always"),
          s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
          !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
          s.enabled !== !0 && s.queryFn === Wp && (s.enabled = !1),
          s
        );
      }
      defaultMutationOptions(r) {
        return r != null && r._defaulted
          ? r
          : {
              ...A(this, qn).mutations,
              ...((r == null ? void 0 : r.mutationKey) &&
                this.getMutationDefaults(r.mutationKey)),
              ...r,
              _defaulted: !0,
            };
      }
      clear() {
        A(this, $e).clear(), A(this, Gn).clear();
      }
    }),
    ($e = new WeakMap()),
    (Gn = new WeakMap()),
    (qn = new WeakMap()),
    (ls = new WeakMap()),
    (us = new WeakMap()),
    (Yn = new WeakMap()),
    (cs = new WeakMap()),
    (ds = new WeakMap()),
    qf),
  ix = N.createContext(void 0),
  ax = ({ client: r, children: s }) => (
    N.useEffect(
      () => (
        r.mount(),
        () => {
          r.unmount();
        }
      ),
      [r],
    ),
    l.jsx(ix.Provider, { value: r, children: s })
  );
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            for (var u in a)
              Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
          }
          return r;
        }),
    pi.apply(this, arguments)
  );
}
var Xn;
(function (r) {
  (r.Pop = "POP"), (r.Push = "PUSH"), (r.Replace = "REPLACE");
})(Xn || (Xn = {}));
const Af = "popstate";
function ox(r) {
  r === void 0 && (r = {});
  function s(u, d) {
    let { pathname: p, search: m, hash: h } = u.location;
    return nu(
      "",
      { pathname: p, search: m, hash: h },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
    );
  }
  function a(u, d) {
    return typeof d == "string" ? d : $a(d);
  }
  return ux(s, a, null, r);
}
function Qe(r, s) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(s);
}
function Zp(r, s) {
  if (!r) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function lx() {
  return Math.random().toString(36).substr(2, 8);
}
function Lf(r, s) {
  return { usr: r.state, key: r.key, idx: s };
}
function nu(r, s, a, u) {
  return (
    a === void 0 && (a = null),
    pi(
      { pathname: typeof r == "string" ? r : r.pathname, search: "", hash: "" },
      typeof s == "string" ? ps(s) : s,
      { state: a, key: (s && s.key) || u || lx() },
    )
  );
}
function $a(r) {
  let { pathname: s = "/", search: a = "", hash: u = "" } = r;
  return (
    a && a !== "?" && (s += a.charAt(0) === "?" ? a : "?" + a),
    u && u !== "#" && (s += u.charAt(0) === "#" ? u : "#" + u),
    s
  );
}
function ps(r) {
  let s = {};
  if (r) {
    let a = r.indexOf("#");
    a >= 0 && ((s.hash = r.substr(a)), (r = r.substr(0, a)));
    let u = r.indexOf("?");
    u >= 0 && ((s.search = r.substr(u)), (r = r.substr(0, u))),
      r && (s.pathname = r);
  }
  return s;
}
function ux(r, s, a, u) {
  u === void 0 && (u = {});
  let { window: d = document.defaultView, v5Compat: p = !1 } = u,
    m = d.history,
    h = Xn.Pop,
    v = null,
    x = b();
  x == null && ((x = 0), m.replaceState(pi({}, m.state, { idx: x }), ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function j() {
    h = Xn.Pop;
    let C = b(),
      D = C == null ? null : C - x;
    (x = C), v && v({ action: h, location: R.location, delta: D });
  }
  function y(C, D) {
    h = Xn.Push;
    let I = nu(R.location, C, D);
    x = b() + 1;
    let z = Lf(I, x),
      H = R.createHref(I);
    try {
      m.pushState(z, "", H);
    } catch (q) {
      if (q instanceof DOMException && q.name === "DataCloneError") throw q;
      d.location.assign(H);
    }
    p && v && v({ action: h, location: R.location, delta: 1 });
  }
  function _(C, D) {
    h = Xn.Replace;
    let I = nu(R.location, C, D);
    x = b();
    let z = Lf(I, x),
      H = R.createHref(I);
    m.replaceState(z, "", H),
      p && v && v({ action: h, location: R.location, delta: 0 });
  }
  function L(C) {
    let D = d.location.origin !== "null" ? d.location.origin : d.location.href,
      I = typeof C == "string" ? C : $a(C);
    return (
      (I = I.replace(/ $/, "%20")),
      Qe(
        D,
        "No window.location.(origin|href) available to create URL for href: " +
          I,
      ),
      new URL(I, D)
    );
  }
  let R = {
    get action() {
      return h;
    },
    get location() {
      return r(d, m);
    },
    listen(C) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Af, j),
        (v = C),
        () => {
          d.removeEventListener(Af, j), (v = null);
        }
      );
    },
    createHref(C) {
      return s(d, C);
    },
    createURL: L,
    encodeLocation(C) {
      let D = L(C);
      return { pathname: D.pathname, search: D.search, hash: D.hash };
    },
    push: y,
    replace: _,
    go(C) {
      return m.go(C);
    },
  };
  return R;
}
var Df;
(function (r) {
  (r.data = "data"),
    (r.deferred = "deferred"),
    (r.redirect = "redirect"),
    (r.error = "error");
})(Df || (Df = {}));
function cx(r, s, a) {
  return a === void 0 && (a = "/"), dx(r, s, a);
}
function dx(r, s, a, u) {
  let d = typeof s == "string" ? ps(s) : s,
    p = xu(d.pathname || "/", a);
  if (p == null) return null;
  let m = Jp(r);
  fx(m);
  let h = null;
  for (let v = 0; h == null && v < m.length; ++v) {
    let x = kx(p);
    h = Nx(m[v], x);
  }
  return h;
}
function Jp(r, s, a, u) {
  s === void 0 && (s = []), a === void 0 && (a = []), u === void 0 && (u = "");
  let d = (p, m, h) => {
    let v = {
      relativePath: h === void 0 ? p.path || "" : h,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: m,
      route: p,
    };
    v.relativePath.startsWith("/") &&
      (Qe(
        v.relativePath.startsWith(u),
        'Absolute route path "' +
          v.relativePath +
          '" nested under path ' +
          ('"' + u + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (v.relativePath = v.relativePath.slice(u.length)));
    let x = Jn([u, v.relativePath]),
      b = a.concat(v);
    p.children &&
      p.children.length > 0 &&
      (Qe(
        p.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + x + '".'),
      ),
      Jp(p.children, s, b, x)),
      !(p.path == null && !p.index) &&
        s.push({ path: x, score: xx(x, p.index), routesMeta: b });
  };
  return (
    r.forEach((p, m) => {
      var h;
      if (p.path === "" || !((h = p.path) != null && h.includes("?"))) d(p, m);
      else for (let v of em(p.path)) d(p, m, v);
    }),
    s
  );
}
function em(r) {
  let s = r.split("/");
  if (s.length === 0) return [];
  let [a, ...u] = s,
    d = a.endsWith("?"),
    p = a.replace(/\?$/, "");
  if (u.length === 0) return d ? [p, ""] : [p];
  let m = em(u.join("/")),
    h = [];
  return (
    h.push(...m.map((v) => (v === "" ? p : [p, v].join("/")))),
    d && h.push(...m),
    h.map((v) => (r.startsWith("/") && v === "" ? "/" : v))
  );
}
function fx(r) {
  r.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : wx(
          s.routesMeta.map((u) => u.childrenIndex),
          a.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
const px = /^:[\w-]+$/,
  mx = 3,
  hx = 2,
  gx = 1,
  yx = 10,
  vx = -2,
  If = (r) => r === "*";
function xx(r, s) {
  let a = r.split("/"),
    u = a.length;
  return (
    a.some(If) && (u += vx),
    s && (u += hx),
    a
      .filter((d) => !If(d))
      .reduce((d, p) => d + (px.test(p) ? mx : p === "" ? gx : yx), u)
  );
}
function wx(r, s) {
  return r.length === s.length && r.slice(0, -1).every((u, d) => u === s[d])
    ? r[r.length - 1] - s[s.length - 1]
    : 0;
}
function Nx(r, s, a) {
  let { routesMeta: u } = r,
    d = {},
    p = "/",
    m = [];
  for (let h = 0; h < u.length; ++h) {
    let v = u[h],
      x = h === u.length - 1,
      b = p === "/" ? s : s.slice(p.length) || "/",
      j = Sx(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: x },
        b,
      ),
      y = v.route;
    if (!j) return null;
    Object.assign(d, j.params),
      m.push({
        params: d,
        pathname: Jn([p, j.pathname]),
        pathnameBase: Px(Jn([p, j.pathnameBase])),
        route: y,
      }),
      j.pathnameBase !== "/" && (p = Jn([p, j.pathnameBase]));
  }
  return m;
}
function Sx(r, s) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [a, u] = jx(r.path, r.caseSensitive, r.end),
    d = s.match(a);
  if (!d) return null;
  let p = d[0],
    m = p.replace(/(.)\/+$/, "$1"),
    h = d.slice(1);
  return {
    params: u.reduce((x, b, j) => {
      let { paramName: y, isOptional: _ } = b;
      if (y === "*") {
        let R = h[j] || "";
        m = p.slice(0, p.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const L = h[j];
      return (
        _ && !L ? (x[y] = void 0) : (x[y] = (L || "").replace(/%2F/g, "/")), x
      );
    }, {}),
    pathname: p,
    pathnameBase: m,
    pattern: r,
  };
}
function jx(r, s, a) {
  s === void 0 && (s = !1),
    a === void 0 && (a = !0),
    Zp(
      r === "*" || !r.endsWith("*") || r.endsWith("/*"),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'),
    );
  let u = [],
    d =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (m, h, v) => (
            u.push({ paramName: h, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    r.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (d += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (d += "\\/*$")
        : r !== "" && r !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, s ? void 0 : "i"), u]
  );
}
function kx(r) {
  try {
    return r
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      Zp(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + s + ")."),
      ),
      r
    );
  }
}
function xu(r, s) {
  if (s === "/") return r;
  if (!r.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    u = r.charAt(a);
  return u && u !== "/" ? null : r.slice(a) || "/";
}
function bx(r, s) {
  s === void 0 && (s = "/");
  let {
    pathname: a,
    search: u = "",
    hash: d = "",
  } = typeof r == "string" ? ps(r) : r;
  return {
    pathname: a ? (a.startsWith("/") ? a : Cx(a, s)) : s,
    search: Tx(u),
    hash: Rx(d),
  };
}
function Cx(r, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((d) => {
      d === ".." ? a.length > 1 && a.pop() : d !== "." && a.push(d);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Wl(r, s, a, u) {
  return (
    "Cannot include a '" +
    r +
    "' character in a manually specified " +
    ("`to." +
      s +
      "` field [" +
      JSON.stringify(u) +
      "].  Please separate it out to the ") +
    ("`to." + a + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ex(r) {
  return r.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0),
  );
}
function tm(r, s) {
  let a = Ex(r);
  return s
    ? a.map((u, d) => (d === a.length - 1 ? u.pathname : u.pathnameBase))
    : a.map((u) => u.pathnameBase);
}
function nm(r, s, a, u) {
  u === void 0 && (u = !1);
  let d;
  typeof r == "string"
    ? (d = ps(r))
    : ((d = pi({}, r)),
      Qe(
        !d.pathname || !d.pathname.includes("?"),
        Wl("?", "pathname", "search", d),
      ),
      Qe(
        !d.pathname || !d.pathname.includes("#"),
        Wl("#", "pathname", "hash", d),
      ),
      Qe(!d.search || !d.search.includes("#"), Wl("#", "search", "hash", d)));
  let p = r === "" || d.pathname === "",
    m = p ? "/" : d.pathname,
    h;
  if (m == null) h = a;
  else {
    let j = s.length - 1;
    if (!u && m.startsWith("..")) {
      let y = m.split("/");
      for (; y[0] === ".."; ) y.shift(), (j -= 1);
      d.pathname = y.join("/");
    }
    h = j >= 0 ? s[j] : "/";
  }
  let v = bx(d, h),
    x = m && m !== "/" && m.endsWith("/"),
    b = (p || m === ".") && a.endsWith("/");
  return !v.pathname.endsWith("/") && (x || b) && (v.pathname += "/"), v;
}
const Jn = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Px = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Tx = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  Rx = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function Mx(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
const rm = ["post", "put", "patch", "delete"];
new Set(rm);
const _x = ["get", ...rm];
new Set(_x);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            for (var u in a)
              Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
          }
          return r;
        }),
    mi.apply(this, arguments)
  );
}
const wu = N.createContext(null),
  Ox = N.createContext(null),
  br = N.createContext(null),
  qa = N.createContext(null),
  Cr = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sm = N.createContext(null);
function Ax(r, s) {
  let { relative: a } = s === void 0 ? {} : s;
  vi() || Qe(!1);
  let { basename: u, navigator: d } = N.useContext(br),
    { hash: p, pathname: m, search: h } = am(r, { relative: a }),
    v = m;
  return (
    u !== "/" && (v = m === "/" ? u : Jn([u, m])),
    d.createHref({ pathname: v, search: h, hash: p })
  );
}
function vi() {
  return N.useContext(qa) != null;
}
function Er() {
  return vi() || Qe(!1), N.useContext(qa).location;
}
function im(r) {
  N.useContext(br).static || N.useLayoutEffect(r);
}
function Nu() {
  let { isDataRoute: r } = N.useContext(Cr);
  return r ? Kx() : Lx();
}
function Lx() {
  vi() || Qe(!1);
  let r = N.useContext(wu),
    { basename: s, future: a, navigator: u } = N.useContext(br),
    { matches: d } = N.useContext(Cr),
    { pathname: p } = Er(),
    m = JSON.stringify(tm(d, a.v7_relativeSplatPath)),
    h = N.useRef(!1);
  return (
    im(() => {
      h.current = !0;
    }),
    N.useCallback(
      function (x, b) {
        if ((b === void 0 && (b = {}), !h.current)) return;
        if (typeof x == "number") {
          u.go(x);
          return;
        }
        let j = nm(x, JSON.parse(m), p, b.relative === "path");
        r == null &&
          s !== "/" &&
          (j.pathname = j.pathname === "/" ? s : Jn([s, j.pathname])),
          (b.replace ? u.replace : u.push)(j, b.state, b);
      },
      [s, u, m, p, r],
    )
  );
}
function am(r, s) {
  let { relative: a } = s === void 0 ? {} : s,
    { future: u } = N.useContext(br),
    { matches: d } = N.useContext(Cr),
    { pathname: p } = Er(),
    m = JSON.stringify(tm(d, u.v7_relativeSplatPath));
  return N.useMemo(() => nm(r, JSON.parse(m), p, a === "path"), [r, m, p, a]);
}
function Dx(r, s) {
  return Ix(r, s);
}
function Ix(r, s, a, u) {
  vi() || Qe(!1);
  let { navigator: d } = N.useContext(br),
    { matches: p } = N.useContext(Cr),
    m = p[p.length - 1],
    h = m ? m.params : {};
  m && m.pathname;
  let v = m ? m.pathnameBase : "/";
  m && m.route;
  let x = Er(),
    b;
  if (s) {
    var j;
    let C = typeof s == "string" ? ps(s) : s;
    v === "/" || ((j = C.pathname) != null && j.startsWith(v)) || Qe(!1),
      (b = C);
  } else b = x;
  let y = b.pathname || "/",
    _ = y;
  if (v !== "/") {
    let C = v.replace(/^\//, "").split("/");
    _ = "/" + y.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let L = cx(r, { pathname: _ }),
    R = $x(
      L &&
        L.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, h, C.params),
            pathname: Jn([
              v,
              d.encodeLocation
                ? d.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? v
                : Jn([
                    v,
                    d.encodeLocation
                      ? d.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          }),
        ),
      p,
      a,
      u,
    );
  return s && R
    ? N.createElement(
        qa.Provider,
        {
          value: {
            location: mi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              b,
            ),
            navigationType: Xn.Pop,
          },
        },
        R,
      )
    : R;
}
function zx() {
  let r = Qx(),
    s = Mx(r)
      ? r.status + " " + r.statusText
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    a = r instanceof Error ? r.stack : null,
    d = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, s),
    a ? N.createElement("pre", { style: d }, a) : null,
    null,
  );
}
const Fx = N.createElement(zx, null);
class Ux extends N.Component {
  constructor(s) {
    super(s),
      (this.state = {
        location: s.location,
        revalidation: s.revalidation,
        error: s.error,
      });
  }
  static getDerivedStateFromError(s) {
    return { error: s };
  }
  static getDerivedStateFromProps(s, a) {
    return a.location !== s.location ||
      (a.revalidation !== "idle" && s.revalidation === "idle")
      ? { error: s.error, location: s.location, revalidation: s.revalidation }
      : {
          error: s.error !== void 0 ? s.error : a.error,
          location: a.location,
          revalidation: s.revalidation || a.revalidation,
        };
  }
  componentDidCatch(s, a) {
    console.error(
      "React Router caught the following error during render",
      s,
      a,
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Cr.Provider,
          { value: this.props.routeContext },
          N.createElement(sm.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Bx(r) {
  let { routeContext: s, match: a, children: u } = r,
    d = N.useContext(wu);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = a.route.id),
    N.createElement(Cr.Provider, { value: s }, u)
  );
}
function $x(r, s, a, u) {
  var d;
  if (
    (s === void 0 && (s = []),
    a === void 0 && (a = null),
    u === void 0 && (u = null),
    r == null)
  ) {
    var p;
    if (!a) return null;
    if (a.errors) r = a.matches;
    else if (
      (p = u) != null &&
      p.v7_partialHydration &&
      s.length === 0 &&
      !a.initialized &&
      a.matches.length > 0
    )
      r = a.matches;
    else return null;
  }
  let m = r,
    h = (d = a) == null ? void 0 : d.errors;
  if (h != null) {
    let b = m.findIndex(
      (j) => j.route.id && (h == null ? void 0 : h[j.route.id]) !== void 0,
    );
    b >= 0 || Qe(!1), (m = m.slice(0, Math.min(m.length, b + 1)));
  }
  let v = !1,
    x = -1;
  if (a && u && u.v7_partialHydration)
    for (let b = 0; b < m.length; b++) {
      let j = m[b];
      if (
        ((j.route.HydrateFallback || j.route.hydrateFallbackElement) && (x = b),
        j.route.id)
      ) {
        let { loaderData: y, errors: _ } = a,
          L =
            j.route.loader &&
            y[j.route.id] === void 0 &&
            (!_ || _[j.route.id] === void 0);
        if (j.route.lazy || L) {
          (v = !0), x >= 0 ? (m = m.slice(0, x + 1)) : (m = [m[0]]);
          break;
        }
      }
    }
  return m.reduceRight((b, j, y) => {
    let _,
      L = !1,
      R = null,
      C = null;
    a &&
      ((_ = h && j.route.id ? h[j.route.id] : void 0),
      (R = j.route.errorElement || Fx),
      v &&
        (x < 0 && y === 0
          ? (Gx("route-fallback"), (L = !0), (C = null))
          : x === y &&
            ((L = !0), (C = j.route.hydrateFallbackElement || null))));
    let D = s.concat(m.slice(0, y + 1)),
      I = () => {
        let z;
        return (
          _
            ? (z = R)
            : L
              ? (z = C)
              : j.route.Component
                ? (z = N.createElement(j.route.Component, null))
                : j.route.element
                  ? (z = j.route.element)
                  : (z = b),
          N.createElement(Bx, {
            match: j,
            routeContext: { outlet: b, matches: D, isDataRoute: a != null },
            children: z,
          })
        );
      };
    return a && (j.route.ErrorBoundary || j.route.errorElement || y === 0)
      ? N.createElement(Ux, {
          location: a.location,
          revalidation: a.revalidation,
          component: R,
          error: _,
          children: I(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
        })
      : I();
  }, null);
}
var om = (function (r) {
    return (
      (r.UseBlocker = "useBlocker"),
      (r.UseRevalidator = "useRevalidator"),
      (r.UseNavigateStable = "useNavigate"),
      r
    );
  })(om || {}),
  lm = (function (r) {
    return (
      (r.UseBlocker = "useBlocker"),
      (r.UseLoaderData = "useLoaderData"),
      (r.UseActionData = "useActionData"),
      (r.UseRouteError = "useRouteError"),
      (r.UseNavigation = "useNavigation"),
      (r.UseRouteLoaderData = "useRouteLoaderData"),
      (r.UseMatches = "useMatches"),
      (r.UseRevalidator = "useRevalidator"),
      (r.UseNavigateStable = "useNavigate"),
      (r.UseRouteId = "useRouteId"),
      r
    );
  })(lm || {});
function Hx(r) {
  let s = N.useContext(wu);
  return s || Qe(!1), s;
}
function Vx(r) {
  let s = N.useContext(Ox);
  return s || Qe(!1), s;
}
function Wx(r) {
  let s = N.useContext(Cr);
  return s || Qe(!1), s;
}
function um(r) {
  let s = Wx(),
    a = s.matches[s.matches.length - 1];
  return a.route.id || Qe(!1), a.route.id;
}
function Qx() {
  var r;
  let s = N.useContext(sm),
    a = Vx(),
    u = um();
  return s !== void 0 ? s : (r = a.errors) == null ? void 0 : r[u];
}
function Kx() {
  let { router: r } = Hx(om.UseNavigateStable),
    s = um(lm.UseNavigateStable),
    a = N.useRef(!1);
  return (
    im(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (d, p) {
        p === void 0 && (p = {}),
          a.current &&
            (typeof d == "number"
              ? r.navigate(d)
              : r.navigate(d, mi({ fromRouteId: s }, p)));
      },
      [r, s],
    )
  );
}
const zf = {};
function Gx(r, s, a) {
  zf[r] || (zf[r] = !0);
}
function xr(r) {
  Qe(!1);
}
function qx(r) {
  let {
    basename: s = "/",
    children: a = null,
    location: u,
    navigationType: d = Xn.Pop,
    navigator: p,
    static: m = !1,
    future: h,
  } = r;
  vi() && Qe(!1);
  let v = s.replace(/^\/*/, "/"),
    x = N.useMemo(
      () => ({
        basename: v,
        navigator: p,
        static: m,
        future: mi({ v7_relativeSplatPath: !1 }, h),
      }),
      [v, h, p, m],
    );
  typeof u == "string" && (u = ps(u));
  let {
      pathname: b = "/",
      search: j = "",
      hash: y = "",
      state: _ = null,
      key: L = "default",
    } = u,
    R = N.useMemo(() => {
      let C = xu(b, v);
      return C == null
        ? null
        : {
            location: { pathname: C, search: j, hash: y, state: _, key: L },
            navigationType: d,
          };
    }, [v, b, j, y, _, L, d]);
  return R == null
    ? null
    : N.createElement(
        br.Provider,
        { value: x },
        N.createElement(qa.Provider, { children: a, value: R }),
      );
}
function Yx(r) {
  let { children: s, location: a } = r;
  return Dx(ru(s), a);
}
new Promise(() => {});
function ru(r, s) {
  s === void 0 && (s = []);
  let a = [];
  return (
    N.Children.forEach(r, (u, d) => {
      if (!N.isValidElement(u)) return;
      let p = [...s, d];
      if (u.type === N.Fragment) {
        a.push.apply(a, ru(u.props.children, p));
        return;
      }
      u.type !== xr && Qe(!1), !u.props.index || !u.props.children || Qe(!1);
      let m = {
        id: u.props.id || p.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.ErrorBoundary != null || u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      u.props.children && (m.children = ru(u.props.children, p)), a.push(m);
    }),
    a
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            for (var u in a)
              Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
          }
          return r;
        }),
    su.apply(this, arguments)
  );
}
function Xx(r, s) {
  if (r == null) return {};
  var a = {},
    u = Object.keys(r),
    d,
    p;
  for (p = 0; p < u.length; p++)
    (d = u[p]), !(s.indexOf(d) >= 0) && (a[d] = r[d]);
  return a;
}
function Zx(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Jx(r, s) {
  return r.button === 0 && (!s || s === "_self") && !Zx(r);
}
function iu(r) {
  return (
    r === void 0 && (r = ""),
    new URLSearchParams(
      typeof r == "string" || Array.isArray(r) || r instanceof URLSearchParams
        ? r
        : Object.keys(r).reduce((s, a) => {
            let u = r[a];
            return s.concat(Array.isArray(u) ? u.map((d) => [a, d]) : [[a, u]]);
          }, []),
    )
  );
}
function e0(r, s) {
  let a = iu(r);
  return (
    s &&
      s.forEach((u, d) => {
        a.has(d) ||
          s.getAll(d).forEach((p) => {
            a.append(d, p);
          });
      }),
    a
  );
}
const t0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  n0 = "6";
try {
  window.__reactRouterVersion = n0;
} catch {}
const r0 = "startTransition",
  Ff = Sg[r0];
function s0(r) {
  let { basename: s, children: a, future: u, window: d } = r,
    p = N.useRef();
  p.current == null && (p.current = ox({ window: d, v5Compat: !0 }));
  let m = p.current,
    [h, v] = N.useState({ action: m.action, location: m.location }),
    { v7_startTransition: x } = u || {},
    b = N.useCallback(
      (j) => {
        x && Ff ? Ff(() => v(j)) : v(j);
      },
      [v, x],
    );
  return (
    N.useLayoutEffect(() => m.listen(b), [m, b]),
    N.createElement(qx, {
      basename: s,
      children: a,
      location: h.location,
      navigationType: h.action,
      navigator: m,
      future: u,
    })
  );
}
const i0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  a0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Xt = N.forwardRef(function (s, a) {
    let {
        onClick: u,
        relative: d,
        reloadDocument: p,
        replace: m,
        state: h,
        target: v,
        to: x,
        preventScrollReset: b,
        unstable_viewTransition: j,
      } = s,
      y = Xx(s, t0),
      { basename: _ } = N.useContext(br),
      L,
      R = !1;
    if (typeof x == "string" && a0.test(x) && ((L = x), i0))
      try {
        let z = new URL(window.location.href),
          H = x.startsWith("//") ? new URL(z.protocol + x) : new URL(x),
          q = xu(H.pathname, _);
        H.origin === z.origin && q != null
          ? (x = q + H.search + H.hash)
          : (R = !0);
      } catch {}
    let C = Ax(x, { relative: d }),
      D = o0(x, {
        replace: m,
        state: h,
        target: v,
        preventScrollReset: b,
        relative: d,
        unstable_viewTransition: j,
      });
    function I(z) {
      u && u(z), z.defaultPrevented || D(z);
    }
    return N.createElement(
      "a",
      su({}, y, { href: L || C, onClick: R || p ? u : I, ref: a, target: v }),
    );
  });
var Uf;
(function (r) {
  (r.UseScrollRestoration = "useScrollRestoration"),
    (r.UseSubmit = "useSubmit"),
    (r.UseSubmitFetcher = "useSubmitFetcher"),
    (r.UseFetcher = "useFetcher"),
    (r.useViewTransitionState = "useViewTransitionState");
})(Uf || (Uf = {}));
var Bf;
(function (r) {
  (r.UseFetcher = "useFetcher"),
    (r.UseFetchers = "useFetchers"),
    (r.UseScrollRestoration = "useScrollRestoration");
})(Bf || (Bf = {}));
function o0(r, s) {
  let {
      target: a,
      replace: u,
      state: d,
      preventScrollReset: p,
      relative: m,
      unstable_viewTransition: h,
    } = s === void 0 ? {} : s,
    v = Nu(),
    x = Er(),
    b = am(r, { relative: m });
  return N.useCallback(
    (j) => {
      if (Jx(j, a)) {
        j.preventDefault();
        let y = u !== void 0 ? u : $a(x) === $a(b);
        v(r, {
          replace: y,
          state: d,
          preventScrollReset: p,
          relative: m,
          unstable_viewTransition: h,
        });
      }
    },
    [x, v, b, u, d, a, r, p, m, h],
  );
}
function l0(r) {
  let s = N.useRef(iu(r)),
    a = N.useRef(!1),
    u = Er(),
    d = N.useMemo(() => e0(u.search, a.current ? null : s.current), [u.search]),
    p = Nu(),
    m = N.useCallback(
      (h, v) => {
        const x = iu(typeof h == "function" ? h(d) : h);
        (a.current = !0), p("?" + x, v);
      },
      [p, d],
    );
  return [d, m];
}
const u0 = Qa(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  dt = N.forwardRef(
    ({ className: r, variant: s, size: a, asChild: u = !1, ...d }, p) => {
      const m = u ? ui : "button";
      return l.jsx(m, {
        className: Ye(u0({ variant: s, size: a, className: r })),
        ref: p,
        ...d,
      });
    },
  );
dt.displayName = "Button";
const c0 = () =>
  l.jsxs("div", {
    className: "flex items-center space-x-3",
    children: [
      l.jsx("img", {
        src: "https://cdn.builder.io/api/v1/assets/fb56e24d07534bf98f10782753fb5534/swastik-logo-2-f1bb8b?format=webp&width=800",
        alt: "Client Logo",
        style: { width: "48px", height: "auto" },
      }),
      l.jsxs("div", {
        className: "flex flex-col",
        children: [
          l.jsx("h1", {
            className:
              "text-xl lg:text-2xl font-bold text-gray-900 leading-tight",
            children: "SWASTIK",
          }),
          l.jsx("p", {
            className:
              "text-sm lg:text-base text-medical-primary font-medium leading-tight",
            children: "IMAGING & DIAGNOSTICS",
          }),
        ],
      }),
    ],
  });
function d0() {
  const [r, s] = N.useState(!1),
    a = Er(),
    u = [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Book Appointment", path: "/book-appointment" },
    ],
    d = (p) => a.pathname === p;
  return l.jsxs("nav", {
    className: "bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50",
    children: [
      l.jsx("div", {
        className: "bg-medical-light border-b border-medical-accent",
        children: l.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "flex justify-between items-center py-2 text-sm",
            children: [
              l.jsxs("div", {
                className: "flex items-center space-x-6",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center space-x-2 text-medical-primary",
                    children: [
                      l.jsx(tr, { className: "w-4 h-4" }),
                      l.jsx("span", {
                        className: "font-medium",
                        children: "+91-7303034849",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className:
                      "hidden md:flex items-center space-x-2 text-medical-primary",
                    children: [
                      l.jsx(mu, { className: "w-4 h-4" }),
                      l.jsx("span", {
                        children:
                          "26/3, Ground Floor, Old Rajinder Nagar, New Delhi-110060",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("div", {
                className: "text-medical-primary font-medium",
                children: "Dr. Shweta Singh - M.B.B.S MD RADIOLOGY",
              }),
            ],
          }),
        }),
      }),
      l.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: l.jsxs("div", {
          className: "flex justify-between items-center py-4",
          children: [
            l.jsx(Xt, {
              to: "/",
              className: "flex-shrink-0",
              children: l.jsx(c0, {}),
            }),
            l.jsx("div", {
              className: "hidden md:flex items-center space-x-8",
              children: u.map((p) =>
                l.jsx(
                  Xt,
                  {
                    to: p.path,
                    className: `px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${d(p.path) ? "text-medical-primary bg-medical-light" : "text-gray-700 hover:text-medical-primary hover:bg-gray-50"}`,
                    children: p.name,
                  },
                  p.path,
                ),
              ),
            }),
            l.jsx("div", {
              className: "hidden md:block",
              children: l.jsx(Xt, {
                to: "/book-appointment",
                children: l.jsx(dt, {
                  className:
                    "bg-medical-primary hover:bg-medical-secondary text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200",
                  children: "Book Appointment",
                }),
              }),
            }),
            l.jsx("button", {
              onClick: () => s(!r),
              className:
                "md:hidden p-2 rounded-md text-gray-700 hover:text-medical-primary hover:bg-gray-50 transition-colors duration-200",
              children: r
                ? l.jsx(Op, { className: "w-6 h-6" })
                : l.jsx(by, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
      r &&
        l.jsx("div", {
          className: "md:hidden bg-white border-t border-gray-100",
          children: l.jsxs("div", {
            className: "px-4 py-4 space-y-2",
            children: [
              u.map((p) =>
                l.jsx(
                  Xt,
                  {
                    to: p.path,
                    onClick: () => s(!1),
                    className: `block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${d(p.path) ? "text-medical-primary bg-medical-light" : "text-gray-700 hover:text-medical-primary hover:bg-gray-50"}`,
                    children: p.name,
                  },
                  p.path,
                ),
              ),
              l.jsx("div", {
                className: "pt-2",
                children: l.jsx(Xt, {
                  to: "/book-appointment",
                  onClick: () => s(!1),
                  children: l.jsx(dt, {
                    className:
                      "w-full bg-medical-primary hover:bg-medical-secondary text-white py-2 rounded-lg font-medium",
                    children: "Book Appointment",
                  }),
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
function f0() {
  return l.jsx("footer", {
    className: "bg-gray-50 border-t border-gray-200",
    children: l.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
      children: [
        l.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [
            l.jsxs("div", {
              className: "lg:col-span-2",
              children: [
                l.jsx("h3", {
                  className: "text-lg font-semibold text-gray-900 mb-4",
                  children: "Contact Information",
                }),
                l.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-start space-x-3",
                      children: [
                        l.jsx(tr, {
                          className:
                            "w-5 h-5 text-medical-primary mt-0.5 flex-shrink-0",
                        }),
                        l.jsxs("div", {
                          children: [
                            l.jsx("p", {
                              className: "font-medium text-gray-900",
                              children: "+91-7303034849",
                            }),
                            l.jsx("p", {
                              className: "text-sm text-gray-600",
                              children: "Call for appointments",
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-start space-x-3",
                      children: [
                        l.jsx(pu, {
                          className:
                            "w-5 h-5 text-medical-primary mt-0.5 flex-shrink-0",
                        }),
                        l.jsxs("div", {
                          children: [
                            l.jsx("p", {
                              className: "font-medium text-gray-900",
                              children:
                                "swastikimaginganddiagnostics@gmail.com",
                            }),
                            l.jsx("p", {
                              className: "text-sm text-gray-600",
                              children: "Email us for inquiries",
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-start space-x-3",
                      children: [
                        l.jsx(mu, {
                          className:
                            "w-5 h-5 text-medical-primary mt-0.5 flex-shrink-0",
                        }),
                        l.jsxs("div", {
                          children: [
                            l.jsx("p", {
                              className: "font-medium text-gray-900",
                              children: "26/3, Ground Floor",
                            }),
                            l.jsx("p", {
                              className: "text-gray-700",
                              children: "Old Rajinder Nagar",
                            }),
                            l.jsx("p", {
                              className: "text-gray-700",
                              children: "New Delhi - 110060",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              children: [
                l.jsx("h3", {
                  className: "text-lg font-semibold text-gray-900 mb-4",
                  children: "Operating Hours",
                }),
                l.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        l.jsx(yi, {
                          className: "w-4 h-4 text-medical-primary",
                        }),
                        l.jsx("span", {
                          className: "text-sm text-gray-600",
                          children: "Monday - Saturday",
                        }),
                      ],
                    }),
                    l.jsx("p", {
                      className: "text-gray-900 font-medium",
                      children: "8:30 AM - 8:30 PM",
                    }),
                    l.jsxs("div", {
                      className: "mt-3",
                      children: [
                        l.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: "Sunday",
                        }),
                        l.jsx("p", {
                          className: "text-gray-900 font-medium",
                          children: "8:30 AM - 5:00 PM",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              children: [
                l.jsx("h3", {
                  className: "text-lg font-semibold text-gray-900 mb-4",
                  children: "Quick Links",
                }),
                l.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    l.jsx("a", {
                      href: "/",
                      className:
                        "block text-gray-600 hover:text-medical-primary transition-colors duration-200",
                      children: "Home",
                    }),
                    l.jsx("a", {
                      href: "/about",
                      className:
                        "block text-gray-600 hover:text-medical-primary transition-colors duration-200",
                      children: "About Us",
                    }),
                    l.jsx("a", {
                      href: "/services",
                      className:
                        "block text-gray-600 hover:text-medical-primary transition-colors duration-200",
                      children: "Services",
                    }),
                    l.jsx("a", {
                      href: "/book-appointment",
                      className:
                        "block text-gray-600 hover:text-medical-primary transition-colors duration-200",
                      children: "Book Appointment",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        l.jsx("div", {
          className: "mt-8 pt-8 border-t border-gray-200",
          children: l.jsxs("div", {
            className: "flex flex-col md:flex-row justify-between items-center",
            children: [
              l.jsxs("div", {
                className: "text-center md:text-left",
                children: [
                  l.jsx("p", {
                    className: "text-gray-600 text-sm",
                    children:
                      "© 2024 Swastik Imaging & Diagnostics. All rights reserved.",
                  }),
                  l.jsx("p", {
                    className: "text-gray-500 text-xs mt-1",
                    children:
                      "Led by Dr. Shweta Singh - M.B.B.S MD RADIOLOGY (GOLD MEDALIST)",
                  }),
                ],
              }),
              l.jsx("div", {
                className: "mt-4 md:mt-0",
                children: l.jsx("p", {
                  className: "text-medical-primary font-medium text-sm",
                  children: "Accurate. Affordable. Reliable Diagnostics.",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Ie = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("div", {
    ref: a,
    className: Ye(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      r,
    ),
    ...s,
  }),
);
Ie.displayName = "Card";
const qt = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("div", {
    ref: a,
    className: Ye("flex flex-col space-y-1.5 p-6", r),
    ...s,
  }),
);
qt.displayName = "CardHeader";
const Yt = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("h3", {
    ref: a,
    className: Ye("text-2xl font-semibold leading-none tracking-tight", r),
    ...s,
  }),
);
Yt.displayName = "CardTitle";
const p0 = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("p", {
    ref: a,
    className: Ye("text-sm text-muted-foreground", r),
    ...s,
  }),
);
p0.displayName = "CardDescription";
const ze = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("div", { ref: a, className: Ye("p-6 pt-0", r), ...s }),
);
ze.displayName = "CardContent";
const m0 = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("div", {
    ref: a,
    className: Ye("flex items-center p-6 pt-0", r),
    ...s,
  }),
);
m0.displayName = "CardFooter";
const h0 = Qa(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function Zn({ className: r, variant: s, ...a }) {
  return l.jsx("div", { className: Ye(h0({ variant: s }), r), ...a });
}
function g0() {
  const r = [
      {
        icon: _p,
        title: "Blood Tests",
        description: "Comprehensive blood analysis and screening",
      },
      {
        icon: Zl,
        title: "Urine Tests",
        description: "Complete urinalysis and microscopic examination",
      },
      {
        icon: Rp,
        title: "X-Ray",
        description: "Digital radiography for accurate diagnosis",
      },
      {
        icon: xy,
        title: "ECG",
        description: "Electrocardiogram for heart health monitoring",
      },
    ],
    s = [
      {
        icon: hu,
        title: "Accurate Results",
        description: "State-of-the-art equipment ensures precise diagnostics",
      },
      {
        icon: yi,
        title: "Quick Turnaround",
        description: "Fast processing with same-day results for most tests",
      },
      {
        icon: Ua,
        title: "Expert Care",
        description: "Led by experienced medical professionals",
      },
      {
        icon: Tt,
        title: "Affordable Pricing",
        description: "Quality healthcare at competitive prices",
      },
    ],
    a = [
      {
        name: "Raj Kumar",
        location: "New Delhi",
        rating: 5,
        comment:
          "Excellent service and very accurate results. Dr. Shweta Singh is very professional and caring.",
      },
      {
        name: "Priya Sharma",
        location: "Delhi",
        rating: 5,
        comment:
          "Quick and efficient service. The staff is friendly and the facility is very clean.",
      },
      {
        name: "Amit Singh",
        location: "New Delhi",
        rating: 5,
        comment:
          "Affordable prices without compromising on quality. Highly recommended for all diagnostic needs.",
      },
    ];
  return l.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      l.jsx("section", {
        className:
          "relative bg-gradient-to-br from-medical-light via-white to-medical-light",
        children: l.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
          children: l.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
              l.jsxs("div", {
                className: "space-y-8",
                children: [
                  l.jsxs("div", {
                    children: [
                      l.jsx(Zn, {
                        className:
                          "bg-medical-accent text-medical-primary border-medical-secondary mb-4",
                        children: "Led by Dr. Shweta Singh - Gold Medalist",
                      }),
                      l.jsxs("h1", {
                        className:
                          "text-4xl lg:text-6xl font-bold text-gray-900 leading-tight",
                        children: [
                          "Accurate. Affordable.",
                          " ",
                          l.jsx("span", {
                            className: "text-medical-primary",
                            children: "Reliable",
                          }),
                          " ",
                          "Diagnostics.",
                        ],
                      }),
                      l.jsx("p", {
                        className: "text-xl text-gray-600 mt-6 leading-relaxed",
                        children:
                          "Your trusted partner in healthcare diagnostics. We provide comprehensive testing services with state-of-the-art equipment and expert medical supervision.",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      l.jsx(Xt, {
                        to: "/book-appointment",
                        children: l.jsxs(dt, {
                          size: "lg",
                          className:
                            "bg-medical-primary hover:bg-medical-secondary text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200",
                          children: [
                            "Book Your Appointment",
                            l.jsx(li, { className: "ml-2 w-5 h-5" }),
                          ],
                        }),
                      }),
                      l.jsx("a", {
                        href: "tel:+91-7303034849",
                        children: l.jsxs(dt, {
                          variant: "outline",
                          size: "lg",
                          className:
                            "border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200",
                          children: [
                            l.jsx(tr, { className: "mr-2 w-5 h-5" }),
                            "Call Now",
                          ],
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex flex-wrap items-center gap-6 pt-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          l.jsx(Tt, {
                            className: "w-5 h-5 text-medical-primary",
                          }),
                          l.jsx("span", {
                            className: "text-gray-600",
                            children: "ISO Certified",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          l.jsx(Tt, {
                            className: "w-5 h-5 text-medical-primary",
                          }),
                          l.jsx("span", {
                            className: "text-gray-600",
                            children: "Same Day Results",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          l.jsx(Tt, {
                            className: "w-5 h-5 text-medical-primary",
                          }),
                          l.jsx("span", {
                            className: "text-gray-600",
                            children: "Expert Supervision",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("div", {
                className: "relative",
                children: l.jsx("div", {
                  className:
                    "bg-white rounded-2xl shadow-2xl p-8 border border-gray-100",
                  children: l.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      l.jsxs("div", {
                        className: "text-center",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-24 h-24 mx-auto mb-4 bg-medical-light rounded-full flex items-center justify-center",
                            children: l.jsx(gu, {
                              className: "w-12 h-12 text-medical-primary",
                            }),
                          }),
                          l.jsx("h3", {
                            className: "text-xl font-semibold text-gray-900",
                            children: "Professional Care",
                          }),
                          l.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Expert medical team dedicated to your health",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className:
                              "bg-medical-light rounded-lg p-4 text-center",
                            children: [
                              l.jsx("div", {
                                className:
                                  "text-2xl font-bold text-medical-primary",
                                children: "1000+",
                              }),
                              l.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Happy Patients",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "bg-medical-light rounded-lg p-4 text-center",
                            children: [
                              l.jsx("div", {
                                className:
                                  "text-2xl font-bold text-medical-primary",
                                children: "15+",
                              }),
                              l.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Test Categories",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-gray-50",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "About Swastik Imaging & Diagnostics",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600 max-w-3xl mx-auto",
                  children:
                    "We are committed to providing accurate, affordable, and reliable diagnostic services to the community, led by experienced medical professionals.",
                }),
              ],
            }),
            l.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                l.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    l.jsx("h3", {
                      className: "text-2xl font-semibold text-gray-900",
                      children: "Your Health, Our Priority",
                    }),
                    l.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children:
                        "At Swastik Imaging & Diagnostics, we understand that accurate diagnosis is the foundation of effective treatment. Our state-of-the-art facility in New Delhi is equipped with the latest diagnostic equipment and staffed by experienced medical professionals.",
                    }),
                    l.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children:
                        "Led by Dr. Shweta Singh, a gold medalist in Radiology, our team is dedicated to providing you with precise results and compassionate care. We believe quality healthcare should be accessible to everyone.",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: s.map((u, d) =>
                    l.jsx(
                      Ie,
                      {
                        className:
                          "border-gray-200 hover:shadow-lg transition-shadow duration-200",
                        children: l.jsxs(ze, {
                          className: "p-6 text-center",
                          children: [
                            l.jsx(u.icon, {
                              className:
                                "w-8 h-8 text-medical-primary mx-auto mb-3",
                            }),
                            l.jsx("h4", {
                              className: "font-semibold text-gray-900 mb-2",
                              children: u.title,
                            }),
                            l.jsx("p", {
                              className: "text-sm text-gray-600",
                              children: u.description,
                            }),
                          ],
                        }),
                      },
                      d,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-white",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "Our Diagnostic Services",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Comprehensive range of diagnostic tests and imaging services to meet all your healthcare needs.",
                }),
              ],
            }),
            l.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
              children: r.map((u, d) =>
                l.jsx(
                  Ie,
                  {
                    className:
                      "border-gray-200 hover:border-medical-primary hover:shadow-lg transition-all duration-200 group",
                    children: l.jsxs(ze, {
                      className: "p-6 text-center",
                      children: [
                        l.jsx("div", {
                          className:
                            "w-16 h-16 mx-auto mb-4 bg-medical-light rounded-full flex items-center justify-center group-hover:bg-medical-primary transition-colors duration-200",
                          children: l.jsx(u.icon, {
                            className:
                              "w-8 h-8 text-medical-primary group-hover:text-white",
                          }),
                        }),
                        l.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900 mb-2",
                          children: u.title,
                        }),
                        l.jsx("p", {
                          className: "text-gray-600 text-sm",
                          children: u.description,
                        }),
                      ],
                    }),
                  },
                  d,
                ),
              ),
            }),
            l.jsx("div", {
              className: "text-center",
              children: l.jsx(Xt, {
                to: "/services",
                children: l.jsxs(dt, {
                  className:
                    "bg-medical-primary hover:bg-medical-secondary text-white px-8 py-3 rounded-lg font-medium",
                  children: [
                    "View All Services",
                    l.jsx(li, { className: "ml-2 w-4 h-4" }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-gray-50",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "What Our Patients Say",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children:
                    "Trusted by hundreds of patients for accurate and reliable diagnostics.",
                }),
              ],
            }),
            l.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: a.map((u, d) =>
                l.jsx(
                  Ie,
                  {
                    className: "border-gray-200 bg-white",
                    children: l.jsxs(ze, {
                      className: "p-6",
                      children: [
                        l.jsx("div", {
                          className: "flex items-center mb-4",
                          children: [...Array(u.rating)].map((p, m) =>
                            l.jsx(
                              Mp,
                              {
                                className:
                                  "w-5 h-5 text-yellow-400 fill-current",
                              },
                              m,
                            ),
                          ),
                        }),
                        l.jsxs("p", {
                          className: "text-gray-600 mb-4 leading-relaxed",
                          children: ['"', u.comment, '"'],
                        }),
                        l.jsxs("div", {
                          children: [
                            l.jsx("p", {
                              className: "font-semibold text-gray-900",
                              children: u.name,
                            }),
                            l.jsx("p", {
                              className: "text-sm text-gray-500",
                              children: u.location,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  d,
                ),
              ),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-medical-primary",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            l.jsx("h2", {
              className: "text-3xl lg:text-4xl font-bold text-white mb-4",
              children: "Ready to Book Your Diagnostic Test?",
            }),
            l.jsx("p", {
              className: "text-xl text-white/90 mb-8 max-w-2xl mx-auto",
              children:
                "Take the first step towards better health. Book your appointment today and experience our professional, caring service.",
            }),
            l.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                l.jsx(Xt, {
                  to: "/book-appointment",
                  children: l.jsxs(dt, {
                    size: "lg",
                    className:
                      "bg-white text-medical-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg shadow-lg",
                    children: [
                      "Book Appointment Now",
                      l.jsx(li, { className: "ml-2 w-5 h-5" }),
                    ],
                  }),
                }),
                l.jsx("a", {
                  href: "tel:+91-7303034849",
                  children: l.jsxs(dt, {
                    size: "lg",
                    className:
                      "bg-white text-medical-primary hover:bg-gray-50 border-2 border-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg",
                    children: [
                      l.jsx(tr, { className: "mr-2 w-5 h-5" }),
                      "Call +91-7303034849",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function y0() {
  const r = [
      {
        icon: hu,
        title: "Accuracy & Precision",
        description:
          "We ensure precise and reliable diagnostic results using state-of-the-art equipment and expert analysis.",
      },
      {
        icon: Ua,
        title: "Compassionate Care",
        description:
          "Every patient receives personalized attention and care in a comfortable, supportive environment.",
      },
      {
        icon: yi,
        title: "Timely Service",
        description:
          "We understand the importance of quick results and provide same-day reports for most tests.",
      },
      {
        icon: Nf,
        title: "Affordable Healthcare",
        description:
          "Quality diagnostic services at competitive prices, making healthcare accessible to everyone.",
      },
    ],
    s = [
      {
        icon: Sf,
        number: "1000+",
        title: "Happy Patients",
        description: "Satisfied patients who trust us with their health",
      },
      {
        icon: wy,
        number: "10+",
        title: "Years Experience",
        description: "Combined experience in diagnostic healthcare",
      },
      {
        icon: Zl,
        number: "20+",
        title: "Test Categories",
        description: "Comprehensive range of diagnostic services",
      },
      {
        icon: Tt,
        number: "99.8%",
        title: "Accuracy Rate",
        description: "Precise results with advanced technology",
      },
    ],
    a = [
      {
        name: "Dr. Shweta Singh",
        qualification: "M.B.B.S MD RADIOLOGY (GOLD MEDALIST)",
        specialization: "Chief Radiologist & Medical Director",
        experience: "10+ years",
        description:
          "Gold medalist in Radiology with extensive experience in diagnostic imaging and interventional radiology.",
      },
      {
        name: "Laboratory Team",
        qualification: "Certified Lab Technicians",
        specialization: "Blood & Urine Analysis",
        experience: "10+ years",
        description:
          "Experienced team of certified laboratory technicians ensuring accurate test results.",
      },
      {
        name: "Imaging Specialists",
        qualification: "Certified Radiologic Technologists",
        specialization: "CT, MRI & Ultrasound",
        experience: "8+ years",
        description:
          "Skilled imaging specialists trained in advanced diagnostic equipment operation.",
      },
    ],
    u = [
      {
        icon: Ny,
        title: "Advanced Imaging",
        description: "CT Scan, MRI, Digital X-Ray, and Ultrasound facilities",
      },
      {
        icon: Zl,
        title: "Modern Laboratory",
        description: "Fully automated laboratory with latest analyzers",
      },
      {
        icon: Ua,
        title: "Cardiac Center",
        description: "ECG, 2D Echo, and Stress Echo capabilities",
      },
      {
        icon: Sy,
        title: "Comfortable Environment",
        description: "Patient-friendly facility with modern amenities",
      },
    ];
  return l.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      l.jsx("section", {
        className:
          "bg-gradient-to-br from-medical-light via-white to-medical-light py-16 lg:py-24",
        children: l.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx(Zn, {
                className:
                  "bg-medical-accent text-medical-primary border-medical-secondary mb-4",
                children: "About Our Center",
              }),
              l.jsx("h1", {
                className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                children: "Committed to Excellence in Diagnostic Healthcare",
              }),
              l.jsx("p", {
                className: "text-xl text-gray-600 max-w-4xl mx-auto",
                children:
                  "At Swastik Imaging & Diagnostics, we combine cutting-edge technology with compassionate care to provide accurate, affordable, and reliable diagnostic services to our community.",
              }),
            ],
          }),
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24",
        children: l.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
            children: [
              l.jsx(Ie, {
                className: "border-medical-accent bg-medical-light",
                children: l.jsxs(ze, {
                  className: "p-8",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center mb-6",
                      children: [
                        l.jsx(Nf, {
                          className: "w-8 h-8 text-medical-primary mr-3",
                        }),
                        l.jsx("h2", {
                          className: "text-2xl font-bold text-gray-900",
                          children: "Our Mission",
                        }),
                      ],
                    }),
                    l.jsx("p", {
                      className: "text-gray-700 leading-relaxed text-lg",
                      children:
                        "To provide world-class diagnostic services that enable early detection, accurate diagnosis, and effective treatment planning while ensuring accessibility and affordability for all members of our community.",
                    }),
                  ],
                }),
              }),
              l.jsx(Ie, {
                className: "border-medical-accent bg-white",
                children: l.jsxs(ze, {
                  className: "p-8",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center mb-6",
                      children: [
                        l.jsx(Tp, {
                          className: "w-8 h-8 text-medical-primary mr-3",
                        }),
                        l.jsx("h2", {
                          className: "text-2xl font-bold text-gray-900",
                          children: "Our Vision",
                        }),
                      ],
                    }),
                    l.jsx("p", {
                      className: "text-gray-700 leading-relaxed text-lg",
                      children:
                        "To be the leading diagnostic center in Delhi, recognized for our commitment to excellence, innovation in healthcare technology, and unwavering dedication to patient care and satisfaction.",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-gray-50",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "Meet Our Medical Director",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children: "Leading with expertise and compassion",
                }),
              ],
            }),
            l.jsx(Ie, {
              className: "max-w-4xl mx-auto",
              children: l.jsx(ze, {
                className: "p-8 lg:p-12",
                children: l.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-3 gap-8 items-center",
                  children: [
                    l.jsxs("div", {
                      className: "lg:col-span-1 text-center",
                      children: [
                        l.jsx("div", {
                          className:
                            "w-32 h-32 mx-auto mb-6 bg-medical-light rounded-full flex items-center justify-center",
                          children: l.jsx(gu, {
                            className: "w-16 h-16 text-medical-primary",
                          }),
                        }),
                        l.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            l.jsxs(Zn, {
                              className:
                                "bg-yellow-100 text-yellow-800 border-yellow-300",
                              children: [
                                l.jsx(Mp, { className: "w-3 h-3 mr-1" }),
                                "Gold Medalist",
                              ],
                            }),
                            l.jsx(Zn, {
                              className:
                                "bg-medical-accent text-medical-primary border-medical-secondary ml-2",
                              children: "ISO Certified",
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "lg:col-span-2 space-y-6",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsx("h3", {
                              className:
                                "text-2xl lg:text-3xl font-bold text-gray-900 mb-2",
                              children: "Dr. Shweta Singh",
                            }),
                            l.jsx("p", {
                              className:
                                "text-lg text-medical-primary font-semibold mb-1",
                              children: "M.B.B.S MD RADIOLOGY (GOLD MEDALIST)",
                            }),
                            l.jsx("p", {
                              className: "text-gray-600",
                              children: "Chief Radiologist & Medical Director",
                            }),
                            l.jsx("p", {
                              className: "text-gray-600",
                              children: "Reg No DMC 95495",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            l.jsx("p", {
                              className: "text-gray-700 leading-relaxed",
                              children:
                                "Dr. Shweta Singh is a highly accomplished radiologist with over 10 years of experience in diagnostic imaging and interventional radiology. As a gold medalist in her MD Radiology, she brings exceptional expertise and precision to every diagnosis.",
                            }),
                            l.jsx("p", {
                              className: "text-gray-700 leading-relaxed",
                              children:
                                "Her commitment to staying updated with the latest advancements in medical imaging technology ensures that patients receive the most accurate and comprehensive diagnostic services available.",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-wrap gap-4",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex items-center text-medical-primary",
                              children: [
                                l.jsx(Tt, { className: "w-5 h-5 mr-2" }),
                                l.jsx("span", {
                                  className: "text-sm font-medium",
                                  children: "10+ Years Experience",
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className:
                                "flex items-center text-medical-primary",
                              children: [
                                l.jsx(Tt, { className: "w-5 h-5 mr-2" }),
                                l.jsx("span", {
                                  className: "text-sm font-medium",
                                  children: "Gold Medalist MD",
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className:
                                "flex items-center text-medical-primary",
                              children: [
                                l.jsx(Tt, { className: "w-5 h-5 mr-2" }),
                                l.jsx("span", {
                                  className: "text-sm font-medium",
                                  children: "DMC Registered",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "Our Core Values",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children: "The principles that guide everything we do",
                }),
              ],
            }),
            l.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
              children: r.map((d, p) =>
                l.jsx(
                  Ie,
                  {
                    className:
                      "border-gray-200 hover:border-medical-primary hover:shadow-lg transition-all duration-200 group",
                    children: l.jsxs(ze, {
                      className: "p-6 text-center",
                      children: [
                        l.jsx("div", {
                          className:
                            "w-16 h-16 mx-auto mb-4 bg-medical-light rounded-full flex items-center justify-center group-hover:bg-medical-primary transition-colors duration-200",
                          children: l.jsx(d.icon, {
                            className:
                              "w-8 h-8 text-medical-primary group-hover:text-white",
                          }),
                        }),
                        l.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900 mb-3",
                          children: d.title,
                        }),
                        l.jsx("p", {
                          className: "text-gray-600 text-sm leading-relaxed",
                          children: d.description,
                        }),
                      ],
                    }),
                  },
                  p,
                ),
              ),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-gray-50",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "Our Achievements",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children: "Numbers that reflect our commitment to excellence",
                }),
              ],
            }),
            l.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
              children: s.map((d, p) =>
                l.jsx(
                  Ie,
                  {
                    className: "border-gray-200 bg-white",
                    children: l.jsxs(ze, {
                      className: "p-6 text-center",
                      children: [
                        l.jsx(d.icon, {
                          className:
                            "w-12 h-12 text-medical-primary mx-auto mb-4",
                        }),
                        l.jsx("div", {
                          className:
                            "text-3xl font-bold text-medical-primary mb-2",
                          children: d.number,
                        }),
                        l.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900 mb-2",
                          children: d.title,
                        }),
                        l.jsx("p", {
                          className: "text-gray-600 text-sm",
                          children: d.description,
                        }),
                      ],
                    }),
                  },
                  p,
                ),
              ),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "Our Facilities",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children:
                    "State-of-the-art equipment and comfortable environment",
                }),
              ],
            }),
            l.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8",
              children: u.map((d, p) =>
                l.jsx(
                  Ie,
                  {
                    className:
                      "border-gray-200 hover:shadow-lg transition-shadow duration-200",
                    children: l.jsx(ze, {
                      className: "p-6",
                      children: l.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center flex-shrink-0",
                            children: l.jsx(d.icon, {
                              className: "w-6 h-6 text-medical-primary",
                            }),
                          }),
                          l.jsxs("div", {
                            children: [
                              l.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-900 mb-2",
                                children: d.title,
                              }),
                              l.jsx("p", {
                                className: "text-gray-600",
                                children: d.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  p,
                ),
              ),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-gray-50",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "Our Expert Team",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children:
                    "Experienced professionals dedicated to your health",
                }),
              ],
            }),
            l.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: a.map((d, p) =>
                l.jsx(
                  Ie,
                  {
                    className: "border-gray-200 bg-white",
                    children: l.jsxs(ze, {
                      className: "p-6",
                      children: [
                        l.jsxs("div", {
                          className: "text-center mb-4",
                          children: [
                            l.jsx("div", {
                              className:
                                "w-16 h-16 mx-auto mb-4 bg-medical-light rounded-full flex items-center justify-center",
                              children: l.jsx(Sf, {
                                className: "w-8 h-8 text-medical-primary",
                              }),
                            }),
                            l.jsx("h3", {
                              className:
                                "text-lg font-semibold text-gray-900 mb-1",
                              children: d.name,
                            }),
                            l.jsx("p", {
                              className:
                                "text-medical-primary font-medium text-sm mb-1",
                              children: d.qualification,
                            }),
                            l.jsx("p", {
                              className: "text-gray-600 text-sm mb-1",
                              children: d.specialization,
                            }),
                            l.jsx(Zn, {
                              variant: "secondary",
                              className: "text-xs",
                              children: d.experience,
                            }),
                          ],
                        }),
                        l.jsx("p", {
                          className: "text-gray-600 text-sm text-center",
                          children: d.description,
                        }),
                      ],
                    }),
                  },
                  p,
                ),
              ),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-medical-primary",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-12",
              children: [
                l.jsx("h2", {
                  className: "text-3xl lg:text-4xl font-bold text-white mb-4",
                  children: "Why Choose Swastik Imaging & Diagnostics?",
                }),
                l.jsx("p", {
                  className: "text-xl text-white/90 max-w-3xl mx-auto",
                  children:
                    "Experience the difference of personalized healthcare with cutting-edge technology",
                }),
              ],
            }),
            l.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
              children: [
                "Gold Medalist Radiologist",
                "10+ Years of Experience",
                "State-of-the-art Equipment",
                "Same Day Results",
                "Affordable Pricing",
                "ISO Certified Center",
                "Comprehensive Services",
                "Convenient Location",
                "Expert Medical Team",
              ].map((d, p) =>
                l.jsxs(
                  "div",
                  {
                    className: "flex items-center space-x-3",
                    children: [
                      l.jsx(Tt, {
                        className: "w-5 h-5 text-white flex-shrink-0",
                      }),
                      l.jsx("span", { className: "text-white", children: d }),
                    ],
                  },
                  p,
                ),
              ),
            }),
            l.jsx("div", {
              className: "text-center",
              children: l.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  l.jsx("a", {
                    href: "/book-appointment",
                    children: l.jsxs(dt, {
                      size: "lg",
                      className:
                        "bg-white text-medical-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg shadow-lg",
                      children: [
                        "Book Your Appointment",
                        l.jsx(li, { className: "ml-2 w-5 h-5" }),
                      ],
                    }),
                  }),
                  l.jsx("a", {
                    href: "tel:+91-7303034849",
                    children: l.jsxs(dt, {
                      size: "lg",
                      className:
                        "bg-white text-medical-primary hover:bg-gray-50 border-2 border-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg",
                      children: [
                        l.jsx(tr, { className: "mr-2 w-5 h-5" }),
                        "Call +91-7303034849",
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function v0() {
  const r = [
      {
        title: "Ultrasound & Imaging",
        icon: Tp,
        color: "bg-blue-50 border-blue-200",
        iconColor: "text-blue-600",
        services: [
          "Ultrasound",
          "Color Doppler",
          "Level II Scans",
          "3D/4D Ultrasound",
          "TVS and TRUS",
          "USG Guided FNAC and BIOPSY",
        ],
      },
      {
        title: "Advanced Radiology",
        icon: Rp,
        color: "bg-green-50 border-green-200",
        iconColor: "text-green-600",
        services: ["CT Scan", "MRI Scan", "X-Ray", "Interventional Radiology"],
      },
      {
        title: "Cardiac Diagnostics",
        icon: Ua,
        color: "bg-red-50 border-red-200",
        iconColor: "text-red-600",
        services: ["ECG", "2D ECHO", "Stress ECHO"],
      },
      {
        title: "Laboratory Tests",
        icon: _p,
        color: "bg-purple-50 border-purple-200",
        iconColor: "text-purple-600",
        services: [
          "All Blood Tests",
          "Complete Blood Count (CBC)",
          "Lipid Profile",
          "Liver Function Tests",
          "Kidney Function Tests",
          "Thyroid Function Tests",
          "Diabetes Panel",
          "Tumor Markers",
        ],
      },
      {
        title: "Health Packages",
        icon: hu,
        color: "bg-orange-50 border-orange-200",
        iconColor: "text-orange-600",
        services: [
          "Health Check Up",
          "Executive Health Package",
          "Diabetes Screening",
          "Cardiac Health Package",
          "Women's Health Package",
          "Senior Citizen Package",
        ],
      },
      {
        title: "Consultation",
        icon: gu,
        color: "bg-teal-50 border-teal-200",
        iconColor: "text-teal-600",
        services: [
          "Consultation",
          "Report Analysis",
          "Second Opinion",
          "Health Counseling",
        ],
      },
    ],
    s = [
      "State-of-the-art equipment",
      "Same day results for most tests",
      "Expert radiologist supervision",
      "Affordable pricing",
      "Digital reports",
      "Online report access",
    ];
  return l.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      l.jsx("section", {
        className:
          "bg-gradient-to-br from-medical-light via-white to-medical-light py-16 lg:py-24",
        children: l.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx(Zn, {
                className:
                  "bg-medical-accent text-medical-primary border-medical-secondary mb-4",
                children: "Our Comprehensive Services",
              }),
              l.jsx("h1", {
                className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                children: "Complete Diagnostic Solutions",
              }),
              l.jsx("p", {
                className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8",
                children:
                  "From routine blood tests to advanced imaging, we offer a comprehensive range of diagnostic services with cutting-edge technology and expert medical supervision.",
              }),
              l.jsx("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto",
                children: s.map((a, u) =>
                  l.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow-sm",
                      children: [
                        l.jsx(Tt, {
                          className:
                            "w-4 h-4 text-medical-primary flex-shrink-0",
                        }),
                        l.jsx("span", {
                          className: "text-sm text-gray-700",
                          children: a,
                        }),
                      ],
                    },
                    u,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24",
        children: l.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: r.map((a, u) =>
              l.jsx(
                Ie,
                {
                  className: `${a.color} hover:shadow-lg transition-all duration-200 group`,
                  children: l.jsxs(ze, {
                    className: "p-6",
                    children: [
                      l.jsxs("div", {
                        className: "text-center mb-6",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200",
                            children: l.jsx(a.icon, {
                              className: `w-8 h-8 ${a.iconColor}`,
                            }),
                          }),
                          l.jsx("h3", {
                            className:
                              "text-xl font-semibold text-gray-900 mb-2",
                            children: a.title,
                          }),
                        ],
                      }),
                      l.jsx("ul", {
                        className: "space-y-2",
                        children: a.services.map((d, p) =>
                          l.jsxs(
                            "li",
                            {
                              className:
                                "flex items-center space-x-2 text-gray-700",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-medical-primary rounded-full flex-shrink-0",
                                }),
                                l.jsx("span", {
                                  className: "text-sm",
                                  children: d,
                                }),
                              ],
                            },
                            p,
                          ),
                        ),
                      }),
                    ],
                  }),
                },
                u,
              ),
            ),
          }),
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-gray-50",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            l.jsxs("div", {
              className: "text-center mb-16",
              children: [
                l.jsx("h2", {
                  className:
                    "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                  children: "How We Serve You",
                }),
                l.jsx("p", {
                  className: "text-xl text-gray-600",
                  children:
                    "Simple, efficient process for all your diagnostic needs",
                }),
              ],
            }),
            l.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-8",
              children: [
                {
                  step: "01",
                  title: "Book Appointment",
                  description: "Call or visit to schedule your test",
                },
                {
                  step: "02",
                  title: "Sample Collection",
                  description: "Quick and comfortable sample collection",
                },
                {
                  step: "03",
                  title: "Analysis",
                  description: "Advanced equipment and expert analysis",
                },
                {
                  step: "04",
                  title: "Report Delivery",
                  description: "Digital reports delivered on time",
                },
              ].map((a, u) =>
                l.jsxs(
                  "div",
                  {
                    className: "text-center",
                    children: [
                      l.jsx("div", {
                        className:
                          "w-16 h-16 mx-auto mb-4 bg-medical-primary rounded-full flex items-center justify-center",
                        children: l.jsx("span", {
                          className: "text-white font-bold text-lg",
                          children: a.step,
                        }),
                      }),
                      l.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: a.title,
                      }),
                      l.jsx("p", {
                        className: "text-gray-600 text-sm",
                        children: a.description,
                      }),
                    ],
                  },
                  u,
                ),
              ),
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-16 lg:py-24 bg-medical-primary",
        children: l.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            l.jsx("h2", {
              className: "text-3xl lg:text-4xl font-bold text-white mb-4",
              children: "Need a Diagnostic Test?",
            }),
            l.jsx("p", {
              className: "text-xl text-white/90 mb-8 max-w-2xl mx-auto",
              children:
                "Book your appointment today or call us for more information about our services and pricing.",
            }),
            l.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                l.jsx("a", {
                  href: "/book-appointment",
                  children: l.jsxs(dt, {
                    size: "lg",
                    className:
                      "bg-white text-medical-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg shadow-lg",
                    children: [
                      "Book Appointment Now",
                      l.jsx(li, { className: "ml-2 w-5 h-5" }),
                    ],
                  }),
                }),
                l.jsx("a", {
                  href: "tel:+91-7303034849",
                  children: l.jsxs(dt, {
                    size: "lg",
                    className:
                      "bg-white text-medical-primary hover:bg-gray-50 border-2 border-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg",
                    children: [
                      l.jsx(tr, { className: "mr-2 w-5 h-5" }),
                      "Call +91-7303034849",
                    ],
                  }),
                }),
              ],
            }),
            l.jsxs("div", {
              className: "mt-12 text-center",
              children: [
                l.jsx("p", {
                  className: "text-white/80 text-sm mb-2",
                  children: "Visit Us At:",
                }),
                l.jsx("p", {
                  className: "text-white font-medium",
                  children:
                    "26/3, Ground Floor, Old Rajinder Nagar, New Delhi-110060",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const ai = N.forwardRef(({ className: r, type: s, ...a }, u) =>
  l.jsx("input", {
    type: s,
    className: Ye(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      r,
    ),
    ref: u,
    ...a,
  }),
);
ai.displayName = "Input";
var x0 = "Label",
  cm = N.forwardRef((r, s) =>
    l.jsx(Rt.label, {
      ...r,
      ref: s,
      onMouseDown: (a) => {
        var d;
        a.target.closest("button, input, select, textarea") ||
          ((d = r.onMouseDown) == null || d.call(r, a),
          !a.defaultPrevented && a.detail > 1 && a.preventDefault());
      },
    }),
  );
cm.displayName = x0;
var dm = cm;
const w0 = Qa(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Wn = N.forwardRef(({ className: r, ...s }, a) =>
    l.jsx(dm, { ref: a, className: Ye(w0(), r), ...s }),
  );
Wn.displayName = dm.displayName;
const fm = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx("textarea", {
    className: Ye(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      r,
    ),
    ref: a,
    ...s,
  }),
);
fm.displayName = "Textarea";
function N0(r) {
  const s = N.useRef({ value: r, previous: r });
  return N.useMemo(
    () => (
      s.current.value !== r &&
        ((s.current.previous = s.current.value), (s.current.value = r)),
      s.current.previous
    ),
    [r],
  );
}
function S0(r) {
  const [s, a] = N.useState(void 0);
  return (
    ci(() => {
      if (r) {
        a({ width: r.offsetWidth, height: r.offsetHeight });
        const u = new ResizeObserver((d) => {
          if (!Array.isArray(d) || !d.length) return;
          const p = d[0];
          let m, h;
          if ("borderBoxSize" in p) {
            const v = p.borderBoxSize,
              x = Array.isArray(v) ? v[0] : v;
            (m = x.inlineSize), (h = x.blockSize);
          } else (m = r.offsetWidth), (h = r.offsetHeight);
          a({ width: m, height: h });
        });
        return u.observe(r, { box: "border-box" }), () => u.unobserve(r);
      } else a(void 0);
    }, [r]),
    s
  );
}
var Su = "Checkbox",
  [j0, L0] = ou(Su),
  [k0, b0] = j0(Su),
  pm = N.forwardRef((r, s) => {
    const {
        __scopeCheckbox: a,
        name: u,
        checked: d,
        defaultChecked: p,
        required: m,
        disabled: h,
        value: v = "on",
        onCheckedChange: x,
        ...b
      } = r,
      [j, y] = N.useState(null),
      _ = er(s, (z) => y(z)),
      L = N.useRef(!1),
      R = j ? !!j.closest("form") : !0,
      [C = !1, D] = ap({ prop: d, defaultProp: p, onChange: x }),
      I = N.useRef(C);
    return (
      N.useEffect(() => {
        const z = j == null ? void 0 : j.form;
        if (z) {
          const H = () => D(I.current);
          return (
            z.addEventListener("reset", H),
            () => z.removeEventListener("reset", H)
          );
        }
      }, [j, D]),
      l.jsxs(k0, {
        scope: a,
        state: C,
        disabled: h,
        children: [
          l.jsx(Rt.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": kr(C) ? "mixed" : C,
            "aria-required": m,
            "data-state": gm(C),
            "data-disabled": h ? "" : void 0,
            disabled: h,
            value: v,
            ...b,
            ref: _,
            onKeyDown: gt(r.onKeyDown, (z) => {
              z.key === "Enter" && z.preventDefault();
            }),
            onClick: gt(r.onClick, (z) => {
              D((H) => (kr(H) ? !0 : !H)),
                R &&
                  ((L.current = z.isPropagationStopped()),
                  L.current || z.stopPropagation());
            }),
          }),
          R &&
            l.jsx(C0, {
              control: j,
              bubbles: !L.current,
              name: u,
              value: v,
              checked: C,
              required: m,
              disabled: h,
              style: { transform: "translateX(-100%)" },
            }),
        ],
      })
    );
  });
pm.displayName = Su;
var mm = "CheckboxIndicator",
  hm = N.forwardRef((r, s) => {
    const { __scopeCheckbox: a, forceMount: u, ...d } = r,
      p = b0(mm, a);
    return l.jsx(lu, {
      present: u || kr(p.state) || p.state === !0,
      children: l.jsx(Rt.span, {
        "data-state": gm(p.state),
        "data-disabled": p.disabled ? "" : void 0,
        ...d,
        ref: s,
        style: { pointerEvents: "none", ...r.style },
      }),
    });
  });
hm.displayName = mm;
var C0 = (r) => {
  const { control: s, checked: a, bubbles: u = !0, ...d } = r,
    p = N.useRef(null),
    m = N0(a),
    h = S0(s);
  return (
    N.useEffect(() => {
      const v = p.current,
        x = window.HTMLInputElement.prototype,
        j = Object.getOwnPropertyDescriptor(x, "checked").set;
      if (m !== a && j) {
        const y = new Event("click", { bubbles: u });
        (v.indeterminate = kr(a)),
          j.call(v, kr(a) ? !1 : a),
          v.dispatchEvent(y);
      }
    }, [m, a, u]),
    l.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: kr(a) ? !1 : a,
      ...d,
      tabIndex: -1,
      ref: p,
      style: {
        ...r.style,
        ...h,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function kr(r) {
  return r === "indeterminate";
}
function gm(r) {
  return kr(r) ? "indeterminate" : r ? "checked" : "unchecked";
}
var ym = pm,
  E0 = hm;
const vm = N.forwardRef(({ className: r, ...s }, a) =>
  l.jsx(ym, {
    ref: a,
    className: Ye(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      r,
    ),
    ...s,
    children: l.jsx(E0, {
      className: Ye("flex items-center justify-center text-current"),
      children: l.jsx(jy, { className: "h-4 w-4" }),
    }),
  }),
);
vm.displayName = ym.displayName;
function P0() {
  const r = Nu(),
    [s, a] = N.useState([]),
    [u, d] = N.useState({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      additionalInfo: "",
    }),
    p = [
      {
        category: "Ultrasound & Imaging",
        tests: [
          "Ultrasound",
          "Color Doppler",
          "Level II Scans",
          "3D/4D Ultrasound",
          "TVS and TRUS",
          "USG Guided FNAC and BIOPSY",
        ],
      },
      {
        category: "Advanced Radiology",
        tests: ["CT Scan", "MRI Scan", "X-Ray", "Interventional Radiology"],
      },
      {
        category: "Cardiac Diagnostics",
        tests: ["ECG", "2D ECHO", "Stress ECHO"],
      },
      {
        category: "Laboratory Tests",
        tests: [
          "Complete Blood Count (CBC)",
          "Lipid Profile",
          "Liver Function Tests",
          "Kidney Function Tests",
          "Thyroid Function Tests",
          "Diabetes Panel",
          "Tumor Markers",
          "Urine Analysis",
          "Blood Sugar",
          "HbA1c",
          "ESR",
          "CRP",
        ],
      },
      {
        category: "Health Packages",
        tests: [
          "Basic Health Check Up",
          "Executive Health Package",
          "Diabetes Screening",
          "Cardiac Health Package",
          "Women's Health Package",
          "Senior Citizen Package",
        ],
      },
      {
        category: "Consultation",
        tests: [
          "General Consultation",
          "Report Analysis",
          "Second Opinion",
          "Health Counseling",
        ],
      },
    ],
    m = [
      "8:30 AM",
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
    ],
    h = (b) => {
      a((j) => (j.includes(b) ? j.filter((y) => y !== b) : [...j, b]));
    },
    v = (b, j) => {
      d((y) => ({ ...y, [b]: j }));
    },
    x = (b) => {
      b.preventDefault();
      const j = new URLSearchParams({
        name: u.name,
        phone: u.phone,
        email: u.email || "",
        date: u.date,
        time: u.time,
        tests: s.join(","),
      });
      console.log("Form submitted:", { ...u, selectedTests: s }),
        r(`/appointment-confirmation?${j.toString()}`);
    };
  return l.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      l.jsx("section", {
        className:
          "bg-gradient-to-br from-medical-light via-white to-medical-light py-12 lg:py-16",
        children: l.jsx("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx(Zn, {
                className:
                  "bg-medical-accent text-medical-primary border-medical-secondary mb-4",
                children: "Book Your Appointment",
              }),
              l.jsx("h1", {
                className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                children: "Schedule Your Diagnostic Test",
              }),
              l.jsx("p", {
                className: "text-lg text-gray-600 max-w-2xl mx-auto",
                children:
                  "Fill out the form below to book your appointment. No login required. We'll contact you to confirm your booking details.",
              }),
            ],
          }),
        }),
      }),
      l.jsx("section", {
        className: "py-12 lg:py-16",
        children: l.jsx("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsx("form", {
            onSubmit: x,
            children: l.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
              children: [
                l.jsxs("div", {
                  className: "lg:col-span-2 space-y-6",
                  children: [
                    l.jsxs(Ie, {
                      children: [
                        l.jsx(qt, {
                          children: l.jsxs(Yt, {
                            className: "flex items-center space-x-2",
                            children: [
                              l.jsx(Cy, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsx("span", {
                                children: "Personal Information",
                              }),
                            ],
                          }),
                        }),
                        l.jsxs(ze, {
                          className: "space-y-4",
                          children: [
                            l.jsxs("div", {
                              children: [
                                l.jsx(Wn, {
                                  htmlFor: "name",
                                  className:
                                    "text-sm font-medium text-gray-700",
                                  children: "Full Name *",
                                }),
                                l.jsx(ai, {
                                  id: "name",
                                  type: "text",
                                  required: !0,
                                  value: u.name,
                                  onChange: (b) => v("name", b.target.value),
                                  placeholder: "Enter your full name",
                                  className: "mt-1",
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              children: [
                                l.jsx(Wn, {
                                  htmlFor: "phone",
                                  className:
                                    "text-sm font-medium text-gray-700",
                                  children: "Contact Number *",
                                }),
                                l.jsx(ai, {
                                  id: "phone",
                                  type: "tel",
                                  required: !0,
                                  value: u.phone,
                                  onChange: (b) => v("phone", b.target.value),
                                  placeholder: "+91-XXXXXXXXXX",
                                  className: "mt-1",
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              children: [
                                l.jsx(Wn, {
                                  htmlFor: "email",
                                  className:
                                    "text-sm font-medium text-gray-700",
                                  children: "Email Address (Optional)",
                                }),
                                l.jsx(ai, {
                                  id: "email",
                                  type: "email",
                                  value: u.email,
                                  onChange: (b) => v("email", b.target.value),
                                  placeholder: "your.email@example.com",
                                  className: "mt-1",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs(Ie, {
                      children: [
                        l.jsx(qt, {
                          children: l.jsxs(Yt, {
                            className: "flex items-center space-x-2",
                            children: [
                              l.jsx(Fa, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsx("span", {
                                children: "Appointment Details",
                              }),
                            ],
                          }),
                        }),
                        l.jsxs(ze, {
                          className: "space-y-4",
                          children: [
                            l.jsxs("div", {
                              children: [
                                l.jsx(Wn, {
                                  htmlFor: "date",
                                  className:
                                    "text-sm font-medium text-gray-700",
                                  children: "Preferred Date *",
                                }),
                                l.jsx(ai, {
                                  id: "date",
                                  type: "date",
                                  required: !0,
                                  value: u.date,
                                  onChange: (b) => v("date", b.target.value),
                                  min: new Date().toISOString().split("T")[0],
                                  className: "mt-1",
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              children: [
                                l.jsx(Wn, {
                                  htmlFor: "time",
                                  className:
                                    "text-sm font-medium text-gray-700",
                                  children: "Preferred Time *",
                                }),
                                l.jsxs("select", {
                                  id: "time",
                                  required: !0,
                                  value: u.time,
                                  onChange: (b) => v("time", b.target.value),
                                  className:
                                    "mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent",
                                  children: [
                                    l.jsx("option", {
                                      value: "",
                                      children: "Select a time slot",
                                    }),
                                    m.map((b) =>
                                      l.jsx(
                                        "option",
                                        { value: b, children: b },
                                        b,
                                      ),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs(Ie, {
                      children: [
                        l.jsxs(qt, {
                          children: [
                            l.jsxs(Yt, {
                              className: "flex items-center space-x-2",
                              children: [
                                l.jsx(Xl, {
                                  className: "w-5 h-5 text-medical-primary",
                                }),
                                l.jsx("span", { children: "Select Tests" }),
                              ],
                            }),
                            l.jsx("p", {
                              className: "text-sm text-gray-600 mt-2",
                              children:
                                "Choose the diagnostic tests you need. You can select multiple tests.",
                            }),
                          ],
                        }),
                        l.jsxs(ze, {
                          children: [
                            l.jsx("div", {
                              className:
                                "max-h-96 overflow-y-auto space-y-6 pr-2",
                              children: p.map((b, j) =>
                                l.jsxs(
                                  "div",
                                  {
                                    children: [
                                      l.jsx("h4", {
                                        className:
                                          "font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide",
                                        children: b.category,
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                        children: b.tests.map((y, _) =>
                                          l.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center space-x-2",
                                              children: [
                                                l.jsx(vm, {
                                                  id: `test-${j}-${_}`,
                                                  checked: s.includes(y),
                                                  onCheckedChange: () => h(y),
                                                }),
                                                l.jsx(Wn, {
                                                  htmlFor: `test-${j}-${_}`,
                                                  className:
                                                    "text-sm text-gray-700 cursor-pointer flex-1",
                                                  children: y,
                                                }),
                                              ],
                                            },
                                            _,
                                          ),
                                        ),
                                      }),
                                    ],
                                  },
                                  j,
                                ),
                              ),
                            }),
                            s.length > 0 &&
                              l.jsxs("div", {
                                className:
                                  "mt-4 p-3 bg-medical-light rounded-lg",
                                children: [
                                  l.jsxs("p", {
                                    className:
                                      "text-sm font-medium text-medical-primary mb-2",
                                    children: [
                                      "Selected Tests (",
                                      s.length,
                                      "):",
                                    ],
                                  }),
                                  l.jsx("div", {
                                    className: "flex flex-wrap gap-1",
                                    children: s.map((b, j) =>
                                      l.jsx(
                                        Zn,
                                        {
                                          variant: "secondary",
                                          className:
                                            "text-xs bg-medical-accent text-medical-primary",
                                          children: b,
                                        },
                                        j,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs(Ie, {
                      children: [
                        l.jsx(qt, {
                          children: l.jsxs(Yt, {
                            className: "flex items-center space-x-2",
                            children: [
                              l.jsx(Xl, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsx("span", {
                                children: "Additional Information",
                              }),
                            ],
                          }),
                        }),
                        l.jsx(ze, {
                          children: l.jsxs("div", {
                            children: [
                              l.jsx(Wn, {
                                htmlFor: "additionalInfo",
                                className: "text-sm font-medium text-gray-700",
                                children:
                                  "Any additional information or special requirements (Optional)",
                              }),
                              l.jsx(fm, {
                                id: "additionalInfo",
                                value: u.additionalInfo,
                                onChange: (b) =>
                                  v("additionalInfo", b.target.value),
                                placeholder:
                                  "Please mention any specific requirements, medical conditions, or questions...",
                                rows: 4,
                                className: "mt-1",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsxs(dt, {
                      type: "submit",
                      className:
                        "w-full bg-medical-primary hover:bg-medical-secondary text-white py-3 text-lg font-medium",
                      disabled:
                        !u.name ||
                        !u.phone ||
                        !u.date ||
                        !u.time ||
                        s.length === 0,
                      children: [
                        l.jsx(Tt, { className: "mr-2 w-5 h-5" }),
                        "Confirm Appointment",
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    l.jsxs(Ie, {
                      children: [
                        l.jsx(qt, {
                          children: l.jsx(Yt, {
                            className: "text-lg",
                            children: "Need Help?",
                          }),
                        }),
                        l.jsxs(ze, {
                          className: "space-y-4",
                          children: [
                            l.jsxs("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                l.jsx(tr, {
                                  className: "w-5 h-5 text-medical-primary",
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("p", {
                                      className: "font-medium text-gray-900",
                                      children: "Call Us",
                                    }),
                                    l.jsx("a", {
                                      href: "tel:+91-7303034849",
                                      className:
                                        "text-medical-primary hover:underline",
                                      children: "+91-7303034849",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                l.jsx(pu, {
                                  className: "w-5 h-5 text-medical-primary",
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("p", {
                                      className: "font-medium text-gray-900",
                                      children: "Email Us",
                                    }),
                                    l.jsx("a", {
                                      href: "mailto:swastikimaginganddiagnostics@gmail.com",
                                      className:
                                        "text-medical-primary hover:underline text-sm",
                                      children:
                                        "swastikimaginganddiagnostics@gmail.com",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs(Ie, {
                      children: [
                        l.jsx(qt, {
                          children: l.jsxs(Yt, {
                            className: "flex items-center space-x-2",
                            children: [
                              l.jsx(yi, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsx("span", { children: "Operating Hours" }),
                            ],
                          }),
                        }),
                        l.jsx(ze, {
                          children: l.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [
                              l.jsx("div", {
                                className: "flex justify-between",
                                children: l.jsx("span", {
                                  className: "font-medium text-gray-900",
                                  children: "Monday - Saturday",
                                }),
                              }),
                              l.jsx("div", {
                                className: "text-medical-primary font-medium",
                                children: "8:30 AM - 8:30 PM",
                              }),
                              l.jsx("div", {
                                className: "flex justify-between mt-3",
                                children: l.jsx("span", {
                                  className: "font-medium text-gray-900",
                                  children: "Sunday",
                                }),
                              }),
                              l.jsx("div", {
                                className: "text-medical-primary font-medium",
                                children: "8:30 AM - 5:00 PM",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsx(Ie, {
                      className: "bg-medical-light border-medical-accent",
                      children: l.jsxs(ze, {
                        className: "pt-6",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-semibold text-medical-primary mb-2",
                            children: "Important Notes:",
                          }),
                          l.jsxs("ul", {
                            className: "text-sm text-gray-700 space-y-1",
                            children: [
                              l.jsx("li", {
                                children:
                                  "• Please arrive 15 minutes before your appointment",
                              }),
                              l.jsx("li", {
                                children: "• Bring a valid ID proof",
                              }),
                              l.jsx("li", {
                                children:
                                  "• Fast for 8-12 hours for blood tests (if required)",
                              }),
                              l.jsx("li", {
                                children:
                                  "• We'll confirm your appointment via phone",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
function T0() {
  const [r] = l0(),
    [s, a] = N.useState(null);
  if (
    (N.useEffect(() => {
      const d = r.get("name"),
        p = r.get("phone"),
        m = r.get("email"),
        h = r.get("date"),
        v = r.get("time"),
        x = r.get("tests");
      d &&
        p &&
        h &&
        v &&
        a({
          name: d,
          phone: p,
          email: m,
          date: h,
          time: v,
          tests: x ? x.split(",") : [],
        });
    }, [r]),
    !s)
  )
    return l.jsx("div", {
      className: "min-h-screen bg-gray-50 flex items-center justify-center",
      children: l.jsxs("div", {
        className: "text-center",
        children: [
          l.jsx("h1", {
            className: "text-2xl font-bold text-gray-900 mb-4",
            children: "No Appointment Details Found",
          }),
          l.jsx(Xt, {
            to: "/book-appointment",
            children: l.jsx(dt, {
              className:
                "bg-medical-primary hover:bg-medical-secondary text-white",
              children: "Book New Appointment",
            }),
          }),
        ],
      }),
    });
  const u = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return l.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      l.jsx("section", {
        className:
          "bg-gradient-to-br from-medical-light via-white to-medical-light py-16 lg:py-20",
        children: l.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            l.jsx("div", {
              className:
                "w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center",
              children: l.jsx(Tt, { className: "w-12 h-12 text-green-600" }),
            }),
            l.jsx("h1", {
              className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
              children: "Appointment Successfully Booked!",
            }),
            l.jsx("p", {
              className: "text-xl text-gray-600 max-w-2xl mx-auto",
              children:
                "Thank you for choosing Swastik Imaging & Diagnostics. Your appointment has been confirmed and we will contact you shortly.",
            }),
          ],
        }),
      }),
      l.jsx("section", {
        className: "py-12 lg:py-16",
        children: l.jsx("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
              l.jsxs("div", {
                className: "lg:col-span-2 space-y-6",
                children: [
                  l.jsxs(Ie, {
                    children: [
                      l.jsx(qt, {
                        children: l.jsxs(Yt, {
                          className: "flex items-center space-x-2",
                          children: [
                            l.jsx(Fa, {
                              className: "w-5 h-5 text-medical-primary",
                            }),
                            l.jsx("span", { children: "Appointment Details" }),
                          ],
                        }),
                      }),
                      l.jsxs(ze, {
                        className: "space-y-4",
                        children: [
                          l.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                              l.jsxs("div", {
                                children: [
                                  l.jsx(ts, {
                                    className:
                                      "text-sm font-medium text-gray-600",
                                    children: "Patient Name",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "text-lg font-semibold text-gray-900",
                                    children: s.name,
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx(ts, {
                                    className:
                                      "text-sm font-medium text-gray-600",
                                    children: "Contact Number",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "text-lg font-semibold text-gray-900",
                                    children: s.phone,
                                  }),
                                ],
                              }),
                              s.email &&
                                l.jsxs("div", {
                                  children: [
                                    l.jsx(ts, {
                                      className:
                                        "text-sm font-medium text-gray-600",
                                      children: "Email Address",
                                    }),
                                    l.jsx("p", {
                                      className:
                                        "text-lg font-semibold text-gray-900",
                                      children: s.email,
                                    }),
                                  ],
                                }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx(ts, {
                                    className:
                                      "text-sm font-medium text-gray-600",
                                    children: "Appointment Reference",
                                  }),
                                  l.jsxs("p", {
                                    className:
                                      "text-lg font-semibold text-medical-primary",
                                    children: [
                                      "#SID",
                                      Date.now().toString().slice(-6),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsx("div", {
                            className: "border-t pt-4",
                            children: l.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                l.jsxs("div", {
                                  className: "flex items-center space-x-3",
                                  children: [
                                    l.jsx(Fa, {
                                      className: "w-5 h-5 text-medical-primary",
                                    }),
                                    l.jsxs("div", {
                                      children: [
                                        l.jsx(ts, {
                                          className:
                                            "text-sm font-medium text-gray-600",
                                          children: "Date",
                                        }),
                                        l.jsx("p", {
                                          className:
                                            "font-semibold text-gray-900",
                                          children: u(s.date),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l.jsxs("div", {
                                  className: "flex items-center space-x-3",
                                  children: [
                                    l.jsx(yi, {
                                      className: "w-5 h-5 text-medical-primary",
                                    }),
                                    l.jsxs("div", {
                                      children: [
                                        l.jsx(ts, {
                                          className:
                                            "text-sm font-medium text-gray-600",
                                          children: "Time",
                                        }),
                                        l.jsx("p", {
                                          className:
                                            "font-semibold text-gray-900",
                                          children: s.time,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.tests.length > 0 &&
                    l.jsxs(Ie, {
                      children: [
                        l.jsx(qt, {
                          children: l.jsxs(Yt, {
                            className: "flex items-center space-x-2",
                            children: [
                              l.jsx(Xl, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsxs("span", {
                                children: [
                                  "Selected Tests (",
                                  s.tests.length,
                                  ")",
                                ],
                              }),
                            ],
                          }),
                        }),
                        l.jsx(ze, {
                          children: l.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                            children: s.tests.map((d, p) =>
                              l.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center space-x-2 p-2 bg-medical-light rounded-lg",
                                  children: [
                                    l.jsx(Tt, {
                                      className:
                                        "w-4 h-4 text-medical-primary flex-shrink-0",
                                    }),
                                    l.jsx("span", {
                                      className: "text-sm text-gray-700",
                                      children: d,
                                    }),
                                  ],
                                },
                                p,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                  l.jsxs(Ie, {
                    className: "bg-medical-light border-medical-accent",
                    children: [
                      l.jsx(qt, {
                        children: l.jsx(Yt, {
                          className: "text-medical-primary",
                          children: "What Happens Next?",
                        }),
                      }),
                      l.jsx(ze, {
                        children: l.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            l.jsxs("div", {
                              className: "flex items-start space-x-3",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "w-6 h-6 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: l.jsx("span", {
                                    className: "text-white text-xs font-bold",
                                    children: "1",
                                  }),
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-900",
                                      children: "Confirmation Call",
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-600",
                                      children:
                                        "Our team will call you within 2 hours to confirm your appointment details.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-start space-x-3",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "w-6 h-6 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: l.jsx("span", {
                                    className: "text-white text-xs font-bold",
                                    children: "2",
                                  }),
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-900",
                                      children: "Arrive 15 Minutes Early",
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-600",
                                      children:
                                        "Please arrive 15 minutes before your scheduled time with a valid ID proof.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-start space-x-3",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "w-6 h-6 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: l.jsx("span", {
                                    className: "text-white text-xs font-bold",
                                    children: "3",
                                  }),
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h4", {
                                      className: "font-semibold text-gray-900",
                                      children: "Get Your Results",
                                    }),
                                    l.jsx("p", {
                                      className: "text-sm text-gray-600",
                                      children:
                                        "Most test results are available the same day. We'll inform you when they're ready.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "space-y-6",
                children: [
                  l.jsxs(Ie, {
                    children: [
                      l.jsx(qt, {
                        children: l.jsx(Yt, {
                          className: "text-lg",
                          children: "Need Help?",
                        }),
                      }),
                      l.jsxs(ze, {
                        className: "space-y-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              l.jsx(tr, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("p", {
                                    className: "font-medium text-gray-900",
                                    children: "Call Us",
                                  }),
                                  l.jsx("a", {
                                    href: "tel:+91-7303034849",
                                    className:
                                      "text-medical-primary hover:underline",
                                    children: "+91-7303034849",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              l.jsx(pu, {
                                className: "w-5 h-5 text-medical-primary",
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("p", {
                                    className: "font-medium text-gray-900",
                                    children: "Email Us",
                                  }),
                                  l.jsx("a", {
                                    href: "mailto:swastikimaginganddiagnostics@gmail.com",
                                    className:
                                      "text-medical-primary hover:underline text-sm",
                                    children:
                                      "swastikimaginganddiagnostics@gmail.com",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [
                              l.jsx(mu, {
                                className: "w-5 h-5 text-medical-primary mt-1",
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("p", {
                                    className: "font-medium text-gray-900",
                                    children: "Visit Us",
                                  }),
                                  l.jsxs("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                      "26/3, Ground Floor",
                                      l.jsx("br", {}),
                                      "Old Rajinder Nagar",
                                      l.jsx("br", {}),
                                      "New Delhi - 110060",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx(Ie, {
                    className: "border-yellow-200 bg-yellow-50",
                    children: l.jsxs(ze, {
                      className: "pt-6",
                      children: [
                        l.jsx("h3", {
                          className: "font-semibold text-yellow-800 mb-2",
                          children: "Important Reminders:",
                        }),
                        l.jsxs("ul", {
                          className: "text-sm text-yellow-700 space-y-1",
                          children: [
                            l.jsx("li", {
                              children: "• Bring a valid photo ID",
                            }),
                            l.jsx("li", {
                              children:
                                "• Fast 8-12 hours for blood tests (if required)",
                            }),
                            l.jsx("li", {
                              children: "• Wear comfortable, loose clothing",
                            }),
                            l.jsx("li", {
                              children: "• Call us if you need to reschedule",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      l.jsx(Xt, {
                        to: "/",
                        className: "block",
                        children: l.jsxs(dt, {
                          variant: "outline",
                          className:
                            "w-full border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white",
                          children: [
                            l.jsx(ky, { className: "mr-2 w-4 h-4" }),
                            "Back to Home",
                          ],
                        }),
                      }),
                      l.jsx(Xt, {
                        to: "/book-appointment",
                        className: "block",
                        children: l.jsxs(dt, {
                          className:
                            "w-full bg-medical-primary hover:bg-medical-secondary text-white",
                          children: [
                            l.jsx(Fa, { className: "mr-2 w-4 h-4" }),
                            "Book Another Appointment",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const ts = ({ children: r, className: s }) =>
    l.jsx("div", { className: s, children: r }),
  R0 = () => {
    const r = Er();
    return (
      N.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          r.pathname,
        );
      }, [r.pathname]),
      l.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: l.jsxs("div", {
          className: "text-center",
          children: [
            l.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "404",
            }),
            l.jsx("p", {
              className: "text-xl text-gray-600 mb-4",
              children: "Oops! Page not found",
            }),
            l.jsx("a", {
              href: "/",
              className: "text-blue-500 hover:text-blue-700 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  M0 = new sx(),
  _0 = () =>
    l.jsxs(ax, {
      client: M0,
      children: [
        l.jsx(lv, {}),
        l.jsx(Iv, {}),
        l.jsx(s0, {
          children: l.jsxs("div", {
            className: "min-h-screen flex flex-col",
            children: [
              l.jsx(d0, {}),
              l.jsx("main", {
                className: "flex-1",
                children: l.jsxs(Yx, {
                  children: [
                    l.jsx(xr, { path: "/", element: l.jsx(g0, {}) }),
                    l.jsx(xr, { path: "/about", element: l.jsx(y0, {}) }),
                    l.jsx(xr, { path: "/services", element: l.jsx(v0, {}) }),
                    l.jsx(xr, {
                      path: "/book-appointment",
                      element: l.jsx(P0, {}),
                    }),
                    l.jsx(xr, {
                      path: "/appointment-confirmation",
                      element: l.jsx(T0, {}),
                    }),
                    l.jsx(xr, { path: "*", element: l.jsx(R0, {}) }),
                  ],
                }),
              }),
              l.jsx(f0, {}),
            ],
          }),
        }),
      ],
    });
Ng.createRoot(document.getElementById("root")).render(l.jsx(_0, {}));
