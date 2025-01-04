// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latMatCard">
      <div className="inCard1">
        <div className="forallparas">
          <p className="parasAll">{competingTeam}</p>
          <p className="parasAll">{date}</p>
          <p className="parasAll">{venue}</p>
          <p className="parasAll">{result}</p>
        </div>
        <img
          className="logoTeamLat"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="lastPara">
        <h1 className="headingsAll">First Innings</h1>
        <p className="parasAll">{firstInnings}</p>
        <h1 className="headingsAll">Second Innings</h1>
        <p className="parasAll">{secondInnings}</p>
        <h1 className="headingsAll">Man Of The Match</h1>
        <p className="parasAll">{manOfTheMatch}</p>
        <h1 className="headingsAll">Umpires</h1>
        <p className="parasAll">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
