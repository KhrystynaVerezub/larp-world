import { Item } from "../type";

import s from './actions.module.css';

export const fire: Item = {
  label: 'Очищение огнем',
  element:
    <>
      <div>Доступно только инквизиции</div>
      <div className={s.label}>Результат:</div>
      <div className={s.listContainer}>
        <li>Игрок персонаж, которого был сожжен на костре инквизиции, после мертвяка выходит без метки жертвы</li>
        <li>В случае если у игрока была метка жертвы, игрок получает карту "Прощение"</li>
        <li>Если игрок не обладал меткой жертвы, то он ничего не получает</li>
      </div>

      <div className={s.label}>Механика:</div>
      <div className={s.listContainer}>
        <li>Игроку-жертве производится действие "Пленение"</li>
        <li>В данном случае от действия "Пленение" отказаться нельзя</li>
        <li>Игрок приводится на подготовленное место сожжения (имитация костра)</li>
        <li>Сожжение длится минимум 5 минут</li>
        <li>Игрок-жертва переходит в состояние "Мертв"</li>
        <li>Инквизитор забирает у игрока карту "Жертвы" и выдает карту "Прощение"</li>
        <li>Сожжение имеет свойство "Полного обыска", но все игровые предметы персонажа уничтожаются</li>
      </div>
    </>
}