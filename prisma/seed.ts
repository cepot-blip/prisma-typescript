import { db } from "../src/utils/db.server"

type Author = {
    firstname :string,
    lastname :string
}

type Book = {
    title :string,
    status :boolean,
    date :Date,
}

async function seed() {
    await Promise.all(
        getAuthors().map((author) => {
            return db.author.create({
                data: {
                    firstname: author.firstname,
                    lastname: author.lastname,
                }
            })
        })
    )
     // get all authors
    const author = await db.author.findFirst({
        where : {
            firstname: "cepot"
        }
    })
    // get all books
    await Promise.all(
        getBooks().map((book) => {
            const { title, status, date } = book;
            return db.book.create({
                data : {
                    title,
                    status,
                    date,
                    authorId: author?.id
                }
            })
        })
    )
}

seed();

function getAuthors() :Array<Author> {
    return [
        {
            firstname: "cepot",
            lastname: "blip"
        },
        {
            firstname: "blip",
            lastname: "cepot"
        },
        {
            firstname: "maya",
            lastname: "aselo"
        }
    ]
}

function getBooks () :Array<Book> {
    return [
        {
            title: "The first book",
            status: true,
            date: new Date()
        },
        {
            title: "The second book",
            status: true,
            date: new Date()
        },
        {
            title: "The third book",
            status: false,
            date: new Date()
        }
    ]
}