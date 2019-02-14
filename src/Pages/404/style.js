import Colors from "../../Colors";
export default {
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    img: {
        maxWidth: '60%',
    },
    textError: {
        color: 'black',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '22px',
        margin: '2em 5% 0 5%',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    link: {
        color: Colors.primary,
        textDecoration: 'none',
        fontFamily: 'Roboto, serif',
        fontSize: '16px',
        marginTop: '1em',
    }
}