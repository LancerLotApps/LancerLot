import Typography from '@mui/material/Typography';
import {Paper} from '@mui/material';
import {termsAndPrivacy} from '../assets/constants';

function Terms() {
  return (
    <Paper>
      <Typography
        variant='h5'
        color={'secondary.dark'}
        bgcolor={'primary.light'}
        padding='25px 25px 0'
      >
        Terms & Privacy Policy
      </Typography>
      <Typography
        color={'secondary.dark'}
        bgcolor={'primary.light'}
        padding='0 25px 25px'
        marginBottom='10px'
        whiteSpace='pre-line'
      >
        {termsAndPrivacy}
      </Typography>
    </Paper>
  );
}

export default Terms;
