'use client';
import { userFormStatus } from 'react-dom';
export default function MealsFormSubmit() {
    const {pending}= useFormStatus();
    return (
        <button disabled={pending} type="submit">
            {pending ? 'Submitting...' : 'Share meal'} 
        </button>
    )

}