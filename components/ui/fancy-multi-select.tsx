"use client";

import * as React from "react";
import {X} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Command, CommandGroup, CommandItem, CommandList,} from "@/components/ui/command";
import {Command as CommandPrimitive} from "cmdk";

export type FancySelectItem = Record<"value" | "label", string>;

interface FancyMultiSelectInterface {
  multiple: boolean,
  items: FancySelectItem[] | undefined
}

export function FancyMultiSelect({multiple, items}: Readonly<FancyMultiSelectInterface>): React.JSX.Element {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<FancySelectItem[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: FancySelectItem) => {
    setSelected(prev => prev.filter(s => s.value !== framework.value));
  }, [setSelected]);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "") {
          setSelected(prev => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          })
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === "Escape") {
        input.blur();
      }
    }
  }, [inputRef.current, setSelected]);

  const selectables = items?.filter(framework => !selected.includes(framework)) ?? [];
  console.log(selectables);
  console.log(selected);

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div
        className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      >
        <div className="flex gap-1 flex-wrap">
          {selected.map((item) => {
            return (
              <Badge key={item.value} variant="secondary">
                {item.label}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground"/>
                </button>
              </Badge>
            )
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select frameworks..."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ?
          <div
            className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              < CommandList>
                {selectables.map((item) => {
                  return (
                    <CommandItem
                      key={item.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        if (multiple) {
                          setInputValue("")
                          setSelected(prev => [...prev, item])
                        } else {
                          setInputValue("")
                          setSelected([item])
                        }
                      }}
                      className={"cursor-pointer"}
                    >
                      {item.label}
                    </CommandItem>
                  );
                })}
              </CommandList>
            </CommandGroup>
          </div>
          : null}
      </div>
    </Command>
  )
}
