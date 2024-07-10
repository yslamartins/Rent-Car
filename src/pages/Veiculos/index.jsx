import { useParams } from "react-router-dom";
import carros from "../../mocks/listaCarros";
import motos from "../../mocks/listaMotos";
import DetalhesVeiculo from "../../components/DatalhesVeiculo";


export default function Veiculos(){
    const {id, veiculo} = useParams();
    const carro = carros.find((carro) => carro.id === Number(id));
    const moto = motos.find((moto) => moto.id === Number(id));
    

    return(
        <div className="bg-[#E8E8E8] h-[100vh] flex justify-center items-center"> 
            {veiculo === "moto" && (
                <DetalhesVeiculo veiculo={moto} type={veiculo}/>
            ) }
            {veiculo === "carro" && (
                <DetalhesVeiculo veiculo={carro} type={veiculo}/>
            ) }
            
        </div>
        
    )
}