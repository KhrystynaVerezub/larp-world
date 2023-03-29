import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const life: Item = {
  label: 'Быт',
  element:
    <>
      <div className={s.container}>
        <div>Чтоб чувствовать себя уверено надо строго знать трив ещи: где есть, где спать, где ходить в туалет</div>
        <div>Подсмотреть схемы для мебели можно тут <a href='http://larpinfo.ru/' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>Калькулятор строяка</a></div>
      </div>

      <AccordionBlock
        label="Требования"
        items={[
          {
            label: 'Туалет',
            element:
              <>
                <div>Туалет для каждой команды роется(если это позволяет полигон) самостоятельно</div>
                <div>Существуют уже готовы ерешения походных туалетов, где рыть не обязательно</div>
                <div>Прежде чем расставлять локацию и пожизняк определитесь где будет находится туалет</div>
              </>
          },
          {
            label: 'Отходы',
            element:
              <>
                <div>Био отходы зарываются в яму и засыпаются биорастворимыми добавками для переработки отходов (порошки)</div>
                <div>Конессервы, бутылки и любой пластик выбраысваются в общие мусорные пакеты</div>
                <div>После вас как лагерь так и пожизняк должны быть чистыми</div>
              </>
          },
          {
            label: 'Помыв посуды',
            element:
              <>
                <div>Котелки, кастюли, тарелки чашки ложки, привыкните мыть псоле трапезы, иначе рискуете что остатки пищи прилипнут и придется тратить больше воды чем нужно</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Ролевой быт"
        items={[
          {
            label: 'Свет',
            element:
              <>
                <div>Запрещается испольхзовать в качестве светильников открытые ситоочники огня, но фонари со свечками в каркасе - можно</div>
                <div>Фаела - запрещены, только электронные</div>
                <div>Провода тянем так чтоб они не лежали на земле и не бросались в глаза, например обматываем вокруг веревок</div>
              </>
          },
          {
            label: 'Посуда',
            element:
              <>
                <div>Постарайтесь привести хотя бы минимальный набор глинянной посулы</div>
                <div>Убедитесь что кружки и чашки имеют глазуированную поверность, так как без этого покрытия мы рискуете наслаждаться не вкусом еды а вкусом глины</div>
                <div>Разливать кипяток в пивные кружки нельзя так как зачастуую производитель не готовит такую посуду к высоким температурам</div>
              </>
          },
          {
            label: 'Мебель',
            element:
              <>
                <div>Содержите мебель в чистоте, не бросайте снаряжение на столы или скамейки, постарайтесь изготовить для этоо отдельные стойки</div>
              </>
          },
        ]}
      />
    </>
}