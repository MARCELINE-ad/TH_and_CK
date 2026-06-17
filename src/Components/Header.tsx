import LogoCompany from '../assets/LogoCompany.jpg'
import '../index.css'
function Header () {
    return(
        <div>
            <div className="relative w-full h-[110px] bg-[#061148]">
                <div className='flex items-center h-full pl-[30px] gap-[5px]'>
                    <img
                        src={LogoCompany}
                        alt="LogoCompany"
                        className='w-[92px] h-[50px] '
                    />
                    <span className="  text-white  text-[25px] force-nunito font-bold" >
                        Retail Excellence - обучающий портал 
                    </span>

                    <span className=' text-white text-[25px] force-nunito font-bold absolute right-[67px]'>
                        Выход
                    </span>
                </div>
            </div>
        </div>
    )   
}

export default Header