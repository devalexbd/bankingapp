// Initial description of the datatypes of all props used in this component.
interface BankProps{
    balance : number;
    action : any
}

// Exporting the function, so it can be imported into App.tsx
// Props are called, specifying those from BankProps
export default function Bank(props : BankProps){

    return (
        <>
            {/* The displayed balance uses props to show number */}
            <h4>£{props.balance}</h4>
            {/* onChange uses a function from App.tsx to detect the state */}
            {/* of the input element and store it as a variable */}
            <input type="text" onChange={props.action} />
        </>
    )
}