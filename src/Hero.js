import React, { useState } from 'react';
import JobOffersBro from './images/Job-offers-bro.svg'; // Import your SVG file
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export function DisableElevation() {
    return (
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    );
  }

export function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}

export function HelperTextAligned() {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
        />
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
        />
      </Box>
    );
  }

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    height: 400,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

const DemoPaper2 = styled(Paper)(({ theme }) => ({
    width: 785,
    height: 400,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'right',
  }));  

const BasicCard = ({ job }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      &bull;
    </Box>
  );

  return (
    <Card sx={{ minWidth: 275, marginBottom: '1rem', flex: '1 0 calc(33.33% - 0.5rem)', marginRight: '0.5rem', marginBottom: '0.5rem' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.company}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const Hero = () => {
    const [showContent, setShowContent] = useState(false);
  
    // const handleButtonClick = () => {
    //   setShowContent(true);
    // };
  
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleButtonClick = () => {
        setShowContent(true);
        const lowercaseSearchTerm = searchTerm.toLowerCase();

        let jobsToShow = [];
        if (lowercaseSearchTerm.includes('software')) {
        jobsToShow = jobs;
        } else if (lowercaseSearchTerm.includes('data')) {
        jobsToShow = jobs2;
        } else if (lowercaseSearchTerm.includes('management')) {
        jobsToShow = jobs3;
        }

        setJobsToShow(jobsToShow);
    };
  
  const [jobsToShow, setJobsToShow] = useState([]);
   
    return (
      <section style={styles.hero}>
        <DemoPaper2 square={false}>
            <br/> <br/> <br/>
        <div style={styles.content}>
          <Typography variant="h4" gutterBottom>
          JobQuest: Your Gateway to Career Opportunities
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
          Discover endless career possibilities on JobQuest, your ultimate job search companion. Explore over 18,000 job listings across diverse fields. Effortlessly find, filter, and apply for your dream job in just a few clicks. Join us and elevate your job search experience today!
        </Typography>
        < br/>
          <div style={styles.searchContainer}>
          <TextField
                id="demo-helper-text-misaligned"
                label="Job Description"
                sx={{ width: '600px', marginRight: '1rem' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />

        <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleButtonClick}
            sx={{
            height: '56px',
            backgroundColor: 'rgb(146, 227, 169)', // Change button color
            '&:hover': {
            backgroundColor: 'rgb(126, 207, 149)', // Adjust hover color if needed
            },
        }}
            disableElevation
        >
        Search
        </Button>
          </div>
          </div>
        </DemoPaper2>
        
        <DemoPaper square={false}>
        <div style={styles.imageContainer}>
          <img src={JobOffersBro} alt="Job Offers" style={styles.image} />
        </div>
        </DemoPaper>
        {showContent && (
          <div style={styles.cardContainer}>
            {jobsToShow.map((job, index) => (
                <BasicCard key={index} job={job} />

            ))}
          </div>
        )}
      </section>
    );
};

const styles = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '2rem',
    backgroundColor: '#f4f4f4',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '0.5rem',
    padding: '1rem 0',
  },
  content: {
    flex: '2',
    marginRight: '2rem',
    textAlign: 'left',
  },
  imageContainer: {
    flex: '1',
    minWidth: '200px', // Adjust width if necessary
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchBar: {
    padding: '0.5rem',
    marginRight: '1rem',
    width: '300px',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1rem',
    margin: '1rem',
    minWidth: '250px',
    maxWidth: '300px',
    textAlign: 'center',
  },
};

export default Hero;
