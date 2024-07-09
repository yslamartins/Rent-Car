import React, { useState } from 'react';
import { Link } from "react-router-dom";
import carros from '../../mocks/listaCarros';
import motos from '../../mocks/listaMotos';
import { IoPersonSharp } from "react-icons/io5";
import Logo from '../../assets/Logo';
import "./dash.css";

export default function Dashboard() {
    const [categoria, setCategoria] = useState('carros');

    const handleNavClick = (cat) => {
        setCategoria(cat); 
    };

    return (
        <div className='dash'>
            <div className="header-dash">
                <div className="logo-loc">
                    <Logo />
                </div>
                <div className="switch">
                <nav onClick={() => handleNavClick('motos')}>MOTOS</nav>
                <nav onClick={() => handleNavClick('carros')}>CARROS</nav>
                <div className="login-button">
                <Link to="/login">
                    <button className="login"> <IoPersonSharp className='i'/>Login</button>
                </Link>
                </div>
            </div>
            </div>
            <div className="veiculos">
                {categoria === 'carros' ? (
                    carros.map((carro) => (
                        <div className="card-veiculos" key={carro.id}>
                            <div className="detalhes">
                                <img src={carro.foto} alt={carro.modelo}/>
                                <div className="info">
                                    <h3>{carro.modelo}</h3>
                                    <p>{carro.marca}</p>
                                    <p>{carro.categoria}</p>
                                    <p>Lançamento: {carro.ano}</p>
                                    <p className='diaria'>R${carro.diaria}/dia</p>
                                    <Link to={`/carro/${carro.id}`}>
                                    <button>Rent</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    motos.map((moto) => (
                        <div className="card-veiculos" key={moto.id}>
                            <div className="detalhes">
                                <img src={moto.foto} alt={moto.modelo}/>
                                <div className="info">
                                    <h3>{moto.modelo}</h3>
                                    <p>{moto.marca}</p>
                                    <p>{moto.categoria}</p>
                                    <p>Lançamento: {moto.ano}</p>
                                    <p className='diaria'>R${moto.diaria}/dia</p>
                                    <Link to={`/moto/${moto.id}`}>
                                    <button>Rent</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
