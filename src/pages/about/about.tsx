import { Chapter } from '../../components';

import s from './about.module.css';

export function About(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='О мероприятии' />
      <div className={s.listContainer}>
        <div>Название: <b>Темные века: ветра перемен</b></div>
        <div>Дата: <b>--.--.2024</b></div>
        <div>Численность: <b>200+</b></div>
        <div>Полигон: <b>Крым</b></div>
        <div>Оружие: <b>мягкое</b></div>
        <div>Сеттинг: <b>по мтивам манги "Берсерк" за авторством Кентаро Миура</b></div>
        <div>Стилистика мира: <b>Европа 15-16 веков. Минимум магии</b></div>
      </div>
      
      <div className={s.label}>Расписание мероприятия</div>
      <div className={s.listContainer}>
        <div><b>Среда:</b> Заезд на полигон, установка локаций, предварительная регистрация, семинары</div>
        <div><b>Четверг:</b> В полдень построение, начало игры, с запретом на штурмы. Боевка дневная и вечерняя</div>
        <div><b>Пятница:</b> Полный игровой день. Боевка дневная и вечерняя</div>
        <div><b>Суббота:</b> Игровой день до полудня. После полудня торги и вечерняя битва. Финальное построение</div>
        <div><b>Воскресенье:</b> Сбор лагерей, сдача локаций, уборка полигона, разъезд</div>
      </div>

      <div className={s.label}>О мире</div>
      <div className={s.listContainer}>
        <div>Действия разворачиваются на территории королевства Мидленд, в начале вторжения империи Тюдор.</div>
        <div>Обе стороны конфликтов активно пользуются услугами наемников и рыцарей, что порождает хаос и разруху среди простого люда.</div>
        <div>Вершиной инженерного искусства является пушка и требуше, но ручного огнестрела меньше чем бомбарда не существует.</div>
        <div>Церковь тонет в роскоши и забирает последнее у обнищавшего народа, обещая спасение и отпущение грехов.</div>
        <div>В лесах бродят бандиты и чудовища готовые разорвать или ограбить любого кто попадется на пути.</div>
        <div>Что касается отряда ястреба - на текущий момент его еще не существует</div>
      </div>

      <div className={s.label}>Формат мероприятия</div>
      <div className={s.listContainer}>
        <div>Вся игра - это подготовка перед битвой, все действия отрядов и игроков будут иметь видимые последствия на самой битве между отрядами.</div>
        <div>Мероприятие посвящено тому как отряды наемников пытаются преуспеть в это нелегкое время, на игре будут интриги, предательства, штурмы, битвы.</div>
        <div>Простой люд является нейтральным свидетелем всему происходящему, который может поддерживать любую из сторон.</div>
        <div>Чудовища прибыли в эти края по зову крови и запаху жертв, в это же время прибывают представители Святой инквизиции чтобы избавить эти земли от греха.</div>
        <br />
        <div>Трудности выбора, серая мораль, деньги на крови и честь за предательство, все это ждет вас на этом проекте</div>
      </div>
    </div>
  )
}