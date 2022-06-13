import Logo from '../Components/img/NuKenzieWhite.svg'
import Layout from '../Components/img/layout.svg'
import './style.css'

function WelcomePage ({setLoged}) {

  function handleLogin () {
    setLoged(true)
  }

  return (
    <div className='divHome'>
      <div className='divInfos'>
        <img src={Logo} alt="Logo Nu Kenzie"/>
        <h1 className='title'>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button className='btnWelcome' onClick={handleLogin}>Iniciar</button>

      </div>
        <img className='layout' src={Layout} alt="Logo Nu Kenzie"/>
      <div>
      </div>
    </div>
  )
}

export default WelcomePage