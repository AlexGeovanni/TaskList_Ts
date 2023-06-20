
import github from '../assets/img/github_logo_icon.png';
import linkedin from '../assets/img/linkedin.png'
import '../index.scss'


export default function Contacto(){
    return(
        <div className='contacto'>
            <p>&copy; Alex Geovanni</p>
            <a href="https://github.com/AlexGeovanni" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/alex-geovanni-diaz-dwf/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" />
            </a>
        </div>
    )
}