import { StyledTable, StyledTd, StyledTh, StyledTr } from "./style";

interface TableProps {
    children?:any
    [key:string]:any
}

export default function Table ({children, ...rest}:TableProps) {
    return(
        <StyledTable {...rest}>
            {
                children
            }
        </StyledTable>
    )
}

export const Tr = ({children, ...rest}:TableProps) => {
    return(
        <StyledTr {...rest}>
            {
                children
            }
        </StyledTr>
    )
}
export const Td = ({children, ...rest}:TableProps) => {
    return(
        <StyledTd {...rest}>
            {
                children
            }
        </StyledTd>
    )
}
export const Th = ({children, ...rest}:TableProps) => {
    return(
        <StyledTh {...rest}>
            {
                children
            }
        </StyledTh>
    )
}