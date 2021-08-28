import Form1 from '../componentes/formulario'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className = {styles.container}>
	  <header><h1>Curso Básico de Programação Brainstorm Engenharia</h1>
	  <div><img src="https://svgshare.com/i/_Nc.svg" alt=""/></div>
	  </header>
	  <main>
		<Form1 />	

	  </main>
          </div>
  )
}

