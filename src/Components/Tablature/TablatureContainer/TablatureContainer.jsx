import React from 'react'
import TablatureItem from '../TablatureItem/TablatureItem';


export default function TablatureContainer(props) {
  console.log(props)
  const tablatures = props.tablatures.map((tablature) => {
    return <TablatureItem
       key={tablature.id}
       deleteTablature={props.deleteTablature}
         id={tablature.id} name={tablature.name}
          url={tablature.url}
          description={tablature.description}
          composer={tablature.composer}
          skill={tablature.skill}
          />
  })

  return(
    <>

      <div  className="tablature-card-list">{tablatures}</div>

    </>
  )
}
