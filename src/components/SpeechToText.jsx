import { useState } from 'react';
import './speechToText.css'

const SpeechToTextConverter = () => {
  const [isListening, setIsListening] = useState(false);
  const [recordedText, setRecordedText] = useState('');

  const handleStartListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecordedText(prevText => prevText + transcript + ' '); // Concatenate the new transcript with the previous text
    };
    recognition.start();
    setIsListening(true);
  };

  const handleStopListening = () => {
    setIsListening(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(recordedText);
  };

  return (
    <div className='main-container' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Speech to Text Converter</h1>
      <p style={{width:'38vw', display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>
      <p style={{boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)', width:'60vw', height:'30vh', borderRadius:'10px'}}>{recordedText}</p>
      <div className='second-container' style={{display:'flex', justifyContent:'space-around', width:'60vw'}}>
        <button style={{color:'white', backgroundColor:'rgb(42,201,164)', width:'10vw', height:'8vh', borderRadius:'10px', border:'none'}} onClick={handleCopyToClipboard} disabled={!recordedText}>Copy to Clipboard</button>
        <button style={{color:'white', backgroundColor:'rgb(42,201,164)', width:'10vw', height:'8vh', borderRadius:'10px', border:'none'}}  onClick={handleStartListening} disabled={isListening}>Start Listening</button>
        <button style={{color:'white', backgroundColor:'rgb(42,201,164)', width:'10vw', height:'8vh', borderRadius:'10px', border:'none'}} onClick={handleStopListening} disabled={!isListening}>Stop Listening</button>
      </div>
    </div>
  );
};

export default SpeechToTextConverter;