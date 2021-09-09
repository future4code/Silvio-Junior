import React, {Component} from 'react'
import styled from 'styled-components'


const DivLogos = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 8px;
`
const LogosRedes = styled.img`
    width: 30px;
    height: 30px;
`



export class SecaoCompartilhar extends Component {
    state = {
        comentarioCompartilhar: "",
    }

    onChangeComentarioCompartilhar = (event) => {
        this.setState({comentarioCompartilhar:event.target.value})
    }
    onClickTwitter = () => {
        alert(`A imagem foi compartilhada no Twitter com a mensagem: ${this.state.comentarioCompartilhar}`)
        console.log(`A imagem foi compartilhada no Twitter com a mensagem: ${this.state.comentarioCompartilhar}`)
    }
  
    onClickInsta = () => {
        alert(`A imagem foi compartilhada no Instagram com a mensagem: ${this.state.comentarioCompartilhar}`)
        console.log(`A imagem foi compartilhada no Instagram com a mensagem: ${this.state.comentarioCompartilhar}`)
    }
  
    onClickFace = () => {
        alert(`A imagem foi compartilhada no Facebook com a mensagem: ${this.state.comentarioCompartilhar}`)
        console.log(`A imagem foi compartilhada no Facebook com a mensagem: ${this.state.comentarioCompartilhar}`)
    }
    render(){
        return (
            <div>
                <hr />
                <h5>Compartilhar Em:</ h5>
                <div>
                    <input
                        name={"comentario"}
                        placeholder={'Comentário'}
                        value={this.state.comentarioCompartilhar}
                        onChange={this.onChangeComentarioCompartilhar}
                    />
                </div>
                <DivLogos>
                    <LogosRedes alt={'Icone Insta'} src={this.props.iconeInsta} onClick={this.onClickInsta}/>
                    <LogosRedes alt={'Icone Face'} src={this.props.iconeFace} onClick={this.onClickFace}/>
                    <LogosRedes alt={'Icone Twitter'} src={this.props.iconeTwitter} onClick={this.onClickTwitter}/>
                </ DivLogos>
            </div>
        )
        }
}