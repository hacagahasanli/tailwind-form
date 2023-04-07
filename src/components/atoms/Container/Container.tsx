import { IContainerProps } from "./IContainer"

export const Container = ({ children }: IContainerProps) =>
    <div className="w-full bg-white min-h-screen">
        {children}
    </div>
