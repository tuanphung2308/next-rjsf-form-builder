import React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

const UiField: React.FC<{
    schema?: any;
    idSchema: { $id: string };
    formData?: any;
    onChange: (...args: any[]) => void;
    [key: string]: any;
}> = ({idSchema: {$id}, formData, onChange}) => {
    const changeHandlerFactory = (fieldName: string) => (event: any) => {
        onChange(formData ? {...formData, [fieldName]: event.target.value} : {[fieldName]: event.target.value});
    };
    return (
        <div className="flex flex-col gap-2">
            <h4>Location</h4>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor={`${$id}-city`}>City</Label>
                        <Input
                            className='form-control'
                            id={`${$id}-city`}
                            required={false}
                            placeholder=''
                            type='text'
                            value={formData?.city || ''}
                            onChange={changeHandlerFactory('city')}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor={`${$id}-lat`}>Latitude</Label>
                        <Input className='form-control'
                               id={`${$id}-lat`}
                               type='number'
                               value={formData?.lat || 0}
                               onChange={changeHandlerFactory('lat')}/>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor={`${$id}-lon`}>Longitude</Label>
                        <Input className='form-control'
                               id={`${$id}-lon`}
                               type='number'
                               value={formData?.lon || 0}
                               onChange={changeHandlerFactory('lon')}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default {
    schema: {
        title: 'Location',
        type: 'object',
        anyOf: [
            {
                title: 'City',
                properties: {
                    city: {
                        type: 'string',
                    },
                },
                required: ['city'],
            },
            {
                title: 'Coordinates',
                properties: {
                    lat: {
                        type: 'number',
                    },
                    lon: {
                        type: 'number',
                    },
                },
                required: ['lat', 'lon'],
            },
        ],
    },
    uiSchema: {
        'ui:field': UiField,
    },
    formData: {},
};
