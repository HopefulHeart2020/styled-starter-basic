import styled from "styled-components";

interface IconProps {
    width?: string
    height?: string
    fill?: string
}

export const IconWrapper = styled.span<IconProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? props.width : "initial"};
    height: ${props => props.height ? props.height : "initial"};
    svg, path {
        ${props => props.fill ? `fill:${props.fill}` : ''};
        ${props => props.fill ? `stroke:${props.fill}` : ''};
    }
`