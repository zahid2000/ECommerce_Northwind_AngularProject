import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponsemodel extends ResponseModel{
    data:Category[]
}