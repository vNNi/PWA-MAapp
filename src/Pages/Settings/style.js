export default {
    container:{
        height: '100vh',
        width: '100%',
        backgroundColor: 'black',
        display:'flex',
        flexDirection: 'column',
    },
    ctnHeader:{
        textAlign: 'center',
        color: 'white',
        marginBottom: '2em',
    },
    title:{
        fontFamily: 'Roboto, sans-serif',
    },
    subtitle:{
        fontFamily: 'Muli, sans-serif',
        maxWidth: '70%',
        fontSize: '16px',
    },
    collapseContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '30px',
        justifyContent: 'left',
        padding: '0 10%',
        transition: 'opacity .5s linear',
        paddingTop: '2em',
    },
    collapseText:{
        color: 'white',
        fontFamily: 'Muli, sans-serif',
        fontSize: '22px',
        fontWeight: 'bold',
        paddingRight: '1em',
        whiteSpace: 'nowrap',
    },
    collapseImg: clicked =>({
        transform: clicked?'rotate(180deg)':'rotate(0)',
    }),
    contact:clicked=>({
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        fontWeight: 'normal',
        margin: '0 10%',
    }),
    ul:{
        margin: 0,
    },
    li:{
        paddingTop: '0.7em',
    },
    link:{
        color: 'white',
        textDecoration: 'underline',
    },
}