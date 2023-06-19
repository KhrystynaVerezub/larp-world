import React from "react";

import { Chapter, ItemModal, LinkButton } from '../../../components';
import { autograph, confession, rest } from '../../../rules-text/actions';
import { Item } from '../../../rules-text/type';

import s from './psycho.module.css';

export function Psycho(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ПСИХОЗЫ' />
        <div>Психозы - это индикатор безумия вашего персонажа, связанный с пережитыми им событиями</div>
        <div className={s.listContainer}>
          <div>Психозы отмечаются в ДК</div>
          <div>Психозы не пропадают после мертвяка</div>
          <div>Психозы могут выдавать только интенданты и мастера</div>
          <div>Снимать психозы могут локации, предоставляющие услуги отдыха, барды, представители инквизиции</div>
          <div>Одновременно у игрока не может быть больше одного психоза</div>
          <div>На игрока всегда действует психоз высшего уровня</div>
          <div>Психозы нельзя обменивать, демонстрировать описание или указывать ка кбы вы отыграли этот психоз</div>
        </div>

        <div className={s.label}>Механика получения психоза</div>
        <div className={s.listContainer}>
          <div>Если у игрока до этого не было ни одного психоза, то при посещении мертвяка он кидает кубик и в случае выпадения единицы тянет карту психоза в закрытую</div>
          <div>Каждая последующая смерть добавляет вероятность получения психоза, к примеру умер второй раз то теперь для получения психоза достаточно выкинуть 1 или 2, умер третий раз - 1, 2, 3 и тд</div>
          <br />
          <div>Если у вас был психоз то так же кидаете кубик, но тянете психоз из колоды психозов уровнем выше, заменяете текущий психоз новым</div>
          <div>После получения психоза счетчик смертей сбрасывается до единицы, т.е. чтоб получить психоз в следующую смерть надо будет выкинуть единицу</div>
          <br />
          <div>В случае получения карты "Сожран" или "Прощение" персонаж получает больший стресс чем при обычной смерти, поэтому он кидает не один кубик а два, при выпадении на любом числа счетчика смертей - выдается психоз</div>
        </div>

        <div className={s.label}>Способы избавится от психоза</div>
        <div className={s.listContainer}>
          <div>Известный бард может подарить вам свой <LinkButton text='автограф' onclick={() => handleClick(autograph)} /></div>
          <div>Персонаж может <LinkButton text='отдохнуть' onclick={() => handleClick(rest)} /> в специальной локации, предоставляющей подобные услуги</div>
          <div>Персонаж может <LinkButton text='исповедаться' onclick={() => handleClick(confession)} /> у инквизитора</div>
        </div>

        <div className={s.label}>Список всех возможных психозов</div>
        <div>УРОВЕНЬ 1</div>
        <div className={s.listContainer}>
          <div><b>Метка жертвы</b> Немедленно замените эту карту на карту "Жертва" - у вас нет психоза, но есть метка жертвы</div>
          <div><b>Застенчивость</b> Вы не можете выступать на публике</div>
          <div><b>Паранойя</b> Вам кажется что за вами кто-то постоянно следит</div>
          <div><b>Навязчивость</b> Вы не желаете оставаться в одиночестве</div>
          <div><b>Критик</b> Не может молчать о том что все вокруг деликатны</div>
          <div><b>Шутник</b> Вы считаете себя самым лучшим юмористом на свете, хоть это очевидно не так</div>
          <div><b>Наивный</b> Вы считаете что все люди вокруг говорят исключительно правду</div>
          <div><b>Лингвист</b> Вы не терпите дефектов речи или ошибок в составлении слов</div>
          <div><b>Апатия</b> Тяжелые мысли тяготят вас - вы не можете заниматься производством</div>
          <div><b>Наваждение</b> Вы слышите таинственные голоса, которые никто кроме вас не различает</div>
        </div>

        <div>УРОВЕНЬ 2</div>
        <div className={s.listContainer}>
          <div><b>Метка жертвы</b> Немедленно замените эту карту на карту "Жертва" - у вас нет психоза, но есть метка жертвы</div>
          <div><b>Творческий</b> Считает что создан творить поэзию, поэтому пытается общаться рифмами</div>
          <div><b>Мистик</b> Вас тянет все мистическое и загадочное, и нет ничего таинственней чем сказки о чудовищах</div>
          <div><b>Фанатизм</b> При любой возможности персонаж пытается фанатично помочь церкви, действиями или деньгами</div>
          <div><b>Чистюля</b> Вы не можете выносить факта, что ваши бронехиты не на максимуме</div>
          <div><b>Фантазер</b> Вы не стесняетесь приукрасить какие-либо события в свою пользу</div>
          <div><b>Лудоман</b> При любой возможности вы будите играть в азартные игры на деньги, а если возможности нет - будите искать способ ее создать</div>
          <div><b>Благородство</b> Вы защищаете слабых, не терпите воровства, лжи и распутства</div>
          <div><b>Боязнь темноты</b> Вы категорически отказываетесь передвигаться в сумерки или ночью в одиночестве</div>
        </div>

        <div>УРОВЕНЬ 3</div>
        <div className={s.listContainer}>
          <div><b>Метка жертвы</b> Немедленно замените эту карту на карту "Жертва" - у вас нет психоза, но есть метка жертвы</div>
          <div><b>Слабость</b> Ваша грузоподъемность упала до 1</div>
          <div><b>Трусость</b> Отступает при виде опасного противника или чудовища</div>
          <div><b>Агрессия</b> Видя противника с меньшим боевым потенциалом персонаж начинает уверено провоцировать его на бой</div>
          <div><b>Эгоцентризм</b> Ваш персонаж никогда не будет сражаться в первой шеренге, пока таковая имеется</div>
          <div><b>Гемофобия</b> Если кто-то в прямой видимости персонажа переходит в состояние "тяжело ранен", то он пытается всеми силами не воспринимать этот факт</div>
          <div><b>Фатализм</b> При выборе из двух возможных - выбирает всегда самый дерзкий</div>
          <div><b>Ксенофоб</b> В мире есть только одна правильная расса - ваша, другие - менее верны</div>
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  )
}