import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {
  ariaDescribedByIds,
  enumOptionsValueForIndex,
  FormContextType,
  optionId,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils"
import {ChangeEvent, FocusEvent} from "react"
import {Label} from "@/components/ui/label";

export default function RadioWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    onChange,
    onBlur,
    onFocus,
  }: WidgetProps<T, S, F>) {
  const {enumOptions, enumDisabled, emptyValue} = options

  const _onChange = (value: string) =>
    onChange(enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))
  const _onBlur = ({target: {value}}: FocusEvent<HTMLInputElement>) =>
    onBlur(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))
  const _onFocus = ({target: {value}}: FocusEvent<HTMLInputElement>) =>
    onFocus(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))

  const inline = Boolean(options && options.inline)

  return (
    <div className="mb-0">
      <RadioGroup defaultValue={value?.toString()} onValueChange={(e: string) => {
        console.log(e);
        _onChange(e);
      }} onBlur={_onBlur} onFocus={_onFocus}
                  aria-describedby={ariaDescribedByIds<T>(id)} orientation={inline ? "horizontal" : "vertical"}>
        {Array.isArray(enumOptions) &&
          enumOptions.map((option, index) => {
            const itemDisabled =
              Array.isArray(enumDisabled) &&
              enumDisabled.indexOf(option.value) !== -1
            return (<div className="flex items-center space-x-2" key={optionId(id, index)}>
              <RadioGroupItem value={index.toString()} id={optionId(id, index)} disabled={itemDisabled}/>
              <Label>{option.label}</Label>
            </div>);
          })}
      </RadioGroup>

    </div>
  )
}
