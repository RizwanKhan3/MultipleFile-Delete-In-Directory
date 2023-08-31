
const fs = require('fs')
const di = fs.readdirSync('G:\JS')


di.forEach((item)=>{
  const direc = item
  const insideFile = fs.readdirSync(`G:\JS\\${item}`)

  insideFile.flat().map((item)=>{
   if(item.includes('.vtt')){
     fs.unlinkSync(`G:\JS\\${direc}\\${item}`)
     console.log(`${item} Delete`);
   }

  })
})

