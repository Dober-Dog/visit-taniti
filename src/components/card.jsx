import { useNavigate } from "react-router-dom"

export default function Card(props){

    const title = props.title
    const info = props.info
    const action = props.action
    const link = props.link
    const background = props.background

    const navigate = useNavigate()

    const travel = () => {
        navigate(props.link)
    }


    return (

        <div className="card" style={{ backgroundImage: `url(${props.background})`}} onClick={travel}>
            <h3>{props.title}</h3>
            <div className="info-text">
                <span>{props.info}</span>
                <p>{props.action}</p>
            </div>
        </div>
    )
}