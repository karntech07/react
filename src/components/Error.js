import {useRouteError} from 'react-router-dom';

export const Error = () => {
    const errObj = useRouteError();
    console.log(errObj);
    return (
        <div className="error">
            <h2>Oops! Error occurred</h2>
            <h4>{errObj.status} :  {errObj.data}</h4>
        </div>
    )
}