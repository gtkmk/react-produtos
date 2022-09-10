import React, { useEffect } from 'react'
import Table from "../components/Table/Table";
import axios from 'axios';
import { useState } from 'react';



export const Home = () => {
  const [product, setProduct] = useState([]);

  /*
  
  const getProductData = async () => {
    try{
      const data = await axios.get("http://localhost:3000/produtos/");
      const obj = (data);

      setProduct(data.data);

    }catch(e){
      console.log(e);
    }
  }
  */

  const getProductData = async () => {
    try{
      const data = await axios.get("http://localhost:3000/produtos/");
      const obj = (data);

      setProduct(data.data);

    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getProductData()
  }, []);  

  return (
    <div 
     style={{
        display: 'flex',

     }}
    >
      
      <Table data={data}/* CASO SEJA SUBSTITUIDO PARA: data={product} a tabela
      vai receber as informações da API e vai lista-las, entretando caso mude de página ou atualize,  
      a tela só vai ficar branca. Creio que seja pelo fato do método ser asyncrono e a API não.*//>
      <br/>
      
      
    </div>    
  )
}



const data = [
  {
    id: 3,
    nome_produto: "Glove",
    quantidade: 29,
    valor: 639.9,
  },
  {
    id: 3,
    nome_produto: "Container",
    quantidade: 29,
    valor: 1909.9,
  },
  {
    id: 6,
    nome_produto: "Adventure pack",
    quantidade: 19,
    valor: 639.9,
  },
  {
    id: 8,
    nome_produto: "Chips Ruffles",
    quantidade: 19,
    valor: 8.3,
  },
];

export default Home;
