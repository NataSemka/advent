import React, { useEffect, useState } from 'react';
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
  const tablet = useMediaQuery('(min-width:700px');
  const laptop = useMediaQuery('(min-width:1025px)');

  const size = mobile ? '6em' : laptop ? '10em' : '6em';

  const [currentDayInfo, setCurrentDayInfo] = useState<Day | null>();
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    const dayItem = document.querySelector(`#day${currentDayInfo?.id}`);
    dayItem?.classList.remove('ready');
  }, [currentDayInfo?.id])

  return (
    <Box sx={styles.bg(tablet)}>
      <Container sx={styles.container(laptop)}>
        <Box sx={styles.items(laptop ? '970px' : '100%')}>
          {backendData.map((day, index) => 
            <Box id={`day${day.id}`} className={`${isOpen(day.id) ? 'isOpen' : ''} ${!isDisabled(day.id) && !isOpen(day.id) ? 'ready' : ''}`} key={day.id} sx={styles.item(size, index)} onClick={() => handleOpen(day)}>
              <Box sx={styles.itemNumber}>{index + 1}</Box>
            </Box>
          )}
        </Box>
        <Dialog
          open={open}
          sx={styles.dialog}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='modal-content'>
            <Typography id="modal-modal-title" variant="body1" component="p">
              {currentDayInfo?.text}
            </Typography>
            <Link href={currentDayInfo?.url}>Читати більше</Link>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}

export default App;