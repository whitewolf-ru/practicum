
import './ModalOverlay.css';

const ModalOverlay = (props) => {
   const window = props.children;
   return (    
      <div className="window-overlay" onClick={props.onClick}> {window} </div>
    )
}

export default ModalOverlay;
