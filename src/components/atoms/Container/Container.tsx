import { IContainerProps } from "./IContainer"

export const Container = ({ children }: IContainerProps) =>
    <div className="w-full bg-blue-500 min-h-screen">
        {children}
    </div>
