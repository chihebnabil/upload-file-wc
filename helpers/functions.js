export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const getRandomString = (length) => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

export const getMimeFromBase64 = (data) => {
    return data.split(',')[0].split(':')[1].split(';')[0];
}

export const base64ToFile = (dataurl, filename) => 
{
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}


export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function (e) {
        resolve(e.target.result);
      }
      reader.readAsDataURL(file);
    });
  }

  /**
 * @params {File[]} files Array of files to add to the FileList
 * @return {FileList}
 */
 export const FileListItems =(files) => {
    var b = new ClipboardEvent("").clipboardData || new DataTransfer()
    for (var i = 0, len = files.length; i<len; i++) b.items.add(files[i])
    return b.files
  }

  export const createFile = async(url) => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: data.type
    };
    return new Promise((resolve, reject) => {
      let file = new File([data], getRandomString(7)+"." + data.type.split('/')[1], metadata);
      resolve(file);
    
    })
  } 