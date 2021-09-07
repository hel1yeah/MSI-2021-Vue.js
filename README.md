# MSI-2021-Vue.js

## Задание от компании [MacPaw](https://macpaw.com/ru)
## Ссылка на сам макет [PetsPaw](https://www.figma.com/file/BbG3BZtnM1ra67nbe6ClIR/MSI-2021-Frontend-Copy?node-id=105:3)

Приложение было сделано на **Vue CLI**, использовался **Vue 2**

В основе работы с данными был **Vuex**, он был разбит на отдельные файлы, и импортировались в  store/index.js  и подключались как модули, для гибкости и лаконичности/читаемости
приложения

**Vue Router** был как глобальный (по всему приложению) так и внутренний (внутри страницы), так же был включён **history mode** мод, что бы отрабатывали кнопки 
вперёд и назад.

Использовалась директива **transition** для плавной смены страниц внутри **Vue Router**

**Firebase** нужен был как хостинг для демонстрации возможностей в реальном времени.

Роботу с запросами отвечал **axios**. Работа с ним была построена так:
был корневой файл  axios.js  в папке  api, где были сделаны основные настройки **baseURL**, **headers.common**.
Для работы с запросами для каждой страницы был свой файл и в него импортировался **axios**

Была создана папка  helpers  с дополнительными функциями которые часто используются по всему проєкту.

Проєкт был максимально разбит на компоненты основные страницы находятся в папке views


Одна из самых больших сложностей задания, это то что нет точной формулировки, что конкретно и как конкретно должно работать, в некоторых местах сделать отправку POST запроса вообще не является возможным.
Иногда приходится вместо отправки одного GET запроса делать 3 и лепить с них одну полноценную нормальную отрисовку.

В целом это самое большое приложение, что я делал на 01.05.2021.
[Приложение](https://vue-app-212e8.web.app/)
