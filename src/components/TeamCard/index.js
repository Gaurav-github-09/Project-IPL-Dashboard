// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <Link className="forLink" to={`/team-matches/${id}`}>
      <li className="liEl">
        <img className="teamLogo3" src={teamImageUrl} alt={`${name}`} />
        <p className="Name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
