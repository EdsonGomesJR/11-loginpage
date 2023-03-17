import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
  className?: string;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex h-12 items-center  lg:h-[53px] gap-3 py-4 px-3 rounded border-2 border-gray200 bg-white   w-full focus-within:ring-2 ring-purple ",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray400 hover:cursor-pointer">
      {props.children}
    </Slot>
  );
}
TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray800  outline-none placeholder:text-gray400 "
      {...props}
    />
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
