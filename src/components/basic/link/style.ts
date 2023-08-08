import { Link } from "react-router-dom";
import styled from "styled-components";

export type StyledLinkPropsType = {
    color?: string
    w?: string
    h?: string
}

type QueryType = { [key: string]: Partial<StyledLinkPropsType> };

export interface TextPropsType extends StyledLinkPropsType {
    queries?: QueryType
}

const setStyle = ({
    color,
    w,
    h
}: Partial<StyledLinkPropsType>) => {
    return `
		${color ? `color:				var(--${color});` : ``}
		${w ? `width:				${w};` : ``}
		${h ? `height:				${color};` : ``}
	`
}

export const StyledLink = styled(Link) <StyledLinkPropsType>`
    display: inline-flex;
    align-items: center;
    ${({ queries, ...rest }: TextPropsType) => `
		${setStyle(rest)}
		${queries
            ? Object.keys(queries).reverse()?.map((breakpoint: string) => {
                return `@media (max-width: ${breakpoint}px) {
							${setStyle(queries[breakpoint])}
						}`;
            }).join('')
            : ``
        }
	`}
`