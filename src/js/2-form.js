// 1. Ключ у локальному сховищі
const STORAGE_KEY = "feedback";

// 2. Об’єкт для зберігання даних форми
let formData = {
  email: "",
  message: ""
};

// 3. Вибираємо форму
const form = document.querySelector(".feedback-form");

// 4. Відновлення даних із локального сховища при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

// 5. Делегування події input для збереження даних у локальне сховище
form.addEventListener("input", event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 6. Обробка submit
form.addEventListener("submit", event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form Data Submitted:", formData);

  // Очищення
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});