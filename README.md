## **Проектная работа №6 на курсе Yandex Practicum "Проект Место".**

**Краткое резюме (short description)**
Проект с использованием `HTML` & `CSS` и на продолжение работы с `JS` - работой с массивами данных, созданием элементов из шаблонов, с заполнением полей элементами массива, созданием попапов, заполнением новых карточек элементов - всё силами скриптов JS.

---

**HTML**

- Подключение стилей и шрифтов.
- Семантическое использование тэгов, элементов разметки.
- Создание структуры по методологии БЭМ (блок, элемент, модификатор) (BEM block, element, modifyer).
- Создание элементов `pop-up` для взаимодействия с `JS`.

**CSS**

- Использование `flex` & `grid` для создания адаптивности к различным клиентским разрешениям экранов.
- Использование псевдоклассов `:hover`.
- Создание отступов содержания от краёв экрана.
- Графические элементы оформления четко спозиционированы, не перекрывают содержания. Часть графических элементов является картинками, часть - фоном.
- Управление размерами и стилями (в т.ч. цветами, начертанием, интерлиньяжем, кернингом и трэкингом) ссылок, текстов, отдельных секций.
- Импортирование в проект "интернет-фонтОв".

Подготовка основывалась на программе веб-дизайна Figma - изображения скопированы из Figma, описание стилей шрифтов, элементов, разметки - взято из этой программы.

**JS**

- Подключение `JS` скрипта в файле `HTML`.
- Создание элементов `pop-up`.
- Написание скрипта `JS`.
- Использование функции `querySelector` для нахождения необходимого класса в `HTML`-разметке.
- Объявление переменных.
- Объявление функций с добавлением и последующим удалением необходимого `CSS` класса, для активации работы формы.
- Применение функции запрета дефолтного поведения для события `event`.
- Назначение функции "слушателя" `addEventListener` действиям пользователя - `click` и `submit` - с занесением в `form` и `html` данных, введенных пользователем.
- Валидация форм на предмет соответствия обязательным требованиям -
- [ ] наличию каких-либо изменений в содержании поля, и в случае, если пользователь открыв карту и не введя ничего не может пересохранить карточку. Также, если пользователь внесет изменения, а затем удалит их, и вернет прежнее значение - карточку нельзя будет сохранить.
- [ ] минимальной длине новой записи,
- [ ] максимальной длине записи,
- [ ] соответствию назначения поля - например поле для указания URL должно быть заполнено с указанием `http://`

**Расширенное описание:**

Проект представляет собой несколько независимых блоков.

Блоки, составляющие настоящий проект, свёрстаны в комбинации технологий флекс и грид, а стили элементов размещены в отдельных блоках стилей по технологии БЭМ.

Технологии `flexbox` и `grid` позволили добиться значительной адаптивности блоков проекта к различным экранным разрешениям возможных пользователей - от разрешения десктопа свыше 1280 пикселей,
до разрешения небольшого смартфона в 320 пикселей.

При нажатии пользователем кнопок редактирования происходит открытие формы, куда пользователь может внести свои данные, а при нажатии конопки "сохранить" происходит сохранение данных.
Также пользователь может добавлять элементы - новые карточки географических мест. Пользователь может удалять как свои карточки, так и карточки по умолчанию.
Пользователь может отмечать понравившиеся места - нажатием на сердечко, которе при нажатии окрашивается в другой цвет.
Скрипт сайта валидирует (проверяет на соответствие требованиям владельца сайта) поля для записей, прежде чем разрешает сохранить изменения.

Посмотреть работу проекта в интернет можно по [ссылке](https://zhu55kov.github.io/mesto).
