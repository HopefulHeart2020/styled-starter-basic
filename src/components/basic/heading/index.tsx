import { FC } from "react";
import { HeadingContainer, HeadingPropsType } from "./style";

interface PropsType {
    children?: any
    level: HeadingLevelType
    $style?: Partial<HeadingPropsType>
    cref?:any
    [key: string]: any
}

const Heading: FC<PropsType> = ({ children, cref, level, $style, ...rest }) => {
    return (
        <HeadingContainer
            as={`h${level}`}
            level={level}
            {...$style}
            {...rest}
            ref={cref}
        >
            {children}
        </HeadingContainer>
    )
}

export default Heading
