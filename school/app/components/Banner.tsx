export default function Banner(){
    return(
        <div className="md:grid grid-cols-2 items-center">
        <div className="banner-img">
            <img src="/img/banner.svg" alt=""/> {/*precisa fechar a tag de img*/}
        </div>

        <div className="text-center ">
            <h2 className="text-white">UTFPR</h2> 
            <h3 className="text-[#00e77f]">A melhor escola de Informática</h3>
            <button className="btn-info">Informações</button>
        </div>
   </div>
    )
}