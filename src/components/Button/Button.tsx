import './button.css'

export default function Button(props: any) {
    function handleClick() {
        console.log("Link clicked")
        document.location.href=props.link;
    }    
    return(
        <button onClick={handleClick}>{props.text}</button>
    )
}