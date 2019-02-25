import bd from '../../Images/login-bd2.png';
export default {
    imgBD: {
        backgroundImage: `url(${bd})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    registerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
    },
    registerContent: {
        width: '80%',
        background: 'rgba(0,0,0,0.2)',
        borderRadius: ' 10px',
        position: 'relative',
    },
    inputWrapper: {
        marginLeft: "10%",
        marginRight: "20%",
        display: "flex",
        justifyContent: "center",
        marginTop: '2.5em',
    },
    buttonWrapper: {
        margin: '1.5em 10%',
    },
    registerLink: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '14px',
        marginTop: '2em',
    },
    link:{
        textDecoration: 'none',
        color: 'white',
    }
}