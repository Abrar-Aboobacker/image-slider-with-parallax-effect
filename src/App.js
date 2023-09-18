import React from 'react'
import HomeSlider from './components/HomeSlider'
import slides from './sample.json'
const App = () => {
  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 px-8'>
                    <HomeSlider slides={slides}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
