import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { KomponentFunkcyjny } from "./000_komponent/KomponentFunkcyjny";
/**
 * LINIA KTÓRĄ NALEŻY ODKOMENTOWAĆ DO ZADANIA 1 W MODULE 1
 */
// import { MyFirstComponent } from "./000_komponent/exercise001/MyFirstComponent";
import { KomponentyKlasowy } from "./000_komponent/KomponentyKlasowy";
import { StyleCSS } from "./001_stylowanie_css/StyleCSS";
import { StyleCSSModules } from "./001_stylowanie_css/StyleCSSModules";
import { StyleInline } from "./001_stylowanie_css/StyleInline";
import { Relacje } from "./002_relacje_miedzy_komponentami_importy/Relacje";
import { Assets } from "./003_assety/Assets";
import { KomponentBezStanu } from "./004_stan_komponentu/KomponentBezStanu";
import { StanKomponentu } from "./004_stan_komponentu/StanKomponentu";
import { Eventy } from "./005_eventy_przyciski_formularze_inputy/Events";
import { InputyKontrolowane } from "./005_eventy_przyciski_formularze_inputy/InputyKontrolowane";
import { Props } from "./006_parametry_funkcji_propsy_komponentu/Example";
// import { ListyTabele } from "./007_listy_tabele/Example";
// import { WyswietlanieWarunkowe } from "./008_wyswietlanie_warunkowe/Example";
// import { Lifecycle } from "./009_cykl_zycia_komponentu/Example";
// import { UsersApp } from "./010_project/Example";
import { StyleCSSExercise } from "./001_stylowanie_css/exercise001/StyleCSSExercise";
import { StyleInlineExercise } from "./001_stylowanie_css/exercise003/StyleInlineExercise";
import { StyleCSSModulesExercise } from "./001_stylowanie_css/exercise002/StyleCSSModulesExercise";
import { Metric } from "./001_stylowanie_css/exercise004/Metric";
import { TodoApp } from "./002_relacje_miedzy_komponentami_importy/exercise001/App";
import { MetricsApp } from "./002_relacje_miedzy_komponentami_importy/exercise000/App";
import { WyswietlStan } from "./004_stan_komponentu/exercise001/WyswietlStan";
import { Counter } from "./005_eventy_przyciski_formularze_inputy/exercise001/Counter";
import { TextField } from "./005_eventy_przyciski_formularze_inputy/exercise002/TextField";
import { Calculator } from "./005_eventy_przyciski_formularze_inputy/exercise003/Calculator";
import { TodoForm } from "./005_eventy_przyciski_formularze_inputy/exercise004/Form";
import { SimpleCounter } from "./005_eventy_przyciski_formularze_inputy/exercise000/Counter";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <KomponentFunkcyjny />
                <KomponentyKlasowy />
                {/* 
                  PONIŻEJ LINIA KTÓRĄ NALEŻY ODKOMENTOWAĆ DO ZADANIA 1 W MODULE 1
                 */}
                {/* <MyFirstComponent /> */}
              </>
            }
          />
          <Route
            path="/css"
            element={
              <>
                <StyleCSS />
                <StyleInline />
                <StyleCSSModules />
                <StyleCSSExercise />
                <StyleInlineExercise />
                <StyleCSSModulesExercise />
                <Metric />
              </>
            }
          />
          <Route
            path="/relations-and-imports"
            element={
              <>
                <Relacje />
                <MetricsApp />
                <TodoApp />
              </>
            }
          />
          <Route
            path="/assets"
            element={
              <>
                <Assets />
              </>
            }
          />
          <Route
            path="/state"
            element={
              <>
                <KomponentBezStanu />
                <StanKomponentu />
                <WyswietlStan />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Eventy />
                <InputyKontrolowane />
                <SimpleCounter />
                <Counter />
                <TextField />
                <Calculator />
                <TodoForm />
              </>
            }
          />
          <Route
            path="/props"
            element={
              <>
                <Props />
              </>
            }
          />
          {/* <Route
            path="/listings"
            element={
              <>
                <ListyTabele />
              </>
            }
          />
          <Route
            path="/conditionals"
            element={
              <>
                <WyswietlanieWarunkowe />
              </>
            }
          />
          <Route
            path="/lifecycle"
            element={
              <>
                <Lifecycle />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <UsersApp />
              </>
            }
          /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
