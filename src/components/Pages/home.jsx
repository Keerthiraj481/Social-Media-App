import React from "react";
import Navbar from "../Navbar/navbar.component";
import LeftSide from "../LeftSideBar/leftside.component";
import CardSection from "../Main/cardsection";
import RightSide from "../RightSideBar/rightside.component";
import Main from "../Main/main";
import Login from "../Pages/login"

const Home = () => {
    return ( 
        <>
      <div className="w-full">
        <div className="fixed top-0 z-10 w-full bg-white shadow">
          <Navbar />
        </div>
      </div>
      <div className="flex bg-gray-100">
        <div className="flex-auto w-[20%] fixed top-[4rem]">
          <LeftSide />
        </div>
        <div className="flex-auto w-[60%] absolute left-[20%] top-[4.5rem] bg-gray-100 rounded-xl">
          <div className="w-[80%] mx-auto">
            <CardSection />
            <Main />
          </div>
        </div>
        <div className="flex-auto w-[20%] fixed top-[4rem] right-0">
          <RightSide />
        </div>
      </div>
    </>
     );
}
 
export default Home;

