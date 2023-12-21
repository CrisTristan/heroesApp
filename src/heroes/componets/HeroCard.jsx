import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters})=>(

  alter_ego===characters ? <></> : <p>{characters}</p>
)



export const HeroCard = ({
          id, 
          superhero, 
          publisher, 
          alter_ego, 
          first_appearance, 
          characters
}) => {

  const heroImageUrl = `/heroes/${id}.jpg` 
  return (
    <div className="col">
       <div className="card">

        <img src={heroImageUrl} className="img-fluid" alt={superhero}/>
         <div className="card-body text-center">
           <h5 className="card-title mb-4">{superhero}</h5>
         <p className="card-text">{alter_ego}</p>

         <CharactersByHero alter_ego={alter_ego} characters={characters}/>

         <p className="card-text">
           <small className="text-muted">{first_appearance}</small>
         </p>
         <Link to={`/hero/${id}`}>
            Mas..
         </Link>
         </div>
       </div>
    </div>
  )
}
