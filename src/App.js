import React, { Component } from "react";
import { Routes ,Route } from 'react-router-dom';
import Compiler from "./Components/Compiler/Compiler";
import NavBar from "./Components/Components/NavBar";
import Home from "./Components/Components/Home";
import Topics from "./Components/Components/Topics";
import Material from "./Components/Components/Material";
import KickStart from "./Components/Components/KickStart";
import ArrayQuestions from "./Components/Components/ArrayQuestions";
import MatrixQuestions from "./Components/Components/MatrixQuestions";
import StringQuestions from "./Components/Components/StringQuestions";
import SearchQuestions from "./Components/Components/SearchQuestions";
import LinkedQuestions from "./Components/Components/LinkedQuestions";
import BinaryQuestions from "./Components/Components/BinaryQuestions";
import DpQuestions from "./Components/Components/DpQuestions";

import Explore1 from "./Components/Components/Explore1";
import Explore2 from "./Components/Components/Explore2";
import Explore3 from "./Components/Components/Explore3";
import Explore4 from "./Components/Components/Explore4";



import SumQuestion from "./Components/Questions/SumQuestion";
import Inquest from "./Components/Questions/Inquest";
import Inquest1 from "./Components/Questions/Inquest1";
import Inquest2 from "./Components/Questions/Inquest2";

import Question from "./Components/Questions/Question";
import Question1 from "./Components/Questions/Question1";
import Question2 from "./Components/Questions/Question2";
import Question3 from "./Components/Questions/Question3";
import Question4 from "./Components/Questions/Question4";
import Question5 from "./Components/Questions/Question5";
import Question6 from "./Components/Questions/Question6";
import Question7 from "./Components/Questions/Question7";
import Question8 from "./Components/Questions/Question8";
import Question9 from "./Components/Questions/Question9";
import Question10 from "./Components/Questions/Question10";
import Question11 from "./Components/Questions/Question11";
import Question12 from "./Components/Questions/Question12";
import Question13 from "./Components/Questions/Question13";
import Question14 from "./Components/Questions/Question14";
import Question15 from "./Components/Questions/Question15";
import Question16 from "./Components/Questions/Question16";
import Question17 from "./Components/Questions/Question17";
import Question18 from "./Components/Questions/Question18";
import Question19 from "./Components/Questions/Question19";
import Question20 from "./Components/Questions/Question20";
import Question21 from "./Components/Questions/Question21";
import Question22 from "./Components/Questions/Question22";
import Question23 from "./Components/Questions/Question23";
import Question24 from "./Components/Questions/Question24";
import Question25 from "./Components/Questions/Question25";
import Question26 from "./Components/Questions/Question26";
import Question27 from "./Components/Questions/Question27";




export default class App extends Component {
  render() {
    return (
      <>
        
        <NavBar/>
        
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes> 
           
        <Routes>
          <Route path="/com" element={<Compiler/>} />
        </Routes> 


        <Routes>
          <Route exact path="/topic" element={<Topics/>} />
        </Routes>

        <Routes>
          <Route exact path="/material" element={<Material/>} />
        </Routes>

        <Routes>
          <Route exact path="/kickstart" element={<KickStart/>} />
        </Routes>

        <Routes>
          <Route exact path="/arrayquestions" element={<ArrayQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/matrixquestions" element={<MatrixQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/stringquestions" element={<StringQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/searchquestions" element={<SearchQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/linkedquestions" element={<LinkedQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/binaryquestions" element={<BinaryQuestions/>} />
        </Routes>
        
        <Routes>
          <Route exact path="/dpquestions" element={<DpQuestions/>} />
        </Routes>


        

        {/* Explore sections */}
        <Routes>
          <Route exact path="/explore1" element={<Explore1/>} />
        </Routes>

        <Routes>
          <Route exact path="/explore2" element={<Explore2/>} />
        </Routes>

        <Routes>
          <Route exact path="/explore3" element={<Explore3/>} />
        </Routes>

        <Routes>
          <Route exact path="/explore4" element={<Explore4/>} />
        </Routes>



        <Routes>
          <Route exact path="/sumquestion" element={<SumQuestion/>} />
        </Routes>

        <Routes>
          <Route exact path="/inquest" element={<Inquest/>} />
        </Routes>

        <Routes>
          <Route exact path="/inquest1" element={<Inquest1/>} />
        </Routes>

        <Routes>
          <Route exact path="/inquest2" element={<Inquest2/>} />
        </Routes>

        <Routes>
          <Route exact path="/question" element={<Question/>} />
        </Routes>

        <Routes>
          <Route exact path="/question1" element={<Question1/>} />
        </Routes>

        <Routes>
          <Route exact path="/question2" element={<Question2/>} />
        </Routes>

        <Routes>
          <Route exact path="/question3" element={<Question3/>} />
        </Routes>

        <Routes>
          <Route exact path="/question4" element={<Question4/>} />
        </Routes>

        <Routes>
          <Route exact path="/question5" element={<Question5/>} />
        </Routes>


        <Routes>
          <Route exact path="/question6" element={<Question6/>} />
        </Routes>

        <Routes>
          <Route exact path="/question7" element={<Question7/>} />
        </Routes>
        
        <Routes>
          <Route exact path="/question8" element={<Question8/>} />
        </Routes>

        <Routes>
          <Route exact path="/question9" element={<Question9/>} />
        </Routes>

        <Routes>
          <Route exact path="/question10" element={<Question10/>} />
        </Routes>

        <Routes>
          <Route exact path="/question11" element={<Question11/>} />
        </Routes>

        <Routes>
          <Route exact path="/question12" element={<Question12/>} />
        </Routes>

        <Routes>
          <Route exact path="/question13" element={<Question13/>} />
        </Routes>

        <Routes>
          <Route exact path="/question14" element={<Question14/>} />
        </Routes>


        <Routes>
          <Route exact path="/question15" element={<Question15/>} />
        </Routes>

        <Routes>
          <Route exact path="/question16" element={<Question16/>} />
        </Routes>

        <Routes>
          <Route exact path="/question17" element={<Question17/>} />
        </Routes>

        <Routes>
          <Route exact path="/question18" element={<Question18/>} />
        </Routes>

        <Routes>
          <Route exact path="/question19" element={<Question19/>} />
        </Routes>

        <Routes>
          <Route exact path="/question20" element={<Question20/>} />
        </Routes>

        <Routes>
          <Route exact path="/question21" element={<Question21/>} />
        </Routes>

        <Routes>
          <Route exact path="/question22" element={<Question22/>} />
        </Routes>

        <Routes>
          <Route exact path="/question23" element={<Question23/>} />
        </Routes>
        
        <Routes>
          <Route exact path="/question24" element={<Question24/>} />
        </Routes>

        <Routes>
          <Route exact path="/question25" element={<Question25/>} />
        </Routes>

        <Routes>
          <Route exact path="/question26" element={<Question26/>} />
        </Routes>

        <Routes>
          <Route exact path="/question27" element={<Question27/>} />
        </Routes>
        

          
          
      </>
    );
  }
}