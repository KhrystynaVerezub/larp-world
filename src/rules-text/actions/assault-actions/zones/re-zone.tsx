import { Item } from "../../../type";

export const reZone: Item = {
  label: 'Зона подкрепления',
  element:
    <>
      <h3>Визуализация:</h3>
        <div>Вымпелы с флагами не ниже 1 метра</div>
      
      <h3>Расположение:</h3>
        <div>C каждой стороны от главного входа напротив укреплений, на расстоянии примерно около 15 метров от главного входа</div>

      <h3>Игровая условность:</h3>
        <div>На фазе подготовки штурма интендант атакующей стороны оставляет на каждом из вымпелов определенное количество лент воскрешения исходя из общего числа очков подкреплений</div>
        <div>Если боец атакующей стороны умер, он может воскреснуть возле зоны подкрепления</div>
        <div>Зона подкрепления не считается закрытой зоной и игрока могут убить сразу после воскрешения</div>
        <div>Если сторона обороны смогла захватить вымпел из зоны подкрепления, отнеся его к себе в закрытую зону, то считается что данная зона подкрепления вместе с лентами выходит из боя</div>
        <div>Атакующая сторона не может снимать ленты с зоны подкрепления у которой нет вымпела</div>
        <div>Атакующая сторона не может снимать ленты с вымпела который находится вне зоны подкрепления</div>

      <h3>Ответственные за соблюдение:</h3>
        <div>Сторона обороны</div>
      <h3>Особые условия:</h3>
        <div>До входа первого бойца атакующей стороны в зону контроля, сторона обороны не имеет права перемещать вымпелы зоны подкрепления</div>
    </>
}