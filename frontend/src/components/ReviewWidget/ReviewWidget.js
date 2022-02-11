import './ReviewWidget.css';

function ReviewWidget ({ review }) {
    return (
        <>
            <p>You said:</p>
            <p>{ review.review }</p>
            <p>On:</p>
            <p>{ review.createdAt }</p>
        </>
    );
}

export default ReviewWidget;
