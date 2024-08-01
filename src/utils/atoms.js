import { atom, atomFamily } from "recoil";

export const sidebarAtom = atom({
  key:"sidebarAtom",
  default:true
})
export const watchAtom = atom({
  key:"watchAtom",
  default:false
})
export const showVideoAtom = atom({
  key:"showVideoAtom",
  default:null
})


export const videoIdAtom = atom({
  key: 'videoId',
  default:""
});

