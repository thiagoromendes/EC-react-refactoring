import React from 'react';
import {useSelectForm} from '../hooks/SelectForm';
import {UnrefactoredForm} from '../components/UnrefactoredForm';
import {RefactoredForm} from '../components/RefactoredForm';

export function Form(){
    
    const {selectForm} = useSelectForm();

    return(
        <>
            {selectForm === 'unrefactored' &&
                <UnrefactoredForm />
            }
            {selectForm === 'refactored' &&
                <RefactoredForm />
            }           
        </>
    )
}