import Logo from '../img/NuKenzie.svg'
import './style.css'

function HeaderDashboard ({setLoged}) {

  function goHome () {
    setLoged(false)
  }

  return (
    <div className='divHeader'> 
    <img src={Logo} alt='logo NuKenzie'/>
    <button className='btnStart' onClick={goHome}>Início</button>
    </div>
  )
}

export default HeaderDashboard