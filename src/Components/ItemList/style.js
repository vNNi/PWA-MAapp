export default {
    container: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderLeft: '5px solid black',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 10%',
    },
    leftInformation: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '65%',
        borderRight: '1px solid black',
        margin: '10px 0',
        fontFamily: 'Roboto, sans-serif',
    },
    rightInformation: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '30%',
        margin: '15px 0',
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
    },
    center: {
        textAlign: 'center',
    },
    name: {
        marginBottom: '12px',
        fontWeight: 'bold',
    }
}
