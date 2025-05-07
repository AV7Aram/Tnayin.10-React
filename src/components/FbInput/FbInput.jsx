import style from './FbInput.module.css';

export function FbInput(props) {
    const {
        name,
        type,
        placeholder,
        value,
        onChange,
        onBlur,
        hasError = false,
        errorMessage,
    } = props;

    return (
        <div className={`${style.formInput} ${hasError ? style.error : ""}`}>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={hasError ? style.inputError : ""}
            />
            {hasError && <span>{errorMessage}</span>}
        </div>
    );
}
