import React, {useState} from 'react'
import './Table.scss'
import Select from '../../components/Select/Select'
function Table(props) {
  const [filterClass, setFilterClass] = useState('all')
const [currentHero, setCurrentHero] = useState(null)

  const heroesRaw = [
    { name: 'Pudge', hp: '10000', class: 'Strength' },
    { name: 'Oracle', hp: '1000', class: 'Intelligence' },
    { name: 'Spirit Breaker', hp: '6000', class: 'Strength' },
    { name: 'Wraith King', hp: '8000', class: 'Strength' },
    { name: 'Antimage', hp: '6000', class: 'Agility' }
  ]

  const filterClassOptions = [
    {value: 'Strength', label: 'Strength'},
    {value: 'Intelligence', label: 'Intelligence'},
    {value: 'Agility', label: 'Agility'},

  ]

  const handleFilterClass = (event) => {
    setFilterClass(event.target.value)
    console.log('filterClass', filterClass);

  }

  const handleHero = (hero) => {
    setCurrentHero(hero)
  }
  const heroes = filterClass === 'all'
  ? heroesRaw
  : heroesRaw.filter(hero => hero.class === filterClass)

  return (
    <div className='table'>
      <h1>Heroes</h1>
      <div className='table-filters'>
        <Select
        name='filter-class'
        label = 'Filter by Hero class'
        options = {filterClassOptions}
        selected = {filterClassOptions[0]}
        onSelect={handleFilterClass}
        />
      </div>
        {currentHero &&
        <div >
          <h2> Details: {currentHero.name} </h2>
          
        </div>}
      <div className='table-row header'>
          <div className='table-column'>Name</div>
          <div className='table-column'>Health</div>
          <div className='table-column'>Class</div>
        </div>
      {heroes.map(hero => (
        <div key={hero.name} className='table-row' onClick={() => handleHero(hero)}>
          <div className='table-column'>{hero.name}</div>
          <div className='table-column'>{hero.hp}</div>
          <div className='table-column'>{hero.class}</div>
        </div>
      ))}
    </div>
  );
}


export default Table
