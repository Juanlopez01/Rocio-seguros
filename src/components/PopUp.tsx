
import Swal from 'sweetalert2'
import CyberMonay from '/src/images/CyberMonday.jpg'
import {Image} from 'astro:assets'
const PopUp = () => {
  const imagePopUp = <>
  <Image src={CyberMonay} alt='CyberMonday'/>
  </>
  Swal.fire({
    html: `${imagePopUp}`, 
    showConfirmButton: false,
    showCloseButton: true,

  })
  return (
    <> </>
  )
}

export default PopUp