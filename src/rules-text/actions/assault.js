export const assault = {
  label: 'Штурм лагеря',
  icon: '',
  hint: 'Атакующие штурмуют лагерь обороняющихся',
  text: 
    <>
      <h3>Требования к лагерю:</h3>
        <li>Наличие рассчищенной площадки внутри лагеря</li>
        <li>Если площадка не может быть расчищенна - оборона должна защищаться вне лагерных укреплений</li>
      <h3>Условия проведения:</h3>
        <li>Имеется командующий штурмом</li>
        <li>В лагере должен находится хотя бы 1 обороняющийся</li>
        <li>В лагере должен находится интендант, без интенданта ограбление или штурм лагеря строжайше запрещено</li>
      <h3>Механика:</h3>
        <li>Атакующие объявляют штурм</li>
        <li>Атакующая сторона имеет хотя бы одного выжившего</li>
        <li>Интендант лагеря встречает штурмующих, обозначает место битвы согласно фактической готовности лагеря</li>
        <li>Стороны строятся до тех пор пока командующий штурмом и интендант обоюдно не одобрят начало битвы</li>
      <h3>Условия успеха:</h3>
        <li>Обороняющиеся сторона утратила возможности к обороне</li>
        <li>Атакующая сторона имеет хотя бы одного выжившего</li>
      <h3>Условия отмены действия:</h3>
        <li>Атакующая сторона утратила возможность для атаки</li>
        <li>Атакующая сторона отступила</li>
    </>
}