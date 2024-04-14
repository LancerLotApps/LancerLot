import Typography from '@mui/material/Typography';
import {Paper} from '@mui/material';
import {suggestion, suggestionURL} from '../assets/constants';

function IdeaPage() {
  return (
    <>
      <Paper>
        <Typography
          color={'secondary.dark'}
          bgcolor={'primary.light'}
          padding='25px'
          marginBottom='10px'
        >
          {suggestion}
        </Typography>
      </Paper>
      <iframe title="suggestion" width='100%' height='1079'
        src={suggestionURL}
      />
    </>
  );
}

export default IdeaPage;