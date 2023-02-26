import React from "react";

import { Chapter, AccordionBlock, LinkButton, ItemModal } from "../../../components";

import { 
  captain, fighter, inquisitor,
  quartermaster, executor, priest,
  civil, craftsman, nobleman,
  merchant,
} from "../../../rules-text/examples/characters";

import { 
  midens, midensFasionHigh, midensFasionNorm,
  north, northFasionHigh, northFasionNorm,
  south, southFasionHigh, southFasionNorm,
} from "../../../rules-text/examples/nation";

import { ancestors, politeism, throne } from "../../../rules-text/examples/religion";

import s from './characters.module.css';

export function Characters() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [item, setItem] = React.useState(null);

  const handleClick = React.useCallback((item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ПЕРСОНАЖИ' />

        
        <AccordionBlock
          label='Люди'
          items={[
            {
              label: 'Архетипы',
              text:
                <>
                  <div>Переычисленные ниже ерсонажи-люди подчиняются общим правилам и не имеют особых преимуществ</div>
                    
                    <li><LinkButton text='Капитан' onclick={() => handleClick(captain)} /> Опытный игрок готовы собрать и организовать бойцов для выполнения различных задач</li>
                    <li><LinkButton text='Интендант' onclick={() => handleClick(quartermaster)} /> Опытный игрок, выполняющий функции локального мастера</li>
                    <li><LinkButton text='Боец' onclick={() => handleClick(fighter)} /> Игрок желающий повоевать в воставе команды</li>

                    <li><LinkButton text='Инквизитор' onclick={() => handleClick(inquisitor)} /> Опытный игрок желающий отыграть принципиально верующего, для которого жизнь лишь метод оправдать загробное существование</li>
                    <li><LinkButton text='Палач' onclick={() => handleClick(executor)} /> Может быть как классическим паладином света и добра, так и реалистичным крестоносцем, который легко мог в голодные годы сожрать соседа</li>
                    <li><LinkButton text='Священник' onclick={() => handleClick(priest)} /> Опытный игрок в ораторском искусстве</li>

                    <li><LinkButton text='Простолюдин' onclick={() => handleClick(civil)} /> Игрок желающий отыгрывать простолюдина разного достатка и прошлого</li>
                    <li><LinkButton text='Ремесленник' onclick={() => handleClick(craftsman)} /> Игрок готовы играть в экономику и понимающий ее принципы</li>
                    <li><LinkButton text='Аристократ' onclick={() => handleClick(nobleman)} /> Игрок любитель социальных взаимодействий, готовый при помощи слов и своего влияния продвигать интересы выбранной державы</li>
                    <li><LinkButton text='Торговец' onclick={() => handleClick(merchant)} /> Игрок готовый толкать экономику, используя в качестве оружия слово, информацию и отличные знания экономики</li>
                </>
            },
          ]}
        />

        <AccordionBlock
          label='Народность'
          items={[
            {
              label: 'Мединцы',
              text: 
                <>
                  {midens.text}
                  <div className={s.fasion_container}>
                    <h3><LinkButton text={midensFasionNorm.label} onclick={() => handleClick(midensFasionNorm)} /></h3>
                    <h3><LinkButton text={midensFasionHigh.label} onclick={() => handleClick(midensFasionHigh)} /></h3>
                  </div>
                </>
            },
            {
              label: 'Южане',
              text: 
                <>
                  {south.text}
                  <div className={s.fasion_container}>
                    <h3><LinkButton text={southFasionNorm.label} onclick={() => handleClick(southFasionNorm)} /></h3>
                    <h3><LinkButton text={southFasionHigh.label} onclick={() => handleClick(southFasionHigh)} /></h3>
                  </div>
                </>
            },
            {
              label: 'Северяне',
              text: 
                <>
                  {north.text}
                  <div className={s.fasion_container}>
                    <h3><LinkButton text={northFasionNorm.label} onclick={() => handleClick(northFasionNorm)} /></h3>
                    <h3><LinkButton text={northFasionHigh.label} onclick={() => handleClick(northFasionHigh)} /></h3>
                  </div>
                </>
            },
          ]}
        />

        <AccordionBlock
          label='Религия'
          items={[
            {
              label: 'Святой престол',
              text: <>{throne.text}</>
            },
            {
              label: 'Политеизм',
              text: <>{politeism.text}</>
            },
            {
              label: 'Культ предков',
              text: <>{ancestors.text}</>
            },
          ]}
        />

        <div className={s.block}>
          <h2>Чудовища</h2>
          <div>Монстры могут быть различного типа, и различных характеристик, все идеи и пожелания обсуждаются с мастерами</div>

          <div className={s.block2}>
            <h3>Костюм чудовища</h3>
            <div>Основные требования к костюму:</div>
            <li><b>Безопасность оператора.</b> Это первое что вы должны рассчитывать при проектировании своего альтер-эго</li>
            <li><b>Убедительность образа.</b> Все характеристики чудовища будут рассчитываться от его внешнего вида</li>
            <li><b>Слабая зона.</b> У чудовища в монструозной форме должна быть очевидная слабая зона, попадание в которую будет легко считываться оператором</li>
            <li><b>Физическая подготовка.</b> Костюм должен рассчитывать на текущую физическую форму оператора, не стоит переоценивать свои возможность</li>
            <li><b>Сброс костюма.</b> Оператор должен иметь возможность самостоятельно снять костюм</li>
          </div>

          <div className={s.block2}>
            <h3>Архетипы</h3>
            <li><b>Чудовище боец.</b> Чудовище ближнего боя</li>
            <li><b>Чудовище стрелок.</b> Может плевать кислотой/ядом/гнилью</li>
            <li><b>Чудовище Прожора.</b> Может регенерировать поеданием людей, находясь в человеческой форме</li>
            <li><b>Чудовище вожак.</b> Может восстанавливать живые хиты у своих одержимых (есть ограничения)</li>
            <li><b>Чудовище охотник.</b> Может пользоваться тяжелым оружием, но не имеет доступа к созданию одержимых</li>
            <li><b>Чудовище гигант.</b> Может уверенно противостоять 5-6 бойцам, имеет доступ к тяжелому оружию (будет более жесткий контроль подготовки костюма с точки зрения безопасности)</li>
          </div>

          <div className={s.block2}>
            <h3>Формы чудовища</h3>
            <div>Чудовище обладает двумя формами: человеческой и монструозной, при этом обе формы должены отыгрываться одиним и тем же оператором</div>
            <h4>Форма человека</h4>
            <div>В этой форме на чудовищеа действую все правила боевых взаимодействий что и на человека, НО при этом чудовище обладает сразу несколькими живыми хитами на каждой конечности (дополнительные хиты рассчитываются исходя из монструозной формы)</div>
            <div>При этом чудовище наносит урон который наносит его оружие</div>
            <h4>Форма монстра</h4>
            <div>Данную форму чудовище принимает если:</div>
            <li><b>Тяжелое ранение.</b> Человеческая форма получила статус “Тяжелое ранение”</li>
            <li><b>Превращение.</b> Чудовище добровольно принимает форму монстра</li>
            <div>ПРИМЕЧАНИЕ: чудовище всегда может добровольно перейти в монструозную форму</div>
          </div>

          <div className={s.block2}>
            <h3>Лечение чудовища</h3>
            <div>В любой форме чудовище может лечиться только за счет поедания людей</div>
            <br />
            <div>Если игрок хочет пожрать человека “в поле” то он должен находится в монструозной форме, но чудовище может поедать жертв в свое лагере в человеческой форме. (исключение чудовище-прожора)</div>
            <div>1 жертва восстанавливает 1/2 повреждений чудовищеа</div>
          </div>
        </div>

        <div className={s.block}>
          <h2>Одержимые</h2>
          <div>Одержимые это прямые подчиненные чудовищеов</div>
          <div className={s.block}>
            <div className={s.block2}>
              <h3>Внешний вид</h3>
              <div>Одержимые обладают человеческим видом, но обязаны носить как минимум “слабую точку одержимого”</div>
              <div>Слабая точка одержимого - элемент костюма, при попадании по которой снимает живые хиты одержимого, слабая точка не должна закрываться одеждой или доспехом, рекомендованное место - плечо рабочей руки.</div>
              <br />
              <div>особые свойства одержимыхъ:</div>
              <li><b>Живучий.</b> Обладает большим количеством живых хитов чем человек, и при этом может носить доспехи, ремонт которых происходит по общим правилам</li>
              <li><b>Бесчувственный.</b> При потери живых хитов одержимый не обязан отыгрывать ранение</li>
              <li><b>Безвольный.</b> Единственным способом лечения одержимого - передача живых хитов чудовищеа</li>
              <li><b>Порченный.</b> Не могут получить метку жертвы</li>
              <li><b>Ведомый.</b> Не могут вести активные социальные взаимодействия (интеллект деградирует до “выполнить желания чудовищеа любой ценой”)</li>
              <li><b>Создаваемый.</b> Чудовище может создавать одержимых в течении игры из игроков, если подготовит реквизит</li>
              <li><b>Зависимый.</b> В случае смерти чудовища-хозяина все его одержимые погибают</li>
              <br />
              <div>После мертвяка одержимый выходит с минимальным количеством живых хитов, чудовище может передать при этом столько живых хитов сколько захочет, при этом чудовище-хозяин уменьшает верхний парог своих живых хитов (Чудовище-вожак, вместо уменьшения потолка хитов получает ранения, которые можно вылечить)</div>
            </div>
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