const card = props => {
    const styles = {
        // styles for cards
        border: '1px solid #ccc',
        borderRadius: '12px',
        width: '200px',
        height: '300px',
        margin: '10px',
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #76ffff 10%,#f9f999 100%)'
    }
    return(
        <div className="card" style={styles}>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>            
        </div>
    );
}
export default card;