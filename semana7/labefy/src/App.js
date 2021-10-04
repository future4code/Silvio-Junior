import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import Lista from './components/Lista';
import GlobalStyle from './theme/GlobalStyle';
import CriarPlaylist from './components/CriarPLaylist';
import DetalheDaPlaylist from './components/DetalheDaPlaylist';
import PlayMusic from './components/PlayMusic';

const headers = {
  headers: {
    Authorization: "silvio-dias-maryam"
  }
}

class App extends React.Component {
  state = {
    playlists: [],
    playlistSelecionada:[],
    musicasPlaylistSelecionada: [],
    paginaCriar: false,
    paginaDetalhe: false,
    paginaLista: true,
    inputNovaPlaylist: "",
    inputNovaMusicaNome: "",
    inputNovaMusicaArtista: "",
    inputNovaMusicaUrl: "",
    playMusic: false,
    musicaPlay: [],
  }
  componentDidMount = () => {
    this.pegaPlaylists()
  }

  pegaPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', headers)
    .then((res) => {
      this.setState({playlists: res.data.result.list})
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  onClickCriar = () => {
    this.setState({paginaDetalhe: false})
    this.setState({paginaLista: false})
    this.setState({paginaCriar: true})
  }

  onClickDetalhe = (playlist) => {
    this.setState({paginaDetalhe: true})
    this.setState({paginaLista: false})
    this.setState({paginaCriar: false})
    this.setState({playlistSelecionada: playlist})
  
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, headers)
    .then((res) => {
      this.setState({musicasPlaylistSelecionada: res.data.result.tracks})
    })
    .catch((err) => {
      alert(err.response)
    })
  }

  onClickExcluir = (playlist) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`, headers)
    .then((res) => {
      this.pegaPlaylists()
      this.setState({paginaDetalhe: false})
      this.setState({paginaLista: true})
      this.setState({paginaCriar: false})
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  onChangeNovaPlaylist = (event) => {
    this.setState({inputNovaPlaylist: event.target.value})
  }

  createPlaylist = () => {

    let body = {
      name: this.state.inputNovaPlaylist
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, headers)
    .then((res) => {
      this.pegaPlaylists()
      this.setState({paginaDetalhe: false})
      this.setState({paginaLista: true})
      this.setState({paginaCriar: false})
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  onChangeNovaMusicaNome = (event) => {
    this.setState({inputNovaMusicaNome: event.target.value})
  }

  onChangeNovaMusicaArtista = (event) => {
    this.setState({inputNovaMusicaArtista: event.target.value})
  }

  onChangeNovaMusicaUrl = (event) => {
    this.setState({inputNovaMusicaUrl: event.target.value})
  }

  addTrackToPlaylist = (playlist) => {

    let body = {
      name: this.state.inputNovaMusicaNome,
      artist: this.state.inputNovaMusicaArtista,
      url: this.state.inputNovaMusicaUrl
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, body, headers)
    .then((res) => {
      this.onClickDetalhe(playlist)
      this.setState({inputNovaMusicaArtista: ""})
      this.setState({inputNovaMusicaNome: ""})
      this.setState({inputNovaMusicaUrl: ""})
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  onClickPlay = (musica) => {
    this.setState({musicaPlay: musica})
    this.setState({playMusic: true})
  }

  removeTrackFromPlaylist = (musica, playlist) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks/${musica.id}`, headers)
    .then((res) => {
      this.onClickDetalhe(playlist)
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  renderizaTela = () => {
    if (this.state.paginaLista) {
      return(<Lista playlists={this.state.playlists} onClickDetalhe={this.onClickDetalhe} onClickExcluir={this.onClickExcluir} />)
    } else if (this.state.paginaCriar){
      return(<CriarPlaylist inputNovaPlaylist={this.state.inputNovaPlaylist} onChangeNovaPlaylist={this.onChangeNovaPlaylist} createPlaylist={this.createPlaylist} />)
    } else if (this.state.paginaDetalhe){
      return(
        <DetalheDaPlaylist 
        playlistSelecionada={this.state.playlistSelecionada} 
        musicasPlaylistSelecionada={this.state.musicasPlaylistSelecionada} 
        onChangeNovaMusicaNome={this.onChangeNovaMusicaNome}
        onChangeNovaMusicaArtista={this.onChangeNovaMusicaArtista}
        onChangeNovaMusicaUrl={this.onChangeNovaMusicaUrl}
        inputNovaMusicaNome={this.state.inputNovaMusicaNome}
        inputNovaMusicaArtista={this.state.inputNovaMusicaArtista}
        inputNovaMusicaUrl={this.state.inputNovaMusicaUrl}
        addTrackToPlaylist={this.addTrackToPlaylist}
        onClickPlay={this.onClickPlay}
        removeTrackFromPlaylist={this.removeTrackFromPlaylist}
        />
        )
    }
  }
  render() {
    console.log(this.state.musicaPlay)
    return (
      <div>
        <GlobalStyle/>
        <Header onClickCriar={this.onClickCriar} />
        {this.renderizaTela()}
        {(this.state.playMusic) && (<PlayMusic musicaPlay={this.state.musicaPlay} />)}
      </div>
    );
  }
}

export default App;
