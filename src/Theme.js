import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#300c38'
    },
    secondary: {
       main: '#ff9900'
    }
  },
  typography: {
      fontFamily: [
          'Lato, sans-serif'
      ]
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: '#2b2d2f',
  }
});

export default theme;