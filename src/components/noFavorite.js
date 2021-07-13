import React from 'react';
import { Link } from 'react-router-dom'

class Nofavorites extends React.Component {
 
  render() {
    return (
      <div className="conteiner-nofavorite">
        <p className="conteiner-nofavorite-p">Você ainda não favoritou nenhum usuário! :)</p>
      <Link className="Button-voltar" to="/">Voltar</Link>
      </div> 

    );
  }
}

export default Nofavorites
