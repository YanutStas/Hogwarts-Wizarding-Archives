# Релиз 0: Волшебный архив Хогвартса

## Задача:

В мире Гарри Поттера, тебе предстоит вступить в роль помощника Гермионы Грейнджер в Библиотеке Хогвартса. Ваша миссия — создать цифровую базу данных для хранения и управления информацией о всех артефактах, заклинаниях, магических существах и студентах Хогвартса. Это позволит профессорам и ученикам легко находить необходимую информацию и улучшить обучение и исследования в школе.

## Сюжет:

После возвращения к занятиям после очередного захватывающего лета, ты и Гермиона замечаете, что много важной информации о волшебном мире утрачено или записано небрежно в старых свитках и пыльных книгах. Вместе вы решаете, что пора перенести всё это в цифровую систему. Ваша задача — создать надежную и удобную базу данных, которая станет жизненно важным ресурсом для всех магов и ведьм Хогвартса.

# Релиз 1: Структура базы данных "Волшебный архив Хогвартса" (hogwartsWizardingArchives)

## Задача:

Для реализации нашего волшебного архива, вам предстоит создать базу данных с подробными моделями, которые отражают разнообразие магического мира Хогвартса. Ваша задача – тщательно продумать и спроектировать модели, которые будут учитывать все необходимые аспекты и связи между данными.

### Модели для базы данных:

1. Студенты – содержит информацию о каждом ученике Хогвартса, включая имя, дом, год обучения, и специальные достижения.
2. Профессора – хранит данные о преподавателях, включая их имя, предмет, который они преподают, и кабинет.
3. Артефакты – описывает каждый известный магический предмет, его историю, местонахождение и магические свойства.
4. Магические существа – база данных всех магических существ, их типы, особенности и места обитания.
   Заклинания – список всех изучаемых и используемых заклинаний, включая их название, сложность и эффекты.
5. Курсы – информация о предметах, преподаваемых в Хогвартсе, со ссылками на профессоров и учебные материалы.
6. События – календарь школьных событий и важных дат, таких как Кубок Квиддича, пир в начале учебного года, и т.д.

Связи между моделями:

1. Студенты и Профессора связаны через Курсы, так как профессора преподают студентам.
2. Артефакты **могут быть** связаны с определёнными Студентами или Профессорами, которые имеют к ним доступ или владели ими в прошлом.
3. Магические существа **могут быть** связаны с определенными местами и событиями в школьном календаре.
4. Заклинания связаны с Курсами, где они преподаются, и **могут быть** использованы в Событиях.

## Задание:

1. Подумайте о том, какие поля будут в каждой модели и какие типы данных лучше всего подходят для их хранения.
2. Рассмотрите, какие связи между таблицами будут наиболее логичными и эффективными для запросов, которые могут возникнуть при использовании базы данных.

# Релиз 2: Заполнение базы данных "Волшебный архив Хогвартса"

## Задача:

Теперь, когда структура вашей магической базы данных Хогвартса готова, пришло время оживить её, заполнив данными. Этот этап поможет вам проверить и оптимизировать структуру базы данных, а также подготовить основу для будущих запросов и анализа данных.

### Сиды (начальные данные) для каждой модели:

1. Студенты – создайте записи для студентов из разных домов Хогвартса, включая таких известных персонажей, как Гарри Поттер, Гермиона Грейнджер и Драко Малфой. Включите информацию о их годах обучения и особенностях.

2. Профессора – заполните данные о профессорах, таких как Минерва МакГонагалл, Северус Снейп и Аластор Муди, указав предметы, которые они преподают, и номера их кабинетов.

3. Артефакты – включите описание таких артефактов, как Марадерская карта, Камень воскрешения и Золотое снитч, с деталями их происхождения и местонахождения.

4. Магические существа – добавьте информацию о различных существах, таких как наги, василиски и фениксы, их обитании и свойствах.

5. Заклинания – запишите различные заклинания, включая "Авада Кедавра", "Экспеллиармус" и "Патронус", с описанием их эффектов.

6. Курсы – организуйте курсы, которые преподаются в Хогвартсе, связав их с профессорами и добавив описание курсов.

7. События – запланируйте школьные мероприятия, такие как Хэллоуин, Бал в честь турнира Трех Волшебников и финальные матчи Кубка Квиддича.

## Задание:

1. Разработайте скрипты сидов для каждой таблицы, используя фактические данные, которые отражают характер и атмосферу Хогвартса.
2. Убедитесь, что данные логично связаны между собой и отражают возможные реальные взаимосвязи между разными сущностями в вашей базе данных.

# Релиз 3: Академическая администрация Хогвартса

## Задача:

Вам предстоит стать частью административной команды Хогвартса и управлять данными студентов, преподавателей и курсов. Начнем с базовой структуры вашей работы с базой данных.

## Сценарий 1: Регистрация студентов

Создайте функцию `registerStudent`, которая будет добавлять нового студента в базу данных. Данные для ввода: имя, дата рождения, дом (Гриффиндор, Слизерин и т.д.), курс.

Предусмотрите возможность записи студента на разные курсы при регистрации. Студент может выбрать до трех различных предметов.

Добавьте проверки на возраст студента (не младше 11 лет) и принадлежность к одному из четырех домов.

# Релиз 4: Расписание занятий

## Задача:

Теперь, когда у нас есть информация о студентах и курсах, нужно создать систему для управления расписанием занятий в Хогвартсе.

## Сценарий 2: Создание расписания

Разработайте функцию `createSchedule`, которая позволит добавлять информацию о занятиях для каждого курса. Включите следующие данные: идентификатор курса, преподаватель, время начала и окончания, дни недели (понедельник, вторник и т.д.).

Убедитесь, что время начала и окончания занятий не пересекается с другими занятиями на том же курсе.

Предоставьте возможность преподавателям вести несколько курсов, но гарантируйте, что они не будут назначены на одно и то же время.

# Релиз 5: Отслеживание очков домов

## Задача:

Настало время разработать систему для подсчета очков домов в Хогвартсе, которая будет аккумулировать баллы, полученные студентами за успехи и нарушения.

## Сценарий 3: Счетчик очков

Создайте функцию `calculateHousePoints`, которая принимает массив студентов, где каждый студент имеет атрибуты: имя, дом и массив событий, содержащий баллы, полученные или потерянные за различные достижения или нарушения.

Используйте методы массива map и reduce для подсчета суммы баллов для каждого дома. Учтите, что баллы могут быть как положительными, так и отрицательными.

Для каждого дома подсчитайте общее количество баллов и верните объект с названием дома и итоговым количеством очков.

Внесите проверку на корректность данных: каждый элемент событий должен быть числом.

### Пример использования функции:

const students = [
{ name: 'Harry Potter', house: 'Gryffindor', points: [15, -3, 10] },
{ name: 'Draco Malfoy', house: 'Slytherin', points: [5, -15, 20] }
];

const housePoints = calculateHousePoints(students);
console.log(housePoints); // Вывод: { Gryffindor: 22, Slytherin: 10 }

# Релиз 6: Расписание занятий

## Задача:

Создание удобной системы для организации учебного расписания в Хогвартсе, которая учитывает все требования и предпочтения профессоров, а также доступность аудиторий.

## Сценарий 4: Управление расписанием

Определите класс `Schedule`, который будет управлять расписанием занятий. Класс должен содержать методы для добавления и удаления занятий, а также для оптимизации расписания.

Добавьте методы:

1. `addCourse(course)`: Добавляет курс в расписание. course должен иметь атрибуты name, professor, и room.
2. `removeCourse(courseName)`: Удаляет курс по его названию.
3. `optimizeSchedule()`: Оптимизирует расписание с учетом предпочтений профессоров и доступности аудиторий.

Убедитесь, что метод `optimizeSchedule` реализует логику проверки пересечений занятий в одной аудитории и конфликтов между курсами одного профессора.

### Пример использования класса:

const hogwartsSchedule = new Schedule();
hogwartsSchedule.addCourse({ name: 'Defence Against the Dark Arts', professor: 'Professor Snape', room: '101A' });
hogwartsSchedule.addCourse({ name: 'Potions', professor: 'Professor Snape', room: '102B' });

// Пытаемся оптимизировать расписание
hogwartsSchedule.optimizeSchedule();

// Вывод информации о текущем расписании
console.log(hogwartsSchedule.getCurrentSchedule());

# Релиз 7: Проверка наличия артефактов

## Задача:

Разработать систему для мониторинга статуса различных магических артефактов в Хогвартсе, чтобы обеспечить их безопасное хранение и использование.

## Сценарий 5: Статус артефактов

Создайте функцию `checkArtifactAvailability` для проверки статуса артефактов. Функция должна использовать условные операторы для определения текущего состояния артефакта: находится ли он в архиве, на реставрации, или выставлен для изучения.

Функция должна принимать объект `artifact`, содержащий следующие свойства:

`name`: Название артефакта.
`status`: Статус артефакта ('archived', 'restoring', 'on_display').
В зависимости от статуса артефакта, функция должна выводить соответствующее сообщение:

Если `archived`: "Артефакт [name] находится в архиве."
Если `restoring`: "Артефакт [name] на реставрации."
Если `on_display`: "Артефакт [name] выставлен для изучения."

### Пример использования функции:

const artifacts = [
{ name: 'Cloak of Invisibility', status: 'on_display' },
{ name: 'Marauder\'s Map', status: 'archived' },
{ name: 'Elder Wand', status: 'restoring' }
];

artifacts.forEach(artifact => checkArtifactAvailability(artifact));
