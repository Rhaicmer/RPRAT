
import BotaoHome from "../../Components/BotaoHome/BotaoHome";
import './Home.css'


import gif1 from '../../assets/animacoes/braco-robotico.gif'
import gif2 from '../../assets/animacoes/clique.gif'
import gif3 from '../../assets/animacoes/configuracoes.gif'
import gif4 from '../../assets/animacoes/diagrama.gif'
import gif5 from '../../assets/animacoes/abrir.gif'
import gif6 from '../../assets/animacoes/infografico.gif'
import gif7 from '../../assets/animacoes/verifica.gif'
import gif8 from '../../assets/animacoes/senha.gif'
import bVideo from '../../assets/videos/background-video.mp4'


function Home() {

    return (  
        <div className="containerPrincipal">
            <video src = {bVideo} autoPlay loop muted/>
            
        
            <div className="bVertical" >
                
                <BotaoHome
                    bt = "Processos Automatizados"
                    cg = {gif1}
                />

                <BotaoHome
                    bt = "Processos Manuais"
                    cg = {gif2}
                />

                <BotaoHome
                    bt = "Ajuste de Processos"
                    cg = {gif3}
                />

                <BotaoHome
                    bt = "Troca de desinfetante"
                    cg = {gif4}
                />
                
            </div>
            <div className="bVertical" >
                
                <BotaoHome
                    bt = " Abrir / Fechar  "
                    cg = {gif5}
                />

                <BotaoHome
                    bt = "Funções Adicionai"
                    cg = {gif6}
                />

                <BotaoHome 
                    bt = "     Relatórios  "
                    cg = {gif7}
                />

                <BotaoHome
                    bt = " Acesso Restito "
                    cg = {gif8}
                />
                
            </div>
        </div>
    )
}

export default Home;