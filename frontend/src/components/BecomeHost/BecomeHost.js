import { useState } from 'react';
import Apply from './Apply';
import './BecomeHost.css';

function BecomeHost () {
    const [apply, setApply] = useState(false);

    return (
        <div id='become-host-main'>
            <div id='host-left'>
                {
                    apply ?
                    <Apply apply={apply} setApply={setApply}/> :
                    <>
                        <h1>Hosting</h1>
                        <h1>makes Airbnb,</h1>
                        <h1>Deluxe</h1>
                        <button id='apply-button' onClick={() => setApply(!apply)}>Apply</button>
                    </>
                }
            </div>
            <div id='video-right'>

            </div>
        </div>
    );
}

export default BecomeHost;
