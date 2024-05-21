import {AiOutlineArrowDown} from "@react-icons/all-files/ai/AiOutlineArrowDown"
import {AiOutlineArrowUp} from "@react-icons/all-files/ai/AiOutlineArrowUp"
import {IoIosCopy} from "@react-icons/all-files/io/IoIosCopy"
import {IoIosRemove} from "@react-icons/all-files/io/IoIosRemove"
import {
    FormContextType,
    IconButtonProps,
    RJSFSchema,
    StrictRJSFSchema,
    TranslatableString,
} from "@rjsf/utils"
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowUp, Minus} from "lucide-react";

export default function IconButton<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
    const {
        icon,
        iconType,
        className,
        uiSchema,
        registry,
        disabled,
        ...otherProps
    } = props

    return (
        <Button size="icon" variant="outline" {...otherProps}>
            {icon}
        </Button>
        // <button
        //   className={`grid justify-items-center px-4 py-2 text-base font-normal ${buttonClass} ${variantClass} ${className}`}
        //
        // >
        // </button>
    )
}

export function CopyButton<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
    const {
        registry: {translateString},
    } = props
    return (
        <IconButton
            title={translateString(TranslatableString.CopyButton)}
            {...props}
            icon={<IoIosCopy size={16}/>}
        />
    )
}

export function MoveDownButton<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
    const {
        registry: {translateString},
    } = props
    return (
        <IconButton
            title={translateString(TranslatableString.MoveDownButton)}
            {...props}
            icon={<ArrowDown size={16}/>}
        />
    )
}

export function MoveUpButton<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
    const {
        registry: {translateString},
    } = props
    return (
        <IconButton
            title={translateString(TranslatableString.MoveUpButton)}
            {...props}
            icon={<ArrowUp size={16}/>}
        />
    )
}

export function RemoveButton<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
    const {
        registry: {translateString},
    } = props
    return (
        <IconButton
            title={translateString(TranslatableString.RemoveButton)}
            {...props}
            icon={<Minus size={16}/>}
        />
    )
}
