import { Item } from "../../type";

export const explainHeal: Item = {
  label: 'Пояснение лечения',
  element:
    <>
      <h3>Разница в методах лечения</h3>
      <div>Всего известно три метода лечения, каждый из которых имеет свои плюсы и минусы</div>
      <li><b>Госпиталь:</b> не тратит ресурсы, тратит время, но требует наличие самого госпиталя и врачей</li>
      <li><b>Медкомплект:</b> одноразовый, можно применять самостоятельно, тратит время, имеет вес, но позволяет вылечить персонажа даже из состояния "тяжело ранен" без госпиталя</li>
      <li><b>Целебная мазь:</b> одноразовая, можно применять самостоятельно, не тратит время, не имеет веса, но может вылечить персонажа только в состоянии "легко ранен"</li>

      <div>Таким образом игроки получают три возможности лечения, которые можно сопроводить богатым отыгрышем</div>
    </>
}