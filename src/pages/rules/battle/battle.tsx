import React from 'react';
import { NavLink } from 'react-router-dom';

import { 
  ItemModal, LinkButton, Chapter,
  AccordionBlock, CharStatus,
} from '../../../components';

import { healPack, healPotion, repairPack,
  repairPotion,
} from '../../../rules-text/items';

import {
  fullArmor, heavyArmor, lightArmor,
  noArmor,
} from '../../../rules-text/examples/armor';

import { hiArmor } from '../../../rules-text/examples/armor/hi-quality';
import { Item } from '../../../rules-text/type';

import s from './battle.module.css';

export function Battle(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='БОЕВЫЕ ВЗАИМОДЕЙСТВИЯ' />
        <div>На игре представлен классический средневековый арсенал вооружения, кроме ручного огнестрельного оружия</div>
        <AccordionBlock
          items={[
            {
              label: 'Статус персонажа',
              element:
                <>
                  <div>переходы между статусами и снятие урона различным оружием можно проверить на нашей визуализации</div>
                  <NavLink replace to='/help/heal-calc'>Проверить как работает боевая система</NavLink>
                  <CharStatus
                    label='Лечение'
                    model='Красная повязка с зеленой печатью'
                    play='Этот персонаж лечится'
                  />

                  <CharStatus
                    label='Ремонт'
                    model='Серая повязка с красной печатью'
                    play='Снаряжение данного персонажа ремонтируется'
                  />

                  <CharStatus
                    label='Здоров'
                    model='Никак не маркируется'
                    play='Игрок с полным набором хитов'
                  />

                  <CharStatus
                    label='Ранен'
                    model='Никак не маркируется'
                    play='Игрок имеющий один или более хитов'
                  />

                  <CharStatus
                    label='Тяжело ранен'
                    model='Никак не маркируется'
                    play='Игрок находится в лежачем или сидячем положении в течении 15 минут. Игрок не может сопротивляться игровым действиям других игроков. В случае не оказания медицинской помощи в течении 15 минут переходит в состояние "Мертв"'
                  />

                  <CharStatus
                    label='Мертв'
                    model='Белая повязка с черной печатью'
                    play='Этот персонаж не участвует в игровом процессе'
                  />
                </>
            },
            {
              label: 'Урон оружия',
              element:
                <>
                  <div>Оружие ближнего боя снимает 1 хит, не пробивает щиты</div>
                  <div>Оружие дальнего боя снимает 2 хита, не пробивает щиты</div>
                  <div>Особое оружие снимает 5 хитов, не пробивает щиты</div>
                  <div>Пушка снимает 10 хитов, пробивает щиты</div>
                </>
            },
            {
              label: 'Особое оружие',
              element:
                <>
                  <div>Данный вид оружия выдается строго определенному кругу персонажей, которых можно однозначно распознать внешне</div>
                  <div>
                    <h4>Оружие капитана лагеря</h4>
                    <div>Требование: двуручное не колющее оружие ближнего боя</div>
                    <i>Капитан лагеря - это опытный боец, знающий все слабости креплений доспеха, поэтому его удары точный и смертоносны</i>
                  </div>

                  <div>
                    <h4>Оружие палача</h4>
                    <div>Основное двуручное оружие палача</div>
                    <div>Требование: двуручное не колющее оружие ближнего боя</div>
                    <i>Знания анатомии позволяет наносить удары по самым уязвимым точкам тела человека, что делает броню бессмысленной</i>
                    <div>Ограничения: Максимально допустимая броня для палача с особым оружием - легкая</div>
                  </div>

                  <div>
                    <h4>Чудовища</h4>
                    <div>Клыки, рога, шипы, когти, щупальца и т.д.</div>
                    <i>Чудовища - полумифические создания, обладающие нечеловеческой силой, способной сминать доспехи с первого удара</i>
                  </div>
                </>
            },
            {
              label: 'Хиты персонажа',
              element:
                <>
                  <div>Все люди обладают 1 живым хитом, оставшиеся хиты начисляются за счет брони</div>
                  <NavLink replace to='/help/char-calc'>Самостоятельно определить свои хиты</NavLink>
                  <br />
                  <div className={s.sub_container}>
                    <h3>{'Без доспеха'.toUpperCase()}</h3>
                    <div> 1 живой хит</div>

                    <div style={{fontWeight: 'bold', marginTop: '10px'}}>Примеры отсутствия брони</div>
                    {noArmor.element}

                    <h3>{'Легкий доспех'.toUpperCase()}</h3>
                    <div> 1 живой хит + 1 броневой хит</div>
                    <div>Обязательные элементы:</div>

                    <div className={s.listContainer}>
                      <li>Короткая (ниже талии, но не ниже колена) кольчуга</li>
                      <li>или бригантина, кожаный панцирь (из кожи толщиной не менее 3мм), латный, чешуйчатый или ламинарный нагрудник</li> 
                    </div>

                    <div style={{fontWeight: 'bold', marginTop: '10px'}}>Примеры легкой брони</div>
                    {lightArmor.element}
                  </div>

                  <div className={s.sub_container}>
                    <h3>{'Тяжелый доспех'.toUpperCase()}</h3>
                    <div> 1 живой хит + 2 броневых хита</div>
                    <div>Обязательные элементы:</div>

                    <div className={s.listContainer}>
                      <li>Полная латная, чешуйчатая, кольчато-пластинчатая или ламинарная защита корпуса (с защитой спины)</li>
                      <li>Латные или иные наплечники</li>
                      <li>Латные или пластинчатые наручи</li>
                      <li>Латная, пластинчатая или иная защита бедра до колена</li>
                    </div>
                  </div>

                  <div style={{fontWeight: 'bold', marginTop: '10px'}}>Примеры тяжелой брони</div>
                  {heavyArmor.element}

                  <div className={s.sub_container}>
                    <h3>{'Полный доспех'.toUpperCase()}</h3>
                    <div>1 живой хит + 3 броневых хита</div>
                    <div>Обязательные элементы:</div>

                    <div className={s.listContainer}>
                      <li>Полная латная, чешуйчатая, кольчато-пластинчатая или ламинарная защита корпуса (с защитой спины)</li>
                      <li>Полная латная или пластинчатая защита рук (наплечники+налокотники+наручи)</li>
                      <li>Полная латная, пластинчатая или иная защита ног до низа голени (защита бедра+наколенники+наголенники)</li>
                    </div>
                  </div>
                  <div><i>ПРИМЕЧАНИЕ: Чтоб ваши броневые хиты учитывались ОБЯЗАТЕЛЬНЫМ элементом любого комплекта считается шлем</i></div>

                  <div style={{fontWeight: 'bold', marginTop: '10px'}}>Примеры полной брони</div>
                  {fullArmor.element}

                </>
            },
            {
              label: 'Качество брони',
              element:
                <>
                  <div>Доспехи бывают обычного и высокого качества, если ваш доспех не соответствуют следующим требованиям - он считается обычным</div>
                  <h3>Броня высокого качества</h3>
                  <div>1 живой хит + ## броневых хитов + 1 броневой хит (за качество брони)</div>

                  <h3>Требования для доспеха высокого качества</h3>
                  <div className={s.listContainer}>
                    <li>Все стандартные модели металлических доспехов в хорошем состоянии</li>
                    <li>Габаритные доспехи повышенной эпичности</li>
                    <li>Начисляется только в полном снаряжении</li>
                  </div>
                  
                  <div><b>ПРИМЕЧАНИЕ:</b> Возможные представители высококачественной брони должны пройти фотодопуск</div>

                  <h4>Примеры брони высокого качества</h4>
                  {hiArmor.element}
                </> 
            },
            {
              label: 'Лечение',
              element:
                <>
                  <h3>Для лечения ранения в ГОСПИТАЛЕ</h3>

                  <div className={s.listContainer}>
                    <li>Игрок крепит на себя повязку "лечение"</li>
                    <li>Раненый игрок должен пробыть 20 минут возле госпиталя</li>
                    <li>Количество одновременно лечащихся ограничено количеством хирургических столов</li>
                    <li>Игроку восстанавливаются все живые хиты</li>
                    <li>Ресурсы при этом не расходуются</li>
                  </div>

                  <h3>Для лечения ранения <LinkButton text='МЕДКОМПЛЕКТОМ' onclick={() => handleClick(healPack)}/></h3>

                  <div className={s.listContainer}>
                    <li>На карте <LinkButton text='медкомплекте' onclick={() => handleClick(healPack)}/> отрывается левы нижний угол</li>
                    <li>Игрок повязывает повязку "лечение"</li>
                    <li>Игрок ожидает 15 минут</li>
                    <li>Игроку восстанавливается все живые хиты</li>
                  </div>

                  <h3>Лечение легкого ранения при помощи <LinkButton text='ЦЕЛЕБНОЙ МАЗИ' onclick={() => handleClick(healPotion)}/></h3>
                  
                  <div className={s.listContainer}>
                    <li>Раненный вскрывает пузырек мазью</li>
                    <li>Рвется бумажка которая находится внутри</li>
                    <li>Игроку восстанавливается все живые хиты</li>
                  </div>
                  <div><b>ПРИМЕЧАНИЕ:</b> Нельзя использовать во время активной фазы боя и при штурмах</div>

                  <h3>Условия срыва лечения</h3>
                  <div className={s.listContainer}>
                    <li><b>Получение урона:</b> Игрок получил урон, во время лечения, игрок переходит в состояние "тяжело ранен"</li>
                    <li><b>Загнивание раны:</b> Игрок значительно удалился от госпиталя при лечении в нем, игрок переходит в состояние "тяжело ранен"</li>
                  </div>
                  <div><b>ПРИМЕЧАНИЕ:</b> После срыва лечения ресурсы ив время затраченное на него не восстанавливаются</div>
                </>
            },
            {
              label: 'Ремонт',
              element:
                <>
                  <div>Ремонт восстанавливает броневые хиты, не восстанавливает живые хиты</div>
                  <div><b>ПРИМЕЧАНИЕ:</b> Ремонт доступен для персонажа только после полного восстановления живых хитов</div>
                  <h3>Для ремонта брони в КУЗНИЦЕ</h3>

                  <div className={s.listContainer}>
                    <li>Игрок крепит на себя повязку "ремонт"</li>
                    <li>Поломанный игрок должен пробыть 20 минут возле кузницы</li>
                    <li>Количество одновременно ремонтируемых ограничено количеством верстаков</li>
                    <li>Игрок восстанавливает все броневые хиты</li>
                    <li>Ресурсы при этом не расходуются</li>
                  </div>

                  <h3>Для ремонта брони  <LinkButton text='РЕМКОМПЛЕКТОМ' onclick={() => handleClick(repairPack)}/></h3>

                  <div className={s.listContainer}>
                    <li>На карте <LinkButton text='ремкомплекта' onclick={() => handleClick(repairPack)}/> отрывается левы нижний угол</li>
                    <li>Игрок повязывает повязку "ремонт"</li>
                    <li>Игрок ожидает 15 минут</li>
                    <li>Игроку восстанавливается все броневые хиты</li>
                  </div>

                  <h3>Ремонт поврежденной брони при помощи <LinkButton text='ОРУЖЕЙНОГО МАСЛА' onclick={() => handleClick(repairPotion)}/></h3>
                  <div className={s.listContainer}>
                    <li>Игрок вскрывает пузырек с маслом</li>
                    <li>Рвется бумажка которая находится внутри</li>
                    <li>Игрок восстанавливает все броневые хиты</li>
                  </div>
                  
                  <h3>Условия срыва ремонта</h3>
                  <div className={s.listContainer}>
                    <li><b>Трещина растет:</b> Игрок получил урон во время лечения, игроку наносится урон в хиты до применения ремонта</li>
                    <li><b>Швы без обработки:</b> Игрок значительно удалился от кузница, игрок прерывает ремонт и ему придется начинать его сначала</li>
                  </div>
                  <div><b>ПРИМЕЧАНИЕ:</b>  После срыва ремонта ресурсы ив время затраченное на него не восстанавливаются</div>
                </> 
            },
          ]}
        />
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