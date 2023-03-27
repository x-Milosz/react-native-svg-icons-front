/* eslint-disable max-len */
import en from "./en";

const pl: typeof en = {
    "error": {

    },
    "convertedSvgCreate": {

    },
    "svgListFetchPage": {

    },
    "mainPage": {
        title: "React Native Svg Icons",
        pageTitle: "RNSI :: Home",
        homeButtonText: "STRONA GŁÓWNA",
        aboutProjectButtonText: "O PROJEKCIE",
        contribute: "KONTRYBUCJE",
        ribbonText: "   •   REACT NATIVE SVG ICONS".repeat(30),
        searchInputPlaceholder: "Kliknij i wyszukaj swoją ikonę..."
    },
    "paginationOperator": {
        of: " z "
    },
    "aboutProjectPage": {
        pageTitle: "RNSI :: O projekcie",
        title: "React Native Svg Icons",
        description: "Opis",
        text1: "React Native Svg Icons to projekt free software, którego celem jest zapewnienie programistom React Native ikon do używania w ich projektach bez konieczności instalowania dodatkowych zależności i bibliotek w sposób łatwy i przyjemny. Projekt wykorzystuje ikony z Material Design, co zapewnia jednolity wygląd i styl w aplikacjach React Native.",
        text2: "Projekt składa się z dwóch części: frontendu napisanego w NextJs i Typescript, który odpowiada za konwersję SVG na komponenty React, oraz backendu napisanego w SpringBoot z wykorzystaniem języka Kotlin, który obsługuje zapytania dotyczące SVG.",
        text3: "Korzystanie z React Native Svg Icons jest proste i intuicyjne. Programiści mogą po prostu importować odpowiedni komponent ikony do swojego projektu i użyć go w swoim kodzie. Komponenty zwracane przez stronę są podatne na modyfikacje i zmiany stylistyczne, co umożliwia dopasowanie ikon do indywidualnych potrzeb projektu.",
        text4: "W przyszłości planowane są dodatkowe funkcjonalności i opcje, które jeszcze bardziej ułatwią korzystanie z React Native Svg Icons. Dzięki temu programiści będą mieli jeszcze większą kontrolę nad ikonami w swoich projektach i będą mogli je dostosować do swoich potrzeb.",
        techStack: "Tech stack",
        techStackText: "Obecnie projekt się skłąda z następujących części:",
        techStackList1: "NextJs, Typescript - frontend, konwersja svg",
        techStackList2: "SpringBoot, Kotlin - backend, obsługa zapytań dotyczących svg",
    },
    "contributionsPage": {
        pageTitle: "RNSI :: Kontrybucje",
        title: "Kontrybucje",
        text: "Jeśli chcez wspomóc projekt swoją pracą lub masz pomysł na rozwój projektu to zapraszam do stron projektu:",
        point: "Zbiorcze repozytorium projektu: ",
        pointLink: "https://github.com/x-Milosz/react-native-svg-icons",
        point1: "Frontend: ",
        point1Link: "https://github.com/x-Milosz/react-native-svg-icons-front",
        point2: "Backend: ",
        point2Link: "https://github.com/x-Milosz/react-native-svg-icons-server",
    },
    "404": {
        pageTitle: "RNSI :: 404",
        title: "404",
        description: "Ups, ta strona nie istnieje..."
    },
    "appCookieConsent": {
        text: "Ta strona używa cookies i innych narzędzi by umożlwić jej funkcjonowanie.",
        buttonText: "Jasne!",
    }
};

export default pl;
