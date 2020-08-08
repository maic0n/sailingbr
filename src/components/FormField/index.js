import React from "react";

    function FormField({ label, type, name, valor, onChange }) {
        return (
            <div>
                <label>
                    {label}:
                <input
                    type={type}
                    value={valor}
                    name={name}
                    onChange= {onChange}
                    />
                </label>
            </div>
        )
    }

export default FormField;