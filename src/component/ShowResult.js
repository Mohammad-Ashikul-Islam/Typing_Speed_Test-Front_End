import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShowResult = () => {
    const navigate = useNavigate();
    //const count = useSelector((state) => state.startingvalue.cpc );
    const fetchedText = useSelector((state) => state.startingvalue.fetchedText )
    const userText = useSelector((state) => state.startingvalue.userText )
    const size = userText.length;
    let cpm=0,wpm=0,accuracy=0;
    
    function countCPM(){
      let cpm=0;
      for(let i=0; i<size; i++){
        if(fetchedText.charAt(i) === userText.charAt(i)) cpm++;
      }
      return cpm; 
    }

    function countAccuracy(){
        let accuracy = ((cpm*1.00)/size)*100.0;
        if(isNaN(accuracy)) return 0;
        return accuracy.toFixed(2);
    }

    function countWPM(){
      let i,wpm=0;
      let usertextString = '';
      let fetchedtextString = '';
      for(i=0; i<size; i++){
        if(fetchedText.charAt(i) !== ' '){
            usertextString = usertextString + userText.charAt(i);
            fetchedtextString = fetchedtextString + fetchedText.charAt(i);
        }
        else{
          if(usertextString === fetchedtextString) wpm++;
          usertextString = '';
          fetchedtextString = '';
        }
      }
        if(usertextString===fetchedtextString && usertextString!=='') wpm++;
        return wpm;
    }

    const calculateResult = () =>{
        cpm = countCPM();
        accuracy = countAccuracy();
        wpm = countWPM();
        // window.location.reload('./StartTestButton.js')
    }

    function handlePracticeAgain(){
      window.location.reload();
    }
    
  return (
    <>
        {calculateResult()}
        <Card style={{ width: '25rem', backgroundColor:'#301934', color:'Gainsboro'}}>
          <Card.Body >
            <Card.Title><h1><b>Result</b></h1></Card.Title>
            <Card.Text> <h3><b> WPM: {wpm} </b></h3></Card.Text>
            <Card.Text> <h3><b> CPM: {cpm} </b></h3></Card.Text>
            <Card.Text> <h3><b> Accuracy: {accuracy}% </b></h3></Card.Text>
          </Card.Body>
          <Card.Body>
            <Button onClick={handlePracticeAgain} style={{ backgroundColor:'black', color:'LightBlue', margin:'5px', padding:'10px', border:'2px solid yellow', boxShadow: '2px 2px black'}}><h5><b>Practice Again</b></h5></Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default ShowResult;
