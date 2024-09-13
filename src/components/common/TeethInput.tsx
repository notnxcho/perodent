import { useEffect, useRef, useState } from "react";

const TripleInput = (
    {value, clearInput, onChange, fieldName, focusedField, setFocusedField}:
    {value: [number | null, number | null, number | null], clearInput: boolean, onChange: (value: [number | null, number | null, number | null]) => void, fieldName: 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque', focusedField: false | 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque', setFocusedField: any }
) => {
    const [parsedLocalValue, setParsedLocalValue] = useState<[number | null, number | null, number | null]>([value[0], value[1], value[2]]);
    const [localValue, setLocalValue] = useState(value.join('').replaceAll('null', 'n'))
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // check for not going over 3 digits
        if (localValue.split('').length < 3 || (e.nativeEvent as any).inputType === 'deleteContentBackward') {
            setLocalValue(e.target.value)
        }
        const newValue = e.target.value
        let parsedValue = [
            (newValue[0] || +newValue[0] === 0) ? +newValue[0] : null, 
            (newValue[1] || +newValue[1] === 0) ? +newValue[1] : null, 
            (newValue[2] || +newValue[2] === 0) ? +newValue[2] : null
        ]
        setParsedLocalValue(parsedValue as [number | null, number | null, number | null])
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault()
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
        }
    }
    useEffect(() => {
        onChange(parsedLocalValue)
    }, [parsedLocalValue])
    useEffect(() => {
        setLocalValue(value.join('').replaceAll('null', 'n'))
    }, [clearInput])
    useEffect(() => {
        if (focusedField === fieldName) {
            inputRef.current?.focus()
        }
    }, [focusedField])

    return (
        <div 
            className={`flex gap-1 items-center relative cursor-pointer ${fieldName === focusedField && 'outline outline-2 outline-blue-400 outline-offset-2 rounded'}`}
            onClick={() => inputRef.current?.focus()}
        >
            <input 
                type="number" 
                className={`hiddenAA opacity-0 absolute z-[-1] max-w-10`} 
                value={localValue} 
                onChange={(e) => handleChange(e)}
                onFocus={() => {setFocusedField(fieldName)}}
                onBlur={() => {setFocusedField(false)}}
                ref={inputRef}
                onKeyDown={handleKeyDown}
            />
            <div className="flex rounded bg-gray-100 items-center justify-center w-6 h-8">{value[0] || value[0] === 0 ? value[0] : ''}</div>
            <div className="flex rounded bg-gray-100 items-center justify-center w-6 h-8">{value[1] || value[1] === 0 ? value[1] : ''}</div>
            <div className="flex rounded bg-gray-100 items-center justify-center w-6 h-8">{value[2] || value[2] === 0 ? value[2] : ''}</div>
        </div>
    )
}

const SingleInput = (
    {value, clearInput, onChange, fieldName, focusedField, setFocusedField}:
    {value: [number | null], clearInput: boolean, onChange: (value: [number | null]) => void, fieldName: 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque', focusedField: false | 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque', setFocusedField: any}
) => {
    const [parsedLocalValue, setParsedLocalValue] = useState<[number | null]>([value[0]]);
    const [localValue, setLocalValue] = useState(value.join('').replaceAll('null', 'n'))
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // check for not going over 1 digit
        if (localValue.split('').length < 1 || (e.nativeEvent as any).inputType === 'deleteContentBackward') {
            setLocalValue(e.target.value)
        }
        const newValue = e.target.value
        let parsedValue = [(newValue[0] || +newValue[0] === 0) ? +newValue[0] : null]
        setParsedLocalValue(parsedValue as [number | null])
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault()
        }
    }
    useEffect(() => {
        onChange(parsedLocalValue)
    }, [parsedLocalValue])
    useEffect(() => {
        setLocalValue(value.join('').replaceAll('null', 'n'))
    }, [clearInput])
    useEffect(() => {
        if (focusedField === fieldName) {
            inputRef.current?.focus()
        }
    }, [focusedField])
    return (
        <div 
            className={`flex gap-1 items-center relative cursor-pointer ${focusedField === fieldName && 'outline outline-2 outline-blue-400 outline-offset-2 rounded'}`}
            onClick={() => inputRef.current?.focus()}
        >
            <input 
                type="number" 
                className={`hiddenAA max-w-10 opacity-0 absolute z-[-1]`} 
                value={localValue} 
                onChange={(e) => handleChange(e)}
                onFocus={() => {setFocusedField(fieldName)}}
                onBlur={() => {setFocusedField(false)}}
                ref={inputRef}
                onKeyDown={handleKeyDown}
            />
            <div className="flex rounded bg-gray-100 items-center justify-center w-6 h-8">{value[0] || value[0] === 0 ? value[0] : ''}</div>
        </div>
    )
}

const TripleToggle = (
    {value, onChange, fieldName, focusedField, setFocusedField}: 
    {value: [boolean, boolean, boolean], onChange: (value: [boolean, boolean, boolean]) => void, fieldName: 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque', focusedField: false | 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque', setFocusedField: any}
) => {

    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (focusedField === fieldName) {
            ref.current?.click()

        }
    }, [focusedField])
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toUpperCase() === (fieldName === 'bleeding' ? 'S' : fieldName === 'plaque' ? 'A'  : '')) {
                e.preventDefault()
                setFocusedField(fieldName)
            }
            if (focusedField === fieldName) {
                if (e.key === '1' || e.key === '2' || e.key === '3') {
                    e.preventDefault()
                    e.stopPropagation()
                    const index = parseInt(e.key) - 1
                    const newValue = [...value]
                    newValue[index] = !newValue[index]
                    onChange(newValue as [boolean, boolean, boolean])
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [fieldName, focusedField, value]);

    return (
        <div className={`flex gap-0.5 items-center ${focusedField === fieldName && `outline outline-2 ${fieldName === 'bleeding' ? 'outline-red-400' : 'outline-blue-400'} outline-offset-2 rounded`}`} ref={ref} onClick={() => setFocusedField(fieldName)}>
            <div className={`flex rounded bg-gray-100 items-center justify-center w-4 h-[18px] ${value[0] ? fieldName === 'bleeding' ? '!bg-red-500' : '!bg-blue-500' : ''}`}/>
            <div className={`flex rounded bg-gray-100 items-center justify-center w-4 h-[18px] ${value[1] ? fieldName === 'bleeding' ? '!bg-red-500' : '!bg-blue-500' : ''}`}/>
            <div className={`flex rounded bg-gray-100 items-center justify-center w-4 h-[18px] ${value[2] ? fieldName === 'bleeding' ? '!bg-red-500' : '!bg-blue-500' : ''}`}/>
        </div>
    )
}

const TeethInput = ({inputType, value, onChange, focusedField, setFocusedField, clearInput, fieldName}: TeethInputProps) => {
    return (
        <>
            { inputType === 'triple-input' ? (

                <TripleInput 
                    value={value as [number | null, number | null, number | null]} 
                    clearInput={clearInput} 
                    onChange={onChange}
                    fieldName={fieldName}
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                />

            ) : inputType === 'single-input' ? (

                <SingleInput 
                    value={value as [number | null]} 
                    clearInput={clearInput} 
                    onChange={onChange}
                    fieldName={fieldName}
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                />

            ) : inputType === 'triple-toggle' ? (

                <TripleToggle
                    value={value as [boolean, boolean, boolean]}
                    onChange={onChange}
                    fieldName={fieldName}
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                />

            ) : inputType === 'single-toggle' ? (
                <div className="flex rounded bg-gray-100 items-center justify-center w-[18px] h-[18px]"></div>

            ) : inputType === 'stepped' ? (
                <div className="flex rounded bg-gray-100 items-center justify-center w-[18px] h-[18px]"></div>

            ) : (
                <div>error</div>
            )}
        </>
    )
}

interface TeethInputProps {
    focusedField: false | 'gingivalMargin' | 'probingDepth' | 'movement' | 'bleeding' | 'plaque';
    setFocusedField: any
    inputType: 'triple-input' | 'single-input' | 'triple-toggle' | 'single-toggle' | 'stepped';
    value: boolean | string | [number | null, number | null, number | null] | [number | null] | number | null | [boolean, boolean, boolean];
    onChange: (value: any) => void;
    clearInput: boolean;
    fieldName: 'movement' | 'probingDepth' | 'gingivalMargin' | 'bleeding' | 'plaque',
}

export default TeethInput;