import styled from 'styled-components';

export interface InlineFlexPropsType {
	flex?: string
	fDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
	fWrap?: 'wrap' | 'no-wrap';
	vAlign?: string
	hAlign?: string
	gap?: string
	count?: number
	p?: string
	mb?: string
	w?: string
	minW?: string
	maxW?: string
	h?: string
	minH?: string
	maxH?: string
	between?: string
	background?: string
	overflow?: 'auto' | 'hidden' | 'scroll'
	position?: 'absolute' | 'relative' | 'fixed' | 'sticky'
	radius?: string
	top?:string
	bottom?:string
	left?:string
	right?:string
	transform?:string
	zIndex?:string
}

type QueryType = { [key: string]: InlineFlexPropsType };

export interface StyledFlexPropsType extends InlineFlexPropsType {
	queries?: QueryType
}

export interface StyledFlexChildPropsType {
	w?: string
	h?: string
}

const setStyle = ({
	flex,
	fDirection,
	fWrap,
	vAlign,
	hAlign,
	gap,
	p,
	mb,
	w,
	minW,
	maxW,
	h,
	minH,
	maxH,
	background,
	position,
	overflow,
	between,
	radius,
	top,
	bottom,
	left,
	right,
	transform,
	zIndex
}: InlineFlexPropsType) => {
	return `
		${flex ? `flex:			${flex};` : ``}
		${fDirection ? `flex-direction:	${fDirection};` : ``}
		${fWrap ? `flex-wrap:		${fWrap};` : ``}
		${vAlign ? `align-items:		${vAlign};` : ``}
		${hAlign ? `justify-content:	${hAlign};` : ``}
		${gap ? `gap:				${gap};` : ``}
		${p ? `padding:			${p};` : ``}
		${mb ? `margin-bottom:	${mb};` : ``}
		${w ? `width:			${w};` : ``}
		${minW ? `min-width:		${minW};` : ``}
		${maxW ? `max-width:		${maxW};` : ``}
		${h ? `height:			${h};` : ``}
		${minH ? `min-height:		${minH};` : ``}
		${maxH ? `max-height:		${maxH};` : ``}
		${background ? `background:		${background};` : ``}
		${position ? `position:		${position};` : ``}
		${overflow ? `overflow:		${overflow};` : ``}
		${radius ? `border-radius:		${radius};` : ``}
		${top ? `top:		${top};` : ``}
		${bottom ? `bottom:		${bottom};` : ``}
		${left ? `left:		${left};` : ``}
		${right ? `right:		${right};` : ``}
		${zIndex ? `z-index:		${zIndex};` : ``}
		${transform ? `transform:		${transform};` : ``}
		${between ? `
			margin: 0 calc(-${between} * 2) 0 -${between};
			&>* {
				padding: 0 ${between};
			}
		` : ``}
	`
}

export const FlexContainer = styled.div<StyledFlexPropsType>`
	display: flex;
	${({ queries, ...rest }: StyledFlexPropsType) => `
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
	background-size: cover;
	background-position:center;
`

export const FlexChildContainer = styled.div<StyledFlexChildPropsType>`
	${({ w }) => w ? `width: ${w};` : ``}
	${({ h }) => h ? `height: ${h};` : ``}
`
