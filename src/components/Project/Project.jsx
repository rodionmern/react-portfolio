import './project.css'
import Button from '../Button/Button'

export default function Project(props) {
    {console.log(props)}
    return(
        <div className="project">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Button link={props.link} text={props.buttontext}></Button>
            <p className="project-language">{props.lang}</p>
        </div>
    )
}