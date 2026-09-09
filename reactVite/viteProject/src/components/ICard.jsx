

function ICard({data}) {
  return (
    <div>
      <h2>College:{data.college}</h2>
      <div>
        <img src={data.pic} alt="" height={150} width={150} />
      </div>
      <h2>Roll:{data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
    </div>
  )
}

export default ICard
