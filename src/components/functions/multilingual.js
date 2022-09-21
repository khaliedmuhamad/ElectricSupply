import { English } from "../../data/English"
import { Deutsch } from "../../data/Deutsch"

export const multilang = (e) =>{ 
    if(e === "EN"){return English} else if (e === "DE" ){return Deutsch}
  }