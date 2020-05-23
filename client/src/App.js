import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

import logoImg from './assets/logo.jpg';

class App extends Component {
  state = {
    os:'',
    nameUni: '',
    adress: '',
    city: '',
    cep: '',
    uf: '',
    userName: '',
    userLocal: '',
    fone: '',
    email: '',
    printModel: '',
    ns: '',
    pagCount: '',
    ip: '',
    mask: '',
    gateway: '',
    description: '',
    dataAtend: '',
    timeCheg: '',
    timeStart: '',
    timeFinish: '',
    timeOut: '',
    nameTEc: '',
    nameUserAssinatura: '',
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'OS_Gerada.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />
            <h1>Relatório de Atendimento - RAT Manual</h1>
          </section>
          <input className="os" type="text" placeholder="N° OS" name="os" onChange={this.handleChange}/>
          <p>Dados do Projeto</p>
          <input type="text" placeholder="Nome da Unidade" name="nameUni" onChange={this.handleChange}/>
          <input type="text" placeholder="Endereço e Bairro" name="adress" onChange={this.handleChange} />
          <input type="text" placeholder="Cidade" name="city" onChange={this.handleChange} />
          <input type="text" placeholder="CEP" name="cep" onChange={this.handleChange} />
          <input type="text" placeholder="UF" name="uf" onChange={this.handleChange} />
          <input type="text" placeholder="Nome Completo do Contato" name="userName" onChange={this.handleChange} />
          <input type="text" placeholder="Departamento / Cargo" name="userLocal" onChange={this.handleChange} />
          <input type="text" placeholder="Telefone" name="fone" onChange={this.handleChange} />
          <input type="text" placeholder="E-mail" name="email" onChange={this.handleChange} />
          
          <p>Dados da Impressora</p>
          <input type="text" placeholder="Modelo" name="printModel" onChange={this.handleChange} />
          <input type="text" placeholder="N/S" name="ns" onChange={this.handleChange} />
          <input type="text" placeholder="Contador de Página" name="pagCount" onChange={this.handleChange} />
          <input type="text" placeholder="IP" name="ip" onChange={this.handleChange} />
          <input type="text" placeholder="Máscara de rede" name="mask" onChange={this.handleChange} />
          <input type="text" placeholder="Gateway" name="gateway" onChange={this.handleChange} />
          <textarea placeholder="Resumo do Serviços Executados / Pedidos de Peças e Suprimentos / Observações" name="description" onChange={this.handleChange} />
          
          <p>Validação do Atendimento</p>
          <div className="input-group">
            <input type="text" placeholder="Data de Atendimento" name="dataAtend" onChange={this.handleChange} />
            <input type="text" placeholder="Hora de Chegada" name="timeCheg" onChange={this.handleChange} />
            <input type="text" placeholder="Hora de Início" name="timeStart" onChange={this.handleChange} />
            <input type="text" placeholder="Hora de Conclusão" name="timeFinish" onChange={this.handleChange} />
            <input type="text" placeholder="Hora de Saída" name="timeOut" onChange={this.handleChange} />
          </div>

          <input type="text" placeholder="Nome Completo do Técnico" name="nameTec" onChange={this.handleChange} />
          <input type="text" placeholder="Nome Completo do Usuário(a) para Assinatura" name="nameUserAssinatura" onChange={this.handleChange} />
          
          <button className="button" onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
      </div>
    );
  }

}

export default App;