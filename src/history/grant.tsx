import { Item } from "../rules-text/type";

import grantCoat from '../assets/coats/grant.png'; 

import s from './history.module.css';

export const grantHistory: Item = {
  label: 'Герцогство Гранта',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={grantCoat} alt='' width='200'/>
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>герцог Токад</div>
          <div><i>Столица: </i>город Нордскапити</div>
          <div><i>Герб: </i>золотой дракон на красном фоне</div>
          <div><i>Цвета: </i>для всех представителей дворянства золотой и красный</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Герцогство гранта не приняло законов Святого Престола и активно продолжает языческие традиции поклонению драконам, о которых на этих землях ходят легенды</div>
      <div>Империя Тюдор после нескольких вторжений на главный вулканический остров, основала свой форт Честер, который является плацдармом для войск империи Тюдор</div>
      <div>Герцогство имеет свой замок закрывающий проход к столице - Драконье логово</div>
      <div>Ходят легенды о пророчестве что явится великий дракон и изгонит всех захватчиков с земель Гранта</div>
      <div>Лишена своего флота, но имеет легендарную тяжелую пехоту "Золотые драконы"</div>
    </div>
  </>
}