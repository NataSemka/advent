import React from 'react';
import './App.css';
import {Container, Box, Typography, Dialog, Link} from '@mui/material';
import moment from 'moment';
import {backendData} from './data';
import * as styles from './styles';
import useMediaQuery from 'react-use-media-query-ts'

type Day = {
  id: string;
  text?: string;
  url?: string;
  img: string;
};

function App() {
  const mobile = useMediaQuery('(min-width: 320px)');
  const laptop = useMediaQuery('(min-width:1025px)');
  console.log('mobile :>> ', mobile);
  console.log('laptop :>> ', laptop);
  const size = mobile ? '6em' : laptop ? '10em' : '6em';
  const [currentDayInfo, setCurrentDayInfo] = React.useState<Day | null>();
  const [open, setOpen] = React.useState(false);
  const isDisabled = (id: string) => {
    const dateToCheck = moment(`2024-12-${id}`);
    const today = moment().startOf('day');
    return dateToCheck.isAfter(today);
  }

  const handleOpen = (day: Day) => {
    if (isDisabled(day.id)) return;

    setOpen(true);
    setCurrentDayInfo(day);
    localStorage.setItem(`day${day.id}`, day.id);
  }
  const handleClose = () => setOpen(false);

  const isOpen = (id: string) => localStorage.getItem(`day${id}`);

  return (
    <Box sx={styles.bg(mobile, laptop)}>
      <Container sx={styles.container}>
        <Box sx={styles.items(laptop ? '970px' : '100%')}>
          {backendData.map((day, index) => 
            <Box className={`${isOpen(day.id) ? 'isOpen' : ''} ${isDisabled(day.id) ? 'disabled' : ''} item${day.id}`} key={day.id} sx={styles.item(size, index)} onClick={() => handleOpen(day)}>
              <Box sx={styles.itemNumber}>{day.id}</Box>
            </Box>
          )}
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='modal-content'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {currentDayInfo?.text}
            </Typography>
            <Link href={currentDayInfo?.url}>{currentDayInfo?.url}</Link>
          </div>
        </Dialog>
      </Container>
    </Box>
  );
}

export default App;