// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: [], loader: true, id: ''}

  componentDidMount() {
    this.getAllMatches()
  }

  getAllMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        result: data.latest_match_details.result,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        umpires: data.latest_match_details.umpires,
      },
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        matchStatus: each.match_status,
        result: each.result,
        id: each.id,
      })),
    }

    this.setState({matchDetails: updatedData, loader: false, id})
  }

  backgroundStyle = id => {
    let bgStyle = ''

    if (id === 'RCB') {
      bgStyle = 'forRCB'
    }
    if (id === 'KKR') {
      bgStyle = 'forKKR'
    }
    if (id === 'KXP') {
      bgStyle = 'forKXP'
    }
    if (id === 'CSK') {
      bgStyle = 'forCSK'
    }
    if (id === 'RR') {
      bgStyle = 'forRR'
    }
    if (id === 'MI') {
      bgStyle = 'forMI'
    }
    if (id === 'SH') {
      bgStyle = 'forSH'
    }
    if (id === 'DC') {
      bgStyle = 'forDC'
    }

    return bgStyle
  }

  render() {
    const {loader, matchDetails, id} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails

    const getBgStyle = this.backgroundStyle(id)

    return (
      <div className={`teamstyles ${getBgStyle}`}>
        {loader ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img className="teamBanner" src={teamBannerUrl} alt="team banner" />
            <h1 className="ltstMtchs">Latest Matches</h1>
            <LatestMatch key={id} latestMatchDetails={latestMatchDetails} />
            <ul className="unorderedMatch">
              {recentMatches.map(each => (
                <MatchCard key={each.id} matchDetails={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
