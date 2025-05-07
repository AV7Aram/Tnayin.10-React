import style from './FbInfo.module.css';
import { FbForm } from '../FbForm/FbForm';

export function FbInfo() {
    return (
        <div className={style.fb_Info}>
            <div className={style.fb_Container}>
                <div className={style.fb_Account}>
                    <div className={style.create}>Create a new account</div>
                    <div className={style.easy}>It’s quick and easy.</div>
                </div>
                <FbForm />
            </div>
        </div>
    );
}
