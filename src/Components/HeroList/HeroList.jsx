import "./HeroList"
import HeroeCard from "../HeroeCard/HeroeCard";
import heroes from "../../json/heroes.json"

const finalList = heroes.shift()
console.log(finalList);

const listaHeroes = heroes.map(heroe =>{
    return(
            <div className="col no-gutters">                        
                    <HeroeCard heroe={heroe}/>                
            </div>        
    )
})

function HeroeList(){
    return(
        <div>
            <div class="row no-gutters row-cols-1 row-cols-sm-1 row-cols-md-2">
                {listaHeroes}            
            </div>            
        </div>
    )    
}

export default HeroeList;