import './BotaoHome.css'
import PropTypes from 'prop-types';


const BotaoHome = ({bt, cg }) => {
    return ( 
        <div className='container' onClick={()=>{alert('Botão '+ bt + ' clicado!');}}>
            <img src={cg}  style={{ width: '70px', height: 'auto' }}/>
            <h3>{bt}</h3>
        </div>
     )
}

BotaoHome.propTypes = {
    bt: PropTypes.string.isRequired,
    cg: PropTypes.string.isRequired
 };

export default BotaoHome;