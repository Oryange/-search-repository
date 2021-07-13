import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import { fetchRepo, fetchValueUser } from '../actions/index'

class Form extends React.Component {

  submit = (login) => {
  const {fetch, fetchvaluesUser } = this.props
    fetch(login);
    fetchvaluesUser(login)
  }
 
  render() {
    const { value } = this.props;
    if(!value || value.length <= 0) return <Search />    
    return (
      <div>
        <Search />
        <section className="conteiner-card">
          {value.items.map(({login, avatar_url,},index) => index < 5 ? <div className="card">
            <h1 className="card-h">{ login }</h1>
             <img src={ avatar_url } alt="Avatar" />
            <Link to="/detalhes">
              <button
                className="button-detalhes"
                onClick={() => this.submit(login)}
              >
                Ver Detalhes
              </button>
            </Link>
          </div> : ''
          )
          }
 
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.user.values,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (state) => dispatch(fetchRepo(state)),
  fetchvaluesUser: (state) => dispatch(fetchValueUser(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
