﻿# Проект в рамках продвинутого курса по веб-разработке в LoftSchool
>Автор проекта: Анна Никитина
>Наставник: Ольга Болотова
#Описание проекта: что, куда, зачем
#Инструкции по установке
#Инструкиця по настройке
#Список папок, файлов и их предназначение
## Автор проекта:
Анна Никитина
 ## Наставник:
Ольга Болотова
 ##  Чтобы развернуть проект необходимо:
```sh
$ git clone git@github.com:loftschool/advanced-boilerplate.git
$ cd advanced-boilerplate
$ npm install
```
 ## Скрипты package.json:
 | Скрипт | Назначение |
| ------ | ------ |
| dev:mpa | Разработка основного сайта. Страницы **обо мне**, **блог** и т.п. Запустит dev сценарии **Gulp**. |
| dev:spa | Разработка админ панели в стиле **SPA** на **Vue.js** |
| build  | Сборка обоеих частей проекта. Все файлы будут доступны из директории **dist** |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |
 #### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```