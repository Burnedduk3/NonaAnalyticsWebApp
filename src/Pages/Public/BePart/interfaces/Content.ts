/**
 * This class is the object for the BePartContent JSX element in the props.
 * @param {align} align the element to direction.
 * @param {title} image title.
 * @param {text} alt text.
 * @param {img} img source path.
 */
export interface IContentProps {
    align: 'left' | 'right';
    title: string;
    text: string;
    img: string
}
