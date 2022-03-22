import coco from "../assets/coco.jpg"
import letra from "../assets/descarga.png"
import style from "../modules/Portada.module.css"

export function Portada() {  
  return (
    <div className={style.wrapper}>
      <img className={style.principal} src={coco} alt="Coco the Movie"/>
      <img className={style.title} src={letra} alt="Coco the Movie"/>
    </div>
  )
}