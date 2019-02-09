import colors from '../../Colors';
export default {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    checkinBox: {
        width: '12px',
        height: '14px',
        backgroundColor: colors.primary,
        marginRight: '0.5em',
    },
    content: {
        display: 'flex',
        flexBasis: '50%',
        alignItems: 'center',
        fontWeight: 'Bold',
        fontFamily: 'Roboto, sans-serif',
    },
    checkoutBox: {
        width: '12px',
        height: '14px',
        backgroundColor: 'black',
        marginRight: '0.5em',
    },
}