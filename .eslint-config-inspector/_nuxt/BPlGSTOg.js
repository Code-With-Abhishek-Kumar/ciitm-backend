import {
  s as ie,
  _ as ae,
  a as ne,
  b as ue,
  F as re,
  c as ce,
} from './71Khq5Af.js';
import { g as Y, _ as de, a as se } from './CMvAj04f.js';
import { _ as pe } from './CLUjXPcb.js';
import {
  f as X,
  m as Z,
  g as fe,
  r as V,
  h as le,
  i as he,
  j as U,
  k as ge,
  o as s,
  c as i,
  a as e,
  t as d,
  n as I,
  l as A,
  b as y,
  F as p,
  q as D,
  s as f,
  v as ve,
  x as l,
  w as ee,
  y as P,
  z as me,
  A as q,
  d as K,
  B as _e,
  C as be,
  D as u,
  E as te,
  G as F,
  H as _,
  I as ye,
  J as ke,
  K as xe,
  L as $e,
  M as S,
  N as we,
  O as Ce,
  P as L,
  Q,
  R as oe,
  S as Oe,
  T as je,
  U as W,
} from './BsYh-B0w.js';
const Me = ['open'],
  Fe = { block: '' },
  Se = {
    class: 'absolute right-[calc(100%+10px)] top-1.5',
    'text-right': '',
    'font-mono': '',
    op35: '',
    'lt-lg:hidden': '',
  },
  Ie = {
    flex: '~ gap-2 items-center',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
  },
  Re = e(
    'div',
    {
      class: '[details[open]_&]:rotate-90',
      'i-ph-caret-right': '',
      'flex-none': '',
      op50: '',
      transition: '',
    },
    null,
    -1
  ),
  Ee = {
    flex: '',
    'flex-auto': '',
    'flex-col': '',
    'flex-wrap': '',
    'gap-3': '',
    'md:flex-row': '',
    'md:justify-end': '',
  },
  Te = { key: 1 },
  De = { flex: '~ gap-2 items-start' },
  Ne = {
    'pointer-events-none': '',
    absolute: '',
    'right-2': '',
    'top-2': '',
    'text-right': '',
    'text-5em': '',
    'font-mono': '',
    op5: '',
  },
  Ae = { key: 0, flex: '~ col gap-4', 'of-auto': '', px4: '', py3: '' },
  Ge = { key: 0, flex: '~ gap-2 items-start' },
  Pe = e(
    'div',
    { 'i-ph-file-magnifying-glass-duotone': '', my1: '', 'flex-none': '' },
    null,
    -1
  ),
  Be = { flex: '~ col gap-2' },
  ze = e('div', null, 'Applies to files matching', -1),
  Le = { flex: '~ gap-2 items-center wrap' },
  Ve = { key: 1, flex: '~ gap-2 items-center' },
  Ue = e('div', { 'i-ph-files-duotone': '', 'flex-none': '' }, null, -1),
  qe = e('div', null, 'Generally applies to all files', -1),
  Ke = [Ue, qe],
  He = { key: 2, flex: '~ gap-2 items-start' },
  Je = e(
    'div',
    { 'i-ph-plug-duotone': '', my1: '', 'flex-none': '' },
    null,
    -1
  ),
  Qe = { flex: '~ col gap-2' },
  We = { flex: '~ gap-2 items-center wrap' },
  Xe = ['onClick'],
  Ye = { key: 3, flex: '~ gap-2 items-start' },
  Ze = e(
    'div',
    { 'i-ph-eye-closed-duotone': '', my1: '', 'flex-none': '' },
    null,
    -1
  ),
  et = { flex: '~ col gap-2' },
  tt = { key: 0 },
  ot = { key: 1 },
  nt = { flex: '~ gap-2 items-center wrap' },
  st = { key: 4 },
  lt = { flex: '~ gap-2 items-center' },
  it = e(
    'div',
    { 'i-ph-list-dashes-duotone': '', my1: '', 'flex-none': '' },
    null,
    -1
  ),
  at = ['onClick'],
  ut = e('div', { 'i-ph-funnel-duotone': '' }, null, -1),
  rt = { key: 5, flex: '~ gap-2' },
  ct = e(
    'div',
    { 'i-ph-sliders-duotone': '', my1: '', 'flex-none': '' },
    null,
    -1
  ),
  dt = { flex: '~ col gap-2', 'w-full': '' },
  pt = e('div', null, ' Additional configurations ', -1),
  ft = { 'of-auto': '', p2: '', px3: '', op50: '' },
  ht = X({
    __name: 'ConfigItem',
    props: Z(
      {
        config: {},
        index: {},
        filters: {},
        active: { type: Boolean },
        matchedGlobs: {},
      },
      { open: { default: !0 }, openModifiers: {} }
    ),
    emits: Z(['badgeClick'], ['update:open']),
    setup(H, { emit: k }) {
      const J = H,
        B = k,
        O = new Set(['name']),
        j = new Set(['index']),
        N = fe(H, 'open'),
        x = V(N.value);
      if (!x.value) {
        const n = le(() => {
          N.value && ((x.value = !0), n());
        });
      }
      const $ = he();
      function w(n) {
        (be.plugin = n), $.push('/rules');
      }
      const R = U(() => {
        const n = ['files', 'plugins', 'ignores', 'rules', 'name', 'index'];
        return Object.fromEntries(
          Object.entries(J.config).filter(([M]) => !n.includes(M))
        );
      });
      return (n, M) => {
        var h, v, c, m;
        const g = de,
          E = pe,
          G = se,
          z = ae,
          r = ne,
          o = ue,
          b = ge('close-popper');
        return (
          s(),
          i(
            'details',
            {
              class: I([
                'flat-config-item',
                n.active ? 'border-yellow:70' : 'border-base',
              ]),
              open: N.value,
              border: '~ rounded-lg',
              relative: '',
              onToggle: M[1] || (M[1] = (t) => (N.value = t.target.open)),
            },
            [
              e('summary', Fe, [
                e('div', Se, ' #' + d(n.index + 1), 1),
                e('div', Ie, [
                  Re,
                  e('div', Ee, [
                    e(
                      'span',
                      {
                        class: I(n.config.name ? '' : 'op50 italic'),
                        'flex-1': '',
                      },
                      [
                        n.config.name
                          ? (s(),
                            A(g, { key: 0, name: n.config.name }, null, 8, [
                              'name',
                            ]))
                          : (s(),
                            i('span', Te, 'anonymous #' + d(n.index + 1), 1)),
                      ],
                      2
                    ),
                    e('div', De, [
                      y(
                        E,
                        {
                          icon: 'i-ph-file-magnifying-glass-duotone',
                          number:
                            ((h = n.config.files) == null
                              ? void 0
                              : h.length) || 0,
                          color: 'text-yellow5',
                          title: 'Files',
                        },
                        null,
                        8,
                        ['number']
                      ),
                      y(
                        E,
                        {
                          icon: 'i-ph-eye-closed-duotone',
                          number:
                            ((v = n.config.ignores) == null
                              ? void 0
                              : v.length) || 0,
                          color: 'text-purple5 dark:text-purple4',
                          title: 'Ignores',
                        },
                        null,
                        8,
                        ['number']
                      ),
                      y(
                        E,
                        {
                          icon: 'i-ph-sliders-duotone',
                          number: Object.keys(R.value).length,
                          color: 'text-green5',
                          title: 'Options',
                        },
                        null,
                        8,
                        ['number']
                      ),
                      y(
                        E,
                        {
                          icon: 'i-ph-plug-duotone',
                          number: Object.keys(n.config.plugins || {}).length,
                          color: 'text-teal5',
                          title: 'Plugins',
                        },
                        null,
                        8,
                        ['number']
                      ),
                      y(
                        E,
                        {
                          icon: 'i-ph-list-dashes-duotone',
                          number: Object.keys(n.config.rules || {}).length,
                          color: 'text-blue5 dark:text-blue4',
                          title: 'Rules',
                          'mr-2': '',
                        },
                        null,
                        8,
                        ['number']
                      ),
                    ]),
                  ]),
                ]),
              ]),
              e('div', Ne, ' #' + d(n.index + 1), 1),
              x.value
                ? (s(),
                  i('div', Ae, [
                    n.config.files
                      ? (s(),
                        i('div', Ge, [
                          Pe,
                          e('div', Be, [
                            ze,
                            e('div', Le, [
                              (s(!0),
                              i(
                                p,
                                null,
                                D(
                                  (c = n.config.files) == null
                                    ? void 0
                                    : c.flat(),
                                  (t, a) => {
                                    var C;
                                    return (
                                      s(),
                                      A(
                                        G,
                                        {
                                          key: a,
                                          glob: t,
                                          popup: 'files',
                                          active:
                                            (C = n.matchedGlobs) == null
                                              ? void 0
                                              : C.includes(t),
                                        },
                                        null,
                                        8,
                                        ['glob', 'active']
                                      )
                                    );
                                  }
                                ),
                                128
                              )),
                            ]),
                          ]),
                        ]))
                      : n.config.rules || Object.keys(R.value).length
                        ? (s(), i('div', Ve, Ke))
                        : f('', !0),
                    n.config.plugins
                      ? (s(),
                        i('div', He, [
                          Je,
                          e('div', Qe, [
                            e(
                              'div',
                              null,
                              'Plugins (' +
                                d(Object.keys(n.config.plugins).length) +
                                ')',
                              1
                            ),
                            e('div', We, [
                              (s(!0),
                              i(
                                p,
                                null,
                                D(
                                  Object.keys(n.config.plugins),
                                  (t, a) => (
                                    s(),
                                    i(
                                      'button',
                                      {
                                        key: a,
                                        border: '~ base rounded-full',
                                        px3: '',
                                        style: ve({
                                          color: ('getPluginColor' in n
                                            ? n.getPluginColor
                                            : l(Y))(t),
                                          backgroundColor: ('getPluginColor' in
                                            n
                                            ? n.getPluginColor
                                            : l(Y))(t, 0.1),
                                        }),
                                        'font-mono': '',
                                        onClick: (C) => w(t),
                                      },
                                      d(t),
                                      13,
                                      Xe
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                        ]))
                      : f('', !0),
                    n.config.ignores
                      ? (s(),
                        i('div', Ye, [
                          Ze,
                          e('div', et, [
                            Object.keys(n.config).some(
                              (t) =>
                                t !== 'ignores' && !l(j).has(t) && !l(O).has(t)
                            ) === !1
                              ? (s(), i('div', tt, ' Ignore files globally '))
                              : (s(), i('div', ot, ' Ignore ')),
                            e('div', nt, [
                              (s(!0),
                              i(
                                p,
                                null,
                                D(n.config.ignores, (t, a) => {
                                  var C;
                                  return (
                                    s(),
                                    A(
                                      G,
                                      {
                                        key: a,
                                        glob: t,
                                        active:
                                          (C = n.matchedGlobs) == null
                                            ? void 0
                                            : C.includes(t),
                                      },
                                      null,
                                      8,
                                      ['glob', 'active']
                                    )
                                  );
                                }),
                                128
                              )),
                            ]),
                          ]),
                        ]))
                      : f('', !0),
                    n.config.rules && Object.keys(n.config.rules).length
                      ? (s(),
                        i('div', st, [
                          e('div', lt, [
                            it,
                            e(
                              'div',
                              null,
                              'Rules (' +
                                d(Object.keys(n.config.rules).length) +
                                ')',
                              1
                            ),
                          ]),
                          y(
                            r,
                            {
                              py2: '',
                              class: I(l(_e) ? 'pl6' : ''),
                              rules: n.config.rules,
                              filter: (t) => {
                                var a;
                                return (
                                  !((a = n.filters) != null && a.rule) ||
                                  n.filters.rule === t
                                );
                              },
                              'get-bind': (t) => {
                                var a;
                                return {
                                  class:
                                    l(P)(
                                      (a = n.config.rules) == null
                                        ? void 0
                                        : a[t]
                                    ) === 'off'
                                      ? 'op50'
                                      : '',
                                };
                              },
                            },
                            {
                              popup: ee(({ ruleName: t, value: a }) => [
                                y(
                                  z,
                                  {
                                    border: 't base',
                                    'is-local': !0,
                                    state: {
                                      name: t,
                                      level: l(P)(a),
                                      configIndex: n.index,
                                      options: l(me)(a),
                                    },
                                  },
                                  null,
                                  8,
                                  ['state']
                                ),
                              ]),
                              'popup-actions': ee(({ ruleName: t }) => [
                                q(
                                  (s(),
                                  i(
                                    'button',
                                    {
                                      'btn-action-sm': '',
                                      onClick: (a) => B('badgeClick', t),
                                    },
                                    [ut, K(' Filter by this rule ')],
                                    8,
                                    at
                                  )),
                                  [[b]]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['class', 'rules', 'filter', 'get-bind']
                          ),
                          e('div', null, [
                            (m = n.filters) != null && m.rule
                              ? (s(),
                                i(
                                  'button',
                                  {
                                    key: 0,
                                    ml8: '',
                                    op50: '',
                                    onClick:
                                      M[0] ||
                                      (M[0] = (t) => B('badgeClick', '')),
                                  },
                                  ' ...' +
                                    d(
                                      Object.keys(n.config.rules).filter(
                                        (t) => {
                                          var a;
                                          return (
                                            t !==
                                            ((a = n.filters) == null
                                              ? void 0
                                              : a.rule)
                                          );
                                        }
                                      ).length
                                    ) +
                                    ' others rules are hidden ',
                                  1
                                ))
                              : f('', !0),
                          ]),
                        ]))
                      : f('', !0),
                    Object.keys(R.value).length
                      ? (s(),
                        i('div', rt, [
                          ct,
                          e('div', dt, [
                            pt,
                            (s(!0),
                            i(
                              p,
                              null,
                              D(
                                R.value,
                                (t, a) => (
                                  s(),
                                  i(
                                    'div',
                                    { key: a, border: '~ base rounded-lg' },
                                    [
                                      e('div', ft, d(a), 1),
                                      y(
                                        o,
                                        {
                                          lang: 'ts',
                                          code: l(ie)(t),
                                          'max-h-100': '',
                                          'max-w-full': '',
                                          'w-full': '',
                                          'of-scroll': '',
                                          rounded: '',
                                          'bg-code': '',
                                          p2: '',
                                          'text-sm': '',
                                        },
                                        null,
                                        8,
                                        ['code']
                                      ),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]))
                      : f('', !0),
                  ]))
                : f('', !0),
            ],
            42,
            Me
          )
        );
      };
    },
  }),
  gt = { flex: '~ col gap-3', py4: '' },
  vt = { relative: '', flex: '' },
  mt = e(
    'div',
    {
      absolute: '',
      'bottom-0': '',
      'left-0': '',
      'top-0': '',
      flex: '~ items-center justify-center',
      p4: '',
      op50: '',
    },
    [e('div', { 'i-ph-magnifying-glass-duotone': '' })],
    -1
  ),
  _t = {
    pos: 'absolute left-8 right-8 top-1/1',
    border: '~ base rounded',
    flex: '~ col',
    'z-1': '',
    'mt--1': '',
    'max-h-80': '',
    'of-auto': '',
    py1: '',
    shadow: '',
    'bg-glass': '',
  },
  bt = ['onClick'],
  yt = { key: 0, flex: '~ gap-2 items-center wrap', mb2: '' },
  kt = { key: 0 },
  xt = e(
    'div',
    { 'i-ph-file-dotted-duotone': '', 'text-purple': '' },
    null,
    -1
  ),
  $t = e('span', { op50: '' }, 'Filepath', -1),
  wt = { key: 0, op50: '' },
  Ct = e('span', { op50: '' }, 'matched with', -1),
  Ot = e('span', { op50: '' }, 'config items', -1),
  jt = e('span', { op50: '' }, 'matched with total ', -1),
  Mt = e('span', { op50: '' }, 'rules, ', -1),
  Ft = e('span', { op50: '' }, 'of them are specific to the file', -1),
  St = { key: 1 },
  It = {
    flex: '~ gap-2 items-center',
    border: '~ blue/20 rounded-full',
    'bg-blue:10': '',
    px3: '',
    py1: '',
  },
  Rt = e('div', { 'i-ph-funnel-duotone': '' }, null, -1),
  Et = e('span', { op50: '' }, 'Filtered by', -1),
  Tt = e('span', { op50: '' }, 'rule', -1),
  Dt = { flex: '~ gap-2 items-center wrap' },
  Nt = { key: 0, border: '~ base rounded', flex: '' },
  At = e('div', { 'i-ph-stack-duotone': '' }, null, -1),
  Gt = e('span', null, 'Matched Config Items', -1),
  Pt = [At, Gt],
  Bt = e('div', { border: 'l base' }, null, -1),
  zt = e('div', { 'i-ph-film-script-duotone': '' }, null, -1),
  Lt = e('span', null, 'Merged Rules', -1),
  Vt = [zt, Lt],
  Ut = { key: 1, flex: '~ gap-2 items-center', ml2: '', 'select-none': '' },
  qt = ['checked'],
  Kt = e('span', { op50: '' }, 'Show Specific Rules Only', -1),
  Ht = e('div', { 'flex-auto': '' }, null, -1),
  Jt = e(
    'div',
    { mt5: '', italic: '', op50: '' },
    ' No matched config items. ',
    -1
  ),
  Qt = e('div', null, 'Ignored by globs:', -1),
  Wt = { flex: '~ gap-2 items-center wrap' },
  Xt = { class: 'flat-config-item', border: '~ base rounded-lg', relative: '' },
  Yt = { block: '' },
  Zt = {
    flex: '~ gap-2 items-start',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
    op75: '',
  },
  eo = e(
    'div',
    {
      'i-ph-caret-right': '',
      class: '[details[open]_&]:rotate-90',
      transition: '',
    },
    null,
    -1
  ),
  to = {
    class: 'flat-config-item',
    border: '~ base rounded-lg',
    open: '',
    relative: '',
  },
  oo = { block: '' },
  no = {
    flex: '~ gap-2 items-start',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
    op75: '',
  },
  so = e(
    'div',
    {
      'i-ph-caret-right': '',
      class: '[details[open]_&]:rotate-90',
      transition: '',
    },
    null,
    -1
  ),
  lo = { px4: '', pt4: '' },
  io = { px4: '', pt4: '' },
  po = X({
    __name: 'configs',
    setup(H) {
      const k = V(u.filepath);
      function J() {
        S.value = S.value.map(() => !0);
      }
      function B() {
        S.value = S.value.map(() => !1);
      }
      const O = te([]),
        j = te(null);
      le(() => {
        let r = F.value.configs;
        u.filepath
          ? ((j.value = Oe(
              u.filepath,
              F.value.configs,
              F.value.configsIgnoreOnly
            )),
            j.value.configs.length
              ? (r = Array.from(
                  new Set([
                    ...j.value.configs,
                    ...F.value.configsGeneral
                      .filter((o) => !je(o))
                      .map((o) => o.index),
                  ])
                )
                  .sort()
                  .map((o) => F.value.configs[o]))
              : (r = []))
          : (j.value = null),
          u.rule && (r = r.filter((o) => u.rule in (o.rules || {}))),
          (O.value = r);
      });
      const N = U(() => {
          var r;
          return new re(
            ((r = F.value.filesResolved) == null ? void 0 : r.list) || [],
            { threshold: 0.3, includeMatches: !0 }
          );
        }),
        x = U(() => N.value.search(u.filepath || '')),
        $ = V(0),
        w = V(!1);
      function R(r = $.value) {
        var o;
        w.value &&
          ((k.value = u.filepath =
            ((o = x.value[r]) == null ? void 0 : o.item) || u.filepath),
          (w.value = !1));
      }
      function n() {
        setTimeout(() => {
          w.value = !1;
        }, 100);
      }
      function M(r) {
        w.value &&
          (($.value += r),
          $.value < 0 && ($.value += x.value.length),
          $.value >= x.value.length && ($.value -= x.value.length));
      }
      const g = U(() => {
          if (!u.filepath || _.value.viewFileMatchType !== 'merged')
            return {
              all: {},
              common: {},
              specific: {},
              specificDisabled: {},
              specificEnabled: {},
            };
          const r = {},
            o = {},
            b = {};
          O.value.forEach((c) => {
            c.rules &&
              (Object.assign(r, c.rules),
              c.files ? Object.assign(b, c.rules) : Object.assign(o, c.rules));
          });
          const h = Object.fromEntries(
              Object.entries(b).filter(([c, m]) => P(m) === 'off')
            ),
            v = Object.fromEntries(
              Object.entries(b).filter(([c, m]) => P(m) !== 'off')
            );
          for (const c in r) P(r[c]) === 'off' && delete r[c];
          return {
            all: r,
            common: o,
            specific: b,
            specificDisabled: h,
            specificEnabled: v,
          };
        }),
        E = X({
          props: { matches: Array },
          setup(r) {
            return () => {
              var o;
              return (o = r.matches) == null
                ? void 0
                : o.map((b) => {
                    let h = 0;
                    const v = b.value || '',
                      c = [];
                    for (const [m, t] of b.indices)
                      h < m &&
                        c.push(W('span', { class: 'op50' }, v.slice(h, m))),
                        c.push(
                          W(
                            'span',
                            { class: 'text-purple font-bold' },
                            v.slice(m, t + 1)
                          )
                        ),
                        (h = t + 1);
                    return (
                      h < v.length &&
                        c.push(W('span', { class: 'op50' }, v.slice(h))),
                      c
                    );
                  });
            };
          },
        });
      ye(
        () => k.value,
        () => {
          (u.filepath = k.value), ($.value = 0);
        },
        { debounce: 200 }
      ),
        ke(
          () => u.filepath,
          () => {
            u.filepath !== k.value && (k.value = u.filepath);
          },
          { flush: 'sync' }
        );
      const G = new Map(),
        z = xe();
      return (
        $e(async () => {
          var r;
          if (z.query.index != null) {
            const o = Number(z.query.index) - 1;
            (S.value = S.value.map((b, h) => h === o)),
              await we(),
              (r = G.get(o)) == null ||
                r.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }),
        (r, o) => {
          var m;
          const b = ce,
            h = se,
            v = ne,
            c = ht;
          return (
            s(),
            i('div', null, [
              e('div', gt, [
                e('div', vt, [
                  q(
                    e(
                      'input',
                      {
                        'onUpdate:modelValue':
                          o[0] || (o[0] = (t) => (k.value = t)),
                        placeholder: 'Test matching with filepath...',
                        border: '~ base rounded-full',
                        class: I(k.value ? 'font-mono' : ''),
                        'w-full': '',
                        'bg-transparent': '',
                        px3: '',
                        py2: '',
                        pl10: '',
                        'outline-none': '',
                        onFocus: o[1] || (o[1] = (t) => (w.value = !0)),
                        onClick: o[2] || (o[2] = (t) => (w.value = !0)),
                        onBlur: n,
                        onKeydown: [
                          o[3] || (o[3] = L((t) => (w.value = !1), ['esc'])),
                          o[4] ||
                            (o[4] = L(
                              Q((t) => M(1), ['prevent']),
                              ['down']
                            )),
                          o[5] ||
                            (o[5] = L(
                              Q((t) => M(-1), ['prevent']),
                              ['up']
                            )),
                          o[6] ||
                            (o[6] = L(
                              Q((t) => R(), ['prevent']),
                              ['enter']
                            )),
                        ],
                      },
                      null,
                      34
                    ),
                    [[Ce, k.value]]
                  ),
                  mt,
                  q(
                    e(
                      'div',
                      _t,
                      [
                        (s(!0),
                        i(
                          p,
                          null,
                          D(
                            x.value,
                            (t, a) => (
                              s(),
                              i(
                                'button',
                                {
                                  key: t.item,
                                  class: I(a === $.value ? 'bg-active' : ''),
                                  'hover:bg-active': '',
                                  px3: '',
                                  'py0.5': '',
                                  'text-left': '',
                                  'font-mono': '',
                                  onClick: (C) => R(a),
                                },
                                [
                                  t.matches
                                    ? (s(),
                                      A(
                                        l(E),
                                        { key: 0, matches: t.matches },
                                        null,
                                        8,
                                        ['matches']
                                      ))
                                    : (s(),
                                      i(p, { key: 1 }, [K(d(t.item), 1)], 64)),
                                ],
                                10,
                                bt
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      512
                    ),
                    [[oe, w.value && x.value.length]]
                  ),
                ]),
                l(u).filepath || l(u).rule
                  ? (s(),
                    i('div', yt, [
                      l(u).filepath
                        ? (s(),
                          i('div', kt, [
                            e(
                              'div',
                              {
                                flex: '~ gap-2 items-center wrap',
                                border: '~ purple/20 rounded-full',
                                'bg-purple:10': '',
                                px3: '',
                                py1: '',
                                class: I({ 'saturate-0': !O.value.length }),
                              },
                              [
                                xt,
                                $t,
                                e('code', null, d(l(u).filepath), 1),
                                O.value.length
                                  ? l(_).viewFileMatchType === 'configs'
                                    ? (s(),
                                      i(
                                        p,
                                        { key: 1 },
                                        [
                                          Ct,
                                          e(
                                            'span',
                                            null,
                                            d(O.value.length) +
                                              ' / ' +
                                              d(l(F).configs.length),
                                            1
                                          ),
                                          Ot,
                                        ],
                                        64
                                      ))
                                    : (s(),
                                      i(
                                        p,
                                        { key: 2 },
                                        [
                                          jt,
                                          e(
                                            'span',
                                            null,
                                            d(Object.keys(g.value.all).length),
                                            1
                                          ),
                                          Mt,
                                          e(
                                            'span',
                                            null,
                                            d(
                                              Object.keys(g.value.specific)
                                                .length
                                            ),
                                            1
                                          ),
                                          Ft,
                                        ],
                                        64
                                      ))
                                  : (s(),
                                    i(
                                      'span',
                                      wt,
                                      'is not included or has been ignored'
                                    )),
                                e('button', {
                                  'i-ph-x': '',
                                  'text-sm': '',
                                  op25: '',
                                  'hover:op100': '',
                                  onClick:
                                    o[7] ||
                                    (o[7] = (t) => {
                                      (l(u).filepath = ''), (k.value = '');
                                    }),
                                }),
                              ],
                              2
                            ),
                          ]))
                        : f('', !0),
                      l(u).rule
                        ? (s(),
                          i('div', St, [
                            e('div', It, [
                              Rt,
                              Et,
                              y(b, { name: l(u).rule }, null, 8, ['name']),
                              Tt,
                              e('button', {
                                'i-ph-x': '',
                                'text-sm': '',
                                op25: '',
                                'hover:op100': '',
                                onClick:
                                  o[8] || (o[8] = (t) => (l(u).rule = '')),
                              }),
                            ]),
                          ]))
                        : f('', !0),
                    ]))
                  : f('', !0),
                e('div', Dt, [
                  l(u).filepath
                    ? (s(),
                      i('div', Nt, [
                        e(
                          'button',
                          {
                            class: I(
                              l(_).viewFileMatchType === 'configs'
                                ? 'btn-action-active'
                                : 'op50'
                            ),
                            'border-none': '',
                            'btn-action': '',
                            onClick:
                              o[9] ||
                              (o[9] = (t) =>
                                (l(_).viewFileMatchType =
                                  l(_).viewFileMatchType === 'configs'
                                    ? 'merged'
                                    : 'configs')),
                          },
                          Pt,
                          2
                        ),
                        Bt,
                        e(
                          'button',
                          {
                            class: I(
                              l(_).viewFileMatchType !== 'configs'
                                ? 'btn-action-active'
                                : 'op50'
                            ),
                            'border-none': '',
                            'btn-action': '',
                            onClick:
                              o[10] ||
                              (o[10] = (t) =>
                                (l(_).viewFileMatchType =
                                  l(_).viewFileMatchType === 'configs'
                                    ? 'merged'
                                    : 'configs')),
                          },
                          Vt,
                          2
                        ),
                      ]))
                    : f('', !0),
                  l(u).filepath && l(_).viewFileMatchType === 'configs'
                    ? (s(),
                      i('label', Ut, [
                        e(
                          'input',
                          {
                            checked: l(_).showSpecificOnly,
                            type: 'checkbox',
                            onChange:
                              o[11] ||
                              (o[11] = (t) =>
                                (l(_).showSpecificOnly = !!t.target.checked)),
                          },
                          null,
                          40,
                          qt
                        ),
                        Kt,
                      ]))
                    : f('', !0),
                  Ht,
                  e(
                    'button',
                    { px3: '', 'btn-action': '', onClick: J },
                    ' Expand All '
                  ),
                  e(
                    'button',
                    { px3: '', 'btn-action': '', onClick: B },
                    ' Collapse All '
                  ),
                ]),
                O.value.length
                  ? (s(),
                    i(
                      p,
                      { key: 2 },
                      [
                        l(u).filepath && l(_).viewFileMatchType === 'merged'
                          ? (s(),
                            i(
                              p,
                              { key: 0 },
                              [
                                e('details', Xt, [
                                  e('summary', Yt, [
                                    e('div', Zt, [
                                      eo,
                                      K(
                                        ' Merged Rules: Common to every file (' +
                                          d(
                                            Object.keys(g.value.common).length
                                          ) +
                                          ' rules) ',
                                        1
                                      ),
                                    ]),
                                  ]),
                                  y(
                                    v,
                                    { m4: '', rules: g.value.common },
                                    null,
                                    8,
                                    ['rules']
                                  ),
                                ]),
                                e('details', to, [
                                  e('summary', oo, [
                                    e('div', no, [
                                      so,
                                      K(
                                        ' Merged Rules: Specific to matched file (' +
                                          d(
                                            Object.keys(g.value.specific).length
                                          ) +
                                          ' rules) ',
                                        1
                                      ),
                                    ]),
                                  ]),
                                  Object.keys(g.value.specificDisabled).length
                                    ? (s(),
                                      i(
                                        p,
                                        { key: 0 },
                                        [
                                          e(
                                            'div',
                                            lo,
                                            ' Disables (' +
                                              d(
                                                Object.keys(
                                                  g.value.specificDisabled
                                                ).length
                                              ) +
                                              ') ',
                                            1
                                          ),
                                          y(
                                            v,
                                            {
                                              m4: '',
                                              'get-bind': (t) => ({
                                                class: 'op50',
                                              }),
                                              rules: g.value.specificDisabled,
                                            },
                                            null,
                                            8,
                                            ['rules']
                                          ),
                                        ],
                                        64
                                      ))
                                    : f('', !0),
                                  Object.keys(g.value.specificEnabled).length
                                    ? (s(),
                                      i(
                                        p,
                                        { key: 1 },
                                        [
                                          e(
                                            'div',
                                            io,
                                            ' Enables (' +
                                              d(
                                                Object.keys(
                                                  g.value.specificEnabled
                                                ).length
                                              ) +
                                              ') ',
                                            1
                                          ),
                                          y(
                                            v,
                                            {
                                              m4: '',
                                              rules: g.value.specificEnabled,
                                            },
                                            null,
                                            8,
                                            ['rules']
                                          ),
                                        ],
                                        64
                                      ))
                                    : f('', !0),
                                ]),
                              ],
                              64
                            ))
                          : (s(!0),
                            i(
                              p,
                              { key: 1 },
                              D(l(F).configs, (t, a) => {
                                var C;
                                return q(
                                  (s(),
                                  A(
                                    c,
                                    {
                                      key: a,
                                      ref_for: !0,
                                      ref: (T) => {
                                        l(G).set(a, T == null ? void 0 : T.$el);
                                      },
                                      open: l(S)[a],
                                      'onUpdate:open': (T) => (l(S)[a] = T),
                                      payload: l(F),
                                      config: t,
                                      index: a,
                                      filters: l(u),
                                      active: !!(l(u).filepath && t.files),
                                      'matched-globs':
                                        (C = j.value) == null
                                          ? void 0
                                          : C.globs,
                                      onBadgeClick:
                                        o[12] ||
                                        (o[12] = (T) => (l(u).rule = T)),
                                    },
                                    null,
                                    8,
                                    [
                                      'open',
                                      'onUpdate:open',
                                      'payload',
                                      'config',
                                      'index',
                                      'filters',
                                      'active',
                                      'matched-globs',
                                    ]
                                  )),
                                  [
                                    [
                                      oe,
                                      O.value.includes(t) &&
                                        (!l(u).filepath ||
                                          !l(_).showSpecificOnly ||
                                          t.files),
                                    ],
                                  ]
                                );
                              }),
                              128
                            )),
                      ],
                      64
                    ))
                  : (s(),
                    i(
                      p,
                      { key: 1 },
                      [
                        Jt,
                        (m = j.value) != null && m.globs.length
                          ? (s(),
                            i(
                              p,
                              { key: 0 },
                              [
                                Qt,
                                e('div', Wt, [
                                  (s(!0),
                                  i(
                                    p,
                                    null,
                                    D(
                                      j.value.globs,
                                      (t, a) => (
                                        s(),
                                        A(
                                          h,
                                          { key: a, glob: t, popup: 'configs' },
                                          null,
                                          8,
                                          ['glob']
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ],
                              64
                            ))
                          : f('', !0),
                      ],
                      64
                    )),
              ]),
            ])
          );
        }
      );
    },
  });
export { po as default };
