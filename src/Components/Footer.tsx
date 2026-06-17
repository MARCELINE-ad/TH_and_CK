function Footer () {
    return(
        <div>
            {/* Добавлено flex и items-center, чтобы центрировать всю сетку по вертикали внутри футера */}
            <div className="w-full h-[240px] bg-[#21282B] relative flex items-center" >
                
                {/* Исправлено: сетка теперь динамически распределяет 5 колонок в один ряд */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-center w-full px-[30px]" >
                    
                    {/* первая колонка  */}
                    <div className="text-center">  
                        <span className="text-white force-nunito text-[25px] block whitespace-nowrap">
                            Retail Excellence - Розничная торговля 
                        </span>
                    </div>
                    
                    
                    <div className="hidden md:block h-[186px] w-[1px] bg-white"></div>

                    {/* вторая колонка  */}
                    <div className="text-center">  
                        <span className="text-white force-nunito text-[25px] ">
                            Авиапарк (TH)  |  Павелецкая (TH/CK)<br/>Метрополис (TH) | Европолис (TH/CK) 
                        </span>
                    </div>

                    
                    <div className="hidden md:block h-[186px] w-[1px] bg-white"></div>

                    {/* третья колонка  */}
                    <div className="text-center">  
                        <span className="text-white force-nunito text-[25px] block whitespace-nowrap">
                            © 2026 Retail Excellence.Все права защищены.<br/>Политика конфиденциальности<br/>//.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
