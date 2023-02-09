import {db} from "../../utils/db.server";

type Author = {
    id : number,
    firstname :string,
    lastname :string
}

export const listAuthor = async(): Promise<Author[]>=> {
    return await db.author.findMany({
        select : {
            id: true,
            firstname: true,
            lastname: true
        }
    });
}

export const getAuthor = async(id :number): Promise<Author | null>=> {
    return await db.author.findUnique({
        where : {
            id
        }
    });
}