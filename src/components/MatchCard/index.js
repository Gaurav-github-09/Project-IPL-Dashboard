// Write your code here

import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails

  const resultStyle = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="matchCard">
      <img
        className="teamLogo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="comTeam">{competingTeam}</p>

      <p className="resultGm">{result}</p>
      <p className={`matchStat ${resultStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default LatestMatch
