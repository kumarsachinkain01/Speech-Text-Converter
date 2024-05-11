import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SpeechToTextConverter from './components/SpeechToText';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeechToTextConverter/>
  </React.StrictMode>,
)
