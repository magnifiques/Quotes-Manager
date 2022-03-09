import React, { useEffect } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'


const QuoteDetails = () => {

  const params = useParams()
  const { quoteId } = params 
  
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true)
  
  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if(status === 'pending') {
    return <div className='centered'>
              <LoadingSpinner />
          </div>
  }

  if(status === 'error') {
    return <p className='centered'>{error}</p>
  }

  if(!loadedQuotes.text) {
    return <p>No Quotes Found</p>
  }

  

  return (
    <>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <div className='centered'>
        <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
        Load Comments
        </Link>
      </div>
      <Routes>
      <Route path='/comments' element={<Comments />}/>
      </Routes>
    </>
  )
}

export default QuoteDetails