import { useEffect, useRef, useState } from 'react'
import { getValidation } from '../../services/cohear.service'
import { responses } from './data'
import './Chat.scss'

export const Chat = () => {

  const [question, setQuestion] = useState('')

  const messagesArray = [ 
    {
      id:'1',
      type: 'bot',
      text: 'Hola soy un bot que puede responder algunas preguntas de Agustin.'
    },
    
  ]
  const [messages, setMessages] = useState(messagesArray)
  const[loading, setloading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    question.trim()
    if (loading || question === '' ) return
    setMessages((messasge) => messasge.concat( {id: String(Date.now()), type: 'agus', text: question}))
    setQuestion('')
    setloading(true)
    const classifications = await getValidation(question)
    setloading(false)
    setMessages((messasge) => messasge.concat( {id: String(Date.now()), type: 'bot', text: responses[classifications[0].prediction]}))
  }

  const box = useRef(null);

  useEffect(() => {
    box.current?.scrollTo(0, box.current.scrollHeight)
  }, [messages])
  

  return (
    <main  className='chat' >
      <div className='chat__wrap' ref={box}>
        {
          messages.map(({id, type, text}) => (
            <div key={id} className={`chat__${type === 'bot' ? 'bot' : 'agus'} chat__card `}>{text}</div>
          ))
        }
      </div>
      <form className='chat__form'  onSubmit={handleSubmit}>
          <input 
          placeholder='Quien sos?'
          className='chat__input'
          type="text" 
          name='question' 
          onChange={(event) => setQuestion(event.target.value)} 
          value={question}
          autoComplete='off'
          />
          <button className='chat__button' disabled={loading} type='submit'>↩</button>
        </form>
    </main  >
  )
}
