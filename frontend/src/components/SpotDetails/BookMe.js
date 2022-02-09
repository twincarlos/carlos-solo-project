function BookMe ({ spot }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <span id='price-rating'>
                <h2>{spot.price}</h2>
                <h2>{spot.rating}</h2>
            </span>
            <form onSubmit={handleSubmit}>
                <span id='upper-form'>
                    <label id='check-in'>
                        Check-in
                        <input type='date'></input>
                    </label>
                    <label id='check-out'>
                        Check-out
                        <input type='date'></input>
                    </label>
                </span>
                <input id='lower-form' type='number' placeholder='1 guest'></input>
                <button id='book-button'>Book</button>
            </form>
            <h3 id='your-total'>Your total is: $total</h3>
        </>
    );
}

export default BookMe;
