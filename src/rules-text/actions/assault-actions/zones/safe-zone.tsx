import { Item } from "../../../type";

export const safeZone: Item = {
  label: 'Закрытая зона',
  element:
    <>
      <h3>Визуализация:</h3>
        <div>Главное знамя отряда и маркеры разметки переднего края закрытой зоны</div>

      <h3>Распололжение:</h3>
        <div>Место установки флага атакующих помечается заранее стороной обороны на расстоянии примерно 30 метров от главного входа</div>

      <h3>Игровая условность:</h3>
        <div>В радиусе 2 метров от флага любой из сторон зона невосприимчивости урона</div>
        <div>Любой урон в эту зону не засчитывается, точно так же как урон из этой зоны</div>
        <div>Каждый выход из закрытой зоны требует траты очков подкрепления</div>
        <div>Если игрок покинул закрытую зону и вернулся в нее вновь, то какое ни было бы состояние у персонажа - он считается мертвым, новый выход из закрытой зоны будет требовать траты очков подкрепления</div>
        <div>Если очки подкрепления кончились, игрок остается в \той зоне до конца штурма</div>
      <h3>Требования к разметке</h3>
        <div>Требуется знамя однозначно показывающее где находится закрытая зона</div>
        <div>Жеталеьно четкое обозначение хотя бы ближайшего края закрытой зоны к опоненту</div>
        <div>Например, Мантелеты, тележки, стойки, пара пеньков</div>
        <div>лучше избегать лежачий бревен, веревок, которые могут запутаться в ногах или послужить причиной травмы</div>
      <h3>Отвественные за соблюдение:</h3>
        <div>Интендант</div>
        <div>Сторона обороны</div>
      <h3>Особые условия:</h3>
        <div>Если закрытая зона окружена противником, но еще имеются очки подкреплений, то данная закрытая зона считается захваченной, все очки подкреплений потраченными</div>
    </>
}