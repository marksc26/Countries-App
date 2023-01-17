import './Styles/Header.css'
import planet from '../assets/Planet Earth 10.png'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkModeGlobal } from '../store/slices/darkMode.slice'

const Header = () => {

  /*const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () =>{
    document.body.classList.toggle("darkMode")
    setDarkMode(!darkMode)

    document.body.classList.contains("darkMode") ? localStorage.setItem("darkMode", "true") : 
    localStorage.setItem("darkMode", "false")
    
  }

  if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("darkMode")
  }else{
    document.body.classList.remove("darkMode")
  }*/

  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()

  const changeTheme = () =>{
    localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    dispatch(setDarkModeGlobal(!darkMode))
  }



  return (
    <header className={!darkMode ? "header" : "header-darkMode"}>

      <div className='logo-header'>
        <img src={planet} alt="" />
        <h3>Where in the world?</h3>
      </div>

      <div className='icon-container'>
        <button onClick={changeTheme} className={!darkMode ? "btn": "btn-darkMode"}>
          {
            darkMode ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>
          }
          
        </button>
        
      </div>

    </header>
  )
}

export default Header