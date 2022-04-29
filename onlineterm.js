import './onlineterm.css';
import macImg from "../../picture/onlterm.jpeg";



const onlyterm = () => {
    return (
        <div className="Onlterm">
            <div className="Onlterm-container">
                <div className="titles">
                    <h1 className="Onlterm__title">Online Terminals</h1>
                    <img className="Onlterm__img" src={macImg}/>
                </div>
                <p className="Onlterm-text"> Во время пандемии, когда нельзя было большое скопление людей, макдональдс придумал
                    онлайн-терминалы. Вы можете заказать в ресторане, при этом не контактируя с людьми. Работа с
                    терминалом не вызывает вопросов, меню простое и понятное, а экран мгновенно реагирует на нажатия.
                    Благодаря интеграции с кассами и терминалами самообслуживания стала возможна идентификация
                    офлайн-покупателей, в том числе за счет применения QR-кодов. Можно отметить, что использование такой
                    новинки в ресторанах McDonald’s экономит время и вызывает положительные эмоции, благодаря
                    самостоятельному оформлению заказа и оплате бесконтактной картой.
                </p>
            </div>
        </div>
    );
}


export default onlyterm;
