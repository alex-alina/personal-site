import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    margin: '1% auto',
  },

  name: {
    marginTop: '7%',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '2%',
    },
  },

  title: {
    marginTop: '0.25%',
    fontSize: 'calc(0.85rem + 0.25vw)',
    fontWeight: '300',
  },

  iconsWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '1%',
  },

  profileLink: {
    textDecoration: 'none',
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '40px',
    height: '40px',
    marginRight: '10px',
    padding: 0,
    borderRadius: '50%',
    backgroundColor: '#0098a6',
    '&:hover': {
      backgroundColor: '#14a3ab',
    }
  },

  img: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    verticalAlign: 'center',
  },

  cvLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default useStyles;
