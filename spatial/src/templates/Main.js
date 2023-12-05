import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import About from './About';
import NavTabs from './NavTabs';
import Footer from './Footer';
import People from './People';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main(props) {
  const [currentPage, setCurrentPage] = useState('About');
  
    // depending on what value currentPage has, render a different page
  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }

    if (currentPage === 'Research') {
      return <About />;
    }

    if (currentPage === 'Groups') {
      return <About />;
    }

    if (currentPage === 'People') {
      return <People />;
    }

    if (currentPage === 'History') {
      return <About />;
    }

  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  const sections = [
      { title: 'About', url: '#', value: 'one' },
      { title: 'People', url: '#', value: 'two' },
      { title: 'Research', url: '#', value: 'three' },
      { title: 'History', url: '#', value: 'four' },
      { title: 'Recharge Center', url: '#', value: 'five' },
  ]
  return (
  
    <Container>
      <Header title={"Center for Spatial Studies and Data Science"} />
      <NavTabs sections = {sections} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />

    </Container>

      
      

  );
}

// Main.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.string).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Main;