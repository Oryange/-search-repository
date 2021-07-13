import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { favoriteUser } from '../actions/index';
import Header from './header';

class Detalhes extends React.Component {

  render() {
    const { valueUser, repo, favorite } = this.props;
    return (
      <div> 
        <Header />
        <section className="conteiner-detalhes">
          <img  src={ valueUser.avatar_url } alt="Avatar" /> 
          <h1 className="conteiner-detalhes-h"> { valueUser.name }</h1>
          <label className="favorito">Favoritar usuário ☆☆☆
            <input type="checkbox" onChange={() => favorite(valueUser)}></input>
          </label>
          
          <p className="conteiner-detalhes-p">{valueUser.bio}</p>
          <p className="conteiner-detalhes-p"><b>Localização:</b> {valueUser.location}</p>
          <p className="conteiner-detalhes-p"><b>Seguidores:</b> {valueUser.followers}</p>
          <p className="conteiner-detalhes-p"><b>Acessar blog:</b>
          <a className="conteiner-detalhes-a" href={valueUser.blog} target="_blank"> Blog</a>
          </p>
      
          <div>
            <p className="conteiner-detalhes-repo"><b>Principais Repositórios deste usuário:</b></p>
            {
            Object.values(repo).map((e, index) => index < 3 ? <ul className="conteiner-detalhes-ul">
              <li className="conteiner-detalhes-li">{e.description}
              <a href={e.html_url} target="_blank" className="conteiner-detalhes-acessar"> Acessar</a>
              </li>
            </ul> : ''
               )
            }
          </div>
          <div className="conteiner-buttons">
          <Link to="/" className="Button-voltar">Voltar</Link>
          <Link to="/favoritos" className="Button-favoritos">Ver Favoritos</Link>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.user.values,
  repo: state.user.repos,
  valueUser: state.user.valuesUser,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchvaluesUser: (state) => dispatch(fetchValueUser(state)),
  favorite: (obj) => dispatch(favoriteUser(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detalhes);
