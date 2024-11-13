document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  const showAllBtn = document.getElementById("showAll");
  const showCompletedBtn = document.getElementById("showCompleted");
  const showIncompleteBtn = document.getElementById("showIncomplete");

  // Добавить новую задачу по нажатию на кнопку
  addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
      addTask(taskInput.value.trim());
      taskInput.value = ""; // Очистка поля ввода после добавления задачи
    }
  });

  // Добавить новую задачу при нажатии Enter в поле ввода
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
      addTask(taskInput.value.trim());
      taskInput.value = ""; // Очистка поля ввода после добавления задачи
    }
  });

  // Функция для добавления задачи в список
  function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Кнопка для удаления задачи
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("delete-btn");

    // Обработка клика по задаче для отметки как завершённой
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Обработка удаления задачи
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  // Фильтрация задач
  showAllBtn.addEventListener("click", () => {
    filterTasks("all");
  });

  showCompletedBtn.addEventListener("click", () => {
    filterTasks("completed");
  });

  showIncompleteBtn.addEventListener("click", () => {
    filterTasks("incomplete");
  });

  function filterTasks(filter) {
    const tasks = taskList.getElementsByTagName("li");
    for (let task of tasks) {
      switch (filter) {
        case "all":
          task.style.display = "flex";
          break;
        case "completed":
          task.style.display = task.classList.contains("completed")
            ? "flex"
            : "none";
          break;
        case "incomplete":
          task.style.display = !task.classList.contains("completed")
            ? "flex"
            : "none";
          break;
      }
    }
  }
});
