export const eat = {
  label: 'Пожирание',
  icon: '',
  hint: 'Способ избавить от метки жертвы',
  text: 
    <>
      <div>Чудовище съедает жертву</div>
      <h2>Результат:</h2>
        <li>Игрок после мертвяка выходит без метки жертвы</li>
        <li>Чудовище восстанавливает столько хитов сколько игрок с меткой посетил мертвяк</li>
        <li>Если метки жертвы нет то количество восстановленных хитов равно количеству целых конечностей у игрока (руки, ноги, торс)</li>
      <h2>Условие проведения:</h2>
        <li>Наличие персонажа в состоянии “тяжело ранен”</li>
        <li>Монструозная форма чудовища (кроме чудовищеа-прожоры)</li>
      <h2>Условия отмены действия:</h2>
        <li>Жертва перешла в состояние "Мертв"</li>
      <div>ПРИМЕЧАНИЕ: Допускается поедание одержимых</div>
    </>
}