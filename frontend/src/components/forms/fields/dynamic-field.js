import React, { useState } from 'react';
import { EmailInput } from './email';
import { Select } from './select';
import { TextArea } from './textarea';
import { Toggle } from './toggle';
import { RadioGroupCard } from './radio-group';
import { LinkInput } from './link';
import { CCombobox } from './combobox';
import { Input } from './input';
import { PriceInput } from './price';
import { Checkboxes } from './checkboxes';
import { CardInput } from './card';
import { PhoneInput } from './phone';
import UploadInput from './upload';
import DateInput from './date';
import AddressInput from './address';
import { useFormStore } from '../../util/customHooks';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export const DynamicField = React.memo(({
    errors = [],
    fieldSchema = { name: "default", type: "tel", placeholder: "default", required: true, cols: 3 },
    ...props
}) => {
    const { name, value, type, component, icon, placeholder, required, options, max, allow, cols, validationType } = fieldSchema;
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
    // onInput={setFormInput} value={input}
    return (
        <div className={`sm:col-span-${cols} col-span-6`} key={`${name + Math.random()} form-field`}>
            {/* {JSON.stringify(InputComponent,null,2)} */}
            <InputComponent error={errors.length > 0} {...fieldSchema} key={`${name + Math.random()} form-field`} />
            {errors.length > 0 && (
                <span className="w-full bg-red-200 rounded-b-md p-1 text-red-500 flex gap-3">
                    <ExclamationCircleIcon className="w-6 h-6 fill-BEred" />
                    {/* {errors.map(err=>(err))} */}
                    {JSON.stringify(errors, null, 2)}
                </span>
            )}
        </div>
    )
}, (prev, next) => prev.errors !== next.errors || prev.type !== next.type)

export default DynamicField;