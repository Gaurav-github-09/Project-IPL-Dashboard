// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], loading: true}

  componentDidMount() {
    this.getAllteams()
  }

  getAllteams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData, loading: false})
  }

  render() {
    const {teamsList, loading} = this.state

    return (
      <div className="bgcont">
        {loading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <Link className="mainLink" to="/">
              <div className="logoCont">
                <img
                  className="logo"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <ul className="unordered">
                {teamsList.map(each => (
                  <TeamCard teamDetails={each} key={each.id} />
                ))}
              </ul>
            </Link>
          </>
        )}
      </div>
    )
  }
}

export default Home
