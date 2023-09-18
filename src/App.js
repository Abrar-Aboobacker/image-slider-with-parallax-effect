import React from 'react'
import Header from './components/Header'
import HomeSlider from './components/HomeSlider'

const App = () => {
  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 px-8'>
                    <Header/>
                    <HomeSlider/>
                </div>
            </div>
        </div>
      <Header/>
    </div>
  )
}

export default App
