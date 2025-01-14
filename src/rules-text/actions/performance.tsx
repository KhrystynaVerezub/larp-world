import { Item } from "../type";

import s from './actions.module.css';

export const performance: Item = {
  label: 'Выступление',
  element:
    <>
      <div>Доступно только роли "Артист"</div>
      <br />
      <div>Артист может публично выступить в центральном кабаке или на площади или в лагере в присутствии интенданта</div>
      <div>Качество его выступления оценивается громкостью аплодисментов или иным очевидным способом</div>
      <br />
      <div className={s.label}>Механика:</div>
      <div className={s.listContainer}>
        <li>Артист выступает на публике</li>
        <li>Староста деревни, трактирщик или интендант оценивает качество выступления</li>
        <li>Выдается некоторое количество карт известности "в закрытую"</li>
      </div>
    </>
}