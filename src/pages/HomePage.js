import StartingPageContent from '../components/StartingPage/StartingPageContent';
import {Link} from 'react-router-dom'
const HomePage = () => {
  return <Link to={'/'}><StartingPageContent /></Link> ;
};

export default HomePage;
