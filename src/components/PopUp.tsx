
import Swal from 'sweetalert2'

const PopUp = () => {
  Swal.fire({
    html: '<img src=./img/30offauto.jpeg />',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 3000,
    timerProgressBar: true,
  }).then(() => {
    Swal.fire({
      html: '<img src=./img/50offyauto.jpeg />',
      showConfirmButton: false,
      showCloseButton: true,
      timer: 3000,
      timerProgressBar: true,
    })}
  );
  return (
    <> </>
  )
}

export default PopUp