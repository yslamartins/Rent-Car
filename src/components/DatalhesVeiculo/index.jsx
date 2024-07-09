export default function DetalhesVeiculo({veiculo}){
 return(
    <div className="bg-white flex justify-center w-[300px] h-[600px] rounded-xl">
        <div className="img">
        <img src={veiculo.foto} />
        </div>
        <div className="flex-col">
            <h1>Detalhes</h1>
        <p>{veiculo.modelo}</p>
        <p>{veiculo.marca}</p>
        <p>{veiculo.categoria}</p>
        <p>{veiculo.ano}</p>
        <p>{veiculo.diaria}/dia</p>
        </div>
        <div className="">
        </div>
    </div>
 )
}