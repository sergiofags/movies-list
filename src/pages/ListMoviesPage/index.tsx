import { Pencil, Search, Trash2 } from "lucide-react";
import { useState } from "react";

export function ListMoviesPage() {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const SearchMovie = (event) => {
        event.preventDefault();
        alert(searchText);
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-[800px] min-h-[800px] bg-zinc-800 rounded-lg p-10 shadow-xl space-y-8">
                <h1 className="text-4xl font-semibold">Filmes</h1>
                <form onSubmit={SearchMovie} className='p-2.5 bg-zinc-900 border-zinc-800 rounded-lg flex items-center gap-2'>
                    <div className='px-2 flex items-center flex-1 gap-2'>
                        <input
                            onChange={handleInputChange}
                            name='text' 
                            type="text" 
                            placeholder="Pesquise o nome ou genero do filme" 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                        <button 
                            type="submit"
                            className="rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center bg-zinc-800 text-zinc-400  hover:bg-zinc-700">
                            <Search className="size-4 text-zinc-400"/>
                            Pesquisar
                        </button>
                    </div>
                </form>

                <div className="w-full px-4 py-4 bg-zinc-900 border-zinc-800 rounded-lg flex items-center gap-2">
                    <span className="flex-1">Harry Potter - O prisioneiro de askban</span>
                    <button className="rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center bg-emerald-800 text-zinc-400  hover:bg-emerald-700">
                        <Pencil className="size-4 text-zinc-50"/>
                    </button>
                    <button className="rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center bg-red-800 text-zinc-400  hover:bg-red-700">
                        <Trash2  className="size-4 text-zinc-50"/>
                    </button>
                </div>

            </div>
        </div>
    )
}