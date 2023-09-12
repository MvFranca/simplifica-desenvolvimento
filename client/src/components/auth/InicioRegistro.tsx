import { useState } from "react";
import IconEmail from "../../icons/IconEmail";
import IconLockPasswordFill from "../../icons/IconPassword";
import IconUser from "../../icons/IconUser";
import styles from "../../styles/auth/InicioEntrar.module.css";
import { Link } from "react-router-dom";
import axios from 'axios'

const InicioRegistro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [error, setError] = useState("")
  const [sucess, setSucess] = useState("")

  function submitRegistro(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    axios.post("http://localhost:8000/api/auth/register", {username, email, password, confirmPassword}).then((res) => {

      setSucess(res.data.msg)
      setError('')
      console.log(res)

    }).catch((err)=> {

      setError(err.response.data.msg)
      setSucess('')
      console.log(err, username)

    })
  }

  return (
    <>
      <div className={styles.container1}>
        <div id={styles.formulario}>
          <div>
            <h1>Crie uma conta</h1>
          </div>
          <div>
            <p>Digite suas credenciais para se cadastrar:</p>
          </div>
          <form onSubmit={submitRegistro}>
            <div>
              <label htmlFor="User" className={styles.iconEmail}>
                <IconUser
                  width={20}
                  height={20}
                  className={styles.icones}
                  color="#000000ad"
                />
              </label>
              <input
                type="User"
                name="User"
                id="User"
                placeholder="Usuário"
                onChange={(e) => {
                  setUsername(e.currentTarget.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className={styles.iconEmail}>
                <IconEmail
                  width={20}
                  height={20}
                  className={styles.icones}
                  color="#000000ad"
                />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
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
                  className={styles.icones}
                  color="#000000ad"
                />
              </label>

              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="confirmSenha"
                className={styles.iconEmail}
                id={styles.senha}
              >
                <IconLockPasswordFill
                  width={25}
                  height={25}
                  className={styles.icones}
                  color="#000000ad"
                />
              </label>

              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Confirme sua senha"
                onChange={(e) => {
                  setConfirmPassoword(e.currentTarget.value);
                }}
              />
            </div>
       
            <div>
              <button type="submit">Registrar</button>
            </div>
            <div className={styles.voltar}>
              <Link to="/entrar">Entrar</Link>
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

export default InicioRegistro;
