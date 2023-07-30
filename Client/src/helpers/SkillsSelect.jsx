import React from 'react'
import { ErrorMessage, useField } from 'formik';
import Select from 'react-select';


const SkillsSelect = ({ options, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const value = options.find((option) => option.value === field.value);
    const handleChange = (selectedOption) => {
        
        const sklsIds = []
        selectedOption.map(op => {
            sklsIds.push(op.id)
        })
        
        helpers.setValue(sklsIds);
    };

    return (
        <>
            <Select
                isMulti
                name="skillsIds"
                options={options}
                {...field}
                {...props}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                value={value}
                closeMenuOnSelect={false}
                onChange={handleChange}
            />

            {/* {meta.touched && meta.error ? */}
                <ErrorMessage
                    name="skillsIds"
                    className="text-danger"
                    component="div"
                /> 
                {/* : null} */}
        </>
    );
};


export default SkillsSelect;