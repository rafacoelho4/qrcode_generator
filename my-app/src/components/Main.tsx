import React, { useState } from 'react';
import logo from './logo.svg';
import './Main.css';
// import { useQRCodeData } from '../hooks/qrcodedata';

import api from '../services/api';

function Main() {

    const [ web_url, setWebURL ] = useState(''); 
    const [ remember, setRemember ] = useState(false); 
    const [ response, setResponse ] = useState('');

    function handleRemember(e: any) {
        e.preventDefault();
        setRemember(e.target.value);
    }

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
                setRemember(false);
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
                    {/* <div className="input-block lembrar-senha">
                        <div className="checkbox-container" >
                            <input 
                                type="checkbox" 
                                name="checkbox-lembrar"
                                id="checkbox"
                                className="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                />
                            <label htmlFor="checkbox" >Salvar no histórico</label>
                        </div>
                    </div> */}
                </fieldset>

                <button className="confirm-button" type="submit" onClick={e => handleSubmit(e)}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Main; 