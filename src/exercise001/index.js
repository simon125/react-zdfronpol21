/**
 *
 * skopiuj całą zawartość pliku index_without_router.js i wklej ją
 * do pliku index.js
 *
 * Właśnie pozbyłeś/aś sie routeru z aplikacji :)
 *
 * Twoim zadaniem jest ponowny setup Routeru w aplikacji do tego celu należy:
 *
 * 1) zaimporotować (named import) komponent BrowserRouter z paczki react-router-dom
 * 2) zaimportowany komponent należy wywołać/użyć i "otoczyć" nim komponent ExerciseApp
 *
 * zauważ że teraz Twoim entry pointem jest plik App_exercise.js i komponent ExerciseApp.js
 *
 * w tym też pliku (App_exercise.js) należy odtworzyć to co było w części wykładowej
 *
 * należy dodać komponent Routes który będzie rodzicem Routów (Route)
 * każdy Route będzie przyjmował dwa propsy "path" oraz "element"
 * w propsie "path" należy określić ścieżkę (część URLa tzw segment) który jeżeli będzie
 * zgodny z tym co pasku URL to komponent przekazany do propsa "element" zostanie wyświetlony na ekranie
 *
 * nie zapomnij o nawigacji/linkach
 * tutaj należy użyć komponentu Link który przyjmuje propsa "to"
 *
 *
 * Spróbuj zrobić jak najwięcej z pamięci i na podstawie opisu, w razie wszelakich problemów pytaj!
 *
 *
 * ⭐⭐ Zadanie dodatkowe,
 * spróbuj dodać kolejny Route o pathie 'users'
 * w tym Roucie należy wyświetlić komponent który też należy stworzyć - niech nazywa się zgodnie z konwencją
 * Users
 *
 * komponent Users powinien wyświetlić listę userów którą należy najpierw pobrać również w tym samym komponencie
 * w hooku useEffect
 *
 * endpoint który zwraca listę userów jest następujący: http://localhost:3010/users
 *
 * dodatkowo możesz dodać interakcje z listą uzytkowników np. usuwanie
 *
 *
 */
