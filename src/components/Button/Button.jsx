import './button.css'

var link;

export default function Button(props) {
    function handleClick() {
        console.log("Link clicked")
        document.location.href=props.link;
    }    
    return(
        <button onClick={handleClick}>{props.text}</button>
    )
}