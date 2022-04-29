import '../../App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import macImg from "../../picture/mac.webp"
import macImg2 from "../../picture/02.webp"
import macImg3 from "../../picture/03.webp"
import macImg4 from "../../picture/04.webp"
import macImg5 from "../../picture/06.webp"
import "react-awesome-slider/dist/custom-animations/cube-animation.css"

const gallery = () => {
    return (
        <div className="App">
            <AwesomeSlider animation="cubeAnimation">
                <div style={{background: `url(${macImg}) no-repeat center`}}/>
                <div style={{background: `url(${macImg2}) no-repeat center`}}/>
                <div style={{background: `url(${macImg3}) no-repeat center`}}/>
                <div style={{background: `url(${macImg4}) no-repeat center`}}/>
                <div style={{background: `url(${macImg5}) no-repeat center`}}/>
            </AwesomeSlider>
        </div>
    );
}

export default gallery;
