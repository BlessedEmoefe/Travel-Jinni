export default function DateRibbon() {
    return (
        <div className="w-full md:w-60">
            <h1 className="font-bold text-xl font-serif py-1">Six Days In Dubai</h1>
            <ul className="flex flex-row md:flex-col ">
                <li className="w-8 h-8 flex items-center justify-center">FEB</li>
                <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono">
                    15
                </li>
                <li className="w-8 h-10 flex items-center justify-center text-xs">16</li>
                <li className="w-8 h-10 flex items-center justify-center text-xs">17</li>
                <li className="w-8 h-10 flex items-center justify-center text-xs">18</li>
                <li className="w-8 h-10 flex items-center justify-center text-xs">19</li>
                <li className="w-8 h-10 flex items-center justify-center text-xs">20</li>
            </ul>
        </div>
    );
}
