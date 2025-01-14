import { Item } from "../../type";

export const defWin03: Item = {
  label: 'Трупы как предупреждение',
  element:
    <>
      <h3>Эффект:</h3>
        <div>Влияние штурмующих -5%</div>
      <h3>Условия</h3>
        <div>В лагере не должно быть священника</div>
      <h3>Действия атакующих:</h3>
        <div>Все атакующие бойцы считаются мертвы</div>
        <div>Атакующие игроки отступают в свой лагерь</div>
        <div>Лагерь штурмующих не доступен для штурма в течении 2 часов</div>
      <h3>Действия защитников:</h3>
        <div>Напротив лагеря на ветках или кустах в нескольких местах вешаются красные тканевые ленты</div>
        <div>Все умершие игроки во время штурма (те кто умерли и им не досталось очков подкрепления) отправляются в мертвяк</div>
        <div>Остальные могут продолжить играть в обычном режиме</div>
        <div>Лагерь не доступен для штурма в течении 1 часов</div>
    </>
}