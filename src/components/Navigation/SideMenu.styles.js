import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: '#fff',
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'center',
  },

  navLink: {
    textDecoration: 'none',
    fontSize: 'calc(1rem + 0.5vw)',
    color: '#1c313a',
    fontWeight: '300',
  },
}));

export default useStyles;