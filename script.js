(() => {
  "use strict";

  /* ---------- 1.  CURSOS Y PRERREQUISITOS ---------- */
  const courses = {
    "taller-matematicas": {n: "Taller de nivelación matemáticas", pre: []},
    "taller-comunicacionales": {n: "Taller de habilidades comunicacionales", pre: []},
    "psicologia-general": {n: "Psicología general", pre: []},
    "anatomia-i": {n: "Anatomía I", pre: []},
    "introduccion-to": {n: "Introducción a la Terapia Ocupacional", pre: []},
    "biologia": {n: "Biología", pre: []},

    "anatomia-ii": {n: "Anatomía II", pre: ["anatomia-i"]},
    "bases-to": {n: "Bases conceptuales de la Terapia Ocupacional", pre: ["introduccion-to"]},
    "creatividad": {n: "Creatividad e innovación", pre: ["taller-comunicacionales"]},
    "histo-genetica": {n: "Histoembriología y genética", pre: ["biologia"]},
    "ingles-aplicado": {n: "Inglés aplicado", pre: []},
    "psicologia-desarrollo": {n: "Psicología del desarrollo en el niño y el adolescente", pre: ["psicologia-general"]},

    /* … resto idéntico, sin cambios en los ids ni en los prerrequisitos … */
    "bioestadistica": {n: "Bioestadística", pre: ["taller-matematicas"]},
    "fisiologia": {n: "Fisiología", pre: ["anatomia-ii","histo-genetica"]},
    "fisica-mecanica": {n: "Física y mecánica", pre: []},
    "marco-to": {n: "Marco de trabajo para la Terapia Ocupacional", pre: ["bases-to"]},
    "psicologia-social": {n: "Psicología social", pre: ["psicologia-desarrollo"]},
    "salud-publica": {n: "Salud pública", pre: []},

    "biomecanica": {n: "Biomecánica", pre: []},
    "estrategias-comunitaria": {n: "Estrategias de intervención comunitaria", pre: []},
    "legislacion-publica": {n: "Legislación pública", pre: ["marco-to","salud-publica"]},
    "neuro-traumatologia": {n: "Neuro traumatología", pre: ["fisiologia"]},
    "procesos-to-i": {n: "Procesos de intervención en TO I", pre: ["marco-to"]},
    "socio-antropologia": {n: "Socio antropología", pre: ["psicologia-social"]},

    "bioetica": {n: "Bioética", pre: []},
    "contextos-emergentes": {n: "Contextos emergentes", pre: ["estrategias-comunitaria","socio-antropologia"]},
    "procesos-to-ii": {n: "Procesos de intervención en TO II", pre: ["procesos-to-i"]},
    "psicopatologia": {n: "Psicopatología", pre: []},
    "salud-ocup-ergonomia": {n: "Salud ocupacional y ergonomía", pre: ["biomecanica","neuro-traumatologia"]},
    "trastorno-ninos-adol": {n: "Trastorno de salud en niños y adolescentes", pre: ["neuro-traumatologia","procesos-to-i"]},

    "actividades-herramientas": {n: "Actividades y herramientas terapéuticas", pre: ["creatividad"]},
    "herramientas-eva": {n: "Herramientas de evaluación y gestión", pre: ["bioestadistica","estrategias-comunitaria"]},
    "procesos-to-iii": {n: "Procesos de intervención en TO III", pre: ["procesos-to-ii","contextos-emergentes"]},
    "trast-salud-fisica": {n: "Trastorno de salud física en el adulto", pre: ["procesos-to-ii"]},
    "trast-salud-mental": {n: "Trastorno de la salud mental en el adulto y persona mayor", pre: ["psicopatologia","salud-ocup-ergonomia","procesos-to-ii","trastorno-ninos-adol"]},
    "tecnologias-to": {n: "Tecnologías aplicadas a la TO", pre: ["fisica-mecanica","procesos-to-ii"]},

    "interv-adulto-i": {n: "Intervención de TO en el adulto I", pre: ["actividades-herramientas","herramientas-eva","procesos-to-iii","trast-salud-fisica","trast-salud-mental","tecnologias-to"]},
    "interv-emerg-i": {n: "Intervención de TO en contextos emergentes I", pre: ["actividades-herramientas","herramientas-eva","procesos-to-iii"]},
    "interv-mayor-i": {n: "Intervención de TO en la persona mayor I", pre: ["actividades-herramientas","herramientas-eva","procesos-to-iii"]},
    "interv-ninos-i": {n: "Intervención de TO en niños y adolescentes I", pre: ["herramientas-eva","procesos-to-iii","trastorno-ninos-adol"]},
    "metodologia-i": {n: "Metodología de la investigación I", pre: []},
    "ortesis-i": {n: "Ortesis I", pre: ["salud-ocup-ergonomia"]},
    "preclinica-i": {n: "Preclínica I", pre: ["tecnologias-to"]},

    "interv-adulto-ii": {n: "Intervención de TO en el adulto II", pre: ["interv-adulto-i"]},
    "interv-emerg-ii": {n: "Intervención de TO en contextos emergentes II", pre: ["interv-emerg-i"]},
    "interv-mayor-ii": {n: "Intervención de TO en la persona mayor II", pre: ["interv-mayor-i"]},
    "interv-ninos-ii": {n: "Intervención de TO en niños y adolescentes II", pre: ["interv-ninos-i"]},
    "metodologia-ii": {n: "Metodología de la investigación II", pre: ["metodologia-i"]},
    "ortesis-ii": {n: "Ortesis II", pre: ["ortesis-i"]},
    "preclinica-ii": {n: "Preclínica II", pre: ["preclinica-i","interv-adulto-i","interv-emerg-i","interv-mayor-i","interv-ninos-i","ortesis-i"]},

    "internado": {n: "Internado profesional", pre: ["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","metodologia-ii","ortesis-ii","preclinica-ii"]},
    "proyecto": {n: "Proyecto de título", pre: ["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","metodologia-ii","ortesis-ii","preclinica-ii"]}
  };

  /* ---------- 2.  PLANTILLA VISUAL ---------- */
  const layout = [
    {y:"Primer año", s:[
      {n:"I semestre", ids:["taller-matematicas","taller-comunicacionales","psicologia-general","anatomia-i","introduccion-to","biologia"]},
      {n:"II semestre", ids:["anatomia-ii","bases-to","creatividad","histo-genetica","ingles-aplicado","psicologia-desarrollo"]}
    ]},
    {y:"Segundo año", s:[
      {n:"III semestre", ids:["bioestadistica","fisiologia","fisica-mecanica","marco-to","psicologia-social","salud-publica"]},
      {n:"IV semestre", ids:["biomecanica","estrategias-comunitaria","legislacion-publica","neuro-traumatologia","procesos-to-i","socio-antropologia"]}
    ]},
    {y:"Tercer año", s:[
      {n:"V semestre", ids:["bioetica","contextos-emergentes","procesos-to-ii","psicopatologia","salud-ocup-ergonomia","trastorno-ninos-adol"]},
      {n:"VI semestre", ids:["actividades-herramientas","herramientas-eva","procesos-to-iii","trast-salud-fisica","trast-salud-mental","tecnologias-to"]}
    ]},
    {y:"Cuarto año", s:[
      {n:"VII semestre", ids:["interv-adulto-i","interv-emerg-i","interv-mayor-i","interv-ninos-i","metodologia-i","ortesis-i","preclinica-i"]},
      {n:"VIII semestre", ids:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","interv-ninos-ii","metodologia-ii","ortesis-ii","preclinica-ii"]}
    ]},
    {y:"Quinto año", s:[
      {n:"IX semestre", ids:["internado","proyecto"]}
    ]}
  ];

  /* ---------- 3.  POLYFILL DE localStorage (apto para file://) ---------- */
  let storageOK = true;
  try { localStorage.setItem("_test","ok"); localStorage.removeItem("_test"); } 
  catch (e) { storageOK = false; }
  const memStore   = new Map();
  const storeGet   = k => storageOK ? localStorage.getItem(k) : memStore.get(k);
  const storeSet   = (k,v) => storageOK ? localStorage.setItem(k,v) : memStore.set(k,v);
  const storeClear = k => storageOK ? localStorage.removeItem(k) : memStore.delete(k);

  /* ---------- 4.  CONSTRUCCIÓN DINÁMICA ---------- */
  const main    = document.getElementById("curriculum");
  const resetBt = document.getElementById("resetBtn");

  layout.forEach(year=>{
    const ySec = document.createElement("section");
    ySec.className = "year";
    ySec.innerHTML = `<h2>${year.y}</h2>`;
    
    year.s.forEach(sem=>{
      const box   = document.createElement("div");
      box.className = "semester";
      box.insertAdjacentHTML("beforeend", `<h3>${sem.n}</h3>`);

      const grid  = document.createElement("div");
      grid.className = "courses";               // separa título y cuadrícula
      sem.ids.forEach(id=>{
        const b  = document.createElement("button");
        b.id     = id;
        b.className = "course";
        b.textContent = courses[id].n;
        grid.appendChild(b);
      });
      box.appendChild(grid);
      ySec.appendChild(box);
    });
    main.appendChild(ySec);
  });

  /* ---------- 5.  ESTADO y RENDER ---------- */
  const completed = new Set(JSON.parse(storeGet("completedCourses")||"[]"));
  const btns      = document.querySelectorAll(".course");

  function paint () {
    btns.forEach(btn=>{
      const id   = btn.id;
      const done = completed.has(id);
      const open = courses[id].pre.every(p=>completed.has(p));

      btn.disabled = done || !open;               // desactiva si bloqueado **o** ya pasado
      btn.classList.toggle("locked",   !open && !done);
      btn.classList.toggle("unlocked", open  && !done);
      btn.classList.toggle("done",     done);
    });
  }

  /* ---------- 6.  EVENTOS ---------- */
  btns.forEach(btn=>{
    btn.addEventListener("click", e=>{
      const id = btn.id;
      if (btn.disabled) return;

      completed.add(id);
      storeSet("completedCourses", JSON.stringify([...completed]));
      paint();
    });

    /* Shift‑clic deshace */
    btn.addEventListener("click", e=>{
      if (!e.shiftKey) return;
      const id = btn.id;
      if (!completed.has(id)) return;           // solo deshace si estaba hecho

      completed.delete(id);
      storeSet("completedCourses", JSON.stringify([...completed]));
      paint();
    });
  });

  /* Reiniciar toda la malla */
  resetBt.addEventListener("click", ()=>{
    if (confirm("¿Seguro que quieres reiniciar la malla completa?")) {
      storeClear("completedCourses");
      completed.clear();
      paint();
    }
  });

  /* ---------- 7.  INICIO ---------- */
  paint();
})();
