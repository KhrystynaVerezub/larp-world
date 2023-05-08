import { Item } from "../rules-text/type";

import randelCoat from '../assets/coats/randel.png'; 

import s from './history.module.css';

export const randelHistory: Item = {
  label: 'Содружество Рандель',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={randelCoat} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>совет кланов</div>
          <div><i>Столица: </i>город Флепорт</div>
          <div><i>Герб: </i>Черная крепость на золотом фоне, с красными звездами и холмами</div>
          <div><i>Цвета: </i>Зеленый, золотой, красный</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Содружество хоть и имеет всего один город, но внутри него состоит из нескольких правящих кланов, которые имеют свое происхождение с княжества Ис</div>
      <div>Стоит заметить, что содружеству покровительствует Святой Престол, так как прибывшие язычники приняли торжественно приняли престольную веру</div>
      <div>Активно ведет торговлю со своими соседями, занимает нейтральное политическую позицию</div>
      <div>Является центром наемничества для северных племен</div>
      <br/>
      <div>Легенды рассказываю, что сразу после высадки представителей княжества Ис, местный правитель города Флепорт, пригласил гостей в свой замок</div>
      <div>Спустя несколько недель праздного присутствия, гости захватили замок</div>
      <div>С этого момента началась долга осада Флепорта, в течении которого княжество снабжало через пролив свой десант продовольствием</div>
      <div>Император Гейзерих лично явился на штурм крепости, после которого было достигнуто соглашение "Длинного моря"</div>
      <div>Земли Фрепорта отдаются на правление представителям княжества Ис, но при этом территория считается отдельным графством империи</div>
      <div>Как залог сохранения верности клятвы, захватчики должны принять престольную веру</div>
      <div>Все пункты соглашения были выполнены</div>
      <div>С тех пор содружество Рондель торгует с соседями и поставляет наемников во все уголки континента</div>
      <div>После исчезновения империи Гейзериха приняло форму независимого государства</div>
    </div>
  </>
}