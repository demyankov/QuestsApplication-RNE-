Материалы занятия находятся на ветке lesson_1_init:

https://github.com/buzlan/RN-01/tree/lesson_1_init

Для выполнения домашнего задания вам нужно создать собственную ветку на одном уровне с main. Название собственной ветки выбирается самостоятельно, желательно называть ее своим именем.

Чтобы создать новую ветку, нужно выполнить команду: git checkout --orphan Buzlanov-rn

После этого нужно запушить эту ветку на сервер с помощью команды: git push -u origin Buzlanov-rn

Для отправки домашнего задания на проверку выполняем следующий алгоритм:

1)На своей ветке создаем еще одну ветку с названием урока и номера домашнего задания, например: buzlanov-lesson1-task1:

git checkout -b buzlanov-lesson1-task1

2)Пушим эту ветку на сервер:

git push -u origin buzlanov-lesson1-task1

3)Создаем ветку buzlanov-lesson1-task1-dev из ветки buzlanov-lesson1-task1:

git checkout -b buzlanov-lesson1-task1-dev (перед этой командой проверьте что вы находитесь на ветке buzlanov-lesson1-task1 и что она запушена!)

4)Выполняем домашнее задание в ветке buzlanov-lesson1-task1-dev.

5)После выполнения домашнего задания делаем коммиты и пушим изменения в ветку buzlanov-lesson1-task1-dev.

6)Создаем pull request из ветки buzlanov-lesson1-task1-dev в ветку buzlanov-lesson1-task1.

7)Добавляем меня в ревьюеры.

![image](https://github.com/buzlan/RN-01/assets/53368949/52a1772c-c3ef-4d06-a456-0d4b187be704)
