import bd from '../../Images/login-bd2.png';
export default {
    imgBD: {
        backgroundImage: `url(${bd})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    loginWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
    },
    loginContent: {
        width: '70%',
        height: '60%',
        background: 'rgba(0,0,0,0.2)',
        borderRadius: ' 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        textAlign: "center",
        width: "70%",
        color: "white",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0 auto",
        paddingTop: '2em',
    },
    inputWrapper: {
        margin: "0 15%",
        display: "flex",
        justifyContent: "center",
        marginTop: '2.5em',
    },
    buttonWrapper: {
        position: 'absolute',
        top: '95%',
    },
    registerLink: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '14px',
        marginTop: '2em',
    },

}