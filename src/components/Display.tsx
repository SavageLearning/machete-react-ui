import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import classes from '*.module.css';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';


const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex'
    },
    faceBookButton: {
        backgroundColor: "#0A81D1",
        marginRight: "20px",
        color: "white"
    },
    googleButton:{
        backgroundColor: "#CE4257",
        color: "white"
    },
    form: {
        margin : theme.spacing(1),
        width: '25ch',
    },
    marginTop: {
        marginTop: "50px"
    },
    loginButton:{
        backgroundColor: "#3E78B2",
        color: "white"
    }
    }))

// const theme = createMuiTheme({
//         palette: {
//           primary: {
//             light: '#757ce8',
//             main: '#3f50b5',
//             dark: '#333333',
//             contrastText: '#fff',
//           },
//           secondary: {
//             light: '#ff7961',
//             main: '#f44336',
//             dark: '#ba000d',
//             contrastText: '#000',
//           },
//         },
//       });

    
    interface IProps{

    }
    interface IState{
        app_id?: string ,
        client_id? : string,
        redirect_uri? : string,
        oauthState: string
    }
    

class Login extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        let queryString = document.location.href.split('?')[1];

        // if (!queryString) {
        //     this.handleError({response: 'not sent'});
        //     return;
        // }
    
        // let dictionary = this.props.dictionaryBuilder(queryString);

        // this.state={
        //     app_id: dictionary['app_id'],
        //     client_id: dictionary['client_id'],
        //     redirect_uri: window.location.protocol + '//' + window.location.host + '/id/signin-',
        //     oauthState: dictionary['state']
        // }
    }
}


export function Display(){
    
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    return(
        <div>
            <Container maxWidth="lg" className={classes.marginTop}>
                <Typography component="h1" variant="h4" color="inherit" className={classes.root}>
                    {'Workers Request'}
                </Typography> <br/>
                <Typography component="h1" variant="h5" color="inherit" className={classes.root}>
                    {'Please Login'}
                </Typography> <br/>
                <hr/>
            </Container> <br/>
            <Container maxWidth="lg">
                <Grid item lg={12} container>
                    <Grid item xs={6}>
                        <Typography component="h1" variant="body1">
                            { "If you are a new employer, please use one of the following web services to authenticate. If you have a legacy email and password account, you may also use it to authenticate. We are migrating to web services for authenticate because of the increased We are migrating to web services for authenticate because of the increased. "}
                        </Typography>
                        <Grid item xs={11}>
                        <Card>
                                <CardHeader
                                title = "Web Services"
                                />
                                <Typography variant="h6">{"Sign in with:"}</Typography>
                                <CardContent>
                                        <Button variant="contained" className={classes.faceBookButton} color=
                                        "primary"><i className="fa fa-facebook"></i>
                                        </Button>
                                        <Button variant="contained" className={classes.googleButton} color="secondary" ><i className="fa fa-google" aria-hidden="true"></i></Button>
                                </CardContent>
                        </Card>  
                        </Grid> 
                    </Grid>
                    <Grid item xs={6} >
                        <Card>
                        <CardHeader
                        title = "Legacy account "
                        />
                            <CardContent>
                                <form>
                                <TextField
                                id="outlined-name"
                                label="Username"
                                variant="outlined"
                                className={classes.form}
                                /><br/>
                                <TextField
                                id="outlined-name"
                                label="Password"
                                type="Password"
                                variant="outlined"
                                className={classes.form}
                                /><br/>
                                <FormControlLabel
                                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                label="Remember My Login"
                                /> <br/>
                                <Button variant="contained" className={classes.loginButton}>Login</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
    }