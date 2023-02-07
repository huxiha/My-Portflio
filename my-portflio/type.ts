import { type } from "os";
import { IconType } from "REACT-icons";

export interface IService {
    Icon: IconType,
    title: string,
    about: string
}

export interface IProject {
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key_techs: string[],
}

export type Category = "REACT" | "HTML" | "CSS" | "ALL" | "JS" | "NEXT"

export interface ISkill {
    name: string,
    level: number,
}