import { FazendoLogin } from "../FormLogin/formulario-login/index";
import styles from './FormLogin.module.css';
import { useState } from 'react';

type Usuarios = {
    nomeUsuario: string;
  }

export function FormLogin() {
    const [usuario, setFazerusuario] = useState<Usuarios[]>([])

    const [novousuario, setnovousuario] = useState<string>('');

    function handleNovoLoginDeclarativo(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('Novo Cadastro =>',novousuario)
        setnovousuario(event.target.value);
      }

    function handleNovoCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setFazerusuario([
            ...usuario,
            {
              nomeUsuario: novousuario
            }
        ])
        setnovousuario('');
      }

      return (
        <div>
            <form onSubmit={handleNovoCadastro}>
            <input 
                className={styles.caixadetextousuario}
                placeholder="Usuario"
                name="logins"
                value={novousuario}
                onChange={handleNovoLoginDeclarativo}
                />
            <input 
                className={styles.caixadetestosenha}
                placeholder="Senha"
                name="senhas"
                />
            <button type="submit" className={styles.botaologin}>ENTRAR</button>
            <button type="button" className={styles.botaocadastrar}>CADASTRAR</button>
        </form>
        {
          usuario.map((Usuarios) => (
            <FazendoLogin
            key={Usuarios.nomeUsuario}
            nomeLogin={Usuarios.nomeUsuario}
            />
          ))}
        </div>
      )

      type UsuarioProps = {
        nomeUsuario: string;
      };
      
      function Usuarios(props: UsuarioProps) {
        return <div>{props.nomeUsuario}</div>
      }
}