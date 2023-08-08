import React from "react";
import { Dot, ListContainer, StyledListItem, StyledListItemPropsType, StyledListPropsType } from "./style";

type ListPropsType = {
    children?: any,
    $style?: StyledListPropsType
}

type ListItemPropsType = {
    children?: any
    $style?: StyledListItemPropsType
    hideDot?: boolean
}

const List: React.FC<ListPropsType> = ({
    children,
    $style,
    ...rest
}) => {
    return (
        <ListContainer {...$style} {...rest}>
            {children}
        </ListContainer>
    )
}

export const ListItem: React.FC<ListItemPropsType> = ({
    children,
    $style,
    hideDot
}) => {
    return (
        <StyledListItem {...$style}>
            {hideDot ? null : <Dot />}
            {children}
        </StyledListItem>
    )
}

export default List;
