import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: '0 auto',
  },

  sectionTitle: {
    margin: '7% 0 2% 0',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      margin: '5% 0 2% 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '3% 0 2% 0',
    },
  },
}));
 export default useStyles;