import React, {useState} from 'react'

function Games() {
    let [game, SetGame] = useState(['CS GO', "CALL OF DUTY", "GITA", "DURAC", "MINECRAFT"]);
    let [ind, setInd] = useState(0);

    function handleSelect(){
        let rand=Math.floor(Math.random()*game.length);
        setInd(rand);
    }
  return (
    <div>
      <h3>Games:   
        {game.map(val=>{
            return val+", "
        })}
      </h3>
        <button className='btn btn-info' onClick={handleSelect}>Pick Game</button>
        <h1>Selected  game: {game[ind]}</h1>
    </div>
  )
}

export default Games
