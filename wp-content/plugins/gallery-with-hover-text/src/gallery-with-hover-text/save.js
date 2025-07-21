/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({
	attributes: {
		boxOneHeading,
		boxOneHoverText,
		boxOnePhoto,
		boxTwoHeading,
		boxTwoHoverText,
		boxTwoPhoto,
	},
}) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<ul className="gwh-ul">
				<li
					className="box-one"
					style={{
						backgroundImage: `url(${boxOnePhoto})`,
					}}
				>
					<RichText.Content
						tagName="h4"
						value={boxOneHeading}
						className="heading"
					/>

					<RichText.Content
						tagName="paragraph"
						value={boxOneHoverText}
						className="hover"
					/>
				</li>

				<li
					className="box-two"
					style={{
						backgroundImage: `url(${boxTwoPhoto})`,
					}}
				>
					<RichText.Content
						tagName="h4"
						value={boxTwoHeading}
						className="heading"
					/>

					<RichText.Content
						tagName="paragraph"
						value={boxTwoHoverText}
						className="hover"
					/>
				</li>
			</ul>
		</div>
	);
}
