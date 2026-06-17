import TH_img from '../assets/TH.jpg'
import CK_img from '../assets/CK.jpg'

function LogOut() {
  return (
    <div className="relative min-h-screen w-screen m-0 p-0 overflow-hidden bg-black flex items-center justify-center">
      
      <img
        src={CK_img}
        alt="Photo_CK"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <img
        src={TH_img}
        alt="Photo_TH"
        className="absolute top-0 left-0 w-full h-full object-cover animate-diagonal-mask"
      />

      <div className="relative z-20 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm mx-4">
        <h2 className="text-xl font-bold text-center text-stone-800 mb-4">Авторизация</h2>
        <div className="flex flex-col gap-3 " >
          <input type="text" placeholder="Логин" className="border p-2 rounded text-sm "  />
          <input type="password" placeholder="Пароль" className="border p-2 rounded text-sm" />
          <button className="bg-stone-800 text-white py-2 rounded text-sm font-medium">Продолжить</button>
          <p>Данные для входа возьми у руководителя</p>
        </div>
      </div>

    </div>
  )
}

export default LogOut
