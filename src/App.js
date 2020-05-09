import React from "react";


import Header from "./components/header/Header";
import MainScreen from "./components/mainScreen/MainScreen";
import InfoSection from "./components/infoSection/InfoSection";
import UsersSectionList from "./components/usersSectionList/UsersSectionList"
import FormSection from './components/formSection/FormSection';
import Footer from "./components/footer/Footer";





const App = () => {
  return (
    <>
      <Header />
      <MainScreen />
      <InfoSection />
      <UsersSectionList />
      <FormSection/>
      <Footer/>
      
    </>
  );
};

export default App;
