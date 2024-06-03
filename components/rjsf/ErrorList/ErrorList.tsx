import {
    ErrorListProps,
    FormContextType,
    RJSFSchema,
    StrictRJSFSchema,
    TranslatableString,
} from "@rjsf/utils"
import React from "react";
import {OctagonAlert, Terminal} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export default function ErrorList<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>({errors, registry}: ErrorListProps<T, S, F>) {
    const {translateString} = registry

    return (
        <Alert className="mb-4">
            <OctagonAlert size={14} className="!top-3"/>
            <AlertTitle>
                {translateString(TranslatableString.ErrorsLabel)}
            </AlertTitle>
            <AlertDescription>
                {errors.map((error, i: number) => {
                    return (
                        <li key={i} className="border-0 p-1">
                            <span>{error.stack}</span>
                        </li>
                    )
                })}
            </AlertDescription>
        </Alert>
    )
}
