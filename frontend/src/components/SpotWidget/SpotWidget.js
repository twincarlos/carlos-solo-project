import './SpotWidget.css';

function SpotWidget ({ spot, image }) {
    return (
        <div className='spot-widget'>
            {spot.name}
        </div>
    );
}

export default SpotWidget;
