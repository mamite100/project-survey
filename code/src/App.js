import React, {useState} from 'react'

import Header from './components/Header'
import Select from './components/Select'
import RadioOptions from './components/RadioOptions'
import Name from './components/Name'
import SubmitButton from './components/SubmitButton'
import Summary from './components/Summary'


export const App = () => {

  const [name, setName] = useState('')
  const [quote, setQuote] = useState ('')
  const [doYouLikeLoganRoy, setDoYouLikeLoganRoy] = useState ('')
  const [submit, setSubmit] = useState (false)
}


/* 'wrapper covers the hole page*/
return (
  <div className='wrapper'>
  {submit ? 
  (
  <div className='summary'>
<Summary
  name={name}
  quote={quote}
  doYouLikeLoganRoy={doYouLikeLoganRoy}/>
</div>
  ) : (
<div className='container'>
<div className='inner-container'>
<Header/>
<Select
 quote={quote}
 setQuote={setQuote}
 />
</div>
<div className='inner-container'>
<RadioOptions
doYouLikeLoganRoy={doYouLikeLoganRoy}
setDoYouLikeLoganRoy ={setDoYouLikeLoganRoy}
/>
</div>
<div className='inner-container'>
<Name
name={name}
setName={setName}
/>
</div>
<div className='inner-container'>
<SubmitButton
submit={submit}
setSubmit={setSubmit}
/>

</div>
</div>
    )}

</div>
    )
}
