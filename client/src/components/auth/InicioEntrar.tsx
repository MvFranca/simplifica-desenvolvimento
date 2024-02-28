import {  useState } from "react";
import IconApple from "../../icons/IconApple";
import IconBxlFacebook from "../../icons/IconFacebook";
import IconGooglePlus from "../../icons/IconGoogle";
import IconLockPasswordFill from "../../icons/IconPassword";
import IconUser from "../../icons/IconUser";
import styles from "../../styles/auth/InicioEntrar.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const InicioForm = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const router = useNavigate();

  function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", { email, senha })
      .then((res) => {
        setError("");
        setSucess(res.data.msg);
        localStorage.setItem(
          "simplifica:user",
          JSON.stringify(res.data.data.user)
        );    

        localStorage.setItem(
          "simplifica:token",
          JSON.stringify(res.data.data.token)
        );
        router("/");
      })

      .catch((err) => {
        setError(err.response.data.msg);
        setSucess("");
        console.log(err);
      });
  }



  return (
    <>
      <div className={styles.container}>
        <div id={styles.formulario}>
        {/* <img src="./logo-simplifica.png" alt="Logo Simplifica" className={styles.logo}/> */}
    
          <div>
            <h1>Entrar na Conta</h1>
          </div>
          <div className={styles.icons}>
            <IconBxlFacebook className={styles.icon} />
            <IconGooglePlus className={styles.icon} />
            <IconApple className={styles.icon} />
          </div>
          <div>
            <p>Digite suas credenciais para entrar:</p>
          </div>
          

          <form onSubmit={submitLogin}>
            <div>
              <label htmlFor="email" className={styles.iconEmail}>
                <IconUser width={20} height={20} color="#000000ad" />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className={styles.iconEmail}
                id={styles.senha}
              >
                <IconLockPasswordFill
                  width={25}
                  height={25}
                  color="#000000ad"
                />
              </label>
              <input
                type="password"
                name="password"
                id="senha"
                placeholder="Senha"
                onChange={(event) => {
                  setPassword(event.currentTarget.value);
                }}
              />
            </div>

            <div>
              <button type="submit">ENTRAR</button>
            </div>
            <div className={styles.voltar}>
              <Link to="/registrar">Registrar</Link>
            </div>

            <div className={styles.alertas}>
              {error.length > 0 && <span id={styles.erro}>{error}</span>}
              {sucess.length > 0 && <span id={styles.sucesso}>{sucess}</span>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InicioForm;
