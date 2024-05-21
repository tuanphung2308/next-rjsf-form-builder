import {
  ariaDescribedByIds,
  enumOptionsDeselectValue,
  enumOptionsIsSelected,
  enumOptionsSelectValue,
  enumOptionsValueForIndex,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils"
import {ChangeEvent, FocusEvent} from "react"
import {Checkbox} from "@/components/ui/checkbox";
import { v4 as uuidv4 } from 'uuid';

export default function CheckboxesWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
    id,
    disabled,
    options,
    value,
    autofocus,
    readonly,
    required,
    onChange,
    onBlur,
    onFocus,
  }: WidgetProps<T, S, F>) {
  const {enumOptions, enumDisabled, inline, emptyValue} = options
  const checkboxesValues = Array.isArray(value) ? value : [value]

  const _onChange =
    (index: number) =>
      ({target: {checked}}: ChangeEvent<HTMLInputElement>) => {
        if (checked) {
          onChange(
            enumOptionsSelectValue<S>(index, checkboxesValues, enumOptions),
          )
        } else {
          onChange(
            enumOptionsDeselectValue<S>(index, checkboxesValues, enumOptions),
          )
        }
      }

  const _onBlur = ({target: {value}}: FocusEvent<HTMLInputElement>) =>
    onBlur(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))
  const _onFocus = ({target: {value}}: FocusEvent<HTMLInputElement>) =>
    onFocus(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue))

  return (
    <div className="space-y-4">
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, index: number) => {
          const checked = enumOptionsIsSelected<S>(
            option.value,
            checkboxesValues,
          )
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1

          return (
            <div className="flex items-center space-x-2" key={uuidv4()}>
              <Checkbox id={id}
                        name={id}
                        required={required}
                        disabled={disabled || itemDisabled || readonly}
                        onChange={onChange}
                        defaultChecked={checked}
                        autoFocus={autofocus && index === 0}
                        aria-describedby={ariaDescribedByIds<T>(id)}
              />
              <label
                htmlFor={id}
                className="form-checkbox text-primary"
              >
                {option.label}
              </label>
            </div>

          )
        })}
    </div>
  )
}
