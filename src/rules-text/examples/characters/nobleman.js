import nobleman01 from '../../../assets/rules/man/nobleman/01.jpg';
import nobleman02 from '../../../assets/rules/man/nobleman/02.jpg';
import nobleman03 from '../../../assets/rules/man/nobleman/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [nobleman01, nobleman02, nobleman03];

export const nobleman = {
  label: 'Капитан',
  text: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Игрок желающий поиграть дипломатическое противостояние</li>
                <li>Игрок желающий быть законодателем моды</li>
                <li>Игрок желающий влиять на расстановку сил в масштабах королевства</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Хорошо знает разделы: основы, боевые действия, политика</li>
                <li>Умение общаться в официальной и не очень манере</li>
                <li>Иметь при себе формы договоров и иметь свою родовую печать</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение общаться с представителми разного сословья</li>
                <li>Умение убеждать людей</li>
              </>
          }
        ]} />
    </>
}