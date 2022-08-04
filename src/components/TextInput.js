import { useRef, useState } from "react"

export default function TextInput({
    placeholder, warningText
  }){
  const InputRef = useRef(null)
  const [inputText, setInputText] = useState('')
  const [inputRequired, setInputRequired] = useState(false)

  // make input data check function in context if form has it in (event)

  function blurHandle() {
    // check if conditions match
    if(inputText === '') {
      setInputRequired(true);
      setInputText(warningText ?? 'Обязательно к заполнению')
    }
  }

  function inputFocusHandle() {
    console.log('focused')
    if(inputRequired === true) setInputText('')
    setInputRequired(false)
  }

  return (
    <input
      type="text"
      placeholder={placeholder ?? 'Инпут'}
      data-required={inputRequired}
      ref={InputRef}
      value={inputText}
      onBlur={blurHandle}
      onChange={e => setInputText(e.target.value)}
      onFocus={inputFocusHandle}
    />
)
}