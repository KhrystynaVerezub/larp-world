import { Item } from "../rules-text/type";
import pic from '../assets/orders/dragons.png'; 

import s from './orders.module.css';

export const dragonsOrder: Item = {
  label: 'Рыцари Белого Дракона',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={pic} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> Начищенная броня, с белыми плащами, на шлемах драконья морда</div>
          <div><i>Девиз: </i> "Пламя, пожри наших врагов!"</div>
          <div><i>Добродетель: </i> Защищать главнокомандующего</div>
          <div><i>Предпочтительно оружие: </i> Щиты и мечи</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Орден королевства Мидленд, получивший звание личной охраны короля</div>
      <div>Прославились тем, что отчистили Виндхейм от бандитов, дезертиров и грабителей после пропажи императора Гейзериха</div>
      <div>Считается сильнейшим рыцарским орденом королевства Мидленд</div>
      <div>В этот орден берут только лучших представителей дворянства</div>
    </div>
  </>
}