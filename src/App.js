import Header from "./components/Header";
import './styles/header.scss'
import InformationBlock from "./components/InformationBlock";
import RegionInformation from "./components/RegionInformation";
import VacancyBlock from "./components/VacancyBlock";
import {useState} from "react";

function App() {
    const information = [
        {
            header: "Наш завод, работает с 1956 года, и по сей день происводит до 30 тонн хлеба в месяц",
            moreInformation: [
                "Наш завод, работает с 1956 года, и по сей день происводит до 30 тонн хлеба в месяц",
                "Производство хлеба и хлебобулочных изделий обеспечивает продовольствием около 100 тысяч человек",
                "Производство хлеба и хлебобулочных изделий обеспечивает продовольствием около 100 тысяч человек"
            ]
        }
    ]


    const [vacancy, setVacancy] = useState([
        {
            "name": "Пекарь",
            "salary": "от 40 000 руб./мес",
            "image": "../style/image/f_pecar.png"
        }
    ]);

  return (
    <div className="App">
        <Header/>
        <InformationBlock information={information[0]}/>
        <RegionInformation/>
        <VacancyBlock vacancy={vacancy}/>
    </div>
  );
}

export default App;
