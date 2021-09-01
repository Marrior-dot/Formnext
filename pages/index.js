import Form1 from '../componentes/formulario'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.container}>
	  <head>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"/>
	  </head>
	  <header><h1>Curso Básico de Programação Brainstorm Engenharia</h1>
	  <div className = {styles.boximg}><img src="https://svgshare.com/i/_Nc.svg" alt=""/></div>
	  </header>
	  <main>
		<Form1 />	

	  </main>
          </div>
  )
}

