/* ------------------------------------------------------------------
   1. DEFINICIÓN COMPLETA DE CURSOS Y PRERREQUISITOS
------------------------------------------------------------------ */
const courses = {
  // PRIMER AÑO
  "taller-matematicas":           {name:"Taller de nivelación matemáticas", prereq:[]},
  "taller-comunicacionales":      {name:"Taller de habilidades comunicacionales", prereq:[]},
  "psicologia-general":           {name:"Psicología general", prereq:[]},
  "anatomia-i":                   {name:"Anatomía I", prereq:[]},
  "introduccion-to":              {name:"Introducción a la Terapia Ocupacional", prereq:[]},
  "biologia":                     {name:"Biología", prereq:[]},

  "anatomia-ii":                  {name:"Anatomía II", prereq:["anatomia-i"]},
  "bases-to":                     {name:"Bases conceptuales de la Terapia Ocupacional", prereq:["introduccion-to"]},
  "creatividad":                  {name:"Creatividad e innovación", prereq:["taller-comunicacionales"]},
  "histo-genetica":               {name:"Histoembriología y genética", prereq:["biologia"]},
  "ingles-aplicado":              {name:"Inglés aplicado", prereq:[]},
  "psicologia-desarrollo":        {name:"Psicología del desarrollo en el niño y el adolescente", prereq:["psicologia-general"]},

  // SEGUNDO AÑO
  "bioestadistica":               {name:"Bioestadística", prereq:["taller-matematicas"]},
  "fisiologia":                   {name:"Fisiología", prereq:["anatomia-ii","histo-genetica"]},
  "fisica-mecanica":              {name:"Física y mecánica", prereq:[]},
  "marco-to":                     {name:"Marco de trabajo para la Terapia Ocupacional", prereq:["bases-to"]},
  "psicologia-social":            {name:"Psicología social", prereq:["psicologia-desarrollo"]},
  "salud-publica":                {name:"Salud pública", prereq:[]},

  "biomecanica":                  {name:"Biomecánica", prereq:[]},
  "estrategias-comunitaria":      {name:"Estrategias de intervención comunitaria", prereq:[]},
  "legislacion-publica":          {name:"Legislación pública", prereq:["marco-to","salud-publica"]},
  "neuro-traumatologia":          {name:"Neuro traumatología", prereq:["fisiologia"]},
  "procesos-to-i":                {name:"Procesos de intervención en TO I", prereq:["marco-to"]},
  "socio-antropologia":           {name:"Socio antropología", prereq:["psicologia-social"]},

  // TERCER AÑO
  "bioetica":                     {name:"Bioética", prereq:[]},
  "contextos-emergentes":         {name:"Contextos emergentes", prereq:["estrategias-comunitaria","socio-antropologia"]},
  "procesos-to-ii":               {name:"Procesos de intervención en TO II", prereq:["procesos-to-i"]},
  "psicopatologia":               {name:"Psicopatología", prereq:[]},
  "salud-ocup-ergonomia":         {name:"Salud ocupacional y ergonomía", prereq:["biomecanica","neuro-traumatologia"]},
  "trastorno-ninos-adol":         {name:"Trastorno de salud en niños y adolescentes", prereq:["neuro-traumatologia","procesos-to-i"]},

  "actividades-herramientas":     {name:"Actividades y herramientas terapéuticas", prereq:["creatividad"]},
  "herramientas-eva":             {name:"Herramientas de evaluación y gestión", prereq:["bioestadistica","estrategias-comunitaria"]},
  "procesos-to-iii":              {name:"Procesos de intervención en TO III", prereq:["procesos-to-ii","contextos-emergentes"]},
  "trast-salud-fisica":           {name:"Trastorno de salud física en el adulto", prereq:["procesos-to-ii"]},
  "trast-salud-mental":           {name:"Trastorno de la salud mental en el adulto y persona mayor", prereq:["psicopatologia","salud-ocup-ergonomia","procesos-to-ii","trastorno-ninos-adol"]},
  "tecnologias-to":               {name:"Tecnologías aplicadas a la TO", prereq:["fisica-mecanica","procesos-to-ii"]},

  // CUARTO AÑO
  "interv-adulto-i":              {name:"Intervención de TO en el adulto I", prereq:["actividades-herramientas","herramientas-eva","procesos-to-iii","trast-salud-fisica","trast-salud-mental","tecnologias-to"]},
  "interv-emerg-i":               {name:"Intervención de TO en contextos emergentes I", prereq:["actividades-herramientas","herramientas-eva","procesos-to-iii"]},
  "interv-mayor-i":               {name:"Intervención de TO en la persona mayor I", prereq:["actividades-herramientas","herramientas-eva","procesos-to-iii"]},
  "interv-ninos-i":               {name:"Intervención de TO en niños y adolescentes I", prereq:["herramientas-eva","procesos-to-iii","trastorno-ninos-adol"]},
  "metodologia-i":                {name:"Metodología de la investigación I", prereq:[]},
  "ortesis-i":                    {name:"Ortesis I", prereq:["salud-ocup-ergonomia"]},
  "preclinica-i":                 {name:"Preclínica I", prereq:["tecnologias-to"]},

  "interv-adulto-ii":             {name:"Intervención de TO en el adulto II", prereq:["interv-adulto-i"]},
  "interv-emerg-ii":              {name:"Intervención de TO en contextos emergentes II", prereq:["interv-emerg-i"]},
  "interv-mayor-ii":              {name:"Intervención de TO en la persona mayor II", prereq:["interv-mayor-i"]},
  "interv-ninos-ii":              {name:"Intervención de TO en niños y adolescentes II", prereq:["interv-ninos-i"]},
  "metodologia-ii":               {name:"Metodología de la investigación II", prereq:["metodologia-i"]},
  "ortesis-ii":                   {name:"Ortesis II", prereq:["ortesis-i"]},
  "preclinica-ii":                {name:"Preclínica II", prereq:["preclinica-i","interv-adulto-i","interv-emerg-i","interv-mayor-i","interv-ninos-i","ortesis-i"]},

  // QUINTO AÑO
  "internado":                    {name:"Internado profesional", prereq:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","metodologia-ii","ortesis-ii","preclinica-ii"]},
  "proyecto":                     {name:"Proyecto de título", prereq:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","metodologia-ii","ortesis-ii","preclinica-ii"]}
};

/* ------------------------------------------------------------------
   2. ESTRUCTURA VISUAL POR AÑO / SEMESTRE
------------------------------------------------------------------ */
const layout = [
  {year:"Primer año", semesters:[
    {name:"I semestre", ids:["taller-matematicas","taller-comunicacionales","psicologia-general","anatomia-i","introduccion-to","biologia"]},
    {name:"II semestre", ids:["anatomia-ii","bases-to","creatividad","histo-genetica","ingles-aplicado","psicologia-desarrollo"]}
  ]},
  {year:"Segundo año", semesters:[
    {name:"III semestre", ids:["bioestadistica","fisiologia","fisica-mecanica","marco-to","psicologia-social","salud-publica"]},
    {name:"IV semestre", ids:["biomecanica","estrategias-comunitaria","legislacion-publica","neuro-traumatologia","procesos-to-i","socio-antropologia"]}
  ]},
  {year:"Tercer año", semesters:[
    {name:"V semestre", ids:["bioetica","contextos-emergentes","procesos-to-ii","psicopatologia","salud-ocup-ergonomia","trastorno-ninos-adol"]},
    {name:"VI semestre", ids:["actividades-herramientas","herramientas-eva","procesos-to-iii","trast-salud-fisica","trast-salud-mental","tecnologias-to"]}
  ]},
  {year:"Cuarto año", semesters:[
    {name:"VII semestre", ids:["interv-adulto-i","interv-emerg-i","interv-mayor-i","interv-ninos-i","metodologia-i","ortesis-i","preclinica-i"]},
    {name:"VIII semestre", ids:["interv-adulto-ii","interv-emerg-ii","interv-mayor-ii","interv-ninos-ii","metodologia-ii","ortesis-ii","preclinica-ii"]}
  ]},
  {year:"Quinto año", semesters:[
    {name:"IX semestre", ids:["internado","proyecto"]}
  ]}
];

/* ------------------------------------------------------------------
   3. CONSTRUCCIÓN DINÁMICA DEL HTML
------------------------------------------------------------------ */
const main      = document.getElementById("curriculum");
const resetBtn  = document.getElementById("resetBtn");

layout.forEach(({year, semesters})=>{
  const yearSection = document.createElement("section");
  yearSection.className = "year";
  yearSection.innerHTML = `<h2>${year}</h2>`;
  
  semesters.forEach(({name, ids})=>{
    const semBlock = document.createElement("div");
    semBlock.className = "semester-block";
    semBlock.innerHTML = `<h3>${name}</h3>`;

    const grid = document.createElement("div");
    grid.className = "semester-grid";

    ids.forEach(id=>{
      const btn = document.createElement("button");
      btn.id = id;
      btn.className = "course";
      btn.textContent = courses[id].name;
      grid.appendChild(btn);
    });

    semBlock.appendChild(grid);
    yearSection.appendChild(semBlock);
  });

  main.appendChild(yearSection);
});

/* ------------------------------------------------------------------
   4. LÓGICA DE DESBLOQUEO Y PERSISTENCIA
------------------------------------------------------------------ */
const completed = new Set(JSON.parse(localStorage.getItem("completedCourses") || "[]"));
const buttons   = [...document.querySelectorAll(".course")];

function actualizarUI(){
  buttons.forEach(btn=>{
    const id        = btn.id;
    const hecho     = completed.has(id);
    const desbloq   = courses[id].prereq.every(p=>completed.has(p));

    // Estado de bloqueo
    btn.disabled = (!desbloq && !hecho) || hecho;    // Desactiva si bloqueado o ya cursado
    btn.classList.toggle("locked",  !desbloq && !hecho);
    btn.classList.toggle("unlocked",desbloq  && !hecho);
    btn.classList.toggle("done",    hecho);
  });
}

// Click sobre un ramo
buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(btn.disabled) return;
    completed.add(btn.id);
    localStorage.setItem("completedCourses", JSON.stringify([...completed]));
    actualizarUI();
  });
});

// Reiniciar
resetBtn.addEventListener("click",()=>{
  if(confirm("¿Quieres reiniciar toda la malla?")){
    localStorage.removeItem("completedCourses");
    completed.clear();
    actualizarUI();
  }
});

// Primera carga
actualizarUI();
