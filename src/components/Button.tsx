// Initial description of the datatypes of all props used in this component.
interface ButtonProps{
    label : string,
    action : any
}

// Exporting the function, so it can be imported into App.tsx
// Props are called, specifying those from ButtonProps
export default function Button(props : ButtonProps){

    return(
        <>
            {/* Button element, its text and action determined by props */}
            <button onClick={props.action}>{props.label}</button>
        </>
    )
}