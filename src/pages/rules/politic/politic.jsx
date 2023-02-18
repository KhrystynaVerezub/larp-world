import React from "react";

import ferd from '../../../assets/kings/ferd.png';
import rich from '../../../assets/kings/rich.png';
import gani from '../../../assets/kings/gani.png';

import tudor from '../../../assets/towns/tudor.png'; 
import midlend from '../../../assets/towns/midlend.png'; 
import kushan from '../../../assets/towns/kushan.png'; 

import { AccordionBlock, Chapter } from "../../../components";

import s from './politic.module.css';

function Image({ img }) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (isOpen) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    
    return (
      <>
        <div className={s.portrait_open} onClick={() => setIsOpen(false)}>
          <img src={img} alt='Kings' width='600'/>
        </div>

        <div className={s.portrait_wrapper} onClick={() => setIsOpen(false)}>
        </div>
      </>
    )
  }

  document.body.style.position = '';
  document.body.style.top = '';
  
  return (
    <div onClick={() => setIsOpen(true)}>
      <img src={img} alt='Kings' width='200' />
    </div>
  )
}

export function Politic() {
  return (
    <div className={s.container}>
      <Chapter chapter='ПОЛИТИКА' />
      
      <div>
        <i>Все мероприятие строится вокруг подготовки лагерей к битве. По факту вся игра - это несколько дней до начала битвы в которой каждая из стороны пытается занять более выгодные позиции на политической и тактической карте, в то время как простые крестьяне пытаются просто выжить</i>
        <br />
        <i>Все что описано ниже является общими знаниями почти любого персонажа</i>
        <br />
      </div>

      <AccordionBlock
        label='Крупнейшие государства континента'
        items={[
          {
            label: 'Королевство Мидлeнд',
            text: 
              <>
                <div className={s.info}>
                  <div className={s.global}>
                    <div className={s.text}>
                      <div>Правитель: король Ричманд</div>
                    </div>
                    
                    <div className={s.portrait}>
                      <Image img={rich} />
                    </div>
                  </div>

                  <div className={s.global}>
                    <div className={s.text}>
                      <div>Столица: город Виндем</div>
                    </div>
                    
                    <div className={s.portrait}>
                      <Image img={midlend} />
                    </div>
                  </div>
                </div>

                <div className={s.block2}>
                  <h3>Краткая история</h3>
                  <div>Большую часть своего влияния королевство получило за счет объеденительной компании императора Гейзериха. Король Ричманд считается потомком императора Гейзериха</div>
                  <div>На текущий момент королевство Мидленд ведет "столетнюю" войну с империей Тюдор</div>
                </div>
              </>
          },
          {
            label: 'Тюдорская империя',
            text: 
              <>
                <div className={s.info}>
                  <div className={s.global}>
                    <div className={s.text}>
                      <div>Правитель: король Фердинад</div>
                    </div>
            
                    <div className={s.portrait}>
                      <Image img={ferd} />
                    </div>
                  </div>

                  <div className={s.global}>
                    <div className={s.text}>
                      <div>Столица: город Голберг</div>
                    </div>
            
                    <div className={s.portrait}>
                      <Image img={tudor} />
                    </div>
                  </div>
                </div>

                <div className={s.block2}>
                  <h3>Краткая история</h3>
                  <div>Империя распологается на западной границе королевства Мидленд. Имеет тесное торговое сотрудничество с Кушанской империей</div>
                </div>
              </>
          },
          {
            label: 'Кушанская империя',
            text: 
              <>
                <div className={s.info}>
                  <div className={s.global}>
                    <div className={s.text}>
                      <div>Правитель: Император Ганишка</div>
                    </div>
            
                    <div className={s.portrait}>
                      <Image img={gani} />
                    </div>
                  </div>

                  <div className={s.global}>
                    <div className={s.text}>
                    <div>Столица: город Артиполис</div>
                    </div>
            
                    <div className={s.portrait}>
                      <Image img={kushan} />
                    </div>
                  </div>
                </div>

                <div className={s.block2}>
                  <h3>Краткая история</h3>
                  <div>Таинственная империя, ведущая бесконечные завоевания на своих дальних рубежах</div>
                </div>
              </>
          },
        ]}
        />

      <AccordionBlock
        label='Война'
        items={[
          {
            label: 'Финальная битва',
            text: 
              <>
                <div>Каждый из отрядов может примкнуть к одной из враждующих сторон, при этом соблюдая контракты наемника и принадлежность орденов, нейтральные банды могут примкнуть по своему желанию</div>
        
                <div className={s.block2}>
                  <h3>Результат:</h3>
                    <li>Победившая сторона передает во владение это поселение и правинцию своему нанимателю</li>
                    <li>В случае ничьей, можно заявить образование своего королевства, как следствие дальше оно будет выступать стороной конфликта</li>
                    <li>Политическая карта перекрашивается</li>
                </div>

                <div className={s.block2}>
                  <h3>Условия успеха</h3>
                    <li>На поле боя должен остаться хотя бы один представитель из враждующих сторон</li>
                    <li>Если выжили нейтральные персонажи то они в праве передать победу одному из королевств или объявить ничью</li>
                </div>

                <div className={s.block2}>
                  <h3>Механика</h3>
                    <li>Главы всех отрядов приглашаются на стратегический совет</li>
                    <li>Капитаны должны явится со своими интендантами</li>
                    <li>Проводится аукциона порядка расстановки отрядов - кто победил тот выбирает очередность, под свою выгоду (ставка очками влияния или игровыми деньгами)</li>
                    <li>Расставив все отряды на поле боя, интенданты устанавливают знамена на местах оговоренных при совете. Бойцы соответствующих отрядов должны находится возле своего знамени</li>
                    <li>Выжившие после битвы сталкиваются с следующим этапом - ЗАТМЕНИЕ, при этом в затмении может участвовать инквизиция полным составом</li>
                </div>
              </>
          },
          {
            label: 'Затмение',
            text: 
              <>
                <div>На затмении обязательно присутствие всех чудовищ и игроков с метками жертвы</div>
                <div>Все люди будут расположены в центре, чудовищеы размещаются кто как хочет, по сигналу начинается ЗАТМЕНИЕ, тот чудовище который съел больше всегда жертв и при этом остался жив - может улучшить свои характеристики, которые будут перенесены на сл проект</div>
                <br />
                <div>Вперед самим затмением чудовищеЫ решают как ослабить жертв, выбрав один из выделенных вариантов, при этом</div>
                <li><b>Паника:</b> Отсутствие какого-то либо вида оружия (например мечей/топоров/копий/щитов)</li>
                <li><b>Коррозийные пары:</b> Все элементы доспеха получившие хоть какой-то урон в броне хиты считаются полностью уничтоженным</li>
                <li><b>Беспорядок:</b> Жертвы пропускаются не все сразу а несколькими волнами</li>
                <li><b>Ярость:</b> Некоторые жертвы по определенном шаблону могут атаковать союзников</li>
                <li><b>Безумие:</b> Жертвы кидаются на чудовищ первыми</li>
              </>
          },
        ]}
        />
    </div>
  )
}