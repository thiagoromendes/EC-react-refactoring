import React from 'react';
import {useSelectForm} from '../hooks/SelectForm';
import {UnrefactoredForm} from '../components/UnrefactoredForm';
import {ContentRecord} from '../components/ContentRecord';

export function Portal(){
    
    const {selectForm} = useSelectForm();

    return(
        <>
            {selectForm === 'content' && 
                <ContentRecord />
            }
            {selectForm === 'unrefactored' &&
                <UnrefactoredForm />
            }         
        </>
    )
}