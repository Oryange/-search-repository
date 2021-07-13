import icone from './github.png'

export default function Header() {
  return(
  <header className="header-container">
    <img className='img-github' src={icone} alt='icone github'></img>
    <p className="header-p">Pesquisador de Repositórios do GitHub</p>
  </header> 
  )
}