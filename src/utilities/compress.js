// ? 圖片壓縮，參數 file 為 input file 取得圖檔；quality 為壓縮率

async function compressImg (file, quality) {
  if (file[0]) {
    return Promise.all(Array.from(file).map(e => compressImg(e,
      quality))) // 如果是 file 数组返回 Promise 数组
  } else {
    return new Promise((resolve) => {
      const reader = new FileReader() // 创建 FileReader
      reader.onload = ({
        target: {
          result: src
        }
      }) => {
        const image = new Image() // 创建 img 元素
        image.onload = async () => {
          const canvas = document.createElement('canvas') // 创建 canvas 元素
          // ? 限制canvas繪圖大小，當在ios手機尺寸過大時，會無法顯示
          const maxWidth = 768 // Max width for compressed image
          const scale = Math.min(maxWidth / image.width, 1)
          canvas.width = image.width * scale
          canvas.height = image.height * scale
          canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height) // 绘制 canvas
          const canvasURL = canvas.toDataURL('image/jpeg', quality)
          const buffer = atob(canvasURL.split(',')[1])
          let length = buffer.length
          const bufferArray = new Uint8Array(new ArrayBuffer(length))
          while (length--) {
            bufferArray[length] = buffer.charCodeAt(length)
          }
          const miniFile = new File([bufferArray], file.name, {
            type: 'image/jpeg'
          })
          resolve({
            file: miniFile,
            origin: file,
            beforeSrc: src,
            afterSrc: canvasURL,
            beforeKB: Number((file.size / 1024).toFixed(2)),
            afterKB: Number((miniFile.size / 1024).toFixed(2))
          })
        }
        image.src = src
      }
      reader.readAsDataURL(file)
    })
  }
}

export default compressImg
