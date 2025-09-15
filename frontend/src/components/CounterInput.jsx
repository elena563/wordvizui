export default function CounterInput({ value, onChange, disabled, maxN, minN }) {

    return (
        <div className="relative flex items-center">
            <button onClick={() => onChange(Math.max(1, value - 1))} disabled={disabled} type="button" id="decrement-button" data-input-counter-decrement="counter-input" 
            className="shrink-0 bg-white dark:hover:bg-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <span style={{color: '#1f2937', fontSize: '20px', marginBottom: '2px'}}>−</span>
            </button>
            <input type="text" id="counter-input" data-input-counter 
            className="shrink-0 text-gray-900 !border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
            placeholder="" value={value} min={maxN} max={minN} disabled={disabled}
            onChange={e => onChange(Number(e.target.value) || 1)} required />
            <button onClick={() => onChange(value + 1)} disabled={disabled} type="button" id="increment-button" data-input-counter-increment="counter-input" 
            className="shrink-0 bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <span style={{color: '#1f2937', fontSize: '20px', marginBottom: '2px'}}>+</span>
            </button>
        </div>
    )
}