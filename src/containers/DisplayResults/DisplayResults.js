import { connect } from 'react-redux'
import './DisplayResults.css'

export const DisplayResults = () => {

  return (
    <div>
      I am div
    </div>
  )
}

const mapStateToProps = state => ({
  results: state.results
})

export default connect(mapStateToProps)(DisplayResults)