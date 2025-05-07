import { FbInfo } from "../FbInfo/FbInfo";
import { FbLogo } from "../FbLogo/FbLogo";
import style from './FbContent.module.css';

export function FbContent() {
    return (
        <div className={style.fb_content}>
            <FbLogo />
            <FbInfo />
        </div>
    );
}
