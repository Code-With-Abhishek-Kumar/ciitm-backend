const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './BPlGSTOg.js',
      './71Khq5Af.js',
      './CMvAj04f.js',
      './CLUjXPcb.js',
      './CYiAlqwV.js',
      './B6ftEzKJ.js',
      './Dqr29e2q.js',
      './DlAUqK2U.js',
      './error-404.ec0y5_3G.css',
      './BFYePbEj.js',
      './error-500.BEQEoW7I.css',
    ])
) => i.map((i) => d[i]);
var Yd = Object.defineProperty;
var kl = (e) => {
  throw TypeError(e);
};
var Qd = (e, t, n) =>
  t in e
    ? Yd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Se = (e, t, n) => Qd(e, typeof t != 'symbol' ? t + '' : t, n),
  Mr = (e, t, n) => t.has(e) || kl('Cannot ' + n);
var I = (e, t, n) => (
    Mr(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
  ),
  We = (e, t, n) =>
    t.has(e)
      ? kl('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  xe = (e, t, n, s) => (
    Mr(e, t, 'write to private field'), s ? s.call(e, n) : t.set(e, n), n
  ),
  Wt = (e, t, n) => (Mr(e, t, 'access private method'), n);
/**
 * @vue/shared v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ui(e, t) {
  const n = new Set(e.split(','));
  return (s) => n.has(s);
}
const me = {},
  zn = [],
  it = () => {},
  Zd = () => !1,
  Qs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Vi = (e) => e.startsWith('onUpdate:'),
  Re = Object.assign,
  zi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  eh = Object.prototype.hasOwnProperty,
  ie = (e, t) => eh.call(e, t),
  J = Array.isArray,
  qn = (e) => us(e) === '[object Map]',
  Fc = (e) => us(e) === '[object Set]',
  Ol = (e) => us(e) === '[object Date]',
  th = (e) => us(e) === '[object RegExp]',
  Z = (e) => typeof e == 'function',
  _e = (e) => typeof e == 'string',
  Rt = (e) => typeof e == 'symbol',
  ge = (e) => e !== null && typeof e == 'object',
  Dc = (e) => (ge(e) || Z(e)) && Z(e.then) && Z(e.catch),
  Bc = Object.prototype.toString,
  us = (e) => Bc.call(e),
  nh = (e) => us(e).slice(8, -1),
  Wc = (e) => us(e) === '[object Object]',
  qi = (e) =>
    _e(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Kn = Ui(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  fr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  sh = /-(\w)/g,
  ct = fr((e) => e.replace(sh, (t, n) => (n ? n.toUpperCase() : ''))),
  oh = /\B([A-Z])/g,
  jt = fr((e) => e.replace(oh, '-$1').toLowerCase()),
  dr = fr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Lr = fr((e) => (e ? `on${dr(e)}` : '')),
  Pt = (e, t) => !Object.is(e, t),
  Gn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Uc = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  si = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Vc = (e) => {
    const t = _e(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ml;
const zc = () =>
  Ml ||
  (Ml =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function $n(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = _e(s) ? ah(s) : $n(s);
      if (o) for (const r in o) t[r] = o[r];
    }
    return t;
  } else if (_e(e) || ge(e)) return e;
}
const rh = /;(?![^(]*\))/g,
  ih = /:([^]+)/,
  lh = /\/\*[^]*?\*\//g;
function ah(e) {
  const t = {};
  return (
    e
      .replace(lh, '')
      .split(rh)
      .forEach((n) => {
        if (n) {
          const s = n.split(ih);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ln(e) {
  let t = '';
  if (_e(e)) t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ln(e[n]);
      s && (t += s + ' ');
    }
  else if (ge(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function qc(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !_e(t) && (e.class = Ln(t)), n && (e.style = $n(n)), e;
}
const ch =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  uh = Ui(ch);
function Kc(e) {
  return !!e || e === '';
}
function fh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Ho(e[s], t[s]);
  return n;
}
function Ho(e, t) {
  if (e === t) return !0;
  let n = Ol(e),
    s = Ol(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Rt(e)), (s = Rt(t)), n || s)) return e === t;
  if (((n = J(e)), (s = J(t)), n || s)) return n && s ? fh(e, t) : !1;
  if (((n = ge(e)), (s = ge(t)), n || s)) {
    if (!n || !s) return !1;
    const o = Object.keys(e).length,
      r = Object.keys(t).length;
    if (o !== r) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        a = t.hasOwnProperty(i);
      if ((l && !a) || (!l && a) || !Ho(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
const Gc = (e) => !!(e && e.__v_isRef === !0),
  sn = (e) =>
    _e(e)
      ? e
      : e == null
        ? ''
        : J(e) || (ge(e) && (e.toString === Bc || !Z(e.toString)))
          ? Gc(e)
            ? sn(e.value)
            : JSON.stringify(e, Jc, 2)
          : String(e),
  Jc = (e, t) =>
    Gc(t)
      ? Jc(e, t.value)
      : qn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, o], r) => ((n[Nr(s, r) + ' =>'] = o), n),
              {}
            ),
          }
        : Fc(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Nr(n)) }
          : Rt(t)
            ? Nr(t)
            : ge(t) && !J(t) && !Wc(t)
              ? String(t)
              : t,
  Nr = (e, t = '') => {
    var n;
    return Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ge;
class Xc {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ge),
      !t && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ge;
      try {
        return (Ge = this), t();
      } finally {
        Ge = n;
      }
    }
  }
  on() {
    Ge = this;
  }
  off() {
    Ge = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function dh(e) {
  return new Xc(e);
}
function hh(e, t = Ge) {
  t && t.active && t.effects.push(e);
}
function Ki() {
  return Ge;
}
function ph(e) {
  Ge && Ge.cleanups.push(e);
}
let Rn;
class Gi {
  constructor(t, n, s, o) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      hh(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), dn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (gh(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), hn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = on,
      n = Rn;
    try {
      return (on = !0), (Rn = this), this._runnings++, Ll(this), this.fn();
    } finally {
      Nl(this), this._runnings--, (Rn = n), (on = t);
    }
  }
  stop() {
    this.active &&
      (Ll(this), Nl(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function gh(e) {
  return e.value;
}
function Ll(e) {
  e._trackId++, (e._depsLength = 0);
}
function Nl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Yc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Yc(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let on = !0,
  oi = 0;
const Qc = [];
function dn() {
  Qc.push(on), (on = !1);
}
function hn() {
  const e = Qc.pop();
  on = e === void 0 ? !0 : e;
}
function Ji() {
  oi++;
}
function Xi() {
  for (oi--; !oi && ri.length; ) ri.shift()();
}
function Zc(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Yc(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const ri = [];
function eu(e, t, n) {
  Ji();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t &&
      (o ?? (o = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (o ?? (o = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && ri.push(s.scheduler)));
  }
  Xi();
}
const tu = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Io = new WeakMap(),
  Pn = Symbol(''),
  ii = Symbol('');
function ze(e, t, n) {
  if (on && Rn) {
    let s = Io.get(e);
    s || Io.set(e, (s = new Map()));
    let o = s.get(n);
    o || s.set(n, (o = tu(() => s.delete(n)))), Zc(Rn, o);
  }
}
function Nt(e, t, n, s, o, r) {
  const i = Io.get(e);
  if (!i) return;
  let l = [];
  if (t === 'clear') l = [...i.values()];
  else if (n === 'length' && J(e)) {
    const a = Number(s);
    i.forEach((c, u) => {
      (u === 'length' || (!Rt(u) && u >= a)) && l.push(c);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        J(e)
          ? qi(n) && l.push(i.get('length'))
          : (l.push(i.get(Pn)), qn(e) && l.push(i.get(ii)));
        break;
      case 'delete':
        J(e) || (l.push(i.get(Pn)), qn(e) && l.push(i.get(ii)));
        break;
      case 'set':
        qn(e) && l.push(i.get(Pn));
        break;
    }
  Ji();
  for (const a of l) a && eu(a, 4);
  Xi();
}
function mh(e, t) {
  const n = Io.get(e);
  return n && n.get(t);
}
const yh = Ui('__proto__,__v_isRef,__isVue'),
  nu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Rt)
  ),
  Hl = vh();
function vh() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = ce(this);
        for (let r = 0, i = this.length; r < i; r++) ze(s, 'get', r + '');
        const o = s[t](...n);
        return o === -1 || o === !1 ? s[t](...n.map(ce)) : o;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        dn(), Ji();
        const s = ce(this)[t].apply(this, n);
        return Xi(), hn(), s;
      };
    }),
    e
  );
}
function wh(e) {
  Rt(e) || (e = String(e));
  const t = ce(this);
  return ze(t, 'has', e), t.hasOwnProperty(e);
}
class su {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    const o = this._isReadonly,
      r = this._isShallow;
    if (n === '__v_isReactive') return !o;
    if (n === '__v_isReadonly') return o;
    if (n === '__v_isShallow') return r;
    if (n === '__v_raw')
      return s === (o ? (r ? Oh : lu) : r ? iu : ru).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = J(t);
    if (!o) {
      if (i && ie(Hl, n)) return Reflect.get(Hl, n, s);
      if (n === 'hasOwnProperty') return wh;
    }
    const l = Reflect.get(t, n, s);
    return (Rt(n) ? nu.has(n) : yh(n)) || (o || ze(t, 'get', n), r)
      ? l
      : Le(l)
        ? i && qi(n)
          ? l
          : l.value
        : ge(l)
          ? o
            ? fs(l)
            : Ft(l)
          : l;
  }
}
class ou extends su {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = un(r);
      if (
        (!ns(s) && !un(s) && ((r = ce(r)), (s = ce(s))),
        !J(t) && Le(r) && !Le(s))
      )
        return a ? !1 : ((r.value = s), !0);
    }
    const i = J(t) && qi(n) ? Number(n) < t.length : ie(t, n),
      l = Reflect.set(t, n, s, o);
    return (
      t === ce(o) && (i ? Pt(s, r) && Nt(t, 'set', n, s) : Nt(t, 'add', n, s)),
      l
    );
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Nt(t, 'delete', n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Rt(n) || !nu.has(n)) && ze(t, 'has', n), s;
  }
  ownKeys(t) {
    return ze(t, 'iterate', J(t) ? 'length' : Pn), Reflect.ownKeys(t);
  }
}
class _h extends su {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const bh = new ou(),
  xh = new _h(),
  Eh = new ou(!0);
const Yi = (e) => e,
  hr = (e) => Reflect.getPrototypeOf(e);
function io(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = ce(e),
    r = ce(t);
  n || (Pt(t, r) && ze(o, 'get', t), ze(o, 'get', r));
  const { has: i } = hr(o),
    l = s ? Yi : n ? el : Hs;
  if (i.call(o, t)) return l(e.get(t));
  if (i.call(o, r)) return l(e.get(r));
  e !== o && e.get(t);
}
function lo(e, t = !1) {
  const n = this.__v_raw,
    s = ce(n),
    o = ce(e);
  return (
    t || (Pt(e, o) && ze(s, 'has', e), ze(s, 'has', o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function ao(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ze(ce(e), 'iterate', Pn), Reflect.get(e, 'size', e)
  );
}
function Il(e, t = !1) {
  !t && !ns(e) && !un(e) && (e = ce(e));
  const n = ce(this);
  return hr(n).has.call(n, e) || (n.add(e), Nt(n, 'add', e, e)), this;
}
function jl(e, t, n = !1) {
  !n && !ns(t) && !un(t) && (t = ce(t));
  const s = ce(this),
    { has: o, get: r } = hr(s);
  let i = o.call(s, e);
  i || ((e = ce(e)), (i = o.call(s, e)));
  const l = r.call(s, e);
  return (
    s.set(e, t), i ? Pt(t, l) && Nt(s, 'set', e, t) : Nt(s, 'add', e, t), this
  );
}
function Fl(e) {
  const t = ce(this),
    { has: n, get: s } = hr(t);
  let o = n.call(t, e);
  o || ((e = ce(e)), (o = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return o && Nt(t, 'delete', e, void 0), r;
}
function Dl() {
  const e = ce(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Nt(e, 'clear', void 0, void 0), n;
}
function co(e, t) {
  return function (s, o) {
    const r = this,
      i = r.__v_raw,
      l = ce(i),
      a = t ? Yi : e ? el : Hs;
    return (
      !e && ze(l, 'iterate', Pn), i.forEach((c, u) => s.call(o, a(c), a(u), r))
    );
  };
}
function uo(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = ce(o),
      i = qn(r),
      l = e === 'entries' || (e === Symbol.iterator && i),
      a = e === 'keys' && i,
      c = o[e](...s),
      u = n ? Yi : t ? el : Hs;
    return (
      !t && ze(r, 'iterate', a ? ii : Pn),
      {
        next() {
          const { value: f, done: d } = c.next();
          return d
            ? { value: f, done: d }
            : { value: l ? [u(f[0]), u(f[1])] : u(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ut(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function Sh() {
  const e = {
      get(r) {
        return io(this, r);
      },
      get size() {
        return ao(this);
      },
      has: lo,
      add: Il,
      set: jl,
      delete: Fl,
      clear: Dl,
      forEach: co(!1, !1),
    },
    t = {
      get(r) {
        return io(this, r, !1, !0);
      },
      get size() {
        return ao(this);
      },
      has: lo,
      add(r) {
        return Il.call(this, r, !0);
      },
      set(r, i) {
        return jl.call(this, r, i, !0);
      },
      delete: Fl,
      clear: Dl,
      forEach: co(!1, !0),
    },
    n = {
      get(r) {
        return io(this, r, !0);
      },
      get size() {
        return ao(this, !0);
      },
      has(r) {
        return lo.call(this, r, !0);
      },
      add: Ut('add'),
      set: Ut('set'),
      delete: Ut('delete'),
      clear: Ut('clear'),
      forEach: co(!0, !1),
    },
    s = {
      get(r) {
        return io(this, r, !0, !0);
      },
      get size() {
        return ao(this, !0);
      },
      has(r) {
        return lo.call(this, r, !0);
      },
      add: Ut('add'),
      set: Ut('set'),
      delete: Ut('delete'),
      clear: Ut('clear'),
      forEach: co(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      (e[r] = uo(r, !1, !1)),
        (n[r] = uo(r, !0, !1)),
        (t[r] = uo(r, !1, !0)),
        (s[r] = uo(r, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Th, Ch, $h, Rh] = Sh();
function Qi(e, t) {
  const n = t ? (e ? Rh : $h) : e ? Ch : Th;
  return (s, o, r) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
          ? s
          : Reflect.get(ie(n, o) && o in s ? n : s, o, r);
}
const Ph = { get: Qi(!1, !1) },
  Ah = { get: Qi(!1, !0) },
  kh = { get: Qi(!0, !1) };
const ru = new WeakMap(),
  iu = new WeakMap(),
  lu = new WeakMap(),
  Oh = new WeakMap();
function Mh(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Lh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mh(nh(e));
}
function Ft(e) {
  return un(e) ? e : Zi(e, !1, bh, Ph, ru);
}
function Lt(e) {
  return Zi(e, !1, Eh, Ah, iu);
}
function fs(e) {
  return Zi(e, !0, xh, kh, lu);
}
function Zi(e, t, n, s, o) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = o.get(e);
  if (r) return r;
  const i = Lh(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return o.set(e, l), l;
}
function Jn(e) {
  return un(e) ? Jn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function un(e) {
  return !!(e && e.__v_isReadonly);
}
function ns(e) {
  return !!(e && e.__v_isShallow);
}
function au(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function Nh(e) {
  return Object.isExtensible(e) && Uc(e, '__v_skip', !0), e;
}
const Hs = (e) => (ge(e) ? Ft(e) : e),
  el = (e) => (ge(e) ? fs(e) : e);
class cu {
  constructor(t, n, s, o) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Gi(
        () => t(this._value),
        () => Ts(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = ce(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Pt(t._value, (t._value = t.effect.run())) &&
        Ts(t, 4),
      tl(t),
      t.effect._dirtyLevel >= 2 && Ts(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Hh(e, t, n = !1) {
  let s, o;
  const r = Z(e);
  return (
    r ? ((s = e), (o = it)) : ((s = e.get), (o = e.set)),
    new cu(s, o, r || !o, n)
  );
}
function tl(e) {
  var t;
  on &&
    Rn &&
    ((e = ce(e)),
    Zc(
      Rn,
      (t = e.dep) != null
        ? t
        : (e.dep = tu(() => (e.dep = void 0), e instanceof cu ? e : void 0))
    ));
}
function Ts(e, t = 4, n, s) {
  e = ce(e);
  const o = e.dep;
  o && eu(o, t);
}
function Le(e) {
  return !!(e && e.__v_isRef === !0);
}
function ae(e) {
  return uu(e, !1);
}
function ss(e) {
  return uu(e, !0);
}
function uu(e, t) {
  return Le(e) ? e : new Ih(e, t);
}
class Ih {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : Hs(t));
  }
  get value() {
    return tl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ns(t) || un(t);
    (t = n ? t : ce(t)),
      Pt(t, this._rawValue) &&
        (this._rawValue,
        (this._rawValue = t),
        (this._value = n ? t : Hs(t)),
        Ts(this, 4));
  }
}
function se(e) {
  return Le(e) ? e.value : e;
}
const jh = {
  get: (e, t, n) => se(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Le(o) && !Le(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function fu(e) {
  return Jn(e) ? e : new Proxy(e, jh);
}
class Fh {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: s } = t(
      () => tl(this),
      () => Ts(this)
    );
    (this._get = n), (this._set = s);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function du(e) {
  return new Fh(e);
}
class Dh {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return mh(ce(this._object), this._key);
  }
}
class Bh {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function hu(e, t, n) {
  return Le(e)
    ? e
    : Z(e)
      ? new Bh(e)
      : ge(e) && arguments.length > 1
        ? Wh(e, t, n)
        : ae(e);
}
function Wh(e, t, n) {
  const s = e[t];
  return Le(s) ? s : new Dh(e, t, n);
}
/**
 * @vue/runtime-core v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ds(o, t, n);
  }
}
function at(e, t, n, s) {
  if (Z(e)) {
    const o = rn(e, t, n, s);
    return (
      o &&
        Dc(o) &&
        o.catch((r) => {
          ds(r, t, n);
        }),
      o
    );
  }
  if (J(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++) o.push(at(e[r], t, n, s));
    return o;
  }
}
function ds(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, l) === !1) return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      dn(), rn(a, null, 10, [e, i, l]), hn();
      return;
    }
  }
  Uh(e, n, o, s);
}
function Uh(e, t, n, s = !0) {
  console.error(e);
}
let Is = !1,
  li = !1;
const Ne = [];
let St = 0;
const Xn = [];
let Xt = null,
  xn = 0;
const pu = Promise.resolve();
let nl = null;
function pn(e) {
  const t = nl || pu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vh(e) {
  let t = St + 1,
    n = Ne.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      o = Ne[s],
      r = js(o);
    r < e || (r === e && o.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function pr(e) {
  (!Ne.length || !Ne.includes(e, Is && e.allowRecurse ? St + 1 : St)) &&
    (e.id == null ? Ne.push(e) : Ne.splice(Vh(e.id), 0, e), gu());
}
function gu() {
  !Is && !li && ((li = !0), (nl = pu.then(mu)));
}
function zh(e) {
  const t = Ne.indexOf(e);
  t > St && Ne.splice(t, 1);
}
function ai(e) {
  J(e)
    ? Xn.push(...e)
    : (!Xt || !Xt.includes(e, e.allowRecurse ? xn + 1 : xn)) && Xn.push(e),
    gu();
}
function Bl(e, t, n = Is ? St + 1 : 0) {
  for (; n < Ne.length; n++) {
    const s = Ne[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      Ne.splice(n, 1), n--, s();
    }
  }
}
function jo(e) {
  if (Xn.length) {
    const t = [...new Set(Xn)].sort((n, s) => js(n) - js(s));
    if (((Xn.length = 0), Xt)) {
      Xt.push(...t);
      return;
    }
    for (Xt = t, xn = 0; xn < Xt.length; xn++) {
      const n = Xt[xn];
      n.active !== !1 && n();
    }
    (Xt = null), (xn = 0);
  }
}
const js = (e) => (e.id == null ? 1 / 0 : e.id),
  qh = (e, t) => {
    const n = js(e) - js(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function mu(e) {
  (li = !1), (Is = !0), Ne.sort(qh);
  try {
    for (St = 0; St < Ne.length; St++) {
      const t = Ne[St];
      t && t.active !== !1 && rn(t, t.i, t.i ? 15 : 14);
    }
  } finally {
    (St = 0),
      (Ne.length = 0),
      jo(),
      (Is = !1),
      (nl = null),
      (Ne.length || Xn.length) && mu();
  }
}
let $e = null,
  gr = null;
function Fo(e) {
  const t = $e;
  return ($e = e), (gr = (e && e.type.__scopeId) || null), t;
}
function Kh(e) {
  gr = e;
}
function Gh() {
  gr = null;
}
const Jh = (e) => Tt;
function Tt(e, t = $e, n) {
  if (!t || e._n) return e;
  const s = (...o) => {
    s._d && ta(-1);
    const r = Fo(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Fo(r), s._d && ta(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function ix(e, t) {
  if ($e === null) return e;
  const n = wr($e),
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = me] = t[o];
    r &&
      (Z(r) && (r = { mounted: r, updated: r }),
      r.deep && en(i),
      s.push({
        dir: r,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function xt(e, t, n, s) {
  const o = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (dn(), at(a, n, 8, [e.el, l, e, t]), hn());
  }
}
const Yt = Symbol('_leaveCb'),
  fo = Symbol('_enterCb');
function Xh() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    hs(() => {
      e.isMounted = !0;
    }),
    eo(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const st = [Function, Array],
  yu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: st,
    onEnter: st,
    onAfterEnter: st,
    onEnterCancelled: st,
    onBeforeLeave: st,
    onLeave: st,
    onAfterLeave: st,
    onLeaveCancelled: st,
    onBeforeAppear: st,
    onAppear: st,
    onAfterAppear: st,
    onAppearCancelled: st,
  },
  vu = (e) => {
    const t = e.subTree;
    return t.component ? vu(t.component) : t;
  },
  Yh = {
    name: 'BaseTransition',
    props: yu,
    setup(e, { slots: t }) {
      const n = Nn(),
        s = Xh();
      return () => {
        const o = t.default && _u(t.default(), !0);
        if (!o || !o.length) return;
        let r = o[0];
        if (o.length > 1) {
          for (const d of o)
            if (d.type !== Me) {
              r = d;
              break;
            }
        }
        const i = ce(e),
          { mode: l } = i;
        if (s.isLeaving) return Hr(r);
        const a = Wl(r);
        if (!a) return Hr(r);
        let c = ci(a, i, s, n, (d) => (c = d));
        Fs(a, c);
        const u = n.subTree,
          f = u && Wl(u);
        if (f && f.type !== Me && !ht(a, f) && vu(n).type !== Me) {
          const d = ci(f, i, s, n);
          if ((Fs(f, d), l === 'out-in' && a.type !== Me))
            return (
              (s.isLeaving = !0),
              (d.afterLeave = () => {
                (s.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              Hr(r)
            );
          l === 'in-out' &&
            a.type !== Me &&
            (d.delayLeave = (h, y, g) => {
              const b = wu(s, f);
              (b[String(f.key)] = f),
                (h[Yt] = () => {
                  y(), (h[Yt] = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = g);
            });
        }
        return r;
      };
    },
  },
  Qh = Yh;
function wu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function ci(e, t, n, s, o) {
  const {
      appear: r,
      mode: i,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: y,
      onLeaveCancelled: g,
      onBeforeAppear: b,
      onAppear: x,
      onAfterAppear: v,
      onAppearCancelled: p,
    } = t,
    _ = String(e.key),
    S = wu(n, e),
    E = (P, C) => {
      P && at(P, s, 9, C);
    },
    R = (P, C) => {
      const H = C[1];
      E(P, C),
        J(P) ? P.every((k) => k.length <= 1) && H() : P.length <= 1 && H();
    },
    L = {
      mode: i,
      persisted: l,
      beforeEnter(P) {
        let C = a;
        if (!n.isMounted)
          if (r) C = b || a;
          else return;
        P[Yt] && P[Yt](!0);
        const H = S[_];
        H && ht(e, H) && H.el[Yt] && H.el[Yt](), E(C, [P]);
      },
      enter(P) {
        let C = c,
          H = u,
          k = f;
        if (!n.isMounted)
          if (r) (C = x || c), (H = v || u), (k = p || f);
          else return;
        let z = !1;
        const Q = (P[fo] = (ee) => {
          z ||
            ((z = !0),
            ee ? E(k, [P]) : E(H, [P]),
            L.delayedLeave && L.delayedLeave(),
            (P[fo] = void 0));
        });
        C ? R(C, [P, Q]) : Q();
      },
      leave(P, C) {
        const H = String(e.key);
        if ((P[fo] && P[fo](!0), n.isUnmounting)) return C();
        E(d, [P]);
        let k = !1;
        const z = (P[Yt] = (Q) => {
          k ||
            ((k = !0),
            C(),
            Q ? E(g, [P]) : E(y, [P]),
            (P[Yt] = void 0),
            S[H] === e && delete S[H]);
        });
        (S[H] = e), h ? R(h, [P, z]) : z();
      },
      clone(P) {
        const C = ci(P, t, n, s, o);
        return o && o(C), C;
      },
    };
  return L;
}
function Hr(e) {
  if (Zs(e)) return (e = Ht(e)), (e.children = null), e;
}
function Wl(e) {
  if (!Zs(e)) return e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Z(n.default)) return n.default();
  }
}
function Fs(e, t) {
  e.shapeFlag & 6 && e.component
    ? Fs(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function _u(e, t = !1, n) {
  let s = [],
    o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Oe
      ? (i.patchFlag & 128 && o++, (s = s.concat(_u(i.children, t, l))))
      : (t || i.type !== Me) && s.push(l != null ? Ht(i, { key: l }) : i);
  }
  if (o > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */ function tt(e, t) {
  return Z(e) ? Re({ name: e.name }, t, { setup: e }) : e;
}
const An = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ function Ul(e) {
  Z(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    timeout: r,
    suspensible: i = !0,
    onError: l,
  } = e;
  let a = null,
    c,
    u = 0;
  const f = () => (u++, (a = null), d()),
    d = () => {
      let h;
      return (
        a ||
        (h = a =
          t()
            .catch((y) => {
              if (((y = y instanceof Error ? y : new Error(String(y))), l))
                return new Promise((g, b) => {
                  l(
                    y,
                    () => g(f()),
                    () => b(y),
                    u + 1
                  );
                });
              throw y;
            })
            .then((y) =>
              h !== a && a
                ? a
                : (y &&
                    (y.__esModule || y[Symbol.toStringTag] === 'Module') &&
                    (y = y.default),
                  (c = y),
                  y)
            ))
      );
    };
  return tt({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Ce;
      if (c) return () => Ir(c, h);
      const y = (v) => {
        (a = null), ds(v, h, 13, !s);
      };
      if ((i && h.suspense) || no)
        return d()
          .then((v) => () => Ir(v, h))
          .catch((v) => (y(v), () => (s ? ue(s, { error: v }) : null)));
      const g = ae(!1),
        b = ae(),
        x = ae(!!o);
      return (
        o &&
          setTimeout(() => {
            x.value = !1;
          }, o),
        r != null &&
          setTimeout(() => {
            if (!g.value && !b.value) {
              const v = new Error(`Async component timed out after ${r}ms.`);
              y(v), (b.value = v);
            }
          }, r),
        d()
          .then(() => {
            (g.value = !0),
              h.parent &&
                Zs(h.parent.vnode) &&
                ((h.parent.effect.dirty = !0), pr(h.parent.update));
          })
          .catch((v) => {
            y(v), (b.value = v);
          }),
        () => {
          if (g.value && c) return Ir(c, h);
          if (b.value && s) return ue(s, { error: b.value });
          if (n && !x.value) return ue(n);
        }
      );
    },
  });
}
function Ir(e, t) {
  const { ref: n, props: s, children: o, ce: r } = t.vnode,
    i = ue(e, s, o);
  return (i.ref = n), (i.ce = r), delete t.vnode.ce, i;
}
const Zs = (e) => e.type.__isKeepAlive,
  Zh = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Nn(),
        s = n.ctx;
      if (!s.renderer)
        return () => {
          const v = t.default && t.default();
          return v && v.length === 1 ? v[0] : v;
        };
      const o = new Map(),
        r = new Set();
      let i = null;
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: c,
            um: u,
            o: { createElement: f },
          },
        } = s,
        d = f('div');
      (s.activate = (v, p, _, S, E) => {
        const R = v.component;
        c(v, p, _, 0, l),
          a(R.vnode, v, p, _, R, l, S, v.slotScopeIds, E),
          ke(() => {
            (R.isDeactivated = !1), R.a && Gn(R.a);
            const L = v.props && v.props.onVnodeMounted;
            L && Ue(L, R.parent, v);
          }, l);
      }),
        (s.deactivate = (v) => {
          const p = v.component;
          Vo(p.m),
            Vo(p.a),
            c(v, d, null, 1, l),
            ke(() => {
              p.da && Gn(p.da);
              const _ = v.props && v.props.onVnodeUnmounted;
              _ && Ue(_, p.parent, v), (p.isDeactivated = !0);
            }, l);
        });
      function h(v) {
        jr(v), u(v, n, l, !0);
      }
      function y(v) {
        o.forEach((p, _) => {
          const S = vi(p.type);
          S && (!v || !v(S)) && g(_);
        });
      }
      function g(v) {
        const p = o.get(v);
        !i || !ht(p, i) ? h(p) : i && jr(i), o.delete(v), r.delete(v);
      }
      gt(
        () => [e.include, e.exclude],
        ([v, p]) => {
          v && y((_) => _s(v, _)), p && y((_) => !_s(p, _));
        },
        { flush: 'post', deep: !0 }
      );
      let b = null;
      const x = () => {
        b != null &&
          (pi(n.subTree.type)
            ? ke(() => {
                o.set(b, ho(n.subTree));
              }, n.subTree.suspense)
            : o.set(b, ho(n.subTree)));
      };
      return (
        hs(x),
        Su(x),
        eo(() => {
          o.forEach((v) => {
            const { subTree: p, suspense: _ } = n,
              S = ho(p);
            if (v.type === S.type && v.key === S.key) {
              jr(S);
              const E = S.component.da;
              E && ke(E, _);
              return;
            }
            h(v);
          });
        }),
        () => {
          if (((b = null), !t.default)) return null;
          const v = t.default(),
            p = v[0];
          if (v.length > 1) return (i = null), v;
          if (!rs(p) || (!(p.shapeFlag & 4) && !(p.shapeFlag & 128)))
            return (i = null), p;
          let _ = ho(p);
          const S = _.type,
            E = vi(An(_) ? _.type.__asyncResolved || {} : S),
            { include: R, exclude: L, max: P } = e;
          if ((R && (!E || !_s(R, E))) || (L && E && _s(L, E)))
            return (i = _), p;
          const C = _.key == null ? S : _.key,
            H = o.get(C);
          return (
            _.el && ((_ = Ht(_)), p.shapeFlag & 128 && (p.ssContent = _)),
            (b = C),
            H
              ? ((_.el = H.el),
                (_.component = H.component),
                _.transition && Fs(_, _.transition),
                (_.shapeFlag |= 512),
                r.delete(C),
                r.add(C))
              : (r.add(C),
                P && r.size > parseInt(P, 10) && g(r.values().next().value)),
            (_.shapeFlag |= 256),
            (i = _),
            pi(p.type) ? p : _
          );
        }
      );
    },
  },
  ep = Zh;
function _s(e, t) {
  return J(e)
    ? e.some((n) => _s(n, t))
    : _e(e)
      ? e.split(',').includes(t)
      : th(e)
        ? e.test(t)
        : !1;
}
function bu(e, t) {
  Eu(e, 'a', t);
}
function xu(e, t) {
  Eu(e, 'da', t);
}
function Eu(e, t, n = Ce) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((mr(t, s, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Zs(o.parent.vnode) && tp(s, t, n, o), (o = o.parent);
  }
}
function tp(e, t, n, s) {
  const o = mr(t, e, s, !0);
  Tu(() => {
    zi(s[t], o);
  }, n);
}
function jr(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function ho(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function mr(e, t, n = Ce, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          dn();
          const l = to(n),
            a = at(t, n, e, i);
          return l(), hn(), a;
        });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const Dt =
    (e) =>
    (t, n = Ce) => {
      (!no || e === 'sp') && mr(e, (...s) => t(...s), n);
    },
  np = Dt('bm'),
  hs = Dt('m'),
  sp = Dt('bu'),
  Su = Dt('u'),
  eo = Dt('bum'),
  Tu = Dt('um'),
  op = Dt('sp'),
  rp = Dt('rtg'),
  ip = Dt('rtc');
function Cu(e, t = Ce) {
  mr('ec', e, t);
}
const sl = 'components',
  lp = 'directives';
function On(e, t) {
  return ol(sl, e, !0, t) || e;
}
const $u = Symbol.for('v-ndc');
function ap(e) {
  return _e(e) ? ol(sl, e, !1) || e : e || $u;
}
function lx(e) {
  return ol(lp, e);
}
function ol(e, t, n = !0, s = !1) {
  const o = $e || Ce;
  if (o) {
    const r = o.type;
    if (e === sl) {
      const l = vi(r, !1);
      if (l && (l === t || l === ct(t) || l === dr(ct(t)))) return r;
    }
    const i = Vl(o[e] || r[e], t) || Vl(o.appContext[e], t);
    return !i && s ? r : i;
  }
}
function Vl(e, t) {
  return e && (e[t] || e[ct(t)] || e[dr(ct(t))]);
}
function ax(e, t, n, s) {
  let o;
  const r = n;
  if (J(e) || _e(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++) o[i] = t(e[i], i, void 0, r);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, r);
  } else if (ge(e))
    if (e[Symbol.iterator]) o = Array.from(e, (i, l) => t(i, l, void 0, r));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const c = i[l];
        o[l] = t(e[c], c, l, r);
      }
    }
  else o = [];
  return o;
}
function Do(e, t, n = {}, s, o) {
  if ($e.isCE || ($e.parent && An($e.parent) && $e.parent.isCE))
    return t !== 'default' && (n.name = t), ue('slot', n, s && s());
  let r = e[t];
  r && r._c && (r._d = !1), pe();
  const i = r && Ru(r(n)),
    l = Xe(
      Oe,
      { key: (n.key || (i && i.key) || `_${t}`) + (!i && s ? '_fb' : '') },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    r && r._c && (r._d = !0),
    l
  );
}
function Ru(e) {
  return e.some((t) =>
    rs(t) ? !(t.type === Me || (t.type === Oe && !Ru(t.children))) : !0
  )
    ? e
    : null;
}
const ui = (e) => (e ? (tf(e) ? wr(e) : ui(e.parent)) : null),
  Cs = Re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ui(e.parent),
    $root: (e) => ui(e.root),
    $emit: (e) => e.emit,
    $options: (e) => rl(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), pr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = pn.bind(e.proxy)),
    $watch: (e) => Lp.bind(e),
  }),
  Fr = (e, t) => e !== me && !e.__isScriptSetup && ie(e, t),
  cp = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: r,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== '$') {
        const h = i[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return s[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Fr(s, t)) return (i[t] = 1), s[t];
          if (o !== me && ie(o, t)) return (i[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && ie(c, t)) return (i[t] = 3), r[t];
          if (n !== me && ie(n, t)) return (i[t] = 4), n[t];
          fi && (i[t] = 0);
        }
      }
      const u = Cs[t];
      let f, d;
      if (u) return t === '$attrs' && ze(e.attrs, 'get', ''), u(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== me && ie(n, t)) return (i[t] = 4), n[t];
      if (((d = a.config.globalProperties), ie(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: r } = e;
      return Fr(o, t)
        ? ((o[t] = n), !0)
        : s !== me && ie(s, t)
          ? ((s[t] = n), !0)
          : ie(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: r,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== me && ie(e, i)) ||
        Fr(t, i) ||
        ((l = r[0]) && ie(l, i)) ||
        ie(s, i) ||
        ie(Cs, i) ||
        ie(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ie(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Bo(e) {
  return J(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function cx(e, t) {
  return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : Re({}, Bo(e), Bo(t));
}
let fi = !0;
function up(e) {
  const t = rl(e),
    n = e.proxy,
    s = e.ctx;
  (fi = !1), t.beforeCreate && zl(t.beforeCreate, e, 'bc');
  const {
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: y,
    activated: g,
    deactivated: b,
    beforeDestroy: x,
    beforeUnmount: v,
    destroyed: p,
    unmounted: _,
    render: S,
    renderTracked: E,
    renderTriggered: R,
    errorCaptured: L,
    serverPrefetch: P,
    expose: C,
    inheritAttrs: H,
    components: k,
    directives: z,
    filters: Q,
  } = t;
  if ((c && fp(c, s, null), i))
    for (const Y in i) {
      const q = i[Y];
      Z(q) && (s[Y] = q.bind(n));
    }
  if (o) {
    const Y = o.call(n, n);
    ge(Y) && (e.data = Ft(Y));
  }
  if (((fi = !0), r))
    for (const Y in r) {
      const q = r[Y],
        ut = Z(q) ? q.bind(n, n) : Z(q.get) ? q.get.bind(n, n) : it,
        Bt = !Z(q) && Z(q.set) ? q.set.bind(n) : it,
        _t = le({ get: ut, set: Bt });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => _t.value,
        set: (Be) => (_t.value = Be),
      });
    }
  if (l) for (const Y in l) Pu(l[Y], s, n, Y);
  if (a) {
    const Y = Z(a) ? a.call(n) : a;
    Reflect.ownKeys(Y).forEach((q) => {
      Qn(q, Y[q]);
    });
  }
  u && zl(u, e, 'c');
  function B(Y, q) {
    J(q) ? q.forEach((ut) => Y(ut.bind(n))) : q && Y(q.bind(n));
  }
  if (
    (B(np, f),
    B(hs, d),
    B(sp, h),
    B(Su, y),
    B(bu, g),
    B(xu, b),
    B(Cu, L),
    B(ip, E),
    B(rp, R),
    B(eo, v),
    B(Tu, _),
    B(op, P),
    J(C))
  )
    if (C.length) {
      const Y = e.exposed || (e.exposed = {});
      C.forEach((q) => {
        Object.defineProperty(Y, q, {
          get: () => n[q],
          set: (ut) => (n[q] = ut),
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === it && (e.render = S),
    H != null && (e.inheritAttrs = H),
    k && (e.components = k),
    z && (e.directives = z);
}
function fp(e, t, n = it) {
  J(e) && (e = di(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ge(o)
      ? 'default' in o
        ? (r = Ze(o.from || s, o.default, !0))
        : (r = Ze(o.from || s))
      : (r = Ze(o)),
      Le(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (i) => (r.value = i),
          })
        : (t[s] = r);
  }
}
function zl(e, t, n) {
  at(J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pu(e, t, n, s) {
  const o = s.includes('.') ? qu(n, s) : () => n[s];
  if (_e(e)) {
    const r = t[e];
    Z(r) && gt(o, r);
  } else if (Z(e)) gt(o, e.bind(n));
  else if (ge(e))
    if (J(e)) e.forEach((r) => Pu(r, t, n, s));
    else {
      const r = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(r) && gt(o, r, e);
    }
}
function rl(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = r.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !n && !s
        ? (a = t)
        : ((a = {}),
          o.length && o.forEach((c) => Wo(a, c, i, !0)),
          Wo(a, t, i)),
    ge(t) && r.set(t, a),
    a
  );
}
function Wo(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Wo(e, r, n, !0), o && o.forEach((i) => Wo(e, i, n, !0));
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = dp[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const dp = {
  data: ql,
  props: Kl,
  emits: Kl,
  methods: bs,
  computed: bs,
  beforeCreate: He,
  created: He,
  beforeMount: He,
  mounted: He,
  beforeUpdate: He,
  updated: He,
  beforeDestroy: He,
  beforeUnmount: He,
  destroyed: He,
  unmounted: He,
  activated: He,
  deactivated: He,
  errorCaptured: He,
  serverPrefetch: He,
  components: bs,
  directives: bs,
  watch: pp,
  provide: ql,
  inject: hp,
};
function ql(e, t) {
  return t
    ? e
      ? function () {
          return Re(
            Z(e) ? e.call(this, this) : e,
            Z(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function hp(e, t) {
  return bs(di(e), di(t));
}
function di(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function He(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bs(e, t) {
  return e ? Re(Object.create(null), e, t) : t;
}
function Kl(e, t) {
  return e
    ? J(e) && J(t)
      ? [...new Set([...e, ...t])]
      : Re(Object.create(null), Bo(e), Bo(t ?? {}))
    : t;
}
function pp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Re(Object.create(null), e);
  for (const s in t) n[s] = He(e[s], t[s]);
  return n;
}
function Au() {
  return {
    app: null,
    config: {
      isNativeTag: Zd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let gp = 0;
function mp(e, t) {
  return function (s, o = null) {
    Z(s) || (s = Re({}, s)), o != null && !ge(o) && (o = null);
    const r = Au(),
      i = new WeakSet();
    let l = !1;
    const a = (r.app = {
      _uid: gp++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: sf,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && Z(c.install)
              ? (i.add(c), c.install(a, ...u))
              : Z(c) && (i.add(c), c(a, ...u))),
          a
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), a;
      },
      component(c, u) {
        return u ? ((r.components[c] = u), a) : r.components[c];
      },
      directive(c, u) {
        return u ? ((r.directives[c] = u), a) : r.directives[c];
      },
      mount(c, u, f) {
        if (!l) {
          const d = ue(s, o);
          return (
            (d.appContext = r),
            f === !0 ? (f = 'svg') : f === !1 && (f = void 0),
            u && t ? t(d, c) : e(d, c, f),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            wr(d.component)
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, u) {
        return (r.provides[c] = u), a;
      },
      runWithContext(c) {
        const u = Yn;
        Yn = a;
        try {
          return c();
        } finally {
          Yn = u;
        }
      },
    });
    return a;
  };
}
let Yn = null;
function Qn(e, t) {
  if (Ce) {
    let n = Ce.provides;
    const s = Ce.parent && Ce.parent.provides;
    s === n && (n = Ce.provides = Object.create(s)), (n[e] = t);
  }
}
function Ze(e, t, n = !1) {
  const s = Ce || $e;
  if (s || Yn) {
    const o = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Yn._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && Z(t) ? t.call(s && s.proxy) : t;
  }
}
function ku() {
  return !!(Ce || $e || Yn);
}
const Ou = {},
  Mu = () => Object.create(Ou),
  Lu = (e) => Object.getPrototypeOf(e) === Ou;
function yp(e, t, n, s = !1) {
  const o = {},
    r = Mu();
  (e.propsDefaults = Object.create(null)), Nu(e, t, o, r);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = s ? o : Lt(o)) : e.type.props ? (e.props = o) : (e.props = r),
    (e.attrs = r);
}
function vp(e, t, n, s) {
  const {
      props: o,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    l = ce(o),
    [a] = e.propsOptions;
  let c = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (vr(e.emitsOptions, d)) continue;
        const h = t[d];
        if (a)
          if (ie(r, d)) h !== r[d] && ((r[d] = h), (c = !0));
          else {
            const y = ct(d);
            o[y] = hi(a, l, y, h, e, !1);
          }
        else h !== r[d] && ((r[d] = h), (c = !0));
      }
    }
  } else {
    Nu(e, t, o, r) && (c = !0);
    let u;
    for (const f in l)
      (!t || (!ie(t, f) && ((u = jt(f)) === f || !ie(t, u)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (o[f] = hi(a, l, f, void 0, e, !0))
          : delete o[f]);
    if (r !== l)
      for (const f in r) (!t || !ie(t, f)) && (delete r[f], (c = !0));
  }
  c && Nt(e.attrs, 'set', '');
}
function Nu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (Kn(a)) continue;
      const c = t[a];
      let u;
      o && ie(o, (u = ct(a)))
        ? !r || !r.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : vr(e.emitsOptions, a) ||
          ((!(a in s) || c !== s[a]) && ((s[a] = c), (i = !0)));
    }
  if (r) {
    const a = ce(n),
      c = l || me;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = hi(o, a, f, c[f], e, !ie(c, f));
    }
  }
  return i;
}
function hi(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = ie(i, 'default');
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && Z(a)) {
        const { propsDefaults: c } = o;
        if (n in c) s = c[n];
        else {
          const u = to(o);
          (s = c[n] = a.call(null, t)), u();
        }
      } else s = a;
    }
    i[0] &&
      (r && !l ? (s = !1) : i[1] && (s === '' || s === jt(n)) && (s = !0));
  }
  return s;
}
const wp = new WeakMap();
function Hu(e, t, n = !1) {
  const s = n ? wp : t.propsCache,
    o = s.get(e);
  if (o) return o;
  const r = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!Z(e)) {
    const u = (f) => {
      a = !0;
      const [d, h] = Hu(f, t, !0);
      Re(i, d), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a) return ge(e) && s.set(e, zn), zn;
  if (J(r))
    for (let u = 0; u < r.length; u++) {
      const f = ct(r[u]);
      Gl(f) && (i[f] = me);
    }
  else if (r)
    for (const u in r) {
      const f = ct(u);
      if (Gl(f)) {
        const d = r[u],
          h = (i[f] = J(d) || Z(d) ? { type: d } : Re({}, d));
        if (h) {
          const y = Yl(Boolean, h.type),
            g = Yl(String, h.type);
          (h[0] = y > -1),
            (h[1] = g < 0 || y < g),
            (y > -1 || ie(h, 'default')) && l.push(f);
        }
      }
    }
  const c = [i, l];
  return ge(e) && s.set(e, c), c;
}
function Gl(e) {
  return e[0] !== '$' && !Kn(e);
}
function Jl(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || '';
}
function Xl(e, t) {
  return Jl(e) === Jl(t);
}
function Yl(e, t) {
  return J(t) ? t.findIndex((n) => Xl(n, e)) : Z(t) && Xl(t, e) ? 0 : -1;
}
const Iu = (e) => e[0] === '_' || e === '$stable',
  il = (e) => (J(e) ? e.map(Je) : [Je(e)]),
  _p = (e, t, n) => {
    if (t._n) return t;
    const s = Tt((...o) => il(t(...o)), n);
    return (s._c = !1), s;
  },
  ju = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
      if (Iu(o)) continue;
      const r = e[o];
      if (Z(r)) t[o] = _p(o, r, s);
      else if (r != null) {
        const i = il(r);
        t[o] = () => i;
      }
    }
  },
  Fu = (e, t) => {
    const n = il(t);
    e.slots.default = () => n;
  },
  Du = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s]);
  },
  bp = (e, t, n) => {
    const s = (e.slots = Mu());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Du(s, t, n), n && Uc(s, '_', o, !0)) : ju(t, s);
    } else t && Fu(e, t);
  },
  xp = (e, t, n) => {
    const { vnode: s, slots: o } = e;
    let r = !0,
      i = me;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (r = !1)
          : Du(o, t, n)
        : ((r = !t.$stable), ju(t, o)),
        (i = t);
    } else t && (Fu(e, t), (i = { default: 1 }));
    if (r) for (const l in o) !Iu(l) && i[l] == null && delete o[l];
  };
function Uo(e, t, n, s, o = !1) {
  if (J(e)) {
    e.forEach((d, h) => Uo(d, t && (J(t) ? t[h] : t), n, s, o));
    return;
  }
  if (An(s) && !o) return;
  const r = s.shapeFlag & 4 ? wr(s.component) : s.el,
    i = o ? null : r,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === me ? (l.refs = {}) : l.refs,
    f = l.setupState;
  if (
    (c != null &&
      c !== a &&
      (_e(c)
        ? ((u[c] = null), ie(f, c) && (f[c] = null))
        : Le(c) && (c.value = null)),
    Z(a))
  )
    rn(a, l, 12, [i, u]);
  else {
    const d = _e(a),
      h = Le(a);
    if (d || h) {
      const y = () => {
        if (e.f) {
          const g = d ? (ie(f, a) ? f[a] : u[a]) : a.value;
          o
            ? J(g) && zi(g, r)
            : J(g)
              ? g.includes(r) || g.push(r)
              : d
                ? ((u[a] = [r]), ie(f, a) && (f[a] = u[a]))
                : ((a.value = [r]), e.k && (u[e.k] = a.value));
        } else
          d
            ? ((u[a] = i), ie(f, a) && (f[a] = i))
            : h && ((a.value = i), e.k && (u[e.k] = i));
      };
      i ? ((y.id = -1), ke(y, n)) : y();
    }
  }
}
const Ep = Symbol('_vte'),
  Sp = (e) => e.__isTeleport;
let Ql = !1;
const Dn = () => {
    Ql ||
      (console.error('Hydration completed but contains mismatches.'),
      (Ql = !0));
  },
  Tp = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Cp = (e) => e.namespaceURI.includes('MathML'),
  po = (e) => {
    if (Tp(e)) return 'svg';
    if (Cp(e)) return 'mathml';
  },
  go = (e) => e.nodeType === 8;
function $p(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: o,
        nextSibling: r,
        parentNode: i,
        remove: l,
        insert: a,
        createComment: c,
      },
    } = e,
    u = (p, _) => {
      if (!_.hasChildNodes()) {
        n(null, p, _), jo(), (_._vnode = p);
        return;
      }
      f(_.firstChild, p, null, null, null), jo(), (_._vnode = p);
    },
    f = (p, _, S, E, R, L = !1) => {
      L = L || !!_.dynamicChildren;
      const P = go(p) && p.data === '[',
        C = () => g(p, _, S, E, R, P),
        { type: H, ref: k, shapeFlag: z, patchFlag: Q } = _;
      let ee = p.nodeType;
      (_.el = p), Q === -2 && ((L = !1), (_.dynamicChildren = null));
      let B = null;
      switch (H) {
        case kn:
          ee !== 3
            ? _.children === ''
              ? (a((_.el = o('')), i(p), p), (B = p))
              : (B = C())
            : (p.data !== _.children && (Dn(), (p.data = _.children)),
              (B = r(p)));
          break;
        case Me:
          v(p)
            ? ((B = r(p)), x((_.el = p.content.firstChild), p, S))
            : ee !== 8 || P
              ? (B = C())
              : (B = r(p));
          break;
        case Co:
          if ((P && ((p = r(p)), (ee = p.nodeType)), ee === 1 || ee === 3)) {
            B = p;
            const Y = !_.children.length;
            for (let q = 0; q < _.staticCount; q++)
              Y && (_.children += B.nodeType === 1 ? B.outerHTML : B.data),
                q === _.staticCount - 1 && (_.anchor = B),
                (B = r(B));
            return P ? r(B) : B;
          } else C();
          break;
        case Oe:
          P ? (B = y(p, _, S, E, R, L)) : (B = C());
          break;
        default:
          if (z & 1)
            (ee !== 1 || _.type.toLowerCase() !== p.tagName.toLowerCase()) &&
            !v(p)
              ? (B = C())
              : (B = d(p, _, S, E, R, L));
          else if (z & 6) {
            _.slotScopeIds = R;
            const Y = i(p);
            if (
              (P
                ? (B = b(p))
                : go(p) && p.data === 'teleport start'
                  ? (B = b(p, p.data, 'teleport end'))
                  : (B = r(p)),
              t(_, Y, null, S, E, po(Y), L),
              An(_))
            ) {
              let q;
              P
                ? ((q = ue(Oe)),
                  (q.anchor = B ? B.previousSibling : Y.lastChild))
                : (q = p.nodeType === 3 ? Ye('') : ue('div')),
                (q.el = p),
                (_.component.subTree = q);
            }
          } else
            z & 64
              ? ee !== 8
                ? (B = C())
                : (B = _.type.hydrate(p, _, S, E, R, L, e, h))
              : z & 128 &&
                (B = _.type.hydrate(p, _, S, E, po(i(p)), R, L, e, f));
      }
      return k != null && Uo(k, null, E, _), B;
    },
    d = (p, _, S, E, R, L) => {
      L = L || !!_.dynamicChildren;
      const {
          type: P,
          props: C,
          patchFlag: H,
          shapeFlag: k,
          dirs: z,
          transition: Q,
        } = _,
        ee = P === 'input' || P === 'option';
      if (ee || H !== -1) {
        z && xt(_, null, S, 'created');
        let B = !1;
        if (v(p)) {
          B = Wu(E, Q) && S && S.vnode.props && S.vnode.props.appear;
          const q = p.content.firstChild;
          B && Q.beforeEnter(q), x(q, p, S), (_.el = p = q);
        }
        if (k & 16 && !(C && (C.innerHTML || C.textContent))) {
          let q = h(p.firstChild, _, p, S, E, R, L);
          for (; q; ) {
            Dn();
            const ut = q;
            (q = q.nextSibling), l(ut);
          }
        } else
          k & 8 &&
            p.textContent !== _.children &&
            (Dn(), (p.textContent = _.children));
        if (C) {
          if (ee || !L || H & 48)
            for (const q in C)
              ((ee && (q.endsWith('value') || q === 'indeterminate')) ||
                (Qs(q) && !Kn(q)) ||
                q[0] === '.') &&
                s(p, q, null, C[q], void 0, S);
          else if (C.onClick) s(p, 'onClick', null, C.onClick, void 0, S);
          else if (H & 4 && Jn(C.style)) for (const q in C.style) C.style[q];
        }
        let Y;
        (Y = C && C.onVnodeBeforeMount) && Ue(Y, S, _),
          z && xt(_, null, S, 'beforeMount'),
          ((Y = C && C.onVnodeMounted) || z || B) &&
            Yu(() => {
              Y && Ue(Y, S, _), B && Q.enter(p), z && xt(_, null, S, 'mounted');
            }, E);
      }
      return p.nextSibling;
    },
    h = (p, _, S, E, R, L, P) => {
      P = P || !!_.dynamicChildren;
      const C = _.children,
        H = C.length;
      for (let k = 0; k < H; k++) {
        const z = P ? C[k] : (C[k] = Je(C[k])),
          Q = z.type === kn;
        if (p) {
          if (Q && !P) {
            let ee = C[k + 1];
            ee &&
              (ee = Je(ee)).type === kn &&
              (a(o(p.data.slice(z.children.length)), S, r(p)),
              (p.data = z.children));
          }
          p = f(p, z, E, R, L, P);
        } else
          Q && !z.children
            ? a((z.el = o('')), S)
            : (Dn(), n(null, z, S, null, E, R, po(S), L));
      }
      return p;
    },
    y = (p, _, S, E, R, L) => {
      const { slotScopeIds: P } = _;
      P && (R = R ? R.concat(P) : P);
      const C = i(p),
        H = h(r(p), _, C, S, E, R, L);
      return H && go(H) && H.data === ']'
        ? r((_.anchor = H))
        : (Dn(), a((_.anchor = c(']')), C, H), H);
    },
    g = (p, _, S, E, R, L) => {
      if ((Dn(), (_.el = null), L)) {
        const H = b(p);
        for (;;) {
          const k = r(p);
          if (k && k !== H) l(k);
          else break;
        }
      }
      const P = r(p),
        C = i(p);
      return l(p), n(null, _, C, P, S, E, po(C), R), P;
    },
    b = (p, _ = '[', S = ']') => {
      let E = 0;
      for (; p; )
        if (((p = r(p)), p && go(p) && (p.data === _ && E++, p.data === S))) {
          if (E === 0) return r(p);
          E--;
        }
      return p;
    },
    x = (p, _, S) => {
      const E = _.parentNode;
      E && E.replaceChild(p, _);
      let R = S;
      for (; R; )
        R.vnode.el === _ && (R.vnode.el = R.subTree.el = p), (R = R.parent);
    },
    v = (p) => p.nodeType === 1 && p.tagName.toLowerCase() === 'template';
  return [u, f];
}
const ke = Yu;
function Rp(e) {
  return Bu(e);
}
function Pp(e) {
  return Bu(e, $p);
}
function Bu(e, t) {
  const n = zc();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: o,
      patchProp: r,
      createElement: i,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = it,
      insertStaticContent: y,
    } = e,
    g = (
      m,
      w,
      T,
      O = null,
      $ = null,
      N = null,
      D = void 0,
      j = null,
      F = !!w.dynamicChildren
    ) => {
      if (m === w) return;
      m && !ht(m, w) && ((O = A(m)), Be(m, $, N, !0), (m = null)),
        w.patchFlag === -2 && ((F = !1), (w.dynamicChildren = null));
      const { type: M, ref: V, shapeFlag: X } = w;
      switch (M) {
        case kn:
          b(m, w, T, O);
          break;
        case Me:
          x(m, w, T, O);
          break;
        case Co:
          m == null && v(w, T, O, D);
          break;
        case Oe:
          k(m, w, T, O, $, N, D, j, F);
          break;
        default:
          X & 1
            ? S(m, w, T, O, $, N, D, j, F)
            : X & 6
              ? z(m, w, T, O, $, N, D, j, F)
              : (X & 64 || X & 128) && M.process(m, w, T, O, $, N, D, j, F, K);
      }
      V != null && $ && Uo(V, m && m.ref, N, w || m, !w);
    },
    b = (m, w, T, O) => {
      if (m == null) s((w.el = l(w.children)), T, O);
      else {
        const $ = (w.el = m.el);
        w.children !== m.children && c($, w.children);
      }
    },
    x = (m, w, T, O) => {
      m == null ? s((w.el = a(w.children || '')), T, O) : (w.el = m.el);
    },
    v = (m, w, T, O) => {
      [m.el, m.anchor] = y(m.children, w, T, O, m.el, m.anchor);
    },
    p = ({ el: m, anchor: w }, T, O) => {
      let $;
      for (; m && m !== w; ) ($ = d(m)), s(m, T, O), (m = $);
      s(w, T, O);
    },
    _ = ({ el: m, anchor: w }) => {
      let T;
      for (; m && m !== w; ) (T = d(m)), o(m), (m = T);
      o(w);
    },
    S = (m, w, T, O, $, N, D, j, F) => {
      w.type === 'svg' ? (D = 'svg') : w.type === 'math' && (D = 'mathml'),
        m == null ? E(w, T, O, $, N, D, j, F) : P(m, w, $, N, D, j, F);
    },
    E = (m, w, T, O, $, N, D, j) => {
      let F, M;
      const { props: V, shapeFlag: X, transition: G, dirs: te } = m;
      if (
        ((F = m.el = i(m.type, N, V && V.is, V)),
        X & 8
          ? u(F, m.children)
          : X & 16 && L(m.children, F, null, O, $, Dr(m, N), D, j),
        te && xt(m, null, O, 'created'),
        R(F, m, m.scopeId, D, O),
        V)
      ) {
        for (const ye in V)
          ye !== 'value' && !Kn(ye) && r(F, ye, null, V[ye], N, O);
        'value' in V && r(F, 'value', null, V.value, N),
          (M = V.onVnodeBeforeMount) && Ue(M, O, m);
      }
      te && xt(m, null, O, 'beforeMount');
      const ne = Wu($, G);
      ne && G.beforeEnter(F),
        s(F, w, T),
        ((M = V && V.onVnodeMounted) || ne || te) &&
          ke(() => {
            M && Ue(M, O, m), ne && G.enter(F), te && xt(m, null, O, 'mounted');
          }, $);
    },
    R = (m, w, T, O, $) => {
      if ((T && h(m, T), O)) for (let N = 0; N < O.length; N++) h(m, O[N]);
      if ($) {
        let N = $.subTree;
        if (w === N) {
          const D = $.vnode;
          R(m, D, D.scopeId, D.slotScopeIds, $.parent);
        }
      }
    },
    L = (m, w, T, O, $, N, D, j, F = 0) => {
      for (let M = F; M < m.length; M++) {
        const V = (m[M] = j ? Qt(m[M]) : Je(m[M]));
        g(null, V, w, T, O, $, N, D, j);
      }
    },
    P = (m, w, T, O, $, N, D) => {
      const j = (w.el = m.el);
      let { patchFlag: F, dynamicChildren: M, dirs: V } = w;
      F |= m.patchFlag & 16;
      const X = m.props || me,
        G = w.props || me;
      let te;
      if (
        (T && mn(T, !1),
        (te = G.onVnodeBeforeUpdate) && Ue(te, T, w, m),
        V && xt(w, m, T, 'beforeUpdate'),
        T && mn(T, !0),
        ((X.innerHTML && G.innerHTML == null) ||
          (X.textContent && G.textContent == null)) &&
          u(j, ''),
        M
          ? C(m.dynamicChildren, M, j, T, O, Dr(w, $), N)
          : D || q(m, w, j, null, T, O, Dr(w, $), N, !1),
        F > 0)
      ) {
        if (F & 16) H(j, X, G, T, $);
        else if (
          (F & 2 && X.class !== G.class && r(j, 'class', null, G.class, $),
          F & 4 && r(j, 'style', X.style, G.style, $),
          F & 8)
        ) {
          const ne = w.dynamicProps;
          for (let ye = 0; ye < ne.length; ye++) {
            const de = ne[ye],
              Pe = X[de],
              ft = G[de];
            (ft !== Pe || de === 'value') && r(j, de, Pe, ft, $, T);
          }
        }
        F & 1 && m.children !== w.children && u(j, w.children);
      } else !D && M == null && H(j, X, G, T, $);
      ((te = G.onVnodeUpdated) || V) &&
        ke(() => {
          te && Ue(te, T, w, m), V && xt(w, m, T, 'updated');
        }, O);
    },
    C = (m, w, T, O, $, N, D) => {
      for (let j = 0; j < w.length; j++) {
        const F = m[j],
          M = w[j],
          V =
            F.el && (F.type === Oe || !ht(F, M) || F.shapeFlag & 70)
              ? f(F.el)
              : T;
        g(F, M, V, null, O, $, N, D, !0);
      }
    },
    H = (m, w, T, O, $) => {
      if (w !== T) {
        if (w !== me)
          for (const N in w) !Kn(N) && !(N in T) && r(m, N, w[N], null, $, O);
        for (const N in T) {
          if (Kn(N)) continue;
          const D = T[N],
            j = w[N];
          D !== j && N !== 'value' && r(m, N, j, D, $, O);
        }
        'value' in T && r(m, 'value', w.value, T.value, $);
      }
    },
    k = (m, w, T, O, $, N, D, j, F) => {
      const M = (w.el = m ? m.el : l('')),
        V = (w.anchor = m ? m.anchor : l(''));
      let { patchFlag: X, dynamicChildren: G, slotScopeIds: te } = w;
      te && (j = j ? j.concat(te) : te),
        m == null
          ? (s(M, T, O), s(V, T, O), L(w.children || [], T, V, $, N, D, j, F))
          : X > 0 && X & 64 && G && m.dynamicChildren
            ? (C(m.dynamicChildren, G, T, $, N, D, j),
              (w.key != null || ($ && w === $.subTree)) && Uu(m, w, !0))
            : q(m, w, T, V, $, N, D, j, F);
    },
    z = (m, w, T, O, $, N, D, j, F) => {
      (w.slotScopeIds = j),
        m == null
          ? w.shapeFlag & 512
            ? $.ctx.activate(w, T, O, D, F)
            : Q(w, T, O, $, N, D, F)
          : ee(m, w, F);
    },
    Q = (m, w, T, O, $, N, D) => {
      const j = (m.component = Jp(m, O, $));
      if ((Zs(m) && (j.ctx.renderer = K), Xp(j, !1, D), j.asyncDep)) {
        if (($ && $.registerDep(j, B, D), !m.el)) {
          const F = (j.subTree = ue(Me));
          x(null, F, w, T);
        }
      } else B(j, m, w, T, $, N, D);
    },
    ee = (m, w, T) => {
      const O = (w.component = m.component);
      if (Fp(m, w, T))
        if (O.asyncDep && !O.asyncResolved) {
          Y(O, w, T);
          return;
        } else (O.next = w), zh(O.update), (O.effect.dirty = !0), O.update();
      else (w.el = m.el), (O.vnode = w);
    },
    B = (m, w, T, O, $, N, D) => {
      const j = () => {
          if (m.isMounted) {
            let { next: V, bu: X, u: G, parent: te, vnode: ne } = m;
            {
              const Fn = Vu(m);
              if (Fn) {
                V && ((V.el = ne.el), Y(m, V, D)),
                  Fn.asyncDep.then(() => {
                    m.isUnmounted || j();
                  });
                return;
              }
            }
            let ye = V,
              de;
            mn(m, !1),
              V ? ((V.el = ne.el), Y(m, V, D)) : (V = ne),
              X && Gn(X),
              (de = V.props && V.props.onVnodeBeforeUpdate) &&
                Ue(de, te, V, ne),
              mn(m, !0);
            const Pe = Br(m),
              ft = m.subTree;
            (m.subTree = Pe),
              g(ft, Pe, f(ft.el), A(ft), m, $, N),
              (V.el = Pe.el),
              ye === null && ll(m, Pe.el),
              G && ke(G, $),
              (de = V.props && V.props.onVnodeUpdated) &&
                ke(() => Ue(de, te, V, ne), $);
          } else {
            let V;
            const { el: X, props: G } = w,
              { bm: te, m: ne, parent: ye } = m,
              de = An(w);
            if (
              (mn(m, !1),
              te && Gn(te),
              !de && (V = G && G.onVnodeBeforeMount) && Ue(V, ye, w),
              mn(m, !0),
              X && ve)
            ) {
              const Pe = () => {
                (m.subTree = Br(m)), ve(X, m.subTree, m, $, null);
              };
              de
                ? w.type.__asyncLoader().then(() => !m.isUnmounted && Pe())
                : Pe();
            } else {
              const Pe = (m.subTree = Br(m));
              g(null, Pe, T, O, m, $, N), (w.el = Pe.el);
            }
            if ((ne && ke(ne, $), !de && (V = G && G.onVnodeMounted))) {
              const Pe = w;
              ke(() => Ue(V, ye, Pe), $);
            }
            (w.shapeFlag & 256 ||
              (ye && An(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              m.a &&
              ke(m.a, $),
              (m.isMounted = !0),
              (w = T = O = null);
          }
        },
        F = (m.effect = new Gi(j, it, () => pr(M), m.scope)),
        M = (m.update = () => {
          F.dirty && F.run();
        });
      (M.i = m), (M.id = m.uid), mn(m, !0), M();
    },
    Y = (m, w, T) => {
      w.component = m;
      const O = m.vnode.props;
      (m.vnode = w),
        (m.next = null),
        vp(m, w.props, O, T),
        xp(m, w.children, T),
        dn(),
        Bl(m),
        hn();
    },
    q = (m, w, T, O, $, N, D, j, F = !1) => {
      const M = m && m.children,
        V = m ? m.shapeFlag : 0,
        X = w.children,
        { patchFlag: G, shapeFlag: te } = w;
      if (G > 0) {
        if (G & 128) {
          Bt(M, X, T, O, $, N, D, j, F);
          return;
        } else if (G & 256) {
          ut(M, X, T, O, $, N, D, j, F);
          return;
        }
      }
      te & 8
        ? (V & 16 && nt(M, $, N), X !== M && u(T, X))
        : V & 16
          ? te & 16
            ? Bt(M, X, T, O, $, N, D, j, F)
            : nt(M, $, N, !0)
          : (V & 8 && u(T, ''), te & 16 && L(X, T, O, $, N, D, j, F));
    },
    ut = (m, w, T, O, $, N, D, j, F) => {
      (m = m || zn), (w = w || zn);
      const M = m.length,
        V = w.length,
        X = Math.min(M, V);
      let G;
      for (G = 0; G < X; G++) {
        const te = (w[G] = F ? Qt(w[G]) : Je(w[G]));
        g(m[G], te, T, null, $, N, D, j, F);
      }
      M > V ? nt(m, $, N, !0, !1, X) : L(w, T, O, $, N, D, j, F, X);
    },
    Bt = (m, w, T, O, $, N, D, j, F) => {
      let M = 0;
      const V = w.length;
      let X = m.length - 1,
        G = V - 1;
      for (; M <= X && M <= G; ) {
        const te = m[M],
          ne = (w[M] = F ? Qt(w[M]) : Je(w[M]));
        if (ht(te, ne)) g(te, ne, T, null, $, N, D, j, F);
        else break;
        M++;
      }
      for (; M <= X && M <= G; ) {
        const te = m[X],
          ne = (w[G] = F ? Qt(w[G]) : Je(w[G]));
        if (ht(te, ne)) g(te, ne, T, null, $, N, D, j, F);
        else break;
        X--, G--;
      }
      if (M > X) {
        if (M <= G) {
          const te = G + 1,
            ne = te < V ? w[te].el : O;
          for (; M <= G; )
            g(null, (w[M] = F ? Qt(w[M]) : Je(w[M])), T, ne, $, N, D, j, F),
              M++;
        }
      } else if (M > G) for (; M <= X; ) Be(m[M], $, N, !0), M++;
      else {
        const te = M,
          ne = M,
          ye = new Map();
        for (M = ne; M <= G; M++) {
          const qe = (w[M] = F ? Qt(w[M]) : Je(w[M]));
          qe.key != null && ye.set(qe.key, M);
        }
        let de,
          Pe = 0;
        const ft = G - ne + 1;
        let Fn = !1,
          Rl = 0;
        const gs = new Array(ft);
        for (M = 0; M < ft; M++) gs[M] = 0;
        for (M = te; M <= X; M++) {
          const qe = m[M];
          if (Pe >= ft) {
            Be(qe, $, N, !0);
            continue;
          }
          let bt;
          if (qe.key != null) bt = ye.get(qe.key);
          else
            for (de = ne; de <= G; de++)
              if (gs[de - ne] === 0 && ht(qe, w[de])) {
                bt = de;
                break;
              }
          bt === void 0
            ? Be(qe, $, N, !0)
            : ((gs[bt - ne] = M + 1),
              bt >= Rl ? (Rl = bt) : (Fn = !0),
              g(qe, w[bt], T, null, $, N, D, j, F),
              Pe++);
        }
        const Pl = Fn ? Ap(gs) : zn;
        for (de = Pl.length - 1, M = ft - 1; M >= 0; M--) {
          const qe = ne + M,
            bt = w[qe],
            Al = qe + 1 < V ? w[qe + 1].el : O;
          gs[M] === 0
            ? g(null, bt, T, Al, $, N, D, j, F)
            : Fn && (de < 0 || M !== Pl[de] ? _t(bt, T, Al, 2) : de--);
        }
      }
    },
    _t = (m, w, T, O, $ = null) => {
      const { el: N, type: D, transition: j, children: F, shapeFlag: M } = m;
      if (M & 6) {
        _t(m.component.subTree, w, T, O);
        return;
      }
      if (M & 128) {
        m.suspense.move(w, T, O);
        return;
      }
      if (M & 64) {
        D.move(m, w, T, K);
        return;
      }
      if (D === Oe) {
        s(N, w, T);
        for (let X = 0; X < F.length; X++) _t(F[X], w, T, O);
        s(m.anchor, w, T);
        return;
      }
      if (D === Co) {
        p(m, w, T);
        return;
      }
      if (O !== 2 && M & 1 && j)
        if (O === 0) j.beforeEnter(N), s(N, w, T), ke(() => j.enter(N), $);
        else {
          const { leave: X, delayLeave: G, afterLeave: te } = j,
            ne = () => s(N, w, T),
            ye = () => {
              X(N, () => {
                ne(), te && te();
              });
            };
          G ? G(N, ne, ye) : ye();
        }
      else s(N, w, T);
    },
    Be = (m, w, T, O = !1, $ = !1) => {
      const {
        type: N,
        props: D,
        ref: j,
        children: F,
        dynamicChildren: M,
        shapeFlag: V,
        patchFlag: X,
        dirs: G,
        cacheIndex: te,
      } = m;
      if (
        (X === -2 && ($ = !1),
        j != null && Uo(j, null, T, m, !0),
        te != null && (w.renderCache[te] = void 0),
        V & 256)
      ) {
        w.ctx.deactivate(m);
        return;
      }
      const ne = V & 1 && G,
        ye = !An(m);
      let de;
      if ((ye && (de = D && D.onVnodeBeforeUnmount) && Ue(de, w, m), V & 6))
        ro(m.component, T, O);
      else {
        if (V & 128) {
          m.suspense.unmount(T, O);
          return;
        }
        ne && xt(m, null, w, 'beforeUnmount'),
          V & 64
            ? m.type.remove(m, w, T, K, O)
            : M && !M.hasOnce && (N !== Oe || (X > 0 && X & 64))
              ? nt(M, w, T, !1, !0)
              : ((N === Oe && X & 384) || (!$ && V & 16)) && nt(F, w, T),
          O && In(m);
      }
      ((ye && (de = D && D.onVnodeUnmounted)) || ne) &&
        ke(() => {
          de && Ue(de, w, m), ne && xt(m, null, w, 'unmounted');
        }, T);
    },
    In = (m) => {
      const { type: w, el: T, anchor: O, transition: $ } = m;
      if (w === Oe) {
        jn(T, O);
        return;
      }
      if (w === Co) {
        _(m);
        return;
      }
      const N = () => {
        o(T), $ && !$.persisted && $.afterLeave && $.afterLeave();
      };
      if (m.shapeFlag & 1 && $ && !$.persisted) {
        const { leave: D, delayLeave: j } = $,
          F = () => D(T, N);
        j ? j(m.el, N, F) : F();
      } else N();
    },
    jn = (m, w) => {
      let T;
      for (; m !== w; ) (T = d(m)), o(m), (m = T);
      o(w);
    },
    ro = (m, w, T) => {
      const { bum: O, scope: $, update: N, subTree: D, um: j, m: F, a: M } = m;
      Vo(F),
        Vo(M),
        O && Gn(O),
        $.stop(),
        N && ((N.active = !1), Be(D, m, w, T)),
        j && ke(j, w),
        ke(() => {
          m.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    nt = (m, w, T, O = !1, $ = !1, N = 0) => {
      for (let D = N; D < m.length; D++) Be(m[D], w, T, O, $);
    },
    A = (m) => {
      if (m.shapeFlag & 6) return A(m.component.subTree);
      if (m.shapeFlag & 128) return m.suspense.next();
      const w = d(m.anchor || m.el),
        T = w && w[Ep];
      return T ? d(T) : w;
    };
  let U = !1;
  const W = (m, w, T) => {
      m == null
        ? w._vnode && Be(w._vnode, null, null, !0)
        : g(w._vnode || null, m, w, null, null, null, T),
        U || ((U = !0), Bl(), jo(), (U = !1)),
        (w._vnode = m);
    },
    K = { p: g, um: Be, m: _t, r: In, mt: Q, mc: L, pc: q, pbc: C, n: A, o: e };
  let fe, ve;
  return (
    t && ([fe, ve] = t(K)), { render: W, hydrate: fe, createApp: mp(W, fe) }
  );
}
function Dr({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n;
}
function mn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Wu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Uu(e, t, n = !1) {
  const s = e.children,
    o = t.children;
  if (J(s) && J(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[r] = Qt(o[r])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && Uu(i, l)),
        l.type === kn && (l.el = i.el);
    }
}
function Ap(e) {
  const t = e.slice(),
    n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[s] = o), n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        (l = (r + i) >> 1), e[n[l]] < c ? (r = l + 1) : (i = l);
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i]);
  return n;
}
function Vu(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Vu(t);
}
function Vo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const kp = Symbol.for('v-scx'),
  Op = () => Ze(kp);
function zu(e, t) {
  return yr(e, null, t);
}
function Mp(e, t) {
  return yr(e, null, { flush: 'sync' });
}
const mo = {};
function gt(e, t, n) {
  return yr(e, t, n);
}
function yr(
  e,
  t,
  { immediate: n, deep: s, flush: o, once: r, onTrack: i, onTrigger: l } = me
) {
  if (t && r) {
    const E = t;
    t = (...R) => {
      E(...R), S();
    };
  }
  const a = Ce,
    c = (E) => (s === !0 ? E : en(E, s === !1 ? 1 : void 0));
  let u,
    f = !1,
    d = !1;
  if (
    (Le(e)
      ? ((u = () => e.value), (f = ns(e)))
      : Jn(e)
        ? ((u = () => c(e)), (f = !0))
        : J(e)
          ? ((d = !0),
            (f = e.some((E) => Jn(E) || ns(E))),
            (u = () =>
              e.map((E) => {
                if (Le(E)) return E.value;
                if (Jn(E)) return c(E);
                if (Z(E)) return rn(E, a, 2);
              })))
          : Z(e)
            ? t
              ? (u = () => rn(e, a, 2))
              : (u = () => (h && h(), at(e, a, 3, [y])))
            : (u = it),
    t && s)
  ) {
    const E = u;
    u = () => en(E());
  }
  let h,
    y = (E) => {
      h = p.onStop = () => {
        rn(E, a, 4), (h = p.onStop = void 0);
      };
    },
    g;
  if (no)
    if (
      ((y = it),
      t ? n && at(t, a, 3, [u(), d ? [] : void 0, y]) : u(),
      o === 'sync')
    ) {
      const E = Op();
      g = E.__watcherHandles || (E.__watcherHandles = []);
    } else return it;
  let b = d ? new Array(e.length).fill(mo) : mo;
  const x = () => {
    if (!(!p.active || !p.dirty))
      if (t) {
        const E = p.run();
        (s || f || (d ? E.some((R, L) => Pt(R, b[L])) : Pt(E, b))) &&
          (h && h(),
          at(t, a, 3, [E, b === mo ? void 0 : d && b[0] === mo ? [] : b, y]),
          (b = E));
      } else p.run();
  };
  x.allowRecurse = !!t;
  let v;
  o === 'sync'
    ? (v = x)
    : o === 'post'
      ? (v = () => ke(x, a && a.suspense))
      : ((x.pre = !0), a && (x.id = a.uid), (v = () => pr(x)));
  const p = new Gi(u, it, v),
    _ = Ki(),
    S = () => {
      p.stop(), _ && zi(_.effects, p);
    };
  return (
    t
      ? n
        ? x()
        : (b = p.run())
      : o === 'post'
        ? ke(p.run.bind(p), a && a.suspense)
        : p.run(),
    g && g.push(S),
    S
  );
}
function Lp(e, t, n) {
  const s = this.proxy,
    o = _e(e) ? (e.includes('.') ? qu(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  Z(t) ? (r = t) : ((r = t.handler), (n = t));
  const i = to(this),
    l = yr(o, r.bind(s), n);
  return i(), l;
}
function qu(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++) s = s[n[o]];
    return s;
  };
}
function en(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Le(e))) en(e.value, t, n);
  else if (J(e)) for (let s = 0; s < e.length; s++) en(e[s], t, n);
  else if (Fc(e) || qn(e))
    e.forEach((s) => {
      en(s, t, n);
    });
  else if (Wc(e)) {
    for (const s in e) en(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && en(e[s], t, n);
  }
  return e;
}
function ux(e, t, n = me) {
  const s = Nn(),
    o = ct(t),
    r = jt(t),
    i = Ku(e, t),
    l = du((a, c) => {
      let u, f, d;
      return (
        Mp(() => {
          const h = e[t];
          Pt(u, h) && ((u = h), c());
        }),
        {
          get() {
            return a(), n.get ? n.get(u) : u;
          },
          set(h) {
            if (!Pt(h, u)) return;
            const y = s.vnode.props;
            (y &&
              (t in y || o in y || r in y) &&
              (`onUpdate:${t}` in y ||
                `onUpdate:${o}` in y ||
                `onUpdate:${r}` in y)) ||
              ((u = h), c());
            const g = n.set ? n.set(h) : h;
            s.emit(`update:${t}`, g),
              h !== g && h !== f && g === d && c(),
              (f = h),
              (d = g);
          },
        }
      );
    });
  return (
    (l[Symbol.iterator] = () => {
      let a = 0;
      return {
        next() {
          return a < 2 ? { value: a++ ? i || me : l, done: !1 } : { done: !0 };
        },
      };
    }),
    l
  );
}
const Ku = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${jt(t)}Modifiers`];
function Np(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || me;
  let o = n;
  const r = t.startsWith('update:'),
    i = r && Ku(s, t.slice(7));
  i &&
    (i.trim && (o = n.map((u) => (_e(u) ? u.trim() : u))),
    i.number && (o = n.map(si)));
  let l,
    a = s[(l = Lr(t))] || s[(l = Lr(ct(t)))];
  !a && r && (a = s[(l = Lr(jt(t)))]), a && at(a, e, 6, o);
  const c = s[l + 'Once'];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), at(c, e, 6, o);
  }
}
function Gu(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e);
  if (o !== void 0) return o;
  const r = e.emits;
  let i = {},
    l = !1;
  if (!Z(e)) {
    const a = (c) => {
      const u = Gu(c, t, !0);
      u && ((l = !0), Re(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !r && !l
    ? (ge(e) && s.set(e, null), null)
    : (J(r) ? r.forEach((a) => (i[a] = null)) : Re(i, r),
      ge(e) && s.set(e, i),
      i);
}
function vr(e, t) {
  return !e || !Qs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, jt(t)) || ie(e, t));
}
function Br(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: o,
      propsOptions: [r],
      slots: i,
      attrs: l,
      emit: a,
      render: c,
      renderCache: u,
      props: f,
      data: d,
      setupState: h,
      ctx: y,
      inheritAttrs: g,
    } = e,
    b = Fo(e);
  let x, v;
  try {
    if (n.shapeFlag & 4) {
      const _ = o || s,
        S = _;
      (x = Je(c.call(S, _, u, f, h, d, y))), (v = l);
    } else {
      const _ = t;
      (x = Je(
        _.length > 1 ? _(f, { attrs: l, slots: i, emit: a }) : _(f, null)
      )),
        (v = t.props ? l : Ip(l));
    }
  } catch (_) {
    ($s.length = 0), ds(_, e, 1), (x = ue(Me));
  }
  let p = x;
  if (v && g !== !1) {
    const _ = Object.keys(v),
      { shapeFlag: S } = p;
    _.length &&
      S & 7 &&
      (r && _.some(Vi) && (v = jp(v, r)), (p = Ht(p, v, !1, !0)));
  }
  return (
    n.dirs &&
      ((p = Ht(p, null, !1, !0)),
      (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (p.transition = n.transition),
    (x = p),
    Fo(b),
    x
  );
}
function Hp(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rs(o)) {
      if (o.type !== Me || o.children === 'v-if') {
        if (n) return;
        n = o;
      }
    } else return;
  }
  return n;
}
const Ip = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Qs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  jp = (e, t) => {
    const n = {};
    for (const s in e) (!Vi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Fp(e, t, n) {
  const { props: s, children: o, component: r } = e,
    { props: i, children: l, patchFlag: a } = t,
    c = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Zl(s, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (i[d] !== s[d] && !vr(c, d)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? Zl(s, i, c)
            : !0
          : !!i;
  return !1;
}
function Zl(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !vr(n, r)) return !0;
  }
  return !1;
}
function ll({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const pi = (e) => e.__isSuspense;
let gi = 0;
const Dp = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, s, o, r, i, l, a, c) {
      if (e == null) Bp(t, n, s, o, r, i, l, a, c);
      else {
        if (r && r.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        Wp(e, t, n, s, o, i, l, a, c);
      }
    },
    hydrate: Up,
    normalize: Vp,
  },
  Ju = Dp;
function Ds(e, t) {
  const n = e.props && e.props[t];
  Z(n) && n();
}
function Bp(e, t, n, s, o, r, i, l, a) {
  const {
      p: c,
      o: { createElement: u },
    } = a,
    f = u('div'),
    d = (e.suspense = Xu(e, o, s, t, f, n, r, i, l, a));
  c(null, (d.pendingBranch = e.ssContent), f, null, s, d, r, i),
    d.deps > 0
      ? (Ds(e, 'onPending'),
        Ds(e, 'onFallback'),
        c(null, e.ssFallback, t, n, s, null, r, i),
        Zn(d, e.ssFallback))
      : d.resolve(!1, !0);
}
function Wp(e, t, n, s, o, r, i, l, { p: a, um: c, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const d = t.ssContent,
    h = t.ssFallback,
    { activeBranch: y, pendingBranch: g, isInFallback: b, isHydrating: x } = f;
  if (g)
    (f.pendingBranch = d),
      ht(d, g)
        ? (a(g, d, f.hiddenContainer, null, o, f, r, i, l),
          f.deps <= 0
            ? f.resolve()
            : b && (x || (a(y, h, n, s, o, null, r, i, l), Zn(f, h))))
        : ((f.pendingId = gi++),
          x ? ((f.isHydrating = !1), (f.activeBranch = g)) : c(g, o, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = u('div')),
          b
            ? (a(null, d, f.hiddenContainer, null, o, f, r, i, l),
              f.deps <= 0
                ? f.resolve()
                : (a(y, h, n, s, o, null, r, i, l), Zn(f, h)))
            : y && ht(d, y)
              ? (a(y, d, n, s, o, f, r, i, l), f.resolve(!0))
              : (a(null, d, f.hiddenContainer, null, o, f, r, i, l),
                f.deps <= 0 && f.resolve()));
  else if (y && ht(d, y)) a(y, d, n, s, o, f, r, i, l), Zn(f, d);
  else if (
    (Ds(t, 'onPending'),
    (f.pendingBranch = d),
    d.shapeFlag & 512
      ? (f.pendingId = d.component.suspenseId)
      : (f.pendingId = gi++),
    a(null, d, f.hiddenContainer, null, o, f, r, i, l),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: v, pendingId: p } = f;
    v > 0
      ? setTimeout(() => {
          f.pendingId === p && f.fallback(h);
        }, v)
      : v === 0 && f.fallback(h);
  }
}
function Xu(e, t, n, s, o, r, i, l, a, c, u = !1) {
  const {
    p: f,
    m: d,
    um: h,
    n: y,
    o: { parentNode: g, remove: b },
  } = c;
  let x;
  const v = zp(e);
  v && t && t.pendingBranch && ((x = t.pendingId), t.deps++);
  const p = e.props ? Vc(e.props.timeout) : void 0,
    _ = r,
    S = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: s,
      hiddenContainer: o,
      deps: 0,
      pendingId: gi++,
      timeout: typeof p == 'number' ? p : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(E = !1, R = !1) {
        const {
          vnode: L,
          activeBranch: P,
          pendingBranch: C,
          pendingId: H,
          effects: k,
          parentComponent: z,
          container: Q,
        } = S;
        let ee = !1;
        S.isHydrating
          ? (S.isHydrating = !1)
          : E ||
            ((ee = P && C.transition && C.transition.mode === 'out-in'),
            ee &&
              (P.transition.afterLeave = () => {
                H === S.pendingId && (d(C, Q, r === _ ? y(P) : r, 0), ai(k));
              }),
            P && (g(P.el) !== S.hiddenContainer && (r = y(P)), h(P, z, S, !0)),
            ee || d(C, Q, r, 0)),
          Zn(S, C),
          (S.pendingBranch = null),
          (S.isInFallback = !1);
        let B = S.parent,
          Y = !1;
        for (; B; ) {
          if (B.pendingBranch) {
            B.effects.push(...k), (Y = !0);
            break;
          }
          B = B.parent;
        }
        !Y && !ee && ai(k),
          (S.effects = []),
          v &&
            t &&
            t.pendingBranch &&
            x === t.pendingId &&
            (t.deps--, t.deps === 0 && !R && t.resolve()),
          Ds(L, 'onResolve');
      },
      fallback(E) {
        if (!S.pendingBranch) return;
        const {
          vnode: R,
          activeBranch: L,
          parentComponent: P,
          container: C,
          namespace: H,
        } = S;
        Ds(R, 'onFallback');
        const k = y(L),
          z = () => {
            S.isInFallback && (f(null, E, C, k, P, null, H, l, a), Zn(S, E));
          },
          Q = E.transition && E.transition.mode === 'out-in';
        Q && (L.transition.afterLeave = z),
          (S.isInFallback = !0),
          h(L, P, null, !0),
          Q || z();
      },
      move(E, R, L) {
        S.activeBranch && d(S.activeBranch, E, R, L), (S.container = E);
      },
      next() {
        return S.activeBranch && y(S.activeBranch);
      },
      registerDep(E, R, L) {
        const P = !!S.pendingBranch;
        P && S.deps++;
        const C = E.vnode.el;
        E.asyncDep
          .catch((H) => {
            ds(H, E, 0);
          })
          .then((H) => {
            if (E.isUnmounted || S.isUnmounted || S.pendingId !== E.suspenseId)
              return;
            E.asyncResolved = !0;
            const { vnode: k } = E;
            yi(E, H, !1), C && (k.el = C);
            const z = !C && E.subTree.el;
            R(E, k, g(C || E.subTree.el), C ? null : y(E.subTree), S, i, L),
              z && b(z),
              ll(E, k.el),
              P && --S.deps === 0 && S.resolve();
          });
      },
      unmount(E, R) {
        (S.isUnmounted = !0),
          S.activeBranch && h(S.activeBranch, n, E, R),
          S.pendingBranch && h(S.pendingBranch, n, E, R);
      },
    };
  return S;
}
function Up(e, t, n, s, o, r, i, l, a) {
  const c = (t.suspense = Xu(
      t,
      s,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      o,
      r,
      i,
      l,
      !0
    )),
    u = a(e, (c.pendingBranch = t.ssContent), n, c, r, i);
  return c.deps === 0 && c.resolve(!1, !0), u;
}
function Vp(e) {
  const { shapeFlag: t, children: n } = e,
    s = t & 32;
  (e.ssContent = ea(s ? n.default : n)),
    (e.ssFallback = s ? ea(n.fallback) : ue(Me));
}
function ea(e) {
  let t;
  if (Z(e)) {
    const n = os && e._c;
    n && ((e._d = !1), pe()), (e = e()), n && ((e._d = !0), (t = Ve), Qu());
  }
  return (
    J(e) && (e = Hp(e)),
    (e = Je(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Yu(e, t) {
  t && t.pendingBranch
    ? J(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ai(e);
}
function Zn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; ) (t = t.component.subTree), (o = t.el);
  (n.el = o), s && s.subTree === n && ((s.vnode.el = o), ll(s, o));
}
function zp(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Oe = Symbol.for('v-fgt'),
  kn = Symbol.for('v-txt'),
  Me = Symbol.for('v-cmt'),
  Co = Symbol.for('v-stc'),
  $s = [];
let Ve = null;
function pe(e = !1) {
  $s.push((Ve = e ? null : []));
}
function Qu() {
  $s.pop(), (Ve = $s[$s.length - 1] || null);
}
let os = 1;
function ta(e) {
  (os += e), e < 0 && Ve && (Ve.hasOnce = !0);
}
function Zu(e) {
  return (
    (e.dynamicChildren = os > 0 ? Ve || zn : null),
    Qu(),
    os > 0 && Ve && Ve.push(e),
    e
  );
}
function je(e, t, n, s, o, r) {
  return Zu(oe(e, t, n, s, o, r, !0));
}
function Xe(e, t, n, s, o) {
  return Zu(ue(e, t, n, s, o, !0));
}
function rs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ef = ({ key: e }) => e ?? null,
  $o = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? _e(e) || Le(e) || Z(e)
        ? { i: $e, r: e, k: t, f: !!n }
        : e
      : null
  );
function oe(
  e,
  t = null,
  n = null,
  s = 0,
  o = null,
  r = e === Oe ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ef(t),
    ref: t && $o(t),
    scopeId: gr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: $e,
  };
  return (
    l
      ? (cl(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= _e(n) ? 8 : 16),
    os > 0 &&
      !i &&
      Ve &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      Ve.push(a),
    a
  );
}
const ue = qp;
function qp(e, t = null, n = null, s = 0, o = null, r = !1) {
  if (((!e || e === $u) && (e = Me), rs(e))) {
    const l = Ht(e, t, !0);
    return (
      n && cl(l, n),
      os > 0 &&
        !r &&
        Ve &&
        (l.shapeFlag & 6 ? (Ve[Ve.indexOf(e)] = l) : Ve.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((eg(e) && (e = e.__vccOpts), t)) {
    t = al(t);
    let { class: l, style: a } = t;
    l && !_e(l) && (t.class = Ln(l)),
      ge(a) && (au(a) && !J(a) && (a = Re({}, a)), (t.style = $n(a)));
  }
  const i = _e(e) ? 1 : pi(e) ? 128 : Sp(e) ? 64 : ge(e) ? 4 : Z(e) ? 2 : 0;
  return oe(e, t, n, s, o, i, r, !0);
}
function al(e) {
  return e ? (au(e) || Lu(e) ? Re({}, e) : e) : null;
}
function Ht(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e,
    c = t ? ul(o || {}, t) : o,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && ef(c),
      ref:
        t && t.ref
          ? n && r
            ? J(r)
              ? r.concat($o(t))
              : [r, $o(t)]
            : $o(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Oe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ht(e.ssContent),
      ssFallback: e.ssFallback && Ht(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && s && Fs(u, a.clone(u)), u;
}
function Ye(e = ' ', t = 0) {
  return ue(kn, null, e, t);
}
function Sn(e = '', t = !1) {
  return t ? (pe(), Xe(Me, null, e)) : ue(Me, null, e);
}
function Je(e) {
  return e == null || typeof e == 'boolean'
    ? ue(Me)
    : J(e)
      ? ue(Oe, null, e.slice())
      : typeof e == 'object'
        ? Qt(e)
        : ue(kn, null, String(e));
}
function Qt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ht(e);
}
function cl(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (J(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), cl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Lu(t)
        ? (t._ctx = $e)
        : o === 3 &&
          $e &&
          ($e.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Z(t)
      ? ((t = { default: t, _ctx: $e }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ye(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ul(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === 'class')
        t.class !== s.class && (t.class = Ln([t.class, s.class]));
      else if (o === 'style') t.style = $n([t.style, s.style]);
      else if (Qs(o)) {
        const r = t[o],
          i = s[o];
        i &&
          r !== i &&
          !(J(r) && r.includes(i)) &&
          (t[o] = r ? [].concat(r, i) : i);
      } else o !== '' && (t[o] = s[o]);
  }
  return t;
}
function Ue(e, t, n, s = null) {
  at(e, t, 7, [n, s]);
}
const Kp = Au();
let Gp = 0;
function Jp(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || Kp,
    r = {
      uid: Gp++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Xc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Hu(s, o),
      emitsOptions: Gu(s, o),
      emit: null,
      emitted: null,
      propsDefaults: me,
      inheritAttrs: s.inheritAttrs,
      ctx: me,
      data: me,
      props: me,
      attrs: me,
      slots: me,
      refs: me,
      setupState: me,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Np.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let Ce = null;
const Nn = () => Ce || $e;
let zo, mi;
{
  const e = zc(),
    t = (n, s) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(s),
        (r) => {
          o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
        }
      );
    };
  (zo = t('__VUE_INSTANCE_SETTERS__', (n) => (Ce = n))),
    (mi = t('__VUE_SSR_SETTERS__', (n) => (no = n)));
}
const to = (e) => {
    const t = Ce;
    return (
      zo(e),
      e.scope.on(),
      () => {
        e.scope.off(), zo(t);
      }
    );
  },
  na = () => {
    Ce && Ce.scope.off(), zo(null);
  };
function tf(e) {
  return e.vnode.shapeFlag & 4;
}
let no = !1;
function Xp(e, t = !1, n = !1) {
  t && mi(t);
  const { props: s, children: o } = e.vnode,
    r = tf(e);
  yp(e, s, r, t), bp(e, o, n);
  const i = r ? Yp(e, t) : void 0;
  return t && mi(!1), i;
}
function Yp(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, cp));
  const { setup: s } = n;
  if (s) {
    const o = (e.setupContext = s.length > 1 ? Zp(e) : null),
      r = to(e);
    dn();
    const i = rn(s, e, 0, [e.props, o]);
    if ((hn(), r(), Dc(i))) {
      if ((i.then(na, na), t))
        return i
          .then((l) => {
            yi(e, l, t);
          })
          .catch((l) => {
            ds(l, e, 0);
          });
      e.asyncDep = i;
    } else yi(e, i, t);
  } else nf(e, t);
}
function yi(e, t, n) {
  Z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = fu(t)),
    nf(e, n);
}
let sa;
function nf(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && sa && !s.render) {
      const o = s.template || rl(e).template;
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          c = Re(Re({ isCustomElement: r, delimiters: l }, i), a);
        s.render = sa(o, c);
      }
    }
    e.render = s.render || it;
  }
  {
    const o = to(e);
    dn();
    try {
      up(e);
    } finally {
      hn(), o();
    }
  }
}
const Qp = {
  get(e, t) {
    return ze(e, 'get', ''), e[t];
  },
};
function Zp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Qp),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function wr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(fu(Nh(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Cs) return Cs[n](e);
          },
          has(t, n) {
            return n in t || n in Cs;
          },
        }))
    : e.proxy;
}
function vi(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function eg(e) {
  return Z(e) && '__vccOpts' in e;
}
const le = (e, t) => Hh(e, t, no);
function Qe(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ge(t) && !J(t)
      ? rs(t)
        ? ue(e, null, [t])
        : ue(e, t)
      : ue(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && rs(n) && (n = [n]),
      ue(e, t, n));
}
const sf = '3.4.32';
/**
 * @vue/runtime-dom v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const tg = 'http://www.w3.org/2000/svg',
  ng = 'http://www.w3.org/1998/Math/MathML',
  Ot = typeof document < 'u' ? document : null,
  oa = Ot && Ot.createElement('template'),
  sg = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const o =
        t === 'svg'
          ? Ot.createElementNS(tg, e)
          : t === 'mathml'
            ? Ot.createElementNS(ng, e)
            : n
              ? Ot.createElement(e, { is: n })
              : Ot.createElement(e);
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          o.setAttribute('multiple', s.multiple),
        o
      );
    },
    createText: (e) => Ot.createTextNode(e),
    createComment: (e) => Ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, o, r) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === r || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === r || !(o = o.nextSibling));

        );
      else {
        oa.innerHTML =
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e;
        const l = oa.content;
        if (s === 'svg' || s === 'mathml') {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Vt = 'transition',
  ms = 'animation',
  Bs = Symbol('_vtc'),
  fl = (e, { slots: t }) => Qe(Qh, og(e), t);
fl.displayName = 'Transition';
const of = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
fl.props = Re({}, yu, of);
const yn = (e, t = []) => {
    J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  ra = (e) => (e ? (J(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function og(e) {
  const t = {};
  for (const k in e) k in of || (t[k] = e[k]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: s,
      duration: o,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: c = i,
      appearToClass: u = l,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    y = rg(o),
    g = y && y[0],
    b = y && y[1],
    {
      onBeforeEnter: x,
      onEnter: v,
      onEnterCancelled: p,
      onLeave: _,
      onLeaveCancelled: S,
      onBeforeAppear: E = x,
      onAppear: R = v,
      onAppearCancelled: L = p,
    } = t,
    P = (k, z, Q) => {
      vn(k, z ? u : l), vn(k, z ? c : i), Q && Q();
    },
    C = (k, z) => {
      (k._isLeaving = !1), vn(k, f), vn(k, h), vn(k, d), z && z();
    },
    H = (k) => (z, Q) => {
      const ee = k ? R : v,
        B = () => P(z, k, Q);
      yn(ee, [z, B]),
        ia(() => {
          vn(z, k ? a : r), zt(z, k ? u : l), ra(ee) || la(z, s, g, B);
        });
    };
  return Re(t, {
    onBeforeEnter(k) {
      yn(x, [k]), zt(k, r), zt(k, i);
    },
    onBeforeAppear(k) {
      yn(E, [k]), zt(k, a), zt(k, c);
    },
    onEnter: H(!1),
    onAppear: H(!0),
    onLeave(k, z) {
      k._isLeaving = !0;
      const Q = () => C(k, z);
      zt(k, f),
        zt(k, d),
        ag(),
        ia(() => {
          k._isLeaving && (vn(k, f), zt(k, h), ra(_) || la(k, s, b, Q));
        }),
        yn(_, [k, Q]);
    },
    onEnterCancelled(k) {
      P(k, !1), yn(p, [k]);
    },
    onAppearCancelled(k) {
      P(k, !0), yn(L, [k]);
    },
    onLeaveCancelled(k) {
      C(k), yn(S, [k]);
    },
  });
}
function rg(e) {
  if (e == null) return null;
  if (ge(e)) return [Wr(e.enter), Wr(e.leave)];
  {
    const t = Wr(e);
    return [t, t];
  }
}
function Wr(e) {
  return Vc(e);
}
function zt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Bs] || (e[Bs] = new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Bs];
  n && (n.delete(t), n.size || (e[Bs] = void 0));
}
function ia(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ig = 0;
function la(e, t, n, s) {
  const o = (e._endId = ++ig),
    r = () => {
      o === e._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = lg(e, t);
  if (!i) return s();
  const c = i + 'end';
  let u = 0;
  const f = () => {
      e.removeEventListener(c, d), r();
    },
    d = (h) => {
      h.target === e && ++u >= a && f();
    };
  setTimeout(() => {
    u < a && f();
  }, l + 1),
    e.addEventListener(c, d);
}
function lg(e, t) {
  const n = window.getComputedStyle(e),
    s = (y) => (n[y] || '').split(', '),
    o = s(`${Vt}Delay`),
    r = s(`${Vt}Duration`),
    i = aa(o, r),
    l = s(`${ms}Delay`),
    a = s(`${ms}Duration`),
    c = aa(l, a);
  let u = null,
    f = 0,
    d = 0;
  t === Vt
    ? i > 0 && ((u = Vt), (f = i), (d = r.length))
    : t === ms
      ? c > 0 && ((u = ms), (f = c), (d = a.length))
      : ((f = Math.max(i, c)),
        (u = f > 0 ? (i > c ? Vt : ms) : null),
        (d = u ? (u === Vt ? r.length : a.length) : 0));
  const h =
    u === Vt && /\b(transform|all)(,|$)/.test(s(`${Vt}Property`).toString());
  return { type: u, timeout: f, propCount: d, hasTransform: h };
}
function aa(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => ca(n) + ca(e[s])));
}
function ca(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function ag() {
  return document.body.offsetHeight;
}
function cg(e, t, n) {
  const s = e[Bs];
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t);
}
const qo = Symbol('_vod'),
  rf = Symbol('_vsh'),
  fx = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[qo] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : ys(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), ys(e, !0), s.enter(e))
            : s.leave(e, () => {
                ys(e, !1);
              })
          : ys(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ys(e, t);
    },
  };
function ys(e, t) {
  (e.style.display = t ? e[qo] : 'none'), (e[rf] = !t);
}
const ug = Symbol(''),
  fg = /(^|;)\s*display\s*:/;
function dg(e, t, n) {
  const s = e.style,
    o = _e(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (_e(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim();
          n[l] == null && Ro(s, l, '');
        }
      else for (const i in t) n[i] == null && Ro(s, i, '');
    for (const i in n) i === 'display' && (r = !0), Ro(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[ug];
      i && (n += ';' + i), (s.cssText = n), (r = fg.test(n));
    }
  } else t && e.removeAttribute('style');
  qo in e && ((e[qo] = r ? s.display : ''), e[rf] && (s.display = 'none'));
}
const ua = /\s*!important$/;
function Ro(e, t, n) {
  if (J(n)) n.forEach((s) => Ro(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = hg(e, t);
    ua.test(n)
      ? e.setProperty(jt(s), n.replace(ua, ''), 'important')
      : (e[s] = n);
  }
}
const fa = ['Webkit', 'Moz', 'ms'],
  Ur = {};
function hg(e, t) {
  const n = Ur[t];
  if (n) return n;
  let s = ct(t);
  if (s !== 'filter' && s in e) return (Ur[t] = s);
  s = dr(s);
  for (let o = 0; o < fa.length; o++) {
    const r = fa[o] + s;
    if (r in e) return (Ur[t] = r);
  }
  return t;
}
const da = 'http://www.w3.org/1999/xlink';
function ha(e, t, n, s, o, r = uh(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(da, t.slice(6, t.length))
      : e.setAttributeNS(da, t, n)
    : n == null || (r && !Kc(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? '' : Rt(n) ? String(n) : n);
}
function pg(e, t, n, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    if (n === null) return;
    e[t] = n;
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const i = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? '' : String(n);
    (i !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let r = !1;
  if (n === '' || n == null) {
    const i = typeof e[t];
    i === 'boolean'
      ? (n = Kc(n))
      : n == null && i === 'string'
        ? ((n = ''), (r = !0))
        : i === 'number' && ((n = 0), (r = !0));
  }
  try {
    e[t] = n;
  } catch {}
  r && e.removeAttribute(t);
}
function En(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function gg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const pa = Symbol('_vei');
function mg(e, t, n, s, o = null) {
  const r = e[pa] || (e[pa] = {}),
    i = r[t];
  if (s && i) i.value = s;
  else {
    const [l, a] = yg(t);
    if (s) {
      const c = (r[t] = _g(s, o));
      En(e, l, c, a);
    } else i && (gg(e, l, i, a), (r[t] = void 0));
  }
}
const ga = /(?:Once|Passive|Capture)$/;
function yg(e) {
  let t;
  if (ga.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(ga)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : jt(e.slice(2)), t];
}
let Vr = 0;
const vg = Promise.resolve(),
  wg = () => Vr || (vg.then(() => (Vr = 0)), (Vr = Date.now()));
function _g(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    at(bg(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = wg()), n;
}
function bg(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return t;
}
const ma = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  xg = (e, t, n, s, o, r) => {
    const i = o === 'svg';
    t === 'class'
      ? cg(e, s, i)
      : t === 'style'
        ? dg(e, n, s)
        : Qs(t)
          ? Vi(t) || mg(e, t, n, s, r)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Eg(e, t, s, i)
              )
            ? (pg(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                ha(e, t, s, i, r, t !== 'value'))
            : (t === 'true-value'
                ? (e._trueValue = s)
                : t === 'false-value' && (e._falseValue = s),
              ha(e, t, s, i));
  };
function Eg(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && ma(t) && Z(n))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const o = e.tagName;
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE')
      return !1;
  }
  return ma(t) && _e(n) ? !1 : t in e;
}
const Ko = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return J(t) ? (n) => Gn(t, n) : t;
};
function Sg(e) {
  e.target.composing = !0;
}
function ya(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const es = Symbol('_assign'),
  dx = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
      e[es] = Ko(o);
      const r = s || (o.props && o.props.type === 'number');
      En(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), r && (l = si(l)), e[es](l);
      }),
        n &&
          En(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (En(e, 'compositionstart', Sg),
          En(e, 'compositionend', ya),
          En(e, 'change', ya));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } },
      i
    ) {
      if (((e[es] = Ko(i)), e.composing)) return;
      const l =
          (r || e.type === 'number') && !/^0\d/.test(e.value)
            ? si(e.value)
            : e.value,
        a = t ?? '';
      l !== a &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((s && t === n) || (o && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  hx = {
    created(e, { value: t }, n) {
      (e.checked = Ho(t, n.props.value)),
        (e[es] = Ko(n)),
        En(e, 'change', () => {
          e[es](Tg(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      (e[es] = Ko(s)), t !== n && (e.checked = Ho(t, s.props.value));
    },
  };
function Tg(e) {
  return '_value' in e ? e._value : e.value;
}
const Cg = ['ctrl', 'shift', 'alt', 'meta'],
  $g = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => Cg.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  px = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.');
    return (
      n[s] ||
      (n[s] = (o, ...r) => {
        for (let i = 0; i < t.length; i++) {
          const l = $g[t[i]];
          if (l && l(o, t)) return;
        }
        return e(o, ...r);
      })
    );
  },
  Rg = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Pg = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.');
    return (
      n[s] ||
      (n[s] = (o) => {
        if (!('key' in o)) return;
        const r = jt(o.key);
        if (t.some((i) => i === r || Rg[i] === r)) return e(o);
      })
    );
  },
  lf = Re({ patchProp: xg }, sg);
let Rs,
  va = !1;
function Ag() {
  return Rs || (Rs = Rp(lf));
}
function kg() {
  return (Rs = va ? Rs : Pp(lf)), (va = !0), Rs;
}
const af = (...e) => {
    const t = Ag().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const o = uf(s);
        if (!o) return;
        const r = t._component;
        !Z(r) && !r.render && !r.template && (r.template = o.innerHTML),
          (o.innerHTML = '');
        const i = n(o, !1, cf(o));
        return (
          o instanceof Element &&
            (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
          i
        );
      }),
      t
    );
  },
  Og = (...e) => {
    const t = kg().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const o = uf(s);
        if (o) return n(o, !0, cf(o));
      }),
      t
    );
  };
function cf(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml';
}
function uf(e) {
  return _e(e) ? document.querySelector(e) : e;
}
const Mg =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Lg =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Ng = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Hg(e, t) {
  if (
    e === '__proto__' ||
    (e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)
  ) {
    Ig(e);
    return;
  }
  return t;
}
function Ig(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Go(e, t = {}) {
  if (typeof e != 'string') return e;
  const n = e.trim();
  if (e[0] === '"' && e.endsWith('"') && !e.includes('\\'))
    return n.slice(1, -1);
  if (n.length <= 9) {
    const s = n.toLowerCase();
    if (s === 'true') return !0;
    if (s === 'false') return !1;
    if (s === 'undefined') return;
    if (s === 'null') return null;
    if (s === 'nan') return Number.NaN;
    if (s === 'infinity') return Number.POSITIVE_INFINITY;
    if (s === '-infinity') return Number.NEGATIVE_INFINITY;
  }
  if (!Ng.test(e)) {
    if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
    return e;
  }
  try {
    if (Mg.test(e) || Lg.test(e)) {
      if (t.strict) throw new Error('[destr] Possible prototype pollution');
      return JSON.parse(e, Hg);
    }
    return JSON.parse(e);
  } catch (s) {
    if (t.strict) throw s;
    return e;
  }
}
const jg = /#/g,
  Fg = /&/g,
  Dg = /\//g,
  Bg = /=/g,
  dl = /\+/g,
  Wg = /%5e/gi,
  Ug = /%60/gi,
  Vg = /%7c/gi,
  zg = /%20/gi;
function qg(e) {
  return encodeURI('' + e).replace(Vg, '|');
}
function wi(e) {
  return qg(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(dl, '%2B')
    .replace(zg, '+')
    .replace(jg, '%23')
    .replace(Fg, '%26')
    .replace(Ug, '`')
    .replace(Wg, '^')
    .replace(Dg, '%2F');
}
function zr(e) {
  return wi(e).replace(Bg, '%3D');
}
function Jo(e = '') {
  try {
    return decodeURIComponent('' + e);
  } catch {
    return '' + e;
  }
}
function Kg(e) {
  return Jo(e.replace(dl, ' '));
}
function Gg(e) {
  return Jo(e.replace(dl, ' '));
}
function ff(e = '') {
  const t = {};
  e[0] === '?' && (e = e.slice(1));
  for (const n of e.split('&')) {
    const s = n.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) continue;
    const o = Kg(s[1]);
    if (o === '__proto__' || o === 'constructor') continue;
    const r = Gg(s[2] || '');
    t[o] === void 0
      ? (t[o] = r)
      : Array.isArray(t[o])
        ? t[o].push(r)
        : (t[o] = [t[o], r]);
  }
  return t;
}
function Jg(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${zr(e)}=${wi(n)}`).join('&')
        : `${zr(e)}=${wi(t)}`
      : zr(e)
  );
}
function Xg(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Jg(t, e[t]))
    .filter(Boolean)
    .join('&');
}
const Yg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Qg = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Zg = /^([/\\]\s*){2,}[^/\\]/,
  em = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  tm = /\/$|\/\?|\/#/,
  nm = /^\.?\//;
function gn(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? Yg.test(e) : Qg.test(e) || (t.acceptRelative ? Zg.test(e) : !1)
  );
}
function sm(e) {
  return !!e && em.test(e);
}
function _i(e = '', t) {
  return t ? tm.test(e) : e.endsWith('/');
}
function _r(e = '', t) {
  if (!t) return (_i(e) ? e.slice(0, -1) : e) || '/';
  if (!_i(e, !0)) return e || '/';
  let n = e,
    s = '';
  const o = e.indexOf('#');
  o >= 0 && ((n = e.slice(0, o)), (s = e.slice(o)));
  const [r, ...i] = n.split('?');
  return (
    ((r.endsWith('/') ? r.slice(0, -1) : r) || '/') +
    (i.length > 0 ? `?${i.join('?')}` : '') +
    s
  );
}
function Xo(e = '', t) {
  if (!t) return e.endsWith('/') ? e : e + '/';
  if (_i(e, !0)) return e || '/';
  let n = e,
    s = '';
  const o = e.indexOf('#');
  if (o >= 0 && ((n = e.slice(0, o)), (s = e.slice(o)), !n)) return s;
  const [r, ...i] = n.split('?');
  return r + '/' + (i.length > 0 ? `?${i.join('?')}` : '') + s;
}
function om(e = '') {
  return e.startsWith('/');
}
function wa(e = '') {
  return om(e) ? e : '/' + e;
}
function rm(e, t) {
  if (hf(t) || gn(e)) return e;
  const n = _r(t);
  return e.startsWith(n) ? e : br(n, e);
}
function _a(e, t) {
  if (hf(t)) return e;
  const n = _r(t);
  if (!e.startsWith(n)) return e;
  const s = e.slice(n.length);
  return s[0] === '/' ? s : '/' + s;
}
function df(e, t) {
  const n = am(e),
    s = { ...ff(n.search), ...t };
  return (n.search = Xg(s)), cm(n);
}
function hf(e) {
  return !e || e === '/';
}
function im(e) {
  return e && e !== '/';
}
function br(e, ...t) {
  let n = e || '';
  for (const s of t.filter((o) => im(o)))
    if (n) {
      const o = s.replace(nm, '');
      n = Xo(n) + o;
    } else n = s;
  return n;
}
function lm(e, t, n = {}) {
  return (
    n.trailingSlash || ((e = Xo(e)), (t = Xo(t))),
    n.leadingSlash || ((e = wa(e)), (t = wa(t))),
    n.encoding || ((e = Jo(e)), (t = Jo(t))),
    e === t
  );
}
const pf = Symbol.for('ufo:protocolRelative');
function am(e = '', t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, d = ''] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: '',
      host: '',
      search: '',
      hash: '',
    };
  }
  if (!gn(e, { acceptRelative: !0 })) return ba(e);
  const [, s = '', o, r = ''] =
    e.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) ||
    [];
  let [, i = '', l = ''] = r.match(/([^#/?]*)(.*)?/) || [];
  s === 'file:' && (l = l.replace(/\/(?=[A-Za-z]:)/, ''));
  const { pathname: a, search: c, hash: u } = ba(l);
  return {
    protocol: s.toLowerCase(),
    auth: o ? o.slice(0, Math.max(0, o.length - 1)) : '',
    host: i,
    pathname: a,
    search: c,
    hash: u,
    [pf]: !s,
  };
}
function ba(e = '') {
  const [t = '', n = '', s = ''] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: s };
}
function cm(e) {
  const t = e.pathname || '',
    n = e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '',
    s = e.hash || '',
    o = e.auth ? e.auth + '@' : '',
    r = e.host || '';
  return (
    (e.protocol || e[pf] ? (e.protocol || '') + '//' : '') + o + r + t + n + s
  );
}
class um extends Error {
  constructor(t, n) {
    super(t, n),
      (this.name = 'FetchError'),
      n != null && n.cause && !this.cause && (this.cause = n.cause);
  }
}
function fm(e) {
  var a, c, u, f, d;
  const t =
      ((a = e.error) == null ? void 0 : a.message) ||
      ((c = e.error) == null ? void 0 : c.toString()) ||
      '',
    n =
      ((u = e.request) == null ? void 0 : u.method) ||
      ((f = e.options) == null ? void 0 : f.method) ||
      'GET',
    s = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || '/',
    o = `[${n}] ${JSON.stringify(s)}`,
    r = e.response
      ? `${e.response.status} ${e.response.statusText}`
      : '<no response>',
    i = `${o}: ${r}${t ? ` ${t}` : ''}`,
    l = new um(i, e.error ? { cause: e.error } : void 0);
  for (const h of ['request', 'options', 'response'])
    Object.defineProperty(l, h, {
      get() {
        return e[h];
      },
    });
  for (const [h, y] of [
    ['data', '_data'],
    ['status', 'status'],
    ['statusCode', 'status'],
    ['statusText', 'statusText'],
    ['statusMessage', 'statusText'],
  ])
    Object.defineProperty(l, h, {
      get() {
        return e.response && e.response[y];
      },
    });
  return l;
}
const dm = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']));
function xa(e = 'GET') {
  return dm.has(e.toUpperCase());
}
function hm(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
      ? !1
      : Array.isArray(e)
        ? !0
        : e.buffer
          ? !1
          : (e.constructor && e.constructor.name === 'Object') ||
            typeof e.toJSON == 'function';
}
const pm = new Set([
    'image/svg',
    'application/xml',
    'application/xhtml',
    'application/html',
  ]),
  gm = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function mm(e = '') {
  if (!e) return 'json';
  const t = e.split(';').shift() || '';
  return gm.test(t)
    ? 'json'
    : pm.has(t) || t.startsWith('text/')
      ? 'text'
      : 'blob';
}
function ym(e, t, n = globalThis.Headers) {
  const s = { ...t, ...e };
  if (
    (t != null &&
      t.params &&
      e != null &&
      e.params &&
      (s.params = {
        ...(t == null ? void 0 : t.params),
        ...(e == null ? void 0 : e.params),
      }),
    t != null &&
      t.query &&
      e != null &&
      e.query &&
      (s.query = {
        ...(t == null ? void 0 : t.query),
        ...(e == null ? void 0 : e.query),
      }),
    t != null && t.headers && e != null && e.headers)
  ) {
    s.headers = new n((t == null ? void 0 : t.headers) || {});
    for (const [o, r] of new n((e == null ? void 0 : e.headers) || {}))
      s.headers.set(o, r);
  }
  return s;
}
const vm = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  wm = new Set([101, 204, 205, 304]);
function gf(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: s = globalThis.AbortController,
  } = e;
  async function o(l) {
    const a =
      (l.error && l.error.name === 'AbortError' && !l.options.timeout) || !1;
    if (l.options.retry !== !1 && !a) {
      let u;
      typeof l.options.retry == 'number'
        ? (u = l.options.retry)
        : (u = xa(l.options.method) ? 0 : 1);
      const f = (l.response && l.response.status) || 500;
      if (
        u > 0 &&
        (Array.isArray(l.options.retryStatusCodes)
          ? l.options.retryStatusCodes.includes(f)
          : vm.has(f))
      ) {
        const d = l.options.retryDelay || 0;
        return (
          d > 0 && (await new Promise((h) => setTimeout(h, d))),
          r(l.request, { ...l.options, retry: u - 1 })
        );
      }
    }
    const c = fm(l);
    throw (Error.captureStackTrace && Error.captureStackTrace(c, r), c);
  }
  const r = async function (a, c = {}) {
      var h;
      const u = {
        request: a,
        options: ym(c, e.defaults, n),
        response: void 0,
        error: void 0,
      };
      (u.options.method =
        (h = u.options.method) == null ? void 0 : h.toUpperCase()),
        u.options.onRequest && (await u.options.onRequest(u)),
        typeof u.request == 'string' &&
          (u.options.baseURL && (u.request = rm(u.request, u.options.baseURL)),
          (u.options.query || u.options.params) &&
            (u.request = df(u.request, {
              ...u.options.params,
              ...u.options.query,
            }))),
        u.options.body &&
          xa(u.options.method) &&
          (hm(u.options.body)
            ? ((u.options.body =
                typeof u.options.body == 'string'
                  ? u.options.body
                  : JSON.stringify(u.options.body)),
              (u.options.headers = new n(u.options.headers || {})),
              u.options.headers.has('content-type') ||
                u.options.headers.set('content-type', 'application/json'),
              u.options.headers.has('accept') ||
                u.options.headers.set('accept', 'application/json'))
            : (('pipeTo' in u.options.body &&
                typeof u.options.body.pipeTo == 'function') ||
                typeof u.options.body.pipe == 'function') &&
              ('duplex' in u.options || (u.options.duplex = 'half')));
      let f;
      if (!u.options.signal && u.options.timeout) {
        const y = new s();
        (f = setTimeout(() => y.abort(), u.options.timeout)),
          (u.options.signal = y.signal);
      }
      try {
        u.response = await t(u.request, u.options);
      } catch (y) {
        return (
          (u.error = y),
          u.options.onRequestError && (await u.options.onRequestError(u)),
          await o(u)
        );
      } finally {
        f && clearTimeout(f);
      }
      if (
        u.response.body &&
        !wm.has(u.response.status) &&
        u.options.method !== 'HEAD'
      ) {
        const y =
          (u.options.parseResponse ? 'json' : u.options.responseType) ||
          mm(u.response.headers.get('content-type') || '');
        switch (y) {
          case 'json': {
            const g = await u.response.text(),
              b = u.options.parseResponse || Go;
            u.response._data = b(g);
            break;
          }
          case 'stream': {
            u.response._data = u.response.body;
            break;
          }
          default:
            u.response._data = await u.response[y]();
        }
      }
      return (
        u.options.onResponse && (await u.options.onResponse(u)),
        !u.options.ignoreResponseError &&
        u.response.status >= 400 &&
        u.response.status < 600
          ? (u.options.onResponseError && (await u.options.onResponseError(u)),
            await o(u))
          : u.response
      );
    },
    i = async function (a, c) {
      return (await r(a, c))._data;
    };
  return (
    (i.raw = r),
    (i.native = (...l) => t(...l)),
    (i.create = (l = {}) => gf({ ...e, defaults: { ...e.defaults, ...l } })),
    i
  );
}
const hl = (function () {
    if (typeof globalThis < 'u') return globalThis;
    if (typeof self < 'u') return self;
    if (typeof window < 'u') return window;
    if (typeof global < 'u') return global;
    throw new Error('unable to locate global object');
  })(),
  _m =
    hl.fetch ||
    (() =>
      Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
  bm = hl.Headers,
  xm = hl.AbortController,
  Em = gf({ fetch: _m, Headers: bm, AbortController: xm }),
  mf = Em,
  Sm = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Tm = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Cm = /^([/\\]\s*){2,}[^/\\]/;
function $m(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? Sm.test(e) : Tm.test(e) || (t.acceptRelative ? Cm.test(e) : !1)
  );
}
function yf(...e) {
  var i, l, a, c;
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    s = [];
  let o = 0;
  for (const u of n)
    if (!(!u || u === '/')) {
      for (const [f, d] of u.split(t).entries())
        if (!(!d || d === '.')) {
          if (d === '..') {
            if (s.length === 1 && $m(s[0])) continue;
            s.pop(), o--;
            continue;
          }
          if (f === 1 && (i = s[s.length - 1]) != null && i.endsWith(':/')) {
            s[s.length - 1] += '/' + d;
            continue;
          }
          s.push(d), o++;
        }
    }
  let r = s.join('/');
  return (
    o >= 0
      ? (l = n[0]) != null && l.startsWith('/') && !r.startsWith('/')
        ? (r = '/' + r)
        : (a = n[0]) != null &&
          a.startsWith('./') &&
          !r.startsWith('./') &&
          (r = './' + r)
      : (r = '../'.repeat(-1 * o) + r),
    (c = n[n.length - 1]) != null &&
      c.endsWith('/') &&
      !r.endsWith('/') &&
      (r += '/'),
    r
  );
}
const Rm = () => {
    var e;
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    );
  },
  Yo = Rm().app,
  Pm = () => Yo.baseURL,
  Am = () => Yo.buildAssetsDir,
  pl = (...e) => yf(gl(), Am(), ...e),
  gl = (...e) => {
    const t = Yo.cdnURL || Yo.baseURL;
    return e.length ? yf(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = pl), (globalThis.__publicAssetsURL = gl);
globalThis.$fetch || (globalThis.$fetch = mf.create({ baseURL: Pm() }));
function bi(e, t = {}, n) {
  for (const s in e) {
    const o = e[s],
      r = n ? `${n}:${s}` : s;
    typeof o == 'object' && o !== null
      ? bi(o, t, r)
      : typeof o == 'function' && (t[r] = o);
  }
  return t;
}
const km = { run: (e) => e() },
  Om = () => km,
  vf = typeof console.createTask < 'u' ? console.createTask : Om;
function Mm(e, t) {
  const n = t.shift(),
    s = vf(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function Lm(e, t) {
  const n = t.shift(),
    s = vf(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function qr(e, t) {
  for (const n of [...e]) n(t);
}
class Nm {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, s = {}) {
    if (!t || typeof n != 'function') return () => {};
    const o = t;
    let r;
    for (; this._deprecatedHooks[t]; )
      (r = this._deprecatedHooks[t]), (t = r.to);
    if (r && !s.allowDeprecated) {
      let i = r.message;
      i ||
        (i =
          `${o} hook has been deprecated` +
          (r.to ? `, please use ${r.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) ||
          (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', {
          get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let s,
      o = (...r) => (
        typeof s == 'function' && s(), (s = void 0), (o = void 0), n(...r)
      );
    return (s = this.hook(t, o)), s;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const s = this._hooks[t].indexOf(n);
      s !== -1 && this._hooks[t].splice(s, 1),
        this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n;
    const s = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of s) this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = bi(t),
      s = Object.keys(n).map((o) => this.hook(o, n[o]));
    return () => {
      for (const o of s.splice(0, s.length)) o();
    };
  }
  removeHooks(t) {
    const n = bi(t);
    for (const s in n) this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Mm, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Lm, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const o =
      this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && qr(this._before, o);
    const r = t(n in this._hooks ? [...this._hooks[n]] : [], s);
    return r instanceof Promise
      ? r.finally(() => {
          this._after && o && qr(this._after, o);
        })
      : (this._after && o && qr(this._after, o), r);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function wf() {
  return new Nm();
}
function Hm(e = {}) {
  let t,
    n = !1;
  const s = (i) => {
    if (t && t !== i) throw new Error('Context conflict');
  };
  let o;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i
      ? (o = new i())
      : console.warn('[unctx] `AsyncLocalStorage` is not provided.');
  }
  const r = () => {
    if (o && t === void 0) {
      const i = o.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return {
    use: () => {
      const i = r();
      if (i === void 0) throw new Error('Context is not available');
      return i;
    },
    tryUse: () => r(),
    set: (i, l) => {
      l || s(i), (t = i), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (i, l) => {
      s(i), (t = i);
      try {
        return o ? o.run(i, l) : l();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(i, l) {
      t = i;
      const a = () => {
          t = i;
        },
        c = () => (t === i ? a : void 0);
      xi.add(c);
      try {
        const u = o ? o.run(i, l) : l();
        return n || (t = void 0), await u;
      } finally {
        xi.delete(c);
      }
    },
  };
}
function Im(e = {}) {
  const t = {};
  return {
    get(n, s = {}) {
      return t[n] || (t[n] = Hm({ ...e, ...s })), t[n], t[n];
    },
  };
}
const Qo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof global < 'u'
          ? global
          : typeof window < 'u'
            ? window
            : {},
  Ea = '__unctx__',
  jm = Qo[Ea] || (Qo[Ea] = Im()),
  Fm = (e, t = {}) => jm.get(e, t),
  Sa = '__unctx_async_handlers__',
  xi = Qo[Sa] || (Qo[Sa] = new Set());
function Ws(e) {
  const t = [];
  for (const o of xi) {
    const r = o();
    r && t.push(r);
  }
  const n = () => {
    for (const o of t) o();
  };
  let s = e();
  return (
    s &&
      typeof s == 'object' &&
      'catch' in s &&
      (s = s.catch((o) => {
        throw (n(), o);
      })),
    [s, n]
  );
}
const Ei = !1,
  Dm = !1,
  Bm = { componentName: 'NuxtLink' },
  Wm = null,
  Um = '#__nuxt',
  _f = 'nuxt-app',
  Ta = 36e5;
function bf(e = _f) {
  return Fm(e, { asyncContext: !1 });
}
const Vm = '__nuxt_plugin';
function zm(e) {
  let t = 0;
  const n = {
    _name: _f,
    _scope: dh(),
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.12.4';
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: Lt({
      data: Lt({}),
      state: Ft({}),
      once: new Set(),
      _errors: Lt({}),
    }),
    static: { data: {} },
    runWithContext(o) {
      return n._scope.active && !Ki() ? n._scope.run(() => Ca(n, o)) : Ca(n, o);
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let o = !1;
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook('app:suspense:resolve');
      };
    },
    _asyncDataPromises: {},
    _asyncData: Lt({}),
    _payloadRevivers: {},
    ...e,
  };
  if (window.__NUXT__)
    for (const o in window.__NUXT__)
      switch (o) {
        case 'data':
        case 'state':
        case '_errors':
          Object.assign(n.payload[o], window.__NUXT__[o]);
          break;
        default:
          n.payload[o] = window.__NUXT__[o];
      }
  (n.hooks = wf()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, r) => {
      const i = '$' + o;
      yo(n, i, r), yo(n.vueApp.config.globalProperties, i, r);
    }),
    yo(n.vueApp, '$nuxt', n),
    yo(n.vueApp.config.globalProperties, '$nuxt', n);
  {
    window.addEventListener('nuxt.preloadError', (r) => {
      n.callHook('app:chunkError', { error: r.payload });
    }),
      (window.useNuxtApp = window.useNuxtApp || be);
    const o = n.hook('app:error', (...r) => {
      console.error('[nuxt] error caught during app initialization', ...r);
    });
    n.hook('app:mounted', o);
  }
  const s = n.payload.config;
  return n.provide('config', s), n;
}
function qm(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks);
}
async function Km(e, t) {
  if (typeof t == 'function') {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {};
    if (n && typeof n == 'object') for (const s in n) e.provide(s, n[s]);
  }
}
async function Gm(e, t) {
  const n = [],
    s = [],
    o = [],
    r = [];
  let i = 0;
  async function l(a) {
    var u;
    const c =
      ((u = a.dependsOn) == null
        ? void 0
        : u.filter((f) => t.some((d) => d._name === f) && !n.includes(f))) ??
      [];
    if (c.length > 0) s.push([new Set(c), a]);
    else {
      const f = Km(e, a).then(async () => {
        a._name &&
          (n.push(a._name),
          await Promise.all(
            s.map(async ([d, h]) => {
              d.has(a._name) &&
                (d.delete(a._name), d.size === 0 && (i++, await l(h)));
            })
          ));
      });
      a.parallel ? o.push(f.catch((d) => r.push(d))) : await f;
    }
  }
  for (const a of t) qm(e, a);
  for (const a of t) await l(a);
  if ((await Promise.all(o), i))
    for (let a = 0; a < i; a++) await Promise.all(o);
  if (r.length) throw r[0];
}
function wt(e) {
  if (typeof e == 'function') return e;
  const t = e._name || e.name;
  return (
    delete e.name,
    Object.assign(e.setup || (() => {}), e, { [Vm]: !0, _name: t })
  );
}
function Ca(e, t, n) {
  const s = () => t();
  return bf(e._name).set(e), e.vueApp.runWithContext(s);
}
function Jm(e) {
  var n;
  let t;
  return (
    ku() && (t = (n = Nn()) == null ? void 0 : n.appContext.app.$nuxt),
    (t = t || bf(e).tryUse()),
    t || null
  );
}
function be(e) {
  const t = Jm(e);
  if (!t) throw new Error('[nuxt] instance unavailable');
  return t;
}
function ps(e) {
  return be().$config;
}
function yo(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function Xm(e, t) {
  return { ctx: { table: e }, matchAll: (n) => Ef(n, e) };
}
function xf(e) {
  const t = {};
  for (const n in e)
    t[n] =
      n === 'dynamic'
        ? new Map(Object.entries(e[n]).map(([s, o]) => [s, xf(o)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function Ym(e) {
  return Xm(xf(e));
}
function Ef(e, t, n) {
  e.endsWith('/') && (e = e.slice(0, -1) || '/');
  const s = [];
  for (const [r, i] of $a(t.wildcard))
    (e === r || e.startsWith(r + '/')) && s.push(i);
  for (const [r, i] of $a(t.dynamic))
    if (e.startsWith(r + '/')) {
      const l = '/' + e.slice(r.length).split('/').splice(2).join('/');
      s.push(...Ef(l, i));
    }
  const o = t.static.get(e);
  return o && s.push(o), s.filter(Boolean);
}
function $a(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function Kr(e) {
  if (e === null || typeof e != 'object') return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === '[object Module]'
      : !0;
}
function Si(e, t, n = '.', s) {
  if (!Kr(t)) return Si(e, {}, n, s);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === '__proto__' || r === 'constructor') continue;
    const i = e[r];
    i != null &&
      ((s && s(o, r, i, n)) ||
        (Array.isArray(i) && Array.isArray(o[r])
          ? (o[r] = [...i, ...o[r]])
          : Kr(i) && Kr(o[r])
            ? (o[r] = Si(i, o[r], (n ? `${n}.` : '') + r.toString(), s))
            : (o[r] = i)));
  }
  return o;
}
function Qm(e) {
  return (...t) => t.reduce((n, s) => Si(n, s, '', e), {});
}
const Sf = Qm();
function Zm(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
var ey = Object.defineProperty,
  ty = (e, t, n) =>
    t in e
      ? ey(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _n = (e, t, n) => (ty(e, typeof t != 'symbol' ? t + '' : t, n), n);
class Ti extends Error {
  constructor(t, n = {}) {
    super(t, n),
      _n(this, 'statusCode', 500),
      _n(this, 'fatal', !1),
      _n(this, 'unhandled', !1),
      _n(this, 'statusMessage'),
      _n(this, 'data'),
      _n(this, 'cause'),
      n.cause && !this.cause && (this.cause = n.cause);
  }
  toJSON() {
    const t = { message: this.message, statusCode: $i(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = Tf(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    );
  }
}
_n(Ti, '__h3_error__', !0);
function Ci(e) {
  if (typeof e == 'string') return new Ti(e);
  if (ny(e)) return e;
  const t = new Ti(e.message ?? e.statusMessage ?? '', { cause: e.cause || e });
  if (Zm(e, 'stack'))
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = $i(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = $i(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    Tf(t.statusMessage) !== n &&
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.'
      );
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function ny(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  );
}
const sy = /[^\u0009\u0020-\u007E]/g;
function Tf(e = '') {
  return e.replace(sy, '');
}
function $i(e, t = 200) {
  return !e ||
    (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999)
    ? t
    : e;
}
const oy = Symbol('layout-meta'),
  xr = Symbol('route'),
  Fe = () => {
    var e;
    return (e = be()) == null ? void 0 : e.$router;
  },
  Cf = () => (ku() ? Ze(xr, be()._route) : be()._route);
const ry = () => {
    try {
      if (be()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  },
  iy = (e, t) => {
    e || (e = '/');
    const n =
      typeof e == 'string' ? e : 'path' in e ? Ri(e) : Fe().resolve(e).href;
    if (t != null && t.open) {
      const { target: a = '_blank', windowFeatures: c = {} } = t.open,
        u = Object.entries(c)
          .filter(([f, d]) => d !== void 0)
          .map(([f, d]) => `${f.toLowerCase()}=${d}`)
          .join(', ');
      return open(n, a, u), Promise.resolve();
    }
    const s = gn(n, { acceptRelative: !0 }),
      o = (t == null ? void 0 : t.external) || s;
    if (o) {
      if (!(t != null && t.external))
        throw new Error(
          'Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.'
        );
      const { protocol: a } = new URL(n, window.location.href);
      if (a && sm(a))
        throw new Error(`Cannot navigate to a URL with '${a}' protocol.`);
    }
    const r = ry();
    if (!o && r) return e;
    const i = Fe(),
      l = be();
    return o
      ? (l._scope.stop(),
        t != null && t.replace ? location.replace(n) : (location.href = n),
        r ? (l.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve())
      : t != null && t.replace
        ? i.replace(e)
        : i.push(e);
  };
function Ri(e) {
  return df(e.path || '', e.query || {}) + (e.hash || '');
}
const $f = '__nuxt_error',
  Er = () => hu(be().payload, 'error'),
  Un = (e) => {
    const t = Sr(e);
    try {
      const n = be(),
        s = Er();
      n.hooks.callHook('app:error', t), (s.value = s.value || t);
    } catch {
      throw t;
    }
    return t;
  },
  ly = async (e = {}) => {
    const t = be(),
      n = Er();
    t.callHook('app:error:cleared', e),
      e.redirect && (await Fe().replace(e.redirect)),
      (n.value = Wm);
  },
  ay = (e) => !!e && typeof e == 'object' && $f in e,
  Sr = (e) => {
    const t = Ci(e);
    return (
      Object.defineProperty(t, $f, {
        value: !0,
        configurable: !1,
        writable: !1,
      }),
      t
    );
  },
  cy = -1,
  uy = -2,
  fy = -3,
  dy = -4,
  hy = -5,
  py = -6;
function gy(e, t) {
  return my(JSON.parse(e), t);
}
function my(e, t) {
  if (typeof e == 'number') return o(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
  const n = e,
    s = Array(n.length);
  function o(r, i = !1) {
    if (r === cy) return;
    if (r === fy) return NaN;
    if (r === dy) return 1 / 0;
    if (r === hy) return -1 / 0;
    if (r === py) return -0;
    if (i) throw new Error('Invalid input');
    if (r in s) return s[r];
    const l = n[r];
    if (!l || typeof l != 'object') s[r] = l;
    else if (Array.isArray(l))
      if (typeof l[0] == 'string') {
        const a = l[0],
          c = t == null ? void 0 : t[a];
        if (c) return (s[r] = c(o(l[1])));
        switch (a) {
          case 'Date':
            s[r] = new Date(l[1]);
            break;
          case 'Set':
            const u = new Set();
            s[r] = u;
            for (let h = 1; h < l.length; h += 1) u.add(o(l[h]));
            break;
          case 'Map':
            const f = new Map();
            s[r] = f;
            for (let h = 1; h < l.length; h += 2) f.set(o(l[h]), o(l[h + 1]));
            break;
          case 'RegExp':
            s[r] = new RegExp(l[1], l[2]);
            break;
          case 'Object':
            s[r] = Object(l[1]);
            break;
          case 'BigInt':
            s[r] = BigInt(l[1]);
            break;
          case 'null':
            const d = Object.create(null);
            s[r] = d;
            for (let h = 1; h < l.length; h += 2) d[l[h]] = o(l[h + 1]);
            break;
          default:
            throw new Error(`Unknown type ${a}`);
        }
      } else {
        const a = new Array(l.length);
        s[r] = a;
        for (let c = 0; c < l.length; c += 1) {
          const u = l[c];
          u !== uy && (a[c] = o(u));
        }
      }
    else {
      const a = {};
      s[r] = a;
      for (const c in l) {
        const u = l[c];
        a[c] = o(u);
      }
    }
    return s[r];
  }
  return o(0);
}
function yy(e) {
  return Array.isArray(e) ? e : [e];
}
const vy = ['title', 'titleTemplate', 'script', 'style', 'noscript'],
  Po = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  wy = [
    'title',
    'titleTemplate',
    'templateParams',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ],
  _y = [
    'base',
    'title',
    'titleTemplate',
    'bodyAttrs',
    'htmlAttrs',
    'templateParams',
  ],
  Rf = [
    'tagPosition',
    'tagPriority',
    'tagDuplicateStrategy',
    'children',
    'innerHTML',
    'textContent',
    'processTemplateParams',
  ],
  by = typeof window < 'u';
function ml(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function Ra(e) {
  return (
    e._h ||
    ml(
      e._d
        ? e._d
        : `${e.tag}:${e.textContent || e.innerHTML || ''}:${Object.entries(
            e.props
          )
            .map(([t, n]) => `${t}:${String(n)}`)
            .join(',')}`
    )
  );
}
function Pf(e, t) {
  const { props: n, tag: s } = e;
  if (_y.includes(s)) return s;
  if (s === 'link' && n.rel === 'canonical') return 'canonical';
  if (n.charset) return 'charset';
  const o = ['id'];
  s === 'meta' && o.push('name', 'property', 'http-equiv');
  for (const r of o)
    if (typeof n[r] < 'u') {
      const i = String(n[r]);
      return `${s}:${r}:${i}`;
    }
  return !1;
}
function Pa(e, t) {
  return e == null ? t || null : typeof e == 'function' ? e(t) : e;
}
async function xy(e, t, n) {
  const s = {
    tag: e,
    props: await Af(
      typeof t == 'object' && typeof t != 'function' && !(t instanceof Promise)
        ? { ...t }
        : {
            [['script', 'noscript', 'style'].includes(e)
              ? 'innerHTML'
              : 'textContent']: t,
          },
      ['templateParams', 'titleTemplate'].includes(e)
    ),
  };
  return (
    Rf.forEach((o) => {
      const r = typeof s.props[o] < 'u' ? s.props[o] : n[o];
      typeof r < 'u' &&
        ((!['innerHTML', 'textContent', 'children'].includes(o) ||
          vy.includes(s.tag)) &&
          (s[o === 'children' ? 'innerHTML' : o] = r),
        delete s.props[o]);
    }),
    s.props.body && ((s.tagPosition = 'bodyClose'), delete s.props.body),
    s.tag === 'script' &&
      typeof s.innerHTML == 'object' &&
      ((s.innerHTML = JSON.stringify(s.innerHTML)),
      (s.props.type = s.props.type || 'application/json')),
    Array.isArray(s.props.content)
      ? s.props.content.map((o) => ({
          ...s,
          props: { ...s.props, content: o },
        }))
      : s
  );
}
function Ey(e, t) {
  var s;
  const n = e === 'class' ? ' ' : ';';
  return (
    typeof t == 'object' &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, o]) => o)
        .map(([o, r]) => (e === 'style' ? `${o}:${r}` : o))),
    (s = String(Array.isArray(t) ? t.join(n) : t)) == null
      ? void 0
      : s
          .split(n)
          .filter((o) => o.trim())
          .filter(Boolean)
          .join(n)
  );
}
async function Af(e, t) {
  for (const n of Object.keys(e)) {
    if (['class', 'style'].includes(n)) {
      e[n] = Ey(n, e[n]);
      continue;
    }
    if (
      (e[n] instanceof Promise && (e[n] = await e[n]), !t && !Rf.includes(n))
    ) {
      const s = String(e[n]),
        o = n.startsWith('data-');
      s === 'true' || s === ''
        ? (e[n] = o ? 'true' : !0)
        : e[n] || (o && s === 'false' ? (e[n] = 'false') : delete e[n]);
    }
  }
  return e;
}
const Sy = 10;
async function Ty(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, s]) => typeof s < 'u' && wy.includes(n))
      .forEach(([n, s]) => {
        const o = yy(s);
        t.push(...o.map((r) => xy(n, r, e)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map(
        (n, s) => (
          (n._e = e._i), e.mode && (n._m = e.mode), (n._p = (e._i << Sy) + s), n
        )
      )
  );
}
const Aa = { base: -10, title: 10 },
  ka = { critical: -80, high: -10, low: 20 };
function Zo(e) {
  let t = 100;
  const n = e.tagPriority;
  return typeof n == 'number'
    ? n
    : (e.tag === 'meta'
        ? (e.props['http-equiv'] === 'content-security-policy' && (t = -30),
          e.props.charset && (t = -20),
          e.props.name === 'viewport' && (t = -15))
        : e.tag === 'link' && e.props.rel === 'preconnect'
          ? (t = 20)
          : e.tag in Aa && (t = Aa[e.tag]),
      typeof n == 'string' && n in ka ? t + ka[n] : t);
}
const Cy = [
    { prefix: 'before:', offset: -1 },
    { prefix: 'after:', offset: 1 },
  ],
  Oa = ['onload', 'onerror', 'onabort', 'onprogress', 'onloadstart'],
  qt = '%separator';
function Ao(e, t, n) {
  if (typeof e != 'string' || !e.includes('%')) return e;
  function s(i) {
    let l;
    return (
      ['s', 'pageTitle'].includes(i)
        ? (l = t.pageTitle)
        : i.includes('.')
          ? (l = i.split('.').reduce((a, c) => (a && a[c]) || void 0, t))
          : (l = t[i]),
      typeof l < 'u' ? (l || '').replace(/"/g, '\\"') : !1
    );
  }
  let o = e;
  try {
    o = decodeURI(e);
  } catch {}
  return (
    (o.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((i) => {
        const l = s(i.slice(1));
        typeof l == 'string' &&
          (e = e
            .replace(new RegExp(`\\${i}(\\W|$)`, 'g'), (a, c) => `${l}${c}`)
            .trim());
      }),
    e.includes(qt) &&
      (e.endsWith(qt) && (e = e.slice(0, -qt.length).trim()),
      e.startsWith(qt) && (e = e.slice(qt.length).trim()),
      (e = e.replace(new RegExp(`\\${qt}\\s*\\${qt}`, 'g'), qt)),
      (e = Ao(e, { separator: n }, n))),
    e
  );
}
async function kf(e, t = {}) {
  var u;
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const s = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook('dom:beforeRender', s), !s.shouldRender)) return;
  const o = (await e.resolveTags()).map((f) => ({
    tag: f,
    id: Po.includes(f.tag) ? Ra(f) : f.tag,
    shouldRender: !0,
  }));
  let r = e._dom;
  if (!r) {
    r = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
    for (const f of ['body', 'head']) {
      const d = (u = n[f]) == null ? void 0 : u.children,
        h = [];
      for (const y of [...d].filter((g) =>
        Po.includes(g.tagName.toLowerCase())
      )) {
        const g = {
          tag: y.tagName.toLowerCase(),
          props: await Af(
            y
              .getAttributeNames()
              .reduce((v, p) => ({ ...v, [p]: y.getAttribute(p) }), {})
          ),
          innerHTML: y.innerHTML,
        };
        let b = 1,
          x = Pf(g);
        for (; x && h.find((v) => v._d === x); ) x = `${x}:${b++}`;
        (g._d = x || void 0),
          h.push(g),
          (r.elMap[y.getAttribute('data-hid') || Ra(g)] = y);
      }
    }
  }
  (r.pendingSideEffects = { ...(r.sideEffects || {}) }), (r.sideEffects = {});
  function i(f, d, h) {
    const y = `${f}:${d}`;
    (r.sideEffects[y] = h), delete r.pendingSideEffects[y];
  }
  function l({ id: f, $el: d, tag: h }) {
    const y = h.tag.endsWith('Attrs');
    (r.elMap[f] = d),
      y ||
        (['textContent', 'innerHTML'].forEach((g) => {
          h[g] && h[g] !== d[g] && (d[g] = h[g]);
        }),
        i(f, 'el', () => {
          var g;
          (g = r.elMap[f]) == null || g.remove(), delete r.elMap[f];
        }));
    for (const [g, b] of Object.entries(h._eventHandlers || {}))
      d.getAttribute(`data-${g}`) !== '' &&
        ((h.tag === 'bodyAttrs' ? n.defaultView : d).addEventListener(
          g.replace('on', ''),
          b.bind(d)
        ),
        d.setAttribute(`data-${g}`, ''));
    Object.entries(h.props).forEach(([g, b]) => {
      const x = `attr:${g}`;
      if (g === 'class')
        for (const v of (b || '').split(' ').filter(Boolean))
          y && i(f, `${x}:${v}`, () => d.classList.remove(v)),
            !d.classList.contains(v) && d.classList.add(v);
      else if (g === 'style')
        for (const v of (b || '').split(';').filter(Boolean)) {
          const [p, ..._] = v.split(':').map((S) => S.trim());
          i(f, `${x}:${p}`, () => {
            d.style.removeProperty(p);
          }),
            d.style.setProperty(p, _.join(':'));
        }
      else
        d.getAttribute(g) !== b && d.setAttribute(g, b === !0 ? '' : String(b)),
          y && i(f, x, () => d.removeAttribute(g));
    });
  }
  const a = [],
    c = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  for (const f of o) {
    const { tag: d, shouldRender: h, id: y } = f;
    if (h) {
      if (d.tag === 'title') {
        n.title = d.textContent;
        continue;
      }
      (f.$el = f.$el || r.elMap[y]),
        f.$el ? l(f) : Po.includes(d.tag) && a.push(f);
    }
  }
  for (const f of a) {
    const d = f.tag.tagPosition || 'head';
    (f.$el = n.createElement(f.tag.tag)),
      l(f),
      (c[d] = c[d] || n.createDocumentFragment()),
      c[d].appendChild(f.$el);
  }
  for (const f of o) await e.hooks.callHook('dom:renderTag', f, n, i);
  c.head && n.head.appendChild(c.head),
    c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
    c.bodyClose && n.body.appendChild(c.bodyClose),
    Object.values(r.pendingSideEffects).forEach((f) => f()),
    (e._dom = r),
    (e.dirty = !1),
    await e.hooks.callHook('dom:rendered', { renders: o });
}
async function $y(e, t = {}) {
  const n = t.delayFn || ((s) => setTimeout(s, 10));
  return (e._domUpdatePromise =
    e._domUpdatePromise ||
    new Promise((s) =>
      n(async () => {
        await kf(e, t), delete e._domUpdatePromise, s();
      })
    ));
}
function Ry(e) {
  return (t) => {
    var s, o;
    const n =
      ((o =
        (s = t.resolvedOptions.document) == null
          ? void 0
          : s.head.querySelector('script[id="unhead:payload"]')) == null
        ? void 0
        : o.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: 'client',
        hooks: {
          'entries:updated': function (r) {
            $y(r, e);
          },
        },
      }
    );
  };
}
const Py = ['templateParams', 'htmlAttrs', 'bodyAttrs'],
  Ay = {
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        ['hid', 'vmid', 'key'].forEach((s) => {
          e.props[s] && ((e.key = e.props[s]), delete e.props[s]);
        });
        const n = Pf(e) || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      'tags:resolve': function (e) {
        const t = {};
        e.tags.forEach((s) => {
          const o = (s.key ? `${s.tag}:${s.key}` : s._d) || s._p,
            r = t[o];
          if (r) {
            let l = s == null ? void 0 : s.tagDuplicateStrategy;
            if ((!l && Py.includes(s.tag) && (l = 'merge'), l === 'merge')) {
              const a = r.props;
              ['class', 'style'].forEach((c) => {
                a[c] &&
                  (s.props[c]
                    ? (c === 'style' && !a[c].endsWith(';') && (a[c] += ';'),
                      (s.props[c] = `${a[c]} ${s.props[c]}`))
                    : (s.props[c] = a[c]));
              }),
                (t[o].props = { ...a, ...s.props });
              return;
            } else if (s._e === r._e) {
              (r._duped = r._duped || []),
                (s._d = `${r._d}:${r._duped.length + 1}`),
                r._duped.push(s);
              return;
            } else if (Zo(s) > Zo(r)) return;
          }
          const i =
            Object.keys(s.props).length +
            (s.innerHTML ? 1 : 0) +
            (s.textContent ? 1 : 0);
          if (Po.includes(s.tag) && i === 0) {
            delete t[o];
            return;
          }
          t[o] = s;
        });
        const n = [];
        Object.values(t).forEach((s) => {
          const o = s._duped;
          delete s._duped, n.push(s), o && n.push(...o);
        }),
          (e.tags = n),
          (e.tags = e.tags.filter(
            (s) =>
              !(
                s.tag === 'meta' &&
                (s.props.name || s.props.property) &&
                !s.props.content
              )
          ));
      },
    },
  },
  ky = {
    mode: 'server',
    hooks: {
      'tags:resolve': function (e) {
        const t = {};
        e.tags
          .filter(
            (n) =>
              ['titleTemplate', 'templateParams', 'title'].includes(n.tag) &&
              n._m === 'server'
          )
          .forEach((n) => {
            t[n.tag] = n.tag.startsWith('title') ? n.textContent : n.props;
          }),
          Object.keys(t).length &&
            e.tags.push({
              tag: 'script',
              innerHTML: JSON.stringify(t),
              props: { id: 'unhead:payload', type: 'application/json' },
            });
      },
    },
  },
  Oy = ['script', 'link', 'bodyAttrs'],
  My = (e) => ({
    hooks: {
      'tags:resolve': function (t) {
        for (const n of t.tags.filter((s) => Oy.includes(s.tag)))
          Object.entries(n.props).forEach(([s, o]) => {
            s.startsWith('on') &&
              typeof o == 'function' &&
              (e.ssr && Oa.includes(s)
                ? (n.props[s] = `this.dataset.${s}fired = true`)
                : delete n.props[s],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[s] = o));
          }),
            e.ssr &&
              n._eventHandlers &&
              (n.props.src || n.props.href) &&
              (n.key = n.key || ml(n.props.src || n.props.href));
      },
      'dom:renderTag': function ({ $el: t, tag: n }) {
        var s, o;
        for (const r of Object.keys(
          (t == null ? void 0 : t.dataset) || {}
        ).filter((i) => Oa.some((l) => `${l}fired` === i))) {
          const i = r.replace('fired', '');
          (o = (s = n._eventHandlers) == null ? void 0 : s[i]) == null ||
            o.call(t, new Event(i.replace('on', '')));
        }
      },
    },
  }),
  Ly = ['link', 'style', 'script', 'noscript'],
  Ny = {
    hooks: {
      'tag:normalise': ({ tag: e }) => {
        e.key && Ly.includes(e.tag) && (e.props['data-hid'] = e._h = ml(e.key));
      },
    },
  },
  Hy = {
    hooks: {
      'tags:resolve': (e) => {
        const t = (n) => {
          var s;
          return (s = e.tags.find((o) => o._d === n)) == null ? void 0 : s._p;
        };
        for (const { prefix: n, offset: s } of Cy)
          for (const o of e.tags.filter(
            (r) =>
              typeof r.tagPriority == 'string' && r.tagPriority.startsWith(n)
          )) {
            const r = t(o.tagPriority.replace(n, ''));
            typeof r < 'u' && (o._p = r + s);
          }
        e.tags.sort((n, s) => n._p - s._p).sort((n, s) => Zo(n) - Zo(s));
      },
    },
  },
  Iy = { meta: 'content', link: 'href', htmlAttrs: 'lang' },
  jy = (e) => ({
    hooks: {
      'tags:resolve': (t) => {
        var l;
        const { tags: n } = t,
          s =
            (l = n.find((a) => a.tag === 'title')) == null
              ? void 0
              : l.textContent,
          o = n.findIndex((a) => a.tag === 'templateParams'),
          r = o !== -1 ? n[o].props : {},
          i = r.separator || '|';
        delete r.separator, (r.pageTitle = Ao(r.pageTitle || s || '', r, i));
        for (const a of n.filter((c) => c.processTemplateParams !== !1)) {
          const c = Iy[a.tag];
          c && typeof a.props[c] == 'string'
            ? (a.props[c] = Ao(a.props[c], r, i))
            : (a.processTemplateParams === !0 ||
                ['titleTemplate', 'title'].includes(a.tag)) &&
              ['innerHTML', 'textContent'].forEach((u) => {
                typeof a[u] == 'string' && (a[u] = Ao(a[u], r, i));
              });
        }
        (e._templateParams = r),
          (e._separator = i),
          (t.tags = n.filter((a) => a.tag !== 'templateParams'));
      },
    },
  }),
  Fy = {
    hooks: {
      'tags:resolve': (e) => {
        const { tags: t } = e;
        let n = t.findIndex((o) => o.tag === 'titleTemplate');
        const s = t.findIndex((o) => o.tag === 'title');
        if (s !== -1 && n !== -1) {
          const o = Pa(t[n].textContent, t[s].textContent);
          o !== null ? (t[s].textContent = o || t[s].textContent) : delete t[s];
        } else if (n !== -1) {
          const o = Pa(t[n].textContent);
          o !== null &&
            ((t[n].textContent = o), (t[n].tag = 'title'), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  },
  Dy = {
    hooks: {
      'tags:afterResolve': function (e) {
        for (const t of e.tags)
          typeof t.innerHTML == 'string' &&
            (t.innerHTML &&
            ['application/ld+json', 'application/json'].includes(t.props.type)
              ? (t.innerHTML = t.innerHTML.replace(/</g, '\\u003C'))
              : (t.innerHTML = t.innerHTML.replace(
                  new RegExp(`</${t.tag}`, 'g'),
                  `<\\/${t.tag}`
                )));
      },
    },
  };
let Of;
function By(e = {}) {
  const t = Wy(e);
  return t.use(Ry()), (Of = t);
}
function Ma(e, t) {
  return !e || (e === 'server' && t) || (e === 'client' && !t);
}
function Wy(e = {}) {
  const t = wf();
  t.addHooks(e.hooks || {}),
    (e.document = e.document || (by ? document : void 0));
  const n = !e.document,
    s = () => {
      (l.dirty = !0), t.callHook('entries:updated', l);
    };
  let o = 0,
    r = [];
  const i = [],
    l = {
      plugins: i,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries() {
        return r;
      },
      use(a) {
        const c = typeof a == 'function' ? a(l) : a;
        (!c.key || !i.some((u) => u.key === c.key)) &&
          (i.push(c), Ma(c.mode, n) && t.addHooks(c.hooks || {}));
      },
      push(a, c) {
        c == null || delete c.head;
        const u = { _i: o++, input: a, ...c };
        return (
          Ma(u.mode, n) && (r.push(u), s()),
          {
            dispose() {
              (r = r.filter((f) => f._i !== u._i)),
                t.callHook('entries:updated', l),
                s();
            },
            patch(f) {
              (r = r.map((d) => (d._i === u._i && (d.input = u.input = f), d))),
                s();
            },
          }
        );
      },
      async resolveTags() {
        const a = { tags: [], entries: [...r] };
        await t.callHook('entries:resolve', a);
        for (const c of a.entries) {
          const u = c.resolvedInput || c.input;
          if (
            ((c.resolvedInput = await (c.transform ? c.transform(u) : u)),
            c.resolvedInput)
          )
            for (const f of await Ty(c)) {
              const d = {
                tag: f,
                entry: c,
                resolvedOptions: l.resolvedOptions,
              };
              await t.callHook('tag:normalise', d), a.tags.push(d.tag);
            }
        }
        return (
          await t.callHook('tags:beforeResolve', a),
          await t.callHook('tags:resolve', a),
          await t.callHook('tags:afterResolve', a),
          a.tags
        );
      },
      ssr: n,
    };
  return (
    [
      Ay,
      ky,
      My,
      Ny,
      Hy,
      jy,
      Fy,
      Dy,
      ...((e == null ? void 0 : e.plugins) || []),
    ].forEach((a) => l.use(a)),
    l.hooks.callHook('init', l),
    l
  );
}
function Uy() {
  return Of;
}
const Vy = sf.startsWith('3');
function zy(e) {
  return typeof e == 'function' ? e() : se(e);
}
function er(e, t = '') {
  if (e instanceof Promise) return e;
  const n = zy(e);
  return !e || !n
    ? n
    : Array.isArray(n)
      ? n.map((s) => er(s, t))
      : typeof n == 'object'
        ? Object.fromEntries(
            Object.entries(n).map(([s, o]) =>
              s === 'titleTemplate' || s.startsWith('on')
                ? [s, se(o)]
                : [s, er(o, s)]
            )
          )
        : n;
}
const qy = {
    hooks: {
      'entries:resolve': function (e) {
        for (const t of e.entries) t.resolvedInput = er(t.input);
      },
    },
  },
  Mf = 'usehead';
function Ky(e) {
  return {
    install(n) {
      Vy &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(Mf, e));
    },
  }.install;
}
function Gy(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => pn(() => setTimeout(() => n(), 0)));
  const t = By(e);
  return t.use(qy), (t.install = Ky(t)), t;
}
const Pi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  Ai = '__unhead_injection_handler__';
function Jy(e) {
  Pi[Ai] = e;
}
function Xy() {
  if (Ai in Pi) return Pi[Ai]();
  const e = Ze(Mf);
  return e || Uy();
}
function Yy(e, t = {}) {
  const n = t.head || Xy();
  if (n) return n.ssr ? n.push(e, t) : Qy(n, e, t);
}
function Qy(e, t, n = {}) {
  const s = ae(!1),
    o = ae({});
  zu(() => {
    o.value = s.value ? {} : er(t);
  });
  const r = e.push(o.value, n);
  return (
    gt(o, (l) => {
      r.patch(l);
    }),
    Nn() &&
      (eo(() => {
        r.dispose();
      }),
      xu(() => {
        s.value = !0;
      }),
      bu(() => {
        s.value = !1;
      })),
    r
  );
}
let ko, Oo;
function Zy() {
  return (
    (ko = $fetch(pl(`builds/meta/${ps().app.buildId}.json`), {
      responseType: 'json',
    })),
    ko
      .then((e) => {
        Oo = Ym(e.matcher);
      })
      .catch((e) => {
        console.error('[nuxt] Error fetching app manifest.', e);
      }),
    ko
  );
}
function Tr() {
  return ko || Zy();
}
async function yl(e) {
  if ((await Tr(), !Oo))
    return console.error('[nuxt] Error creating app manifest matcher.', Oo), {};
  try {
    return Sf({}, ...Oo.matchAll(e).reverse());
  } catch (t) {
    return console.error('[nuxt] Error matching route rules.', t), {};
  }
}
async function La(e, t = {}) {
  const n = await tv(e, t),
    s = be(),
    o = (s._payloadCache = s._payloadCache || {});
  return (
    n in o ||
      (o[n] = Nf(e).then((r) =>
        r ? Lf(n).then((i) => i || (delete o[n], null)) : ((o[n] = null), null)
      )),
    o[n]
  );
}
const ev = '_payload.json';
async function tv(e, t = {}) {
  const n = new URL(e, 'http://localhost');
  if (n.host !== 'localhost' || gn(n.pathname, { acceptRelative: !0 }))
    throw new Error('Payload URL must not include hostname: ' + e);
  const s = ps(),
    o = t.hash || (t.fresh ? Date.now() : s.app.buildId),
    r = s.app.cdnURL,
    i = r && (await Nf(e)) ? r : s.app.baseURL;
  return br(i, n.pathname, ev + (o ? `?${o}` : ''));
}
async function Lf(e) {
  const t = fetch(e).then((n) => n.text().then(Hf));
  try {
    return await t;
  } catch (n) {
    console.warn('[nuxt] Cannot load payload ', e, n);
  }
  return null;
}
async function Nf(e = Cf().path) {
  if (((e = _r(e)), (await Tr()).prerendered.includes(e))) return !0;
  const n = await yl(e);
  return !!n.prerender && !n.redirect;
}
let vo = null;
async function nv() {
  if (vo) return vo;
  const e = document.getElementById('__NUXT_DATA__');
  if (!e) return {};
  const t = await Hf(e.textContent || ''),
    n = e.dataset.src ? await Lf(e.dataset.src) : void 0;
  return (vo = { ...t, ...n, ...window.__NUXT__ }), vo;
}
async function Hf(e) {
  return await gy(e, be()._payloadRevivers);
}
function sv(e, t) {
  be()._payloadRevivers[e] = t;
}
const Na = {
    NuxtError: (e) => Sr(e),
    EmptyShallowRef: (e) =>
      ss(e === '_' ? void 0 : e === '0n' ? BigInt(0) : Go(e)),
    EmptyRef: (e) => ae(e === '_' ? void 0 : e === '0n' ? BigInt(0) : Go(e)),
    ShallowRef: (e) => ss(e),
    ShallowReactive: (e) => Lt(e),
    Ref: (e) => ae(e),
    Reactive: (e) => Ft(e),
  },
  ov = wt({
    name: 'nuxt:revive-payload:client',
    order: -30,
    async setup(e) {
      let t, n;
      for (const s in Na) sv(s, Na[s]);
      Object.assign(
        e.payload,
        (([t, n] = Ws(() => e.runWithContext(nv))), (t = await t), n(), t)
      ),
        (window.__NUXT__ = e.payload);
    },
  }),
  rv = [],
  iv = wt({
    name: 'nuxt:head',
    enforce: 'pre',
    setup(e) {
      const t = Gy({ plugins: rv });
      Jy(() => be().vueApp._context.provides.usehead), e.vueApp.use(t);
      {
        let n = !0;
        const s = async () => {
          (n = !1), await kf(t);
        };
        t.hooks.hook('dom:beforeRender', (o) => {
          o.shouldRender = !n;
        }),
          e.hooks.hook('page:start', () => {
            n = !0;
          }),
          e.hooks.hook('page:finish', () => {
            e.isHydrating || s();
          }),
          e.hooks.hook('app:error', s),
          e.hooks.hook('app:suspense:resolve', s);
      }
    },
  });
/*!
 * vue-router v4.4.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Bn = typeof document < 'u';
function lv(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const he = Object.assign;
function Gr(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = vt(o) ? o.map(e) : e(o);
  }
  return n;
}
const Ps = () => {},
  vt = Array.isArray,
  If = /#/g,
  av = /&/g,
  cv = /\//g,
  uv = /=/g,
  fv = /\?/g,
  jf = /\+/g,
  dv = /%5B/g,
  hv = /%5D/g,
  Ff = /%5E/g,
  pv = /%60/g,
  Df = /%7B/g,
  gv = /%7C/g,
  Bf = /%7D/g,
  mv = /%20/g;
function vl(e) {
  return encodeURI('' + e)
    .replace(gv, '|')
    .replace(dv, '[')
    .replace(hv, ']');
}
function yv(e) {
  return vl(e).replace(Df, '{').replace(Bf, '}').replace(Ff, '^');
}
function ki(e) {
  return vl(e)
    .replace(jf, '%2B')
    .replace(mv, '+')
    .replace(If, '%23')
    .replace(av, '%26')
    .replace(pv, '`')
    .replace(Df, '{')
    .replace(Bf, '}')
    .replace(Ff, '^');
}
function vv(e) {
  return ki(e).replace(uv, '%3D');
}
function wv(e) {
  return vl(e).replace(If, '%23').replace(fv, '%3F');
}
function _v(e) {
  return e == null ? '' : wv(e).replace(cv, '%2F');
}
function Us(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const bv = /\/$/,
  xv = (e) => e.replace(bv, '');
function Jr(e, t, n = '/') {
  let s,
    o = {},
    r = '',
    i = '';
  const l = t.indexOf('#');
  let a = t.indexOf('?');
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((s = t.slice(0, a)),
      (r = t.slice(a + 1, l > -1 ? l : t.length)),
      (o = e(r))),
    l > -1 && ((s = s || t.slice(0, l)), (i = t.slice(l, t.length))),
    (s = Cv(s ?? t, n)),
    { fullPath: s + (r && '?') + r + i, path: s, query: o, hash: Us(i) }
  );
}
function Ev(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Ha(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function Sv(e, t, n) {
  const s = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    s > -1 &&
    s === o &&
    is(t.matched[s], n.matched[o]) &&
    Wf(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function is(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Wf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Tv(e[n], t[n])) return !1;
  return !0;
}
function Tv(e, t) {
  return vt(e) ? Ia(e, t) : vt(t) ? Ia(t, e) : e === t;
}
function Ia(e, t) {
  return vt(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function Cv(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    s = e.split('/'),
    o = s[s.length - 1];
  (o === '..' || o === '.') && s.push('');
  let r = n.length - 1,
    i,
    l;
  for (i = 0; i < s.length; i++)
    if (((l = s[i]), l !== '.'))
      if (l === '..') r > 1 && r--;
      else break;
  return n.slice(0, r).join('/') + '/' + s.slice(i).join('/');
}
const dt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Vs;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(Vs || (Vs = {}));
var As;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(As || (As = {}));
function $v(e) {
  if (!e)
    if (Bn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), xv(e);
}
const Rv = /^[^#]+#/;
function Pv(e, t) {
  return e.replace(Rv, '#') + t;
}
function Av(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const Cr = () => ({ left: window.scrollX, top: window.scrollY });
function kv(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Av(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function ja(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Oi = new Map();
function Ov(e, t) {
  Oi.set(e, t);
}
function Mv(e) {
  const t = Oi.get(e);
  return Oi.delete(e), t;
}
let Lv = () => location.protocol + '//' + location.host;
function Uf(e, t) {
  const { pathname: n, search: s, hash: o } = t,
    r = e.indexOf('#');
  if (r > -1) {
    let l = o.includes(e.slice(r)) ? e.slice(r).length : 1,
      a = o.slice(l);
    return a[0] !== '/' && (a = '/' + a), Ha(a, '');
  }
  return Ha(n, e) + s + o;
}
function Nv(e, t, n, s) {
  let o = [],
    r = [],
    i = null;
  const l = ({ state: d }) => {
    const h = Uf(e, location),
      y = n.value,
      g = t.value;
    let b = 0;
    if (d) {
      if (((n.value = h), (t.value = d), i && i === y)) {
        i = null;
        return;
      }
      b = g ? d.position - g.position : 0;
    } else s(h);
    o.forEach((x) => {
      x(n.value, y, {
        delta: b,
        type: Vs.pop,
        direction: b ? (b > 0 ? As.forward : As.back) : As.unknown,
      });
    });
  };
  function a() {
    i = n.value;
  }
  function c(d) {
    o.push(d);
    const h = () => {
      const y = o.indexOf(d);
      y > -1 && o.splice(y, 1);
    };
    return r.push(h), h;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(he({}, d.state, { scroll: Cr() }), '');
  }
  function f() {
    for (const d of r) d();
    (r = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: f }
  );
}
function Fa(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Cr() : null,
  };
}
function Hv(e) {
  const { history: t, location: n } = window,
    s = { value: Uf(e, n) },
    o = { value: t.state };
  o.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(a, c, u) {
    const f = e.indexOf('#'),
      d =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + a
          : Lv() + e + a;
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', d), (o.value = c);
    } catch (h) {
      console.error(h), n[u ? 'replace' : 'assign'](d);
    }
  }
  function i(a, c) {
    const u = he({}, t.state, Fa(o.value.back, a, o.value.forward, !0), c, {
      position: o.value.position,
    });
    r(a, u, !0), (s.value = a);
  }
  function l(a, c) {
    const u = he({}, o.value, t.state, { forward: a, scroll: Cr() });
    r(u.current, u, !0);
    const f = he({}, Fa(s.value, a, null), { position: u.position + 1 }, c);
    r(a, f, !1), (s.value = a);
  }
  return { location: s, state: o, push: l, replace: i };
}
function Vf(e) {
  e = $v(e);
  const t = Hv(e),
    n = Nv(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = he(
    { location: '', base: e, go: s, createHref: Pv.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Iv(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Vf(e)
  );
}
function jv(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function zf(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const qf = Symbol('');
var Da;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Da || (Da = {}));
function ls(e, t) {
  return he(new Error(), { type: e, [qf]: !0 }, t);
}
function kt(e, t) {
  return e instanceof Error && qf in e && (t == null || !!(e.type & t));
}
const Ba = '[^/]+?',
  Fv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Dv = /[.+*?^${}()[\]/\\]/g;
function Bv(e, t) {
  const n = he({}, Fv, t),
    s = [];
  let o = n.start ? '^' : '';
  const r = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (o += '/');
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (o += '/'), (o += d.value.replace(Dv, '\\$&')), (h += 40);
      else if (d.type === 1) {
        const { value: y, repeatable: g, optional: b, regexp: x } = d;
        r.push({ name: y, repeatable: g, optional: b });
        const v = x || Ba;
        if (v !== Ba) {
          h += 10;
          try {
            new RegExp(`(${v})`);
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${v}): ` + _.message
            );
          }
        }
        let p = g ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        f || (p = b && c.length < 2 ? `(?:/${p})` : '/' + p),
          b && (p += '?'),
          (o += p),
          (h += 20),
          b && (h += -8),
          g && (h += -20),
          v === '.*' && (h += -50);
      }
      u.push(h);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const c = s.length - 1;
    s[c][s[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
  const i = new RegExp(o, n.sensitive ? '' : 'i');
  function l(c) {
    const u = c.match(i),
      f = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || '',
        y = r[d - 1];
      f[y.name] = h && y.repeatable ? h.split('/') : h;
    }
    return f;
  }
  function a(c) {
    let u = '',
      f = !1;
    for (const d of e) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const h of d)
        if (h.type === 0) u += h.value;
        else if (h.type === 1) {
          const { value: y, repeatable: g, optional: b } = h,
            x = y in c ? c[y] : '';
          if (vt(x) && !g)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`
            );
          const v = vt(x) ? x.join('/') : x;
          if (!v)
            if (b)
              d.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${y}"`);
          u += v;
        }
    }
    return u || '/';
  }
  return { re: i, score: s, keys: r, parse: l, stringify: a };
}
function Wv(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function Kf(e, t) {
  let n = 0;
  const s = e.score,
    o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = Wv(s[n], o[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Wa(s)) return 1;
    if (Wa(o)) return -1;
  }
  return o.length - s.length;
}
function Wa(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Uv = { type: 0, value: '' },
  Vv = /[a-zA-Z0-9_]/;
function zv(e) {
  if (!e) return [[]];
  if (e === '/') return [[Uv]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0,
    s = n;
  const o = [];
  let r;
  function i() {
    r && o.push(r), (r = []);
  }
  let l = 0,
    a,
    c = '',
    u = '';
  function f() {
    c &&
      (n === 0
        ? r.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (r.length > 1 &&
              (a === '*' || a === '+') &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
              ),
            r.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: a === '*' || a === '+',
              optional: a === '*' || a === '?',
            }))
          : t('Invalid state to consume buffer'),
      (c = ''));
  }
  function d() {
    c += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === '/' ? (c && f(), i()) : a === ':' ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = s);
        break;
      case 1:
        a === '('
          ? (n = 2)
          : Vv.test(a)
            ? d()
            : (f(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--);
        break;
      case 2:
        a === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a);
        break;
      case 3:
        f(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--, (u = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), o;
}
function qv(e, t, n) {
  const s = Bv(zv(e.path), n),
    o = he(s, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Kv(e, t) {
  const n = [],
    s = new Map();
  t = za({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return s.get(f);
  }
  function r(f, d, h) {
    const y = !h,
      g = Gv(f);
    g.aliasOf = h && h.record;
    const b = za(t, f),
      x = [g];
    if ('alias' in f) {
      const _ = typeof f.alias == 'string' ? [f.alias] : f.alias;
      for (const S of _)
        x.push(
          he({}, g, {
            components: h ? h.record.components : g.components,
            path: S,
            aliasOf: h ? h.record : g,
          })
        );
    }
    let v, p;
    for (const _ of x) {
      const { path: S } = _;
      if (d && S[0] !== '/') {
        const E = d.record.path,
          R = E[E.length - 1] === '/' ? '' : '/';
        _.path = d.record.path + (S && R + S);
      }
      if (
        ((v = qv(_, d, b)),
        h
          ? h.alias.push(v)
          : ((p = p || v),
            p !== v && p.alias.push(v),
            y && f.name && !Va(v) && i(f.name)),
        Gf(v) && a(v),
        g.children)
      ) {
        const E = g.children;
        for (let R = 0; R < E.length; R++) r(E[R], v, h && h.children[R]);
      }
      h = h || v;
    }
    return p
      ? () => {
          i(p);
        }
      : Ps;
  }
  function i(f) {
    if (zf(f)) {
      const d = s.get(f);
      d &&
        (s.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(i),
        d.alias.forEach(i));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(f) {
    const d = Yv(f, n);
    n.splice(d, 0, f), f.record.name && !Va(f) && s.set(f.record.name, f);
  }
  function c(f, d) {
    let h,
      y = {},
      g,
      b;
    if ('name' in f && f.name) {
      if (((h = s.get(f.name)), !h)) throw ls(1, { location: f });
      (b = h.record.name),
        (y = he(
          Ua(
            d.params,
            h.keys
              .filter((p) => !p.optional)
              .concat(h.parent ? h.parent.keys.filter((p) => p.optional) : [])
              .map((p) => p.name)
          ),
          f.params &&
            Ua(
              f.params,
              h.keys.map((p) => p.name)
            )
        )),
        (g = h.stringify(y));
    } else if (f.path != null)
      (g = f.path),
        (h = n.find((p) => p.re.test(g))),
        h && ((y = h.parse(g)), (b = h.record.name));
    else {
      if (((h = d.name ? s.get(d.name) : n.find((p) => p.re.test(d.path))), !h))
        throw ls(1, { location: f, currentLocation: d });
      (b = h.record.name),
        (y = he({}, d.params, f.params)),
        (g = h.stringify(y));
    }
    const x = [];
    let v = h;
    for (; v; ) x.unshift(v.record), (v = v.parent);
    return { name: b, path: g, params: y, matched: x, meta: Xv(x) };
  }
  e.forEach((f) => r(f));
  function u() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: r,
    resolve: c,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: l,
    getRecordMatcher: o,
  };
}
function Ua(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Gv(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Jv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Jv(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n;
  return t;
}
function Va(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Xv(e) {
  return e.reduce((t, n) => he(t, n.meta), {});
}
function za(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function Yv(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const r = (n + s) >> 1;
    Kf(e, t[r]) < 0 ? (s = r) : (n = r + 1);
  }
  const o = Qv(e);
  return o && (s = t.lastIndexOf(o, s - 1)), s;
}
function Qv(e) {
  let t = e;
  for (; (t = t.parent); ) if (Gf(t) && Kf(e, t) === 0) return t;
}
function Gf({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Zv(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const s = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(jf, ' '),
      i = r.indexOf('='),
      l = Us(i < 0 ? r : r.slice(0, i)),
      a = i < 0 ? null : Us(r.slice(i + 1));
    if (l in t) {
      let c = t[l];
      vt(c) || (c = t[l] = [c]), c.push(a);
    } else t[l] = a;
  }
  return t;
}
function qa(e) {
  let t = '';
  for (let n in e) {
    const s = e[n];
    if (((n = vv(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (vt(s) ? s.map((r) => r && ki(r)) : [s && ki(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r));
    });
  }
  return t;
}
function ew(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = vt(s)
        ? s.map((o) => (o == null ? null : '' + o))
        : s == null
          ? s
          : '' + s);
  }
  return t;
}
const tw = Symbol(''),
  Ka = Symbol(''),
  wl = Symbol(''),
  Jf = Symbol(''),
  Mi = Symbol('');
function vs() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const o = e.indexOf(s);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Zt(e, t, n, s, o, r = (i) => i()) {
  const i = s && (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () =>
    new Promise((l, a) => {
      const c = (d) => {
          d === !1
            ? a(ls(4, { from: n, to: t }))
            : d instanceof Error
              ? a(d)
              : jv(d)
                ? a(ls(2, { from: t, to: d }))
                : (i &&
                    s.enterCallbacks[o] === i &&
                    typeof d == 'function' &&
                    i.push(d),
                  l());
        },
        u = r(() => e.call(s && s.instances[o], t, n, c));
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((d) => a(d));
    });
}
function Xr(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e)
    for (const l in i.components) {
      let a = i.components[l];
      if (!(t !== 'beforeRouteEnter' && !i.instances[l]))
        if (nw(a)) {
          const u = (a.__vccOpts || a)[t];
          u && r.push(Zt(u, n, s, i, l, o));
        } else {
          let c = a();
          r.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${l}" at "${i.path}"`)
                );
              const f = lv(u) ? u.default : u;
              i.components[l] = f;
              const h = (f.__vccOpts || f)[t];
              return h && Zt(h, n, s, i, l, o)();
            })
          );
        }
    }
  return r;
}
function nw(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function Ga(e) {
  const t = Ze(wl),
    n = Ze(Jf),
    s = le(() => {
      const a = se(e.to);
      return t.resolve(a);
    }),
    o = le(() => {
      const { matched: a } = s.value,
        { length: c } = a,
        u = a[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(is.bind(null, u));
      if (d > -1) return d;
      const h = Ja(a[c - 2]);
      return c > 1 && Ja(u) === h && f[f.length - 1].path !== h
        ? f.findIndex(is.bind(null, a[c - 2]))
        : d;
    }),
    r = le(() => o.value > -1 && iw(n.params, s.value.params)),
    i = le(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Wf(n.params, s.value.params)
    );
  function l(a = {}) {
    return rw(a)
      ? t[se(e.replace) ? 'replace' : 'push'](se(e.to)).catch(Ps)
      : Promise.resolve();
  }
  return {
    route: s,
    href: le(() => s.value.href),
    isActive: r,
    isExactActive: i,
    navigate: l,
  };
}
const sw = tt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Ga,
    setup(e, { slots: t }) {
      const n = Ft(Ga(e)),
        { options: s } = Ze(wl),
        o = le(() => ({
          [Xa(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Xa(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : Qe(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              r
            );
      };
    },
  }),
  ow = sw;
function rw(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function iw(e, t) {
  for (const n in t) {
    const s = t[n],
      o = e[n];
    if (typeof s == 'string') {
      if (s !== o) return !1;
    } else if (!vt(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function Ja(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Xa = (e, t, n) => e ?? t ?? n,
  lw = tt({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ze(Mi),
        o = le(() => e.route || s.value),
        r = Ze(Ka, 0),
        i = le(() => {
          let c = se(r);
          const { matched: u } = o.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        l = le(() => o.value.matched[i.value]);
      Qn(
        Ka,
        le(() => i.value + 1)
      ),
        Qn(tw, l),
        Qn(Mi, o);
      const a = ae();
      return (
        gt(
          () => [a.value, l.value, e.name],
          ([c, u, f], [d, h, y]) => {
            u &&
              ((u.instances[f] = c),
              h &&
                h !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !is(u, h) || !d) &&
                (u.enterCallbacks[f] || []).forEach((g) => g(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = o.value,
            u = e.name,
            f = l.value,
            d = f && f.components[u];
          if (!d) return Ya(n.default, { Component: d, route: c });
          const h = f.props[u],
            y = h
              ? h === !0
                ? c.params
                : typeof h == 'function'
                  ? h(c)
                  : h
              : null,
            b = Qe(
              d,
              he({}, y, t, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (f.instances[u] = null);
                },
                ref: a,
              })
            );
          return Ya(n.default, { Component: b, route: c }) || b;
        }
      );
    },
  });
function Ya(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Xf = lw;
function aw(e) {
  const t = Kv(e.routes, e),
    n = e.parseQuery || Zv,
    s = e.stringifyQuery || qa,
    o = e.history,
    r = vs(),
    i = vs(),
    l = vs(),
    a = ss(dt);
  let c = dt;
  Bn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Gr.bind(null, (A) => '' + A),
    f = Gr.bind(null, _v),
    d = Gr.bind(null, Us);
  function h(A, U) {
    let W, K;
    return (
      zf(A) ? ((W = t.getRecordMatcher(A)), (K = U)) : (K = A), t.addRoute(K, W)
    );
  }
  function y(A) {
    const U = t.getRecordMatcher(A);
    U && t.removeRoute(U);
  }
  function g() {
    return t.getRoutes().map((A) => A.record);
  }
  function b(A) {
    return !!t.getRecordMatcher(A);
  }
  function x(A, U) {
    if (((U = he({}, U || a.value)), typeof A == 'string')) {
      const w = Jr(n, A, U.path),
        T = t.resolve({ path: w.path }, U),
        O = o.createHref(w.fullPath);
      return he(w, T, {
        params: d(T.params),
        hash: Us(w.hash),
        redirectedFrom: void 0,
        href: O,
      });
    }
    let W;
    if (A.path != null) W = he({}, A, { path: Jr(n, A.path, U.path).path });
    else {
      const w = he({}, A.params);
      for (const T in w) w[T] == null && delete w[T];
      (W = he({}, A, { params: f(w) })), (U.params = f(U.params));
    }
    const K = t.resolve(W, U),
      fe = A.hash || '';
    K.params = u(d(K.params));
    const ve = Ev(s, he({}, A, { hash: yv(fe), path: K.path })),
      m = o.createHref(ve);
    return he(
      { fullPath: ve, hash: fe, query: s === qa ? ew(A.query) : A.query || {} },
      K,
      { redirectedFrom: void 0, href: m }
    );
  }
  function v(A) {
    return typeof A == 'string' ? Jr(n, A, a.value.path) : he({}, A);
  }
  function p(A, U) {
    if (c !== A) return ls(8, { from: U, to: A });
  }
  function _(A) {
    return R(A);
  }
  function S(A) {
    return _(he(v(A), { replace: !0 }));
  }
  function E(A) {
    const U = A.matched[A.matched.length - 1];
    if (U && U.redirect) {
      const { redirect: W } = U;
      let K = typeof W == 'function' ? W(A) : W;
      return (
        typeof K == 'string' &&
          ((K = K.includes('?') || K.includes('#') ? (K = v(K)) : { path: K }),
          (K.params = {})),
        he(
          {
            query: A.query,
            hash: A.hash,
            params: K.path != null ? {} : A.params,
          },
          K
        )
      );
    }
  }
  function R(A, U) {
    const W = (c = x(A)),
      K = a.value,
      fe = A.state,
      ve = A.force,
      m = A.replace === !0,
      w = E(W);
    if (w)
      return R(
        he(v(w), {
          state: typeof w == 'object' ? he({}, fe, w.state) : fe,
          force: ve,
          replace: m,
        }),
        U || W
      );
    const T = W;
    T.redirectedFrom = U;
    let O;
    return (
      !ve &&
        Sv(s, K, W) &&
        ((O = ls(16, { to: T, from: K })), _t(K, K, !0, !1)),
      (O ? Promise.resolve(O) : C(T, K))
        .catch(($) => (kt($) ? (kt($, 2) ? $ : Bt($)) : q($, T, K)))
        .then(($) => {
          if ($) {
            if (kt($, 2))
              return R(
                he({ replace: m }, v($.to), {
                  state: typeof $.to == 'object' ? he({}, fe, $.to.state) : fe,
                  force: ve,
                }),
                U || T
              );
          } else $ = k(T, K, !0, m, fe);
          return H(T, K, $), $;
        })
    );
  }
  function L(A, U) {
    const W = p(A, U);
    return W ? Promise.reject(W) : Promise.resolve();
  }
  function P(A) {
    const U = jn.values().next().value;
    return U && typeof U.runWithContext == 'function'
      ? U.runWithContext(A)
      : A();
  }
  function C(A, U) {
    let W;
    const [K, fe, ve] = cw(A, U);
    W = Xr(K.reverse(), 'beforeRouteLeave', A, U);
    for (const w of K)
      w.leaveGuards.forEach((T) => {
        W.push(Zt(T, A, U));
      });
    const m = L.bind(null, A, U);
    return (
      W.push(m),
      nt(W)
        .then(() => {
          W = [];
          for (const w of r.list()) W.push(Zt(w, A, U));
          return W.push(m), nt(W);
        })
        .then(() => {
          W = Xr(fe, 'beforeRouteUpdate', A, U);
          for (const w of fe)
            w.updateGuards.forEach((T) => {
              W.push(Zt(T, A, U));
            });
          return W.push(m), nt(W);
        })
        .then(() => {
          W = [];
          for (const w of ve)
            if (w.beforeEnter)
              if (vt(w.beforeEnter))
                for (const T of w.beforeEnter) W.push(Zt(T, A, U));
              else W.push(Zt(w.beforeEnter, A, U));
          return W.push(m), nt(W);
        })
        .then(
          () => (
            A.matched.forEach((w) => (w.enterCallbacks = {})),
            (W = Xr(ve, 'beforeRouteEnter', A, U, P)),
            W.push(m),
            nt(W)
          )
        )
        .then(() => {
          W = [];
          for (const w of i.list()) W.push(Zt(w, A, U));
          return W.push(m), nt(W);
        })
        .catch((w) => (kt(w, 8) ? w : Promise.reject(w)))
    );
  }
  function H(A, U, W) {
    l.list().forEach((K) => P(() => K(A, U, W)));
  }
  function k(A, U, W, K, fe) {
    const ve = p(A, U);
    if (ve) return ve;
    const m = U === dt,
      w = Bn ? history.state : {};
    W &&
      (K || m
        ? o.replace(A.fullPath, he({ scroll: m && w && w.scroll }, fe))
        : o.push(A.fullPath, fe)),
      (a.value = A),
      _t(A, U, W, m),
      Bt();
  }
  let z;
  function Q() {
    z ||
      (z = o.listen((A, U, W) => {
        if (!ro.listening) return;
        const K = x(A),
          fe = E(K);
        if (fe) {
          R(he(fe, { replace: !0 }), K).catch(Ps);
          return;
        }
        c = K;
        const ve = a.value;
        Bn && Ov(ja(ve.fullPath, W.delta), Cr()),
          C(K, ve)
            .catch((m) =>
              kt(m, 12)
                ? m
                : kt(m, 2)
                  ? (R(m.to, K)
                      .then((w) => {
                        kt(w, 20) &&
                          !W.delta &&
                          W.type === Vs.pop &&
                          o.go(-1, !1);
                      })
                      .catch(Ps),
                    Promise.reject())
                  : (W.delta && o.go(-W.delta, !1), q(m, K, ve))
            )
            .then((m) => {
              (m = m || k(K, ve, !1)),
                m &&
                  (W.delta && !kt(m, 8)
                    ? o.go(-W.delta, !1)
                    : W.type === Vs.pop && kt(m, 20) && o.go(-1, !1)),
                H(K, ve, m);
            })
            .catch(Ps);
      }));
  }
  let ee = vs(),
    B = vs(),
    Y;
  function q(A, U, W) {
    Bt(A);
    const K = B.list();
    return (
      K.length ? K.forEach((fe) => fe(A, U, W)) : console.error(A),
      Promise.reject(A)
    );
  }
  function ut() {
    return Y && a.value !== dt
      ? Promise.resolve()
      : new Promise((A, U) => {
          ee.add([A, U]);
        });
  }
  function Bt(A) {
    return (
      Y ||
        ((Y = !A),
        Q(),
        ee.list().forEach(([U, W]) => (A ? W(A) : U())),
        ee.reset()),
      A
    );
  }
  function _t(A, U, W, K) {
    const { scrollBehavior: fe } = e;
    if (!Bn || !fe) return Promise.resolve();
    const ve =
      (!W && Mv(ja(A.fullPath, 0))) ||
      ((K || !W) && history.state && history.state.scroll) ||
      null;
    return pn()
      .then(() => fe(A, U, ve))
      .then((m) => m && kv(m))
      .catch((m) => q(m, A, U));
  }
  const Be = (A) => o.go(A);
  let In;
  const jn = new Set(),
    ro = {
      currentRoute: a,
      listening: !0,
      addRoute: h,
      removeRoute: y,
      clearRoutes: t.clearRoutes,
      hasRoute: b,
      getRoutes: g,
      resolve: x,
      options: e,
      push: _,
      replace: S,
      go: Be,
      back: () => Be(-1),
      forward: () => Be(1),
      beforeEach: r.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: B.add,
      isReady: ut,
      install(A) {
        const U = this;
        A.component('RouterLink', ow),
          A.component('RouterView', Xf),
          (A.config.globalProperties.$router = U),
          Object.defineProperty(A.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => se(a),
          }),
          Bn &&
            !In &&
            a.value === dt &&
            ((In = !0), _(o.location).catch((fe) => {}));
        const W = {};
        for (const fe in dt)
          Object.defineProperty(W, fe, {
            get: () => a.value[fe],
            enumerable: !0,
          });
        A.provide(wl, U), A.provide(Jf, Lt(W)), A.provide(Mi, a);
        const K = A.unmount;
        jn.add(A),
          (A.unmount = function () {
            jn.delete(A),
              jn.size < 1 &&
                ((c = dt),
                z && z(),
                (z = null),
                (a.value = dt),
                (In = !1),
                (Y = !1)),
              K();
          });
      },
    };
  function nt(A) {
    return A.reduce((U, W) => U.then(() => P(W)), Promise.resolve());
  }
  return ro;
}
function cw(e, t) {
  const n = [],
    s = [],
    o = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const l = t.matched[i];
    l && (e.matched.find((c) => is(c, l)) ? s.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((c) => is(c, a)) || o.push(a));
  }
  return [n, s, o];
}
const uw = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, (n) => {
        var s;
        return (
          ((s = e.params[n.slice(1)]) == null ? void 0 : s.toString()) || ''
        );
      }),
  Li = (e, t) => {
    const n = e.route.matched.find((o) => {
        var r;
        return (
          ((r = o.components) == null ? void 0 : r.default) === e.Component.type
        );
      }),
      s = t ?? (n == null ? void 0 : n.meta.key) ?? (n && uw(e.route, n));
    return typeof s == 'function' ? s(e.route) : s;
  },
  fw = (e, t) => ({ default: () => (e ? Qe(ep, e === !0 ? {} : e, t) : t) });
function _l(e) {
  return Array.isArray(e) ? e : [e];
}
const dw = 'modulepreload',
  hw = function (e, t) {
    return e[0] === '.' ? new URL(e, t).href : e;
  },
  Qa = {},
  pw = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      const r = document.getElementsByTagName('link'),
        i = document.querySelector('meta[property=csp-nonce]'),
        l =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'));
      o = Promise.all(
        n.map((a) => {
          if (((a = hw(a, s)), a in Qa)) return;
          Qa[a] = !0;
          const c = a.endsWith('.css'),
            u = c ? '[rel="stylesheet"]' : '';
          if (!!s)
            for (let h = r.length - 1; h >= 0; h--) {
              const y = r[h];
              if (y.href === a && (!c || y.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${a}"]${u}`)) return;
          const d = document.createElement('link');
          if (
            ((d.rel = c ? 'stylesheet' : dw),
            c || ((d.as = 'script'), (d.crossOrigin = '')),
            (d.href = a),
            l && d.setAttribute('nonce', l),
            document.head.appendChild(d),
            c)
          )
            return new Promise((h, y) => {
              d.addEventListener('load', h),
                d.addEventListener('error', () =>
                  y(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    return o
      .then(() => t())
      .catch((r) => {
        const i = new Event('vite:preloadError', { cancelable: !0 });
        if (((i.payload = r), window.dispatchEvent(i), !i.defaultPrevented))
          throw r;
      });
  },
  Vn = (...e) =>
    pw(...e).catch((t) => {
      const n = new Event('nuxt.preloadError');
      throw ((n.payload = t), window.dispatchEvent(n), t);
    }),
  Za = [
    {
      name: 'configs',
      path: '/configs',
      component: () =>
        Vn(
          () => import('./BPlGSTOg.js'),
          __vite__mapDeps([0, 1, 2, 3]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: 'files',
      path: '/files',
      component: () =>
        Vn(
          () => import('./CYiAlqwV.js'),
          __vite__mapDeps([4, 2, 3]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: 'index',
      path: '/',
      component: () =>
        Vn(() => import('./B703NL64.js'), [], import.meta.url).then(
          (e) => e.default || e
        ),
    },
    {
      name: 'rules',
      path: '/rules',
      component: () =>
        Vn(
          () => import('./B6ftEzKJ.js'),
          __vite__mapDeps([5, 1, 2]),
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  gw = (e, t, n) => (
    (t = t === !0 ? {} : t),
    {
      default: () => {
        var s;
        return t ? Qe(e, t, n) : (s = n.default) == null ? void 0 : s.call(n);
      },
    }
  );
function ec(e) {
  const t =
    (e == null ? void 0 : e.meta.key) ??
    e.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, (n) => {
        var s;
        return (
          ((s = e.params[n.slice(1)]) == null ? void 0 : s.toString()) || ''
        );
      });
  return typeof t == 'function' ? t(e) : t;
}
function mw(e, t) {
  return e === t || t === dt
    ? !1
    : ec(e) !== ec(t)
      ? !0
      : !e.matched.every((s, o) => {
          var r, i;
          return (
            s.components &&
            s.components.default ===
              ((i = (r = t.matched[o]) == null ? void 0 : r.components) == null
                ? void 0
                : i.default)
          );
        });
}
const yw = {
  scrollBehavior(e, t, n) {
    var c;
    const s = be(),
      o =
        ((c = Fe().options) == null ? void 0 : c.scrollBehaviorType) ?? 'auto';
    let r = n || void 0;
    const i =
      typeof e.meta.scrollToTop == 'function'
        ? e.meta.scrollToTop(e, t)
        : e.meta.scrollToTop;
    if (
      (!r && t && e && i !== !1 && mw(e, t) && (r = { left: 0, top: 0 }),
      e.path === t.path)
    )
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : e.hash
          ? { el: e.hash, top: tc(e.hash), behavior: o }
          : !1;
    const l = (u) => !!(u.meta.pageTransition ?? Ei),
      a = l(t) && l(e) ? 'page:transition:finish' : 'page:finish';
    return new Promise((u) => {
      s.hooks.hookOnce(a, async () => {
        await new Promise((f) => setTimeout(f, 0)),
          e.hash && (r = { el: e.hash, top: tc(e.hash), behavior: o }),
          u(r);
      });
    });
  },
};
function tc(e) {
  try {
    const t = document.querySelector(e);
    if (t)
      return (
        Number.parseFloat(getComputedStyle(t).scrollMarginTop) +
        Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop
        )
      );
  } catch {}
  return 0;
}
const vw = { hashMode: !1, scrollBehaviorType: 'auto' },
  Ke = { ...vw, ...yw },
  ww = async (e) => {
    var a;
    let t, n;
    if (!((a = e.meta) != null && a.validate)) return;
    const s = be(),
      o = Fe();
    if (
      (([t, n] = Ws(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      n(),
      t) === !0
    )
      return;
    const i = Sr({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: { path: e.fullPath },
      }),
      l = o.beforeResolve((c) => {
        if ((l(), c === e)) {
          const u = o.afterEach(async () => {
            u(),
              await s.runWithContext(() => Un(i)),
              window.history.pushState({}, '', e.fullPath);
          });
          return !1;
        }
      });
  },
  _w = async (e) => {
    let t, n;
    const s = (([t, n] = Ws(() => yl(e.path))), (t = await t), n(), t);
    if (s.redirect)
      return gn(s.redirect, { acceptRelative: !0 })
        ? ((window.location.href = s.redirect), !1)
        : s.redirect;
  },
  bw = [ww, _w],
  ks = {};
function xw(e, t, n) {
  const { pathname: s, search: o, hash: r } = t,
    i = e.indexOf('#');
  if (i > -1) {
    const c = r.includes(e.slice(i)) ? e.slice(i).length : 1;
    let u = r.slice(c);
    return u[0] !== '/' && (u = '/' + u), _a(u, '');
  }
  const l = _a(s, e),
    a = !n || lm(l, n, { trailingSlash: !0 }) ? l : n;
  return a + (a.includes('?') ? '' : o) + r;
}
const Ew = wt({
    name: 'nuxt:router',
    enforce: 'pre',
    async setup(e) {
      var b, x;
      let t,
        n,
        s = ps().app.baseURL;
      Ke.hashMode && !s.includes('#') && (s += '#');
      const o =
          ((b = Ke.history) == null ? void 0 : b.call(Ke, s)) ??
          (Ke.hashMode ? Iv(s) : Vf(s)),
        r = ((x = Ke.routes) == null ? void 0 : x.call(Ke, Za)) ?? Za;
      let i;
      const l = aw({
        ...Ke,
        scrollBehavior: (v, p, _) => {
          if (p === dt) {
            i = _;
            return;
          }
          if (Ke.scrollBehavior) {
            if (
              ((l.options.scrollBehavior = Ke.scrollBehavior),
              'scrollRestoration' in window.history)
            ) {
              const S = l.beforeEach(() => {
                S(), (window.history.scrollRestoration = 'manual');
              });
            }
            return Ke.scrollBehavior(v, dt, i || _);
          }
        },
        history: o,
        routes: r,
      });
      'scrollRestoration' in window.history &&
        (window.history.scrollRestoration = 'auto'),
        e.vueApp.use(l);
      const a = ss(l.currentRoute.value);
      l.afterEach((v, p) => {
        a.value = p;
      }),
        Object.defineProperty(
          e.vueApp.config.globalProperties,
          'previousRoute',
          { get: () => a.value }
        );
      const c = xw(s, window.location, e.payload.path),
        u = ss(l.currentRoute.value),
        f = () => {
          u.value = l.currentRoute.value;
        };
      e.hook('page:finish', f),
        l.afterEach((v, p) => {
          var _, S, E, R;
          ((S = (_ = v.matched[0]) == null ? void 0 : _.components) == null
            ? void 0
            : S.default) ===
            ((R = (E = p.matched[0]) == null ? void 0 : E.components) == null
              ? void 0
              : R.default) && f();
        });
      const d = {};
      for (const v in u.value)
        Object.defineProperty(d, v, { get: () => u.value[v] });
      (e._route = Lt(d)),
        (e._middleware = e._middleware || { global: [], named: {} });
      const h = Er();
      l.afterEach(async (v, p, _) => {
        delete e._processingMiddleware,
          !e.isHydrating && h.value && (await e.runWithContext(ly)),
          _ && (await e.callHook('page:loading:end')),
          v.matched.length === 0 &&
            (await e.runWithContext(() =>
              Un(
                Ci({
                  statusCode: 404,
                  fatal: !1,
                  statusMessage: `Page not found: ${v.fullPath}`,
                  data: { path: v.fullPath },
                })
              )
            ));
      });
      try {
        ([t, n] = Ws(() => l.isReady())), await t, n();
      } catch (v) {
        ([t, n] = Ws(() => e.runWithContext(() => Un(v)))), await t, n();
      }
      const y =
        c !== l.currentRoute.value.fullPath
          ? l.resolve(c)
          : l.currentRoute.value;
      f();
      const g = e.payload.state._layout;
      return (
        l.beforeEach(async (v, p) => {
          var _;
          await e.callHook('page:loading:start'),
            (v.meta = Ft(v.meta)),
            e.isHydrating && g && !un(v.meta.layout) && (v.meta.layout = g),
            (e._processingMiddleware = !0);
          {
            const S = new Set([...bw, ...e._middleware.global]);
            for (const E of v.matched) {
              const R = E.meta.middleware;
              if (R) for (const L of _l(R)) S.add(L);
            }
            {
              const E = await e.runWithContext(() => yl(v.path));
              if (E.appMiddleware)
                for (const R in E.appMiddleware)
                  E.appMiddleware[R] ? S.add(R) : S.delete(R);
            }
            for (const E of S) {
              const R =
                typeof E == 'string'
                  ? e._middleware.named[E] ||
                    (await ((_ = ks[E]) == null
                      ? void 0
                      : _.call(ks).then((P) => P.default || P)))
                  : E;
              if (!R) throw new Error(`Unknown route middleware: '${E}'.`);
              const L = await e.runWithContext(() => R(v, p));
              if (
                !e.payload.serverRendered &&
                e.isHydrating &&
                (L === !1 || L instanceof Error)
              ) {
                const P =
                  L ||
                  Ci({
                    statusCode: 404,
                    statusMessage: `Page Not Found: ${c}`,
                  });
                return await e.runWithContext(() => Un(P)), !1;
              }
              if (L !== !0 && (L || L === !1)) return L;
            }
          }
        }),
        l.onError(async () => {
          delete e._processingMiddleware, await e.callHook('page:loading:end');
        }),
        e.hooks.hookOnce('app:created', async () => {
          try {
            'name' in y && (y.name = void 0),
              await l.replace({ ...y, force: !0 }),
              (l.options.scrollBehavior = Ke.scrollBehavior);
          } catch (v) {
            await e.runWithContext(() => Un(v));
          }
        }),
        { provide: { router: l } }
      );
    },
  }),
  Ni =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  Sw =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  $r = (e) => {
    const t = be();
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          Ni(() => e());
        })
      : Ni(() => e());
  },
  Tw = wt({
    name: 'nuxt:payload',
    setup(e) {
      Fe().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const s = await La(t.path);
        s && Object.assign(e.static.data, s.data);
      }),
        $r(() => {
          var t;
          e.hooks.hook('link:prefetch', async (n) => {
            const { hostname: s } = new URL(n, window.location.href);
            s === window.location.hostname && (await La(n));
          }),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !==
              'slow-2g' && setTimeout(Tr, 1e3);
        });
    },
  }),
  Cw = wt(() => {
    const e = Fe();
    $r(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100),
            requestAnimationFrame(() => {
              setTimeout(t, 0);
            });
        });
      });
    });
  }),
  $w = wt((e) => {
    let t;
    async function n() {
      const s = await Tr();
      t && clearTimeout(t), (t = setTimeout(n, Ta));
      try {
        const o = await $fetch(pl('builds/latest.json') + `?${Date.now()}`);
        o.id !== s.id && e.hooks.callHook('app:manifest:update', o);
      } catch {}
    }
    $r(() => {
      t = setTimeout(n, Ta);
    });
  });
function Rw(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = Go(sessionStorage.getItem('nuxt:reload') || '{}');
  } catch {}
  if (
    e.force ||
    (n == null ? void 0 : n.path) !== t ||
    (n == null ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        'nuxt:reload',
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem(
          'nuxt:reload:state',
          JSON.stringify({ state: be().payload.state })
        );
      } catch {}
    window.location.pathname !== t
      ? (window.location.href = t)
      : window.location.reload();
  }
}
const Pw = wt({
    name: 'nuxt:chunk-reload',
    setup(e) {
      const t = Fe(),
        n = ps(),
        s = new Set();
      t.beforeEach(() => {
        s.clear();
      }),
        e.hook('app:chunkError', ({ error: r }) => {
          s.add(r);
        });
      function o(r) {
        const l =
          'href' in r && r.href[0] === '#'
            ? n.app.baseURL + r.href
            : br(n.app.baseURL, r.fullPath);
        Rw({ path: l, persistState: !0 });
      }
      e.hook('app:manifest:update', () => {
        t.beforeResolve(o);
      }),
        t.onError((r, i) => {
          s.has(r) && o(i);
        });
    },
  }),
  Aw = wt({ name: 'nuxt:global-components' }),
  wo = {},
  kw = wt({
    name: 'nuxt:prefetch',
    setup(e) {
      const t = Fe();
      e.hooks.hook('app:mounted', () => {
        t.beforeEach(async (n) => {
          var o;
          const s =
            (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
          s && typeof wo[s] == 'function' && (await wo[s]());
        });
      }),
        e.hooks.hook('link:prefetch', (n) => {
          if (gn(n)) return;
          const s = t.resolve(n);
          if (!s) return;
          const o = s.meta.layout;
          let r = _l(s.meta.middleware);
          r = r.filter((i) => typeof i == 'string');
          for (const i of r) typeof ks[i] == 'function' && ks[i]();
          o && typeof wo[o] == 'function' && wo[o]();
        });
    },
  }),
  Ow = wt(() => {}),
  Mw = ['top', 'right', 'bottom', 'left'],
  nc = ['start', 'end'],
  sc = Mw.reduce((e, t) => e.concat(t, t + '-' + nc[0], t + '-' + nc[1]), []),
  zs = Math.min,
  bn = Math.max,
  Lw = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Nw = { start: 'end', end: 'start' };
function Hi(e, t, n) {
  return bn(e, zs(t, n));
}
function Hn(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function At(e) {
  return e.split('-')[0];
}
function mt(e) {
  return e.split('-')[1];
}
function Yf(e) {
  return e === 'x' ? 'y' : 'x';
}
function bl(e) {
  return e === 'y' ? 'height' : 'width';
}
function so(e) {
  return ['top', 'bottom'].includes(At(e)) ? 'y' : 'x';
}
function xl(e) {
  return Yf(so(e));
}
function Qf(e, t, n) {
  n === void 0 && (n = !1);
  const s = mt(e),
    o = xl(e),
    r = bl(o);
  let i =
    o === 'x'
      ? s === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : s === 'start'
        ? 'bottom'
        : 'top';
  return t.reference[r] > t.floating[r] && (i = nr(i)), [i, nr(i)];
}
function Hw(e) {
  const t = nr(e);
  return [tr(e), t, tr(t)];
}
function tr(e) {
  return e.replace(/start|end/g, (t) => Nw[t]);
}
function Iw(e, t, n) {
  const s = ['left', 'right'],
    o = ['right', 'left'],
    r = ['top', 'bottom'],
    i = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : s) : t ? s : o;
    case 'left':
    case 'right':
      return t ? r : i;
    default:
      return [];
  }
}
function jw(e, t, n, s) {
  const o = mt(e);
  let r = Iw(At(e), n === 'start', s);
  return (
    o && ((r = r.map((i) => i + '-' + o)), t && (r = r.concat(r.map(tr)))), r
  );
}
function nr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lw[t]);
}
function Fw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Zf(e) {
  return typeof e != 'number'
    ? Fw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Os(e) {
  const { x: t, y: n, width: s, height: o } = e;
  return {
    width: s,
    height: o,
    top: n,
    left: t,
    right: t + s,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function oc(e, t, n) {
  let { reference: s, floating: o } = e;
  const r = so(t),
    i = xl(t),
    l = bl(i),
    a = At(t),
    c = r === 'y',
    u = s.x + s.width / 2 - o.width / 2,
    f = s.y + s.height / 2 - o.height / 2,
    d = s[l] / 2 - o[l] / 2;
  let h;
  switch (a) {
    case 'top':
      h = { x: u, y: s.y - o.height };
      break;
    case 'bottom':
      h = { x: u, y: s.y + s.height };
      break;
    case 'right':
      h = { x: s.x + s.width, y: f };
      break;
    case 'left':
      h = { x: s.x - o.width, y: f };
      break;
    default:
      h = { x: s.x, y: s.y };
  }
  switch (mt(t)) {
    case 'start':
      h[i] -= d * (n && c ? -1 : 1);
      break;
    case 'end':
      h[i] += d * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Dw = async (e, t, n) => {
  const {
      placement: s = 'bottom',
      strategy: o = 'absolute',
      middleware: r = [],
      platform: i,
    } = n,
    l = r.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: f } = oc(c, s, a),
    d = s,
    h = {},
    y = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: b, fn: x } = l[g],
      {
        x: v,
        y: p,
        data: _,
        reset: S,
      } = await x({
        x: u,
        y: f,
        initialPlacement: s,
        placement: d,
        strategy: o,
        middlewareData: h,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (u = v ?? u),
      (f = p ?? f),
      (h = { ...h, [b]: { ...h[b], ..._ } }),
      S &&
        y <= 50 &&
        (y++,
        typeof S == 'object' &&
          (S.placement && (d = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: u, y: f } = oc(c, d, a))),
        (g = -1));
  }
  return { x: u, y: f, placement: d, strategy: o, middlewareData: h };
};
async function Rr(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: o, platform: r, rects: i, elements: l, strategy: a } = e,
    {
      boundary: c = 'clippingAncestors',
      rootBoundary: u = 'viewport',
      elementContext: f = 'floating',
      altBoundary: d = !1,
      padding: h = 0,
    } = Hn(t, e),
    y = Zf(h),
    b = l[d ? (f === 'floating' ? 'reference' : 'floating') : f],
    x = Os(
      await r.getClippingRect({
        element:
          (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (r.getDocumentElement == null
                ? void 0
                : r.getDocumentElement(l.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: a,
      })
    ),
    v =
      f === 'floating'
        ? { x: s, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    p = await (r.getOffsetParent == null
      ? void 0
      : r.getOffsetParent(l.floating)),
    _ = (await (r.isElement == null ? void 0 : r.isElement(p)))
      ? (await (r.getScale == null ? void 0 : r.getScale(p))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Os(
      r.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: v,
            offsetParent: p,
            strategy: a,
          })
        : v
    );
  return {
    top: (x.top - S.top + y.top) / _.y,
    bottom: (S.bottom - x.bottom + y.bottom) / _.y,
    left: (x.left - S.left + y.left) / _.x,
    right: (S.right - x.right + y.right) / _.x,
  };
}
const Bw = (e) => ({
  name: 'arrow',
  options: e,
  async fn(t) {
    const {
        x: n,
        y: s,
        placement: o,
        rects: r,
        platform: i,
        elements: l,
        middlewareData: a,
      } = t,
      { element: c, padding: u = 0 } = Hn(e, t) || {};
    if (c == null) return {};
    const f = Zf(u),
      d = { x: n, y: s },
      h = xl(o),
      y = bl(h),
      g = await i.getDimensions(c),
      b = h === 'y',
      x = b ? 'top' : 'left',
      v = b ? 'bottom' : 'right',
      p = b ? 'clientHeight' : 'clientWidth',
      _ = r.reference[y] + r.reference[h] - d[h] - r.floating[y],
      S = d[h] - r.reference[h],
      E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let R = E ? E[p] : 0;
    (!R || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
      (R = l.floating[p] || r.floating[y]);
    const L = _ / 2 - S / 2,
      P = R / 2 - g[y] / 2 - 1,
      C = zs(f[x], P),
      H = zs(f[v], P),
      k = C,
      z = R - g[y] - H,
      Q = R / 2 - g[y] / 2 + L,
      ee = Hi(k, Q, z),
      B =
        !a.arrow &&
        mt(o) != null &&
        Q !== ee &&
        r.reference[y] / 2 - (Q < k ? C : H) - g[y] / 2 < 0,
      Y = B ? (Q < k ? Q - k : Q - z) : 0;
    return {
      [h]: d[h] + Y,
      data: {
        [h]: ee,
        centerOffset: Q - ee - Y,
        ...(B && { alignmentOffset: Y }),
      },
      reset: B,
    };
  },
});
function Ww(e, t, n) {
  return (
    e
      ? [...n.filter((o) => mt(o) === e), ...n.filter((o) => mt(o) !== e)]
      : n.filter((o) => At(o) === o)
  ).filter((o) => (e ? mt(o) === e || (t ? tr(o) !== o : !1) : !0));
}
const Uw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'autoPlacement',
        options: e,
        async fn(t) {
          var n, s, o;
          const {
              rects: r,
              middlewareData: i,
              placement: l,
              platform: a,
              elements: c,
            } = t,
            {
              crossAxis: u = !1,
              alignment: f,
              allowedPlacements: d = sc,
              autoAlignment: h = !0,
              ...y
            } = Hn(e, t),
            g = f !== void 0 || d === sc ? Ww(f || null, h, d) : d,
            b = await Rr(t, y),
            x = ((n = i.autoPlacement) == null ? void 0 : n.index) || 0,
            v = g[x];
          if (v == null) return {};
          const p = Qf(
            v,
            r,
            await (a.isRTL == null ? void 0 : a.isRTL(c.floating))
          );
          if (l !== v) return { reset: { placement: g[0] } };
          const _ = [b[At(v)], b[p[0]], b[p[1]]],
            S = [
              ...(((s = i.autoPlacement) == null ? void 0 : s.overflows) || []),
              { placement: v, overflows: _ },
            ],
            E = g[x + 1];
          if (E)
            return {
              data: { index: x + 1, overflows: S },
              reset: { placement: E },
            };
          const R = S.map((C) => {
              const H = mt(C.placement);
              return [
                C.placement,
                H && u
                  ? C.overflows.slice(0, 2).reduce((k, z) => k + z, 0)
                  : C.overflows[0],
                C.overflows,
              ];
            }).sort((C, H) => C[1] - H[1]),
            P =
              ((o = R.filter((C) =>
                C[2].slice(0, mt(C[0]) ? 2 : 3).every((H) => H <= 0)
              )[0]) == null
                ? void 0
                : o[0]) || R[0][0];
          return P !== l
            ? { data: { index: x + 1, overflows: S }, reset: { placement: P } }
            : {};
        },
      }
    );
  },
  Vw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, s;
          const {
              placement: o,
              middlewareData: r,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: h = 'bestFit',
              fallbackAxisSideDirection: y = 'none',
              flipAlignment: g = !0,
              ...b
            } = Hn(e, t);
          if ((n = r.arrow) != null && n.alignmentOffset) return {};
          const x = At(o),
            v = At(l) === l,
            p = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
            _ = d || (v || !g ? [nr(l)] : Hw(l));
          !d && y !== 'none' && _.push(...jw(l, g, y, p));
          const S = [l, ..._],
            E = await Rr(t, b),
            R = [];
          let L = ((s = r.flip) == null ? void 0 : s.overflows) || [];
          if ((u && R.push(E[x]), f)) {
            const k = Qf(o, i, p);
            R.push(E[k[0]], E[k[1]]);
          }
          if (
            ((L = [...L, { placement: o, overflows: R }]),
            !R.every((k) => k <= 0))
          ) {
            var P, C;
            const k = (((P = r.flip) == null ? void 0 : P.index) || 0) + 1,
              z = S[k];
            if (z)
              return {
                data: { index: k, overflows: L },
                reset: { placement: z },
              };
            let Q =
              (C = L.filter((ee) => ee.overflows[0] <= 0).sort(
                (ee, B) => ee.overflows[1] - B.overflows[1]
              )[0]) == null
                ? void 0
                : C.placement;
            if (!Q)
              switch (h) {
                case 'bestFit': {
                  var H;
                  const ee =
                    (H = L.map((B) => [
                      B.placement,
                      B.overflows
                        .filter((Y) => Y > 0)
                        .reduce((Y, q) => Y + q, 0),
                    ]).sort((B, Y) => B[1] - Y[1])[0]) == null
                      ? void 0
                      : H[0];
                  ee && (Q = ee);
                  break;
                }
                case 'initialPlacement':
                  Q = l;
                  break;
              }
            if (o !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
async function zw(e, t) {
  const { placement: n, platform: s, elements: o } = e,
    r = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)),
    i = At(n),
    l = mt(n),
    a = so(n) === 'y',
    c = ['left', 'top'].includes(i) ? -1 : 1,
    u = r && a ? -1 : 1,
    f = Hn(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: y,
  } = typeof f == 'number'
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    l && typeof y == 'number' && (h = l === 'end' ? y * -1 : y),
    a ? { x: h * u, y: d * c } : { x: d * c, y: h * u }
  );
}
const qw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, s;
          const { x: o, y: r, placement: i, middlewareData: l } = t,
            a = await zw(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (s = l.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: o + a.x, y: r + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  Kw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: s, placement: o } = t,
            {
              mainAxis: r = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (b) => {
                  let { x, y: v } = b;
                  return { x, y: v };
                },
              },
              ...a
            } = Hn(e, t),
            c = { x: n, y: s },
            u = await Rr(t, a),
            f = so(At(o)),
            d = Yf(f);
          let h = c[d],
            y = c[f];
          if (r) {
            const b = d === 'y' ? 'top' : 'left',
              x = d === 'y' ? 'bottom' : 'right',
              v = h + u[b],
              p = h - u[x];
            h = Hi(v, h, p);
          }
          if (i) {
            const b = f === 'y' ? 'top' : 'left',
              x = f === 'y' ? 'bottom' : 'right',
              v = y + u[b],
              p = y - u[x];
            y = Hi(v, y, p);
          }
          const g = l.fn({ ...t, [d]: h, [f]: y });
          return { ...g, data: { x: g.x - n, y: g.y - s } };
        },
      }
    );
  },
  Gw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          const { placement: n, rects: s, platform: o, elements: r } = t,
            { apply: i = () => {}, ...l } = Hn(e, t),
            a = await Rr(t, l),
            c = At(n),
            u = mt(n),
            f = so(n) === 'y',
            { width: d, height: h } = s.floating;
          let y, g;
          c === 'top' || c === 'bottom'
            ? ((y = c),
              (g =
                u ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(r.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((g = c), (y = u === 'end' ? 'top' : 'bottom'));
          const b = h - a[y],
            x = d - a[g],
            v = !t.middlewareData.shift;
          let p = b,
            _ = x;
          if (f) {
            const E = d - a.left - a.right;
            _ = u || v ? zs(x, E) : E;
          } else {
            const E = h - a.top - a.bottom;
            p = u || v ? zs(b, E) : E;
          }
          if (v && !u) {
            const E = bn(a.left, 0),
              R = bn(a.right, 0),
              L = bn(a.top, 0),
              P = bn(a.bottom, 0);
            f
              ? (_ = d - 2 * (E !== 0 || R !== 0 ? E + R : bn(a.left, a.right)))
              : (p =
                  h - 2 * (L !== 0 || P !== 0 ? L + P : bn(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: _, availableHeight: p });
          const S = await o.getDimensions(r.floating);
          return d !== S.width || h !== S.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function lt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ct(e) {
  return lt(e).getComputedStyle(e);
}
const rc = Math.min,
  Ms = Math.max,
  sr = Math.round;
function ed(e) {
  const t = Ct(e);
  let n = parseFloat(t.width),
    s = parseFloat(t.height);
  const o = e.offsetWidth,
    r = e.offsetHeight,
    i = sr(n) !== o || sr(s) !== r;
  return i && ((n = o), (s = r)), { width: n, height: s, fallback: i };
}
function fn(e) {
  return nd(e) ? (e.nodeName || '').toLowerCase() : '';
}
let _o;
function td() {
  if (_o) return _o;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((_o = e.brands.map((t) => t.brand + '/' + t.version).join(' ')), _o)
    : navigator.userAgent;
}
function $t(e) {
  return e instanceof lt(e).HTMLElement;
}
function ln(e) {
  return e instanceof lt(e).Element;
}
function nd(e) {
  return e instanceof lt(e).Node;
}
function ic(e) {
  return typeof ShadowRoot > 'u'
    ? !1
    : e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pr(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: o } = Ct(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + s + n) &&
    !['inline', 'contents'].includes(o)
  );
}
function Jw(e) {
  return ['table', 'td', 'th'].includes(fn(e));
}
function Ii(e) {
  const t = /firefox/i.test(td()),
    n = Ct(e),
    s = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (!!s && s !== 'none') ||
    (t && n.willChange === 'filter') ||
    (t && !!n.filter && n.filter !== 'none') ||
    ['transform', 'perspective'].some((o) => n.willChange.includes(o)) ||
    ['paint', 'layout', 'strict', 'content'].some((o) => {
      const r = n.contain;
      return r != null && r.includes(o);
    })
  );
}
function sd() {
  return !/^((?!chrome|android).)*safari/i.test(td());
}
function El(e) {
  return ['html', 'body', '#document'].includes(fn(e));
}
function od(e) {
  return ln(e) ? e : e.contextElement;
}
const rd = { x: 1, y: 1 };
function ts(e) {
  const t = od(e);
  if (!$t(t)) return rd;
  const n = t.getBoundingClientRect(),
    { width: s, height: o, fallback: r } = ed(t);
  let i = (r ? sr(n.width) : n.width) / s,
    l = (r ? sr(n.height) : n.height) / o;
  return (
    (i && Number.isFinite(i)) || (i = 1),
    (l && Number.isFinite(l)) || (l = 1),
    { x: i, y: l }
  );
}
function qs(e, t, n, s) {
  var o, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    l = od(e);
  let a = rd;
  t && (s ? ln(s) && (a = ts(s)) : (a = ts(e)));
  const c = l ? lt(l) : window,
    u = !sd() && n;
  let f =
      (i.left +
        ((u && ((o = c.visualViewport) == null ? void 0 : o.offsetLeft)) ||
          0)) /
      a.x,
    d =
      (i.top +
        ((u && ((r = c.visualViewport) == null ? void 0 : r.offsetTop)) || 0)) /
      a.y,
    h = i.width / a.x,
    y = i.height / a.y;
  if (l) {
    const g = lt(l),
      b = s && ln(s) ? lt(s) : s;
    let x = g.frameElement;
    for (; x && s && b !== g; ) {
      const v = ts(x),
        p = x.getBoundingClientRect(),
        _ = getComputedStyle(x);
      (p.x += (x.clientLeft + parseFloat(_.paddingLeft)) * v.x),
        (p.y += (x.clientTop + parseFloat(_.paddingTop)) * v.y),
        (f *= v.x),
        (d *= v.y),
        (h *= v.x),
        (y *= v.y),
        (f += p.x),
        (d += p.y),
        (x = lt(x).frameElement);
    }
  }
  return {
    width: h,
    height: y,
    top: d,
    right: f + h,
    bottom: d + y,
    left: f,
    x: f,
    y: d,
  };
}
function an(e) {
  return ((nd(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Ar(e) {
  return ln(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function id(e) {
  return qs(an(e)).left + Ar(e).scrollLeft;
}
function Ks(e) {
  if (fn(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (ic(e) && e.host) || an(e);
  return ic(t) ? t.host : t;
}
function ld(e) {
  const t = Ks(e);
  return El(t) ? t.ownerDocument.body : $t(t) && Pr(t) ? t : ld(t);
}
function or(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = ld(e),
    o = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    r = lt(s);
  return o
    ? t.concat(r, r.visualViewport || [], Pr(s) ? s : [])
    : t.concat(s, or(s));
}
function lc(e, t, n) {
  return t === 'viewport'
    ? Os(
        (function (s, o) {
          const r = lt(s),
            i = an(s),
            l = r.visualViewport;
          let a = i.clientWidth,
            c = i.clientHeight,
            u = 0,
            f = 0;
          if (l) {
            (a = l.width), (c = l.height);
            const d = sd();
            (d || (!d && o === 'fixed')) &&
              ((u = l.offsetLeft), (f = l.offsetTop));
          }
          return { width: a, height: c, x: u, y: f };
        })(e, n)
      )
    : ln(t)
      ? Os(
          (function (s, o) {
            const r = qs(s, !0, o === 'fixed'),
              i = r.top + s.clientTop,
              l = r.left + s.clientLeft,
              a = $t(s) ? ts(s) : { x: 1, y: 1 };
            return {
              width: s.clientWidth * a.x,
              height: s.clientHeight * a.y,
              x: l * a.x,
              y: i * a.y,
            };
          })(t, n)
        )
      : Os(
          (function (s) {
            const o = an(s),
              r = Ar(s),
              i = s.ownerDocument.body,
              l = Ms(
                o.scrollWidth,
                o.clientWidth,
                i.scrollWidth,
                i.clientWidth
              ),
              a = Ms(
                o.scrollHeight,
                o.clientHeight,
                i.scrollHeight,
                i.clientHeight
              );
            let c = -r.scrollLeft + id(s);
            const u = -r.scrollTop;
            return (
              Ct(i).direction === 'rtl' &&
                (c += Ms(o.clientWidth, i.clientWidth) - l),
              { width: l, height: a, x: c, y: u }
            );
          })(an(e))
        );
}
function ac(e) {
  return $t(e) && Ct(e).position !== 'fixed' ? e.offsetParent : null;
}
function cc(e) {
  const t = lt(e);
  let n = ac(e);
  for (; n && Jw(n) && Ct(n).position === 'static'; ) n = ac(n);
  return n &&
    (fn(n) === 'html' ||
      (fn(n) === 'body' && Ct(n).position === 'static' && !Ii(n)))
    ? t
    : n ||
        (function (s) {
          let o = Ks(s);
          for (; $t(o) && !El(o); ) {
            if (Ii(o)) return o;
            o = Ks(o);
          }
          return null;
        })(e) ||
        t;
}
function Xw(e, t, n) {
  const s = $t(t),
    o = an(t),
    r = qs(e, !0, n === 'fixed', t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || (!s && n !== 'fixed'))
    if (((fn(t) !== 'body' || Pr(o)) && (i = Ar(t)), $t(t))) {
      const a = qs(t, !0);
      (l.x = a.x + t.clientLeft), (l.y = a.y + t.clientTop);
    } else o && (l.x = id(o));
  return {
    x: r.left + i.scrollLeft - l.x,
    y: r.top + i.scrollTop - l.y,
    width: r.width,
    height: r.height,
  };
}
const Yw = {
    getClippingRect: function (e) {
      let { element: t, boundary: n, rootBoundary: s, strategy: o } = e;
      const r =
          n === 'clippingAncestors'
            ? (function (c, u) {
                const f = u.get(c);
                if (f) return f;
                let d = or(c).filter((b) => ln(b) && fn(b) !== 'body'),
                  h = null;
                const y = Ct(c).position === 'fixed';
                let g = y ? Ks(c) : c;
                for (; ln(g) && !El(g); ) {
                  const b = Ct(g),
                    x = Ii(g);
                  (
                    y
                      ? x || h
                      : x ||
                        b.position !== 'static' ||
                        !h ||
                        !['absolute', 'fixed'].includes(h.position)
                  )
                    ? (h = b)
                    : (d = d.filter((v) => v !== g)),
                    (g = Ks(g));
                }
                return u.set(c, d), d;
              })(t, this._c)
            : [].concat(n),
        i = [...r, s],
        l = i[0],
        a = i.reduce(
          (c, u) => {
            const f = lc(t, u, o);
            return (
              (c.top = Ms(f.top, c.top)),
              (c.right = rc(f.right, c.right)),
              (c.bottom = rc(f.bottom, c.bottom)),
              (c.left = Ms(f.left, c.left)),
              c
            );
          },
          lc(t, l, o)
        );
      return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top,
      };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { rect: t, offsetParent: n, strategy: s } = e;
      const o = $t(n),
        r = an(n);
      if (n === r) return t;
      let i = { scrollLeft: 0, scrollTop: 0 },
        l = { x: 1, y: 1 };
      const a = { x: 0, y: 0 };
      if (
        (o || (!o && s !== 'fixed')) &&
        ((fn(n) !== 'body' || Pr(r)) && (i = Ar(n)), $t(n))
      ) {
        const c = qs(n);
        (l = ts(n)), (a.x = c.x + n.clientLeft), (a.y = c.y + n.clientTop);
      }
      return {
        width: t.width * l.x,
        height: t.height * l.y,
        x: t.x * l.x - i.scrollLeft * l.x + a.x,
        y: t.y * l.y - i.scrollTop * l.y + a.y,
      };
    },
    isElement: ln,
    getDimensions: function (e) {
      return $t(e) ? ed(e) : e.getBoundingClientRect();
    },
    getOffsetParent: cc,
    getDocumentElement: an,
    getScale: ts,
    async getElementRects(e) {
      let { reference: t, floating: n, strategy: s } = e;
      const o = this.getOffsetParent || cc,
        r = this.getDimensions;
      return {
        reference: Xw(t, await o(n), s),
        floating: { x: 0, y: 0, ...(await r(n)) },
      };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => Ct(e).direction === 'rtl',
  },
  Qw = (e, t, n) => {
    const s = new Map(),
      o = { platform: Yw, ...n },
      r = { ...o.platform, _c: s };
    return Dw(e, t, { ...o, platform: r });
  };
function ad(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      (typeof t[n] == 'object' && e[n] ? ad(e[n], t[n]) : (e[n] = t[n]));
}
const yt = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: 'body',
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 150,
  popperTriggers: [],
  strategy: 'absolute',
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  autoHideOnMousedown: !1,
  themes: {
    tooltip: {
      placement: 'top',
      triggers: ['hover', 'focus', 'touch'],
      hideTriggers: (e) => [...e, 'click'],
      delay: { show: 200, hide: 0 },
      handleResize: !1,
      html: !1,
      loadingContent: '...',
    },
    dropdown: {
      placement: 'bottom',
      triggers: ['click'],
      delay: 0,
      handleResize: !0,
      autoHide: !0,
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover'],
      delay: { show: 0, hide: 400 },
    },
  },
};
function Gs(e, t) {
  let n = yt.themes[e] || {},
    s;
  do
    (s = n[t]),
      typeof s > 'u'
        ? n.$extend
          ? (n = yt.themes[n.$extend] || {})
          : ((n = null), (s = yt[t]))
        : (n = null);
  while (n);
  return s;
}
function Zw(e) {
  const t = [e];
  let n = yt.themes[e] || {};
  do
    n.$extend && !n.$resetCss
      ? (t.push(n.$extend), (n = yt.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return t.map((s) => `v-popper--theme-${s}`);
}
function uc(e) {
  const t = [e];
  let n = yt.themes[e] || {};
  do
    n.$extend
      ? (t.push(n.$extend), (n = yt.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return t;
}
let as = !1;
if (typeof window < 'u') {
  as = !1;
  try {
    const e = Object.defineProperty({}, 'passive', {
      get() {
        as = !0;
      },
    });
    window.addEventListener('test', null, e);
  } catch {}
}
let cd = !1;
typeof window < 'u' &&
  typeof navigator < 'u' &&
  (cd = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const ud = ['auto', 'top', 'bottom', 'left', 'right'].reduce(
    (e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
    []
  ),
  fc = {
    hover: 'mouseenter',
    focus: 'focus',
    click: 'click',
    touch: 'touchstart',
    pointer: 'pointerdown',
  },
  dc = {
    hover: 'mouseleave',
    focus: 'blur',
    click: 'click',
    touch: 'touchend',
    pointer: 'pointerup',
  };
function hc(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Yr() {
  return new Promise((e) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    })
  );
}
const pt = [];
let wn = null;
const pc = {};
function gc(e) {
  let t = pc[e];
  return t || (t = pc[e] = []), t;
}
let ji = function () {};
typeof window < 'u' && (ji = window.Element);
function re(e) {
  return function (t) {
    return Gs(t.theme, e);
  };
}
const Qr = '__floating-vue__popper',
  fd = () =>
    tt({
      name: 'VPopper',
      provide() {
        return { [Qr]: { parentPopper: this } };
      },
      inject: { [Qr]: { default: null } },
      props: {
        theme: { type: String, required: !0 },
        targetNodes: { type: Function, required: !0 },
        referenceNode: { type: Function, default: null },
        popperNode: { type: Function, required: !0 },
        shown: { type: Boolean, default: !1 },
        showGroup: { type: String, default: null },
        ariaId: { default: null },
        disabled: { type: Boolean, default: re('disabled') },
        positioningDisabled: {
          type: Boolean,
          default: re('positioningDisabled'),
        },
        placement: {
          type: String,
          default: re('placement'),
          validator: (e) => ud.includes(e),
        },
        delay: { type: [String, Number, Object], default: re('delay') },
        distance: { type: [Number, String], default: re('distance') },
        skidding: { type: [Number, String], default: re('skidding') },
        triggers: { type: Array, default: re('triggers') },
        showTriggers: { type: [Array, Function], default: re('showTriggers') },
        hideTriggers: { type: [Array, Function], default: re('hideTriggers') },
        popperTriggers: { type: Array, default: re('popperTriggers') },
        popperShowTriggers: {
          type: [Array, Function],
          default: re('popperShowTriggers'),
        },
        popperHideTriggers: {
          type: [Array, Function],
          default: re('popperHideTriggers'),
        },
        container: {
          type: [String, Object, ji, Boolean],
          default: re('container'),
        },
        boundary: { type: [String, ji], default: re('boundary') },
        strategy: {
          type: String,
          validator: (e) => ['absolute', 'fixed'].includes(e),
          default: re('strategy'),
        },
        autoHide: { type: [Boolean, Function], default: re('autoHide') },
        handleResize: { type: Boolean, default: re('handleResize') },
        instantMove: { type: Boolean, default: re('instantMove') },
        eagerMount: { type: Boolean, default: re('eagerMount') },
        popperClass: {
          type: [String, Array, Object],
          default: re('popperClass'),
        },
        computeTransformOrigin: {
          type: Boolean,
          default: re('computeTransformOrigin'),
        },
        autoMinSize: { type: Boolean, default: re('autoMinSize') },
        autoSize: { type: [Boolean, String], default: re('autoSize') },
        autoMaxSize: { type: Boolean, default: re('autoMaxSize') },
        autoBoundaryMaxSize: {
          type: Boolean,
          default: re('autoBoundaryMaxSize'),
        },
        preventOverflow: { type: Boolean, default: re('preventOverflow') },
        overflowPadding: {
          type: [Number, String],
          default: re('overflowPadding'),
        },
        arrowPadding: { type: [Number, String], default: re('arrowPadding') },
        arrowOverflow: { type: Boolean, default: re('arrowOverflow') },
        flip: { type: Boolean, default: re('flip') },
        shift: { type: Boolean, default: re('shift') },
        shiftCrossAxis: { type: Boolean, default: re('shiftCrossAxis') },
        noAutoFocus: { type: Boolean, default: re('noAutoFocus') },
        disposeTimeout: { type: Number, default: re('disposeTimeout') },
      },
      emits: {
        show: () => !0,
        hide: () => !0,
        'update:shown': (e) => !0,
        'apply-show': () => !0,
        'apply-hide': () => !0,
        'close-group': () => !0,
        'close-directive': () => !0,
        'auto-hide': () => !0,
        resize: () => !0,
      },
      data() {
        return {
          isShown: !1,
          isMounted: !1,
          skipTransition: !1,
          classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
          result: {
            x: 0,
            y: 0,
            placement: '',
            strategy: this.strategy,
            arrow: { x: 0, y: 0, centerOffset: 0 },
            transformOrigin: null,
          },
          randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join('_')}`,
          shownChildren: new Set(),
          lastAutoHide: !0,
          pendingHide: !1,
          containsGlobalTarget: !1,
          isDisposed: !0,
          mouseDownContains: !1,
        };
      },
      computed: {
        popperId() {
          return this.ariaId != null ? this.ariaId : this.randomId;
        },
        shouldMountContent() {
          return this.eagerMount || this.isMounted;
        },
        slotData() {
          return {
            popperId: this.popperId,
            isShown: this.isShown,
            shouldMountContent: this.shouldMountContent,
            skipTransition: this.skipTransition,
            autoHide:
              typeof this.autoHide == 'function'
                ? this.lastAutoHide
                : this.autoHide,
            show: this.show,
            hide: this.hide,
            handleResize: this.handleResize,
            onResize: this.onResize,
            classes: { ...this.classes, popperClass: this.popperClass },
            result: this.positioningDisabled ? null : this.result,
            attrs: this.$attrs,
          };
        },
        parentPopper() {
          var e;
          return (e = this[Qr]) == null ? void 0 : e.parentPopper;
        },
        hasPopperShowTriggerHover() {
          var e, t;
          return (
            ((e = this.popperTriggers) == null
              ? void 0
              : e.includes('hover')) ||
            ((t = this.popperShowTriggers) == null
              ? void 0
              : t.includes('hover'))
          );
        },
      },
      watch: {
        shown: '$_autoShowHide',
        disabled(e) {
          e ? this.dispose() : this.init();
        },
        async container() {
          this.isShown &&
            (this.$_ensureTeleport(), await this.$_computePosition());
        },
        triggers: { handler: '$_refreshListeners', deep: !0 },
        positioningDisabled: '$_refreshListeners',
        ...[
          'placement',
          'distance',
          'skidding',
          'boundary',
          'strategy',
          'overflowPadding',
          'arrowPadding',
          'preventOverflow',
          'shift',
          'shiftCrossAxis',
          'flip',
        ].reduce((e, t) => ((e[t] = '$_computePosition'), e), {}),
      },
      created() {
        this.autoMinSize &&
          console.warn(
            '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'
          ),
          this.autoMaxSize &&
            console.warn(
              '[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.'
            );
      },
      mounted() {
        this.init(), this.$_detachPopperNode();
      },
      activated() {
        this.$_autoShowHide();
      },
      deactivated() {
        this.hide();
      },
      beforeUnmount() {
        this.dispose();
      },
      methods: {
        show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
          var s, o;
          ((s = this.parentPopper) != null &&
            s.lockedChild &&
            this.parentPopper.lockedChild !== this) ||
            ((this.pendingHide = !1),
            (n || !this.disabled) &&
              (((o = this.parentPopper) == null ? void 0 : o.lockedChild) ===
                this && (this.parentPopper.lockedChild = null),
              this.$_scheduleShow(e, t),
              this.$emit('show'),
              (this.$_showFrameLocked = !0),
              requestAnimationFrame(() => {
                this.$_showFrameLocked = !1;
              })),
            this.$emit('update:shown', !0));
        },
        hide({ event: e = null, skipDelay: t = !1 } = {}) {
          var n;
          if (!this.$_hideInProgress) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = !0;
              return;
            }
            if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
              this.parentPopper &&
                ((this.parentPopper.lockedChild = this),
                clearTimeout(this.parentPopper.lockedChildTimer),
                (this.parentPopper.lockedChildTimer = setTimeout(() => {
                  this.parentPopper.lockedChild === this &&
                    (this.parentPopper.lockedChild.hide({ skipDelay: t }),
                    (this.parentPopper.lockedChild = null));
                }, 1e3)));
              return;
            }
            ((n = this.parentPopper) == null ? void 0 : n.lockedChild) ===
              this && (this.parentPopper.lockedChild = null),
              (this.pendingHide = !1),
              this.$_scheduleHide(e, t),
              this.$emit('hide'),
              this.$emit('update:shown', !1);
          }
        },
        init() {
          var e;
          this.isDisposed &&
            ((this.isDisposed = !1),
            (this.isMounted = !1),
            (this.$_events = []),
            (this.$_preventShow = !1),
            (this.$_referenceNode =
              ((e = this.referenceNode) == null ? void 0 : e.call(this)) ??
              this.$el),
            (this.$_targetNodes = this.targetNodes().filter(
              (t) => t.nodeType === t.ELEMENT_NODE
            )),
            (this.$_popperNode = this.popperNode()),
            (this.$_innerNode =
              this.$_popperNode.querySelector('.v-popper__inner')),
            (this.$_arrowNode = this.$_popperNode.querySelector(
              '.v-popper__arrow-container'
            )),
            this.$_swapTargetAttrs('title', 'data-original-title'),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show());
        },
        dispose() {
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.$_removeEventListeners(),
            this.hide({ skipDelay: !0 }),
            this.$_detachPopperNode(),
            (this.isMounted = !1),
            (this.isShown = !1),
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs('data-original-title', 'title'));
        },
        async onResize() {
          this.isShown &&
            (await this.$_computePosition(), this.$emit('resize'));
        },
        async $_computePosition() {
          if (this.isDisposed || this.positioningDisabled) return;
          const e = { strategy: this.strategy, middleware: [] };
          (this.distance || this.skidding) &&
            e.middleware.push(
              qw({ mainAxis: this.distance, crossAxis: this.skidding })
            );
          const t = this.placement.startsWith('auto');
          if (
            (t
              ? e.middleware.push(
                  Uw({ alignment: this.placement.split('-')[1] ?? '' })
                )
              : (e.placement = this.placement),
            this.preventOverflow &&
              (this.shift &&
                e.middleware.push(
                  Kw({
                    padding: this.overflowPadding,
                    boundary: this.boundary,
                    crossAxis: this.shiftCrossAxis,
                  })
                ),
              !t &&
                this.flip &&
                e.middleware.push(
                  Vw({ padding: this.overflowPadding, boundary: this.boundary })
                )),
            e.middleware.push(
              Bw({ element: this.$_arrowNode, padding: this.arrowPadding })
            ),
            this.arrowOverflow &&
              e.middleware.push({
                name: 'arrowOverflow',
                fn: ({ placement: s, rects: o, middlewareData: r }) => {
                  let i;
                  const { centerOffset: l } = r.arrow;
                  return (
                    s.startsWith('top') || s.startsWith('bottom')
                      ? (i = Math.abs(l) > o.reference.width / 2)
                      : (i = Math.abs(l) > o.reference.height / 2),
                    { data: { overflow: i } }
                  );
                },
              }),
            this.autoMinSize || this.autoSize)
          ) {
            const s = this.autoSize
              ? this.autoSize
              : this.autoMinSize
                ? 'min'
                : null;
            e.middleware.push({
              name: 'autoSize',
              fn: ({ rects: o, placement: r, middlewareData: i }) => {
                var l;
                if ((l = i.autoSize) != null && l.skip) return {};
                let a, c;
                return (
                  r.startsWith('top') || r.startsWith('bottom')
                    ? (a = o.reference.width)
                    : (c = o.reference.height),
                  (this.$_innerNode.style[
                    s === 'min'
                      ? 'minWidth'
                      : s === 'max'
                        ? 'maxWidth'
                        : 'width'
                  ] = a != null ? `${a}px` : null),
                  (this.$_innerNode.style[
                    s === 'min'
                      ? 'minHeight'
                      : s === 'max'
                        ? 'maxHeight'
                        : 'height'
                  ] = c != null ? `${c}px` : null),
                  { data: { skip: !0 }, reset: { rects: !0 } }
                );
              },
            });
          }
          (this.autoMaxSize || this.autoBoundaryMaxSize) &&
            ((this.$_innerNode.style.maxWidth = null),
            (this.$_innerNode.style.maxHeight = null),
            e.middleware.push(
              Gw({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({ availableWidth: s, availableHeight: o }) => {
                  (this.$_innerNode.style.maxWidth =
                    s != null ? `${s}px` : null),
                    (this.$_innerNode.style.maxHeight =
                      o != null ? `${o}px` : null);
                },
              })
            ));
          const n = await Qw(this.$_referenceNode, this.$_popperNode, e);
          Object.assign(this.result, {
            x: n.x,
            y: n.y,
            placement: n.placement,
            strategy: n.strategy,
            arrow: {
              ...n.middlewareData.arrow,
              ...n.middlewareData.arrowOverflow,
            },
          });
        },
        $_scheduleShow(e, t = !1) {
          if (
            (this.$_updateParentShownChildren(!0),
            (this.$_hideInProgress = !1),
            clearTimeout(this.$_scheduleTimer),
            wn &&
              this.instantMove &&
              wn.instantMove &&
              wn !== this.parentPopper)
          ) {
            wn.$_applyHide(!0), this.$_applyShow(!0);
            return;
          }
          t
            ? this.$_applyShow()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyShow.bind(this),
                this.$_computeDelay('show')
              ));
        },
        $_scheduleHide(e, t = !1) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = !0;
            return;
          }
          this.$_updateParentShownChildren(!1),
            (this.$_hideInProgress = !0),
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (wn = this),
            t
              ? this.$_applyHide()
              : (this.$_scheduleTimer = setTimeout(
                  this.$_applyHide.bind(this),
                  this.$_computeDelay('hide')
                ));
        },
        $_computeDelay(e) {
          const t = this.delay;
          return parseInt((t && t[e]) || t || 0);
        },
        async $_applyShow(e = !1) {
          clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            (this.skipTransition = e),
            !this.isShown &&
              (this.$_ensureTeleport(),
              await Yr(),
              await this.$_computePosition(),
              await this.$_applyShowEffect(),
              this.positioningDisabled ||
                this.$_registerEventListeners(
                  [...or(this.$_referenceNode), ...or(this.$_popperNode)],
                  'scroll',
                  () => {
                    this.$_computePosition();
                  }
                ));
        },
        async $_applyShowEffect() {
          if (this.$_hideInProgress) return;
          if (this.computeTransformOrigin) {
            const t = this.$_referenceNode.getBoundingClientRect(),
              n = this.$_popperNode.querySelector('.v-popper__wrapper'),
              s = n.parentNode.getBoundingClientRect(),
              o = t.x + t.width / 2 - (s.left + n.offsetLeft),
              r = t.y + t.height / 2 - (s.top + n.offsetTop);
            this.result.transformOrigin = `${o}px ${r}px`;
          }
          (this.isShown = !0),
            this.$_applyAttrsToTarget({
              'aria-describedby': this.popperId,
              'data-popper-shown': '',
            });
          const e = this.showGroup;
          if (e) {
            let t;
            for (let n = 0; n < pt.length; n++)
              (t = pt[n]),
                t.showGroup !== e && (t.hide(), t.$emit('close-group'));
          }
          pt.push(this), document.body.classList.add('v-popper--some-open');
          for (const t of uc(this.theme))
            gc(t).push(this),
              document.body.classList.add(`v-popper--some-open--${t}`);
          this.$emit('apply-show'),
            (this.classes.showFrom = !0),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !1),
            await Yr(),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !0),
            this.noAutoFocus || this.$_popperNode.focus();
        },
        async $_applyHide(e = !1) {
          if (this.shownChildren.size > 0) {
            (this.pendingHide = !0), (this.$_hideInProgress = !1);
            return;
          }
          if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
          (this.skipTransition = e),
            hc(pt, this),
            pt.length === 0 &&
              document.body.classList.remove('v-popper--some-open');
          for (const n of uc(this.theme)) {
            const s = gc(n);
            hc(s, this),
              s.length === 0 &&
                document.body.classList.remove(`v-popper--some-open--${n}`);
          }
          wn === this && (wn = null),
            (this.isShown = !1),
            this.$_applyAttrsToTarget({
              'aria-describedby': void 0,
              'data-popper-shown': void 0,
            }),
            clearTimeout(this.$_disposeTimer);
          const t = this.disposeTimeout;
          t !== null &&
            (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode &&
                (this.$_detachPopperNode(), (this.isMounted = !1));
            }, t)),
            this.$_removeEventListeners('scroll'),
            this.$emit('apply-hide'),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !0),
            (this.classes.hideTo = !1),
            await Yr(),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !0);
        },
        $_autoShowHide() {
          this.shown ? this.show() : this.hide();
        },
        $_ensureTeleport() {
          if (this.isDisposed) return;
          let e = this.container;
          if (
            (typeof e == 'string'
              ? (e = window.document.querySelector(e))
              : e === !1 && (e = this.$_targetNodes[0].parentNode),
            !e)
          )
            throw new Error('No container for popover: ' + this.container);
          e.appendChild(this.$_popperNode), (this.isMounted = !0);
        },
        $_addEventListeners() {
          const e = (n) => {
            (this.isShown && !this.$_hideInProgress) ||
              ((n.usedByTooltip = !0),
              !this.$_preventShow && this.show({ event: n }));
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            fc,
            this.triggers,
            this.showTriggers,
            e
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              fc,
              this.popperTriggers,
              this.popperShowTriggers,
              e
            );
          const t = (n) => {
            n.usedByTooltip || this.hide({ event: n });
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            dc,
            this.triggers,
            this.hideTriggers,
            t
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              dc,
              this.popperTriggers,
              this.popperHideTriggers,
              t
            );
        },
        $_registerEventListeners(e, t, n) {
          this.$_events.push({ targetNodes: e, eventType: t, handler: n }),
            e.forEach((s) =>
              s.addEventListener(t, n, as ? { passive: !0 } : void 0)
            );
        },
        $_registerTriggerListeners(e, t, n, s, o) {
          let r = n;
          s != null && (r = typeof s == 'function' ? s(r) : s),
            r.forEach((i) => {
              const l = t[i];
              l && this.$_registerEventListeners(e, l, o);
            });
        },
        $_removeEventListeners(e) {
          const t = [];
          this.$_events.forEach((n) => {
            const { targetNodes: s, eventType: o, handler: r } = n;
            !e || e === o
              ? s.forEach((i) => i.removeEventListener(o, r))
              : t.push(n);
          }),
            (this.$_events = t);
        },
        $_refreshListeners() {
          this.isDisposed ||
            (this.$_removeEventListeners(), this.$_addEventListeners());
        },
        $_handleGlobalClose(e, t = !1) {
          this.$_showFrameLocked ||
            (this.hide({ event: e }),
            e.closePopover
              ? this.$emit('close-directive')
              : this.$emit('auto-hide'),
            t &&
              ((this.$_preventShow = !0),
              setTimeout(() => {
                this.$_preventShow = !1;
              }, 300)));
        },
        $_detachPopperNode() {
          this.$_popperNode.parentNode &&
            this.$_popperNode.parentNode.removeChild(this.$_popperNode);
        },
        $_swapTargetAttrs(e, t) {
          for (const n of this.$_targetNodes) {
            const s = n.getAttribute(e);
            s && (n.removeAttribute(e), n.setAttribute(t, s));
          }
        },
        $_applyAttrsToTarget(e) {
          for (const t of this.$_targetNodes)
            for (const n in e) {
              const s = e[n];
              s == null ? t.removeAttribute(n) : t.setAttribute(n, s);
            }
        },
        $_updateParentShownChildren(e) {
          let t = this.parentPopper;
          for (; t; )
            e
              ? t.shownChildren.add(this.randomId)
              : (t.shownChildren.delete(this.randomId),
                t.pendingHide && t.hide()),
              (t = t.parentPopper);
        },
        $_isAimingPopper() {
          const e = this.$_referenceNode.getBoundingClientRect();
          if (Ls >= e.left && Ls <= e.right && Ns >= e.top && Ns <= e.bottom) {
            const t = this.$_popperNode.getBoundingClientRect(),
              n = Ls - Kt,
              s = Ns - Gt,
              o =
                t.left +
                t.width / 2 -
                Kt +
                (t.top + t.height / 2) -
                Gt +
                t.width +
                t.height,
              r = Kt + n * o,
              i = Gt + s * o;
            return (
              bo(Kt, Gt, r, i, t.left, t.top, t.left, t.bottom) ||
              bo(Kt, Gt, r, i, t.left, t.top, t.right, t.top) ||
              bo(Kt, Gt, r, i, t.right, t.top, t.right, t.bottom) ||
              bo(Kt, Gt, r, i, t.left, t.bottom, t.right, t.bottom)
            );
          }
          return !1;
        },
      },
      render() {
        return this.$slots.default(this.slotData);
      },
    });
if (typeof document < 'u' && typeof window < 'u') {
  if (cd) {
    const e = as ? { passive: !0, capture: !0 } : !0;
    document.addEventListener('touchstart', (t) => mc(t, !0), e),
      document.addEventListener('touchend', (t) => yc(t, !0), e);
  } else
    window.addEventListener('mousedown', (e) => mc(e, !1), !0),
      window.addEventListener('click', (e) => yc(e, !1), !0);
  window.addEventListener('resize', t_);
}
function mc(e, t) {
  if (yt.autoHideOnMousedown) dd(e, t);
  else
    for (let n = 0; n < pt.length; n++) {
      const s = pt[n];
      try {
        s.mouseDownContains = s.popperNode().contains(e.target);
      } catch {}
    }
}
function yc(e, t) {
  yt.autoHideOnMousedown || dd(e, t);
}
function dd(e, t) {
  const n = {};
  for (let s = pt.length - 1; s >= 0; s--) {
    const o = pt[s];
    try {
      const r = (o.containsGlobalTarget =
        o.mouseDownContains || o.popperNode().contains(e.target));
      (o.pendingHide = !1),
        requestAnimationFrame(() => {
          if (((o.pendingHide = !1), !n[o.randomId] && vc(o, r, e))) {
            if (
              (o.$_handleGlobalClose(e, t),
              !e.closeAllPopover && e.closePopover && r)
            ) {
              let l = o.parentPopper;
              for (; l; ) (n[l.randomId] = !0), (l = l.parentPopper);
              return;
            }
            let i = o.parentPopper;
            for (; i && vc(i, i.containsGlobalTarget, e); )
              i.$_handleGlobalClose(e, t), (i = i.parentPopper);
          }
        });
    } catch {}
  }
}
function vc(e, t, n) {
  return n.closeAllPopover || (n.closePopover && t) || (e_(e, n) && !t);
}
function e_(e, t) {
  if (typeof e.autoHide == 'function') {
    const n = e.autoHide(t);
    return (e.lastAutoHide = n), n;
  }
  return e.autoHide;
}
function t_() {
  for (let e = 0; e < pt.length; e++) pt[e].$_computePosition();
}
let Kt = 0,
  Gt = 0,
  Ls = 0,
  Ns = 0;
typeof window < 'u' &&
  window.addEventListener(
    'mousemove',
    (e) => {
      (Kt = Ls), (Gt = Ns), (Ls = e.clientX), (Ns = e.clientY);
    },
    as ? { passive: !0 } : void 0
  );
function bo(e, t, n, s, o, r, i, l) {
  const a =
      ((i - o) * (t - r) - (l - r) * (e - o)) /
      ((l - r) * (n - e) - (i - o) * (s - t)),
    c =
      ((n - e) * (t - r) - (s - t) * (e - o)) /
      ((l - r) * (n - e) - (i - o) * (s - t));
  return a >= 0 && a <= 1 && c >= 0 && c <= 1;
}
const n_ = { extends: fd() },
  kr = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, o] of t) n[s] = o;
    return n;
  };
function s_(e, t, n, s, o, r) {
  return (
    pe(),
    je(
      'div',
      {
        ref: 'reference',
        class: Ln(['v-popper', { 'v-popper--shown': e.slotData.isShown }]),
      },
      [Do(e.$slots, 'default', qc(al(e.slotData)))],
      2
    )
  );
}
const o_ = kr(n_, [['render', s_]]);
function r_() {
  var e = window.navigator.userAgent,
    t = e.indexOf('MSIE ');
  if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
  var n = e.indexOf('Trident/');
  if (n > 0) {
    var s = e.indexOf('rv:');
    return parseInt(e.substring(s + 3, e.indexOf('.', s)), 10);
  }
  var o = e.indexOf('Edge/');
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf('.', o)), 10) : -1;
}
let Mo;
function Fi() {
  Fi.init || ((Fi.init = !0), (Mo = r_() !== -1));
}
var Or = {
  name: 'ResizeObserver',
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ['notify'],
  mounted() {
    Fi(),
      pn(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const e = document.createElement('object');
    (this._resizeObject = e),
      e.setAttribute('aria-hidden', 'true'),
      e.setAttribute('tabindex', -1),
      (e.onload = this.addResizeHandlers),
      (e.type = 'text/html'),
      Mo && this.$el.appendChild(e),
      (e.data = 'about:blank'),
      Mo || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth),
        (this._h = this.$el.offsetHeight),
        this.emitSize());
    },
    emitSize() {
      this.$emit('notify', { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        'resize',
        this.compareAndNotify
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!Mo &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            'resize',
            this.compareAndNotify
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const i_ = Jh();
Kh('data-v-b329ee4c');
const l_ = { class: 'resize-observer', tabindex: '-1' };
Gh();
const a_ = i_((e, t, n, s, o, r) => (pe(), Xe('div', l_)));
Or.render = a_;
Or.__scopeId = 'data-v-b329ee4c';
Or.__file = 'src/components/ResizeObserver.vue';
const hd = (e = 'theme') => ({
    computed: {
      themeClass() {
        return Zw(this[e]);
      },
    },
  }),
  c_ = tt({
    name: 'VPopperContent',
    components: { ResizeObserver: Or },
    mixins: [hd()],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ['hide', 'resize'],
    methods: {
      toPx(e) {
        return e != null && !isNaN(e) ? `${e}px` : null;
      },
    },
  }),
  u_ = ['id', 'aria-hidden', 'tabindex', 'data-popper-placement'],
  f_ = { ref: 'inner', class: 'v-popper__inner' },
  d_ = oe('div', { class: 'v-popper__arrow-outer' }, null, -1),
  h_ = oe('div', { class: 'v-popper__arrow-inner' }, null, -1),
  p_ = [d_, h_];
function g_(e, t, n, s, o, r) {
  const i = On('ResizeObserver');
  return (
    pe(),
    je(
      'div',
      {
        id: e.popperId,
        ref: 'popover',
        class: Ln([
          'v-popper__popper',
          [
            e.themeClass,
            e.classes.popperClass,
            {
              'v-popper__popper--shown': e.shown,
              'v-popper__popper--hidden': !e.shown,
              'v-popper__popper--show-from': e.classes.showFrom,
              'v-popper__popper--show-to': e.classes.showTo,
              'v-popper__popper--hide-from': e.classes.hideFrom,
              'v-popper__popper--hide-to': e.classes.hideTo,
              'v-popper__popper--skip-transition': e.skipTransition,
              'v-popper__popper--arrow-overflow':
                e.result && e.result.arrow.overflow,
              'v-popper__popper--no-positioning': !e.result,
            },
          ],
        ]),
        style: $n(
          e.result
            ? {
                position: e.result.strategy,
                transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`,
              }
            : void 0
        ),
        'aria-hidden': e.shown ? 'false' : 'true',
        tabindex: e.autoHide ? 0 : void 0,
        'data-popper-placement': e.result ? e.result.placement : void 0,
        onKeyup:
          t[2] || (t[2] = Pg((l) => e.autoHide && e.$emit('hide'), ['esc'])),
      },
      [
        oe('div', {
          class: 'v-popper__backdrop',
          onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit('hide')),
        }),
        oe(
          'div',
          {
            class: 'v-popper__wrapper',
            style: $n(
              e.result ? { transformOrigin: e.result.transformOrigin } : void 0
            ),
          },
          [
            oe(
              'div',
              f_,
              [
                e.mounted
                  ? (pe(),
                    je(
                      Oe,
                      { key: 0 },
                      [
                        oe('div', null, [Do(e.$slots, 'default')]),
                        e.handleResize
                          ? (pe(),
                            Xe(i, {
                              key: 0,
                              onNotify:
                                t[1] || (t[1] = (l) => e.$emit('resize', l)),
                            }))
                          : Sn('', !0),
                      ],
                      64
                    ))
                  : Sn('', !0),
              ],
              512
            ),
            oe(
              'div',
              {
                ref: 'arrow',
                class: 'v-popper__arrow-container',
                style: $n(
                  e.result
                    ? {
                        left: e.toPx(e.result.arrow.x),
                        top: e.toPx(e.result.arrow.y),
                      }
                    : void 0
                ),
              },
              p_,
              4
            ),
          ],
          4
        ),
      ],
      46,
      u_
    )
  );
}
const pd = kr(c_, [['render', g_]]),
  gd = {
    methods: {
      show(...e) {
        return this.$refs.popper.show(...e);
      },
      hide(...e) {
        return this.$refs.popper.hide(...e);
      },
      dispose(...e) {
        return this.$refs.popper.dispose(...e);
      },
      onResize(...e) {
        return this.$refs.popper.onResize(...e);
      },
    },
  };
let Di = function () {};
typeof window < 'u' && (Di = window.Element);
const m_ = tt({
  name: 'VPopperWrapper',
  components: { Popper: o_, PopperContent: pd },
  mixins: [gd, hd('finalTheme')],
  props: {
    theme: { type: String, default: null },
    referenceNode: { type: Function, default: null },
    shown: { type: Boolean, default: !1 },
    showGroup: { type: String, default: null },
    ariaId: { default: null },
    disabled: { type: Boolean, default: void 0 },
    positioningDisabled: { type: Boolean, default: void 0 },
    placement: { type: String, default: void 0 },
    delay: { type: [String, Number, Object], default: void 0 },
    distance: { type: [Number, String], default: void 0 },
    skidding: { type: [Number, String], default: void 0 },
    triggers: { type: Array, default: void 0 },
    showTriggers: { type: [Array, Function], default: void 0 },
    hideTriggers: { type: [Array, Function], default: void 0 },
    popperTriggers: { type: Array, default: void 0 },
    popperShowTriggers: { type: [Array, Function], default: void 0 },
    popperHideTriggers: { type: [Array, Function], default: void 0 },
    container: { type: [String, Object, Di, Boolean], default: void 0 },
    boundary: { type: [String, Di], default: void 0 },
    strategy: { type: String, default: void 0 },
    autoHide: { type: [Boolean, Function], default: void 0 },
    handleResize: { type: Boolean, default: void 0 },
    instantMove: { type: Boolean, default: void 0 },
    eagerMount: { type: Boolean, default: void 0 },
    popperClass: { type: [String, Array, Object], default: void 0 },
    computeTransformOrigin: { type: Boolean, default: void 0 },
    autoMinSize: { type: Boolean, default: void 0 },
    autoSize: { type: [Boolean, String], default: void 0 },
    autoMaxSize: { type: Boolean, default: void 0 },
    autoBoundaryMaxSize: { type: Boolean, default: void 0 },
    preventOverflow: { type: Boolean, default: void 0 },
    overflowPadding: { type: [Number, String], default: void 0 },
    arrowPadding: { type: [Number, String], default: void 0 },
    arrowOverflow: { type: Boolean, default: void 0 },
    flip: { type: Boolean, default: void 0 },
    shift: { type: Boolean, default: void 0 },
    shiftCrossAxis: { type: Boolean, default: void 0 },
    noAutoFocus: { type: Boolean, default: void 0 },
    disposeTimeout: { type: Number, default: void 0 },
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    'update:shown': (e) => !0,
    'apply-show': () => !0,
    'apply-hide': () => !0,
    'close-group': () => !0,
    'close-directive': () => !0,
    'auto-hide': () => !0,
    resize: () => !0,
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter(
        (e) => e !== this.$refs.popperContent.$el
      );
    },
  },
});
function y_(e, t, n, s, o, r) {
  const i = On('PopperContent'),
    l = On('Popper');
  return (
    pe(),
    Xe(
      l,
      ul({ ref: 'popper' }, e.$props, {
        theme: e.finalTheme,
        'target-nodes': e.getTargetNodes,
        'popper-node': () => e.$refs.popperContent.$el,
        class: [e.themeClass],
        onShow: t[0] || (t[0] = () => e.$emit('show')),
        onHide: t[1] || (t[1] = () => e.$emit('hide')),
        'onUpdate:shown': t[2] || (t[2] = (a) => e.$emit('update:shown', a)),
        onApplyShow: t[3] || (t[3] = () => e.$emit('apply-show')),
        onApplyHide: t[4] || (t[4] = () => e.$emit('apply-hide')),
        onCloseGroup: t[5] || (t[5] = () => e.$emit('close-group')),
        onCloseDirective: t[6] || (t[6] = () => e.$emit('close-directive')),
        onAutoHide: t[7] || (t[7] = () => e.$emit('auto-hide')),
        onResize: t[8] || (t[8] = () => e.$emit('resize')),
      }),
      {
        default: Tt(
          ({
            popperId: a,
            isShown: c,
            shouldMountContent: u,
            skipTransition: f,
            autoHide: d,
            show: h,
            hide: y,
            handleResize: g,
            onResize: b,
            classes: x,
            result: v,
          }) => [
            Do(e.$slots, 'default', { shown: c, show: h, hide: y }),
            ue(
              i,
              {
                ref: 'popperContent',
                'popper-id': a,
                theme: e.finalTheme,
                shown: c,
                mounted: u,
                'skip-transition': f,
                'auto-hide': d,
                'handle-resize': g,
                classes: x,
                result: v,
                onHide: y,
                onResize: b,
              },
              {
                default: Tt(() => [
                  Do(e.$slots, 'popper', { shown: c, hide: y }),
                ]),
                _: 2,
              },
              1032,
              [
                'popper-id',
                'theme',
                'shown',
                'mounted',
                'skip-transition',
                'auto-hide',
                'handle-resize',
                'classes',
                'result',
                'onHide',
                'onResize',
              ]
            ),
          ]
        ),
        _: 3,
      },
      16,
      ['theme', 'target-nodes', 'popper-node', 'class']
    )
  );
}
const Sl = kr(m_, [['render', y_]]),
  md = { ...Sl, name: 'VDropdown', vPopperTheme: 'dropdown' },
  v_ = { ...Sl, name: 'VMenu', vPopperTheme: 'menu' },
  w_ = { ...Sl, name: 'VTooltip', vPopperTheme: 'tooltip' },
  __ = tt({
    name: 'VTooltipDirective',
    components: { Popper: fd(), PopperContent: pd },
    mixins: [gd],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: 'tooltip' },
      html: { type: Boolean, default: (e) => Gs(e.theme, 'html') },
      content: { type: [String, Number, Function], default: null },
      loadingContent: {
        type: String,
        default: (e) => Gs(e.theme, 'loadingContent'),
      },
      targetNodes: { type: Function, required: !0 },
    },
    data() {
      return { asyncContent: null };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == 'function';
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync
          ? this.loading
            ? this.loadingContent
            : this.asyncContent
          : this.content;
      },
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(!0);
        },
        immediate: !0,
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      },
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(e) {
        if (
          typeof this.content == 'function' &&
          this.$_isShown &&
          (e || (!this.$_loading && this.asyncContent == null))
        ) {
          (this.asyncContent = null), (this.$_loading = !0);
          const t = ++this.$_fetchId,
            n = this.content(this);
          n.then ? n.then((s) => this.onResult(t, s)) : this.onResult(t, n);
        }
      },
      onResult(e, t) {
        e === this.$_fetchId &&
          ((this.$_loading = !1), (this.asyncContent = t));
      },
      onShow() {
        (this.$_isShown = !0), this.fetchContent();
      },
      onHide() {
        this.$_isShown = !1;
      },
    },
  }),
  b_ = ['innerHTML'],
  x_ = ['textContent'];
function E_(e, t, n, s, o, r) {
  const i = On('PopperContent'),
    l = On('Popper');
  return (
    pe(),
    Xe(
      l,
      ul({ ref: 'popper' }, e.$attrs, {
        theme: e.theme,
        'target-nodes': e.targetNodes,
        'popper-node': () => e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide,
      }),
      {
        default: Tt(
          ({
            popperId: a,
            isShown: c,
            shouldMountContent: u,
            skipTransition: f,
            autoHide: d,
            hide: h,
            handleResize: y,
            onResize: g,
            classes: b,
            result: x,
          }) => [
            ue(
              i,
              {
                ref: 'popperContent',
                class: Ln({ 'v-popper--tooltip-loading': e.loading }),
                'popper-id': a,
                theme: e.theme,
                shown: c,
                mounted: u,
                'skip-transition': f,
                'auto-hide': d,
                'handle-resize': y,
                classes: b,
                result: x,
                onHide: h,
                onResize: g,
              },
              {
                default: Tt(() => [
                  e.html
                    ? (pe(),
                      je(
                        'div',
                        { key: 0, innerHTML: e.finalContent },
                        null,
                        8,
                        b_
                      ))
                    : (pe(),
                      je(
                        'div',
                        { key: 1, textContent: sn(e.finalContent) },
                        null,
                        8,
                        x_
                      )),
                ]),
                _: 2,
              },
              1032,
              [
                'class',
                'popper-id',
                'theme',
                'shown',
                'mounted',
                'skip-transition',
                'auto-hide',
                'handle-resize',
                'classes',
                'result',
                'onHide',
                'onResize',
              ]
            ),
          ]
        ),
        _: 1,
      },
      16,
      ['theme', 'target-nodes', 'popper-node', 'onApplyShow', 'onApplyHide']
    )
  );
}
const S_ = kr(__, [['render', E_]]),
  yd = 'v-popper--has-tooltip';
function T_(e, t) {
  let n = e.placement;
  if (!n && t) for (const s of ud) t[s] && (n = s);
  return n || (n = Gs(e.theme || 'tooltip', 'placement')), n;
}
function vd(e, t, n) {
  let s;
  const o = typeof t;
  return (
    o === 'string'
      ? (s = { content: t })
      : t && o === 'object'
        ? (s = t)
        : (s = { content: !1 }),
    (s.placement = T_(s, n)),
    (s.targetNodes = () => [e]),
    (s.referenceNode = () => e),
    s
  );
}
let Zr,
  Js,
  C_ = 0;
function $_() {
  if (Zr) return;
  (Js = ae([])),
    (Zr = af({
      name: 'VTooltipDirectiveApp',
      setup() {
        return { directives: Js };
      },
      render() {
        return this.directives.map((t) =>
          Qe(S_, { ...t.options, shown: t.shown || t.options.shown, key: t.id })
        );
      },
      devtools: { hide: !0 },
    }));
  const e = document.createElement('div');
  document.body.appendChild(e), Zr.mount(e);
}
function R_(e, t, n) {
  $_();
  const s = ae(vd(e, t, n)),
    o = ae(!1),
    r = { id: C_++, options: s, shown: o };
  return (
    Js.value.push(r),
    e.classList && e.classList.add(yd),
    (e.$_popper = {
      options: s,
      item: r,
      show() {
        o.value = !0;
      },
      hide() {
        o.value = !1;
      },
    })
  );
}
function wd(e) {
  if (e.$_popper) {
    const t = Js.value.indexOf(e.$_popper.item);
    t !== -1 && Js.value.splice(t, 1),
      delete e.$_popper,
      delete e.$_popperOldShown,
      delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(yd);
}
function wc(e, { value: t, modifiers: n }) {
  const s = vd(e, t, n);
  if (!s.content || Gs(s.theme || 'tooltip', 'disabled')) wd(e);
  else {
    let o;
    e.$_popper ? ((o = e.$_popper), (o.options.value = s)) : (o = R_(e, t, n)),
      typeof t.shown < 'u' &&
        t.shown !== e.$_popperOldShown &&
        ((e.$_popperOldShown = t.shown), t.shown ? o.show() : o.hide());
  }
}
const _d = {
  beforeMount: wc,
  updated: wc,
  beforeUnmount(e) {
    wd(e);
  },
};
function _c(e) {
  e.addEventListener('mousedown', rr),
    e.addEventListener('click', rr),
    e.addEventListener('touchstart', bd, as ? { passive: !0 } : !1);
}
function bc(e) {
  e.removeEventListener('mousedown', rr),
    e.removeEventListener('click', rr),
    e.removeEventListener('touchstart', bd),
    e.removeEventListener('touchend', xd),
    e.removeEventListener('touchcancel', Ed);
}
function rr(e) {
  const t = e.currentTarget;
  (e.closePopover = !t.$_vclosepopover_touch),
    (e.closeAllPopover =
      t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
}
function bd(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const n = e.changedTouches[0];
    (t.$_vclosepopover_touchPoint = n),
      t.addEventListener('touchend', xd),
      t.addEventListener('touchcancel', Ed);
  }
}
function xd(e) {
  const t = e.currentTarget;
  if (((t.$_vclosepopover_touch = !1), e.changedTouches.length === 1)) {
    const n = e.changedTouches[0],
      s = t.$_vclosepopover_touchPoint;
    (e.closePopover =
      Math.abs(n.screenY - s.screenY) < 20 &&
      Math.abs(n.screenX - s.screenX) < 20),
      (e.closeAllPopover =
        t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
  }
}
function Ed(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
const P_ = {
    beforeMount(e, { value: t, modifiers: n }) {
      (e.$_closePopoverModifiers = n), (typeof t > 'u' || t) && _c(e);
    },
    updated(e, { value: t, oldValue: n, modifiers: s }) {
      (e.$_closePopoverModifiers = s),
        t !== n && (typeof t > 'u' || t ? _c(e) : bc(e));
    },
    beforeUnmount(e) {
      bc(e);
    },
  },
  gx = _d,
  mx = md;
function A_(e, t = {}) {
  e.$_vTooltipInstalled ||
    ((e.$_vTooltipInstalled = !0),
    ad(yt, t),
    e.directive('tooltip', _d),
    e.directive('close-popper', P_),
    e.component('VTooltip', w_),
    e.component('VDropdown', md),
    e.component('VMenu', v_));
}
const k_ = { version: '5.2.2', install: A_, options: yt },
  O_ = wt((e) => {
    e.vueApp.use(k_, { overflowPadding: 20 });
  }),
  M_ = [ov, iv, Ew, Tw, Cw, $w, Pw, Aw, kw, Ow, O_],
  L_ = gl('/favicon.svg'),
  xc = '0.5.4',
  N_ = oe(
    'a',
    {
      href: 'https://github.com/eslint/config-inspector',
      target: '_blank',
      flex: 'inline gap-2 items-center',
      mr1: '',
    },
    [
      oe('img', { src: L_, 'inline-block': '', 'h-1em': '' }),
      Ye(' ESLint Config Inspector '),
    ],
    -1
  ),
  H_ = ['href'],
  Sd = tt({
    __name: 'ConfigInspectorBadge',
    props: { showVersion: { type: Boolean, default: !0 } },
    setup(e) {
      return (t, n) => (
        pe(),
        je('div', null, [
          N_,
          t.showVersion
            ? (pe(),
              je(
                'a',
                {
                  key: 0,
                  ml1: '',
                  'inline-block': '',
                  'translate-y--5': '',
                  'text-0.6em': '',
                  'font-200': '',
                  'font-mono': '',
                  op50: '',
                  href: `https://github.com/eslint/config-inspector/releases/tag/v${se(xc)}`,
                  target: '_blank',
                },
                ' v' + sn(se(xc)),
                9,
                H_
              ))
            : Sn('', !0),
        ])
      );
    },
  });
async function Td(e, t = Fe()) {
  const { path: n, matched: s } = t.resolve(e);
  if (
    !s.length ||
    (t._routePreloaded || (t._routePreloaded = new Set()),
    t._routePreloaded.has(n))
  )
    return;
  const o = (t._preloadPromises = t._preloadPromises || []);
  if (o.length > 4) return Promise.all(o).then(() => Td(e, t));
  t._routePreloaded.add(n);
  const r = s
    .map((i) => {
      var l;
      return (l = i.components) == null ? void 0 : l.default;
    })
    .filter((i) => typeof i == 'function');
  for (const i of r) {
    const l = Promise.resolve(i())
      .catch(() => {})
      .finally(() => o.splice(o.indexOf(l)));
    o.push(l);
  }
  await Promise.all(o);
}
const I_ = (...e) => e.find((t) => t !== void 0);
function j_(e) {
  const t = e.componentName || 'NuxtLink';
  function n(o, r) {
    if (!o || (e.trailingSlash !== 'append' && e.trailingSlash !== 'remove'))
      return o;
    if (typeof o == 'string') return Ec(o, e.trailingSlash);
    const i = 'path' in o && o.path !== void 0 ? o.path : r(o).path;
    return { ...o, name: void 0, path: Ec(i, e.trailingSlash) };
  }
  function s(o) {
    const r = Fe(),
      i = ps(),
      l = le(() => !!o.target && o.target !== '_self'),
      a = le(() => {
        const g = o.to || o.href || '';
        return typeof g == 'string' && gn(g, { acceptRelative: !0 });
      }),
      c = On('RouterLink'),
      u = c && typeof c != 'string' ? c.useLink : void 0,
      f = le(() => {
        if (o.external) return !0;
        const g = o.to || o.href || '';
        return typeof g == 'object' ? !1 : g === '' || a.value;
      }),
      d = le(() => {
        const g = o.to || o.href || '';
        return f.value ? g : n(g, r.resolve);
      }),
      h = f.value || u == null ? void 0 : u({ ...o, to: d }),
      y = le(() => {
        var g;
        if (!d.value || a.value) return d.value;
        if (f.value) {
          const b =
              typeof d.value == 'object' && 'path' in d.value
                ? Ri(d.value)
                : d.value,
            x = typeof b == 'object' ? r.resolve(b).href : b;
          return n(x, r.resolve);
        }
        return typeof d.value == 'object'
          ? (((g = r.resolve(d.value)) == null ? void 0 : g.href) ?? null)
          : n(br(i.app.baseURL, d.value), r.resolve);
      });
    return {
      to: d,
      hasTarget: l,
      isAbsoluteUrl: a,
      isExternal: f,
      href: y,
      isActive:
        (h == null ? void 0 : h.isActive) ??
        le(() => d.value === r.currentRoute.value.path),
      isExactActive:
        (h == null ? void 0 : h.isExactActive) ??
        le(() => d.value === r.currentRoute.value.path),
      route: (h == null ? void 0 : h.route) ?? le(() => r.resolve(d.value)),
      async navigate() {
        await iy(y.value, { replace: o.replace, external: f.value || l.value });
      },
    };
  }
  return tt({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
    },
    useLink: s,
    setup(o, { slots: r }) {
      const i = Fe(),
        {
          to: l,
          href: a,
          navigate: c,
          isExternal: u,
          hasTarget: f,
          isAbsoluteUrl: d,
        } = s(o),
        h = ae(!1),
        y = ae(null),
        g = (b) => {
          var x;
          y.value = o.custom
            ? (x = b == null ? void 0 : b.$el) == null
              ? void 0
              : x.nextElementSibling
            : b == null
              ? void 0
              : b.$el;
        };
      if (
        o.prefetch !== !1 &&
        o.noPrefetch !== !0 &&
        o.target !== '_blank' &&
        !B_()
      ) {
        const x = be();
        let v,
          p = null;
        hs(() => {
          const _ = D_();
          $r(() => {
            v = Ni(() => {
              var S;
              (S = y == null ? void 0 : y.value) != null &&
                S.tagName &&
                (p = _.observe(y.value, async () => {
                  p == null || p(), (p = null);
                  const E =
                    typeof l.value == 'string'
                      ? l.value
                      : u.value
                        ? Ri(l.value)
                        : i.resolve(l.value).fullPath;
                  await Promise.all([
                    x.hooks.callHook('link:prefetch', E).catch(() => {}),
                    !u.value && !f.value && Td(l.value, i).catch(() => {}),
                  ]),
                    (h.value = !0);
                }));
            });
          });
        }),
          eo(() => {
            v && Sw(v), p == null || p(), (p = null);
          });
      }
      return () => {
        var v;
        if (!u.value && !f.value) {
          const p = {
            ref: g,
            to: l.value,
            activeClass: o.activeClass || e.activeClass,
            exactActiveClass: o.exactActiveClass || e.exactActiveClass,
            replace: o.replace,
            ariaCurrentValue: o.ariaCurrentValue,
            custom: o.custom,
          };
          return (
            o.custom ||
              (h.value && (p.class = o.prefetchedClass || e.prefetchedClass),
              (p.rel = o.rel || void 0)),
            Qe(On('RouterLink'), p, r.default)
          );
        }
        const b = o.target || null,
          x =
            I_(
              o.noRel ? '' : o.rel,
              e.externalRelAttribute,
              d.value || f.value ? 'noopener noreferrer' : ''
            ) || null;
        return o.custom
          ? r.default
            ? r.default({
                href: a.value,
                navigate: c,
                get route() {
                  if (!a.value) return;
                  const p = new URL(a.value, window.location.href);
                  return {
                    path: p.pathname,
                    fullPath: p.pathname,
                    get query() {
                      return ff(p.search);
                    },
                    hash: p.hash,
                    params: {},
                    name: void 0,
                    matched: [],
                    redirectedFrom: void 0,
                    meta: {},
                    href: a.value,
                  };
                },
                rel: x,
                target: b,
                isExternal: u.value || f.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : Qe(
              'a',
              { ref: y, href: a.value || null, rel: x, target: b },
              (v = r.default) == null ? void 0 : v.call(r)
            );
      };
    },
  });
}
const F_ = j_(Bm);
function Ec(e, t) {
  const n = t === 'append' ? Xo : _r;
  return gn(e) && !e.startsWith('http') ? e : n(e, !0);
}
function D_() {
  const e = be();
  if (e._observer) return e._observer;
  let t = null;
  const n = new Map(),
    s = (r, i) => (
      t ||
        (t = new IntersectionObserver((l) => {
          for (const a of l) {
            const c = n.get(a.target);
            (a.isIntersecting || a.intersectionRatio > 0) && c && c();
          }
        })),
      n.set(r, i),
      t.observe(r),
      () => {
        n.delete(r),
          t.unobserve(r),
          n.size === 0 && (t.disconnect(), (t = null));
      }
    );
  return (e._observer = { observe: s });
}
function B_() {
  const e = navigator.connection;
  return !!(e && (e.saveData || /2g/.test(e.effectiveType)));
}
function cs(e) {
  return Ki() ? (ph(e), !0) : !1;
}
function et(e) {
  return typeof e == 'function' ? e() : se(e);
}
const Xs = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const W_ = Object.prototype.toString,
  U_ = (e) => W_.call(e) === '[object Object]',
  ir = () => {};
function V_(e, t) {
  function n(...s) {
    return new Promise((o, r) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })
      )
        .then(o)
        .catch(r);
    });
  }
  return n;
}
const Cd = (e) => e();
function z_(e, t = {}) {
  let n,
    s,
    o = ir;
  const r = (l) => {
    clearTimeout(l), o(), (o = ir);
  };
  return (l) => {
    const a = et(e),
      c = et(t.maxWait);
    return (
      n && r(n),
      a <= 0 || (c !== void 0 && c <= 0)
        ? (s && (r(s), (s = null)), Promise.resolve(l()))
        : new Promise((u, f) => {
            (o = t.rejectOnCancel ? f : u),
              c &&
                !s &&
                (s = setTimeout(() => {
                  n && r(n), (s = null), u(l());
                }, c)),
              (n = setTimeout(() => {
                s && r(s), (s = null), u(l());
              }, a));
          })
    );
  };
}
function q_(e = Cd) {
  const t = ae(!0);
  function n() {
    t.value = !1;
  }
  function s() {
    t.value = !0;
  }
  const o = (...r) => {
    t.value && e(...r);
  };
  return { isActive: fs(t), pause: n, resume: s, eventFilter: o };
}
function K_(e) {
  let t;
  function n() {
    return t || (t = e()), t;
  }
  return (
    (n.reset = async () => {
      const s = t;
      (t = void 0), s && (await s);
    }),
    n
  );
}
function G_(e, t) {
  var n;
  if (typeof e == 'number') return e + t;
  const s = ((n = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : n[0]) || '',
    o = e.slice(s.length),
    r = Number.parseFloat(s) + t;
  return Number.isNaN(r) ? e : r + o;
}
function J_(e) {
  return Nn();
}
function X_(...e) {
  if (e.length !== 1) return hu(...e);
  const t = e[0];
  return typeof t == 'function' ? fs(du(() => ({ get: t, set: ir }))) : ae(t);
}
function $d(e, t, n = {}) {
  const { eventFilter: s = Cd, ...o } = n;
  return gt(e, V_(s, t), o);
}
function Y_(e, t, n = {}) {
  const { eventFilter: s, ...o } = n,
    { eventFilter: r, pause: i, resume: l, isActive: a } = q_(s);
  return {
    stop: $d(e, t, { ...o, eventFilter: r }),
    pause: i,
    resume: l,
    isActive: a,
  };
}
function Rd(e, t = !0, n) {
  J_() ? hs(e, n) : t ? e() : pn(e);
}
function Q_(e, t = 1e3, n = {}) {
  const { immediate: s = !0, immediateCallback: o = !1 } = n;
  let r = null;
  const i = ae(!1);
  function l() {
    r && (clearInterval(r), (r = null));
  }
  function a() {
    (i.value = !1), l();
  }
  function c() {
    const u = et(t);
    u <= 0 || ((i.value = !0), o && e(), l(), (r = setInterval(e, u)));
  }
  if ((s && Xs && c(), Le(t) || typeof t == 'function')) {
    const u = gt(t, () => {
      i.value && Xs && c();
    });
    cs(u);
  }
  return cs(a), { isActive: i, pause: a, resume: c };
}
function Z_(e, t, n = {}) {
  const { immediate: s = !0 } = n,
    o = ae(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), (r = null));
  }
  function l() {
    (o.value = !1), i();
  }
  function a(...c) {
    i(),
      (o.value = !0),
      (r = setTimeout(() => {
        (o.value = !1), (r = null), e(...c);
      }, et(t)));
  }
  return (
    s && ((o.value = !0), Xs && a()),
    cs(l),
    { isPending: fs(o), start: a, stop: l }
  );
}
function yx(e, t, n = {}) {
  const { debounce: s = 0, maxWait: o = void 0, ...r } = n;
  return $d(e, t, { ...r, eventFilter: z_(s, { maxWait: o }) });
}
function Pd(e) {
  var t;
  const n = et(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const It = Xs ? window : void 0,
  Ad = Xs ? window.navigator : void 0;
function lr(...e) {
  let t, n, s, o;
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, o] = e), (t = It))
      : ([t, n, s, o] = e),
    !t)
  )
    return ir;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [],
    i = () => {
      r.forEach((u) => u()), (r.length = 0);
    },
    l = (u, f, d, h) => (
      u.addEventListener(f, d, h), () => u.removeEventListener(f, d, h)
    ),
    a = gt(
      () => [Pd(t), et(o)],
      ([u, f]) => {
        if ((i(), !u)) return;
        const d = U_(f) ? { ...f } : f;
        r.push(...n.flatMap((h) => s.map((y) => l(u, h, y, d))));
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      a(), i();
    };
  return cs(c), c;
}
function eb() {
  const e = ae(!1),
    t = Nn();
  return (
    t &&
      hs(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Tl(e) {
  const t = eb();
  return le(() => (t.value, !!e()));
}
function tb(e, t = {}) {
  const { immediate: n = !0, fpsLimit: s = void 0, window: o = It } = t,
    r = ae(!1),
    i = s ? 1e3 / s : null;
  let l = 0,
    a = null;
  function c(d) {
    if (!r.value || !o) return;
    l || (l = d);
    const h = d - l;
    if (i && h < i) {
      a = o.requestAnimationFrame(c);
      return;
    }
    (l = d), e({ delta: h, timestamp: d }), (a = o.requestAnimationFrame(c));
  }
  function u() {
    !r.value &&
      o &&
      ((r.value = !0), (l = 0), (a = o.requestAnimationFrame(c)));
  }
  function f() {
    (r.value = !1), a != null && o && (o.cancelAnimationFrame(a), (a = null));
  }
  return n && u(), cs(f), { isActive: fs(r), pause: f, resume: u };
}
function Wn(e, t = {}) {
  const { window: n = It } = t,
    s = Tl(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function');
  let o;
  const r = ae(!1),
    i = (c) => {
      r.value = c.matches;
    },
    l = () => {
      o &&
        ('removeEventListener' in o
          ? o.removeEventListener('change', i)
          : o.removeListener(i));
    },
    a = zu(() => {
      s.value &&
        (l(),
        (o = n.matchMedia(et(e))),
        'addEventListener' in o
          ? o.addEventListener('change', i)
          : o.addListener(i),
        (r.value = o.matches));
    });
  return (
    cs(() => {
      a(), l(), (o = void 0);
    }),
    r
  );
}
const nb = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 };
function sb(e, t = {}) {
  function n(u, f) {
    let d = et(e[et(u)]);
    return (
      f != null && (d = G_(d, f)), typeof d == 'number' && (d = `${d}px`), d
    );
  }
  const { window: s = It, strategy: o = 'min-width' } = t;
  function r(u) {
    return s ? s.matchMedia(u).matches : !1;
  }
  const i = (u) => Wn(() => `(min-width: ${n(u)})`, t),
    l = (u) => Wn(() => `(max-width: ${n(u)})`, t),
    a = Object.keys(e).reduce(
      (u, f) => (
        Object.defineProperty(u, f, {
          get: () => (o === 'min-width' ? i(f) : l(f)),
          enumerable: !0,
          configurable: !0,
        }),
        u
      ),
      {}
    );
  function c() {
    const u = Object.keys(e).map((f) => [f, i(f)]);
    return le(() => u.filter(([, f]) => f.value).map(([f]) => f));
  }
  return Object.assign(a, {
    greaterOrEqual: i,
    smallerOrEqual: l,
    greater(u) {
      return Wn(() => `(min-width: ${n(u, 0.1)})`, t);
    },
    smaller(u) {
      return Wn(() => `(max-width: ${n(u, -0.1)})`, t);
    },
    between(u, f) {
      return Wn(() => `(min-width: ${n(u)}) and (max-width: ${n(f, -0.1)})`, t);
    },
    isGreater(u) {
      return r(`(min-width: ${n(u, 0.1)})`);
    },
    isGreaterOrEqual(u) {
      return r(`(min-width: ${n(u)})`);
    },
    isSmaller(u) {
      return r(`(max-width: ${n(u, -0.1)})`);
    },
    isSmallerOrEqual(u) {
      return r(`(max-width: ${n(u)})`);
    },
    isInBetween(u, f) {
      return r(`(min-width: ${n(u)}) and (max-width: ${n(f, -0.1)})`);
    },
    current: c,
    active() {
      const u = c();
      return le(() => (u.value.length === 0 ? '' : u.value.at(-1)));
    },
  });
}
function Sc(e, t = {}) {
  const { controls: n = !1, navigator: s = Ad } = t,
    o = Tl(() => s && 'permissions' in s);
  let r;
  const i = typeof e == 'string' ? { name: e } : e,
    l = ae(),
    a = () => {
      r && (l.value = r.state);
    },
    c = K_(async () => {
      if (o.value) {
        if (!r)
          try {
            (r = await s.permissions.query(i)), lr(r, 'change', a), a();
          } catch {
            l.value = 'prompt';
          }
        return r;
      }
    });
  return c(), n ? { state: l, isSupported: o, query: c } : l;
}
function vx(e = {}) {
  const {
      navigator: t = Ad,
      read: n = !1,
      source: s,
      copiedDuring: o = 1500,
      legacy: r = !1,
    } = e,
    i = Tl(() => t && 'clipboard' in t),
    l = Sc('clipboard-read'),
    a = Sc('clipboard-write'),
    c = le(() => i.value || r),
    u = ae(''),
    f = ae(!1),
    d = Z_(() => (f.value = !1), o);
  function h() {
    i.value && x(l.value)
      ? t.clipboard.readText().then((v) => {
          u.value = v;
        })
      : (u.value = b());
  }
  c.value && n && lr(['copy', 'cut'], h);
  async function y(v = et(s)) {
    c.value &&
      v != null &&
      (i.value && x(a.value) ? await t.clipboard.writeText(v) : g(v),
      (u.value = v),
      (f.value = !0),
      d.start());
  }
  function g(v) {
    const p = document.createElement('textarea');
    (p.value = v ?? ''),
      (p.style.position = 'absolute'),
      (p.style.opacity = '0'),
      document.body.appendChild(p),
      p.select(),
      document.execCommand('copy'),
      p.remove();
  }
  function b() {
    var v, p, _;
    return (_ =
      (p =
        (v = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : v.call(document)) == null
        ? void 0
        : p.toString()) != null
      ? _
      : '';
  }
  function x(v) {
    return v === 'granted' || v === 'prompt';
  }
  return { isSupported: c, text: u, copied: f, copy: y };
}
const xo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  Eo = '__vueuse_ssr_handlers__',
  ob = rb();
function rb() {
  return Eo in xo || (xo[Eo] = xo[Eo] || {}), xo[Eo];
}
function kd(e, t) {
  return ob[e] || t;
}
function ib(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number';
}
const lb = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Tc = 'vueuse-storage';
function Od(e, t, n, s = {}) {
  var o;
  const {
      flush: r = 'pre',
      deep: i = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: a = !0,
      mergeDefaults: c = !1,
      shallow: u,
      window: f = It,
      eventFilter: d,
      onError: h = (C) => {
        console.error(C);
      },
      initOnMounted: y,
    } = s,
    g = (u ? ss : ae)(typeof t == 'function' ? t() : t);
  if (!n)
    try {
      n = kd('getDefaultStorage', () => {
        var C;
        return (C = It) == null ? void 0 : C.localStorage;
      })();
    } catch (C) {
      h(C);
    }
  if (!n) return g;
  const b = et(t),
    x = ib(b),
    v = (o = s.serializer) != null ? o : lb[x],
    { pause: p, resume: _ } = Y_(g, () => E(g.value), {
      flush: r,
      deep: i,
      eventFilter: d,
    });
  f &&
    l &&
    Rd(() => {
      lr(f, 'storage', L), lr(f, Tc, P), y && L();
    }),
    y || L();
  function S(C, H) {
    f &&
      f.dispatchEvent(
        new CustomEvent(Tc, {
          detail: { key: e, oldValue: C, newValue: H, storageArea: n },
        })
      );
  }
  function E(C) {
    try {
      const H = n.getItem(e);
      if (C == null) S(H, null), n.removeItem(e);
      else {
        const k = v.write(C);
        H !== k && (n.setItem(e, k), S(H, k));
      }
    } catch (H) {
      h(H);
    }
  }
  function R(C) {
    const H = C ? C.newValue : n.getItem(e);
    if (H == null) return a && b != null && n.setItem(e, v.write(b)), b;
    if (!C && c) {
      const k = v.read(H);
      return typeof c == 'function'
        ? c(k, b)
        : x === 'object' && !Array.isArray(k)
          ? { ...b, ...k }
          : k;
    } else return typeof H != 'string' ? H : v.read(H);
  }
  function L(C) {
    if (!(C && C.storageArea !== n)) {
      if (C && C.key == null) {
        g.value = b;
        return;
      }
      if (!(C && C.key !== e)) {
        p();
        try {
          (C == null ? void 0 : C.newValue) !== v.write(g.value) &&
            (g.value = R(C));
        } catch (H) {
          h(H);
        } finally {
          C ? pn(_) : _();
        }
      }
    }
  }
  function P(C) {
    L(C.detail);
  }
  return g;
}
function Md(e) {
  return Wn('(prefers-color-scheme: dark)', e);
}
function ab(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: o = It,
      storage: r,
      storageKey: i = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: a,
      emitAuto: c,
      disableTransition: u = !0,
    } = e,
    f = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    d = Md({ window: o }),
    h = le(() => (d.value ? 'dark' : 'light')),
    y =
      a ||
      (i == null
        ? X_(s)
        : Od(i, s, r, { window: o, listenToStorageChanges: l })),
    g = le(() => (y.value === 'auto' ? h.value : y.value)),
    b = kd('updateHTMLAttrs', (_, S, E) => {
      const R =
        typeof _ == 'string'
          ? o == null
            ? void 0
            : o.document.querySelector(_)
          : Pd(_);
      if (!R) return;
      let L;
      if (
        (u &&
          ((L = o.document.createElement('style')),
          L.appendChild(
            document.createTextNode(
              '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          o.document.head.appendChild(L)),
        S === 'class')
      ) {
        const P = E.split(/\s/g);
        Object.values(f)
          .flatMap((C) => (C || '').split(/\s/g))
          .filter(Boolean)
          .forEach((C) => {
            P.includes(C) ? R.classList.add(C) : R.classList.remove(C);
          });
      } else R.setAttribute(S, E);
      u && (o.getComputedStyle(L).opacity, document.head.removeChild(L));
    });
  function x(_) {
    var S;
    b(t, n, (S = f[_]) != null ? S : _);
  }
  function v(_) {
    e.onChanged ? e.onChanged(_, x) : x(_);
  }
  gt(g, v, { flush: 'post', immediate: !0 }), Rd(() => v(g.value));
  const p = le({
    get() {
      return c ? y.value : g.value;
    },
    set(_) {
      y.value = _;
    },
  });
  try {
    return Object.assign(p, { store: y, system: h, state: g });
  } catch {
    return p;
  }
}
function cb(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = It } = e,
    o = ab({
      ...e,
      onChanged: (l, a) => {
        var c;
        e.onChanged
          ? (c = e.onChanged) == null || c.call(e, l === 'dark', a, l)
          : a(l);
      },
      modes: { dark: t, light: n },
    }),
    r = le(() =>
      o.system ? o.system.value : Md({ window: s }).value ? 'dark' : 'light'
    );
  return le({
    get() {
      return o.value === 'dark';
    },
    set(l) {
      const a = l ? 'dark' : 'light';
      r.value === a ? (o.value = 'auto') : (o.value = a);
    },
  });
}
function ub(e, t, n = {}) {
  const { window: s = It } = n;
  return Od(e, t, s == null ? void 0 : s.localStorage, n);
}
function fb(e = {}) {
  const { controls: t = !1, interval: n = 'requestAnimationFrame' } = e,
    s = ae(new Date()),
    o = () => (s.value = new Date()),
    r =
      n === 'requestAnimationFrame'
        ? tb(o, { immediate: !0 })
        : Q_(o, n, { immediate: !0 });
  return t ? { now: s, ...r } : s;
}
const db = [
    { max: 6e4, value: 1e3, name: 'second' },
    { max: 276e4, value: 6e4, name: 'minute' },
    { max: 72e6, value: 36e5, name: 'hour' },
    { max: 5184e5, value: 864e5, name: 'day' },
    { max: 24192e5, value: 6048e5, name: 'week' },
    { max: 28512e6, value: 2592e6, name: 'month' },
    { max: Number.POSITIVE_INFINITY, value: 31536e6, name: 'year' },
  ],
  hb = {
    justNow: 'just now',
    past: (e) => (e.match(/\d/) ? `${e} ago` : e),
    future: (e) => (e.match(/\d/) ? `in ${e}` : e),
    month: (e, t) =>
      e === 1
        ? t
          ? 'last month'
          : 'next month'
        : `${e} month${e > 1 ? 's' : ''}`,
    year: (e, t) =>
      e === 1
        ? t
          ? 'last year'
          : 'next year'
        : `${e} year${e > 1 ? 's' : ''}`,
    day: (e, t) =>
      e === 1 ? (t ? 'yesterday' : 'tomorrow') : `${e} day${e > 1 ? 's' : ''}`,
    week: (e, t) =>
      e === 1
        ? t
          ? 'last week'
          : 'next week'
        : `${e} week${e > 1 ? 's' : ''}`,
    hour: (e) => `${e} hour${e > 1 ? 's' : ''}`,
    minute: (e) => `${e} minute${e > 1 ? 's' : ''}`,
    second: (e) => `${e} second${e > 1 ? 's' : ''}`,
    invalid: '',
  };
function pb(e) {
  return e.toISOString().slice(0, 10);
}
function gb(e, t = {}) {
  const { controls: n = !1, updateInterval: s = 3e4 } = t,
    { now: o, ...r } = fb({ interval: s, controls: !0 }),
    i = le(() => mb(new Date(et(e)), t, et(o)));
  return n ? { timeAgo: i, ...r } : i;
}
function mb(e, t = {}, n = Date.now()) {
  var s;
  const {
      max: o,
      messages: r = hb,
      fullDateFormatter: i = pb,
      units: l = db,
      showSecond: a = !1,
      rounding: c = 'round',
    } = t,
    u = typeof c == 'number' ? (b) => +b.toFixed(c) : Math[c],
    f = +n - +e,
    d = Math.abs(f);
  function h(b, x) {
    return u(Math.abs(b) / x.value);
  }
  function y(b, x) {
    const v = h(b, x),
      p = b > 0,
      _ = g(x.name, v, p);
    return g(p ? 'past' : 'future', _, p);
  }
  function g(b, x, v) {
    const p = r[b];
    return typeof p == 'function' ? p(x, v) : p.replace('{0}', x.toString());
  }
  if (d < 6e4 && !a) return r.justNow;
  if (typeof o == 'number' && d > o) return i(new Date(e));
  if (typeof o == 'string') {
    const b = (s = l.find((x) => x.name === o)) == null ? void 0 : s.max;
    if (b && d > b) return i(new Date(e));
  }
  for (const [b, x] of l.entries()) {
    if (h(f, x) <= 0 && l[b - 1]) return y(f, l[b - 1]);
    if (d < x.max) return y(f, x);
  }
  return r.invalid;
}
const wx = Ft({ rule: '', filepath: '' }),
  So = Ft({
    plugin: '',
    search: '',
    state: 'using',
    status: 'active',
    fixable: null,
  }),
  yb = ub(
    'eslint-config-viewer',
    {
      viewType: 'list',
      viewFileMatchType: 'configs',
      viewFilesTab: 'list',
      showSpecificOnly: !0,
    },
    { mergeDefaults: !0 }
  ),
  vb = sb(nb),
  wb = vb.smallerOrEqual('md'),
  _x = le(() => wb.value || yb.value.viewType === 'grid'),
  _b = ae([]),
  bb = ae([]);
function xb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Eb = Ld;
function Ld(e, t, n) {
  e instanceof RegExp && (e = Cc(e, n)), t instanceof RegExp && (t = Cc(t, n));
  var s = Nd(e, t, n);
  return (
    s && {
      start: s[0],
      end: s[1],
      pre: n.slice(0, s[0]),
      body: n.slice(s[0] + e.length, s[1]),
      post: n.slice(s[1] + t.length),
    }
  );
}
function Cc(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Ld.range = Nd;
function Nd(e, t, n) {
  var s,
    o,
    r,
    i,
    l,
    a = n.indexOf(e),
    c = n.indexOf(t, a + 1),
    u = a;
  if (a >= 0 && c > 0) {
    if (e === t) return [a, c];
    for (s = [], r = n.length; u >= 0 && !l; )
      u == a
        ? (s.push(u), (a = n.indexOf(e, u + 1)))
        : s.length == 1
          ? (l = [s.pop(), c])
          : ((o = s.pop()),
            o < r && ((r = o), (i = c)),
            (c = n.indexOf(t, u + 1))),
        (u = a < c && a >= 0 ? a : c);
    s.length && (l = [r, i]);
  }
  return l;
}
var Hd = Eb,
  Sb = $b,
  Id = '\0SLASH' + Math.random() + '\0',
  jd = '\0OPEN' + Math.random() + '\0',
  Cl = '\0CLOSE' + Math.random() + '\0',
  Fd = '\0COMMA' + Math.random() + '\0',
  Dd = '\0PERIOD' + Math.random() + '\0';
function ei(e) {
  return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function Tb(e) {
  return e
    .split('\\\\')
    .join(Id)
    .split('\\{')
    .join(jd)
    .split('\\}')
    .join(Cl)
    .split('\\,')
    .join(Fd)
    .split('\\.')
    .join(Dd);
}
function Cb(e) {
  return e
    .split(Id)
    .join('\\')
    .split(jd)
    .join('{')
    .split(Cl)
    .join('}')
    .split(Fd)
    .join(',')
    .split(Dd)
    .join('.');
}
function Bd(e) {
  if (!e) return [''];
  var t = [],
    n = Hd('{', '}', e);
  if (!n) return e.split(',');
  var s = n.pre,
    o = n.body,
    r = n.post,
    i = s.split(',');
  i[i.length - 1] += '{' + o + '}';
  var l = Bd(r);
  return (
    r.length && ((i[i.length - 1] += l.shift()), i.push.apply(i, l)),
    t.push.apply(t, i),
    t
  );
}
function $b(e) {
  return e
    ? (e.substr(0, 2) === '{}' && (e = '\\{\\}' + e.substr(2)),
      xs(Tb(e), !0).map(Cb))
    : [];
}
function Rb(e) {
  return '{' + e + '}';
}
function Pb(e) {
  return /^-?0\d/.test(e);
}
function Ab(e, t) {
  return e <= t;
}
function kb(e, t) {
  return e >= t;
}
function xs(e, t) {
  var n = [],
    s = Hd('{', '}', e);
  if (!s) return [e];
  var o = s.pre,
    r = s.post.length ? xs(s.post, !1) : [''];
  if (/\$$/.test(s.pre))
    for (var i = 0; i < r.length; i++) {
      var l = o + '{' + s.body + '}' + r[i];
      n.push(l);
    }
  else {
    var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),
      c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),
      u = a || c,
      f = s.body.indexOf(',') >= 0;
    if (!u && !f)
      return s.post.match(/,.*\}/)
        ? ((e = s.pre + '{' + s.body + Cl + s.post), xs(e))
        : [e];
    var d;
    if (u) d = s.body.split(/\.\./);
    else if (
      ((d = Bd(s.body)),
      d.length === 1 && ((d = xs(d[0], !1).map(Rb)), d.length === 1))
    )
      return r.map(function (C) {
        return s.pre + d[0] + C;
      });
    var h;
    if (u) {
      var y = ei(d[0]),
        g = ei(d[1]),
        b = Math.max(d[0].length, d[1].length),
        x = d.length == 3 ? Math.abs(ei(d[2])) : 1,
        v = Ab,
        p = g < y;
      p && ((x *= -1), (v = kb));
      var _ = d.some(Pb);
      h = [];
      for (var S = y; v(S, g); S += x) {
        var E;
        if (c) (E = String.fromCharCode(S)), E === '\\' && (E = '');
        else if (((E = String(S)), _)) {
          var R = b - E.length;
          if (R > 0) {
            var L = new Array(R + 1).join('0');
            S < 0 ? (E = '-' + L + E.slice(1)) : (E = L + E);
          }
        }
        h.push(E);
      }
    } else {
      h = [];
      for (var P = 0; P < d.length; P++) h.push.apply(h, xs(d[P], !1));
    }
    for (var P = 0; P < h.length; P++)
      for (var i = 0; i < r.length; i++) {
        var l = o + h[P] + r[i];
        (!t || u || l) && n.push(l);
      }
  }
  return n;
}
const Ob = xb(Sb),
  Mb = 1024 * 64,
  ar = (e) => {
    if (typeof e != 'string') throw new TypeError('invalid pattern');
    if (e.length > Mb) throw new TypeError('pattern is too long');
  },
  Lb = {
    '[:alnum:]': ['\\p{L}\\p{Nl}\\p{Nd}', !0],
    '[:alpha:]': ['\\p{L}\\p{Nl}', !0],
    '[:ascii:]': ['\\x00-\\x7f', !1],
    '[:blank:]': ['\\p{Zs}\\t', !0],
    '[:cntrl:]': ['\\p{Cc}', !0],
    '[:digit:]': ['\\p{Nd}', !0],
    '[:graph:]': ['\\p{Z}\\p{C}', !0, !0],
    '[:lower:]': ['\\p{Ll}', !0],
    '[:print:]': ['\\p{C}', !0],
    '[:punct:]': ['\\p{P}', !0],
    '[:space:]': ['\\p{Z}\\t\\r\\n\\v\\f', !0],
    '[:upper:]': ['\\p{Lu}', !0],
    '[:word:]': ['\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}', !0],
    '[:xdigit:]': ['A-Fa-f0-9', !1],
  },
  ws = (e) => e.replace(/[[\]\\-]/g, '\\$&'),
  Nb = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
  $c = (e) => e.join(''),
  Hb = (e, t) => {
    const n = t;
    if (e.charAt(n) !== '[') throw new Error('not in a brace expression');
    const s = [],
      o = [];
    let r = n + 1,
      i = !1,
      l = !1,
      a = !1,
      c = !1,
      u = n,
      f = '';
    e: for (; r < e.length; ) {
      const g = e.charAt(r);
      if ((g === '!' || g === '^') && r === n + 1) {
        (c = !0), r++;
        continue;
      }
      if (g === ']' && i && !a) {
        u = r + 1;
        break;
      }
      if (((i = !0), g === '\\' && !a)) {
        (a = !0), r++;
        continue;
      }
      if (g === '[' && !a) {
        for (const [b, [x, v, p]] of Object.entries(Lb))
          if (e.startsWith(b, r)) {
            if (f) return ['$.', !1, e.length - n, !0];
            (r += b.length), p ? o.push(x) : s.push(x), (l = l || v);
            continue e;
          }
      }
      if (((a = !1), f)) {
        g > f ? s.push(ws(f) + '-' + ws(g)) : g === f && s.push(ws(g)),
          (f = ''),
          r++;
        continue;
      }
      if (e.startsWith('-]', r + 1)) {
        s.push(ws(g + '-')), (r += 2);
        continue;
      }
      if (e.startsWith('-', r + 1)) {
        (f = g), (r += 2);
        continue;
      }
      s.push(ws(g)), r++;
    }
    if (u < r) return ['', !1, 0, !1];
    if (!s.length && !o.length) return ['$.', !1, e.length - n, !0];
    if (o.length === 0 && s.length === 1 && /^\\?.$/.test(s[0]) && !c) {
      const g = s[0].length === 2 ? s[0].slice(-1) : s[0];
      return [Nb(g), !1, u - n, !1];
    }
    const d = '[' + (c ? '^' : '') + $c(s) + ']',
      h = '[' + (c ? '' : '^') + $c(o) + ']';
    return [
      s.length && o.length ? '(' + d + '|' + h + ')' : s.length ? d : h,
      l,
      u - n,
      !0,
    ];
  },
  Es = (e, { windowsPathsNoEscape: t = !1 } = {}) =>
    t
      ? e.replace(/\[([^\/\\])\]/g, '$1')
      : e
          .replace(/((?!\\).|^)\[([^\/\\])\]/g, '$1$2')
          .replace(/\\([^\/])/g, '$1'),
  Ib = new Set(['!', '?', '+', '*', '@']),
  Rc = (e) => Ib.has(e),
  jb = '(?!(?:^|/)\\.\\.?(?:$|/))',
  To = '(?!\\.)',
  Fb = new Set(['[', '.']),
  Db = new Set(['..', '.']),
  Bb = new Set('().*{}+?[]^$\\!'),
  Wb = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
  $l = '[^/]',
  Pc = $l + '*?',
  Ac = $l + '+?';
var Te, Ae, Mt, we, Ee, tn, Tn, nn, Et, Cn, Ys, Mn, Wd, cn, Lo, Bi, Ud;
const Ie = class Ie {
  constructor(t, n, s = {}) {
    We(this, Mn);
    Se(this, 'type');
    We(this, Te);
    We(this, Ae);
    We(this, Mt, !1);
    We(this, we, []);
    We(this, Ee);
    We(this, tn);
    We(this, Tn);
    We(this, nn, !1);
    We(this, Et);
    We(this, Cn);
    We(this, Ys, !1);
    (this.type = t),
      t && xe(this, Ae, !0),
      xe(this, Ee, n),
      xe(this, Te, I(this, Ee) ? I(I(this, Ee), Te) : this),
      xe(this, Et, I(this, Te) === this ? s : I(I(this, Te), Et)),
      xe(this, Tn, I(this, Te) === this ? [] : I(I(this, Te), Tn)),
      t === '!' && !I(I(this, Te), nn) && I(this, Tn).push(this),
      xe(this, tn, I(this, Ee) ? I(I(this, Ee), we).length : 0);
  }
  get hasMagic() {
    if (I(this, Ae) !== void 0) return I(this, Ae);
    for (const t of I(this, we))
      if (typeof t != 'string' && (t.type || t.hasMagic))
        return xe(this, Ae, !0);
    return I(this, Ae);
  }
  toString() {
    return I(this, Cn) !== void 0
      ? I(this, Cn)
      : this.type
        ? xe(
            this,
            Cn,
            this.type +
              '(' +
              I(this, we)
                .map((t) => String(t))
                .join('|') +
              ')'
          )
        : xe(
            this,
            Cn,
            I(this, we)
              .map((t) => String(t))
              .join('')
          );
  }
  push(...t) {
    for (const n of t)
      if (n !== '') {
        if (typeof n != 'string' && !(n instanceof Ie && I(n, Ee) === this))
          throw new Error('invalid part: ' + n);
        I(this, we).push(n);
      }
  }
  toJSON() {
    var n;
    const t =
      this.type === null
        ? I(this, we)
            .slice()
            .map((s) => (typeof s == 'string' ? s : s.toJSON()))
        : [this.type, ...I(this, we).map((s) => s.toJSON())];
    return (
      this.isStart() && !this.type && t.unshift([]),
      this.isEnd() &&
        (this === I(this, Te) ||
          (I(I(this, Te), nn) &&
            ((n = I(this, Ee)) == null ? void 0 : n.type) === '!')) &&
        t.push({}),
      t
    );
  }
  isStart() {
    var n;
    if (I(this, Te) === this) return !0;
    if (!((n = I(this, Ee)) != null && n.isStart())) return !1;
    if (I(this, tn) === 0) return !0;
    const t = I(this, Ee);
    for (let s = 0; s < I(this, tn); s++) {
      const o = I(t, we)[s];
      if (!(o instanceof Ie && o.type === '!')) return !1;
    }
    return !0;
  }
  isEnd() {
    var n, s, o;
    if (
      I(this, Te) === this ||
      ((n = I(this, Ee)) == null ? void 0 : n.type) === '!'
    )
      return !0;
    if (!((s = I(this, Ee)) != null && s.isEnd())) return !1;
    if (!this.type) return (o = I(this, Ee)) == null ? void 0 : o.isEnd();
    const t = I(this, Ee) ? I(I(this, Ee), we).length : 0;
    return I(this, tn) === t - 1;
  }
  copyIn(t) {
    typeof t == 'string' ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const n = new Ie(this.type, t);
    for (const s of I(this, we)) n.copyIn(s);
    return n;
  }
  static fromGlob(t, n = {}) {
    var o;
    const s = new Ie(null, void 0, n);
    return Wt((o = Ie), cn, Lo).call(o, t, s, 0, n), s;
  }
  toMMPattern() {
    if (this !== I(this, Te)) return I(this, Te).toMMPattern();
    const t = this.toString(),
      [n, s, o, r] = this.toRegExpSource();
    if (
      !(
        o ||
        I(this, Ae) ||
        (I(this, Et).nocase &&
          !I(this, Et).nocaseMagicOnly &&
          t.toUpperCase() !== t.toLowerCase())
      )
    )
      return s;
    const l = (I(this, Et).nocase ? 'i' : '') + (r ? 'u' : '');
    return Object.assign(new RegExp(`^${n}$`, l), { _src: n, _glob: t });
  }
  get options() {
    return I(this, Et);
  }
  toRegExpSource(t) {
    var a;
    const n = t ?? !!I(this, Et).dot;
    if ((I(this, Te) === this && Wt(this, Mn, Wd).call(this), !this.type)) {
      const c = this.isStart() && this.isEnd(),
        u = I(this, we)
          .map((y) => {
            var p;
            const [g, b, x, v] =
              typeof y == 'string'
                ? Wt((p = Ie), cn, Ud).call(p, y, I(this, Ae), c)
                : y.toRegExpSource(t);
            return (
              xe(this, Ae, I(this, Ae) || x), xe(this, Mt, I(this, Mt) || v), g
            );
          })
          .join('');
      let f = '';
      if (
        this.isStart() &&
        typeof I(this, we)[0] == 'string' &&
        !(I(this, we).length === 1 && Db.has(I(this, we)[0]))
      ) {
        const g = Fb,
          b =
            (n && g.has(u.charAt(0))) ||
            (u.startsWith('\\.') && g.has(u.charAt(2))) ||
            (u.startsWith('\\.\\.') && g.has(u.charAt(4))),
          x = !n && !t && g.has(u.charAt(0));
        f = b ? jb : x ? To : '';
      }
      let d = '';
      return (
        this.isEnd() &&
          I(I(this, Te), nn) &&
          ((a = I(this, Ee)) == null ? void 0 : a.type) === '!' &&
          (d = '(?:$|\\/)'),
        [f + u + d, Es(u), xe(this, Ae, !!I(this, Ae)), I(this, Mt)]
      );
    }
    const s = this.type === '*' || this.type === '+',
      o = this.type === '!' ? '(?:(?!(?:' : '(?:';
    let r = Wt(this, Mn, Bi).call(this, n);
    if (this.isStart() && this.isEnd() && !r && this.type !== '!') {
      const c = this.toString();
      return (
        xe(this, we, [c]),
        (this.type = null),
        xe(this, Ae, void 0),
        [c, Es(this.toString()), !1, !1]
      );
    }
    let i = !s || t || n || !To ? '' : Wt(this, Mn, Bi).call(this, !0);
    i === r && (i = ''), i && (r = `(?:${r})(?:${i})*?`);
    let l = '';
    if (this.type === '!' && I(this, Ys))
      l = (this.isStart() && !n ? To : '') + Ac;
    else {
      const c =
        this.type === '!'
          ? '))' + (this.isStart() && !n && !t ? To : '') + Pc + ')'
          : this.type === '@'
            ? ')'
            : this.type === '?'
              ? ')?'
              : this.type === '+' && i
                ? ')'
                : this.type === '*' && i
                  ? ')?'
                  : `)${this.type}`;
      l = o + r + c;
    }
    return [l, Es(r), xe(this, Ae, !!I(this, Ae)), I(this, Mt)];
  }
};
(Te = new WeakMap()),
  (Ae = new WeakMap()),
  (Mt = new WeakMap()),
  (we = new WeakMap()),
  (Ee = new WeakMap()),
  (tn = new WeakMap()),
  (Tn = new WeakMap()),
  (nn = new WeakMap()),
  (Et = new WeakMap()),
  (Cn = new WeakMap()),
  (Ys = new WeakMap()),
  (Mn = new WeakSet()),
  (Wd = function () {
    if (this !== I(this, Te)) throw new Error('should only call on root');
    if (I(this, nn)) return this;
    this.toString(), xe(this, nn, !0);
    let t;
    for (; (t = I(this, Tn).pop()); ) {
      if (t.type !== '!') continue;
      let n = t,
        s = I(n, Ee);
      for (; s; ) {
        for (let o = I(n, tn) + 1; !s.type && o < I(s, we).length; o++)
          for (const r of I(t, we)) {
            if (typeof r == 'string')
              throw new Error('string part in extglob AST??');
            r.copyIn(I(s, we)[o]);
          }
        (n = s), (s = I(n, Ee));
      }
    }
    return this;
  }),
  (cn = new WeakSet()),
  (Lo = function (t, n, s, o) {
    var h, y;
    let r = !1,
      i = !1,
      l = -1,
      a = !1;
    if (n.type === null) {
      let g = s,
        b = '';
      for (; g < t.length; ) {
        const x = t.charAt(g++);
        if (r || x === '\\') {
          (r = !r), (b += x);
          continue;
        }
        if (i) {
          g === l + 1
            ? (x === '^' || x === '!') && (a = !0)
            : x === ']' && !(g === l + 2 && a) && (i = !1),
            (b += x);
          continue;
        } else if (x === '[') {
          (i = !0), (l = g), (a = !1), (b += x);
          continue;
        }
        if (!o.noext && Rc(x) && t.charAt(g) === '(') {
          n.push(b), (b = '');
          const v = new Ie(x, n);
          (g = Wt((h = Ie), cn, Lo).call(h, t, v, g, o)), n.push(v);
          continue;
        }
        b += x;
      }
      return n.push(b), g;
    }
    let c = s + 1,
      u = new Ie(null, n);
    const f = [];
    let d = '';
    for (; c < t.length; ) {
      const g = t.charAt(c++);
      if (r || g === '\\') {
        (r = !r), (d += g);
        continue;
      }
      if (i) {
        c === l + 1
          ? (g === '^' || g === '!') && (a = !0)
          : g === ']' && !(c === l + 2 && a) && (i = !1),
          (d += g);
        continue;
      } else if (g === '[') {
        (i = !0), (l = c), (a = !1), (d += g);
        continue;
      }
      if (Rc(g) && t.charAt(c) === '(') {
        u.push(d), (d = '');
        const b = new Ie(g, u);
        u.push(b), (c = Wt((y = Ie), cn, Lo).call(y, t, b, c, o));
        continue;
      }
      if (g === '|') {
        u.push(d), (d = ''), f.push(u), (u = new Ie(null, n));
        continue;
      }
      if (g === ')')
        return (
          d === '' && I(n, we).length === 0 && xe(n, Ys, !0),
          u.push(d),
          (d = ''),
          n.push(...f, u),
          c
        );
      d += g;
    }
    return (
      (n.type = null), xe(n, Ae, void 0), xe(n, we, [t.substring(s - 1)]), c
    );
  }),
  (Bi = function (t) {
    return I(this, we)
      .map((n) => {
        if (typeof n == 'string')
          throw new Error('string type in extglob ast??');
        const [s, o, r, i] = n.toRegExpSource(t);
        return xe(this, Mt, I(this, Mt) || i), s;
      })
      .filter((n) => !(this.isStart() && this.isEnd()) || !!n)
      .join('|');
  }),
  (Ud = function (t, n, s = !1) {
    let o = !1,
      r = '',
      i = !1;
    for (let l = 0; l < t.length; l++) {
      const a = t.charAt(l);
      if (o) {
        (o = !1), (r += (Bb.has(a) ? '\\' : '') + a);
        continue;
      }
      if (a === '\\') {
        l === t.length - 1 ? (r += '\\\\') : (o = !0);
        continue;
      }
      if (a === '[') {
        const [c, u, f, d] = Hb(t, l);
        if (f) {
          (r += c), (i = i || u), (l += f - 1), (n = n || d);
          continue;
        }
      }
      if (a === '*') {
        s && t === '*' ? (r += Ac) : (r += Pc), (n = !0);
        continue;
      }
      if (a === '?') {
        (r += $l), (n = !0);
        continue;
      }
      r += Wb(a);
    }
    return [r, Es(t), !!n, i];
  }),
  We(Ie, cn);
let cr = Ie;
const Ub = (e, { windowsPathsNoEscape: t = !1 } = {}) =>
  t ? e.replace(/[?*()[\]]/g, '[$&]') : e.replace(/[?*()[\]\\]/g, '\\$&');
var ti = {};
const De = (e, t, n = {}) => (
    ar(t), !n.nocomment && t.charAt(0) === '#' ? !1 : new oo(t, n).match(e)
  ),
  Vb = /^\*+([^+@!?\*\[\(]*)$/,
  zb = (e) => (t) => !t.startsWith('.') && t.endsWith(e),
  qb = (e) => (t) => t.endsWith(e),
  Kb = (e) => (
    (e = e.toLowerCase()),
    (t) => !t.startsWith('.') && t.toLowerCase().endsWith(e)
  ),
  Gb = (e) => ((e = e.toLowerCase()), (t) => t.toLowerCase().endsWith(e)),
  Jb = /^\*+\.\*+$/,
  Xb = (e) => !e.startsWith('.') && e.includes('.'),
  Yb = (e) => e !== '.' && e !== '..' && e.includes('.'),
  Qb = /^\.\*+$/,
  Zb = (e) => e !== '.' && e !== '..' && e.startsWith('.'),
  e0 = /^\*+$/,
  t0 = (e) => e.length !== 0 && !e.startsWith('.'),
  n0 = (e) => e.length !== 0 && e !== '.' && e !== '..',
  s0 = /^\?+([^+@!?\*\[\(]*)?$/,
  o0 = ([e, t = '']) => {
    const n = Vd([e]);
    return t
      ? ((t = t.toLowerCase()), (s) => n(s) && s.toLowerCase().endsWith(t))
      : n;
  },
  r0 = ([e, t = '']) => {
    const n = zd([e]);
    return t
      ? ((t = t.toLowerCase()), (s) => n(s) && s.toLowerCase().endsWith(t))
      : n;
  },
  i0 = ([e, t = '']) => {
    const n = zd([e]);
    return t ? (s) => n(s) && s.endsWith(t) : n;
  },
  l0 = ([e, t = '']) => {
    const n = Vd([e]);
    return t ? (s) => n(s) && s.endsWith(t) : n;
  },
  Vd = ([e]) => {
    const t = e.length;
    return (n) => n.length === t && !n.startsWith('.');
  },
  zd = ([e]) => {
    const t = e.length;
    return (n) => n.length === t && n !== '.' && n !== '..';
  },
  qd =
    typeof process == 'object' && process
      ? (typeof ti == 'object' && ti && ti.__MINIMATCH_TESTING_PLATFORM__) ||
        process.platform
      : 'posix',
  kc = { win32: { sep: '\\' }, posix: { sep: '/' } },
  a0 = qd === 'win32' ? kc.win32.sep : kc.posix.sep;
De.sep = a0;
const rt = Symbol('globstar **');
De.GLOBSTAR = rt;
const c0 = '[^/]',
  u0 = c0 + '*?',
  f0 = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?',
  d0 = '(?:(?!(?:\\/|^)\\.).)*?',
  h0 =
    (e, t = {}) =>
    (n) =>
      De(n, e, t);
De.filter = h0;
const ot = (e, t = {}) => Object.assign({}, e, t),
  p0 = (e) => {
    if (!e || typeof e != 'object' || !Object.keys(e).length) return De;
    const t = De;
    return Object.assign((s, o, r = {}) => t(s, o, ot(e, r)), {
      Minimatch: class extends t.Minimatch {
        constructor(o, r = {}) {
          super(o, ot(e, r));
        }
        static defaults(o) {
          return t.defaults(ot(e, o)).Minimatch;
        }
      },
      AST: class extends t.AST {
        constructor(o, r, i = {}) {
          super(o, r, ot(e, i));
        }
        static fromGlob(o, r = {}) {
          return t.AST.fromGlob(o, ot(e, r));
        }
      },
      unescape: (s, o = {}) => t.unescape(s, ot(e, o)),
      escape: (s, o = {}) => t.escape(s, ot(e, o)),
      filter: (s, o = {}) => t.filter(s, ot(e, o)),
      defaults: (s) => t.defaults(ot(e, s)),
      makeRe: (s, o = {}) => t.makeRe(s, ot(e, o)),
      braceExpand: (s, o = {}) => t.braceExpand(s, ot(e, o)),
      match: (s, o, r = {}) => t.match(s, o, ot(e, r)),
      sep: t.sep,
      GLOBSTAR: rt,
    });
  };
De.defaults = p0;
const Kd = (e, t = {}) => (
  ar(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : Ob(e)
);
De.braceExpand = Kd;
const g0 = (e, t = {}) => new oo(e, t).makeRe();
De.makeRe = g0;
const m0 = (e, t, n = {}) => {
  const s = new oo(t, n);
  return (
    (e = e.filter((o) => s.match(o))),
    s.options.nonull && !e.length && e.push(t),
    e
  );
};
De.match = m0;
const Oc = /[?*]|[+@!]\(.*?\)|\[|\]/,
  y0 = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
class oo {
  constructor(t, n = {}) {
    Se(this, 'options');
    Se(this, 'set');
    Se(this, 'pattern');
    Se(this, 'windowsPathsNoEscape');
    Se(this, 'nonegate');
    Se(this, 'negate');
    Se(this, 'comment');
    Se(this, 'empty');
    Se(this, 'preserveMultipleSlashes');
    Se(this, 'partial');
    Se(this, 'globSet');
    Se(this, 'globParts');
    Se(this, 'nocase');
    Se(this, 'isWindows');
    Se(this, 'platform');
    Se(this, 'windowsNoMagicRoot');
    Se(this, 'regexp');
    ar(t),
      (n = n || {}),
      (this.options = n),
      (this.pattern = t),
      (this.platform = n.platform || qd),
      (this.isWindows = this.platform === 'win32'),
      (this.windowsPathsNoEscape =
        !!n.windowsPathsNoEscape || n.allowWindowsEscape === !1),
      this.windowsPathsNoEscape &&
        (this.pattern = this.pattern.replace(/\\/g, '/')),
      (this.preserveMultipleSlashes = !!n.preserveMultipleSlashes),
      (this.regexp = null),
      (this.negate = !1),
      (this.nonegate = !!n.nonegate),
      (this.comment = !1),
      (this.empty = !1),
      (this.partial = !!n.partial),
      (this.nocase = !!this.options.nocase),
      (this.windowsNoMagicRoot =
        n.windowsNoMagicRoot !== void 0
          ? n.windowsNoMagicRoot
          : !!(this.isWindows && this.nocase)),
      (this.globSet = []),
      (this.globParts = []),
      (this.set = []),
      this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) return !0;
    for (const t of this.set)
      for (const n of t) if (typeof n != 'string') return !0;
    return !1;
  }
  debug(...t) {}
  make() {
    const t = this.pattern,
      n = this.options;
    if (!n.nocomment && t.charAt(0) === '#') {
      this.comment = !0;
      return;
    }
    if (!t) {
      this.empty = !0;
      return;
    }
    this.parseNegate(),
      (this.globSet = [...new Set(this.braceExpand())]),
      n.debug && (this.debug = (...r) => console.error(...r)),
      this.debug(this.pattern, this.globSet);
    const s = this.globSet.map((r) => this.slashSplit(r));
    (this.globParts = this.preprocess(s)),
      this.debug(this.pattern, this.globParts);
    let o = this.globParts.map((r, i, l) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const a =
            r[0] === '' &&
            r[1] === '' &&
            (r[2] === '?' || !Oc.test(r[2])) &&
            !Oc.test(r[3]),
          c = /^[a-z]:/i.test(r[0]);
        if (a)
          return [...r.slice(0, 4), ...r.slice(4).map((u) => this.parse(u))];
        if (c) return [r[0], ...r.slice(1).map((u) => this.parse(u))];
      }
      return r.map((a) => this.parse(a));
    });
    if (
      (this.debug(this.pattern, o),
      (this.set = o.filter((r) => r.indexOf(!1) === -1)),
      this.isWindows)
    )
      for (let r = 0; r < this.set.length; r++) {
        const i = this.set[r];
        i[0] === '' &&
          i[1] === '' &&
          this.globParts[r][2] === '?' &&
          typeof i[3] == 'string' &&
          /^[a-z]:$/i.test(i[3]) &&
          (i[2] = '?');
      }
    this.debug(this.pattern, this.set);
  }
  preprocess(t) {
    if (this.options.noglobstar)
      for (let s = 0; s < t.length; s++)
        for (let o = 0; o < t[s].length; o++)
          t[s][o] === '**' && (t[s][o] = '*');
    const { optimizationLevel: n = 1 } = this.options;
    return (
      n >= 2
        ? ((t = this.firstPhasePreProcess(t)),
          (t = this.secondPhasePreProcess(t)))
        : n >= 1
          ? (t = this.levelOneOptimize(t))
          : (t = this.adjascentGlobstarOptimize(t)),
      t
    );
  }
  adjascentGlobstarOptimize(t) {
    return t.map((n) => {
      let s = -1;
      for (; (s = n.indexOf('**', s + 1)) !== -1; ) {
        let o = s;
        for (; n[o + 1] === '**'; ) o++;
        o !== s && n.splice(s, o - s);
      }
      return n;
    });
  }
  levelOneOptimize(t) {
    return t.map(
      (n) => (
        (n = n.reduce((s, o) => {
          const r = s[s.length - 1];
          return o === '**' && r === '**'
            ? s
            : o === '..' && r && r !== '..' && r !== '.' && r !== '**'
              ? (s.pop(), s)
              : (s.push(o), s);
        }, [])),
        n.length === 0 ? [''] : n
      )
    );
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let n = !1;
    do {
      if (((n = !1), !this.preserveMultipleSlashes)) {
        for (let o = 1; o < t.length - 1; o++) {
          const r = t[o];
          (o === 1 && r === '' && t[0] === '') ||
            ((r === '.' || r === '') && ((n = !0), t.splice(o, 1), o--));
        }
        t[0] === '.' &&
          t.length === 2 &&
          (t[1] === '.' || t[1] === '') &&
          ((n = !0), t.pop());
      }
      let s = 0;
      for (; (s = t.indexOf('..', s + 1)) !== -1; ) {
        const o = t[s - 1];
        o &&
          o !== '.' &&
          o !== '..' &&
          o !== '**' &&
          ((n = !0), t.splice(s - 1, 2), (s -= 2));
      }
    } while (n);
    return t.length === 0 ? [''] : t;
  }
  firstPhasePreProcess(t) {
    let n = !1;
    do {
      n = !1;
      for (let s of t) {
        let o = -1;
        for (; (o = s.indexOf('**', o + 1)) !== -1; ) {
          let i = o;
          for (; s[i + 1] === '**'; ) i++;
          i > o && s.splice(o + 1, i - o);
          let l = s[o + 1];
          const a = s[o + 2],
            c = s[o + 3];
          if (
            l !== '..' ||
            !a ||
            a === '.' ||
            a === '..' ||
            !c ||
            c === '.' ||
            c === '..'
          )
            continue;
          (n = !0), s.splice(o, 1);
          const u = s.slice(0);
          (u[o] = '**'), t.push(u), o--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < s.length - 1; i++) {
            const l = s[i];
            (i === 1 && l === '' && s[0] === '') ||
              ((l === '.' || l === '') && ((n = !0), s.splice(i, 1), i--));
          }
          s[0] === '.' &&
            s.length === 2 &&
            (s[1] === '.' || s[1] === '') &&
            ((n = !0), s.pop());
        }
        let r = 0;
        for (; (r = s.indexOf('..', r + 1)) !== -1; ) {
          const i = s[r - 1];
          if (i && i !== '.' && i !== '..' && i !== '**') {
            n = !0;
            const a = r === 1 && s[r + 1] === '**' ? ['.'] : [];
            s.splice(r - 1, 2, ...a), s.length === 0 && s.push(''), (r -= 2);
          }
        }
      }
    } while (n);
    return t;
  }
  secondPhasePreProcess(t) {
    for (let n = 0; n < t.length - 1; n++)
      for (let s = n + 1; s < t.length; s++) {
        const o = this.partsMatch(t[n], t[s], !this.preserveMultipleSlashes);
        if (o) {
          (t[n] = []), (t[s] = o);
          break;
        }
      }
    return t.filter((n) => n.length);
  }
  partsMatch(t, n, s = !1) {
    let o = 0,
      r = 0,
      i = [],
      l = '';
    for (; o < t.length && r < n.length; )
      if (t[o] === n[r]) i.push(l === 'b' ? n[r] : t[o]), o++, r++;
      else if (s && t[o] === '**' && n[r] === t[o + 1]) i.push(t[o]), o++;
      else if (s && n[r] === '**' && t[o] === n[r + 1]) i.push(n[r]), r++;
      else if (
        t[o] === '*' &&
        n[r] &&
        (this.options.dot || !n[r].startsWith('.')) &&
        n[r] !== '**'
      ) {
        if (l === 'b') return !1;
        (l = 'a'), i.push(t[o]), o++, r++;
      } else if (
        n[r] === '*' &&
        t[o] &&
        (this.options.dot || !t[o].startsWith('.')) &&
        t[o] !== '**'
      ) {
        if (l === 'a') return !1;
        (l = 'b'), i.push(n[r]), o++, r++;
      } else return !1;
    return t.length === n.length && i;
  }
  parseNegate() {
    if (this.nonegate) return;
    const t = this.pattern;
    let n = !1,
      s = 0;
    for (let o = 0; o < t.length && t.charAt(o) === '!'; o++) (n = !n), s++;
    s && (this.pattern = t.slice(s)), (this.negate = n);
  }
  matchOne(t, n, s = !1) {
    const o = this.options;
    if (this.isWindows) {
      const g = typeof t[0] == 'string' && /^[a-z]:$/i.test(t[0]),
        b =
          !g &&
          t[0] === '' &&
          t[1] === '' &&
          t[2] === '?' &&
          /^[a-z]:$/i.test(t[3]),
        x = typeof n[0] == 'string' && /^[a-z]:$/i.test(n[0]),
        v =
          !x &&
          n[0] === '' &&
          n[1] === '' &&
          n[2] === '?' &&
          typeof n[3] == 'string' &&
          /^[a-z]:$/i.test(n[3]),
        p = b ? 3 : g ? 0 : void 0,
        _ = v ? 3 : x ? 0 : void 0;
      if (typeof p == 'number' && typeof _ == 'number') {
        const [S, E] = [t[p], n[_]];
        S.toLowerCase() === E.toLowerCase() &&
          ((n[_] = S), _ > p ? (n = n.slice(_)) : p > _ && (t = t.slice(p)));
      }
    }
    const { optimizationLevel: r = 1 } = this.options;
    r >= 2 && (t = this.levelTwoFileOptimize(t)),
      this.debug('matchOne', this, { file: t, pattern: n }),
      this.debug('matchOne', t.length, n.length);
    for (
      var i = 0, l = 0, a = t.length, c = n.length;
      i < a && l < c;
      i++, l++
    ) {
      this.debug('matchOne loop');
      var u = n[l],
        f = t[i];
      if ((this.debug(n, u, f), u === !1)) return !1;
      if (u === rt) {
        this.debug('GLOBSTAR', [n, u, f]);
        var d = i,
          h = l + 1;
        if (h === c) {
          for (this.debug('** at the end'); i < a; i++)
            if (
              t[i] === '.' ||
              t[i] === '..' ||
              (!o.dot && t[i].charAt(0) === '.')
            )
              return !1;
          return !0;
        }
        for (; d < a; ) {
          var y = t[d];
          if (
            (this.debug(
              `
globstar while`,
              t,
              d,
              n,
              h,
              y
            ),
            this.matchOne(t.slice(d), n.slice(h), s))
          )
            return this.debug('globstar found match!', d, a, y), !0;
          if (y === '.' || y === '..' || (!o.dot && y.charAt(0) === '.')) {
            this.debug('dot detected!', t, d, n, h);
            break;
          }
          this.debug('globstar swallow a segment, and continue'), d++;
        }
        return !!(
          s &&
          (this.debug(
            `
>>> no match, partial?`,
            t,
            d,
            n,
            h
          ),
          d === a)
        );
      }
      let g;
      if (
        (typeof u == 'string'
          ? ((g = f === u), this.debug('string match', u, f, g))
          : ((g = u.test(f)), this.debug('pattern match', u, f, g)),
        !g)
      )
        return !1;
    }
    if (i === a && l === c) return !0;
    if (i === a) return s;
    if (l === c) return i === a - 1 && t[i] === '';
    throw new Error('wtf?');
  }
  braceExpand() {
    return Kd(this.pattern, this.options);
  }
  parse(t) {
    ar(t);
    const n = this.options;
    if (t === '**') return rt;
    if (t === '') return '';
    let s,
      o = null;
    (s = t.match(e0))
      ? (o = n.dot ? n0 : t0)
      : (s = t.match(Vb))
        ? (o = (n.nocase ? (n.dot ? Gb : Kb) : n.dot ? qb : zb)(s[1]))
        : (s = t.match(s0))
          ? (o = (n.nocase ? (n.dot ? r0 : o0) : n.dot ? i0 : l0)(s))
          : (s = t.match(Jb))
            ? (o = n.dot ? Yb : Xb)
            : (s = t.match(Qb)) && (o = Zb);
    const r = cr.fromGlob(t, this.options).toMMPattern();
    return (
      o &&
        typeof r == 'object' &&
        Reflect.defineProperty(r, 'test', { value: o }),
      r
    );
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const t = this.set;
    if (!t.length) return (this.regexp = !1), this.regexp;
    const n = this.options,
      s = n.noglobstar ? u0 : n.dot ? f0 : d0,
      o = new Set(n.nocase ? ['i'] : []);
    let r = t
      .map((a) => {
        const c = a.map((u) => {
          if (u instanceof RegExp) for (const f of u.flags.split('')) o.add(f);
          return typeof u == 'string' ? y0(u) : u === rt ? rt : u._src;
        });
        return (
          c.forEach((u, f) => {
            const d = c[f + 1],
              h = c[f - 1];
            u !== rt ||
              h === rt ||
              (h === void 0
                ? d !== void 0 && d !== rt
                  ? (c[f + 1] = '(?:\\/|' + s + '\\/)?' + d)
                  : (c[f] = s)
                : d === void 0
                  ? (c[f - 1] = h + '(?:\\/|' + s + ')?')
                  : d !== rt &&
                    ((c[f - 1] = h + '(?:\\/|\\/' + s + '\\/)' + d),
                    (c[f + 1] = rt)));
          }),
          c.filter((u) => u !== rt).join('/')
        );
      })
      .join('|');
    const [i, l] = t.length > 1 ? ['(?:', ')'] : ['', ''];
    (r = '^' + i + r + l + '$'), this.negate && (r = '^(?!' + r + ').+$');
    try {
      this.regexp = new RegExp(r, [...o].join(''));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes
      ? t.split('/')
      : this.isWindows && /^\/\/[^\/]+/.test(t)
        ? ['', ...t.split(/\/+/)]
        : t.split(/\/+/);
  }
  match(t, n = this.partial) {
    if ((this.debug('match', t, this.pattern), this.comment)) return !1;
    if (this.empty) return t === '';
    if (t === '/' && n) return !0;
    const s = this.options;
    this.isWindows && (t = t.split('\\').join('/'));
    const o = this.slashSplit(t);
    this.debug(this.pattern, 'split', o);
    const r = this.set;
    this.debug(this.pattern, 'set', r);
    let i = o[o.length - 1];
    if (!i) for (let l = o.length - 2; !i && l >= 0; l--) i = o[l];
    for (let l = 0; l < r.length; l++) {
      const a = r[l];
      let c = o;
      if ((s.matchBase && a.length === 1 && (c = [i]), this.matchOne(c, a, n)))
        return s.flipNegate ? !0 : !this.negate;
    }
    return s.flipNegate ? !1 : this.negate;
  }
  static defaults(t) {
    return De.defaults(t).Minimatch;
  }
}
De.AST = cr;
De.Minimatch = oo;
De.escape = Ub;
De.unescape = Es;
const v0 = { dot: !0 },
  Mc = new Map();
function w0(e, t) {
  let n = Mc.get(t);
  return n || ((n = new oo(t, v0)), Mc.set(t, n)), n.match(e);
}
function ni(e, t) {
  return (Array.isArray(t) ? t : [t])
    .flat()
    .filter((s) => w0(e, s))
    .flat();
}
const _0 = new Set(['name', 'index']);
function Gd(e) {
  const t = Object.keys(e).filter((n) => !_0.has(n));
  return t.length === 1 && t[0] === 'ignores';
}
function Jd(e) {
  return (!e.files && !e.ignores) || Gd(e);
}
function Ex(e, t, n) {
  const s = n.flatMap((r) => ni(e, r.ignores));
  if (s.length) return { filepath: e, globs: s, configs: [] };
  const o = { filepath: e, globs: [], configs: [] };
  return (
    t.forEach((r, i) => {
      const l = ni(e, r.files || []),
        a = ni(e, r.ignores || []);
      !a.length && l.length && o.configs.push(i), o.globs.push(...l, ...a);
    }),
    o
  );
}
function b0(e) {
  switch (Array.isArray(e) ? e[0] : e) {
    case 0:
    case 'off':
      return 'off';
    case 1:
    case 'warn':
      return 'warn';
    case 2:
    case 'error':
      return 'error';
  }
}
function x0(e) {
  if (Array.isArray(e)) return e.slice(1);
}
const Ss = '[ESLint Config Inspector]',
  Xd = ae({ rules: {}, configs: [], meta: {} }),
  Wi = ae(!0),
  No = ae(!1),
  ur = ae();
function E0(e) {
  return 'error' in e;
}
async function Lc(e) {
  No.value = !0;
  const t = await mf('/api/payload.json', { baseURL: e });
  if (E0(t)) {
    (ur.value = t), (Wi.value = !1), (No.value = !1);
    return;
  }
  return (
    (ur.value = void 0),
    (Xd.value = t),
    (Wi.value = !1),
    (No.value = !1),
    console.log(Ss, 'Config payload', t),
    t
  );
}
let Nc;
function S0(e) {
  Nc ||
    (Nc = Lc(e).then((t) => {
      if (t) {
        if (typeof t.meta.wsPort == 'number') {
          const n = new WebSocket(`ws://${location.hostname}:${t.meta.wsPort}`);
          n.addEventListener('message', async (s) => {
            console.log(Ss, 'WebSocket message', s.data),
              JSON.parse(s.data).type === 'config-change' && Lc(e);
          }),
            n.addEventListener('open', () => {
              console.log(Ss, 'WebSocket connected');
            }),
            n.addEventListener('close', () => {
              console.log(Ss, 'WebSocket closed');
            }),
            n.addEventListener('error', (s) => {
              console.error(Ss, 'WebSocket error', s);
            });
        }
        return t;
      }
    }));
}
const Jt = le(() => Object.freeze(T0(Xd.value)));
function Sx(e) {
  return Jt.value.rules[e];
}
function T0(e) {
  const t = new Map(),
    n = new Map();
  return (
    e.configs.forEach((s, o) => {
      var r, i;
      s.rules &&
        Object.entries(s.rules).forEach(([l, a]) => {
          const c = b0(a);
          if (c) {
            const u = x0(a);
            t.has(l) || t.set(l, []),
              t.get(l).push({ name: l, configIndex: o, level: c, options: u });
          }
        });
      for (const l of ((r = s.files) == null ? void 0 : r.flat()) || [])
        n.has(l) || n.set(l, []), n.get(l).push(s);
      for (const l of ((i = s.ignores) == null ? void 0 : i.flat()) || [])
        n.has(l) || n.set(l, []), n.get(l).push(s);
    }),
    (_b.value =
      e.configs.length >= 10
        ? e.configs.map(() => !1)
        : e.configs.map(() => !0)),
    {
      ...e,
      configsIgnoreOnly: e.configs.filter((s) => Gd(s)),
      configsGeneral: e.configs.filter((s) => Jd(s)),
      ruleToState: t,
      globToConfigs: n,
      filesResolved: C0(e),
    }
  );
}
function C0(e) {
  if (!e.files) return;
  const t = e.configs.filter((c) => Jd(c)).map((c) => c.index),
    n = [],
    s = new Map(),
    o = new Map(),
    r = new Map(),
    i = new Map(),
    l = new Map();
  for (const c of e.files) {
    n.push(c.filepath);
    for (const h of c.globs)
      s.has(h) || s.set(h, new Set()),
        s.get(h).add(c.filepath),
        o.has(c.filepath) || o.set(c.filepath, new Set()),
        o.get(c.filepath).add(h);
    for (const h of c.configs)
      i.has(h) || i.set(h, new Set()),
        i.get(h).add(c.filepath),
        r.has(c.filepath) || r.set(c.filepath, new Set()),
        r.get(c.filepath).add(h);
    const u = c.configs.filter((h) => !t.includes(h)),
      f = u.join('-');
    l.has(f) ||
      l.set(f, {
        id: f,
        files: [],
        configs: u.map((h) => e.configs[h]),
        globs: new Set(),
      });
    const d = l.get(f);
    d.files.push(c.filepath), c.globs.forEach((h) => d.globs.add(h));
  }
  const a = Array.from(l.values());
  return (
    (bb.value = a.map(() => !0)),
    {
      list: n,
      globToFiles: s,
      fileToGlobs: o,
      fileToConfigs: new Map(
        Array.from(r.entries()).map(([c, u]) => [
          c,
          Array.from(u)
            .sort()
            .map((f) => e.configs[f]),
        ])
      ),
      configToFiles: i,
      groups: a,
    }
  );
}
const Hc = cb();
function $0() {
  Hc.value = !Hc.value;
}
const R0 = { key: 0, flex: '~ gap-1 items-center', my1: '', 'text-sm': '' },
  P0 = { 'font-mono': '', op35: '' },
  A0 = { flex: '~ gap-1 items-center wrap', 'text-sm': '' },
  k0 = oe('span', { op50: '' }, 'Composed with', -1),
  O0 = { 'font-bold': '' },
  M0 = oe('span', { op50: '' }, 'config items, updated', -1),
  L0 = { op75: '' },
  N0 = {
    key: 0,
    flex: '~ gap-2 items-center',
    ml2: '',
    'animate-pulse': '',
    'text-green': '',
  },
  H0 = oe(
    'div',
    { 'i-svg-spinners-90-ring-with-bg': '', 'flex-none': '', 'text-sm': '' },
    null,
    -1
  ),
  I0 = { flex: '~ gap-3 items-center wrap', py4: '' },
  j0 = oe('div', { 'i-ph-stack-duotone': '', 'flex-none': '' }, null, -1),
  F0 = oe('div', { 'i-ph-list-dashes-duotone': '', 'flex-none': '' }, null, -1),
  D0 = oe('div', { 'i-ph-files-duotone': '', 'flex-none': '' }, null, -1),
  B0 = oe(
    'div',
    { border: 'l base', ml3: '', mr2: '', 'h-5': '', 'w-1px': '' },
    null,
    -1
  ),
  W0 = oe('div', { 'i-ph-warning-duotone': '', 'flex-none': '' }, null, -1),
  U0 = tt({
    __name: 'NavBar',
    setup(e) {
      const t = gb(() => Jt.value.meta.lastUpdate),
        n = le(() => Object.values(Jt.value.rules)),
        s = le(() =>
          n.value.filter((i) => {
            var l;
            return (
              i.deprecated &&
              ((l = Jt.value.ruleToState.get(i.name)) == null
                ? void 0
                : l.some((a) => a.level !== 'off'))
            );
          })
        ),
        o = Fe();
      function r() {
        (So.status = 'deprecated'),
          (So.plugin = ''),
          (So.state = 'using'),
          (So.search = ''),
          o.currentRoute.value.path !== '/rules' && o.push('/rules');
      }
      return (i, l) => {
        const a = Sd,
          c = F_;
        return (
          pe(),
          je(
            Oe,
            null,
            [
              ue(a, { 'text-3xl': '', 'font-200': '' }),
              se(Jt).meta.configPath
                ? (pe(),
                  je('div', R0, [
                    oe('span', P0, sn(se(Jt).meta.configPath), 1),
                  ]))
                : Sn('', !0),
              oe('div', A0, [
                k0,
                oe('span', O0, sn(se(Jt).configs.length), 1),
                M0,
                oe('span', L0, sn(se(t)), 1),
                se(No)
                  ? (pe(), je('div', N0, [H0, Ye(' Fetching updates... ')]))
                  : Sn('', !0),
              ]),
              oe('div', I0, [
                ue(
                  c,
                  {
                    to: '/configs',
                    px3: '',
                    py1: '',
                    'text-base': '',
                    'btn-action': '',
                    'active-class': 'btn-action-active',
                  },
                  { default: Tt(() => [j0, Ye(' Configs ')]), _: 1 }
                ),
                ue(
                  c,
                  {
                    to: '/rules',
                    px3: '',
                    py1: '',
                    'text-base': '',
                    'btn-action': '',
                    'active-class': 'btn-action-active',
                  },
                  { default: Tt(() => [F0, Ye(' Rules ')]), _: 1 }
                ),
                se(Jt).filesResolved
                  ? (pe(),
                    Xe(
                      c,
                      {
                        key: 0,
                        to: '/files',
                        px3: '',
                        py1: '',
                        'text-base': '',
                        'btn-action': '',
                        'active-class': 'btn-action-active',
                      },
                      { default: Tt(() => [D0, Ye(' Files ')]), _: 1 }
                    ))
                  : Sn('', !0),
                oe('button', {
                  title: 'Toggle Dark Mode',
                  'i-ph-sun-dim-duotone': '',
                  'dark:i-ph-moon-stars-duotone': '',
                  ml1: '',
                  'text-xl': '',
                  op50: '',
                  'hover:op75': '',
                  onClick: l[0] || (l[0] = (u) => se($0)()),
                }),
                ue(c, {
                  href: 'https://github.com/eslint/config-inspector',
                  target: '_blank',
                  'i-carbon-logo-github': '',
                  'text-lg': '',
                  op50: '',
                  'hover:op75': '',
                }),
                s.value.length
                  ? (pe(),
                    je(
                      Oe,
                      { key: 1 },
                      [
                        B0,
                        oe(
                          'button',
                          {
                            to: '/configs',
                            border: '~ orange/20 rounded-full',
                            flex: '~ gap-2 items-center',
                            'bg-orange:5': '',
                            px3: '',
                            py1: '',
                            'text-sm': '',
                            'text-orange': '',
                            'hover:bg-orange:10': '',
                            onClick: r,
                          },
                          [
                            W0,
                            Ye(
                              ' Using ' +
                                sn(s.value.length) +
                                ' deprecated rules ',
                              1
                            ),
                          ]
                        ),
                      ],
                      64
                    ))
                  : Sn('', !0),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  V0 = tt({
    props: {
      vnode: { type: Object, required: !0 },
      route: { type: Object, required: !0 },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean,
    },
    setup(e) {
      const t = e.renderKey,
        n = e.route,
        s = {};
      for (const o in e.route)
        Object.defineProperty(s, o, {
          get: () => (t === e.renderKey ? e.route[o] : n[o]),
        });
      return Qn(xr, Lt(s)), () => Qe(e.vnode, { ref: e.vnodeRef });
    },
  }),
  z0 = tt({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      const o = be(),
        r = ae(),
        i = Ze(xr, null);
      let l;
      s({ pageRef: r });
      const a = Ze(oy, null);
      let c;
      const u = o.deferHydration();
      if (o.isHydrating) {
        const f = o.hooks.hookOnce('app:error', u);
        Fe().beforeEach(f);
      }
      return (
        e.pageKey &&
          gt(
            () => e.pageKey,
            (f, d) => {
              f !== d && o.callHook('page:loading:start');
            }
          ),
        () =>
          Qe(
            Xf,
            { name: e.name, route: e.route, ...t },
            {
              default: (f) => {
                const d = K0(i, f.route, f.Component),
                  h = i && i.matched.length === f.route.matched.length;
                if (!f.Component) {
                  if (c && !h) return c;
                  u();
                  return;
                }
                if (c && a && !a.isCurrent(f.route)) return c;
                if (d && i && (!a || (a != null && a.isCurrent(i))))
                  return h ? c : null;
                const y = Li(f, e.pageKey);
                !o.isHydrating &&
                  !G0(i, f.route, f.Component) &&
                  l === y &&
                  o.callHook('page:loading:end'),
                  (l = y);
                const g = !!(e.transition ?? f.route.meta.pageTransition ?? Ei),
                  b =
                    g &&
                    q0(
                      [
                        e.transition,
                        f.route.meta.pageTransition,
                        Ei,
                        {
                          onAfterLeave: () => {
                            o.callHook('page:transition:finish', f.Component);
                          },
                        },
                      ].filter(Boolean)
                    ),
                  x = e.keepalive ?? f.route.meta.keepalive ?? Dm;
                return (
                  (c = gw(
                    fl,
                    g && b,
                    fw(
                      x,
                      Qe(
                        Ju,
                        {
                          suspensible: !0,
                          onPending: () =>
                            o.callHook('page:start', f.Component),
                          onResolve: () => {
                            pn(() =>
                              o
                                .callHook('page:finish', f.Component)
                                .then(() => o.callHook('page:loading:end'))
                                .finally(u)
                            );
                          },
                        },
                        {
                          default: () => {
                            const v = Qe(V0, {
                              key: y || void 0,
                              vnode: n.default
                                ? Qe(Oe, void 0, n.default(f))
                                : f.Component,
                              route: f.route,
                              renderKey: y || void 0,
                              trackRootNodes: g,
                              vnodeRef: r,
                            });
                            return (
                              x &&
                                (v.type.name =
                                  f.Component.type.name ||
                                  f.Component.type.__name ||
                                  'RouteProvider'),
                              v
                            );
                          },
                        }
                      )
                    )
                  ).default()),
                  c
                );
              },
            }
          )
      );
    },
  });
function q0(e) {
  const t = e.map((n) => ({
    ...n,
    onAfterLeave: n.onAfterLeave ? _l(n.onAfterLeave) : void 0,
  }));
  return Sf(...t);
}
function K0(e, t, n) {
  if (!e) return !1;
  const s = t.matched.findIndex((o) => {
    var r;
    return (
      ((r = o.components) == null ? void 0 : r.default) ===
      (n == null ? void 0 : n.type)
    );
  });
  return !s || s === -1
    ? !1
    : t.matched.slice(0, s).some((o, r) => {
        var i, l, a;
        return (
          ((i = o.components) == null ? void 0 : i.default) !==
          ((a = (l = e.matched[r]) == null ? void 0 : l.components) == null
            ? void 0
            : a.default)
        );
      }) ||
        (n &&
          Li({ route: t, Component: n }) !== Li({ route: e, Component: n }));
}
function G0(e, t, n) {
  return e
    ? t.matched.findIndex((o) => {
        var r;
        return (
          ((r = o.components) == null ? void 0 : r.default) ===
          (n == null ? void 0 : n.type)
        );
      }) <
        t.matched.length - 1
    : !1;
}
const J0 = {
    key: 0,
    grid: '',
    'h-full': '',
    'w-full': '',
    'place-content-center': '',
    'whitespace-pre-line': '',
    p4: '',
  },
  X0 = oe(
    'div',
    { 'text-2xl': '', 'text-red5': '', 'font-bold': '' },
    [
      Ye(' Failed to load '),
      oe('span', { rounded: '', 'bg-red:5': '', px2: '' }, 'eslint.config.js'),
      oe('br'),
    ],
    -1
  ),
  Y0 = { 'text-lg': '', 'text-red': '', 'font-mono': '' },
  Q0 = oe(
    'div',
    { mt6: '', op50: '' },
    [
      Ye(' Note that '),
      oe(
        'a',
        {
          href: 'https://github.com/eslint/config-inspector',
          target: '_blank',
          'hover:underline': '',
        },
        'config inspector'
      ),
      Ye(' only works with the '),
      oe(
        'a',
        {
          href: 'https://eslint.org/docs/latest/use/configure/configuration-files-new',
          target: '_blank',
          'font-bold': '',
          'hover:underline': '',
        },
        'flat config format'
      ),
      Ye('. '),
    ],
    -1
  ),
  Z0 = {
    key: 1,
    flex: '~ col',
    'h-full': '',
    'w-full': '',
    'items-center': '',
    'justify-center': '',
    p4: '',
  },
  ex = oe(
    'div',
    {
      flex: '~ gap-2 items-center',
      'flex-auto': '',
      'animate-pulse': '',
      'text-xl': '',
    },
    [
      oe('div', { 'i-svg-spinners-90-ring-with-bg': '' }),
      Ye(' Loading config... '),
    ],
    -1
  ),
  tx = { key: 2, px4: '', py6: '', 'lg:px14': '', 'lg:py10': '' },
  nx = tt({
    __name: 'app',
    setup(e) {
      return (
        S0(ps().app.baseURL),
        Yy({ title: 'ESLint Config Inspector' }),
        (n, s) => {
          const o = Sd,
            r = U0,
            i = z0;
          return se(ur)
            ? (pe(),
              je('div', J0, [
                ue(o, { mb6: '', 'text-xl': '', 'font-200': '' }),
                X0,
                oe('div', Y0, sn(se(ur).error), 1),
                Q0,
              ]))
            : se(Wi)
              ? (pe(),
                je('div', Z0, [
                  ex,
                  ue(o, {
                    mt6: '',
                    'text-xl': '',
                    'font-200': '',
                    'show-version': !1,
                  }),
                ]))
              : (pe(), je('div', tx, [ue(r), ue(i)]));
        }
      );
    },
  }),
  sx = {
    __name: 'nuxt-error-page',
    props: { error: Object },
    setup(e) {
      const n = e.error;
      n.stack &&
        n.stack
          .split(
            `
`
          )
          .splice(1)
          .map((f) => ({
            text: f.replace('webpack:/', '').replace('.vue', '.js').trim(),
            internal:
              (f.includes('node_modules') && !f.includes('.cache')) ||
              f.includes('internal') ||
              f.includes('new Promise'),
          }))
          .map(
            (f) =>
              `<span class="stack${f.internal ? ' internal' : ''}">${f.text}</span>`
          ).join(`
`);
      const s = Number(n.statusCode || 500),
        o = s === 404,
        r = n.statusMessage ?? (o ? 'Page Not Found' : 'Internal Server Error'),
        i = n.message || n.toString(),
        l = void 0,
        u = o
          ? Ul(() =>
              Vn(
                () => import('./Dqr29e2q.js'),
                __vite__mapDeps([6, 7, 8]),
                import.meta.url
              ).then((f) => f.default || f)
            )
          : Ul(() =>
              Vn(
                () => import('./BFYePbEj.js'),
                __vite__mapDeps([9, 7, 10]),
                import.meta.url
              ).then((f) => f.default || f)
            );
      return (f, d) => (
        pe(),
        Xe(
          se(u),
          qc(
            al({
              statusCode: se(s),
              statusMessage: se(r),
              description: se(i),
              stack: se(l),
            })
          ),
          null,
          16
        )
      );
    },
  },
  ox = { key: 0 },
  Ic = {
    __name: 'nuxt-root',
    setup(e) {
      const t = () => null,
        n = be(),
        s = n.deferHydration();
      if (n.isHydrating) {
        const a = n.hooks.hookOnce('app:error', s);
        Fe().beforeEach(a);
      }
      const o = !1;
      Qn(xr, Cf()), n.hooks.callHookWith((a) => a.map((c) => c()), 'vue:setup');
      const r = Er(),
        i = !1;
      Cu((a, c, u) => {
        if (
          (n.hooks
            .callHook('vue:error', a, c, u)
            .catch((f) => console.error('[nuxt] Error in `vue:error` hook', f)),
          ay(a) && (a.fatal || a.unhandled))
        )
          return n.runWithContext(() => Un(a)), !1;
      });
      const l = !1;
      return (a, c) => (
        pe(),
        Xe(
          Ju,
          { onResolve: se(s) },
          {
            default: Tt(() => [
              se(i)
                ? (pe(), je('div', ox))
                : se(r)
                  ? (pe(),
                    Xe(se(sx), { key: 1, error: se(r) }, null, 8, ['error']))
                  : se(l)
                    ? (pe(),
                      Xe(se(t), { key: 2, context: se(l) }, null, 8, [
                        'context',
                      ]))
                    : se(o)
                      ? (pe(), Xe(ap(se(o)), { key: 3 }))
                      : (pe(), Xe(se(nx), { key: 4 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve']
        )
      );
    },
  };
let jc;
{
  let e;
  (jc = async function () {
    var i, l;
    if (e) return e;
    const s = !!(
        ((i = window.__NUXT__) != null && i.serverRendered) ||
        ((l = document.getElementById('__NUXT_DATA__')) == null
          ? void 0
          : l.dataset.ssr) === 'true'
      )
        ? Og(Ic)
        : af(Ic),
      o = zm({ vueApp: s });
    async function r(a) {
      await o.callHook('app:error', a),
        (o.payload.error = o.payload.error || Sr(a));
    }
    s.config.errorHandler = r;
    try {
      await Gm(o, M_);
    } catch (a) {
      r(a);
    }
    try {
      await o.hooks.callHook('app:created', s),
        await o.hooks.callHook('app:beforeMount', s),
        s.mount(Um),
        await o.hooks.callHook('app:mounted', s),
        await pn();
    } catch (a) {
      r(a);
    }
    return s.config.errorHandler === r && (s.config.errorHandler = void 0), s;
  }),
    (e = jc().catch((t) => {
      throw (console.error('Error while mounting app:', t), t);
    }));
}
export {
  wb as $,
  ix as A,
  _x as B,
  So as C,
  wx as D,
  ss as E,
  Oe as F,
  Jt as G,
  yb as H,
  yx as I,
  gt as J,
  Cf as K,
  hs as L,
  _b as M,
  pn as N,
  dx as O,
  Pg as P,
  px as Q,
  fx as R,
  Ex as S,
  Gd as T,
  Qe as U,
  On as V,
  Do as W,
  bb as X,
  ul as Y,
  hx as Z,
  F_ as _,
  oe as a,
  ap as a0,
  Hc as a1,
  vx as a2,
  gx as a3,
  Sx as a4,
  Vn as a5,
  mx as a6,
  ue as b,
  je as c,
  Ye as d,
  Gh as e,
  tt as f,
  ux as g,
  zu as h,
  Fe as i,
  le as j,
  lx as k,
  Xe as l,
  cx as m,
  Ln as n,
  pe as o,
  Kh as p,
  ax as q,
  ae as r,
  Sn as s,
  sn as t,
  Yy as u,
  $n as v,
  Tt as w,
  se as x,
  b0 as y,
  x0 as z,
};
