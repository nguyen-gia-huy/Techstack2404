//Quản lý Sách Thư Viện
//+Định nghĩa các kiểu dữ liệu: Tạo các interface Book, Member, và Library
//Book có các thuộc tính như id, title, author, và available (boolean).
interface Book{
    id:number;
    title: string;
    author:string;
    available: boolean;
}
//Member có các thuộc tính như id, name, và borrowedBooks (mảng các Book).
interface Member{
    id:number;
    name: string;
    borrowedBooks:Book[];
}
//Library có các thuộc tính như books và members.
interface Library{
    books: Book[];
    members:Member[];
    addBook(book: Book):void;
    removeBook(bookId: number): void;
    updateBook(Book: Book): void;
}
//+Quản lý sách: Viết các phương thức trong class Library để thêm, xóa, và cập nhật thông tin sách.
class Library implements Library{
    books: Book[] = [];
    members:Member[] = [];

        constructor(bookInit: Book[], membersInit: Member[]){
            this.books =bookInit;
            this.members =  membersInit;
        }
    //thêm
    addBook(book: Book): void {
        this.books.push(book);
    }
    //xóa
    removeBook(bookId: number):void{
        this.books = this.books.filter(book => bookId !== bookId);
    }
    //
    updateBook(bookUpdate: Book): void{
        const index =this.books.findIndex(book => book.id === bookUpdate.id);
        if(index === -1){
            console.log('khong tim dc')
        }else{
            this.bo
        }
    }
}