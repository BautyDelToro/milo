import './contacto.css'

export default function Contacto(){
    return(
        <>
        <form name='contacto' hidden data-netlify="true"  netlify-honeypot="bot-field">
            <input type="text" name='nombre'/>
            <input type="email" name="mail"/>
            <textarea name="comentarios"></textarea>
        </form>
        
        <form action="" className='formulario' method='post'>
          <label>
            Nombre<input type="text" name='nombre'/>
          </label>
  
          <label>
            Mail <input type="email" name='mail'/>
          </label>
         
          <label>
            <textarea name="comentarios"></textarea>
          </label>
  
        <input type="hidden" name="form-name" value="contacto" />

        <input type="submit" name='enviar' />

  
        </form>
      </>
    )
}