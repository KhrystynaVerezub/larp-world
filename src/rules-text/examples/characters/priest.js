import priest01 from '../../../assets/rules/man/priest/01.jpg';
import priest02 from '../../../assets/rules/man/priest/02.jpg';
import priest03 from '../../../assets/rules/man/priest/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [priest01, priest02, priest03];

export const priest = {
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
                <li>Игрок желающий поиграть в мистику и социалку</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Хорошо знает разделы: основы, религиозные действия</li>
                <li>Умение выступать перед толпой</li>
                <li>Соотвествующий внешний вид</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение громок и четко читать речи</li>
                <li>Умение убеждать людей</li>
              </>
          }
        ]} />
    </>
}