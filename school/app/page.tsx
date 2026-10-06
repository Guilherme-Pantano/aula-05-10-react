import Main from "./components/Main";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MyButton from "./components/MyButton";
import Footer from "./components/Footer";




export default function Home() {
  return(
    <>
      <Header />
      <Banner />
      <h1 className="text-center">Exemplo de tailwind</h1>
      <h2>aquela tag em branco ali é igual à um div, mas não existe no html normal</h2>
      <MyButton /> //Já fecha a tag aqui mesmo
      <Main />
      <Footer />
    </>
  );
}
