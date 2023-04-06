import { Item } from "../../type";

export const assWin03: Item = {
  label: 'Ограбить лагерь',
  element:
    <>
      <h3>Эффект:</h3>
        <div>Атакующие получают все игровые предметы которые были в лагере и на телах бойцов</div>
      <h3>Условия</h3>
        <div>Все жители лагеря и павшие бойцы должны быть обысканы</div>
      <h3>Действия атакующих:</h3>
        <div>Атакующие аккуратно заходят в лагерь и произзводят видимость обыска</div>
        <div>Атакующие отсупают в свой лагерь</div>
        <div>Путь от места штурма до своего лагеря считается безопасным, если игроки штурмующей стороны находятся возле своего знамени</div>
        <div>Игроки возвращаются в свой лагерь по кратчайшему маршруту</div>
        <div>Все умершие игроки во время штурма (те кто умерли и им не досталось очков подкрепления) отправляются в мертвяк</div>
        <div>Остальные могут продолжить играть в обычном режиме</div>
        <div>Лагерь штурмующих не доступен для штурма в течении 1 часа</div>
      <h3>Действия защитников:</h3>
        <div>Все защитники лагеря и его жители, которые находились в лагере вов ремя штурма обязаны сдать все игровые предметы атакующей стороне</div>
        <div>Интендант лагеря сдает все игровые предметы отданные на хранение в лагерь</div>
        <div>Казна остается не тронутой</div>
        <div>Лагерь не доступен для штурма в течении 2 часов</div>
      </>
}