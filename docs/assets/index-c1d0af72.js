(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const l of o) {
      if (l.type === "childList") {
        for (const d of l.addedNodes) {
          d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
        }
      }
    }
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const l = {};
    return o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? l.credentials = "include"
        : o.crossOrigin === "anonymous"
        ? l.credentials = "omit"
        : l.credentials = "same-origin",
      l;
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = t(o);
    fetch(o.href, l);
  }
})();
const x = document.createElement("div");
x.style.display = "flex";
x.style.gap = "20px";
x.style.padding = "20px";
x.style.fontFamily = "sans-serif";
document.body.appendChild(x);
const i = document.createElement("div");
i.style.width = "200px";
i.innerHTML = "<h3>Player Stats</h3>";
x.appendChild(i);
i.style.backgroundImage =
  'url("https://img.craftpix.net/2023/10/Free-Summer-Pixel-Art-Backgrounds3.jpg")';
i.style.backgroundSize = "cover";
i.style.backgroundPosition = "center";
i.style.backgroundRepeat = "no-repeat";
i.style.borderRadius = "8px";
i.style.position = "relative";
i.style.overflow = "hidden";
let E = 0,
  c = 0,
  p = 5,
  m = 5,
  z = 0,
  L = 5,
  j = 50,
  R = 0,
  S = 0,
  B = 0,
  H = 0;
const re = 1;
let te = 0, ne = 0, N = "Training Dummy", C = 0, oe = 0, Z = !1;
function J(e, n) {
  const t = document.createElement("div");
  t.style.display = "flex",
    t.style.alignItems = "center",
    t.style.justifyContent = "space-between",
    t.style.margin = "6px 0",
    t.style.fontSize = "14px";
  const a = document.createElement("span");
  a.textContent = `${e}: ${n}`, t.appendChild(a);
  const o = document.createElement("div");
  o.style.display = "flex", o.style.gap = "4px";
  const l = document.createElement("button");
  l.textContent = "–",
    l.style.width = "26px",
    l.style.height = "26px",
    l.style.padding = "0",
    l.style.fontSize = "18px";
  const d = document.createElement("button");
  return d.textContent = "+",
    d.style.width = "26px",
    d.style.height = "26px",
    d.style.padding = "0",
    d.style.fontSize = "18px",
    o.appendChild(l),
    o.appendChild(d),
    t.appendChild(o),
    { row: t, labelSpan: a, minusBtn: l, plusBtn: d };
}
function Q(e, n, t, a, o = () => p > 0, l = () => {
  p--;
}, d = () => {
  p++;
}) {
  n.addEventListener("click", () => {
    o() && (a(t() + 1), l(), _());
  }),
    e.addEventListener("click", () => {
      const ee = t();
      ee > 0 && (a(ee - 1), d(), _());
    });
}
const le = document.createElement("div"),
  ie = document.createElement("div"),
  U = document.createElement("div");
U.style.margin = "10px 0";
U.textContent = `Stat Points: ${p}`;
const X = document.createElement("div");
X.style.display = "none";
i.appendChild(le);
i.appendChild(ie);
i.appendChild(U);
i.appendChild(X);
const W = J("STR", z),
  Y = J("Crit Rate", `${L}%`),
  G = J("Crit Damage", `${j}%`),
  F = J("Luck", `${R}%`),
  de = W.labelSpan,
  ce = Y.labelSpan,
  pe = G.labelSpan,
  me = F.labelSpan;
i.appendChild(W.row);
i.appendChild(Y.row);
i.appendChild(G.row);
i.appendChild(F.row);
function _() {
  U.textContent = `Stat Points: ${p}`,
    de.textContent = `STR: ${z}`,
    ce.textContent = `Crit Rate: ${L}%`,
    pe.textContent = `Crit Damage: ${j}%`,
    me.textContent = `Luck: ${R}%`;
}
function k() {
  let e = E, n = 0, t = 5;
  for (; e >= t;) e -= t, n++, t *= 2;
  n > c &&
  (c = n,
    p += 5,
    c >= 5 && !Z &&
    (Z = !0,
      X.style.display = "block",
      w.style.display = "block",
      h.style.display = "block",
      v.style.display = "block",
      g.style.display = "block",
      M.style.display = "block",
      b.style.display = "block")),
    le.textContent = `EXP: ${E}`,
    ie.textContent = `Level: ${c} (${Math.floor(e)}/${t})`,
    c >= 5 && (X.textContent = `Gold: ${Math.floor(m)}`),
    _();
}
Q(W.minusBtn, W.plusBtn, () => z, (e) => {
  z = e;
});
Q(
  Y.minusBtn,
  Y.plusBtn,
  () => L,
  (e) => {
    L = e;
  },
  () => p > 0 && L < 100,
  () => {
    p--;
  },
);
Q(
  G.minusBtn,
  G.plusBtn,
  () => j,
  (e) => {
    j = e;
  },
  () => p > 0,
  () => {
    p--;
  },
);
Q(
  F.minusBtn,
  F.plusBtn,
  () => R,
  (e) => {
    R = e;
  },
  () => p > 0,
  () => {
    p--;
  },
);
const r = document.createElement("div");
r.style.width = "200px";
r.innerHTML = "<h3>Combat</h3>";
x.appendChild(r);
r.style.backgroundImage =
  'url("https://img.craftpix.net/2023/10/Free-Summer-Pixel-Art-Backgrounds3.jpg")';
r.style.backgroundSize = "cover";
r.style.backgroundPosition = "center";
r.style.backgroundRepeat = "no-repeat";
r.style.borderRadius = "8px";
r.style.position = "relative";
r.style.overflow = "hidden";
const P = document.createElement("div");
Object.assign(P.style, {
  width: "180px",
  height: "180px",
  border: "2px solid #555",
  margin: "0 auto",
  position: "relative",
  backgroundColor: "#fff",
  textAlign: "center",
  fontSize: "14px",
  overflow: "hidden",
});
const y = document.createElement("div");
y.style.position = "absolute";
y.style.top = "8px";
y.style.left = "8px";
y.style.color = "red";
y.style.fontWeight = "bold";
y.style.fontSize = "12px";
const f = document.createElement("div");
f.style.position = "absolute";
f.style.bottom = "8px";
f.style.left = "50%";
f.style.transform = "translateX(-50%)";
f.style.fontWeight = "bold";
f.style.color = "#333";
f.style.fontSize = "14px";
const u = document.createElement("img");
Object.assign(u.style, {
  width: "120px",
  height: "120px",
  objectFit: "contain",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "transform 0.1s ease",
});
P.appendChild(u);
P.appendChild(y);
P.appendChild(f);
r.appendChild(P);
const I = document.createElement("button");
I.textContent = "⚔ Attack! ⚔";
I.style.width = "180px";
I.style.margin = "10px auto";
I.style.display = "block";
r.appendChild(I);
const V = (e) => {
    const n = document.createElement("div");
    return Object.assign(n.style, {
      width: "180px",
      height: "40px",
      border: "2px solid #555",
      margin: "10px auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      textAlign: "center",
    }),
      n.textContent = e,
      n;
  },
  O = V("Unlocks at level 3"),
  A = V("Unlocks at level 5"),
  ue = V("Coming soon...");
r.appendChild(O);
r.appendChild(A);
r.appendChild(ue);
function se() {
  let e = !1;
  c >= 10 ? e = Math.random() < .5 : c >= 5 && (e = Math.random() < .25),
    N = e ? "Monster" : "Training Dummy",
    N === "Training Dummy"
      ? u.src =
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57c0ca5-c162-43e7-b0dc-40f215c30321/di9bip6-fe55068c-72c3-4510-bbc0-7cb02a44e17c.png/v1/fill/w_320,h_320/2d_dummy_sprite_by_retronc_di9bip6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIwIiwicGF0aCI6Ii9mL2U1N2MwY2E1LWMxNjItNDNlNy1iMGRjLTQwZjIxNWMzMDMyMS9kaTliaXA2LWZlNTUwNjhjLTcyYzMtNDUxMC1iYmMwLTdjYjAyYTQ0ZTE3Yy5wbmciLCJ3aWR0aCI6Ijw9MzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uTX8d0eoYACnjMsI6FDksB9HI1xtFigzdO4Uq3vkl2A"
      : u.src =
        "https://media.moddb.com/images/downloads/1/219/218099/ghost.png",
    u.style.transform = "translate(-50%, -50%)";
  let n, t;
  c < 5 ? (n = 25, t = 75) : c < 10 ? (n = 50, t = 100) : (n = 75, t = 125),
    C = Math.floor(n + Math.random() * (t - n + 1)),
    oe = C,
    y.textContent = `HP: ${Math.floor(C)}`,
    f.textContent = N;
}
se();
I.addEventListener("click", () => {
  if (C <= 0) return;
  const e = 1 + S;
  E += e;
  const n = 5 + 2 * c + S, t = n + z;
  let a = Math.floor(n + Math.random() * (t - n + 1));
  if (
    Math.random() * 100 < L && (a = Math.floor(a * (1 + j / 100))),
      C -= a,
      u.style.transform = "translate(-52%, -50%)",
      setTimeout(() => {
        u.style.transform = "translate(-48%, -50%)",
          setTimeout(() => {
            u.style.transform = "translate(-52%, -50%)",
              setTimeout(() => {
                u.style.transform = "translate(-50%, -50%)";
              }, 50);
          }, 50);
      }, 50),
      y.textContent = `HP: ${Math.max(0, Math.floor(C))}`,
      C <= 0
  ) {
    const o = oe;
    N === "Training Dummy"
      ? E += o
      : (E += Math.floor(o / 2), m += Math.floor(o / 2)), se();
  }
  k(), T();
});
k();
const s = document.createElement("div");
s.style.width = "200px";
s.innerHTML = "<h3>Achievements</h3>";
x.appendChild(s);
s.style.backgroundImage =
  'url("https://img.craftpix.net/2023/10/Free-Summer-Pixel-Art-Backgrounds3.jpg")';
s.style.backgroundSize = "cover";
s.style.backgroundPosition = "center";
s.style.backgroundRepeat = "no-repeat";
s.style.borderRadius = "8px";
s.style.position = "relative";
s.style.overflow = "hidden";
const q = document.createElement("div");
Object.assign(q.style, {
  width: "180px",
  height: "180px",
  border: "2px solid #555",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f9f9f9",
  color: "#888",
  fontSize: "14px",
});
q.textContent = "Achievements";
s.appendChild(q);
const K = document.createElement("h4");
K.textContent = "Shop";
K.style.marginTop = "20px";
s.appendChild(K);
const w = document.createElement("div");
Object.assign(w.style, {
  width: "180px",
  height: "40px",
  border: "2px solid #555",
  margin: "0 auto",
  fontSize: "12px",
  textAlign: "center",
  padding: "8px 0",
  color: "#fff",
});
s.appendChild(w);
const h = document.createElement("button");
h.textContent = "Buy";
h.style.width = "180px";
h.style.margin = "10px auto";
h.style.display = "none";
s.appendChild(h);
const v = document.createElement("div");
Object.assign(v.style, {
  width: "180px",
  height: "40px",
  border: "2px solid #555",
  margin: "10px auto",
  fontSize: "12px",
  textAlign: "center",
  padding: "8px 0",
  boxSizing: "border-box",
  color: "#000",
  backgroundColor: "#fff",
});
s.appendChild(v);
const g = document.createElement("button");
g.textContent = "Buy";
g.style.width = "180px";
g.style.margin = "10px auto";
g.style.display = "none";
s.appendChild(g);
const M = document.createElement("div");
Object.assign(M.style, {
  width: "180px",
  height: "40px",
  border: "2px solid #555",
  margin: "10px auto",
  fontSize: "12px",
  textAlign: "center",
  padding: "8px 0",
  boxSizing: "border-box",
  color: "#000",
  backgroundColor: "#fff",
});
s.appendChild(M);
const b = document.createElement("button");
b.textContent = "Buy";
b.style.width = "180px";
b.style.margin = "10px auto";
b.style.display = "none";
s.appendChild(b);
function T() {
  if (!Z) return;
  const e = Math.pow(2, B + 1);
  w.innerHTML = `
    Helmet Level: ${B}<br>
    Cost: ${e} gold
  `;
  const n = Math.pow(2, S + 1);
  v.innerHTML = `
    Weapon Level: ${S}<br>
    Cost: ${n} gold
  `;
  const t = Math.pow(2, H + 1);
  M.innerHTML = `
  Charm Level: ${H}<br>
  Cost: ${t} gold
  `,
    w.style.color = "#000",
    w.style.backgroundColor = "#fff",
    w.style.boxSizing = "border-box",
    v.style.color = "#000",
    v.style.backgroundColor = "#fff",
    v.style.boxSizing = "border-box",
    M.style.color = "#000",
    M.style.backgroundColor = "#fff",
    M.style.boxSizing = "border-box",
    h.disabled = m < e,
    g.disabled = m < n,
    b.disabled = m < t;
}
setInterval(() => {
  if (c >= 3) {
    const e = re + B;
    E += e,
      te += e,
      O.innerHTML = `Passive EXP: ${e}/s<br>Accumulate: ${Math.floor(te)}`,
      O.style.backgroundColor = "#e0ffe0",
      O.style.color = "#006600";
  }
  k(), c >= 5 && T();
}, 1e3);
let $ = 0, D = 0;
function ae(e) {
  $ || ($ = e);
  const n = e - $;
  if ($ = e, c >= 5 && (D += n, D >= 1e3)) {
    const t = Math.floor(D / 1e3), a = 1 + B, o = t * a;
    m += o,
      ne += o,
      D -= t * 1e3,
      A.innerHTML = `Passive Gold: ${a}/s<br>Accumulated: ${Math.floor(ne)}`,
      A.style.backgroundColor = "#fff0e0",
      A.style.color = "#996600",
      k(),
      T();
  }
  requestAnimationFrame(ae);
}
requestAnimationFrame(ae);
h.addEventListener("click", () => {
  const e = Math.pow(2, B + 1);
  m >= e && (m -= e, B++, k(), T());
});
g.addEventListener("click", () => {
  const e = Math.pow(2, S + 1);
  m >= e && (m -= e, S++, k(), T());
});
b.addEventListener("click", () => {
  const e = Math.pow(2, H + 1);
  m >= e && (m -= e, H++, k(), T());
});
//# sourceMappingURL=index-c1d0af72.js.map
