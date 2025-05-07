import { FbInput } from "../FbInput/FbInput";
import { FbData } from "../../FbData/FbData";
import style from "./FbFieldList.module.css";

export function FbFieldList({ values, handleChange, handleBlur, errors }) {
    return (
        <div className={style.fieldsContainer}>
            {FbData.map((input) => (
                <FbInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={errors?.[input.name]}
                    errorMessage={errors?.[input.name]}
                />
            ))}
        </div>
    );
}
