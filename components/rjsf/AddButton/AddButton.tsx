import {
    FormContextType,
    IconButtonProps,
    RJSFSchema,
    StrictRJSFSchema,
} from "@rjsf/utils"
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

export default function AddButton<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>({uiSchema, registry, ...props}: IconButtonProps<T, S, F>) {
    const {translateString} = registry
    return (
        <div className="p-0 m-0">
            <Button {...props} className="w-fit gap-2" variant="outline">
                <PlusCircle size={16}></PlusCircle> Add
            </Button>
        </div>
    )
}
