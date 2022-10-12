import styled from "styled-components";
import iphone from "../img/Iphone.png";
import backgroundiphone from "../img/backgroundiphone.png";
import backgroundiphone2 from "../img/backgroundiphone2.png";
import backgroundiphone3 from "../img/backgroundiphone3.png";
import { useEffect } from "react";
export default function Cell() {

  return (
    <>
      <CellBack>
        <img src={iphone} alt="" width={370} />
        <img src={backgroundiphone} alt="" width={215} id="background" />
      </CellBack>
      <CellFront>
        <img src={iphone} alt="" width={370} />
        <div className="sliders" id="slider">
          <img src={backgroundiphone2} alt="" width={243} id="back2" />
          <img src={backgroundiphone3} alt="" width={243} id="back3" />

        </div>
      </CellFront>
    </>
  );
}

export const CellBack = styled.div`
  position: absolute;
  left: 170px;
  top: 47px;
  /*outro 88*/
  #background {
    top: 15px;
    left: 65px;
    position: absolute;
  }
`;
export const CellFront = styled.div`
  position: absolute;
  left: 317px;
  top: 68px;
  #back2 {
    position: absolute;
    left: 65px;
    top: 15px;
  }
  #back3{
    animation: 15s animator infinite;
    position: absolute;
    left: 65px;
    top: 15px;
  }

  @keyframes  animator{ 
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    70%{
        opacity: 0;
    }
  }
`;
