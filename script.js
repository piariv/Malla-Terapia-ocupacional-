// ... (MISMO CÓDIGO DE CURSOS Y LAYOUT QUE YA TIENES)

const main = document.getElementById("curriculum");
const resetBtn = document.getElementById("resetBtn");

// Inyectar HTML dinámico
layout.forEach(y => {
  const yDiv = document.createElement("section");
  yDiv.classList.add("year");
  yDiv.innerHTML = `<h2>${y.year}</h2>`;
  y.semesters.forEach(s => {
    const sDiv = document.createElement("div");
    sDiv.classList.add("semester");
    const label = document.createElement("h3");
    label.textContent = s.name;
    sDiv.appendChild(label);
    s.ids.forEach(id => {
      const btn = document.createElement("button");
      btn.id = id;
      btn.className = "course";
      btn.textContent = courses[id].name;
      sDiv.appendChild(btn);
    });
    yDiv.appendChild(sDiv);
  });
  main.appendChild(yDiv);
});

const completed = new Set(JSON.parse(localStorage.getItem("completedCourses") || "[]"));
const allButtons = document.querySelectorAll(".course");

// Evaluar desbloqueo de cursos
function actualizarUI() {
  allButtons.forEach(btn => {
    const id = btn.id;
    const { prereq } = courses[id];
    const yaHecho = completed.has(id);
    const desbloqueado = prereq.every(p => completed.has(p));

    btn.disabled = !desbloqueado && !yaHecho;
    btn.classList.toggle("locked", !desbloqueado && !yaHecho);
    btn.classList.toggle("unlocked", desbloqueado && !yaHecho);
    btn.classList.toggle("done", yaHecho);
  });
}

// Al hacer clic en curso
allButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    completed.add(btn.id);
    localStorage.setItem("completedCourses", JSON.stringify([...completed]));
    actualizarUI();
  });
});

// Reset de malla
resetBtn.addEventListener("click", () => {
  if (confirm("¿Estás segura/o de reiniciar toda la malla?")) {
    localStorage.removeItem("completedCourses");
    completed.clear();
    actualizarUI();
  }
});

actualizarUI();
