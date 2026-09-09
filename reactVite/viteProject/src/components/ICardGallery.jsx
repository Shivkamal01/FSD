// import React from 'react'
import ICard from './ICard'
function ICardGallery() {
const student=[{
    college:"Abes Engin. College",
    roll:"1044",
    name:"shivam",
    branch:"CSE-24"
},
{
    college:"Abes Engin. College",
    roll:"1040",
    name:"Shiv",
    branch:"CSE-24"
}
]

  return (
     <div>
       {/* <ICard college="Abes Engineering" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSTt1ePI-7mqQEgWqUZb7Zleh786dfNiUkJAzQizJXQ&s" roll="1039" name="Shiv Kamal" branch="CSE"></ICard>
      <ICard college="Abes Engineering" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXN6Q_OB4yCXuNQeAtmQakzLgHEjfjlNHd_fpAH-vVA&s" roll="1047" name="Shivam Singhal" branch="Mechanical"></ICard>
      */}
    <ICard data={student[1]}/>
    </div>
  )
}

export default ICardGallery
