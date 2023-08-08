import { ImagePropsType, ImageWrapper, StyledImage, StyledImagePropsType } from "./image.style";

interface PropsType extends StyledImagePropsType {
    src?: string
    alt?: string,
    [key: string]: any,
    children?: any
    $style?: ImagePropsType
}

const Image = ({ $style, src, alt, ...rest }: PropsType) => {
    return (
        <ImageWrapper {...$style} {...rest}>
            <StyledImage src={src} alt={alt} {...rest} />
        </ImageWrapper>
    )
}

export default Image;
