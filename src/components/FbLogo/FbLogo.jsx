import style from './FbLogo.module.css';
import logo from '../../assets/FbLogo.svg';

export function FbLogo() {
    return (
        <div className={style.bp}>
            <img src={logo} alt="Facebook" className={style.fb_Logo} />
        </div>
    );
}
