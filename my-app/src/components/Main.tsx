import React, { useState } from 'react';
import './Main.css';

import api from '../services/api';

function Main() {

    const [ web_url, setWebURL ] = useState(''); 
    const [ response, setResponse ] = useState('');

    function handleLink(e: any) {
        e.preventDefault();
        setWebURL(e.target.value);
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            await api.post('/qrcode', web_url).then(async res => {
                console.log("OK")
                console.log(res);

                setWebURL("");
                setResponse(res.data.slice(0, -1));

                console.log(res.data.slice(0, -1))
            });
        } catch (error) {
            console.log("Error")
            console.log(error);
        }
    }

    return (
        <div id='main-page'>
            <aside>
                {
                    response ? 
                    <div>
                        <img src={response} alt="qrtag" />
                        {/* <p>{response}</p> */}
                    </div> :
                    <div>
                        
                    </div>
                }
            </aside>

            <form className="form">
                <fieldset>
                    <legend>Generate QR Code</legend>
                    <div className="input-block">
                        <label htmlFor="email">Web URL 
                        </label>
                        <input 
                            id="email"
                            type="email"
                            placeholder='https://www.google.com.br'
                            value={web_url}
                            onChange={handleLink}
                            />
                    </div>
                </fieldset>

                <button className="confirm-button" type="submit" onClick={e => handleSubmit(e)}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Main; 