import TH_Buble from '../../assets/Tommy_Bubble.jpg'
import CK_Buble from '../../assets/CK_Bubble.png'

function WelcomePage (){
    return(
        // ооболочка 
        <div className='bg-slate-500'>
             {/* аэрографика */}
            <div>
                 {/* основные блоки */}
                <div className="flex items-center justify-center gap-[20px] mt-[225px] mb-[225px]  ">
                    {/* левый блок */}
                    <div className="w-[470px] h-[420px] ">
                        <img
                        src={TH_Buble}
                        alt="TommyBuble"
                        className=""
                        />
                        <span className="text-center text-white">
                            Tommy Hilfiger
                        </span>
                    </div>
                    {/* правый блок */}
                    <div className="w-[470px] h-[420px] ">
                        <img
                        src={CK_Buble}
                        alt="CalvinBuble"
                        className=""
                        />
                        <span className="text-center text-white">
                            Calvin klein
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage