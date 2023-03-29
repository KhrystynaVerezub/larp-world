import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const quest: Item = {
  label: 'Квесты',
  element:
    <>
      <div className={s.container}>
        <div>Квесты могут быть даны не только организаторами, но и другими игроками, вы в праве выполнять их или нет, в заивсимости от награды</div>
        <div>Организаторы следят за общей сюжетно йлинией и фиксируют события, игроки являются локальными генераторами этих событий</div>
      </div>

      <AccordionBlock
        label="Глобальные квесты"
        items={[
          {
            label: 'Отряды',
            element:
              <>
                <div>Каждый отряд получит ряд глобальных квестов от организаторов выполнив которые можно получить влияние</div>
                <div>При этом на мероприятии будут присутсвовать дипломаты которые могут нанимать вас за игровые деньги, которые так же можно обменять на влияние</div>
                <div>Если требуется - интендант может написать локальную сюжетную линию для игроков отряда, согласуя ее с организаторами</div>
              </>
          },
          {
            label: 'Сюжетные линии',
            element:
              <>
                <div>В конце каждого дня организаторы собираются и происходит обсуждение всех сюжетных линий полученных за день</div>
                <div>Интенданты докладывают об этом организаторам</div>
                <div>Эти события формируют сюжетную точку которая уже будет ливять на игроков отрядов и вероятно на глобальную расстановку сил на карте</div>
              </>
          },
          {
            label: 'Время выполнения',
            element:
              <>
                <div>Некоторые квесты будут иметь временное ограничение, об этом будет сообщаться кв квесте, время выполнения отслеживает интендант</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Квесты игроков"
        items={[
          {
            label: 'Артефакты',
            element:
              <>
                <div>Игроки всегда могут согдласовать с мастерами вброс в игру определенных предметов, которые так или иначе влияют на персонажей</div>
                <div>Согласуя эти предметы с организаторами, последние в свою очередь отслеживают положение вещей в конце дня, фиксируя прогресс квеста</div>
              </>
          },
          {
            label: 'Скрытые квесты',
            element:
              <>
                <div>Далеко не все квесты будут явными, некотоыре будут скрыто влиять на повествование, вбрасывая подсказки и намеки на свое существование</div>
                <div>награда за такие квесты значительно весомие остальных</div>
              </>
          },
        ]}
      />
    </>
}