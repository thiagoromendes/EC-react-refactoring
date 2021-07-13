import {SelectFormProvider} from './SelectForm';

export function AppProvider({children}){
    return(
        <SelectFormProvider>
                {children}
        </SelectFormProvider>
    )
}