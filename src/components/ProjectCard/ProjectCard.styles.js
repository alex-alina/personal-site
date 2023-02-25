import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: 'auto',
  },

  media: {
  maxWidth: '100%',
  display: 'block',
  height: 'calc(110px + 10vmax)',
   objectFit: 'fill',
   objectPosition: 'center',
  },
  
  projectLink: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

export default useStyles;