import './project.css'
import Button from '../Button/Button'

interface Project {
    title: string,
    description: string,
    button_text: string,
    link: string,
    lang: string,
}

export default function Project({title, description, button_text, link, lang}: Project) {
    return(
        <div className="project">
            <div className='project__main-info'>
                <h2 className='title'>{title}</h2>
                <p className="project-language">{lang}</p>
                <hr />
            </div>
            <p className='description'>{description}</p>
            <Button link={link} text={button_text}></Button>
        </div>
    )
}