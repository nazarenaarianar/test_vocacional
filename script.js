const TYPES = {
  R: {
    n: "Realista",
    d: "Te atraen las actividades prácticas, concretas y manuales: trabajar con herramientas, máquinas, materiales, la naturaleza o el cuerpo en movimiento. Valorás ver resultados tangibles.",
    c: [
      "Ingeniería mecánica",
      "Ingeniería civil",
      "Agronomía",
      "Electricidad / electrónica",
      "Arquitectura técnica",
      "Veterinaria",
      "Aviación y piloto",
      "Kinesiología y deporte",
      "Mecánica automotriz",
      "Carpintería y construcción",
    ],
  },
  I: {
    n: "Investigador",
    d: "Te gusta observar, analizar, entender causas y resolver problemas complejos con razonamiento lógico y evidencia. Disfrutás aprender y trabajar con ideas y datos.",
    c: [
      "Medicina",
      "Biología / Biotecnología",
      "Física y Matemática",
      "Ciencias de la Computación",
      "Ciencia de datos",
      "Química / Farmacia",
      "Geología",
      "Investigación científica",
      "Ingeniería (áreas de investigación)",
      "Psicología (investigación)",
    ],
  },
  A: {
    n: "Artístico",
    d: "Valorás la creatividad, la originalidad y la expresión personal. Preferís ambientes flexibles, sin reglas rígidas, donde puedas imaginar y crear.",
    c: [
      "Diseño gráfico",
      "Diseño industrial / de indumentaria",
      "Arquitectura",
      "Artes visuales",
      "Música",
      "Comunicación audiovisual",
      "Letras y escritura",
      "Teatro, danza y actuación",
      "Publicidad creativa",
      "Diseño UX/UI",
    ],
  },
  S: {
    n: "Social",
    d: "Te motiva ayudar, enseñar, acompañar y colaborar con otras personas. Tenés facilidad para comunicarte, escuchar y generar vínculos.",
    c: [
      "Psicología",
      "Docencia / Pedagogía",
      "Enfermería",
      "Trabajo social",
      "Fonoaudiología",
      "Terapia ocupacional",
      "Medicina (áreas clínicas)",
      "Orientación y educación especial",
      "Recursos humanos",
      "Gestión de ONG y salud pública",
    ],
  },
  E: {
    n: "Emprendedor",
    d: "Disfrutás liderar, persuadir, tomar decisiones y asumir riesgos para alcanzar metas ambiciosas. Te atraen los negocios, la influencia y el protagonismo.",
    c: [
      "Administración de empresas",
      "Marketing y ventas",
      "Derecho",
      "Comercio internacional",
      "Ciencias políticas",
      "Periodismo y comunicación",
      "Gestión de emprendimientos",
      "Turismo y hotelería (gestión)",
      "Economía",
      "Relaciones públicas",
    ],
  },
  C: {
    n: "Convencional",
    d: "Preferís la organización, el orden, los procedimientos claros y la precisión. Sos metódico/a y confiable con datos, números y detalles.",
    c: [
      "Contabilidad",
      "Auditoría",
      "Administración pública",
      "Gestión de la información / Bibliotecología",
      "Secretariado y asistencia ejecutiva",
      "Logística y control de stock",
      "Análisis financiero",
      "Actuario / estadística aplicada",
      "Técnico en seguros y bancos",
      "Gestión documental y notariado",
    ],
  },
};
const EXTRA = {
  R: { e: "🔧", a: "Manitas de Oro", d: "Lo tuyo es hacer, no solo hablar. Si algo está roto, ya lo estás desarmando; si hay que construir, ya tenés las herramientas. Te encanta ver resultados que se puedan tocar." },
  I: { e: "🔬", a: "Cerebrito", d: "Tu cerebro nunca descansa: preguntás por qué, cómo y para qué. Te encantan los problemas difíciles, los datos y descubrir cómo funciona el mundo (aunque nadie te lo haya pedido)." },
  A: { e: "🎨", a: "Alma Creativa", d: "Ves el mundo como un lienzo en blanco. Necesitás crear, inventar y expresarte, y las reglas rígidas te dan alergia. Tu mente siempre tiene tres ideas locas en cola." },
  S: { e: "🤝", a: "Pegamento Social", d: "Sos de esas personas a las que todos les cuentan sus problemas, y lo disfrutás. Enseñar, ayudar y acompañar te llena el alma. Si hay un grupo, vos sos lo que lo mantiene unido." },
  E: { e: "🚀", a: "Jefe/a Nato/a", d: "Cuando nadie se anima, vos decís “yo me encargo”. Te mueven los desafíos, los negocios y convencer a otros de seguirte. Para vos, el riesgo es parte de la diversión." },
  C: { e: "📋", a: "Maestro/a del Orden", d: "Tu superpoder es que todo funcione sin drama: cada cosa en su lugar, todo en fecha, todo cierra. Los demás se desordenan; vos ya tenés la planilla lista." },
};
Object.keys(EXTRA).forEach((k) => Object.assign(TYPES[k], EXTRA[k]));

const FRASES = ["Arrancamos tranqui 😌", "Vas muy bien 👏", "Ya pasaste la mitad, ¡no abandones! 💪", "Ya casi, huelo la meta 🏁", "Última recta, ¡no te distraigas! 🔥"];

const Q = {
  R: [
    "¿Armar un mueble sin mirar el manual (y que no sobren tornillos)?",
    "¿Arreglar la canilla que gotea en vez de llamar al plomero?",
    "¿Pasar el día al aire libre con las manos en la tierra o entre animales?",
    "¿Construir algo con tus manos y poder decir “esto lo hice yo”?",
    "¿Desarmar un aparato solo para ver cómo funciona por dentro?",
  ],
  I: [
    "¿Pasar horas investigando un tema que nadie te pidió, solo por curiosidad?",
    "¿Resolver un problema de lógica y sentirte un genio/a?",
    "¿Ponerte un guardapolvo blanco y hacer experimentos?",
    "¿Encontrar patrones escondidos en una montaña de datos?",
    "¿Demostrar que una teoría es cierta... o que está completamente equivocada?",
  ],
  A: [
    "¿Garabatear en los márgenes del cuaderno porque no podés evitarlo?",
    "¿Escribir un cuento, una canción o un guion aunque nadie lo lea?",
    "¿Subirte a un escenario y darlo todo?",
    "¿Crear música, aunque sea en la ducha?",
    "¿Editar fotos o videos hasta que queden perfectos?",
  ],
  S: [
    "¿Ser la persona a la que todos le cuentan sus dramas?",
    "¿Explicar algo con paciencia hasta que a la otra persona le haga clic?",
    "¿Cuidar a alguien que se siente mal y verlo mejorar?",
    "¿Anotarte de voluntario/a en un proyecto del barrio?",
    "¿Calmar una pelea entre amigos haciendo de mediador/a?",
  ],
  E: [
    "¿Ser quien dice “yo me encargo” cuando nadie se anima a liderar?",
    "¿Imaginar tu propio negocio con tu nombre en el cartel?",
    "¿Convencer a alguien de que cambie de opinión (con argumentos y carisma)?",
    "¿Negociar un precio y sentir que ganaste una pequeña batalla?",
    "¿Dirigir un proyecto de principio a fin como un/a capitán/a?",
  ],
  C: [
    "¿Ordenar tus archivos en carpetas con nombres lógicos?",
    "¿Anotar cada gasto en una planilla?",
    "¿Seguir un procedimiento paso a paso sin saltarte nada?",
    "¿Encontrar ese error de una coma que nadie más vio?",
    "¿Controlar stock o presupuestos para que todo cierre al centavo?",
  ],
};
const SCALE = ["Ni loco/a", "Meh", "Depende del día", "Sí, bastante", "¡Es lo mío!"];
const keys = Object.keys(TYPES);
const items = [];
for (let i = 0; i < 5; i++) keys.forEach((k) => items.push({ k, t: Q[k][i] }));
const KEY = "riasec_progress_v1";
let ans = new Array(items.length).fill(null),
  idx = 0;
const $ = (id) => document.getElementById(id);
function show(id) {
  ["intro", "quiz", "result"].forEach((s) => $(s).classList.toggle("hide", s !== id));
  window.scrollTo(0, 0);
}
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ans, idx }));
  } catch (e) {}
}
function clearSaved() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {}
}
function render() {
  const it = items[idx];
  $("count").textContent = `Pregunta ${idx + 1} de ${items.length} · ${FRASES[Math.floor((idx / items.length) * FRASES.length)]}`;
  $("prog").style.width = (idx / items.length) * 100 + "%";
  $("qtext").textContent = it.t;
  $("opts").innerHTML = "";
  SCALE.forEach((s, i) => {
    const b = document.createElement("button");
    b.innerHTML = `<b>${i + 1}</b>${s}`;
    if (ans[idx] === i + 1) b.classList.add("sel");
    b.onclick = () => {
      ans[idx] = i + 1;
      save();
      if (idx < items.length - 1) {
        idx++;
        render();
      } else finish();
    };
    $("opts").appendChild(b);
  });
  $("back").disabled = idx === 0;
  $("skipfwd").classList.toggle("hide", ans[idx] === null || idx >= items.length - 1);
}
function confetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const emojis = ["🎉", "✨", "🎊", "⭐", "💫"];
  for (let i = 0; i < 36; i++) {
    const s = document.createElement("span");
    s.className = "cf";
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDelay = Math.random() * 1.2 + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 4500);
  }
}

function finish() {
  clearSaved();
  const sc = {};
  keys.forEach((k) => (sc[k] = 0));
  items.forEach((it, i) => (sc[it.k] += ans[i]));
  const rank = keys.slice().sort((a, b) => sc[b] - sc[a]);
  const pct = (k) => Math.round(((sc[k] - 5) / 20) * 100);
  const top = rank.slice(0, 3);
  const low = rank[5];
  const spread = sc[rank[0]] - sc[rank[5]];

  let html = `<div class="card"><div class="big">${TYPES[top[0]].e}</div>
    <div class="mu">Tu combo vocacional es...</div><div class="code">${top.join("")}</div>
    <p>Tu perfil: <b>${TYPES[top[0]].a}</b>, con toques de <b>${TYPES[top[1]].a}</b> y <b>${TYPES[top[2]].a}</b>.</p>`;
  if (spread < 5) {
    html += `<p class="note">Tus puntajes están muy parejos: sos un/a todoterreno con intereses para todos los gustos. No es un problema, pero te toca explorar un poco más. Charlalo con un/a orientador/a.</p>`;
  }
  html += `<h2>Tu medidor de intereses</h2>`;
  rank.forEach((k) => {
    html += `<div class="row"><span>${TYPES[k].e} ${TYPES[k].n}</span><div class="t"><i style="width:${pct(k)}%"></i></div><span>${pct(k)}%</span></div>`;
  });
  html += `<p class="mu">Cada área suma entre 5 y 25 puntos, acá lo ves en porcentaje.</p></div>`;

  top.forEach((k, i) => {
    html += `<div class="card" style="margin-top:14px"><div class="mu">${["🥇 1.º lugar", "🥈 2.º lugar", "🥉 3.º lugar"][i]} · ${k}</div>
      <h2 style="margin-top:2px">${TYPES[k].e} ${TYPES[k].n}: ${TYPES[k].a}</h2><p>${TYPES[k].d}</p>
      <div class="mu">Carreras y campos donde podrías brillar</div>
      <div class="chips">${TYPES[k].c.slice(0, i === 0 ? 10 : 6).map((c) => `<span class="chip">${c}</span>`).join("")}</div></div>`;
  });

  html += `<div class="card" style="margin-top:14px"><h2 style="margin-top:0">Y ahora, ¿qué hago con esto? 🤔</h2>
    <p>Fijate qué carreras se repiten entre tus tres áreas: ahí está el punto dulce. Tu área más bajita fue <b>${TYPES[low].n}</b>: no es que no puedas, simplemente no es lo que te enciende.</p>
    <p>Los intereses son solo una parte de la historia. Sumale tus habilidades, tus valores y tu contexto. Y antes de decidir, probá: hablá con gente que ya trabaja de eso, hacé un curso corto, visitá una facultad. Elegir carrera sin probar es como pedir pizza sin saber de qué es.</p>
    <p class="note"><b>Letra chica (pero importante):</b> resultado orientativo basado en el modelo RIASEC de Holland (1959, 1997). Este cuestionario es de elaboración propia, con humor y todo, y no fue validado estadísticamente. No es un diagnóstico psicológico ni reemplaza a un/a profesional.</p>
    <p class="noprint" style="margin-top:16px"><button class="pri" onclick="window.print()">Imprimir / guardar PDF</button> <button id="again">Repetir el test</button></p></div>`;

  $("result").innerHTML = html;
  show("result");
  confetti();
  $("again").onclick = () => {
    ans.fill(null);
    idx = 0;
    clearSaved();
    show("intro");
    init();
  };
}

function init() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(KEY));
  } catch (e) {}
  const ok =
    saved &&
    Array.isArray(saved.ans) &&
    saved.ans.length === items.length &&
    saved.ans.some((v) => v !== null);
  $("resume").classList.toggle("hide", !ok);
  $("resume").onclick = () => {
    ans = saved.ans;
    idx = Math.min(saved.idx || 0, items.length - 1);
    show("quiz");
    render();
  };
}
$("start").onclick = () => {
  ans.fill(null);
  idx = 0;
  clearSaved();
  show("quiz");
  render();
};
$("back").onclick = () => {
  if (idx > 0) {
    idx--;
    render();
  }
};
$("skipfwd").onclick = () => {
  if (idx < items.length - 1) {
    idx++;
    render();
  }
};
init();

/* ===== Selector de tema claro / oscuro ===== */
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  document.querySelectorAll(".theme button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.t === t)));
  try {
    localStorage.setItem("riasec_theme", t);
  } catch (e) {}
}
let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("riasec_theme") === "dark" ? "dark" : "light";
} catch (e) {}
document.querySelectorAll(".theme button").forEach((b) => (b.onclick = () => applyTheme(b.dataset.t)));
applyTheme(savedTheme);
