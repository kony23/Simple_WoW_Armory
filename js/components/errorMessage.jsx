import React from 'react';

export default class ErrorMessage extends React.Component{
    render(){
        return(
                    <div className="error">
                        <p>Something went wrong, please try again with different data.</p>
                    </div>
        );
    }
}
