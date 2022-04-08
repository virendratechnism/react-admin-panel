import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = () => {
	const [value, setValue] = useState('');
	const handleChange = (e) => {
		setValue(e);
	}
	return (
		<div>
			{/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
			<ReactQuill
				// theme='snow'
				onChange={handleChange}
				value={value}
				modules={modules}
				formats={formats}
				// bounds={'.app'}
				placeholder='write here ...'
			/>
		</div>
	);
}
/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
const modules = {
	toolbar: [
		[{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' },
		{ 'indent': '-1' }, { 'indent': '+1' }],
		['link', 'image', 'video'],
		['clean']
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false,
	}
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
	'header', 'font', 'size',
	'bold', 'italic', 'underline', 'strike', 'blockquote',
	'list', 'bullet', 'indent',
	'link', 'image', 'video'
]

/* 
 * PropType validation
 */
// const propTypes = {
// 	placeholder: PropTypes.string,
// }

export default Quill;
