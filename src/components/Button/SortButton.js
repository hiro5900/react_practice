import React from 'react';

import classes from './SortButton.module.css';

const Button = (props) => {
     console.log('Sort Button RUNNING');
     return (
          <>
               <button
                    type={props.type || 'button'}
                    className={`${classes.button} ${props.className}`}
                    onClick={props.onSort}
                    disabled={props.disabled}
               >
                    {props.children}
               </button>
          </>
     );
};

export default React.memo(Button);