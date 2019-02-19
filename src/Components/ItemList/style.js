import Colors from "../../Colors";
export default {
    container: (props) => ({
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderLeft: props.code === 1 ? `5px solid ${Colors.primary}` : `5px solid black`,
        marginBottom: '1em',
    }),
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 6%',
    },
    leftInformation: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '70%',
        borderRight: '1px solid black',
        margin: '10px 0',
        fontFamily: 'Roboto, sans-serif',
    },
    rightInformation: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '20%',
        margin: '15px 0',
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        justifyContent: 'center',
    },
    center: {
        textAlign: 'center',
    },
    name: {
        marginBottom: '12px',
        fontWeight: 'bold',
    },
    address: {
        marginRight: '10px',
        fontSize: '14px',
    },
}
