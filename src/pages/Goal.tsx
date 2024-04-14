import Typography from '@mui/material/Typography';
import {Paper} from '@mui/material';
import {goal} from '../assets/constants';

function GoalsPage() {
  return (
    <Paper>
      <Typography
        color={'secondary.dark'}
        bgcolor={'primary.light'}
        padding='25px'
        marginBottom='10px'
      >
        {goal}
      </Typography>
    </Paper>
  );
}

export default GoalsPage;
