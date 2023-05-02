import { Item } from "../rules-text/type";

import morgarCoat from '../assets/coats/morgar.png'; 

import s from './history.module.css';

export const morgarHistory: Item = {
  label: 'Герцогство Моргар',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={morgarCoat} alt='' width='200'/>
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>герцог Майнардус</div>
          <div><i>Столица: </i>город Флаорвейл</div>
          <div><i>Герб: </i>Черный баран с золотыми рогами на зеленом фоне </div>
          <div><i>Цвета: </i>Зеленый, золотой и черный</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>После активной экспансии империи Кушан, герцогство Моргар вступило в союзнические отношения со своими соседями:</div>
      <div>Королевство Мидленд и герцогство Валлатория</div>
      <div>Это позволило остановить экспансию Кушан дальше на север</div>
      <br />
      <div>Легенда гласят что первые правители этих земель были рабами великанов, но однажды они смогли поймать черного барана с золотыми рогами</div>
      <div>Мясо этого барана не кончалось, а рога на глазах отрастали заново, так моргарцы смогли победить голод, набраться сил, а из рогов вы ковать оружие чтоб прогнать великанов</div>
      <div>Но настало время когда золотое оружие было направлено против самих жителей в борьбе за власть и после того как святое оружие впитало первую кровь человека</div>
      <div>Чудо прекратилось, и священное животно пропало</div>
      <div>Хоть Моргарцы и приняли веру Святого престола, от части они остаются язычникам, об этом символизирует их знамя и раболепие перед священными животными - баранами</div>
    </div>
  </>
}