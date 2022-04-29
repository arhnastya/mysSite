import './applicationmac.css';
import macImg from "../../picture/appmac.png";

const aplicationmac = () => {
    return (
        <div className="AppMac">
            <div className="AppMac-container">
                <div className="titles">
                    <h1 className="AppMac__title">Application</h1>
                    <img className="AppMac__img" src={macImg}/>
                </div>
                <p className="AppMac-text"> Хотите быстро сделать заказ?
                    Посмотреть актуальное меню?
                    Или же узнать про все акции?
                    Узнать где поблизости есть макдональдс?
                    Тогда приложение точно поможет вам!
                    В случае с приложением McDonald’s главной задачей было реализовать новый формат персонализированной
                    коммуникации компании с клиентом. Приложение помогает считывать историю заказов и на основе этого
                    подобрать меню под вас. Платформа обеспечивает потребителям удобство,экономию времени и финансов,
                    а для компании — увеличение среднего чека, количества заказов и оптимизацию маркетингового бюджета
                    с использованием внутренних каналов привлечения без траты ресурсов на внешние рекламные площадки.
                </p>
            </div>
        </div>
    );
}




export default aplicationmac;
