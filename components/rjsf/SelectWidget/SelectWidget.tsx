import {FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps,} from "@rjsf/utils"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
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

  return (!multiple ?
      <Select value={value?.toString()} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {(enumOptions as any).map(({value: _value, label}: any, i: number) => {
              const disabled: any =
                Array.isArray(enumDisabled) &&
                (enumDisabled as any).indexOf(_value) != -1
              return (
                <SelectItem
                  key={i}
                  id={label}
                  value={_value.toString()}
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
