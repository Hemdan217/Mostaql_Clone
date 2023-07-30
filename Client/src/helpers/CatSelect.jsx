import React from 'react'
import { ErrorMessage, useField } from 'formik';
import Select from 'react-select';


const CatsSelect = ({ options, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const value = options.find((option) => option.value === field.value);
    const handleChange = (selectedOption) => {
        
        helpers.setValue(selectedOption.id);
    };

    return (
        <>
            <Select

                name="categoryId"
                options={options}
                {...field}
                {...props}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                value={value}

                onChange={handleChange}
            />

            {meta.touched && meta.error ?
                <ErrorMessage
                    name="categoryId"
                    className="text-danger"
                    component="div"
                /> : null}
        </>
    );
};


export default CatsSelect;