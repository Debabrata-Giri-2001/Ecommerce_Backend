export default function TabButton({ children, isActive, onClick }) {
    return (
        <button
            className={`p-5 text-slate-800 font-Kanit font-semibold text-center w-1/3 ${isActive ? 'border-b-4 border-color1 duration-500 transition-all ease-out' : 'border-b-4 border-transparent'}`}
            onClick={() => {
                onClick();
            }}
        >
            {children}
        </button>
    );
}
