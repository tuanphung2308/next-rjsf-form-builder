import {
  ADDITIONAL_PROPERTY_FLAG,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from "@rjsf/utils"
import { FocusEvent } from "react"
import {Input} from "@/components/ui/input";

export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  classNames,
  style,
  children,
  disabled,
  id,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
}: WrapIfAdditionalTemplateProps<T, S, F>) {
  const { templates, translateString } = registry
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = templates.ButtonTemplates
  const keyLabel = translateString(TranslatableString.KeyLabel, [label])
  const additional = ADDITIONAL_PROPERTY_FLAG in schema

  if (!additional) {
    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    )
  }

  const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) =>
    onKeyChange(target.value)
  const keyId = `${id}-key`

  return (
    <div className={`relative w-full ${classNames}`} style={style}>
      <div className="flex w-full gap-2 line-clamp-1">
        <div className="flex-grow">
          <label
              htmlFor={keyId}
              className="pt-2 text-sm font-medium text-muted-foreground mb-4 line-clamp-1"
          >
            {keyLabel}
          </label>
          <div className="pl-0.5">
          <Input
              required={required}
              defaultValue={label}
              disabled={disabled || readonly}
              id={keyId}
              name={keyId}
              onBlur={!readonly ? handleBlur : undefined}
              type="text"
              className="mt-1 w-full border shadow-sm"
          />
          </div>
        </div>
        <div className="flex-grow pr-0.5">{children}</div>
      </div>

      <div className="absolute right-0 top-0">
        <RemoveButton
            iconType="block"
            className="w-full"
            disabled={disabled || readonly}
            onClick={onDropPropertyClick(label)}
            uiSchema={uiSchema}
            registry={registry}
        />
      </div>
    </div>
  )
}
