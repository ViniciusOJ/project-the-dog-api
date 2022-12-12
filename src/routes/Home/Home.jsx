import React from "react";
import "./Home.css";
import husky from "../../img/husky.png";

function Home() {
  // const [racas, setRacas] = useState([]);
  //   const [randomNumber, setRandomNumber] = useState(
  //     Math.floor(Math.random() * 100)
  //   );
  //   const [randomNumberTwo, setRandomNumberTwo] = useState(
  //     Math.floor(Math.random() * 100)
  //   );

  //   useEffect(() => {
  //     async function loadRacas() {
  //       await api
  //         .get("/breeds")
  //         .then((response) => setRacas(response.data))
  //         .catch((error) => console.log(error));
  //     }
  //     loadRacas();
  //   }, []);

  return (
    <div className="container-home">
      <div className="home-container">
        <div className="container-text">
          <h1>ALL INFORMATION</h1>
          <span>ABOUT YOUR DOG</span>
        </div>
        <img src={husky} className="img-husky"></img>
        <div className="container-text">
          <h2>
            TAKE CARE OF <br />
            YOUR BEST FRIEND
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
