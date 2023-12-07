import './Nav.css'
import Link from 'next/link' //se importa esta etiqueta

export default function Nav(){
    return(
        <nav>
            <ul className='navLista'>
                
                {/* se utiliza la etiqueta a solo para enlaces externos 
                    se utiliza la etiqueta Link (con L mayuscula) para enlaces internos (hay que importarla)
                */}
                <li>
                    <Link href="./" className='navItem'>Inicio</Link>
                </li>
                <li>
                    <Link href="./nosotros" className='navItem'>Nosotros</Link>
                </li>
                <li>
                    <Link href="" className='navItem'>Empresa</Link>
                </li>
                <li>
                    <Link href="" className='navItem'>Productos</Link>
                </li>
                <li>
                    <Link href="./contacto" className='navItem'>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}