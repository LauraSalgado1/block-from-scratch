/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import placeholder from "../../assets/cat.jpg";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({
	attributes: {
		boxOneHeading,
		boxOneHoverText,
		boxOnePhoto,
		boxTwoHeading,
		boxTwoHoverText,
		boxTwoPhoto,
	},
	setAttributes,
}) {
	const blockProps = useBlockProps();

	const onChangeBoxOneHeading = (value) => {
		setAttributes({ boxOneHeading: value });
	};

	const onChangeBoxOneHoverText = (value) => {
		setAttributes({ boxOneHoverText: value });
	};

	const onImageOneSelect = (imageObject) => {
		setAttributes({ boxOnePhoto: imageObject.url });
	};

	const onChangeBoxTwoHeading = (value) => {
		setAttributes({ boxTwoHeading: value });
	};

	const onChangeBoxTwoHoverText = (value) => {
		setAttributes({ boxTwoHoverText: value });
	};

	const onImageTwoSelect = (imageObject) => {
		setAttributes({ boxTwoPhoto: imageObject.url });
	};

	return (
		<div {...blockProps}>
			<ul className="gwh-ul">
				<li
					className="box-one"
					style={{
						backgroundImage: `url(${boxOnePhoto ? boxOnePhoto : placeholder})`,
					}}
				>
					<div>
						<MediaUpload
							onSelect={onImageOneSelect}
							type="image"
							value={boxOnePhoto}
							render={({ open }) => (
								<Button
									className="photo__button"
									onClick={open}
									icon="format-image"
									showTooltip="true"
									label={__("Select image", "gallery-with-hover-text")}
								/>
							)}
						/>
					</div>
					<RichText
						tagName="h4"
						onChange={onChangeBoxOneHeading}
						value={boxOneHeading}
						placeholder={__(
							"Text that always shows",
							"gallery-with-hover-text",
						)}
						className="heading"
					/>
					<RichText
						tagName="paragraph"
						onChange={onChangeBoxOneHoverText}
						value={boxOneHoverText}
						placeholder={__(
							"Text that shows only on hover",
							"gallery-with-hover-text",
						)}
						className="hover"
					/>
				</li>
				<li
					className="box-two"
					style={{
						backgroundImage: `url(${boxTwoPhoto ? boxTwoPhoto : placeholder})`,
					}}
				>
					<div>
						<MediaUpload
							onSelect={onImageTwoSelect}
							type="image"
							value={boxTwoPhoto}
							render={({ open }) => (
								<Button
									className="photo__button"
									onClick={open}
									icon="format-image"
									showTooltip="true"
									label={__("Select image", "gallery-with-hover-text")}
								/>
							)}
						/>
					</div>
					<RichText
						tagName="h4"
						onChange={onChangeBoxTwoHeading}
						value={boxTwoHeading}
						placeholder={__(
							"Text that always shows",
							"gallery-with-hover-text",
						)}
						className="heading"
					/>
					<RichText
						tagName="paragraph"
						onChange={onChangeBoxTwoHoverText}
						value={boxTwoHoverText}
						placeholder={__(
							"Text that shows only on hover",
							"gallery-with-hover-text",
						)}
						className="hover"
					/>
				</li>
			</ul>
		</div>
	);
}
