/* ===========================================================
   MALLA INTERACTIVA – Terapia Ocupacional
   -----------------------------------------------------------
   • Desbloquea cursos según prerrequisitos
   • Guarda progreso (localStorage o fallback en memoria)
   • Shift + clic en un curso “hecho” lo des‑marca
   =========================================================== */
(() => {
  "use strict";

  /* ---------- 1.  DEFINICIÓN DE CURSOS Y PRERREQUISITOS ---------- */
  const C = {   // id ⇒ {n: nombre, pre: [...]}
    // --- Primer año
    "taller-matematicas":           {n:"Taller de nivelación matemáticas", pre:[]},
    "taller-comunicacionales":      {n:"Taller de habilidades comunicacionales", pre:[]},
    "psicologia-general":           {n:"Psicología general", pre:[]},
    "anatomia-i":                   {n:"Anatomía I", pre:[]},
    "introduccion-to":              {n:"Introducción a la Terapia Ocupacional", pre:[]},
    "biologia":                     {n:"Biología", pre:[]},

    "anatomia-ii":                  {n:"Anatomía II", pre:["anatomia-i"]},
    "bases-to":                     {n:"Bases conceptuales de la Terapia Ocupacional", pre:["introduccion-to"]},
    "creatividad":                  {n:"Creatividad e innovación", pre:["taller-comunicacionales"]},
    "histo-genetica":               {n:"Histoembriología y genética", pre:["biologia"]},
    "ingles-aplicado":              {n:"Inglés aplicado", pre:[]},
    "psicologia-desarrollo":        {n:"Psicología del desarrollo en el niño y el adolescente", pre:["psicologia-general"]},

    // --- Segundo año
    "bioestadistica":               {n:"Bioestadística", pre:["taller-matematicas"]},
    "fisiologia":                   {n:"Fisiología", pre:["anatomia-ii","histo-genetica"]},
    "fisica-mecanica":              {n:"Física y mecánica", pre:[]},
    "marco-to":                     {n:"Marco de trabajo para la Terapia Ocupacional", pre:["bases-to"]},
    "psicologia-social":            {n:"Psicología social", pre:["psicologia-desarrollo"]},
    "salud-publica":                {n:"Salud pública", pre:[]},

    "biomecanica":                  {n:"Biomecánica", pre:[]},
    "estrategias-comunitaria":      {n:"Estrategias de intervención comunitaria", pre:[]},
    "legislacion-publica":          {n:"Legislación pública", pre:["marco-to","salud-publica"]},
    "neuro-traumatologia":          {n:"Neuro traumatología", pre:["fisiologia"]},
    "procesos-to-i":                {n:"Procesos de intervención en TO I", pre:["marco-to"]},
    "socio-antropologia":           {n:"Socio antropología", pre:["psicologia-social"]},

    // --- Tercer año
    "bioetica":                     {n:"Bioética", pre:[]},
    "contextos-emergentes":         {n:"Contextos emergentes", pre:["estrategias-comunitaria","socio-antropologia"]},
    "procesos-to-ii":               {n:"Procesos de intervención en TO II", pre:["procesos-to-i"]},
    "psicopatologia":               {n:"Psicopatología", pre:[]},
    "salud-ocup-ergonomia":         {n:"Salud ocupacional y ergonomía", pre:["biomecanica","neuro-traumatologia"]},
    "trastorno-ninos-adol":         {n:"Trastorno de salud en niños y adolescentes", pre:["neuro-traumatologia","procesos-to-i"]},

    "actividades-herramientas":     {n:"Actividades y herramientas terapéuticas", pre:["creatividad"]},
    "herramientas-eva":             {n:"Herramientas de evaluación y gestión", pre:["bioestadistica","estrategias-comunitaria"]},
    "procesos-to-iii":              {n:"Procesos de intervención en TO III", pre:["procesos-to-ii","contextos-emergentes"]},
    "trast-salud-fisica":           {n:"Trastorno de salud física en el adulto", pre:["procesos-to-ii"]},
    "trast-salud-mental":           {n:"Trastorno de la salud mental en el adulto y persona mayor", pre:["psicopatologia","salud-ocup-ergonomia","procesos-to-ii","trastorno-ninos-adol"]},
    "tecnologias-to":               {n:"Tecnologías aplicadas a la TO", pre:["fisica-mecanica","procesos-to-ii"]},

    // --- Cuarto año
    "interv-adulto-i":  {n:"Intervención de TO en el adulto I", pre:["actividades-herramientas","herramientas-eva","procesos-to-iii","trast-salud-fisica","trast-salud-mental","tecnologias-to"]},
    "interv-emerg-i":   {n:"Intervención de TO en contextos emergentes I", pre:["actividades-herramientas","herramientas-eva","procesos-to-iii"]},
    "interv-mayor-i":   {n:"Intervención de TO en la persona mayor I", pre:["actividades-herramientas","herramientas-eva","procesos-to-iii"]},
    "interv-ninos-i":   {n:"Intervención de TO en niños y adolescentes I", pre:["herramientas-eva","procesos-to-iii","trastorno-ninos-adol"]},
    "metodologia-i":    {n:"Metodología de la investigación I", pre:[]},
    "ortesis-i":        {n:"Ortesis I", pre:["salud-ocup-ergonomia"]},
    "preclinica-i":     {n:"Preclínica I", pre:["tecnologias-to"]},

    "interv-adulto-ii": {n:"Intervención de TO en el adulto II", pre:["interv-adulto-i"]},
    "interv-emerg-ii":  {n:"Intervención de TO en contextos emergentes II", pre:["interv-emerg-i"]},
    "interv-mayor-ii":  {n:"Intervención de TO en la persona mayor II", pre:["interv-mayor-i"]},
    "interv-ninos-ii":  {n:"Intervención de TO en niños y adolescentes II", pre:["interv-ninos-i"]},
    "metodologia-ii":   {n:"Metodología de la investigación II", pre:["metodologia-i"]},
    "ortesis-ii":       {n:"Ortesis II", pre:["ortesis-i"]},
    "preclinica-ii":    {n:"Preclínica II", pre:["preclinica-i","interv-adulto-i","interv-emerg-i","interv-mayor-i","interv-ninos-i","ortesis-i"]},

    // --- Quinto año
    "internado":        {n:"Internado profesional", pre:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","metodologia-ii","ortesis-ii","preclinica-ii"]},
    "proyecto":         {n:"Proyecto de título", pre:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","metodologia-ii","ortesis-ii","preclinica-ii"]}
  };

  /* ---------- 2.  ORGANIZACIÓN VISUAL (años / semestres) ---------- */
  const LAYOUT = [
    {y:"Primer año",  s:[
      {n:"I semestre",  ids:["taller-matematicas","taller-comunicacionales","psicologia-general","anatomia-i","introduccion-to","biologia"]},
      {n:"II semestre", ids:["anatomia-ii","bases-to","creatividad","histo-genetica","ingles-aplicado","psicologia-desarrollo"]}
    ]},
    {y:"Segundo año", s:[
      {n:"III semestre", ids:["bioestadistica","fisiologia","fisica-mecanica","marco-to","psicologia-social","salud-publica"]},
      {n:"IV semestre",  ids:["biomecanica","estrategias-comunitaria","legislacion-publica","neuro-traumatologia","procesos-to-i","socio-antropologia"]}
    ]},
    {y:"Tercer año",  s:[
      {n:"V semestre",  ids:["bioetica","contextos-emergentes","procesos-to-ii","psicopatologia","salud-ocup-ergonomia","trastorno-ninos-adol"]},
      {n:"VI semestre", ids:["actividades-herramientas","herramientas-eva","procesos-to-iii","trast-salud-fisica","trast-salud-mental","tecnologias-to"]}
    ]},
    {y:"Cuarto año",  s:[
      {n:"VII semestre", ids:["interv-adulto-i","interv-emerg-i","interv-mayor-i","interv-ninos-i","metodologia-i","ortesis-i","preclinica-i"]},
      {n:"VIII semestre",ids:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","interv-ninos-ii","metodologia-ii","ortesis-ii","preclinica-ii"]}
    ]},
    {y:"Quinto año",  s:[
      {n:"IX semestre", ids:["internado","proyecto"]}
    ]}
  ];

  /* ---------- 3.  ALMACENAMIENTO SEGURO ---------- */
  let storageOK = true;
  try{localStorage.setItem("_test","ok");localStorage.removeItem("_test");}
  catch{storageOK=false;}

  const mem = new Map();
  const get = k => storageOK ? localStorage.getItem(k) : mem.get(k);
  const set = (k,v) => storageOK ? localStorage.setItem(k,v) : mem.set(k,v);
  const clr = k => storageOK ? localStorage.removeItem(k) : mem.delete(k);

  /* ---------- 4.  CONSTRUCCIÓN DEL DOM ---------- */
  const main  = document.getElementById("curriculum");
  const reset = document.getElementById("resetBtn");

  LAYOUT.forEach(({y,s})=>{
    const yearSec = document.createElement("section");
    yearSec.className = "year";
    yearSec.innerHTML = `<h2>${y}</h2>`;

    s.forEach(({n,ids})=>{
      const semBox = document.createElement("div");
      semBox.className = "semester-block";
      semBox.insertAdjacentHTML("beforeend", `<h3>${n}</h3>`);

      const grid = document.createElement("div");
      grid.className = "semester-grid";

      ids.forEach(id=>{
        const b = document.createElement("button");
        b.id = id;
        b.className = "course";
        b.textContent = C[id].n;
        grid.appendChild(b);
      });

      semBox.appendChild(grid);
      yearSec.appendChild(semBox);
    });

    main.appendChild(yearSec);
  });

  /* ---------- 5.  ESTADO ACTUAL ---------- */
  const completed = new Set(JSON.parse(get("completedCourses")||"[]"));
  const btns = document.querySelectorAll(".course");

  function refresh(){
    btns.forEach(btn=>{
      const id   = btn.id;
      const done = completed.has(id);
      const open = C[id].pre.every(p=>completed.has(p));

      btn.disabled = !open;                    // se bloquea sólo si no está abierto
      btn.classList.toggle("locked",   !open);
      btn.classList.toggle("unlocked", open && !done);
      btn.classList.toggle("done",     done);
    });
  }

  /* ---------- 6.  EVENTOS ---------- */
  btns.forEach(btn=>{
    btn.addEventListener("click", e=>{
      const id = btn.id;

      // Shift + clic => des‑marcar
      if(e.shiftKey && completed.has(id)){
        completed.delete(id);
        set("completedCourses", JSON.stringify([...completed]));
        refresh();
        return;
      }

      // Clic normal => marcar si está abierto
      if(!btn.disabled && !completed.has(id)){
        completed.add(id);
        set("completedCourses", JSON.stringify([...completed]));
        refresh();
      }
    });
  });

  reset.addEventListener("click", ()=>{
    if(confirm("¿Seguro que quieres reiniciar la malla completa?")){
      clr("completedCourses");
      completed.clear();
      refresh();
    }
  });

  /* ---------- 7.  PRIMER RENDER ---------- *
