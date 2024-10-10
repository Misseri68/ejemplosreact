import memets from '../assets/images/memets.png'
import './SumarNumeros.css'

function SumarNumeros(){

    const sumarNumeroBoton = (num1, num2) => {
        console.log(parseInt(num1) + parseInt(num2));
    }

    return(
        <div>
            <button onClick={() => sumarNumeroBoton(2,3)}>2 + 3</button>
            <button onClick={() => sumarNumeroBoton(2346,346234)}>2346 + 346234</button> <br />
            <img src={memets} />
        </div>
    )
}
export default SumarNumeros