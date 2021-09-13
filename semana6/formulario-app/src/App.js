import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import Home from './components/Home/Home'
import Etapa2 from './components/Etapa2/Etapa2'
import Etapa3 from "./components/Etapa3/Etapa3";
import Conclusao from "./components/Conclusao/Conclusao";

class App extends React.Component {
  state = {
    nomeInput: "",
    idadeInput:"",
    emailInput:"",
    grauDeEscolaridadeInput: "",
    enviado1: false,
    curso:"",
    instituicao:"",
    enviado2: false,
    motivo: "",
    cursoComplementar: "",
    erroCursoComplementar: false
}

onChangeNome = (event) => {
  this.setState({nomeInput: event.target.value})
}

onChangeIdade = (event) => {
  this.setState({idadeInput: event.target.value})
}

onChangeEmail = (event) => {
  this.setState({emailInput: event.target.value})
}
onChangeGrauDeEscolaridade = (event) => {
  this.setState({grauDeEscolaridadeInput: event.target.value})
}

onClickEnviar1 = () => {
  if (!this.state.nomeInput || !this.state.idadeInput || !this.state.emailInput || !this.state.grauDeEscolaridadeInput) {
    alert("Preencha todos os campos! Você deve preencher todas as perguntas antes de continuar.")
    return
  }
  this.setState({enviado1: true})
}

onChangeCurso = (event) => {
  this.setState({curso: event.target.value})
}

onChangeInstituicao = (event) => {
  this.setState({instituicao: event.target.value})
}

onClickEnviar3 = () => {
  if (!this.state.cursoComplementar){
    this.setState({erroCursoComplementar: true})
    alert('Você deve preencher os campos obrigatórios.')
    return
  }

  this.setState({enviado2: true})
}

onClickEnviar2 = () => {
  this.setState({enviado2: true})
}

onChangeMotivo = (event) => {
  this.setState({motivo: event.target.value})
}

onChangeComplementar = (event) => {
  this.setState({cursoComplementar: event.target.value})
}

renderizaTela = () => {
  if (!this.state.enviado1){
    return(
      <Home 
          onChangeEmail={this.onChangeEmail}
          onChangeGrauDeEscolaridade={this.onChangeGrauDeEscolaridade}
          onChangeIdade={this.onChangeIdade}
          onChangeNome={this.onChangeNome} 
          onClickEnviar1={this.onClickEnviar1}
      />
    )
  } else if (!this.state.enviado2) {
      return(
        <div>
        {this.state.grauDeEscolaridadeInput === "Superior" ?
        (<Etapa2 
          onChangeCurso={this.onChangeCurso} 
          onChangeInstituicao={this.onChangeInstituicao} 
          onClickEnviar2={this.onClickEnviar2}
          />) :
          (<Etapa3 
            onChangeMotivo={this.onChangeMotivo} 
            onChangeComplementar={this.onChangeComplementar} 
            onClickEnviar3={this.onClickEnviar3} 
            erroCursoComplementar={this.state.erroCursoComplementar}
          />)
        }
        </div>
      )
  } else {
    return(
      <Conclusao nomeInput={this.state.nomeInput} />
    )
  }
}
  render(){
    return (
      <div>
        {this.renderizaTela()}
      </div>
    );
  }
}
export default App;
