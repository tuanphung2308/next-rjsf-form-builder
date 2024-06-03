'use client'
import TailwindForm from "@/components/rjsf"
import {PlusCircle,} from "lucide-react"

import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import validator from "@rjsf/validator-ajv8"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {ToggleGroup, ToggleGroupItem,} from "@/components/ui/toggle-group"
import React, {useState} from "react";
import {AppState, useStore} from "@/store";
import {ResetIcon} from "@radix-ui/react-icons";
import ToggleSamples from "@/components/toggle-samples";
import {v4 as uuidv4} from 'uuid';

const selector = (state: AppState) => ({
    schema: state.schema,
    uiSchema: state.uiSchema,
    formData: state.formData,
})

export default function Dashboard() {
    const {schema, uiSchema, formData} = useStore(selector);
    const [currentSubmitData, setCurrentSubmitData] = useState(formData);
    const [currentFormData, setCurrentFormData] = useState(formData);
    const {properties} = schema;
    // if (properties) console.log(Object.entries(properties));
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                            <div className="flex items-center gap-4">
                                <Button variant="outline" size="icon" className="h-7 w-7">
                                    <ResetIcon className="h-4 w-4"/>
                                    <span className="sr-only">Reset</span>
                                </Button>
                                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                    Form Builder
                                </h1>
                                <Badge variant="outline" className="ml-auto sm:ml-0">
                                    Beta
                                </Badge>
                            </div>
                            <ToggleSamples/>
                            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-1">
                                        <CardHeader>
                                            <CardTitle>Form Schema Config</CardTitle>
                                            <CardDescription>
                                                Add or remove group
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Title</TableHead>
                                                        <TableHead>Type</TableHead>
                                                        <TableHead className="w-[100px]">Validation</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>

                                                    {properties ? Object.entries(properties).map((property) => {
                                                        const [propertyKey, propertyValue] = property;
                                                        const {title, type} = propertyValue as unknown as {
                                                            title: string;
                                                            type: string
                                                        };
                                                        return <TableRow key={uuidv4()}>
                                                            <TableCell>
                                                                <Input
                                                                    id="stock-1"
                                                                    type="text"
                                                                    defaultValue={title}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <Input
                                                                    id="stock-1"
                                                                    type="text"
                                                                    defaultValue={type}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <ToggleGroup
                                                                    type="multiple"
                                                                    defaultValue={["s"]}
                                                                    variant="outline"
                                                                >
                                                                    <ToggleGroupItem
                                                                        value="n">Nullable</ToggleGroupItem>
                                                                    <ToggleGroupItem
                                                                        value="s">Required</ToggleGroupItem>
                                                                    <ToggleGroupItem value="m">Length</ToggleGroupItem>
                                                                    <ToggleGroupItem value="l">Range</ToggleGroupItem>
                                                                </ToggleGroup>
                                                            </TableCell>
                                                        </TableRow>
                                                    }) : <></>}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                        <CardFooter className="flex gap-4 justify-left border-t p-4">
                                            <Button size="sm" variant="ghost" className="gap-1">
                                                <PlusCircle className="h-3.5 w-3.5"/>
                                                Add Group
                                            </Button>
                                            <Button size="sm" variant="ghost" className="gap-1">
                                                <PlusCircle className="h-3.5 w-3.5"/>
                                                Add Field
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                    <Card x-chunk="dashboard-07-chunk-1">
                                        <CardHeader>
                                            <CardTitle>Form</CardTitle>
                                            <CardDescription>
                                                Form preview
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <TailwindForm
                                                noHtml5Validate
                                                schema={schema}
                                                uiSchema={uiSchema}
                                                formData={formData}
                                                validator={validator}
                                                onSubmit={(e) => {
                                                    setCurrentSubmitData(e.formData);
                                                    console.log(e.formData)
                                                }}
                                                onChange={(e) => setCurrentFormData(e.formData)}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                    <Card
                                        className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                                    >
                                        <CardHeader>
                                            <CardTitle>Form Schema</CardTitle>
                                            <CardDescription>
                                                Form scheme description
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="break-words">{JSON.stringify(schema)}</p>
                                        </CardContent>
                                    </Card>
                                    <Card
                                        className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                                    >
                                        <CardHeader>
                                            <CardTitle>Form Change</CardTitle>
                                            <CardDescription>
                                                View data changing upon update
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="break-words">{JSON.stringify(currentFormData)}</p>
                                        </CardContent>
                                    </Card>
                                    <Card
                                        className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                                    >
                                        <CardHeader>
                                            <CardTitle>Form Data</CardTitle>
                                            <CardDescription>
                                                Hit &apos;Submit&apos; to view the form data
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="break-words">{JSON.stringify(currentSubmitData)}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
