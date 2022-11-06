import Header from "./components/Header";
import './styles/header.scss'
import InformationBlock from "./components/InformationBlock";
import RegionInformation from "./components/RegionInformation";
import VacancyBlock from "./components/VacancyBlock";
import {useEffect, useState} from "react";
import ExitProduct from "./components/ExitProduct";
import CommentBlock from "./components/CommentBlock";
import {getAllComent} from "./http/userAPI";

function App() {
    const information = [
        {
            header: "Мы на рынке с 1958 года",
            moreInformation: [
                "Хлебозавод Хвойнинского Райпо, на рынке с 1958 года",
                "Следует отметить, что наше предприятие является основным поставщиком хлеба и хлебобулочных изделий" +
                " в Хвойнинском районе",
                "Ассоротимент выпускаемой продукции включает в себя свыше пятидесяти наименований около 70%" +
                " выпекаемой продукции состовляет ржано-пшеничные виды и 30% булочных изделий",
                "Хлебозаводом Хвойнинского Райпо в среднем выпекает 3,7 тонн хлебобулочных изделий",
                "Особое внимание уделяется стабильности качества, выпускаемой продукции, модернизации производства," +
                " и новейшим технологиям решения, которые являются залогом конкурентоспособности"
            ]
        }
    ]


    const [vacancy, setVacancy] = useState([
        {
            "name": "Пекарь",
            "salary": "от 40 000 руб./мес",
            "image": "image/f_pecar.png",
            "descirpt": "Необходим пекарь, обучение проходит 2 месяца, с заработной платой в 14 тыс. рублей после" +
                " обучения до 40 тыс. рублей",
            "age": "от 20 до 60",
            "expirience": "Не требуется",
            "work": "Плавающий график + ночные смены"
        },
        {
            "name": "Механик",
            "salary": "от 20 000 руб./мес",
            "image": "image/f_pecar.png"
        },
        {
            "name": "Механик",
            "salary": "от 20 000 руб./мес",
            "image": "image/f_pecar.png"
        },
        {
            "name": "Механик",
            "salary": "от 20 000 руб./мес",
            "image": "image/f_pecar.png"
        },
        {
            "name": "Механик",
            "salary": "от 20 000 руб./мес",
            "image": "image/f_pecar.png"
        },


    ]);

    const [comments, setComment] = useState([

    ])

    const loadData = async () => {
        const result = await getAllComent();
        setComment(result);
    }

  return (
    <div className="App" onLoad={loadData}>
        <Header/>
        <InformationBlock information={information[0]}/>
        <RegionInformation/>
        <ExitProduct/>
        <VacancyBlock vacancy={vacancy}/>
        <CommentBlock comments={comments} loadData={loadData}/>
    </div>
  );
}

export default App;
