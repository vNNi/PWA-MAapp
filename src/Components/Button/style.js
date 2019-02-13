import Colors from '../../Colors';
export default {
    button: props => ({
        border: '0',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: props.backgroundColor || Colors.primary,
        fontWeight: 'bold',
        padding: '10px 30px',
        borderRadius: '4px',
        color: props.color || 'white',

    }),
}