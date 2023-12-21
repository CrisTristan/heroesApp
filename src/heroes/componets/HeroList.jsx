import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    
  const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row row-cols-1 row-cols-md-5 g-5'>
         {
           heroes.map((hero)=>(
              <HeroCard 
                key={hero.id}
                {...hero}
              />      
           ))        
         }               
    </div>
  )
}
