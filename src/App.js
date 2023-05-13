import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { KomponentFunkcyjny } from "./000_komponent/KomponentFunkcyjny";
/**
 * LINIA KTÓRĄ NALEŻY ODKOMENTOWAĆ DO ZADANIA 1 W MODULE 1
 */
import { MyFirstComponent } from "./000_komponent/exercise001/MyFirstComponent";
import { KomponentyKlasowy } from "./000_komponent/KomponentyKlasowy";
import { StyleCSS } from "./001_stylowanie_css/StyleCSS";
import { StyleCSSModules } from "./001_stylowanie_css/StyleCSSModules";
import { StyleInline } from "./001_stylowanie_css/StyleInline";
import { Relacje } from "./002_relacje_miedzy_komponentami_importy/Relacje";
import { Assets } from "./003_assety/Assets";
import { KomponentBezStanu } from "./004_stan_komponentu/KomponentBezStanu";
import { StanKomponentu } from "./004_stan_komponentu/StanKomponentu";
import { Eventy } from "./005_eventy_przyciski_formularze_inputy/Events";
import { Props } from "./006_parametry_funkcji_propsy_komponentu/Example";
import { StyleCSSExercise } from "./001_stylowanie_css/exercise001/StyleCSSExercise";
import { StyleInlineExercise } from "./001_stylowanie_css/exercise003/StyleInlineExercise";
import { StyleCSSModulesExercise } from "./001_stylowanie_css/exercise002/StyleCSSModulesExercise";
import { Metric } from "./001_stylowanie_css/exercise004/Metric";
import { TodoApp } from "./002_relacje_miedzy_komponentami_importy/exercise001/App";
import { MetricsApp } from "./002_relacje_miedzy_komponentami_importy/exercise000/App";
import { WyswietlStan } from "./004_stan_komponentu/exercise001/WyswietlStan";
import { Counter } from "./005_eventy_przyciski_formularze_inputy/exercise001/Counter";
import { TextField } from "./005_eventy_przyciski_formularze_inputy/exercise002/TextField";
import { AddTwoNumbers } from "./005_eventy_przyciski_formularze_inputy/exercise003/AddTwoNumbers";
import { CSSEditor } from "./005_eventy_przyciski_formularze_inputy/exercise004/CSSEditor";
import { Calculator } from "./005_eventy_przyciski_formularze_inputy/exercise005/Calculator";
import { TodoForm } from "./005_eventy_przyciski_formularze_inputy/exercise006/Form";
import { SimpleCounter } from "./005_eventy_przyciski_formularze_inputy/exercise000/Counter";
import { Parent1 } from "./006_parametry_funkcji_propsy_komponentu/exercise000/Parent";
import { TwoStrings } from "./006_parametry_funkcji_propsy_komponentu/exercise001/Parent";
import { GrandParent } from "./006_parametry_funkcji_propsy_komponentu/exercise004/GrandParent";
import { Parent2 } from "./006_parametry_funkcji_propsy_komponentu/exercise002/Parent";
import { CounterWithProps } from "./006_parametry_funkcji_propsy_komponentu/exercise003/Parent";
import { ListyTabele } from "./007_listy_tabele/Example";
import { WyswietlanieWarunkowe } from "./008_wyswietlanie_warunkowe/Example";
import { Lifecycle } from "./009_cykl_zycia_komponentu/Example";
import { Numbers } from "./007_listy_tabele/exercise001/Numbers";
import { SimpleTodoList } from "./007_listy_tabele/exercise002/SimpleTodoList";
import { MetricsByProps } from "./007_listy_tabele/exercise003/Metrics";
import { TodoList } from "./007_listy_tabele/exercise004/TodoList";
import { ShowMore } from "./008_wyswietlanie_warunkowe/exercise001/ShowMore";
import { CatDogPerson } from "./008_wyswietlanie_warunkowe/exercise002/CatDogPerson";
import { Tabs } from "./008_wyswietlanie_warunkowe/exercise003/Tabs";

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
                <MyFirstComponent />
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
                <SimpleCounter />
                <Counter />
                <TextField />
                <AddTwoNumbers />
                <CSSEditor />
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
                <Parent1 />
                <TwoStrings />
                <CounterWithProps />
                <GrandParent />
                <Parent2 />
              </>
            }
          />
          <Route
            path="/listings"
            element={
              <>
                <ListyTabele />
                <Numbers />
                <SimpleTodoList />
                <MetricsByProps />
                <TodoList />
              </>
            }
          />
          <Route
            path="/conditionals"
            element={
              <>
                <WyswietlanieWarunkowe />
                <ShowMore />
                <CatDogPerson />
                <Tabs />
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
        </Routes>
      </main>
    </>
  );
}

export default App;
