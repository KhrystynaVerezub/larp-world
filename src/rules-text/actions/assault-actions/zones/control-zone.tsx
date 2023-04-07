import { Item } from "../../../type";

export const controlZone: Item = {
  label: 'Зона контроля',
  element:
    <>
      <h3>Игровая условность:</h3>
        <div>Сам проем ворот + 3 метра от них</div>
        <div>Максимально ровная и чистая местоность, свободная от камней и всяко что может повредить ноги</div>
      <h3>Требования к разметке</h3>
        <div>Если укрпеления есть в лагере то разметка зоны контроля не требуется</div>
        <div>В случае отсусвтия укреплений зона контроля помечается яркими маркерами, видными издалека, например флажки-вымпелы высотой не менее 1 метра</div>
        <div>В этой зоне запрещается отигрывать мертвых, если умерли - выбирайтесь с поднятым оружием гардой вверх и руками, не мешая другим</div>
      <h3>Отвественные за расчистку и организацию:</h3>
        <div>Сторона обороны</div>
      <h3>Особые условия:</h3>
        <div>Контроль над этой зоной считается ключе победы в штурме</div>
        <div>Бой длится до тех пор пока не будет очевидно кто контролирует эту зону</div>
    </>
}