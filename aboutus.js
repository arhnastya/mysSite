import './aboutus.css';
import macImg from "../../picture/mac.webp"

const aboutus = () => {
    return (
        <div className="AU">
            <div className="about-container">
                <div className="titles">
                    <h1 className="about__title">About us</h1>
                    <img className="about__img" src={macImg}/>
                </div>
                    <p className="AU-text"> Как вообще сеть быстрого питания связана с программированием?
                        Во-первых их приложение, через которое вы можете быстро посмотреть меню, узнать количество
                        баллов, за которые вам могут сделать хорошую скидку. Также не забываем про сайт макдональдса,
                        в котором также можно узнать новости первым! Во-вторых, это их онлайн кассы, которые очень
                        помогли во время пандемии. При этом можно с легкостью заказать через приложение онлайн доставку,
                        чтобы было меньшее скопление людей во время карантина. Ну и последнее, какие же вакансии может
                        предложить макдональдс для программистов? Именно на нашем сайте вы можете узнать про это!
                    </p>
            </div>
        </div>
    );
}

export default aboutus;
