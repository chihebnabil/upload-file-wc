# Customized built-in elements `is="custom-uploader"`

## Usage

### With npm

Install the package using npm or yarn

```bash
npm i @chihebnabil/custom-upload-element
# or
yarn add @chihebnabil/custom-upload-element
```

Then import it in your script

```js
import '@chihebnabil/custom-upload-element';
```

### With unpkg.com

```html
<script
  type="module"
  src="//unpkg.com/@chihebnabil/custom-upload-element"
></script>
```

Then use the custom element in your html using `is="custom-uploader`.

```html
<input
  type="file"
  multiple
  name="files[]"
  label="Drop files here or click to upload."
  is="custom-uploader"
/>
```

### HTML Structure

This component doesn't use shadow dom so you can customize the style using CSS and overwrite the style already included inside this custom element.
