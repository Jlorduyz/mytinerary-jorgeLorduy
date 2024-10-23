import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export function CityDescription() {
  const [info, setInfo] = useState(null);
  const { name } = useParams();
  let querys = `?name=${name}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mongoRes = await fetch(
          "http://localhost:8080/api/cities/all" + querys
        );
        const data = await mongoRes.json();
        let dataInfo = data.response[0] //dos horas para saber que tenia que entrar a la respuesta como un array, pensaba que con un solo elemento devolvia solo un objeto xD ... y tuve que usar gpt, me siento sucio.
        setInfo(dataInfo);
      } catch (error) {
        console.error("Error", error);
      }
    };
    if (name) {
      fetchData();
    }
  }, [name]);

  if (!info) {
    return <div className="min-w-full min-h-full flex justify-center pt-10"><p className="text-8xl font-bold text-rose-500">Loading....</p></div>;
  }

  return (
    <div
    className="w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${info.img})` }}
  >
    <div className="bg-black bg-opacity-50 w-full min-h-full flex flex-col gap-3 items-center justify-center p-8">
      <h1 className="text-white text-8xl font-extrabold mb-4">{info.name}</h1>
      <p className="text-white text-4xl">{info.country}</p>
      <p className="text-white text-3xl">language: <span className="bg-rose-500 px-2">{info.language}</span></p>
      <p className="text-white text-2xl">currency: <span className="bg-rose-500 px-2">${info.currency}</span></p>
      <p className="text-white text-lg">{info.description}</p>
      <Link to={"/cities"}><p className="my-9 text-4xl font-bold bg-slate-600 text-white bg-opacity-30 backdrop-blur-sm  py-2 px-3 rounded-md border-solid border-2 border-slate-400">All cities</p></Link>
    </div>
  </div>
  );
}
