import { createConnection, getConnection, getRepository } from "typeorm";


import Discipline from "../entities/Discipline"
import Period from '../entities/Period'


interface addDiscipline{
    name:string,
    period:Period
  }
  
  
  
  
  
  export async function addDiscipline (discipline:addDiscipline) {
    
    await getRepository(Discipline).insert(discipline)
  }
  
  
  
  