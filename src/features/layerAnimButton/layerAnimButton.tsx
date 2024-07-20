import './layerAnimButton.scss';
import { useNavigate } from 'react-router-dom';

const LayerAnimButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/aboutMe'); 
    };

    return (
        <button className='button__wrapper' onClick={handleClick}>About Me</button>
    );
};

export default LayerAnimButton;
