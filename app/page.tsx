'use client'
import TailwindForm from "@/components/rjsf"
import Image from "next/image"
import Link from "next/link"
import {
    ChevronLeft,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react"

import {Badge} from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import validator from "@rjsf/validator-ajv8"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import React from "react";
import {AppState, useStore} from "@/store";
import {ResetIcon} from "@radix-ui/react-icons";
import ToggleSamples from "@/components/toggle-samples";

const selector = (state: AppState) => ({
    schema: state.schema,
    uiSchema: state.uiSchema,
    formData: state.formData,
})

export default function Dashboard() {
    const {schema, uiSchema, formData} = useStore(selector)
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
                                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                    <Button variant="outline" size="sm">
                                        Discard
                                    </Button>
                                    <Button size="sm">Save Product</Button>
                                </div>
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
                                                        <TableHead className="w-[100px]">SKU</TableHead>
                                                        <TableHead>Stock</TableHead>
                                                        <TableHead>Price</TableHead>
                                                        <TableHead className="w-[100px]">Size</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            GGPC-001
                                                        </TableCell>
                                                        <TableCell>
                                                            <Label htmlFor="stock-1" className="sr-only">
                                                                Stock
                                                            </Label>
                                                            <Input
                                                                id="stock-1"
                                                                type="number"
                                                                defaultValue="100"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Label htmlFor="price-1" className="sr-only">
                                                                Price
                                                            </Label>
                                                            <Input
                                                                id="price-1"
                                                                type="number"
                                                                defaultValue="99.99"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <ToggleGroup
                                                                type="single"
                                                                defaultValue="s"
                                                                variant="outline"
                                                            >
                                                                <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                                <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                                <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                            </ToggleGroup>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            GGPC-002
                                                        </TableCell>
                                                        <TableCell>
                                                            <Label htmlFor="stock-2" className="sr-only">
                                                                Stock
                                                            </Label>
                                                            <Input
                                                                id="stock-2"
                                                                type="number"
                                                                defaultValue="143"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Label htmlFor="price-2" className="sr-only">
                                                                Price
                                                            </Label>
                                                            <Input
                                                                id="price-2"
                                                                type="number"
                                                                defaultValue="99.99"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <ToggleGroup
                                                                type="single"
                                                                defaultValue="m"
                                                                variant="outline"
                                                            >
                                                                <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                                <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                                <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                            </ToggleGroup>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            GGPC-003
                                                        </TableCell>
                                                        <TableCell>
                                                            <Label htmlFor="stock-3" className="sr-only">
                                                                Stock
                                                            </Label>
                                                            <Input
                                                                id="stock-3"
                                                                type="number"
                                                                defaultValue="32"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Label htmlFor="price-3" className="sr-only">
                                                                Stock
                                                            </Label>
                                                            <Input
                                                                id="price-3"
                                                                type="number"
                                                                defaultValue="99.99"
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <ToggleGroup
                                                                type="single"
                                                                defaultValue="s"
                                                                variant="outline"
                                                            >
                                                                <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                                <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                                <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                            </ToggleGroup>
                                                        </TableCell>
                                                    </TableRow>
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
                                            />
                                        </CardContent>
                                        <CardFooter className="justify-center border-t p-4">
                                            <Button size="sm" variant="ghost" className="gap-1">
                                                <PlusCircle className="h-3.5 w-3.5"/>
                                                Add Variant
                                            </Button>
                                        </CardFooter>
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
                                            <CardTitle>Form Data</CardTitle>
                                            <CardDescription>
                                                Submitted Data
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="break-words">{JSON.stringify(formData)}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 md:hidden">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button size="sm">Save Product</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
