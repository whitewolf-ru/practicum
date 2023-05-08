
import './ModalOverlay.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
   return (    
      <div className="window-overlay" onClick={props.onClick}></div>
    )
}

ModalOverlay.propTypes = {
   onClick: PropTypes.func
};

export default ModalOverlay;
