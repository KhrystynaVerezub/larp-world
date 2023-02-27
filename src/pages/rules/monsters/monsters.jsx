import React from 'react';

import { 
  ItemModal, LinkButton, Chapter,
  AccordionBlock,
} from '../../../components';

import { monsters, obsessed } from '../../../rules-text/examples/monsters';

import s from './monsters.module.css';

export function Monsters() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [item, setItem] = React.useState(null);

  const handleClick = React.useCallback((item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='МОНСТРЫ' />
        <div>Монстры могут быть различного типа, и различных характеристик, все идеи и пожелания обсуждаются с мастерами</div>
        <AccordionBlock
          label='Чудовища'
          items={[
            {
              label: 'Формы чудовища',
              text: 
                <>
                  <div>Чудовище обладает двумя формами: человеческой и монструозной, при этом обе формы должены отыгрываться одиним и тем же оператором</div>
                  <h3>Форма человека</h3>
                  <div>В этой форме на чудовищеа действую все правила боевых взаимодействий что и на человека</div>
                  <h4>Особеннтости пребывания монстра в человеческой форме</h4>
                  <li>Монстр выбирает недостатки из перечня, которые будут работать на человечекую форму</li>
                  <li>Каждый недостаток добавит некоторое количество хитов форме монстра, человеческая форма при этом остается без изменения, кроме отигрыша недостатка</li>
                  <li>В случае смерти человеческой формы игрок-чудовище обязан пробывать в монструозной форме 2 часа</li>
                  <li>Любая смена формы чудовища происходит на территории лагеря чудовища</li>
                  <h3>Форма монстра</h3>
                  <h3><LinkButton text={monsters.label} onclick={() => handleClick(monsters)} /></h3>
                  <div>Условия смены формы</div>
                  <li><b>Тяжелое ранение.</b> Человеческая форма получила статус “Тяжелое ранение”</li>
                  <li><b>Превращение.</b> Чудовище добровольно принимает форму монстра</li>
                  <div>ПРИМЕЧАНИЕ: чудовище всегда может добровольно перейти в монструозную форму</div>
                </>
            },
            {
              label: 'Лечение чудовища',
              text: 
                <>
                  <div>В любой форме чудовище может лечиться только за счет поедания людей</div>
                  <br />
                  <div>Если игрок хочет пожрать человека “в поле” то он должен находится в монструозной форме, но чудовище может поедать жертв в свое лагере в человеческой форме. (исключение чудовище-прожора)</div>
                  <div>1 человек/жертва восстанавливает 5 хитов чудовищеа</div>
                </>
            },
          ]}
        />
        <AccordionBlock
          label='Одержимые'
          items={[
            {
              label: 'Общие',
              text:
                <>
                  <div>Не может существовать одержимых без чудовища</div>
                  <div>Лимит одержимых на каждое чудовище: 5 одержимых</div>
                  <h3><LinkButton text={obsessed.label} onclick={() => handleClick(obsessed)} /></h3>
                </>
            },
            {
              label: 'Особые свойства',
              text:
                <>
                  <li><b>Плоть одержимого.</b> Не имеет броневых хитов, играет по "классической хитовке", внешний вид определяет количество хитов</li>
                  <li><b>Безвольный.</b> Чтоб одержимый вышел из мертвяка чудовище, должен пожертвовать хитами монструозной формы 5 хитов - один одержимый</li>
                  <li><b>Порченный.</b> Не могут получить метку жертвы</li>
                  <li><b>Зависимый.</b> Чудовище может пожертвовать 2 хитами чтоб вылечить полностью одержимого, не требует времени отигрывается касанием</li>
                  <li><b>Неизлечимый.</b> Только чудовище может лечить одержимых</li>
                  <li><b>Ведомый.</b> Не могут вести активные социальные взаимодействия (интеллект деградирует до “выполнить желания чудовищеа любой ценой”)</li>
                  <li><b>Фатальный.</b> Не имеет статуса "тяжело ранен" - вместо этого прееходит в статус "мертв"</li>
                </>
            }
          ]}
        />
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