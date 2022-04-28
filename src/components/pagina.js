import React, { useState, useEffect } from 'react';
import './style.css';

function Pagina(){
    const [motos, setMotos] = useState([]);
    useEffect(()=>{
      function loadMotos(){
        let api = 'https://x8ki-letl-twmt.n7.xano.io/api:Lb5JD_0G/dados_motos'
        fetch(api)
        .then((r) => r.json())
        .then((dados)=>{
          setMotos(dados)
        })
      }
      loadMotos();
    },[])

    return(
        <div className='container'>
      <div className='linha'></div>
      <div id='topo'>        
        <spam><h1>REACT KAWASAKI</h1></spam>
        <spam><img className='logo1' src={require('../assets/logo192.png')}/></spam>
        <spam><img className='logo2' src={require('../assets/k_emblema.png')}/></spam>
      </div>
      {motos.map((item)=>{
        return(
          <div key={item.id}>           
              <div className='dados'>
                <strong className='titulo'>{item.titulo}</strong>
                <img className='foto' src={item.foto}/>
                <p className='texto'>{item.dados}</p>
              </div>
          </div>
        );
      })}
      <div className='rodape'>
        <h3 >Todos os direitos reservados</h3>
      </div>
    </div>
  );
}


export default Pagina;