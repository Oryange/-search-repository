import { connect } from 'react-redux';
import React from 'react';
import { fetchValues } from '../actions/index';
import Header from './header';

class Search extends React.Component {
  render() {
    const { fetch } = this.props;
    return(
      <div>
        <Header />
        <div className="search-container">
          <p className="search-p">Digite o nome de usuário que deseja procurar:</p>
          <input 
            className="search-input"
            id="Val"
            type="text"
            placeholder="Digite aqui"
            onChange={ (e) => fetch(e.target.value) }
            />
      </div>
    </div>
    )
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetch: (state) => dispatch(fetchValues(state)),
});

export default connect(null, mapDispatchToProps)(Search);
