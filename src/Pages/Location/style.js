import bd from '../../Images/GMaps.png';
export default {
    imgBd: {
        backgroundImage: `url(${bd})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    },

    buttonWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 5%',
        paddingTop: '15vh',
        maxWidth: '400px',
    },
    locationTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        fontWeight: 'medium',
        color: 'white',
        paddingTop: '9rem',
    }
}