import {Entity,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm'

import Discipline from './Discipline'

@Entity("period")
export default class Period{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    type:string

    @OneToMany(()=>Discipline,discipline=>discipline.period)
    disciplines: Discipline[]
}