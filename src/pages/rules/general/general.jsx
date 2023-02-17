import React from "react";

import { Chapter } from "../../../components";

import s from './general.module.css';

export function General() {
  return (
    <div className={s.container}>
      <Chapter chapter='БАЗОВЫЕ ПРАВИЛА' />
      <div className={s.block}>
        <h2>Вижу то что вижу</h2>
        <div>Игра подразумеваем минимум условностей. Игроки должны с первого взгляда понимать видит перед собой</div>
        <br />
        <h2>Спорных ситуаций не существует</h2>
        <div>Любая спорная ситуация будет решаться в пользу обороняющегося, если вы чувствуете что игрок сознательно нарушает ряд правил, вы вправе уточнить у него после боевой ситуации правильно ли он понимает правила, если нет, то сопроводить подобного игрока мастерам на дополнительный инструктаж</div>
        <br />
        <h2>Это не вечеринка</h2>
        <div>Ролевая игра - не вечеринка или фестиваль, если вы едите просто выпить с друзьями, то делайте это в рамках своей роли и соблюдайте рамки приличия</div>
        <br />
        <h2>Никакого мусора</h2>
        <div>Оборудование мусорок/пепельниц обязательно в периметре лагеря, после игры мусор собирается и вывозится мастерами, чтоб полигон оставался чистым</div>
        <br />
        <h2>Соблюдайте закон</h2>
        <div>Никакой политики, религии, новостей реального мира. Закон выше любых игровых условностей</div>
        <br />
        <h2>Безопасность</h2>
        <div>Все игроки участвующие в мероприятии приезжают целыми и должны уехать целыми, старайтесь делать скидку на физическое состояние при выборе роли, и не забывайте беречь друг друга</div>
      </div>
    </div>
  )
}