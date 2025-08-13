const Modal = (props) => {
    return (
        <div>
            <div className="space-y-3">
                <p className="text-sm text-gray-600 mt-4">
                    {props.description}
                </p>
                <p className="text-lg">{props.line1}</p>
                <p className="text-lg">{props.line2}</p>
                <p className="text-lg">{props.line3}</p>
                <p className="text-lg">{props.line4}</p>
                {props.line5 && <p className="text-lg">{props.line5}</p>}
                {props.line6 && <div className="mt-4">{props.line6}</div>}
                <p className="text-sm text-gray-600 mt-4">
                    {props.additionalInfo}
                </p>
            </div>
        </div>
    )
}

export default Modal;