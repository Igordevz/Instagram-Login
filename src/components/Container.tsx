import Logo from "../img/LOGO.png";
import Line from "../img/Line.png";
import facebook from "../img/facebook.png";
import apple from "../img/apple.png";
import Play from "../img/play.png";
import apple2 from "../img/bi_apple.png";
import styled from "styled-components";

export default function LeftRender() {
  return (
    <>
      <Container>
     
        <LOGO>
          <img src={Logo} alt="" />
        </LOGO>
        <Login>
          <input type="text" placeholder="Telefone, nome de usuário ou email" id="usuario" />
          <input
            type="password"
            placeholder="Senha"
            id="senha"
          ></input>
                <input type="Submit" value="Entrar" id="Entrar"/>
        </Login>
        <div className="linha">
              
                <h1>  <img src={Line} alt="" width={105}/>OU <img src={Line} alt="" width={105}/></h1>
                
        </div>
            <div className="facebook">
                    <h1><img src={facebook} alt="" /> Inicar Sessão Com o Facebook</h1>


                    <a href="">Esqueceste-te da palavra-passe?</a>
            </div>
            <div className="footer">
        <h1>Obtém a aplicação.</h1>
        <img src={apple} alt="" />
        <img src={apple2} alt="" id="maca" />
        <img src={Play} alt="" />
      </div>
      </Container>

      <Card>
            <h1>Não Tem Uma Conta? <a href="">Cadastre-se</a></h1>
      </Card>

    
    </>
  );
}
export const Container = styled.div`
    background: #FFFFFF;
  top: 28px;
  left: 681px;
  position: absolute;
  border: 1px solid #dadada;
  width: 350px;
  height: 433px;
  .facebook{
    top: 336px;
    position: absolute;
    left: 51px;	
        h1{
            img{
                margin-right: 10px;
            }
            align-items: center;
            display: flex;
            font-size: 13px;
            color: #385185;
        }

        a{
            margin-left: 20px;
            color: rgba(0, 0, 0, 0.38);
            font-size: 12px;
            text-decoration: none;
        }
  }
  .linha{
    top: 304px;
    left:31px;
    position: absolute;
    h1{
     
        align-items: center;
    display: flex;
        color: rgba(0, 0, 0, 0.38);
        font-size: 12px;
        

        img{
            margin-right: 15px;

            margin-left: 15px;
        }
    }
  }
  .footer{
    display: flex;

    img{
        margin-left: 20px;
        margin-top: 550px;
        
    }
}

  .footer h1{
    
    left: 110px;
    bottom: -105px;
    position: absolute;
    position: absolute;

    font-size: 12px;
  }
  #maca{
    top: 7px;
    left: 10px;
    position: absolute;
  }
`;
export const LOGO = styled.div`
  top: 73px;
  left: 74px;
  position: absolute;
`;
export const Login = styled.div`
  position: absolute;
  top: 153px;
  left: 26px;
  input {
    background: #FAFAFA;
    border: 1px solid #DADADA;
    border-radius: 7px;
    margin-top: 8px;
    width: 290px;
    padding-left: 10px;
    height: 38px;
  }

  #Entrar{
    font-size: 15px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: white;
    background: rgb(0, 149, 246);
    cursor: pointer;
  }
  #Entrar:hover{
    background: rgb(0, 149, 246, 0.6);
  }
  
`;
export const Card = styled.div`
    border: 1px solid #dadada;
    width: 350px;
    top: 480px;
    height: 52px;
    position: absolute;
    left: 681px;
    background: #FFFFFF;
    h1{
        left: 22%;
        top: 35%;
        position: absolute;
        font-weight: 400;
    }
    font-size: 6px;
        a{
            color: #29A4F7;
        }

`