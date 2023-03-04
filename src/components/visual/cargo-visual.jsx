import React from 'react';
import Select from 'react-select';

import { 
  artifact, cannonBox, healPack, healPotion,
  herbs, money, ore, repairPack,
  repairPotion,
} from '../../rules-text/items';

import s from './cargo-visual.module.css';

const options = [
  { value: { id: 'artifact', weight: 0 }, icon: artifact.icon, label: 'Артифакт'},
  { value: { id: 'money', weight: 0 }, icon: money.icon, label: 'Деньги'},
  { value: { id: 'herbs', weight: 1 }, icon: herbs.icon, label: 'Лечебные травы'},
  { value: { id: 'ore', weight: 1 }, icon: ore.icon, label: 'Руда'},
  { value: { id: 'healPack', weight: 1 }, icon: healPack.icon, label: 'Медкомплект'},
  { value: { id: 'repairPack', weight: 1 }, icon: repairPack.icon, label: 'Ремкомплект'},
  { value: { id: 'repairPotion', weight: 0 }, icon: repairPotion.icon, label: 'Оружейное масло'},
  { value: { id: 'healPotion', weight: 0 }, icon: healPotion.icon, label: 'Целебная мазь'},
  { value: { id: 'canonBox', weight: 2 }, icon: cannonBox.icon, label: 'Зарядный ящик'},
];

function getCargoComponent(label, bonus) {
  return (
    <div className={s.cargoItem}>
      <b>{label}</b>
      <div>Бонус груза: +{bonus}</div>
    </div>
  )
}

const optionsCargo = [
  { value: 0, label: getCargoComponent('Ничего', 0)},
  { value: 1, label: getCargoComponent('Сумка', 1)},
  { value: 2, label: getCargoComponent('Носилки', 2)},
  { value: 3, label: getCargoComponent('Тачка', 3)},
  { value: 4, label: getCargoComponent('Тележка', 4)},
];

const START_WEIGHT = 2;

export function CargoVisual() {
  const [maxWeight, setMaxWeight] = React.useState(START_WEIGHT);

  const handleChange = React.useCallback((option) => {
    setMaxWeight(START_WEIGHT + option.value);
  }, []);

  return  (
    <div className={s.container}>
      <h3>Базовая грузопъемность: {START_WEIGHT}</h3>
      <h3>Предмет для переноса</h3>
      <Select 
        options={optionsCargo} 
        onChange={handleChange}
        />
      <h3>Максимальная грузоподъемность: {maxWeight}</h3>
      <h3>Весомые игровые предметы</h3>
      {options.filter(p => p.value.weight !== 0).map(p => {
        return (
          <div className={s.itemContainer}>

          <div className={s.item}>
            <div><img src={p.icon} alt='' height='50' width='50' /></div>
            
            <div className={s.itemText}>
              <b style={{fontSize: '12px'}}>{p.label}</b>
              <div>Весит: {p.value.weight}</div>
              
            </div>
          </div>
        </div>
        )
      })}
      <h3>Игровые предметы без веса</h3>
      {options.filter(p => p.value.weight === 0).map(p => {
        return (
          <div className={s.itemContainer}>

          <div className={s.item}>
            <div><img src={p.icon} alt='' height='50' width='50' /></div>
            
            <div className={s.itemText}>
              <b style={{fontSize: '12px'}}>{p.label}</b>
              <div>Весит: {p.value.weight}</div>
              
            </div>
          </div>
        </div>
        )
      })}

    </div>
  )
}