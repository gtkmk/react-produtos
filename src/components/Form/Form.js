import React, { Component } from 'react'
import './form.css'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
        }
    }
    signIn = () => {
        const data = { nome_produto: this.nome_produto, quantidade: this.quantidade, valor: this.valor}       
         
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'applicattion/json'
            }),
        };
        fetch('http://localhost:3000/produtos', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Falha no envio!")
        })
        .catch(e => {
            this.setState({ message: e.message })
        })      
    }

    render(){
        return (

            <div class="form-container">
                <form class="register-form">
                    <input
                    id="nome_produto-name"
                    class="form-field"
                    type="text"
                    placeholder="Nome do produto"
                    name="nome_produto"
                    onChange={e => this.nome_produto = e.target.value}
                    />
                    <input
                    id="quantidade"
                    class="form-field"
                    type="text"
                    placeholder="Quantidade"
                    name="quantidade"
                    onChange={e => this.quantidade = e.target.value}
                    />
                    <input
                    id="valor"
                    class="form-field"
                    type="text"
                    placeholder="Valor"
                    name="valor"
                    onChange={e => this.valor = e.target.value}
                    />
                    <button class="form-field" type="submit">
                    Registrar
                    </button>
                </form>
            </div>

        );
    }
}
