import { useParams } from "react-router-dom";
import carros from "../../mocks/listaCarros";
import motos from "../../mocks/listaMotos";
import DetalhesVeiculo from "../../components/DatalhesVeiculo";


export default function Veiculos(){
    const {id, veiculo} = useParams();
    const carro = carros.find((carro) => carro.id === Number(id));
    const moto = motos.find((moto) => moto.id === Number(id));
    
    return(
        <div className="bg-[#E8E8E8] h-[100vh] flex"> 
            {veiculo === "moto" && (
                <DetalhesVeiculo veiculo={moto}/>
            ) }
            {veiculo === "carro" && (
                <DetalhesVeiculo veiculo={carro}/>
            ) }
            
        </div>
        
    )
}