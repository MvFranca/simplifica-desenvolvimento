import { useState } from "react";
import IconEmail from "../../icons/IconEmail";
import IconLockPasswordFill from "../../icons/IconPassword";
import IconUser from "../../icons/IconUser";
import styles from "../../styles/auth/InicioEntrar.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import IconGoogleClassroom from "../icons/iconClass";

const InicioRegistro = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [turma, setTurma] = useState("921")
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [url_image] = useState("bvcb");
  const router = useNavigate();

  function adicionarIdPontuacao() {
    axios
      .post("https://simplifica-desenvolvimento.onrender.com/api/points/insertIdPoints", {
        email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function submitRegistro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('turma:')
    console.log(turma)
    axios
      .post("https://simplifica-desenvolvimento.onrender.com/api/auth/register", {
        username,
        email,
        senha,
        confirmPassword,
        url_image,
        fullname,
        turma,
      })
      .then((res) => {
        setError("");

        setSucess(res.data.msg);

        adicionarIdPontuacao();

        setTimeout(() => {
          router("/");
        }, 1000);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setSucess("");
      });
  }


  // const turmas = [

  // ]

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
              <label htmlFor="FullName" className={styles.iconEmail}>
                <IconUser
                  width={20}
                  height={20}
                  className={styles.icones}
                  color="#000000ad"
                />
              </label>
              <input
                type="FullName"
                name="FullName"
                id="FullName"
                placeholder="Nome Completo"
                onChange={(e) => {
                  setFullName(e.currentTarget.value);
                }}
              />
            </div>
            
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
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value.replace(/\s/g, ''));
                }}
                value={username}
              />
            </div>

            <div>

              <label htmlFor="turma" className={styles.iconEmail}>
                <IconGoogleClassroom
                  width={20}
                  height={20}
                  className={styles.icones}
                  color="#000000ad"
                />
              </label>

             <select className={styles.classSelect} name="turma" id="turma" 
             onChange={(e) => {
              setTurma(e.target.value.replace(/\s/g, ''));
            }}>
                <option value="921">
                  921
                </option>
                <option value="911">
                  911
                </option>
                <option value="922">
                  922
                </option>
                <option value="912">
                  912
                </option>
             </select>

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
                name="confirmSenha"
                id="confirmSenha"
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
