import { connect } from 'react-redux';
import React from 'react';
import Nofavorites from './noFavorite';
import { Link } from 'react-router-dom';
import { removeFavoriteUser } from '../actions/index';
import Header from './header';

class Favorites extends React.Component {
 
  render() {
    const { favorite, removefavorite } = this.props;
    if(!favorite || favorite.length <= 0) return <Nofavorites />
    return (
      <div>
        <Header />
        <section className="conteiner-favorite">
          <p className="favorite-p">Usuários favoritos ☆☆☆</p>
          {favorite.map((e) => <div className="card">
            <h1 className="card-h">{ e.login }</h1>
             <img className="myPicture" src={ e.avatar_url } alt="Avatar" />
             <button className="Button-favoritos" onClick={() => removefavorite(e)}>Remover</button> 
          </div> 
          )}
          <Link to="/" className="Button-voltar">Voltar</Link>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorite: state.user.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removefavorite: (obj) => dispatch(removeFavoriteUser(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
