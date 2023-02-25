import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  logo: {
    paddingLeft: '4%',
    fontSize: 'calc(0.75rem + 0.5vw)',
    fontWeight: '300',
    color: '#fff',
  },

  menuButton: {
    color: '#fff',
  },

  navList: {
    listStyleType: 'none',
    width: '20%',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginRight: '4%',
  },

  navLink: {
    textDecoration: 'none',
    fontSize: 'calc(0.75rem + 0.5vw)',
    fontWeight: '300',
    color: '#fff',
    '&:hover': {
      fontWeight: '400',
    }
  },
}));

export default useStyles;