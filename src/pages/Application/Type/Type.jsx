import React from 'react'
import './Type.css'
import Button from '../../../components/component/buttnBg/Button'
import Buttonout from '../../../components/component/buttonoutline/Buttonout'
import Title from '../../../components/component/titleBig/Title'

function Type() {
    return (
        <div>
            <div>
                <div className='type1'>
                    <Buttonout button2="x" />
                </div>
                <div className='type2'>
                    <Title text="Xabaringizni yozing" />
                </div>
                <div className='type3'>
                    <input className='miniinp' type="text" placeholder='Text' />
                </div>
                <div className='type4'>
                    <div className='minitype1'>
                        <div className='ml1'>
                            <Buttonout button2="Yopish" />
                        </div>
                        <div>
                            <Button button="Yuborish" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Type
