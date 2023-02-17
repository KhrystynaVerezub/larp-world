import React from "react";

import { Chapter, ItemModal, LinkButton } from "../../../components";

import { 
  healPack, healPotion, repairPack, repairPotion,
  artifact, ore, herbs, money
} from "../../../rules-text/items";

import s from './resources.module.css';

export function Resources() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const handleClick = React.useCallback((item) => {
    setItem(item);
    setIsOpen(true);
  }, []);
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='РЕСУРСЫ' />

        <div className={s.block}>
          <h2>Предметы</h2>
          <div>Все игровые предметы имеют свое физическое отображение (не бумажки). Все предметы из списка являются лутаемыми</div>

          <div className={s.block2}>
            <h3>Список предметов</h3>
            <li><LinkButton text='Игровые деньги' hint={money.hint} onclick={() => handleClick(money)}/>. Не имеет веса</li>
            <li><LinkButton text='Артефакт' hint={artifact.hint} onclick={() => handleClick(artifact)}/>. Не имеет веса</li>
            <li><LinkButton text='Целебная мазь' hint={healPotion.hint} onclick={() => handleClick(healPotion)}/>. Не имеет веса</li>
            <li><LinkButton text='Оружейное масло' hint={repairPotion.hint} onclick={() => handleClick(repairPotion)}/>. Не имеет веса</li>
            <li><LinkButton text='Медкомплект' hint={healPack.hint} onclick={() => handleClick(healPack)}/>. Весит 1</li>
            <li><LinkButton text='Ремкоплект' hint={repairPack.hint} onclick={() => handleClick(repairPack)}/>. Весит 1</li>
            <li><LinkButton text='Руда' hint={ore.hint} onclick={() => handleClick(ore)}/>. Весит 1</li>
            <li><LinkButton text='Травы' hint={herbs.hint} onclick={() => handleClick(herbs)}/>. Весит 1</li>
          </div>
        </div>

        <div className={s.block}>
          <h2>Грузоподъемность</h2>
          <div>Максимальная грузоподъемность человека или одержимого 2</div>
          <div>При этом ограничения на вес касаются только игровых предметов, оружие и доспехи таких ограничений не несут</div>

          <div className={s.block2}>
            <h3>Предметы повышающие грузоподъемность</h3>
            <li><b>Габаритные приспособленяи одиночного ношения (рюкзак):</b> Добавляет еще 2 единицы (итого для человека 4)</li>
            <li><b>Приспособленяи носимые в паре, но не имеющие колес (носилки):</b> Добавляет 4 единицы грузоподъемности на двоих</li>
            <li><b>Приспособленяи на колесной тяге:</b> Добавляет 4 единицы грузоподъемности</li>
            <div>ПРИМЕЧАНИЕ: Все приспособления рассматриваются отдельно и могут иметь большую или меньшую грузоподъемность. Индивидуальные сумки, мешочки, торбы, или кошельки не являются такими приспособлениями</div>
            <br />
            <div>При этом если вы не желаете чтоб вашим приспособлением пользовался кто-то другой после вашей кончины например, объявляйте что оно сломано (ломать физически не нужно), если вы этого не делаете, то игрок вправе взять этот предмет и использовать как пожелает (можете на месте обговорить условия и место возврата)</div>
            <br />
            <div>При превышении грузоподьемности на 1 единицу игрок не может сражаться и передвигается исключительно пешком</div>
            <div>При превышении грузоподьемности на 2 единицы игрок не может сражаться и передвигаться</div>
          </div>
        </div>

        <div className={s.block}>
          <h2>Влияние</h2>
          <div>Для лагерей статуса “Банда”, “Наемники”, “Орден”</div>
          <div>Определяет уровень лояльность королевства к данному отряду</div>
          <br />
          <div>Моделируются щитками с изображением символики королевства с которым заключен контракт. Щитки вешаются на знамя</div>
          <div className={s.block2}>
            <h3>Получают за:</h3>
            <li><b>Выполнение приказа:</b> За каждый выполненный контракт будет выдаваться денежное вознаграждение и очки влияния соответственно сложности задания</li>
            <li><b>Выкуп:</b> Сдача пленных интенданту за деньги</li>
            <li><b>Подкуп вельмож:</b> Сдача денежных средств интенданту</li>
            <li><b>Трофеи:</b> Сдача вражеских знамен интенданту (знамя после сдачи надлежит вернуть обратно через мастера или посыльного, знамя при этом не побирается пока не достигнет целевого лагеря)</li>
          </div>

          <div className={s.block2}>
            <h3>Теряются при:</h3>
            <li><b>Ограбление лагеря:</b> Другая банда ограбила ваш лагерь (снимается не вся сумма очков влияния на 10% процент от текущего показателя)</li>
            <li><b>Падение знамени:</b> Ваше знамя лежит на земле, не учитывается если лагерь подвергся ограблению</li>
            <li><b>Смерть командира:</b> Потеря главы лагеря сильный удар по репутации</li>
            <li><b>Отказ от выполнения:</b> Если вы отказались выполнять контракт предоставленный вашим нанимателем</li>
            <li><b>Свинарник:</b> Если в лагере чрезмерно грязно/не безопасно (имеется в виду пожизненный мусор)</li>
            <li><b>Бездуховность:</b> Отказу от уплаты церковной десятины</li>
          </div>

          <div className={s.block2}>
            <h3>Можно тратить на:</h3>
            <li><b>Снабжение:</b> Командир составляет заявку на получение ресурсов от своего нанимателя (товары прибудут в лагерь только через час)</li>
            <li><b>Шпионаж:</b> Узнать определенные сведения о другом лагере (сведения ожидаются в течении 30 минут). Цена зависит от сложности информации</li>
          </div>
          <div>ПРИМИЧАНИЕ: Все траты и начисления "Влияния" производиятся исключительно через интенданта лагеря</div>
        </div>

        <div className={s.block}>
          <h2>Метки жертвы</h2>
          <div>Для лагерей статуса “Чудовища”, “Подземелья”</div>
          <div>Определяет статус чудовища</div>
          
          <div className={s.block2}>
            <h3>Получают за:</h3>
            <li><b>Сделка:</b> Игрок может сократить время пребывания в мертвяке в два раза в обмен на получение метки жертвы</li>
            <li><b>Нити судьбы:</b> Дополнительные сюжетные условия</li>
          </div>

          <div className={s.block2}>
            <h3>Теряются при:</h3>
            <li><b>Очищение огнем:</b> Для этого игрока с меткой жертвы сжигают на лобном месте, после чего при выходе с мертвяка метка жертвы убирается</li>
            <li><b>Пожирание:</b> После поедания меченного игрока чудовищем, съеденный выходит из мертвяка без метки</li>
            <li><b>Заключение в темницу:</b> Лагерь со статусом “Чудовища” может содержать пленников в темнице, игрок при этом идет в мертвяк, после которого так же теряет метку жертвы</li>
          </div>
        </div>

        <div className={s.block}>
          <h2>Благодать</h2>
          <div>Для лагерей статуса “Инквизиция”</div>
          <div>Определяет уровень святости в регионе</div>

          <div className={s.block2}>
            <div>В случае получения максимального значения зависит от масштаба инквизиция может провести обряд “Очистка от зла” (вид проведения ритуала обсуждаем) получают на выбор:</div>
            <li>После массового молебна, все чудовища навсегда теряют половину живых хитов</li>
            <li>При затмении все раненые бойцы дожившие до него исцеляются</li>
            <li>Отмена негативного влияния затмения</li>
          </div>

          <div className={s.block2}>
            <h3>Получают за:</h3>
            <li><b>Очищение огнем:</b> Успешное сожжение персонажей с метками жертвы</li>
            <li><b>Пожертвования церкви:</b> Передача ресурсов/денег на нужды церкви (благотворительность в пользу церкви)</li>
          </div>

          <div className={s.block2}>
            <h3>Теряются при:</h3>
            <li><b>Сожжение невинного:</b> Сожжение не меченой жертвы</li>
            <li><b>Греховность:</b> Очевидное нарушение добродетелей</li>
            <li><b>Безнаказанность:</b> Молчаливое попустительство нарушению добродетелей </li>
          </div>

          <div className={s.block2}>
            <h3>Можно тратить на:</h3>
            <li><b>Чудо:</b> Возрождение умершего персонажа (воскрешенный должен быть не меченым и верующим) - может сократить мертвяк</li>
            <li><b>Греховность:</b> Очевидное нарушение добродетелей</li>
            <li><b>Молебен:</b> Молитвы отнимают много сил (вычитается ПОСЛЕ проведения молебна) </li>
          </div>
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          text={item}
        />
      )}
    </>
  )
}