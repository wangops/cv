import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const settingStore = defineStore('settingStore', () => {
  const setting = reactive<any>({
    theme:"",   // 主题
  })
  const init = ()=>{
    const theme = localStorage.getItem("theme") || "light"
    setting.theme = theme
    const htmlElement = document.querySelector('html')
    if(htmlElement)htmlElement.setAttribute('theme', setting.theme)
  }
  const setProp = (key:string,value:string)=>{
    if(!value || setting[key] === value) return
    setting[key] = value
    localStorage.setItem(key,value)
    if(key == "theme"){
      const htmlElement = document.querySelector('html')
      if(htmlElement)htmlElement.setAttribute('theme', setting.theme)
    }
  }
  return { setting,init,setProp}
})
