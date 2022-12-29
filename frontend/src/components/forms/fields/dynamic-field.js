import React, { useEffect, useState, useMemo } from 'react'
import { EmailInput } from './email'
import { Select } from './select'
import { TextArea } from './textarea'
import { Toggle } from './toggle'
import { RadioGroupCard } from './radio-group'
import { LinkInput } from './link'
import { CCombobox } from './combobox'
import { Input } from './input'
import { PriceInput } from './price'
import { Checkboxes } from './checkboxes'
import { CardInput } from './card'
import { PhoneInput } from './phone'
import UploadInput from './upload'
import DateInput from './date'
import AddressInput from './address'
import { useFormStore } from '../../util/customHooks'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

//prettier-ignore
export const DynamicField = ({
    errors = [],
    onChange=()=>{},
    value="default",
    fieldSchema = { name: "default", type: "tel", placeholder: "default", required: true, cols: 3 },
    ...props
}) => {
    const { name, type, component, icon, placeholder, required, options, max, allow, cols, validationType } = fieldSchema;

    
    //validation and input tracking in store.js 
    const components = {
        select: Select,
        multiselect: CCombobox,
        text: Input,
        radiogroup: RadioGroupCard,
        price: PriceInput,
        card: PriceInput,
        textarea: TextArea,
        number: Input,
        tel: PhoneInput,
        email: EmailInput,
        upload: UploadInput,
        date: DateInput,
        address: AddressInput,
    }
    const InputComponent = components[type] || (({name})=>{return(<p>broken schema for {name}'s {type} component</p>)});
    
    // onChange={setFormInput} value={input}
    return (
        <div className={`sm:col-span-${cols} col-span-6 relative`} key={`field-${name} form-field`}>
            {/* {JSON.stringify(InputComponent,null,2)} */}
                <InputComponent error={errors.length > 0} onChange={onChange} value={value} {...fieldSchema}  />
            {errors.length > 0 && (
                <span className="rounded-md text-red-500 flex gap-3 absolute right-0 -top-[.15rem] items-center">
                    {/* <ExclamationCircleIcon className="w-4 h-4 fill-BEred" /> */}
                    {/* {errors.map(err=>(err))} */}
                    {errors}
                </span>
            )}
        </div>
    )
}

export default DynamicField
