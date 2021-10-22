import React, {useStae} from 'react'

const RadioOptions = (props) => {
    const {doYouLikeLoganRoy, setDoYouLikeLoganRoy } = props
    const onDoYouLikeLoganRoy = (event) => {
        setDoYouLikeLoganRoy (event.target.value)
    } 
return(
<>
<p>Do you like Logan Roy, the founder of Waystar Royco</p>
<div>
    <label className='radioLabel' htmlFor='Yes'>Yes</label>
    <input type='radio' id='Yes' value='Yes' name='doYouLikeLoganRoy' onChange={onDoYouLikeLoganRoy}></input>
</div>
</>
)

}
export default RadioOptions