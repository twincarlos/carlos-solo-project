import './SpotWidget.css';

function SpotWidget ({ spot }) {
    return (
        <div className='spot-widget'>
            <img src={spot.image} alt=''/>
            <span>
                <h3>{spot.name}</h3>
                <p>{spot.price} / night</p>
            </span>
        </div>
    );
}

export default SpotWidget;
