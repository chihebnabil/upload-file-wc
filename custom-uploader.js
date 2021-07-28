import {LitElement, html, css} from 'lit';
import {createRef, ref} from 'lit/directives/ref';
import {
  toBase64,
  createFile,
  FileListItems,
  base64ToFile,
  getRandomString,
  getMimeFromBase64,
} from './helpers/functions';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CustomUploader extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      /**
       * Name of the file input.
       */
      name: {type: String},

      /**
       * Label of the input.
       */
      label: {type: String},

      /**
       * Accepted mime type.
       */
      accept: {type: String},

      /**
       * Support multiple files.
       */
      multiple: {type: Boolean, default: true},

      /**
       * File list.
       */
      data: {type: Array},
    };
  }

  constructor() {
    super();
    this.fileInput = createRef();
    this.fileLabel = createRef();
    this.fileWrapper = createRef();
    this.files = new Array();
  }
  connectedCallback() {
    super.connectedCallback();
    console.log('data parse', this.data);
    this.prepareFiles();
  }

  async prepareFiles() {
    if (Array.isArray(this.data) && this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {
        const link = this.data[i];
        let fileData = await createFile(link);
        this.files.push(fileData);
        this.addImages(await toBase64(fileData));
      }
    }
  }
  _dragEnter(e) {
    e.preventDefault();
  }
  _dragOver(e) {
    e.preventDefault();
  }

  _onUpdateFiles() {
    this.fileInput.value.files = FileListItems(this.files);
  }

  _onFileWrapperClick(e) {
    if (
      !e.target.classList.contains('file-upload') &&
      !e.target.classList.contains('file-label') &&
      !e.target.classList.contains('file-wrapper')
    ) {
      return;
    }
    this.fileInput.value.click();
  }

  addImages(data) {
    this.fileLabel.value.style.display = 'none';
    let imgWrapper = document.createElement('div');
    imgWrapper.setAttribute('data-index', this.files.length);
    imgWrapper.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();

      imgWrapper.remove();
      /* get current index */
      let index = parseInt(this.getAttribute('data-index'));
      this.files.splice(index, 1);
      this._onUpdateFiles();
      if (this.files.length == 0) {
        this.fileLabel.value.style.display = 'flex';
      }
    });
    let img = document.createElement('img');
    img.src = data;

    img.style.width = '100px';
    img.style.height = '100px';
    imgWrapper.appendChild(img);
    this.fileWrapper.value.appendChild(imgWrapper);
    this._onUpdateFiles();
  }

  _onFileChange(e) {
    e.stopPropagation();
    e.preventDefault();
    let filesList = new Array();
    filesList = e.target.files || e.dataTransfer.files;
    if (filesList.length > 0) {
      for (var i = 0; i < filesList.length; i++) {
        var file = filesList[i];
        var reader = new FileReader();

        reader.onload = (e) => {
          let data = e.target.result;
          this.files.push(
            base64ToFile(
              data,
              getRandomString(7) + '.' + getMimeFromBase64(data).split('/')[1]
            )
          );
          this.addImages(data);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  render() {
    return html`
      <style>
        .file-wrapper {
          width: 100%;
          height: 150px;
          border: 0.5px dashed grey;
          position: relative;
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: flex-start;
          align-items: center;
          padding: 5px;
        }
        .file-wrapper label {
          display: flex;
          color: grey;
          width: 100%;
          height: 100%;
          text-align: center;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: center;
          align-items: center;
          font-family: sans-serif;
          font-size: 14px;
        }
        .file-upload {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          display: none;
        }

        .file-wrapper > div > img {
          display: flex;
          flex-direction: row;
          object-fit: cover;
          padding: 5px;
        }
        .file-wrapper > div {
          position: relative;
        }
        .file-wrapper > div:after {
          content: 'x';
          background-color: #488ce6;
          font-family: sans-serif;
          font-size: 12px;
          transform-origin: center;
          line-height: 20px;
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 20px;
          color: white;
          text-align: center;
          border-radius: 50%;
          cursor: pointer;
        }
      </style>
      <div
        @dragover="${this._dragOver}"
        @dragenter="${this._dragEnter}"
        @drop="${this._onFileChange}"
        @click="${this._onFileWrapperClick}"
        ${ref(this.fileWrapper)}
        class="file-wrapper"
      >
        <label ${ref(this.fileLabel)} class="file-label">
          ${this.label}
        </label>
        <input
          ?multiple="${this.multiple}"
          ${ref(this.fileInput)}
          @change="${this._onFileChange}"
          type="file"
          class="file-upload"
          accept="${this.accept}"
          name="${this.name}"
        />
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

window.customElements.define('custom-uploader', CustomUploader);
