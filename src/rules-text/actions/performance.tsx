import { Item } from "../type";

import s from './actions.module.css';

export const performance: Item = {
  label: 'Выступление',
  element:
    <>
      <div>Доступно только роли "Артист"</div>
      <div>Артист может публично выступить в центральном кабаке или на площади</div>
      <div>Качество его выступления оценивается громкостью аплодисментов</div>
      <div className={s.label}>Механика:</div>
      <div className={s.listContainer}>
        <li>Артист выступает на публике</li>
        <li>Староста деревни или трактирщик оценивает качество выступления</li>
        <li>Староста деревни или трактирщик выдает определенное количество возможностей снизить стресс</li>
      </div>
    </>
}