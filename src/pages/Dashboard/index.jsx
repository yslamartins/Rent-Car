import carros from '../../mocks/listaCarros'
import "./style.css";

export default function Dashboard(){
    return (
        <div>
          {carros.map(
            (carro) => {
                return (
                    <div className="card-car">
                        <div className="detalhes">
                        <img src={carro.foto} alt={carro.modelo}/>
                        <h3>{carro.modelo}</h3>
                        <p>{carro.marca}</p>
                        <p>{carro.categoria}</p>
                        <p>{carro.ano}</p>
                        <p className='diaria'> <p>Diária:</p>
                            {carro.diaria}
                        </p>
                        <button>Rent</button>
                        </div>
                    </div>
                )
            }
          )}
        </div>
    )
}
