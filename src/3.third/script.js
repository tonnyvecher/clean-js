document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("userList");
  const loadingText = document.getElementById("loading");
  const errorText = document.getElementById("error");

  // Функция для загрузки пользователей
  async function fetchRandomUsers(retryCount = 3) {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data = await response.json();
      displayUsers(data.results);
    } catch (error) {
      if (retryCount > 0) {
        console.log("Повторная попытка загрузки данных...");
        setTimeout(() => loadUsers(retryCount - 1), 2000); // Попробуйте снова через 2 секунды
      } else {
        loadingText.style.display = "none";
        errorText.style.display = "block";
        errorText.textContent =
          "Не удалось загрузить пользователей. Попробуйте позже.";
        console.error("Ошибка:", error);
      }
    } finally {
      loadingText.style.display = "none";
    }
  }

  // Функция для отображения пользователей
  function displayUsers(users) {
    users.forEach((user) => {
      const li = document.createElement("li");

      // Фото пользователя
      const img = document.createElement("img");
      img.src = user.picture.medium;
      img.alt = `${user.name.first} ${user.name.last}`;

      // Информация о пользователе
      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");

      const name = document.createElement("h3");
      name.textContent = `${user.name.first} ${user.name.last}`;

      const email = document.createElement("p");
      email.textContent = user.email;

      userInfo.appendChild(name);
      userInfo.appendChild(email);
      li.appendChild(img);
      li.appendChild(userInfo);

      userList.appendChild(li);
    });
  }

  // Запуск загрузки пользователей
  fetchRandomUsers();
});
