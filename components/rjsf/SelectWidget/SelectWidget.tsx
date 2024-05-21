import {
    ariaDescribedByIds,
    enumOptionsIndexForValue,
    enumOptionsValueForIndex,
    FormContextType,
    RJSFSchema,
    StrictRJSFSchema,
    WidgetProps,
} from "@rjsf/utils"
import {ChangeEvent, FocusEvent} from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {FancyMultiSelect} from "@/components/ui/fancy-multi-select";

export default function SelectWidget<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>({
      schema,
      id,
      options,
      required,
      disabled,
      readonly,
      value,
      multiple,
      autofocus,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      rawErrors = [],
  }: WidgetProps<T, S, F>) {
    const {enumOptions, enumDisabled, emptyValue: optEmptyValue} = options

    const emptyValue = multiple ? [] : ""

    function getValue(event: FocusEvent | ChangeEvent | any, multiple?: boolean) {
        if (multiple) {
            return [].slice
                .call(event.target.options as any)
                .filter((o: any) => o.selected)
                .map((o: any) => o.value)
        } else {
            return event.target.value
        }
    }

    const selectedIndexes = enumOptionsIndexForValue<S>(
        value,
        enumOptions,
        multiple,
    )
    console.log(multiple);

    return ( !multiple ?
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {(enumOptions as any).map(({value, label}: any, i: number) => {
                        const disabled: any =
                            Array.isArray(enumDisabled) &&
                            (enumDisabled as any).indexOf(value) != -1
                        return (
                            <SelectItem
                                key={i}
                                id={label}
                                value={value}
                                disabled={disabled}
                            >
                                {label}
                            </SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select> : <FancyMultiSelect multiple items={enumOptions} selected={value}></FancyMultiSelect>
    );
}
