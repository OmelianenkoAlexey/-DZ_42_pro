// ! ДЗ 42. Форма для реєстрації

// Реалізовуємо форму для реєстрації.

//     Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження(Текстове поле)
// Стать(radio)
// Місто(select)
// Адреса(textarea)
// Мови, якими володіє(checkbox)
// ….
// Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

const form = document.getElementById("form");

const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const dateOfBirth = document.getElementById("dateOfBirth");

const sex = document.getElementById("sex");
const man = document.getElementById("man");
const woman = document.getElementById("woman");

const city = document.getElementById("city");
const address = document.getElementById("address");

const langUk = document.getElementById("langUk");
const langRu = document.getElementById("langRu");
const langEn = document.getElementById("langEn");

const button = document.getElementById("button");

const boxInfo = document.getElementById("box-info");
const add = document.getElementById("add");
const close = document.getElementById("close");

function toggleElement() {
    const modal = document.querySelector(".modal-container");
    modal.classList.toggle("d-none");
    form.classList.toggle("d-none");
}

button.addEventListener("click", e => {
    e.preventDefault();
    toggleElement()

    document.getElementById("firstNameForm").innerText = firstName.value;
    document.getElementById("secondNameForm").innerText = secondName.value;
    document.getElementById("dateOfBirthForm").innerText = dateOfBirth.value;
    document.getElementById("cityForm").innerText = city.value;
    document.getElementById("addressForm").innerText = address.value;

    const sexForm = document.getElementById("sexForm");
    if (man.checked) sexForm.innerText = man.value;
    if (woman.checked) sexForm.innerText = woman.value;

    const data = [];
    if (langUk.checked) data.push(langUk.value);
    if (langRu.checked) data.push(langRu.value);
    if (langEn.checked) data.push(langEn.value);
    document.getElementById("langUkForm").innerText = data.join(", ");
});

add.addEventListener("click", e => {
    toggleElement()
});

close.addEventListener("click", e => {
    toggleElement()
});




