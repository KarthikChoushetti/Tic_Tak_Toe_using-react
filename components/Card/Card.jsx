import Icons from '../Icons/Icons'
import './Card.css'
function Card({onPlay,player,index}){
    let icon=<Icons/>
    if(player=="X"){
        icon=<Icons name={"cross"}/>
    }
    else if(player=="O"){
        icon=<Icons name={"circle"}/>
    }
    return(
        <div className="card" onClick={()=> player=="" &&onPlay(index)}>
{icon}
        </div>
    )
}
export default Card