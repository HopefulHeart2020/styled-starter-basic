import styled from 'styled-components';

export interface StyledImagePropsType {
    flex?: number,
    position?: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    radius?: string,
    maxW?: string
}

type QueryType = { [key: string]: Partial<StyledImagePropsType> };

export interface ImagePropsType extends StyledImagePropsType {
    queries?: QueryType
}

const setStyle = ({
    flex,
    position,
    top,
    right,
    left,
    bottom,
    radius,
    maxW
}: Partial<StyledImagePropsType>) => {
    return `
		${flex ? `flex:				${flex};` : ``}
		${position ? `position:	    	${position};` : ``}
		${top ? `top:				${top};` : ``}
		${right ? `right:				${right};` : ``}
		${left ? `left:				${left};` : ``}
		${bottom ? `bottom:				${bottom};` : ``}
		${radius ? `border-radius:				${radius};` : ``}
		${maxW ? `max-width:				${maxW};` : ``}
	`
}


export const ImageWrapper = styled.div<StyledImagePropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;

	${({ queries, ...rest }: ImagePropsType) => `
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

export const StyledImage = styled.img<StyledImagePropsType>`
    max-width: 100%;
    height: auto;
`
