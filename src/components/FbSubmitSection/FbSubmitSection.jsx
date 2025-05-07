import style from './FbSubmitSection.module.css';

export function FbSubmitSection() {
    return (
        <>
            <div className={style.submit}>
                <button type="submit">Sign Up</button>
            </div>
            <div className={style.already}>
                <a href="#">Already have an account?</a>
            </div>
        </>
    );
}
