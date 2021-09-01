import {useState} from 'react' 
import styles from '../../styles/Home.module.css'
export default function form1()
{
	const [formValues,setFormValues]=useState({}) 
	const handleSubmit=(event)=>{
		event.preventDefault();
		const formdata = new FormData(event.target)
		const data = Object.fromEntries(formdata)
		console.log(data)


	}
	const handleInput=(event)=>{
		const {name,value}=event.target
		setFormValues({...formValues, [name]:value })
		console.log("nameinput",event.target.value)	
	}
  return (
	  	  <form className = {styles.formpink} onSubmit={handleSubmit} action="">
		<div className = {styles.gridform}class="container">
	  <div className={styles.containerinputs}>
	  <div className={styles.textinputs}>
<label for="">
								<p><i class="fas fa-signature"></i>&nbsp; Nome Completo</p>
							</label>
							<input name="name"  value={formValues.name || ""} onChange={handleInput} title="Digite somente letras" type="text" placeholder="Nome Completo"
								id="name"/>
							<p id="nametitle" className={styles.inputTitles}></p>
							<label for="">
								<p><i class="fas fa-phone-alt"></i>&nbsp; Número de Telefone</p>
							</label>
							<input value={formValues.phone || ""} name = "phone" onChange={handleInput}title="Digite no formato: 91987436543" type="text"
								placeholder="Número de Telefone" id="phone"/>
							<p id="phonetitle" className={styles.inputTitles}></p>
							<label for="">
								<p><i class="fas fa-birthday-cake"></i>&nbsp; Data de Nascimento</p>
							</label>
							<input onChange={handleInput}name = "date" value={formValues.date || ""} type="date" placeholder="data de Nascimento" id="birthdate"/>
							<p className = {styles.inputTitles} id="birthtitle"></p>
							<label for="">
								<p><i class="fas fa-at"></i>&nbsp; E-mail</p>
							</label>
							<input onChange={handleInput}name = "email" value={formValues.email || ""}   title="Digite um formato válido de E-mail" type="text" placeholder="E-mail"
								id="email"/>
							<p id="emailtitle" className={styles.inputTitles}></p>
							<label for="">
								<p><i class="fas fa-city"></i>&nbsp; Cidade e Estado</p>
							</label>
							<input onChange={handleInput}title="Digite no formato: 'UF/cidade'" value={formValues.state || ""} name = "state" type="text"
								placeholder="Cidade e Estado" id="city"/>
							<p id="citytitle" className={styles.inputTitles}></p>
							<label for="">
								<p><i class="fas fa-university"></i>&nbsp; Faculdade/Escola</p>
							</label>
							<input onChange={handleInput}title="Digite somente letras" type="text" value={formValues.uni|| ""} name = "uni" placeholder="Faculdade/Escola"
								id="college"/>
							<p id="collegetitle" className={styles.inputTitles}></p>
	  </div>
</div>
	  <div className = {styles.divisor}></div>

	  <div className={styles.radioinputs}>
		<div className = {styles.formacao} >
<p><i class="fas fa-graduation-cap"></i>&nbsp; Formação Acadêmica</p>
							<p  id="radios1title"></p>
							<span>
								<input type="radio" value="Fundamental Completo" name="knowing" id="FC"/>
								<label for="FC">Fundamental Completo</label>
							</span>
							<span>
								<input type="radio" value="Fundamental Incompleto" name="knowing" id="FI"/>
								<label for="FI">Fundamental Incompleto</label>
							</span>
							<span>
								<input type="radio" value="Médio Completo" name="knowing" id="MC"/>
								<label for="MC">Médio Completo</label>
							</span>
							<span>
								<input type="radio" value="Médio Incompleto" name="knowing" id="MI"/>
								<label for="MI">Médio Incompleto</label>
							</span>
							<span>
								<input type="radio" value="Superior Completo" name="knowing" id="SC"/>
								<label for="SC">Superior Completo</label>
							</span>
							<span>
								<input type="radio" value="Superior Incompleto" name="knowing" id="SI"/>
								<label for="SI">Superior Incompleto</label>
							</span>
							<span>

							<input class = "outro" type="radio" value="Outro" name ="knowing" id = "outro"/>
							<label for="outro">Outro</label>
							<input class = "outroinput" type = "text" ></input>	

							</span>
		</div>
		<div className={styles.social}>
<p><i class="fas fa-network-wired"></i>&nbsp;Como ficou sabendo do curso?</p>
							<p class="titles" id="radios2title"></p>
							<span>
								<input type="radio" value="Instagram" name="radio2" id="ig"/>
								<label for="ig">Instagram</label>
							</span>
							<span>
								<input type="radio" value="Facebook" name="radio2" id="fc"/>
								<label for="fc">Facebook</label>
							</span>
							<span>
								<input type="radio" value="Twitter" name="radio2" id="tt"/>
								<label for="tt">Twitter</label>
							</span>
							<span>
								<input type="radio" value="Linkedin" name="radio2" id="lk"/>
								<label for="lk">Linkedin</label>
							</span>
							<span>
								<input type="radio" value="Site da Brainstorm Engenharia" name="radio2" id="BS"/>
								<label for="BS">Site da Brainstorm Engenharia</label>
							</span>
							<span>

							<input type="radio" value="Indicação de amigo" name = "radio2" id = "friend"/>
							<label for="friend">Indicação de amigo</label>
							</span>
							<span>
							<input  class = "outro" type="radio" value="Outro" name = "radio2" id = "other"/>
							<label for="other">Outro</label>
							<input hidden class = "outroinput" type = "text" ></input>
							</span>
		</div>
		</div>
	  </div>
<button type="submit">Próximo</button>
	  </form>
  )
}

