import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './imagens/fotoPerfil.jpeg';
import logoLCCV from './imagens/logoLCCV.jpg';
import iconeEndereco from './imagens/iconeEndereco.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import iconeEmail from './imagens/iconeEmail.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {fotoPerfil}
          nome="Silvio Ribeiro Dias Junior" 
          descricao="Oi, eu sou o Silvio. Sou aluno de desenvolvimento web full stack na Labenu. Este é meu currículo, aqui você pode encontrar algumas informações sobre mim."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem = {iconeEndereco}
        titulo = 'Endereço'
        descricao = 'Avenida Desembargador Valente de Lima, 200.'
        />

<CardPequeno
        imagem = {iconeEmail}
        titulo = 'Email'
        descricao = 'silviordjr@outlook.com'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoLCCV}
          nome="Laboratório de Computação Científica e Visualização" 
          descricao="Estagiário | Pesquisador Bolsista" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
