import { Link } from "react-router-dom"

function Lien({lien, text, classe}) {
  return (
    <Link to={lien} className={classe} >{text}</Link>
  )
}

export default Lien