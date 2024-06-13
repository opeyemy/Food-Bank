
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='AppDownload' id='AppDownload'>
      <p>For Better Exprience Downloads<br /> Food-Bank App</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
      
    </div>
  )
}

export default AppDownload
