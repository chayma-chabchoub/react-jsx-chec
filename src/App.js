
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';
const firstName ='Parfum'
function App() {
  return (
    <div>
      {/* this is a card */}
    <Card style={{ width: '18rem' }}>
    <Image />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted" ><Description/></Card.Subtitle>
        <Card.Text>
        <Price/>
        </Card.Text>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    {/* Display a message below the card  */}
    
        {firstName ? (
      <div className='condition'>
        <p style={{color:'white'}}>Hello {firstName}!</p>
        <img src="./parfum.jpg" alt="women-parfum" style={{borderRadius:'10px',}} />
        </div>
    ):
    (
      <p> Hello,There!</p>
    )
    }
    
 </div>
 
 );
}
export default App;
