export const example =
  () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
  and an optimized production build.`

export function toggleMenu(menuList){
    console.log("height : " +  menuList.style.maxHeight);
    if (menuList.style.maxHeight === "0px"){
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
