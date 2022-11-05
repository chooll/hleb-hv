import Header from "./components/Header";
import './styles/header.scss'
import InformationBlock from "./components/InformationBlock";
import RegionInformation from "./components/RegionInformation";
import VacancyBlock from "./components/VacancyBlock";
import {useState} from "react";
import ExitProduct from "./components/ExitProduct";
import CommentBlock from "./components/CommentBlock";

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
        {
            "name": "Механик",
            "salary": "от 20 000 руб./мес",
            "image": "image/f_pecar.png"
        },


    ]);

    const comments = [
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        },
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        },
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        },
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        },
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        },
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        },
        {
            "name": "test 1",
            "textComment": "FJkdj wer sdjkfwe sdf fwit sdfwe ojsdf wekr"
        }

    ]

  return (
    <div className="App">
        <Header/>
        <InformationBlock information={information[0]}/>
        <RegionInformation/>
        <ExitProduct/>
        <VacancyBlock vacancy={vacancy}/>
        <CommentBlock comments={comments}/>
    </div>
  );
}

export default App;
